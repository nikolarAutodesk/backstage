/*! For license information please see dfa12947.dbefa720.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[26058],{693417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(785893),i=t(511151);const r={id:"built-in-extensions",title:"App Built-in Extensions",sidebar_label:"Built-in extensions",description:"Configuring or overriding built-in extensions"},l=void 0,d={id:"frontend-system/building-apps/built-in-extensions",title:"App Built-in Extensions",description:"Configuring or overriding built-in extensions",source:"@site/../docs/frontend-system/building-apps/03-built-in-extensions.md",sourceDirName:"frontend-system/building-apps",slug:"/frontend-system/building-apps/built-in-extensions",permalink:"/docs/frontend-system/building-apps/built-in-extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/building-apps/03-built-in-extensions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"built-in-extensions",title:"App Built-in Extensions",sidebar_label:"Built-in extensions",description:"Configuring or overriding built-in extensions"},sidebar:"docs",previous:{title:"Configuring Extensions",permalink:"/docs/frontend-system/building-apps/configuring-extensions"},next:{title:"Converting 3rd-party Plugins",permalink:"/docs/frontend-system/building-apps/plugin-conversion"}},c={},o=[{value:"Disable built-in extensions",id:"disable-built-in-extensions",level:2},{value:"Override built-in extensions",id:"override-built-in-extensions",level:2},{value:"Default built-in extensions",id:"default-built-in-extensions",level:2},{value:"App",id:"app",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Default theme extensions",id:"default-theme-extensions",level:4},{value:"Default components extensions",id:"default-components-extensions",level:4},{value:"Default apis extensions",id:"default-apis-extensions",level:4},{value:"App root",id:"app-root",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Default app root elements extensions",id:"default-app-root-elements-extensions",level:4},{value:"Alert Display",id:"alert-display",level:5},{value:"Configurations",id:"configurations",level:6},{value:"Override or disable the extension",id:"override-or-disable-the-extension",level:6},{value:"OAuth Request Dialog",id:"oauth-request-dialog",level:5},{value:"App layout",id:"app-layout",level:3},{value:"Inputs",id:"inputs-2",level:4},{value:"App nav",id:"app-nav",level:3},{value:"Inputs",id:"inputs-3",level:4},{value:"App routes",id:"app-routes",level:3},{value:"Caveats",id:"caveats",level:4},{value:"Inputs",id:"inputs-4",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Built-in extensions are default app extensions that are always installed when you create a Backstage app."}),"\n",(0,s.jsx)(n.h2,{id:"disable-built-in-extensions",children:"Disable built-in extensions"}),"\n",(0,s.jsx)(n.p,{children:"All built-in extensions can be disabled in the same way as you disable any other extension:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"extensions:\n  # Disabling the built-in app root alert element\n  - app-root-element:app/alert-display: false\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:['Be careful when disabling built-in extensions, as there may be other extensions depending on their existence. For example, the built-in "alert display" extension displays messages retrieved via ',(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/core-plugin-api.alertapi",children:"AlertApi"})," and disabling this extension will cause the application to no longer display these messages unless you install another extension that displays messages from ",(0,s.jsx)(n.code,{children:"AlertApi"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"override-built-in-extensions",children:"Override built-in extensions"}),"\n",(0,s.jsxs)(n.p,{children:["You can override any built-in extension whenever their customizations, whether through configuration or input, do not meet a use case for your Backstage instance. Check out ",(0,s.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"this"})," documentation on how to override application extensions."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Be aware there could be some implementation requirements to properly override an built-in extension, such as using same apis and do not remove inputs or configurations otherwise you can cause a side effect in other parts of the system that expects same minimal behavior."})}),"\n",(0,s.jsx)(n.h2,{id:"default-built-in-extensions",children:"Default built-in extensions"}),"\n",(0,s.jsx)(n.h3,{id:"app",children:"App"}),"\n",(0,s.jsx)(n.p,{children:"This extension is the first extension attached to the extension tree. It is responsible for receiving the application's root element and other Frontend framework inputs."}),"\n",(0,s.jsx)(n.h4,{id:"inputs",children:"Inputs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Extension creator"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"root"}),(0,s.jsx)(n.td,{children:"The app root element."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.coreextensiondata",children:"coreExtensionData.reactElement"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"#app-root",children:(0,s.jsx)(n.code,{children:"App/Root"})})," extension output."]}),(0,s.jsxs)(n.td,{children:["No creator available, configure or override the ",(0,s.jsx)(n.a,{href:"#app-root",children:(0,s.jsx)(n.code,{children:"App/Root"})})," extension."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"apis"}),(0,s.jsx)(n.td,{children:"The app apis factories."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createapiextension.factorydataref",children:"createApiExtension.factoryDataRef"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.a,{href:"#default-apis-extensions",children:"default apis"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createapiextension",children:"createApiExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"themes"}),(0,s.jsx)(n.td,{children:"The app themes list."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createthemeextension.themedataref",children:"createThemeExtension.themeDataRef"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.a,{href:"#default-theme-extensions",children:"default themes"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createthemeextension",children:"createThemeExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components"}),(0,s.jsx)(n.td,{children:"The app components list."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createcomponentextension.componentdataref",children:"createComponentExtension.componentDataRef"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.a,{href:"#default-components-extensions",children:"default components"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createcomponentextension",children:"createComponentExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"translations"}),(0,s.jsx)(n.td,{children:"The app translations list."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createtranslationextension.translationdataref",children:"createTranslationExtension.translationDataRef"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createtranslationextension",children:"createTranslationExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"icons"}),(0,s.jsx)(n.td,{children:"The app icons list."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.iconbundleblueprint.dataRefs.icons",children:"IconBundleBlueprint.dataRefs.icons"})}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.iconbundleblueprint",children:"IconBundleBlueprint"})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"default-theme-extensions",children:"Default theme extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Extensions that provides default theme inputs for the ",(0,s.jsx)(n.code,{children:"App"})," extension."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"theme"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"light"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"theme:app/light"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"theme"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"dark"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"theme:app/dark"})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"default-components-extensions",children:"Default components extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Extensions that provides default components inputs for the ",(0,s.jsx)(n.code,{children:"App"})," extension."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"components"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.components.progress"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"components:app/core.components.progress"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"components"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.components.notFoundErrorPage"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"components:app/core.components.notFoundErrorPage"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"components"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.components.errorBoundaryFallback"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"components:app/core.components.errorBoundaryFallback"})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"default-apis-extensions",children:"Default apis extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Extensions that provides default apis inputs for the ",(0,s.jsx)(n.code,{children:"App"})," extension."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.discovery"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.discovery"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.alert"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.alert"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.analytics"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.analytics"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.error"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.error"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.storage"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.storage"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.fetch"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.fetch"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.oauthrequest"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.oauthrequest"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.google"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.google"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.microsoft"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.microsoft"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.github"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.github"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.okta"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.okta"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.gitlab"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.gitlab"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.onelogin"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.onelogin"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.bitbucket"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.bitbucket"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.bitbucket-server"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.bitbucket-server"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"core.auth.atlassian"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:core.auth.atlassian"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"plugin.permission.api"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"api:plugin.permission.api"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"app-root",children:"App root"}),"\n",(0,s.jsx)(n.p,{children:"This is the extension that creates the app root element, so it renders root level components such as app router and layout."}),"\n",(0,s.jsx)(n.h4,{id:"inputs-1",children:"Inputs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Requirements"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Extension creator"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"router"}),(0,s.jsx)(n.td,{children:"A React component that should manager the app routes context."}),(0,s.jsxs)(n.td,{children:["It must be one ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/routers/picking-a-router#web-projects",children:"router"})," component or a custom component compatible with the 'react-router' library."]}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/router-components/browser-router",children:"BrowserRouter"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createrouterextension",children:"createRouterExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"signInPage"}),(0,s.jsx)(n.td,{children:"A React component that should render the app sign-in page."}),(0,s.jsxs)(n.td,{children:["Should call the ",(0,s.jsx)(n.code,{children:"onSignInSuccess"})," prop when the user has been successfully authorized, otherwise the user will not be correctly redirected to the application home page."]}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsxs)(n.td,{children:["The default ",(0,s.jsx)(n.code,{children:"AppRoot"})," extension does not use a default component for this input, it bypasses the user authentication check and always renders all routes when a login page is not installed."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createsigninpageextension/",children:"createSignInPageExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"children"}),(0,s.jsx)(n.td,{children:"A React component that renders the app sidebar and main content in a particular layout."}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"#app-layout",children:(0,s.jsx)(n.code,{children:"App/Layout"})})," extension output."]}),(0,s.jsxs)(n.td,{children:["No creator available, configure or override the ",(0,s.jsx)(n.a,{href:"#app-layout",children:(0,s.jsx)(n.code,{children:"App/Layout"})})," extension."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elements"}),(0,s.jsx)(n.td,{children:"React elements to be rendered outside of the app layout, such as shared popups."}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.a,{href:"#default-app-root-elements-extensions",children:"default elements"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createapprootelementextension/",children:"createAppRootElementExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wrappers"}),(0,s.jsx)(n.td,{children:"React components that should wrap the root element."}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createapprootwrapperextension/",children:"createAppRootWrapperExtension"})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"default-app-root-elements-extensions",children:"Default app root elements extensions"}),"\n",(0,s.jsx)(n.h5,{id:"alert-display",children:"Alert Display"}),"\n",(0,s.jsxs)(n.p,{children:["An app root element extension that displays messages posted via the ",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/core-plugin-api.alertapi",children:(0,s.jsx)(n.code,{children:"AlertApi"})}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app-root-element"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"alert-display"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"app-root-element:app/alert-display"})})]})})]}),"\n",(0,s.jsx)(n.h6,{id:"configurations",children:"Configurations"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"transientTimeoutMs"})}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"5000"}),(0,s.jsx)(n.td,{children:"Time in milliseconds to wait before displaying messages."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"anchorOrigin"})}),(0,s.jsx)(n.td,{children:"{ vertical: 'top' | 'bottom', horizontal: 'left' | 'center' | 'right' }"}),(0,s.jsx)(n.td,{children:"{ vertical: 'top', horizontal: 'center' }"}),(0,s.jsx)(n.td,{children:"Position on the screen where the message alert will be displayed."})]})]})]}),"\n",(0,s.jsx)(n.h6,{id:"override-or-disable-the-extension",children:"Override or disable the extension"}),"\n",(0,s.jsx)(n.p,{children:"If you do not want to display alerts, disable this extension or if the available settings do not meet your needs, override this extension."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:['The built-in "alert display" extension displays messages retrieved via ',(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/core-plugin-api.alertapi",children:"AlertApi"})," and disabling this extension will cause the application to no longer display these messages unless you install another extension that displays messages from ",(0,s.jsx)(n.code,{children:"AlertApi"}),"."]})}),"\n",(0,s.jsx)(n.h5,{id:"oauth-request-dialog",children:"OAuth Request Dialog"}),"\n",(0,s.jsxs)(n.p,{children:["An app root element extension that renders the oauth request dialog, it is based on the ",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/core-plugin-api.oauthrequestapi/",children:"oauthRequestApi"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app-root-element"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"oauth-request-dialog"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"app-root-element:app/oauth-request-dialog"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"app-layout",children:"App layout"}),"\n",(0,s.jsx)(n.p,{children:"Renders the app's sidebar and content in a specific layout."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"layout"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"app/layout"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"inputs-2",children:"Inputs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Extension creator"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nav"}),(0,s.jsx)(n.td,{children:"A React element that renders the app sidebar."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.coreextensiondata",children:"coreExtensionData.reactElement"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsxs)(n.td,{children:["Override the ",(0,s.jsx)(n.code,{children:"App/Nav"})," extension."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"content"}),(0,s.jsx)(n.td,{children:"A React element that renders the app content."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.coreextensiondata",children:"coreExtensionData.reactElement"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsxs)(n.td,{children:["Override the ",(0,s.jsx)(n.code,{children:"App/Routes"})," extension."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"app-nav",children:"App nav"}),"\n",(0,s.jsx)(n.p,{children:"Extension responsible for rendering the logo and items in the app's sidebar."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"nav"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"app/nav"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"inputs-3",children:"Inputs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Extension creator"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"logos"}),(0,s.jsx)(n.td,{children:"A nav logos object."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createnavlogoextension.logoelementsdataref",children:"createNavLogoExtension.logoElementsDataRef"})}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createnavlogoextension",children:"createNavLogoExtension"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"items"}),(0,s.jsx)(n.td,{children:"Nav items target objects."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createnavitemextension.targetdataref",children:"createNavItemExtension.targetDataRef"})}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createnavitemextension",children:"createNavItemExtension"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"app-routes",children:"App routes"}),"\n",(0,s.jsxs)(n.p,{children:["Renders a route element for each route received as input and a ",(0,s.jsx)(n.code,{children:"NotFoundErrorPage"})," component."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"kind"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"namespace"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"routes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"app/routes"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsx)(n.p,{children:"Be careful when overriding this extension, as to do so correctly you must consider these implementation requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The routing system is managed by more than one extension, and they all use ",(0,s.jsx)(n.code,{children:"react-router"})," behind the scenes. There are also some utilities that are based on the same ",(0,s.jsx)(n.code,{children:"routing"})," library like ",(0,s.jsx)(n.code,{children:"useRouteRefParams"}),". Therefore, you cannot use a different library without causing side effects in these other extensions and helper utilities;"]}),"\n",(0,s.jsxs)(n.li,{children:["Don't remove configs or inputs, just extend these things yourself with optional new options, otherwise it will cause breaking changes for extensions like ",(0,s.jsx)(n.code,{children:"createPageExtension"})," that depend on this type of inputs;"]}),"\n",(0,s.jsx)(n.li,{children:"Remember to user the route refs for getting paths dynamically, otherwise if an adopter modifies a path through configuration, the route is not going to point to the configured path;"}),"\n",(0,s.jsxs)(n.li,{children:["Adopters expect to be able to customize the ",(0,s.jsx)(n.code,{children:"NotFoundErrorPage"})," component via Components API, you should render this component for routes not configured."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"inputs-4",children:"Inputs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Extension creator"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"routes"}),(0,s.jsx)(n.td,{children:"The route objects list."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{ path: coreExtensionData.routePath, ref: coreExtensionData.routeRef.optional(), element: coreExtensionData.reactElement }"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-plugin-api.createpageextension",children:"createPageExtension"})})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},675251:(e,n,t)=>{var s=t(667294),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,r={},o=null,a=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,s)&&!c.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:o,ref:a,props:r,_owner:d.current}}n.Fragment=r,n.jsx=o,n.jsxs=o},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>l});var s=t(667294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);