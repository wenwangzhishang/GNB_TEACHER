webpackJsonp([43],{502:function(e,t,i){i(940);var o=i(50)(i(850),i(975),"data-v-00004f53",null);e.exports=o.exports},557:function(e,t,i){"use strict";function o(e,t){if(!/^javas/.test(e)&&e){"object"===(void 0===e?"undefined":(0,l.default)(e))||t&&"string"==typeof e&&!/http/.test(e)?"object"===(void 0===e?"undefined":(0,l.default)(e))&&!0===e.replace?t.replace(e):"BACK"===e?t.go(-1):t.push(e):window.location.href=e}}function r(e,t){return!t||t._history||"string"!=typeof e||/http/.test(e)?e&&"object"!==(void 0===e?"undefined":(0,l.default)(e))?e:"javascript:void(0);":"#!"+e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(68),l=function(e){return e&&e.__esModule?e:{default:e}}(n);t.go=o,t.getUrl=r},558:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},559:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},560:function(e,t,i){var o=i(559);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(487)("61d8428e",o,!0)},561:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},staticRenderFns:[]}},562:function(e,t,i){i(560);var o=i(50)(i(558),i(561),null,null);e.exports=o.exports},563:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(192),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return(0,r.default)({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},564:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},565:function(e,t,i){var o=i(564);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(487)("5a02d2fe",o,!0)},566:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),e.shouldOverWriteTitle?e._e():i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),e.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[e._t("overwrite-title")],2):e._e(),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},567:function(e,t,i){i(565);var o=i(50)(i(563),i(566),null,null);e.exports=o.exports},569:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},570:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.5em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.vux-blank-half:before{content:"\\2002";speak:none}.vux-blank-full:before{content:"\\2003";speak:none}.vux-no-group-title{margin-top:.77em}',""])},571:function(e,t,i){var o=i(570);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(487)("2f4097e5",o,!0)},572:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("div",{staticClass:"weui-cells__title",style:{color:e.titleColor},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e._t("title"),e._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!e.title},style:{marginTop:"number"==typeof e.gutter?e.gutter+"px":e.gutter}},[e._t("after-title"),e._v(" "),e._t("default")],2)],2)},staticRenderFns:[]}},573:function(e,t,i){i(571);var o=i(50)(i(569),i(572),null,null);e.exports=o.exports},585:function(e,t,i){var o=i(50)(i(587),i(592),null,null);e.exports=o.exports},586:function(e,t,i){i(590);var o=i(50)(i(588),i(591),null,null);e.exports=o.exports},587:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=["-moz-box-","-webkit-box-",""];t.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={};if(e["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var t=0;t<o.length;t++)e[o[t]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:0}}}},588:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},589:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{-webkit-box-flex:1;flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col{box-orient:vertical;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}.vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}",""])},590:function(e,t,i){var o=i(589);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(487)("9df12630",o,!0)},591:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===e.orient,"vux-flex-row":"horizontal"===e.orient},style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},592:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox-item",style:e.style},[e._t("default")],2)},staticRenderFns:[]}},630:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(557);t.default={name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&(0,o.go)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}},631:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.5em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-panel{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel:first-child{margin-top:0}.weui-panel:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel:after,.weui-panel:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-panel:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel__hd{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-panel .weui-cell:first-child:before{display:block}',""])},632:function(e,t,i){var o=i(631);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(487)("4349ef72",o,!0)},633:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-panel weui-panel_access"},[e.header&&e.header.title?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:e._s(e.header.title)},on:{click:function(t){e.$emit("on-click-header")}}}):e._e(),e._v(" "),e._t("header"),e._v(" "),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"vux-card-content"},[e._t("content")],2)]),e._v(" "),i("div",{staticClass:"weui-panel__ft"},[e.footer&&e.footer.title?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:e.onClickFooter}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:e._s(e.footer.title)}})]):e._e()]),e._v(" "),e._t("footer")],2)},staticRenderFns:[]}},634:function(e,t,i){i(632);var o=i(50)(i(630),i(633),null,null);e.exports=o.exports},850:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(191),n=o(r),l=i(567),a=o(l),s=i(562),c=o(s),d=i(634),f=o(d),u=i(586),p=o(u),x=i(585),b=o(x),h=i(573),w=o(h),v=i(193);t.default={name:"index",components:{XHeader:a.default,ViewBox:c.default,Card:f.default,Flexbox:p.default,FlexboxItem:b.default,Group:w.default},computed:(0,n.default)({},(0,v.mapGetters)(["DownloadPaper"]),{block:function(){return this.DownloadPaper.list.block}}),methods:(0,n.default)({},(0,v.mapActions)(["getDownloadUpdate","setMyDownloadPaperUp","setMyDownloadPaperDown","setMyDownloadPaperDel"]),{update:function(){var e=this;this.getDownloadUpdate().then(function(){e.$router.go(-1)})}})}},911:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,".center[data-v-00004f53]{text-align:center}",""])},940:function(e,t,i){var o=i(911);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(487)("de53a736",o,!0)},975:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view-box",{ref:"downloadUpdate",attrs:{"body-padding-top":"46px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{"left-options":{backText:"编辑"}},slot:"header"},[i("div",{on:{click:function(t){e.update()}},slot:"right"},[e._v("完成")])]),e._v(" "),i("div",e._l(e.block,function(t,o){return i("div",{key:o},[i("div",{staticClass:"weui-cells__title"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.list,function(t,r){return i("card",{key:r},[i("div",{slot:"content"},[i("div",{domProps:{innerHTML:e._s(t.stem)}}),e._v(" "),e._l(t.opt,function(t,o){return i("div",{key:o,staticStyle:{"padding-top":"5px"}},[e._v("\n            "+e._s(o)+"： \n            "),i("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(t)}})])})],2),e._v(" "),i("div",{slot:"footer"},[i("div",{staticClass:"weui-cell weui-cell_link"},[i("div",{staticClass:"weui-cell__bd"},[i("flexbox",[i("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(t){e.setMyDownloadPaperUp({pindex:o,index:r})}}},[i("i",{staticClass:"icon iconfont icon-up"}),e._v("上移\n                ")]),e._v(" "),i("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(t){e.setMyDownloadPaperDown({pindex:o,index:r})}}},[i("i",{staticClass:"icon iconfont icon-down"}),e._v("下移\n                ")]),e._v(" "),i("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(t){e.setMyDownloadPaperDel({pindex:o,index:r})}}},[i("i",{staticClass:"icon iconfont icon-lajitong16"}),e._v("删除\n                ")])],1)],1)])])])})],2)}))],1)},staticRenderFns:[]}}});