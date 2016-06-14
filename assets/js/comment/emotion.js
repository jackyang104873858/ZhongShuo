define("appmsg/emotion/emotion.js", ["appmsg/emotion/dom.js", "appmsg/emotion/slide.js", "appmsg/emotion/common.js", "appmsg/emotion/nav.js", "appmsg/emotion/textarea.js", "appmsg/emotion/map.js"], function(t, n) {
	"use strict";

	function i() {
		var t = {};
		j.each(b, function(n, i) {
			t[n] = i + 1;
		}), b = t;
	}

	function e() {
		w.WIDTH = h = j("#js_article").width() || j("#js_cmt_mine").width(), w.pageCount = _ = o(), a(), s(), r();
	}

	function o() {
		d = h - 2 * N, v = parseInt(d / k), f = 3 * v - 1;
		var t = parseInt(M / f);
		return M % f !== 0 && t++, t;
	}

	function a() {
		var t = j("#js_slide_wrapper"),
			n = w.wrapperWidth = _ * h;
		t.css({
			width: n + "px"
		});
	}

	function s() {
		for (var t = j("#js_slide_wrapper").el[0], n = (h - v * k) / 2, i = 0, e = _; e > i; i++) {
			var o = document.createElement("ul");
			o.setAttribute("class", "emotion_list"), t.appendChild(o), j(o).css({
				width: h + "px",
				"float": "left",
				"padding-left": n + "px",
				"padding-right": "0"
			}), c(o, i);
		}
	}

	function r() {
		for (var t = j("#js_navbar"), n = 0, i = _; i > n; n++) {
			var e = j(j.el("li"));
			e.attr("class", "emotion_nav js_emotion_nav"), T.push(e), t.append(e);
		}
		w.navs = T;
	}

	function c(t) {
		for (var n = 0, i = f; i > n; n++) {
			var e = document.createElement("li");
			if (S++, S > M) break;
			e = p(S), j(t).append(e);
		}
		var o = m();
		j(t).append(o);
	}

	function p(t) {
		var n = j(j.el("li")),
			i = j(j.el("i")),
			e = 27 === t ? -1 : 1;
		i.attr("class", "icon_emotion icon" + t), i.css({
			"background-position": (1 - t) * C - e + "px -1px"
		}), n.attr("class", "emotion_item js_emotion_item"), n.attr("data-index", t);
		var o = k + "px";
		return n.css({
			width: o,
			height: o
		}), n.append(i), n;
	}

	function m() {
		var t = j(j.el("li")),
			n = j(j.el("i"));
		t.attr("class", "emotion_item del js_emotion_item"), t.attr("data-index", -1), n.attr("class", "icon_emotion del");
		var i = k + "px";
		return t.css({
			width: i,
			height: i
		}), t.append(n), t;
	}

	function l() {
		function t() {
			o.show(), O.show(), e.blur(), j.later(function() {
				e.blur();
			});
		}

		function n() {
			o.hide(), O.hide(), e.focus(), j.later(function() {
				e.focus();
			});
		}
		O = j("#js_emotion_panel");
		var i = j("#js_cmt_input"),
			e = i.el[0],
			o = j("#js_emotion_panel_arrow_wrp");
		O.hide(), j("#js_emotion_switch").on("tap", function(i) {
			i.preventDefault(), i.stopPropagation(), E = !E, E ? t() : n();
		}), i.on("tap", function() {
			O.hide(), E = !1;
		});
	}

	function u() {
		function t(t) {
			if (!w.isMoved) {
				var n = j(t.currentTarget),
					i = +n.attr("data-index");
				I.inputEmotion(i);
			}
		}
		j("li.js_emotion_item").on("click", t), j("li.js_emotion_item").on("touchend", t);
	}
	var d, _, f, v, h, j = t("appmsg/emotion/dom.js"),
		g = t("appmsg/emotion/slide.js"),
		w = t("appmsg/emotion/common.js"),
		x = t("appmsg/emotion/nav.js"),
		I = t("appmsg/emotion/textarea.js"),
		n = (j.each, {}),
		E = !1,
		O = null,
		b = t("appmsg/emotion/map.js"),
		T = [],
		N = 15,
		M = w.EMOTIONS_COUNT,
		k = w.EMOTION_LI_SIZE,
		C = w.EMOTION_SIZE;
	n.init = function() {
		l(), e(), g.init(), x.activeNav(0), u(), I.init(), i();
	};
	var S = 0;
	return n.encode = function(t) {
		var n = /\/([\u4e00-\u9fa5\w]{1,3})/g,
			i = t.match(n);
		return i ? (j.each(i, function(n) {
			var i = n.replace("/", ""),
				e = [i.slice(0, 1), i.slice(0, 2), i.slice(0, 3)];
			j.each(e, function(n) {
				if (void 0 !== b[n]) {
					var i = b[n],
						e = '<i class="icon_emotion_single icon' + i + '"></i>';
					t = t.replace("/" + n, e);
				}
			});
		}), t) : t;
	}, n.hidePannel = function() {
		O.hide();
	}, n;
});