define("biz_wap/utils/device.js", [], function() {
	"use strict";

	function s(s) {
		{
			var e = s.match(/MQQBrowser\/(\d+\.\d+)/i),
				r = s.match(/QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i) || s.match(/V1_AND_SQ_([\d\.]+)/),
				i = s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || s.match(/MicroMessenger\/((\d+)\.(\d+))/),
				t = s.match(/Mac\sOS\sX\s(\d+\.\d+)/),
				n = s.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/),
				a = s.match(/MiuiBrowser\/(\d+\.\d+)/i),
				d = s.match(/MI-ONE/),
				h = s.match(/MI PAD/),
				w = s.match(/UCBrowser\/(\d+\.\d+(\.\d+\.\d+)?)/) || s.match(/\sUC\s/),
				c = s.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || s.match(/WPDesktop/),
				b = s.match(/(ipod).*\s([\d_]+)/i),
				u = s.match(/(ipad).*\s([\d_]+)/i),
				p = s.match(/(iphone)\sos\s([\d_]+)/i),
				v = s.match(/Chrome\/(\d+\.\d+)/),
				m = s.match(/Mozilla.*Linux.*Android.*AppleWebKit.*Mobile Safari/),
				f = s.match(/(android)\s([\d\.]+)/i);
			s.indexOf("HTC") > -1;
		}
		if (o.browser = o.browser || {}, o.os = o.os || {}, window.ActiveXObject) {
			var l = 6;
			(window.XMLHttpRequest || s.indexOf("MSIE 7.0") > -1) && (l = 7), (window.XDomainRequest || s.indexOf("Trident/4.0") > -1) && (l = 8), s.indexOf("Trident/5.0") > -1 && (l = 9), s.indexOf("Trident/6.0") > -1 && (l = 10), o.browser.ie = !0, o.browser.version = l;
		} else s.indexOf("Trident/7.0") > -1 && (o.browser.ie = !0, o.browser.version = 11);
		f && (this.os.android = !0, this.os.version = f[2]), b && (this.os.ios = this.os.ipod = !0, this.os.version = b[2].replace(/_/g, ".")), u && (this.os.ios = this.os.ipad = !0, this.os.version = u[2].replace(/_/g, ".")), p && (this.os.iphone = this.os.ios = !0, this.os.version = p[2].replace(/_/g, ".")), n && (this.os.windows = !0, this.os.version = n[2]), t && (this.os.Mac = !0, this.os.version = t[1]), s.indexOf("lepad_hls") > 0 && (this.os.LePad = !0), h && (this.os.MIPAD = !0), e && (this.browser.MQQ = !0, this.browser.version = e[1]), r && (this.browser.MQQClient = !0, this.browser.version = r[1]), i && (this.browser.WeChat = !0, this.browser.version = i[1]), a && (this.browser.MIUI = !0, this.browser.version = a[1]), w && (this.browser.UC = !0, this.browser.version = w[1] || 0 / 0), c && (this.browser.IEMobile = !0, this.browser.version = c[2]), m && (this.browser.AndriodBrowser = !0), d && (this.browser.M1 = !0), v && (this.browser.Chrome = !0, this.browser.version = v[1]), this.os.windows && (this.os.win64 = "undefined" != typeof navigator.platform && "win64" == navigator.platform.toLowerCase() ? !0 : !1);
		var M = {
			iPad7: "iPad; CPU OS 7",
			LePad: "lepad_hls",
			XiaoMi: "MI-ONE",
			SonyDTV: "SonyDTV",
			SamSung: "SAMSUNG",
			HTC: "HTC",
			VIVO: "vivo"
		};
		for (var g in M) this.os[g] = -1 !== s.indexOf(M[g]);
		o.os.phone = o.os.phone || /windows phone/i.test(s), this.os.getNumVersion = function() {
			return parseFloat(o.os.version, "10");
		}, this.os.hasTouch = "ontouchstart" in window, this.os.hasTouch && this.os.ios && this.os.getNumVersion() < 6 && (this.os.hasTouch = !1), o.browser.WeChat && o.browser.version < 5 && (this.os.hasTouch = !1), o.browser.getNumVersion = function() {
			return parseFloat(o.browser.version, "10");
		}, o.browser.isFFCanOcx = function() {
			return o.browser.firefox && o.browser.getNumVersion() >= 3 ? !0 : !1;
		}, o.browser.isCanOcx = function() {
			return !(!o.os.windows || !o.browser.ie && !o.browser.isFFCanOcx() && !o.browser.webkit);
		}, o.browser.isNotIESupport = function() {
			return !!o.os.windows && ( !! o.browser.webkit || o.browser.isFFCanOcx());
		}, o.userAgent = {}, o.userAgent.browserVersion = o.browser.version, o.userAgent.osVersion = o.os.version, delete o.userAgent.version;
	}
	var o = {};
	s.call(o, window.navigator.userAgent);
	var e = function() {
			var s = window.navigator.userAgent,
				e = null;
			if (o.os.android) {
				if (o.browser.MQQ && o.browser.getNumVersion() >= 4.2) return !0;
				if (-1 != s.indexOf("MI2")) return !0;
				if (o.os.version >= "4" && (e = s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)) && e[1] >= 4.2) return !0;
				if (o.os.version >= "4.1") return !0;
			}
			return !1;
		}(),
		r = function() {
			var s = document.createElement("video");
			if ("function" == typeof s.canPlayType) {
				if ("probably" == s.canPlayType('video/mp4; codecs="mp4v.20.8"')) return !0;
				if ("probably" == s.canPlayType('video/mp4; codecs="avc1.42E01E"') || "probably" == s.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) return !0;
			}
			return !1;
		}();
	return o.canSupportVideo = r || e, o.canSupportVideoMp4 = r, o.canSupportH5Video = e, o;
});