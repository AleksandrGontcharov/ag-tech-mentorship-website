"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[4181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4},i="Introduction",l={unversionedId:"foundational-program/docker/Introduction",id:"foundational-program/docker/Introduction",title:"Introduction",description:"Docker is an open-source platform that simplifies the process of building, shipping, and running applications in containers. Containers package an application with its dependencies, ensuring consistent behavior across different environments. Docker allows for efficient resource usage, rapid deployment, and streamlined development workflows, making it popular for both development and production environments.",source:"@site/docs/foundational-program/4-docker/Introduction.md",sourceDirName:"foundational-program/4-docker",slug:"/foundational-program/docker/Introduction",permalink:"/ag-tech-mentorship-website/docs/foundational-program/docker/Introduction",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/foundational-program/4-docker/Introduction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\uf308 Docker",permalink:"/ag-tech-mentorship-website/docs/category/-docker"},next:{title:"Programming Languages"}},s={},c=[{value:"Why Docker?",id:"why-docker",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Docker Image",id:"docker-image",level:3},{value:"Docker Container",id:"docker-container",level:3},{value:"Quick tutorial",id:"quick-tutorial",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Docker is an open-source platform that simplifies the process of building, shipping, and running applications in containers. Containers package an application with its dependencies, ensuring consistent behavior across different environments. Docker allows for efficient resource usage, rapid deployment, and streamlined development workflows, making it popular for both development and production environments."),(0,a.kt)("h2",{id:"why-docker"},"Why Docker?"),(0,a.kt)("p",null,"Docker was created to address the challenges of deploying and running applications consistently across different environments,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Addresses "dependency hell" by ensuring consistent application deployment across environments'),(0,a.kt)("li",{parentName:"ul"},"Packages applications and dependencies into lightweight, portable containers"),(0,a.kt)("li",{parentName:"ul"},"Isolates applications to reduce dependency conflicts and enable easier collaboration"),(0,a.kt)("li",{parentName:"ul"},"Improves efficiency in development, testing, and deployment processes")),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"docker-image"},"Docker Image"),(0,a.kt)("p",null,"A Docker image is like a recipe for making a running environment for an application. It usually starts with a Linux distribution as a base layer and includes everything needed, like the app itself, required tools, and settings. These images are made using a script called a Dockerfile. You can also download ready-made Docker images from online sources like Docker Hub. These pre-built images are created and maintained by others and offer ready-to-use setups for different apps, languages, and tools, often built on top of a specific Linux distribution."),(0,a.kt)("h3",{id:"docker-container"},"Docker Container"),(0,a.kt)("p",null,"A Docker container, on the other hand, is a running instance of a Docker image. Containers provide an isolated environment in which the application can execute consistently across different systems. Containers are created from images and can be started, stopped, and managed using various Docker commands."),(0,a.kt)("h2",{id:"quick-tutorial"},"Quick tutorial"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull nginx:latest\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run\n")),(0,a.kt)("p",null,"Explore the following"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensuring the docker daemon is running"),(0,a.kt)("li",{parentName:"ul"},"Two ways to build an image locally",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Explore how the image is created with different layers"))),(0,a.kt)("li",{parentName:"ul"},"DockerHub",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Exploration of docker tags"))),(0,a.kt)("li",{parentName:"ul"},"How to delete an image"),(0,a.kt)("li",{parentName:"ul"},"Building an image from a Dockerfile",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Basic docker keywords: FROM COPY CMD RUN"),(0,a.kt)("li",{parentName:"ul"},"Naming docker images"))),(0,a.kt)("li",{parentName:"ul"},"How to run an image as a container",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Persistent vs one-shot containers"))),(0,a.kt)("li",{parentName:"ul"},"Running containers, stopping containers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"detached mode"))),(0,a.kt)("li",{parentName:"ul"},"Exec/Bash into a container"),(0,a.kt)("li",{parentName:"ul"},"Docker-compose"),(0,a.kt)("li",{parentName:"ul"},"Port forwarding")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'In computer science, programs that run and exit are generally referred to as "batch" or "non-persistent" programs, whereas programs that constantly run until they are terminated are called "persistent," "long-running," or "daemon" processes.'),(0,a.kt)("p",{parentName:"admonition"},"There are various terms used to describe the two types of programs. Here's a list of some common terms for each type:"),(0,a.kt)("p",{parentName:"admonition"},"Programs that run and exit:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Batch programs"),(0,a.kt)("li",{parentName:"ol"},"Non-persistent programs"),(0,a.kt)("li",{parentName:"ol"},"One-shot programs"),(0,a.kt)("li",{parentName:"ol"},"Short-lived programs"),(0,a.kt)("li",{parentName:"ol"},"Ephemeral programs")),(0,a.kt)("p",{parentName:"admonition"},"Programs that constantly run until terminated:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Persistent programs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Long-running programs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Daemon processes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Background processes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Services (in the context of operating systems)"),(0,a.kt)("p",{parentName:"li"},"These terms may be used interchangeably to some extent, and their specific meanings might vary slightly depending on the context in which they are used. However, they generally convey the same idea of whether a program runs once and exits or continues running until it is explicitly stopped. ")))))}m.isMDXComponent=!0}}]);