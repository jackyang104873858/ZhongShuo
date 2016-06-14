define("appmsg/emotion/dom.js", ["biz_common/dom/event.js"], function(t) {
	"use strict";

	function n(t) {
		if ("string" == typeof t) var n = document.querySelectorAll(t);
		else n = [t];
		return {
			el: n,
			on: function(t, n) {
				return this.each(function(e) {
					i.on(e, t, n);
				}), this;
			},
			hide: function() {
				return this.each(function(t) {
					t.style.display = "none";
				}), this;
			},
			show: function() {
				return this.each(function(t) {
					t.style.display = "block";
				}), this;
			},
			each: function(t) {
				return e(this.el, t), this;
			},
			width: function() {
				return this.el[0].clientWidth;
			},
			css: function(t) {
				return this.each(function(n) {
					for (var e in t) n.style[e] = t[e];
				}), this;
			},
			attr: function(t, n) {
				var e = this.el[0];
				return n ? (e.setAttribute(t, n), this) : e.getAttribute(t);
			},
			append: function(t) {
				return t.el && (t = t.el[0]), this.el[0].appendChild(t), this;
			},
			html: function(t) {
				this.each(function(n) {
					n.innerHTML = t;
				});
			}
		};
	}

	function e(t, n) {
		for (var e = 0, i = t.length; i > e; e++) n(t[e], e);
	}
	var i = t("biz_common/dom/event.js");
	return n.el = function(t) {
		return document.createElement(t);
	}, n.later = function(t) {
		setTimeout(t, 3);
	}, n.log = function() {}, n.each = e, n;
});