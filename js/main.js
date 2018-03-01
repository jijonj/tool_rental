/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */

//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

//     Underscore may be freely distributed under the MIT license.

/**
 * @license RequireJS i18n 2.0.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */

// Backbone.Validation v0.11.5
//
// Copyright (c) 2011-2015 Thomas Pedersen
// Distributed under MIT License
//
// Documentation and full license available at:
// http://thedersen.com/projects/backbone-validation

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */

function notifications(t, e, n) {
    $.notify({
        icon: n,
        message: t
    }, {
        offset: {
            y: 40
        },
        type: e,
        newest_on_top: !0,
        placement: {
            from: "top",
            align: "center"
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    })
}

function formatResult(t) {
    if (t.status) {
        var e = 0 == t.status ? "" : "text-danger";
        return '<span class="' + e + '">' + t.text + "</span>"
    }
    return t.text
}
if (! function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        "use strict";

        function n(t, e) {
            e = e || et;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(t) {
            var e = !!t && "length" in t && t.length,
                n = pt.type(t);
            return "function" !== n && !pt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function r(t, e, n) {
            return pt.isFunction(e) ? pt.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? pt.grep(t, function (t) {
                return t === e !== n
            }) : "string" != typeof e ? pt.grep(t, function (t) {
                return ot.call(e, t) > -1 !== n
            }) : Dt.test(e) ? pt.filter(e, t, n) : (e = pt.filter(e, t), pt.grep(t, function (t) {
                return ot.call(e, t) > -1 !== n && 1 === t.nodeType
            }))
        }

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = {};
            return pt.each(t.match($t) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function a(t) {
            return t
        }

        function l(t) {
            throw t
        }

        function c(t, e, n) {
            var i;
            try {
                t && pt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && pt.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
            } catch (t) {
                n.call(void 0, t)
            }
        }

        function u() {
            et.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), pt.ready()
        }

        function d() {
            this.expando = pt.expando + d.uid++
        }

        function h(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Lt.test(t) ? JSON.parse(t) : t)
        }

        function f(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(jt, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = h(n)
                    } catch (t) {}
                    It.set(t, e, n)
                } else n = void 0;
            return n
        }

        function p(t, e, n, i) {
            var r, s = 1,
                o = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return pt.css(t, e, "")
                },
                l = a(),
                c = n && n[3] || (pt.cssNumber[e] ? "" : "px"),
                u = (pt.cssNumber[e] || "px" !== c && +l) && Yt.exec(pt.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do s = s || ".5", u /= s, pt.style(t, e, u + c); while (s !== (s = a() / l) && 1 !== s && --o)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function m(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                r = Wt[i];
            return r ? r : (e = n.body.appendChild(n.createElement(i)), r = pt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Wt[i] = r, r)
        }

        function g(t, e) {
            for (var n, i, r = [], s = 0, o = t.length; s < o; s++) i = t[s], i.style && (n = i.style.display, e ? ("none" === n && (r[s] = Nt.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && Ht(i) && (r[s] = m(i))) : "none" !== n && (r[s] = "none", Nt.set(i, "display", n)));
            for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
            return t
        }

        function v(t, e) {
            var n;
            return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], n) : n
        }

        function y(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Nt.set(t[n], "globalEval", !e || Nt.get(e[n], "globalEval"))
        }

        function b(t, e, n, i, r) {
            for (var s, o, a, l, c, u, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                if (s = t[f], s || 0 === s)
                    if ("object" === pt.type(s)) pt.merge(h, s.nodeType ? [s] : s);
                    else if (Jt.test(s)) {
                for (o = o || d.appendChild(e.createElement("div")), a = (Vt.exec(s) || ["", ""])[1].toLowerCase(), l = Gt[a] || Gt._default, o.innerHTML = l[1] + pt.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
                pt.merge(h, o.childNodes), o = d.firstChild, o.textContent = ""
            } else h.push(e.createTextNode(s));
            for (d.textContent = "", f = 0; s = h[f++];)
                if (i && pt.inArray(s, i) > -1) r && r.push(s);
                else if (c = pt.contains(s.ownerDocument, s), o = v(d.appendChild(s), "script"), c && y(o), n)
                for (u = 0; s = o[u++];) zt.test(s.type || "") && n.push(s);
            return d
        }

        function w() {
            return !0
        }

        function _() {
            return !1
        }

        function x() {
            try {
                return et.activeElement
            } catch (t) {}
        }

        function k(t, e, n, i, r, s) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) k(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = _;
            else if (!r) return t;
            return 1 === s && (o = r, r = function (t) {
                return pt().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = pt.guid++)), t.each(function () {
                pt.event.add(this, e, r, i, n)
            })
        }

        function D(t, e) {
            return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }

        function C(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function S(t) {
            var e = ie.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function T(t, e) {
            var n, i, r, s, o, a, l, c;
            if (1 === e.nodeType) {
                if (Nt.hasData(t) && (s = Nt.access(t), o = Nt.set(e, s), c = s.events)) {
                    delete o.handle, o.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; n < i; n++) pt.event.add(e, r, c[r][n])
                }
                It.hasData(t) && (a = It.access(t), l = pt.extend({}, a), It.set(e, l))
            }
        }

        function A(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Bt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function E(t, e, i, r) {
            e = rt.apply([], e);
            var s, o, a, l, c, u, d = 0,
                h = t.length,
                f = h - 1,
                p = e[0],
                m = pt.isFunction(p);
            if (m || h > 1 && "string" == typeof p && !ht.checkClone && ne.test(p)) return t.each(function (n) {
                var s = t.eq(n);
                m && (e[0] = p.call(this, n, s.html())), E(s, e, i, r)
            });
            if (h && (s = b(e, t[0].ownerDocument, !1, t, r), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || r)) {
                for (a = pt.map(v(s, "script"), C), l = a.length; d < h; d++) c = s, d !== f && (c = pt.clone(c, !0, !0), l && pt.merge(a, v(c, "script"))), i.call(t[d], c, d);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, pt.map(a, S), d = 0; d < l; d++) c = a[d], zt.test(c.type || "") && !Nt.access(c, "globalEval") && pt.contains(u, c) && (c.src ? pt._evalUrl && pt._evalUrl(c.src) : n(c.textContent.replace(re, ""), u))
            }
            return t
        }

        function $(t, e, n) {
            for (var i, r = e ? pt.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || pt.cleanData(v(i)), i.parentNode && (n && pt.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function M(t, e, n) {
            var i, r, s, o, a = t.style;
            return n = n || ae(t), n && (o = n.getPropertyValue(e) || n[e], "" !== o || pt.contains(t.ownerDocument, t) || (o = pt.style(t, e)), !ht.pixelMarginRight() && oe.test(o) && se.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
        }

        function O(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function F(t) {
            if (t in he) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = de.length; n--;)
                if (t = de[n] + e, t in he) return t
        }

        function P(t, e, n) {
            var i = Yt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function N(t, e, n, i, r) {
            var s, o = 0;
            for (s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === n && (o += pt.css(t, n + qt[s], !0, r)), i ? ("content" === n && (o -= pt.css(t, "padding" + qt[s], !0, r)), "margin" !== n && (o -= pt.css(t, "border" + qt[s] + "Width", !0, r))) : (o += pt.css(t, "padding" + qt[s], !0, r), "padding" !== n && (o += pt.css(t, "border" + qt[s] + "Width", !0, r)));
            return o
        }

        function I(t, e, n) {
            var i, r = !0,
                s = ae(t),
                o = "border-box" === pt.css(t, "boxSizing", !1, s);
            if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
                if (i = M(t, e, s), (i < 0 || null == i) && (i = t.style[e]), oe.test(i)) return i;
                r = o && (ht.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + N(t, e, n || (o ? "border" : "content"), r, s) + "px"
        }

        function L(t, e, n, i, r) {
            return new L.prototype.init(t, e, n, i, r)
        }

        function j() {
            pe && (t.requestAnimationFrame(j), pt.fx.tick())
        }

        function R() {
            return t.setTimeout(function () {
                fe = void 0
            }), fe = pt.now()
        }

        function Y(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = qt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function q(t, e, n) {
            for (var i, r = (W.tweeners[e] || []).concat(W.tweeners["*"]), s = 0, o = r.length; s < o; s++)
                if (i = r[s].call(n, e, t)) return i
        }

        function H(t, e, n) {
            var i, r, s, o, a, l, c, u, d = "width" in e || "height" in e,
                h = this,
                f = {},
                p = t.style,
                m = t.nodeType && Ht(t),
                v = Nt.get(t, "fxshow");
            n.queue || (o = pt._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                o.unqueued || a()
            }), o.unqueued++, h.always(function () {
                h.always(function () {
                    o.unqueued--, pt.queue(t, "fx").length || o.empty.fire()
                })
            }));
            for (i in e)
                if (r = e[i], me.test(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[i]) continue;
                        m = !0
                    }
                    f[i] = v && v[i] || pt.style(t, i)
                }
            if (l = !pt.isEmptyObject(e), l || !pt.isEmptyObject(f)) {
                d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = v && v.display, null == c && (c = Nt.get(t, "display")), u = pt.css(t, "display"), "none" === u && (c ? u = c : (g([t], !0), c = t.style.display || c, u = pt.css(t, "display"), g([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === pt.css(t, "float") && (l || (h.done(function () {
                    p.display = c
                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1;
                for (i in f) l || (v ? "hidden" in v && (m = v.hidden) : v = Nt.access(t, "fxshow", {
                    display: c
                }), s && (v.hidden = !m), m && g([t], !0), h.done(function () {
                    m || g([t]), Nt.remove(t, "fxshow");
                    for (i in f) pt.style(t, i, f[i])
                })), l = q(m ? v[i] : 0, i, h), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function U(t, e) {
            var n, i, r, s, o;
            for (n in t)
                if (i = pt.camelCase(n), r = e[i], s = t[n], pt.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = pt.cssHooks[i], o && "expand" in o) {
                    s = o.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = r)
                } else e[i] = r
        }

        function W(t, e, n) {
            var i, r, s = 0,
                o = W.prefilters.length,
                a = pt.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var e = fe || R(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(s);
                    return a.notifyWith(t, [c, s, n]), s < 1 && l ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: pt.extend({}, e),
                    opts: pt.extend(!0, {
                        specialEasing: {},
                        easing: pt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: fe || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = pt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) c.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (U(u, c.opts.specialEasing); s < o; s++)
                if (i = W.prefilters[s].call(c, t, u, c.opts)) return pt.isFunction(i.stop) && (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(i.stop, i)), i;
            return pt.map(u, q, c), pt.isFunction(c.opts.start) && c.opts.start.call(t, c), pt.fx.timer(pt.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function B(t) {
            var e = t.match($t) || [];
            return e.join(" ")
        }

        function V(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function z(t, e, n, i) {
            var r;
            if (pt.isArray(e)) pt.each(e, function (e, r) {
                n || Se.test(t) ? i(t, r) : z(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== pt.type(e)) i(t, e);
            else
                for (r in e) z(t + "[" + r + "]", e[r], n, i)
        }

        function G(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    s = e.toLowerCase().match($t) || [];
                if (pt.isFunction(n))
                    for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function J(t, e, n, i) {
            function r(a) {
                var l;
                return s[a] = !0, pt.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var s = {},
                o = t === je;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function K(t, e) {
            var n, i, r = pt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && pt.extend(!0, t, i), t
        }

        function Z(t, e, n) {
            for (var i, r, s, o, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) s = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        s = r;
                        break
                    }
                    o || (o = r)
                }
                s = s || o
            }
            if (s) return s !== l[0] && l.unshift(s), n[s]
        }

        function Q(t, e, n, i) {
            var r, s, o, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
            for (s = u.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (o = c[l + " " + s] || c["* " + s], !o)
                    for (r in c)
                        if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                            o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
                            break
                        }
                if (o !== !0)
                    if (o && t.throws) e = o(e);
                    else try {
                        e = o(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: o ? t : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function X(t) {
            return pt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var tt = [],
            et = t.document,
            nt = Object.getPrototypeOf,
            it = tt.slice,
            rt = tt.concat,
            st = tt.push,
            ot = tt.indexOf,
            at = {},
            lt = at.toString,
            ct = at.hasOwnProperty,
            ut = ct.toString,
            dt = ut.call(Object),
            ht = {},
            ft = "3.1.1",
            pt = function (t, e) {
                return new pt.fn.init(t, e)
            },
            mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            gt = /^-ms-/,
            vt = /-([a-z])/g,
            yt = function (t, e) {
                return e.toUpperCase()
            };
        pt.fn = pt.prototype = {
            jquery: ft,
            constructor: pt,
            length: 0,
            toArray: function () {
                return it.call(this)
            },
            get: function (t) {
                return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function (t) {
                var e = pt.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function (t) {
                return pt.each(this, t)
            },
            map: function (t) {
                return this.pushStack(pt.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return this.pushStack(it.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: st,
            sort: tt.sort,
            splice: tt.splice
        }, pt.extend = pt.fn.extend = function () {
            var t, e, n, i, r, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || pt.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = o[e], i = t[e], o !== i && (c && i && (pt.isPlainObject(i) || (r = pt.isArray(i))) ? (r ? (r = !1, s = n && pt.isArray(n) ? n : []) : s = n && pt.isPlainObject(n) ? n : {}, o[e] = pt.extend(c, s, i)) : void 0 !== i && (o[e] = i));
            return o
        }, pt.extend({
            expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === pt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                var e = pt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== lt.call(t) || (e = nt(t)) && (n = ct.call(e, "constructor") && e.constructor, "function" != typeof n || ut.call(n) !== dt))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                n(t)
            },
            camelCase: function (t) {
                return t.replace(gt, "ms-").replace(vt, yt)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e) {
                var n, r = 0;
                if (i(t))
                    for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++);
                else
                    for (r in t)
                        if (e.call(t[r], r, t[r]) === !1) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(mt, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)), n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : ot.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function (t, e, n) {
                for (var i, r = [], s = 0, o = t.length, a = !n; s < o; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
                return r
            },
            map: function (t, e, n) {
                var r, s, o = 0,
                    a = [];
                if (i(t))
                    for (r = t.length; o < r; o++) s = e(t[o], o, n), null != s && a.push(s);
                else
                    for (o in t) s = e(t[o], o, n), null != s && a.push(s);
                return rt.apply([], a)
            },
            guid: 1,
            proxy: function (t, e) {
                var n, i, r;
                if ("string" == typeof e && (n = t[e], e = t, t = n), pt.isFunction(t)) return i = it.call(arguments, 2), r = function () {
                    return t.apply(e || this, i.concat(it.call(arguments)))
                }, r.guid = t.guid = t.guid || pt.guid++, r
            },
            now: Date.now,
            support: ht
        }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = tt[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            at["[object " + e + "]"] = e.toLowerCase()
        });
        var bt = function (t) {
            function e(t, e, n, i) {
                var r, s, o, a, l, c, u, h = e && e.ownerDocument,
                    p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!i && ((e ? e.ownerDocument || e : q) !== F && O(e), e = e || F, N)) {
                    if (11 !== p && (l = vt.exec(t)))
                        if (r = l[1]) {
                            if (9 === p) {
                                if (!(o = e.getElementById(r))) return n;
                                if (o.id === r) return n.push(o), n
                            } else if (h && (o = h.getElementById(r)) && R(e, o) && o.id === r) return n.push(o), n
                        } else {
                            if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(r)), n
                        }
                    if (x.qsa && !V[t + " "] && (!I || !I.test(t))) {
                        if (1 !== p) h = e, u = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(_t, xt) : e.setAttribute("id", a = Y), c = S(t), s = c.length; s--;) c[s] = "#" + a + " " + f(c[s]);
                            u = c.join(","), h = yt.test(t) && d(e.parentNode) || e
                        }
                        if (u) try {
                            return Q.apply(n, h.querySelectorAll(u)), n
                        } catch (t) {} finally {
                            a === Y && e.removeAttribute("id")
                        }
                    }
                }
                return A(t.replace(at, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[Y] = !0, t
            }

            function r(t) {
                var e = F.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = e
            }

            function o(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Dt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function u(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function d(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {}

            function f(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir,
                    r = e.next,
                    s = r || i,
                    o = n && "parentNode" === s,
                    a = U++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r);
                    return !1
                } : function (e, n, l) {
                    var c, u, d, h = [H, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o)
                                if (d = e[Y] || (e[Y] = {}), u = d[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((c = u[s]) && c[0] === H && c[1] === a) return h[2] = c[2];
                                    if (u[s] = h, h[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function m(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, i) {
                for (var r = 0, s = n.length; r < s; r++) e(t, n[r], i);
                return i
            }

            function v(t, e, n, i, r) {
                for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), c && e.push(a)));
                return o
            }

            function y(t, e, n, r, s, o) {
                return r && !r[Y] && (r = y(r)), s && !s[Y] && (s = y(s, o)), i(function (i, o, a, l) {
                    var c, u, d, h = [],
                        f = [],
                        p = o.length,
                        m = i || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? m : v(m, h, t, a, l),
                        b = n ? s || (i ? t : p || r) ? [] : o : y;
                    if (n && n(y, b, a, l), r)
                        for (c = v(b, f), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                    if (i) {
                        if (s || t) {
                            if (s) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                s(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = s ? tt(i, d) : h[u]) > -1 && (i[c] = !(o[c] = d))
                        }
                    } else b = v(b === o ? b.splice(p, b.length) : b), s ? s(null, o, b, l) : Q.apply(o, b)
                })
            }

            function b(t) {
                for (var e, n, i, r = t.length, s = k.relative[t[0].type], o = s || k.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                        return t === e
                    }, o, !0), c = p(function (t) {
                        return tt(e, t) > -1
                    }, o, !0), u = [function (t, n, i) {
                        var r = !s && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                        return e = null, r
                    }]; a < r; a++)
                    if (n = k.relative[t[a].type]) u = [p(m(u), n)];
                    else {
                        if (n = k.filter[t[a].type].apply(null, t[a].matches), n[Y]) {
                            for (i = ++a; i < r && !k.relative[t[i].type]; i++);
                            return y(a > 1 && m(u), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), n, a < i && b(t.slice(a, i)), i < r && b(t = t.slice(i)), i < r && f(t))
                        }
                        u.push(n)
                    }
                return m(u)
            }

            function w(t, n) {
                var r = n.length > 0,
                    s = t.length > 0,
                    o = function (i, o, a, l, c) {
                        var u, d, h, f = 0,
                            p = "0",
                            m = i && [],
                            g = [],
                            y = E,
                            b = i || s && k.find.TAG("*", c),
                            w = H += null == y ? 1 : Math.random() || .1,
                            _ = b.length;
                        for (c && (E = o === F || o || c); p !== _ && null != (u = b[p]); p++) {
                            if (s && u) {
                                for (d = 0, o || u.ownerDocument === F || (O(u), a = !N); h = t[d++];)
                                    if (h(u, o || F, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (H = w)
                            }
                            r && ((u = !h && u) && f--, i && m.push(u))
                        }
                        if (f += p, r && p !== f) {
                            for (d = 0; h = n[d++];) h(m, g, o, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;) m[p] || g[p] || (g[p] = K.call(l));
                                g = v(g)
                            }
                            Q.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (H = w, E = y), m
                    };
                return r ? i(o) : o
            }
            var _, x, k, D, C, S, T, A, E, $, M, O, F, P, N, I, L, j, R, Y = "sizzle" + 1 * new Date,
                q = t.document,
                H = 0,
                U = 0,
                W = n(),
                B = n(),
                V = n(),
                z = function (t, e) {
                    return t === e && (M = !0), 0
                },
                G = {}.hasOwnProperty,
                J = [],
                K = J.pop,
                Z = J.push,
                Q = J.push,
                X = J.slice,
                tt = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                ot = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(st),
                ht = new RegExp("^" + it + "$"),
                ft = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                wt = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                _t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                xt = function (t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                kt = function () {
                    O()
                },
                Dt = p(function (t) {
                    return t.disabled === !0 && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Q.apply(J = X.call(q.childNodes), q.childNodes), J[q.childNodes.length].nodeType
            } catch (t) {
                Q = {
                    apply: J.length ? function (t, e) {
                        Z.apply(t, X.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, O = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== F && 9 === i.nodeType && i.documentElement ? (F = i, P = F.documentElement, N = !C(F), q !== F && (n = F.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), x.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function (t) {
                    return t.appendChild(F.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(F.getElementsByClassName), x.getById = r(function (t) {
                    return P.appendChild(t).id = Y, !F.getElementsByName || !F.getElementsByName(Y).length
                }), x.getById ? (k.filter.ID = function (t) {
                    var e = t.replace(bt, wt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, k.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (k.filter.ID = function (t) {
                    var e = t.replace(bt, wt);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, k.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                        var n, i, r, s = e.getElementById(t);
                        if (s) {
                            if (n = s.getAttributeNode("id"), n && n.value === t) return [s];
                            for (r = e.getElementsByName(t), i = 0; s = r[i++];)
                                if (n = s.getAttributeNode("id"), n && n.value === t) return [s]
                        }
                        return []
                    }
                }), k.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, k.find.CLASS = x.getElementsByClassName && function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && N) return e.getElementsByClassName(t)
                }, L = [], I = [], (x.qsa = gt.test(F.querySelectorAll)) && (r(function (t) {
                    P.appendChild(t).innerHTML = "<a id='" + Y + "'></a><select id='" + Y + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + Y + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + Y + "+*").length || I.push(".#.+[+~]")
                }), r(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = F.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), P.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                })), (x.matchesSelector = gt.test(j = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function (t) {
                    x.disconnectedMatch = j.call(t, "*"), j.call(t, "[s!='']:x"), L.push("!=", st)
                }), I = I.length && new RegExp(I.join("|")), L = L.length && new RegExp(L.join("|")), e = gt.test(P.compareDocumentPosition), R = e || gt.test(P.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, z = e ? function (t, e) {
                    if (t === e) return M = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === F || t.ownerDocument === q && R(q, t) ? -1 : e === F || e.ownerDocument === q && R(q, e) ? 1 : $ ? tt($, t) - tt($, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return M = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!r || !s) return t === F ? -1 : e === F ? 1 : r ? -1 : s ? 1 : $ ? tt($, t) - tt($, e) : 0;
                    if (r === s) return o(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? o(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
                }, F) : F
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== F && O(t), n = n.replace(ut, "='$1']"), x.matchesSelector && N && !V[n + " "] && (!L || !L.test(n)) && (!I || !I.test(n))) try {
                    var i = j.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, F, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== F && O(t), R(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== F && O(t);
                var n = k.attrHandle[e.toLowerCase()],
                    i = n && G.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
                return void 0 !== i ? i : x.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function (t) {
                return (t + "").replace(_t, xt)
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (M = !x.detectDuplicates, $ = !x.sortStable && t.slice(0), t.sort(z), M) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return $ = null, t
            }, D = e.getText = function (t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += D(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += D(e);
                return n
            }, k = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(bt, wt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, n, i) {
                        return function (r) {
                            var s = e.attr(r, t);
                            return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (t, e, n, i, r) {
                        var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, d, h, f, p, m = s !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (h = g, d = h[Y] || (h[Y] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[t] || [], f = c[0] === H && c[1], b = f && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++b && h === e) {
                                            u[t] = [H, f, b];
                                            break
                                        }
                                } else if (y && (h = e, d = h[Y] || (h[Y] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[t] || [], f = c[0] === H && c[1], b = f), b === !1)
                                    for (;
                                        (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[Y] || (h[Y] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), u[t] = [H, b]), h !== e)););
                                return b -= r, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, n) {
                        var r, s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[Y] ? s(n) : s.length > 1 ? (r = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, r = s(t, n), o = r.length; o--;) i = tt(t, r[o]), t[i] = !(e[i] = r[o])
                        }) : function (t) {
                            return s(t, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [],
                            n = [],
                            r = T(t.replace(at, "$1"));
                        return r[Y] ? i(function (t, e, n, i) {
                            for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function (t, i, s) {
                            return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function (t) {
                        return t = t.replace(bt, wt),
                            function (e) {
                                return (e.textContent || e.innerText || D(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function (t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                            function (e) {
                                var n;
                                do
                                    if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === P
                    },
                    focus: function (t) {
                        return t === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !k.pseudos.empty(t)
                    },
                    header: function (t) {
                        return mt.test(t.nodeName)
                    },
                    input: function (t) {
                        return pt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function () {
                        return [0]
                    }),
                    last: u(function (t, e) {
                        return [e - 1]
                    }),
                    eq: u(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: u(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[_] = a(_);
            for (_ in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[_] = l(_);
            return h.prototype = k.filters = k.pseudos, k.setFilters = new h, S = e.tokenize = function (t, n) {
                var i, r, s, o, a, l, c, u = B[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = t, l = [], c = k.preFilter; a;) {
                    i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), s.push({
                        value: i,
                        type: r[0].replace(at, " ")
                    }), a = a.slice(i.length));
                    for (o in k.filter) !(r = ft[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push({
                        value: i,
                        type: o,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : B(t, l).slice(0)
            }, T = e.compile = function (t, e) {
                var n, i = [],
                    r = [],
                    s = V[t + " "];
                if (!s) {
                    for (e || (e = S(t)), n = e.length; n--;) s = b(e[n]), s[Y] ? i.push(s) : r.push(s);
                    s = V(t, w(r, i)), s.selector = t
                }
                return s
            }, A = e.select = function (t, e, n, i) {
                var r, s, o, a, l, c = "function" == typeof t && t,
                    u = !i && S(t = c.selector || t);
                if (n = n || [], 1 === u.length) {
                    if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && 9 === e.nodeType && N && k.relative[s[1].type]) {
                        if (e = (k.find.ID(o.matches[0].replace(bt, wt), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !k.relative[a = o.type]);)
                        if ((l = k.find[a]) && (i = l(o.matches[0].replace(bt, wt), yt.test(s[0].type) && d(e.parentNode) || e))) {
                            if (s.splice(r, 1), t = i.length && f(s), !t) return Q.apply(n, i), n;
                            break
                        }
                }
                return (c || T(t, u))(i, e, !N, n, !e || yt.test(t) && d(e.parentNode) || e), n
            }, x.sortStable = Y.split("").sort(z).join("") === Y, x.detectDuplicates = !!M, O(), x.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(F.createElement("fieldset"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(et, function (t, e, n) {
                var i;
                if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        pt.find = bt, pt.expr = bt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = bt.uniqueSort, pt.text = bt.getText, pt.isXMLDoc = bt.isXML, pt.contains = bt.contains, pt.escapeSelector = bt.escape;
        var wt = function (t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && pt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            _t = function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            xt = pt.expr.match.needsContext,
            kt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Dt = /^.[^:#\[\.,]*$/;
        pt.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? pt.find.matchesSelector(i, t) ? [i] : [] : pt.find.matches(t, pt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, pt.fn.extend({
            find: function (t) {
                var e, n, i = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(pt(t).filter(function () {
                    for (e = 0; e < i; e++)
                        if (pt.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) pt.find(t, r[e], n);
                return i > 1 ? pt.uniqueSort(n) : n
            },
            filter: function (t) {
                return this.pushStack(r(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(r(this, t || [], !0))
            },
            is: function (t) {
                return !!r(this, "string" == typeof t && xt.test(t) ? pt(t) : t || [], !1).length
            }
        });
        var Ct, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Tt = pt.fn.init = function (t, e, n) {
                var i, r;
                if (!t) return this;
                if (n = n || Ct, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : St.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), kt.test(i[1]) && pt.isPlainObject(e))
                            for (i in e) pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return r = et.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : pt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(pt) : pt.makeArray(t, this)
            };
        Tt.prototype = pt.fn, Ct = pt(et);
        var At = /^(?:parents|prev(?:Until|All))/,
            Et = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pt.fn.extend({
            has: function (t) {
                var e = pt(t, this),
                    n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++)
                        if (pt.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                var n, i = 0,
                    r = this.length,
                    s = [],
                    o = "string" != typeof t && pt(t);
                if (!xt.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
                                s.push(n);
                                break
                            }
                return this.pushStack(s.length > 1 ? pt.uniqueSort(s) : s)
            },
            index: function (t) {
                return t ? "string" == typeof t ? ot.call(pt(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), pt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return wt(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return wt(t, "parentNode", n)
            },
            next: function (t) {
                return s(t, "nextSibling")
            },
            prev: function (t) {
                return s(t, "previousSibling")
            },
            nextAll: function (t) {
                return wt(t, "nextSibling")
            },
            prevAll: function (t) {
                return wt(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return wt(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return wt(t, "previousSibling", n)
            },
            siblings: function (t) {
                return _t((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return _t(t.firstChild)
            },
            contents: function (t) {
                return t.contentDocument || pt.merge([], t.childNodes)
            }
        }, function (t, e) {
            pt.fn[t] = function (n, i) {
                var r = pt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = pt.filter(i, r)), this.length > 1 && (Et[t] || pt.uniqueSort(r), At.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var $t = /[^\x20\t\r\n\f]+/g;
        pt.Callbacks = function (t) {
            t = "string" == typeof t ? o(t) : pt.extend({}, t);
            var e, n, i, r, s = [],
                a = [],
                l = -1,
                c = function () {
                    for (r = t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                u = {
                    add: function () {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
                            pt.each(n, function (n, i) {
                                pt.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== pt.type(i) && e(i)
                            })
                        }(arguments), n && !e && c()), this
                    },
                    remove: function () {
                        return pt.each(arguments, function (t, e) {
                            for (var n;
                                (n = pt.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function (t) {
                        return t ? pt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function () {
                        return s && (s = []), this
                    },
                    disable: function () {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return r = a = [], n || e || (s = n = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, pt.extend({
            Deferred: function (e) {
                var n = [
                        ["notify", "progress", pt.Callbacks("memory"), pt.Callbacks("memory"), 2],
                        ["resolve", "done", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this
                        },
                        catch: function (t) {
                            return r.then(null, t)
                        },
                        pipe: function () {
                            var t = arguments;
                            return pt.Deferred(function (e) {
                                pt.each(n, function (n, i) {
                                    var r = pt.isFunction(t[i[4]]) && t[i[4]];
                                    s[i[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && pt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function (e, i, r) {
                            function s(e, n, i, r) {
                                return function () {
                                    var c = this,
                                        u = arguments,
                                        d = function () {
                                            var t, d;
                                            if (!(e < o)) {
                                                if (t = i.apply(c, u), t === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = t && ("object" == typeof t || "function" == typeof t) && t.then, pt.isFunction(d) ? r ? d.call(t, s(o, n, a, r), s(o, n, l, r)) : (o++, d.call(t, s(o, n, a, r), s(o, n, l, r), s(o, n, a, n.notifyWith))) : (i !== a && (c = void 0, u = [t]), (r || n.resolveWith)(c, u))
                                            }
                                        },
                                        h = r ? d : function () {
                                            try {
                                                d()
                                            } catch (t) {
                                                pt.Deferred.exceptionHook && pt.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= o && (i !== l && (c = void 0, u = [t]), n.rejectWith(c, u))
                                            }
                                        };
                                    e ? h() : (pt.Deferred.getStackHook && (h.stackTrace = pt.Deferred.getStackHook()), t.setTimeout(h))
                                }
                            }
                            var o = 0;
                            return pt.Deferred(function (t) {
                                n[0][3].add(s(0, t, pt.isFunction(r) ? r : a, t.notifyWith)), n[1][3].add(s(0, t, pt.isFunction(e) ? e : a)), n[2][3].add(s(0, t, pt.isFunction(i) ? i : l))
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? pt.extend(t, r) : r
                        }
                    },
                    s = {};
                return pt.each(n, function (t, e) {
                    var o = e[2],
                        a = e[5];
                    r[e[1]] = o.add, a && o.add(function () {
                        i = a
                    }, n[3 - t][2].disable, n[0][2].lock), o.add(e[3].fire), s[e[0]] = function () {
                        return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[e[0] + "With"] = o.fireWith
                }), r.promise(s), e && e.call(s, s), s
            },
            when: function (t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = it.call(arguments),
                    s = pt.Deferred(),
                    o = function (t) {
                        return function (n) {
                            i[t] = this, r[t] = arguments.length > 1 ? it.call(arguments) : n, --e || s.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (c(t, s.done(o(n)).resolve, s.reject), "pending" === s.state() || pt.isFunction(r[n] && r[n].then))) return s.then();
                for (; n--;) c(r[n], o(n), s.reject);
                return s.promise()
            }
        });
        var Mt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        pt.Deferred.exceptionHook = function (e, n) {
            t.console && t.console.warn && e && Mt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
        }, pt.readyException = function (e) {
            t.setTimeout(function () {
                throw e
            })
        };
        var Ot = pt.Deferred();
        pt.fn.ready = function (t) {
            return Ot.then(t).catch(function (t) {
                pt.readyException(t)
            }), this
        }, pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? pt.readyWait++ : pt.ready(!0)
            },
            ready: function (t) {
                (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || Ot.resolveWith(et, [pt]))
            }
        }), pt.ready.then = Ot.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(pt.ready) : (et.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
        var Ft = function (t, e, n, i, r, s, o) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === pt.type(n)) {
                    r = !0;
                    for (a in n) Ft(t, e, a, n[a], !0, s, o)
                } else if (void 0 !== i && (r = !0, pt.isFunction(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                        return c.call(pt(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
            },
            Pt = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        d.uid = 1, d.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Pt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[pt.camelCase(e)] = n;
                else
                    for (i in e) r[pt.camelCase(i)] = e[i];
                return r
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][pt.camelCase(e)]
            },
            access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        pt.isArray(e) ? e = e.map(pt.camelCase) : (e = pt.camelCase(e), e = e in i ? [e] : e.match($t) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || pt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !pt.isEmptyObject(e)
            }
        };
        var Nt = new d,
            It = new d,
            Lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            jt = /[A-Z]/g;
        pt.extend({
            hasData: function (t) {
                return It.hasData(t) || Nt.hasData(t)
            },
            data: function (t, e, n) {
                return It.access(t, e, n)
            },
            removeData: function (t, e) {
                It.remove(t, e)
            },
            _data: function (t, e, n) {
                return Nt.access(t, e, n)
            },
            _removeData: function (t, e) {
                Nt.remove(t, e)
            }
        }), pt.fn.extend({
            data: function (t, e) {
                var n, i, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = It.get(s), 1 === s.nodeType && !Nt.get(s, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = pt.camelCase(i.slice(5)), f(s, i, r[i])));
                        Nt.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    It.set(this, t)
                }) : Ft(this, function (e) {
                    var n;
                    if (s && void 0 === e) {
                        if (n = It.get(s, t), void 0 !== n) return n;
                        if (n = f(s, t), void 0 !== n) return n
                    } else this.each(function () {
                        It.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    It.remove(this, t)
                })
            }
        }), pt.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Nt.get(t, e), n && (!i || pt.isArray(n) ? i = Nt.access(t, e, pt.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = pt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    s = pt._queueHooks(t, e),
                    o = function () {
                        pt.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Nt.get(t, n) || Nt.access(t, n, {
                    empty: pt.Callbacks("once memory").add(function () {
                        Nt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), pt.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = pt.queue(this, t, e);
                    pt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    pt.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1,
                    r = pt.Deferred(),
                    s = this,
                    o = this.length,
                    a = function () {
                        --i || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = Nt.get(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Yt = new RegExp("^(?:([+-])=|)(" + Rt + ")([a-z%]*)$", "i"),
            qt = ["Top", "Right", "Bottom", "Left"],
            Ht = function (t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && pt.contains(t.ownerDocument, t) && "none" === pt.css(t, "display")
            },
            Ut = function (t, e, n, i) {
                var r, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                r = n.apply(t, i || []);
                for (s in e) t.style[s] = o[s];
                return r
            },
            Wt = {};
        pt.fn.extend({
            show: function () {
                return g(this, !0)
            },
            hide: function () {
                return g(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Ht(this) ? pt(this).show() : pt(this).hide()
                })
            }
        });
        var Bt = /^(?:checkbox|radio)$/i,
            Vt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            zt = /^$|\/(?:java|ecma)script/i,
            Gt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td;
        var Jt = /<|&#?\w+;/;
        ! function () {
            var t = et.createDocumentFragment(),
                e = t.appendChild(et.createElement("div")),
                n = et.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ht.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Kt = et.documentElement,
            Zt = /^key/,
            Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Xt = /^([^.]*)(?:\.(.+)|)/;
        pt.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var s, o, a, l, c, u, d, h, f, p, m, g = Nt.get(t);
                if (g)
                    for (n.handler && (s = n, n = s.handler, r = s.selector), r && pt.find.matchesSelector(Kt, r), n.guid || (n.guid = pt.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (e) {
                            return "undefined" != typeof pt && pt.event.triggered !== e.type ? pt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match($t) || [""], c = e.length; c--;) a = Xt.exec(e[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f && (d = pt.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = pt.event.special[f] || {}, u = pt.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pt.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, s), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, d.setup && d.setup.call(t, i, p, o) !== !1 || t.addEventListener && t.addEventListener(f, o)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), pt.event.global[f] = !0)
            },
            remove: function (t, e, n, i, r) {
                var s, o, a, l, c, u, d, h, f, p, m, g = Nt.hasData(t) && Nt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match($t) || [""], c = e.length; c--;)
                        if (a = Xt.exec(e[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (d = pt.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) u = h[s], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                            o && !h.length && (d.teardown && d.teardown.call(t, p, g.handle) !== !1 || pt.removeEvent(t, f, g.handle), delete l[f])
                        } else
                            for (f in l) pt.event.remove(t, f + e[c], n, i, !0);
                    pt.isEmptyObject(l) && Nt.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                var e, n, i, r, s, o, a = pt.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Nt.get(this, "events") || {})[a.type] || [],
                    u = pt.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                    for (o = pt.event.handlers.call(this, a, c), e = 0;
                        (r = o[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = r.elem, n = 0;
                            (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, i = ((pt.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function (t, e) {
                var n, i, r, s, o, a = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                            for (s = [], o = {}, n = 0; n < l; n++) i = e[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? pt(r, this).index(c) > -1 : pt.find(r, this, null, [c]).length), o[r] && s.push(i);
                            s.length && a.push({
                                elem: c,
                                handlers: s
                            })
                        }
                return c = this, l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function (t, e) {
                Object.defineProperty(pt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: pt.isFunction(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function (t) {
                return t[pt.expando] ? t : new pt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== x() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === x() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && pt.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function (t) {
                        return pt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, pt.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, pt.Event = function (t, e) {
            return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? w : _, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e)
        }, pt.Event.prototype = {
            constructor: pt.Event,
            isDefaultPrevented: _,
            isPropagationStopped: _,
            isImmediatePropagationStopped: _,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = w, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = w, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = w, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && Zt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, pt.event.addProp), pt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            pt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return r && (r === i || pt.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), pt.fn.extend({
            on: function (t, e, n, i) {
                return k(this, t, e, n, i)
            },
            one: function (t, e, n, i) {
                return k(this, t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, pt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = _), this.each(function () {
                    pt.event.remove(this, t, n, e)
                })
            }
        });
        var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ee = /<script|<style|<link/i,
            ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ie = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        pt.extend({
            htmlPrefilter: function (t) {
                return t.replace(te, "<$1></$2>")
            },
            clone: function (t, e, n) {
                var i, r, s, o, a = t.cloneNode(!0),
                    l = pt.contains(t.ownerDocument, t);
                if (!(ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                    for (o = v(a), s = v(t), i = 0, r = s.length; i < r; i++) A(s[i], o[i]);
                if (e)
                    if (n)
                        for (s = s || v(t), o = o || v(a), i = 0, r = s.length; i < r; i++) T(s[i], o[i]);
                    else T(t, a);
                return o = v(a, "script"), o.length > 0 && y(o, !l && v(t, "script")), a
            },
            cleanData: function (t) {
                for (var e, n, i, r = pt.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (Pt(n)) {
                        if (e = n[Nt.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, e.handle);
                            n[Nt.expando] = void 0
                        }
                        n[It.expando] && (n[It.expando] = void 0)
                    }
            }
        }), pt.fn.extend({
            detach: function (t) {
                return $(this, t, !0)
            },
            remove: function (t) {
                return $(this, t)
            },
            text: function (t) {
                return Ft(this, function (t) {
                    return void 0 === t ? pt.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return E(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = D(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function () {
                return E(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = D(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return E(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return E(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (pt.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return pt.clone(this, t, e)
                })
            },
            html: function (t) {
                return Ft(this, function (t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ee.test(t) && !Gt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = pt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (pt.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return E(this, arguments, function (e) {
                    var n = this.parentNode;
                    pt.inArray(this, t) < 0 && (pt.cleanData(v(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), pt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            pt.fn[t] = function (t) {
                for (var n, i = [], r = pt(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), pt(r[o])[e](n), st.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var se = /^margin/,
            oe = new RegExp("^(" + Rt + ")(?!px)[a-z%]+$", "i"),
            ae = function (e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            };
        ! function () {
            function e() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(o);
                    var e = t.getComputedStyle(a);
                    n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Kt.removeChild(o), a = null
                }
            }
            var n, i, r, s, o = et.createElement("div"),
                a = et.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), pt.extend(ht, {
                pixelPosition: function () {
                    return e(), n
                },
                boxSizingReliable: function () {
                    return e(), i
                },
                pixelMarginRight: function () {
                    return e(), r
                },
                reliableMarginLeft: function () {
                    return e(), s
                }
            }))
        }();
        var le = /^(none|table(?!-c[ea]).+)/,
            ce = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ue = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            de = ["Webkit", "Moz", "ms"],
            he = et.createElement("div").style;
        pt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = M(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = pt.camelCase(e),
                        l = t.style;
                    return e = pt.cssProps[a] || (pt.cssProps[a] = F(a) || a), o = pt.cssHooks[e] || pt.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e] : (s = typeof n, "string" === s && (r = Yt.exec(n)) && r[1] && (n = p(t, e, r), s = "number"), void(null != n && n === n && ("number" === s && (n += r && r[3] || (pt.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l[e] = n))))
                }
            },
            css: function (t, e, n, i) {
                var r, s, o, a = pt.camelCase(e);
                return e = pt.cssProps[a] || (pt.cssProps[a] = F(a) || a), o = pt.cssHooks[e] || pt.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = M(t, e, i)), "normal" === r && e in ue && (r = ue[e]), "" === n || n ? (s = parseFloat(r), n === !0 || isFinite(s) ? s || 0 : r) : r
            }
        }), pt.each(["height", "width"], function (t, e) {
            pt.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n) return !le.test(pt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? I(t, e, i) : Ut(t, ce, function () {
                        return I(t, e, i)
                    })
                },
                set: function (t, n, i) {
                    var r, s = i && ae(t),
                        o = i && N(t, e, i, "border-box" === pt.css(t, "boxSizing", !1, s), s);
                    return o && (r = Yt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = pt.css(t, e)), P(t, n, o)
                }
            }
        }), pt.cssHooks.marginLeft = O(ht.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(M(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, {
                marginLeft: 0
            }, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), pt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            pt.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + qt[i] + e] = s[i] || s[i - 2] || s[0];
                    return r
                }
            }, se.test(t) || (pt.cssHooks[t + e].set = P)
        }), pt.fn.extend({
            css: function (t, e) {
                return Ft(this, function (t, e, n) {
                    var i, r, s = {},
                        o = 0;
                    if (pt.isArray(e)) {
                        for (i = ae(t), r = e.length; o < r; o++) s[e[o]] = pt.css(t, e[o], !1, i);
                        return s
                    }
                    return void 0 !== n ? pt.style(t, e, n) : pt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), pt.Tween = L, L.prototype = {
            constructor: L,
            init: function (t, e, n, i, r, s) {
                this.elem = t, this.prop = n, this.easing = r || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (pt.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = L.propHooks[this.prop];
                return t && t.get ? t.get(this) : L.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function (t) {
                    pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, pt.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, pt.fx = L.prototype.init, pt.fx.step = {};
        var fe, pe, me = /^(?:toggle|show|hide)$/,
            ge = /queueHooks$/;
        pt.Animation = pt.extend(W, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return p(n.elem, t, Yt.exec(e), n), n
                    }]
                },
                tweener: function (t, e) {
                    pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match($t);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(e)
                },
                prefilters: [H],
                prefilter: function (t, e) {
                    e ? W.prefilters.unshift(t) : W.prefilters.push(t)
                }
            }), pt.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? pt.extend({}, t) : {
                    complete: n || !n && e || pt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !pt.isFunction(e) && e
                };
                return pt.fx.off || et.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pt.fx.speeds ? i.duration = pt.fx.speeds[i.duration] : i.duration = pt.fx.speeds._default),
                    null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                        pt.isFunction(i.old) && i.old.call(this), i.queue && pt.dequeue(this, i.queue)
                    }, i
            }, pt.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(Ht).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (t, e, n, i) {
                    var r = pt.isEmptyObject(t),
                        s = pt.speed(e, n, i),
                        o = function () {
                            var e = W(this, pt.extend({}, t), s);
                            (r || Nt.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = pt.timers,
                            o = Nt.get(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && ge.test(r) && i(o[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                        !e && n || pt.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = Nt.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            s = pt.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, pt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), pt.each(["toggle", "show", "hide"], function (t, e) {
                var n = pt.fn[e];
                pt.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Y(e, !0), t, i, r)
                }
            }), pt.each({
                slideDown: Y("show"),
                slideUp: Y("hide"),
                slideToggle: Y("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                pt.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), pt.timers = [], pt.fx.tick = function () {
                var t, e = 0,
                    n = pt.timers;
                for (fe = pt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || pt.fx.stop(), fe = void 0
            }, pt.fx.timer = function (t) {
                pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
            }, pt.fx.interval = 13, pt.fx.start = function () {
                pe || (pe = t.requestAnimationFrame ? t.requestAnimationFrame(j) : t.setInterval(pt.fx.tick, pt.fx.interval))
            }, pt.fx.stop = function () {
                t.cancelAnimationFrame ? t.cancelAnimationFrame(pe) : t.clearInterval(pe), pe = null
            }, pt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, pt.fn.delay = function (e, n) {
                return e = pt.fx ? pt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                    var r = t.setTimeout(n, e);
                    i.stop = function () {
                        t.clearTimeout(r)
                    }
                })
            },
            function () {
                var t = et.createElement("input"),
                    e = et.createElement("select"),
                    n = e.appendChild(et.createElement("option"));
                t.type = "checkbox", ht.checkOn = "" !== t.value, ht.optSelected = n.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", ht.radioValue = "t" === t.value
            }();
        var ve, ye = pt.expr.attrHandle;
        pt.fn.extend({
            attr: function (t, e) {
                return Ft(this, pt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    pt.removeAttr(this, t)
                })
            }
        }), pt.extend({
            attr: function (t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, n) : (1 === s && pt.isXMLDoc(t) || (r = pt.attrHooks[e.toLowerCase()] || (pt.expr.match.bool.test(e) ? ve : void 0)), void 0 !== n ? null === n ? void pt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = pt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!ht.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var n, i = 0,
                    r = e && e.match($t);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n)
            }
        }), ve = {
            set: function (t, e, n) {
                return e === !1 ? pt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = ye[e] || pt.find.attr;
            ye[e] = function (t, e, i) {
                var r, s, o = e.toLowerCase();
                return i || (s = ye[o], ye[o] = r, r = null != n(t, e, i) ? o : null, ye[o] = s), r
            }
        });
        var be = /^(?:input|select|textarea|button)$/i,
            we = /^(?:a|area)$/i;
        pt.fn.extend({
            prop: function (t, e) {
                return Ft(this, pt.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[pt.propFix[t] || t]
                })
            }
        }), pt.extend({
            prop: function (t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, r = pt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = pt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : be.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ht.optSelected || (pt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            pt.propFix[this.toLowerCase()] = this
        }), pt.fn.extend({
            addClass: function (t) {
                var e, n, i, r, s, o, a, l = 0;
                if (pt.isFunction(t)) return this.each(function (e) {
                    pt(this).addClass(t.call(this, e, V(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match($t) || []; n = this[l++];)
                        if (r = V(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                            for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = B(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function (t) {
                var e, n, i, r, s, o, a, l = 0;
                if (pt.isFunction(t)) return this.each(function (e) {
                    pt(this).removeClass(t.call(this, e, V(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match($t) || []; n = this[l++];)
                        if (r = V(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                            for (o = 0; s = e[o++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            a = B(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function (n) {
                    pt(this).toggleClass(t.call(this, n, V(this), e), e)
                }) : this.each(function () {
                    var e, i, r, s;
                    if ("string" === n)
                        for (i = 0, r = pt(this), s = t.match($t) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = V(this), e && Nt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Nt.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + B(V(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var _e = /\r/g;
        pt.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = pt.isFunction(t), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, pt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : pt.isArray(r) && (r = pt.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = pt.valHooks[r.type] || pt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)) : void 0
            }
        }), pt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = pt.find.attr(t, "value");
                        return null != e ? e : B(pt.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        var e, n, i, r = t.options,
                            s = t.selectedIndex,
                            o = "select-one" === t.type,
                            a = o ? null : [],
                            l = o ? s + 1 : r.length;
                        for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                            if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !pt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = pt(n).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function (t, e) {
                        for (var n, i, r = t.options, s = pt.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = pt.inArray(pt.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), pt.each(["radio", "checkbox"], function () {
            pt.valHooks[this] = {
                set: function (t, e) {
                    if (pt.isArray(e)) return t.checked = pt.inArray(pt(t).val(), e) > -1
                }
            }, ht.checkOn || (pt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var xe = /^(?:focusinfocus|focusoutblur)$/;
        pt.extend(pt.event, {
            trigger: function (e, n, i, r) {
                var s, o, a, l, c, u, d, h = [i || et],
                    f = ct.call(e, "type") ? e.type : e,
                    p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !xe.test(f + pt.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[pt.expando] ? e : new pt.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : pt.makeArray(n, [e]), d = pt.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !pt.isWindow(i)) {
                        for (l = d.delegateType || f, xe.test(l + f) || (o = o.parentNode); o; o = o.parentNode) h.push(o), a = o;
                        a === (i.ownerDocument || et) && h.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (o = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : d.bindType || f, u = (Nt.get(o, "events") || {})[e.type] && Nt.get(o, "handle"), u && u.apply(o, n), u = c && o[c], u && u.apply && Pt(o) && (e.result = u.apply(o, n), e.result === !1 && e.preventDefault());
                    return e.type = f, r || e.isDefaultPrevented() || d._default && d._default.apply(h.pop(), n) !== !1 || !Pt(i) || c && pt.isFunction(i[f]) && !pt.isWindow(i) && (a = i[c], a && (i[c] = null), pt.event.triggered = f, i[f](), pt.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            },
            simulate: function (t, e, n) {
                var i = pt.extend(new pt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                pt.event.trigger(i, null, e)
            }
        }), pt.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    pt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return pt.event.trigger(t, e, n, !0)
            }
        }), pt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            pt.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), pt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), ht.focusin = "onfocusin" in t, ht.focusin || pt.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var n = function (t) {
                pt.event.simulate(e, t.target, pt.event.fix(t))
            };
            pt.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = Nt.access(i, e);
                    r || i.addEventListener(t, n, !0), Nt.access(i, e, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = Nt.access(i, e) - 1;
                    r ? Nt.access(i, e, r) : (i.removeEventListener(t, n, !0), Nt.remove(i, e))
                }
            }
        });
        var ke = t.location,
            De = pt.now(),
            Ce = /\?/;
        pt.parseXML = function (e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), n
        };
        var Se = /\[\]$/,
            Te = /\r?\n/g,
            Ae = /^(?:submit|button|image|reset|file)$/i,
            Ee = /^(?:input|select|textarea|keygen)/i;
        pt.param = function (t, e) {
            var n, i = [],
                r = function (t, e) {
                    var n = pt.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function () {
                r(this.name, this.value)
            });
            else
                for (n in t) z(n, t[n], e, r);
            return i.join("&")
        }, pt.fn.extend({
            serialize: function () {
                return pt.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = pt.prop(this, "elements");
                    return t ? pt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !pt(this).is(":disabled") && Ee.test(this.nodeName) && !Ae.test(t) && (this.checked || !Bt.test(t))
                }).map(function (t, e) {
                    var n = pt(this).val();
                    return null == n ? null : pt.isArray(n) ? pt.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Te, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Te, "\r\n")
                    }
                }).get()
            }
        });
        var $e = /%20/g,
            Me = /#.*$/,
            Oe = /([?&])_=[^&]*/,
            Fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ne = /^(?:GET|HEAD)$/,
            Ie = /^\/\//,
            Le = {},
            je = {},
            Re = "*/".concat("*"),
            Ye = et.createElement("a");
        Ye.href = ke.href, pt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ke.href,
                type: "GET",
                isLocal: Pe.test(ke.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Re,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": pt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? K(K(t, pt.ajaxSettings), e) : K(pt.ajaxSettings, t)
            },
            ajaxPrefilter: G(Le),
            ajaxTransport: G(je),
            ajax: function (e, n) {
                function i(e, n, i, a) {
                    var c, h, f, w, _, x = n;
                    u || (u = !0, l && t.clearTimeout(l), r = void 0, o = a || "", k.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = Z(p, k, i)), w = Q(p, w, k, c), c ? (p.ifModified && (_ = k.getResponseHeader("Last-Modified"), _ && (pt.lastModified[s] = _), _ = k.getResponseHeader("etag"), _ && (pt.etag[s] = _)), 204 === e || "HEAD" === p.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, h = w.data, f = w.error, c = !f)) : (f = x, !e && x || (x = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (n || x) + "", c ? v.resolveWith(m, [h, x, k]) : v.rejectWith(m, [k, x, f]), k.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, p, c ? h : f]), y.fireWith(m, [k, x]), d && (g.trigger("ajaxComplete", [k, p]), --pt.active || pt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var r, s, o, a, l, c, u, d, h, f, p = pt.ajaxSetup({}, n),
                    m = p.context || p,
                    g = p.context && (m.nodeType || m.jquery) ? pt(m) : pt.event,
                    v = pt.Deferred(),
                    y = pt.Callbacks("once memory"),
                    b = p.statusCode || {},
                    w = {},
                    _ = {},
                    x = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (u) {
                                if (!a)
                                    for (a = {}; e = Fe.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return u ? o : null
                        },
                        setRequestHeader: function (t, e) {
                            return null == u && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, w[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return null == u && (p.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (u) k.always(t[k.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function (t) {
                            var e = t || x;
                            return r && r.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(k), p.url = ((e || p.url || ke.href) + "").replace(Ie, ke.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match($t) || [""], null == p.crossDomain) {
                    c = et.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = Ye.protocol + "//" + Ye.host != c.protocol + "//" + c.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = pt.param(p.data, p.traditional)), J(Le, p, n, k), u) return k;
                d = pt.event && p.global, d && 0 === pt.active++ && pt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ne.test(p.type), s = p.url.replace(Me, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace($e, "+")) : (f = p.url.slice(s.length), p.data && (s += (Ce.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (s = s.replace(Oe, "$1"), f = (Ce.test(s) ? "&" : "?") + "_=" + De++ + f), p.url = s + f), p.ifModified && (pt.lastModified[s] && k.setRequestHeader("If-Modified-Since", pt.lastModified[s]), pt.etag[s] && k.setRequestHeader("If-None-Match", pt.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : p.accepts["*"]);
                for (h in p.headers) k.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (p.beforeSend.call(m, k, p) === !1 || u)) return k.abort();
                if (x = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), r = J(je, p, n, k)) {
                    if (k.readyState = 1, d && g.trigger("ajaxSend", [k, p]), u) return k;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                        k.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1, r.send(w, i)
                    } catch (t) {
                        if (u) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return k
            },
            getJSON: function (t, e, n) {
                return pt.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return pt.get(t, void 0, e, "script")
            }
        }), pt.each(["get", "post"], function (t, e) {
            pt[e] = function (t, n, i, r) {
                return pt.isFunction(n) && (r = r || i, i = n, n = void 0), pt.ajax(pt.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, pt.isPlainObject(t) && t))
            }
        }), pt._evalUrl = function (t) {
            return pt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, pt.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (pt.isFunction(t) && (t = t.call(this[0])), e = pt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function (t) {
                return pt.isFunction(t) ? this.each(function (e) {
                    pt(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = pt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = pt.isFunction(t);
                return this.each(function (n) {
                    pt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    pt(this).replaceWith(this.childNodes)
                }), this
            }
        }), pt.expr.pseudos.hidden = function (t) {
            return !pt.expr.pseudos.visible(t)
        }, pt.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, pt.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var qe = {
                0: 200,
                1223: 204
            },
            He = pt.ajaxSettings.xhr();
        ht.cors = !!He && "withCredentials" in He, ht.ajax = He = !!He, pt.ajaxTransport(function (e) {
            var n, i;
            if (ht.cors || He && !e.crossDomain) return {
                send: function (r, s) {
                    var o, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) a.setRequestHeader(o, r[o]);
                    n = function (t) {
                        return function () {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(qe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && t.setTimeout(function () {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n) throw t
                    }
                },
                abort: function () {
                    n && n()
                }
            }
        }), pt.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), pt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return pt.globalEval(t), t
                }
            }
        }), pt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), pt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, r) {
                        e = pt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), et.head.appendChild(e[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ue = [],
            We = /(=)\?(?=&|$)|\?\?/;
        pt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ue.pop() || pt.expando + "_" + De++;
                return this[t] = !0, t
            }
        }), pt.ajaxPrefilter("json jsonp", function (e, n, i) {
            var r, s, o, a = e.jsonp !== !1 && (We.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(We, "$1" + r) : e.jsonp !== !1 && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return o || pt.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
                o = arguments
            }, i.always(function () {
                void 0 === s ? pt(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, Ue.push(r)), o && pt.isFunction(s) && s(o[0]), o = s = void 0
            }), "script"
        }), ht.createHTMLDocument = function () {
            var t = et.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), pt.parseHTML = function (t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, r, s;
            return e || (ht.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = et.location.href, e.head.appendChild(i)) : e = et), r = kt.exec(t), s = !n && [], r ? [e.createElement(r[1])] : (r = b([t], e, s), s && s.length && pt(s).remove(), pt.merge([], r.childNodes))
        }, pt.fn.load = function (t, e, n) {
            var i, r, s, o = this,
                a = t.indexOf(" ");
            return a > -1 && (i = B(t.slice(a)), t = t.slice(0, a)), pt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && pt.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                s = arguments, o.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                o.each(function () {
                    n.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            pt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), pt.expr.pseudos.animated = function (t) {
            return pt.grep(pt.timers, function (e) {
                return t === e.elem
            }).length
        }, pt.offset = {
            setOffset: function (t, e, n) {
                var i, r, s, o, a, l, c, u = pt.css(t, "position"),
                    d = pt(t),
                    h = {};
                "static" === u && (t.style.position = "relative"), a = d.offset(), s = pt.css(t, "top"), l = pt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1, c ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : d.css(h)
            }
        }, pt.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    pt.offset.setOffset(this, t, e)
                });
                var e, n, i, r, s = this[0];
                return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), i.width || i.height ? (r = s.ownerDocument, n = X(r), e = r.documentElement, {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === pt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (i = t.offset()), i = {
                        top: i.top + pt.css(t[0], "borderTopWidth", !0),
                        left: i.left + pt.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - i.top - pt.css(n, "marginTop", !0),
                        left: e.left - i.left - pt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === pt.css(t, "position");) t = t.offsetParent;
                    return t || Kt
                })
            }
        }), pt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var n = "pageYOffset" === e;
            pt.fn[t] = function (i) {
                return Ft(this, function (t, i, r) {
                    var s = X(t);
                    return void 0 === r ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r)
                }, t, i, arguments.length)
            }
        }), pt.each(["top", "left"], function (t, e) {
            pt.cssHooks[e] = O(ht.pixelPosition, function (t, n) {
                if (n) return n = M(t, e), oe.test(n) ? pt(t).position()[e] + "px" : n
            })
        }), pt.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            pt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (n, i) {
                pt.fn[i] = function (r, s) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || s === !0 ? "margin" : "border");
                    return Ft(this, function (e, n, r) {
                        var s;
                        return pt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? pt.css(e, n, a) : pt.style(e, n, r, a)
                    }, e, o ? r : void 0, o)
                }
            })
        }), pt.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), pt.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
            return pt
        });
        var Be = t.jQuery,
            Ve = t.$;
        return pt.noConflict = function (e) {
            return t.$ === pt && (t.$ = Ve), e && t.jQuery === pt && (t.jQuery = Be), pt
        }, e || (t.jQuery = t.$ = pt), pt
    }), function () {
        function t(t) {
            function e(e, n, i, r, s, o) {
                for (; s >= 0 && o > s; s += t) {
                    var a = r ? r[s] : s;
                    i = n(i, e[a], a, e)
                }
                return i
            }
            return function (n, i, r, s) {
                i = b(i, s, 4);
                var o = !S(n) && y.keys(n),
                    a = (o || n).length,
                    l = t > 0 ? 0 : a - 1;
                return arguments.length < 3 && (r = n[o ? o[l] : l], l += t), e(n, i, r, o, l, a)
            }
        }

        function e(t) {
            return function (e, n, i) {
                n = w(n, i);
                for (var r = C(e), s = t > 0 ? 0 : r - 1; s >= 0 && r > s; s += t)
                    if (n(e[s], s, e)) return s;
                return -1
            }
        }

        function n(t, e, n) {
            return function (i, r, s) {
                var o = 0,
                    a = C(i);
                if ("number" == typeof s) t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                else if (n && s && a) return s = n(i, r), i[s] === r ? s : -1;
                if (r !== r) return s = e(u.call(i, o, a), y.isNaN), s >= 0 ? s + o : -1;
                for (s = t > 0 ? o : a - 1; s >= 0 && a > s; s += t)
                    if (i[s] === r) return s;
                return -1
            }
        }

        function i(t, e) {
            var n = M.length,
                i = t.constructor,
                r = y.isFunction(i) && i.prototype || a,
                s = "constructor";
            for (y.has(t, s) && !y.contains(e, s) && e.push(s); n--;) s = M[n], s in t && t[s] !== r[s] && !y.contains(e, s) && e.push(s)
        }
        var r = this,
            s = r._,
            o = Array.prototype,
            a = Object.prototype,
            l = Function.prototype,
            c = o.push,
            u = o.slice,
            d = a.toString,
            h = a.hasOwnProperty,
            f = Array.isArray,
            p = Object.keys,
            m = l.bind,
            g = Object.create,
            v = function () {},
            y = function (t) {
                return t instanceof y ? t : this instanceof y ? void(this._wrapped = t) : new y(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
        var b = function (t, e, n) {
                if (void 0 === e) return t;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function (n) {
                            return t.call(e, n)
                        };
                    case 2:
                        return function (n, i) {
                            return t.call(e, n, i)
                        };
                    case 3:
                        return function (n, i, r) {
                            return t.call(e, n, i, r)
                        };
                    case 4:
                        return function (n, i, r, s) {
                            return t.call(e, n, i, r, s)
                        }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            },
            w = function (t, e, n) {
                return null == t ? y.identity : y.isFunction(t) ? b(t, e, n) : y.isObject(t) ? y.matcher(t) : y.property(t)
            };
        y.iteratee = function (t, e) {
            return w(t, e, 1 / 0)
        };
        var _ = function (t, e) {
                return function (n) {
                    var i = arguments.length;
                    if (2 > i || null == n) return n;
                    for (var r = 1; i > r; r++)
                        for (var s = arguments[r], o = t(s), a = o.length, l = 0; a > l; l++) {
                            var c = o[l];
                            e && void 0 !== n[c] || (n[c] = s[c])
                        }
                    return n
                }
            },
            x = function (t) {
                if (!y.isObject(t)) return {};
                if (g) return g(t);
                v.prototype = t;
                var e = new v;
                return v.prototype = null, e
            },
            k = function (t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            },
            D = Math.pow(2, 53) - 1,
            C = k("length"),
            S = function (t) {
                var e = C(t);
                return "number" == typeof e && e >= 0 && D >= e
            };
        y.each = y.forEach = function (t, e, n) {
            e = b(e, n);
            var i, r;
            if (S(t))
                for (i = 0, r = t.length; r > i; i++) e(t[i], i, t);
            else {
                var s = y.keys(t);
                for (i = 0, r = s.length; r > i; i++) e(t[s[i]], s[i], t)
            }
            return t
        }, y.map = y.collect = function (t, e, n) {
            e = w(e, n);
            for (var i = !S(t) && y.keys(t), r = (i || t).length, s = Array(r), o = 0; r > o; o++) {
                var a = i ? i[o] : o;
                s[o] = e(t[a], a, t)
            }
            return s
        }, y.reduce = y.foldl = y.inject = t(1), y.reduceRight = y.foldr = t(-1), y.find = y.detect = function (t, e, n) {
            var i;
            return i = S(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n), void 0 !== i && i !== -1 ? t[i] : void 0
        }, y.filter = y.select = function (t, e, n) {
            var i = [];
            return e = w(e, n), y.each(t, function (t, n, r) {
                e(t, n, r) && i.push(t)
            }), i
        }, y.reject = function (t, e, n) {
            return y.filter(t, y.negate(w(e)), n)
        }, y.every = y.all = function (t, e, n) {
            e = w(e, n);
            for (var i = !S(t) && y.keys(t), r = (i || t).length, s = 0; r > s; s++) {
                var o = i ? i[s] : s;
                if (!e(t[o], o, t)) return !1
            }
            return !0
        }, y.some = y.any = function (t, e, n) {
            e = w(e, n);
            for (var i = !S(t) && y.keys(t), r = (i || t).length, s = 0; r > s; s++) {
                var o = i ? i[s] : s;
                if (e(t[o], o, t)) return !0
            }
            return !1
        }, y.contains = y.includes = y.include = function (t, e, n, i) {
            return S(t) || (t = y.values(t)), ("number" != typeof n || i) && (n = 0), y.indexOf(t, e, n) >= 0
        }, y.invoke = function (t, e) {
            var n = u.call(arguments, 2),
                i = y.isFunction(e);
            return y.map(t, function (t) {
                var r = i ? e : t[e];
                return null == r ? r : r.apply(t, n)
            })
        }, y.pluck = function (t, e) {
            return y.map(t, y.property(e))
        }, y.where = function (t, e) {
            return y.filter(t, y.matcher(e))
        }, y.findWhere = function (t, e) {
            return y.find(t, y.matcher(e))
        }, y.max = function (t, e, n) {
            var i, r, s = -1 / 0,
                o = -1 / 0;
            if (null == e && null != t) {
                t = S(t) ? t : y.values(t);
                for (var a = 0, l = t.length; l > a; a++) i = t[a], i > s && (s = i)
            } else e = w(e, n), y.each(t, function (t, n, i) {
                r = e(t, n, i), (r > o || r === -1 / 0 && s === -1 / 0) && (s = t, o = r)
            });
            return s
        }, y.min = function (t, e, n) {
            var i, r, s = 1 / 0,
                o = 1 / 0;
            if (null == e && null != t) {
                t = S(t) ? t : y.values(t);
                for (var a = 0, l = t.length; l > a; a++) i = t[a], s > i && (s = i)
            } else e = w(e, n), y.each(t, function (t, n, i) {
                r = e(t, n, i), (o > r || 1 / 0 === r && 1 / 0 === s) && (s = t, o = r)
            });
            return s
        }, y.shuffle = function (t) {
            for (var e, n = S(t) ? t : y.values(t), i = n.length, r = Array(i), s = 0; i > s; s++) e = y.random(0, s), e !== s && (r[s] = r[e]), r[e] = n[s];
            return r
        }, y.sample = function (t, e, n) {
            return null == e || n ? (S(t) || (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
        }, y.sortBy = function (t, e, n) {
            return e = w(e, n), y.pluck(y.map(t, function (t, n, i) {
                return {
                    value: t,
                    index: n,
                    criteria: e(t, n, i)
                }
            }).sort(function (t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        };
        var T = function (t) {
            return function (e, n, i) {
                var r = {};
                return n = w(n, i), y.each(e, function (i, s) {
                    var o = n(i, s, e);
                    t(r, i, o)
                }), r
            }
        };
        y.groupBy = T(function (t, e, n) {
            y.has(t, n) ? t[n].push(e) : t[n] = [e]
        }), y.indexBy = T(function (t, e, n) {
            t[n] = e
        }), y.countBy = T(function (t, e, n) {
            y.has(t, n) ? t[n]++ : t[n] = 1
        }), y.toArray = function (t) {
            return t ? y.isArray(t) ? u.call(t) : S(t) ? y.map(t, y.identity) : y.values(t) : []
        }, y.size = function (t) {
            return null == t ? 0 : S(t) ? t.length : y.keys(t).length
        }, y.partition = function (t, e, n) {
            e = w(e, n);
            var i = [],
                r = [];
            return y.each(t, function (t, n, s) {
                (e(t, n, s) ? i : r).push(t)
            }), [i, r]
        }, y.first = y.head = y.take = function (t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : y.initial(t, t.length - e)
        }, y.initial = function (t, e, n) {
            return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
        }, y.last = function (t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e))
        }, y.rest = y.tail = y.drop = function (t, e, n) {
            return u.call(t, null == e || n ? 1 : e)
        }, y.compact = function (t) {
            return y.filter(t, y.identity)
        };
        var A = function (t, e, n, i) {
            for (var r = [], s = 0, o = i || 0, a = C(t); a > o; o++) {
                var l = t[o];
                if (S(l) && (y.isArray(l) || y.isArguments(l))) {
                    e || (l = A(l, e, n));
                    var c = 0,
                        u = l.length;
                    for (r.length += u; u > c;) r[s++] = l[c++]
                } else n || (r[s++] = l)
            }
            return r
        };
        y.flatten = function (t, e) {
            return A(t, e, !1)
        }, y.without = function (t) {
            return y.difference(t, u.call(arguments, 1))
        }, y.uniq = y.unique = function (t, e, n, i) {
            y.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = w(n, i));
            for (var r = [], s = [], o = 0, a = C(t); a > o; o++) {
                var l = t[o],
                    c = n ? n(l, o, t) : l;
                e ? (o && s === c || r.push(l), s = c) : n ? y.contains(s, c) || (s.push(c), r.push(l)) : y.contains(r, l) || r.push(l)
            }
            return r
        }, y.union = function () {
            return y.uniq(A(arguments, !0, !0))
        }, y.intersection = function (t) {
            for (var e = [], n = arguments.length, i = 0, r = C(t); r > i; i++) {
                var s = t[i];
                if (!y.contains(e, s)) {
                    for (var o = 1; n > o && y.contains(arguments[o], s); o++);
                    o === n && e.push(s)
                }
            }
            return e
        }, y.difference = function (t) {
            var e = A(arguments, !0, !0, 1);
            return y.filter(t, function (t) {
                return !y.contains(e, t)
            })
        }, y.zip = function () {
            return y.unzip(arguments)
        }, y.unzip = function (t) {
            for (var e = t && y.max(t, C).length || 0, n = Array(e), i = 0; e > i; i++) n[i] = y.pluck(t, i);
            return n
        }, y.object = function (t, e) {
            for (var n = {}, i = 0, r = C(t); r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, y.findIndex = e(1), y.findLastIndex = e(-1), y.sortedIndex = function (t, e, n, i) {
            n = w(n, i, 1);
            for (var r = n(e), s = 0, o = C(t); o > s;) {
                var a = Math.floor((s + o) / 2);
                n(t[a]) < r ? s = a + 1 : o = a
            }
            return s
        }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function (t, e, n) {
            null == e && (e = t || 0, t = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), s = 0; i > s; s++, t += n) r[s] = t;
            return r
        };
        var E = function (t, e, n, i, r) {
            if (!(i instanceof e)) return t.apply(n, r);
            var s = x(t.prototype),
                o = t.apply(s, r);
            return y.isObject(o) ? o : s
        };
        y.bind = function (t, e) {
            if (m && t.bind === m) return m.apply(t, u.call(arguments, 1));
            if (!y.isFunction(t)) throw new TypeError("Bind must be called on a function");
            var n = u.call(arguments, 2),
                i = function () {
                    return E(t, i, e, this, n.concat(u.call(arguments)))
                };
            return i
        }, y.partial = function (t) {
            var e = u.call(arguments, 1),
                n = function () {
                    for (var i = 0, r = e.length, s = Array(r), o = 0; r > o; o++) s[o] = e[o] === y ? arguments[i++] : e[o];
                    for (; i < arguments.length;) s.push(arguments[i++]);
                    return E(t, n, this, this, s)
                };
            return n
        }, y.bindAll = function (t) {
            var e, n, i = arguments.length;
            if (1 >= i) throw new Error("bindAll must be passed function names");
            for (e = 1; i > e; e++) n = arguments[e], t[n] = y.bind(t[n], t);
            return t
        }, y.memoize = function (t, e) {
            var n = function (i) {
                var r = n.cache,
                    s = "" + (e ? e.apply(this, arguments) : i);
                return y.has(r, s) || (r[s] = t.apply(this, arguments)),
                    r[s]
            };
            return n.cache = {}, n
        }, y.delay = function (t, e) {
            var n = u.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, y.defer = y.partial(y.delay, y, 1), y.throttle = function (t, e, n) {
            var i, r, s, o = null,
                a = 0;
            n || (n = {});
            var l = function () {
                a = n.leading === !1 ? 0 : y.now(), o = null, s = t.apply(i, r), o || (i = r = null)
            };
            return function () {
                var c = y.now();
                a || n.leading !== !1 || (a = c);
                var u = e - (c - a);
                return i = this, r = arguments, 0 >= u || u > e ? (o && (clearTimeout(o), o = null), a = c, s = t.apply(i, r), o || (i = r = null)) : o || n.trailing === !1 || (o = setTimeout(l, u)), s
            }
        }, y.debounce = function (t, e, n) {
            var i, r, s, o, a, l = function () {
                var c = y.now() - o;
                e > c && c >= 0 ? i = setTimeout(l, e - c) : (i = null, n || (a = t.apply(s, r), i || (s = r = null)))
            };
            return function () {
                s = this, r = arguments, o = y.now();
                var c = n && !i;
                return i || (i = setTimeout(l, e)), c && (a = t.apply(s, r), s = r = null), a
            }
        }, y.wrap = function (t, e) {
            return y.partial(e, t)
        }, y.negate = function (t) {
            return function () {
                return !t.apply(this, arguments)
            }
        }, y.compose = function () {
            var t = arguments,
                e = t.length - 1;
            return function () {
                for (var n = e, i = t[e].apply(this, arguments); n--;) i = t[n].call(this, i);
                return i
            }
        }, y.after = function (t, e) {
            return function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, y.before = function (t, e) {
            var n;
            return function () {
                return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = null), n
            }
        }, y.once = y.partial(y.before, 2);
        var $ = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        y.keys = function (t) {
            if (!y.isObject(t)) return [];
            if (p) return p(t);
            var e = [];
            for (var n in t) y.has(t, n) && e.push(n);
            return $ && i(t, e), e
        }, y.allKeys = function (t) {
            if (!y.isObject(t)) return [];
            var e = [];
            for (var n in t) e.push(n);
            return $ && i(t, e), e
        }, y.values = function (t) {
            for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
            return i
        }, y.mapObject = function (t, e, n) {
            e = w(e, n);
            for (var i, r = y.keys(t), s = r.length, o = {}, a = 0; s > a; a++) i = r[a], o[i] = e(t[i], i, t);
            return o
        }, y.pairs = function (t) {
            for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
            return i
        }, y.invert = function (t) {
            for (var e = {}, n = y.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
            return e
        }, y.functions = y.methods = function (t) {
            var e = [];
            for (var n in t) y.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, y.extend = _(y.allKeys), y.extendOwn = y.assign = _(y.keys), y.findKey = function (t, e, n) {
            e = w(e, n);
            for (var i, r = y.keys(t), s = 0, o = r.length; o > s; s++)
                if (i = r[s], e(t[i], i, t)) return i
        }, y.pick = function (t, e, n) {
            var i, r, s = {},
                o = t;
            if (null == o) return s;
            y.isFunction(e) ? (r = y.allKeys(o), i = b(e, n)) : (r = A(arguments, !1, !1, 1), i = function (t, e, n) {
                return e in n
            }, o = Object(o));
            for (var a = 0, l = r.length; l > a; a++) {
                var c = r[a],
                    u = o[c];
                i(u, c, o) && (s[c] = u)
            }
            return s
        }, y.omit = function (t, e, n) {
            if (y.isFunction(e)) e = y.negate(e);
            else {
                var i = y.map(A(arguments, !1, !1, 1), String);
                e = function (t, e) {
                    return !y.contains(i, e)
                }
            }
            return y.pick(t, e, n)
        }, y.defaults = _(y.allKeys, !0), y.create = function (t, e) {
            var n = x(t);
            return e && y.extendOwn(n, e), n
        }, y.clone = function (t) {
            return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
        }, y.tap = function (t, e) {
            return e(t), t
        }, y.isMatch = function (t, e) {
            var n = y.keys(e),
                i = n.length;
            if (null == t) return !i;
            for (var r = Object(t), s = 0; i > s; s++) {
                var o = n[s];
                if (e[o] !== r[o] || !(o in r)) return !1
            }
            return !0
        };
        var O = function (t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t === 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
            var r = d.call(t);
            if (r !== d.call(e)) return !1;
            switch (r) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + t == "" + e;
                case "[object Number]":
                    return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t === +e
            }
            var s = "[object Array]" === r;
            if (!s) {
                if ("object" != typeof t || "object" != typeof e) return !1;
                var o = t.constructor,
                    a = e.constructor;
                if (o !== a && !(y.isFunction(o) && o instanceof o && y.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
            }
            n = n || [], i = i || [];
            for (var l = n.length; l--;)
                if (n[l] === t) return i[l] === e;
            if (n.push(t), i.push(e), s) {
                if (l = t.length, l !== e.length) return !1;
                for (; l--;)
                    if (!O(t[l], e[l], n, i)) return !1
            } else {
                var c, u = y.keys(t);
                if (l = u.length, y.keys(e).length !== l) return !1;
                for (; l--;)
                    if (c = u[l], !y.has(e, c) || !O(t[c], e[c], n, i)) return !1
            }
            return n.pop(), i.pop(), !0
        };
        y.isEqual = function (t, e) {
            return O(t, e)
        }, y.isEmpty = function (t) {
            return null == t || (S(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length)
        }, y.isElement = function (t) {
            return !(!t || 1 !== t.nodeType)
        }, y.isArray = f || function (t) {
            return "[object Array]" === d.call(t)
        }, y.isObject = function (t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
            y["is" + t] = function (e) {
                return d.call(e) === "[object " + t + "]"
            }
        }), y.isArguments(arguments) || (y.isArguments = function (t) {
            return y.has(t, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function (t) {
            return "function" == typeof t || !1
        }), y.isFinite = function (t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, y.isNaN = function (t) {
            return y.isNumber(t) && t !== +t
        }, y.isBoolean = function (t) {
            return t === !0 || t === !1 || "[object Boolean]" === d.call(t)
        }, y.isNull = function (t) {
            return null === t
        }, y.isUndefined = function (t) {
            return void 0 === t
        }, y.has = function (t, e) {
            return null != t && h.call(t, e)
        }, y.noConflict = function () {
            return r._ = s, this
        }, y.identity = function (t) {
            return t
        }, y.constant = function (t) {
            return function () {
                return t
            }
        }, y.noop = function () {}, y.property = k, y.propertyOf = function (t) {
            return null == t ? function () {} : function (e) {
                return t[e]
            }
        }, y.matcher = y.matches = function (t) {
            return t = y.extendOwn({}, t),
                function (e) {
                    return y.isMatch(e, t)
                }
        }, y.times = function (t, e, n) {
            var i = Array(Math.max(0, t));
            e = b(e, n, 1);
            for (var r = 0; t > r; r++) i[r] = e(r);
            return i
        }, y.random = function (t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, y.now = Date.now || function () {
            return (new Date).getTime()
        };
        var F = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            P = y.invert(F),
            N = function (t) {
                var e = function (e) {
                        return t[e]
                    },
                    n = "(?:" + y.keys(t).join("|") + ")",
                    i = RegExp(n),
                    r = RegExp(n, "g");
                return function (t) {
                    return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
                }
            };
        y.escape = N(F), y.unescape = N(P), y.result = function (t, e, n) {
            var i = null == t ? void 0 : t[e];
            return void 0 === i && (i = n), y.isFunction(i) ? i.call(t) : i
        };
        var I = 0;
        y.uniqueId = function (t) {
            var e = ++I + "";
            return t ? t + e : e
        }, y.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var L = /(.)^/,
            j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            R = /\\|'|\r|\n|\u2028|\u2029/g,
            Y = function (t) {
                return "\\" + j[t]
            };
        y.template = function (t, e, n) {
            !e && n && (e = n), e = y.defaults({}, e, y.templateSettings);
            var i = RegExp([(e.escape || L).source, (e.interpolate || L).source, (e.evaluate || L).source].join("|") + "|$", "g"),
                r = 0,
                s = "__p+='";
            t.replace(i, function (e, n, i, o, a) {
                return s += t.slice(r, a).replace(R, Y), r = a + e.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e
            }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var o = new Function(e.variable || "obj", "_", s)
            } catch (t) {
                throw t.source = s, t
            }
            var a = function (t) {
                    return o.call(this, t, y)
                },
                l = e.variable || "obj";
            return a.source = "function(" + l + "){\n" + s + "}", a
        }, y.chain = function (t) {
            var e = y(t);
            return e._chain = !0, e
        };
        var q = function (t, e) {
            return t._chain ? y(e).chain() : e
        };
        y.mixin = function (t) {
            y.each(y.functions(t), function (e) {
                var n = y[e] = t[e];
                y.prototype[e] = function () {
                    var t = [this._wrapped];
                    return c.apply(t, arguments), q(this, n.apply(y, t))
                }
            })
        }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var e = o[t];
            y.prototype[t] = function () {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], q(this, n)
            }
        }), y.each(["concat", "join", "slice"], function (t) {
            var e = o[t];
            y.prototype[t] = function () {
                return q(this, e.apply(this._wrapped, arguments))
            }
        }), y.prototype.value = function () {
            return this._wrapped
        }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function () {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function () {
            return y
        })
    }.call(this), function (t) {
        var e = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
        if ("function" == typeof define && define.amd) define("backbone", ["underscore", "jquery", "exports"], function (n, i, r) {
            e.Backbone = t(e, r, n, i)
        });
        else if ("undefined" != typeof exports) {
            var n, i = require("underscore");
            try {
                n = require("jquery")
            } catch (t) {}
            t(e, exports, i, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(function (t, e, n, i) {
        var r = t.Backbone,
            s = Array.prototype.slice;
        e.VERSION = "1.3.3", e.$ = i, e.noConflict = function () {
            return t.Backbone = r, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var o = function (t, e, i) {
                switch (t) {
                    case 1:
                        return function () {
                            return n[e](this[i])
                        };
                    case 2:
                        return function (t) {
                            return n[e](this[i], t)
                        };
                    case 3:
                        return function (t, r) {
                            return n[e](this[i], l(t, this), r)
                        };
                    case 4:
                        return function (t, r, s) {
                            return n[e](this[i], l(t, this), r, s)
                        };
                    default:
                        return function () {
                            var t = s.call(arguments);
                            return t.unshift(this[i]), n[e].apply(n, t)
                        }
                }
            },
            a = function (t, e, i) {
                n.each(e, function (e, r) {
                    n[r] && (t.prototype[r] = o(e, r, i))
                })
            },
            l = function (t, e) {
                return n.isFunction(t) ? t : n.isObject(t) && !e._isModel(t) ? c(t) : n.isString(t) ? function (e) {
                    return e.get(t)
                } : t
            },
            c = function (t) {
                var e = n.matches(t);
                return function (t) {
                    return e(t.attributes)
                }
            },
            u = e.Events = {},
            d = /\s+/,
            h = function (t, e, i, r, s) {
                var o, a = 0;
                if (i && "object" == typeof i) {
                    void 0 !== r && "context" in s && void 0 === s.context && (s.context = r);
                    for (o = n.keys(i); a < o.length; a++) e = h(t, e, o[a], i[o[a]], s)
                } else if (i && d.test(i))
                    for (o = i.split(d); a < o.length; a++) e = t(e, o[a], r, s);
                else e = t(e, i, r, s);
                return e
            };
        u.on = function (t, e, n) {
            return f(this, t, e, n)
        };
        var f = function (t, e, n, i, r) {
            if (t._events = h(p, t._events || {}, e, n, {
                    context: i,
                    ctx: t,
                    listening: r
                }), r) {
                var s = t._listeners || (t._listeners = {});
                s[r.id] = r
            }
            return t
        };
        u.listenTo = function (t, e, i) {
            if (!t) return this;
            var r = t._listenId || (t._listenId = n.uniqueId("l")),
                s = this._listeningTo || (this._listeningTo = {}),
                o = s[r];
            if (!o) {
                var a = this._listenId || (this._listenId = n.uniqueId("l"));
                o = s[r] = {
                    obj: t,
                    objId: r,
                    id: a,
                    listeningTo: s,
                    count: 0
                }
            }
            return f(t, e, i, this, o), this
        };
        var p = function (t, e, n, i) {
            if (n) {
                var r = t[e] || (t[e] = []),
                    s = i.context,
                    o = i.ctx,
                    a = i.listening;
                a && a.count++, r.push({
                    callback: n,
                    context: s,
                    ctx: s || o,
                    listening: a
                })
            }
            return t
        };
        u.off = function (t, e, n) {
            return this._events ? (this._events = h(m, this._events, t, e, {
                context: n,
                listeners: this._listeners
            }), this) : this
        }, u.stopListening = function (t, e, i) {
            var r = this._listeningTo;
            if (!r) return this;
            for (var s = t ? [t._listenId] : n.keys(r), o = 0; o < s.length; o++) {
                var a = r[s[o]];
                if (!a) break;
                a.obj.off(e, i, this)
            }
            return this
        };
        var m = function (t, e, i, r) {
            if (t) {
                var s, o = 0,
                    a = r.context,
                    l = r.listeners;
                if (e || i || a) {
                    for (var c = e ? [e] : n.keys(t); o < c.length; o++) {
                        e = c[o];
                        var u = t[e];
                        if (!u) break;
                        for (var d = [], h = 0; h < u.length; h++) {
                            var f = u[h];
                            i && i !== f.callback && i !== f.callback._callback || a && a !== f.context ? d.push(f) : (s = f.listening, s && 0 === --s.count && (delete l[s.id], delete s.listeningTo[s.objId]))
                        }
                        d.length ? t[e] = d : delete t[e]
                    }
                    return t
                }
                for (var p = n.keys(l); o < p.length; o++) s = l[p[o]], delete l[s.id], delete s.listeningTo[s.objId]
            }
        };
        u.once = function (t, e, i) {
            var r = h(g, {}, t, e, n.bind(this.off, this));
            return "string" == typeof t && null == i && (e = void 0), this.on(r, e, i)
        }, u.listenToOnce = function (t, e, i) {
            var r = h(g, {}, e, i, n.bind(this.stopListening, this, t));
            return this.listenTo(t, r)
        };
        var g = function (t, e, i, r) {
            if (i) {
                var s = t[e] = n.once(function () {
                    r(e, s), i.apply(this, arguments)
                });
                s._callback = i
            }
            return t
        };
        u.trigger = function (t) {
            if (!this._events) return this;
            for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; i < e; i++) n[i] = arguments[i + 1];
            return h(v, this._events, t, void 0, n), this
        };
        var v = function (t, e, n, i) {
                if (t) {
                    var r = t[e],
                        s = t.all;
                    r && s && (s = s.slice()), r && y(r, i), s && y(s, [e].concat(i))
                }
                return t
            },
            y = function (t, e) {
                var n, i = -1,
                    r = t.length,
                    s = e[0],
                    o = e[1],
                    a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s);
                        return;
                    case 2:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o);
                        return;
                    case 3:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o, a);
                        return;
                    default:
                        for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e);
                        return
                }
            };
        u.bind = u.on, u.unbind = u.off, n.extend(e, u);
        var b = e.Model = function (t, e) {
            var i = t || {};
            e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {});
            var r = n.result(this, "defaults");
            i = n.defaults(n.extend({}, r, i), r), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(b.prototype, u, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function () {},
            toJSON: function (t) {
                return n.clone(this.attributes)
            },
            sync: function () {
                return e.sync.apply(this, arguments)
            },
            get: function (t) {
                return this.attributes[t]
            },
            escape: function (t) {
                return n.escape(this.get(t))
            },
            has: function (t) {
                return null != this.get(t)
            },
            matches: function (t) {
                return !!n.iteratee(t, this)(this.attributes)
            },
            set: function (t, e, i) {
                if (null == t) return this;
                var r;
                if ("object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i || (i = {}), !this._validate(r, i)) return !1;
                var s = i.unset,
                    o = i.silent,
                    a = [],
                    l = this._changing;
                this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
                var c = this.attributes,
                    u = this.changed,
                    d = this._previousAttributes;
                for (var h in r) e = r[h], n.isEqual(c[h], e) || a.push(h), n.isEqual(d[h], e) ? delete u[h] : u[h] = e, s ? delete c[h] : c[h] = e;
                if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !o) {
                    a.length && (this._pending = i);
                    for (var f = 0; f < a.length; f++) this.trigger("change:" + a[f], this, c[a[f]], i)
                }
                if (l) return this;
                if (!o)
                    for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function (t, e) {
                return this.set(t, void 0, n.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function (t) {
                var e = {};
                for (var i in this.attributes) e[i] = void 0;
                return this.set(e, n.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function (t) {
                return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
            },
            changedAttributes: function (t) {
                if (!t) return !!this.hasChanged() && n.clone(this.changed);
                var e = this._changing ? this._previousAttributes : this.attributes,
                    i = {};
                for (var r in t) {
                    var s = t[r];
                    n.isEqual(e[r], s) || (i[r] = s)
                }
                return !!n.size(i) && i
            },
            previous: function (t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function () {
                return n.clone(this._previousAttributes)
            },
            fetch: function (t) {
                t = n.extend({
                    parse: !0
                }, t);
                var e = this,
                    i = t.success;
                return t.success = function (n) {
                    var r = t.parse ? e.parse(n, t) : n;
                    return !!e.set(r, t) && (i && i.call(t.context, e, n, t), void e.trigger("sync", e, n, t))
                }, q(this, t), this.sync("read", this, t)
            },
            save: function (t, e, i) {
                var r;
                null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                    validate: !0,
                    parse: !0
                }, i);
                var s = i.wait;
                if (r && !s) {
                    if (!this.set(r, i)) return !1
                } else if (!this._validate(r, i)) return !1;
                var o = this,
                    a = i.success,
                    l = this.attributes;
                i.success = function (t) {
                    o.attributes = l;
                    var e = i.parse ? o.parse(t, i) : t;
                    return s && (e = n.extend({}, r, e)), !(e && !o.set(e, i)) && (a && a.call(i.context, o, t, i), void o.trigger("sync", o, t, i))
                }, q(this, i), r && s && (this.attributes = n.extend({}, l, r));
                var c = this.isNew() ? "create" : i.patch ? "patch" : "update";
                "patch" !== c || i.attrs || (i.attrs = r);
                var u = this.sync(c, this, i);
                return this.attributes = l, u
            },
            destroy: function (t) {
                t = t ? n.clone(t) : {};
                var e = this,
                    i = t.success,
                    r = t.wait,
                    s = function () {
                        e.stopListening(), e.trigger("destroy", e, e.collection, t)
                    };
                t.success = function (n) {
                    r && s(), i && i.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t)
                };
                var o = !1;
                return this.isNew() ? n.defer(t.success) : (q(this, t), o = this.sync("delete", this, t)), r || s(), o
            },
            url: function () {
                var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || Y();
                if (this.isNew()) return t;
                var e = this.get(this.idAttribute);
                return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
            },
            parse: function (t, e) {
                return t
            },
            clone: function () {
                return new this.constructor(this.attributes)
            },
            isNew: function () {
                return !this.has(this.idAttribute)
            },
            isValid: function (t) {
                return this._validate({}, n.extend({}, t, {
                    validate: !0
                }))
            },
            _validate: function (t, e) {
                if (!e.validate || !this.validate) return !0;
                t = n.extend({}, this.attributes, t);
                var i = this.validationError = this.validate(t, e) || null;
                return !i || (this.trigger("invalid", this, i, n.extend(e, {
                    validationError: i
                })), !1)
            }
        });
        var w = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        a(b, w, "attributes");
        var _ = e.Collection = function (t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
                    silent: !0
                }, e))
            },
            x = {
                add: !0,
                remove: !0,
                merge: !0
            },
            k = {
                add: !0,
                remove: !1
            },
            D = function (t, e, n) {
                n = Math.min(Math.max(n, 0), t.length);
                var i, r = Array(t.length - n),
                    s = e.length;
                for (i = 0; i < r.length; i++) r[i] = t[i + n];
                for (i = 0; i < s; i++) t[i + n] = e[i];
                for (i = 0; i < r.length; i++) t[i + s + n] = r[i]
            };
        n.extend(_.prototype, u, {
            model: b,
            initialize: function () {},
            toJSON: function (t) {
                return this.map(function (e) {
                    return e.toJSON(t)
                })
            },
            sync: function () {
                return e.sync.apply(this, arguments)
            },
            add: function (t, e) {
                return this.set(t, n.extend({
                    merge: !1
                }, e, k))
            },
            remove: function (t, e) {
                e = n.extend({}, e);
                var i = !n.isArray(t);
                t = i ? [t] : t.slice();
                var r = this._removeModels(t, e);
                return !e.silent && r.length && (e.changes = {
                    added: [],
                    merged: [],
                    removed: r
                }, this.trigger("update", this, e)), i ? r[0] : r
            },
            set: function (t, e) {
                if (null != t) {
                    e = n.extend({}, x, e), e.parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                    var i = !n.isArray(t);
                    t = i ? [t] : t.slice();
                    var r = e.at;
                    null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                    var s, o, a = [],
                        l = [],
                        c = [],
                        u = [],
                        d = {},
                        h = e.add,
                        f = e.merge,
                        p = e.remove,
                        m = !1,
                        g = this.comparator && null == r && e.sort !== !1,
                        v = n.isString(this.comparator) ? this.comparator : null;
                    for (o = 0; o < t.length; o++) {
                        s = t[o];
                        var y = this.get(s);
                        if (y) {
                            if (f && s !== y) {
                                var b = this._isModel(s) ? s.attributes : s;
                                e.parse && (b = y.parse(b, e)), y.set(b, e), c.push(y), g && !m && (m = y.hasChanged(v))
                            }
                            d[y.cid] || (d[y.cid] = !0, a.push(y)), t[o] = y
                        } else h && (s = t[o] = this._prepareModel(s, e), s && (l.push(s), this._addReference(s, e), d[s.cid] = !0, a.push(s)))
                    }
                    if (p) {
                        for (o = 0; o < this.length; o++) s = this.models[o], d[s.cid] || u.push(s);
                        u.length && this._removeModels(u, e)
                    }
                    var w = !1,
                        _ = !g && h && p;
                    if (a.length && _ ? (w = this.length !== a.length || n.some(this.models, function (t, e) {
                            return t !== a[e]
                        }), this.models.length = 0, D(this.models, a, 0), this.length = this.models.length) : l.length && (g && (m = !0), D(this.models, l, null == r ? this.length : r), this.length = this.models.length), m && this.sort({
                            silent: !0
                        }), !e.silent) {
                        for (o = 0; o < l.length; o++) null != r && (e.index = r + o), s = l[o], s.trigger("add", s, this, e);
                        (m || w) && this.trigger("sort", this, e), (l.length || u.length || c.length) && (e.changes = {
                            added: l,
                            removed: u,
                            merged: c
                        }, this.trigger("update", this, e))
                    }
                    return i ? t[0] : t
                }
            },
            reset: function (t, e) {
                e = e ? n.clone(e) : {};
                for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], e);
                return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function (t, e) {
                return this.add(t, n.extend({
                    at: this.length
                }, e))
            },
            pop: function (t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t)
            },
            unshift: function (t, e) {
                return this.add(t, n.extend({
                    at: 0
                }, e))
            },
            shift: function (t) {
                var e = this.at(0);
                return this.remove(e, t)
            },
            slice: function () {
                return s.apply(this.models, arguments)
            },
            get: function (t) {
                if (null != t) return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid]
            },
            has: function (t) {
                return null != this.get(t)
            },
            at: function (t) {
                return t < 0 && (t += this.length), this.models[t]
            },
            where: function (t, e) {
                return this[e ? "find" : "filter"](t)
            },
            findWhere: function (t) {
                return this.where(t, !0)
            },
            sort: function (t) {
                var e = this.comparator;
                if (!e) throw new Error("Cannot sort a set without a comparator");
                t || (t = {});
                var i = e.length;
                return n.isFunction(e) && (e = n.bind(e, this)), 1 === i || n.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function (t) {
                return this.map(t + "")
            },
            fetch: function (t) {
                t = n.extend({
                    parse: !0
                }, t);
                var e = t.success,
                    i = this;
                return t.success = function (n) {
                    var r = t.reset ? "reset" : "set";
                    i[r](n, t), e && e.call(t.context, i, n, t), i.trigger("sync", i, n, t)
                }, q(this, t), this.sync("read", this, t)
            },
            create: function (t, e) {
                e = e ? n.clone(e) : {};
                var i = e.wait;
                if (t = this._prepareModel(t, e), !t) return !1;
                i || this.add(t, e);
                var r = this,
                    s = e.success;
                return e.success = function (t, e, n) {
                    i && r.add(t, n), s && s.call(n.context, t, e, n)
                }, t.save(null, e), t
            },
            parse: function (t, e) {
                return t
            },
            clone: function () {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function (t) {
                return t[this.model.prototype.idAttribute || "id"]
            },
            _reset: function () {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function (t, e) {
                if (this._isModel(t)) return t.collection || (t.collection = this), t;
                e = e ? n.clone(e) : {}, e.collection = this;
                var i = new this.model(t, e);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
            },
            _removeModels: function (t, e) {
                for (var n = [], i = 0; i < t.length; i++) {
                    var r = this.get(t[i]);
                    if (r) {
                        var s = this.indexOf(r);
                        this.models.splice(s, 1), this.length--, delete this._byId[r.cid];
                        var o = this.modelId(r.attributes);
                        null != o && delete this._byId[o], e.silent || (e.index = s, r.trigger("remove", r, this, e)), n.push(r), this._removeReference(r, e)
                    }
                }
                return n
            },
            _isModel: function (t) {
                return t instanceof b
            },
            _addReference: function (t, e) {
                this._byId[t.cid] = t;
                var n = this.modelId(t.attributes);
                null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this)
            },
            _removeReference: function (t, e) {
                delete this._byId[t.cid];
                var n = this.modelId(t.attributes);
                null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function (t, e, n, i) {
                if (e) {
                    if (("add" === t || "remove" === t) && n !== this) return;
                    if ("destroy" === t && this.remove(e, i), "change" === t) {
                        var r = this.modelId(e.previousAttributes()),
                            s = this.modelId(e.attributes);
                        r !== s && (null != r && delete this._byId[r], null != s && (this._byId[s] = e))
                    }
                }
                this.trigger.apply(this, arguments)
            }
        });
        var C = {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3
        };
        a(_, C, "models");
        var S = e.View = function (t) {
                this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, A)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            T = /^(\S+)\s*(.*)$/,
            A = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(S.prototype, u, {
            tagName: "div",
            $: function (t) {
                return this.$el.find(t)
            },
            initialize: function () {},
            render: function () {
                return this
            },
            remove: function () {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function () {
                this.$el.remove()
            },
            setElement: function (t) {
                return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
            },
            _setElement: function (t) {
                this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
            },
            delegateEvents: function (t) {
                if (t || (t = n.result(this, "events")), !t) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var i = t[e];
                    if (n.isFunction(i) || (i = this[i]), i) {
                        var r = e.match(T);
                        this.delegate(r[1], r[2], n.bind(i, this))
                    }
                }
                return this
            },
            delegate: function (t, e, n) {
                return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
            },
            undelegateEvents: function () {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function (t, e, n) {
                return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
            },
            _createElement: function (t) {
                return document.createElement(t)
            },
            _ensureElement: function () {
                if (this.el) this.setElement(n.result(this, "el"));
                else {
                    var t = n.extend({}, n.result(this, "attributes"));
                    this.id && (t.id = n.result(this, "id")), this.className && (t.class = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t)
                }
            },
            _setAttributes: function (t) {
                this.$el.attr(t)
            }
        }), e.sync = function (t, i, r) {
            var s = E[t];
            n.defaults(r || (r = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            if (r.url || (o.url = n.result(i, "url") || Y()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                    model: o.data
                } : {}), r.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
                o.type = "POST", r.emulateJSON && (o.data._method = s);
                var a = r.beforeSend;
                r.beforeSend = function (t) {
                    if (t.setRequestHeader("X-HTTP-Method-Override", s), a) return a.apply(this, arguments)
                }
            }
            "GET" === o.type || r.emulateJSON || (o.processData = !1);
            var l = r.error;
            r.error = function (t, e, n) {
                r.textStatus = e, r.errorThrown = n, l && l.call(r.context, t, e, n)
            };
            var c = r.xhr = e.ajax(n.extend(o, r));
            return i.trigger("request", i, c, r), c
        };
        var E = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        e.ajax = function () {
            return e.$.ajax.apply(e.$, arguments)
        };
        var $ = e.Router = function (t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            M = /\((.*?)\)/g,
            O = /(\(\?)?:\w+/g,
            F = /\*\w+/g,
            P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend($.prototype, u, {
            initialize: function () {},
            route: function (t, i, r) {
                n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                var s = this;
                return e.history.route(t, function (n) {
                    var o = s._extractParameters(t, n);
                    s.execute(r, o, i) !== !1 && (s.trigger.apply(s, ["route:" + i].concat(o)), s.trigger("route", i, o), e.history.trigger("route", s, i, o))
                }), this
            },
            execute: function (t, e, n) {
                t && t.apply(this, e)
            },
            navigate: function (t, n) {
                return e.history.navigate(t, n), this
            },
            _bindRoutes: function () {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function (t) {
                return t = t.replace(P, "\\$&").replace(M, "(?:$1)?").replace(O, function (t, e) {
                    return e ? t : "([^/?]+)"
                }).replace(F, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function (t, e) {
                var i = t.exec(e).slice(1);
                return n.map(i, function (t, e) {
                    return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                })
            }
        });
        var N = e.History = function () {
                this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            I = /^[#\/]|\s+$/g,
            L = /^\/+|\/+$/g,
            j = /#.*$/;
        N.started = !1, n.extend(N.prototype, u, {
            interval: 50,
            atRoot: function () {
                var t = this.location.pathname.replace(/[^\/]$/, "$&/");
                return t === this.root && !this.getSearch()
            },
            matchRoot: function () {
                var t = this.decodeFragment(this.location.pathname),
                    e = t.slice(0, this.root.length - 1) + "/";
                return e === this.root
            },
            decodeFragment: function (t) {
                return decodeURI(t.replace(/%25/g, "%2525"))
            },
            getSearch: function () {
                var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return t ? t[0] : ""
            },
            getHash: function (t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getPath: function () {
                var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === t.charAt(0) ? t.slice(1) : t
            },
            getFragment: function (t) {
                return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(I, "")
            },
            start: function (t) {
                if (N.started) throw new Error("Backbone.history has already been started");
                if (N.started = !0, this.options = n.extend({
                        root: "/"
                    }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(L, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var e = this.root.slice(0, -1) || "/";
                        return this.location.replace(e + "#" + this.getPath()), !0
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    })
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var i = document.body,
                        r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                    r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment
                }
                var s = window.addEventListener || function (t, e) {
                    return attachEvent("on" + t, e)
                };
                if (this._usePushState ? s("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? s("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function () {
                var t = window.removeEventListener || function (t, e) {
                    return detachEvent("on" + t, e)
                };
                this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), N.started = !1
            },
            route: function (t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function (t) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e !== this.fragment && (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function (t) {
                return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), n.some(this.handlers, function (e) {
                    if (e.route.test(t)) return e.callback(t), !0
                }))
            },
            navigate: function (t, e) {
                if (!N.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                }), t = this.getFragment(t || "");
                var n = this.root;
                "" !== t && "?" !== t.charAt(0) || (n = n.slice(0, -1) || "/");
                var i = n + t;
                if (t = this.decodeFragment(t.replace(j, "")), this.fragment !== t) {
                    if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                            var r = this.iframe.contentWindow;
                            e.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, t, e.replace)
                        }
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function (t, e, n) {
                if (n) {
                    var i = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(i + "#" + e)
                } else t.hash = "#" + e
            }
        }), e.history = new N;
        var R = function (t, e) {
            var i, r = this;
            return i = t && n.has(t, "constructor") ? t.constructor : function () {
                return r.apply(this, arguments)
            }, n.extend(i, r, e), i.prototype = n.create(r.prototype, t), i.prototype.constructor = i, i.__super__ = r.prototype, i
        };
        b.extend = _.extend = $.extend = S.extend = N.extend = R;
        var Y = function () {
                throw new Error('A "url" property or function must be specified')
            },
            q = function (t, e) {
                var n = e.error;
                e.error = function (i) {
                    n && n.call(e.context, t, i, e), t.trigger("error", t, i, e)
                }
            };
        return e
    }), define("app/models/rentals", ["backbone"], function (t) {
        var e = t.Model.extend({
            urlRoot: "rental",
            idAttribute: "id",
            defaults: {
                id: null
            },
            validation: {
                books: {
                    required: !0
                },
                renter: {
                    required: !0
                },
                return_date: {
                    required: !0
                }
            }
        });
        return e
    }), define("app/models/books", ["backbone"], function (t) {
        var e = t.Model.extend({
            idAttribute: "id",
            defaults: {
                id: null,
                title: "",
                author: "",
                completed: !1
            },
            validation: {
                title: {
                    required: !0
                },
                author: {
                    required: !0
                },
                published_on: {
                    maxLength: 4
                },
                isbn: {
                    maxLength: 20,
                    pattern: "number"
                },
                pages: {
                    maxLength: 20,
                    pattern: "number"
                },
                quantity: {
                    maxLength: 10,
                    pattern: "number"
                },
                price: {
                    maxLength: 10
                }
            }
        });
        return e
    }), define("app/models/clients", ["backbone"], function (t) {
        var e = t.Model.extend({
            urlRoot: "client",
            idAttribute: "id",
            defaults: {
                id: null,
                name: "",
                completed: !1
            },
            validation: {
                name: {
                    required: !0
                },
                address: {
                    required: !0
                },
                phone: {
                    required: !0
                },
                email: function (e, n, i) {
                    if (e.length > 1) return t.Validation.validators.pattern(e, n, "email", this)
                }
            }
        });
        return e
    }), define("app/models/staff", ["backbone"], function (t) {
        var e = t.Model.extend({
            urlRoot: "settings/staff",
            idAttribute: "id",
            defaults: {
                id: null
            },
            validation: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    pattern: "email"
                },
                password: {
                    min: 8,
                    required: !1
                }
            }
        });
        return e
    }), define("app/collections/rentals", ["backbone", "app/models/rentals"], function (t, e) {
        var n = t.Collection.extend({
            model: e,
            url: "rentals",
            comparator: "return_date"
        });
        return n
    }), define("app/collections/books", ["backbone", "app/models/books"], function (t, e) {
        var n = t.Collection.extend({
            model: e,
            url: "books"
        });
        return n
    }), define("app/collections/clients", ["backbone", "app/models/clients"], function (t, e) {
        var n = t.Collection.extend({
            model: e,
            url: "clients"
        });
        return n
    }), define("app/collections/staff", ["backbone", "app/models/staff"], function (t, e) {
        var n = t.Collection.extend({
            model: e,
            url: "settings/staff"
        });
        return n
    }), function () {
        "use strict";

        function t(t, e, n, i, r, s) {
            e[t] && (n.push(t), e[t] !== !0 && 1 !== e[t] || i.push(r + t + "/" + s))
        }

        function e(t, e, n, i, r) {
            var s = i + e + "/" + r;
            require._fileExists(t.toUrl(s + ".js")) && n.push(s)
        }

        function n(t, e, i) {
            var r;
            for (r in e) !e.hasOwnProperty(r) || t.hasOwnProperty(r) && !i ? "object" == typeof e[r] && (!t[r] && e[r] && (t[r] = {}), n(t[r], e[r], i)) : t[r] = e[r]
        }
        var i = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;
        define("i18n", ["module"], function (r) {
            var s = r.config ? r.config() : {};
            return {
                version: "2.0.6",
                load: function (r, o, a, l) {
                    l = l || {}, l.locale && (s.locale = l.locale);
                    var c, u, d, h = i.exec(r),
                        f = h[1],
                        p = h[4],
                        m = h[5],
                        g = p.split("-"),
                        v = [],
                        y = {},
                        b = "";
                    if (h[5] ? (f = h[1], c = f + m) : (c = r, m = h[4], p = s.locale, p || (p = s.locale = "undefined" == typeof navigator ? "root" : (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage || "root").toLowerCase()), g = p.split("-")), l.isBuild) {
                        for (v.push(c), e(o, "root", v, f, m), u = 0; u < g.length; u++) d = g[u], b += (b ? "-" : "") + d, e(o, b, v, f, m);
                        o(v, function () {
                            a()
                        })
                    } else o([c], function (e) {
                        var i, r = [];
                        for (t("root", e, r, v, f, m), u = 0; u < g.length; u++) i = g[u], b += (b ? "-" : "") + i, t(b, e, r, v, f, m);
                        o(v, function () {
                            var t, i, s;
                            for (t = r.length - 1; t > -1 && r[t]; t--) s = r[t], i = e[s], i !== !0 && 1 !== i || (i = o(f + s + "/" + m)), n(y, i);
                            a(y)
                        })
                    })
                }
            }
        })
    }(), define("nls/language", {
        root: {
            loading: "Loading",
            overview: "OverView",
            library: "Inventory",
            clients: "Clients",
            client: "Client",
            settings: "Settings",
            date: "Date",
            event: "Event",
            books: "Tools",
            book: "Tool",
            book_new: "Add Tool",
            books_search: "Search tools in inventory",
            rentals: "Rentals",
            rentals_search: "Search for rentals",
            rentals_new: "New Rental",
            rentals_details: "Rental Details",
            renter: "Renter",
            return_date: "Return Date",
            rent: "Rent",
            save: "Save",
            reset: "Reset",
            delete: "Delete",
            details: "Details",
            history: "History",
            jpg_only: "Only jpg images",
            title: "Title",
            title_ph: "Tool title",
            author: "Author",
            author_ph: "Tool author",
            editor: "Editor",
            editor_ph: "Tool editor",
            publisher: "Publisher",
            publisher_ph: "Tool publisher",
            country: "Country",
            country_ph: "Publication country",
            language: "Language",
            language_ph: "Tool language",
            edition: "Edition",
            edition_ph: "Tool edition",
            year: "Year",
            year_ph: "Year of publication",
            isbn_ph: "Tool ISBN code",
            pages: "Pages",
            pages_ph: "Tool total pages",
            quantity: "Quantity",
            quantity_ph: "Total amount of this tool",
            status: "Status",
            available: "Available",
            not_available: "Not Available",
            price: "Price",
            price_ph: "Tool price",
            clients_search: "Search for clients",
            client_add: "Add Client",
            name: "Name",
            name_ph: "Client full name",
            address: "Address",
            address_ph: "Client address",
            phone: "Phone",
            phone_ph: "Client phone number",
            email: "Email",
            email_ph: "Client email address",
            city: "City",
            city_ph: "Client city",
            new_password: "New Password",
            about: "About",
            new_member: "New User",
            member_details: "User Details",
            version: "Version",
            developer: "Developer",
            rental_success_save: "Rental successfully saved",
            rental_error_save: "Error saving rental",
            rental_success_del: "Rental successfully deleted",
            rental_error_del: "Error deleting rental",
            book_success_save: "Tool successfully saved",
            book_error_save: "Error saving tool",
            book_success_del: "tool successfully deleted",
            book_error_del: "Error deleting tool",
            client_success_save: "Client successfully saved",
            client_error_save: "Error saving client",
            client_success_del: "Client successfully deleted",
            client_error_del: "Error deleting client",
            user_success_save: "User successfully saved",
            user_error_save: "Error saving user",
            user_success_del: "User successfully deleted",
            user_error_del: "Error deleting user",
            events: ["rent", "sell"],
            countries: {
                AF: "Afghanistan",
                AL: "Albania",
                DZ: "Algeria",
                AS: "American Samoa",
                AD: "Andorra",
                AO: "Angola",
                AI: "Anguilla",
                AQ: "Antarctica",
                AG: "Antigua and Barbuda",
                AR: "Argentina",
                AM: "Armenia",
                AW: "Aruba",
                AU: "Australia",
                AT: "Austria",
                AZ: "Azerbaijan",
                BS: "Bahamas",
                BH: "Bahrain",
                BD: "Bangladesh",
                BB: "Barbados",
                BY: "Belarus",
                BE: "Belgium",
                BZ: "Belize",
                BJ: "Benin",
                BM: "Bermuda",
                BT: "Bhutan",
                BO: "Bolivia",
                BA: "Bosnia and Herzegovina",
                BW: "Botswana",
                BV: "Bouvet Island",
                BR: "Brazil",
                IO: "British Indian Ocean Territory",
                BN: "Brunei Darussalam",
                BG: "Bulgaria",
                BF: "Burkina Faso",
                BI: "Burundi",
                KH: "Cambodia",
                CM: "Cameroon",
                CA: "Canada",
                CV: "Cape Verde",
                KY: "Cayman Islands",
                CF: "Central African Republic",
                TD: "Chad",
                CL: "Chile",
                CN: "China",
                CX: "Christmas Island",
                CC: "Cocos (Keeling) Islands",
                CO: "Colombia",
                KM: "Comoros",
                CG: "Congo",
                CD: "Congo, the Democratic Republic of the",
                CK: "Cook Islands",
                CR: "Costa Rica",
                CI: "Cote D'Ivoire",
                HR: "Croatia",
                CU: "Cuba",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DK: "Denmark",
                DJ: "Djibouti",
                DM: "Dominica",
                DO: "Dominican Republic",
                EC: "Ecuador",
                EG: "Egypt",
                SV: "El Salvador",
                GQ: "Equatorial Guinea",
                ER: "Eritrea",
                EE: "Estonia",
                ET: "Ethiopia",
                FK: "Falkland Islands (Malvinas)",
                FO: "Faroe Islands",
                FJ: "Fiji",
                FI: "Finland",
                FR: "France",
                GF: "French Guiana",
                PF: "French Polynesia",
                TF: "French Southern Territories",
                GA: "Gabon",
                GM: "Gambia",
                GE: "Georgia",
                DE: "Germany",
                GH: "Ghana",
                GI: "Gibraltar",
                GR: "Greece",
                GL: "Greenland",
                GD: "Grenada",
                GP: "Guadeloupe",
                GU: "Guam",
                GT: "Guatemala",
                GN: "Guinea",
                GW: "Guinea-Bissau",
                GY: "Guyana",
                HT: "Haiti",
                HM: "Heard Island and Mcdonald Islands",
                VA: "Holy See (Vatican City State)",
                HN: "Honduras",
                HK: "Hong Kong",
                HU: "Hungary",
                IS: "Iceland",
                IN: "India",
                ID: "Indonesia",
                IR: "Iran, Islamic Republic of",
                IQ: "Iraq",
                IE: "Ireland",
                IL: "Israel",
                IT: "Italy",
                JM: "Jamaica",
                JP: "Japan",
                JO: "Jordan",
                KZ: "Kazakhstan",
                KE: "Kenya",
                KI: "Kiribati",
                KP: "Korea, Democratic People's Republic of",
                KR: "Korea, Republic of",
                KW: "Kuwait",
                KG: "Kyrgyzstan",
                LA: "Lao People's Democratic Republic",
                LV: "Latvia",
                LB: "Lebanon",
                LS: "Lesotho",
                LR: "Liberia",
                LY: "Libyan Arab Jamahiriya",
                LI: "Liechtenstein",
                LT: "Lithuania",
                LU: "Luxembourg",
                MO: "Macao",
                MK: "Macedonia, the Former Yugoslav Republic of",
                MG: "Madagascar",
                MW: "Malawi",
                MY: "Malaysia",
                MV: "Maldives",
                ML: "Mali",
                MT: "Malta",
                MH: "Marshall Islands",
                MQ: "Martinique",
                MR: "Mauritania",
                MU: "Mauritius",
                YT: "Mayotte",
                MX: "Mexico",
                FM: "Micronesia, Federated States of",
                MD: "Moldova, Republic of",
                MC: "Monaco",
                MN: "Mongolia",
                MS: "Montserrat",
                MA: "Morocco",
                MZ: "Mozambique",
                MM: "Myanmar",
                NA: "Namibia",
                NR: "Nauru",
                NP: "Nepal",
                NL: "Netherlands",
                AN: "Netherlands Antilles",
                NC: "New Caledonia",
                NZ: "New Zealand",
                NI: "Nicaragua",
                NE: "Niger",
                NG: "Nigeria",
                NU: "Niue",
                NF: "Norfolk Island",
                MP: "Northern Mariana Islands",
                NO: "Norway",
                OM: "Oman",
                PK: "Pakistan",
                PW: "Palau",
                PS: "Palestinian Territory, Occupied",
                PA: "Panama",
                PG: "Papua New Guinea",
                PY: "Paraguay",
                PE: "Peru",
                PH: "Philippines",
                PN: "Pitcairn",
                PL: "Poland",
                PT: "Portugal",
                PR: "Puerto Rico",
                QA: "Qatar",
                RE: "Reunion",
                RO: "Romania",
                RU: "Russian Federation",
                RW: "Rwanda",
                SH: "Saint Helena",
                KN: "Saint Kitts and Nevis",
                LC: "Saint Lucia",
                PM: "Saint Pierre and Miquelon",
                VC: "Saint Vincent and the Grenadines",
                WS: "Samoa",
                SM: "San Marino",
                ST: "Sao Tome and Principe",
                SA: "Saudi Arabia",
                SN: "Senegal",
                CS: "Serbia and Montenegro",
                SC: "Seychelles",
                SL: "Sierra Leone",
                SG: "Singapore",
                SK: "Slovakia",
                SI: "Slovenia",
                SB: "Solomon Islands",
                SO: "Somalia",
                ZA: "South Africa",
                GS: "South Georgia and the South Sandwich Islands",
                ES: "Spain",
                LK: "Sri Lanka",
                SD: "Sudan",
                SR: "Suriname",
                SJ: "Svalbard and Jan Mayen",
                SZ: "Swaziland",
                SE: "Sweden",
                CH: "Switzerland",
                SY: "Syrian Arab Republic",
                TW: "Taiwan, Province of China",
                TJ: "Tajikistan",
                TZ: "Tanzania, United Republic of",
                TH: "Thailand",
                TL: "Timor-Leste",
                TG: "Togo",
                TK: "Tokelau",
                TO: "Tonga",
                TT: "Trinidad and Tobago",
                TN: "Tunisia",
                TR: "Turkey",
                TM: "Turkmenistan",
                TC: "Turks and Caicos Islands",
                TV: "Tuvalu",
                UG: "Uganda",
                UA: "Ukraine",
                AE: "United Arab Emirates",
                GB: "United Kingdom",
                US: "United States",
                UM: "United States Minor Outlying Islands",
                UY: "Uruguay",
                UZ: "Uzbekistan",
                VU: "Vanuatu",
                VE: "Venezuela",
                VN: "Viet Nam",
                VG: "Virgin Islands, British",
                VI: "Virgin Islands, U.S.",
                WF: "Wallis and Futuna",
                EH: "Western Sahara",
                YE: "Yemen",
                ZM: "Zambia",
                ZW: "Zimbabwe"
            },
            error_required: "{0} is required",
            error_acceptance: "{0} must be accepted",
            error_min: "{0} must be greater than or equal to {1}",
            error_max: "{0} must be less than or equal to {1}",
            error_range: "{0} must be between {1} and {2}",
            error_length: "{0} must be {1} characters",
            error_minLength: "{0} must be at least {1} characters",
            error_maxLength: "{0} must be at most {1} characters",
            error_rangeLength: "{0} must be between {1} and {2} characters",
            error_oneOf: "{0} must be one of: {1}",
            error_equalTo: "{0} must be the same as {1}",
            error_digits: "{0} must only contain digits",
            error_number: "{0} must be a number",
            error_email: "{0} must be a valid email",
            error_url: "{0} must be a valid url",
            error_inlinePattern: "{0} is invalid"
        },
        "it-it": !0
    }), define("app/views/header", ["jquery", "underscore", "backbone", "i18n!nls/language"], function (t, e, n, i) {
        var r = n.View.extend({
                template: e.template(t("#headerView").html()),
                events: {
                    "input .search-input": "searchBook"
                },
                timeout: 0,
                app: null,
                resultsView: null,
                initialize: function (e) {
                    this.app = e.app, this.listenTo(this.app, "route", function (t, e) {
                        this.selectMenu(t)
                    }), t(document).click(function (e) {
                        t(e.target).closest("#searchBooks").length || t(".search-results").addClass("hidden")
                    })
                },
                render: function () {
                    return t(this.el).html(this.template({
                        lang: i
                    })), this
                },
                selectMenu: function (e) {
                    t(this.el).find("li").removeClass("active"), t("." + e).addClass("active")
                },
                searchBook: function (e) {
                    var n = this,
                        i = t(e.target).val();
                    clearTimeout(this.timeout), i.length > 0 ? this.timeout = setTimeout(function () {
                        var e = n.app.booksCollection.filter(function (t) {
                            var e = new RegExp(i, "ig");
                            return e.test(t.get("title"))
                        });
                        e.length > 0 && (n.resultsView = new s({
                            model: e
                        }), t("#search-results", n.el).html(n.resultsView.render().el))
                    }, 800) : n.resultsView && n.resultsView.remove()
                }
            }),
            s = n.View.extend({
                className: "search-results",
                template: e.template(t("#searchResults").html()),
                events: {
                    "click a": "complete"
                },
                render: function () {
                    return t(this.el).html(this.template({
                        books: this.model,
                        lang: i
                    })), this
                },
                complete: function (e) {
                    var n = t(e.currentTarget).find(".result-title").text();
                    t(".search-input").val(n), this.remove()
                }
            });
        return r
    }), define("app/views/pagination", ["jquery", "underscore", "backbone"], function (t, e, n) {
        var i = n.View.extend({
            className: "text-center",
            template: e.template(t("#paginationView").html()),
            page: 1,
            per_page: 10,
            path: "",
            initialize: function (t) {
                this.page = t.page || 1, this.per_page = t.per_page || 10, this.path = t.path || "", this.render()
            },
            render: function () {
                var e = this.model.length,
                    n = Math.ceil(e / this.per_page),
                    i = n > 10 ? this.page - 1 : 0,
                    r = n > 10 && this.page + 5 <= n ? this.page + 5 : n;
                return t(this.el).html(this.template({
                    pages: n,
                    page: this.page,
                    start: i,
                    end: r,
                    path: this.path
                })), this
            }
        });
        return i
    }), define("app/views/books", ["jquery", "underscore", "backbone", "app/views/pagination", "i18n!nls/language"], function (t, e, n, i, r) {
        var s = n.View.extend({
                id: "booksList",
                page: 1,
                initialize: function (t) {
                    this.page = t.page || 1
                },
                render: function () {
                    for (var e = this.model.models, n = e.length, r = 12 * (this.page - 1), s = Math.min(r + 12, n), a = r; a < s; a++) t(this.el).append(new o({
                        model: e[a]
                    }).render().el);
                    return n > 0 && t(this.el).append(new i({
                        model: e,
                        page: this.page,
                        path: "books",
                        per_page: 12
                    }).render().el), this
                }
            }),
            o = n.View.extend({
                className: "col-xs-6 col-sm-3 col-md-2",
                template: e.template(t("#bookList").html()),
                render: function () {
                    return t(this.el).html(this.template(e.extend(this.model.toJSON(), {
                        lang: r
                    }))), this
                }
            });
        return s
    }), define("app/models/archive", ["backbone"], function (t) {
        var e = t.Model.extend({
            idAttribute: "id",
            defaults: {
                id: null
            }
        });
        return e
    }), define("app/collections/archive", ["backbone", "app/models/archive"], function (t, e) {
        var n = t.Collection.extend({
            model: e,
            url: "archive"
        });
        return n
    }), define("app/views/history", ["jquery", "underscore", "backbone", "app/views/pagination", "app/collections/archive", "i18n!nls/language"], function (t, e, n, i, r, s) {
        var o = n.View.extend({
                template: e.template('<div class="text-center"><img src="img/spinner.svg" alt="Loanding..."><p><%= lang.loading %>...</p></div>'),
                collection: null,
                page: 1,
                type: "book",
                timeout: 0,
                app: null,
                initialize: function (t) {
                    this.type = t.type || "book", this.page = t.page || 1, t.app && (this.app = t.app, this.listenTo(this.app, "route:updateHistory", function (t, e) {
                        this.update(t)
                    }))
                },
                render: function () {
                    t(this.el).html(this.template({
                        lang: s
                    }));
                    var e = this,
                        n = new r;
                    return n.fetch({
                        data: {
                            type: this.type,
                            id: this.model.get("id")
                        },
                        success: function (n, i, r) {
                            t(e.el).html(new a({
                                model: n
                            }).render().el), e.collection = n
                        }
                    }), this
                },
                update: function (e) {
                    t(this.el).html(new a({
                        model: this.collection,
                        page: parseInt(e)
                    }).render().el)
                }
            }),
            a = n.View.extend({
                className: "table-container",
                template: e.template(t("#historyTable").html()),
                page: 1,
                initialize: function (t) {
                    this.page = t.page || 1
                },
                render: function () {
                    var e = this.model.models,
                        n = e.length,
                        r = 15 * (this.page - 1),
                        o = Math.min(r + 15, n);
                    t(this.el).html(this.template({
                        lang: s
                    }));
                    for (var a = r; a < o; a++) t("tbody", this.el).append(new l({
                        model: e[a]
                    }).render().el);
                    return n > 0 && t(this.el).append(new i({
                        model: this.model,
                        page: this.page,
                        path: "history",
                        per_page: 15
                    }).render().el), this
                }
            }),
            l = n.View.extend({
                tagName: "tr",
                template: e.template("<td><%- updated_at %></td><td><%- book %></td><td><%- client %></td><td><%- lang.events[event] %></td>"),
                render: function () {
                    return t(this.el).html(this.template(e.extend(this.model.toJSON(), {
                        lang: s
                    }))), this
                }
            });
        return o
    }), define("app/views/book", ["jquery", "underscore", "backbone", "app/views/history", "i18n!nls/language"], function (t, e, n, i, r) {
        var s = n.View.extend({
            id: "bookDetails",
            template: e.template(t("#bookView").html()),
            collection: null,
            events: {
                "change #inputImage": "coverPreview",
                "click .saveButton": "bookSave",
                "click .deleteButton": "bookDelete"
            },
            app: null,
            initialize: function (t) {
                this.listenTo(this.model, "change", this.render), this.listenTo(this.model, "destroy", this.remove), t.app && (this.app = t.app), n.Validation.bind(this)
            },
            render: function () {
                return t(this.el).html(this.template(e.extend(this.model.toJSON(), {
                    lang: r
                }))), this.model.isNew() || t("#history", this.el).html(new i({
                    model: this.model,
                    type: "book",
                    app: this.app
                }).render().el), this
            },
            coverPreview: function (e) {
                var n = e.target;
                if (n.files && n.files[0]) {
                    var i = new FileReader;
                    i.onload = function (e) {
                        t("#coverPreview").attr("src", e.target.result)
                    }, i.readAsDataURL(n.files[0])
                }
            },
            bookSave: function (e) {
                e.preventDefault();
                var i = this,
                    s = t("form", this.el).serializeArray(),
                    o = {};
                if (t.each(s, function (t, e) {
                        o[e.name] = e.value
                    }), this.model.set(o, {
                        silent: !0
                    }), this.model.isValid(!0)) {
                    var a = o.status;
                    o = new FormData(t("form", this.el)[0]), o.append("status", a), t.ajax({
                        url: "book/save",
                        type: "POST",
                        data: o,
                        processData: !1,
                        contentType: !1,
                        beforeSend: function () {
                            t(".loading-save", i.el).removeClass("hidden")
                        },
                        complete: function () {
                            t(".loading-save", i.el).addClass("hidden")
                        },
                        success: function (t) {
                            if (t.id) i.model.set({
                                id: t.id,
                                title: t.title,
                                author: t.author,
                                published_on: t.published_on,
                                cover: t.cover
                            }), i.collection && (i.collection.add(i.model), n.history.navigate("book/" + i.model.id, {
                                trigger: !0
                            })), notifications(r.book_success_save, "success", "fa fa-check");
                            else {
                                var e = r.book_error_save;
                                t[Object.keys(t)[0]] && (e = t[Object.keys(t)[0]]), notifications(e, "danger", "fa fa-exclamation-triangle")
                            }
                        },
                        error: function () {
                            notifications(r.book_error_save, "danger", "fa fa-exclamation-triangle")
                        }
                    })
                }
            },
            bookDelete: function (t) {
                t.preventDefault(), this.model.destroy({
                    wait: !0,
                    success: function (t, e) {
                        notifications(r.book_success_del, "success", "fa fa-check"), n.history.navigate("", {
                            trigger: !0
                        })
                    },
                    error: function (t, e, n) {
                        notifications(r.book_error_del, "danger", "fa fa-exclamation-triangle")
                    }
                })
            }
        });
        return s
    }), define("app/views/clients", ["jquery", "underscore", "backbone", "app/views/pagination", "i18n!nls/language"], function (t, e, n, i, r) {
        var s = n.View.extend({
                className: "col-md-8 col-md-offset-2",
                template: e.template(t("#clientsList").html()),
                events: {
                    "input .search-input": "searchClients",
                    "click tbody tr": "viewClient"
                },
                page: 1,
                timeout: 0,
                initialize: function (t) {
                    this.page = t.page || 1
                },
                render: function () {
                    return t(this.el).html(this.template({
                        lang: r
                    })), t("#table-container", this.el).html(new o({
                        model: this.model.models,
                        page: this.page
                    }).render().el), this.model.models.length > 0 && t("#table-container", this.el).append(new i({
                        model: this.model.models,
                        page: this.page,
                        path: "clients",
                        per_page: 20
                    }).render().el), this
                },
                searchClients: function (e) {
                    var n = e.target,
                        i = this,
                        r = t(n).val();
                    clearTimeout(this.timeout), r.length > 0 ? this.timeout = setTimeout(function () {
                        var e = i.model.filter(function (t) {
                            var e = new RegExp(r, "ig");
                            return e.test(t.get("name"))
                        });
                        t("#table-container", i.el).html(new o({
                            model: e
                        }).render().el)
                    }, 1e3) : t("#table-container", i.el).html(new o({
                        model: this.model.models
                    }).render().el)
                },
                viewClient: function (e) {
                    var i = t(e.target).parent().attr("id");
                    n.history.navigate("client/" + i, {
                        trigger: !0
                    })
                }
            }),
            o = n.View.extend({
                className: "table-responsive",
                template: e.template(t("#clientsTable").html()),
                page: 1,
                initialize: function (t) {
                    this.page = t.page || 1
                },
                render: function () {
                    var e = this.model,
                        n = e.length,
                        i = 20 * (this.page - 1),
                        s = Math.min(i + 20, n);
                    t(this.el).html(this.template({
                        lang: r
                    }));
                    for (var o = i; o < s; o++) t("tbody", this.el).append(new a({
                        model: e[o]
                    }).render().el);
                    return this
                }
            }),
            a = n.View.extend({
                tagName: "tr",
                id: function () {
                    return this.model.get("id")
                },
                template: e.template("<td><%- name %></td><td><%- address %></td><td><%- phone %></td><td><%- email %></td>"),
                render: function () {
                    return t(this.el).html(this.template(this.model.toJSON())), this
                }
            });
        return s
    }), ! function (t) {
        "object" == typeof exports ? module.exports = t(require("backbone"), require("underscore")) : "function" == typeof define && define.amd && define("backbone-validation", ["backbone", "underscore"], t)
    }(function (t, e) {
        return t.Validation = function (t) {
            "use strict";
            var e = {
                    forceUpdate: !1,
                    selector: "name",
                    labelFormatter: "sentenceCase",
                    valid: Function.prototype,
                    invalid: Function.prototype
                },
                n = {
                    formatLabel: function (t, n) {
                        return l[e.labelFormatter](t, n)
                    },
                    format: function () {
                        var t = Array.prototype.slice.call(arguments),
                            e = t.shift();
                        return e.replace(/\{(\d+)\}/g, function (e, n) {
                            return "undefined" != typeof t[n] ? t[n] : e
                        })
                    }
                },
                i = function (e, n, r) {
                    return n = n || {}, r = r || "", t.each(e, function (s, o) {
                        e.hasOwnProperty(o) && (s && t.isArray(s) ? t.forEach(s, function (t, e) {
                            i(t, n, r + o + "." + e + "."), n[r + o + "." + e] = t
                        }) : s && "object" == typeof s && s.constructor === Object && i(s, n, r + o + "."), n[r + o] = s)
                    }), n
                },
                r = function () {
                    var r = function (e, n) {
                            return n = n || t.keys(t.result(e, "validation") || {}), t.reduce(n, function (t, e) {
                                return t[e] = void 0, t
                            }, {})
                        },
                        o = function (e, n) {
                            var i = e.attributes;
                            return t.isFunction(i) ? i = i(n) : t.isString(i) && t.isFunction(c[i]) && (i = c[i](n)), t.isArray(i) ? i : void 0
                        },
                        a = function (e, n) {
                            var i = e.validation ? t.result(e, "validation")[n] || {} : {};
                            return (t.isFunction(i) || t.isString(i)) && (i = {
                                fn: i
                            }), t.isArray(i) || (i = [i]), t.reduce(i, function (e, n) {
                                return t.each(t.without(t.keys(n), "msg"), function (t) {
                                    e.push({
                                        fn: u[t],
                                        val: n[t],
                                        msg: n.msg
                                    })
                                }), e
                            }, [])
                        },
                        l = function (e, i, r, s) {
                            return t.reduce(a(e, i), function (o, a) {
                                var l = t.extend({}, n, u),
                                    c = a.fn.call(l, r, i, a.val, e, s);
                                return c !== !1 && o !== !1 && (c && !o ? t.result(a, "msg") || c : o)
                            }, "")
                        },
                        d = function (e, n, i) {
                            var r, s = {},
                                o = !0,
                                a = t.clone(n);
                            return t.each(i, function (t, n) {
                                r = l(e, n, t, a), r && (s[n] = r, o = !1)
                            }), {
                                invalidAttrs: s,
                                isValid: o
                            }
                        },
                        h = function (e, n) {
                            return {
                                preValidate: function (e, n) {
                                    var i, r = this,
                                        s = {};
                                    return t.isObject(e) ? (t.each(e, function (t, e) {
                                        i = r.preValidate(e, t), i && (s[e] = i)
                                    }), t.isEmpty(s) ? void 0 : s) : l(this, e, n, t.extend({}, this.attributes))
                                },
                                isValid: function (r) {
                                    var s, a, c, u;
                                    return r = r || o(n, e), t.isString(r) ? a = [r] : t.isArray(r) && (a = r), a && (s = i(this.attributes), t.each(this.associatedViews, function (e) {
                                        t.each(a, function (i) {
                                            c = l(this, i, s[i], t.extend({}, this.attributes)), c ? (n.invalid(e, i, c, n.selector), u = u || {}, u[i] = c) : n.valid(e, i, n.selector)
                                        }, this)
                                    }, this)), r === !0 && (u = this.validate()), u && this.trigger("invalid", this, u, {
                                        validationError: u
                                    }), a ? !u : !this.validation || this._isValid
                                },
                                validate: function (s, a) {
                                    var l = this,
                                        c = !s,
                                        u = t.extend({}, n, a),
                                        h = r(l, o(n, e)),
                                        f = t.extend({}, h, l.attributes, s),
                                        p = i(f),
                                        m = s ? i(s) : p,
                                        g = d(l, f, t.pick(p, t.keys(h)));
                                    return l._isValid = g.isValid, t.each(l.associatedViews, function (e) {
                                        t.each(h, function (t, n) {
                                            var i = g.invalidAttrs.hasOwnProperty(n),
                                                r = m.hasOwnProperty(n);
                                            i || u.valid(e, n, u.selector), i && (r || c) && u.invalid(e, n, g.invalidAttrs[n], u.selector)
                                        })
                                    }), t.defer(function () {
                                        l.trigger("validated", l._isValid, l, g.invalidAttrs), l.trigger("validated:" + (l._isValid ? "valid" : "invalid"), l, g.invalidAttrs)
                                    }), !u.forceUpdate && t.intersection(t.keys(g.invalidAttrs), t.keys(m)).length > 0 ? g.invalidAttrs : void 0
                                }
                            }
                        },
                        f = function (e, n, i) {
                            n.associatedViews ? n.associatedViews.push(e) : n.associatedViews = [e], t.extend(n, h(e, i))
                        },
                        p = function (e, n) {
                            n && e.associatedViews && e.associatedViews.length > 1 ? e.associatedViews = t.without(e.associatedViews, n) : (delete e.validate, delete e.preValidate, delete e.isValid, delete e.associatedViews)
                        },
                        m = function (t) {
                            f(this.view, t, this.options)
                        },
                        g = function (t) {
                            p(t)
                        };
                    return {
                        version: "0.11.3",
                        configure: function (n) {
                            t.extend(e, n)
                        },
                        bind: function (n, i) {
                            i = t.extend({}, e, s, i);
                            var r = i.model || n.model,
                                o = i.collection || n.collection;
                            if ("undefined" == typeof r && "undefined" == typeof o) throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
                            r ? f(n, r, i) : o && (o.each(function (t) {
                                f(n, t, i)
                            }), o.bind("add", m, {
                                view: n,
                                options: i
                            }), o.bind("remove", g))
                        },
                        unbind: function (e, n) {
                            n = t.extend({}, n);
                            var i = n.model || e.model,
                                r = n.collection || e.collection;
                            i ? p(i, e) : r && (r.each(function (t) {
                                p(t, e)
                            }), r.unbind("add", m), r.unbind("remove", g))
                        },
                        mixin: h(null, e)
                    }
                }(),
                s = r.callbacks = {
                    valid: function (t, e, n) {
                        t.$("[" + n + '~="' + e + '"]').removeClass("invalid").removeAttr("data-error")
                    },
                    invalid: function (t, e, n, i) {
                        t.$("[" + i + '~="' + e + '"]').addClass("invalid").attr("data-error", n)
                    }
                },
                o = r.patterns = {
                    digits: /^\d+$/,
                    number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
                    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                    url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
                },
                a = r.messages = {
                    required: "{0} is required",
                    acceptance: "{0} must be accepted",
                    min: "{0} must be greater than or equal to {1}",
                    max: "{0} must be less than or equal to {1}",
                    range: "{0} must be between {1} and {2}",
                    length: "{0} must be {1} characters",
                    minLength: "{0} must be at least {1} characters",
                    maxLength: "{0} must be at most {1} characters",
                    rangeLength: "{0} must be between {1} and {2} characters",
                    oneOf: "{0} must be one of: {1}",
                    equalTo: "{0} must be the same as {1}",
                    digits: "{0} must only contain digits",
                    number: "{0} must be a number",
                    email: "{0} must be a valid email",
                    url: "{0} must be a valid url",
                    inlinePattern: "{0} is invalid"
                },
                l = r.labelFormatters = {
                    none: function (t) {
                        return t
                    },
                    sentenceCase: function (t) {
                        return t.replace(/(?:^\w|[A-Z]|\b\w)/g, function (t, e) {
                            return 0 === e ? t.toUpperCase() : " " + t.toLowerCase()
                        }).replace(/_/g, " ")
                    },
                    label: function (t, e) {
                        return e.labels && e.labels[t] || l.sentenceCase(t, e)
                    }
                },
                c = r.attributeLoaders = {
                    inputNames: function (t) {
                        var e = [];
                        return t && t.$("form [name]").each(function () {
                            /^(?:input|select|textarea)$/i.test(this.nodeName) && this.name && "submit" !== this.type && -1 === e.indexOf(this.name) && e.push(this.name)
                        }), e
                    }
                },
                u = r.validators = function () {
                    var e = String.prototype.trim ? function (t) {
                            return null === t ? "" : String.prototype.trim.call(t)
                        } : function (t) {
                            var e = /^\s+/,
                                n = /\s+$/;
                            return null === t ? "" : t.toString().replace(e, "").replace(n, "")
                        },
                        n = function (e) {
                            return t.isNumber(e) || t.isString(e) && e.match(o.number)
                        },
                        i = function (n) {
                            return !(t.isNull(n) || t.isUndefined(n) || t.isString(n) && "" === e(n) || t.isArray(n) && t.isEmpty(n))
                        };
                    return {
                        fn: function (e, n, i, r, s) {
                            return t.isString(i) && (i = r[i]), i.call(r, e, n, s)
                        },
                        required: function (e, n, r, s, o) {
                            var l = t.isFunction(r) ? r.call(s, e, n, o) : r;
                            return !(!l && !i(e)) && (l && !i(e) ? this.format(a.required, this.formatLabel(n, s)) : void 0)
                        },
                        acceptance: function (e, n, i, r) {
                            return "true" === e || t.isBoolean(e) && e !== !1 ? void 0 : this.format(a.acceptance, this.formatLabel(n, r))
                        },
                        min: function (t, e, i, r) {
                            return !n(t) || i > t ? this.format(a.min, this.formatLabel(e, r), i) : void 0
                        },
                        max: function (t, e, i, r) {
                            return !n(t) || t > i ? this.format(a.max, this.formatLabel(e, r), i) : void 0
                        },
                        range: function (t, e, i, r) {
                            return !n(t) || t < i[0] || t > i[1] ? this.format(a.range, this.formatLabel(e, r), i[0], i[1]) : void 0
                        },
                        length: function (e, n, i, r) {
                            return t.isString(e) && e.length === i ? void 0 : this.format(a.length, this.formatLabel(n, r), i)
                        },
                        minLength: function (e, n, i, r) {
                            return !t.isString(e) || e.length < i ? this.format(a.minLength, this.formatLabel(n, r), i) : void 0
                        },
                        maxLength: function (e, n, i, r) {
                            return !t.isString(e) || e.length > i ? this.format(a.maxLength, this.formatLabel(n, r), i) : void 0
                        },
                        rangeLength: function (e, n, i, r) {
                            return !t.isString(e) || e.length < i[0] || e.length > i[1] ? this.format(a.rangeLength, this.formatLabel(n, r), i[0], i[1]) : void 0
                        },
                        oneOf: function (e, n, i, r) {
                            return t.include(i, e) ? void 0 : this.format(a.oneOf, this.formatLabel(n, r), i.join(", "))
                        },
                        equalTo: function (t, e, n, i, r) {
                            return t !== r[n] ? this.format(a.equalTo, this.formatLabel(e, i), this.formatLabel(n, i)) : void 0
                        },
                        pattern: function (t, e, n, r) {
                            return i(t) && t.toString().match(o[n] || n) ? void 0 : this.format(a[n] || a.inlinePattern, this.formatLabel(e, r), n)
                        }
                    }
                }();
            return t.each(u, function (e, i) {
                u[i] = t.bind(u[i], t.extend({}, n, u))
            }), r
        }(e), t.Validation
    }), define("app/views/client", ["jquery", "underscore", "backbone", "backbone-validation", "app/views/history", "i18n!nls/language"], function (t, e, n, i, r, s) {
        var o = n.View.extend({
            id: "clientDetails",
            template: e.template(t("#clientView").html()),
            collection: null,
            events: {
                "click .saveButton": "clientSave",
                "click .deleteButton": "clientDelete"
            },
            app: null,
            initialize: function (t) {
                this.listenTo(this.model, "update", this.render), this.listenTo(this.model, "destroy", this.remove), this.listenTo(this.model, "request", this.loading.start), this.listenTo(this.model, "sync error", this.loading.stop), t.app && (this.app = t.app), n.Validation.bind(this)
            },
            render: function () {
                return t(this.el).html(this.template(e.extend(this.model.toJSON(), {
                    lang: s
                }))), this.model.isNew() || t("#history", this.el).html(new r({
                    model: this.model,
                    type: "client",
                    app: this.app
                }).render().el), this
            },
            loading: {
                start: function () {
                    t(".loading-save", this.el).removeClass("hidden")
                },
                stop: function () {
                    t(".loading-save", this.el).addClass("hidden")
                }
            },
            clientSave: function (e) {
                e.preventDefault();
                var i = t("form", this.el).serializeArray(),
                    r = this,
                    o = this.model.isNew(),
                    a = {};
                t.each(i, function (t, e) {
                    a[e.name] = e.value
                }), this.model.set(a), this.model.save(null, {
                    success: function (t, e, i) {
                        notifications(s.client_success_save, "success", "fa fa-check"), o && (r.collection.add(t), n.history.navigate("client/" + t.get("id"), {
                            trigger: !0
                        }))
                    },
                    error: function (t, e, n) {
                        var i = s.client_error_save;
                        e.responseJSON && (i = e.responseJSON[Object.keys(e.responseJSON)[0]]), notifications(i, "danger", "fa fa-exclamation-triangle")
                    }
                })
            },
            clientDelete: function (t) {
                t.preventDefault(), this.model.destroy({
                    wait: !0,
                    success: function (t, e) {
                        notifications(s.client_success_del, "success", "fa fa-check"), n.history.navigate("clients", {
                            trigger: !0
                        })
                    },
                    error: function (t, e, n) {
                        notifications(s.client_error_del, "danger", "fa fa-exclamation-triangle")
                    }
                })
            }
        });
        return o
    }), define("app/views/rentals", ["jquery", "underscore", "backbone", "app/views/pagination", "i18n!nls/language"], function (t, e, n, i, r) {
        var s = n.View.extend({
                className: "col-md-8 col-md-offset-2",
                template: e.template(t("#rentalsList").html()),
                events: {
                    "input .search-input": "searchRentals",
                    "click tbody tr": "viewRental"
                },
                page: 1,
                app: null,
                timeout: 0,
                initialize: function (t) {
                    this.page = t.page || 1, this.app = t.app || null
                },
                render: function () {
                    var e = this.app.booksCollection.models.length,
                        n = this.app.clientsCollection.models.length,
                        i = this.model.models.length;
                    return t(this.el).html(this.template({
                        total_books: e,
                        total_clients: n,
                        total_rentals: i,
                        lang: r
                    })), t("#table-container", this.el).html(new o({
                        model: this.model.models,
                        page: this.page
                    }).render().el), this
                },
                searchRentals: function (e) {
                    var n = this,
                        i = t(e.target).val();
                    clearTimeout(this.timeout), i.length > 0 ? this.timeout = setTimeout(function () {
                        var e = n.model.filter(function (t) {
                            var e = new RegExp(i, "ig");
                            return e.test(t.get("client"))
                        });
                        t("#table-container", n.el).html(new o({
                            model: e
                        }).render().el)
                    }, 800) : t("#table-container", n.el).html(new o({
                        model: this.model.models
                    }).render().el)
                },
                viewRental: function (e) {
                    var i = t(e.target).parent().attr("id");
                    n.history.navigate("rental/" + i, {
                        trigger: !0
                    })
                }
            }),
            o = n.View.extend({
                className: "table-container",
                template: e.template(t("#rentalsTable").html()),
                page: 1,
                initialize: function (t) {
                    this.page = t.page || 1
                },
                render: function () {
                    var e = this.model,
                        n = e.length,
                        s = 15 * (this.page - 1),
                        o = Math.min(s + 15, n);
                    t(this.el).html(this.template({
                        lang: r
                    }));
                    for (var l = s; l < o; l++) t("tbody", this.el).append(new a({
                        model: e[l]
                    }).render().el);
                    return n > 0 && t(this.el).append(new i({
                        model: this.model,
                        page: this.page,
                        path: "rentals",
                        per_page: 15
                    }).render().el), this
                }
            }),
            a = n.View.extend({
                tagName: "tr",
                id: function () {
                    return this.model.get("id")
                },
                template: e.template("<td><%- client %></td><td><%- book %></td><td><%- return_date %>"),
                render: function () {
                    return t(this.el).html(this.template(this.model.toJSON())), this
                }
            });
        return s
    }), define("app/views/rental", ["jquery", "underscore", "backbone", "app/models/rentals", "i18n!nls/language"], function (t, e, n, i, r) {
        var s = n.View.extend({
            id: "rentalsDetails",
            template: e.template(t("#rentalView").html()),
            collection: null,
            events: {
                "click .saveButton": "rentalSave",
                "click .deleteButton": "rentalDelete"
            },
            initialize: function () {
                this.listenTo(this.model, "update", this.render), this.listenTo(this.model, "destroy", this.remove), this.listenTo(this.model, "request", this.loading.start), this.listenTo(this.model, "sync error", this.loading.stop), n.Validation.bind(this)
            },
            render: function () {
                return t(this.el).html(this.template(e.extend(this.model.toJSON(), {
                    lang: r
                }))), t(".select2", this.el).select2({
                    ajax: {
                        dataType: "json",
                        delay: 800,
                        processResults: function (e) {
                            return {
                                results: t.map(e, function (t) {
                                    return t.title ? {
                                        text: t.title,
                                        id: t.id,
                                        status: t.status
                                    } : {
                                        text: t.name,
                                        id: t.id
                                    }
                                })
                            }
                        }
                    },
                    escapeMarkup: function (t) {
                        return t
                    },
                    templateResult: formatResult
                }), this
            },
            loading: {
                start: function () {
                    t(".loading-save", this.el).removeClass("hidden")
                },
                stop: function () {
                    t(".loading-save", this.el).addClass("hidden")
                }
            },
            rentalSave: function (e) {
                e.preventDefault();
                var s = t("form", this.el).serializeArray(),
                    o = this,
                    a = {},
                    l = {};
                t.each(s, function (t, e) {
                    "books" == e.name ? l[t] = e.value : a[e.name] = e.value
                }), t.each(l, function (t, e) {
                    var s = o.model;
                    o.model.isNew() && (s = new i), s.set({
                        book_id: e,
                        renter_id: a.renter,
                        return_date: a.return_date
                    }, {
                        silent: !0
                    }), s.save(null, {
                        success: function (t, e, i) {
                            notifications(r.rental_success_save, "success", "fa fa-check"), o.collection && (o.collection.add(t), n.history.navigate("rental/" + t.get("id"), {
                                trigger: !0
                            }))
                        },
                        error: function (t, e, n) {
                            var i = r.rental_error_save;
                            e.responseJSON && (i = e.responseJSON[Object.keys(e.responseJSON)[0]]), notifications(i, "danger", "fa fa-exclamation-triangle")
                        }
                    })
                })
            },
            rentalDelete: function (t) {
                t.preventDefault(), this.model.destroy({
                    wait: !0,
                    success: function (t, e) {
                        notifications(r.rental_success_del, "success", "fa fa-check"), n.history.navigate("", {
                            trigger: !0
                        })
                    },
                    error: function (t, e, n) {
                        notifications(r.rental_error_del, "danger", "fa fa-exclamation-triangle")
                    }
                })
            }
        });
        return s
    }), define("app/views/settings", ["jquery", "underscore", "backbone", "i18n!nls/language"], function (t, e, n, i) {
        var r = n.View.extend({
                id: "settings",
                template: e.template(t("#settingsView").html()),
                events: {
                    "click tbody tr": "viewStaff"
                },
                collection: null,
                initialize: function () {
                    this.listenTo(this.model, "update", this.render), this.listenTo(this.model, "destroy", this.remove), n.Validation.bind(this)
                },
                render: function () {
                    var n = this.model.models,
                        r = n.length;
                    t(this.el).html(this.template(e.extend(this.model.toJSON(), {
                        lang: i
                    })));
                    for (var o = 0; o < r; o++) t("tbody", this.el).append(new s({
                        model: n[o]
                    }).render().el);
                    return this
                },
                viewStaff: function (e) {
                    var i = t(e.target).parent().attr("id");
                    n.history.navigate("settings/staff/" + i, {
                        trigger: !0
                    })
                }
            }),
            s = n.View.extend({
                tagName: "tr",
                id: function () {
                    return this.model.get("id")
                },
                template: e.template("<td><%- name %></td><td><%- email %></td><td><%- phone %></td>"),
                render: function () {
                    return t(this.el).html(this.template(this.model.toJSON())), this
                }
            });
        return r
    }), define("app/views/staff", ["jquery", "underscore", "backbone", "backbone-validation", "i18n!nls/language"], function (t, e, n, i, r) {
        var s = n.View.extend({
            id: "staffDetails",
            template: e.template(t("#addStaff").html()),
            collection: null,
            events: {
                "click .saveButton": "staffSave",
                "click .deleteButton": "staffDelete"
            },
            initialize: function () {
                this.listenTo(this.model, "update", this.render), this.listenTo(this.model, "destroy", this.remove), this.listenTo(this.model, "request", this.loading.start), this.listenTo(this.model, "sync error", this.loading.stop), n.Validation.bind(this)
            },
            render: function () {
                return t(this.el).html(this.template(e.extend(this.model.toJSON(), {
                    lang: r
                }))), this
            },
            loading: {
                start: function () {
                    t(".loading-save", this.el).removeClass("hidden")
                },
                stop: function () {
                    t(".loading-save", this.el).addClass("hidden")
                }
            },
            staffSave: function (e) {
                e.preventDefault();
                var i = t("form", this.el).serializeArray(),
                    s = this,
                    o = this.model.isNew(),
                    a = {};
                t.each(i, function (t, e) {
                    a[e.name] = e.value
                }), this.model.set(a, {
                    silent: !0
                }), this.model.save(null, {
                    success: function (t, e, i) {
                        notifications(r.user_success_save, "success", "fa fa-check"), o && (s.collection.add(t), n.history.navigate("settings/staff/" + t.get("id"), {
                            trigger: !0
                        }))
                    },
                    error: function (t, e, n) {
                        var i = r.user_error_save;
                        e.responseJSON && (i = e.responseJSON[Object.keys(e.responseJSON)[0]]), notifications(i, "danger", "fa fa-exclamation-triangle")
                    }
                })
            },
            staffDelete: function (t) {
                t.preventDefault(), this.model.destroy({
                    wait: !0,
                    success: function (t, e) {
                        notifications(r.user_success_del, "success", "fa fa-check"), n.history.navigate("settings", {
                            trigger: !0
                        })
                    },
                    error: function (t, e, n) {
                        notifications(r.user_error_del, "danger", "fa fa-exclamation-triangle")
                    }
                })
            }
        });
        return s
    }), define("app/app", ["jquery", "underscore", "backbone", "app/models/rentals", "app/models/books", "app/models/clients", "app/models/staff", "app/collections/rentals", "app/collections/books", "app/collections/clients", "app/collections/staff", "app/views/header", "app/views/books", "app/views/book", "app/views/clients", "app/views/client", "app/views/rentals", "app/views/rental", "app/views/settings", "app/views/staff", "i18n!nls/language"], function (t, e, n, i, r, s, o, a, l, c, u, d, h, f, p, m, g, v, y, b, w) {
        "use strict";
        var _ = n.Router.extend({
            routes: {
                "": "overview",
                "rentals/page/:page": "overview",
                "rental/add(/:book)": "newRental",
                "rental/:id": "rentalDetails",
                books: "viewBooks",
                "books/page/:page": "viewBooks",
                "book/add": "bookDetails",
                "book/:id": "bookDetails",
                "history/page/:page": "updateHistory",
                clients: "viewClients",
                "clients/page/:page": "viewClients",
                "client/add": "clientDetails",
                "client/:id": "clientDetails",
                settings: "viewSettings",
                "settings/staff/add": "staffDetails",
                "settings/staff/:id": "staffDetails"
            },
            rentalsCollection: {},
            booksCollection: {},
            clientsCollection: {},
            staffCollection: {},
            currentView: null,
            initialized: !1,
            eventsAggregator: e.extend({}, n.Events),
            initialize: function () {
                if (!this.initialized) {
                    var i = this,
                        r = new l,
                        s = new c,
                        o = new a,
                        d = new u;
                    r.fetch({
                        success: function () {
                            i.booksCollection = r, NProgress.inc(), s.fetch({
                                success: function () {
                                    i.clientsCollection = s, NProgress.inc(), o.fetch({
                                        success: function () {
                                            i.rentalsCollection = o, NProgress.inc(), d.fetch({
                                                success: function () {
                                                    i.staffCollection = d, i.initInterface(), NProgress.inc(), i.initialized = !0, n.history.loadUrl(n.history.fragment), NProgress.done(), t(".loader-container").fadeOut("slow"), console.log("App loaded !")
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }), e.extend(n.Validation.messages, {
                        required: w.error_required,
                        acceptance: w.error_acceptance,
                        min: w.error_min,
                        max: w.error_max,
                        range: w.error_range,
                        length: w.error_length,
                        minLength: w.error_minLength,
                        maxLength: w.error_maxLength,
                        rangeLength: w.error_rangeLength,
                        oneOf: w.error_oneOf,
                        equalTo: w.error_equalTo,
                        digits: w.error_digits,
                        number: w.error_number,
                        email: w.error_email,
                        url: w.error_url,
                        inlinePattern: w.error_inlinePattern
                    })
                }
            },
            execute: function (t, e, n) {
                return !!this.initialized && void(t && t.apply(this, e))
            },
            initInterface: function () {
                t("header").html(new d({
                    app: this
                }).render().el)
            },
            switchView: function (e) {
                this.currentView && this.currentView.remove(), t(e.render().el).appendTo("#content"), this.currentView = e
            },
            overview: function (t) {
                var e = t ? parseInt(t, 10) : 1,
                    n = new g({
                        model: this.rentalsCollection,
                        page: e,
                        app: this
                    });
                this.switchView(n)
            },
            newRental: function (t) {
                var e = t ? this.booksCollection.get(t) : null,
                    n = t ? new i({
                        book_id: e.get("id"),
                        book: e.get("title")
                    }) : new i,
                    r = new v({
                        model: n,
                        collection: this.rentalsCollection
                    });
                this.switchView(r)
            },
            rentalDetails: function (t) {
                var e = t ? this.rentalsCollection.get(t) : new i,
                    n = t ? null : this.rentalsCollection,
                    r = new v({
                        model: e,
                        collection: n
                    });
                this.switchView(r)
            },
            viewBooks: function (t) {
                var e = t ? parseInt(t, 10) : 1,
                    n = new h({
                        model: this.booksCollection,
                        page: e
                    });
                this.switchView(n)
            },
            bookDetails: function (t) {
                var e = t ? this.booksCollection.get(t) : new r,
                    n = t ? null : this.booksCollection,
                    i = new f({
                        model: e,
                        collection: n,
                        app: this
                    });
                this.switchView(i)
            },
            viewClients: function (t) {
                var e = t ? parseInt(t, 10) : 1,
                    n = new p({
                        model: this.clientsCollection,
                        page: e
                    });
                this.switchView(n)
            },
            clientDetails: function (t) {
                var e = t ? this.clientsCollection.get(t) : new s,
                    n = t ? null : this.clientsCollection,
                    i = new m({
                        model: e,
                        collection: n,
                        app: this
                    });
                this.switchView(i)
            },
            viewSettings: function () {
                var t = new y({
                    model: this.staffCollection
                });
                this.switchView(t)
            },
            staffDetails: function (t) {
                var e = t ? this.staffCollection.get(t) : new o,
                    n = t ? null : this.staffCollection,
                    i = new b({
                        model: e,
                        collection: n
                    });
                this.switchView(i)
            }
        });
        return _
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var r = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function (e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            s = r.attr("data-target");
        s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t("#" === s ? [] : s);
        e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.button"),
                s = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (e) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            s = i.data();
        e += "Text", null == s.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function () {
            i[r](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.carousel"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : s.slide;
            r || i.data("bs.carousel", r = new n(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1,
            s = (n + r) % this.$items.length;
        return this.$items.eq(s)
    }, n.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var r = this.$element.find(".item.active"),
            s = i || this.getItemForDirection(e, r),
            o = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var c = s[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(s)]);
                d && d.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, r.addClass(a), s.addClass(a), r.one("bsTransitionEnd", function () {
                s.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(h)), o && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var r = function (n) {
        var i, r = t(this),
            s = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = t.extend({}, s.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this),
                r = n.data("bs.collapse"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || n.data("bs.collapse", r = new i(this, s)), "string" == typeof e && r[e]()
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var s = e(r),
            o = s.data("bs.collapse"),
            a = o ? "toggle" : r.data();
        n.call(s, a)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(r).remove(), t(s).each(function () {
            var i = t(this),
                r = e(i),
                s = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.7", o.prototype.toggle = function (i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = e(r),
                o = s.hasClass("open");
            if (n(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, o.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = e(i),
                    o = r.hasClass("open");
                if (!o && 27 != n.which || o && 27 == n.which) return 27 == n.which && r.find(s).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            s || r.data("bs.modal", s = new n(this, o)), "string" == typeof e ? s[e](i) : o.show && s.show(i)
        })
    }
    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this),
            r = i.attr("href"),
            s = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(s, o, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.tooltip"),
                s = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || i.data("bs.tooltip", r = new n(this, s)), "string" == typeof e && r[e]())
        })
    }
    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var r = this,
                s = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = s[0].offsetWidth,
                h = s[0].offsetHeight;
            if (c) {
                var f = a,
                    p = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + h > p.bottom ? "top" : "top" == a && u.top - h < p.top ? "bottom" : "right" == a && u.right + d > p.width ? "left" : "left" == a && u.left - d < p.left ? "right" : a, s.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, d, h);
            this.applyPlacement(m, a);
            var g = function () {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            s = i[0].offsetHeight,
            o = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top += o, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != s && (e.top = e.top + s - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * u.left - r + l : 2 * u.top - s + c,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][f], d)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != r.hoverState && s.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type),
                e && e()
        }
        var r = this,
            s = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var s = window.SVGElement && n instanceof window.SVGElement,
            o = i ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, a, l, o)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - o.scroll,
                l = e.top + s - o.scroll + i;
            a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
        } else {
            var c = e.left - s,
                u = e.left + s + n;
            c < o.left ? r.left = o.left - c : u > o.right && (r.left = o.left + o.width - u)
        }
        return r
    }, n.prototype.getTitle = function () {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.popover"),
                s = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || i.data("bs.popover", r = new n(this, s)), "string" == typeof e && r[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                s = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, s)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                s = /^#./.test(r) && t(r);
            return s && s.length && s.is(":visible") && [
                [s[n]().top + i, r]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) o != s[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(s), e.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, r) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var o = i.find("> .active"),
            a = r && t.support.transition && (o.length && o.hasClass("fade") || !!i.find("> .fade").length);
        o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var r = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.affix"),
                s = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, s)), "string" == typeof e && r[e]()
        })
    }
    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var r = this.$target.scrollTop(),
            s = this.$element.offset(),
            o = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= s.top) && "bottom" : !(r + o <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? r : s.top,
            c = a ? o : e;
        return null != n && r <= n ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                s = i.bottom,
                o = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (s = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
            var a = this.getState(o, e, r, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: o - e - s
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), define("bootstrap", ["jquery"], function () {}), ! function (t) {
    "function" == typeof define && define.amd ? define("bootstrap-notify", ["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    function e(e, i, r) {
        var i = {
            content: {
                message: "object" == typeof i ? i.message : i,
                title: i.title ? i.title : "",
                icon: i.icon ? i.icon : "",
                url: i.url ? i.url : "#",
                target: i.target ? i.target : "-"
            }
        };
        r = t.extend(!0, {}, i, r), this.settings = t.extend(!0, {}, n, r), this._defaults = n, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), this.init()
    }
    var n = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };
    String.format = function () {
        for (var t = arguments[0], e = 1; e < arguments.length; e++) t = t.replace(RegExp("\\{" + (e - 1) + "\\}", "gm"), arguments[e]);
        return t
    }, t.extend(e.prototype, {
        init: function () {
            var t = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function (e, n) {
                    var i = {};
                    "string" == typeof e ? i[e] = n : i = e;
                    for (var e in i) switch (e) {
                        case "type":
                            this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = i[e], this.$ele.addClass("alert-" + i[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[e]);
                            break;
                        case "icon":
                            var r = this.$ele.find('[data-notify="icon"]');
                            "class" == t.settings.icon_type.toLowerCase() ? r.removeClass(t.settings.content.icon).addClass(i[e]) : (r.is("img") || r.find("img"), r.attr("src", i[e]));
                            break;
                        case "progress":
                            var s = t.settings.delay - t.settings.delay * (i[e] / 100);
                            this.$ele.data("notify-delay", s), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[e]).css("width", i[e] + "%");
                            break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", i[e]);
                            break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", i[e]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + e + '"]').html(i[e])
                    }
                    var o = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(o)
                },
                close: function () {
                    t.close()
                }
            }
        },
        buildNotify: function () {
            var e = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, e.title, e.message, e.url, e.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        },
        setIcon: function () {
            "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        },
        styleURL: function () {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "100%",
                zIndex: this.settings.z_index + 1
            }), this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        },
        placement: function () {
            var e = this,
                n = this.settings.offset.y,
                i = {
                    display: "inline-block",
                    margin: "0px auto",
                    position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                    transition: "all .5s ease-in-out",
                    zIndex: this.settings.z_index
                },
                r = !1,
                s = this.settings;
            switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                return n = Math.max(n, parseInt(t(this).css(s.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(s.spacing))
            }), 1 == this.settings.newest_on_top && (n = this.settings.offset.y), i[this.settings.placement.from] = n + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    i[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case "center":
                    i.left = 0, i.right = 0
            }
            this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit", "moz", "o", "ms", ""), function (t, n) {
                e.$ele[0].style[n + "AnimationIterationCount"] = 1
            }), t(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (n = parseInt(n) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(n)), t.isFunction(e.settings.onShow) && e.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function () {
                r = !0
            }).one(this.animations.end, function () {
                t.isFunction(e.settings.onShown) && e.settings.onShown.call(this)
            }), setTimeout(function () {
                r || t.isFunction(e.settings.onShown) && e.settings.onShown.call(this)
            }, 600)
        },
        bind: function () {
            var e = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
                    e.close()
                }), this.$ele.mouseover(function () {
                    t(this).data("data-hover", "true")
                }).mouseout(function () {
                    t(this).data("data-hover", "false")
                }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                e.$ele.data("notify-delay", e.settings.delay);
                var n = setInterval(function () {
                    var t = parseInt(e.$ele.data("notify-delay")) - e.settings.timer;
                    if ("false" === e.$ele.data("data-hover") && "pause" == e.settings.mouse_over || "pause" != e.settings.mouse_over) {
                        var i = (e.settings.delay - t) / e.settings.delay * 100;
                        e.$ele.data("notify-delay", t), e.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%")
                    }
                    t <= -e.settings.timer && (clearInterval(n), e.close())
                }, e.settings.timer)
            }
        },
        close: function () {
            var e = this,
                n = parseInt(this.$ele.css(this.settings.placement.from)),
                i = !1;
            this.$ele.data("closing", "true").addClass(this.settings.animate.exit), e.reposition(n), t.isFunction(e.settings.onClose) && e.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function () {
                i = !0
            }).one(this.animations.end, function () {
                t(this).remove(), t.isFunction(e.settings.onClosed) && e.settings.onClosed.call(this)
            }), setTimeout(function () {
                i || (e.$ele.remove(), e.settings.onClosed && e.settings.onClosed(e.$ele))
            }, 600)
        },
        reposition: function (e) {
            var n = this,
                i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                r = this.$ele.nextAll(i);
            1 == this.settings.newest_on_top && (r = this.$ele.prevAll(i)), r.each(function () {
                t(this).css(n.settings.placement.from, e), e = parseInt(e) + parseInt(n.settings.spacing) + t(this).outerHeight()
            })
        }
    }), t.notify = function (t, n) {
        var i = new e(this, t, n);
        return i.notify
    }, t.notifyDefaults = function (e) {
        return n = t.extend(!0, {}, n, e)
    }, t.notifyClose = function (e) {
        "undefined" == typeof e || "all" == e ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + e + '"]').find('[data-notify="dismiss"]').trigger("click")
    }
}), ! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("moment", e) : t.moment = e()
}(this, function () {
    "use strict";

    function t() {
        return fi.apply(null, arguments)
    }

    function e(t) {
        fi = t
    }

    function n(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function i(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function r(t) {
        var e;
        for (e in t) return !1;
        return !0
    }

    function s(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function o(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
        return i
    }

    function a(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function l(t, e) {
        for (var n in e) a(e, n) && (t[n] = e[n]);
        return a(e, "toString") && (t.toString = e.toString), a(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function c(t, e, n, i) {
        return ge(t, e, n, i, !0).utc()
    }

    function u() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function d(t) {
        return null == t._pf && (t._pf = u()), t._pf
    }

    function h(t) {
        if (null == t._isValid) {
            var e = d(t),
                n = pi.call(e.parsedDateParts, function (t) {
                    return null != t
                }),
                i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
            if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
            t._isValid = i
        }
        return t._isValid
    }

    function f(t) {
        var e = c(NaN);
        return null != t ? l(d(e), t) : d(e).userInvalidated = !0, e
    }

    function p(t) {
        return void 0 === t
    }

    function m(t, e) {
        var n, i, r;
        if (p(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), p(e._i) || (t._i = e._i), p(e._f) || (t._f = e._f), p(e._l) || (t._l = e._l), p(e._strict) || (t._strict = e._strict), p(e._tzm) || (t._tzm = e._tzm), p(e._isUTC) || (t._isUTC = e._isUTC), p(e._offset) || (t._offset = e._offset), p(e._pf) || (t._pf = d(e)), p(e._locale) || (t._locale = e._locale), mi.length > 0)
            for (n in mi) i = mi[n], r = e[i], p(r) || (t[i] = r);
        return t
    }

    function g(e) {
        m(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), gi === !1 && (gi = !0, t.updateOffset(this), gi = !1)
    }

    function v(t) {
        return t instanceof g || null != t && null != t._isAMomentObject
    }

    function y(t) {
        return 0 > t ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function b(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = y(e)), n
    }

    function w(t, e, n) {
        var i, r = Math.min(t.length, e.length),
            s = Math.abs(t.length - e.length),
            o = 0;
        for (i = 0; r > i; i++)(n && t[i] !== e[i] || !n && b(t[i]) !== b(e[i])) && o++;
        return o + s
    }

    function _(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function x(e, n) {
        var i = !0;
        return l(function () {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e), i) {
                for (var r, s = [], o = 0; o < arguments.length; o++) {
                    if (r = "", "object" == typeof arguments[o]) {
                        r += "\n[" + o + "] ";
                        for (var a in arguments[0]) r += a + ": " + arguments[0][a] + ", ";
                        r = r.slice(0, -2)
                    } else r = arguments[o];
                    s.push(r)
                }
                _(e + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), i = !1
            }
            return n.apply(this, arguments)
        }, n)
    }

    function k(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n), vi[e] || (_(n), vi[e] = !0)
    }

    function D(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function C(t) {
        var e, n;
        for (n in t) e = t[n], D(e) ? this[n] = e : this["_" + n] = e;
        this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function S(t, e) {
        var n, r = l({}, t);
        for (n in e) a(e, n) && (i(t[n]) && i(e[n]) ? (r[n] = {}, l(r[n], t[n]), l(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
        for (n in t) a(t, n) && !a(e, n) && i(t[n]) && (r[n] = l({}, r[n]));
        return r
    }

    function T(t) {
        null != t && this.set(t)
    }

    function A(t, e, n) {
        var i = this._calendar[t] || this._calendar.sameElse;
        return D(i) ? i.call(e, n) : i
    }

    function E(t) {
        var e = this._longDateFormat[t],
            n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function $() {
        return this._invalidDate
    }

    function M(t) {
        return this._ordinal.replace("%d", t)
    }

    function O(t, e, n, i) {
        var r = this._relativeTime[n];
        return D(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
    }

    function F(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return D(n) ? n(e) : n.replace(/%s/i, e)
    }

    function P(t, e) {
        var n = t.toLowerCase();
        Si[n] = Si[n + "s"] = Si[e] = t
    }

    function N(t) {
        return "string" == typeof t ? Si[t] || Si[t.toLowerCase()] : void 0
    }

    function I(t) {
        var e, n, i = {};
        for (n in t) a(t, n) && (e = N(n), e && (i[e] = t[n]));
        return i
    }

    function L(t, e) {
        Ti[t] = e
    }

    function j(t) {
        var e = [];
        for (var n in t) e.push({
            unit: n,
            priority: Ti[n]
        });
        return e.sort(function (t, e) {
            return t.priority - e.priority
        }), e
    }

    function R(e, n) {
        return function (i) {
            return null != i ? (q(this, e, i), t.updateOffset(this, n), this) : Y(this, e)
        }
    }

    function Y(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function q(t, e, n) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }

    function H(t) {
        return t = N(t), D(this[t]) ? this[t]() : this
    }

    function U(t, e) {
        if ("object" == typeof t) {
            t = I(t);
            for (var n = j(t), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit])
        } else if (t = N(t), D(this[t])) return this[t](e);
        return this
    }

    function W(t, e, n) {
        var i = "" + Math.abs(t),
            r = e - i.length,
            s = t >= 0;
        return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }

    function B(t, e, n, i) {
        var r = i;
        "string" == typeof i && (r = function () {
            return this[i]()
        }), t && (Mi[t] = r), e && (Mi[e[0]] = function () {
            return W(r.apply(this, arguments), e[1], e[2])
        }), n && (Mi[n] = function () {
            return this.localeData().ordinal(r.apply(this, arguments), t)
        })
    }

    function V(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function z(t) {
        var e, n, i = t.match(Ai);
        for (e = 0, n = i.length; n > e; e++) Mi[i[e]] ? i[e] = Mi[i[e]] : i[e] = V(i[e]);
        return function (e) {
            var r, s = "";
            for (r = 0; n > r; r++) s += i[r] instanceof Function ? i[r].call(e, t) : i[r];
            return s
        }
    }

    function G(t, e) {
        return t.isValid() ? (e = J(e, t.localeData()), $i[e] = $i[e] || z(e), $i[e](t)) : t.localeData().invalidDate()
    }

    function J(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (Ei.lastIndex = 0; i >= 0 && Ei.test(t);) t = t.replace(Ei, n), Ei.lastIndex = 0, i -= 1;
        return t
    }

    function K(t, e, n) {
        Ji[t] = D(e) ? e : function (t, i) {
            return t && n ? n : e
        }
    }

    function Z(t, e) {
        return a(Ji, t) ? Ji[t](e._strict, e._locale) : new RegExp(Q(t))
    }

    function Q(t) {
        return X(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, r) {
            return e || n || i || r
        }))
    }

    function X(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function tt(t, e) {
        var n, i = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) {
                n[e] = b(t)
            }), n = 0; n < t.length; n++) Ki[t[n]] = i
    }

    function et(t, e) {
        tt(t, function (t, n, i, r) {
            i._w = i._w || {}, e(t, i._w, i, r)
        })
    }

    function nt(t, e, n) {
        null != e && a(Ki, t) && Ki[t](e, n._a, n, t)
    }

    function it(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function rt(t, e) {
        return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || or).test(e) ? "format" : "standalone"][t.month()] : this._months
    }

    function st(t, e) {
        return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[or.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
    }

    function ot(t, e, n) {
        var i, r, s, o = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i) s = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
        return n ? "MMM" === e ? (r = bi.call(this._shortMonthsParse, o), -1 !== r ? r : null) : (r = bi.call(this._longMonthsParse, o), -1 !== r ? r : null) : "MMM" === e ? (r = bi.call(this._shortMonthsParse, o), -1 !== r ? r : (r = bi.call(this._longMonthsParse, o), -1 !== r ? r : null)) : (r = bi.call(this._longMonthsParse, o), -1 !== r ? r : (r = bi.call(this._shortMonthsParse, o), -1 !== r ? r : null))
    }

    function at(t, e, n) {
        var i, r, s;
        if (this._monthsParseExact) return ot.call(this, t, e, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
            if (r = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
            if (!n && this._monthsParse[i].test(t)) return i
        }
    }

    function lt(t, e) {
        var n;
        if (!t.isValid()) return t;
        if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = b(e);
            else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
        return n = Math.min(t.date(), it(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
    }

    function ct(e) {
        return null != e ? (lt(this, e), t.updateOffset(this, !0), this) : Y(this, "Month")
    }

    function ut() {
        return it(this.year(), this.month())
    }

    function dt(t) {
        return this._monthsParseExact ? (a(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = cr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function ht(t) {
        return this._monthsParseExact ? (a(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = ur), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }

    function ft() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i = [],
            r = [],
            s = [];
        for (e = 0; 12 > e; e++) n = c([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
        for (i.sort(t), r.sort(t), s.sort(t), e = 0; 12 > e; e++) i[e] = X(i[e]), r[e] = X(r[e]);
        for (e = 0; 24 > e; e++) s[e] = X(s[e]);
        this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function pt(t) {
        return mt(t) ? 366 : 365
    }

    function mt(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function gt() {
        return mt(this.year())
    }

    function vt(t, e, n, i, r, s, o) {
        var a = new Date(t, e, n, i, r, s, o);
        return 100 > t && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
    }

    function yt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function bt(t, e, n) {
        var i = 7 + e - n,
            r = (7 + yt(t, 0, i).getUTCDay() - e) % 7;
        return -r + i - 1
    }

    function wt(t, e, n, i, r) {
        var s, o, a = (7 + n - i) % 7,
            l = bt(t, i, r),
            c = 1 + 7 * (e - 1) + a + l;
        return 0 >= c ? (s = t - 1, o = pt(s) + c) : c > pt(t) ? (s = t + 1, o = c - pt(t)) : (s = t, o = c), {
            year: s,
            dayOfYear: o
        }
    }

    function _t(t, e, n) {
        var i, r, s = bt(t.year(), e, n),
            o = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
        return 1 > o ? (r = t.year() - 1, i = o + xt(r, e, n)) : o > xt(t.year(), e, n) ? (i = o - xt(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = o), {
            week: i,
            year: r
        }
    }

    function xt(t, e, n) {
        var i = bt(t, e, n),
            r = bt(t + 1, e, n);
        return (pt(t) - i + r) / 7
    }

    function kt(t) {
        return _t(t, this._week.dow, this._week.doy).week
    }

    function Dt() {
        return this._week.dow
    }

    function Ct() {
        return this._week.doy
    }

    function St(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Tt(t) {
        var e = _t(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function At(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }

    function Et(t, e) {
        return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
    }

    function $t(t, e) {
        return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
    }

    function Mt(t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }

    function Ot(t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }

    function Ft(t, e, n) {
        var i, r, s, o = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i) s = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
        return n ? "dddd" === e ? (r = bi.call(this._weekdaysParse, o), -1 !== r ? r : null) : "ddd" === e ? (r = bi.call(this._shortWeekdaysParse, o), -1 !== r ? r : null) : (r = bi.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "dddd" === e ? (r = bi.call(this._weekdaysParse, o), -1 !== r ? r : (r = bi.call(this._shortWeekdaysParse, o), -1 !== r ? r : (r = bi.call(this._minWeekdaysParse, o), -1 !== r ? r : null))) : "ddd" === e ? (r = bi.call(this._shortWeekdaysParse, o), -1 !== r ? r : (r = bi.call(this._weekdaysParse, o), -1 !== r ? r : (r = bi.call(this._minWeekdaysParse, o), -1 !== r ? r : null))) : (r = bi.call(this._minWeekdaysParse, o), -1 !== r ? r : (r = bi.call(this._weekdaysParse, o), -1 !== r ? r : (r = bi.call(this._shortWeekdaysParse, o), -1 !== r ? r : null)))
    }

    function Pt(t, e, n) {
        var i, r, s;
        if (this._weekdaysParseExact) return Ft.call(this, t, e, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
            if (r = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
            if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
            if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
            if (!n && this._weekdaysParse[i].test(t)) return i
        }
    }

    function Nt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = At(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function It(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function Lt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
            var e = Et(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7)
        }
        return this.day() || 7
    }

    function jt(t) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = gr), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Rt(t) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vr), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Yt(t) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = yr), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function qt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i, r, s, o = [],
            a = [],
            l = [],
            u = [];
        for (e = 0; 7 > e; e++) n = c([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), o.push(i), a.push(r), l.push(s), u.push(i), u.push(r), u.push(s);
        for (o.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; 7 > e; e++) a[e] = X(a[e]), l[e] = X(l[e]), u[e] = X(u[e]);
        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
    }

    function Ht() {
        return this.hours() % 12 || 12
    }

    function Ut() {
        return this.hours() || 24
    }

    function Wt(t, e) {
        B(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function Bt(t, e) {
        return e._meridiemParse
    }

    function Vt(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function zt(t, e, n) {
        return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }

    function Gt(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function Jt(t) {
        for (var e, n, i, r, s = 0; s < t.length;) {
            for (r = Gt(t[s]).split("-"), e = r.length, n = Gt(t[s + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (i = Kt(r.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && w(r, n, !0) >= e - 1) break;
                e--
            }
            s++
        }
        return null
    }

    function Kt(t) {
        var e = null;
        if (!kr[t] && "undefined" != typeof module && module && module.exports) try {
            e = br._abbr, require("./locale/" + t), Zt(e)
        } catch (t) {}
        return kr[t]
    }

    function Zt(t, e) {
        var n;
        return t && (n = p(e) ? te(t) : Qt(t, e), n && (br = n)), br._abbr
    }

    function Qt(t, e) {
        if (null !== e) {
            var n = xr;
            return e.abbr = t, null != kr[t] ? (k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = kr[t]._config) : null != e.parentLocale && (null != kr[e.parentLocale] ? n = kr[e.parentLocale]._config : k("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), kr[t] = new T(S(n, e)), Zt(t), kr[t]
        }
        return delete kr[t], null
    }

    function Xt(t, e) {
        if (null != e) {
            var n, i = xr;
            null != kr[t] && (i = kr[t]._config), e = S(i, e), n = new T(e), n.parentLocale = kr[t], kr[t] = n, Zt(t)
        } else null != kr[t] && (null != kr[t].parentLocale ? kr[t] = kr[t].parentLocale : null != kr[t] && delete kr[t]);
        return kr[t]
    }

    function te(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return br;
        if (!n(t)) {
            if (e = Kt(t)) return e;
            t = [t]
        }
        return Jt(t)
    }

    function ee() {
        return yi(kr)
    }

    function ne(t) {
        var e, n = t._a;
        return n && -2 === d(t).overflow && (e = n[Qi] < 0 || n[Qi] > 11 ? Qi : n[Xi] < 1 || n[Xi] > it(n[Zi], n[Qi]) ? Xi : n[tr] < 0 || n[tr] > 24 || 24 === n[tr] && (0 !== n[er] || 0 !== n[nr] || 0 !== n[ir]) ? tr : n[er] < 0 || n[er] > 59 ? er : n[nr] < 0 || n[nr] > 59 ? nr : n[ir] < 0 || n[ir] > 999 ? ir : -1, d(t)._overflowDayOfYear && (Zi > e || e > Xi) && (e = Xi), d(t)._overflowWeeks && -1 === e && (e = rr), d(t)._overflowWeekday && -1 === e && (e = sr), d(t).overflow = e), t
    }

    function ie(t) {
        var e, n, i, r, s, o, a = t._i,
            l = Dr.exec(a) || Cr.exec(a);
        if (l) {
            for (d(t).iso = !0, e = 0, n = Tr.length; n > e; e++)
                if (Tr[e][1].exec(l[1])) {
                    r = Tr[e][0], i = Tr[e][2] !== !1;
                    break
                }
            if (null == r) return void(t._isValid = !1);
            if (l[3]) {
                for (e = 0, n = Ar.length; n > e; e++)
                    if (Ar[e][1].exec(l[3])) {
                        s = (l[2] || " ") + Ar[e][0];
                        break
                    }
                if (null == s) return void(t._isValid = !1)
            }
            if (!i && null != s) return void(t._isValid = !1);
            if (l[4]) {
                if (!Sr.exec(l[4])) return void(t._isValid = !1);
                o = "Z"
            }
            t._f = r + (s || "") + (o || ""), ce(t)
        } else t._isValid = !1
    }

    function re(e) {
        var n = Er.exec(e._i);
        return null !== n ? void(e._d = new Date(+n[1])) : (ie(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
    }

    function se(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function oe(e) {
        var n = new Date(t.now());
        return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }

    function ae(t) {
        var e, n, i, r, s = [];
        if (!t._d) {
            for (i = oe(t), t._w && null == t._a[Xi] && null == t._a[Qi] && le(t), t._dayOfYear && (r = se(t._a[Zi], i[Zi]), t._dayOfYear > pt(r) && (d(t)._overflowDayOfYear = !0), n = yt(r, 0, t._dayOfYear), t._a[Qi] = n.getUTCMonth(), t._a[Xi] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = s[e] = i[e];
            for (; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[tr] && 0 === t._a[er] && 0 === t._a[nr] && 0 === t._a[ir] && (t._nextDay = !0, t._a[tr] = 0), t._d = (t._useUTC ? yt : vt).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[tr] = 24)
        }
    }

    function le(t) {
        var e, n, i, r, s, o, a, l;
        e = t._w, null != e.GG || null != e.W || null != e.E ? (s = 1, o = 4, n = se(e.GG, t._a[Zi], _t(ve(), 1, 4).year), i = se(e.W, 1), r = se(e.E, 1), (1 > r || r > 7) && (l = !0)) : (s = t._locale._week.dow, o = t._locale._week.doy, n = se(e.gg, t._a[Zi], _t(ve(), s, o).year), i = se(e.w, 1), null != e.d ? (r = e.d, (0 > r || r > 6) && (l = !0)) : null != e.e ? (r = e.e + s, (e.e < 0 || e.e > 6) && (l = !0)) : r = s), 1 > i || i > xt(n, s, o) ? d(t)._overflowWeeks = !0 : null != l ? d(t)._overflowWeekday = !0 : (a = wt(n, i, r, s, o), t._a[Zi] = a.year, t._dayOfYear = a.dayOfYear)
    }

    function ce(e) {
        if (e._f === t.ISO_8601) return void ie(e);
        e._a = [], d(e).empty = !0;
        var n, i, r, s, o, a = "" + e._i,
            l = a.length,
            c = 0;
        for (r = J(e._f, e._locale).match(Ai) || [], n = 0; n < r.length; n++) s = r[n], i = (a.match(Z(s, e)) || [])[0], i && (o = a.substr(0, a.indexOf(i)), o.length > 0 && d(e).unusedInput.push(o), a = a.slice(a.indexOf(i) + i.length), c += i.length), Mi[s] ? (i ? d(e).empty = !1 : d(e).unusedTokens.push(s), nt(s, i, e)) : e._strict && !i && d(e).unusedTokens.push(s);
        d(e).charsLeftOver = l - c, a.length > 0 && d(e).unusedInput.push(a), e._a[tr] <= 12 && d(e).bigHour === !0 && e._a[tr] > 0 && (d(e).bigHour = void 0), d(e).parsedDateParts = e._a.slice(0), d(e).meridiem = e._meridiem, e._a[tr] = ue(e._locale, e._a[tr], e._meridiem), ae(e), ne(e)
    }

    function ue(t, e, n) {
        var i;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
    }

    function de(t) {
        var e, n, i, r, s;
        if (0 === t._f.length) return d(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (r = 0; r < t._f.length; r++) s = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], ce(e), h(e) && (s += d(e).charsLeftOver, s += 10 * d(e).unusedTokens.length, d(e).score = s, (null == i || i > s) && (i = s, n = e));
        l(t, n || e)
    }

    function he(t) {
        if (!t._d) {
            var e = I(t._i);
            t._a = o([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                return t && parseInt(t, 10)
            }), ae(t)
        }
    }

    function fe(t) {
        var e = new g(ne(pe(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function pe(t) {
        var e = t._i,
            i = t._f;
        return t._locale = t._locale || te(t._l), null === e || void 0 === i && "" === e ? f({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), v(e) ? new g(ne(e)) : (n(i) ? de(t) : s(e) ? t._d = e : i ? ce(t) : me(t), h(t) || (t._d = null), t))
    }

    function me(e) {
        var i = e._i;
        void 0 === i ? e._d = new Date(t.now()) : s(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? re(e) : n(i) ? (e._a = o(i.slice(0), function (t) {
            return parseInt(t, 10)
        }), ae(e)) : "object" == typeof i ? he(e) : "number" == typeof i ? e._d = new Date(i) : t.createFromInputFallback(e)
    }

    function ge(t, e, s, o, a) {
        var l = {};
        return "boolean" == typeof s && (o = s, s = void 0), (i(t) && r(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = s, l._i = t, l._f = e, l._strict = o, fe(l)
    }

    function ve(t, e, n, i) {
        return ge(t, e, n, i, !1)
    }

    function ye(t, e) {
        var i, r;
        if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return ve();
        for (i = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](i) || (i = e[r]);
        return i
    }

    function be() {
        var t = [].slice.call(arguments, 0);
        return ye("isBefore", t)
    }

    function we() {
        var t = [].slice.call(arguments, 0);
        return ye("isAfter", t)
    }

    function _e(t) {
        var e = I(t),
            n = e.year || 0,
            i = e.quarter || 0,
            r = e.month || 0,
            s = e.week || 0,
            o = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            c = e.second || 0,
            u = e.millisecond || 0;
        this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +o + 7 * s, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = te(), this._bubble()
    }

    function xe(t) {
        return t instanceof _e
    }

    function ke(t) {
        return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function De(t, e) {
        B(t, 0, 0, function () {
            var t = this.utcOffset(),
                n = "+";
            return 0 > t && (t = -t, n = "-"), n + W(~~(t / 60), 2) + e + W(~~t % 60, 2)
        })
    }

    function Ce(t, e) {
        var n = (e || "").match(t) || [],
            i = n[n.length - 1] || [],
            r = (i + "").match(Fr) || ["-", 0, 0],
            s = +(60 * r[1]) + b(r[2]);
        return "+" === r[0] ? s : -s
    }

    function Se(e, n) {
        var i, r;
        return n._isUTC ? (i = n.clone(), r = (v(e) || s(e) ? e.valueOf() : ve(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), t.updateOffset(i, !1), i) : ve(e).local()
    }

    function Te(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Ae(e, n) {
        var i, r = this._offset || 0;
        return this.isValid() ? null != e ? ("string" == typeof e ? e = Ce(Vi, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = Te(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!n || this._changeInProgress ? We(this, Re(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Te(this) : null != e ? this : NaN
    }

    function Ee(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function $e(t) {
        return this.utcOffset(0, t)
    }

    function Me(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Te(this), "m")), this
    }

    function Oe() {
        if (this._tzm) this.utcOffset(this._tzm);
        else if ("string" == typeof this._i) {
            var t = Ce(Bi, this._i);
            0 === t ? this.utcOffset(0, !0) : this.utcOffset(Ce(Bi, this._i))
        }
        return this
    }

    function Fe(t) {
        return !!this.isValid() && (t = t ? ve(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
    }

    function Pe() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ne() {
        if (!p(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (m(t, this), t = pe(t), t._a) {
            var e = t._isUTC ? c(t._a) : ve(t._a);
            this._isDSTShifted = this.isValid() && w(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Ie() {
        return !!this.isValid() && !this._isUTC
    }

    function Le() {
        return !!this.isValid() && this._isUTC
    }

    function je() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    function Re(t, e) {
        var n, i, r, s = t,
            o = null;
        return xe(t) ? s = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (o = Pr.exec(t)) ? (n = "-" === o[1] ? -1 : 1, s = {
            y: 0,
            d: b(o[Xi]) * n,
            h: b(o[tr]) * n,
            m: b(o[er]) * n,
            s: b(o[nr]) * n,
            ms: b(ke(1e3 * o[ir])) * n
        }) : (o = Nr.exec(t)) ? (n = "-" === o[1] ? -1 : 1, s = {
            y: Ye(o[2], n),
            M: Ye(o[3], n),
            w: Ye(o[4], n),
            d: Ye(o[5], n),
            h: Ye(o[6], n),
            m: Ye(o[7], n),
            s: Ye(o[8], n)
        }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = He(ve(s.from), ve(s.to)), s = {}, s.ms = r.milliseconds, s.M = r.months), i = new _e(s), xe(t) && a(t, "_locale") && (i._locale = t._locale), i
    }

    function Ye(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }

    function qe(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function He(t, e) {
        var n;
        return t.isValid() && e.isValid() ? (e = Se(e, t), t.isBefore(e) ? n = qe(t, e) : (n = qe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Ue(t, e) {
        return function (n, i) {
            var r, s;
            return null === i || isNaN(+i) || (k(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, r = Re(n, i), We(this, r, t), this
        }
    }

    function We(e, n, i, r) {
        var s = n._milliseconds,
            o = ke(n._days),
            a = ke(n._months);
        e.isValid() && (r = null == r || r, s && e._d.setTime(e._d.valueOf() + s * i), o && q(e, "Date", Y(e, "Date") + o * i), a && lt(e, Y(e, "Month") + a * i), r && t.updateOffset(e, o || a))
    }

    function Be(t, e) {
        var n = t.diff(e, "days", !0);
        return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
    }

    function Ve(e, n) {
        var i = e || ve(),
            r = Se(i, this).startOf("day"),
            s = t.calendarFormat(this, r) || "sameElse",
            o = n && (D(n[s]) ? n[s].call(this, i) : n[s]);
        return this.format(o || this.localeData().calendar(s, this, ve(i)))
    }

    function ze() {
        return new g(this)
    }

    function Ge(t, e) {
        var n = v(t) ? t : ve(t);
        return !(!this.isValid() || !n.isValid()) && (e = N(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
    }

    function Je(t, e) {
        var n = v(t) ? t : ve(t);
        return !(!this.isValid() || !n.isValid()) && (e = N(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
    }

    function Ke(t, e, n, i) {
        return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
    }

    function Ze(t, e) {
        var n, i = v(t) ? t : ve(t);
        return !(!this.isValid() || !i.isValid()) && (e = N(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
    }

    function Qe(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function Xe(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function tn(t, e, n) {
        var i, r, s, o;
        return this.isValid() ? (i = Se(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = N(e), "year" === e || "month" === e || "quarter" === e ? (o = en(this, i), "quarter" === e ? o /= 3 : "year" === e && (o /= 12)) : (s = this - i, o = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - r) / 864e5 : "week" === e ? (s - r) / 6048e5 : s), n ? o : y(o)) : NaN) : NaN
    }

    function en(t, e) {
        var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            s = t.clone().add(r, "months");
        return 0 > e - s ? (n = t.clone().add(r - 1, "months"), i = (e - s) / (s - n)) : (n = t.clone().add(r + 1, "months"), i = (e - s) / (n - s)), -(r + i) || 0
    }

    function nn() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function rn() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : G(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : G(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function sn(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var n = G(this, e);
        return this.localeData().postformat(n)
    }

    function on(t, e) {
        return this.isValid() && (v(t) && t.isValid() || ve(t).isValid()) ? Re({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function an(t) {
        return this.from(ve(), t)
    }

    function ln(t, e) {
        return this.isValid() && (v(t) && t.isValid() || ve(t).isValid()) ? Re({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function cn(t) {
        return this.to(ve(), t)
    }

    function un(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = te(t), null != e && (this._locale = e), this)
    }

    function dn() {
        return this._locale
    }

    function hn(t) {
        switch (t = N(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function fn(t) {
        return t = N(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }

    function pn() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function mn() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function gn() {
        return new Date(this.valueOf())
    }

    function vn() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function yn() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function bn() {
        return this.isValid() ? this.toISOString() : null
    }

    function wn() {
        return h(this)
    }

    function _n() {
        return l({}, d(this))
    }

    function xn() {
        return d(this).overflow
    }

    function kn() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Dn(t, e) {
        B(0, [t, t.length], 0, e)
    }

    function Cn(t) {
        return En.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Sn(t) {
        return En.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Tn() {
        return xt(this.year(), 1, 4)
    }

    function An() {
        var t = this.localeData()._week;
        return xt(this.year(), t.dow, t.doy)
    }

    function En(t, e, n, i, r) {
        var s;
        return null == t ? _t(this, i, r).year : (s = xt(t, i, r), e > s && (e = s), $n.call(this, t, e, n, i, r))
    }

    function $n(t, e, n, i, r) {
        var s = wt(t, e, n, i, r),
            o = yt(s.year, 0, s.dayOfYear);
        return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
    }

    function Mn(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function On(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function Fn(t, e) {
        e[ir] = b(1e3 * ("0." + t))
    }

    function Pn() {
        return this._isUTC ? "UTC" : ""
    }

    function Nn() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function In(t) {
        return ve(1e3 * t)
    }

    function Ln() {
        return ve.apply(null, arguments).parseZone()
    }

    function jn(t) {
        return t
    }

    function Rn(t, e, n, i) {
        var r = te(),
            s = c().set(i, e);
        return r[n](s, t)
    }

    function Yn(t, e, n) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Rn(t, e, n, "month");
        var i, r = [];
        for (i = 0; 12 > i; i++) r[i] = Rn(t, i, n, "month");
        return r
    }

    function qn(t, e, n, i) {
        "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
        var r = te(),
            s = t ? r._week.dow : 0;
        if (null != n) return Rn(e, (n + s) % 7, i, "day");
        var o, a = [];
        for (o = 0; 7 > o; o++) a[o] = Rn(e, (o + s) % 7, i, "day");
        return a
    }

    function Hn(t, e) {
        return Yn(t, e, "months")
    }

    function Un(t, e) {
        return Yn(t, e, "monthsShort")
    }

    function Wn(t, e, n) {
        return qn(t, e, n, "weekdays")
    }

    function Bn(t, e, n) {
        return qn(t, e, n, "weekdaysShort")
    }

    function Vn(t, e, n) {
        return qn(t, e, n, "weekdaysMin")
    }

    function zn() {
        var t = this._data;
        return this._milliseconds = zr(this._milliseconds), this._days = zr(this._days), this._months = zr(this._months), t.milliseconds = zr(t.milliseconds), t.seconds = zr(t.seconds), t.minutes = zr(t.minutes), t.hours = zr(t.hours), t.months = zr(t.months), t.years = zr(t.years), this
    }

    function Gn(t, e, n, i) {
        var r = Re(e, n);
        return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
    }

    function Jn(t, e) {
        return Gn(this, t, e, 1)
    }

    function Kn(t, e) {
        return Gn(this, t, e, -1)
    }

    function Zn(t) {
        return 0 > t ? Math.floor(t) : Math.ceil(t)
    }

    function Qn() {
        var t, e, n, i, r, s = this._milliseconds,
            o = this._days,
            a = this._months,
            l = this._data;
        return s >= 0 && o >= 0 && a >= 0 || 0 >= s && 0 >= o && 0 >= a || (s += 864e5 * Zn(ti(a) + o), o = 0, a = 0), l.milliseconds = s % 1e3, t = y(s / 1e3), l.seconds = t % 60, e = y(t / 60), l.minutes = e % 60, n = y(e / 60), l.hours = n % 24, o += y(n / 24), r = y(Xn(o)), a += r, o -= Zn(ti(r)), i = y(a / 12), a %= 12, l.days = o, l.months = a, l.years = i, this
    }

    function Xn(t) {
        return 4800 * t / 146097
    }

    function ti(t) {
        return 146097 * t / 4800
    }

    function ei(t) {
        var e, n, i = this._milliseconds;
        if (t = N(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + Xn(e), "month" === t ? n : n / 12;
        switch (e = this._days + Math.round(ti(this._months)), t) {
            case "week":
                return e / 7 + i / 6048e5;
            case "day":
                return e + i / 864e5;
            case "hour":
                return 24 * e + i / 36e5;
            case "minute":
                return 1440 * e + i / 6e4;
            case "second":
                return 86400 * e + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + i;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function ni() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
    }

    function ii(t) {
        return function () {
            return this.as(t)
        }
    }

    function ri(t) {
        return t = N(t), this[t + "s"]()
    }

    function si(t) {
        return function () {
            return this._data[t]
        }
    }

    function oi() {
        return y(this.days() / 7)
    }

    function ai(t, e, n, i, r) {
        return r.relativeTime(e || 1, !!n, t, i)
    }

    function li(t, e, n) {
        var i = Re(t).abs(),
            r = cs(i.as("s")),
            s = cs(i.as("m")),
            o = cs(i.as("h")),
            a = cs(i.as("d")),
            l = cs(i.as("M")),
            c = cs(i.as("y")),
            u = r < us.s && ["s", r] || 1 >= s && ["m"] || s < us.m && ["mm", s] || 1 >= o && ["h"] || o < us.h && ["hh", o] || 1 >= a && ["d"] || a < us.d && ["dd", a] || 1 >= l && ["M"] || l < us.M && ["MM", l] || 1 >= c && ["y"] || ["yy", c];
        return u[2] = e, u[3] = +t > 0, u[4] = n, ai.apply(null, u)
    }

    function ci(t) {
        return void 0 === t ? cs : "function" == typeof t && (cs = t, !0)
    }

    function ui(t, e) {
        return void 0 !== us[t] && (void 0 === e ? us[t] : (us[t] = e, !0))
    }

    function di(t) {
        var e = this.localeData(),
            n = li(this, !t, e);
        return t && (n = e.pastFuture(+this, n)), e.postformat(n)
    }

    function hi() {
        var t, e, n, i = ds(this._milliseconds) / 1e3,
            r = ds(this._days),
            s = ds(this._months);
        t = y(i / 60), e = y(t / 60), i %= 60, t %= 60, n = y(s / 12), s %= 12;
        var o = n,
            a = s,
            l = r,
            c = e,
            u = t,
            d = i,
            h = this.asSeconds();
        return h ? (0 > h ? "-" : "") + "P" + (o ? o + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (c || u || d ? "T" : "") + (c ? c + "H" : "") + (u ? u + "M" : "") + (d ? d + "S" : "") : "P0D"
    }
    var fi, pi;
    pi = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), n = e.length >>> 0, i = 0; n > i; i++)
            if (i in e && t.call(this, e[i], i, e)) return !0;
        return !1
    };
    var mi = t.momentProperties = [],
        gi = !1,
        vi = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var yi;
    yi = Object.keys ? Object.keys : function (t) {
        var e, n = [];
        for (e in t) a(t, e) && n.push(e);
        return n
    };
    var bi, wi = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        _i = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        xi = "Invalid date",
        ki = "%d",
        Di = /\d{1,2}/,
        Ci = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Si = {},
        Ti = {},
        Ai = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Ei = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        $i = {},
        Mi = {},
        Oi = /\d/,
        Fi = /\d\d/,
        Pi = /\d{3}/,
        Ni = /\d{4}/,
        Ii = /[+-]?\d{6}/,
        Li = /\d\d?/,
        ji = /\d\d\d\d?/,
        Ri = /\d\d\d\d\d\d?/,
        Yi = /\d{1,3}/,
        qi = /\d{1,4}/,
        Hi = /[+-]?\d{1,6}/,
        Ui = /\d+/,
        Wi = /[+-]?\d+/,
        Bi = /Z|[+-]\d\d:?\d\d/gi,
        Vi = /Z|[+-]\d\d(?::?\d\d)?/gi,
        zi = /[+-]?\d+(\.\d{1,3})?/,
        Gi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        Ji = {},
        Ki = {},
        Zi = 0,
        Qi = 1,
        Xi = 2,
        tr = 3,
        er = 4,
        nr = 5,
        ir = 6,
        rr = 7,
        sr = 8;
    bi = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e;
        return -1
    }, B("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), B("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), B("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), P("month", "M"), L("month", 8), K("M", Li), K("MM", Li, Fi), K("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), K("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), tt(["M", "MM"], function (t, e) {
        e[Qi] = b(t) - 1
    }), tt(["MMM", "MMMM"], function (t, e, n, i) {
        var r = n._locale.monthsParse(t, i, n._strict);
        null != r ? e[Qi] = r : d(n).invalidMonth = t
    });
    var or = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        ar = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        lr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        cr = Gi,
        ur = Gi;
    B("Y", 0, 0, function () {
        var t = this.year();
        return 9999 >= t ? "" + t : "+" + t
    }), B(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), L("year", 1), K("Y", Wi), K("YY", Li, Fi), K("YYYY", qi, Ni), K("YYYYY", Hi, Ii), K("YYYYYY", Hi, Ii), tt(["YYYYY", "YYYYYY"], Zi), tt("YYYY", function (e, n) {
        n[Zi] = 2 === e.length ? t.parseTwoDigitYear(e) : b(e)
    }), tt("YY", function (e, n) {
        n[Zi] = t.parseTwoDigitYear(e)
    }), tt("Y", function (t, e) {
        e[Zi] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function (t) {
        return b(t) + (b(t) > 68 ? 1900 : 2e3)
    };
    var dr = R("FullYear", !0);
    B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), L("week", 5), L("isoWeek", 5), K("w", Li), K("ww", Li, Fi), K("W", Li), K("WW", Li, Fi), et(["w", "ww", "W", "WW"], function (t, e, n, i) {
        e[i.substr(0, 1)] = b(t)
    });
    var hr = {
        dow: 0,
        doy: 6
    };
    B("d", 0, "do", "day"), B("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), B("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), B("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), K("d", Li), K("e", Li), K("E", Li), K("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), K("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), K("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), et(["dd", "ddd", "dddd"], function (t, e, n, i) {
        var r = n._locale.weekdaysParse(t, i, n._strict);
        null != r ? e.d = r : d(n).invalidWeekday = t
    }), et(["d", "e", "E"], function (t, e, n, i) {
        e[i] = b(t)
    });
    var fr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        pr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        mr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        gr = Gi,
        vr = Gi,
        yr = Gi;
    B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Ht), B("k", ["kk", 2], 0, Ut), B("hmm", 0, 0, function () {
        return "" + Ht.apply(this) + W(this.minutes(), 2)
    }), B("hmmss", 0, 0, function () {
        return "" + Ht.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
    }), B("Hmm", 0, 0, function () {
        return "" + this.hours() + W(this.minutes(), 2)
    }), B("Hmmss", 0, 0, function () {
        return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
    }), Wt("a", !0), Wt("A", !1), P("hour", "h"), L("hour", 13), K("a", Bt), K("A", Bt), K("H", Li), K("h", Li), K("HH", Li, Fi), K("hh", Li, Fi), K("hmm", ji), K("hmmss", Ri), K("Hmm", ji), K("Hmmss", Ri), tt(["H", "HH"], tr), tt(["a", "A"], function (t, e, n) {
        n._isPm = n._locale.isPM(t), n._meridiem = t
    }), tt(["h", "hh"], function (t, e, n) {
        e[tr] = b(t), d(n).bigHour = !0
    }), tt("hmm", function (t, e, n) {
        var i = t.length - 2;
        e[tr] = b(t.substr(0, i)), e[er] = b(t.substr(i)), d(n).bigHour = !0
    }), tt("hmmss", function (t, e, n) {
        var i = t.length - 4,
            r = t.length - 2;
        e[tr] = b(t.substr(0, i)), e[er] = b(t.substr(i, 2)), e[nr] = b(t.substr(r)), d(n).bigHour = !0
    }), tt("Hmm", function (t, e, n) {
        var i = t.length - 2;
        e[tr] = b(t.substr(0, i)), e[er] = b(t.substr(i))
    }), tt("Hmmss", function (t, e, n) {
        var i = t.length - 4,
            r = t.length - 2;
        e[tr] = b(t.substr(0, i)), e[er] = b(t.substr(i, 2)), e[nr] = b(t.substr(r))
    });
    var br, wr = /[ap]\.?m?\.?/i,
        _r = R("Hours", !0),
        xr = {
            calendar: wi,
            longDateFormat: _i,
            invalidDate: xi,
            ordinal: ki,
            ordinalParse: Di,
            relativeTime: Ci,
            months: ar,
            monthsShort: lr,
            week: hr,
            weekdays: fr,
            weekdaysMin: mr,
            weekdaysShort: pr,
            meridiemParse: wr
        },
        kr = {},
        Dr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Cr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Sr = /Z|[+-]\d\d(?::?\d\d)?/,
        Tr = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Ar = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Er = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), t.ISO_8601 = function () {};
    var $r = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = ve.apply(null, arguments);
            return this.isValid() && t.isValid() ? this > t ? this : t : f()
        }),
        Mr = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = ve.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : f()
        }),
        Or = function () {
            return Date.now ? Date.now() : +new Date
        };
    De("Z", ":"), De("ZZ", ""), K("Z", Vi), K("ZZ", Vi), tt(["Z", "ZZ"], function (t, e, n) {
        n._useUTC = !0, n._tzm = Ce(Vi, t)
    });
    var Fr = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {};
    var Pr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Nr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Re.fn = _e.prototype;
    var Ir = Ue(1, "add"),
        Lr = Ue(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var jr = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    B(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), B(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Dn("gggg", "weekYear"), Dn("ggggg", "weekYear"), Dn("GGGG", "isoWeekYear"), Dn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), K("G", Wi), K("g", Wi), K("GG", Li, Fi), K("gg", Li, Fi), K("GGGG", qi, Ni), K("gggg", qi, Ni), K("GGGGG", Hi, Ii), K("ggggg", Hi, Ii), et(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
        e[i.substr(0, 2)] = b(t)
    }), et(["gg", "GG"], function (e, n, i, r) {
        n[r] = t.parseTwoDigitYear(e)
    }), B("Q", 0, "Qo", "quarter"), P("quarter", "Q"), L("quarter", 7), K("Q", Oi), tt("Q", function (t, e) {
        e[Qi] = 3 * (b(t) - 1)
    }), B("D", ["DD", 2], "Do", "date"), P("date", "D"), L("date", 9), K("D", Li), K("DD", Li, Fi), K("Do", function (t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }), tt(["D", "DD"], Xi), tt("Do", function (t, e) {
        e[Xi] = b(t.match(Li)[0], 10)
    });
    var Rr = R("Date", !0);
    B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), L("dayOfYear", 4), K("DDD", Yi), K("DDDD", Pi), tt(["DDD", "DDDD"], function (t, e, n) {
        n._dayOfYear = b(t)
    }), B("m", ["mm", 2], 0, "minute"), P("minute", "m"), L("minute", 14), K("m", Li), K("mm", Li, Fi), tt(["m", "mm"], er);
    var Yr = R("Minutes", !1);
    B("s", ["ss", 2], 0, "second"), P("second", "s"), L("second", 15), K("s", Li), K("ss", Li, Fi), tt(["s", "ss"], nr);
    var qr = R("Seconds", !1);
    B("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), B(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), B(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), B(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), B(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), B(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), B(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), P("millisecond", "ms"), L("millisecond", 16), K("S", Yi, Oi), K("SS", Yi, Fi), K("SSS", Yi, Pi);
    var Hr;
    for (Hr = "SSSS"; Hr.length <= 9; Hr += "S") K(Hr, Ui);
    for (Hr = "S"; Hr.length <= 9; Hr += "S") tt(Hr, Fn);
    var Ur = R("Milliseconds", !1);
    B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
    var Wr = g.prototype;
    Wr.add = Ir, Wr.calendar = Ve, Wr.clone = ze, Wr.diff = tn, Wr.endOf = fn, Wr.format = sn, Wr.from = on, Wr.fromNow = an, Wr.to = ln, Wr.toNow = cn, Wr.get = H, Wr.invalidAt = xn, Wr.isAfter = Ge, Wr.isBefore = Je, Wr.isBetween = Ke, Wr.isSame = Ze, Wr.isSameOrAfter = Qe, Wr.isSameOrBefore = Xe, Wr.isValid = wn, Wr.lang = jr, Wr.locale = un, Wr.localeData = dn, Wr.max = Mr, Wr.min = $r, Wr.parsingFlags = _n, Wr.set = U, Wr.startOf = hn, Wr.subtract = Lr, Wr.toArray = vn, Wr.toObject = yn, Wr.toDate = gn, Wr.toISOString = rn, Wr.toJSON = bn, Wr.toString = nn, Wr.unix = mn, Wr.valueOf = pn, Wr.creationData = kn, Wr.year = dr, Wr.isLeapYear = gt, Wr.weekYear = Cn, Wr.isoWeekYear = Sn, Wr.quarter = Wr.quarters = Mn, Wr.month = ct, Wr.daysInMonth = ut, Wr.week = Wr.weeks = St, Wr.isoWeek = Wr.isoWeeks = Tt, Wr.weeksInYear = An, Wr.isoWeeksInYear = Tn, Wr.date = Rr, Wr.day = Wr.days = Nt, Wr.weekday = It, Wr.isoWeekday = Lt, Wr.dayOfYear = On, Wr.hour = Wr.hours = _r, Wr.minute = Wr.minutes = Yr, Wr.second = Wr.seconds = qr, Wr.millisecond = Wr.milliseconds = Ur, Wr.utcOffset = Ae, Wr.utc = $e, Wr.local = Me, Wr.parseZone = Oe, Wr.hasAlignedHourOffset = Fe, Wr.isDST = Pe, Wr.isLocal = Ie, Wr.isUtcOffset = Le, Wr.isUtc = je, Wr.isUTC = je, Wr.zoneAbbr = Pn, Wr.zoneName = Nn, Wr.dates = x("dates accessor is deprecated. Use date instead.", Rr), Wr.months = x("months accessor is deprecated. Use month instead", ct), Wr.years = x("years accessor is deprecated. Use year instead", dr), Wr.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ee), Wr.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ne);
    var Br = Wr,
        Vr = T.prototype;
    Vr.calendar = A, Vr.longDateFormat = E, Vr.invalidDate = $, Vr.ordinal = M, Vr.preparse = jn, Vr.postformat = jn, Vr.relativeTime = O, Vr.pastFuture = F, Vr.set = C, Vr.months = rt, Vr.monthsShort = st, Vr.monthsParse = at, Vr.monthsRegex = ht, Vr.monthsShortRegex = dt, Vr.week = kt, Vr.firstDayOfYear = Ct, Vr.firstDayOfWeek = Dt, Vr.weekdays = $t, Vr.weekdaysMin = Ot, Vr.weekdaysShort = Mt, Vr.weekdaysParse = Pt, Vr.weekdaysRegex = jt, Vr.weekdaysShortRegex = Rt, Vr.weekdaysMinRegex = Yt, Vr.isPM = Vt, Vr.meridiem = zt, Zt("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
            var e = t % 10,
                n = 1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }), t.lang = x("moment.lang is deprecated. Use moment.locale instead.", Zt), t.langData = x("moment.langData is deprecated. Use moment.localeData instead.", te);
    var zr = Math.abs,
        Gr = ii("ms"),
        Jr = ii("s"),
        Kr = ii("m"),
        Zr = ii("h"),
        Qr = ii("d"),
        Xr = ii("w"),
        ts = ii("M"),
        es = ii("y"),
        ns = si("milliseconds"),
        is = si("seconds"),
        rs = si("minutes"),
        ss = si("hours"),
        os = si("days"),
        as = si("months"),
        ls = si("years"),
        cs = Math.round,
        us = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        ds = Math.abs,
        hs = _e.prototype;
    hs.abs = zn, hs.add = Jn, hs.subtract = Kn, hs.as = ei, hs.asMilliseconds = Gr, hs.asSeconds = Jr, hs.asMinutes = Kr, hs.asHours = Zr, hs.asDays = Qr, hs.asWeeks = Xr, hs.asMonths = ts, hs.asYears = es, hs.valueOf = ni, hs._bubble = Qn, hs.get = ri, hs.milliseconds = ns, hs.seconds = is, hs.minutes = rs, hs.hours = ss, hs.days = os, hs.weeks = oi, hs.months = as, hs.years = ls, hs.humanize = di, hs.toISOString = hi, hs.toString = hi, hs.toJSON = hi, hs.locale = un, hs.localeData = dn, hs.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", hi), hs.lang = jr, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), K("x", Wi), K("X", zi), tt("X", function (t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }), tt("x", function (t, e, n) {
        n._d = new Date(b(t))
    }), t.version = "2.15.1", e(ve), t.fn = Br, t.min = be, t.max = we, t.now = Or, t.utc = c, t.unix = In, t.months = Hn, t.isDate = s, t.locale = Zt, t.invalid = f, t.duration = Re, t.isMoment = v, t.weekdays = Wn, t.parseZone = Ln, t.localeData = te, t.isDuration = xe, t.monthsShort = Un, t.weekdaysMin = Vn, t.defineLocale = Qt, t.updateLocale = Xt, t.locales = ee, t.weekdaysShort = Bn, t.normalizeUnits = N, t.relativeTimeRounding = ci, t.relativeTimeThreshold = ui, t.calendarFormat = Be, t.prototype = Br;
    var fs = t;
    return fs
}), ! function (t, e) {
    if ("function" == typeof define && define.amd) define("daterangepicker", ["moment", "jquery"], function (n, i) {
        return t.daterangepicker = e(n, i)
    });
    else if ("object" == typeof module && module.exports) {
        var n = "undefined" != typeof window ? window.jQuery : void 0;
        n || (n = require("jquery"), n.fn || (n.fn = {})), module.exports = e(require("moment"), n)
    } else t.daterangepicker = e(t.moment, t.jQuery)
}(this, function (t, e) {
    var n = function (n, i, r) {
        if (this.parentEl = "body", this.element = e(n), this.startDate = t().startOf("day"), this.endDate = t().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyClass = "btn-success", this.cancelClass = "btn-default", this.locale = {
                direction: "ltr",
                format: t.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: t.weekdaysMin(),
                monthNames: t.monthsShort(),
                firstDay: t.localeData().firstDayOfWeek()
            }, this.callback = function () {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, ("object" != typeof i || null === i) && (i = {}), i = e.extend(this.element.data(), i), "string" == typeof i.template || i.template instanceof e || (i.template = '<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_start" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'), this.parentEl = e(i.parentEl && e(i.parentEl).length ? i.parentEl : this.parentEl), this.container = e(i.template).appendTo(this.parentEl), "object" == typeof i.locale && ("string" == typeof i.locale.direction && (this.locale.direction = i.locale.direction), "string" == typeof i.locale.format && (this.locale.format = i.locale.format), "string" == typeof i.locale.separator && (this.locale.separator = i.locale.separator), "object" == typeof i.locale.daysOfWeek && (this.locale.daysOfWeek = i.locale.daysOfWeek.slice()), "object" == typeof i.locale.monthNames && (this.locale.monthNames = i.locale.monthNames.slice()), "number" == typeof i.locale.firstDay && (this.locale.firstDay = i.locale.firstDay), "string" == typeof i.locale.applyLabel && (this.locale.applyLabel = i.locale.applyLabel), "string" == typeof i.locale.cancelLabel && (this.locale.cancelLabel = i.locale.cancelLabel), "string" == typeof i.locale.weekLabel && (this.locale.weekLabel = i.locale.weekLabel), "string" == typeof i.locale.customRangeLabel && (this.locale.customRangeLabel = i.locale.customRangeLabel)), this.container.addClass(this.locale.direction), "string" == typeof i.startDate && (this.startDate = t(i.startDate, this.locale.format)), "string" == typeof i.endDate && (this.endDate = t(i.endDate, this.locale.format)), "string" == typeof i.minDate && (this.minDate = t(i.minDate, this.locale.format)), "string" == typeof i.maxDate && (this.maxDate = t(i.maxDate, this.locale.format)), "object" == typeof i.startDate && (this.startDate = t(i.startDate)), "object" == typeof i.endDate && (this.endDate = t(i.endDate)), "object" == typeof i.minDate && (this.minDate = t(i.minDate)), "object" == typeof i.maxDate && (this.maxDate = t(i.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof i.applyClass && (this.applyClass = i.applyClass), "string" == typeof i.cancelClass && (this.cancelClass = i.cancelClass), "object" == typeof i.dateLimit && (this.dateLimit = i.dateLimit), "string" == typeof i.opens && (this.opens = i.opens), "string" == typeof i.drops && (this.drops = i.drops), "boolean" == typeof i.showWeekNumbers && (this.showWeekNumbers = i.showWeekNumbers), "boolean" == typeof i.showISOWeekNumbers && (this.showISOWeekNumbers = i.showISOWeekNumbers), "string" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses), "object" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses.join(" ")), "boolean" == typeof i.showDropdowns && (this.showDropdowns = i.showDropdowns), "boolean" == typeof i.showCustomRangeLabel && (this.showCustomRangeLabel = i.showCustomRangeLabel), "boolean" == typeof i.singleDatePicker && (this.singleDatePicker = i.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof i.timePicker && (this.timePicker = i.timePicker), "boolean" == typeof i.timePickerSeconds && (this.timePickerSeconds = i.timePickerSeconds), "number" == typeof i.timePickerIncrement && (this.timePickerIncrement = i.timePickerIncrement), "boolean" == typeof i.timePicker24Hour && (this.timePicker24Hour = i.timePicker24Hour), "boolean" == typeof i.autoApply && (this.autoApply = i.autoApply), "boolean" == typeof i.autoUpdateInput && (this.autoUpdateInput = i.autoUpdateInput), "boolean" == typeof i.linkedCalendars && (this.linkedCalendars = i.linkedCalendars), "function" == typeof i.isInvalidDate && (this.isInvalidDate = i.isInvalidDate), "function" == typeof i.isCustomDate && (this.isCustomDate = i.isCustomDate), "boolean" == typeof i.alwaysShowCalendars && (this.alwaysShowCalendars = i.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var s = this.locale.firstDay; s > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
        var o, a, l;
        if ("undefined" == typeof i.startDate && "undefined" == typeof i.endDate && e(this.element).is("input[type=text]")) {
            var c = e(this.element).val(),
                u = c.split(this.locale.separator);
            o = a = null, 2 == u.length ? (o = t(u[0], this.locale.format), a = t(u[1], this.locale.format)) : this.singleDatePicker && "" !== c && (o = t(c, this.locale.format), a = t(c, this.locale.format)), null !== o && null !== a && (this.setStartDate(o), this.setEndDate(a))
        }
        if ("object" == typeof i.ranges) {
            for (l in i.ranges) {
                o = "string" == typeof i.ranges[l][0] ? t(i.ranges[l][0], this.locale.format) : t(i.ranges[l][0]), a = "string" == typeof i.ranges[l][1] ? t(i.ranges[l][1], this.locale.format) : t(i.ranges[l][1]), this.minDate && o.isBefore(this.minDate) && (o = this.minDate.clone());
                var d = this.maxDate;
                if (this.dateLimit && d && o.clone().add(this.dateLimit).isAfter(d) && (d = o.clone().add(this.dateLimit)), d && a.isAfter(d) && (a = d.clone()), !(this.minDate && a.isBefore(this.minDate, this.timepicker ? "minute" : "day") || d && o.isAfter(d, this.timepicker ? "minute" : "day"))) {
                    var h = document.createElement("textarea");
                    h.innerHTML = l;
                    var f = h.value;
                    this.ranges[f] = [o, a]
                }
            }
            var p = "<ul>";
            for (l in this.ranges) p += '<li data-range-key="' + l + '">' + l + "</li>";
            this.showCustomRangeLabel && (p += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), p += "</ul>", this.container.find(".ranges").prepend(p)
        }
        "function" == typeof r && (this.callback = r), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && "object" != typeof i.ranges ? this.container.find(".ranges").hide() : this.autoApply && this.container.find(".applyBtn, .cancelBtn").addClass("hide"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".calendar.left").addClass("single"), this.container.find(".calendar.left").show(), this.container.find(".calendar.right").hide(), this.container.find(".daterangepicker_input input, .daterangepicker_input > i").hide(), this.timePicker ? this.container.find(".ranges ul").hide() : this.container.find(".ranges").hide()), ("undefined" == typeof i.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), "undefined" != typeof i.ranges && "right" == this.opens && this.container.find(".ranges").prependTo(this.container.find(".calendar.left").parent()), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", e.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", e.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", e.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", e.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", e.proxy(this.timeChanged, this)).on("click.daterangepicker", ".daterangepicker_input input", e.proxy(this.showCalendars, this)).on("focus.daterangepicker", ".daterangepicker_input input", e.proxy(this.formInputsFocused, this)).on("blur.daterangepicker", ".daterangepicker_input input", e.proxy(this.formInputsBlurred, this)).on("change.daterangepicker", ".daterangepicker_input input", e.proxy(this.formInputsChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", e.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", e.proxy(this.clickCancel, this)).on("click.daterangepicker", "li", e.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", e.proxy(this.hoverRange, this)).on("mouseleave.daterangepicker", "li", e.proxy(this.updateFormInputs, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": e.proxy(this.show, this),
            "focus.daterangepicker": e.proxy(this.show, this),
            "keyup.daterangepicker": e.proxy(this.elementChanged, this),
            "keydown.daterangepicker": e.proxy(this.keydown, this)
        }) : this.element.on("click.daterangepicker", e.proxy(this.toggle, this)), this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
    };
    return n.prototype = {
        constructor: n,
        setStartDate: function (e) {
            "string" == typeof e && (this.startDate = t(e, this.locale.format)), "object" == typeof e && (this.startDate = t(e)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function (e) {
            "string" == typeof e && (this.endDate = t(e, this.locale.format)), "object" == typeof e && (this.endDate = t(e)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.dateLimit)), this.previousRightTime = this.endDate.clone(), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function () {
            return !1
        },
        isCustomDate: function () {
            return !1
        },
        updateView: function () {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate ? (this.container.find('input[name="daterangepicker_end"]').removeClass("active"), this.container.find('input[name="daterangepicker_start"]').addClass("active")) : (this.container.find('input[name="daterangepicker_end"]').addClass("active"), this.container.find('input[name="daterangepicker_start"]').removeClass("active")), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function () {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function () {
            if (this.timePicker) {
                var t, e, n;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                        var i = this.container.find(".left .ampmselect").val();
                        "PM" === i && 12 > t && (t += 12), "AM" === i && 12 === t && (t = 0)
                    }
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                    var i = this.container.find(".right .ampmselect").val();
                    "PM" === i && 12 > t && (t += 12), "AM" === i && 12 === t && (t = 0)
                }
                this.leftCalendar.month.hour(t).minute(e).second(n), this.rightCalendar.month.hour(t).minute(e).second(n)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function (n) {
            var i = "left" == n ? this.leftCalendar : this.rightCalendar,
                r = i.month.month(),
                s = i.month.year(),
                o = i.month.hour(),
                a = i.month.minute(),
                l = i.month.second(),
                c = t([s, r]).daysInMonth(),
                u = t([s, r, 1]),
                d = t([s, r, c]),
                h = t(u).subtract(1, "month").month(),
                f = t(u).subtract(1, "month").year(),
                p = t([f, h]).daysInMonth(),
                m = u.day(),
                i = [];
            i.firstDay = u, i.lastDay = d;
            for (var g = 0; 6 > g; g++) i[g] = [];
            var v = p - m + this.locale.firstDay + 1;
            v > p && (v -= 7), m == this.locale.firstDay && (v = p - 6);
            for (var y, b, w = t([f, h, v, 12, a, l]), g = 0, y = 0, b = 0; 42 > g; g++, y++, w = t(w).add(24, "hour")) g > 0 && y % 7 === 0 && (y = 0, b++), i[b][y] = w.clone().hour(o).minute(a).second(l), w.hour(12), this.minDate && i[b][y].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && i[b][y].isBefore(this.minDate) && "left" == n && (i[b][y] = this.minDate.clone()), this.maxDate && i[b][y].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && i[b][y].isAfter(this.maxDate) && "right" == n && (i[b][y] = this.maxDate.clone());
            "left" == n ? this.leftCalendar.calendar = i : this.rightCalendar.calendar = i;
            var _ = "left" == n ? this.minDate : this.startDate,
                x = this.maxDate,
                k = ("left" == n ? this.startDate : this.endDate, "ltr" == this.locale.direction ? {
                    left: "chevron-left",
                    right: "chevron-right"
                } : {
                    left: "chevron-right",
                    right: "chevron-left"
                }),
                D = '<table class="table-condensed">';
            D += "<thead>", D += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (D += "<th></th>"), D += _ && !_.isBefore(i.firstDay) || this.linkedCalendars && "left" != n ? "<th></th>" : '<th class="prev available"><i class="fa fa-' + k.left + " glyphicon glyphicon-" + k.left + '"></i></th>';
            var C = this.locale.monthNames[i[1][1].month()] + i[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var S = i[1][1].month(), T = i[1][1].year(), A = x && x.year() || T + 5, E = _ && _.year() || T - 50, $ = T == E, M = T == A, O = '<select class="monthselect">', F = 0; 12 > F; F++) O += (!$ || F >= _.month()) && (!M || F <= x.month()) ? "<option value='" + F + "'" + (F === S ? " selected='selected'" : "") + ">" + this.locale.monthNames[F] + "</option>" : "<option value='" + F + "'" + (F === S ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[F] + "</option>";
                O += "</select>";
                for (var P = '<select class="yearselect">', N = E; A >= N; N++) P += '<option value="' + N + '"' + (N === T ? ' selected="selected"' : "") + ">" + N + "</option>";
                P += "</select>", C = O + P
            }
            if (D += '<th colspan="5" class="month">' + C + "</th>", D += x && !x.isAfter(i.lastDay) || this.linkedCalendars && "right" != n && !this.singleDatePicker ? "<th></th>" : '<th class="next available"><i class="fa fa-' + k.right + " glyphicon glyphicon-" + k.right + '"></i></th>', D += "</tr>", D += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (D += '<th class="week">' + this.locale.weekLabel + "</th>"), e.each(this.locale.daysOfWeek, function (t, e) {
                    D += "<th>" + e + "</th>"
                }), D += "</tr>", D += "</thead>", D += "<tbody>", null == this.endDate && this.dateLimit) {
                var I = this.startDate.clone().add(this.dateLimit).endOf("day");
                (!x || I.isBefore(x)) && (x = I)
            }
            for (var b = 0; 6 > b; b++) {
                D += "<tr>", this.showWeekNumbers ? D += '<td class="week">' + i[b][0].week() + "</td>" : this.showISOWeekNumbers && (D += '<td class="week">' + i[b][0].isoWeek() + "</td>");
                for (var y = 0; 7 > y; y++) {
                    var L = [];
                    i[b][y].isSame(new Date, "day") && L.push("today"), i[b][y].isoWeekday() > 5 && L.push("weekend"), i[b][y].month() != i[1][1].month() && L.push("off"), this.minDate && i[b][y].isBefore(this.minDate, "day") && L.push("off", "disabled"), x && i[b][y].isAfter(x, "day") && L.push("off", "disabled"), this.isInvalidDate(i[b][y]) && L.push("off", "disabled"), i[b][y].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && L.push("active", "start-date"), null != this.endDate && i[b][y].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && L.push("active", "end-date"), null != this.endDate && i[b][y] > this.startDate && i[b][y] < this.endDate && L.push("in-range");
                    var j = this.isCustomDate(i[b][y]);
                    j !== !1 && ("string" == typeof j ? L.push(j) : Array.prototype.push.apply(L, j));
                    for (var R = "", Y = !1, g = 0; g < L.length; g++) R += L[g] + " ", "disabled" == L[g] && (Y = !0);
                    Y || (R += "available"), D += '<td class="' + R.replace(/^\s+|\s+$/g, "") + '" data-title="r' + b + "c" + y + '">' + i[b][y].date() + "</td>"
                }
                D += "</tr>"
            }
            D += "</tbody>", D += "</table>", this.container.find(".calendar." + n + " .calendar-table").html(D)
        },
        renderTimePicker: function (t) {
            if ("right" != t || this.endDate) {
                var e, n, i, r = this.maxDate;
                if (!this.dateLimit || this.maxDate && !this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate) || (r = this.startDate.clone().add(this.dateLimit)), "left" == t) n = this.startDate.clone(), i = this.minDate;
                else if ("right" == t) {
                    n = this.endDate.clone(), i = this.startDate;
                    var s = this.container.find(".calendar.right .calendar-time div");
                    if (!this.endDate && "" != s.html() && (n.hour(s.find(".hourselect option:selected").val() || n.hour()), n.minute(s.find(".minuteselect option:selected").val() || n.minute()), n.second(s.find(".secondselect option:selected").val() || n.second()), !this.timePicker24Hour)) {
                        var o = s.find(".ampmselect option:selected").val();
                        "PM" === o && n.hour() < 12 && n.hour(n.hour() + 12), "AM" === o && 12 === n.hour() && n.hour(0)
                    }
                    n.isBefore(this.startDate) && (n = this.startDate.clone()), r && n.isAfter(r) && (n = r.clone())
                }
                e = '<select class="hourselect">';
                for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = a; l >= c; c++) {
                    var u = c;
                    this.timePicker24Hour || (u = n.hour() >= 12 ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                    var d = n.clone().hour(u),
                        h = !1;
                    i && d.minute(59).isBefore(i) && (h = !0), r && d.minute(0).isAfter(r) && (h = !0), e += u != n.hour() || h ? h ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : '<option value="' + c + '" selected="selected">' + c + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (var c = 0; 60 > c; c += this.timePickerIncrement) {
                    var f = 10 > c ? "0" + c : c,
                        d = n.clone().minute(c),
                        h = !1;
                    i && d.second(59).isBefore(i) && (h = !0), r && d.second(0).isAfter(r) && (h = !0), e += n.minute() != c || h ? h ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + c + '">' + f + "</option>" : '<option value="' + c + '" selected="selected">' + f + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (var c = 0; 60 > c; c++) {
                        var f = 10 > c ? "0" + c : c,
                            d = n.clone().second(c),
                            h = !1;
                        i && d.isBefore(i) && (h = !0), r && d.isAfter(r) && (h = !0), e += n.second() != c || h ? h ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + c + '">' + f + "</option>" : '<option value="' + c + '" selected="selected">' + f + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var p = "",
                        m = "";
                    i && n.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), r && n.clone().hour(0).minute(0).second(0).isAfter(r) && (m = ' disabled="disabled" class="disabled"'), e += n.hour() >= 12 ? '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + m + ">PM</option>", e += "</select>"
                }
                this.container.find(".calendar." + t + " .calendar-time div").html(e)
            }
        },
        updateFormInputs: function () {
            this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus") || (this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format)), this.endDate && this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format)), this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled"))
        },
        move: function () {
            var t, n = {
                    top: 0,
                    left: 0
                },
                i = e(window).width();
            this.parentEl.is("body") || (n = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, i = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - n.top : this.element.offset().top + this.element.outerHeight() - n.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("dropup"), "left" == this.opens ? (this.container.css({
                top: t,
                right: i - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - n.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - n.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > e(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        },
        show: function (t) {
            this.isShowing || (this._outsideClickProxy = e.proxy(function (t) {
                this.outsideClick(t)
            }, this), e(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), e(window).on("resize.daterangepicker", e.proxy(function (t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function (t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate, this.endDate, this.chosenLabel), this.updateElement(), e(document).off(".daterangepicker"), e(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function (t) {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function (t) {
            var n = e(t.target);
            "focusin" == t.type || n.closest(this.element).length || n.closest(this.container).length || n.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function () {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function () {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        hoverRange: function (t) {
            if (!this.container.find("input[name=daterangepicker_start]").is(":focus") && !this.container.find("input[name=daterangepicker_end]").is(":focus")) {
                var e = t.target.getAttribute("data-range-key");
                if (e == this.locale.customRangeLabel) this.updateView();
                else {
                    var n = this.ranges[e];
                    this.container.find("input[name=daterangepicker_start]").val(n[0].format(this.locale.format)), this.container.find("input[name=daterangepicker_end]").val(n[1].format(this.locale.format))
                }
            }
        },
        clickRange: function (t) {
            var e = t.target.getAttribute("data-range-key");
            if (this.chosenLabel = e, e == this.locale.customRangeLabel) this.showCalendars();
            else {
                var n = this.ranges[e];
                this.startDate = n[0], this.endDate = n[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        },
        clickPrev: function (t) {
            var n = e(t.target).parents(".calendar");
            n.hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function (t) {
            var n = e(t.target).parents(".calendar");
            n.hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function (t) {
            if (e(t.target).hasClass("available")) {
                var n = e(t.target).attr("data-title"),
                    i = n.substr(1, 1),
                    r = n.substr(3, 1),
                    s = e(t.target).parents(".calendar"),
                    o = s.hasClass("left") ? this.leftCalendar.calendar[i][r] : this.rightCalendar.calendar[i][r];
                this.endDate && !this.container.find("input[name=daterangepicker_start]").is(":focus") ? this.container.find("input[name=daterangepicker_start]").val(o.format(this.locale.format)) : this.endDate || this.container.find("input[name=daterangepicker_end]").is(":focus") || this.container.find("input[name=daterangepicker_end]").val(o.format(this.locale.format));
                var a = this.leftCalendar,
                    l = this.rightCalendar,
                    c = this.startDate;
                this.endDate || this.container.find(".calendar td").each(function (t, n) {
                    if (!e(n).hasClass("week")) {
                        var i = e(n).attr("data-title"),
                            r = i.substr(1, 1),
                            s = i.substr(3, 1),
                            u = e(n).parents(".calendar"),
                            d = u.hasClass("left") ? a.calendar[r][s] : l.calendar[r][s];
                        d.isAfter(c) && d.isBefore(o) || d.isSame(o, "day") ? e(n).addClass("in-range") : e(n).removeClass("in-range")
                    }
                })
            }
        },
        clickDate: function (t) {
            if (e(t.target).hasClass("available")) {
                var n = e(t.target).attr("data-title"),
                    i = n.substr(1, 1),
                    r = n.substr(3, 1),
                    s = e(t.target).parents(".calendar"),
                    o = s.hasClass("left") ? this.leftCalendar.calendar[i][r] : this.rightCalendar.calendar[i][r];
                if (this.endDate || o.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var a = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) {
                            var l = this.container.find(".left .ampmselect").val();
                            "PM" === l && 12 > a && (a += 12), "AM" === l && 12 === a && (a = 0)
                        }
                        var c = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            u = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        o = o.clone().hour(a).minute(c).second(u)
                    }
                    this.endDate = null, this.setStartDate(o.clone())
                } else if (!this.endDate && o.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                else {
                    if (this.timePicker) {
                        var a = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) {
                            var l = this.container.find(".right .ampmselect").val();
                            "PM" === l && 12 > a && (a += 12), "AM" === l && 12 === a && (a = 0)
                        }
                        var c = parseInt(this.container.find(".right .minuteselect").val(), 10),
                            u = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        o = o.clone().hour(a).minute(c).second(u)
                    }
                    this.setEndDate(o.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        },
        calculateChosenLabel: function () {
            var t = !0,
                e = 0;
            for (var n in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[n][0]) && this.endDate.isSame(this.ranges[n][1])) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html();
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html();
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html() : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function (t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function (t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function (t) {
            var n = e(t.target).closest(".calendar").hasClass("left"),
                i = n ? "left" : "right",
                r = this.container.find(".calendar." + i),
                s = parseInt(r.find(".monthselect").val(), 10),
                o = r.find(".yearselect").val();
            n || (o < this.startDate.year() || o == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), o = this.startDate.year()), this.minDate && (o < this.minDate.year() || o == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), o = this.minDate.year()), this.maxDate && (o > this.maxDate.year() || o == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), o = this.maxDate.year()), n ? (this.leftCalendar.month.month(s).year(o), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(o), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function (t) {
            var n = e(t.target).closest(".calendar"),
                i = n.hasClass("left"),
                r = parseInt(n.find(".hourselect").val(), 10),
                s = parseInt(n.find(".minuteselect").val(), 10),
                o = this.timePickerSeconds ? parseInt(n.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var a = n.find(".ampmselect").val();
                "PM" === a && 12 > r && (r += 12), "AM" === a && 12 === r && (r = 0)
            }
            if (i) {
                var l = this.startDate.clone();
                l.hour(r), l.minute(s), l.second(o), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
            } else if (this.endDate) {
                var c = this.endDate.clone();
                c.hour(r), c.minute(s), c.second(o), this.setEndDate(c)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        formInputsChanged: function (n) {
            var i = e(n.target).closest(".calendar").hasClass("right"),
                r = t(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format),
                s = t(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);
            r.isValid() && s.isValid() && (i && s.isBefore(r) && (r = s.clone()), this.setStartDate(r), this.setEndDate(s), i ? this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format)) : this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))), this.updateView()
        },
        formInputsFocused: function (t) {
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass("active"), e(t.target).addClass("active");
            var n = e(t.target).closest(".calendar").hasClass("right");
            n && (this.endDate = null, this.setStartDate(this.startDate.clone()), this.updateView())
        },
        formInputsBlurred: function (e) {
            if (!this.endDate) {
                var n = this.container.find('input[name="daterangepicker_end"]').val(),
                    i = t(n, this.locale.format);
                i.isValid() && (this.setEndDate(i), this.updateView())
            }
        },
        elementChanged: function () {
            if (this.element.is("input") && this.element.val().length && !(this.element.val().length < this.locale.format.length)) {
                var e = this.element.val().split(this.locale.separator),
                    n = null,
                    i = null;
                2 === e.length && (n = t(e[0], this.locale.format), i = t(e[1], this.locale.format)), (this.singleDatePicker || null === n || null === i) && (n = t(this.element.val(), this.locale.format), i = n), n.isValid() && i.isValid() && (this.setStartDate(n), this.setEndDate(i), this.updateView())
            }
        },
        keydown: function (t) {
            (9 === t.keyCode || 13 === t.keyCode) && this.hide()
        },
        updateElement: function () {
            this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
        },
        remove: function () {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, e.fn.daterangepicker = function (t, i) {
        return this.each(function () {
            var r = e(this);
            r.data("daterangepicker") && r.data("daterangepicker").remove(), r.data("daterangepicker", new n(r, t, i))
        }), this
    }, n
}), ! function (t) {
    "function" == typeof define && define.amd ? define("select2", ["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    var e = function () {
            if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
            var e;
            return function () {
                if (!e || !e.requirejs) {
                    e ? n = e : e = {};
                    var t, n, i;
                    ! function (e) {
                        function r(t, e) {
                            return w.call(t, e)
                        }

                        function s(t, e) {
                            var n, i, r, s, o, a, l, c, u, d, h, f = e && e.split("/"),
                                p = y.map,
                                m = p && p["*"] || {};
                            if (t && "." === t.charAt(0))
                                if (e) {
                                    for (t = t.split("/"), o = t.length - 1, y.nodeIdCompat && x.test(t[o]) && (t[o] = t[o].replace(x, "")), t = f.slice(0, f.length - 1).concat(t), u = 0; u < t.length; u += 1)
                                        if (h = t[u], "." === h) t.splice(u, 1), u -= 1;
                                        else if (".." === h) {
                                        if (1 === u && (".." === t[2] || ".." === t[0])) break;
                                        u > 0 && (t.splice(u - 1, 2), u -= 2)
                                    }
                                    t = t.join("/")
                                } else 0 === t.indexOf("./") && (t = t.substring(2));
                            if ((f || m) && p) {
                                for (n = t.split("/"), u = n.length; u > 0; u -= 1) {
                                    if (i = n.slice(0, u).join("/"), f)
                                        for (d = f.length; d > 0; d -= 1)
                                            if (r = p[f.slice(0, d).join("/")], r && (r = r[i])) {
                                                s = r, a = u;
                                                break
                                            }
                                    if (s) break;
                                    !l && m && m[i] && (l = m[i], c = u)
                                }!s && l && (s = l, a = c), s && (n.splice(0, a, s), t = n.join("/"))
                            }
                            return t
                        }

                        function o(t, n) {
                            return function () {
                                var i = _.call(arguments, 0);
                                return "string" != typeof i[0] && 1 === i.length && i.push(null), f.apply(e, i.concat([t, n]))
                            }
                        }

                        function a(t) {
                            return function (e) {
                                return s(e, t)
                            }
                        }

                        function l(t) {
                            return function (e) {
                                g[t] = e
                            }
                        }

                        function c(t) {
                            if (r(v, t)) {
                                var n = v[t];
                                delete v[t], b[t] = !0, h.apply(e, n)
                            }
                            if (!r(g, t) && !r(b, t)) throw new Error("No " + t);
                            return g[t]
                        }

                        function u(t) {
                            var e, n = t ? t.indexOf("!") : -1;
                            return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
                        }

                        function d(t) {
                            return function () {
                                return y && y.config && y.config[t] || {}
                            }
                        }
                        var h, f, p, m, g = {},
                            v = {},
                            y = {},
                            b = {},
                            w = Object.prototype.hasOwnProperty,
                            _ = [].slice,
                            x = /\.js$/;
                        p = function (t, e) {
                            var n, i = u(t),
                                r = i[0];
                            return t = i[1], r && (r = s(r, e), n = c(r)), r ? t = n && n.normalize ? n.normalize(t, a(e)) : s(t, e) : (t = s(t, e), i = u(t), r = i[0], t = i[1], r && (n = c(r))), {
                                f: r ? r + "!" + t : t,
                                n: t,
                                pr: r,
                                p: n
                            }
                        }, m = {
                            require: function (t) {
                                return o(t)
                            },
                            exports: function (t) {
                                var e = g[t];
                                return "undefined" != typeof e ? e : g[t] = {}
                            },
                            module: function (t) {
                                return {
                                    id: t,
                                    uri: "",
                                    exports: g[t],
                                    config: d(t)
                                }
                            }
                        }, h = function (t, n, i, s) {
                            var a, u, d, h, f, y, w = [],
                                _ = typeof i;
                            if (s = s || t, "undefined" === _ || "function" === _) {
                                for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                    if (h = p(n[f], s), u = h.f, "require" === u) w[f] = m.require(t);
                                    else if ("exports" === u) w[f] = m.exports(t), y = !0;
                                else if ("module" === u) a = w[f] = m.module(t);
                                else if (r(g, u) || r(v, u) || r(b, u)) w[f] = c(u);
                                else {
                                    if (!h.p) throw new Error(t + " missing " + u);
                                    h.p.load(h.n, o(s, !0), l(u), {}), w[f] = g[u]
                                }
                                d = i ? i.apply(g[t], w) : void 0, t && (a && a.exports !== e && a.exports !== g[t] ? g[t] = a.exports : d === e && y || (g[t] = d))
                            } else t && (g[t] = i)
                        }, t = n = f = function (t, n, i, r, s) {
                            if ("string" == typeof t) return m[t] ? m[t](n) : c(p(t, n).f);
                            if (!t.splice) {
                                if (y = t, y.deps && f(y.deps, y.callback), !n) return;
                                n.splice ? (t = n, n = i, i = null) : t = e
                            }
                            return n = n || function () {}, "function" == typeof i && (i = r, r = s), r ? h(e, t, n, i) : setTimeout(function () {
                                h(e, t, n, i)
                            }, 4), f
                        }, f.config = function (t) {
                            return f(t)
                        }, t._defined = g, i = function (t, e, n) {
                            if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                            e.splice || (n = e, e = []), r(g, t) || r(v, t) || (v[t] = [t, e, n])
                        }, i.amd = {
                            jQuery: !0
                        }
                    }(), e.requirejs = t, e.require = n, e.define = i
                }
            }(), e.define("almond", function () {}), e.define("jquery", [], function () {
                var e = t || $;
                return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
            }), e.define("select2/utils", ["jquery"], function (t) {
                function e(t) {
                    var e = t.prototype,
                        n = [];
                    for (var i in e) {
                        var r = e[i];
                        "function" == typeof r && "constructor" !== i && n.push(i)
                    }
                    return n
                }
                var n = {};
                n.Extend = function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    var i = {}.hasOwnProperty;
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                }, n.Decorate = function (t, n) {
                    function i() {
                        var e = Array.prototype.unshift,
                            i = n.prototype.constructor.length,
                            r = t.prototype.constructor;
                        i > 0 && (e.call(arguments, t.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                    }

                    function r() {
                        this.constructor = i
                    }
                    var s = e(n),
                        o = e(t);
                    n.displayName = t.displayName, i.prototype = new r;
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a];
                        i.prototype[l] = t.prototype[l]
                    }
                    for (var c = (function (t) {
                            var e = function () {};
                            t in i.prototype && (e = i.prototype[t]);
                            var r = n.prototype[t];
                            return function () {
                                var t = Array.prototype.unshift;
                                return t.call(arguments, e), r.apply(this, arguments)
                            }
                        }), u = 0; u < s.length; u++) {
                        var d = s[u];
                        i.prototype[d] = c(d)
                    }
                    return i
                };
                var i = function () {
                    this.listeners = {}
                };
                return i.prototype.on = function (t, e) {
                    this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                }, i.prototype.trigger = function (t) {
                    var e = Array.prototype.slice,
                        n = e.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, i.prototype.invoke = function (t, e) {
                    for (var n = 0, i = t.length; i > n; n++) t[n].apply(this, e)
                }, n.Observable = i, n.generateChars = function (t) {
                    for (var e = "", n = 0; t > n; n++) {
                        var i = Math.floor(36 * Math.random());
                        e += i.toString(36)
                    }
                    return e
                }, n.bind = function (t, e) {
                    return function () {
                        t.apply(e, arguments)
                    }
                }, n._convertData = function (t) {
                    for (var e in t) {
                        var n = e.split("-"),
                            i = t;
                        if (1 !== n.length) {
                            for (var r = 0; r < n.length; r++) {
                                var s = n[r];
                                s = s.substring(0, 1).toLowerCase() + s.substring(1), s in i || (i[s] = {}), r == n.length - 1 && (i[s] = t[e]), i = i[s]
                            }
                            delete t[e]
                        }
                    }
                    return t
                }, n.hasScroll = function (e, n) {
                    var i = t(n),
                        r = n.style.overflowX,
                        s = n.style.overflowY;
                    return (r !== s || "hidden" !== s && "visible" !== s) && ("scroll" === r || "scroll" === s || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                }, n.escapeMarkup = function (t) {
                    var e = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function (t) {
                        return e[t]
                    })
                }, n.appendMany = function (e, n) {
                    if ("1.7" === t.fn.jquery.substr(0, 3)) {
                        var i = t();
                        t.map(n, function (t) {
                            i = i.add(t)
                        }), n = i
                    }
                    e.append(n)
                }, n
            }), e.define("select2/results", ["jquery", "./utils"], function (t, e) {
                function n(t, e, i) {
                    this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this)
                }
                return e.Extend(n, e.Observable), n.prototype.render = function () {
                    var e = t('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
                }, n.prototype.clear = function () {
                    this.$results.empty()
                }, n.prototype.displayMessage = function (e) {
                    var n = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        r = this.options.get("translations").get(e.message);
                    i.append(n(r(e.args))), i[0].className += " select2-results__message", this.$results.append(i)
                }, n.prototype.hideMessages = function () {
                    this.$results.find(".select2-results__message").remove()
                }, n.prototype.append = function (t) {
                    this.hideLoading();
                    var e = [];
                    if (null == t.results || 0 === t.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    }));
                    t.results = this.sort(t.results);
                    for (var n = 0; n < t.results.length; n++) {
                        var i = t.results[n],
                            r = this.option(i);
                        e.push(r)
                    }
                    this.$results.append(e)
                }, n.prototype.position = function (t, e) {
                    var n = e.find(".select2-results");
                    n.append(t)
                }, n.prototype.sort = function (t) {
                    var e = this.options.get("sorter");
                    return e(t)
                }, n.prototype.highlightFirstItem = function () {
                    var t = this.$results.find(".select2-results__option[aria-selected]"),
                        e = t.filter("[aria-selected=true]");
                    e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, n.prototype.setClasses = function () {
                    var e = this;
                    this.data.current(function (n) {
                        var i = t.map(n, function (t) {
                                return t.id.toString()
                            }),
                            r = e.$results.find(".select2-results__option[aria-selected]");
                        r.each(function () {
                            var e = t(this),
                                n = t.data(this, "data"),
                                r = "" + n.id;
                            null != n.element && n.element.selected || null == n.element && t.inArray(r, i) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                        })
                    })
                }, n.prototype.showLoading = function (t) {
                    this.hideLoading();
                    var e = this.options.get("translations").get("searching"),
                        n = {
                            disabled: !0,
                            loading: !0,
                            text: e(t)
                        },
                        i = this.option(n);
                    i.className += " loading-results", this.$results.prepend(i)
                }, n.prototype.hideLoading = function () {
                    this.$results.find(".loading-results").remove()
                }, n.prototype.option = function (e) {
                    var n = document.createElement("li");
                    n.className = "select2-results__option";
                    var i = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]);
                    for (var r in i) {
                        var s = i[r];
                        n.setAttribute(r, s)
                    }
                    if (e.children) {
                        var o = t(n),
                            a = document.createElement("strong");
                        a.className = "select2-results__group", t(a), this.template(e, a);
                        for (var l = [], c = 0; c < e.children.length; c++) {
                            var u = e.children[c],
                                d = this.option(u);
                            l.push(d)
                        }
                        var h = t("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        h.append(l), o.append(a), o.append(h)
                    } else this.template(e, n);
                    return t.data(n, "data", e), n
                }, n.prototype.bind = function (e, n) {
                    var i = this,
                        r = e.id + "-results";
                    this.$results.attr("id", r), e.on("results:all", function (t) {
                        i.clear(), i.append(t.data), e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                    }), e.on("results:append", function (t) {
                        i.append(t.data), e.isOpen() && i.setClasses()
                    }), e.on("query", function (t) {
                        i.hideMessages(), i.showLoading(t)
                    }), e.on("select", function () {
                        e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                    }), e.on("unselect", function () {
                        e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                    }), e.on("open", function () {
                        i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                    }), e.on("close", function () {
                        i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                    }), e.on("results:toggle", function () {
                        var t = i.getHighlightedResults();
                        0 !== t.length && t.trigger("mouseup")
                    }), e.on("results:select", function () {
                        var t = i.getHighlightedResults();
                        if (0 !== t.length) {
                            var e = t.data("data");
                            "true" == t.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                data: e
                            })
                        }
                    }), e.on("results:previous", function () {
                        var t = i.getHighlightedResults(),
                            e = i.$results.find("[aria-selected]"),
                            n = e.index(t);
                        if (0 !== n) {
                            var r = n - 1;
                            0 === t.length && (r = 0);
                            var s = e.eq(r);
                            s.trigger("mouseenter");
                            var o = i.$results.offset().top,
                                a = s.offset().top,
                                l = i.$results.scrollTop() + (a - o);
                            0 === r ? i.$results.scrollTop(0) : 0 > a - o && i.$results.scrollTop(l)
                        }
                    }), e.on("results:next", function () {
                        var t = i.getHighlightedResults(),
                            e = i.$results.find("[aria-selected]"),
                            n = e.index(t),
                            r = n + 1;
                        if (!(r >= e.length)) {
                            var s = e.eq(r);
                            s.trigger("mouseenter");
                            var o = i.$results.offset().top + i.$results.outerHeight(!1),
                                a = s.offset().top + s.outerHeight(!1),
                                l = i.$results.scrollTop() + a - o;
                            0 === r ? i.$results.scrollTop(0) : a > o && i.$results.scrollTop(l)
                        }
                    }), e.on("results:focus", function (t) {
                        t.element.addClass("select2-results__option--highlighted")
                    }), e.on("results:message", function (t) {
                        i.displayMessage(t)
                    }), t.fn.mousewheel && this.$results.on("mousewheel", function (t) {
                        var e = i.$results.scrollTop(),
                            n = i.$results.get(0).scrollHeight - e + t.deltaY,
                            r = t.deltaY > 0 && e - t.deltaY <= 0,
                            s = t.deltaY < 0 && n <= i.$results.height();
                        r ? (i.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : s && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), t.preventDefault(), t.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                        var n = t(this),
                            r = n.data("data");
                        return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                            originalEvent: e,
                            data: r
                        }) : i.trigger("close", {})) : void i.trigger("select", {
                            originalEvent: e,
                            data: r
                        })
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
                        var n = t(this).data("data");
                        i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                            data: n,
                            element: t(this)
                        })
                    })
                }, n.prototype.getHighlightedResults = function () {
                    var t = this.$results.find(".select2-results__option--highlighted");
                    return t
                }, n.prototype.destroy = function () {
                    this.$results.remove()
                }, n.prototype.ensureHighlightVisible = function () {
                    var t = this.getHighlightedResults();
                    if (0 !== t.length) {
                        var e = this.$results.find("[aria-selected]"),
                            n = e.index(t),
                            i = this.$results.offset().top,
                            r = t.offset().top,
                            s = this.$results.scrollTop() + (r - i),
                            o = r - i;
                        s -= 2 * t.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || 0 > o) && this.$results.scrollTop(s)
                    }
                }, n.prototype.template = function (e, n) {
                    var i = this.options.get("templateResult"),
                        r = this.options.get("escapeMarkup"),
                        s = i(e, n);
                    null == s ? n.style.display = "none" : "string" == typeof s ? n.innerHTML = r(s) : t(n).append(s)
                }, n
            }), e.define("select2/keys", [], function () {
                var t = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };
                return t
            }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (t, e, n) {
                function i(t, e) {
                    this.$element = t, this.options = e, i.__super__.constructor.call(this)
                }
                return e.Extend(i, e.Observable), i.prototype.render = function () {
                    var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
                }, i.prototype.bind = function (t, e) {
                    var i = this,
                        r = (t.id + "-container", t.id + "-results");
                    this.container = t, this.$selection.on("focus", function (t) {
                        i.trigger("focus", t)
                    }), this.$selection.on("blur", function (t) {
                        i._handleBlur(t)
                    }), this.$selection.on("keydown", function (t) {
                        i.trigger("keypress", t), t.which === n.SPACE && t.preventDefault()
                    }), t.on("results:focus", function (t) {
                        i.$selection.attr("aria-activedescendant", t.data._resultId)
                    }), t.on("selection:update", function (t) {
                        i.update(t.data)
                    }), t.on("open", function () {
                        i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(t)
                    }), t.on("close", function () {
                        i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(t)
                    }), t.on("enable", function () {
                        i.$selection.attr("tabindex", i._tabindex)
                    }), t.on("disable", function () {
                        i.$selection.attr("tabindex", "-1")
                    })
                }, i.prototype._handleBlur = function (e) {
                    var n = this;
                    window.setTimeout(function () {
                        document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e)
                    }, 1)
                }, i.prototype._attachCloseHandler = function (e) {
                    t(document.body).on("mousedown.select2." + e.id, function (e) {
                        var n = t(e.target),
                            i = n.closest(".select2"),
                            r = t(".select2.select2-container--open");
                        r.each(function () {
                            var e = t(this);
                            if (this != i[0]) {
                                var n = e.data("element");
                                n.select2("close")
                            }
                        })
                    })
                }, i.prototype._detachCloseHandler = function (e) {
                    t(document.body).off("mousedown.select2." + e.id)
                }, i.prototype.position = function (t, e) {
                    var n = e.find(".selection");
                    n.append(t)
                }, i.prototype.destroy = function () {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function (t) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i
            }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (t, e, n, i) {
                function r() {
                    r.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(r, e), r.prototype.render = function () {
                    var t = r.__super__.render.call(this);
                    return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                }, r.prototype.bind = function (t, e) {
                    var n = this;
                    r.__super__.bind.apply(this, arguments);
                    var i = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (t) {
                        1 === t.which && n.trigger("toggle", {
                            originalEvent: t
                        })
                    }), this.$selection.on("focus", function (t) {}), this.$selection.on("blur", function (t) {}), t.on("focus", function (e) {
                        t.isOpen() || n.$selection.focus()
                    }), t.on("selection:update", function (t) {
                        n.update(t.data)
                    })
                }, r.prototype.clear = function () {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, r.prototype.display = function (t, e) {
                    var n = this.options.get("templateSelection"),
                        i = this.options.get("escapeMarkup");
                    return i(n(t, e))
                }, r.prototype.selectionContainer = function () {
                    return t("<span></span>")
                }, r.prototype.update = function (t) {
                    if (0 === t.length) return void this.clear();
                    var e = t[0],
                        n = this.$selection.find(".select2-selection__rendered"),
                        i = this.display(e, n);
                    n.empty().append(i), n.prop("title", e.title || e.text)
                }, r
            }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (t, e, n) {
                function i(t, e) {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, e), i.prototype.render = function () {
                    var t = i.__super__.render.call(this);
                    return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                }, i.prototype.bind = function (e, n) {
                    var r = this;
                    i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (t) {
                        r.trigger("toggle", {
                            originalEvent: t
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
                        if (!r.options.get("disabled")) {
                            var n = t(this),
                                i = n.parent(),
                                s = i.data("data");
                            r.trigger("unselect", {
                                originalEvent: e,
                                data: s
                            })
                        }
                    })
                }, i.prototype.clear = function () {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, i.prototype.display = function (t, e) {
                    var n = this.options.get("templateSelection"),
                        i = this.options.get("escapeMarkup");
                    return i(n(t, e))
                }, i.prototype.selectionContainer = function () {
                    var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                    return e
                }, i.prototype.update = function (t) {
                    if (this.clear(), 0 !== t.length) {
                        for (var e = [], i = 0; i < t.length; i++) {
                            var r = t[i],
                                s = this.selectionContainer(),
                                o = this.display(r, s);
                            s.append(o), s.prop("title", r.title || r.text), s.data("data", r), e.push(s)
                        }
                        var a = this.$selection.find(".select2-selection__rendered");
                        n.appendMany(a, e)
                    }
                }, i
            }), e.define("select2/selection/placeholder", ["../utils"], function (t) {
                function e(t, e, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
                }
                return e.prototype.normalizePlaceholder = function (t, e) {
                    return "string" == typeof e && (e = {
                        id: "",
                        text: e
                    }), e
                }, e.prototype.createPlaceholder = function (t, e) {
                    var n = this.selectionContainer();
                    return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, e.prototype.update = function (t, e) {
                    var n = 1 == e.length && e[0].id != this.placeholder.id,
                        i = e.length > 1;
                    if (i || n) return t.call(this, e);
                    this.clear();
                    var r = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(r)
                }, e
            }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function (t, e) {
                function n() {}
                return n.prototype.bind = function (t, e, n) {
                    var i = this;
                    t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (t) {
                        i._handleClear(t)
                    }), e.on("keypress", function (t) {
                        i._handleKeyboardClear(t, e)
                    })
                }, n.prototype._handleClear = function (t, e) {
                    if (!this.options.get("disabled")) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            e.stopPropagation();
                            for (var i = n.data("data"), r = 0; r < i.length; r++) {
                                var s = {
                                    data: i[r]
                                };
                                if (this.trigger("unselect", s), s.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, n.prototype._handleKeyboardClear = function (t, n, i) {
                    i.isOpen() || (n.which == e.DELETE || n.which == e.BACKSPACE) && this._handleClear(n)
                }, n.prototype.update = function (e, n) {
                    if (e.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                        var i = t('<span class="select2-selection__clear">&times;</span>');
                        i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                    }
                }, n
            }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (t, e, n) {
                function i(t, e, n) {
                    t.call(this, e, n)
                }
                return i.prototype.render = function (e) {
                    var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = n, this.$search = n.find("input");
                    var i = e.call(this);
                    return this._transferTabIndex(), i
                }, i.prototype.bind = function (t, e, i) {
                    var r = this;
                    t.call(this, e, i), e.on("open", function () {
                        r.$search.trigger("focus")
                    }), e.on("close", function () {
                        r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                    }), e.on("enable", function () {
                        r.$search.prop("disabled", !1), r._transferTabIndex()
                    }), e.on("disable", function () {
                        r.$search.prop("disabled", !0)
                    }), e.on("focus", function (t) {
                        r.$search.trigger("focus")
                    }), e.on("results:focus", function (t) {
                        r.$search.attr("aria-activedescendant", t.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function (t) {
                        r.trigger("focus", t)
                    }), this.$selection.on("focusout", ".select2-search--inline", function (t) {
                        r._handleBlur(t)
                    }), this.$selection.on("keydown", ".select2-search--inline", function (t) {
                        t.stopPropagation(), r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented();
                        var e = t.which;
                        if (e === n.BACKSPACE && "" === r.$search.val()) {
                            var i = r.$searchContainer.prev(".select2-selection__choice");
                            if (i.length > 0) {
                                var s = i.data("data");
                                r.searchRemoveChoice(s), t.preventDefault()
                            }
                        }
                    });
                    var s = document.documentMode,
                        o = s && 11 >= s;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function (t) {
                        return o ? void r.$selection.off("input.search input.searchcheck") : void r.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (t) {
                        if (o && "input" === t.type) return void r.$selection.off("input.search input.searchcheck");
                        var e = t.which;
                        e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && r.handleSearch(t)
                    })
                }, i.prototype._transferTabIndex = function (t) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, i.prototype.createPlaceholder = function (t, e) {
                    this.$search.attr("placeholder", e.text)
                }, i.prototype.update = function (t, e) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                }, i.prototype.handleSearch = function () {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, i.prototype.searchRemoveChoice = function (t, e) {
                    this.trigger("unselect", {
                        data: e
                    }), this.$search.val(e.text), this.handleSearch()
                }, i.prototype.resizeSearch = function () {
                    this.$search.css("width", "25px");
                    var t = "";
                    if ("" !== this.$search.attr("placeholder")) t = this.$selection.find(".select2-selection__rendered").innerWidth();
                    else {
                        var e = this.$search.val().length + 1;
                        t = .75 * e + "em"
                    }
                    this.$search.css("width", t)
                }, i
            }), e.define("select2/selection/eventRelay", ["jquery"], function (t) {
                function e() {}
                return e.prototype.bind = function (e, n, i) {
                    var r = this,
                        s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        o = ["opening", "closing", "selecting", "unselecting"];
                    e.call(this, n, i), n.on("*", function (e, n) {
                        if (-1 !== t.inArray(e, s)) {
                            n = n || {};
                            var i = t.Event("select2:" + e, {
                                params: n
                            });
                            r.$element.trigger(i), -1 !== t.inArray(e, o) && (n.prevented = i.isDefaultPrevented())
                        }
                    })
                }, e
            }), e.define("select2/translation", ["jquery", "require"], function (t, e) {
                function n(t) {
                    this.dict = t || {}
                }
                return n.prototype.all = function () {
                    return this.dict
                }, n.prototype.get = function (t) {
                    return this.dict[t]
                }, n.prototype.extend = function (e) {
                    this.dict = t.extend({}, e.all(), this.dict)
                }, n._cache = {}, n.loadPath = function (t) {
                    if (!(t in n._cache)) {
                        var i = e(t);
                        n._cache[t] = i
                    }
                    return new n(n._cache[t])
                }, n
            }), e.define("select2/diacritics", [], function () {
                var t = {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                };
                return t
            }), e.define("select2/data/base", ["../utils"], function (t) {
                function e(t, n) {
                    e.__super__.constructor.call(this)
                }
                return t.Extend(e, t.Observable), e.prototype.current = function (t) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, e.prototype.query = function (t, e) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, e.prototype.bind = function (t, e) {}, e.prototype.destroy = function () {}, e.prototype.generateResultId = function (e, n) {
                    var i = e.id + "-result-";
                    return i += t.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + t.generateChars(4)
                }, e
            }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (t, e, n) {
                function i(t, e) {
                    this.$element = t, this.options = e, i.__super__.constructor.call(this)
                }
                return e.Extend(i, t), i.prototype.current = function (t) {
                    var e = [],
                        i = this;
                    this.$element.find(":selected").each(function () {
                        var t = n(this),
                            r = i.item(t);
                        e.push(r)
                    }), t(e)
                }, i.prototype.select = function (t) {
                    var e = this;
                    if (t.selected = !0, n(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function (i) {
                        var r = [];
                        t = [t], t.push.apply(t, i);
                        for (var s = 0; s < t.length; s++) {
                            var o = t[s].id; - 1 === n.inArray(o, r) && r.push(o)
                        }
                        e.$element.val(r), e.$element.trigger("change")
                    });
                    else {
                        var i = t.id;
                        this.$element.val(i), this.$element.trigger("change")
                    }
                }, i.prototype.unselect = function (t) {
                    var e = this;
                    if (this.$element.prop("multiple")) return t.selected = !1, n(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (i) {
                        for (var r = [], s = 0; s < i.length; s++) {
                            var o = i[s].id;
                            o !== t.id && -1 === n.inArray(o, r) && r.push(o)
                        }
                        e.$element.val(r), e.$element.trigger("change")
                    })
                }, i.prototype.bind = function (t, e) {
                    var n = this;
                    this.container = t, t.on("select", function (t) {
                        n.select(t.data)
                    }), t.on("unselect", function (t) {
                        n.unselect(t.data)
                    })
                }, i.prototype.destroy = function () {
                    this.$element.find("*").each(function () {
                        n.removeData(this, "data")
                    })
                }, i.prototype.query = function (t, e) {
                    var i = [],
                        r = this,
                        s = this.$element.children();
                    s.each(function () {
                        var e = n(this);
                        if (e.is("option") || e.is("optgroup")) {
                            var s = r.item(e),
                                o = r.matches(t, s);
                            null !== o && i.push(o)
                        }
                    }), e({
                        results: i
                    })
                }, i.prototype.addOptions = function (t) {
                    e.appendMany(this.$element, t)
                }, i.prototype.option = function (t) {
                    var e;
                    t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                    var i = n(e),
                        r = this._normalizeItem(t);
                    return r.element = e, n.data(e, "data", r), i
                }, i.prototype.item = function (t) {
                    var e = {};
                    if (e = n.data(t[0], "data"), null != e) return e;
                    if (t.is("option")) e = {
                        id: t.val(),
                        text: t.text(),
                        disabled: t.prop("disabled"),
                        selected: t.prop("selected"),
                        title: t.prop("title")
                    };
                    else if (t.is("optgroup")) {
                        e = {
                            text: t.prop("label"),
                            children: [],
                            title: t.prop("title")
                        };
                        for (var i = t.children("option"), r = [], s = 0; s < i.length; s++) {
                            var o = n(i[s]),
                                a = this.item(o);
                            r.push(a)
                        }
                        e.children = r
                    }
                    return e = this._normalizeItem(e), e.element = t[0], n.data(t[0], "data", e), e
                }, i.prototype._normalizeItem = function (t) {
                    n.isPlainObject(t) || (t = {
                        id: t,
                        text: t
                    }), t = n.extend({}, {
                        text: ""
                    }, t);
                    var e = {
                        selected: !1,
                        disabled: !1
                    };
                    return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, e, t)
                }, i.prototype.matches = function (t, e) {
                    var n = this.options.get("matcher");
                    return n(t, e)
                }, i
            }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (t, e, n) {
                function i(t, e) {
                    var n = e.get("data") || [];
                    i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n))
                }
                return e.Extend(i, t), i.prototype.select = function (t) {
                    var e = this.$element.find("option").filter(function (e, n) {
                        return n.value == t.id.toString()
                    });
                    0 === e.length && (e = this.option(t), this.addOptions(e)), i.__super__.select.call(this, t)
                }, i.prototype.convertToOptions = function (t) {
                    function i(t) {
                        return function () {
                            return n(this).val() == t.id
                        }
                    }
                    for (var r = this, s = this.$element.find("option"), o = s.map(function () {
                            return r.item(n(this)).id
                        }).get(), a = [], l = 0; l < t.length; l++) {
                        var c = this._normalizeItem(t[l]);
                        if (n.inArray(c.id, o) >= 0) {
                            var u = s.filter(i(c)),
                                d = this.item(u),
                                h = n.extend(!0, {}, c, d),
                                f = this.option(h);
                            u.replaceWith(f)
                        } else {
                            var p = this.option(c);
                            if (c.children) {
                                var m = this.convertToOptions(c.children);
                                e.appendMany(p, m)
                            }
                            a.push(p)
                        }
                    }
                    return a
                }, i
            }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (t, e, n) {
                function i(t, e) {
                    this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e)
                }
                return e.Extend(i, t), i.prototype._applyDefaults = function (t) {
                    var e = {
                        data: function (t) {
                            return n.extend({}, t, {
                                q: t.term
                            })
                        },
                        transport: function (t, e, i) {
                            var r = n.ajax(t);
                            return r.then(e), r.fail(i), r
                        }
                    };
                    return n.extend({}, e, t, !0)
                }, i.prototype.processResults = function (t) {
                    return t
                }, i.prototype.query = function (t, e) {
                    function i() {
                        var i = s.transport(s, function (i) {
                            var s = r.processResults(i, t);
                            r.options.get("debug") && window.console && console.error && (s && s.results && n.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(s)
                        }, function () {
                            i.status && "0" === i.status || r.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        r._request = i
                    }
                    var r = this;
                    null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var s = n.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof s.url && (s.url = s.url.call(this.$element, t)), "function" == typeof s.data && (s.data = s.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                }, i
            }), e.define("select2/data/tags", ["jquery"], function (t) {
                function e(e, n, i) {
                    var r = i.get("tags"),
                        s = i.get("createTag");
                    void 0 !== s && (this.createTag = s);
                    var o = i.get("insertTag");
                    if (void 0 !== o && (this.insertTag = o), e.call(this, n, i), t.isArray(r))
                        for (var a = 0; a < r.length; a++) {
                            var l = r[a],
                                c = this._normalizeItem(l),
                                u = this.option(c);
                            this.$element.append(u)
                        }
                }
                return e.prototype.query = function (t, e, n) {
                    function i(t, s) {
                        for (var o = t.results, a = 0; a < o.length; a++) {
                            var l = o[a],
                                c = null != l.children && !i({
                                    results: l.children
                                }, !0),
                                u = l.text === e.term;
                            if (u || c) return !s && (t.data = o, void n(t))
                        }
                        if (s) return !0;
                        var d = r.createTag(e);
                        if (null != d) {
                            var h = r.option(d);
                            h.attr("data-select2-tag", !0), r.addOptions([h]), r.insertTag(o, d)
                        }
                        t.results = o, n(t)
                    }
                    var r = this;
                    return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, n) : void t.call(this, e, i)
                }, e.prototype.createTag = function (e, n) {
                    var i = t.trim(n.term);
                    return "" === i ? null : {
                        id: i,
                        text: i
                    }
                }, e.prototype.insertTag = function (t, e, n) {
                    e.unshift(n)
                }, e.prototype._removeOldTags = function (e) {
                    var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                    n.each(function () {
                        this.selected || t(this).remove()
                    })
                }, e
            }), e.define("select2/data/tokenizer", ["jquery"], function (t) {
                function e(t, e, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), t.call(this, e, n)
                }
                return e.prototype.bind = function (t, e, n) {
                    t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
                }, e.prototype.query = function (e, n, i) {
                    function r(e) {
                        var n = o._normalizeItem(e),
                            i = o.$element.find("option").filter(function () {
                                return t(this).val() === n.id
                            });
                        if (!i.length) {
                            var r = o.option(n);
                            r.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([r])
                        }
                        s(n)
                    }

                    function s(t) {
                        o.trigger("select", {
                            data: t
                        })
                    }
                    var o = this;
                    n.term = n.term || "";
                    var a = this.tokenizer(n, this.options, r);
                    a.term !== n.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), n.term = a.term), e.call(this, n, i)
                }, e.prototype.tokenizer = function (e, n, i, r) {
                    for (var s = i.get("tokenSeparators") || [], o = n.term, a = 0, l = this.createTag || function (t) {
                            return {
                                id: t.term,
                                text: t.term
                            }
                        }; a < o.length;) {
                        var c = o[a];
                        if (-1 !== t.inArray(c, s)) {
                            var u = o.substr(0, a),
                                d = t.extend({}, n, {
                                    term: u
                                }),
                                h = l(d);
                            null != h ? (r(h), o = o.substr(a + 1) || "", a = 0) : a++
                        } else a++
                    }
                    return {
                        term: o
                    }
                }, e
            }), e.define("select2/data/minimumInputLength", [], function () {
                function t(t, e, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
                }
                return t.prototype.query = function (t, e, n) {
                    return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: e.term,
                            params: e
                        }
                    }) : void t.call(this, e, n)
                }, t
            }), e.define("select2/data/maximumInputLength", [], function () {
                function t(t, e, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
                }
                return t.prototype.query = function (t, e, n) {
                    return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: e.term,
                            params: e
                        }
                    }) : void t.call(this, e, n)
                }, t
            }), e.define("select2/data/maximumSelectionLength", [], function () {
                function t(t, e, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
                }
                return t.prototype.query = function (t, e, n) {
                    var i = this;
                    this.current(function (r) {
                        var s = null != r ? r.length : 0;
                        return i.maximumSelectionLength > 0 && s >= i.maximumSelectionLength ? void i.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: i.maximumSelectionLength
                            }
                        }) : void t.call(i, e, n)
                    })
                }, t
            }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
                function n(t, e) {
                    this.$element = t, this.options = e, n.__super__.constructor.call(this)
                }
                return e.Extend(n, e.Observable), n.prototype.render = function () {
                    var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
                }, n.prototype.bind = function () {}, n.prototype.position = function (t, e) {}, n.prototype.destroy = function () {
                    this.$dropdown.remove()
                }, n
            }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (t, e) {
                function n() {}
                return n.prototype.render = function (e) {
                    var n = e.call(this),
                        i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                }, n.prototype.bind = function (e, n, i) {
                    var r = this;
                    e.call(this, n, i), this.$search.on("keydown", function (t) {
                        r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented()
                    }), this.$search.on("input", function (e) {
                        t(this).off("keyup")
                    }), this.$search.on("keyup input", function (t) {
                        r.handleSearch(t)
                    }), n.on("open", function () {
                        r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function () {
                            r.$search.focus()
                        }, 0)
                    }), n.on("close", function () {
                        r.$search.attr("tabindex", -1), r.$search.val("")
                    }), n.on("focus", function () {
                        n.isOpen() && r.$search.focus()
                    }), n.on("results:all", function (t) {
                        if (null == t.query.term || "" === t.query.term) {
                            var e = r.showSearch(t);
                            e ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")
                        }
                    })
                }, n.prototype.handleSearch = function (t) {
                    if (!this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, n.prototype.showSearch = function (t, e) {
                    return !0
                }, n
            }), e.define("select2/dropdown/hidePlaceholder", [], function () {
                function t(t, e, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
                }
                return t.prototype.append = function (t, e) {
                    e.results = this.removePlaceholder(e.results), t.call(this, e)
                }, t.prototype.normalizePlaceholder = function (t, e) {
                    return "string" == typeof e && (e = {
                        id: "",
                        text: e
                    }), e
                }, t.prototype.removePlaceholder = function (t, e) {
                    for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                        var r = e[i];
                        this.placeholder.id === r.id && n.splice(i, 1)
                    }
                    return n
                }, t
            }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (t) {
                function e(t, e, n, i) {
                    this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return e.prototype.append = function (t, e) {
                    this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                }, e.prototype.bind = function (e, n, i) {
                    var r = this;
                    e.call(this, n, i), n.on("query", function (t) {
                        r.lastParams = t, r.loading = !0
                    }), n.on("query:append", function (t) {
                        r.lastParams = t, r.loading = !0
                    }), this.$results.on("scroll", function () {
                        var e = t.contains(document.documentElement, r.$loadingMore[0]);
                        if (!r.loading && e) {
                            var n = r.$results.offset().top + r.$results.outerHeight(!1),
                                i = r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1);
                            n + 50 >= i && r.loadMore()
                        }
                    })
                }, e.prototype.loadMore = function () {
                    this.loading = !0;
                    var e = t.extend({}, {
                        page: 1
                    }, this.lastParams);
                    e.page++, this.trigger("query:append", e)
                }, e.prototype.showLoadingMore = function (t, e) {
                    return e.pagination && e.pagination.more
                }, e.prototype.createLoadingMore = function () {
                    var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        n = this.options.get("translations").get("loadingMore");
                    return e.html(n(this.lastParams)), e
                }, e
            }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (t, e) {
                function n(e, n, i) {
                    this.$dropdownParent = i.get("dropdownParent") || t(document.body), e.call(this, n, i)
                }
                return n.prototype.bind = function (t, e, n) {
                    var i = this,
                        r = !1;
                    t.call(this, e, n), e.on("open", function () {
                        i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function () {
                            i._positionDropdown(), i._resizeDropdown()
                        }), e.on("results:append", function () {
                            i._positionDropdown(), i._resizeDropdown()
                        }))
                    }), e.on("close", function () {
                        i._hideDropdown(), i._detachPositioningHandler(e)
                    }), this.$dropdownContainer.on("mousedown", function (t) {
                        t.stopPropagation()
                    })
                }, n.prototype.destroy = function (t) {
                    t.call(this), this.$dropdownContainer.remove()
                }, n.prototype.position = function (t, e, n) {
                    e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, n.prototype.render = function (e) {
                    var n = t("<span></span>"),
                        i = e.call(this);
                    return n.append(i), this.$dropdownContainer = n, n
                }, n.prototype._hideDropdown = function (t) {
                    this.$dropdownContainer.detach()
                }, n.prototype._attachPositioningHandler = function (n, i) {
                    var r = this,
                        s = "scroll.select2." + i.id,
                        o = "resize.select2." + i.id,
                        a = "orientationchange.select2." + i.id,
                        l = this.$container.parents().filter(e.hasScroll);
                    l.each(function () {
                        t(this).data("select2-scroll-position", {
                            x: t(this).scrollLeft(),
                            y: t(this).scrollTop()
                        })
                    }), l.on(s, function (e) {
                        var n = t(this).data("select2-scroll-position");
                        t(this).scrollTop(n.y)
                    }), t(window).on(s + " " + o + " " + a, function (t) {
                        r._positionDropdown(), r._resizeDropdown()
                    })
                }, n.prototype._detachPositioningHandler = function (n, i) {
                    var r = "scroll.select2." + i.id,
                        s = "resize.select2." + i.id,
                        o = "orientationchange.select2." + i.id,
                        a = this.$container.parents().filter(e.hasScroll);
                    a.off(r), t(window).off(r + " " + s + " " + o)
                }, n.prototype._positionDropdown = function () {
                    var e = t(window),
                        n = this.$dropdown.hasClass("select2-dropdown--above"),
                        i = this.$dropdown.hasClass("select2-dropdown--below"),
                        r = null,
                        s = this.$container.offset();
                    s.bottom = s.top + this.$container.outerHeight(!1);
                    var o = {
                        height: this.$container.outerHeight(!1)
                    };
                    o.top = s.top, o.bottom = s.top + o.height;
                    var a = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                        l = {
                            top: e.scrollTop(),
                            bottom: e.scrollTop() + e.height()
                        },
                        c = l.top < s.top - a.height,
                        u = l.bottom > s.bottom + a.height,
                        d = {
                            left: s.left,
                            top: o.bottom
                        },
                        h = this.$dropdownParent;
                    "static" === h.css("position") && (h = h.offsetParent());
                    var f = h.offset();
                    d.top -= f.top, d.left -= f.left, n || i || (r = "below"), u || !c || n ? !c && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = o.top - f.top - a.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
                }, n.prototype._resizeDropdown = function () {
                    var t = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                }, n.prototype._showDropdown = function (t) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, n
            }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
                function t(e) {
                    for (var n = 0, i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.children ? n += t(r.children) : n++
                    }
                    return n
                }

                function e(t, e, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i)
                }
                return e.prototype.showSearch = function (e, n) {
                    return !(t(n.data.results) < this.minimumResultsForSearch) && e.call(this, n)
                }, e
            }), e.define("select2/dropdown/selectOnClose", [], function () {
                function t() {}
                return t.prototype.bind = function (t, e, n) {
                    var i = this;
                    t.call(this, e, n), e.on("close", function (t) {
                        i._handleSelectOnClose(t)
                    })
                }, t.prototype._handleSelectOnClose = function (t, e) {
                    if (e && null != e.originalSelect2Event) {
                        var n = e.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type) return
                    }
                    var i = this.getHighlightedResults();
                    if (!(i.length < 1)) {
                        var r = i.data("data");
                        null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                            data: r
                        })
                    }
                }, t
            }), e.define("select2/dropdown/closeOnSelect", [], function () {
                function t() {}
                return t.prototype.bind = function (t, e, n) {
                    var i = this;
                    t.call(this, e, n), e.on("select", function (t) {
                        i._selectTriggered(t)
                    }), e.on("unselect", function (t) {
                        i._selectTriggered(t)
                    })
                }, t.prototype._selectTriggered = function (t, e) {
                    var n = e.originalEvent;
                    n && n.ctrlKey || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: e
                    })
                }, t
            }), e.define("select2/i18n/en", [], function () {
                return {
                    errorLoading: function () {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function (t) {
                        var e = t.input.length - t.maximum,
                            n = "Please delete " + e + " character";
                        return 1 != e && (n += "s"), n
                    },
                    inputTooShort: function (t) {
                        var e = t.minimum - t.input.length,
                            n = "Please enter " + e + " or more characters";
                        return n
                    },
                    loadingMore: function () {
                        return "Loading more results…"
                    },
                    maximumSelected: function (t) {
                        var e = "You can only select " + t.maximum + " item";
                        return 1 != t.maximum && (e += "s"), e
                    },
                    noResults: function () {
                        return "No results found"
                    },
                    searching: function () {
                        return "Searching…"
                    }
                }
            }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (t, e, n, i, r, s, o, a, l, c, u, d, h, f, p, m, g, v, y, b, w, _, x, k, D, C, S, T, A) {
                function E() {
                    this.reset()
                }
                E.prototype.apply = function (d) {
                    if (d = t.extend(!0, {}, this.defaults, d), null == d.dataAdapter) {
                        if (null != d.ajax ? d.dataAdapter = p : null != d.data ? d.dataAdapter = f : d.dataAdapter = h, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), null != d.query) {
                            var A = e(d.amdBase + "compat/query");
                            d.dataAdapter = c.Decorate(d.dataAdapter, A)
                        }
                        if (null != d.initSelection) {
                            var E = e(d.amdBase + "compat/initSelection");
                            d.dataAdapter = c.Decorate(d.dataAdapter, E)
                        }
                    }
                    if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, k)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, x)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S))), null == d.dropdownAdapter) {
                        if (d.multiple) d.dropdownAdapter = w;
                        else {
                            var $ = c.Decorate(w, _);
                            d.dropdownAdapter = $
                        }
                        if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                            var M = e(d.amdBase + "compat/dropdownCss");
                            d.dropdownAdapter = c.Decorate(d.dropdownAdapter, M)
                        }
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, D)
                    }
                    if (null == d.selectionAdapter) {
                        if (d.multiple ? d.selectionAdapter = r : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                            var O = e(d.amdBase + "compat/containerCss");
                            d.selectionAdapter = c.Decorate(d.selectionAdapter, O)
                        }
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                    }
                    if ("string" == typeof d.language)
                        if (d.language.indexOf("-") > 0) {
                            var F = d.language.split("-"),
                                P = F[0];
                            d.language = [d.language, P]
                        } else d.language = [d.language];
                    if (t.isArray(d.language)) {
                        var N = new u;
                        d.language.push("en");
                        for (var I = d.language, L = 0; L < I.length; L++) {
                            var j = I[L],
                                R = {};
                            try {
                                R = u.loadPath(j)
                            } catch (t) {
                                try {
                                    j = this.defaults.amdLanguageBase + j, R = u.loadPath(j)
                                } catch (t) {
                                    d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + j + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            N.extend(R)
                        }
                        d.translations = N
                    } else {
                        var Y = u.loadPath(this.defaults.amdLanguageBase + "en"),
                            q = new u(d.language);
                        q.extend(Y), d.translations = q
                    }
                    return d
                }, E.prototype.reset = function () {
                    function e(t) {
                        function e(t) {
                            return d[t] || t
                        }
                        return t.replace(/[^\u0000-\u007E]/g, e)
                    }

                    function n(i, r) {
                        if ("" === t.trim(i.term)) return r;
                        if (r.children && r.children.length > 0) {
                            for (var s = t.extend(!0, {}, r), o = r.children.length - 1; o >= 0; o--) {
                                var a = r.children[o],
                                    l = n(i, a);
                                null == l && s.children.splice(o, 1)
                            }
                            return s.children.length > 0 ? s : n(i, s)
                        }
                        var c = e(r.text).toUpperCase(),
                            u = e(i.term).toUpperCase();
                        return c.indexOf(u) > -1 ? r : null
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: c.escapeMarkup,
                        language: A,
                        matcher: n,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function (t) {
                            return t
                        },
                        templateResult: function (t) {
                            return t.text
                        },
                        templateSelection: function (t) {
                            return t.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, E.prototype.set = function (e, n) {
                    var i = t.camelCase(e),
                        r = {};
                    r[i] = n;
                    var s = c._convertData(r);
                    t.extend(this.defaults, s)
                };
                var $ = new E;
                return $
            }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (t, e, n, i) {
                function r(e, r) {
                    if (this.options = e, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                        var s = t(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = i.Decorate(this.options.dataAdapter, s)
                    }
                }
                return r.prototype.fromElement = function (t) {
                    var n = ["select2"];
                    null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                    var r = {};
                    r = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                    var s = e.extend(!0, {}, r);
                    s = i._convertData(s);
                    for (var o in s) e.inArray(o, n) > -1 || (e.isPlainObject(this.options[o]) ? e.extend(this.options[o], s[o]) : this.options[o] = s[o]);
                    return this
                }, r.prototype.get = function (t) {
                    return this.options[t]
                }, r.prototype.set = function (t, e) {
                    this.options[t] = e
                }, r
            }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, e, n, i) {
                var r = function (t, n) {
                    null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), n = n || {}, this.options = new e(n, t), r.__super__.constructor.call(this);
                    var i = t.attr("tabindex") || 0;
                    t.data("old-tabindex", i), t.attr("tabindex", "-1");
                    var s = this.options.get("dataAdapter");
                    this.dataAdapter = new s(t, this.options);
                    var o = this.render();
                    this._placeContainer(o);
                    var a = this.options.get("selectionAdapter");
                    this.selection = new a(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                    var l = this.options.get("dropdownAdapter");
                    this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                    var c = this.options.get("resultsAdapter");
                    this.results = new c(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var u = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (t) {
                        u.trigger("selection:update", {
                            data: t
                        })
                    }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
                };
                return n.Extend(r, n.Observable), r.prototype._generateId = function (t) {
                    var e = "";
                    return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), e = e.replace(/(:|\.|\[|\]|,)/g, ""), e = "select2-" + e
                }, r.prototype._placeContainer = function (t) {
                    t.insertAfter(this.$element);
                    var e = this._resolveWidth(this.$element, this.options.get("width"));
                    null != e && t.css("width", e)
                }, r.prototype._resolveWidth = function (t, e) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == e) {
                        var i = this._resolveWidth(t, "style");
                        return null != i ? i : this._resolveWidth(t, "element");
                    }
                    if ("element" == e) {
                        var r = t.outerWidth(!1);
                        return 0 >= r ? "auto" : r + "px"
                    }
                    if ("style" == e) {
                        var s = t.attr("style");
                        if ("string" != typeof s) return null;
                        for (var o = s.split(";"), a = 0, l = o.length; l > a; a += 1) {
                            var c = o[a].replace(/\s/g, ""),
                                u = c.match(n);
                            if (null !== u && u.length >= 1) return u[1]
                        }
                        return null
                    }
                    return e
                }, r.prototype._bindAdapters = function () {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, r.prototype._registerDomEvents = function () {
                    var e = this;
                    this.$element.on("change.select2", function () {
                        e.dataAdapter.current(function (t) {
                            e.trigger("selection:update", {
                                data: t
                            })
                        })
                    }), this.$element.on("focus.select2", function (t) {
                        e.trigger("focus", t)
                    }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != i ? (this._observer = new i(function (n) {
                        t.each(n, e._syncA), t.each(n, e._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                }, r.prototype._registerDataEvents = function () {
                    var t = this;
                    this.dataAdapter.on("*", function (e, n) {
                        t.trigger(e, n)
                    })
                }, r.prototype._registerSelectionEvents = function () {
                    var e = this,
                        n = ["toggle", "focus"];
                    this.selection.on("toggle", function () {
                        e.toggleDropdown()
                    }), this.selection.on("focus", function (t) {
                        e.focus(t)
                    }), this.selection.on("*", function (i, r) {
                        -1 === t.inArray(i, n) && e.trigger(i, r)
                    })
                }, r.prototype._registerDropdownEvents = function () {
                    var t = this;
                    this.dropdown.on("*", function (e, n) {
                        t.trigger(e, n)
                    })
                }, r.prototype._registerResultsEvents = function () {
                    var t = this;
                    this.results.on("*", function (e, n) {
                        t.trigger(e, n)
                    })
                }, r.prototype._registerEvents = function () {
                    var t = this;
                    this.on("open", function () {
                        t.$container.addClass("select2-container--open")
                    }), this.on("close", function () {
                        t.$container.removeClass("select2-container--open")
                    }), this.on("enable", function () {
                        t.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function () {
                        t.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function () {
                        t.$container.removeClass("select2-container--focus")
                    }), this.on("query", function (e) {
                        t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function (n) {
                            t.trigger("results:all", {
                                data: n,
                                query: e
                            })
                        })
                    }), this.on("query:append", function (e) {
                        this.dataAdapter.query(e, function (n) {
                            t.trigger("results:append", {
                                data: n,
                                query: e
                            })
                        })
                    }), this.on("keypress", function (e) {
                        var n = e.which;
                        t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(), e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(), e.preventDefault())
                    })
                }, r.prototype._syncAttributes = function () {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, r.prototype._syncSubtree = function (t, e) {
                    var n = !1,
                        i = this;
                    if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                        if (e)
                            if (e.addedNodes && e.addedNodes.length > 0)
                                for (var r = 0; r < e.addedNodes.length; r++) {
                                    var s = e.addedNodes[r];
                                    s.selected && (n = !0)
                                } else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                            else n = !0;
                        n && this.dataAdapter.current(function (t) {
                            i.trigger("selection:update", {
                                data: t
                            })
                        })
                    }
                }, r.prototype.trigger = function (t, e) {
                    var n = r.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (void 0 === e && (e = {}), t in i) {
                        var s = i[t],
                            o = {
                                prevented: !1,
                                name: t,
                                args: e
                            };
                        if (n.call(this, s, o), o.prevented) return void(e.prevented = !0)
                    }
                    n.call(this, t, e)
                }, r.prototype.toggleDropdown = function () {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, r.prototype.open = function () {
                    this.isOpen() || this.trigger("query", {})
                }, r.prototype.close = function () {
                    this.isOpen() && this.trigger("close", {})
                }, r.prototype.isOpen = function () {
                    return this.$container.hasClass("select2-container--open")
                }, r.prototype.hasFocus = function () {
                    return this.$container.hasClass("select2-container--focus")
                }, r.prototype.focus = function (t) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, r.prototype.enable = function (t) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == t || 0 === t.length) && (t = [!0]);
                    var e = !t[0];
                    this.$element.prop("disabled", e)
                }, r.prototype.data = function () {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var t = [];
                    return this.dataAdapter.current(function (e) {
                        t = e
                    }), t
                }, r.prototype.val = function (e) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                    var n = e[0];
                    t.isArray(n) && (n = t.map(n, function (t) {
                        return t.toString()
                    })), this.$element.val(n).trigger("change")
                }, r.prototype.destroy = function () {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, r.prototype.render = function () {
                    var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                }, r
            }), e.define("jquery-mousewheel", ["jquery"], function (t) {
                return t
            }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (t, e, n, i) {
                if (null == t.fn.select2) {
                    var r = ["open", "close", "destroy"];
                    t.fn.select2 = function (e) {
                        if (e = e || {}, "object" == typeof e) return this.each(function () {
                            var i = t.extend(!0, {}, e);
                            new n(t(this), i)
                        }), this;
                        if ("string" == typeof e) {
                            var i, s = Array.prototype.slice.call(arguments, 1);
                            return this.each(function () {
                                var n = t(this).data("select2");
                                null == n && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), i = n[e].apply(n, s)
                            }), t.inArray(e, r) > -1 ? this : i
                        }
                        throw new Error("Invalid arguments for Select2: " + e)
                    }
                }
                return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n
            }), {
                define: e.define,
                require: e.require
            }
        }(),
        n = e.require("jquery.select2");
    return t.fn.select2.amd = e, n
}), require.config({
    baseUrl: "js",
    paths: {
        jquery: "libs/jquery",
        bootstrap: "libs/bootstrap.min",
        "bootstrap-notify": "libs/bootstrap-notify.min",
        moment: "libs/moment.min",
        daterangepicker: "libs/daterangepicker.min",
        select2: "libs/select2.min",
        underscore: "libs/underscore",
        backbone: "libs/backbone",
        "backbone-validation": "libs/backbone-validation-amd-min"
    },
    shim: {
        bootstrap: ["jquery"],
        "bootstrap-notify": ["bootstrap"],
        daterangepicker: ["bootstrap"],
        select2: ["bootstrap"]
    }
}), require(["app/app", "backbone", "backbone-validation", "jquery", "bootstrap", "bootstrap-notify", "daterangepicker", "select2"], function (t, e) {
    "use strict";
    $(document).ready(function () {
        ! function () {
            $("body").on("focus", ".datepicker", function () {
                $(this).daterangepicker({
                    singleDatePicker: !0,
                    showDropdowns: !0,
                    locale: {
                        format: "YYYY-MM-DD"
                    }
                })
            }), $.fn.select2.defaults.set("theme", "bootstrap"), $.fn.select2.defaults.set("width", "auto"), $.fn.select2.defaults.set("placeholder", "Select..."), $.fn.select2.defaults.set("minimumInputLength", "1"), $.fn.select2.defaults.set("allowClear", "true")
        }()
    }), _.extend(e.Validation.callbacks, {
        valid: function (t, e, n) {
            var i = t.$("[name=" + e + "]"),
                r = i.closest(".form-group");
            r.removeClass("has-error"), r.find(".help-block").html("").addClass("hidden")
        },
        invalid: function (t, e, n, i) {
            var r = t.$("[name=" + e + "]"),
                s = r.closest(".form-group");
            s.addClass("has-error"), s.find(".help-block").html(n).removeClass("hidden")
        }
    });
    new t;
    e.history.start()
}), define("main", ["require"], function (t) {
    t(["moment"], function (t) {
        return window.moment = t, t
    })
});