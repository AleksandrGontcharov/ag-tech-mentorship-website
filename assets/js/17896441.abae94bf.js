(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[7918],{1310:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(87462),s=a(67294),l=a(86010),r=a(35281),o=a(52802),c=a(48596),i=a(39960),d=a(95999),m=a(44996);function u(e){return s.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),s.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function p(){const e=(0,m.Z)("/");return s.createElement("li",{className:"breadcrumbs__item"},s.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},s.createElement(u,{className:b.breadcrumbHomeIcon})))}const h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function j(e){let{children:t,href:a,isLast:n}=e;const l="breadcrumbs__link";return n?s.createElement("span",{className:l,itemProp:"name"},t):a?s.createElement(i.Z,{className:l,href:a,itemProp:"item"},s.createElement("span",{itemProp:"name"},t)):s.createElement("span",{className:l},t)}function g(e){let{children:t,active:a,index:r,addMicrodata:o}=e;return s.createElement("li",(0,n.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,s.createElement("meta",{itemProp:"position",content:String(r+1)}))}function v(){const e=(0,o.s1)(),t=(0,c.Ns)();return e?s.createElement("nav",{className:(0,l.Z)(r.k.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},s.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&s.createElement(p,null),e.map(((t,a)=>{const n=a===e.length-1;return s.createElement(g,{key:a,active:n,index:a,addMicrodata:!!t.href},s.createElement(j,{href:t.href,isLast:n},t.label))})))):null}},30230:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>X});var n=a(67294),s=a(1944),l=a(902);const r=n.createContext(null);function o(e){let{children:t,content:a}=e;const s=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(r.Provider,{value:s},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(86010),m=a(87524),u=a(4966);function b(){const{metadata:e}=c();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var p=a(23120),h=a(44364),j=a(35281),g=a(95999);function v(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return n.createElement(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:s}=e;return n.createElement("span",{className:j.k.common.lastUpdated},n.createElement(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(v,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:s?n.createElement(E,{lastUpdatedBy:s}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(87462);const _={iconEdit:"iconEdit_Z9Sw"};function Z(e){let{className:t,...a}=e;return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(_.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function N(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:j.k.common.editThisPage},n.createElement(Z,null),n.createElement(g.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var L=a(39960);const C={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function y(e){let{permalink:t,label:a,count:s}=e;return n.createElement(L.Z,{href:t,className:(0,d.Z)(C.tag,s?C.tagWithCount:C.tagRegular)},a,s&&n.createElement("span",null,s))}const T={tags:"tags_jXut",tag:"tag_QGVx"};function U(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(g.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(T.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:T.tag},n.createElement(y,{label:t,permalink:a}))}))))}const w={lastUpdated:"lastUpdated_vwxv"};function x(e){return n.createElement("div",{className:(0,d.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(U,e)))}function z(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:l}=e;return n.createElement("div",{className:(0,d.Z)(j.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",w.lastUpdated)},(a||s)&&n.createElement(f,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:s})))}function A(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:l,tags:r}=e,o=r.length>0,i=!!(t||a||l);return o||i?n.createElement("footer",{className:(0,d.Z)(j.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(x,{tags:r}),i&&n.createElement(z,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:s})):null}var M=a(86043),B=a(93743);const I={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function V(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,k.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",I.tocCollapsibleButton,!t&&I.tocCollapsibleButtonExpanded,a.className)}),n.createElement(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const H={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function D(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:l}=e;const{collapsed:r,toggleCollapsed:o}=(0,M.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(H.tocCollapsible,!r&&H.tocCollapsibleExpanded,a)},n.createElement(V,{collapsed:r,onClick:o}),n.createElement(M.z,{lazy:!0,className:H.tocCollapsibleContent,collapsed:r},n.createElement(B.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:l})))}const P={tocMobile:"tocMobile_ITEo"};function O(){const{toc:e,frontMatter:t}=c();return n.createElement(D,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(j.k.docs.docTocMobile,P.tocMobile)})}var S=a(39407);function F(){const{toc:e,frontMatter:t}=c();return n.createElement(S.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var R=a(92503),q=a(25598);function G(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(j.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(R.Z,{as:"h1"},a)),n.createElement(q.Z,null,t))}var W=a(1310);const J={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Q(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),s=e.hide_table_of_contents,l=!s&&t.length>0;return{hidden:s,mobile:l?n.createElement(O,null):void 0,desktop:!l||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(F,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&J.docItemCol)},n.createElement(p.Z,null),n.createElement("div",{className:J.docItemContainer},n.createElement("article",null,n.createElement(W.Z,null),n.createElement(h.Z,null),a.mobile,n.createElement(G,null,t),n.createElement(A,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function X(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(s.FG,{className:t},n.createElement(i,null),n.createElement(Q,null,n.createElement(a,null))))}},4966:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(87462),s=a(67294),l=a(95999),r=a(86010),o=a(39960);function c(e){const{permalink:t,title:a,subLabel:n,isNext:l}=e;return s.createElement(o.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&s.createElement("div",{className:"pagination-nav__sublabel"},n),s.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return s.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&s.createElement(c,(0,n.Z)({},t,{subLabel:s.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&s.createElement(c,(0,n.Z)({},a,{subLabel:s.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(67294),s=a(86010),l=a(95999),r=a(35281),o=a(74477);function c(e){let{className:t}=e;const a=(0,o.E)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},23120:(e,t,a)=>{"use strict";a.d(t,{Z:()=>j});var n=a(67294),s=a(86010),l=a(52263),r=a(39960),o=a(95999),c=a(80143),i=a(35281),d=a(60373),m=a(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:s}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:s},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,l.Z)(),{pluginId:o}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(o),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,c.Jo)(o),j=u??(g=h).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,s.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:j.path,onClick:()=>m(h.name)})))}function j(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}},46700:(e,t,a)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=46700}}]);