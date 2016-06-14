define("sougou/index.js", [], function(e) {
	"use strict";

	function t(e) {
		var t = document.getElementById("js_cover"),
			n = [];
		t && n.push(t);
		var o = document.getElementById("js_content");
		if (o) for (var l = o.getElementsByTagName("img") || [], i = 0, r = l.length; r > i; i++) n.push(l.item(i));
		for (var s = [], i = 0, r = n.length; r > i; i++) {
			var m = n[i],
				a = m.getAttribute("data-src") || m.getAttribute("src");
			a && (s.push(a), function(t) {
				d.on(m, "click", function() {
					return "ios" == e ? window.JSInvoker && window.JSInvoker.openImageList && window.JSInvoker.openImageList(JSON.stringify({
						index: t,
						array: s
					})) : JSInvoker && JSInvoker.weixin_openImageList && window.JSInvoker.weixin_openImageList(JSON.stringify({
						index: t,
						array: s
					})), !1;
				});
			}(i));
		}
	}

	function n(e) {
		if (e && e.length > 0 && (document.getElementById("sg_tj").style.display = "block", document.getElementById("sg_tj").innerHTML = c.tmpl(g, {
			list: e
		}), document.querySelectorAll)) for (var t in document.querySelectorAll(".sg_link")) d.on(document.querySelectorAll(".sg_link")[t], "click", function(e) {
			a({
				url: s,
				type: "post",
				async: !0,
				data: {
					param: JSON.stringify({
						page_url: window.location.href,
						page_title: msg_title,
						click_url: e.target.href,
						click_title: e.target.text
					})
				},
				success: function() {},
				error: function() {}
			});
		});
	}

	function o() {
		var e = "/mp/getcomment?";
		for (var t in sg_data) e += t + "=" + encodeURIComponent(sg_data[t]) + "&";
		a({
			url: e,
			type: "get",
			async: !0,
			success: function(e) {
				var t = window.eval.call(window, "(" + e + ")"),
					n = t.base_resp && t.base_resp.ret;
				if (0 == n) {
					var o = document.createDocumentFragment(),
						i = t.comment;
					i && i.length ? l(i, o, "elected") : document.getElementById("sg_cmt_area").style.display = "none", document.getElementById("sg_readNum3").innerHTML = parseInt(t.read_num) >= 1e5 ? "100000+" : t.read_num, document.getElementById("sg_likeNum3").innerHTML = t.like_num;
				} else document.getElementById("sg_cmt_area").style.display = "none", document.getElementById("js_sg_bar").style.display = "none";
			}
		});
	}

	function l(e, t, n) {
		for (var o, l, r = "", s = document.createElement("div"), a = "http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0", d = 0; l = e[d]; ++d) l.time = i(l.create_time), l.status = "", l.logo_url = l.logo_url || a, l.logo_url = -1 != l.logo_url.indexOf("wx.qlogo.cn") ? l.logo_url.replace(/\/132$/, "/96") : l.logo_url, l.content = m.encode(l.content.htmlDecode().htmlEncode()), l.nick_name = l.nick_name.htmlDecode().htmlEncode(), l.like_num_format = parseInt(l.like_num) >= 1e4 ? (l.like_num / 1e4).toFixed(1) + "万" : l.like_num, l.reply = l.reply || {
			reply_list: []
		}, l.is_elected = "elected" == n ? 1 : l.is_elected, l.is_from_me = 0, l.is_from_friend = 0, l.reply.reply_list.length > 0 && (l.reply.reply_list[0].time = i(l.reply.reply_list[0].create_time), l.reply.reply_list[0].content = m.encode((l.reply.reply_list[0].content || "").htmlEncode())), r += c.tmpl(u, l);
		for (s.innerHTML = r; o = s.children.item(0);) t.appendChild(o);
		document.getElementById("sg_cmt_list").appendChild(t), document.getElementById("sg_cmt_main").style.display = "block", document.getElementById("sg_cmt_loading").style.display = "none", document.getElementById("sg_cmt_statement").style.display = "block", document.getElementById("sg_cmt_qa").style.display = "block";
	}

	function i(e) {
		var t = (new Date).getTime(),
			n = new Date;
		n.setDate(n.getDate() + 1), n.setHours(0), n.setMinutes(0), n.setSeconds(0), n = n.getTime();
		var o = t / 1e3 - e,
			l = n / 1e3 - e,
			i = new Date(n).getFullYear(),
			r = new Date(1e3 * e);
		return 3600 > o ? Math.ceil(o / 60) + "分钟前" : 86400 > l ? Math.floor(o / 60 / 60) + "小时前" : 172800 > l ? "昨天" : 604800 > l ? Math.floor(l / 24 / 60 / 60) + "天前" : r.getFullYear() == i ? r.getMonth() + 1 + "月" + r.getDate() + "日" : r.getFullYear() + "年" + (r.getMonth() + 1) + "月" + r.getDate() + "日";
	}
	var r = "/mp/getrelatedmsg",
		s = "/mp/reportclick",
		m = e("appmsg/emotion/emotion.js");
	m.init();
	var a = e("biz_wap/utils/ajax.js"),
		c = e("biz_common/tmpl.js"),
		d = e("biz_common/dom/event.js");
	e("biz_common/utils/string/html.js");
	var g = e("sougou/a_tpl.html.js"),
		u = e("appmsg/cmt_tpl.html.js");
	if (navigator.userAgent.toLowerCase().match(/ios/)) {
		var _ = navigator.userAgent.toLowerCase().match(/(?:sogousearch\/ios\/)(.*)/);
		if (_ && _[1]) {
			var p = _[1].replace(/\./g, "");
			parseInt(p) > 422 && t("ios");
		}
	} else t("android");
}) //# sourceURL=sougou/index.js