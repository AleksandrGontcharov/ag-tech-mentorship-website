"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:2},o="Progress",i={unversionedId:"specialized-topics/networking/progress",id:"specialized-topics/networking/progress",title:"Progress",description:"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.",source:"@site/docs/specialized-topics/networking/progress.md",sourceDirName:"specialized-topics/networking",slug:"/specialized-topics/networking/progress",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/progress",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/progress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Networking Syllabus",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/networking_syllabus"},next:{title:"\ue795 Commands"}},l={},c=[{value:"Create the switches",id:"create-the-switches",level:3},{value:"Create the VMs",id:"create-the-vms",level:3},{value:"Setup for next steps",id:"setup-for-next-steps",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"progress"},"Progress"),(0,a.kt)("p",null,"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals."),(0,a.kt)("p",null,"You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts"),(0,a.kt)("p",null,"As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something."),(0,a.kt)("p",null,"Prerequisite: set up Hyper-V"),(0,a.kt)("h3",{id:"create-the-switches"},"Create the switches"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create 3 private virtual switches called ",(0,a.kt)("inlineCode",{parentName:"li"},"red"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"green"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"blue")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create a switch called ",(0,a.kt)("inlineCode",{parentName:"li"},"external")," that public and connect it your home network")),(0,a.kt)("h3",{id:"create-the-vms"},"Create the VMs"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 6 VMs {red,green,blue}-{a,b} ","[e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"red-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"red-b"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"green-a"),",\u2026.]"," and connect them to the appropriate switches."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use UI-less (server) ubuntu SKU\xa0 (choose last LTS)"),(0,a.kt)("li",{parentName:"ul"},"without DHCP"),(0,a.kt)("li",{parentName:"ul"},"Verify that they indeed ",(0,a.kt)("strong",{parentName:"li"},"fail")," to acquire IP address, as there\u2019s no DHCP"))),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 1 VM called ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," and connect it all the switches"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Verify that the router gets an IP address can access the internet",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ping google.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ip addr show"))))))),(0,a.kt)("h3",{id:"setup-for-next-steps"},"Setup for next steps"),(0,a.kt)("mermaid",{value:'graph BT\n    Internet(fab:fa-internet-explorer Internet) === HomeRouter[fa:fa-wifi HomeRouter </br> subnet: 192.168.1.0/24 </br> gateway: 192.168.1.1]\n    HomeRouter === externalSwitch[fa:fa-server switch-external]\n    hyper-V:::whiteClass\n    classDef whiteClass fill:#0000,stroke:#f66,stroke-width:1px\n    subgraph hyper-V["Hyper-V"]\n        externalSwitch === |eth0: 192.168.1.100| VMrouter[fa:fa-computer VM-router]\n        VMrouter === |eth1: 192.168.2.1| Switch-red:::redClass\n        VMrouter === |eth1: 192.168.2.65| Switch-green:::greenClass\n        VMrouter === |eth1: 192.168.2.129| Switch-blue:::blueClass\n\n        %% RED SUBNET\n\n        Switch-red(fa:fa-server switch-red)\n        Switch-red === |eth0| VM-red-a\n        Switch-red === |eth0| VM-red-b\n        subnet-red:::redClass\n        subgraph subnet-red["192.168.2.0 to 192.168.2.63"]\n            direction TB\n            VM-red-a(fa:fa-computer VM-red-a)\n            VM-red-b(fa:fa-computer VM-red-b)\n        end\n\n        %% GREEN SUBNET\n\n        Switch-green(fa:fa-server switch-green)\n        Switch-green === |eth0| VM-green-a\n        Switch-green === |eth0| VM-green-b\n        subnet-green:::greenClass\n        subgraph subnet-green["192.168.2.64 to 192.168.2.127"]\n            direction TB\n            VM-green-a(fa:fa-computer VM-green-a)\n            VM-green-b(fa:fa-computer VM-green-b)\n        end\n\n        \n        %% BLUE SUBNET\n\n        Switch-blue(fa:fa-server switch-blue)\n        Switch-blue === |eth0| VM-blue-a\n        Switch-blue === |eth0| VM-blue-b\n        subnet-blue:::blueClass\n        subgraph subnet-blue["192.168.2.128 to 192.168.2.191"]\n            direction TB\n            VM-blue-a(fa:fa-computer VM-blue-a)\n            VM-blue-b(fa:fa-computer VM-blue-b)\n        end\n\n        classDef greenClass fill:#bdf0cc,stroke:#333,stroke-width:3px, color: black;\n        classDef greenClassDashed fill:#bdf0cc,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\n        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px, color: black;\n        classDef redClassDashed  fill:#f0bdc7,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\n        classDef blueClass  fill:lightblue,stroke:#333,stroke-width:3px, color: black;\n        classDef blueClassDashed  fill:lightblue,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\nend'}))}d.isMDXComponent=!0}}]);