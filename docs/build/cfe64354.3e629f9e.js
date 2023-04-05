(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),i=(a(0),a(94)),c={id:"sorceries",title:"Sorceries Route",sidebar_label:"Sorceries",slug:"/sorceries"},b={unversionedId:"sorceries",id:"sorceries",isDocsHomePage:!1,title:"Sorceries Route",description:"Introduction",source:"@site/docs\\sorceries.md",slug:"/sorceries",permalink:"/docs/sorceries",version:"current",sidebar_label:"Sorceries",sidebar:"someSidebar",previous:{title:"Shields Route",permalink:"/docs/shields"},next:{title:"Spirits Route",permalink:"/docs/spirits"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Sample Result",id:"sample-result",children:[]},{value:"Route",id:"route",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={rightToc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This route fetches a list of all sorceries that can be obtained in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output."),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"ATTRIBUTE"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"TYPE"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"Id of the sorcery")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"Name of the sorcery")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"image"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"Image URL of the sorcery icon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"description"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"Short description of the sorcery")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"Type of Incantation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cost"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"Cost in FP to cast this sorcery once")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"slots"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"How many skill slots equipping this sorcery consumes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"effects"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"What this sorcery does")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"requires"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"{ name: string, amount: number }")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"What attributes and what amount is required to cast this sorcery")))),Object(i.b)("h2",{id:"sample-result"},"Sample Result"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  success: true,\n  count: 2,\n  data: [{\n      id: "17f69548207l0hykrjxtjpw45plt0o",\n      name: "Ambush Shard",\n      image: "https://eldenring.fanapis.com/images/sorceries/17f69548207l0hykrjxtjpw45plt0o.png",\n      description: "One of the night sorceries of Sellia, Town of Sorcery. Launches a projectile from a distance removed from the caster, so as to strike the enemy from behind. This sorcery can be cast repeatedly. The Sellian sorcerers were assassins, and it is said that they often hunted their fellows.",\n      type: "Sorceries",\n      cost: 16,\n      slots: 1,\n      effects: "Strikes from behind with projectile fired from distance",\n      requires: [{\n          name: "Intelligence",\n          amount: 23\n        },\n        {\n          name: "Faith",\n          amount: 0\n        },\n        {\n          name: "Arcane",\n          amount: 0\n        }\n      ]\n    },\n    {\n      id: "17f69526092l0hykrkfqubdcrri5ri",\n      name: "Carian Phalanx",\n      image: "https://eldenring.fanapis.com/images/sorceries/17f69526092l0hykrkfqubdcrri5ri.png",\n      description: "One of the sorceries of the Carian royal family.",\n      type: "Sorceries",\n      cost: 26,\n      slots: 1,\n      effects: "Forms a defensive arch of numerous magic glintblades",\n      requires: [{\n          name: "Intelligence",\n          amount: 34\n        },\n        {\n          name: "Faith",\n          amount: 0\n        },\n        {\n          name: "Arcane",\n          amount: 0\n        }\n      ]\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"route"},"Route"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"METHOD"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"URL"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/sorceries"}),"https://eldenring.fanapis.com/api/sorceries")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"This route retrieves a list of all the sorceries of ",Object(i.b)("strong",{parentName:"td"},"Elden Ring"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/sorceries/:sorcery_id"}),"https://eldenring.fanapis.com/api/sorceries/:sorcery_id")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"This route retrieves one ",Object(i.b)("strong",{parentName:"td"},"Elden Ring")," sorcery using its ID.")))),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"This route supports the following parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"default value"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Example URL"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"limit")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"20"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/sorceries?limit=100"}),"https://eldenring.fanapis.com/api/sorceries?limit=100")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"This parameter is used to set the maximum amount of items in the response")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"page")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"0"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/sorceries?limit=20&page=3"}),"https://eldenring.fanapis.com/api/sorceries?limit=20&page=3")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"This parameter is used no navigate between pages of results")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/sorceries?name=Carian%20Phalanx"}),"https://eldenring.fanapis.com/api/sorceries?name=Carian%20Phalanx")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"This parameter is used to search for fields by their names")))))}l.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,O=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return a?n.a.createElement(O,b(b({ref:t},s),{},{components:a})):n.a.createElement(O,b({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);