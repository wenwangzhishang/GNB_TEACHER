webpackJsonp([68],{1044:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("router-view")],1)},staticRenderFns:[]}},541:function(e,t,n){var u=n(50)(n(889),n(1044),null,null);e.exports=u.exports},827:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(128),d=u(o),a=n(52),r=u(a),l=n(195),i=u(l),f={updatePwd:function(e,t){var n=e.rootState,u=e.commit;return r.default.$vux.loading.show({text:"请稍候"}),new d.default(function(e,o){(0,i.default)({method:"post",url:"pwd/update",data:{oldPwd:t.oldPwd,pwd:t.pwd,token:n.common.user.token}}).then(function(t){r.default.$vux.loading.hide(),u("PWD_UPDATE"),e(t)}).catch(function(e){r.default.$vux.loading.hide(),o(e)})})}};t.default={actions:f}},889:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(191),d=u(o),a=n(827),r=u(a),l=n(87),i=u(l);t.default={name:"settings",beforeCreate:function(){i.default.registerModule("settings",(0,d.default)({},r.default))}}}});