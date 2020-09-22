window.OhMDWidget = function(i) {
    var o = {};

    function n(t) {
        if (o[t]) return o[t].exports;
        var e = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }
    return n.m = i, n.c = o, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 837)
}({
    837: function(t, e, i) {
        t.exports = i(838)
    },
    838: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = null,
            a = "".concat("https://cdn.jsdelivr.net/gh/abhav/OhMd", "/widget.js");
        e.default = {
            initialize: function(t) {
                if (o) {
                    if (o.chatKey) return void console.warn("[OhMDWidget]: Already initialized")
                } else o = {};
                var e;
                o.chatKey = t, (e = document.createElement("style")).setAttribute("id", "ohmd-widget-style-main"), e.setAttribute("type", "text/css"), e.innerHTML = "@keyframes ohmd-slide-in {  from {    opacity: 0;    transform: translateY(10px);  }  to {    opacity: 1;    transform: translateY(0);  }}#ohmd-widget-container #ohmd-widget-app {  display: block;}#ohmd-widget-container #ohmd-widget-app iframe {  border: 0 transparent;}#ohmd-widget-container .ohmd-widget-launcher {  animation-duration: 2s;  animation-name: ohmd-slide-in;  animation-fill-mode: backwards;}#ohmd-widget-container #ohmd-widget-app .ohmd-widget-launcher {  z-index: 2147483000 !important;  position: fixed !important;  bottom: 20px;  right: 20px;  width: 60px !important;  height: 60px !important;  border-radius: 50% !important;  background: #0094ff!important;  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);}#ohmd-widget-container #ohmd-widget-app .ohmd-widget-badge {  z-index: 2147483000 !important;  position: fixed !important;  bottom: 60px;  right: 15px;  width: 25px !important;  height: 25px !important;  border-radius: 50% !important;}#ohmd-widget-container .ohmd-widget-conversation-frame {  right: 20px;  position: fixed !important;  bottom: 20px;  z-index: 2147483000 !important;}#ohmd-widget-container .ohmd-widget-conversation-frame {  height: calc(100% - 20px - 84px - 20px);  bottom: calc(20px + 80px);  width: 376px;  min-height: 250px;  max-height: 704px;  border-radius: 10px;  overflow: hidden;  opacity: 1 !important;  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);    animation-duration: 1s;  animation-name: ohmd-slide-in;  animation-fill-mode: forwards;}#ohmd-widget-container .rcw-opened .ohmd-widget-conversation-frame > iframe {  width: 100% !important;  height: 100% !important;  position: absolute;}@media screen and (max-width: 800px) {  #ohmd-widget-container .ohmd-widget-conversation-frame {    right: 0;    width: 100%;    height: 100%;    top: 0;    min-height: 100%;    max-height: 100%;    border-radius: 0 !important;  }    #ohmd-widget-container #ohmd-widget-app .ohmd-widget-launcher {    -webkit-box-shadow: none;    box-shadow: none;  }    #ohmd-widget-container .rcw-opened .ohmd-widget-launcher {    display: none;  }}", document.head.appendChild(e),
                    function(t) {
                        var e = window.URL || window.webkitURL;
                        if (window.Blob && e) {
                            var i = "<!DOCTYPE HTML><html><head><meta charset='utf8'/></head><body><script type='text/javascript' src='".concat(a, "'><\/script><script>window.addEventListener('load', function() {  OhMDWidget.iframe.load('").concat(t, "');});<\/script></body></html>"),
                                o = new Blob([i], {
                                    type: "text/html"
                                }),
                                n = e.createObjectURL(o),
                                r = document.createElement("iframe");
                            r.src = n, r.setAttribute("id", "ohmd-widget-frame"), r.setAttribute("name", "ohmd-widget-frame"), r.setAttribute("style", "display: none;"), document.body.appendChild(r)
                        }
                    }(t)
            }
        }
    }
}).default;
