"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:3},s="\ud83d\udda5\ufe0fVM Setup",a={unversionedId:"specialized-topics/networking/vm-setup",id:"specialized-topics/networking/vm-setup",title:"\ud83d\udda5\ufe0fVM Setup",description:"---",source:"@site/docs/specialized-topics/networking/vm-setup.md",sourceDirName:"specialized-topics/networking",slug:"/specialized-topics/networking/vm-setup",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/vm-setup",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/networking/vm-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u2705Progress",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/progress"},next:{title:"\u27a1\ufe0f OSI Model",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/networking/concepts/osi-model"}},c={},p=[{value:"Remove login on startup",id:"remove-login-on-startup",level:3},{value:"Change the hostname",id:"change-the-hostname",level:3},{value:"Remove the password when using sudo",id:"remove-the-password-when-using-sudo",level:3},{value:"Set a nice terminal experience",id:"set-a-nice-terminal-experience",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0fvm-setup"},"\ud83d\udda5\ufe0fVM Setup"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The following configurations are recommended ",(0,o.kt)("strong",{parentName:"p"},"for this exercise only")," in order to save time."),(0,o.kt)("p",null,"If you set up one ",(0,o.kt)("inlineCode",{parentName:"p"},"VM")," with these settings - you can clone these settings to other VMs."),(0,o.kt)("h3",{id:"remove-login-on-startup"},"Remove login on startup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo vim /etc/systemd/system/getty.target.wants/getty@tty1.service\n\n## Change it to the following\nExecStart=-/sbin/agetty --autologin root --noclear %I $TERM\n")),(0,o.kt)("h3",{id:"change-the-hostname"},"Change the hostname"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## Change the hostname\nsudo hostnamectl set-hostname newhostname\n## edit hosts file\nsudo vim /etc/hosts\n## Reboot\nsudo reboot\n")),(0,o.kt)("h3",{id:"remove-the-password-when-using-sudo"},"Remove the password when using sudo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo visudo\n\n## Add this to the bottom of the file\n\n<username> ALL=(ALL) NOPASSWD:ALL\n")),(0,o.kt)("h2",{id:"set-a-nice-terminal-experience"},"Set a nice terminal experience"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# add this to .bashrc\nforce_color_prompt=yes\n# add this to .profile\nif [ -f ~/.bashrc ]; then\n. ~/.bashrc\nfi\n# add this to .inputrc\n"\\e[A": history-search-backward\n"\\e[B": history-search-forward\n')))}d.isMDXComponent=!0}}]);