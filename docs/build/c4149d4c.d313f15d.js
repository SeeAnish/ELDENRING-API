(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(94)),b={id:"talismans",title:"Talismans Route",sidebar_label:"Talismans",slug:"/talismans"},c={unversionedId:"talismans",id:"talismans",isDocsHomePage:!1,title:"Talismans Route",description:"Introduction",source:"@site/docs\\talismans.md",slug:"/talismans",permalink:"/docs/talismans",version:"current",sidebar_label:"Talismans",sidebar:"someSidebar",previous:{title:"Spirits Route",permalink:"/docs/spirits"},next:{title:"Weapons Route",permalink:"/docs/weapons"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Sample Result",id:"sample-result",children:[]},{value:"Route",id:"route",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This route fetches a list of all talismans that can be obtained in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output."),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ATTRIBUTE"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"TYPE"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Id of the Talisman")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Name of the Talisman")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"image"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Image URL of the Talisman icon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Short description of the Talisman")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"effects"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"What happens when we equip this Talisman")))),Object(i.b)("h2",{id:"sample-result"},"Sample Result"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  success: true,\n  count: 2,\n  data: [{\n      id: "17f69dfff40l0i2soo71h481xlxzx8i",\n      name: "Arrow\'s Reach Talisman",\n      image: "https://eldenring.fanapis.com/images/talismans/17f69dfff40l0i2soo71h481xlxzx8i.png",\n      description: "A talisman depicting three arrows. Carried by hunters of beasts.",\n      effect: "Increases bow effective range."\n    },\n    {\n      id: "17f69c74ab1l0i2sp8u8ehul0cxenh",\n      name: "Axe Talisman",\n      image: "https://eldenring.fanapis.com/images/talismans/17f69c74ab1l0i2sp8u8ehul0cxenh.png",\n      description: "A talisman depicting an axe and a warrior. Enhances charge attacks.",\n      effect: "Enhances charge attacks."\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"route"},"Route"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"METHOD"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"URL"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/talismans"}),"https://eldenring.fanapis.com/api/talismans")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This route retrieves a list of all the talismans of ",Object(i.b)("strong",{parentName:"td"},"Elden Ring"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/talismans/:talisman_id"}),"https://eldenring.fanapis.com/api/talismans/:talisman_id")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This route retrieves one ",Object(i.b)("strong",{parentName:"td"},"Elden Ring")," talisman using its ID.")))),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"This route supports the following parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"default value"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Example URL"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"limit")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/talismans?limit=100"}),"https://eldenring.fanapis.com/api/talismans?limit=100")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This parameter is used to set the maximum amount of items in the response")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"page")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/talismans?limit=20&page=3"}),"https://eldenring.fanapis.com/api/talismans?limit=20&page=3")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This parameter is used no navigate between pages of results")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/talismans?name=Axe%20Talisman"}),"https://eldenring.fanapis.com/api/talismans?name=Axe%20Talisman")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This parameter is used to search for fields by their names")))))}p.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,O=m["".concat(b,".").concat(d)]||m[d]||o[d]||i;return a?r.a.createElement(O,c(c({ref:t},s),{},{components:a})):r.a.createElement(O,c({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var s=2;s<i;s++)b[s]=a[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);