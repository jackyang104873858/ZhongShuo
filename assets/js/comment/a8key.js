define("biz_wap/jsapi/a8key.js", ["biz_wap/jsapi/core.js"], function(n) {
	"use strict";
	var e, i = n("biz_wap/jsapi/core.js"),
		o = !1,
		t = {},
		a = function() {
			"undefined" != typeof window.pass_ticket && window.pass_ticket ? (t.onAlreadyHasA8Key && t.onAlreadyHasA8Key.call(A), u()) : 0 == window.isInWeixinApp() ? (t.onOutOfWeixinApp && t.onOutOfWeixinApp.call(A), u()) : (o = 1, i.ready(c));
		},
		c = function() {
			window.isWeixinCached ? w(u) : (t.onNoCacheFuncWeixin && t.onNoCacheFuncWeixin.call(A), u());
		},
		w = function(n) {
			if (t.onJSAPIGetA8KeyStart && t.onJSAPIGetA8KeyStart.call(A), window.getA8KeyUrl) t.onJSAPIGetA8KeyEnd && t.onJSAPIGetA8KeyEnd.call(A), n(window.getA8KeyUrl);
			else {
				var e = !1,
					o = setTimeout(function() {
						e = !0, t.onJSAPIGetA8KeyTimeout && t.onJSAPIGetA8KeyTimeout.call(A), n("");
					}, 1500);
				i.on("onGetA8KeyUrl", function(i) {
					o && clearTimeout(o), e || (t.onJSAPIGetA8KeyEnd && t.onJSAPIGetA8KeyEnd.call(A, i), n(i.url));
				});
			}
		},
		u = function(n) {
			var i = !1;
			if (n) {
				var o = getQueryFromURL(n);
				window.uin = o.uin || window.uin, window.key = o.key || window.key, window.pass_ticket = o.pass_ticket || window.pass_ticket, i = !0;
			}
			e && e(i);
		},
		A = {
			isPageCached: o
		};
	return A.config = function(n) {
		return t = n || {}, A;
	}, A.onReady = function(n) {
		e = n, a();
	}, A;
});