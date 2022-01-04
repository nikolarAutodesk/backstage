/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  BackstageUserIdentity,
  discoveryApiRef,
  fetchApiRef,
  IdentityApi,
  ProfileInfo,
} from '@backstage/core-plugin-api';
import { ResponseError } from '@backstage/errors';
import { DelegatedSession, delegatedSessionSchema } from './types';

export const DEFAULTS = {
  // The amount of time between token refreshes, if we fail to get an actual
  // value out of the exp claim
  defaultTokenExpiryMillis: 60_000,
  // The amount of time before the actual expiry of the Backstage token, that we
  // shall start trying to get a new one
  tokenExpiryMarginMillis: 30_000,
} as const;

// When the token expires, with some margin
export function tokenToExpiry(jwtToken: string | undefined): Date {
  if (!jwtToken) {
    return new Date(Date.now() + DEFAULTS.defaultTokenExpiryMillis);
  }

  const [_header, rawPayload, _signature] = jwtToken.split('.');
  const payload = JSON.parse(atob(rawPayload));

  return new Date(payload.exp * 1000 - DEFAULTS.tokenExpiryMarginMillis);
}

type DelegatedSignInIdentityOptions = {
  provider: string;
  discoveryApi: typeof discoveryApiRef.T;
  fetchApi: typeof fetchApiRef.T;
};

type State =
  | {
      type: 'empty';
    }
  | {
      type: 'fetching';
      promise: Promise<DelegatedSession>;
      previous: DelegatedSession | undefined;
    }
  | {
      type: 'active';
      session: DelegatedSession;
      expiresAt: Date;
    }
  | {
      type: 'failed';
      error: Error;
    };

/**
 * An identity API that gets the user auth information solely based on a
 * provider's `/refresh` endpoint.
 */
export class DelegatedSignInIdentity implements IdentityApi {
  private readonly options: DelegatedSignInIdentityOptions;
  private readonly abortController: AbortController;
  private state: State;

  constructor(options: DelegatedSignInIdentityOptions) {
    this.options = options;
    this.abortController = new AbortController();
    this.state = { type: 'empty' };
  }

  async start() {
    // Try to make a first fetch, bubble up any errors to the caller
    await this.getSessionAsync();
  }

  /** {@inheritdoc @backstage/core-plugin-api#IdentityApi.getUserId} */
  getUserId(): string {
    const session = this.getSessionSync();
    return session.backstageIdentity.id;
  }

  /** {@inheritdoc @backstage/core-plugin-api#IdentityApi.getIdToken} */
  async getIdToken(): Promise<string | undefined> {
    const session = await this.getSessionAsync();
    return session.backstageIdentity.token;
  }

  /** {@inheritdoc @backstage/core-plugin-api#IdentityApi.getProfile} */
  getProfile(): ProfileInfo {
    const session = this.getSessionSync();
    return session.profile;
  }

  /** {@inheritdoc @backstage/core-plugin-api#IdentityApi.getProfileInfo} */
  async getProfileInfo(): Promise<ProfileInfo> {
    const session = await this.getSessionAsync();
    return session.profile;
  }

  /** {@inheritdoc @backstage/core-plugin-api#IdentityApi.getBackstageIdentity} */
  async getBackstageIdentity(): Promise<BackstageUserIdentity> {
    const session = await this.getSessionAsync();
    return session.backstageIdentity.identity;
  }

  /** {@inheritdoc @backstage/core-plugin-api#IdentityApi.getCredentials} */
  async getCredentials(): Promise<{ token?: string | undefined }> {
    const session = await this.getSessionAsync();
    return {
      token: session.backstageIdentity.token,
    };
  }

  /** {@inheritdoc @backstage/core-plugin-api#IdentityApi.signOut} */
  async signOut(): Promise<void> {
    this.abortController.abort();
  }

  getSessionSync(): DelegatedSession {
    if (this.state.type === 'active') {
      return this.state.session;
    } else if (this.state.type === 'fetching' && this.state.previous) {
      return this.state.previous;
    }
    throw new Error('No session available. Try reloading your browser page.');
  }

  async getSessionAsync(): Promise<DelegatedSession> {
    if (this.state.type === 'fetching') {
      return this.state.promise;
    } else if (
      this.state.type === 'active' &&
      new Date() < this.state.expiresAt
    ) {
      return this.state.session;
    }

    const previous =
      this.state.type === 'active' ? this.state.session : undefined;

    const promise = this.fetchSession().then(
      session => {
        this.state = {
          type: 'active',
          session,
          expiresAt: tokenToExpiry(session.backstageIdentity.token),
        };
        return session;
      },
      error => {
        this.state = {
          type: 'failed',
          error,
        };
        throw error;
      },
    );

    this.state = {
      type: 'fetching',
      promise,
      previous,
    };

    return promise;
  }

  async fetchSession(): Promise<DelegatedSession> {
    const baseUrl = await this.options.discoveryApi.getBaseUrl('auth');

    const response = await this.options.fetchApi.fetch(
      `${baseUrl}/${this.options.provider}/refresh`,
      {
        signal: this.abortController.signal,
        headers: { 'x-requested-with': 'XMLHttpRequest' },
        credentials: 'include',
      },
    );

    if (!response.ok) {
      throw await ResponseError.fromResponse(response);
    }

    return delegatedSessionSchema.parse(await response.json());
  }
}
