"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[4230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="\ue795 dhcpd",c={unversionedId:"specialized-topics/networking/commands/dhcpd",id:"specialized-topics/networking/commands/dhcpd",title:"\ue795 dhcpd",description:"_",source:"@site/docs/specialized-topics/networking/commands/dhcpd.md",sourceDirName:"specialized-topics/networking/commands",slug:"/specialized-topics/networking/commands/dhcpd",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/commands/dhcpd",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/commands/dhcpd.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ue795 netplan",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/commands/netplan"},next:{title:"\ue795 iptables",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/commands/ip-tables"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Configure dhcpd",id:"configure-dhcpd",level:2}],l={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-dhcpd"},"\ue795 dhcpd"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dhcpd")," assigns IP addresses to devices on a network."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ubuntu.com/server/docs/network-dhcp"},"Documentation")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install isc-dhcp-server\n")),(0,o.kt)("h2",{id:"configure-dhcpd"},"Configure dhcpd"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"After changing the config files you need to restart the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"dhcpd"),"\xa0service:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf # Check syntax\nsudo systemctl restart isc-dhcp-server.service # Restart service\n"))),(0,o.kt)("p",null,"This configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/dhcp/dhcpd.conf\n")),(0,o.kt)("p",null,"has the format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'default-lease-time 600; # Set the default lease time for DHCP clients to 600 seconds (10 minutes)\nmax-lease-time 7200; # Set the maximum lease time for DHCP clients to 7200 seconds (2 hours)\n\nsubnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.150 192.168.1.200; # Specify the range of IP addresses that will be assigned to DHCP clients\n  option routers 192.168.1.254; # Specify the IP address of the default gateway for DHCP clients\n  option domain-name-servers 192.168.1.1, 192.168.1.2; # Specify the IP addresses of the DNS servers to use for name resolution\n  option domain-name "mydomain.example"; # Specify the domain name for the network\n}\n')))}m.isMDXComponent=!0}}]);