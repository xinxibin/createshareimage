(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="b3d4")})({"09fe":function(e,t,n){"use strict";n.r(t);var r=n("2d65"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"24fb":function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var i=o(r),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=r(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},"2d65":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};t.default=r},"3ec6":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\u6bcf\u4e2a\u9875\u9762\u516c\u5171css */",""]),e.exports=t},5565:function(e,t,n){"use strict";n.r(t);var r=n("ac49"),o=n("09fe");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("f2d9");var a,u=n("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=s.exports},"599a":function(e,t,n){var r=n("3ec6");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("7f7e").default;o("516ee37d",r,!0,{sourceMap:!1,shadowMode:!1})},"7f7e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],u=i[1],s=i[2],c=i[3],f={id:e+":"+o,css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(t),n.d(t,"default",(function(){return v}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,c=!1,f=function(){},d=null,l="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){c=n,d=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var u=a[o],s=i[u.id];s.refs--,n.push(s)}t?(a=r(e,t),h(a)):a=[];for(o=0;o<n.length;o++){s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+l+'~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(p){var o=s++;r=u||(u=g()),t=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=g(),t=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function _(e,t,n,r){var o=n?"":M(r.css);if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function y(e,t){var n=M(t.css),r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(l,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var w=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,x=/var\(--status-bar-height\)/gi,C=/var\(--window-top\)/gi,S=/var\(--window-bottom\)/gi,O=/var\(--window-left\)/gi,j=/var\(--window-right\)/gi,T=!1;function M(e){if(!uni.canIUse("css.var")){!1===T&&(T=plus.navigator.getStatusbarHeight());var t={statusBarHeight:T,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};e=e.replace(x,t.statusBarHeight+"px").replace(C,t.top+"px").replace(S,t.bottom+"px").replace(O,"0px").replace(j,"0px")}return e.replace(/\{[\s\S]+?\}|@media.+\{/g,(function(e){return e.replace(w,(function(e,t){return uni.upx2px(t)+"px"}))}))}},"8d48":function(e,t,n){"use strict";n.r(t);var r=n("599a"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"8fe4":function(e,t,n){var r=n("c6c5");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("7f7e").default;o("4952c18a",r,!0,{sourceMap:!1,shadowMode:!1})},ac49:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:e._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-view",{staticClass:e._$g(1,"sc"),attrs:{_i:1}},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%",opacity:"0"},attrs:{src:e._$g(2,"a-src"),mode:"aspectFill",id:"bgCover",_i:2}})],1),n("v-uni-canvas",{attrs:{"canvas-id":"myCanvas",id:"myCanvas",_i:3},on:{longpress:function(t){return e.$handleViewEvent(t)}}})],1)},i=[]},b3d4:function(e,t,n){"use strict";function r(){function e(e){var t=n("8d48");t.__inject__&&t.__inject__(e)}"function"===typeof e&&e(),UniViewJSBridge.publishHandler("webviewReady")}n("c0b7"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},c0b7:function(e,t,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("5565").default)}))},c6c5:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"body{width:100%;height:100%}#myCanvas{width:100%;height:100%}.content{width:100%;height:100%}.bg-image{position:absolute;top:0;left:0;right:0;bottom:0}",""]),e.exports=t},f0c5:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,u,s,c){var f,d="function"===typeof e?e.options:e;if(s){d.components||(d.components={});var l=Object.prototype.hasOwnProperty;for(var p in s)l.call(s,p)&&!l.call(d.components,p)&&(d.components[p]=s[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(d.functional){d._injectStyles=f;var v=d.render;d.render=function(e,t){return f.call(t),v(e,t)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,f):[f]}return{exports:e,options:d}}n.d(t,"a",(function(){return r}))},f2d9:function(e,t,n){"use strict";var r=n("8fe4"),o=n.n(r);o.a}});