(function(t){function e(e){for(var i,s,o=e[0],l=e[1],u=e[2],c=0,m=[];c<o.length;c++)s=o[c],r[s]&&m.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ed5fdc65"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=r[t]=[e,i]});e.push(n[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");s.type=i,s.request=a,n[1](s)}r[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1087:function(t,e,n){},"3a8e":function(t,e,n){},"4cdb":function(t,e,n){"use strict";var i=n("a370"),r=n.n(i);r.a},9343:function(t,e,n){"use strict";var i=n("3a8e"),r=n.n(i);r.a},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},a370:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=n("bb71");n("da64");i["default"].use(r["a"],{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire",dark:t.theme}},[n("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},t._l(t.menu,function(e){return n("span",{key:e.$index},[e.to?n("v-list-tile",{attrs:{to:e.to},on:{click:t.callback}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.label))])],1)],1):n("v-list-tile",{attrs:{href:e.href,target:e.target},on:{click:t.callback}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.label))])],1)],1)],1)}),0)],1),n("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("VPV Math Puzzles")]),n("v-spacer"),n("v-btn-toggle",{model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}},[n("v-btn",{attrs:{value:!0,flat:""}},[n("v-icon",[t._v("toggle_on")])],1)],1),t.user.id?n("span",[n("v-chip",{attrs:{close:""},model:{value:t.chip,callback:function(e){t.chip=e},expression:"chip"}},[t.user.avatarUrl?n("v-avatar",[n("img",{attrs:{src:t.user.avatarUrl,alt:t.user.firstName}})]):n("v-icon",{attrs:{color:"green"}},[t._v("account_circle")]),t._v("\n            "+t._s(t.user.firstName)+"\n          ")],1)],1):n("v-btn",{attrs:{round:"",href:"/signin"}},[n("v-icon",[t._v("account_circle")]),t._v(" Sign in\n    ")],1)],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{app:"",fixed:""}},[n("span",{staticClass:"text-center"})]),n("v-footer",{attrs:{height:"auto",app:"",fixed:""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[t._v("\n        © "+t._s((new Date).getFullYear())+" - "),n("strong",[n("a",{attrs:{href:"https://me.vpv.io"}},[t._v("Venkateswara VP")])])])],1)],1)},s=[],o=(n("ac6a"),n("9ab4")),l=n("65d9"),u=n.n(l),c=i["default"].extend({props:{source:String}}),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.drawer=null,e.chip=!0,e.theme=!0,e.signOutMenuItem={href:"/logout",icon:"account_circle",label:"Sign Out"},e.signInMenuItem={href:"/signin",icon:"account_circle",label:"Sign In"},e.mainmenu=[{to:"/",icon:"home",label:"Home"},{to:"/add",icon:"add",label:"Addition"},{to:"/sub",icon:"remove",label:"Subtract"},{to:"/mul",icon:"clear",label:"Multiply"},{to:"/div",icon:"share",label:"Divide"},{to:"/addsub",icon:"add",label:"Add Sub"},{to:"/about",icon:"info",label:"About"},{href:"https://github.com/reflexdemon/problem-generateor",icon:"link",label:"Source Code",target:"_blank"}],e.menu=[],e.user={id:null,username:null,email:null,source:null,firstName:null,lastName:null,avatarUrl:null,profileUrl:null},e}return o["b"](e,t),e.prototype.created=function(){this.getUser()},e.prototype.callback=function(){},e.prototype.buildMenu=function(){var t=this;this.mainmenu.forEach(function(e){return t.menu.push(e)}),this.user.id?this.menu.push(this.signOutMenuItem):this.menu.push(this.signInMenuItem)},e.prototype.getUser=function(){fetch("/api/user").then(function(t){return t.json()}).then(this.onUserInfo.bind(this)).catch(this.errorHandler.bind(this))},e.prototype.onUserInfo=function(t){console.log("User:",t),t&&t.id&&(this.user=t),this.buildMenu()},e.prototype.errorHandler=function(t){console.log("User is not available",t),this.buildMenu()},e=o["a"]([u.a],e),e}(c),m=p,d=m,h=n("2877"),f=n("6544"),v=n.n(f),b=n("7496"),x=n("8212"),g=n("8336"),y=n("a609"),_=n("cc20"),w=n("549c"),V=n("553a"),T=n("132d"),j=n("a722"),k=n("8860"),C=n("ba95"),P=n("40fe"),S=n("5d23"),z=n("f774"),O=n("9910"),N=n("71d9"),A=n("706c"),$=n("2a7f"),E=Object(h["a"])(d,a,s,!1,null,null,null),M=E.exports;v()(E,{VApp:b["a"],VAvatar:x["a"],VBtn:g["a"],VBtnToggle:y["a"],VChip:_["a"],VContent:w["a"],VFooter:V["a"],VIcon:T["a"],VLayout:j["a"],VList:k["a"],VListTile:C["a"],VListTileAction:P["a"],VListTileContent:S["a"],VListTileTitle:S["b"],VNavigationDrawer:z["a"],VSpacer:O["a"],VToolbar:N["a"],VToolbarSideIcon:A["a"],VToolbarTitle:$["a"]});var I=n("8c4f"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},L=[],R=n("60a3"),U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),i("v-flex",{attrs:{"mb-4":""}},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),i("br"),t._v("please join our online\n        "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),i("v-flex",{attrs:{"mb-5":"",xs12:""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},B=[],D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ecosystem=[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],e.importantLinks=[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],e.whatsNext=[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}],e}return o["b"](e,t),e=o["a"]([u.a],e),e}(i["default"]),W=D,H=W,q=n("a523"),Y=n("0e8f"),J=n("adda"),Q=Object(h["a"])(H,U,B,!1,null,"2714623e",null),G=Q.exports;v()(Q,{VContainer:q["a"],VFlex:Y["a"],VImg:J["a"],VLayout:j["a"]});var K=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o["b"](e,t),e=o["a"]([Object(R["a"])({components:{HelloWorld:G}})],e),e}(R["b"]),X=K,Z=X,tt=Object(h["a"])(Z,F,L,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProblemTemplate",{attrs:{title:"Addition Problems",operation:t.operation}})},it=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add text-xs-center"},[n("p",[n("UserInput",{attrs:{size:t.input.size,min:t.input.min,max:t.input.max,duration:t.input.duration,title:t.title},on:{"activate-timer":t.activate}})],1),n("section",{attrs:{id:"stopWatch"}},[n("p",{attrs:{id:"timer"}},[t._v("Time : "+t._s(t.timer))])]),n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.responses,function(e){return n("v-flex",{key:e.$index,attrs:{xs12:"",md6:"",lg4:""}},[n("ProblemDisplay",{attrs:{response:e,timer:t.timer}})],1)}),n("v-divider"),n("v-flex",{attrs:{xs12:""}},[t.responses.length?n("v-btn",{attrs:{color:"success"},on:{click:function(e){t.finish()}}},[t._v("Finish")]):t._e()],1)],2)],1),n("v-divider"),n("v-flex",{attrs:{xs12:""}},[t.computedResult.total>0?n("section",{staticClass:"result"},[n("table",{staticClass:"results",attrs:{border:"1"}},[n("tr",[n("th",[t._v("Total Questions ")]),n("td",[t._v(t._s(t.computedResult.total))])]),n("tr",[n("th",[t._v("Correct Answers ")]),n("td",[t._v(t._s(t.computedResult.correctAnswers))])]),n("tr",[n("th",[t._v("Your Score")]),n("td",[t._v(t._s(t.computedResult.score))])])])]):t._e()])],1)},at=[],st=(n("7f7f"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"problem-display"},[n("v-card",[n("v-card-text",[n("v-badge",[t._v(" "+t._s(t.timer)+" ")]),n("div",{staticClass:"display-3 text-xs-right"},[t._v(t._s(t.response.firstNumber))]),n("div",{staticClass:"display-3 text-xs-right"},[t._v(t._s(t.response.operator)+" "+t._s(t.response.secondNumber))])],1),n("v-card-actions",[n("v-text-field",{staticClass:"styled-input",attrs:{reverse:"",height:"120",type:"number",name:"answer",autocomplete:"off"},model:{value:t.response.result,callback:function(e){t.$set(t.response,"result",e)},expression:"response.result"}})],1)],1)],1)}),ot=[],lt=i["default"].extend({props:{response:Object,timer:String}}),ut=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sampleStructureForResponse={firstNumber:Number,secondNumber:Number,answer:Number,result:Number,operator:String},e}return o["b"](e,t),e=o["a"]([u.a],e),e}(lt),ct=ut,pt=ct,mt=(n("dfd4"),n("4ca6")),dt=n("b0af"),ht=n("99d9"),ft=n("2677"),vt=Object(h["a"])(pt,st,ot,!1,null,"6e82e971",null),bt=vt.exports;v()(vt,{VBadge:mt["a"],VCard:dt["a"],VCardActions:ht["a"],VCardText:ht["b"],VTextField:ft["a"]});var xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-input"},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))]),n("div",[t._v("Please enter the configuration to generate the puzzles")])])]),n("v-container",{attrs:{"fill-height":"",fluid:"","pa-2":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"",lg4:"",md8:"",flexbox:""}},[n("v-text-field",{attrs:{label:"Number of problems",type:"number",name:"size"},model:{value:t.input.size,callback:function(e){t.$set(t.input,"size",t._n(e))},expression:"input.size"}}),n("v-text-field",{attrs:{label:"Starting Value",type:"number",name:"min"},model:{value:t.input.min,callback:function(e){t.$set(t.input,"min",t._n(e))},expression:"input.min"}}),n("v-text-field",{attrs:{label:"Ending Value",type:"number",name:"max"},model:{value:t.input.max,callback:function(e){t.$set(t.input,"max",t._n(e))},expression:"input.max"}}),n("v-slider",{attrs:{"thumb-size":24,hint:"Please choose the test duration.",min:"1",max:"15","thumb-label":"always",label:"Duration in minutes"},model:{value:t.input.duration,callback:function(e){t.$set(t.input,"duration",t._n(e))},expression:"input.duration"}})],1)],1)],1),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{color:"green"},on:{click:t.activateTimer}},[t._v("Start Timer")])],1)],1)],1)},gt=[],yt=i["default"].extend({props:{size:Number,min:Number,max:Number,duration:Number,title:String}}),_t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.input={size:e.size,min:e.min,max:e.max,duration:e.duration},e}return o["b"](e,t),e.prototype.activateTimer=function(){console.log("Emmiting activate-timer event"),this.$emit("activate-timer",this.input.size,this.input.min,this.input.max,this.input.duration)},e=o["a"]([u.a],e),e}(yt),wt=_t,Vt=wt,Tt=(n("9343"),n("12b2")),jt=n("ba0d"),kt=Object(h["a"])(Vt,xt,gt,!1,null,"3fa4994d",null),Ct=kt.exports;v()(kt,{VBtn:g["a"],VCard:dt["a"],VCardActions:ht["a"],VCardTitle:Tt["a"],VContainer:q["a"],VFlex:Y["a"],VLayout:j["a"],VSlider:jt["a"],VTextField:ft["a"]});var Pt=n("5118"),St={name:"ProblemTemplate",components:{UserInput:Ct,ProblemDisplay:bt},props:{title:String,operation:{name:String,size:Number,min:Number,max:Number,duration:Number}},data:function(){return{responses:[],responsesBackup:[],timer:"00:00",minutes:0,seconds:0,internal:{mins:2,seconds:0,timeout:function(){}},computedResult:{total:0,correctAnswers:0,score:0},input:{size:this.operation.size,min:this.operation.min,max:this.operation.max,duration:this.operation.duration}}},methods:{activate:function(t,e,n,i){var r=this;console.log("calling activete(".concat(t,", ").concat(e,", ").concat(n,", ").concat(i," )")),this.input.size=t,this.input.min=e,this.input.max=n,this.input.duration=i,fetch("/api/"+this.operation.name+"?size="+this.input.size+"&min="+this.input.min+"&max="+this.input.max).then(function(t){return t.json()}).then(function(t){r.responsesBackup=[],r.responses=t,r.initTimer()})},finish:function(){this.result()},result:function(){var t=this,e=[];this.responses&&this.responses.length?e=this.responses:this.responsesBackup&&this.responsesBackup.length?e=this.responsesBackup:console.log("No Test in progress"),e&&e.length&&(this.computedResult.total=e.length,this.computedResult.correctAnswers=0,e.forEach(function(n){n.answer===n.result&&(t.computedResult.correctAnswers++,t.computedResult.score=100*t.computedResult.correctAnswers/e.length)}),console.log("this.computedResult.correctAnswers",this.computedResult.correctAnswers))},initTimer:function(){this.clearTimer(),this.internal.mins=this.input.duration,this.internal.seconds=60*this.internal.mins,this.internal.timeout=setTimeout(this.timerFunction,this.internal.seconds)},clearTimer:function(){this.minutes=this.pad(0,2),this.seconds=this.pad(0,2),this.internal.timeout&&this.internal.timeout.close&&Object(Pt["clearTimeout"])(this.internal.timeout)},pad:function(t,e,n){return n=n||"0",t+="",t.length>=e?t:new Array(e-t.length+1).join(n)+t},getminutes:function(){return this.internal.mins=Math.floor(this.internal.seconds/60),this.pad(this.internal.mins,2)},getseconds:function(){return this.pad(this.internal.seconds-Math.round(60*this.internal.mins),2)},timerFunction:function(){this.internal.seconds<59?this.seconds=this.internal.seconds:(this.minutes=this.getminutes(),this.seconds=this.getseconds()),this.internal.seconds<0?(this.responsesBackup=this.responses,this.responses=[],this.clearTimer()):(this.internal.seconds--,this.internal.timeout=setTimeout(this.timerFunction,1e3)),this.timer=this.minutes+":"+this.seconds}},created:function(){this.clearTimer()}},zt=St,Ot=(n("4cdb"),n("ce7e")),Nt=Object(h["a"])(zt,rt,at,!1,null,"3af4aca0",null),At=Nt.exports;v()(Nt,{VBtn:g["a"],VContainer:q["a"],VDivider:Ot["a"],VFlex:Y["a"],VLayout:j["a"]});var $t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.operation={name:"add",size:10,min:10,max:99,duration:2},e}return o["b"](e,t),e=o["a"]([u()({components:{ProblemTemplate:At}})],e),e}(i["default"]),Et=$t,Mt=Et,It=Object(h["a"])(Mt,nt,it,!1,null,"27d4af8a",null),Ft=It.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProblemTemplate",{attrs:{title:"Subtraction Problems",operation:t.operation}})},Rt=[],Ut=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.operation={name:"sub",size:10,min:10,max:99,duration:2},e}return o["b"](e,t),e=o["a"]([u()({components:{ProblemTemplate:At}})],e),e}(i["default"]),Bt=Ut,Dt=Bt,Wt=Object(h["a"])(Dt,Lt,Rt,!1,null,"6e43f6e5",null),Ht=Wt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProblemTemplate",{attrs:{title:"Multiplication Problems",operation:t.operation}})},Yt=[],Jt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.operation={name:"mul",size:10,min:2,max:10,duration:2},e}return o["b"](e,t),e=o["a"]([u()({components:{ProblemTemplate:At}})],e),e}(i["default"]),Qt=Jt,Gt=Qt,Kt=Object(h["a"])(Gt,qt,Yt,!1,null,"8118cbfa",null),Xt=Kt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProblemTemplate",{attrs:{title:"Division Problems",operation:t.operation}})},te=[],ee=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.operation={name:"div",size:10,min:2,max:10,duration:2},e}return o["b"](e,t),e=o["a"]([u()({components:{ProblemTemplate:At}})],e),e}(i["default"]),ne=ee,ie=ne,re=Object(h["a"])(ie,Zt,te,!1,null,"a301ab42",null),ae=re.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProblemTemplate",{attrs:{title:"Mixed Problems",operation:t.operation}})},oe=[],le=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.operation={name:"addsub",size:90,min:1,max:20,duration:2},e}return o["b"](e,t),e=o["a"]([u()({components:{ProblemTemplate:At}})],e),e}(i["default"]),ue=le,ce=ue,pe=Object(h["a"])(ce,se,oe,!1,null,"a647ae2c",null),me=pe.exports;i["default"].use(I["a"]);var de=new I["a"]({mode:"history",routes:[{path:"/",name:"home",component:et},{path:"/add",name:"add",component:Ft},{path:"/sub",name:"subtract",component:Ht},{path:"/mul",name:"multiply",component:Xt},{path:"/div",name:"divide",component:ae},{path:"/addsub",name:"addsub",component:me},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});i["default"].config.productionTip=!1,new i["default"]({router:de,render:function(t){return t(M)}}).$mount("#app")},dfd4:function(t,e,n){"use strict";var i=n("1087"),r=n.n(i);r.a}});
//# sourceMappingURL=app.07a5dc2e.js.map