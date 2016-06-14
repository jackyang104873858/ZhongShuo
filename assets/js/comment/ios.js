define("a/ios.js", ["biz_common/dom/event.js", "biz_common/utils/report.js", "biz_wap/utils/ajax.js", "biz_wap/jsapi/core.js"], function(t) {
	"use strict";

	function i(t) {
		"undefined" != typeof WeixinJSBridge && WeixinJSBridge.log && WeixinJSBridge.log(t);
	}

	function o(t, i) {
		n("http://mp.weixin.qq.com/mp/ad_report?action=follow&type=" + t + i.report_param);
	}

	function e(t) {
		var e = t.btn;
		if (!e) return !1;
		var n = t.adData,
			p = !1,
			c = {};
		t.report_param = t.report_param || "";
		var d = "http://" + location.host + "/mp/ad_redirect?url=" + encodeURIComponent(n.appinfo_url) + "&uin" + uin + "&ticket=" + (t.ticket || window.ticket);
		r.on(e, "click", function() {
			if (i("click @js_app_action"), p) return i("is_app_installed"), o(n.is_appmsg ? 17 : 13, t), void(location.href = n.app_id + "://");
			var e = function() {
					i("download"), o(n.is_appmsg ? 15 : 11, t), i("go : " + d), location.href = d;
				};
			return i("download"), n.rl && n.traceid ? c[n.traceid] || (c[n.traceid] = !0, a({
				url: "/mp/advertisement_report?report_type=2&type=" + n.type + "&url=" + encodeURIComponent(n.appinfo_url) + "&tid=" + n.traceid + "&rl=" + encodeURIComponent(n.rl) + "&pt=" + n.pt + t.report_param,
				type: "GET",
				timeout: 1e3,
				complete: function() {
					i("ready to download"), c[n.traceid] = !1, e();
				},
				async: !0
			})) : e(), !1;
		});
	} {
		var r = t("biz_common/dom/event.js"),
			n = t("biz_common/utils/report.js"),
			a = t("biz_wap/utils/ajax.js");
		t("biz_wap/jsapi/core.js");
	}
	return e;
});