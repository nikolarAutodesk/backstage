/*! For license information please see 3ccfc81c.69b07f99.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[752765],{309427:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(785893),s=n(511151);const i={id:"core-app-api",title:"@backstage/core-app-api",description:"API Reference for @backstage/core-app-api"},c=void 0,a={id:"reference/core-app-api",title:"@backstage/core-app-api",description:"API Reference for @backstage/core-app-api",source:"@site/../docs/reference/core-app-api.md",sourceDirName:"reference",slug:"/reference/core-app-api",permalink:"/docs/reference/core-app-api",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.md",tags:[],version:"current",frontMatter:{id:"core-app-api",title:"@backstage/core-app-api",description:"API Reference for @backstage/core-app-api"}},o={},d=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-app-api"})})]}),"\n",(0,t.jsx)(r.p,{children:"Core app API used by Backstage apps"}),"\n",(0,t.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Class"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.alertapiforwarder",children:"AlertApiForwarder"})}),(0,t.jsx)(r.td,{children:"Base implementation for the AlertApi that simply forwards alerts to consumers."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry",children:"ApiFactoryRegistry"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"ApiFactoryRegistry is an ApiFactoryHolder implementation that enables registration of API Factories with different scope."}),(0,t.jsx)(r.p,{children:"Each scope has an assigned priority, where factories registered with higher priority scopes override ones with lower priority."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.apiresolver",children:"ApiResolver"})}),(0,t.jsxs)(r.td,{children:["Handles the actual on-demand instantiation and memoization of APIs out of an ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryholder",children:"ApiFactoryHolder"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appthemeselector",children:"AppThemeSelector"})}),(0,t.jsx)(r.td,{children:"Exposes the themes installed in the app, and permits switching the currently active theme."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.atlassianauth",children:"AtlassianAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to Atlassian products."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.bitbucketauth",children:"BitbucketAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to Bitbucket products."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.bitbucketserverauth",children:"BitbucketServerAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to Bitbucket Server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.erroralerter",children:"ErrorAlerter"})}),(0,t.jsx)(r.td,{children:"Decorates an ErrorApi by also forwarding error messages to the alertApi with an 'error' severity."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.errorapiforwarder",children:"ErrorApiForwarder"})}),(0,t.jsx)(r.td,{children:"Base implementation for the ErrorApi that simply forwards errors to consumers."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.fetchmiddlewares",children:"FetchMiddlewares"})}),(0,t.jsx)(r.td,{children:"A collection of common middlewares for the FetchApi."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.frontendhostdiscovery",children:"FrontendHostDiscovery"})}),(0,t.jsx)(r.td,{children:"FrontendHostDiscovery is a config driven DiscoveryApi implementation. It uses the app-config to determine the url for a plugin."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.githubauth",children:"GithubAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to GitHub products."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.gitlabauth",children:"GitlabAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to GitLab products."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.googleauth",children:"GoogleAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to Google products."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.localstoragefeatureflags",children:"LocalStorageFeatureFlags"})}),(0,t.jsx)(r.td,{children:"A feature flags implementation that stores the flags in the browser's local storage."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.microsoftauth",children:"MicrosoftAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to Microsoft products."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.multipleanalyticsapi",children:"MultipleAnalyticsApi"})}),(0,t.jsx)(r.td,{children:"An implementation of the AnalyticsApi that can be used to forward analytics events to multiple concrete implementations."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.noopanalyticsapi",children:"NoOpAnalyticsApi"})}),(0,t.jsx)(r.td,{children:"Base implementation for the AnalyticsApi that does nothing."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oauth2",children:"OAuth2"})}),(0,t.jsx)(r.td,{children:"Implements a generic OAuth2 flow for auth."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oauthrequestmanager",children:"OAuthRequestManager"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"The OAuthRequestManager is an implementation of the OAuthRequestApi."}),(0,t.jsx)(r.p,{children:"The purpose of this class and the API is to read a stream of incoming requests of OAuth access tokens from different providers with varying scope, and funnel them all together into a single request for each OAuth provider."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oktaauth",children:"OktaAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow to Okta products."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oneloginauth",children:"OneLoginAuth"})}),(0,t.jsx)(r.td,{children:"Implements a OneLogin OAuth flow."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.samlauth",children:"SamlAuth"})}),(0,t.jsx)(r.td,{children:"Implements a general SAML based auth flow."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.unhandlederrorforwarder",children:"UnhandledErrorForwarder"})}),(0,t.jsx)(r.td,{children:"Utility class that helps with error forwarding."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.urlpatterndiscovery",children:"UrlPatternDiscovery"})}),(0,t.jsx)(r.td,{children:"UrlPatternDiscovery is a lightweight DiscoveryApi implementation. It uses a single template string to construct URLs for each plugin."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.vmwarecloudauth",children:"VMwareCloudAuth"})}),(0,t.jsx)(r.td,{children:"Implements the OAuth flow for VMware Cloud Services"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.webstorage",children:"WebStorage"})}),(0,t.jsx)(r.td,{children:"An implementation of the storage API, that uses the browser's local storage."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.approuter",children:"AppRouter(props)"})}),(0,t.jsx)(r.td,{children:"App router and sign-in page wrapper."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.createfetchapi",children:"createFetchApi(options)"})}),(0,t.jsx)(r.td,{children:"Builds a fetch API, based on the builtin fetch wrapped by a set of optional middleware implementations that add behaviors."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:"createSpecializedApp(options)"})}),(0,t.jsx)(r.td,{children:"Creates a new Backstage App where the full set of options are required."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.flatroutes",children:"FlatRoutes(props)"})}),(0,t.jsx)(r.td,{children:"A wrapper around a set of routes."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Interface"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.approuterprops",children:"AppRouterProps"})}),(0,t.jsxs)(r.td,{children:["Props for the ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.approuter",children:"AppRouter()"})," component."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.fetchmiddleware",children:"FetchMiddleware"})}),(0,t.jsx)(r.td,{children:"A middleware that modifies the behavior of an ongoing fetch."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.apiprovider",children:"ApiProvider"})}),(0,t.jsxs)(r.td,{children:["Provides an ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apiholder",children:"ApiHolder"})," for consumption in the React tree."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.defaultconfigloader",children:"defaultConfigLoader"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.p,{children:["The default config loader, which expects that config is available at compile-time in ",(0,t.jsx)(r.code,{children:"process.env.APP_CONFIG"}),". APP_CONFIG should be an array of config objects as returned by the config loader."]}),(0,t.jsx)(r.p,{children:"It will also load runtime config from the __APP_INJECTED_RUNTIME_CONFIG__ string, which can be rewritten at runtime to contain an additional JSON config object. If runtime config is present, it will be placed first in the config array, overriding other config values."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.featureflagged",children:"FeatureFlagged"})}),(0,t.jsx)(r.td,{children:"Enables or disables rendering of its children based on the state of a given feature flag."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryholder",children:"ApiFactoryHolder"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryscope",children:"ApiFactoryScope"})}),(0,t.jsx)(r.td,{children:"Scope type when registering API factories."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.apiproviderprops",children:"ApiProviderProps"})}),(0,t.jsx)(r.td,{children:"Prop types for the ApiProvider component."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"})}),(0,t.jsx)(r.td,{children:"A set of replaceable core components that are part of every Backstage app."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appconfigloader",children:"AppConfigLoader"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"A function that loads in the App config that will be accessible via the ConfigApi."}),(0,t.jsx)(r.p,{children:"If multiple config objects are returned in the array, values in the earlier configs will override later ones."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appcontext",children:"AppContext"})}),(0,t.jsx)(r.td,{children:"The central context providing runtime app specific state that plugin views want to consume."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appicons",children:"AppIcons"})}),(0,t.jsx)(r.td,{children:"A set of well-known icons that should be available within an app."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appoptions",children:"AppOptions"})}),(0,t.jsxs)(r.td,{children:["The options accepted by ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:"createSpecializedApp()"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.approutebinder",children:"AppRouteBinder"})}),(0,t.jsxs)(r.td,{children:["A function that can bind from external routes of a given plugin, to concrete routes of other plugins. See ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:"createSpecializedApp()"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.authapicreateoptions",children:"AuthApiCreateOptions"})}),(0,t.jsx)(r.td,{children:"Generic create options for auth APIs."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.backstageapp",children:"BackstageApp"})}),(0,t.jsxs)(r.td,{children:["The public API of the output of ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:"createSpecializedApp()"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.bitbucketserversession",children:"BitbucketServerSession"})}),(0,t.jsx)(r.td,{children:"Session information for Bitbucket Server auth."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.bitbucketsession",children:"BitbucketSession"})}),(0,t.jsx)(r.td,{children:"Session information for Bitbucket auth."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.booterrorpageprops",children:"BootErrorPageProps"})}),(0,t.jsxs)(r.td,{children:["Props for the ",(0,t.jsx)(r.code,{children:"BootErrorPage"})," component of ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.errorboundaryfallbackprops",children:"ErrorBoundaryFallbackProps"})}),(0,t.jsx)(r.td,{children:"Props for the fallback error boundary."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.featureflaggedprops",children:"FeatureFlaggedProps"})}),(0,t.jsxs)(r.td,{children:["Props for the ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.featureflagged",children:"FeatureFlagged"})," component."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.flatroutesprops",children:"FlatRoutesProps"})}),(0,t.jsxs)(r.td,{children:["Props for the ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.flatroutes",children:"FlatRoutes()"})," component."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oauth2createoptions",children:"OAuth2CreateOptions"})}),(0,t.jsx)(r.td,{children:"OAuth2 create options."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oauth2session",children:"OAuth2Session"})}),(0,t.jsx)(r.td,{children:"Session information for generic OAuth2 auth."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oauthapicreateoptions",children:"OAuthApiCreateOptions"})}),(0,t.jsx)(r.td,{children:"Create options for OAuth APIs."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.oneloginauthcreateoptions",children:"OneLoginAuthCreateOptions"})}),(0,t.jsx)(r.td,{children:"OneLogin auth provider create options."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.popupoptions",children:"PopupOptions"})}),(0,t.jsx)(r.td,{children:"Options for login popup"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.signinpageprops",children:"SignInPageProps"})}),(0,t.jsxs)(r.td,{children:["Props for the ",(0,t.jsx)(r.code,{children:"SignInPage"})," component of ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,p=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:p,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var t=n(667294);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);