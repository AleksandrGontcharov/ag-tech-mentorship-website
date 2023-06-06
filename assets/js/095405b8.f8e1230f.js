"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:2},r="\u2705 OAuth and OpenID Connect",l={unversionedId:"specialized-topics/authentication/oauth-and-opneid-connect",id:"specialized-topics/authentication/oauth-and-opneid-connect",title:"\u2705 OAuth and OpenID Connect",description:"Sources:",source:"@site/docs/specialized-topics/authentication/1..oauth-and-opneid-connect.md",sourceDirName:"specialized-topics/authentication",slug:"/specialized-topics/authentication/oauth-and-opneid-connect",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/authentication/oauth-and-opneid-connect",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/specialized-topics/authentication/1..oauth-and-opneid-connect.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u2705 OpenID Connect Flows",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/authentication/oidc-flows"},next:{title:"\ud83d\udc80 Historical Attacks",permalink:"/ag-tech-mentorship-website/docs/specialized-topics/cybersecurity/Week 2/historical-attacks"}},s={},c=[{value:"History",id:"history",level:3},{value:"Delegated Authorization Flow Basic",id:"delegated-authorization-flow-basic",level:3},{value:"OAuth Terminology",id:"oauth-terminology",level:3},{value:"Why do we need a code and not just get the access token right away?",id:"why-do-we-need-a-code-and-not-just-get-the-access-token-right-away",level:3},{value:"Delegated Authorization Flow Detailed",id:"delegated-authorization-flow-detailed",level:3},{value:"Authorization code flow",id:"authorization-code-flow",level:3},{value:"Back to history",id:"back-to-history",level:4},{value:"OpenID Connect (OIDC)",id:"openid-connect-oidc",level:3}],h={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-oauth-and-openid-connect"},"\u2705 OAuth and OpenID Connect"),(0,o.kt)("p",null,"Sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Oauth 2.0 and OpenID Connect (in plain English)")),(0,o.kt)("h3",{id:"history"},"History"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Simple login or forms authentication is the simple type of authentication."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Username and password form "),(0,o.kt)("li",{parentName:"ul"},"Backend website code looks up if this combination of username and password exists",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hash password"),(0,o.kt)("li",{parentName:"ul"},"Verify Hash"),(0,o.kt)("li",{parentName:"ul"},"Look up user info"),(0,o.kt)("li",{parentName:"ul"},"Look up authorization info"),(0,o.kt)("li",{parentName:"ul"},"Application would drop a cookie into the web browser to keep track of the user")))),(0,o.kt)("p",null,"The above is how authentication started on the web.  But the industry has moved away from this because of the following downsides:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Security - keeping up to date with the latest cryptography standards"),(0,o.kt)("li",{parentName:"ol"},"Maintenance - maintaining your own code and server")),(0,o.kt)("p",null,"OAuth 2.0 and OpenID connect are becoming the industry best practice for solving these problems."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is a lot of confusion around OAuth around the web.  Why?"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"A lot of jargon and terminology around these technologies. The online resources talk to you as if you are already familiar with the terms, and if you aren't, you won't understand what they are saying."),(0,o.kt)("li",{parentName:"ul"},"A lot of incorrect and conflicting information. "))),(0,o.kt)("p",null,"Identity Use Cases (pre-2010)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple login (forms and cookies)"),(0,o.kt)("li",{parentName:"ul"},"Single sign-on (SSO) across sites, was done with a protocol called SAML. It is still used today sometimes. SAML works, but has a reputation for being difficult to work with as a developer. "),(0,o.kt)("li",{parentName:"ul"},"Mobile app login (???) - If we wanted someone to log into an app and stay logged in - this was a new challenge and there wasn't a universal way to do it."),(0,o.kt)("li",{parentName:"ul"},"Delegated authorization (???) - This is where the OAuth protocol started. There was no good way to do it back then. There is an infamous example on yelp where they asked for your actual Gmail password in order to get access to your friends' email addresses to email them (and they promised to throw away your password after...).")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("h3",{parentName:"admonition",id:"delegated-authorization-problem"},"Delegated Authorization Problem"),(0,o.kt)("p",{parentName:"admonition"},"This is the pattern where you let another site have access to ",(0,o.kt)("em",{parentName:"p"},"some"),' of your information from another site. E.g. Do you want to let site x, have access to your Facebook profile? You click "yes" and now you have another account have access to your Facebook information')),(0,o.kt)("h3",{id:"delegated-authorization-flow-basic"},"Delegated Authorization Flow Basic"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'You arrive at a website, and it says "Connect with Google". You click on it and get redirected to a Google domain and be prompted to log in. '),(0,o.kt)("li",{parentName:"ol"},'Assuming you\'re logged in successfully, you will see something like "Allow Site X to have access to access your public profile and contacts. Do you want to allow this" The user has to consent.'),(0,o.kt)("li",{parentName:"ol"},"Assuming the user clicks Yes, we are redirected back to the application to a special page called the callback/redirect URI. Now there is a permission for Site X to talk to some API (e.g. the Google contacts API) and be able to retrieve your contacts")),(0,o.kt)("h3",{id:"oauth-terminology"},"OAuth Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource owner - the user who can click yes, who owns the data that the application wants access to."),(0,o.kt)("li",{parentName:"ul"},"Client - the application that wants access to the resource owner's data."),(0,o.kt)("li",{parentName:"ul"},'Authorization server - the system that you can use to say "yes" - you consent to the application having access to your data. (in the example, it is part of accounts.google.com)'),(0,o.kt)("li",{parentName:"ul"},"Resource server - the API that holds the data that the application wants access to (in the example, the Google contacts API)"),(0,o.kt)("li",{parentName:"ul"},"Authorization grant - The thing that proves that the user has clicked yes and allows the application the authorization to read the user's data."),(0,o.kt)("li",{parentName:"ul"},"Redirect URI - The authorization server needs to know where to redirect once the user gives consent."),(0,o.kt)("li",{parentName:"ul"},'Access token - The "key" that the client needs to get the needed data.'),(0,o.kt)("li",{parentName:"ul"},"Scope - the ",(0,o.kt)("em",{parentName:"li"},"level")," of permissions requested. For example, you can grant the client the ability to read the contacts, but not the ability to delete the contacts.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The authorization server has a list of scopes that it understands. e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"contacts.read"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"email.read"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"contacts.write"),"."))),(0,o.kt)("li",{parentName:"ul"},"Consent - The screen given to the resource owner that lets you know which scopes are being requested by the client.")),(0,o.kt)("h3",{id:"why-do-we-need-a-code-and-not-just-get-the-access-token-right-away"},"Why do we need a code and not just get the access token right away?"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Back channel (highly secure channel)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The request is going from a backend server to an API"))),(0,o.kt)("li",{parentName:"ul"},"Front channel (less secure channel)",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"* The browser is sending a request to an API.\n    * Less secure because some information can leak from the browser (e.g. inspect/html code/network console)\n")),"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization code flow")," is a front channel flow, designed to take advantage of the front channel in the most secure way.")),(0,o.kt)("h3",{id:"delegated-authorization-flow-detailed"},"Delegated Authorization Flow Detailed"),(0,o.kt)("p",null,"(Authorization Code Flow)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'(front channel) You arrive at a website, and it says "Connect with Google". You click on it and get redirected to a Google domain and be prompted to log in. '),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Here you are going from the client to the authorization server, and also passing along some information: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Redirect URI: ",(0,o.kt)("inlineCode",{parentName:"li"},"clientdomain(dot)com/callback")," send me back to this URI when finished"),(0,o.kt)("li",{parentName:"ul"},"Response Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Code")," (the authorization grant requested - there are different kinds of authorization grants)"),(0,o.kt)("li",{parentName:"ul"},"Scopes: ",(0,o.kt)("inlineCode",{parentName:"li"},"contacts.read")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'(front channel) Assuming you\'re logged in successfully, you will see something like "Allow Site X to have access to access your public profile and contacts. Do you want to allow this" The user has to consent.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(front channel) Assuming the user clicks Yes, we are redirected back to the application to a special page called the callback/redirect URI. Now there is a permission for Site X to talk to some API (e.g. the Google contacts API) and be able to retrieve your contacts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Redirected back with the authorization grant of type code"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"At this point, the client can't do much with this authorization code. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'(back channel) What it can do is to go back to the authorization server and say - "Can I exchange this code for an Access Token?". The authorization server ensures that the code is valid, and provides the access token.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The reason the back channel is used, is so that when the access token is being requested, the backend server also sends along some kind of secret key that only the backend server knows. This prevents anyone else who has the authorization code to request an access token. This secret key should never be in the browser."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, the client can use the access token to get access to the Google contacts, and the Google contacts API will allow this because the access token proves that the client is authorized to get this information. The access token is ",(0,o.kt)("em",{parentName:"p"},"scoped")," to limit the client to the requested scopes in step 1."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(back channel) This is also done on the back channel since, theoretically, anyone with the access token can call the API, and this access token can be intercepted if it is done through the front channel.")))),(0,o.kt)("h3",{id:"authorization-code-flow"},"Authorization code flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Authorization code flow (front channel + back channel)"),(0,o.kt)("li",{parentName:"ol"},"Implicit (front channel only)"),(0,o.kt)("li",{parentName:"ol"},"Resource owner password credentials (back channel only)"),(0,o.kt)("li",{parentName:"ol"},"Client credentials (back channel only)")),(0,o.kt)("h4",{id:"back-to-history"},"Back to history"),(0,o.kt)("p",null,"Pre-2014 people were using OAuth 2.0 (meant for authorization) for authentication. OAuth was never designed to be used for authentication! "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In OAuth, there's no standard way to get the user's information, since OAuth was designed for scopes. "),(0,o.kt)("li",{parentName:"ul"},"No Common set of scopes"),(0,o.kt)("li",{parentName:"ul"},"Every implementation of authentication is a little difference")),(0,o.kt)("p",null,"All the different companies created custom hacks on top of OAuth to create authentication, each solving the problems such as getting the user info. All of these implementations were a little different."),(0,o.kt)("h3",{id:"openid-connect-oidc"},"OpenID Connect (OIDC)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OAuth 2.0 + Authentication extension.")),(0,o.kt)("p",null,"OpenID Connect (OIDC) extends the OAuth 2.0 authorization protocol for use as an additional authentication protocol. You can use OIDC to enable single sign-on (SSO) between your OAuth-enabled applications by using a security token called an\xa0",(0,o.kt)("em",{parentName:"p"},"ID token"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ID Token")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UserInfo endpoint for getting more user information"),(0,o.kt)("li",{parentName:"ul"},"Standard set of scopes"),(0,o.kt)("li",{parentName:"ul"},"Standardized implementation")),(0,o.kt)("p",null,'"Log in with Google"'),(0,o.kt)("p",null,"scope: ",(0,o.kt)("inlineCode",{parentName:"p"},"openid profile")),(0,o.kt)("p",null,"The authorization code can be used to fetch user's information."))}d.isMDXComponent=!0}}]);