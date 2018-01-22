webpackJsonp([1],{"4U5F":function(t,e){},"IsG/":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var a=r("VU/8")({name:"app"},i,!1,function(t){r("IsG/")},null,null).exports,o=r("/ocq"),s=r("mtWM"),l=r.n(s),u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filterbar-container"},[r("h4",[t._v("A Quote to help me: ")]),t._v(" "),r("button",{attrs:{type:"button",value:"motivation"},on:{click:t.selectFilter}},[t._v("Get Motivated")]),t._v(" "),r("button",{attrs:{type:"button",value:"inspiration"},on:{click:t.selectFilter}},[t._v("Feel Inspired")]),t._v(" "),r("button",{attrs:{type:"button",value:"love"},on:{click:t.selectFilter}},[t._v("Understand Love")]),t._v(" "),r("button",{attrs:{type:"button",value:"life"},on:{click:t.selectFilter}},[t._v("Understand Life")]),t._v(" "),r("button",{attrs:{type:"button",value:"writing"},on:{click:t.selectFilter}},[t._v("Write")]),t._v(" "),r("button",{attrs:{type:"button",value:"creative"},on:{click:t.selectFilter}},[t._v("Be Creative")]),t._v(" "),r("button",{attrs:{type:"button",value:"",id:"random"},on:{click:t.selectFilter}},[t._v("Read a Random Quote")]),t._v(" "),r("router-link",{attrs:{to:{name:"AllQuotes",params:{}}}},[t._v("View all the quotes")])],1)},staticRenderFns:[]};var c=r("VU/8")({name:"FilterBar",methods:{selectFilter:function(t){this.$emit("selectFilter",t.target.value),t.target.parentNode.childNodes.forEach(function(t){"button"===t.type&&(t.classList="")}),t.target.classList="selected"}}},u,!1,function(t){r("tZgy")},null,null).exports,v={name:"Viewer",props:{quote:{type:Object},viewKey:{type:Number}},methods:{reload:function(){this.$emit("reload")}}},d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"viewer"},[r("div",{key:t.viewKey,staticClass:"words"},[r("h2",{staticClass:"fader"},[t._v('"'+t._s(t.quote.text)+'"')]),t._v(" "),r("h4",{staticClass:"fader"},[t._v(" - "+t._s(t.quote.author))])]),t._v(" "),r("button",{attrs:{type:"button",name:"button"},on:{click:t.reload}},[t._v("Another One?")])])},staticRenderFns:[]};var f={name:"Home",components:{FilterBar:c,Viewer:r("VU/8")(v,d,!1,function(t){r("aLeR")},null,null).exports},data:function(){return{filter:null,quotes:[],filtered:[],selected:null,viewerKey:1}},methods:{selectFilter:function(t){var e=this;this.filter=t,this.filtered=this.quotes.filter(function(t){return-1!==t.families.indexOf(e.filter)}),this.selected=this.filtered[Math.floor(Math.random()*this.filtered.length)],this.viewerKey+=1},reload:function(){this.selected=this.filtered[Math.floor(Math.random()*this.filtered.length)],this.viewerKey+=1}},created:function(){var t=this;l.a.get("http://quot-api.herokuapp.com/quotes").then(function(e){t.quotes=e.data,t.filtered=e.data})}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("FilterBar",{on:{selectFilter:t.selectFilter}}),t._v(" "),t.selected?r("Viewer",{attrs:{quote:t.selected,viewKey:t.viewerKey},on:{reload:t.reload}}):t._e(),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("Created by "),e("a",{attrs:{href:"http://thechriswill.com",target:"_blank"}},[this._v("Chris Will")])])])}]};var p=r("VU/8")(f,h,!1,function(t){r("4U5F")},null,null).exports,_={name:"AllQuotes",data:function(){return{quotes:[],filtered:[],filter:""}},methods:{search:function(){var t=this;this.filtered=this.quotes.filter(function(e){return-1!==e.text.toLowerCase().indexOf(t.filter.toLowerCase())||-1!==e.author.toLowerCase().indexOf(t.filter.toLowerCase())})}},created:function(){var t=this;l.a.get("http://quot-api.herokuapp.com/quotes").then(function(e){t.quotes=e.data,t.filtered=e.data})}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"allquotes-container"},[r("div",{staticClass:"searchbar"},[r("router-link",{attrs:{to:{name:"Home",params:{}}}},[t._v("⇚ Back")]),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.search(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],attrs:{type:"search"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}}),t._v(" "),r("button",[t._v("Search")])])],1),t._v(" "),t.filtered.length<t.quotes.length?r("h4",[t._v("Results for "),r("em",[t._v(t._s(t.filter)+":")])]):t._e(),t._v(" "),t.quotes.length>0?r("div",{staticClass:"quotes"},t._l(t.filtered,function(e){return r("p",{key:e.id},[t._v("\n      "+t._s(e.text)+" - "),r("strong",[t._v(t._s(e.author))])])})):r("h2",[t._v("Loading...")])])},staticRenderFns:[]};var b=r("VU/8")(_,m,!1,function(t){r("q5Mq")},null,null).exports;n.a.use(o.a);var q=new o.a({routes:[{path:"/",name:"Home",component:p},{path:"/allquotes",name:"AllQuotes",component:b}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:q,components:{App:a},template:"<App/>"})},aLeR:function(t,e){},q5Mq:function(t,e){},tZgy:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1f2b7797864f1db6d0a2.js.map