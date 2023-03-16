"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2},i="\u2705Progress",o={unversionedId:"specialized-topics/networking/progress",id:"specialized-topics/networking/progress",title:"\u2705Progress",description:"Prerequisite: Set up Hyper-V.",source:"@site/docs/specialized-topics/networking/progress.md",sourceDirName:"specialized-topics/networking",slug:"/specialized-topics/networking/progress",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/progress",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/progress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdcNetworking Syllabus",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/networking-syllabus"},next:{title:"\ud83d\udda5\ufe0fVM Setup",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/vm-setup"}},l={},p=[{value:"Create the virtual hardware",id:"create-the-virtual-hardware",level:2},{value:"Create the switches",id:"create-the-switches",level:3},{value:"Create the VMs",id:"create-the-vms",level:3},{value:"Create the settings for dhcp",id:"create-the-settings-for-dhcp",level:2},{value:"Networking diagram",id:"networking-diagram",level:3},{value:"Router settings",id:"router-settings",level:3},{value:"Client VM settings (red-a, red-b etc.)",id:"client-vm-settings-red-a-red-b-etc",level:3},{value:"Configure NAT",id:"configure-nat",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"progress"},"\u2705Progress"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisite:")," Set up Hyper-V."),(0,r.kt)("h2",{id:"create-the-virtual-hardware"},"Create the virtual hardware"),(0,r.kt)("h3",{id:"create-the-switches"},"Create the switches"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create 3 private virtual switches called ",(0,r.kt)("inlineCode",{parentName:"li"},"red"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"green"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"blue")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create a switch called ",(0,r.kt)("inlineCode",{parentName:"li"},"external")," that public and connect it your home network")),(0,r.kt)("h3",{id:"create-the-vms"},"Create the VMs"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 6 VMs {red,green,blue}-{a,b} ","[e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"red-a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"red-b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"green-a"),",\u2026.]"," and connect them to the appropriate switches."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use UI-less (server) ubuntu SKU\xa0 (choose last LTS)"),(0,r.kt)("li",{parentName:"ul"},"without DHCP"),(0,r.kt)("li",{parentName:"ul"},"Verify that they indeed ",(0,r.kt)("strong",{parentName:"li"},"fail")," to acquire IP address, as there\u2019s no DHCP"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Create 1 VM called ",(0,r.kt)("inlineCode",{parentName:"p"},"router")," and connect it all the switches"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Verify that the router gets an IP address can access the internet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ping google.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ip addr show"))))))),(0,r.kt)("h2",{id:"create-the-settings-for-dhcp"},"Create the settings for dhcp"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","configure ",(0,r.kt)("inlineCode",{parentName:"li"},"dhcp")," server to allocate IPs for other client-vms")),(0,r.kt)("h3",{id:"networking-diagram"},"Networking diagram"),(0,r.kt)("mermaid",{value:'graph BT\n    Internet(fab:fa-internet-explorer Internet) === HomeRouter[fa:fa-wifi HomeRouter </br> subnet: 192.168.1.0/24 </br> gateway: 192.168.1.1]\n    HomeRouter === externalSwitch[fa:fa-server switch-external]\n    hyper-V:::whiteClass\n    classDef whiteClass fill:#0000,stroke:#f66,stroke-width:1px\n    subgraph hyper-V["Hyper-V"]\n        externalSwitch === |eth0: 192.168.1.100| VMrouter[fa:fa-computer VM-router]\n        VMrouter === |eth1: 192.168.2.1| Switch-red:::redClass\n        VMrouter === |eth2: 192.168.2.65| Switch-green:::greenClass\n        VMrouter === |eth3: 192.168.2.129| Switch-blue:::blueClass\n\n        %% RED SUBNET\n\n        Switch-red(fa:fa-server switch-red)\n        Switch-red === |eth0| VM-red-a\n        Switch-red === |eth0| VM-red-b\n        subnet-red:::redClass\n        subgraph subnet-red["192.168.2.0 to 192.168.2.63"]\n            direction TB\n            VM-red-a(fa:fa-computer VM-red-a)\n            VM-red-b(fa:fa-computer VM-red-b)\n        end\n\n        %% GREEN SUBNET\n\n        Switch-green(fa:fa-server switch-green)\n        Switch-green === |eth0| VM-green-a\n        Switch-green === |eth0| VM-green-b\n        subnet-green:::greenClass\n        subgraph subnet-green["192.168.2.64 to 192.168.2.127"]\n            direction TB\n            VM-green-a(fa:fa-computer VM-green-a)\n            VM-green-b(fa:fa-computer VM-green-b)\n        end\n\n        \n        %% BLUE SUBNET\n\n        Switch-blue(fa:fa-server switch-blue)\n        Switch-blue === |eth0| VM-blue-a\n        Switch-blue === |eth0| VM-blue-b\n        subnet-blue:::blueClass\n        subgraph subnet-blue["192.168.2.128 to 192.168.2.191"]\n            direction TB\n            VM-blue-a(fa:fa-computer VM-blue-a)\n            VM-blue-b(fa:fa-computer VM-blue-b)\n        end\n\n        classDef greenClass fill:#bdf0cc,stroke:#333,stroke-width:3px, color: black;\n        classDef greenClassDashed fill:#bdf0cc,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\n        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px, color: black;\n        classDef redClassDashed  fill:#f0bdc7,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\n        classDef blueClass  fill:lightblue,stroke:#333,stroke-width:3px, color: black;\n        classDef blueClassDashed  fill:lightblue,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;\nend'}),(0,r.kt)("h3",{id:"router-settings"},"Router settings"),(0,r.kt)("p",null,"These settings on my router allow it to be configured as a dhcp server"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"sudo vim /etc/netplan/00-installer-config.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    eth0:\n      dhcp4: true\n    eth1: # RED NETWORK\n      addresses:\n        - 192.168.2.1/26\n      nameservers:\n        addresses: [127.0.0.1]\n      routes:\n        - to: 127.0.0.1\n          via: 192.168.2.1\n    eth2: # GREEN NETWORK\n      addresses:\n        - 192.168.2.65/26\n      nameservers:\n        addresses: [127.0.0.1]\n      routes:\n        - to: 127.0.0.1\n          via: 192.168.2.65\n    eth3: # BLUE NETWORK\n      addresses:\n        - 192.168.2.129/26\n      nameservers:\n        addresses: [127.0.0.1]\n      routes:\n        - to: 127.0.0.1\n          via: 192.168.2.129\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"sudo vim /etc/dhcp/dhcpd.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"default-lease-time 600;\nmax-lease-time 7200;\n\nddns-update-style none;\n\nauthoritative;\n\n# RED\nsubnet 192.168.2.0 netmask 255.255.255.192 {\n  range 192.168.2.2 192.168.2.62;\n  option routers 192.168.2.1;\n  option domain-name-servers 127.0.0.1;\n  interface eth1;\n}\n# GREEN\nsubnet 192.168.2.64 netmask 255.255.255.192 {\n  range 192.168.2.66 192.168.2.126;\n  option routers 192.168.2.65;\n  option domain-name-servers 127.0.0.1;\n  interface eth2;\n}\n# BLUE\nsubnet 192.168.2.128 netmask 255.255.255.192 {\n  range 192.168.2.130 192.168.2.190;\n  option routers 192.168.2.129;\n  option domain-name-servers 127.0.0.1;\n  interface eth3;\n}\n"))),(0,r.kt)("h3",{id:"client-vm-settings-red-a-red-b-etc"},"Client VM settings (red-a, red-b etc.)"),(0,r.kt)("p",null,"These settings on my router allow it to be configured as a dhcp server"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"sudo vim /etc/dhcp/dhcpd.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"network:\n  version: 2\n  ethernets:\n    eth0:\n      dhcp4: true\n"))),(0,r.kt)("h2",{id:"configure-nat"},"Configure NAT"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Configure NAT (specifically SNAT) on the router so VMs can reach internet. U can use 8.8.8.8 as a DNS server for now (Google's public dns) or your ISP dns (or your home router)")),(0,r.kt)("p",null,"Explanation for eth1.\nI have configured SNAT on your Ubuntu server acting as a router. The essential configuration for SNAT is the iptables rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.0/26 -j MASQUERADE\n")),(0,r.kt)("p",null,"This rule performs SNAT for the 192.168.2.0/26 subnet (eth1), allowing VMs on this subnet to access the internet through the router's eth0 interface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-t nat"),": Specifies the 'nat' table, where rules for address translation are stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-A POSTROUTING"),": Appends a rule to the POSTROUTING chain, which is responsible for modifying the source address of packets after the routing decision has been made."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o eth0"),": Matches packets that are going out through the eth0 interface (connected to the internet)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s 192.168.2.0/26"),": Matches packets originating from the 192.168.2.0/26 subnet (eth1)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-j MASQUERADE"),": The target action to perform when the rule matches. The MASQUERADE target performs SNAT, replacing the source IP address of the packets with the router's public IP address (in this case, the IP address of the eth0 interface).")),(0,r.kt)("p",null,"In summary, this rule tells iptables to perform Source Network Address Translation (SNAT) for packets originating from the 192.168.2.0/26 subnet (eth1) and going out through the eth0 interface (connected to the internet). This allows VMs on the eth1 subnet to access the internet using the router's public IP address as the source address for their packets, effectively hiding their private IP addresses from the external network."),(0,r.kt)("p",null,"Additionally, I have set up a DHCP server that assigns IP addresses to the VMs on the eth1 subnet and provides them with the DNS server information (8.8.8.8). These settings, along with the SNAT rule, enable the VMs on the eth1 subnet to access the internet using your Ubuntu server as a router."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"sudo vim /etc/dhcp/dhcpd.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"default-lease-time 600;\nmax-lease-time 7200;\n\nddns-update-style none;\n\nauthoritative;\n\n# RED\nsubnet 192.168.2.0 netmask 255.255.255.192 {\n  range 192.168.2.2 192.168.2.62;\n  option routers 192.168.2.1;\n  option domain-name-servers 8.8.8.8;\n  interface eth1;\n}\n# GREEN\nsubnet 192.168.2.64 netmask 255.255.255.192 {\n  range 192.168.2.66 192.168.2.126;\n  option routers 192.168.2.65;\n  option domain-name-servers 8.8.8.8;\n  interface eth2;\n}\n# BLUE\nsubnet 192.168.2.128 netmask 255.255.255.192 {\n  range 192.168.2.130 192.168.2.190;\n  option routers 192.168.2.129;\n  option domain-name-servers 8.8.8.8;\n  interface eth3;\n}\n"))),(0,r.kt)("p",null,"Notes on ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.0/26 -j MASQUERADE")),(0,r.kt)("p",null,"What is the POSTROUTING chain. Why is it called a CHAIN, what is it in the context of?"),(0,r.kt)("p",null,'In the context of iptables, a chain is a series of rules that are sequentially checked against packets. When a packet matches a rule in a chain, the specified action (called a "target") is performed on the packet. If no rule matches the packet, it follows the default policy set for that chain.'),(0,r.kt)("p",null,'Iptables organizes chains into tables, where each table serves a specific purpose. In the case of NAT, the table used is the "nat" table. Within the nat table, there are three built-in chains:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"PREROUTING: Processes packets as they arrive at the router, before the routing decision is made. PREROUTING is typically used for Destination Network Address Translation (DNAT)."),(0,r.kt)("li",{parentName:"ol"},"INPUT: Processes packets that are destined for the router itself."),(0,r.kt)("li",{parentName:"ol"},"OUTPUT: Processes packets generated by the router."),(0,r.kt)("li",{parentName:"ol"},"FORWARD: Processes packets that are being routed through the router to other devices."),(0,r.kt)("li",{parentName:"ol"},"POSTROUTING: Processes packets after the routing decision has been made, just before they leave the router. POSTROUTING is typically used for Source Network Address Translation (SNAT).")),(0,r.kt)("p",null,"The POSTROUTING chain is where rules for modifying the source address of packets are applied after the routing decision. It allows the router to perform SNAT, translating the source IP addresses of packets from private IP addresses to the router's public IP address. This is crucial for allowing devices with private IP addresses to access the internet, as the router's public IP address is used as the source address for their packets, effectively hiding their private IP addresses from the external network."),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use iptables to block internet access for the red network")),(0,r.kt)("p",null,"In order to do this, we modify the FORWARD table of ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables")," with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -A FORWARD -i eth1 -s 192.168.2.1/26 ! -d 192.168.0.0/16 -j DROP\n")),(0,r.kt)("p",null,"This command appends (",(0,r.kt)("inlineCode",{parentName:"p"},"-A"),") a rule to the FORWARD chain that matches packets coming in from the eth1 interface (",(0,r.kt)("inlineCode",{parentName:"p"},"-i eth1"),") with a source IP address in the 192.168.2.1/26 subnet (",(0,r.kt)("inlineCode",{parentName:"p"},"-s 192.168.2.1/26"),"). The ",(0,r.kt)("inlineCode",{parentName:"p"},"-j DROP")," target specifies that the action for matched packets is to drop them."),(0,r.kt)("p",null,"After running this command, the Ubuntu router will drop all packets from the eth1 subnet destined for the internet."),(0,r.kt)("p",null,"Remember that this rule will be lost if the system is rebooted or the iptables service is restarted. To save the current iptables rules and ensure they persist after a reboot, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables-persistent")," package, as mentioned in a previous response."),(0,r.kt)("p",null,"How do I make it persistent after reboot?"),(0,r.kt)("p",null,"install the ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables-persistent")," service "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get install iptables-persistent\n")),(0,r.kt)("p",null," The ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables-persistent")," service loads the saved rules automatically during system startup. However, you can also start, stop, or restart the service manually using these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl start netfilter-persistent\nsudo systemctl stop netfilter-persistent\nsudo systemctl restart netfilter-persistent\n")),(0,r.kt)("p",null,"Always run this command after changing the rules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo netfilter-persistent save\n")),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use your iptables policy to deny(or drop) -by default and use explicit allow-listing for everything. Ensure everything continues to work (DHCP, SNAT, etc).")),(0,r.kt)("p",null,"In order to do this"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Clear all existing rules")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo iptables -F\nsudo iptables -X\nsudo iptables -t nat -F\nsudo iptables -t nat -X\nsudo netfilter-persistent save\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the default policy for the FORWARD chain to DROP:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -P FORWARD DROP\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Allow traffic between eth1, eth2, and eth3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -A FORWARD -i eth1 -o eth2 -j ACCEPT\nsudo iptables -A FORWARD -i eth2 -o eth1 -j ACCEPT\nsudo iptables -A FORWARD -i eth1 -o eth3 -j ACCEPT\nsudo iptables -A FORWARD -i eth3 -o eth1 -j ACCEPT\nsudo iptables -A FORWARD -i eth2 -o eth3 -j ACCEPT\nsudo iptables -A FORWARD -i eth3 -o eth2 -j ACCEPT\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enable IP forwarding:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf\nsudo sysctl -p\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Configure SNAT for eth1, eth2, and eth3 to use eth0 as a gateway to the internet. Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"your_public_ip")," with the public IP address of eth0:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.0/26 -j SNAT --to-source your_public_ip\nsudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.64/26 -j SNAT --to-source your_public_ip\nsudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.128/26 -j SNAT --to-source your_public_ip\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"note that your_public_ip in this case will be the IP assigned to eth0, and would not be your actual public ip.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Allow traffic from the internet to reach eth1, eth2, and eth3 through eth0 (assuming SNAT is configured):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -A FORWARD -i eth0 -o eth1 -m state --state RELATED,ESTABLISHED -j ACCEPT\nsudo iptables -A FORWARD -i eth0 -o eth2 -m state --state RELATED,ESTABLISHED -j ACCEPT\nsudo iptables -A FORWARD -i eth0 -o eth3 -m state --state RELATED,ESTABLISHED -j ACCEPT\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Allow traffic from eth1, eth2, and eth3 to use eth0 as a gateway to the internet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT\nsudo iptables -A FORWARD -i eth2 -o eth0 -j ACCEPT\nsudo iptables -A FORWARD -i eth3 -o eth0 -j ACCEPT\n")),(0,r.kt)("p",null,"These rules will explicitly allow the desired traffic between eth1, eth2, eth3, and eth0, while disallowing all other traffic by default due to the DROP policy set for the FORWARD chain."),(0,r.kt)("p",null,"If you have ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables-persistent")," installed, don't forget to save the changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo netfilter-persistent save\n")),(0,r.kt)("p",null,"This will make the new configuration persistent across reboots."))}u.isMDXComponent=!0}}]);