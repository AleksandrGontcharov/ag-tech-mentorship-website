"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="\ud83d\udcdcNetworking Syllabus",l={unversionedId:"specialized-topics/networking/networking-syllabus",id:"specialized-topics/networking/networking-syllabus",title:"\ud83d\udcdcNetworking Syllabus",description:"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.",source:"@site/docs/specialized-topics/networking/networking-syllabus.md",sourceDirName:"specialized-topics/networking",slug:"/specialized-topics/networking/networking-syllabus",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/networking-syllabus",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/networking-syllabus.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Specialized Topics"},next:{title:"\u2705Progress",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/progress"}},s={},u=[],c={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"networking-syllabus"},"\ud83d\udcdcNetworking Syllabus"),(0,o.kt)("p",null,"In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals."),(0,o.kt)("p",null,"You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts"),(0,o.kt)("p",null,"As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create 3 networks (private virtual switches in Hyper-V) without DHCP: Red, Green, Blue"),(0,o.kt)("li",{parentName:"ul"},"Create 6 VMs {red,green,blue}-{a,b} ","[e.g. red-a, red-b, green-a,\u2026.]",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use UI-less (server) ubuntu SKU (choose last LTS)"),(0,o.kt)("li",{parentName:"ul"},"Verify that they indeed ",(0,o.kt)("strong",{parentName:"li"},"fail")," to acquire IP address, as there's no DHCP"))),(0,o.kt)("li",{parentName:"ul"},'Create 1 VM "router"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Have 4 NICS attached to this VM",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"3 pointing to red/green/blue networks---"),(0,o.kt)("li",{parentName:"ul"},"4th - direct ethernet access of your home network",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You should get auto-assigned IP address here in the same subnet as your host machine"),(0,o.kt)("li",{parentName:"ul"},"Do NOT use NAT and/or host-only networking"))))))),(0,o.kt)("li",{parentName:"ul"},"Install open-source (preferably from ISC) dhcp server on the router (dhcpd)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Allocate thee different subnets for your networks and configure dhcp server to allocate IPs for other VMs"))),(0,o.kt)("li",{parentName:"ul"},"Configure routing on the router to ensure that VMs from each network can access other networks"),(0,o.kt)("li",{parentName:"ul"},"Configure NAT (specifically SNAT) on the router so VMs can reach internet. U can use 8.8.8.8 as a DNS server for now (Google's public dns) or your ISP dns (or your home router)"),(0,o.kt)("li",{parentName:"ul"},"Use iptables to block internet access for the red network"),(0,o.kt)("li",{parentName:"ul"},"Use your iptables policy to deny(or drop) -by default and use explicit allow-listing for everything. Ensure everything continues to work (DHCP, SNAT, etc)."),(0,o.kt)("li",{parentName:"ul"},"Experiment with various Iptables rules by allowing/disallowing routing between RED/BLUE/GREEN network and verify if it is working but leave that in a state where it is allowed by explicit rules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Install your own DNS server on router VM (with recursive mode) on router and update dhcp to use this one"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Configure DNS server to host three domains .red .blue .green so each VM gets a host name within these domains. Use DHCP to communicate domain name suffix for each VMs. Ensure that DNS server is forwarding traffic to the internet to be able to resolve hosts like")," ",(0,o.kt)("a",{parentName:"li",href:"http://www.microsoft.com/"},(0,o.kt)("em",{parentName:"a"},"www.microsoft.com"))," ",(0,o.kt)("em",{parentName:"li"},"from your blue/red/green networks."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bonus point \u2013 (optional) find a way how to ensure that hosts in a red network can resolve ","*",".{green,red,blue} names but can't resolve internet hostnames"))))),(0,o.kt)("li",{parentName:"ul"},"Simulate ARPOISON attack.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Learn how to use arp tool, run it on various vms to inspect state of local ARP cache."),(0,o.kt)("li",{parentName:"ul"},"Add third Evil-VM in GREEN network"),(0,o.kt)("li",{parentName:"ul"},"Learn how to use arping tool on Evil-VM."),(0,o.kt)("li",{parentName:"ul"},"Mount arpoinson attack on Evil-VM so you can intercept traffic between TWO other green VMs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Try to script arpoison attack yourself, without using C sources \u2013 by running arping in a loop in a shell script (if that's possible)"))),(0,o.kt)("li",{parentName:"ul"},"Mount arpoison attack in such a way that both router and two other VMs have poisoned ARP cache leading to resolving all addresses to the Evil-VM.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure that Evil-VM can see all the traffic"),(0,o.kt)("li",{parentName:"ul"},"Figure out how to configure Evil-VM such that everything continues to work, traffic flows (except that it is maybe slower) and green VMs + router do not suspect that the traffic is routed through the evil VM."))))),(0,o.kt)("li",{parentName:"ul"},"Move your DNS and DHCP server to the VMs in the blue network.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'You\'d need to use "DHCP relay agent" aka "DHCP forwarder" to operate on the router'))),(0,o.kt)("li",{parentName:"ul"},"Install nginx HTTP server into the red network serving simplest static hello-world page. Make this server externally accessible from the internet (so I can hit it).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You'd need to configure DNAT for specific port on your router VM and yet another DNAT on your cable modem."),(0,o.kt)("li",{parentName:"ul"},"This will only work if your modem has that feature (might be called port forwarding or port mapping) and if your ISP gives you a globally routable IP address."),(0,o.kt)("li",{parentName:"ul"},"Note that we want this to be accessible from internet and simultaneously preserve the restriction introduced above so red network can't initiate outbound traffic from the internet."),(0,o.kt)("li",{parentName:"ul"},"Read about connection state tracking in iptables."))),(0,o.kt)("li",{parentName:"ul"},"SSH to internal servers via router"),(0,o.kt)("li",{parentName:"ul"},"Create a small-sku VM in Azure with globally routable IP address",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure you have SSH server running there accessible from your home network"))),(0,o.kt)("li",{parentName:"ul"},"Install openvpn server into Azure-VM on so you can connect from your home network and have internet access hiding your home IP address."),(0,o.kt)("li",{parentName:"ul"},"Modify router VM by installing openvpn client there to connect to Azure-VM and route/NAT every outgoing internet traffic to the Azure-VM so when you ping from BLUE net to ",(0,o.kt)("a",{parentName:"li",href:"http://www.microsoft.com/"},"www.microsoft.com")," the latter sees the Azure-VM address."),(0,o.kt)("li",{parentName:"ul"},"Create alternative tunnel impl. Using socat on both sides of tunnel"),(0,o.kt)("li",{parentName:"ul"},"Forget about both openvpn and assume for now there's no way to do ingress into your home network from internet. Bypass this limitation with following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Install ssh server on one of the VMs in BLUE network."),(0,o.kt)("li",{parentName:"ul"},'Create "reverse ssh" flow so you can connect from Azure-VM into the BLUE network.'),(0,o.kt)("li",{parentName:"ul"},'Using that reverse SSH create port forwarding which would allow you to run "curl ',(0,o.kt)("a",{parentName:"li",href:"http://localhost:8080/"},"http://localhost:8080"),'" on azure VM and reach your nginx webserver in the RED network.'))),(0,o.kt)("li",{parentName:"ul"},"Optional: configure boot server as part of DHCP, try to bring up VM that uses network boot to install OS"),(0,o.kt)("li",{parentName:"ul"},"Anycast UDP. We pretend now that red, green, and blue are different geo-regions. We'll place the same IP address 42.42.42.42 in each of the region intentionally violating constraint of uniqueness of globally-routable IP address. By doing this we will mimic how Googe's public DNS server with ip address 8.8.8.8 is setup as well as how things like ATM (Azure Traffic Manager) or Global CDNs work.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Reconfigure 1 green VM, 1red and 1 one blue to have static IP address, configure secondary static IP address 42.42.42.42 on the NIC for each VM."),(0,o.kt)("li",{parentName:"ul"},"You'll have therefore 3 machines with non-unique IP address 42.42.42.42."),(0,o.kt)("li",{parentName:"ul"},'Launch some simple UDP server on port 1234 on each of those VMs bound exlusively to the IP address 42.42.42.42. Make sure it responds with VM name. You don\'t need to write new code. You can use "socat" tool. Learn how to use it it\'s a "swiss army knife" even more powerful than NetCat (aka nc).'),(0,o.kt)("li",{parentName:"ul"},"Configure router VM such as if someone tries to route to the 42.42.42.42 it can route traffic to ANY of the machines. (anycast rounting) Validate this by connecting with netcat/nc tool or socat tool from your home network to ip address 42.42.42.42:1234 which is routed to your router - you should get different responses since you should be reaching different VMs."))),(0,o.kt)("li",{parentName:"ul"},"BGP routing (optional, hard). Goal \u2013 understand what makes Internet the internet and how traffic is routed at a global level.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read about BGP."),(0,o.kt)("li",{parentName:"ul"},"Turn red/green/blue network into simulated Autonomous Systems (AS)"),(0,o.kt)("li",{parentName:"ul"},'Add "yellow" AS, and connect it directly to the green and blue, but not red.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Three will be 3 routers therefore, one existing router-vm (router1), with following connectivity",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"green\\<-",">","router1, red\\<-",">","router1, blue\\<-",">"," router1"))),(0,o.kt)("li",{parentName:"ul"},"And 2 more routers. You can turn existing VMs with static Ips in green and blue into routers by adding additional nic.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"yellow\\<-",">","router2, green\\<-",">","router2"),(0,o.kt)("li",{parentName:"ul"},"yellow\\<-",">","router3, blue\\<-",">","router3"))),(0,o.kt)("li",{parentName:"ul"},"Draw a topology manually and observe that there's bunch of alternate routes"),(0,o.kt)("li",{parentName:"ul"},"Ensure that routing works automatically via BGP and you don't need to touch router1 when adding router23"),(0,o.kt)("li",{parentName:"ul"},"Since there's multiple paths between some of the VMs via different routers, they can be exploited if one of the router fails. Simulate the failure by shutting down the router and ensure re-routing happens.")))))))}h.isMDXComponent=!0}}]);