define("appmsg/emotion/slide.js", ["appmsg/emotion/common.js", "appmsg/emotion/dom.js", "appmsg/emotion/nav.js"], function(n, t) {
	"use strict";

	function o() {
		function n(n) {
			n.preventDefault(), n.stopPropagation(), l || (g = !0, i = a(n), m.isMoved = !1, u = +new Date);
		}

		function t(n) {
			n.preventDefault(), n.stopPropagation(), !l && g && (r = a(n), h = r - i, e(), Math.abs(h) > 6 && (m.isMoved = !0));
		}

		function o() {
			l || (g = !1, s());
		}

		function a(n) {
			return n.touches && n.touches.length > 0 ? n.touches[0].clientX : n.clientX;
		}
		var i, r, u;
		c.on("touchstart", n), c.on("mousedown", n), c.on("touchmove", t), c.on("mousemove", t), c.on("touchend", o), c.on("mouseup", o);
	}

	function e() {
		var n = m.WIDTH,
			t = -d * n + h,
			o = n / 4;
		t > o ? t = o : u - o > t && (t = u - o);
		var e = "translate3d(" + t + "px, 0, 0)";
		c.css({
			webkitTransform: e,
			transform: e
		});
	}

	function s() {
		var n = m.WIDTH,
			t = 55,
			o = parseInt(h / n),
			e = h % n;
		d -= o, Math.abs(e) > t && (d -= Math.abs(e) / e * 1), d > m.pageCount - 1 ? d = m.pageCount - 1 : 0 > d && (d = 0), h = 0, a(d);
	}

	function a(n) {
		l = !0, f = -n * m.WIDTH, i(), e(), setTimeout(function() {
			l = !1, r();
		}, T), v.activeNav(n);
	}

	function i() {
		var n = "all 0.3s ease";
		c.css({
			transition: n,
			webkitTransition: n
		});
	}

	function r() {
		var n = c.el[0].style;
		n.transition = "", n.webkitTransition = "";
	}
	var u, m = n("appmsg/emotion/common.js"),
		p = n("appmsg/emotion/dom.js"),
		t = {},
		c = p("#js_slide_wrapper"),
		f = 0,
		v = n("appmsg/emotion/nav.js"),
		l = !1,
		d = 0,
		g = !1,
		h = 0;
	t.init = function() {
		u = -m.wrapperWidth + m.WIDTH, o();
		var n = "translate3d(0, 0, 0)";
		c.css({
			webkitTransform: n,
			transform: n
		});
	};
	var T = 300;
	return t;
});