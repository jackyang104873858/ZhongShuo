define("appmsg/index.js", [], function(e) {
	"use strict";

	function o() {
		function o(e, o) {
			var t = {
				lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
				lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
				alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
				animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
			},
				n = new Image;
			n.onload = function() {
				var t = n.width > 0 && n.height > 0;
				o(e, t);
			}, n.onerror = function() {
				o(e, !1);
			}, n.src = "data:image/webp;base64," + t[e];
		}
		var t = document.getElementsByTagName("body");
		if (!t || !t[0]) return !1;
		t = t[0], function() {
			var e = (new Date).getHours(),
				o = function(e, o) {
					o = o || "", window.isSg ? (o = ["uin:sougou", "resp:" + o].join("|"), (new Image).src = "/mp/jsreport?key=" + e + "&content=" + o + "&r=" + Math.random() + "&from=sougou") : (o = ["uin:" + top.window.user_uin, "resp:" + o].join("|"), (new Image).src = "/mp/jsreport?key=" + e + "&content=" + o + "&r=" + Math.random());
				},
				t = function(e, o, t) {
					var n = e + "_" + o;
					t = t || 1, window.logs.idkeys[n] || (window.logs.idkeys[n] = {
						val: 0
					}), window.logs.idkeys[n].val += t;
				},
				n = e >= 11 && 17 >= e && Math.random() < 1,
				i = function(e, t) {
					n && o(e, t);
				};
			window.__report = o, window.__commonVideoReport = i, window.__addIdKeyReport = t;
		}();
		var i = /^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
		try {
			if (top != window && (!top || top && top.location.href && i.test(top.location.href)) && !window.isSg) throw new Error("in iframe");
		} catch (r) {
			var s = "",
				a = new Image;
			a.src = ("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:" + biz + ",mid:" + mid + ",uin:" + uin + "[key4]" + s + "&r=" + Math.random()).substr(0, 1024);
		}
		window.isInWeixinApp() && /#rd$/.test(location.href) && !window.isWeixinCached && location.replace(location.href.replace(/#rd$/, "#wechat_redirect"));
		var c = e("biz_common/utils/url/parse.js");
		e("appmsg/cdn_img_lib.js"), window.page_endtime = +new Date; {
			var p = e("biz_wap/utils/mmversion.js"),
				d = !p.isWp && -1 == navigator.userAgent.indexOf("MicroMessenger"); - 1 != navigator.userAgent.indexOf("WindowsWechat");
		}
		if (e("appmsg/share.js"), window.isSg || "mp.weixin.qq.com" == location.host) {
			var m = e("biz_common/log/jserr.js");
			m({
				key: 0,
				reporturl: "http://mp.weixin.qq.com/mp/jsreport?1=1",
				replaceStr: /http(s)?:(.*?)js\//g
			});
		}
		var l = -1 != navigator.userAgent.indexOf("TBS/"),
			w = function(e, t) {
				
			},
			g = function(e) {
				w("lossy", e), w("lossless", e), w("alpha", e), w("animation", e);
			};
		window.webp = !1, g(function(o) {
			window.webp = o, o && window.localStorage && window.localStorage.setItem && window.localStorage.setItem("webp", "1"), window.logs.img = {
				download: {},
				read: {},
				load: {}
			};
			var t = document.getElementById("js_cover");
			if (t) {
				var n = t.getAttribute("data-src");
				if (n) {
					if (n.isCDN()) {
						var i = new Date;
						for (i.setFullYear(2014, 9, 1); - 1 != n.indexOf("?tp=webp");) n = n.replace("?tp=webp", "");
						for (; - 1 != n.indexOf("&tp=webp");) n = n.replace("&tp=webp", "");
						1e3 * ct >= i.getTime() && "" != img_format && "gif" != img_format && (n = n.replace(/\/0$/, "/640"), n = n.replace(/\/0\?/, "/640?"), t.dataset && (t.dataset.s = "300,640")), o && (n = c.addParam(n, "tp", "webp", !0)), n = c.addParam(n, "wxfrom", "5", !0), is_https_res && (n = n.http2https());
					}
					t.setAttribute("src", n), window.logs.img.read[n] = !0, window.logs.img.load[n] = !0, t.removeAttribute("data-src");
				}
			}
			var r = e("biz_wap/ui/lazyload_img.js"),
				s = 1;
			window.logs.outer_pic = 0, new r({
				attrKey: "data-src",
				lazyloadHeightWhenWifi: function() {
					var e, o = 1,
						t = 1;
					e = window.svr_time ? new Date(1e3 * window.svr_time) : new Date;
					var n = e.getHours();
					return n >= 20 && 23 > n && (o = .5, t = 0), {
						bottom: o,
						top: t
					};
				},
				inImgRead: function(e) {
					e && (window.logs.img.read[e] = !0);
				},
				changeSrc: function(e, o) {
					if (!o) return "";
					for (var t = o; - 1 != t.indexOf("?tp=webp");) t = t.replace("?tp=webp", "");
					for (; - 1 != t.indexOf("&tp=webp");) t = t.replace("&tp=webp", "");
					if (o.isCDN())(e.dataset && e.dataset.s || -1 != o.indexOf("wx_fmt=") && -1 == o.indexOf("wx_fmt=gif")) && (t = t.replace(/\/0$/, "/640"), t = t.replace(/\/0\?/, "/640?")), window.webp && (t = c.addParam(t, "tp", "webp", !0)), t = c.addParam(t, "wxfrom", "5", !0), is_https_res && (t = t.http2https());
					else try {
						var n = new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
						n.test(o) || (window.__addIdKeyReport("28307", 9), window.logs.outer_pic++);
					} catch (i) {}
					var r = /^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
					return t = t.replace(r, "http://m.qpic.cn"), t = c.addParam(t, "wx_lazy", "1", !0), window.logs.img.load[t] = !0, t;
				},
				onerror: function(e, o) {
					var t = o ? o.__retryload || 0 : 0;
					if (e && !(t > s) && (window.__addIdKeyReport("28307", 4), window.__addIdKeyReport("28307", 6 + 2 * t), s > t && (t++, o.__retryload = t, o.src = c.addParam(e, "retryload", t, !0)), e.isCDN())) {
						var n = 10;
						/tp\=webp/.test(e) && (n = 11);
						var i = new Image;
						i.src = "http://mp.weixin.qq.com/mp/jsreport?key=" + n + "&content=" + (encodeURIComponent(e) + "[" + uin + "]") + "&r=" + Math.random();
					}
				},
				onload: function(e, o) {
					var t = o ? o.__retryload || 0 : 0;
					t > s || (window.__addIdKeyReport("28307", 3), window.__addIdKeyReport("28307", 5 + 2 * t));
				},
				detect: function(e) {
					if (e && e.time && e.loadList) {
						var o = e.time,
							t = e.loadList;
						window.logs.img.download[o] = t;
					}
				},
				container: document.getElementById("page-content")
			});
		}), e("appmsg/async.js"), window.isSg || (e("appmsg/pay_for_reading.js"), e("appmsg/cache.js"));
		var u = e("appmsg/copyright_report.js"),
			f = e("biz_common/dom/event.js"),
			A = e("biz_wap/jsapi/core.js");
		!
		function() {
			var e = document.getElementById("post-user"),
				o = document.getElementById("copyright_info"),
				t = [];
			if (e) {
				var n = "57";
				"26" == window.source && (n = "95"), "28" == window.source && (n = "96"), "29" == window.source && (n = "39"), t.push({
					dom: e,
					username: user_name_new || user_name,
					scene: n
				});
			}
			o && source_username && t.push({
				dom: o,
				username: source_username,
				profile_ext_signature: profile_ext_signature,
				scene: "110"
			});
			for (var i = 0, r = t.length; r > i; i++)!
			function(e) {
				f.on(e.dom, "click", function() {
					if ("copyright_info" == e.dom.id && source_username) {
						u.card_click_report({
							scene: "0"
						});
						var o = "https://mp.weixin.qq.com/mp/profile_ext?action=home&username=" + e.username + "&sn=" + e.profile_ext_signature + "#wechat_redirect";
						A.invoke("openUrlWithExtraWebview", {
							url: o,
							openType: 1
						}, function(e) {
							-1 == e.err_msg.indexOf("ok") && (location.href = o);
						});
					} else A.invoke("profile", {
						username: e.username,
						scene: e.scene
					}, function() {
						window.__addIdKeyReport("28307", "1");
					});
					return !1;
				}), p.isWp && e.dom.setAttribute("href", "weixin://profile/" + e.username);
			}(t[i]);
		}(), function() {
			location.href.match(/fontScale=\d+/) && p.isIOS && A.on("menu:setfont", function(e) {
				e.fontScale <= 0 && (e.fontScale = 100), document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust = e.fontScale + "%", document.getElementsByTagName("html").item(0).style.lineHeight = 160 / e.fontScale;
			});
		}();
		var _ = e("appmsg/outer_link.js");
		if (new _({
			container: document.getElementById("js_content"),
			changeHref: function(e, o) {
				if (e && 0 == e.indexOf("http://mp.weixin.qq.com/s")) e = e.replace(/#rd\s*$/, ""), e = e.replace(/#wechat_redirect\s*$/, ""), e = e.replace(/[\?&]scene=21/, ""), e += "&scene=21#wechat_redirect";
				else if (0 != e.indexOf("http://mp.weixinbridge.com/mp/wapredirect")) return "http://mp.weixinbridge.com/mp/wapredirect?url=" + encodeURIComponent(e) + "&action=appmsg_redirect&uin=" + uin + "&biz=" + biz + "&mid=" + mid + "&idx=" + idx + "&type=" + o + "&scene=0";
				return e;
			}
		}), !d) {
			var h = e("appmsg/review_image.js"),
				y = document.getElementById("js_cover"),
				v = [];
			y && v.push(y), new h({
				container: document.getElementById("js_content"),
				is_https_res: is_https_res,
				imgs: v
			});
		}!
		function() {
			try {
				var e = document.getElementById("js_content");
				if (!e || !e.querySelectorAll) return;
				for (var o = e.querySelectorAll("*"), t = "list-paddingleft-2,selectTdClass,noBorderTable,ue-table-interlace-color-single,ue-table-interlace-color-double".split(","), n = function(e) {
						if (e && e.className) {
							for (var o = e.className.split(/\s+/), n = [], i = 0, r = o.length; r > i; ++i) {
								var s = o[i];
								s && -1 != t.indexOf(s) && n.push(s);
							}
							e.className = n.join(" ");
						}
					}, i = 0, r = o.length; r > i; ++i) {
					var s = o[i];
					s.tagName && "iframe" != s.tagName.toLowerCase() && n(s);
				}
			} catch (a) {}
		}(), window.fromWeixinCached || e("appmsg/iframe.js"), e("appmsg/qqmusic.js"), e("appmsg/voice.js"), e("appmsg/wxtopic.js"), e("appmsg/cdn_speed_report.js"), e("appmsg/page_pos.js"), setTimeout(function() {
			f.tap(document.getElementById("copyright_logo"), function() {
				location.href = "http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
			}), e("appmsg/report_and_source.js"), function() {
				if (d) {
					var o = e("biz_common/dom/class.js");
					
					var n = document.createElement("link");
					n.rel = "stylesheet", n.type = "text/css", n.async = !0;
					var i = document.getElementsByTagName("head")[0];
					i.appendChild(n);
					var r = document.getElementById("js_pc_qr_code_img");
					if (r) {
						var s = 10000004,
							a = document.referrer;
						if (0 == a.indexOf("http://weixin.sogou.com") ? s = 10000001 : 0 == a.indexOf("https://wx.qq.com") && (s = 10000003), window.isSg) r.setAttribute("src", sg_qr_code);
						else {
							r.setAttribute("src", "/mp/qrcode?scene=" + s + "&size=102&__biz=" + biz);
							var c = new Image;
							c.src = "/mp/report?action=pcclick&__biz=" + biz + "&uin=" + uin + "&scene=" + s + "&r=" + Math.random();
						}
						document.getElementById("js_pc_qr_code").style.display = "block";
					}
					var p = document.getElementById("js_profile_qrcode"),
						m = document.getElementById("js_profile_arrow_wrp"),
						l = document.getElementById("post-user");
					if (p && l && m) {
						var w = function() {
								var e = 10000005,
									o = document.referrer;
								0 == o.indexOf("http://weixin.sogou.com") ? e = 10000006 : 0 == o.indexOf("https://wx.qq.com") && (e = 10000007);
								var t = document.getElementById("js_profile_qrcode_img");
								if (t) if (window.isSg) t.setAttribute("src", sg_qr_code);
								else {
									t.setAttribute("src", "/mp/qrcode?scene=" + e + "&size=102&__biz=" + biz);
									var n = new Image;
									n.src = "/mp/report?action=pcclick&__biz=" + biz + "&uin=" + uin + "&scene=" + e + "&r=" + Math.random();
								}
								return p.style.display = "block", m.style.left = l.offsetLeft - p.offsetLeft + l.offsetWidth / 2 - 8 + "px", !1;
							};
						f.on(l, "click", w), f.on(p, "click", w), f.on(document, "click", function(e) {
							var o = e.target || e.srcElement;
							o != l && o != p && (p.style.display = "none");
						});
					}
				} else {
					var g = document.getElementById("js_report_article3"); !! g && (g.style.display = "");
				}
			}(), function() {
				var e = location.href.indexOf("scrolltodown") > -1 ? !0 : !1,
					o = document.getElementById("img-content");
				if (e && o && o.getBoundingClientRect) {
					var t = o.getBoundingClientRect().height;
					window.scrollTo(0, t);
				}
			}(), e("appmsg/report.js");
			for (var o = document.getElementsByTagName("map"), n = 0, i = o.length; i > n; ++n) o[n].parentNode.removeChild(o[n]);
		}, 1e3), function() {
			if (n.os.ios && "onorientationchange" in window) {
				var e = [],
					o = "onorientationchange" in window ? "orientationchange" : "resize",
					t = function() {
						return 90 === Math.abs(window.orientation) ? 1 : 2;
					};
				e.push({
					ori: t(),
					scroll: window.pageYOffset || document.documentElement.scrollTop,
					istouchmove: !1
				});
				var i = (new Date).getHours();
				f.on(window, o, function() {
					var o = e.length - 2,
						n = t();
					if (o >= 0) {
						var r = e[o],
							s = r.ori;
						s !== n || e[e.length - 1].istouchmove || (i >= 11 && 17 >= i && window.__report(63), window.scrollTo(0, r.scroll));
					}
					e.push({
						ori: n,
						scroll: window.pageYOffset || document.documentElement.scrollTop,
						istouchmove: !1
					});
				}), f.on(window, "scroll", function() {
					var o = e.length - 1;
					e[o].ori == t() && (e[o].scroll = window.pageYOffset || document.documentElement.scrollTop, e[o].istouchmove = !0);
				});
			}
		}(), function() {
			window.__observer && window.__observer_data && e("biz_wap/safe/mutation_observer_report.js");
		}();
	}
	var t = e("biz_wap/jsapi/a8key.js"),
		n = e("biz_wap/utils/device.js");
	t.config({
		onOutOfWeixinApp: function() {
			console.log("onOutOfWeixinApp");
		},
		onNoCacheFuncWeixin: function() {
			console.log("isWeixinCached == false");
		},
		onAlreadyHasA8Key: function() {
			console.log("URL已有A8Key");
		},
		onJSAPIGetA8KeyStart: function() {
			console.log("onJSAPIGetA8KeyStart");
		},
		onJSAPIGetA8KeyEnd: function() {
			console.log("onJSAPIGetA8KeyEnd");
		},
		onJSAPIGetA8KeyTimeout: function() {
			console.log("onJSAPIGetA8KeyTimeout");
		}
	}), t.onReady(function() {
		console.log("进入index.js init"), o();
	}), "undefined" != typeof isSg && e("sougou/index.js");
}) //# sourceURL=appmsg/index.js