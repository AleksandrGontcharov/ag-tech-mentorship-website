"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,p=d["".concat(l,".").concat(f)]||d[f]||b[f]||s;return t?n.createElement(p,o(o({ref:r},u),{},{components:t})):n.createElement(p,o({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const s={sidebar_position:1},o="Welcome",i={unversionedId:"intro",id:"intro",title:"Welcome",description:"---",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ag-tech-mentorship-website/docs/intro",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Foundational Program"}},l={},c=[{value:"Networking Diagram",id:"networking-diagram",level:3}],u={toc:c},d="wrapper";function b(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"networking-diagram"},"Networking Diagram"),(0,a.kt)("mermaid",{value:'graph LR\n    Internet(fab:fa-internet-explorer Internet) === HomeRouter[fa:fa-wifi HomeRouter </br> subnet: 192.168.1.0/24 </br> gateway: 192.168.1.1]\n    HomeRouter === externalSwitch[fa:fa-server switch-external]\n    hyper-V:::whiteClass\n    classDef whiteClass fill:#0000,stroke:#f66,stroke-width:1px\n    subgraph hyper-V["Hyper-V"]\n        externalSwitch === VMrouter[fa:fa-computer VM-router  </br> ip: 192.168.1.100 </br> gateway-red: 192.168.2.1</br> gateway-green: 192.168.2.65</br> gateway-blue: 192.168.2.129 ]\n        VMrouter === Switch-green:::greenClass \n        VMrouter === Switch-red:::redClass\n        VMrouter === Switch-blue:::blueClass\n        classDef greenClass fill:#bdf0cc,stroke:#333,stroke-width:3px\n        classDef greenClassDashed fill:#bdf0cc,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3\n        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px\n        classDef redClassDashed  fill:#f0bdc7,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3\n        classDef blueClass  fill:lightblue,stroke:#333,stroke-width:3px\n        classDef blueClassDashed  fill:lightblue,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3\n\n        \n        subnet-red:::redClass\n        ipaddressrange-red:::redClassDashed\n        subnet-green:::greenClass\n        ipaddressrange-green:::greenClassDashed\n        subnet-blue:::blueClass\n        ipaddressrange-blue:::blueClassDashed\n        Switch-red(fa:fa-server switch-red)\n        Switch-red === VM-red-a\n        Switch-red === VM-red-b\n\n        subgraph subnet-red["Subnet Red"]\n            direction LR\n            VM-red-a(fa:fa-computer VM-red-a)\n            ipaddressrange-red[192.168.2.0/26 </br > 192.168.2.0 to 192.168.2.63]\n            VM-red-b(fa:fa-computer VM-red-b)\n        end\n\n        Switch-green(fa:fa-server switch-green)\n        Switch-green === VM-green-a\n        Switch-green === VM-green-b\n\n        subgraph subnet-green["Subnet Green"]\n            direction LR\n            VM-green-a(fa:fa-computer VM-green-a)\n            ipaddressrange-green[192.168.2.64/26 </br > 192.168.2.64 to 192.168.2.127]\n            VM-green-b(fa:fa-computer VM-green-b)\n        end\n\n        Switch-blue(fa:fa-server switch-blue)\n        Switch-blue === VM-blue-a\n        Switch-blue === VM-blue-b\n        subgraph subnet-blue["Subnet Blue"]\n            direction LR\n            VM-blue-a(fa:fa-computer VM-blue-a)\n            ipaddressrange-blue[192.168.2.128/26 </br > 192.168.2.128 to 192.168.2.191]\n            VM-blue-b(fa:fa-computer VM-blue-b)\n        end\n    end'}))}b.isMDXComponent=!0}}]);