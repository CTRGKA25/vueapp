(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f65f1a22"],{"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),s=n("577e"),i=n("d039"),u=n("ad6d"),c="toString",a=RegExp.prototype,f=a[c],l=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),h=f.name!=c;(l||h)&&r(RegExp.prototype,c,(function(){var t=o(this),e=s(t.source),n=t.flags,r=s(void 0===n&&t instanceof RegExp&&!("flags"in a)?u.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"66d4":function(t,e,n){(function(t,n){n(e)})(0,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n){var r,o="";if(t="number"===typeof t?String(t):t,t.length>e)return t;for(r=0;r<e;r+=1)o+=String(n);return(o+t).slice(-o.length)}function i(){this.reset()}function u(){this.events={}}i.prototype.toString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var r,o=[];for(r=0;r<t.length;r+=1)void 0!==this[t[r]]&&("secondTenths"===t[r]?o.push(this[t[r]]):o.push(s(this[t[r]],n,"0")));return o.join(e)},i.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},u.prototype.on=function(t,e){var n=this;return Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(e),function(){return n.removeListener(t,e)}},u.prototype.removeListener=function(t,e){if(Array.isArray(this.events[t])){var n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}},u.prototype.removeAllListeners=function(t){t?Array.isArray(this.events[t])&&(this.events[t]=[]):this.events={}},u.prototype.emit=function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[t])&&this.events[t].forEach((function(t){return t.apply(e,r)}))};var c=10,a=60,f=60,l=24,h=0,d=1,p=2,v=3,m=4,y="secondTenths",g="seconds",b="minutes",w="hours",T="days",O=[y,g,b,w,T],j={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},E={secondTenths:c,seconds:a,minutes:f,hours:l};function _(t,e){return(t%e+e)%e}function S(){var t,e,o,s,S,x,A,V,$,P,k=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},D=new i,L=new i,M=new u,U=!1,R=!1,Y={},H={detail:{timer:this}};function I(t,e){var n=E[t];L[t]=e,D[t]=t===T?Math.abs(e):_(e>=0?e:n-_(e,n),n)}function C(t){return F(t,T)}function J(t){return F(t,w)}function z(t){return F(t,b)}function q(t){return F(t,g)}function B(t){return F(t,y)}function F(t,e){var n=L[e];return I(e,ct(t,j[e])),L[e]!==n}function G(){K(),rt()}function K(){clearInterval(t),t=void 0,U=!1,R=!1}function N(t){Tt()?($=W(),x=at(S.target)):ot(t),Q()}function Q(){var n=j[e];nt(tt(Date.now()))||(t=setInterval(X,n),U=!0,R=!1)}function W(){return tt(Date.now())-L.secondTenths*j[y]*o}function X(){var t=tt(Date.now()),e=Z();et(e),s(H.detail.timer),nt(t)&&(ht(),bt("targetAchieved",H))}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt(Date.now()),e=o>0?t-$:$-t,n={};return n[y]=B(e),n[g]=q(e),n[b]=z(e),n[w]=J(e),n[T]=C(e),n}function tt(t){return Math.floor(t/j[e])*j[e]}function et(t){t[y]&&bt("secondTenthsUpdated",H),t[g]&&bt("secondsUpdated",H),t[b]&&bt("minutesUpdated",H),t[w]&&bt("hoursUpdated",H),t[T]&&bt("daysUpdated",H)}function nt(t){return x instanceof Array&&t>=P}function rt(){D.reset(),L.reset()}function ot(t){t=t||{},e=st(t.precision),s="function"===typeof t.callback?t.callback:function(){},V=!0===t.countdown,o=!0===V?-1:1,"object"===r(t.startValues)?ft(t.startValues):A=null,$=W(),Z(),"object"===r(t.target)?x=at(t.target):V?(t.target={seconds:0},x=at(t.target)):x=null,Y={precision:e,callback:s,countdown:"object"===r(t)&&!0===t.countdown,target:x,startValues:A},S=t}function st(t){if(t="string"===typeof t?t:g,!it(t))throw new Error("Error in precision parameter: ".concat(t," is not a valid value"));return t}function it(t){return O.indexOf(t)>=0}function ut(t){var e;if("object"===r(t))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");e=t}else{for(var n in t)if(O.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));e=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}e=e.map((function(t){return parseInt(t,10)}));var o=e[h],s=e[d]+ct(o,c),i=e[p]+ct(s,a),u=e[v]+ct(i,f),y=e[m]+ct(u,l);return e[h]=o%c,e[d]=s%a,e[p]=i%f,e[v]=u%l,e[m]=y,e}function ct(t,e){var n=t/e;return n<0?Math.ceil(n):Math.floor(n)}function at(t){if(t){x=ut(t);var e=lt(x);return P=$+e.secondTenths*j[y]*o,x}}function ft(t){A=ut(t),D.secondTenths=A[h],D.seconds=A[d],D.minutes=A[p],D.hours=A[v],D.days=A[m],L=lt(A,L)}function lt(t,e){var n=e||{};return n.days=t[m],n.hours=n.days*l+t[v],n.minutes=n.hours*f+t[p],n.seconds=n.minutes*a+t[d],n.secondTenths=n.seconds*c+t[[h]],n}function ht(){G(),bt("stopped",H)}function dt(){G(),N(S),bt("reset",H)}function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=n(n({},k),t),wt()||(N(t),bt("started",H))}function vt(){K(),R=!0,bt("paused",H)}function mt(t,e){M.on(t,e)}function yt(t,e){M.removeListener(t,e)}function gt(t){M.removeAllListeners(t)}function bt(t,e){M.emit(t,e)}function wt(){return U}function Tt(){return R}function Ot(){return D}function jt(){return L}function Et(){return Y}ot(k),"undefined"!==typeof this&&(this.start=pt,this.pause=vt,this.stop=ht,this.reset=dt,this.isRunning=wt,this.isPaused=Tt,this.getTimeValues=Ot,this.getTotalTimeValues=jt,this.getConfig=Et,this.addEventListener=mt,this.on=mt,this.removeEventListener=yt,this.removeAllEventListeners=gt,this.off=yt)}t.Timer=S,t["default"]=S,Object.defineProperty(t,"__esModule",{value:!0})}))},"7abe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("example")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._m(1),n("div",{staticStyle:{"padding-left":"20px"}},[n("div",[n("h5",[t._v("1、切换主题色")]),n("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[n("van-button",{attrs:{color:t.$store.state.theme.themes.blue.color},on:{click:function(e){return t.handleSetTheme("blue")}}},[t._v("蓝色")]),n("van-button",{attrs:{color:t.$store.state.theme.themes.red.color},on:{click:function(e){return t.handleSetTheme("red")}}},[t._v("红色")]),n("van-button",{attrs:{color:t.$store.state.theme.themes.green.color},on:{click:function(e){return t.handleSetTheme("green")}}},[t._v("绿色")])],1)]),n("div",[n("h5",[t._v("2、moment，日期格式化，"+t._s(t.currentTime))])]),n("div",[n("h5",[t._v("3、easytimer，倒计时，"+t._s(t.timeValue))])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("img",{attrs:{src:n("8dbf")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("h2",[t._v("Vue2 Vant Template")])])}],u=(n("d3b7"),n("25f0"),n("66d4")),c=n.n(u),a={name:"Example",data:function(){return{timeValue:""}},computed:{currentTime:function(){return this.$moment().format("YYYY-MM-DD HH:mm:ss")}},mounted:function(){var t=this,e=new c.a;e.start(),e.addEventListener("secondsUpdated",(function(n){console.log(n),t.timeValue=e.getTimeValues().toString()}))},methods:{handleSetTheme:function(t){"blue"===t&&this.$toast("切换为蓝色主题色"),"red"===t&&this.$toast("切换为红色主题色"),"green"===t&&this.$toast("切换为绿色主题色"),this.$store.dispatch("theme/setThemeType",t)}}},f=a,l=n("2877"),h=Object(l["a"])(f,s,i,!1,null,"70efc7fd",null),d=h.exports,p={name:"Home",components:{Example:d}},v=p,m=Object(l["a"])(v,r,o,!1,null,"8af9799a",null);e["default"]=m.exports},"8dbf":function(t,e,n){t.exports=n.p+"static/img/logo-vue.82b9c7a5.png"}}]);