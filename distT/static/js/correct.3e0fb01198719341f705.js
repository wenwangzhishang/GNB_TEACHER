webpackJsonp([49],{P7Ty:function(t,e,r){"use strict";function o(t){r("PLyo")}Object.defineProperty(e,"__esModule",{value:!0});var n={};r.d(n,"getCorrect",function(){return y}),r.d(n,"postCorrect",function(){return G});var c=r("Dd8w"),i=r.n(c),a=r("ABCa"),s=r("2sLL"),u=r("1sNz"),l=r("/0UN"),d=r("hGvq"),m=r("rHil"),p=r("ALGc"),h=r("NYxO"),A=r("olkN"),b=r("bOdI"),v=r.n(b),f=r("//Fk"),g=r.n(f),k=r("7+uW"),x=r("YEn3"),y=function(t,e){var r=t.rootState,o=t.commit;return new g.a(function(t,e){Object(x.a)({method:"get",url:"correct/detail",params:{token:r.common.user.token,options:{exercisesId:r.route.params.id,grade:r.route.params.grade,subjectId:r.route.params.subjectId}}}).then(function(e){o("CORRECT",e.data.data),t(e)}).catch(function(t){e(t)})})},G=function(t,e){var r=t.rootState;t.commit;return k.default.$vux.loading.show({text:"请稍候"}),new g.a(function(t,o){Object(x.a)({method:"post",url:"correct",data:{token:r.common.user.token,options:i()({exercisesId:r.route.params.id,grade:r.route.params.grade,subjectId:r.route.params.subjectId,form:"exercises"===r.route.query.type?"1":"2"},e)}}).then(function(e){k.default.$vux.loading.hide(),k.default.$vux.toast.show({text:"纠错成功",type:"text",time:1e3,position:"bottom"}),t(e)}).catch(function(t){k.default.$vux.loading.hide(),o(t)})})},I={correct:[]},M={Correct:function(t){return t.correct}},Z=v()({},"CORRECT",function(t,e){t.correct=e}),R={mutations:Z,getters:M,actions:n,state:I},w={components:{XHeader:a.a,XButton:s.a,Checker:l.a,CheckerItem:d.a,Group:m.a,XTextarea:p.a,ViewBox:u.a},computed:i()({},Object(h.mapGetters)(["Correct","Route"])),data:function(){return{type:[],content:""}},methods:i()({},Object(h.mapActions)(["postCorrect","getCorrect"]),{_commit:function(){if(1===this.type.length)return void this.$vux.toast.show({text:"请选择纠错类型",type:"text",time:1e3,position:"bottom"});var t={content:this.content,type:this.type.toString()};this.postCorrect(t).then(function(){setTimeout(function(){history.back()},500)})}}),beforeCreate:function(){A.a.registerModule("correct",i()({},R))},beforeRouteEnter:function(t,e,r){r(function(t){t.getCorrect().then(function(){t.type=t.Correct.type.split(","),t.content=t.Correct.content})})},beforeRouteLeave:function(t,e,r){this.type=[],this.content="",r()}},C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view-box",{ref:"gnb_correct",attrs:{"body-padding-top":"46px"}},[r("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"我要纠错"}},slot:"header"},[r("p",{attrs:{slot:"right"},on:{click:t._commit},slot:"right"},[t._v("确定")])]),t._v(" "),r("group",{attrs:{title:"纠错类型"}},[r("checker",{staticStyle:{padding:".25rem .75rem 1rem"},attrs:{max:4,type:"checkbox","default-item-class":"select-item","selected-item-class":"select-item-selected"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[r("checker-item",{attrs:{value:"题干有误"}},[t._v("题干有误")]),t._v(" "),r("checker-item",{attrs:{value:"答案有误"}},[t._v("答案有误")]),t._v(" "),r("checker-item",{attrs:{value:"解析有误"}},[t._v("解析有误")]),t._v(" "),r("checker-item",{directives:[{name:"show",rawName:"v-show",value:"lxexercises"===t.Route.query.type,expression:"Route.query.type === 'lxexercises'"}],attrs:{value:"例题有误"}},[t._v("例题有误")]),t._v(" "),r("checker-item",{attrs:{value:"其他"}},[t._v("其他")])],1)],1),t._v(" "),r("group",{attrs:{title:"纠错内容"}},[r("x-textarea",{attrs:{max:200,rows:5,placeholder:"请简单描述纠错内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)},E=[],U={render:C,staticRenderFns:E},j=U,Q=r("VU/8"),N=o,D=Q(w,j,!1,N,"data-v-ba692758",null);e.default=D.exports},PLyo:function(t,e,r){var o=r("pMbQ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("440443e8",o,!0)},pMbQ:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"\n.select-item[data-v-ba692758] {\r\n  width: 5rem;\r\n  height: 1.5rem;\r\n  line-height: 1.5rem;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  color: #4bb7aa;\r\n  border: 1px solid #4bb7aa;\r\n  background-color: #fff;\r\n  margin-right: .3rem;\r\n  margin-top: .75rem;\n}\n.select-item-selected[data-v-ba692758] {\r\n  background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC) no-repeat right bottom;\r\n  border-color: #ff4a00;\n}\r\n",""])}});