(function(t){function e(e){for(var r,l,o=e[0],s=e[1],u=e[2],p=0,f=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},i=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2f49":function(t,e,n){"use strict";var r=n("7feb"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Navbar"),n("router-view",{staticClass:"container"})],1)},l=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:{name:"Blueprints"}}},[t._v("Etsala Legion")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"Blueprints"}}},[t._v("Blueprints")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:{name:"Upload"}}},[t._v("Upload Blueprints")])],1)],1)],1)},s=[],u={name:"Navbar"},c=u,p=n("2877"),f=Object(p["a"])(c,o,s,!1,null,"45e8910a",null),b=f.exports,d=n("8aa5"),v=n.n(d),m={components:{Navbar:b},data:function(){return{loggedIn:!1}},mounted:function(){var t=this;v.a.auth().onAuthStateChanged((function(e){t.loggedIn=e}))}},h=m,g=(n("5c0b"),Object(p["a"])(h,i,l,!1,null,null,null)),y=g.exports,_=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Upload")]),n("h3",[t._v("Directions")]),t._m(0),t.loading?t._e():n("form",{on:{submit:[function(t){t.preventDefault()},t.processBlueprints]}},[n("b-form-textarea",{attrs:{id:"blueprints",placeholder:"Paste blueprints here...",rows:"5","max-rows":"8"},model:{value:t.blueprints,callback:function(e){t.blueprints=e},expression:"blueprints"}}),n("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"success"}},[t._v("Submit")])],1)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center"},[n("ol",[n("li",[t._v("Open your industry window in game.")]),n("li",[t._v("Select blueprints tab")]),n("li",[t._v("Use the following settings:")]),n("ul",[n("li",[t._v("Owned by me")]),n("li",[t._v("Desired station to pull blueprints from")]),n("li",[t._v("Desired container to pull blueprints from")]),n("li",[t._v("Originals")]),n("li",[t._v("All groups")])]),n("li",[t._v('Click into blueprints window, and hit "ctrl" + "a"')]),n("li",[t._v('Copy list with "ctrl" + "c"')]),n("li",[t._v('Paste into the text area below with "ctrl" + "v"')])])])}],S=(n("4160"),n("ac1f"),n("1276"),n("159b"),{name:"Upload",data:function(){return{loading:!1,blueprints:""}},methods:{processBlueprints:function(){this.loading=!0;var t=this.blueprints.split("\n");t.forEach((function(t){var e=t.split("\t"),n={};n.name=e[0],n.me=e[1],n.te=e[2],n.runs=e[3],n.group=e[4],n.owner=v.a.auth().currentUser.uid,v.a.database().ref("/blueprints").push(n)})),this.blueprints="",this.loading=!1}}}),O=S,j=Object(p["a"])(O,w,x,!1,null,"1005eda0",null),C=j.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-center mt-3"},[n("div",[n("b-form-input",{attrs:{placeholder:"Search blueprint name..."},model:{value:t.nameSearch,callback:function(e){t.nameSearch=e},expression:"nameSearch"}})],1),n("div",{staticClass:"d-flex ml-4"},[n("label",{staticClass:"w-50 align-self-center",attrs:{for:"groupTypeSelect"}},[t._v("Select type")]),n("b-form-select",{attrs:{options:t.groupTypes,id:"groupTypeSelect"},model:{value:t.groupType,callback:function(e){t.groupType=e},expression:"groupType"}})],1),n("b-button",{attrs:{variant:"link"},on:{click:t.clear}},[t._v("Clear")])],1),n("div",{staticClass:"d-flex flex-wrap justify-content-center mt-5"},t._l(t.sortedBlueprints,(function(t){return n("Blueprint",{key:t.id,attrs:{blueprint:t}})})),1)])},k=[],B=(n("4de4"),n("caad"),n("d81d"),n("b0c0"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"m-2 blueprint",attrs:{title:t.blueprint.name}},[n("b-card-text",[n("div",{staticClass:"d-flex justify-content-around"},[n("div",[t._v(" ME: "+t._s(t.blueprint.me)+" ")]),n("div",[t._v(" TE: "+t._s(t.blueprint.te)+" ")])]),n("div",[t._v(" Group: "+t._s(t.blueprint.group)+" ")])])],1)}),E=[],P={name:"Blueprint",props:{blueprint:{}}},U=P,D=(n("2f49"),Object(p["a"])(U,B,E,!1,null,"b41c08e0",null)),I=D.exports,$=n("2ef0"),A=n.n($),G={name:"Blueprints",components:{Blueprint:I},data:function(){return{blueprints:[],nameSearch:"",groupType:"",me:0,te:0}},computed:{sortedBlueprints:function(){var t=this;return this.blueprints.filter((function(e){var n=!0;return A.a.isEmpty(t.nameSearch)||e.name.toLowerCase().includes(t.nameSearch.toLowerCase())||(n=!1),A.a.isEmpty(t.groupType)||e.group!==t.groupType&&(n=!1),n}))},groupTypes:function(){return A.a.uniq(A.a.map(this.blueprints,"group")).sort()}},methods:{clear:function(){this.nameSearch="",this.groupType=""}},mounted:function(){var t=this;v.a.database().ref("/blueprints").on("value",(function(e){var n=e.val(),r=[];for(var a in n){var i=n[a];i.id=a,r.push(i)}t.blueprints=r}))}},M=G,L=(n("9b40"),Object(p["a"])(M,T,k,!1,null,"8f25d372",null)),z=L.exports;r["default"].use(_["a"]);var J=[{path:"/upload",name:"Upload",component:C},{path:"/",name:"Blueprints",component:z}],N=new _["a"]({routes:J}),K=N,q={apiKey:"AIzaSyDrTGvz2xxK_fO7ZPbAJE7AcvbuPDMYG0k",authDomain:"etsala-blueprint-library.firebaseapp.com",databaseURL:"https://etsala-blueprint-library.firebaseio.com",projectId:"etsala-blueprint-library",storageBucket:"etsala-blueprint-library.appspot.com",messagingSenderId:"461994370886",appId:"1:461994370886:web:1c45439ed458177731a747",measurementId:"G-GC79VTGP4P"};r["default"].config.productionTip=!1,v.a.initializeApp(q),v.a.analytics(),new r["default"]({router:K,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"7feb":function(t,e,n){},"9b40":function(t,e,n){"use strict";var r=n("f3f4"),a=n.n(r);a.a},"9c0c":function(t,e,n){},f3f4:function(t,e,n){}});
//# sourceMappingURL=app.05c26ef7.js.map