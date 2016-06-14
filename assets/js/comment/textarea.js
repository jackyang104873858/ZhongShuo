define("appmsg/emotion/textarea.js", ["appmsg/emotion/map.js", "appmsg/emotion/dom.js", "appmsg/emotion/caret.js", "biz_common/dom/class.js"], function(e, n) {
	"use strict";

	function t() {
		var e = "translate3d(0, 0, 0)";
		l.css({
			webkitTransform: e,
			transform: e
		});
	}

	function a() {
		var e = 8;
		l.on("keydown", function(n) {
			n.keyCode === e && s(!0) && n.preventDefault();
		});
	}

	function s(e) {
		function n() {
			var e = a - 1;
			0 > e && (e = 0);
			var n = s.slice(0, e),
				o = s.slice(a),
				i = +new Date;
			t.value = n + o, p.set(t, e), r(+new Date - i);
		}
		var t = l.el[0],
			a = p.get(t),
			s = t.value,
			i = 4,
			c = a - i;
		0 > c && (c = 0, i = a - c);
		var m = s.slice(c, a),
			v = m.match(/\/([\u4e00-\u9fa5\w]+)$/g);
		if (v) {
			var d = v[0],
				g = i - d.length,
				b = d.replace("/", "");
			if (o(b)) {
				var j = m.replace(d, ""),
					_ = s.slice(0, c) + j + s.slice(a),
					w = +new Date;
				t.value = _, p.set(t, c + g), r(+new Date - w);
			} else {
				if (e) return !1;
				n();
			}
		} else {
			if (e) return !1;
			n();
		}
		return e ? (t.focus(), f.later(function() {
			t.focus();
		})) : (t.blur(), f.later(function() {
			t.blur();
		})), u(t.value), !0;
	}

	function o(e) {
		for (var n = 0, t = m.length; t > n; n++) if (m[n] == e) return !0;
		return !1;
	}

	function i(e) {
		var n = l.el[0],
			t = p.get(n),
			a = n.value,
			a = a.slice(0, t) + "/" + e + a.slice(t);
		n.value = a, p.set(n, t + e.length + 1), n.blur(), f.later(function() {
			n.blur();
		}), u(a);
	}

	function r() {}

	function u(e) {
		//var n = c.el[0];
		//e.length < 1 ? v.addClass(n, "btn_disabled") : v.removeClass(n, "btn_disabled");
	}
	var l, c, n = {},
		m = e("appmsg/emotion/map.js"),
		f = e("appmsg/emotion/dom.js"),
		p = e("appmsg/emotion/caret.js"),
		v = e("biz_common/dom/class.js");
	return n.init = function() {
		l = f("#js_cmt_input"), c = f("#js_cmt_submit"), t(), a();
	}, n.inputEmotion = function(e, n) {
		-1 === e ? s(n) : i(m[e - 1]);
	}, n;
});