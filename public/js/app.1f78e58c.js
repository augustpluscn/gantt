(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&l.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},r=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d230e44":"f96196f4"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e);var u=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}s[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1771:function(e,t,n){var a={"./css/index.scss":"9536"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="1771"},"194f":function(e,t,n){"use strict";n("a0d6")},4360:function(e,t,n){"use strict";var a=n("2b0e"),s=n("2f62"),r={token:function(e){return e.user.token}},o=r,c={},i={},u={},d={namespaced:!0,state:c,mutations:i,actions:u},f=n("751a"),l={dd:function(){return f["a"].get("dd",{},!0)},sysset:function(){return f["a"].get("sysset",{},!0)}},m={dd:{},sysSet:{}},b={SET_DD:function(e,t){e.dd=t},SET_SYS_SET:function(e,t){e.sysSet=t}},h={setDd:function(e){var t=e.commit;l.dd().then((function(e){t("SET_DD",e.data.dd)}))},setSysSet:function(e){var t=e.commit;l.sysset().then((function(e){t("SET_SYS_SET",e.data.setting)}))}},j={namespaced:!0,state:m,mutations:b,actions:h},g=n("335a"),p="Token";function v(){return g["a"].get(p,!1)}function k(e){return g["a"].set(p,e),e}function y(){return g["a"].remove(p),!1}var w={token:v()},x={SET_TOKEN:function(e,t){e.token=t}},T={setToken:function(e,t){var n=e.commit;n("SET_TOKEN",k(t))},removeToken:function(e){var t=e.commit;t("SET_TOKEN",y())}},O={namespaced:!0,state:w,mutations:x,actions:T};a["default"].use(s["a"]);var S=new s["a"].Store({modules:{app:d,dd:j,user:O},getters:o});t["a"]=S},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={name:"App",created:function(){}},c=o,i=n("2877"),u=Object(i["a"])(c,s,r,!1,null,null,null),d=u.exports,f=n("a18c"),l=n("4360"),m=(n("9536"),n("ce5b")),b=n.n(m);n("bf40");a["default"].use(b.a);var h=new b.a({theme:{themes:{light:{primary:"#41B783",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a["default"].config.productionTip=!1,new a["default"]({router:f["a"],store:l["a"],vuetify:h,render:function(e){return e(d)}}).$mount("#app")},"751a":function(e,t,n){"use strict";n("d3b7"),n("b0c0"),n("ac1f"),n("5319"),n("caad"),n("2532"),n("e9c4");var a=n("bc3a"),s=n.n(a),r=n("4328"),o=n.n(r),c=n("d399"),i=n("2241"),u=n("4360"),d=n("a18c"),f=s.a.create({baseURL:"http://inv.git/api/",timeout:5e3});f.interceptors.request.use((function(e){return e.hideloading||c["a"].loading({forbidClick:!0}),e.data=o.a.stringify(e.data),e.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},u["a"].getters.token&&(e.headers.Authorization=u["a"].getters.token),e}),(function(e){return console.log(e),Promise.reject(e)})),f.interceptors.response.use((function(e){c["a"].clear();var t=e.headers.authorization;t&&u["a"].dispatch("user/setToken",t);var n=e.data;return n.code&&200!==n.code?(Object(c["a"])({message:n.msg,forbidClick:!0}),Promise.reject(n||"error")):Promise.resolve(n)}),(function(e){if(c["a"].clear(),e&&e.response)switch(e.response.status){case 400:e.message=e.response.data.error;break;case 401:return"Login"!=d["a"].currentRoute.name&&i["a"].alert({title:"请您重新登录",message:"登录超时"}).then((function(){d["a"].replace({name:"Login"})})),void u["a"].dispatch("user/removeToken");case 403:e.message="拒绝访问";break;case 404:e.message="请求错误,未找到该资源";break;case 405:e.message="请求方法未允许";break;case 408:e.message="请求超时";break;case 500:e.message="服务器端出错";break;case 501:e.message="网络未实现";break;case 502:e.message="网络错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网络超时";break;case 505:e.message="http版本不支持该请求";break;default:e.message="连接错误".concat(e.response.status)}else JSON.stringify(e).includes("timeout")?e.message="服务器响应超时，请重试":e.message="连接服务器失败";return Object(c["a"])({message:e.message,forbidClick:!0}),Promise.reject(e)}));var l=f,m={get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a={method:"get",url:e,hideloading:n};return t&&(a.params=t),l(a)},post:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a={method:"post",url:e,hideloading:n};return t&&(a.data=t),l(a)},put:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a={method:"put",url:e,hideloading:n};return t&&(a.params=t),l(a)},delete:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a={method:"delete",url:e,hideloading:n};return t&&(a.params=t),l(a)}};t["a"]=m},9536:function(e,t,n){},a0d6:function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),s=n("8c4f"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{"data-app":"true"}},[a("div",{attrs:{id:"ganttastic-wrapper"}},[a("g-gantt-chart",{attrs:{"chart-start":e.chartStart,"chart-end":e.chartEnd,grid:e.grid,"hide-timeaxis":e.hideTimeaxis,"push-on-overlap":e.pushOnOverlap,"highlighted-hours":e.highlightedHours,"row-label-width":e.rowLabelWidth+"%","row-height":e.rowHeight,theme:e.selectedTheme},on:{"contextmenu-bar":function(t){return e.onContextmenuBar(t)},"dragend-bar":function(t){return e.stoppedDraggingBar(t)}}},e._l(e.rowList,(function(t){return a("g-gantt-row",{key:t.title,attrs:{label:t.label,bars:t.barList,"highlight-on-hover":e.highlightOnHover,"bar-start":"myStart","bar-end":"myEnd"},scopedSlots:e._u([{key:"bar-label",fn:function(t){var s=t.bar;return[s.image?a("img",{staticClass:"mr-1",attrs:{src:n("1771")("./"+s.image),height:"20",width:"20"}}):e._e(),a("span",[e._v(e._s(s.label))])]}}],null,!0)})})),1)],1),a("v-menu",{attrs:{"position-x":e.contextmenuX,"position-y":e.contextmenuY},model:{value:e.showContextmenu,callback:function(t){e.showContextmenu=t},expression:"showContextmenu"}},[a("v-list",[a("v-list-item",[e._v(" "+e._s(e.menuContext)+" ")])],1)],1)],1)},o=[],c=n("2909"),i=(n("159b"),n("0b70")),u=n("c1df"),d=n.n(u),f=n("751a"),l={getTask:function(){return f["a"].get("task",{},!0)}},m={components:{GGanttChart:i["GGanttChart"],GGanttRow:i["GGanttRow"]},data:function(){return{task:[],chartStart:"",chartEnd:"",pushOnOverlap:!0,grid:!0,rowHeight:40,rowLabelWidth:15,hideTimeaxis:!1,highlightOnHover:!0,hours:Object(c["a"])(Array(24).keys()),highlightedHours:[0],showContextmenu:!1,contextmenuTimeout:null,contextmenuX:0,contextmenuY:0,selectedTheme:"default",rowList:[],bgColor:["#404040","#2e74a3","#de3b26","aa34a3"],menuContext:""}},computed:{},mounted:function(){this.getTask()},methods:{stoppedDraggingBar:function(){},onContextmenuBar:function(e){e.event.preventDefault(),this.menuContext=e.bar.label,this.contextmenuY=e.event.clientY,this.contextmenuX=e.event.clientX,this.showContextmenu=!0,this.contextmenuTimeout&&clearTimeout(this.contextmenuTimeout)},getTask:function(){var e=this;l.getTask().then((function(t){e.task=t.data.task,e.setTaskFormat(t.data.task)}))},setTaskFormat:function(e){var t=this,n=d()("2900-01-01 00:00"),a=d()("1900-01-01 00:00"),s="",r=[],o={},c=[],i="",u="",f="",l=0,m=0;e.forEach((function(e){s!=e.机台编号&&(m=0,c.length>0&&(o.barList=c,r.push(o),c=[]),o={label:e.机台名称},f=e.上机时间?d()(e.上机时间):d()(),n=d.a.min(n,f),s=e.机台编号),l=(e.数量-e.完成数量)*e.单支时间+e.调机时间,l=l<0?0:l,i=f.format("YYYY-MM-DD HH:mm"),f.add(l,"m"),a=d.a.max(a,f),u=f.format("YYYY-MM-DD HH:mm"),c.push({myStart:i,myEnd:u,label:e.产品规格,ganttBarConfig:{color:"white",backgroundColor:t.bgColor[m%t.bgColor.length],opacity:.5,immobile:!0}}),m++})),c.length>0&&(o.barList=c,r.push(o)),n.subtract(2,"h"),a.add(2,"h"),this.chartStart=n.format("YYYY-MM-DD HH:mm"),this.chartEnd=a.format("YYYY-MM-DD HH:mm"),this.rowList=r}}},b=m,h=(n("194f"),n("2877")),j=Object(h["a"])(b,r,o,!1,null,"364bde1a",null),g=j.exports;a["default"].use(s["a"]);var p=[{path:"/",name:"Home",component:g},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d230e44").then(n.bind(null,"ede4"))}}],v=new s["a"]({mode:"history",routes:p});t["a"]=v}});
//# sourceMappingURL=app.1f78e58c.js.map