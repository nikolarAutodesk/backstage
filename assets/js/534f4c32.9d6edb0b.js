/*! For license information please see 534f4c32.9d6edb0b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[440423],{588731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(785893),i=r(511151);const c={id:"integration.getbitbucketserverfilefetchurl",title:"getBitbucketServerFileFetchUrl()",description:"API reference for getBitbucketServerFileFetchUrl()"},s=void 0,o={id:"reference/integration.getbitbucketserverfilefetchurl",title:"getBitbucketServerFileFetchUrl()",description:"API reference for getBitbucketServerFileFetchUrl()",source:"@site/../docs/reference/integration.getbitbucketserverfilefetchurl.md",sourceDirName:"reference",slug:"/reference/integration.getbitbucketserverfilefetchurl",permalink:"/docs/reference/integration.getbitbucketserverfilefetchurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.getbitbucketserverfilefetchurl.md",tags:[],version:"current",frontMatter:{id:"integration.getbitbucketserverfilefetchurl",title:"getBitbucketServerFileFetchUrl()",description:"API reference for getBitbucketServerFileFetchUrl()"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.getbitbucketserverfilefetchurl",children:(0,n.jsx)(t.code,{children:"getBitbucketServerFileFetchUrl"})})]}),"\n",(0,n.jsx)(t.p,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function getBitbucketServerFileFetchUrl(url: string, config: BitbucketServerIntegrationConfig): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A URL pointing to a file"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration.bitbucketserverintegrationconfig",children:"BitbucketServerIntegrationConfig"})}),(0,n.jsx)(t.td,{children:"The relevant provider config"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"string"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Converts from: ",(0,n.jsx)(t.a,{href:"https://bitbucket.company.com/projectname/reponame/src/main/file.yaml",children:"https://bitbucket.company.com/projectname/reponame/src/main/file.yaml"})," to: ",(0,n.jsx)(t.a,{href:"https://bitbucket.company.com/rest/api/1.0/project/projectname/reponame/raw/file.yaml?at=main",children:"https://bitbucket.company.com/rest/api/1.0/project/projectname/reponame/raw/file.yaml?at=main"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,c={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:c,_owner:o.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(667294);const i={},c=n.createContext(i);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);