webpackJsonp([52,59],{354:function(e,t){e.exports=' <div class=settings> <x-header :left-options="{showBack: true}">设置</x-header> <group> <cell title=应用评价 link=javascript:; @click=_openStore> <span class=demo-icon slot=icon></span> </cell> <cell title=意见反馈 link=advice> <span class=demo-icon slot=icon></span> </cell> <cell title=修改密码 link=resetPwd> <span class=demo-icon slot=icon></span> </cell> <cell title=退出登录 @click=_quitlogin> <span class=demo-icon slot=icon></span> </cell> <cell title=清除缓存 @click=_clear> <span class=demo-icon slot=icon></span> </cell> </group> <alert :show.sync=show title=清除缓存成功></alert> <confirm :show.sync=quit confirm-text=确定 cancel-text=取消 title=是否退出登录 @on-confirm="_quit(\'确认\')" @on-cancel="_quit(\'取消\')"></confirm> </div> '},696:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(5),c=n(i),s=o(4),l=o(6);t.default={components:{XHeader:s.XHeader,Cell:s.Cell,Group:s.Group,Alert:s.Alert,Confirm:s.Confirm},data:function(){return{show:!1,quit:!1}},methods:(0,c.default)({},(0,l.mapActions)(["updateVersion"]),{_clear:function(){this.show=!0},_quitlogin:function(){this.quit=!0},_quit:function(e){if("确认"==e){localStorage.removeItem("token");try{plus.runtime.restart()}catch(e){this.$router.go("/login")}}},_openQQ:function(){window.location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=458410557&card_type=group&source=qrcode"},_openStore:function(){return"IOS"==this.System?void(window.location.href="itms-apps://itunes.apple.com/cn/app/gui-na-ben-jiao-shi-duan-zai/id1190013249?l=en&mt=8"):void(window.location.href="market://details?id=com.sanbao.guinaben.teacher")}}),computed:(0,c.default)({},(0,l.mapGetters)(["System"]))}},762:function(e,t,o){var n,i,c={};n=o(696),i=o(354),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(c).forEach(function(e){var t=c[e];s.computed[e]=function(){return t}})}});