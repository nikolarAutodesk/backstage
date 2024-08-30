/*! For license information please see 8d9e5f72.fc9de5ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[997621],{656131:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=r(785893),a=r(511151);const c={id:"backend-plugin-api.backstagecredentials",title:"BackstageCredentials",description:"API reference for BackstageCredentials"},s=void 0,i={id:"reference/backend-plugin-api.backstagecredentials",title:"BackstageCredentials",description:"API reference for BackstageCredentials",source:"@site/../docs/reference/backend-plugin-api.backstagecredentials.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backstagecredentials",permalink:"/docs/reference/backend-plugin-api.backstagecredentials",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.backstagecredentials.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.backstagecredentials",title:"BackstageCredentials",description:"API reference for BackstageCredentials"}},o={},d=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstagecredentials",children:(0,t.jsx)(n.code,{children:"BackstageCredentials"})})]}),"\n",(0,t.jsx)(n.p,{children:"An opaque representation of credentials, for example as passed in a request-response flow."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type BackstageCredentials<TPrincipal = unknown> = {\n    $$type: '@backstage/BackstageCredentials';\n    expiresAt?: Date;\n    principal: TPrincipal;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,c={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!o.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:a,type:e,key:d,ref:l,props:c,_owner:i.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(667294);const a={},c=t.createContext(a);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);