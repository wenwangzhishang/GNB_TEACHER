webpackJsonp([4],{"0g0g":function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"\n.homework_add[data-v-543272b1] {\n  padding: 15px 0 5px;\n  text-align: center;\n  background: #F3F9F8;\n}\n.homework_add span[data-v-543272b1] {\n  display: block;\n  color: #4cc0be;\n}\n.homework_add p[data-v-543272b1] {\n  line-height: 100px;\n  display: inline-block;\n  font-size: 100px;\n  color: #4cc0be;\n  width: 100px;\n  height: 100px;\n  border-radius: 20%;\n  border: 2px solid #4cc0be;\n  margin-bottom: 10px;\n}\n",""])},FkMa:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,".gnb-changeSub {\n  margin-right: 8px;\n}\n.gnb-changeSub .with_arrow {\n  display: inline-block;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #fff;\n  border-style: solid;\n  position: absolute;\n  right: -5px;\n  top: 7px;\n}\n.gnb-changeSub .gnb-changeSub-popup {\n  background: #fff;\n  width: 4rem;\n  border-radius: 8px;\n  padding: .5rem ;\n  top: 2.3rem;\n  left: 87%;\n  -webkit-transform: translate(-50%, 0);\n}\n.gnb-changeSub .gnb-changeSub-popup p {\n  font-size: .8rem;\n  text-align: center;\n  line-height: 1.8rem;\n  color: #555;\n}\n.gnb-changeSub .gnb-changeSub-popup .active {\n  background: #ccc;\n}\n.gnb-changeSub .gnb-changeSub-popup:before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n  border-width: .5rem;\n  border-bottom-color: #fff;\n  content: '';\n  position: absolute;\n  top: -0.9rem;\n  right: 1rem;\n}\n",""])},UgXb:function(e,n,t){"use strict";var o=(t("q/am"),t("4VPn")),r=t.n(o),a=(t("YV9v"),{components:{"mt-popup":r.a},data:function(){return{visible:!1,selected:2,path:this.$route.fullPath,subjectAllList:[{id:2,value:"数学",key:"math"}]}},methods:{onDisplay:function(){this.visible=!0},onClickBack:function(e){this.selected!==e.id&&(this.selected=e.id,this.$emit("update:change",e.id)),this.visible=!1}},created:function(){this.$emit("update:change",this.selected)}}),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"gnb-changeSub"},[t("p",{on:{click:function(n){e.onDisplay()}}},[e._v("\n    "+e._s(e._f("subject")(e.selected))+"\n    "),t("span",{staticClass:"with_arrow"})]),e._v(" "),t("mt-popup",{staticClass:"gnb-changeSub-popup",attrs:{"popup-transition":"popup-fade"},model:{value:e.visible,callback:function(n){e.visible=n},expression:"visible"}},[e._l(e.subjectAllList,function(n,o){return[t("p",{key:o,class:n.id===e.selected?"active":"",on:{click:function(t){e.onClickBack(n)}}},[e._v(e._s(n.value))])]})],2)],1)},u=[],s={render:i,staticRenderFns:u},d=s,l=t("VU/8"),_=l(a,d,!1,null,null,null);n.a=_.exports},YV9v:function(e,n,t){var o=t("FkMa");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("ce212b3a",o,!0)},jrer:function(e,n,t){var o=t("0g0g");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("59c6c37f",o,!0)},"k9+I":function(e,n,t){"use strict";function o(e){t("jrer")}Object.defineProperty(n,"__esModule",{value:!0});var r=t("BO1k"),a=t.n(r),i=t("Dd8w"),u=t.n(i),s=t("ABCa"),d=t("1DHf"),l=t("dQSc"),_=t("rHil"),c=t("1sNz"),p=t("jOlP"),f=t("2sLL"),m=t("Msp2"),v=t("YxJB"),h=t("3Lt7"),g=t("2FOq"),b=t("63CM"),y=t.n(b),w=t("UgXb"),A=t("NYxO"),x=t("k9Ku"),S={name:"index",components:{Actionsheet:m.a,XHeader:s.a,Card:l.a,Cell:d.a,Group:_.a,ViewBox:c.a,Spinner:p.a,XButton:f.a,gnbChangeSub:w.a,Flexbox:v.a,FlexboxItem:h.a,Previewer:g.a},computed:u()({},Object(A.mapGetters)(["Homework","User"])),directives:{TransferDom:y.a},data:function(){return{selectedSub:"",show:!1,error:!1,loading:!0,audio:{index:"",obj:"",state:!1},menu:[{label:"发送文字",value:"content"},{label:"录制语音",value:"audio"},{label:"发送图片",value:"image"}],list:[{}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},methods:u()({},Object(A.mapActions)(["getHomework","clearHomework","setHomeworkScroll"]),{_add:function(){this.show=!0},_getData:function(){var e=this;this.loading=!0,this.getHomework({subjectId:this.selectedSub}).then(function(){e.error=!1,e.loading=!1}).catch(function(){e.error=!0,e.loading=!1})},_publish:function(e){this.$router.push({name:"homework_publish_"+e})},_show:function(e,n){var t=this;this.list=[];var o=!0,r=!1,i=void 0;try{for(var u,s=a()(n);!(o=(u=s.next()).done);o=!0){var d=u.value;this.list.push({w:Number(d.width),h:Number(d.height),src:""+d.url})}}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}this.$nextTick(function(){t.$refs.previewer.show(e)})},_audio:function(e,n){var t=this;this.audio.index=n,this.audio.state?(this.audio.index=null,this.audio.state=!1,this.audio.obj.stop()):(this.audio.state=!0,this.audio.obj=new x.Howl({src:[e],onloaderror:function(){alert("播放音频文件失败请重试")},onend:function(){t.audio.index=null,t.audio.state=!1,t.audio.obj.stop()}}),this.audio.obj.stop().play())}}),watch:{selectedSub:function(){this.clearHomework(),this._getData()}},mounted:function(){this._getData()},beforeRouteEnter:function(e,n,t){t(function(e){"index"!==n.name&&(e.clearHomework(),e._getData())})},beforeRouteLeave:function(e,n,t){this.audio.state&&(this.audio.index=null,this.audio.state=!1,this.audio.obj.stop()),t()}},k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("view-box",{ref:"homework",attrs:{"body-padding-top":"220px"}},[t("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[t("x-header",{attrs:{"left-options":{backText:"布置作业",showBack:!0}}},[t("div",{staticStyle:{margin:"0"},attrs:{slot:"right"},slot:"right"},[t("gnbChangeSub",{attrs:{change:e.selectedSub},on:{"update:change":function(n){e.selectedSub=n}}})],1)]),e._v(" "),t("div",{staticClass:"homework_add",on:{click:e._add}},[t("p",[e._v("+")]),e._v(" "),t("span",[e._v("发布作业")])])],1),e._v(" "),t("div",[e._l(e.Homework.list,function(n,o){return t("card",{key:o},[e._v("\n      "+e._s(n.audio)+"\n      "),t("div",{staticClass:"weui-panel__hd",staticStyle:{padding:"5px 15px"},attrs:{slot:"header"},slot:"header"},[t("flexbox",[t("flexbox-item",{attrs:{span:7}},[e._v(e._s(e._f("ymdhms")(n.time)))]),e._v(" "),t("flexbox-item",{staticStyle:{color:"#4cc0be","text-align":"right","padding-right":"5px"},attrs:{span:5}},[t("x-button",{attrs:{type:"primary",mini:"",plain:""},nativeOn:{click:function(t){e.$router.push({name:"homework_class",params:{index:o,id:n.homeworkId}})}}},[e._v("布置给")])],1)],1)],1),e._v(" "),n.content?t("p",{staticClass:"card-padding",attrs:{slot:"content"},slot:"content"},[e._v(e._s(n.content))]):e._e(),e._v(" "),n.img?t("flexbox",{attrs:{slot:"content",wrap:"wrap",align:"baseline",gutter:0},slot:"content"},e._l(n.img,function(o,r){return t("flexbox-item",{key:r,staticStyle:{"text-align":"center","margin-bottom":"10px"},attrs:{span:3},nativeOn:{click:function(t){e._show(r,n.img)}}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.url+"?imageMogr2/auto-orient/thumbnail/260x360!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim",expression:"img.url+'?imageMogr2/auto-orient/thumbnail/260x360!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim'"}],staticClass:"previewer-answer-img",attrs:{width:"65",height:"90"}})])})):e._e(),e._v(" "),n.audio?t("flexbox",{attrs:{slot:"content"},slot:"content"},[t("flexbox-item",{attrs:{span:2},nativeOn:{click:function(t){e._audio(n.audio,o)}}},[e.audio.state&&e.audio.index===o?t("i",{staticClass:"icon iconfont icon-zanting",staticStyle:{"font-size":"2rem"}}):t("i",{staticClass:"icon iconfont icon-playcirclefill",staticStyle:{"font-size":"2rem",color:"#4cc0be","margin-top":"-.1rem"}})])],1):e._e()],1)}),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{type:"dots"}}),e._v(" "),e.error?t("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:function(n){e._getData()}}},[e._v("出错了点我重新加载")]):0===e.User.classes.length?t("p",{staticStyle:{"font-size":"16px",color:"#666",padding:"0 2rem","text-align":"left"},on:{click:function(n){e.$router.push({name:"class_add"})}}},[e._v("\n      没有学生？请点击"),t("span",{staticStyle:{color:"#4cc0be"}},[e._v("创建班级")]),e._v("，并邀请学生加入班级\n      ")]):0!==e.Homework.list.length||e.error||e.loading?e._e():t("p",{staticStyle:{"font-size":"16px",color:"#666",padding:"0 10%"}},[e._v("没有作业？请点击“+”号去布置作业")]),e._v(" "),t("p")],1)],2),e._v(" "),t("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[t("actionsheet",{attrs:{menus:e.menu,theme:"android"},on:{"on-click-menu":e._publish},model:{value:e.show,callback:function(n){e.show=n},expression:"show"}})],1),e._v(" "),t("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[t("previewer",{ref:"previewer",attrs:{list:e.list,options:e.options}})],1)])},T=[],I={render:k,staticRenderFns:T},O=I,M=t("VU/8"),F=o,B=M(S,O,!1,F,"data-v-543272b1",null);n.default=B.exports},k9Ku:function(e,n,t){(function(t){var o,r;/*!
 *  howler.js v2.0.7
 *  howlerjs.com
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
!function(){"use strict";var a=function(){this.init()};a.prototype={init:function(){var e=this||i;return e._counter=1e3,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var n=this||i;if(e=parseFloat(e),n.ctx||f(),void 0!==e&&e>=0&&e<=1){if(n._volume=e,n._muted)return n;n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e,i.ctx.currentTime);for(var t=0;t<n._howls.length;t++)if(!n._howls[t]._webAudio)for(var o=n._howls[t]._getSoundIds(),r=0;r<o.length;r++){var a=n._howls[t]._soundById(o[r]);a&&a._node&&(a._node.volume=a._volume*e)}return n}return n._volume},mute:function(e){var n=this||i;n.ctx||f(),n._muted=e,n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e?0:n._volume,i.ctx.currentTime);for(var t=0;t<n._howls.length;t++)if(!n._howls[t]._webAudio)for(var o=n._howls[t]._getSoundIds(),r=0;r<o.length;r++){var a=n._howls[t]._soundById(o[r]);a&&a._node&&(a._node.muted=!!e||a._muted)}return n},unload:function(){for(var e=this||i,n=e._howls.length-1;n>=0;n--)e._howls[n].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,f()),e},codecs:function(e){return(this||i)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||i;if(e.state=e.ctx?e.ctx.state||"running":"running",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var n=new Audio;void 0===n.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var n=new Audio;n.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||i,n=null;try{n="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!n||"function"!=typeof n.canPlayType)return e;var t=n.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),r=o&&parseInt(o[0].split("/")[1],10)<33;return e._codecs={mp3:!(r||!t&&!n.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!n.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!n.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(n.canPlayType("audio/x-m4a;")||n.canPlayType("audio/m4a;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(n.canPlayType("audio/x-mp4;")||n.canPlayType("audio/mp4;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(n.canPlayType("audio/x-flac;")||n.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||i,n=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),t=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(n||t)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var o=function(){i._autoResume();var n=e.ctx.createBufferSource();n.buffer=e._scratchBuffer,n.connect(e.ctx.destination),void 0===n.start?n.noteOn(0):n.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),n.onended=function(){n.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0)}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&i.usingWebAudio){for(var n=0;n<e._howls.length;n++)if(e._howls[n]._webAudio)for(var t=0;t<e._howls[n]._sounds.length;t++)if(!e._howls[n]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&i.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var i=new a,u=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};u.prototype={init:function(e){var n=this;return i.ctx||f(),n._autoplay=e.autoplay||!1,n._format="string"!=typeof e.format?e.format:[e.format],n._html5=e.html5||!1,n._muted=e.mute||!1,n._loop=e.loop||!1,n._pool=e.pool||5,n._preload="boolean"!=typeof e.preload||e.preload,n._rate=e.rate||1,n._sprite=e.sprite||{},n._src="string"!=typeof e.src?e.src:[e.src],n._volume=void 0!==e.volume?e.volume:1,n._xhrWithCredentials=e.xhrWithCredentials||!1,n._duration=0,n._state="unloaded",n._sounds=[],n._endTimers={},n._queue=[],n._playLock=!1,n._onend=e.onend?[{fn:e.onend}]:[],n._onfade=e.onfade?[{fn:e.onfade}]:[],n._onload=e.onload?[{fn:e.onload}]:[],n._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],n._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],n._onpause=e.onpause?[{fn:e.onpause}]:[],n._onplay=e.onplay?[{fn:e.onplay}]:[],n._onstop=e.onstop?[{fn:e.onstop}]:[],n._onmute=e.onmute?[{fn:e.onmute}]:[],n._onvolume=e.onvolume?[{fn:e.onvolume}]:[],n._onrate=e.onrate?[{fn:e.onrate}]:[],n._onseek=e.onseek?[{fn:e.onseek}]:[],n._onresume=[],n._webAudio=i.usingWebAudio&&!n._html5,void 0!==i.ctx&&i.ctx&&i.mobileAutoEnable&&i._enableMobileAudio(),i._howls.push(n),n._autoplay&&n._queue.push({event:"play",action:function(){n.play()}}),n._preload&&n.load(),n},load:function(){var e=this,n=null;if(i.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var t=0;t<e._src.length;t++){var o,r;if(e._format&&e._format[t])o=e._format[t];else{if("string"!=typeof(r=e._src[t])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}o=/^data:audio\/([^;,]+);/i.exec(r),o||(o=/\.([^.]+)$/.exec(r.split("?",1)[0])),o&&(o=o[1].toLowerCase())}if(o||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),o&&i.codecs(o)){n=e._src[t];break}}return n?(e._src=n,e._state="loading","https:"===window.location.protocol&&"http:"===n.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new s(e),e._webAudio&&l(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,n){var t=this,o=null;if("number"==typeof e)o=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e){e="__default";for(var r=0,a=0;a<t._sounds.length;a++)t._sounds[a]._paused&&!t._sounds[a]._ended&&(r++,o=t._sounds[a]._id);1===r?e=null:o=null}}var u=o?t._soundById(o):t._inactiveSound();if(!u)return null;if(o&&!e&&(e=u._sprite||"__default"),"loaded"!==t._state){u._sprite=e,u._ended=!1;var s=u._id;return t._queue.push({event:"play",action:function(){t.play(s)}}),s}if(o&&!u._paused)return n||setTimeout(function(){t._emit("play",u._id)},0),u._id;t._webAudio&&i._autoResume();var d=Math.max(0,u._seek>0?u._seek:t._sprite[e][0]/1e3),l=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-d),_=1e3*l/Math.abs(u._rate);u._paused=!1,u._ended=!1,u._sprite=e,u._seek=d,u._start=t._sprite[e][0]/1e3,u._stop=(t._sprite[e][0]+t._sprite[e][1])/1e3,u._loop=!(!u._loop&&!t._sprite[e][2]);var c=u._node;if(t._webAudio){var p=function(){t._refreshBuffer(u);var e=u._muted||t._muted?0:u._volume;c.gain.setValueAtTime(e,i.ctx.currentTime),u._playStart=i.ctx.currentTime,void 0===c.bufferSource.start?u._loop?c.bufferSource.noteGrainOn(0,d,86400):c.bufferSource.noteGrainOn(0,d,l):u._loop?c.bufferSource.start(0,d,86400):c.bufferSource.start(0,d,l),_!==1/0&&(t._endTimers[u._id]=setTimeout(t._ended.bind(t,u),_)),n||setTimeout(function(){t._emit("play",u._id)},0)};"running"===i.state?p():(t.once("resume",p),t._clearTimer(u._id))}else{var f=function(){c.currentTime=d,c.muted=u._muted||t._muted||i._muted||c.muted,c.volume=u._volume*i.volume(),c.playbackRate=u._rate;try{var e=c.play();if("undefined"!=typeof Promise&&e instanceof Promise&&(t._playLock=!0,e.then(function(){t._playLock=!1,t._loadQueue()})),c.paused)return void t._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");_!==1/0&&(t._endTimers[u._id]=setTimeout(t._ended.bind(t,u),_)),n||t._emit("play",u._id)}catch(e){t._emit("playerror",u._id,e)}},m=window&&window.ejecta||!c.readyState&&i._navigator.isCocoonJS;if(4===c.readyState||m)f();else{var v=function(){f(),c.removeEventListener(i._canPlayEvent,v,!1)};c.addEventListener(i._canPlayEvent,v,!1),t._clearTimer(u._id)}}return u._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var t=n._getSoundIds(e),o=0;o<t.length;o++){n._clearTimer(t[o]);var r=n._soundById(t[o]);if(r&&!r._paused&&(r._seek=n.seek(t[o]),r._rateSeek=0,r._paused=!0,n._stopFade(t[o]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var t=this;if("loaded"!==t._state)return t._queue.push({event:"stop",action:function(){t.stop(e)}}),t;for(var o=t._getSoundIds(e),r=0;r<o.length;r++){t._clearTimer(o[r]);var a=t._soundById(o[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,t._stopFade(o[r]),a._node&&(t._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),t._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause())),n||t._emit("stop",a._id))}return t},mute:function(e,n){var t=this;if("loaded"!==t._state)return t._queue.push({event:"mute",action:function(){t.mute(e,n)}}),t;if(void 0===n){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var o=t._getSoundIds(n),r=0;r<o.length;r++){var a=t._soundById(o[r]);a&&(a._muted=e,a._interval&&t._stopFade(a._id),t._webAudio&&a._node?a._node.gain.setValueAtTime(e?0:a._volume,i.ctx.currentTime):a._node&&(a._node.muted=!!i._muted||e),t._emit("mute",a._id))}return t},volume:function(){var e,n,t=this,o=arguments;if(0===o.length)return t._volume;if(1===o.length||2===o.length&&void 0===o[1]){t._getSoundIds().indexOf(o[0])>=0?n=parseInt(o[0],10):e=parseFloat(o[0])}else o.length>=2&&(e=parseFloat(o[0]),n=parseInt(o[1],10));var r;if(!(void 0!==e&&e>=0&&e<=1))return r=n?t._soundById(n):t._sounds[0],r?r._volume:0;if("loaded"!==t._state)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,o)}}),t;void 0===n&&(t._volume=e),n=t._getSoundIds(n);for(var a=0;a<n.length;a++)(r=t._soundById(n[a]))&&(r._volume=e,o[2]||t._stopFade(n[a]),t._webAudio&&r._node&&!r._muted?r._node.gain.setValueAtTime(e,i.ctx.currentTime):r._node&&!r._muted&&(r._node.volume=e*i.volume()),t._emit("volume",r._id));return t},fade:function(e,n,t,o){var r=this;if("loaded"!==r._state)return r._queue.push({event:"fade",action:function(){r.fade(e,n,t,o)}}),r;r.volume(e,o);for(var a=r._getSoundIds(o),u=0;u<a.length;u++){var s=r._soundById(a[u]);if(s){if(o||r._stopFade(a[u]),r._webAudio&&!s._muted){var d=i.ctx.currentTime,l=d+t/1e3;s._volume=e,s._node.gain.setValueAtTime(e,d),s._node.gain.linearRampToValueAtTime(n,l)}r._startFadeInterval(s,e,n,t,a[u],void 0===o)}}return r},_startFadeInterval:function(e,n,t,o,r,a){var i=this,u=n,s=n>t?"out":"in",d=Math.abs(n-t),l=d/.01,_=l>0?o/l:o;_<4&&(l=Math.ceil(l/(4/_)),_=4),e._fadeTo=t,e._interval=setInterval(function(){l>0&&(u+="in"===s?.01:-.01),u=Math.max(0,u),u=Math.min(1,u),u=Math.round(100*u)/100,i._webAudio?e._volume=u:i.volume(u,e._id,!0),a&&(i._volume=u),(t<n&&u<=t||t>n&&u>=t)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,i.volume(t,e._id),i._emit("fade",e._id))},_)},_stopFade:function(e){var n=this,t=n._soundById(e);return t&&t._interval&&(n._webAudio&&t._node.gain.cancelScheduledValues(i.ctx.currentTime),clearInterval(t._interval),t._interval=null,n.volume(t._fadeTo,e),t._fadeTo=null,n._emit("fade",e)),n},loop:function(){var e,n,t,o=this,r=arguments;if(0===r.length)return o._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(t=o._soundById(parseInt(r[0],10)))&&t._loop;e=r[0],o._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=o._getSoundIds(n),i=0;i<a.length;i++)(t=o._soundById(a[i]))&&(t._loop=e,o._webAudio&&t._node&&t._node.bufferSource&&(t._node.bufferSource.loop=e,e&&(t._node.bufferSource.loopStart=t._start||0,t._node.bufferSource.loopEnd=t._stop)));return o},rate:function(){var e,n,t=this,o=arguments;if(0===o.length)n=t._sounds[0]._id;else if(1===o.length){var r=t._getSoundIds(),a=r.indexOf(o[0]);a>=0?n=parseInt(o[0],10):e=parseFloat(o[0])}else 2===o.length&&(e=parseFloat(o[0]),n=parseInt(o[1],10));var u;if("number"!=typeof e)return u=t._soundById(n),u?u._rate:t._rate;if("loaded"!==t._state)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,o)}}),t;void 0===n&&(t._rate=e),n=t._getSoundIds(n);for(var s=0;s<n.length;s++)if(u=t._soundById(n[s])){u._rateSeek=t.seek(n[s]),u._playStart=t._webAudio?i.ctx.currentTime:u._playStart,u._rate=e,t._webAudio&&u._node&&u._node.bufferSource?u._node.bufferSource.playbackRate.value=e:u._node&&(u._node.playbackRate=e);var d=t.seek(n[s]),l=(t._sprite[u._sprite][0]+t._sprite[u._sprite][1])/1e3-d,_=1e3*l/Math.abs(u._rate);!t._endTimers[n[s]]&&u._paused||(t._clearTimer(n[s]),t._endTimers[n[s]]=setTimeout(t._ended.bind(t,u),_)),t._emit("rate",u._id)}return t},seek:function(){var e,n,t=this,o=arguments;if(0===o.length)n=t._sounds[0]._id;else if(1===o.length){var r=t._getSoundIds(),a=r.indexOf(o[0]);a>=0?n=parseInt(o[0],10):t._sounds.length&&(n=t._sounds[0]._id,e=parseFloat(o[0]))}else 2===o.length&&(e=parseFloat(o[0]),n=parseInt(o[1],10));if(void 0===n)return t;if("loaded"!==t._state)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,o)}}),t;var u=t._soundById(n);if(u){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var s=t.playing(n)?i.ctx.currentTime-u._playStart:0,d=u._rateSeek?u._rateSeek-u._seek:0;return u._seek+(d+s*Math.abs(u._rate))}return u._node.currentTime}var l=t.playing(n);l&&t.pause(n,!0),u._seek=e,u._ended=!1,t._clearTimer(n),l&&t.play(n,!0),!t._webAudio&&u._node&&(u._node.currentTime=e),t._emit("seek",n)}return t},playing:function(e){var n=this;if("number"==typeof e){var t=n._soundById(e);return!!t&&!t._paused}for(var o=0;o<n._sounds.length;o++)if(!n._sounds[o]._paused)return!0;return!1},duration:function(e){var n=this,t=n._duration,o=n._soundById(e);return o&&(t=n._sprite[o._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,n=e._sounds,t=0;t<n.length;t++){if(n[t]._paused||e.stop(n[t]._id),!e._webAudio){/MSIE |Trident\//.test(i._navigator&&i._navigator.userAgent)||(n[t]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),n[t]._node.removeEventListener("error",n[t]._errorFn,!1),n[t]._node.removeEventListener(i._canPlayEvent,n[t]._loadFn,!1)}delete n[t]._node,e._clearTimer(n[t]._id);var o=i._howls.indexOf(e);o>=0&&i._howls.splice(o,1)}var r=!0;for(t=0;t<i._howls.length;t++)if(i._howls[t]._src===e._src){r=!1;break}return d&&r&&delete d[e._src],i.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,t,o){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(o?{id:t,fn:n,once:o}:{id:t,fn:n}),r},off:function(e,n,t){var o=this,r=o["_on"+e],a=0;if("number"==typeof n&&(t=n,n=null),n||t)for(a=0;a<r.length;a++){var i=t===r[a].id;if(n===r[a].fn&&i||!n&&i){r.splice(a,1);break}}else if(e)o["_on"+e]=[];else{var u=Object.keys(o);for(a=0;a<u.length;a++)0===u[a].indexOf("_on")&&Array.isArray(o[u[a]])&&(o[u[a]]=[])}return o},once:function(e,n,t){var o=this;return o.on(e,n,t,1),o},_emit:function(e,n,t){for(var o=this,r=o["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,t)}.bind(o,r[a].fn),0),r[a].once&&o.off(e,r[a].fn,r[a].id));return o},_loadQueue:function(){var e=this;if(e._queue.length>0){var n=e._queue[0];e.once(n.event,function(){e._queue.shift(),e._loadQueue()}),n.action()}return e},_ended:function(e){var n=this,t=e._sprite;if(!n._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(n._ended.bind(n,e),100),n;var o=!(!e._loop&&!n._sprite[t][2]);if(n._emit("end",e._id),!n._webAudio&&o&&n.stop(e._id,!0).play(e._id),n._webAudio&&o){n._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=i.ctx.currentTime;var r=1e3*(e._stop-e._start)/Math.abs(e._rate);n._endTimers[e._id]=setTimeout(n._ended.bind(n,e),r)}return n._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,n._clearTimer(e._id),n._cleanBuffer(e._node),i._autoSuspend()),n._webAudio||o||n.stop(e._id),n},_clearTimer:function(e){var n=this;return n._endTimers[e]&&(clearTimeout(n._endTimers[e]),delete n._endTimers[e]),n},_soundById:function(e){for(var n=this,t=0;t<n._sounds.length;t++)if(e===n._sounds[t]._id)return n._sounds[t];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new s(e)},_drain:function(){var e=this,n=e._pool,t=0,o=0;if(!(e._sounds.length<n)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&t++;for(o=e._sounds.length-1;o>=0;o--){if(t<=n)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),t--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var t=[],o=0;o<n._sounds.length;o++)t.push(n._sounds[o]._id);return t}return[e]},_refreshBuffer:function(e){var n=this;return e._node.bufferSource=i.ctx.createBufferSource(),e._node.bufferSource.buffer=d[n._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.value=e._rate,n},_cleanBuffer:function(e){var n=this;if(i._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=i._scratchBuffer}catch(e){}}return e.bufferSource=null,n}};var s=function(e){this._parent=e,this.init()};s.prototype={init:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++i._counter,n._sounds.push(e),e.create(),e},create:function(){var e=this,n=e._parent,t=i._muted||e._muted||e._parent._muted?0:e._volume;return n._webAudio?(e._node=void 0===i.ctx.createGain?i.ctx.createGainNode():i.ctx.createGain(),e._node.gain.setValueAtTime(t,i.ctx.currentTime),e._node.paused=!0,e._node.connect(i.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(i._canPlayEvent,e._loadFn,!1),e._node.src=n._src,e._node.preload="auto",e._node.volume=t*i.volume(),e._node.load()),e},reset:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++i._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,n=e._parent;n._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(n._sprite).length&&(n._sprite={__default:[0,1e3*n._duration]}),"loaded"!==n._state&&(n._state="loaded",n._emit("load"),n._loadQueue()),e._node.removeEventListener(i._canPlayEvent,e._loadFn,!1)}};var d={},l=function(e){var n=e._src;if(d[n])return e._duration=d[n].duration,void p(e);if(/^data:[^;]+;base64,/.test(n)){for(var t=atob(n.split(",")[1]),o=new Uint8Array(t.length),r=0;r<t.length;++r)o[r]=t.charCodeAt(r);c(o.buffer,e)}else{var a=new XMLHttpRequest;a.open("GET",n,!0),a.withCredentials=e._xhrWithCredentials,a.responseType="arraybuffer",a.onload=function(){var n=(a.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+a.status+".");c(a.response,e)},a.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete d[n],e.load())},_(a)}},_=function(e){try{e.send()}catch(n){e.onerror()}},c=function(e,n){i.ctx.decodeAudioData(e,function(e){e&&n._sounds.length>0&&(d[n._src]=e,p(n,e))},function(){n._emit("loaderror",null,"Decoding audio data failed.")})},p=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},f=function(){try{"undefined"!=typeof AudioContext?i.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?i.ctx=new webkitAudioContext:i.usingWebAudio=!1}catch(e){i.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(i._navigator&&i._navigator.platform),n=i._navigator&&i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=n?parseInt(n[1],10):null;if(e&&t&&t<9){var o=/safari/.test(i._navigator&&i._navigator.userAgent.toLowerCase());(i._navigator&&i._navigator.standalone&&!o||i._navigator&&!i._navigator.standalone&&!o)&&(i.usingWebAudio=!1)}i.usingWebAudio&&(i.masterGain=void 0===i.ctx.createGain?i.ctx.createGainNode():i.ctx.createGain(),i.masterGain.gain.setValueAtTime(i._muted?0:1,i.ctx.currentTime),i.masterGain.connect(i.ctx.destination)),i._setup()};o=[],void 0!==(r=function(){return{Howler:i,Howl:u}}.apply(n,o))&&(e.exports=r),n.Howler=i,n.Howl=u,"undefined"!=typeof window?(window.HowlerGlobal=a,window.Howler=i,window.Howl=u,window.Sound=s):void 0!==t&&(t.HowlerGlobal=a,t.Howler=i,t.Howl=u,t.Sound=s)}(),/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.7
 *  howlerjs.com
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var o=this;return o.ctx&&o.ctx.listener?(n="number"!=typeof n?o._pos[1]:n,t="number"!=typeof t?o._pos[2]:t,"number"!=typeof e?o._pos:(o._pos=[e,n,t],o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]),o)):o},HowlerGlobal.prototype.orientation=function(e,n,t,o,r,a){var i=this;if(!i.ctx||!i.ctx.listener)return i;var u=i._orientation;return n="number"!=typeof n?u[1]:n,t="number"!=typeof t?u[2]:t,o="number"!=typeof o?u[3]:o,r="number"!=typeof r?u[4]:r,a="number"!=typeof a?u[5]:a,"number"!=typeof e?u:(i._orientation=[e,n,t,o,r,a],i.ctx.listener.setOrientation(e,n,t,o,r,a),i)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:0,distanceModel:void 0!==n.distanceModel?n.distanceModel:"inverse",maxDistance:void 0!==n.maxDistance?n.maxDistance:1e4,panningModel:void 0!==n.panningModel?n.panningModel:"HRTF",refDistance:void 0!==n.refDistance?n.refDistance:1,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"stereo",action:function(){o.stereo(n,t)}}),o;var r=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof n)return o._stereo;o._stereo=n,o._pos=[n,0,0]}for(var a=o._getSoundIds(t),i=0;i<a.length;i++){var u=o._soundById(a[i]);if(u){if("number"!=typeof n)return u._stereo;u._stereo=n,u._pos=[n,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",u._panner&&u._panner.pan||e(u,r),"spatial"===r?u._panner.setPosition(n,0,0):u._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),o._emit("stereo",u._id)}}return o},Howl.prototype.pos=function(n,t,o,r){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"pos",action:function(){a.pos(n,t,o,r)}}),a;if(t="number"!=typeof t?0:t,o="number"!=typeof o?-.5:o,void 0===r){if("number"!=typeof n)return a._pos;a._pos=[n,t,o]}for(var i=a._getSoundIds(r),u=0;u<i.length;u++){var s=a._soundById(i[u]);if(s){if("number"!=typeof n)return s._pos;s._pos=[n,t,o],s._node&&(s._panner&&!s._panner.pan||e(s,"spatial"),s._panner.setPosition(n,t,o)),a._emit("pos",s._id)}}return a},Howl.prototype.orientation=function(n,t,o,r){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"orientation",action:function(){a.orientation(n,t,o,r)}}),a;if(t="number"!=typeof t?a._orientation[1]:t,o="number"!=typeof o?a._orientation[2]:o,void 0===r){if("number"!=typeof n)return a._orientation;a._orientation=[n,t,o]}for(var i=a._getSoundIds(r),u=0;u<i.length;u++){var s=a._soundById(i[u]);if(s){if("number"!=typeof n)return s._orientation;s._orientation=[n,t,o],s._node&&(s._panner||(s._pos||(s._pos=a._pos||[0,0,-.5]),e(s,"spatial")),s._panner.setOrientation(n,t,o)),a._emit("orientation",s._id)}}return a},Howl.prototype.pannerAttr=function(){var n,t,o,r=this,a=arguments;if(!r._webAudio)return r;if(0===a.length)return r._pannerAttr;if(1===a.length){if("object"!=typeof a[0])return o=r._soundById(parseInt(a[0],10)),o?o._pannerAttr:r._pannerAttr;n=a[0],void 0===t&&(n.pannerAttr||(n.pannerAttr={coneInnerAngle:n.coneInnerAngle,coneOuterAngle:n.coneOuterAngle,coneOuterGain:n.coneOuterGain,distanceModel:n.distanceModel,maxDistance:n.maxDistance,refDistance:n.refDistance,rolloffFactor:n.rolloffFactor,panningModel:n.panningModel}),r._pannerAttr={coneInnerAngle:void 0!==n.pannerAttr.coneInnerAngle?n.pannerAttr.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:void 0!==n.pannerAttr.coneOuterAngle?n.pannerAttr.coneOuterAngle:r._coneOuterAngle,coneOuterGain:void 0!==n.pannerAttr.coneOuterGain?n.pannerAttr.coneOuterGain:r._coneOuterGain,distanceModel:void 0!==n.pannerAttr.distanceModel?n.pannerAttr.distanceModel:r._distanceModel,maxDistance:void 0!==n.pannerAttr.maxDistance?n.pannerAttr.maxDistance:r._maxDistance,refDistance:void 0!==n.pannerAttr.refDistance?n.pannerAttr.refDistance:r._refDistance,rolloffFactor:void 0!==n.pannerAttr.rolloffFactor?n.pannerAttr.rolloffFactor:r._rolloffFactor,panningModel:void 0!==n.pannerAttr.panningModel?n.pannerAttr.panningModel:r._panningModel})}else 2===a.length&&(n=a[0],t=parseInt(a[1],10));for(var i=r._getSoundIds(t),u=0;u<i.length;u++)if(o=r._soundById(i[u])){var s=o._pannerAttr;s={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:s.coneInnerAngle,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:s.coneOuterAngle,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:s.coneOuterGain,distanceModel:void 0!==n.distanceModel?n.distanceModel:s.distanceModel,maxDistance:void 0!==n.maxDistance?n.maxDistance:s.maxDistance,refDistance:void 0!==n.refDistance?n.refDistance:s.refDistance,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:s.rolloffFactor,panningModel:void 0!==n.panningModel?n.panningModel:s.panningModel};var d=o._panner;d?(d.coneInnerAngle=s.coneInnerAngle,d.coneOuterAngle=s.coneOuterAngle,d.coneOuterGain=s.coneOuterGain,d.distanceModel=s.distanceModel,d.maxDistance=s.maxDistance,d.refDistance=s.refDistance,d.rolloffFactor=s.rolloffFactor,d.panningModel=s.panningModel):(o._pos||(o._pos=r._pos||[0,0,-.5]),e(o,"spatial"))}return r},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id)}}()}).call(n,t("DuR2"))}});