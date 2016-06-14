define("a/android.js", ["biz_common/dom/event.js", "biz_common/utils/report.js", "biz_wap/utils/ajax.js", "biz_wap/jsapi/core.js"], function(n, a, e, t) {
	"use strict";

	function o(n) {
		"undefined" != typeof s && s.log && s.log(n);
	}

	function i(n, a) {
		r("http://mp.weixin.qq.com/mp/ad_report?action=follow&type=" + n + a.report_param);
	}

	function d(n) {
		function a() {
			s.invoke("getInstallState", {
				packageName: c.pkgname
			}, function(n) {
				var a = n.err_msg;
				a.indexOf("get_install_state:yes") > -1 && (window.clearInterval(T), k = !0, d.innerHTML = x.installed);
			});
		}

		function e() {
			b && s.invoke("queryDownloadTask", {
				download_id: b
			}, function(a) {
				if (a && a.state) {
					if ("download_succ" == a.state) {
						o("download_succ"), i(c.is_appmsg ? 18 : 14, n), window.clearInterval(y), I = !1, j = !0, d.innerHTML = x.downloaded;
						var e = document.createEvent("MouseEvents");
						e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), d.dispatchEvent(e);
					}
					if ("downloading" == a.state) return;
					("download_fail" == a.state || "default" == a.state) && (o("fail, download_state : " + a.state), window.clearInterval(y), I = !1, t("下载失败"), d.innerHTML = x.download);
				}
			});
		}
		var d = n.btn;
		if (!d) return !1;
		var r = {},
			c = n.adData,
			u = "",
			m = "",
			_ = c.androiddownurl;
		if (_ && _.match) {
			var p = /&channelid\=([^&]*)/,
				f = _.match(p);
			f && f[1] && (u = "&channelid=" + f[1], c.androiddownurl = _.replace(p, ""));
		}
		n.via && (m = ["&via=ANDROIDWX.YYB.WX.ADVERTISE", n.via].join("."));
		var w = !1,
			v = "com.tencent.android.qqdownloader",
			g = 1060125,
			k = !1,
			I = !1,
			j = !1,
			b = 0,
			y = null,
			T = null,
			x = {
				download: "下载",
				downloading: "下载中",
				downloaded: "安装",
				installed: "已安装"
			};
		d.innerHTML = x.download, s.ready(function() {
			s.invoke("getInstallState", {
				packageName: v
			}, function(n) {
				var a = n.err_msg;
				o("getInstallState @yingyongbao : " + a);
				var e = a.lastIndexOf("_") + 1,
					t = a.substring(e);
				1 * t >= g && a.indexOf("get_install_state:yes") > -1 && (w = !0);
			}), s.invoke("getInstallState", {
				packageName: c.pkgname
			}, function(n) {
				var a = n.err_msg;
				o("getInstallState @" + c.pkgname + " : " + a);
				var e = a.lastIndexOf("_") + 1,
					t = a.substring(e);
				1 * t >= c.versioncode && a.indexOf("get_install_state:yes") > -1 && (k = !0, d.innerHTML = x.installed);
			}), d.addEventListener("click", function() {
				if (o("click @js_app_action"), !I) {
					if (k) return !1;
					if (j) return s.invoke("installDownloadTask", {
						download_id: b,
						file_md5: c.md5sum
					}, function(n) {
						var e = n.err_msg;
						o("installDownloadTask : " + e), e.indexOf("install_download_task:ok") > -1 ? T = setInterval(a, 1e3) : t("安装失败！");
					}), !1;
					var _ = function() {
							return w ? (i(c.is_appmsg ? 16 : 12, n), void(location.href = "tmast://download?oplist=1,2&pname=" + c.pkgname + u + m)) : void s.invoke("addDownloadTask", {
								task_name: c.appname,
								task_url: c.androiddownurl,
								extInfo: n.task_ext_info,
								file_md5: c.md5sum
							}, function(a) {
								var r = a.err_msg;
								o("addDownloadTask : " + r), r.indexOf("add_download_task:ok") > -1 ? (i(c.is_appmsg ? 15 : 11, n), I = !0, b = a.download_id, o("download_id : " + b), d.innerHTML = x.downloading, y = setInterval(e, 1e3)) : t("调用下载器失败！");
							});
						};
					return c.rl && c.traceid ? r[c.traceid] || (r[c.traceid] = !0, l({
						url: "/mp/advertisement_report?report_type=2&type=" + c.type + "&url=" + encodeURIComponent(c.androiddownurl) + "&tid=" + c.traceid + "&rl=" + encodeURIComponent(c.rl) + "&__biz=" + biz + "&pt=" + c.pt + "&r=" + Math.random(),
						type: "GET",
						timeout: 1e3,
						complete: function() {
							r[c.traceid] = !1, _();
						},
						async: !0
					})) : _(), !1;
				}
			});
		});
	}
	var r = (n("biz_common/dom/event.js"), n("biz_common/utils/report.js")),
		l = n("biz_wap/utils/ajax.js"),
		s = n("biz_wap/jsapi/core.js");
	return d;
});