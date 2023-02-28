"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},i="Progress",o={unversionedId:"specialized-topics/networking/progress",id:"specialized-topics/networking/progress",title:"Progress",description:"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.",source:"@site/docs/specialized-topics/networking/progress.md",sourceDirName:"specialized-topics/networking",slug:"/specialized-topics/networking/progress",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/progress",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/progress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"VM Setup",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/vm-setup"},next:{title:"\ue795 Commands"}},l={},c=[{value:"Create the virtual hardware",id:"create-the-virtual-hardware",level:2},{value:"Create the switches",id:"create-the-switches",level:3},{value:"Create the VMs",id:"create-the-vms",level:3},{value:"Create the settings for dhcp",id:"create-the-settings-for-dhcp",level:2},{value:"Networking diagram",id:"networking-diagram",level:3},{value:"Router settings",id:"router-settings",level:3},{value:"Client VM settings (red-a, red-b etc.)",id:"client-vm-settings-red-a-red-b-etc",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"progress"},"Progress"),(0,a.kt)("p",null,"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals."),(0,a.kt)("p",null,"You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts"),(0,a.kt)("p",null,"As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something."),(0,a.kt)("p",null,"Prerequisite: set up Hyper-V"),(0,a.kt)("h2",{id:"create-the-virtual-hardware"},"Create the virtual hardware"),(0,a.kt)("h3",{id:"create-the-switches"},"Create the switches"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create 3 private virtual switches called ",(0,a.kt)("inlineCode",{parentName:"li"},"red"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"green"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"blue")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create a switch called ",(0,a.kt)("inlineCode",{parentName:"li"},"external")," that public and connect it your home network")),(0,a.kt)("h3",{id:"create-the-vms"},"Create the VMs"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 6 VMs {red,green,blue}-{a,b} ","[e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"red-a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"red-b"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"green-a"),",\u2026.]"," and connect them to the appropriate switches."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use UI-less (server) ubuntu SKU\xa0 (choose last LTS)"),(0,a.kt)("li",{parentName:"ul"},"without DHCP"),(0,a.kt)("li",{parentName:"ul"},"Verify that they indeed ",(0,a.kt)("strong",{parentName:"li"},"fail")," to acquire IP address, as there\u2019s no DHCP"))),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 1 VM called ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," and connect it all the switches"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Verify that the router gets an IP address can access the internet",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ping google.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ip addr show"))))))),(0,a.kt)("h2",{id:"create-the-settings-for-dhcp"},"Create the settings for dhcp"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","configure ",(0,a.kt)("inlineCode",{parentName:"li"},"dhcp")," server to allocate IPs for other client-vms")),(0,a.kt)("h3",{id:"networking-diagram"},"Networking diagram"),(0,a.kt)("mermaid",{value:'graph BT\n    Internet(fab:fa-internet-explorer Internet) === HomeRouter[fa:fa-wifi HomeRouter </br> subnet: 192.168.1.0/24 </br> gateway: 192.168.1.1]\n    HomeRouter === externalSwitch[fa:fa-server switch-external]\n    hyper-V:::whiteClass\n    classDef whiteClass fill:#0000,stroke:#f66,stroke-width:1px\n    subgraph hyper-V["Hyper-V"]\n        externalSwitch === |eth0: 192.168.1.100| VMrouter[fa:fa-computer VM-router]\n        VMrouter === |eth1: 192.168.2.1| Switch-red:::redClass\n        VMrouter === |eth1: 192.168.2.65| Switch-green:::greenClass\n        VMrouter === |eth1: 192.168.2.129| Switch-blue:::blueClass\n\n        %% RED SUBNET\n\n        Switch-red(fa:fa-server switch-red)\n        Switch-red === |eth0| VM-red-a\n        Switch-red === |eth0| VM-red-b\n        subnet-red:::redClass\n        subgraph subnet-red["192.168.2.0 to 192.168.2.63"]\n            direction TB\n            VM-red-a(fa:fa-computer VM-red-a)\n            VM-red-b(fa:fa-computer VM-red-b)\n        end\n\n        %% GREEN SUBNET\n\n        Switch-green(fa:fa-server switch-green)\n        Switch-green === |eth0| VM-green-a\n        Switch-green === |eth0| VM-green-b\n        subnet-green:::greenClass\n        subgraph subnet-green["192.168.2.64 to 192.168.2.127"]\n            direction TB\n            VM-green-a(fa:fa-computer VM-green-a)\n            VM-green-b(fa:fa-computer VM-green-b)\n        end\n\n        \n        %% BLUE SUBNET\n\n        Switch-blue(fa:fa-server switch-blue)\n        Switch-blue === |eth0| VM-blue-a\n        Switch-blue === |eth0| VM-blue-b\n        subnet-blue:::blueClass\n        subgraph subnet-blue["192.168.2.128 to 192.168.2.191"]\n            direction TB\n            VM-blue-a(fa:fa-computer VM-blue-a)\n            VM-blue-b(fa:fa-computer VM-blue-b)\n        end\n\n        classDef greenClass fill:#bdf0cc,stroke:#333,stroke-width:3px, color: black;\n        classDef greenClassDashed fill:#bdf0cc,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\n        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px, color: black;\n        classDef redClassDashed  fill:#f0bdc7,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\n        classDef blueClass  fill:lightblue,stroke:#333,stroke-width:3px, color: black;\n        classDef blueClassDashed  fill:lightblue,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\nend'}),(0,a.kt)("h3",{id:"router-settings"},"Router settings"),(0,a.kt)("p",null,"These settings on my router allow it to be configured as a dhcp server"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"sudo vim /etc/netplan/00-installer-config.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    eth0:\n      dhcp4: true\n    eth1: # RED NETWORK\n      addresses:\n        - 192.168.2.1/26\n      nameservers:\n        addresses: [127.0.0.1]\n      routes:\n        - to: 127.0.0.1\n          via: 192.168.2.1\n    eth2: # GREEN NETWORK\n      addresses:\n        - 192.168.2.65/26\n      nameservers:\n        addresses: [127.0.0.1]\n      routes:\n        - to: 127.0.0.1\n          via: 192.168.2.65\n    eth3: # BLUE NETWORK\n      addresses:\n        - 192.168.2.129/26\n      nameservers:\n        addresses: [127.0.0.1]\n      routes:\n        - to: 127.0.0.1\n          via: 192.168.2.129\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"sudo vim /etc/dhcp/dhcpd.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"default-lease-time 600;\nmax-lease-time 7200;\n\nddns-update-style none;\n\nauthoritative;\n\n# RED\nsubnet 192.168.2.0 netmask 255.255.255.192 {\n  range 192.168.2.2 192.168.2.62;\n  option routers 192.168.2.1;\n  option domain-name-servers 127.0.0.1;\n  interface eth1;\n}\n# GREEN\nsubnet 192.168.2.64 netmask 255.255.255.192 {\n  range 192.168.2.66 192.168.2.126;\n  option routers 192.168.2.65;\n  option domain-name-servers 127.0.0.1;\n  interface eth2;\n}\n# BLUE\nsubnet 192.168.2.128 netmask 255.255.255.192 {\n  range 192.168.2.130 192.168.2.190;\n  option routers 192.168.2.129;\n  option domain-name-servers 127.0.0.1;\n  interface eth3;\n}\n"))),(0,a.kt)("h3",{id:"client-vm-settings-red-a-red-b-etc"},"Client VM settings (red-a, red-b etc.)"),(0,a.kt)("p",null,"These settings on my router allow it to be configured as a dhcp server"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"sudo vim /etc/dhcp/dhcpd.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"network:\n  version: 2\n  ethernets:\n    eth0:\n      dhcp4: true\n"))))}p.isMDXComponent=!0}}]);