/*
 * Copyright 2023 The Backstage Authors
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

import { DiscoveryApi, IdentityApi } from '@backstage/core-plugin-api';
import WS from 'jest-websocket-mock';
import { SignalsClient } from './SignalsClient';

describe('SignalsClient', () => {
  const tokenFunction = jest.fn();
  const baseUrlFunction = jest.fn();
  const identity = {
    getCredentials: tokenFunction,
  } as unknown as IdentityApi;
  const discoveryApi = {
    getBaseUrl: baseUrlFunction,
  } as unknown as DiscoveryApi;

  let server: WS;

  beforeEach(async () => {
    jest.resetAllMocks();
    tokenFunction.mockResolvedValue({ token: '12345' });
    baseUrlFunction.mockResolvedValue('http://localhost:1234');
    server = new WS('ws://localhost:1234', { jsonProtocol: true });
  });

  afterEach(() => {
    WS.clean();
  });

  it('should handle single subscription correctly', async () => {
    const messageMock = jest.fn();
    const client = SignalsClient.create({ discoveryApi, identity });
    const sub = client.subscribe('topic', messageMock);
    await server.connected;

    await expect(server).toReceiveMessage({
      action: 'subscribe',
      topic: 'topic',
    });
    server.send({ topic: 'topic', message: { hello: 'world' } });
    expect(messageMock).toHaveBeenCalledWith({ hello: 'world' });

    client.unsubscribe(sub);
    await expect(server).toReceiveMessage({
      action: 'unsubscribe',
      topic: 'topic',
    });
  });

  it('should handle multiple subscription correctly', async () => {
    const messageMock1 = jest.fn();
    const messageMock2 = jest.fn();
    const client1 = SignalsClient.create({ discoveryApi, identity });
    const client2 = SignalsClient.create({ discoveryApi, identity });
    const sub1 = client1.subscribe('topic', messageMock1);
    const sub2 = client2.subscribe('topic', messageMock2);

    await server.connected;

    await expect(server).toReceiveMessage({
      action: 'subscribe',
      topic: 'topic',
    });
    server.send({ topic: 'topic', message: { hello: 'world' } });
    expect(messageMock1).toHaveBeenCalledWith({ hello: 'world' });
    expect(messageMock2).toHaveBeenCalledWith({ hello: 'world' });

    client1.unsubscribe(sub1);
    await expect(server).not.toReceiveMessage({
      action: 'unsubscribe',
      topic: 'topic',
    });

    client2.unsubscribe(sub2);
    await expect(server).toReceiveMessage({
      action: 'unsubscribe',
      topic: 'topic',
    });
  });

  it('should reconnect on error', async () => {
    const messageMock = jest.fn();
    const client = SignalsClient.create({
      discoveryApi,
      identity,
      reconnectTimeout: 10,
      connectTimeout: 100,
    });

    client.subscribe('topic', messageMock);
    await server.connected;
    await expect(server).toReceiveMessage({
      action: 'subscribe',
      topic: 'topic',
    });

    await server.server.emit('error', null);

    await new Promise(r => setTimeout(r, 50));
    await expect(server).toReceiveMessage({
      action: 'subscribe',
      topic: 'topic',
    });
  });
});
