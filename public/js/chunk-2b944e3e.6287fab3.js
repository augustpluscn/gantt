(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b944e3e"],{"0fca":function(t,e,a){},1276:function(t,e,a){"use strict";var n=a("2ba4"),i=a("c65b"),r=a("e330"),s=a("d784"),o=a("44e7"),c=a("825a"),l=a("1d80"),u=a("4840"),d=a("8aa5"),m=a("50c4"),f=a("577e"),h=a("dc4a"),p=a("f36a"),g=a("14c3"),v=a("9263"),b=a("9f7f"),T=a("d039"),y=b.UNSUPPORTED_Y,x=4294967295,k=Math.min,H=[].push,_=r(/./.exec),Y=r(H),C=r("".slice),w=!T((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));s("split",(function(t,e,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var r=f(l(this)),s=void 0===a?x:a>>>0;if(0===s)return[];if(void 0===t)return[r];if(!o(t))return i(e,r,t,s);var c,u,d,m=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,b=new RegExp(t.source,h+"g");while(c=i(v,b,r)){if(u=b.lastIndex,u>g&&(Y(m,C(r,g,c.index)),c.length>1&&c.index<r.length&&n(H,m,p(c,1)),d=c[0].length,g=u,m.length>=s))break;b.lastIndex===c.index&&b.lastIndex++}return g===r.length?!d&&_(b,"")||Y(m,""):Y(m,C(r,g)),m.length>s?p(m,0,s):m}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:i(e,this,t,a)}:e,[function(e,a){var n=l(this),s=void 0==e?void 0:h(e,t);return s?i(s,e,n,a):i(r,f(n),e,a)},function(t,n){var i=c(this),s=f(t),o=a(r,i,s,n,r!==e);if(o.done)return o.value;var l=u(i,RegExp),h=i.unicode,p=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(y?"g":"y"),v=new l(y?"^(?:"+i.source+")":i,p),b=void 0===n?x:n>>>0;if(0===b)return[];if(0===s.length)return null===g(v,s)?[s]:[];var T=0,H=0,_=[];while(H<s.length){v.lastIndex=y?0:H;var w,E=g(v,y?C(s,H):s);if(null===E||(w=k(m(v.lastIndex+(y?H:0)),s.length))===T)H=d(s,H,h);else{if(Y(_,C(s,T,H)),_.length===b)return _;for(var O=1;O<=E.length-1;O++)if(Y(_,E[O]),_.length===b)return _;H=T=w}}return Y(_,C(s,T)),_}]}),!w,y)},"25f0":function(t,e,a){"use strict";var n=a("e330"),i=a("5e77").PROPER,r=a("6eeb"),s=a("825a"),o=a("3a9b"),c=a("577e"),l=a("d039"),u=a("ad6d"),d="toString",m=RegExp.prototype,f=m[d],h=n(u),p=l((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),g=i&&f.name!=d;(p||g)&&r(RegExp.prototype,d,(function(){var t=s(this),e=c(t.source),a=t.flags,n=c(void 0===a&&o(m,t)&&!("flags"in m)?h(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"27e0":function(t,e,a){},"286a":function(t,e,a){"use strict";a("0fca")},"30c9":function(t,e,a){},"48c2":function(t,e,a){"use strict";a("30c9")},"8a4a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{style:{height:"calc(100vh - 30px - 30px)"}},[a("v-gantt-chart",{attrs:{startTime:t.startTime,endTime:t.endTime,cellWidth:t.cellWidth,cellHeight:t.cellHeight,titleHeight:t.titleHeight,scale:t.scale,titleWidth:t.titleWidth,showCurrentTime:"",dataKey:t.dataKey,datas:t.datas},scopedSlots:t._u([{key:"block",fn:function(e){var n=e.data,i=e.item;return[a("Test",{attrs:{data:n,currentTime:t.currentTime,item:i}})]}},{key:"left",fn:function(t){var e=t.data;return[a("TestLeft",{attrs:{data:e}})]}},{key:"title",fn:function(){return[t._v(" 排程甘特图 ")]},proxy:!0}])})],1),a("footer",{staticClass:"main-footer"})])},i=[],r=(a("d81d"),a("ac1f"),a("1276"),a("d3b7"),a("25f0"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan",style:{"background-color":t.statusColor},attrs:{title:t.title},on:{click:t.onClick}},[a("div",{staticClass:"runTime"},[a("span",[t._v("起"+t._s(t.moment(t.item.start).format("HH:mm")))]),a("span",[t._v("至"+t._s(t.moment(t.item.end).format("HH:mm")))])]),a("div",{staticClass:"middle"},[t._v(t._s(t.item.name))]),a("div",{staticClass:"passenger"})])}),s=[],o=(a("b0c0"),a("c1df")),c=a.n(o),l={name:"Test",props:{data:Object,item:Object,currentTime:c.a,updateTimeLines:Function},data:function(){return{moment:c.a}},computed:{title:function(){return c()(this.item.start).format("HH:mm")+"~"+c()(this.item.end).format("HH:mm")+"  "+this.item.name},statusColor:function(){var t=this.item,e=this.currentTime,a=c()(t.start),n=c()(t.end);return a.isBefore(e)&&n.isAfter(e)?"#65b2a7":n.isBefore(e)?"#9e9e9e":"#69b3e1"}},methods:{onClick:function(){this.updateTimeLines(this.item.start,this.item.end)}}},u=l,d=(a("9070"),a("2877")),m=Object(d["a"])(u,r,s,!1,null,"3ff08516",null),f=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"name",style:{background:t.data.color}},[a("div",{staticClass:"colorBar"}),a("div",{staticClass:"carId"},[t._v(t._s(t.data.name)+t._s(t.data.id))])])},p=[],g={name:"TestLeft",props:{data:Object}},v=g,b=(a("286a"),Object(d["a"])(v,h,p,!1,null,"47071e30",null)),T=b.exports,y=a("b199"),x="1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440".split(",").map((function(t){return parseInt(t)})),k={name:"App",components:{Test:f,TestLeft:T},data:function(){return{miyao:"",currentTime:c()(),startTime:c()().subtract(5,"h").toString(),endTime:c()().add(2,"d").add(2,"h").add(5,"s").toString(),cellWidth:30,cellHeight:30,titleHeight:40,titleWidth:250,scale:60,datasNum:100,datas:[],dataKey:"id",scaleList:x,scrollToTime:c()().add(1,"d").toString(),scrollToPostion:{x:1e4,y:1e4}}},mounted:function(){var t=this.$route.query;Object.prototype.hasOwnProperty.call(t,"miyao")&&(this.miyao=t.miyao),this.getTask()},methods:{getTask:function(){var t=this;y["a"].getTask(this.miyao).then((function(e){t.task=e.data.task,t.setTaskFormat(e.data.task)}))},setTaskFormat:function(t){var e=c()("2900-01-01 00:00"),a=c()("1900-01-01 00:00"),n="",i=[],r={},s=[],o="",l="",u="",d=0;t.forEach((function(t){n!=t.机台编号&&(s.length>0&&(r.gtArray=s,i.push(r),s=[]),r={id:t.机台名称,name:t.机台名称},t.上机时间?(u=c()(t.上机时间),e=c.a.min(e,c()(t.上机时间))):(u=c()(),e=c.a.min(e,c()())),n=t.机台编号),d=(t.数量-t.完成数量)*t.单支时间+t.调机时间,d=d<0?0:d,o=u.format("YYYY-MM-DD HH:mm"),u.add(d,"m"),a=c.a.max(a,u),l=u.format("YYYY-MM-DD HH:mm"),s.push({id:t.任务单号,name:t.产品规格,passenger:100,start:o,end:l})})),s.length>0&&(r.gtArray=s,i.push(r)),e.subtract(2,"h"),a.add(2,"h"),this.startTime=e.format("YYYY-MM-DD HH:mm"),this.endTime=a.format("YYYY-MM-DD HH:mm"),this.datas=i}}},H=k,_=(a("48c2"),Object(d["a"])(H,n,i,!1,null,"3e991871",null));e["default"]=_.exports},9070:function(t,e,a){"use strict";a("27e0")},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,r=a("1dde"),s=r("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2b944e3e.6287fab3.js.map