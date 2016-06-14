define("appmsg/outer_link.js", ["biz_common/dom/event.js"], function(e) {
	"use strict";

	function n(e) {
		var n = e.container;
		if (!n) return !1;
		for (var r = n.getElementsByTagName("a") || [], i = 0, o = r.length; o > i; ++i)!
		function(n) {
			var i = r[n],
				o = i.getAttribute("href");
			if (!o) return !1;
			var a = 0,
				c = i.innerHTML;
			/^[^<>]+$/.test(c) ? a = 1 : /^<img[^>]*>$/.test(c) && (a = 2), !! e.changeHref && (o = e.changeHref(o, a)), t.on(i, "click", function() {
				return location.href = o, !1;
			}, !0);
		}(i);
	}
	var t = e("biz_common/dom/event.js");
	return n;
});