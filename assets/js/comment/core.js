define("biz_wap/jsapi/core.js", [], function() {
	"use strict";
	var n = window.__moon_report ||
	function() {}, o = 8, e = {
		ready: function(e) {
			var i = function() {
					try {
						e && e();
					} catch (i) {
						throw n([{
							offset: o,
							log: "ready",
							e: i
						}]), i;
					}
				};
			"undefined" != typeof top.window.WeixinJSBridge && top.window.WeixinJSBridge.invoke ? i() : top.window.document.addEventListener ? top.window.document.addEventListener("WeixinJSBridgeReady", i, !1) : top.window.document.attachEvent && (top.window.document.attachEvent("WeixinJSBridgeReady", i), top.window.document.attachEvent("onWeixinJSBridgeReady", i));
		},
		invoke: function(e, i, t) {
			this.ready(function() {
				return "object" != typeof top.window.WeixinJSBridge ? (alert("请在微信中打开此链接！"), !1) : void top.window.WeixinJSBridge.invoke(e, i, function(i) {
					try {
						if (t) {
							t.apply(window, arguments);
							var d = i && i.err_msg ? ", err_msg-> " + i.err_msg : "";
							console.debug("[jsapi] invoke->" + e + d);
						}
					} catch (r) {
						throw n([{
							offset: o,
							log: "invoke",
							e: r
						}]), r;
					}
				});
			});
		},
		call: function(e) {
			this.ready(function() {
				if ("object" != typeof top.window.WeixinJSBridge) return !1;
				try {
					top.window.WeixinJSBridge.call(e);
				} catch (i) {
					throw n([{
						offset: o,
						log: "call",
						e: i
					}]), i;
				}
			});
		},
		on: function(e, i) {
			this.ready(function() {
				return "object" == typeof top.window.WeixinJSBridge && top.window.WeixinJSBridge.on ? void top.window.WeixinJSBridge.on(e, function() {
					try {
						i && i.apply(window, arguments);
					} catch (e) {
						throw n([{
							offset: o,
							log: "on",
							e: e
						}]), e;
					}
				}) : !1;
			});
		}
	};
	return e;
}) //# sourceURL=biz_wap/jsapi/core.js