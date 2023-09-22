"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[2583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="\u27a1\ufe0f Local Networking",s={unversionedId:"specialized-topics/networking/concepts/local-networking",id:"specialized-topics/networking/concepts/local-networking",title:"\u27a1\ufe0f Local Networking",description:"_",source:"@site/docs/specialized-topics/networking/concepts/local-networking.md",sourceDirName:"specialized-topics/networking/concepts",slug:"/specialized-topics/networking/concepts/local-networking",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/concepts/local-networking",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/concepts/local-networking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u27a1\ufe0f OSI Model",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/concepts/osi-model"},next:{title:"\u27a1\ufe0f Routers",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/concepts/routers"}},l={},d=[{value:"Ethernet Frames",id:"ethernet-frames",level:3},{value:"EtherTypes in an ethernet frame",id:"ethertypes-in-an-ethernet-frame",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-local-networking"},"\u27a1\ufe0f Local Networking"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Communication between computers within a network is called local networking. "),(0,r.kt)("p",null,"Consider computers red-a, red-b and red-c connected to a switch in a subnet with the given IP address range."),(0,r.kt)("mermaid",{value:'graph BT\n\n\t%% RED SUBNET\n\tSwitch-red(fa:fa-server switch-red)\n\t\n\tsubnet-red:::redClass\n\tsubgraph subnet-red["192.168.2.0 to 192.168.2.63"]\n\t\tSwitch-red === |eth0: 192.168.2.1| red-a\n\t\tSwitch-red === |eth0: 192.168.2.2| red-b\n\t\tSwitch-red === |eth0: 192.168.2.3| red-c\n\t\t\n\t\tdirection TB\n\t\tred-a(fa:fa-computer VM-red-a)\n\t\tred-b(fa:fa-computer VM-red-b)\n\t\tred-c(fa:fa-computer VM-red-c)\n        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px, color: black;\nend'}),(0,r.kt)("p",null,"When you connect two Windows computers with an Ethernet cable, they automatically assign themselves IP addresses in the 169.254.x.x range using the Automatic Private IP Addressing (APIPA) feature."),(0,r.kt)("p",null,"Whether using a switch or now, the computers are able to communicate with each other. Ubuntu, like Windows, supports Automatic Private IP Addressing (APIPA). "),(0,r.kt)("p",null,"In the case where an IP address is not auto-assigned, we can assign the IP address statically. "),(0,r.kt)("h3",{id:"ethernet-frames"},"Ethernet Frames"),(0,r.kt)("p",null,"An Ethernet frame is a unit of data transmitted over an Ethernet network, consisting of a header and payload, and is used to facilitate communication between network devices."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EtherType"),(0,r.kt)("th",{parentName:"tr",align:null},"Layer"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x0806"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 2"),(0,r.kt)("td",{parentName:"tr",align:null},"ARP is used to map a network address (such as an IP address) to a physical address (such as a MAC address) at the link layer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x888e"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 2"),(0,r.kt)("td",{parentName:"tr",align:null},"EAPOL is used for network authentication and is typically used with wireless networks to provide secure access.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x0800"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 3"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4 is the most commonly used protocol for internet traffic and is used to route data packets across networks and the internet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x86dd"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 3"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv6 is the next-generation internet protocol that provides a larger address space and improved routing functionality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x88cc"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 2"),(0,r.kt)("td",{parentName:"tr",align:null},"LLDP is used to exchange information about network devices and their capabilities at the link layer. It is often used in conjunction with network management protocols such as SNMP.")))),(0,r.kt)("p",null,"When computers communicate over a network, we can use a tool to intercept these ethernet frames."),(0,r.kt)("p",null,"If we use ",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump")," to trace packets, we can see each packet in this format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"16:40:33.569449 00:15:5d:be:f1:3a > 01:00:5e:7f:ff:fa, ethertype IPv4 (0x0800), length 217: 172.26.64.1.59431 > 239.255.255.250.1900: UDP, length 175\n")),(0,r.kt)("p",null,"It means"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"16:40:33.569449"),": This is the timestamp for when the packet was captured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"00:15:5d:be:f1:3a"),": This is the source MAC address of the Ethernet frame.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"01:00:5e:7f:ff:fa"),": This is the destination MAC address of the Ethernet frame. In this case, it is a multicast address.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ethertype IPv4 (0x0800)"),": This is the EtherType field of the Ethernet frame, which indicates that the payload of the frame is an IPv4 packet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"length 217"),": This is the length of the Ethernet frame, including the header and payload, in bytes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"172.26.64.1.59431"),": This is the source IP address and port number of the IPv4 packet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"239.255.255.250.1900"),": This is the destination IP address and port number of the IPv4 packet. In this case, it is a multicast address and the destination port number is 1900, which is used by the Simple Service Discovery Protocol (SSDP).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"UDP, length 175"),": This indicates that the payload of the IPv4 packet is a UDP packet with a length of 175 bytes. UDP is a transport layer protocol that is used for communication between applications running on different hosts."))),(0,r.kt)("h2",{id:"ethertypes-in-an-ethernet-frame"},"EtherTypes in an ethernet frame"),(0,r.kt)("p",null,"Here are some common EtherTypes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EtherType"),(0,r.kt)("th",{parentName:"tr",align:null},"Layer"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x0806"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 2"),(0,r.kt)("td",{parentName:"tr",align:null},"ARP is used to map a network address (such as an IP address) to a physical address (such as a MAC address) at the link layer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x888e"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 2"),(0,r.kt)("td",{parentName:"tr",align:null},"EAPOL is used for network authentication and is typically used with wireless networks to provide secure access.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x0800"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 3"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4 is the most commonly used protocol for internet traffic and is used to route data packets across networks and the internet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x86dd"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 3"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv6 is the next-generation internet protocol that provides a larger address space and improved routing functionality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x88cc"),(0,r.kt)("td",{parentName:"tr",align:null},"Layer 2"),(0,r.kt)("td",{parentName:"tr",align:null},"LLDP is used to exchange information about network devices and their capabilities at the link layer. It is often used in conjunction with network management protocols such as SNMP.")))),(0,r.kt)("h1",{id:"arp"},"ARP"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"ARP (Address Resolution Protocol) is a protocol used to map a network address (such as an IP address) to a physical address (such as a MAC address) at the link layer."),(0,r.kt)("p",null,"Your computer associates IP addresses on the network with their corresponding MAC addresses in an ARP cache. To avoid sending an ARP request every time it needs to communicate with a device, your computer keeps a cache of recently seen MAC addresses and their corresponding IP addresses."),(0,r.kt)("p",null,"You can run this command to see the ARP cache entries on your computer. Mac addresses that are known to each individual computer and which IP they are associated to on the local network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"arp -a\n")),(0,r.kt)("p",null,"Here's an example of an ARP request and response between a host with IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.2")," and a client with IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.3"),"."),(0,r.kt)("p",null,"Example ARP Request (",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"17:26:32.218132 00:15:5d:5e:5c:01 > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 58: Request who-has 192.168.1.3 tell 192.168.1.2, length 44\n\n")),(0,r.kt)("p",null,"Example ARP Response (",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"17:30:47.547077 00:15:5d:be:f1:3a > 00:15:5d:5e:5c:01, ethertype ARP (0x0806), length 42: Reply 192.168.1.3 is-at AA:BB:CC:DD:EE:FF, length 28\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Takeaway: In local network communication, both the IP and MAC addresses are required because payload packets need to be encapsulated within Ethernet frames for transmission over the local network, and the Ethernet frame header includes the source and destination MAC addresses. ARP is used to map IP addresses to MAC addresses by broadcasting an ARP request to all devices on the network and waiting for the device with the specified IP address to respond with its MAC address.")))}u.isMDXComponent=!0}}]);