"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2},i="Progress",o={unversionedId:"specialized-topics/networking/progress",id:"specialized-topics/networking/progress",title:"Progress",description:"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.",source:"@site/docs/specialized-topics/networking/progress.md",sourceDirName:"specialized-topics/networking",slug:"/specialized-topics/networking/progress",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/progress",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/progress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Networking Syllabus",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/networking_syllabus"}},l={},c=[{value:"Create the switches",id:"create-the-switches",level:3},{value:"Create the VMs",id:"create-the-vms",level:3},{value:"Setup so far",id:"setup-so-far",level:3},{value:"Commands",id:"commands",level:2},{value:"Basics",id:"basics",level:2},{value:"For each VM ensure that the state is UP",id:"for-each-vm-ensure-that-the-state-is-up",level:2},{value:"How to turn on state UP (not persistent after reboot)",id:"how-to-turn-on-state-up-not-persistent-after-reboot",level:2},{value:"How to turn on state UP (persistent after reboot) Ubuntu Server 22.10",id:"how-to-turn-on-state-up-persistent-after-reboot-ubuntu-server-2210",level:2},{value:"How to check the DHCP leases of each interface",id:"how-to-check-the-dhcp-leases-of-each-interface",level:2},{value:"Set up DHCP",id:"set-up-dhcp",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"progress"},"Progress"),(0,r.kt)("p",null,"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals."),(0,r.kt)("p",null,"You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts"),(0,r.kt)("p",null,"As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something."),(0,r.kt)("p",null,"Prerequisite: set up Hyper-V"),(0,r.kt)("h3",{id:"create-the-switches"},"Create the switches"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create 3 private virtual switches called ",(0,r.kt)("inlineCode",{parentName:"li"},"red"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"green"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"blue")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create a switch called ",(0,r.kt)("inlineCode",{parentName:"li"},"external")," that public and connect it your home network")),(0,r.kt)("h3",{id:"create-the-vms"},"Create the VMs"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 6 VMs {red,green,blue}-{a,b} ","[e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"red-a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"red-b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"green-a"),",\u2026.]"," and connect them to the appropriate switches."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use UI-less (server) ubuntu SKU\xa0 (choose last LTS)"),(0,r.kt)("li",{parentName:"ul"},"without DHCP"),(0,r.kt)("li",{parentName:"ul"},"Verify that they indeed ",(0,r.kt)("strong",{parentName:"li"},"fail")," to acquire IP address, as there\u2019s no DHCP"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 1 VM called ",(0,r.kt)("inlineCode",{parentName:"p"},"router")," and connect it all the switches"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Verify that the router gets an IP address can access the internet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ping google.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ip addr show"))))))),(0,r.kt)("h3",{id:"setup-so-far"},"Setup so far"),(0,r.kt)("mermaid",{value:'graph TB\n    hyper-V:::whiteClass\n    classDef whiteClass fill:#0000,stroke:#f66,stroke-width:1px\n    subgraph hyper-V["Hyper-V"]\n        externalSwitch === VMrouter[fa:fa-computer VM-router]\n        VMrouter === Switch-green:::greenClass\n        VMrouter === Switch-red:::redClass\n        VMrouter === Switch-blue:::blueClass\n        classDef greenClass fill:#bdf0cc,stroke:#333,stroke-width:3px\n        classDef greenClassDashed fill:#bdf0cc,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3\n        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px\n        classDef redClassDashed  fill:#f0bdc7,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3\n        classDef blueClass  fill:lightblue,stroke:#333,stroke-width:3px\n        classDef blueClassDashed  fill:lightblue,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3\n\n\n        subnet-red:::redClass\n        subnet-green:::greenClass\n        subnet-blue:::blueClass\n        Switch-red(fa:fa-server switch-red)\n        Switch-red === VM-red-a\n        Switch-red === VM-red-b\n\n        subgraph subnet-red["Subnet Red"]\n            direction LR\n            VM-red-a(fa:fa-computer VM-red-a)\n            VM-red-b(fa:fa-computer VM-red-b)\n        end\n\n        Switch-green(fa:fa-server switch-green)\n        Switch-green === VM-green-a\n        Switch-green === VM-green-b\n\n        subgraph subnet-green["Subnet Green"]\n            direction LR\n            VM-green-a(fa:fa-computer VM-green-a)\n            VM-green-b(fa:fa-computer VM-green-b)\n        end\n\n        Switch-blue(fa:fa-server switch-blue)\n        Switch-blue === VM-blue-a\n        Switch-blue === VM-blue-b\n        subgraph subnet-blue["Subnet Blue"]\n            direction LR\n            VM-blue-a(fa:fa-computer VM-blue-a)\n            VM-blue-b(fa:fa-computer VM-blue-b)\n        end\n    end'}),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h1",{id:"ip-commmand"},"ip commmand"),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ip addr show\n\n5: eth3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000\n    link/ether 00:15:5d:01:0b:12 brd ff:ff:ff:ff:ff:ff\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth3"),": This is the name of the network interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<BROADCAST,MULTICAST>"),": These are the flags that indicate the capabilities and status of the interface. BROADCAST means that the interface can send and receive broadcast packets, which are packets that are addressed to all hosts on a network segment.\xa0MULTICAST means that the interface can send and receive multicast packets, which are packets that are addressed to a group of hosts that share a common interest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mtu 1500"),": This is the maximum transmission unit (MTU) of the interface, which is the maximum size of a packet that can be sent or received by the interface without fragmentation. The default value for Ethernet interfaces is 1500 bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qdisc noop"),": This is the queuing discipline (qdisc) of the interface, which is a mechanism that controls how packets are queued and dequeued for transmission or reception. The noop qdisc means that there is no queuing discipline applied, and packets are sent or received as soon as possible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state DOWN"),": This is the state of the interface, which indicates whether it is active or not. The DOWN state means that the interface is not active, either because it has no carrier signal (such as a cable unplugged) or because it has been manually disabled by an administrator. To change the state of an interface, you can use ip link set up or ip link set down commands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"group default"),": This is the group name of the interface, which allows you to assign multiple interfaces to a single group for easier management. The default group name means that no specific group has been assigned to this interface. You can change the group name of an interface using ip link set group command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qlen 1000"),": This is the transmit queue length (txqueuelen) of the interface, which is how many packets can be queued for transmission before they are dropped by the kernel. The default value for Ethernet interfaces is 1000 packets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"link/ether 00:15:5d:01:0b:12 brd ff:ff:ff:ff:ff:ff"),": MAC address (media access control address) of the Ethernet device. The ",(0,r.kt)("strong",{parentName:"li"},"brd")," part stands for broadcast, and shows the broadcast address ff:ff:ff:ff:ff: ff in hexadecimal notation. A broadcast address is used to send a packet to all devices on a network segment.")),(0,r.kt)("h2",{id:"for-each-vm-ensure-that-the-state-is-up"},"For each VM ensure that the state is UP"),(0,r.kt)("h2",{id:"how-to-turn-on-state-up-not-persistent-after-reboot"},"How to turn on state UP (not persistent after reboot)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ip link set up dev eth3\n")),(0,r.kt)("h2",{id:"how-to-turn-on-state-up-persistent-after-reboot-ubuntu-server-2210"},"How to turn on state UP (persistent after reboot) Ubuntu Server 22.10"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Edit the configuration file, this is also how you can assign a static ip address\n\nsudo vim /etc/netplan/00-installer-config.yaml\n\n")),(0,r.kt)("h2",{id:"how-to-check-the-dhcp-leases-of-each-interface"},"How to check the DHCP leases of each interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"agontcharov@router:~$ netplan ip leases eth0\n# This is private data. Do not parse.\nADDRESS=192.168.1.18\nNETMASK=255.255.255.0\nROUTER=192.168.1.1\nSERVER_ADDRESS=192.168.1.1\nT1=43200\nT2=75600\nLIFETIME=86400\nDNS=192.168.1.1\nCLIENTID=<-----------------------\x3e\n")),(0,r.kt)("h2",{id:"set-up-dhcp"},"Set up DHCP"))}d.isMDXComponent=!0}}]);