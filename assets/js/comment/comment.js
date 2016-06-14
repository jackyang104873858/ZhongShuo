define("appmsg/comment.js", ["appmsg/cmt_tpl.html.js", "biz_common/dom/event.js", "biz_common/dom/class.js", "biz_wap/utils/ajax.js", "biz_common/utils/string/html.js", "biz_common/tmpl.js", "biz_wap/utils/hashrouter.js", "appmsg/emotion/emotion.js", "appmsg/emotion/dom.js"], function(e, t, n, o) {
	"use strict";

	function m(e, t) {
		e && (e.style.display = t ? t : "block");
	}

	function i(e) {
		e && (e.style.display = "none");
	}

	function c() {
		setTimeout(function() {
			m(A.toast);
		}, 750), setTimeout(function() {
			i(A.toast);
		}, 1500);
	}

	function s(e) {
		return e.replace(/^\s+|\s+$/g, "");
	}

	function a() {
		clearTimeout(R), R = setTimeout(function() {
			if (!H && -1 != N) {
				var e = window.innerHeight || document.documentElement.clientHeight,
					t = window.pageYOffset || document.documentElement.scrollTop,
					n = document.documentElement.scrollHeight;
				if (!(N > 0 && n - t - e > 500)) {
					H = !0, i(A.tips), m(A.loading);
					var o = "/mp/appmsg_comment?action=getcomment&__biz=" + biz + "&appmsgid=" + appmsgid + "&idx=" + idx + "&comment_id=" + comment_id + "&offset=" + N + "&limit=" + O;
					try {
						G++, G > 1 && ((new Image).src = "http://mp.weixin.qq.com/mp/jsreport?key=27&content=" + encodeURIComponent(o)), J.indexOf(o) > -1 && ((new Image).src = "http://mp.weixin.qq.com/mp/jsreport?key=25&content=" + encodeURIComponent(o)), J.push(o);
					} catch (c) {}
					x({
						url: o,
						type: "get",
						success: function(e) {
							var t = {};
							try {
								t = window.eval.call(window, "(" + e + ")");
							} catch (n) {}
							var m = t.base_resp && t.base_resp.ret;
							0 == m ? l(t) : D.src = "http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:" + encodeURIComponent(o) + ";ret=" + m + "&r=" + Math.random();
						},
						error: function() {
							D.src = "http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:" + encodeURIComponent(o) + "&r=" + Math.random();
						},
						complete: function() {
							H = !1, i(A.loading);
						}
					});
				}
			}
		}, 50);
	}

	function l(e) {
		var t, n = document.createDocumentFragment();
		Q++, Q > 1 && (Y.src = "http://mp.weixin.qq.com/mp/jsreport?key=26&content=" + encodeURIComponent(JSON.stringify({
			comment_id: comment_id,
			offset: N,
			url: location.href
		}))), 0 == N ? (U = e.logo_url, L = e.nick_name, t = e.elected_comment, t && t.length ? (p(t, n, "elected"), A.list.appendChild(n), m(A.main), 0 == window.can_fans_comment_only || 1 == window.can_fans_comment_only && 1 == e.is_fans ? m(document.getElementById("js_cmt_addbtn1")) : m(document.getElementById("js_cmt_nofans1"), "block"), e.elected_comment_total_cnt <= 10 && (m(document.getElementById("js_cmt_statement")), m(document.getElementById("js_cmt_qa")))) : (i(A.main), 1 == copyright_stat && 1 == need_pay && C.addClass(document.body, "rich_media_empty_extra"), 0 == window.can_fans_comment_only || 1 == window.can_fans_comment_only && 1 == e.is_fans ? m(document.getElementById("js_cmt_addbtn2")) : m(document.getElementById("js_cmt_nofans2"), "block")), function() {
			var e = location.href.indexOf("scrolltodown") > -1 ? !0 : !1,
				t = (document.getElementById("img-content"), document.getElementById("js_cmt_area"));
			if (e && t && t.offsetTop) {
				var n = t.offsetTop;
				window.scrollTo(0, n - 25);
			}
		}()) : (t = e.elected_comment, t && t.length && (p(t, n, "elected"), A.list.appendChild(n))), 0 == e.elected_comment_total_cnt ? (N = -1, B.off(window, "scroll", a), i(document.getElementById("js_cmt_loading")), i(document.getElementById("js_cmt_statement")), i(document.getElementById("js_cmt_qa"))) : N + O >= e.elected_comment_total_cnt ? (N = -1, B.off(window, "scroll", a), i(document.getElementById("js_cmt_loading")), m(document.getElementById("js_cmt_statement")), m(document.getElementById("js_cmt_qa"))) : N += e.elected_comment.length;
	}

	function r() {
		M.log("tag1");
		var e = s(A.input.value);
		if (M.log("tag2"), !C.hasClass(A.submit, "btn_disabled")) {
			if (M.log("tag3"), e.length < 1) return g("留言不能为空");
			if (M.log("tag4"), e.length > 600) return g("字数不能多于600个");
			M.log("tag5"), C.addClass(A.submit, "btn_disabled"), M.log("tag6");
			var t = document.getElementById("activity-name");
			M.log("tag7");
			var n = "/mp/appmsg_comment?action=addcomment&comment_id=" + comment_id + "&__biz=" + biz + "&idx=" + idx + "&appmsgid=" + appmsgid + "&sn=" + sn;
			x({
				url: n,
				data: {
					content: e,
					title: t && s(t.innerText),
					head_img: U,
					nickname: L
				},
				type: "POST",
				success: function(t) {
					M.log("tag8"), z.hidePannel();
					var o = {},
						i = document.createDocumentFragment();
					try {
						o = window.eval.call(window, "(" + t + ")");
					} catch (s) {}
					switch (+o.ret) {
					case 0:
						c(), p([{
							content: e,
							nick_name: L,
							create_time: (new Date).getTime() / 1e3 | 0,
							is_elected: 0,
							logo_url: U,
							like_status: 0,
							content_id: 0,
							like_num_format: 0,
							like_num: 0,
							is_from_friend: 0,
							is_from_me: 1,
							my_id: o.my_id
						}], i, "mine"), A.mylist.insertBefore(i, A.mylist.firstChild), m(A.mylist.parentNode), A.input.value = "";
						break;

					case -6:
						g("你留言的太频繁了，休息一下吧");
						break;

					case -7:
						g("你还未关注该公众号，不能参与留言");
						break;

					case -10:
						g("字数不能多于600个");
						break;

					case -15:
						g("留言已关闭");
						break;

					default:
						g("系统错误，请重试");
					}
					0 != o.ret && (D.src = "http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:resperr;url:" + encodeURIComponent(n) + ";ret=" + o.ret + "&r=" + Math.random());
				},
				error: function(e) {
					M.log("shit;" + e.status + ";" + e.statusText), D.src = "http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:ajaxerr;url:" + encodeURIComponent(n) + "&r=" + Math.random();
				},
				complete: function() {
					"" != A.input.value && C.removeClass(A.submit, "btn_disabled");
				}
			});
		}
	}

	function d() {
		if (0 == S) {
			var e = "/mp/appmsg_comment?action=getmycomment&__biz=" + biz + "&appmsgid=" + appmsgid + "&idx=" + idx + "&comment_id=" + comment_id,
				t = document.getElementById("js_mycmt_loading");
			S = 1, m(t), x({
				url: e,
				type: "get",
				success: function(t) {
					var n = {};
					try {
						n = window.eval.call(window, "(" + t + ")");
					} catch (o) {}
					var i = n.base_resp && n.base_resp.ret;
					if (0 == i) {
						var c = n.my_comment,
							s = document.createDocumentFragment();
						c && c.length && (p(c, s, "mine"), A.mylist.appendChild(s), m(A.mylist.parentNode)), S = 2;
					} else S = 0, D.src = "http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:" + encodeURIComponent(e) + ";ret=" + i + "&r=" + Math.random();
				},
				error: function() {
					S = 0, D.src = "http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:" + encodeURIComponent(e) + "&r=" + Math.random();
				},
				complete: function() {
					i(t);
				}
			});
		}
	}

	function _(e) {
		var t = (new Date).getTime(),
			n = new Date;
		n.setDate(n.getDate() + 1), n.setHours(0), n.setMinutes(0), n.setSeconds(0), n = n.getTime();
		var o = t / 1e3 - e,
			m = n / 1e3 - e,
			i = new Date(n).getFullYear(),
			c = new Date(1e3 * e);
		return 3600 > o ? Math.ceil(o / 60) + "分钟前" : 86400 > m ? Math.floor(o / 60 / 60) + "小时前" : 172800 > m ? "昨天" : 604800 > m ? Math.floor(m / 24 / 60 / 60) + "天前" : c.getFullYear() == i ? c.getMonth() + 1 + "月" + c.getDate() + "日" : c.getFullYear() + "年" + (c.getMonth() + 1) + "月" + c.getDate() + "日";
	}

	function p(e, t, n) {
		var o, m = "",
			i = document.createElement("div"),
			c = "http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
		P = {};
		for (var s, a = 0; s = e[a]; ++a) {
			s.time = _(s.create_time), s.status = "", s.logo_url = s.logo_url || c, s.logo_url = -1 != s.logo_url.indexOf("wx.qlogo.cn") ? s.logo_url.replace(/\/132$/, "/96") : s.logo_url, s.content = s.content.htmlDecode().htmlEncode(), s.nick_name = s.nick_name.htmlDecode().htmlEncode(), s.like_num_format = parseInt(s.like_num) >= 1e4 ? (s.like_num / 1e4).toFixed(1) + "万" : s.like_num, s.is_from_friend = s.is_from_friend || 0, s.is_from_me = "mine" == n ? 1 : s.is_from_me || 0, s.reply = s.reply || {
				reply_list: []
			}, s.is_mine = n ? !1 : !0, s.is_elected = "elected" == n ? 1 : s.is_elected, s.reply.reply_list.length > 0 && (s.reply.reply_list[0].time = _(s.reply.reply_list[0].create_time), s.reply.reply_list[0].content = (s.reply.reply_list[0].content || "").htmlEncode()), m += q.tmpl(I, s);
			try {
				var l = s.nick_name + s.content,
					r = !1,
					d = 23;
				P[l] && (r = !0, d = 24), F.indexOf(s.content_id) > -1 && (r = !0, d = 23), F.push(s.content_id), P[l] = !0, r && (Y.src = "http://mp.weixin.qq.com/mp/jsreport?key=" + d + "&content=" + encodeURIComponent(JSON.stringify({
					comment_id: comment_id,
					content_id: s.content_id,
					offset: N,
					length: e.length,
					url: location.href
				})));
			} catch (p) {}
		}
		for (i.innerHTML = m, u(i); o = i.children.item(0);) t.appendChild(o);
	}

	function u(e) {
		M.each(e.querySelectorAll("div.discuss_message_content"), function(e) {
			e.innerHTML = z.encode(e.innerHTML);
		});
	}

	function g(e) {
		return setTimeout(function() {
			o(e);
		});
	}

	function y() {
		var e = "1" === k.getParam("js_my_comment");
		e && f(!0);
	}

	function f(e) {
		i(A.article), m(A.mine), window.scrollTo(0, 0), d(), e || M.later(function() {
			A.input.focus();
		});
	}

	function h() {
		i(A.mine), m(A.article), window.scrollTo(0, document.documentElement.scrollHeight), A.input.blur();
	}

	function j(e) {
		var t = e.target || e.srcElement,
			n = null;
		if (C.hasClass(t, "js_comment_praise") && (n = t), C.hasClass(t, "icon_praise_gray") && "i" == t.nodeName.toLowerCase() && (n = t.parentElement), C.hasClass(t, "praise_num") && "span" == t.nodeName.toLowerCase() && (n = t.parentElement), n) {
			var o = parseInt(n.dataset.status),
				m = 0 == o ? 1 : 0,
				i = n.dataset.contentId,
				c = "/mp/appmsg_comment?action=likecomment&&like=" + m + "&__biz=" + biz + "&appmsgid=" + appmsgid + "&comment_id=" + comment_id + "&content_id=" + i;
			w(n), x({
				url: c,
				type: "GET"
			});
		}
	}

	function w(e) {
		var t = C.hasClass(e, "praised"),
			n = e.querySelector(".praise_num"),
			o = n.innerHTML,
			m = o.indexOf("万"),
			i = parseInt(o) ? parseInt(o) : 0;
		t ? (-1 == m && (n.innerHTML = i - 1 > 0 ? i - 1 : ""), C.removeClass(e, "praised"), e.dataset.status = 0) : (-1 == m && (n.innerHTML = i + 1), C.addClass(e, "praised"), e.dataset.status = 1);
	}

	function b(e) {
		var t = e.delegatedTarget,
			n = t.getAttribute("data-my-id"),
			c = "/mp/appmsg_comment?action=delete&__biz=" + biz + "&appmsgid=" + appmsgid + "&comment_id=" + comment_id + "&my_id=" + n;
		confirm("确定删除吗？") && x({
			url: c,
			success: function(e) {
				var c, s = t;
				try {
					e = JSON.parse(e);
				} catch (a) {
					e = {};
				}
				if (0 == e.ret) {
					for (; s && (s.nodeType != s.ELEMENT_NODE || "li" != s.tagName.toLowerCase());) s = s.parentNode;
					s && (s.parentNode.removeChild(s), c = document.getElementById("cid" + n), c && c.parentNode.removeChild(c), 0 == A.list.children.length && (i(A.main), i(document.getElementById("js_cmt_statement")), i(document.getElementById("js_cmt_qa")), m(document.getElementById("js_cmt_addbtn2"))), 0 == A.mylist.children.length && i(A.mylist.parentNode));
				} else o("删除失败，请重试");
			},
			error: function() {
				o("网络错误，请重试");
			}
		});
	}

	function E(e) {
		var t = document.createElement("a");
		t.setAttribute("href", e), this.el = t, this.parser = this.el, this.getParam = function(e) {
			var t = new RegExp("([?&])" + e + "=([^&#]*)([&#])?"),
				n = this.el.search.match(t);
			return n ? n[2] : null;
		};
	}
	var I = e("appmsg/cmt_tpl.html.js"),
		v = document.getElementById("js_cmt_area"),
		k = new E(window.location.href);
	if (0 != comment_id && uin && key) {
		if (-1 == navigator.userAgent.indexOf("MicroMessenger")) return void(v && (v.style.display = "none"));
		v && (v.style.display = "block");
		var B = e("biz_common/dom/event.js"),
			C = e("biz_common/dom/class.js"),
			x = e("biz_wap/utils/ajax.js"),
			q = (e("biz_common/utils/string/html.js"), e("biz_common/tmpl.js")),
			T = e("biz_wap/utils/hashrouter.js"),
			z = e("appmsg/emotion/emotion.js"),
			M = e("appmsg/emotion/dom.js"),
			D = new Image,
			N = 0,
			O = 50,
			H = !1,
			R = null,
			U = "",
			L = "我",
			S = 0,
			A = {
				article: document.getElementById("js_article"),
				more: document.getElementById("js_cmt_more"),
				mine: document.getElementById("js_cmt_mine"),
				main: document.getElementById("js_cmt_main"),
				input: document.getElementById("js_cmt_input"),
				submit: document.getElementById("js_cmt_submit"),
				addbtn: document.getElementById("js_cmt_addbtn"),
				list: document.getElementById("js_cmt_list"),
				mylist: document.getElementById("js_cmt_mylist"),
				morelist: document.getElementById("js_cmt_morelist"),
				toast: document.getElementById("js_cmt_toast"),
				tips: document.getElementById("js_cmt_tips"),
				loading: document.getElementById("js_cmt_loading")
			},
			F = [],
			P = {},
			Y = new Image,
			J = [],
			G = 0,
			Q = 0;
		!
		function() {
			a(), y(), z.init();
		}(), T.get("comment", function() {
			f();
		}), T.get("default", function(e) {
			"comment" == e && h();
		}), B.on(A.input, "input", function() {
			var e = s(A.input.value);
			e.length < 1 ? C.addClass(A.submit, "btn_disabled") : C.removeClass(A.submit, "btn_disabled");
		}), B.on(A.more, "touchend", j), B.on(A.list, "touchend", j), B.on(A.mylist, "touchend", j), B.on(A.list, "tap", ".js_del", b), B.on(A.mylist, "tap", ".js_del", b), B.on(A.submit, "tap", r);
	}
});