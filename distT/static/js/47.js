webpackJsonp([47,59],{7:function(e,t,i){!function(t,i){e.exports=i()}(this,function(){return function(e){function t(o){if(i[o])return i[o].exports;var p=i[o]={exports:{},id:o,loaded:!1};return e[o].call(p.exports,p,p.exports,t),p.loaded=!0,p.exports}var i={};return t.m=e,t.c=i,t.p="/",t(0)}([function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var p=i(5),n=o(p);t.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",n.default)},function(e,t){"use strict";function i(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:i(e.parentNode)}function o(e,t){var i=void 0,o=isNaN(e.scrollTop)?e.pageYOffset:e.scrollTop;if("top"===t)i=o;else{var p=getComputedStyle(e===window?document.body:e),n=e===window?window.innerHeight:parseInt(p.height,10),a=e===window?document.body.scrollHeight:e.scrollHeight,s=parseInt(p.paddingTop,10),x=parseInt(p.paddingBottom,10);i=a-n-o-s-x}return i}Object.defineProperty(t,"__esModule",{value:!0});var p={bubbles:"loading-bubbles",circles:"loading-circles",default:"loading-default",spiral:"loading-spiral",waveDots:"loading-wave-dots"};t.default={data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},computed:{spinnerType:function(){return p[this.spinner]||p.default}},props:{distance:{type:Number,default:100},onInfinite:{type:Function,required:!0},spinner:String,direction:{type:String,default:"bottom"}},ready:function(){this.scrollParent=i(this.$el),this.scrollHandler=function(){this.isLoading||this.attemptLoad()}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler)},events:{"$InfiniteLoading:loaded":function(){this.isFirstLoad=!1,this.isLoading&&this.$nextTick(this.attemptLoad)},"$InfiniteLoading:complete":function(){this.isLoading=!1,this.isComplete=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:reset":function(){this.isLoading=!1,this.isComplete=!1,this.isFirstLoad=!0,this.scrollParent.addEventListener("scroll",this.scrollHandler),setTimeout(this.scrollHandler,1)}},methods:{attemptLoad:function(){var e=o(this.scrollParent,this.direction);!this.isComplete&&e<=this.distance?(this.isLoading=!0,this.onInfinite.call()):this.isLoading=!1}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,t,i){t=e.exports=i(3)(),t.push([e.id,".loading-wave-dots[_v-34e13b62]{position:relative}.loading-wave-dots[_v-34e13b62]:before{content:'';position:absolute;top:50%;left:50%;margin-left:-4px;margin-top:-4px;width:8px;height:8px;background-color:#bbb;border-radius:50%;animation:linear loading-wave-dots 2.8s infinite}@keyframes loading-wave-dots{0%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}5%{box-shadow:-32px -4px 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}10%{box-shadow:-32px -6px 0 #999,-16px -4px 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}15%{box-shadow:-32px 2px 0 #bbb,-16px -2px 0 #999,16px 4px 0 #bbb,32px 4px 0 #bbb;transform:translateY(-4px);background-color:#bbb}20%{box-shadow:-32px 6px 0 #bbb,-16px 4px 0 #bbb,16px 2px 0 #bbb,32px 6px 0 #bbb;transform:translateY(-6px);background-color:#999}25%{box-shadow:-32px 2px 0 #bbb,-16px 2px 0 #bbb,16px -4px 0 #999,32px -2px 0 #bbb;transform:translateY(-2px);background-color:#bbb}30%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px -2px 0 #bbb,32px -6px 0 #999;transform:translateY(0)}35%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px -2px 0 #bbb}40%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}to{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}}.loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-bubbles[_v-34e13b62]{position:relative}.loading-bubbles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-.5px;margin-left:-.5px;width:1px;height:1px;border-radius:50%;animation:linear loading-bubbles .85s infinite}@keyframes loading-bubbles{0%{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}12.5%{box-shadow:0 -12px 0 3.2px #666,8.52px -8.52px 0 .4px #666,12px 0 0 .8px #666,8.52px 8.52px 0 1.2px #666,0 12px 0 1.6px #666,-8.52px 8.52px 0 2px #666,-12px 0 0 2.4px #666,-8.52px -8.52px 0 2.8px #666}25%{box-shadow:0 -12px 0 2.8px #666,8.52px -8.52px 0 3.2px #666,12px 0 0 .4px #666,8.52px 8.52px 0 .8px #666,0 12px 0 1.2px #666,-8.52px 8.52px 0 1.6px #666,-12px 0 0 2px #666,-8.52px -8.52px 0 2.4px #666}37.5%{box-shadow:0 -12px 0 2.4px #666,8.52px -8.52px 0 2.8px #666,12px 0 0 3.2px #666,8.52px 8.52px 0 .4px #666,0 12px 0 .8px #666,-8.52px 8.52px 0 1.2px #666,-12px 0 0 1.6px #666,-8.52px -8.52px 0 2px #666}50%{box-shadow:0 -12px 0 2px #666,8.52px -8.52px 0 2.4px #666,12px 0 0 2.8px #666,8.52px 8.52px 0 3.2px #666,0 12px 0 .4px #666,-8.52px 8.52px 0 .8px #666,-12px 0 0 1.2px #666,-8.52px -8.52px 0 1.6px #666}62.5%{box-shadow:0 -12px 0 1.6px #666,8.52px -8.52px 0 2px #666,12px 0 0 2.4px #666,8.52px 8.52px 0 2.8px #666,0 12px 0 3.2px #666,-8.52px 8.52px 0 .4px #666,-12px 0 0 .8px #666,-8.52px -8.52px 0 1.2px #666}75%{box-shadow:0 -12px 0 1.2px #666,8.52px -8.52px 0 1.6px #666,12px 0 0 2px #666,8.52px 8.52px 0 2.4px #666,0 12px 0 2.8px #666,-8.52px 8.52px 0 3.2px #666,-12px 0 0 .4px #666,-8.52px -8.52px 0 .8px #666}87.5%{box-shadow:0 -12px 0 .8px #666,8.52px -8.52px 0 1.2px #666,12px 0 0 1.6px #666,8.52px 8.52px 0 2px #666,0 12px 0 2.4px #666,-8.52px 8.52px 0 2.8px #666,-12px 0 0 3.2px #666,-8.52px -8.52px 0 .4px #666}to{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[_v-34e13b62]{border:2px solid #777;border-right-color:transparent;animation:linear loading-rotating .85s infinite}@keyframes loading-rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},p=0;p<this.length;p++){var n=this[p][0];"number"==typeof n&&(o[n]=!0)}for(p=0;p<t.length;p++){var a=t[p];"number"==typeof a[0]&&o[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),e.push(a))}},e}},function(e,t){e.exports=' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> '},function(e,t,i){var o,p,n={};i(7),o=i(1),p=i(4),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;p&&(a.template=p),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,i){function o(e,t){for(var i=0;i<e.length;i++){var o=e[i],p=l[o.id];if(p){p.refs++;for(var n=0;n<p.parts.length;n++)p.parts[n](o.parts[n]);for(;n<o.parts.length;n++)p.parts.push(x(o.parts[n],t))}else{for(var a=[],n=0;n<o.parts.length;n++)a.push(x(o.parts[n],t));l[o.id]={id:o.id,refs:1,parts:a}}}}function p(e){for(var t=[],i={},o=0;o<e.length;o++){var p=e[o],n=p[0],a=p[1],s=p[2],x=p[3],r={css:a,media:s,sourceMap:x};i[n]?i[n].parts.push(r):t.push(i[n]={id:n,parts:[r]})}return t}function n(e,t){var i=f(),o=m[m.length-1];if("top"===e.insertAt)o?o.nextSibling?i.insertBefore(t,o.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",n(e,t),t}function x(e,t){var i,o,p;if(t.singleton){var n=h++;i=u||(u=s(t)),o=r.bind(null,i,n,!1),p=r.bind(null,i,n,!0)}else i=s(t),o=d.bind(null,i),p=function(){a(i)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else p()}}function r(e,t,i,o){var p=i?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,p);else{var n=document.createTextNode(p),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function d(e,t){var i=t.css,o=t.media,p=t.sourceMap;if(o&&e.setAttribute("media",o),p&&(i+="\n/*# sourceURL="+p.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(p))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},c=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=b(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,h=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=c()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=p(e);return o(i,t),function(e){for(var n=[],a=0;a<i.length;a++){var s=i[a],x=l[s.id];x.refs--,n.push(x)}if(e){var r=p(e);o(r,t)}for(var a=0;a<n.length;a++){var x=n[a];if(0===x.refs){for(var d=0;d<x.parts.length;d++)x.parts[d]();delete l[x.id]}}}};var v=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){var o=i(2);"string"==typeof o&&(o=[[e.id,o,""]]),i(6)(o,{}),o.locals&&(e.exports=o.locals)}])})},324:function(e,t){e.exports=' <view-box class=breakList> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options="{showBack: true}">斩题列表 <a slot=right @click=_intoBan><i class="icon iconfont icon-ban" style=font-size:22px></i></a> </x-header> <header v-if=breakList class=sectionHeader> <p class=ellipsis>{{breakList.chapterName}}</p> <font class=ellipsis>共<b>{{breakList.count}}</b>个题型</font> </header> </div> <div style=padding-top:80px> <template v-if=breakList> <div class="weui_panel weui_panel_access exerciseExampleList" v-for="item in breakList.list"> <div class=weui_panel_hd> {{{item.chapter_name}}} </div> <div @click=_intoDetail(item.excercise_id)> <div class=weui_panel_bd> <div class="weui_media_box weui_media_appmsg"> <div class=weui_media_bd> <p class=example_title>参考例题<b>难度：{{item.degree}}</b></p> <p class=weui_media_desc> {{{item.stem}}} </p> </div> </div> </div> <div v-if=" item.opt_jo.hasOwnProperty(\'A\')" class="weui_media_bd weui_media_box options"> <p class=weui_media_desc v-for="value in item.opt_jo"> {{ $key }} : {{{ value }}} </p> </div> </div> <div class=abandon> <span @click=_abandon(item.loose_win_excercise_id,$index)>撤回</span> </div> </div> </template> <infinite-loading :on-infinite=_onInfinite spinner=waveDots style=height:60px> <span slot=no-results style=color:#4bb7aa> <i class="icon iconfont icon-comiiszanwushuju" style=font-size:1.5rem;margin-right:.2rem></i> <p style=font-size:1rem;display:inline-block>该学生还斩题~</p> </span> <span slot=no-more style=color:#4bb7aa;font-size:.8rem>已加载全部</span> </infinite-loading> </div> </view-box> '},666:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var p=i(5),n=o(p),a=i(4),s=i(7),x=o(s),r=i(6);t.default={components:{XHeader:a.XHeader,XButton:a.XButton,InfiniteLoading:x.default,Panel:a.Panel,Flexbox:a.Flexbox,FlexboxItem:a.FlexboxItem,ViewBox:a.ViewBox,ButtonTab:a.ButtonTab,ButtonTabItem:a.ButtonTabItem},route:{data:function(e){var t=this;this.breakListIsReset?this.$nextTick(function(){t.$broadcast("$InfiniteLoading:reset")}):this.$nextTick(function(){document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop=t.breakListScroll})}},methods:(0,n.default)({},(0,r.mapActions)(["getBreakList","setBreakListScroll","breakAction"]),{_intoBan:function(){history.go(-2)},_abandon:function(e,t){this.breakAction({id:e,index:t})},_intoDetail:function(e){this.setBreakListScroll(document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop),this.$router.go("/example/"+this.Params.studentId+"/"+this.breakSubjectId+"/"+e)},_onInfinite:function(){var e=this;this.getBreakList().then(function(t){e.$broadcast("$InfiniteLoading:loaded");var i=Number(t.data.data.list.length);if(i<5)return void e.$broadcast("$InfiniteLoading:complete")})}}),computed:(0,n.default)({},(0,r.mapGetters)(["breakList","breakListIsReset","breakSubjectId","breakListScroll","Params"]))}},731:function(e,t,i){var o,p,n={};o=i(666),p=i(324),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;p&&(a.template=p),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})}});