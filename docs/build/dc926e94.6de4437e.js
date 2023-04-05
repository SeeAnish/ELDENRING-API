(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),i=(a(0),a(94)),c={id:"classes",title:"Classes Route",sidebar_label:"Classes",slug:"/classes"},b={unversionedId:"classes",id:"classes",isDocsHomePage:!1,title:"Classes Route",description:"Introduction",source:"@site/docs\\classes.md",slug:"/classes",permalink:"/docs/classes",version:"current",sidebar_label:"Classes",sidebar:"someSidebar",previous:{title:"Bosses Route",permalink:"/docs/bosses"},next:{title:"Creatures Route",permalink:"/docs/creatures"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Sample Result",id:"sample-result",children:[]},{value:"Route",id:"route",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={rightToc:s};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This route fetches a list of the initial classes that can be selected in Elden Ring's character creation, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output."),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ATTRIBUTE"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"TYPE"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Id of the class")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Name of the class")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"image"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Image URL of the class character using the initial equipment provided")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Short description of the class")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stats"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"{ level: string, vigor: string, mind: string, endurance: string, strength: string, dexterity: string, intelligence: string, faith: string, arcane: string}")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Initial stats of the class")))),Object(i.b)("h2",{id:"sample-result"},"Sample Result"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  success: true,\n  count: 2,\n  data: [{\n      id: "17f69d71826l0i32gkm3ndn3kywxqj",\n      name: "Hero",\n      image: "https://eldenring.fanapis.com/images/classes/17f69d71826l0i32gkm3ndn3kywxqj.png",\n      description: "A stalwart Hero, at home with a battleaxe, descended from a badlands chieftain",\n      stats: {\n        level: "7",\n        vigor: "14",\n        mind: "9",\n        endurance: "12",\n        strength: "16",\n        dexterity: "9",\n        inteligence: "7",\n        faith: "8",\n        arcane: "11"\n      }\n    },\n    {\n      id: "17f69b2dd76l0i32gljr3f62pkzhjo",\n      name: "Warrior",\n      image: "https://eldenring.fanapis.com/images/classes/17f69b2dd76l0i32gljr3f62pkzhjo.png",\n      description: "A twinblade wielding warrior from a nomadic tribe. An origin of exceptional technique",\n      stats: {\n        level: "8",\n        vigor: "11",\n        mind: "12",\n        endurance: "11",\n        strength: "10",\n        dexterity: "16",\n        inteligence: "10",\n        faith: "8",\n        arcane: "9"\n      }\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"route"},"Route"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"METHOD"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"URL"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/classes"}),"https://eldenring.fanapis.com/api/classes")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This route retrieves a list of all the classes in ",Object(i.b)("strong",{parentName:"td"},"Elden Ring"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/classes/:class_id"}),"https://eldenring.fanapis.com/api/classes/:class_id")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This route retrieves one ",Object(i.b)("strong",{parentName:"td"},"Elden Ring")," class using its ID.")))),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"This route supports the following parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"default value"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Example URL"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"limit")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/classes?limit=100"}),"https://eldenring.fanapis.com/api/classes?limit=100")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This parameter is used to set the maximum amount of items in the response")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"page")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/classes?limit=20&page=3"}),"https://eldenring.fanapis.com/api/classes?limit=20&page=3")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This parameter is used no navigate between pages of results")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://eldenring.fanapis.com/api/classes?name=Hero"}),"https://eldenring.fanapis.com/api/classes?name=Hero")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"This parameter is used to search for fields by their names")))))}o.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,O=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(O,b(b({ref:t},l),{},{components:a})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);