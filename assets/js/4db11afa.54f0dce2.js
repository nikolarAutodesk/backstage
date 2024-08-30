/*! For license information please see 4db11afa.54f0dce2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[633131],{395416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(785893),i=n(511151);const a={id:"v1.2.0",title:"v1.2.0",description:"Backstage Release v1.2.0"},r=void 0,o={id:"releases/v1.2.0",title:"v1.2.0",description:"Backstage Release v1.2.0",source:"@site/../docs/releases/v1.2.0.md",sourceDirName:"releases",slug:"/releases/v1.2.0",permalink:"/docs/releases/v1.2.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.2.0.md",tags:[],version:"current",frontMatter:{id:"v1.2.0",title:"v1.2.0",description:"Backstage Release v1.2.0"},sidebar:"releases",previous:{title:"v1.3.0",permalink:"/docs/releases/v1.3.0"},next:{title:"v1.1.0",permalink:"/docs/releases/v1.1.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"TechDocs",id:"techdocs",level:3},{value:"New plugin: ADR",id:"new-plugin-adr",level:3},{value:"New Plugin: CodeScene plugin",id:"new-plugin-codescene-plugin",level:3},{value:"New plugin: plugin-catalog-backend-module-gerrit",id:"new-plugin-plugin-catalog-backend-module-gerrit",level:3},{value:"Integrations",id:"integrations",level:3},{value:"Backend-common",id:"backend-common",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Misc",id:"misc",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["These are the release notes for the v1.2.0 release of ",(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,s.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(t.h3,{id:"techdocs",children:"TechDocs"}),"\n",(0,s.jsxs)(t.p,{children:["The TechDocs addon framework is now generally available! See the ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/addons",children:"TechDocs Addons"})," documentation for more information on how to customize your views."]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-adr",children:"New plugin: ADR"}),"\n",(0,s.jsxs)(t.p,{children:["The new ",(0,s.jsx)(t.code,{children:"@backstage/plugin-adr"})," lets you track your active ADRs inside Backstage! Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-codescene-plugin",children:"New Plugin: CodeScene plugin"}),"\n",(0,s.jsxs)(t.p,{children:["The CodeScene Backstage plugin exposes a page component that will list the existing projects and their analysis data on your CodeScene instance. Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/julioz",children:"@julio"})," ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10777",children:"#10777"})]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-plugin-catalog-backend-module-gerrit",children:"New plugin: plugin-catalog-backend-module-gerrit"}),"\n",(0,s.jsxs)(t.p,{children:["Gerrit integration is here! See docs on ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/integrations/gerrit/discovery",children:"gerrit discovery"})," and ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/integrations/gerrit/locations",children:"gerrit locations"})," for more information.\nContributed by ",(0,s.jsx)(t.a,{href:"https://github.com/anicke",children:"@anicke"})," ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10669",children:"#10669"})]}),"\n",(0,s.jsx)(t.h3,{id:"integrations",children:"Integrations"}),"\n",(0,s.jsxs)(t.p,{children:["Bitbucket Server and Bitbucket Cloud have been split up internally as the feature sets differ slightly, new scaffolder actions and integrations config has been added to accommodate a gradual migration. Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})]}),"\n",(0,s.jsx)(t.h3,{id:"backend-common",children:"Backend-common"}),"\n",(0,s.jsxs)(t.p,{children:["Server-to-server authentication tokens issued from a TokenManager (specifically, ServerTokenManager) now has an expiry time set, for one hour in the future from when issued. This improves security. The ability to pass in and validate tokens that either have a missing exp claim, or an exp claim that expired in the past, is now deprecated. Trying to do so will lead to logged warnings, and in a future release will instead lead to errors.\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11262",children:"#11262"})]}),"\n",(0,s.jsx)(t.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,s.jsxs)(t.p,{children:["Added support for ",(0,s.jsx)(t.code,{children:"oidc"})," as an auth provider for kubernetes authentication and added an optional ",(0,s.jsx)(t.code,{children:"oidcTokenProvider"})," config value. This will allow users to authenticate to kubernetes clusters using ID tokens obtained from the configured auth provider in their Backstage instance. Contributed by @dbravovmw(",(0,s.jsx)(t.a,{href:"https://github.com/dbravovmw",children:"https://github.com/dbravovmw"}),"). #11328(",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11328",children:"https://github.com/backstage/backstage/pull/11328"}),")"]}),"\n",(0,s.jsx)(t.h3,{id:"misc",children:"Misc"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"TaskScheduleDefinition"})," of the backend task scheduler has been updated to also accept an options object containing duration information in the form of days, hours, seconds and so on. This allows for scheduling without importing luxon. ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11245",children:"#11245"}),"\nAdded the ability to render a custom component when an entity is not found ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11047",children:"#11047"})]}),"\n",(0,s.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-rails"}),", please upgrade to the latest version if you are using this module."]}),"\n",(0,s.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,s.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,s.jsxs)(t.li,{children:["Backstage's ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.2.0-changelog.md",children:"Changelog"})}),"\n",(0,s.jsxs)(t.li,{children:["Backstage ",(0,s.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,s.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Sign up for our ",(0,s.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var s=n(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,a={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(667294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);