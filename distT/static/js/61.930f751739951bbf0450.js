webpackJsonp([61],{1034:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("keep-alive",[o("router-view")],1)},staticRenderFns:[]}},531:function(e,t,o){var n=o(50)(o(879),o(1034),null,null);e.exports=n.exports},787:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MYDOWNLOAD="MYDOWNLOAD",t.MYDOWNLOAD_RESET="MYDOWNLOAD_RESET",t.MYDOWNLOAD_PAPER="MYDOWNLOAD_PAPER",t.MYDOWNLOAD_PAPER_RESET="MYDOWNLOAD_PAPER_RESET",t.MYDOWNLOAD_PAPER_SCROLL="MYDOWNLOAD_PAPER_SCROLL"},821:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.clearMyDownloadPaper=t.setMyDownloadPaperScroll=t.getMyDownloadList=t.clearMyDownload=t.getMyDownload=void 0;var a=o(191),r=n(a),u=o(128),l=n(u),d=o(787),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(d),i=o(195),f=n(i);t.getMyDownload=function(e,t){var o=e.rootState,n=e.commit;return new l.default(function(e,a){(0,f.default)({method:"get",url:"download/myDownload",params:(0,r.default)({token:o.common.user.token},t)}).then(function(t){n(c.MYDOWNLOAD,t.data.data),e(t)}).catch(function(e){a(e)})})},t.clearMyDownload=function(e){e.rootState;(0,e.commit)(c.MYDOWNLOAD_RESET)},t.getMyDownloadList=function(e){var t=e.rootState,o=e.commit;return new l.default(function(e,n){(0,f.default)({method:"get",url:"download/myDownload/list",params:{token:t.common.user.token,downloadId:t.route.params.id}}).then(function(t){o(c.MYDOWNLOAD_PAPER,t.data.data),e(t)}).catch(function(e){n(e)})})},t.setMyDownloadPaperScroll=function(e,t){(0,e.commit)(c.MYDOWNLOAD_PAPER_SCROLL,t)},t.clearMyDownloadPaper=function(e){e.rootState;(0,e.commit)(c.MYDOWNLOAD_PAPER_RESET)}},822:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MyDownload=function(e){return e.download},t.MyDownloadPaper=function(e){return e.paper}},823:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var a,r=o(196),u=function(e){return e&&e.__esModule?e:{default:e}}(r),l=o(787),d=n(l),c=o(822),i=n(c),f=o(821),D=n(f),O={paper:{list:[],scroll:0},download:[]},s=(a={},(0,u.default)(a,d.MYDOWNLOAD,function(e,t){e.download=t}),(0,u.default)(a,d.MYDOWNLOAD_RESET,function(e){e.download=[]}),(0,u.default)(a,d.MYDOWNLOAD_PAPER,function(e,t){e.paper.list=t}),(0,u.default)(a,d.MYDOWNLOAD_PAPER_RESET,function(e){e.paper.list=[],e.paper.scroll=0}),(0,u.default)(a,d.MYDOWNLOAD_PAPER_SCROLL,function(e,t){e.paper.scroll=t}),a);t.default={state:O,getters:i,actions:D,mutations:s}},879:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(191),r=n(a),u=o(87),l=n(u),d=o(823),c=n(d);t.default={name:"myDownload",beforeCreate:function(){l.default.registerModule("myDownload",(0,r.default)({},c.default))}}}});