(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50effb03"],{"1ce0":function(e,n,t){"use strict";var r=t("f2ac"),s=t.n(r);s.a},9495:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"friends"},[t("div",{staticClass:"friend-main"},[t("h2",[e._v("我的朋友")]),t("div",{staticClass:"friend-user"},e._l(e.friends,(function(n){return t("div",{key:n.userId,staticClass:"friend-box"},[t("img",{attrs:{src:n.avatarUrl,alt:"404"},on:{click:function(t){return e.togUser(n.userId)}}}),t("p",[e._v(e._s(n.nickname))])])})),0)])])},s=[],i=t("0de1"),c={name:"Friends",data:function(){return{currentUserInfo:"null"===window.localStorage.getItem("currentUserInfo")?null:JSON.parse(window.localStorage.getItem("currentUserInfo")),friends:[]}},methods:{getUserFollows:function(e){var n=this;Object(i["d"])(e).then((function(e){n.friends=e.follow}))},togUser:function(e){console.log(e)}},created:function(){this.currentUserInfo&&this.getUserFollows(this.currentUserInfo.userId)}},o=c,a=(t("1ce0"),t("2877")),u=Object(a["a"])(o,r,s,!1,null,"31480841",null);n["default"]=u.exports},f2ac:function(e,n,t){}}]);
//# sourceMappingURL=chunk-50effb03.117d57f6.js.map