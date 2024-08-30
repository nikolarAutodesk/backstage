/*! For license information please see 3d59cae9.e9600c2d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[142136],{930658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var r=n(785893),s=n(511151);const c={id:"plugin-scaffolder-common.taskspecv1beta3",title:"TaskSpecV1beta3",description:"API reference for TaskSpecV1beta3"},a=void 0,o={id:"reference/plugin-scaffolder-common.taskspecv1beta3",title:"TaskSpecV1beta3",description:"API reference for TaskSpecV1beta3",source:"@site/../docs/reference/plugin-scaffolder-common.taskspecv1beta3.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-common.taskspecv1beta3",permalink:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-common.taskspecv1beta3.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-common.taskspecv1beta3",title:"TaskSpecV1beta3",description:"API reference for TaskSpecV1beta3"}},d={},i=[{value:"Properties",id:"properties",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-common"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3",children:(0,r.jsx)(t.code,{children:"TaskSpecV1beta3"})})]}),"\n",(0,r.jsx)(t.p,{children:"A scaffolder task as stored in the database, generated from a v1beta3 apiVersion Template."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface TaskSpecV1beta3 \n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3.apiversion",children:"apiVersion"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'scaffolder.backstage.io/v1beta3'"}),(0,r.jsx)(t.td,{children:"The apiVersion string of the TaskSpec."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3.experimental_recovery",children:"EXPERIMENTAL_recovery?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskrecovery",children:"TaskRecovery"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," How to recover the task after system restart or system crash."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3.output",children:"output"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["{ [name: string]: ",(0,r.jsx)(t.a,{href:"/docs/reference/types.jsonvalue",children:"JsonValue"}),"; }"]}),(0,r.jsx)(t.td,{children:"The output is an object where template authors can pull out information from template actions and return them in a known standard way."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3.parameters",children:"parameters"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"})}),(0,r.jsxs)(t.td,{children:["This is a JSONSchema which is used to render a form in the frontend to collect user input and validate it against that schema. This can then be used in the ",(0,r.jsx)(t.code,{children:"steps"})," part below to template variables passed from the user into each action in the template."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3.steps",children:"steps"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskstep",children:"TaskStep"}),"[]"]}),(0,r.jsx)(t.td,{children:"A list of steps to be executed in sequence which are defined by the template. These steps are a list of the underlying javascript action and some optional input parameters that may or may not have been collected from the end user."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3.templateinfo",children:"templateInfo?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.templateinfo",children:"TemplateInfo"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Some information about the template that is stored on the task spec."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3.user",children:"user?"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["{ entity?: ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.userentityv1alpha1",children:"UserEntity"}),"; ref?: string; }"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Some decoration of the author of the task that should be available in the context"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,c={},i=null,l=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:l,props:c,_owner:o.current}}t.Fragment=c,t.jsx=i,t.jsxs=i},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(667294);const s={},c=r.createContext(s);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);