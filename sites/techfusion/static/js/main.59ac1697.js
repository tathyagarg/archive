/*! For license information please see main.59ac1697.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
            730: (e, t, n) => {
                var r = n(43),
                    i = n(853);

                function a(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
                var s = new Set,
                    o = {};

                function l(e, t) { u(e, t), u(e + "Capture", t) }

                function u(e, t) { for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e]) }
                var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    f = {},
                    p = {};

                function m(e, t, n, r, i, a, s) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = s }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) { g[e] = new m(e, 0, !1, e, null, !1, !1) })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    g[t] = new m(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) { g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1) })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) { g[e] = new m(e, 2, !1, e, null, !1, !1) })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) { g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1) })), ["checked", "multiple", "muted", "selected"].forEach((function(e) { g[e] = new m(e, 3, !0, e, null, !1, !1) })), ["capture", "download"].forEach((function(e) { g[e] = new m(e, 4, !1, e, null, !1, !1) })), ["cols", "rows", "size", "span"].forEach((function(e) { g[e] = new m(e, 6, !1, e, null, !1, !1) })), ["rowSpan", "start"].forEach((function(e) { g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1) }));
                var v = /[\-:]([a-z])/g;

                function y(e) { return e[1].toUpperCase() }

                function x(e, t, n, r) {
                    var i = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== i ? 0 !== i.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, i, r) && (n = null), r || null === i ? function(e) { return !!d.call(p, e) || !d.call(f, e) && (h.test(e) ? p[e] = !0 : (f[e] = !0, !1)) }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) { g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1) })), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) { g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0) }));
                var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    w = Symbol.for("react.element"),
                    A = Symbol.for("react.portal"),
                    j = Symbol.for("react.fragment"),
                    C = Symbol.for("react.strict_mode"),
                    E = Symbol.for("react.profiler"),
                    S = Symbol.for("react.provider"),
                    k = Symbol.for("react.context"),
                    P = Symbol.for("react.forward_ref"),
                    N = Symbol.for("react.suspense"),
                    T = Symbol.for("react.suspense_list"),
                    B = Symbol.for("react.memo"),
                    I = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var D = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var F = Symbol.iterator;

                function R(e) { return null === e || "object" !== typeof e ? null : "function" === typeof(e = F && e[F] || e["@@iterator"]) ? e : null }
                var L, M = Object.assign;

                function O(e) {
                    if (void 0 === L) try { throw Error() } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        L = t && t[1] || ""
                    }
                    return "\n" + L + e
                }
                var Q = !1;

                function U(e, t) {
                    if (!e || Q) return "";
                    Q = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), "object" === typeof Reflect && Reflect.construct) {
                                try { Reflect.construct(t, []) } catch (u) { var r = u }
                                Reflect.construct(e, [], t)
                            } else {
                                try { t.call() } catch (u) { r = u }
                                e.call(t.prototype)
                            }
                        else {
                            try { throw Error() } catch (u) { r = u }
                            e()
                        }
                    } catch (u) {
                        if (u && r && "string" === typeof u.stack) {
                            for (var i = u.stack.split("\n"), a = r.stack.split("\n"), s = i.length - 1, o = a.length - 1; 1 <= s && 0 <= o && i[s] !== a[o];) o--;
                            for (; 1 <= s && 0 <= o; s--, o--)
                                if (i[s] !== a[o]) {
                                    if (1 !== s || 1 !== o)
                                        do { if (s--, 0 > --o || i[s] !== a[o]) { var l = "\n" + i[s].replace(" at new ", " at "); return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l } } while (1 <= s && 0 <= o);
                                    break
                                }
                        }
                    } finally { Q = !1, Error.prepareStackTrace = n }
                    return (e = e ? e.displayName || e.name : "") ? O(e) : ""
                }

                function z(e) {
                    switch (e.tag) {
                        case 5:
                            return O(e.type);
                        case 16:
                            return O("Lazy");
                        case 13:
                            return O("Suspense");
                        case 19:
                            return O("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = U(e.type, !1);
                        case 11:
                            return e = U(e.type.render, !1);
                        case 1:
                            return e = U(e.type, !0);
                        default:
                            return ""
                    }
                }

                function V(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case j:
                            return "Fragment";
                        case A:
                            return "Portal";
                        case E:
                            return "Profiler";
                        case C:
                            return "StrictMode";
                        case N:
                            return "Suspense";
                        case T:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case k:
                            return (e.displayName || "Context") + ".Consumer";
                        case S:
                            return (e._context.displayName || "Context") + ".Provider";
                        case P:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case B:
                            return null !== (t = e.displayName || null) ? t : V(e.type) || "Memo";
                        case I:
                            t = e._payload, e = e._init;
                            try { return V(e(t)) } catch (n) {}
                    }
                    return null
                }

                function H(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return V(t);
                        case 8:
                            return t === C ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function K(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function W(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t) }

                function Y(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = W(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var i = n.get,
                                a = n.set;
                            return Object.defineProperty(e, t, { configurable: !0, get: function() { return i.call(this) }, set: function(e) { r = "" + e, a.call(this, e) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return r }, setValue: function(e) { r = "" + e }, stopTracking: function() { e._valueTracker = null, delete e[t] } }
                        }
                    }(e))
                }

                function G(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function X(e) { if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null; try { return e.activeElement || e.body } catch (t) { return e.body } }

                function q(e, t) { var n = t.checked; return M({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }) }

                function _(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = K(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }
                }

                function J(e, t) { null != (t = t.checked) && x(e, "checked", t, !1) }

                function Z(e, t) {
                    J(e, t);
                    var n = K(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, K(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function $(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) { "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) { t = {}; for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0; for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0) } else {
                        for (n = "" + K(n), t = null, i = 0; i < e.length; i++) {
                            if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
                            null !== t || e[i].disabled || (t = e[i])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) { if (null != t.dangerouslySetInnerHTML) throw Error(a(91)); return M({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

                function ie(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(a(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(a(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = { initialValue: K(n) }
                }

                function ae(e, t) {
                    var n = K(t.value),
                        r = K(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function se(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function oe(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function le(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e }
                var ue, ce, de = (ce = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else { for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) { MSApp.execUnsafeLocalFunction((function() { return ce(e, t) })) } : ce);

                function he(e, t) {
                    if (t) { var n = e.firstChild; if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t) }
                    e.textContent = t
                }
                var fe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
                    pe = ["Webkit", "ms", "Moz", "O"];

                function me(e, t, n) { return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || fe.hasOwnProperty(e) && fe[e] ? ("" + t).trim() : t + "px" }

                function ge(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                i = me(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
                        }
                }
                Object.keys(fe).forEach((function(e) { pe.forEach((function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), fe[t] = fe[e] })) }));
                var ve = M({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

                function ye(e, t) { if (t) { if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e)); if (null != t.dangerouslySetInnerHTML) { if (null != t.children) throw Error(a(60)); if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61)) } if (null != t.style && "object" !== typeof t.style) throw Error(a(62)) } }

                function xe(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var be = null;

                function we(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e }
                var Ae = null,
                    je = null,
                    Ce = null;

                function Ee(e) {
                    if (e = xi(e)) {
                        if ("function" !== typeof Ae) throw Error(a(280));
                        var t = e.stateNode;
                        t && (t = wi(t), Ae(e.stateNode, e.type, t))
                    }
                }

                function Se(e) { je ? Ce ? Ce.push(e) : Ce = [e] : je = e }

                function ke() {
                    if (je) {
                        var e = je,
                            t = Ce;
                        if (Ce = je = null, Ee(e), t)
                            for (e = 0; e < t.length; e++) Ee(t[e])
                    }
                }

                function Pe(e, t) { return e(t) }

                function Ne() {}
                var Te = !1;

                function Be(e, t, n) {
                    if (Te) return e(t, n);
                    Te = !0;
                    try { return Pe(e, t, n) } finally { Te = !1, (null !== je || null !== Ce) && (Ne(), ke()) }
                }

                function Ie(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = wi(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
                    return n
                }
                var De = !1;
                if (c) try {
                    var Fe = {};
                    Object.defineProperty(Fe, "passive", { get: function() { De = !0 } }), window.addEventListener("test", Fe, Fe), window.removeEventListener("test", Fe, Fe)
                } catch (ce) { De = !1 }

                function Re(e, t, n, r, i, a, s, o, l) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(n, u) } catch (c) { this.onError(c) } }
                var Le = !1,
                    Me = null,
                    Oe = !1,
                    Qe = null,
                    Ue = { onError: function(e) { Le = !0, Me = e } };

                function ze(e, t, n, r, i, a, s, o, l) { Le = !1, Me = null, Re.apply(Ue, arguments) }

                function Ve(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do { 0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function He(e) { if (13 === e.tag) { var t = e.memoizedState; if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated } return null }

                function Ke(e) { if (Ve(e) !== e) throw Error(a(188)) }

                function We(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) { if (null === (t = Ve(e))) throw Error(a(188)); return t !== e ? null : e }
                        for (var n = e, r = t;;) {
                            var i = n.return;
                            if (null === i) break;
                            var s = i.alternate;
                            if (null === s) { if (null !== (r = i.return)) { n = r; continue } break }
                            if (i.child === s.child) {
                                for (s = i.child; s;) {
                                    if (s === n) return Ke(i), e;
                                    if (s === r) return Ke(i), t;
                                    s = s.sibling
                                }
                                throw Error(a(188))
                            }
                            if (n.return !== r.return) n = i, r = s;
                            else {
                                for (var o = !1, l = i.child; l;) {
                                    if (l === n) { o = !0, n = i, r = s; break }
                                    if (l === r) { o = !0, r = i, n = s; break }
                                    l = l.sibling
                                }
                                if (!o) {
                                    for (l = s.child; l;) {
                                        if (l === n) { o = !0, n = s, r = i; break }
                                        if (l === r) { o = !0, r = s, n = i; break }
                                        l = l.sibling
                                    }
                                    if (!o) throw Error(a(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(a(190))
                        }
                        if (3 !== n.tag) throw Error(a(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Ye(e) : null
                }

                function Ye(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Ye(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Ge = i.unstable_scheduleCallback,
                    Xe = i.unstable_cancelCallback,
                    qe = i.unstable_shouldYield,
                    _e = i.unstable_requestPaint,
                    Je = i.unstable_now,
                    Ze = i.unstable_getCurrentPriorityLevel,
                    $e = i.unstable_ImmediatePriority,
                    et = i.unstable_UserBlockingPriority,
                    tt = i.unstable_NormalPriority,
                    nt = i.unstable_LowPriority,
                    rt = i.unstable_IdlePriority,
                    it = null,
                    at = null;
                var st = Math.clz32 ? Math.clz32 : function(e) { return e >>>= 0, 0 === e ? 32 : 31 - (ot(e) / lt | 0) | 0 },
                    ot = Math.log,
                    lt = Math.LN2;
                var ut = 64,
                    ct = 4194304;

                function dt(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function ht(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        i = e.suspendedLanes,
                        a = e.pingedLanes,
                        s = 268435455 & n;
                    if (0 !== s) {
                        var o = s & ~i;
                        0 !== o ? r = dt(o) : 0 !== (a &= s) && (r = dt(a))
                    } else 0 !== (s = n & ~i) ? r = dt(s) : 0 !== a && (r = dt(a));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & i) && ((i = r & -r) >= (a = t & -t) || 16 === i && 0 !== (4194240 & a))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - st(t)), r |= e[n], t &= ~i;
                    return r
                }

                function ft(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function pt(e) { return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0 }

                function mt() { var e = ut; return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e }

                function gt(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

                function vt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - st(t)] = n }

                function yt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - st(n),
                            i = 1 << r;
                        i & t | e[r] & t && (e[r] |= t), n &= ~i
                    }
                }
                var xt = 0;

                function bt(e) { return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1 }
                var wt, At, jt, Ct, Et, St = !1,
                    kt = [],
                    Pt = null,
                    Nt = null,
                    Tt = null,
                    Bt = new Map,
                    It = new Map,
                    Dt = [],
                    Ft = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function Rt(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Pt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Nt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Tt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Bt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            It.delete(t.pointerId)
                    }
                }

                function Lt(e, t, n, r, i, a) { return null === e || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, null !== t && (null !== (t = xi(t)) && At(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e) }

                function Mt(e) {
                    var t = yi(e.target);
                    if (null !== t) {
                        var n = Ve(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) { if (null !== (t = He(n))) return e.blockedOn = t, void Et(e.priority, (function() { jt(n) })) } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Ot(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = xi(n)) && At(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        be = r, n.target.dispatchEvent(r), be = null, t.shift()
                    }
                    return !0
                }

                function Qt(e, t, n) { Ot(e) && n.delete(t) }

                function Ut() { St = !1, null !== Pt && Ot(Pt) && (Pt = null), null !== Nt && Ot(Nt) && (Nt = null), null !== Tt && Ot(Tt) && (Tt = null), Bt.forEach(Qt), It.forEach(Qt) }

                function zt(e, t) { e.blockedOn === t && (e.blockedOn = null, St || (St = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Ut))) }

                function Vt(e) {
                    function t(t) { return zt(t, e) }
                    if (0 < kt.length) {
                        zt(kt[0], e);
                        for (var n = 1; n < kt.length; n++) {
                            var r = kt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Pt && zt(Pt, e), null !== Nt && zt(Nt, e), null !== Tt && zt(Tt, e), Bt.forEach(t), It.forEach(t), n = 0; n < Dt.length; n++)(r = Dt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn;) Mt(n), null === n.blockedOn && Dt.shift()
                }
                var Ht = b.ReactCurrentBatchConfig,
                    Kt = !0;

                function Wt(e, t, n, r) {
                    var i = xt,
                        a = Ht.transition;
                    Ht.transition = null;
                    try { xt = 1, Gt(e, t, n, r) } finally { xt = i, Ht.transition = a }
                }

                function Yt(e, t, n, r) {
                    var i = xt,
                        a = Ht.transition;
                    Ht.transition = null;
                    try { xt = 4, Gt(e, t, n, r) } finally { xt = i, Ht.transition = a }
                }

                function Gt(e, t, n, r) {
                    if (Kt) {
                        var i = qt(e, t, n, r);
                        if (null === i) Kr(e, t, r, Xt, n), Rt(e, r);
                        else if (function(e, t, n, r, i) {
                                switch (t) {
                                    case "focusin":
                                        return Pt = Lt(Pt, e, t, n, r, i), !0;
                                    case "dragenter":
                                        return Nt = Lt(Nt, e, t, n, r, i), !0;
                                    case "mouseover":
                                        return Tt = Lt(Tt, e, t, n, r, i), !0;
                                    case "pointerover":
                                        var a = i.pointerId;
                                        return Bt.set(a, Lt(Bt.get(a) || null, e, t, n, r, i)), !0;
                                    case "gotpointercapture":
                                        return a = i.pointerId, It.set(a, Lt(It.get(a) || null, e, t, n, r, i)), !0
                                }
                                return !1
                            }(i, e, t, n, r)) r.stopPropagation();
                        else if (Rt(e, r), 4 & t && -1 < Ft.indexOf(e)) {
                            for (; null !== i;) {
                                var a = xi(i);
                                if (null !== a && wt(a), null === (a = qt(e, t, n, r)) && Kr(e, t, r, Xt, n), a === i) break;
                                i = a
                            }
                            null !== i && r.stopPropagation()
                        } else Kr(e, t, r, null, n)
                    }
                }
                var Xt = null;

                function qt(e, t, n, r) {
                    if (Xt = null, null !== (e = yi(e = we(r))))
                        if (null === (t = Ve(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = He(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Xt = e, null
                }

                function _t(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Ze()) {
                                case $e:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Jt = null,
                    Zt = null,
                    $t = null;

                function en() {
                    if ($t) return $t;
                    var e, t, n = Zt,
                        r = n.length,
                        i = "value" in Jt ? Jt.value : Jt.textContent,
                        a = i.length;
                    for (e = 0; e < r && n[e] === i[e]; e++);
                    var s = r - e;
                    for (t = 1; t <= s && n[r - t] === i[a - t]; t++);
                    return $t = i.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0 }

                function nn() { return !0 }

                function rn() { return !1 }

                function an(e) {
                    function t(t, n, r, i, a) { for (var s in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(i) : i[s]); return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? nn : rn, this.isPropagationStopped = rn, this }
                    return M(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var sn, on, ln, un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
                    cn = an(un),
                    dn = M({}, un, { view: 0, detail: 0 }),
                    hn = an(dn),
                    fn = M({}, dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: En, button: 0, buttons: 0, relatedTarget: function(e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (sn = e.screenX - ln.screenX, on = e.screenY - ln.screenY) : on = sn = 0, ln = e), sn) }, movementY: function(e) { return "movementY" in e ? e.movementY : on } }),
                    pn = an(fn),
                    mn = an(M({}, fn, { dataTransfer: 0 })),
                    gn = an(M({}, dn, { relatedTarget: 0 })),
                    vn = an(M({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    yn = M({}, un, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
                    xn = an(yn),
                    bn = an(M({}, un, { data: 0 })),
                    wn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
                    An = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
                    jn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

                function Cn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = jn[e]) && !!t[e] }

                function En() { return Cn }
                var Sn = M({}, dn, { key: function(e) { if (e.key) { var t = wn[e.key] || e.key; if ("Unidentified" !== t) return t } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? An[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: En, charCode: function(e) { return "keypress" === e.type ? tn(e) : 0 }, keyCode: function(e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 }, which: function(e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 } }),
                    kn = an(Sn),
                    Pn = an(M({}, fn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
                    Nn = an(M({}, dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: En })),
                    Tn = an(M({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    Bn = M({}, fn, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
                    In = an(Bn),
                    Dn = [9, 13, 27, 32],
                    Fn = c && "CompositionEvent" in window,
                    Rn = null;
                c && "documentMode" in document && (Rn = document.documentMode);
                var Ln = c && "TextEvent" in window && !Rn,
                    Mn = c && (!Fn || Rn && 8 < Rn && 11 >= Rn),
                    On = String.fromCharCode(32),
                    Qn = !1;

                function Un(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Dn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function zn(e) { return "object" === typeof(e = e.detail) && "data" in e ? e.data : null }
                var Vn = !1;
                var Hn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

                function Kn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Hn[e.type] : "textarea" === t }

                function Wn(e, t, n, r) { Se(r), 0 < (t = Yr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) }
                var Yn = null,
                    Gn = null;

                function Xn(e) { Or(e, 0) }

                function qn(e) { if (G(bi(e))) return e }

                function _n(e, t) { if ("change" === e) return t }
                var Jn = !1;
                if (c) {
                    var Zn;
                    if (c) {
                        var $n = "oninput" in document;
                        if (!$n) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), $n = "function" === typeof er.oninput
                        }
                        Zn = $n
                    } else Zn = !1;
                    Jn = Zn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() { Yn && (Yn.detachEvent("onpropertychange", nr), Gn = Yn = null) }

                function nr(e) {
                    if ("value" === e.propertyName && qn(Gn)) {
                        var t = [];
                        Wn(t, Gn, e, we(e)), Be(Xn, t)
                    }
                }

                function rr(e, t, n) { "focusin" === e ? (tr(), Gn = n, (Yn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr() }

                function ir(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e) return qn(Gn) }

                function ar(e, t) { if ("click" === e) return qn(t) }

                function sr(e, t) { if ("input" === e || "change" === e) return qn(t) }
                var or = "function" === typeof Object.is ? Object.is : function(e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t };

                function lr(e, t) {
                    if (or(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) { var i = n[r]; if (!d.call(t, i) || !or(e[i], t[i])) return !1 }
                    return !0
                }

                function ur(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

                function cr(e, t) {
                    var n, r = ur(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) { r = r.nextSibling; break e }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = ur(r)
                    }
                }

                function dr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))) }

                function hr() {
                    for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
                        try { var n = "string" === typeof t.contentWindow.location.href } catch (r) { n = !1 }
                        if (!n) break;
                        t = X((e = t.contentWindow).document)
                    }
                    return t
                }

                function fr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable) }

                function pr(e) {
                    var t = hr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && fr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var i = n.textContent.length,
                                a = Math.min(r.start, i);
                            r = void 0 === r.end ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = cr(n, a);
                            var s = cr(n, r);
                            i && s && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var mr = c && "documentMode" in document && 11 >= document.documentMode,
                    gr = null,
                    vr = null,
                    yr = null,
                    xr = !1;

                function br(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    xr || null == gr || gr !== X(r) || ("selectionStart" in (r = gr) && fr(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && lr(yr, r) || (yr = r, 0 < (r = Yr(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gr)))
                }

                function wr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n }
                var Ar = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") },
                    jr = {},
                    Cr = {};

                function Er(e) {
                    if (jr[e]) return jr[e];
                    if (!Ar[e]) return e;
                    var t, n = Ar[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Cr) return jr[e] = n[t];
                    return e
                }
                c && (Cr = document.createElement("div").style, "AnimationEvent" in window || (delete Ar.animationend.animation, delete Ar.animationiteration.animation, delete Ar.animationstart.animation), "TransitionEvent" in window || delete Ar.transitionend.transition);
                var Sr = Er("animationend"),
                    kr = Er("animationiteration"),
                    Pr = Er("animationstart"),
                    Nr = Er("transitionend"),
                    Tr = new Map,
                    Br = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Ir(e, t) { Tr.set(e, t), l(t, [e]) }
                for (var Dr = 0; Dr < Br.length; Dr++) {
                    var Fr = Br[Dr];
                    Ir(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)))
                }
                Ir(Sr, "onAnimationEnd"), Ir(kr, "onAnimationIteration"), Ir(Pr, "onAnimationStart"), Ir("dblclick", "onDoubleClick"), Ir("focusin", "onFocus"), Ir("focusout", "onBlur"), Ir(Nr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));

                function Mr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, i, s, o, l, u) {
                            if (ze.apply(this, arguments), Le) {
                                if (!Le) throw Error(a(198));
                                var c = Me;
                                Le = !1, Me = null, Oe || (Oe = !0, Qe = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Or(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            i = r.event;
                        r = r.listeners;
                        e: {
                            var a = void 0;
                            if (t)
                                for (var s = r.length - 1; 0 <= s; s--) {
                                    var o = r[s],
                                        l = o.instance,
                                        u = o.currentTarget;
                                    if (o = o.listener, l !== a && i.isPropagationStopped()) break e;
                                    Mr(i, o, u), a = l
                                } else
                                    for (s = 0; s < r.length; s++) {
                                        if (l = (o = r[s]).instance, u = o.currentTarget, o = o.listener, l !== a && i.isPropagationStopped()) break e;
                                        Mr(i, o, u), a = l
                                    }
                        }
                    }
                    if (Oe) throw e = Qe, Oe = !1, Qe = null, e
                }

                function Qr(e, t) {
                    var n = t[mi];
                    void 0 === n && (n = t[mi] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Hr(t, e, 2, !1), n.add(r))
                }

                function Ur(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Hr(n, e, r, t)
                }
                var zr = "_reactListening" + Math.random().toString(36).slice(2);

                function Vr(e) {
                    if (!e[zr]) {
                        e[zr] = !0, s.forEach((function(t) { "selectionchange" !== t && (Lr.has(t) || Ur(t, !1, e), Ur(t, !0, e)) }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[zr] || (t[zr] = !0, Ur("selectionchange", !1, t))
                    }
                }

                function Hr(e, t, n, r) {
                    switch (_t(t)) {
                        case 1:
                            var i = Wt;
                            break;
                        case 4:
                            i = Yt;
                            break;
                        default:
                            i = Gt
                    }
                    n = i.bind(null, t, n, e), i = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1)
                }

                function Kr(e, t, n, r, i) {
                    var a = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var s = r.tag;
                        if (3 === s || 4 === s) {
                            var o = r.stateNode.containerInfo;
                            if (o === i || 8 === o.nodeType && o.parentNode === i) break;
                            if (4 === s)
                                for (s = r.return; null !== s;) {
                                    var l = s.tag;
                                    if ((3 === l || 4 === l) && ((l = s.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
                                    s = s.return
                                }
                            for (; null !== o;) {
                                if (null === (s = yi(o))) return;
                                if (5 === (l = s.tag) || 6 === l) { r = a = s; continue e }
                                o = o.parentNode
                            }
                        }
                        r = r.return
                    }
                    Be((function() {
                        var r = a,
                            i = we(n),
                            s = [];
                        e: {
                            var o = Tr.get(e);
                            if (void 0 !== o) {
                                var l = cn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = kn;
                                        break;
                                    case "focusin":
                                        u = "focus", l = gn;
                                        break;
                                    case "focusout":
                                        u = "blur", l = gn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = gn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = pn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = mn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = Nn;
                                        break;
                                    case Sr:
                                    case kr:
                                    case Pr:
                                        l = vn;
                                        break;
                                    case Nr:
                                        l = Tn;
                                        break;
                                    case "scroll":
                                        l = hn;
                                        break;
                                    case "wheel":
                                        l = In;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = xn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = Pn
                                }
                                var c = 0 !== (4 & t),
                                    d = !c && "scroll" === e,
                                    h = c ? null !== o ? o + "Capture" : null : o;
                                c = [];
                                for (var f, p = r; null !== p;) {
                                    var m = (f = p).stateNode;
                                    if (5 === f.tag && null !== m && (f = m, null !== h && (null != (m = Ie(p, h)) && c.push(Wr(p, m, f)))), d) break;
                                    p = p.return
                                }
                                0 < c.length && (o = new l(o, u, null, n, i), s.push({ event: o, listeners: c }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (l = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || n === be || !(u = n.relatedTarget || n.fromElement) || !yi(u) && !u[pi]) && (l || o) && (o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? yi(u) : null) && (u !== (d = Ve(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
                                if (c = pn, m = "onMouseLeave", h = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pn, m = "onPointerLeave", h = "onPointerEnter", p = "pointer"), d = null == l ? o : bi(l), f = null == u ? o : bi(u), (o = new c(m, p + "leave", l, n, i)).target = d, o.relatedTarget = f, m = null, yi(i) === r && ((c = new c(h, p + "enter", u, n, i)).target = f, c.relatedTarget = d, m = c), d = m, l && u) e: {
                                    for (h = u, p = 0, f = c = l; f; f = Gr(f)) p++;
                                    for (f = 0, m = h; m; m = Gr(m)) f++;
                                    for (; 0 < p - f;) c = Gr(c),
                                    p--;
                                    for (; 0 < f - p;) h = Gr(h),
                                    f--;
                                    for (; p--;) {
                                        if (c === h || null !== h && c === h.alternate) break e;
                                        c = Gr(c), h = Gr(h)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== l && Xr(s, o, l, c, !1), null !== u && null !== d && Xr(s, d, u, c, !0)
                            }
                            if ("select" === (l = (o = r ? bi(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === l && "file" === o.type) var g = _n;
                            else if (Kn(o))
                                if (Jn) g = sr;
                                else { g = ir; var v = rr }
                            else(l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (g = ar);
                            switch (g && (g = g(e, r)) ? Wn(s, g, n, i) : (v && v(e, o, r), "focusout" === e && (v = o._wrapperState) && v.controlled && "number" === o.type && ee(o, "number", o.value)), v = r ? bi(r) : window, e) {
                                case "focusin":
                                    (Kn(v) || "true" === v.contentEditable) && (gr = v, vr = r, yr = null);
                                    break;
                                case "focusout":
                                    yr = vr = gr = null;
                                    break;
                                case "mousedown":
                                    xr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    xr = !1, br(s, n, i);
                                    break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    br(s, n, i)
                            }
                            var y;
                            if (Fn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var x = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        x = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        x = "onCompositionUpdate";
                                        break e
                                }
                                x = void 0
                            }
                            else Vn ? Un(e, n) && (x = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (x = "onCompositionStart");
                            x && (Mn && "ko" !== n.locale && (Vn || "onCompositionStart" !== x ? "onCompositionEnd" === x && Vn && (y = en()) : (Zt = "value" in (Jt = i) ? Jt.value : Jt.textContent, Vn = !0)), 0 < (v = Yr(r, x)).length && (x = new bn(x, e, null, n, i), s.push({ event: x, listeners: v }), y ? x.data = y : null !== (y = zn(n)) && (x.data = y))), (y = Ln ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return zn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Qn = !0, On);
                                    case "textInput":
                                        return (e = t.data) === On && Qn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Vn) return "compositionend" === e || !Fn && Un(e, t) ? (e = en(), $t = Zt = Jt = null, Vn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) }
                                        return null;
                                    case "compositionend":
                                        return Mn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Yr(r, "onBeforeInput")).length && (i = new bn("onBeforeInput", "beforeinput", null, n, i), s.push({ event: i, listeners: r }), i.data = y))
                        }
                        Or(s, t)
                    }))
                }

                function Wr(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

                function Yr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var i = e,
                            a = i.stateNode;
                        5 === i.tag && null !== a && (i = a, null != (a = Ie(e, n)) && r.unshift(Wr(e, a, i)), null != (a = Ie(e, t)) && r.push(Wr(e, a, i))), e = e.return
                    }
                    return r
                }

                function Gr(e) {
                    if (null === e) return null;
                    do { e = e.return } while (e && 5 !== e.tag);
                    return e || null
                }

                function Xr(e, t, n, r, i) {
                    for (var a = t._reactName, s = []; null !== n && n !== r;) {
                        var o = n,
                            l = o.alternate,
                            u = o.stateNode;
                        if (null !== l && l === r) break;
                        5 === o.tag && null !== u && (o = u, i ? null != (l = Ie(n, a)) && s.unshift(Wr(n, l, o)) : i || null != (l = Ie(n, a)) && s.push(Wr(n, l, o))), n = n.return
                    }
                    0 !== s.length && e.push({ event: t, listeners: s })
                }
                var qr = /\r\n?/g,
                    _r = /\u0000|\uFFFD/g;

                function Jr(e) { return ("string" === typeof e ? e : "" + e).replace(qr, "\n").replace(_r, "") }

                function Zr(e, t, n) { if (t = Jr(t), Jr(e) !== t && n) throw Error(a(425)) }

                function $r() {}
                var ei = null,
                    ti = null;

                function ni(e, t) { return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html }
                var ri = "function" === typeof setTimeout ? setTimeout : void 0,
                    ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    ai = "function" === typeof Promise ? Promise : void 0,
                    si = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ai ? function(e) { return ai.resolve(null).then(e).catch(oi) } : ri;

                function oi(e) { setTimeout((function() { throw e })) }

                function li(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var i = n.nextSibling;
                        if (e.removeChild(n), i && 8 === i.nodeType)
                            if ("/$" === (n = i.data)) {
                                if (0 === r) return e.removeChild(i), void Vt(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = i
                    } while (n);
                    Vt(t)
                }

                function ui(e) { for (; null != e; e = e.nextSibling) { var t = e.nodeType; if (1 === t || 3 === t) break; if (8 === t) { if ("$" === (t = e.data) || "$!" === t || "$?" === t) break; if ("/$" === t) return null } } return e }

                function ci(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var di = Math.random().toString(36).slice(2),
                    hi = "__reactFiber$" + di,
                    fi = "__reactProps$" + di,
                    pi = "__reactContainer$" + di,
                    mi = "__reactEvents$" + di,
                    gi = "__reactListeners$" + di,
                    vi = "__reactHandles$" + di;

                function yi(e) {
                    var t = e[hi];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[pi] || n[hi]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = ci(e); null !== e;) {
                                    if (n = e[hi]) return n;
                                    e = ci(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function xi(e) { return !(e = e[hi] || e[pi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e }

                function bi(e) { if (5 === e.tag || 6 === e.tag) return e.stateNode; throw Error(a(33)) }

                function wi(e) { return e[fi] || null }
                var Ai = [],
                    ji = -1;

                function Ci(e) { return { current: e } }

                function Ei(e) { 0 > ji || (e.current = Ai[ji], Ai[ji] = null, ji--) }

                function Si(e, t) { ji++, Ai[ji] = e.current, e.current = t }
                var ki = {},
                    Pi = Ci(ki),
                    Ni = Ci(!1),
                    Ti = ki;

                function Bi(e, t) { var n = e.type.contextTypes; if (!n) return ki; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext; var i, a = {}; for (i in n) a[i] = t[i]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a }

                function Ii(e) { return null !== (e = e.childContextTypes) && void 0 !== e }

                function Di() { Ei(Ni), Ei(Pi) }

                function Fi(e, t, n) {
                    if (Pi.current !== ki) throw Error(a(168));
                    Si(Pi, t), Si(Ni, n)
                }

                function Ri(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var i in r = r.getChildContext())
                        if (!(i in t)) throw Error(a(108, H(e) || "Unknown", i));
                    return M({}, n, r)
                }

                function Li(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ki, Ti = Pi.current, Si(Pi, e), Si(Ni, Ni.current), !0 }

                function Mi(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(a(169));
                    n ? (e = Ri(e, t, Ti), r.__reactInternalMemoizedMergedChildContext = e, Ei(Ni), Ei(Pi), Si(Pi, e)) : Ei(Ni), Si(Ni, n)
                }
                var Oi = null,
                    Qi = !1,
                    Ui = !1;

                function zi(e) { null === Oi ? Oi = [e] : Oi.push(e) }

                function Vi() {
                    if (!Ui && null !== Oi) {
                        Ui = !0;
                        var e = 0,
                            t = xt;
                        try {
                            var n = Oi;
                            for (xt = 1; e < n.length; e++) {
                                var r = n[e];
                                do { r = r(!0) } while (null !== r)
                            }
                            Oi = null, Qi = !1
                        } catch (i) { throw null !== Oi && (Oi = Oi.slice(e + 1)), Ge($e, Vi), i } finally { xt = t, Ui = !1 }
                    }
                    return null
                }
                var Hi = [],
                    Ki = 0,
                    Wi = null,
                    Yi = 0,
                    Gi = [],
                    Xi = 0,
                    qi = null,
                    _i = 1,
                    Ji = "";

                function Zi(e, t) { Hi[Ki++] = Yi, Hi[Ki++] = Wi, Wi = e, Yi = t }

                function $i(e, t, n) {
                    Gi[Xi++] = _i, Gi[Xi++] = Ji, Gi[Xi++] = qi, qi = e;
                    var r = _i;
                    e = Ji;
                    var i = 32 - st(r) - 1;
                    r &= ~(1 << i), n += 1;
                    var a = 32 - st(t) + i;
                    if (30 < a) {
                        var s = i - i % 5;
                        a = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, _i = 1 << 32 - st(t) + i | n << i | r, Ji = a + e
                    } else _i = 1 << a | n << i | r, Ji = e
                }

                function ea(e) { null !== e.return && (Zi(e, 1), $i(e, 1, 0)) }

                function ta(e) { for (; e === Wi;) Wi = Hi[--Ki], Hi[Ki] = null, Yi = Hi[--Ki], Hi[Ki] = null; for (; e === qi;) qi = Gi[--Xi], Gi[Xi] = null, Ji = Gi[--Xi], Gi[Xi] = null, _i = Gi[--Xi], Gi[Xi] = null }
                var na = null,
                    ra = null,
                    ia = !1,
                    aa = null;

                function sa(e, t) {
                    var n = Bu(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function oa(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, na = e, ra = ui(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, na = e, ra = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== qi ? { id: _i, overflow: Ji } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Bu(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, na = e, ra = null, !0);
                        default:
                            return !1
                    }
                }

                function la(e) { return 0 !== (1 & e.mode) && 0 === (128 & e.flags) }

                function ua(e) {
                    if (ia) {
                        var t = ra;
                        if (t) {
                            var n = t;
                            if (!oa(e, t)) {
                                if (la(e)) throw Error(a(418));
                                t = ui(n.nextSibling);
                                var r = na;
                                t && oa(e, t) ? sa(r, n) : (e.flags = -4097 & e.flags | 2, ia = !1, na = e)
                            }
                        } else {
                            if (la(e)) throw Error(a(418));
                            e.flags = -4097 & e.flags | 2, ia = !1, na = e
                        }
                    }
                }

                function ca(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    na = e
                }

                function da(e) {
                    if (e !== na) return !1;
                    if (!ia) return ca(e), ia = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ni(e.type, e.memoizedProps)), t && (t = ra)) { if (la(e)) throw ha(), Error(a(418)); for (; t;) sa(e, t), t = ui(t.nextSibling) }
                    if (ca(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) { ra = ui(e.nextSibling); break e }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ra = null
                        }
                    } else ra = na ? ui(e.stateNode.nextSibling) : null;
                    return !0
                }

                function ha() { for (var e = ra; e;) e = ui(e.nextSibling) }

                function fa() { ra = na = null, ia = !1 }

                function pa(e) { null === aa ? aa = [e] : aa.push(e) }
                var ma = b.ReactCurrentBatchConfig;

                function ga(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) { if (1 !== n.tag) throw Error(a(309)); var r = n.stateNode }
                            if (!r) throw Error(a(147, e));
                            var i = r,
                                s = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === s ? t.ref : (t = function(e) {
                                var t = i.refs;
                                null === e ? delete t[s] : t[s] = e
                            }, t._stringRef = s, t)
                        }
                        if ("string" !== typeof e) throw Error(a(284));
                        if (!n._owner) throw Error(a(290, e))
                    }
                    return e
                }

                function va(e, t) { throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

                function ya(e) { return (0, e._init)(e._payload) }

                function xa(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) { if (!e) return null; for (; null !== r;) t(n, r), r = r.sibling; return null }

                    function r(e, t) { for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e }

                    function i(e, t) { return (e = Du(e, t)).index = 0, e.sibling = null, e }

                    function s(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n) }

                    function o(t) { return e && null === t.alternate && (t.flags |= 2), t }

                    function l(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Mu(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t) }

                    function u(e, t, n, r) { var a = n.type; return a === j ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === I && ya(a) === t.type) ? ((r = i(t, n.props)).ref = ga(e, t, n), r.return = e, r) : ((r = Fu(n.type, n.key, n.props, null, e.mode, r)).ref = ga(e, t, n), r.return = e, r) }

                    function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ou(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t) }

                    function d(e, t, n, r, a) { return null === t || 7 !== t.tag ? ((t = Ru(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t) }

                    function h(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Mu("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case w:
                                    return (n = Fu(t.type, t.key, t.props, null, e.mode, n)).ref = ga(e, null, t), n.return = e, n;
                                case A:
                                    return (t = Ou(t, e.mode, n)).return = e, t;
                                case I:
                                    return h(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || R(t)) return (t = Ru(t, e.mode, n, null)).return = e, t;
                            va(e, t)
                        }
                        return null
                    }

                    function f(e, t, n, r) {
                        var i = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== i ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case w:
                                    return n.key === i ? u(e, t, n, r) : null;
                                case A:
                                    return n.key === i ? c(e, t, n, r) : null;
                                case I:
                                    return f(e, t, (i = n._init)(n._payload), r)
                            }
                            if (te(n) || R(n)) return null !== i ? null : d(e, t, n, r, null);
                            va(e, n)
                        }
                        return null
                    }

                    function p(e, t, n, r, i) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, i);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case w:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case A:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case I:
                                    return p(e, t, n, (0, r._init)(r._payload), i)
                            }
                            if (te(r) || R(r)) return d(t, e = e.get(n) || null, r, i, null);
                            va(t, r)
                        }
                        return null
                    }

                    function m(i, a, o, l) {
                        for (var u = null, c = null, d = a, m = a = 0, g = null; null !== d && m < o.length; m++) {
                            d.index > m ? (g = d, d = null) : g = d.sibling;
                            var v = f(i, d, o[m], l);
                            if (null === v) { null === d && (d = g); break }
                            e && d && null === v.alternate && t(i, d), a = s(v, a, m), null === c ? u = v : c.sibling = v, c = v, d = g
                        }
                        if (m === o.length) return n(i, d), ia && Zi(i, m), u;
                        if (null === d) { for (; m < o.length; m++) null !== (d = h(i, o[m], l)) && (a = s(d, a, m), null === c ? u = d : c.sibling = d, c = d); return ia && Zi(i, m), u }
                        for (d = r(i, d); m < o.length; m++) null !== (g = p(d, i, m, o[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), a = s(g, a, m), null === c ? u = g : c.sibling = g, c = g);
                        return e && d.forEach((function(e) { return t(i, e) })), ia && Zi(i, m), u
                    }

                    function g(i, o, l, u) {
                        var c = R(l);
                        if ("function" !== typeof c) throw Error(a(150));
                        if (null == (l = c.call(l))) throw Error(a(151));
                        for (var d = c = null, m = o, g = o = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
                            m.index > g ? (v = m, m = null) : v = m.sibling;
                            var x = f(i, m, y.value, u);
                            if (null === x) { null === m && (m = v); break }
                            e && m && null === x.alternate && t(i, m), o = s(x, o, g), null === d ? c = x : d.sibling = x, d = x, m = v
                        }
                        if (y.done) return n(i, m), ia && Zi(i, g), c;
                        if (null === m) { for (; !y.done; g++, y = l.next()) null !== (y = h(i, y.value, u)) && (o = s(y, o, g), null === d ? c = y : d.sibling = y, d = y); return ia && Zi(i, g), c }
                        for (m = r(i, m); !y.done; g++, y = l.next()) null !== (y = p(m, i, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), o = s(y, o, g), null === d ? c = y : d.sibling = y, d = y);
                        return e && m.forEach((function(e) { return t(i, e) })), ia && Zi(i, g), c
                    }
                    return function e(r, a, s, l) {
                        if ("object" === typeof s && null !== s && s.type === j && null === s.key && (s = s.props.children), "object" === typeof s && null !== s) {
                            switch (s.$$typeof) {
                                case w:
                                    e: {
                                        for (var u = s.key, c = a; null !== c;) {
                                            if (c.key === u) {
                                                if ((u = s.type) === j) { if (7 === c.tag) { n(r, c.sibling), (a = i(c, s.props.children)).return = r, r = a; break e } } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === I && ya(u) === c.type) { n(r, c.sibling), (a = i(c, s.props)).ref = ga(r, c, s), a.return = r, r = a; break e }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        s.type === j ? ((a = Ru(s.props.children, r.mode, l, s.key)).return = r, r = a) : ((l = Fu(s.type, s.key, s.props, null, r.mode, l)).ref = ga(r, a, s), l.return = r, r = l)
                                    }
                                    return o(r);
                                case A:
                                    e: {
                                        for (c = s.key; null !== a;) {
                                            if (a.key === c) {
                                                if (4 === a.tag && a.stateNode.containerInfo === s.containerInfo && a.stateNode.implementation === s.implementation) { n(r, a.sibling), (a = i(a, s.children || [])).return = r, r = a; break e }
                                                n(r, a);
                                                break
                                            }
                                            t(r, a), a = a.sibling
                                        }(a = Ou(s, r.mode, l)).return = r,
                                        r = a
                                    }
                                    return o(r);
                                case I:
                                    return e(r, a, (c = s._init)(s._payload), l)
                            }
                            if (te(s)) return m(r, a, s, l);
                            if (R(s)) return g(r, a, s, l);
                            va(r, s)
                        }
                        return "string" === typeof s && "" !== s || "number" === typeof s ? (s = "" + s, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = i(a, s)).return = r, r = a) : (n(r, a), (a = Mu(s, r.mode, l)).return = r, r = a), o(r)) : n(r, a)
                    }
                }
                var ba = xa(!0),
                    wa = xa(!1),
                    Aa = Ci(null),
                    ja = null,
                    Ca = null,
                    Ea = null;

                function Sa() { Ea = Ca = ja = null }

                function ka(e) {
                    var t = Aa.current;
                    Ei(Aa), e._currentValue = t
                }

                function Pa(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Na(e, t) { ja = e, Ea = Ca = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (xo = !0), e.firstContext = null) }

                function Ta(e) {
                    var t = e._currentValue;
                    if (Ea !== e)
                        if (e = { context: e, memoizedValue: t, next: null }, null === Ca) {
                            if (null === ja) throw Error(a(308));
                            Ca = e, ja.dependencies = { lanes: 0, firstContext: e }
                        } else Ca = Ca.next = e;
                    return t
                }
                var Ba = null;

                function Ia(e) { null === Ba ? Ba = [e] : Ba.push(e) }

                function Da(e, t, n, r) { var i = t.interleaved; return null === i ? (n.next = n, Ia(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Fa(e, r) }

                function Fa(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null }
                var Ra = !1;

                function La(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

                function Ma(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

                function Oa(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

                function Qa(e, t, n) { var r = e.updateQueue; if (null === r) return null; if (r = r.shared, 0 !== (2 & Pl)) { var i = r.pending; return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Fa(e, n) } return null === (i = r.interleaved) ? (t.next = t, Ia(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Fa(e, n) }

                function Ua(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }

                function za(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var i = null,
                            a = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                                null === a ? i = a = s : a = a.next = s, n = n.next
                            } while (null !== n);
                            null === a ? i = a = t : a = a.next = t
                        } else i = a = t;
                        return n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Va(e, t, n, r) {
                    var i = e.updateQueue;
                    Ra = !1;
                    var a = i.firstBaseUpdate,
                        s = i.lastBaseUpdate,
                        o = i.shared.pending;
                    if (null !== o) {
                        i.shared.pending = null;
                        var l = o,
                            u = l.next;
                        l.next = null, null === s ? a = u : s.next = u, s = l;
                        var c = e.alternate;
                        null !== c && ((o = (c = c.updateQueue).lastBaseUpdate) !== s && (null === o ? c.firstBaseUpdate = u : o.next = u, c.lastBaseUpdate = l))
                    }
                    if (null !== a) {
                        var d = i.baseState;
                        for (s = 0, c = u = l = null, o = a;;) {
                            var h = o.lane,
                                f = o.eventTime;
                            if ((r & h) === h) {
                                null !== c && (c = c.next = { eventTime: f, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
                                e: {
                                    var p = e,
                                        m = o;
                                    switch (h = t, f = n, m.tag) {
                                        case 1:
                                            if ("function" === typeof(p = m.payload)) { d = p.call(f, d, h); break e }
                                            d = p;
                                            break e;
                                        case 3:
                                            p.flags = -65537 & p.flags | 128;
                                        case 0:
                                            if (null === (h = "function" === typeof(p = m.payload) ? p.call(f, d, h) : p) || void 0 === h) break e;
                                            d = M({}, d, h);
                                            break e;
                                        case 2:
                                            Ra = !0
                                    }
                                }
                                null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (h = i.effects) ? i.effects = [o] : h.push(o))
                            } else f = { eventTime: f, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, null === c ? (u = c = f, l = d) : c = c.next = f, s |= h;
                            if (null === (o = o.next)) {
                                if (null === (o = i.shared.pending)) break;
                                o = (h = o).next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
                            }
                        }
                        if (null === c && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, null !== (t = i.shared.interleaved)) {
                            i = t;
                            do { s |= i.lane, i = i.next } while (i !== t)
                        } else null === a && (i.shared.lanes = 0);
                        Ll |= s, e.lanes = s, e.memoizedState = d
                    }
                }

                function Ha(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                i = r.callback;
                            if (null !== i) {
                                if (r.callback = null, r = n, "function" !== typeof i) throw Error(a(191, i));
                                i.call(r)
                            }
                        }
                }
                var Ka = {},
                    Wa = Ci(Ka),
                    Ya = Ci(Ka),
                    Ga = Ci(Ka);

                function Xa(e) { if (e === Ka) throw Error(a(174)); return e }

                function qa(e, t) {
                    switch (Si(Ga, t), Si(Ya, e), Si(Wa, Ka), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                            break;
                        default:
                            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Ei(Wa), Si(Wa, t)
                }

                function _a() { Ei(Wa), Ei(Ya), Ei(Ga) }

                function Ja(e) {
                    Xa(Ga.current);
                    var t = Xa(Wa.current),
                        n = le(t, e.type);
                    t !== n && (Si(Ya, e), Si(Wa, n))
                }

                function Za(e) { Ya.current === e && (Ei(Wa), Ei(Ya)) }
                var $a = Ci(0);

                function es(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) { var n = t.memoizedState; if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) { if (0 !== (128 & t.flags)) return t } else if (null !== t.child) { t.child.return = t, t = t.child; continue }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var ts = [];

                function ns() {
                    for (var e = 0; e < ts.length; e++) ts[e]._workInProgressVersionPrimary = null;
                    ts.length = 0
                }
                var rs = b.ReactCurrentDispatcher,
                    is = b.ReactCurrentBatchConfig,
                    as = 0,
                    ss = null,
                    os = null,
                    ls = null,
                    us = !1,
                    cs = !1,
                    ds = 0,
                    hs = 0;

                function fs() { throw Error(a(321)) }

                function ps(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!or(e[n], t[n])) return !1;
                    return !0
                }

                function ms(e, t, n, r, i, s) {
                    if (as = s, ss = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rs.current = null === e || null === e.memoizedState ? Zs : $s, e = n(r, i), cs) {
                        s = 0;
                        do {
                            if (cs = !1, ds = 0, 25 <= s) throw Error(a(301));
                            s += 1, ls = os = null, t.updateQueue = null, rs.current = eo, e = n(r, i)
                        } while (cs)
                    }
                    if (rs.current = Js, t = null !== os && null !== os.next, as = 0, ls = os = ss = null, us = !1, t) throw Error(a(300));
                    return e
                }

                function gs() { var e = 0 !== ds; return ds = 0, e }

                function vs() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === ls ? ss.memoizedState = ls = e : ls = ls.next = e, ls }

                function ys() {
                    if (null === os) {
                        var e = ss.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = os.next;
                    var t = null === ls ? ss.memoizedState : ls.next;
                    if (null !== t) ls = t, os = e;
                    else {
                        if (null === e) throw Error(a(310));
                        e = { memoizedState: (os = e).memoizedState, baseState: os.baseState, baseQueue: os.baseQueue, queue: os.queue, next: null }, null === ls ? ss.memoizedState = ls = e : ls = ls.next = e
                    }
                    return ls
                }

                function xs(e, t) { return "function" === typeof t ? t(e) : t }

                function bs(e) {
                    var t = ys(),
                        n = t.queue;
                    if (null === n) throw Error(a(311));
                    n.lastRenderedReducer = e;
                    var r = os,
                        i = r.baseQueue,
                        s = n.pending;
                    if (null !== s) {
                        if (null !== i) {
                            var o = i.next;
                            i.next = s.next, s.next = o
                        }
                        r.baseQueue = i = s, n.pending = null
                    }
                    if (null !== i) {
                        s = i.next, r = r.baseState;
                        var l = o = null,
                            u = null,
                            c = s;
                        do {
                            var d = c.lane;
                            if ((as & d) === d) null !== u && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var h = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                                null === u ? (l = u = h, o = r) : u = u.next = h, ss.lanes |= d, Ll |= d
                            }
                            c = c.next
                        } while (null !== c && c !== s);
                        null === u ? o = r : u.next = l, or(r, t.memoizedState) || (xo = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        i = e;
                        do { s = i.lane, ss.lanes |= s, Ll |= s, i = i.next } while (i !== e)
                    } else null === i && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function ws(e) {
                    var t = ys(),
                        n = t.queue;
                    if (null === n) throw Error(a(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        i = n.pending,
                        s = t.memoizedState;
                    if (null !== i) {
                        n.pending = null;
                        var o = i = i.next;
                        do { s = e(s, o.action), o = o.next } while (o !== i);
                        or(s, t.memoizedState) || (xo = !0), t.memoizedState = s, null === t.baseQueue && (t.baseState = s), n.lastRenderedState = s
                    }
                    return [s, r]
                }

                function As() {}

                function js(e, t) {
                    var n = ss,
                        r = ys(),
                        i = t(),
                        s = !or(r.memoizedState, i);
                    if (s && (r.memoizedState = i, xo = !0), r = r.queue, Rs(Ss.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || null !== ls && 1 & ls.memoizedState.tag) {
                        if (n.flags |= 2048, Ts(9, Es.bind(null, n, r, i, t), void 0, null), null === Nl) throw Error(a(349));
                        0 !== (30 & as) || Cs(n, t, i)
                    }
                    return i
                }

                function Cs(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = ss.updateQueue) ? (t = { lastEffect: null, stores: null }, ss.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e) }

                function Es(e, t, n, r) { t.value = n, t.getSnapshot = r, ks(t) && Ps(e) }

                function Ss(e, t, n) { return n((function() { ks(t) && Ps(e) })) }

                function ks(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try { var n = t(); return !or(e, n) } catch (r) { return !0 }
                }

                function Ps(e) {
                    var t = Fa(e, 1);
                    null !== t && nu(t, e, 1, -1)
                }

                function Ns(e) { var t = vs(); return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xs, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gs.bind(null, ss, e), [t.memoizedState, e] }

                function Ts(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = ss.updateQueue) ? (t = { lastEffect: null, stores: null }, ss.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e }

                function Bs() { return ys().memoizedState }

                function Is(e, t, n, r) {
                    var i = vs();
                    ss.flags |= e, i.memoizedState = Ts(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Ds(e, t, n, r) {
                    var i = ys();
                    r = void 0 === r ? null : r;
                    var a = void 0;
                    if (null !== os) { var s = os.memoizedState; if (a = s.destroy, null !== r && ps(r, s.deps)) return void(i.memoizedState = Ts(t, n, a, r)) }
                    ss.flags |= e, i.memoizedState = Ts(1 | t, n, a, r)
                }

                function Fs(e, t) { return Is(8390656, 8, e, t) }

                function Rs(e, t) { return Ds(2048, 8, e, t) }

                function Ls(e, t) { return Ds(4, 2, e, t) }

                function Ms(e, t) { return Ds(4, 4, e, t) }

                function Os(e, t) { return "function" === typeof t ? (e = e(), t(e), function() { t(null) }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() { t.current = null }) : void 0 }

                function Qs(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ds(4, 4, Os.bind(null, t, e), n) }

                function Us() {}

                function zs(e, t) {
                    var n = ys();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ps(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Vs(e, t) {
                    var n = ys();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ps(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Hs(e, t, n) { return 0 === (21 & as) ? (e.baseState && (e.baseState = !1, xo = !0), e.memoizedState = n) : (or(n, t) || (n = mt(), ss.lanes |= n, Ll |= n, e.baseState = !0), t) }

                function Ks(e, t) {
                    var n = xt;
                    xt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = is.transition;
                    is.transition = {};
                    try { e(!1), t() } finally { xt = n, is.transition = r }
                }

                function Ws() { return ys().memoizedState }

                function Ys(e, t, n) {
                    var r = tu(e);
                    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xs(e)) qs(t, n);
                    else if (null !== (n = Da(e, t, n, r))) { nu(n, e, r, eu()), _s(n, t, r) }
                }

                function Gs(e, t, n) {
                    var r = tu(e),
                        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
                    if (Xs(e)) qs(t, i);
                    else {
                        var a = e.alternate;
                        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                            var s = t.lastRenderedState,
                                o = a(s, n);
                            if (i.hasEagerState = !0, i.eagerState = o, or(o, s)) { var l = t.interleaved; return null === l ? (i.next = i, Ia(t)) : (i.next = l.next, l.next = i), void(t.interleaved = i) }
                        } catch (u) {}
                        null !== (n = Da(e, t, i, r)) && (nu(n, e, r, i = eu()), _s(n, t, r))
                    }
                }

                function Xs(e) { var t = e.alternate; return e === ss || null !== t && t === ss }

                function qs(e, t) {
                    cs = us = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function _s(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }
                var Js = { readContext: Ta, useCallback: fs, useContext: fs, useEffect: fs, useImperativeHandle: fs, useInsertionEffect: fs, useLayoutEffect: fs, useMemo: fs, useReducer: fs, useRef: fs, useState: fs, useDebugValue: fs, useDeferredValue: fs, useTransition: fs, useMutableSource: fs, useSyncExternalStore: fs, useId: fs, unstable_isNewReconciler: !1 },
                    Zs = {
                        readContext: Ta,
                        useCallback: function(e, t) { return vs().memoizedState = [e, void 0 === t ? null : t], e },
                        useContext: Ta,
                        useEffect: Fs,
                        useImperativeHandle: function(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, Is(4194308, 4, Os.bind(null, t, e), n) },
                        useLayoutEffect: function(e, t) { return Is(4194308, 4, e, t) },
                        useInsertionEffect: function(e, t) { return Is(4, 2, e, t) },
                        useMemo: function(e, t) { var n = vs(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e },
                        useReducer: function(e, t, n) { var r = vs(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ys.bind(null, ss, e), [r.memoizedState, e] },
                        useRef: function(e) { return e = { current: e }, vs().memoizedState = e },
                        useState: Ns,
                        useDebugValue: Us,
                        useDeferredValue: function(e) { return vs().memoizedState = e },
                        useTransition: function() {
                            var e = Ns(!1),
                                t = e[0];
                            return e = Ks.bind(null, e[1]), vs().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = ss,
                                i = vs();
                            if (ia) {
                                if (void 0 === n) throw Error(a(407));
                                n = n()
                            } else {
                                if (n = t(), null === Nl) throw Error(a(349));
                                0 !== (30 & as) || Cs(r, t, n)
                            }
                            i.memoizedState = n;
                            var s = { value: n, getSnapshot: t };
                            return i.queue = s, Fs(Ss.bind(null, r, s, e), [e]), r.flags |= 2048, Ts(9, Es.bind(null, r, s, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = vs(),
                                t = Nl.identifierPrefix;
                            if (ia) {
                                var n = Ji;
                                t = ":" + t + "R" + (n = (_i & ~(1 << 32 - st(_i) - 1)).toString(32) + n), 0 < (n = ds++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = hs++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    $s = { readContext: Ta, useCallback: zs, useContext: Ta, useEffect: Rs, useImperativeHandle: Qs, useInsertionEffect: Ls, useLayoutEffect: Ms, useMemo: Vs, useReducer: bs, useRef: Bs, useState: function() { return bs(xs) }, useDebugValue: Us, useDeferredValue: function(e) { return Hs(ys(), os.memoizedState, e) }, useTransition: function() { return [bs(xs)[0], ys().memoizedState] }, useMutableSource: As, useSyncExternalStore: js, useId: Ws, unstable_isNewReconciler: !1 },
                    eo = { readContext: Ta, useCallback: zs, useContext: Ta, useEffect: Rs, useImperativeHandle: Qs, useInsertionEffect: Ls, useLayoutEffect: Ms, useMemo: Vs, useReducer: ws, useRef: Bs, useState: function() { return ws(xs) }, useDebugValue: Us, useDeferredValue: function(e) { var t = ys(); return null === os ? t.memoizedState = e : Hs(t, os.memoizedState, e) }, useTransition: function() { return [ws(xs)[0], ys().memoizedState] }, useMutableSource: As, useSyncExternalStore: js, useId: Ws, unstable_isNewReconciler: !1 };

                function to(e, t) { if (e && e.defaultProps) { for (var n in t = M({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]); return t } return t }

                function no(e, t, n, r) { n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : M({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n) }
                var ro = {
                    isMounted: function(e) { return !!(e = e._reactInternals) && Ve(e) === e },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            i = tu(e),
                            a = Oa(r, i);
                        a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Qa(e, a, i)) && (nu(t, e, i, r), Ua(t, e, i))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            i = tu(e),
                            a = Oa(r, i);
                        a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Qa(e, a, i)) && (nu(t, e, i, r), Ua(t, e, i))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = eu(),
                            r = tu(e),
                            i = Oa(n, r);
                        i.tag = 2, void 0 !== t && null !== t && (i.callback = t), null !== (t = Qa(e, i, r)) && (nu(t, e, r, n), Ua(t, e, r))
                    }
                };

                function io(e, t, n, r, i, a, s) { return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, s) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(i, a)) }

                function ao(e, t, n) {
                    var r = !1,
                        i = ki,
                        a = t.contextType;
                    return "object" === typeof a && null !== a ? a = Ta(a) : (i = Ii(t) ? Ti : Pi.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Bi(e, i) : ki), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ro, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
                }

                function so(e, t, n, r) { e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ro.enqueueReplaceState(t, t.state, null) }

                function oo(e, t, n, r) {
                    var i = e.stateNode;
                    i.props = n, i.state = e.memoizedState, i.refs = {}, La(e);
                    var a = t.contextType;
                    "object" === typeof a && null !== a ? i.context = Ta(a) : (a = Ii(t) ? Ti : Pi.current, i.context = Bi(e, a)), i.state = e.memoizedState, "function" === typeof(a = t.getDerivedStateFromProps) && (no(e, t, a, n), i.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (t = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && ro.enqueueReplaceState(i, i.state, null), Va(e, n, i, r), i.state = e.memoizedState), "function" === typeof i.componentDidMount && (e.flags |= 4194308)
                }

                function lo(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do { n += z(r), r = r.return } while (r);
                        var i = n
                    } catch (a) { i = "\nError generating stack: " + a.message + "\n" + a.stack }
                    return { value: e, source: t, stack: i, digest: null }
                }

                function uo(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null } }

                function co(e, t) { try { console.error(t.value) } catch (n) { setTimeout((function() { throw n })) } }
                var ho = "function" === typeof WeakMap ? WeakMap : Map;

                function fo(e, t, n) {
                    (n = Oa(-1, n)).tag = 3, n.payload = { element: null };
                    var r = t.value;
                    return n.callback = function() { Kl || (Kl = !0, Wl = r), co(0, t) }, n
                }

                function po(e, t, n) {
                    (n = Oa(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var i = t.value;
                        n.payload = function() { return r(i) }, n.callback = function() { co(0, t) }
                    }
                    var a = e.stateNode;
                    return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() {
                        co(0, t), "function" !== typeof r && (null === Yl ? Yl = new Set([this]) : Yl.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" })
                    }), n
                }

                function mo(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new ho;
                        var i = new Set;
                        r.set(t, i)
                    } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
                    i.has(n) || (i.add(n), e = Eu.bind(null, e, t, n), t.then(e, e))
                }

                function go(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function vo(e, t, n, r, i) { return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Oa(-1, 1)).tag = 2, Qa(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e) }
                var yo = b.ReactCurrentOwner,
                    xo = !1;

                function bo(e, t, n, r) { t.child = null === e ? wa(t, null, n, r) : ba(t, e.child, n, r) }

                function wo(e, t, n, r, i) { n = n.render; var a = t.ref; return Na(t, i), r = ms(e, t, n, r, a, i), n = gs(), null === e || xo ? (ia && n && ea(t), t.flags |= 1, bo(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ko(e, t, i)) }

                function Ao(e, t, n, r, i) { if (null === e) { var a = n.type; return "function" !== typeof a || Iu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Fu(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, jo(e, t, a, r, i)) } if (a = e.child, 0 === (e.lanes & i)) { var s = a.memoizedProps; if ((n = null !== (n = n.compare) ? n : lr)(s, r) && e.ref === t.ref) return Ko(e, t, i) } return t.flags |= 1, (e = Du(a, r)).ref = t.ref, e.return = t, t.child = e }

                function jo(e, t, n, r, i) {
                    if (null !== e) {
                        var a = e.memoizedProps;
                        if (lr(a, r) && e.ref === t.ref) {
                            if (xo = !1, t.pendingProps = r = a, 0 === (e.lanes & i)) return t.lanes = e.lanes, Ko(e, t, i);
                            0 !== (131072 & e.flags) && (xo = !0)
                        }
                    }
                    return So(e, t, n, r, i)
                }

                function Co(e, t, n) {
                    var r = t.pendingProps,
                        i = r.children,
                        a = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Si(Dl, Il), Il |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Si(Dl, Il), Il |= e, null;
                            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== a ? a.baseLanes : n, Si(Dl, Il), Il |= r
                        }
                    else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Si(Dl, Il), Il |= r;
                    return bo(e, t, i, n), t.child
                }

                function Eo(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function So(e, t, n, r, i) { var a = Ii(n) ? Ti : Pi.current; return a = Bi(t, a), Na(t, i), n = ms(e, t, n, r, a, i), r = gs(), null === e || xo ? (ia && r && ea(t), t.flags |= 1, bo(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ko(e, t, i)) }

                function ko(e, t, n, r, i) {
                    if (Ii(n)) {
                        var a = !0;
                        Li(t)
                    } else a = !1;
                    if (Na(t, i), null === t.stateNode) Ho(e, t), ao(t, n, r), oo(t, n, r, i), r = !0;
                    else if (null === e) {
                        var s = t.stateNode,
                            o = t.memoizedProps;
                        s.props = o;
                        var l = s.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = Ta(u) : u = Bi(t, u = Ii(n) ? Ti : Pi.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof s.getSnapshotBeforeUpdate;
                        d || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== r || l !== u) && so(t, s, r, u), Ra = !1;
                        var h = t.memoizedState;
                        s.state = h, Va(t, r, s, i), l = t.memoizedState, o !== r || h !== l || Ni.current || Ra ? ("function" === typeof c && (no(t, n, c, r), l = t.memoizedState), (o = Ra || io(t, n, o, r, h, l, u)) ? (d || "function" !== typeof s.UNSAFE_componentWillMount && "function" !== typeof s.componentWillMount || ("function" === typeof s.componentWillMount && s.componentWillMount(), "function" === typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" === typeof s.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = o) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        s = t.stateNode, Ma(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : to(t.type, o), s.props = u, d = t.pendingProps, h = s.context, "object" === typeof(l = n.contextType) && null !== l ? l = Ta(l) : l = Bi(t, l = Ii(n) ? Ti : Pi.current);
                        var f = n.getDerivedStateFromProps;
                        (c = "function" === typeof f || "function" === typeof s.getSnapshotBeforeUpdate) || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== d || h !== l) && so(t, s, r, l), Ra = !1, h = t.memoizedState, s.state = h, Va(t, r, s, i);
                        var p = t.memoizedState;
                        o !== d || h !== p || Ni.current || Ra ? ("function" === typeof f && (no(t, n, f, r), p = t.memoizedState), (u = Ra || io(t, n, u, r, h, p, l) || !1) ? (c || "function" !== typeof s.UNSAFE_componentWillUpdate && "function" !== typeof s.componentWillUpdate || ("function" === typeof s.componentWillUpdate && s.componentWillUpdate(r, p, l), "function" === typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, p, l)), "function" === typeof s.componentDidUpdate && (t.flags |= 4), "function" === typeof s.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), s.props = r, s.state = p, s.context = l, r = u) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Po(e, t, n, r, a, i)
                }

                function Po(e, t, n, r, i, a) {
                    Eo(e, t);
                    var s = 0 !== (128 & t.flags);
                    if (!r && !s) return i && Mi(t, n, !1), Ko(e, t, a);
                    r = t.stateNode, yo.current = t;
                    var o = s && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && s ? (t.child = ba(t, e.child, null, a), t.child = ba(t, null, o, a)) : bo(e, t, o, a), t.memoizedState = r.state, i && Mi(t, n, !0), t.child
                }

                function No(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Fi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Fi(0, t.context, !1), qa(e, t.containerInfo)
                }

                function To(e, t, n, r, i) { return fa(), pa(i), t.flags |= 256, bo(e, t, n, r), t.child }
                var Bo, Io, Do, Fo, Ro = { dehydrated: null, treeContext: null, retryLane: 0 };

                function Lo(e) { return { baseLanes: e, cachePool: null, transitions: null } }

                function Mo(e, t, n) {
                    var r, i = t.pendingProps,
                        s = $a.current,
                        o = !1,
                        l = 0 !== (128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & s)), r ? (o = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (s |= 1), Si($a, 1 & s), null === e) return ua(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, l = { mode: "hidden", children: l }, 0 === (1 & i) && null !== o ? (o.childLanes = 0, o.pendingProps = l) : o = Lu(l, i, 0, null), e = Ru(e, i, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Lo(n), t.memoizedState = Ro, e) : Oo(t, l));
                    if (null !== (s = e.memoizedState) && null !== (r = s.dehydrated)) return function(e, t, n, r, i, s, o) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Qo(e, t, o, r = uo(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Lu({ mode: "visible", children: r.children }, i, 0, null), (s = Ru(s, i, o, null)).flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, 0 !== (1 & t.mode) && ba(t, e.child, null, o), t.child.memoizedState = Lo(o), t.memoizedState = Ro, s);
                        if (0 === (1 & t.mode)) return Qo(e, t, o, null);
                        if ("$!" === i.data) { if (r = i.nextSibling && i.nextSibling.dataset) var l = r.dgst; return r = l, Qo(e, t, o, r = uo(s = Error(a(419)), r, void 0)) }
                        if (l = 0 !== (o & e.childLanes), xo || l) {
                            if (null !== (r = Nl)) {
                                switch (o & -o) {
                                    case 4:
                                        i = 2;
                                        break;
                                    case 16:
                                        i = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        i = 32;
                                        break;
                                    case 536870912:
                                        i = 268435456;
                                        break;
                                    default:
                                        i = 0
                                }
                                0 !== (i = 0 !== (i & (r.suspendedLanes | o)) ? 0 : i) && i !== s.retryLane && (s.retryLane = i, Fa(e, i), nu(r, e, i, -1))
                            }
                            return mu(), Qo(e, t, o, r = uo(Error(a(421))))
                        }
                        return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = ku.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, ra = ui(i.nextSibling), na = t, ia = !0, aa = null, null !== e && (Gi[Xi++] = _i, Gi[Xi++] = Ji, Gi[Xi++] = qi, _i = e.id, Ji = e.overflow, qi = t), t = Oo(t, r.children), t.flags |= 4096, t)
                    }(e, t, l, i, r, s, n);
                    if (o) { o = i.fallback, l = t.mode, r = (s = e.child).sibling; var u = { mode: "hidden", children: i.children }; return 0 === (1 & l) && t.child !== s ? ((i = t.child).childLanes = 0, i.pendingProps = u, t.deletions = null) : (i = Du(s, u)).subtreeFlags = 14680064 & s.subtreeFlags, null !== r ? o = Du(r, o) : (o = Ru(o, l, n, null)).flags |= 2, o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, l = null === (l = e.child.memoizedState) ? Lo(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Ro, i }
                    return e = (o = e.child).sibling, i = Du(o, { mode: "visible", children: i.children }), 0 === (1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
                }

                function Oo(e, t) { return (t = Lu({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t }

                function Qo(e, t, n, r) { return null !== r && pa(r), ba(t, e.child, null, n), (e = Oo(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e }

                function Uo(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Pa(e.return, t, n)
                }

                function zo(e, t, n, r, i) {
                    var a = e.memoizedState;
                    null === a ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i)
                }

                function Vo(e, t, n) {
                    var r = t.pendingProps,
                        i = r.revealOrder,
                        a = r.tail;
                    if (bo(e, t, r.children, n), 0 !== (2 & (r = $a.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Uo(e, n, t);
                            else if (19 === e.tag) Uo(e, n, t);
                            else if (null !== e.child) { e.child.return = e, e = e.child; continue }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (Si($a, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (i) {
                        case "forwards":
                            for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === es(e) && (i = n), n = n.sibling;
                            null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), zo(t, !1, i, n, a);
                            break;
                        case "backwards":
                            for (n = null, i = t.child, t.child = null; null !== i;) {
                                if (null !== (e = i.alternate) && null === es(e)) { t.child = i; break }
                                e = i.sibling, i.sibling = n, n = i, i = e
                            }
                            zo(t, !0, n, null, a);
                            break;
                        case "together":
                            zo(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Ho(e, t) { 0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2) }

                function Ko(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Ll |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(a(153));
                    if (null !== t.child) {
                        for (n = Du(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Du(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Wo(e, t) {
                    if (!ia) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Yo(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
                    else
                        for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Go(e, t, n) {
                    var r = t.pendingProps;
                    switch (ta(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Yo(t), null;
                        case 1:
                        case 17:
                            return Ii(t.type) && Di(), Yo(t), null;
                        case 3:
                            return r = t.stateNode, _a(), Ei(Ni), Ei(Pi), ns(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (da(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== aa && (su(aa), aa = null))), Io(e, t), Yo(t), null;
                        case 5:
                            Za(t);
                            var i = Xa(Ga.current);
                            if (n = t.type, null !== e && null != t.stateNode) Do(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) { if (null === t.stateNode) throw Error(a(166)); return Yo(t), null }
                                if (e = Xa(Wa.current), da(t)) {
                                    r = t.stateNode, n = t.type;
                                    var s = t.memoizedProps;
                                    switch (r[hi] = t, r[fi] = s, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Qr("cancel", r), Qr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Qr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (i = 0; i < Rr.length; i++) Qr(Rr[i], r);
                                            break;
                                        case "source":
                                            Qr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Qr("error", r), Qr("load", r);
                                            break;
                                        case "details":
                                            Qr("toggle", r);
                                            break;
                                        case "input":
                                            _(r, s), Qr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = { wasMultiple: !!s.multiple }, Qr("invalid", r);
                                            break;
                                        case "textarea":
                                            ie(r, s), Qr("invalid", r)
                                    }
                                    for (var l in ye(n, s), i = null, s)
                                        if (s.hasOwnProperty(l)) { var u = s[l]; "children" === l ? "string" === typeof u ? r.textContent !== u && (!0 !== s.suppressHydrationWarning && Zr(r.textContent, u, e), i = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== s.suppressHydrationWarning && Zr(r.textContent, u, e), i = ["children", "" + u]) : o.hasOwnProperty(l) && null != u && "onScroll" === l && Qr("scroll", r) }
                                    switch (n) {
                                        case "input":
                                            Y(r), $(r, s, !0);
                                            break;
                                        case "textarea":
                                            Y(r), se(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof s.onClick && (r.onclick = $r)
                                    }
                                    r = i, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = oe(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[hi] = t, e[fi] = r, Bo(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (l = xe(n, r), n) {
                                            case "dialog":
                                                Qr("cancel", e), Qr("close", e), i = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Qr("load", e), i = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (i = 0; i < Rr.length; i++) Qr(Rr[i], e);
                                                i = r;
                                                break;
                                            case "source":
                                                Qr("error", e), i = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Qr("error", e), Qr("load", e), i = r;
                                                break;
                                            case "details":
                                                Qr("toggle", e), i = r;
                                                break;
                                            case "input":
                                                _(e, r), i = q(e, r), Qr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                i = r;
                                                break;
                                            case "select":
                                                e._wrapperState = { wasMultiple: !!r.multiple }, i = M({}, r, { value: void 0 }), Qr("invalid", e);
                                                break;
                                            case "textarea":
                                                ie(e, r), i = re(e, r), Qr("invalid", e)
                                        }
                                        for (s in ye(n, i), u = i)
                                            if (u.hasOwnProperty(s)) { var c = u[s]; "style" === s ? ge(e, c) : "dangerouslySetInnerHTML" === s ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === s ? "string" === typeof c ? ("textarea" !== n || "" !== c) && he(e, c) : "number" === typeof c && he(e, "" + c) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (o.hasOwnProperty(s) ? null != c && "onScroll" === s && Qr("scroll", e) : null != c && x(e, s, c, l)) }
                                        switch (n) {
                                            case "input":
                                                Y(e), $(e, r, !1);
                                                break;
                                            case "textarea":
                                                Y(e), se(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + K(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (s = r.value) ? ne(e, !!r.multiple, s, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof i.onClick && (e.onclick = $r)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Yo(t), null;
                        case 6:
                            if (e && null != t.stateNode) Fo(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(a(166));
                                if (n = Xa(Ga.current), Xa(Wa.current), da(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[hi] = t, (s = r.nodeValue !== n) && null !== (e = na)) switch (e.tag) {
                                        case 3:
                                            Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    s && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[hi] = t, t.stateNode = r
                            }
                            return Yo(t), null;
                        case 13:
                            if (Ei($a), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ia && null !== ra && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) ha(), fa(), t.flags |= 98560, s = !1;
                                else if (s = da(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!s) throw Error(a(318));
                                        if (!(s = null !== (s = t.memoizedState) ? s.dehydrated : null)) throw Error(a(317));
                                        s[hi] = t
                                    } else fa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Yo(t), s = !1
                                } else null !== aa && (su(aa), aa = null), s = !0;
                                if (!s) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & $a.current) ? 0 === Fl && (Fl = 3) : mu())), null !== t.updateQueue && (t.flags |= 4), Yo(t), null);
                        case 4:
                            return _a(), Io(e, t), null === e && Vr(t.stateNode.containerInfo), Yo(t), null;
                        case 10:
                            return ka(t.type._context), Yo(t), null;
                        case 19:
                            if (Ei($a), null === (s = t.memoizedState)) return Yo(t), null;
                            if (r = 0 !== (128 & t.flags), null === (l = s.rendering))
                                if (r) Wo(s, !1);
                                else {
                                    if (0 !== Fl || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (l = es(e))) { for (t.flags |= 128, Wo(s, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (s = n).flags &= 14680066, null === (l = s.alternate) ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = l.childLanes, s.lanes = l.lanes, s.child = l.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = l.memoizedProps, s.memoizedState = l.memoizedState, s.updateQueue = l.updateQueue, s.type = l.type, e = l.dependencies, s.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return Si($a, 1 & $a.current | 2), t.child }
                                            e = e.sibling
                                        }
                                    null !== s.tail && Je() > Vl && (t.flags |= 128, r = !0, Wo(s, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = es(l))) { if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Wo(s, !0), null === s.tail && "hidden" === s.tailMode && !l.alternate && !ia) return Yo(t), null } else 2 * Je() - s.renderingStartTime > Vl && 1073741824 !== n && (t.flags |= 128, r = !0, Wo(s, !1), t.lanes = 4194304);
                                s.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = s.last) ? n.sibling = l : t.child = l, s.last = l)
                            }
                            return null !== s.tail ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Je(), t.sibling = null, n = $a.current, Si($a, r ? 1 & n | 2 : 1 & n), t) : (Yo(t), null);
                        case 22:
                        case 23:
                            return du(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Il) && (Yo(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Yo(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(a(156, t.tag))
                }

                function Xo(e, t) {
                    switch (ta(t), t.tag) {
                        case 1:
                            return Ii(t.type) && Di(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return _a(), Ei(Ni), Ei(Pi), ns(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return Za(t), null;
                        case 13:
                            if (Ei($a), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(a(340));
                                fa()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Ei($a), null;
                        case 4:
                            return _a(), null;
                        case 10:
                            return ka(t.type._context), null;
                        case 22:
                        case 23:
                            return du(), null;
                        default:
                            return null
                    }
                }
                Bo = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) { n.child.return = n, n = n.child; continue }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Io = function() {}, Do = function(e, t, n, r) {
                    var i = e.memoizedProps;
                    if (i !== r) {
                        e = t.stateNode, Xa(Wa.current);
                        var a, s = null;
                        switch (n) {
                            case "input":
                                i = q(e, i), r = q(e, r), s = [];
                                break;
                            case "select":
                                i = M({}, i, { value: void 0 }), r = M({}, r, { value: void 0 }), s = [];
                                break;
                            case "textarea":
                                i = re(e, i), r = re(e, r), s = [];
                                break;
                            default:
                                "function" !== typeof i.onClick && "function" === typeof r.onClick && (e.onclick = $r)
                        }
                        for (c in ye(n, r), n = null, i)
                            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                                if ("style" === c) { var l = i[c]; for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "") } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (o.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
                        for (c in r) {
                            var u = r[c];
                            if (l = null != i ? i[c] : void 0, r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                                if ("style" === c)
                                    if (l) { for (a in l) !l.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = ""); for (a in u) u.hasOwnProperty(a) && l[a] !== u[a] && (n || (n = {}), n[a] = u[a]) } else n || (s || (s = []), s.push(c, n)), n = u;
                            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (s = s || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (s = s || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (o.hasOwnProperty(c) ? (null != u && "onScroll" === c && Qr("scroll", e), s || l === u || (s = [])) : (s = s || []).push(c, u))
                        }
                        n && (s = s || []).push("style", n);
                        var c = s;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Fo = function(e, t, n, r) { n !== r && (t.flags |= 4) };
                var qo = !1,
                    _o = !1,
                    Jo = "function" === typeof WeakSet ? WeakSet : Set,
                    Zo = null;

                function $o(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try { n(null) } catch (r) { Cu(e, t, r) } else n.current = null
                }

                function el(e, t, n) { try { n() } catch (r) { Cu(e, t, r) } }
                var tl = !1;

                function nl(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var i = r = r.next;
                        do {
                            if ((i.tag & e) === e) {
                                var a = i.destroy;
                                i.destroy = void 0, void 0 !== a && el(t, n, a)
                            }
                            i = i.next
                        } while (i !== r)
                    }
                }

                function rl(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function il(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function al(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, al(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[hi], delete t[fi], delete t[mi], delete t[gi], delete t[vi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function sl(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag }

                function ol(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || sl(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function ll(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = $r));
                    else if (4 !== r && null !== (e = e.child))
                        for (ll(e, t, n), e = e.sibling; null !== e;) ll(e, t, n), e = e.sibling
                }

                function ul(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
                }
                var cl = null,
                    dl = !1;

                function hl(e, t, n) { for (n = n.child; null !== n;) fl(e, t, n), n = n.sibling }

                function fl(e, t, n) {
                    if (at && "function" === typeof at.onCommitFiberUnmount) try { at.onCommitFiberUnmount(it, n) } catch (o) {}
                    switch (n.tag) {
                        case 5:
                            _o || $o(n, t);
                        case 6:
                            var r = cl,
                                i = dl;
                            cl = null, hl(e, t, n), dl = i, null !== (cl = r) && (dl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cl.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cl && (dl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? li(e.parentNode, n) : 1 === e.nodeType && li(e, n), Vt(e)) : li(cl, n.stateNode));
                            break;
                        case 4:
                            r = cl, i = dl, cl = n.stateNode.containerInfo, dl = !0, hl(e, t, n), cl = r, dl = i;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!_o && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                i = r = r.next;
                                do {
                                    var a = i,
                                        s = a.destroy;
                                    a = a.tag, void 0 !== s && (0 !== (2 & a) || 0 !== (4 & a)) && el(n, t, s), i = i.next
                                } while (i !== r)
                            }
                            hl(e, t, n);
                            break;
                        case 1:
                            if (!_o && ($o(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try { r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount() } catch (o) { Cu(n, t, o) }
                            hl(e, t, n);
                            break;
                        case 21:
                            hl(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (_o = (r = _o) || null !== n.memoizedState, hl(e, t, n), _o = r) : hl(e, t, n);
                            break;
                        default:
                            hl(e, t, n)
                    }
                }

                function pl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Jo), t.forEach((function(t) {
                            var r = Pu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function ml(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            try {
                                var s = e,
                                    o = t,
                                    l = o;
                                e: for (; null !== l;) {
                                    switch (l.tag) {
                                        case 5:
                                            cl = l.stateNode, dl = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            cl = l.stateNode.containerInfo, dl = !0;
                                            break e
                                    }
                                    l = l.return
                                }
                                if (null === cl) throw Error(a(160));
                                fl(s, o, i), cl = null, dl = !1;
                                var u = i.alternate;
                                null !== u && (u.return = null), i.return = null
                            } catch (c) { Cu(i, t, c) }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) gl(t, e), t = t.sibling
                }

                function gl(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (ml(t, e), vl(e), 4 & r) { try { nl(3, e, e.return), rl(3, e) } catch (g) { Cu(e, e.return, g) } try { nl(5, e, e.return) } catch (g) { Cu(e, e.return, g) } }
                            break;
                        case 1:
                            ml(t, e), vl(e), 512 & r && null !== n && $o(n, n.return);
                            break;
                        case 5:
                            if (ml(t, e), vl(e), 512 & r && null !== n && $o(n, n.return), 32 & e.flags) { var i = e.stateNode; try { he(i, "") } catch (g) { Cu(e, e.return, g) } }
                            if (4 & r && null != (i = e.stateNode)) {
                                var s = e.memoizedProps,
                                    o = null !== n ? n.memoizedProps : s,
                                    l = e.type,
                                    u = e.updateQueue;
                                if (e.updateQueue = null, null !== u) try {
                                    "input" === l && "radio" === s.type && null != s.name && J(i, s), xe(l, o);
                                    var c = xe(l, s);
                                    for (o = 0; o < u.length; o += 2) {
                                        var d = u[o],
                                            h = u[o + 1];
                                        "style" === d ? ge(i, h) : "dangerouslySetInnerHTML" === d ? de(i, h) : "children" === d ? he(i, h) : x(i, d, h, c)
                                    }
                                    switch (l) {
                                        case "input":
                                            Z(i, s);
                                            break;
                                        case "textarea":
                                            ae(i, s);
                                            break;
                                        case "select":
                                            var f = i._wrapperState.wasMultiple;
                                            i._wrapperState.wasMultiple = !!s.multiple;
                                            var p = s.value;
                                            null != p ? ne(i, !!s.multiple, p, !1) : f !== !!s.multiple && (null != s.defaultValue ? ne(i, !!s.multiple, s.defaultValue, !0) : ne(i, !!s.multiple, s.multiple ? [] : "", !1))
                                    }
                                    i[fi] = s
                                } catch (g) { Cu(e, e.return, g) }
                            }
                            break;
                        case 6:
                            if (ml(t, e), vl(e), 4 & r) {
                                if (null === e.stateNode) throw Error(a(162));
                                i = e.stateNode, s = e.memoizedProps;
                                try { i.nodeValue = s } catch (g) { Cu(e, e.return, g) }
                            }
                            break;
                        case 3:
                            if (ml(t, e), vl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try { Vt(t.containerInfo) } catch (g) { Cu(e, e.return, g) }
                            break;
                        case 4:
                        default:
                            ml(t, e), vl(e);
                            break;
                        case 13:
                            ml(t, e), vl(e), 8192 & (i = e.child).flags && (s = null !== i.memoizedState, i.stateNode.isHidden = s, !s || null !== i.alternate && null !== i.alternate.memoizedState || (zl = Je())), 4 & r && pl(e);
                            break;
                        case 22:
                            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (_o = (c = _o) || d, ml(t, e), _o = c) : ml(t, e), vl(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                                    for (Zo = e, d = e.child; null !== d;) {
                                        for (h = Zo = d; null !== Zo;) {
                                            switch (p = (f = Zo).child, f.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    nl(4, f, f.return);
                                                    break;
                                                case 1:
                                                    $o(f, f.return);
                                                    var m = f.stateNode;
                                                    if ("function" === typeof m.componentWillUnmount) { r = f, n = f.return; try { t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount() } catch (g) { Cu(r, n, g) } }
                                                    break;
                                                case 5:
                                                    $o(f, f.return);
                                                    break;
                                                case 22:
                                                    if (null !== f.memoizedState) { wl(h); continue }
                                            }
                                            null !== p ? (p.return = f, Zo = p) : wl(h)
                                        }
                                        d = d.sibling
                                    }
                                e: for (d = null, h = e;;) {
                                    if (5 === h.tag) { if (null === d) { d = h; try { i = h.stateNode, c ? "function" === typeof(s = i.style).setProperty ? s.setProperty("display", "none", "important") : s.display = "none" : (l = h.stateNode, o = void 0 !== (u = h.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", o)) } catch (g) { Cu(e, e.return, g) } } } else if (6 === h.tag) { if (null === d) try { h.stateNode.nodeValue = c ? "" : h.memoizedProps } catch (g) { Cu(e, e.return, g) } } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === e) && null !== h.child) { h.child.return = h, h = h.child; continue }
                                    if (h === e) break e;
                                    for (; null === h.sibling;) {
                                        if (null === h.return || h.return === e) break e;
                                        d === h && (d = null), h = h.return
                                    }
                                    d === h && (d = null), h.sibling.return = h.return, h = h.sibling
                                }
                            }
                            break;
                        case 19:
                            ml(t, e), vl(e), 4 & r && pl(e);
                        case 21:
                    }
                }

                function vl(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (sl(n)) { var r = n; break e }
                                    n = n.return
                                }
                                throw Error(a(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var i = r.stateNode;
                                    32 & r.flags && (he(i, ""), r.flags &= -33), ul(e, ol(e), i);
                                    break;
                                case 3:
                                case 4:
                                    var s = r.stateNode.containerInfo;
                                    ll(e, ol(e), s);
                                    break;
                                default:
                                    throw Error(a(161))
                            }
                        }
                        catch (o) { Cu(e, e.return, o) }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function yl(e, t, n) { Zo = e, xl(e, t, n) }

                function xl(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Zo;) {
                        var i = Zo,
                            a = i.child;
                        if (22 === i.tag && r) {
                            var s = null !== i.memoizedState || qo;
                            if (!s) {
                                var o = i.alternate,
                                    l = null !== o && null !== o.memoizedState || _o;
                                o = qo;
                                var u = _o;
                                if (qo = s, (_o = l) && !u)
                                    for (Zo = i; null !== Zo;) l = (s = Zo).child, 22 === s.tag && null !== s.memoizedState ? Al(i) : null !== l ? (l.return = s, Zo = l) : Al(i);
                                for (; null !== a;) Zo = a, xl(a, t, n), a = a.sibling;
                                Zo = i, qo = o, _o = u
                            }
                            bl(e)
                        } else 0 !== (8772 & i.subtreeFlags) && null !== a ? (a.return = i, Zo = a) : bl(e)
                    }
                }

                function bl(e) {
                    for (; null !== Zo;) {
                        var t = Zo;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _o || rl(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !_o)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var i = t.elementType === t.type ? n.memoizedProps : to(t.type, n.memoizedProps);
                                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var s = t.updateQueue;
                                        null !== s && Ha(t, s, r);
                                        break;
                                    case 3:
                                        var o = t.updateQueue;
                                        if (null !== o) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Ha(t, o, n)
                                        }
                                        break;
                                    case 5:
                                        var l = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = l;
                                            var u = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    u.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    u.src && (n.src = u.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var d = c.memoizedState;
                                                if (null !== d) {
                                                    var h = d.dehydrated;
                                                    null !== h && Vt(h)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(a(163))
                                }
                                _o || 512 & t.flags && il(t)
                            } catch (f) { Cu(t, t.return, f) }
                        }
                        if (t === e) { Zo = null; break }
                        if (null !== (n = t.sibling)) { n.return = t.return, Zo = n; break }
                        Zo = t.return
                    }
                }

                function wl(e) {
                    for (; null !== Zo;) {
                        var t = Zo;
                        if (t === e) { Zo = null; break }
                        var n = t.sibling;
                        if (null !== n) { n.return = t.return, Zo = n; break }
                        Zo = t.return
                    }
                }

                function Al(e) {
                    for (; null !== Zo;) {
                        var t = Zo;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try { rl(4, t) } catch (l) { Cu(t, n, l) }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) { var i = t.return; try { r.componentDidMount() } catch (l) { Cu(t, i, l) } }
                                    var a = t.return;
                                    try { il(t) } catch (l) { Cu(t, a, l) }
                                    break;
                                case 5:
                                    var s = t.return;
                                    try { il(t) } catch (l) { Cu(t, s, l) }
                            }
                        } catch (l) { Cu(t, t.return, l) }
                        if (t === e) { Zo = null; break }
                        var o = t.sibling;
                        if (null !== o) { o.return = t.return, Zo = o; break }
                        Zo = t.return
                    }
                }
                var jl, Cl = Math.ceil,
                    El = b.ReactCurrentDispatcher,
                    Sl = b.ReactCurrentOwner,
                    kl = b.ReactCurrentBatchConfig,
                    Pl = 0,
                    Nl = null,
                    Tl = null,
                    Bl = 0,
                    Il = 0,
                    Dl = Ci(0),
                    Fl = 0,
                    Rl = null,
                    Ll = 0,
                    Ml = 0,
                    Ol = 0,
                    Ql = null,
                    Ul = null,
                    zl = 0,
                    Vl = 1 / 0,
                    Hl = null,
                    Kl = !1,
                    Wl = null,
                    Yl = null,
                    Gl = !1,
                    Xl = null,
                    ql = 0,
                    _l = 0,
                    Jl = null,
                    Zl = -1,
                    $l = 0;

                function eu() { return 0 !== (6 & Pl) ? Je() : -1 !== Zl ? Zl : Zl = Je() }

                function tu(e) { return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Pl) && 0 !== Bl ? Bl & -Bl : null !== ma.transition ? (0 === $l && ($l = mt()), $l) : 0 !== (e = xt) ? e : e = void 0 === (e = window.event) ? 16 : _t(e.type) }

                function nu(e, t, n, r) {
                    if (50 < _l) throw _l = 0, Jl = null, Error(a(185));
                    vt(e, n, r), 0 !== (2 & Pl) && e === Nl || (e === Nl && (0 === (2 & Pl) && (Ml |= n), 4 === Fl && ou(e, Bl)), ru(e, r), 1 === n && 0 === Pl && 0 === (1 & t.mode) && (Vl = Je() + 500, Qi && Vi()))
                }

                function ru(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                            var s = 31 - st(a),
                                o = 1 << s,
                                l = i[s]; - 1 === l ? 0 !== (o & n) && 0 === (o & r) || (i[s] = ft(o, t)) : l <= t && (e.expiredLanes |= o), a &= ~o
                        }
                    }(e, t);
                    var r = ht(e, e === Nl ? Bl : 0);
                    if (0 === r) null !== n && Xe(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Xe(n), 1 === t) 0 === e.tag ? function(e) { Qi = !0, zi(e) }(lu.bind(null, e)) : zi(lu.bind(null, e)), si((function() { 0 === (6 & Pl) && Vi() })), n = null;
                        else {
                            switch (bt(r)) {
                                case 1:
                                    n = $e;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Nu(n, iu.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function iu(e, t) {
                    if (Zl = -1, $l = 0, 0 !== (6 & Pl)) throw Error(a(327));
                    var n = e.callbackNode;
                    if (Au() && e.callbackNode !== n) return null;
                    var r = ht(e, e === Nl ? Bl : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
                    else {
                        t = r;
                        var i = Pl;
                        Pl |= 2;
                        var s = pu();
                        for (Nl === e && Bl === t || (Hl = null, Vl = Je() + 500, hu(e, t));;) try { yu(); break } catch (l) { fu(e, l) }
                        Sa(), El.current = s, Pl = i, null !== Tl ? t = 0 : (Nl = null, Bl = 0, t = Fl)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (i = pt(e)) && (r = i, t = au(e, i))), 1 === t) throw n = Rl, hu(e, 0), ou(e, r), ru(e, Je()), n;
                        if (6 === t) ou(e, r);
                        else {
                            if (i = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var i = n[r],
                                                        a = i.getSnapshot;
                                                    i = i.value;
                                                    try { if (!or(a(), i)) return !1 } catch (o) { return !1 }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(i) && (2 === (t = gu(e, r)) && (0 !== (s = pt(e)) && (r = s, t = au(e, s))), 1 === t)) throw n = Rl, hu(e, 0), ou(e, r), ru(e, Je()), n;
                            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(a(345));
                                case 2:
                                case 5:
                                    wu(e, Ul, Hl);
                                    break;
                                case 3:
                                    if (ou(e, r), (130023424 & r) === r && 10 < (t = zl + 500 - Je())) {
                                        if (0 !== ht(e, 0)) break;
                                        if (((i = e.suspendedLanes) & r) !== r) { eu(), e.pingedLanes |= e.suspendedLanes & i; break }
                                        e.timeoutHandle = ri(wu.bind(null, e, Ul, Hl), t);
                                        break
                                    }
                                    wu(e, Ul, Hl);
                                    break;
                                case 4:
                                    if (ou(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, i = -1; 0 < r;) {
                                        var o = 31 - st(r);
                                        s = 1 << o, (o = t[o]) > i && (i = o), r &= ~s
                                    }
                                    if (r = i, 10 < (r = (120 > (r = Je() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cl(r / 1960)) - r)) { e.timeoutHandle = ri(wu.bind(null, e, Ul, Hl), r); break }
                                    wu(e, Ul, Hl);
                                    break;
                                default:
                                    throw Error(a(329))
                            }
                        }
                    }
                    return ru(e, Je()), e.callbackNode === n ? iu.bind(null, e) : null
                }

                function au(e, t) { var n = Ql; return e.current.memoizedState.isDehydrated && (hu(e, t).flags |= 256), 2 !== (e = gu(e, t)) && (t = Ul, Ul = n, null !== t && su(t)), e }

                function su(e) { null === Ul ? Ul = e : Ul.push.apply(Ul, e) }

                function ou(e, t) {
                    for (t &= ~Ol, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - st(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function lu(e) {
                    if (0 !== (6 & Pl)) throw Error(a(327));
                    Au();
                    var t = ht(e, 0);
                    if (0 === (1 & t)) return ru(e, Je()), null;
                    var n = gu(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = pt(e);
                        0 !== r && (t = r, n = au(e, r))
                    }
                    if (1 === n) throw n = Rl, hu(e, 0), ou(e, t), ru(e, Je()), n;
                    if (6 === n) throw Error(a(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wu(e, Ul, Hl), ru(e, Je()), null
                }

                function uu(e, t) {
                    var n = Pl;
                    Pl |= 1;
                    try { return e(t) } finally { 0 === (Pl = n) && (Vl = Je() + 500, Qi && Vi()) }
                }

                function cu(e) {
                    null !== Xl && 0 === Xl.tag && 0 === (6 & Pl) && Au();
                    var t = Pl;
                    Pl |= 1;
                    var n = kl.transition,
                        r = xt;
                    try { if (kl.transition = null, xt = 1, e) return e() } finally { xt = r, kl.transition = n, 0 === (6 & (Pl = t)) && Vi() }
                }

                function du() { Il = Dl.current, Ei(Dl) }

                function hu(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, ii(n)), null !== Tl)
                        for (n = Tl.return; null !== n;) {
                            var r = n;
                            switch (ta(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Di();
                                    break;
                                case 3:
                                    _a(), Ei(Ni), Ei(Pi), ns();
                                    break;
                                case 5:
                                    Za(r);
                                    break;
                                case 4:
                                    _a();
                                    break;
                                case 13:
                                case 19:
                                    Ei($a);
                                    break;
                                case 10:
                                    ka(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    du()
                            }
                            n = n.return
                        }
                    if (Nl = e, Tl = e = Du(e.current, null), Bl = Il = t, Fl = 0, Rl = null, Ol = Ml = Ll = 0, Ul = Ql = null, null !== Ba) {
                        for (t = 0; t < Ba.length; t++)
                            if (null !== (r = (n = Ba[t]).interleaved)) {
                                n.interleaved = null;
                                var i = r.next,
                                    a = n.pending;
                                if (null !== a) {
                                    var s = a.next;
                                    a.next = i, r.next = s
                                }
                                n.pending = r
                            }
                        Ba = null
                    }
                    return e
                }

                function fu(e, t) {
                    for (;;) {
                        var n = Tl;
                        try {
                            if (Sa(), rs.current = Js, us) {
                                for (var r = ss.memoizedState; null !== r;) {
                                    var i = r.queue;
                                    null !== i && (i.pending = null), r = r.next
                                }
                                us = !1
                            }
                            if (as = 0, ls = os = ss = null, cs = !1, ds = 0, Sl.current = null, null === n || null === n.return) { Fl = 1, Rl = t, Tl = null; break }
                            e: {
                                var s = e,
                                    o = n.return,
                                    l = n,
                                    u = t;
                                if (t = Bl, l.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                    var c = u,
                                        d = l,
                                        h = d.tag;
                                    if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                                        var f = d.alternate;
                                        f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                    }
                                    var p = go(o);
                                    if (null !== p) {
                                        p.flags &= -257, vo(p, o, l, 0, t), 1 & p.mode && mo(s, c, t), u = c;
                                        var m = (t = p).updateQueue;
                                        if (null === m) {
                                            var g = new Set;
                                            g.add(u), t.updateQueue = g
                                        } else m.add(u);
                                        break e
                                    }
                                    if (0 === (1 & t)) { mo(s, c, t), mu(); break e }
                                    u = Error(a(426))
                                } else if (ia && 1 & l.mode) { var v = go(o); if (null !== v) { 0 === (65536 & v.flags) && (v.flags |= 256), vo(v, o, l, 0, t), pa(lo(u, l)); break e } }
                                s = u = lo(u, l),
                                4 !== Fl && (Fl = 2),
                                null === Ql ? Ql = [s] : Ql.push(s),
                                s = o;do {
                                    switch (s.tag) {
                                        case 3:
                                            s.flags |= 65536, t &= -t, s.lanes |= t, za(s, fo(0, u, t));
                                            break e;
                                        case 1:
                                            l = u;
                                            var y = s.type,
                                                x = s.stateNode;
                                            if (0 === (128 & s.flags) && ("function" === typeof y.getDerivedStateFromError || null !== x && "function" === typeof x.componentDidCatch && (null === Yl || !Yl.has(x)))) { s.flags |= 65536, t &= -t, s.lanes |= t, za(s, po(s, l, t)); break e }
                                    }
                                    s = s.return
                                } while (null !== s)
                            }
                            bu(n)
                        } catch (b) { t = b, Tl === n && null !== n && (Tl = n = n.return); continue }
                        break
                    }
                }

                function pu() { var e = El.current; return El.current = Js, null === e ? Js : e }

                function mu() { 0 !== Fl && 3 !== Fl && 2 !== Fl || (Fl = 4), null === Nl || 0 === (268435455 & Ll) && 0 === (268435455 & Ml) || ou(Nl, Bl) }

                function gu(e, t) {
                    var n = Pl;
                    Pl |= 2;
                    var r = pu();
                    for (Nl === e && Bl === t || (Hl = null, hu(e, t));;) try { vu(); break } catch (i) { fu(e, i) }
                    if (Sa(), Pl = n, El.current = r, null !== Tl) throw Error(a(261));
                    return Nl = null, Bl = 0, Fl
                }

                function vu() { for (; null !== Tl;) xu(Tl) }

                function yu() { for (; null !== Tl && !qe();) xu(Tl) }

                function xu(e) {
                    var t = jl(e.alternate, e, Il);
                    e.memoizedProps = e.pendingProps, null === t ? bu(e) : Tl = t, Sl.current = null
                }

                function bu(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) { if (null !== (n = Go(n, t, Il))) return void(Tl = n) } else {
                            if (null !== (n = Xo(n, t))) return n.flags &= 32767, void(Tl = n);
                            if (null === e) return Fl = 6, void(Tl = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Tl = t);
                        Tl = t = e
                    } while (null !== t);
                    0 === Fl && (Fl = 5)
                }

                function wu(e, t, n) {
                    var r = xt,
                        i = kl.transition;
                    try {
                        kl.transition = null, xt = 1,
                            function(e, t, n, r) {
                                do { Au() } while (null !== Xl);
                                if (0 !== (6 & Pl)) throw Error(a(327));
                                n = e.finishedWork;
                                var i = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var s = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var i = 31 - st(n),
                                                a = 1 << i;
                                            t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a
                                        }
                                    }(e, s), e === Nl && (Tl = Nl = null, Bl = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Gl || (Gl = !0, Nu(tt, (function() { return Au(), null }))), s = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || s) {
                                    s = kl.transition, kl.transition = null;
                                    var o = xt;
                                    xt = 1;
                                    var l = Pl;
                                    Pl |= 4, Sl.current = null,
                                        function(e, t) {
                                            if (ei = Kt, fr(e = hr())) {
                                                if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var i = r.anchorOffset,
                                                            s = r.focusNode;
                                                        r = r.focusOffset;
                                                        try { n.nodeType, s.nodeType } catch (w) { n = null; break e }
                                                        var o = 0,
                                                            l = -1,
                                                            u = -1,
                                                            c = 0,
                                                            d = 0,
                                                            h = e,
                                                            f = null;
                                                        t: for (;;) {
                                                            for (var p; h !== n || 0 !== i && 3 !== h.nodeType || (l = o + i), h !== s || 0 !== r && 3 !== h.nodeType || (u = o + r), 3 === h.nodeType && (o += h.nodeValue.length), null !== (p = h.firstChild);) f = h, h = p;
                                                            for (;;) {
                                                                if (h === e) break t;
                                                                if (f === n && ++c === i && (l = o), f === s && ++d === r && (u = o), null !== (p = h.nextSibling)) break;
                                                                f = (h = f).parentNode
                                                            }
                                                            h = p
                                                        }
                                                        n = -1 === l || -1 === u ? null : { start: l, end: u }
                                                    } else n = null
                                                }
                                                n = n || { start: 0, end: 0 }
                                            } else n = null;
                                            for (ti = { focusedElem: e, selectionRange: n }, Kt = !1, Zo = t; null !== Zo;)
                                                if (e = (t = Zo).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Zo = e;
                                                else
                                                    for (; null !== Zo;) {
                                                        t = Zo;
                                                        try {
                                                            var m = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) {
                                                                        var g = m.memoizedProps,
                                                                            v = m.memoizedState,
                                                                            y = t.stateNode,
                                                                            x = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : to(t.type, g), v);
                                                                        y.__reactInternalSnapshotBeforeUpdate = x
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var b = t.stateNode.containerInfo;
                                                                    1 === b.nodeType ? b.textContent = "" : 9 === b.nodeType && b.documentElement && b.removeChild(b.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(a(163))
                                                            }
                                                        } catch (w) { Cu(t, t.return, w) }
                                                        if (null !== (e = t.sibling)) { e.return = t.return, Zo = e; break }
                                                        Zo = t.return
                                                    }
                                            m = tl, tl = !1
                                        }(e, n), gl(n, e), pr(ti), Kt = !!ei, ti = ei = null, e.current = n, yl(n, e, i), _e(), Pl = l, xt = o, kl.transition = s
                                } else e.current = n;
                                if (Gl && (Gl = !1, Xl = e, ql = i), s = e.pendingLanes, 0 === s && (Yl = null), function(e) { if (at && "function" === typeof at.onCommitFiberRoot) try { at.onCommitFiberRoot(it, e, void 0, 128 === (128 & e.current.flags)) } catch (t) {} }(n.stateNode), ru(e, Je()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
                                if (Kl) throw Kl = !1, e = Wl, Wl = null, e;
                                0 !== (1 & ql) && 0 !== e.tag && Au(), s = e.pendingLanes, 0 !== (1 & s) ? e === Jl ? _l++ : (_l = 0, Jl = e) : _l = 0, Vi()
                            }(e, t, n, r)
                    } finally { kl.transition = i, xt = r }
                    return null
                }

                function Au() {
                    if (null !== Xl) {
                        var e = bt(ql),
                            t = kl.transition,
                            n = xt;
                        try {
                            if (kl.transition = null, xt = 16 > e ? 16 : e, null === Xl) var r = !1;
                            else {
                                if (e = Xl, Xl = null, ql = 0, 0 !== (6 & Pl)) throw Error(a(331));
                                var i = Pl;
                                for (Pl |= 4, Zo = e.current; null !== Zo;) {
                                    var s = Zo,
                                        o = s.child;
                                    if (0 !== (16 & Zo.flags)) {
                                        var l = s.deletions;
                                        if (null !== l) {
                                            for (var u = 0; u < l.length; u++) {
                                                var c = l[u];
                                                for (Zo = c; null !== Zo;) {
                                                    var d = Zo;
                                                    switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            nl(8, d, s)
                                                    }
                                                    var h = d.child;
                                                    if (null !== h) h.return = d, Zo = h;
                                                    else
                                                        for (; null !== Zo;) {
                                                            var f = (d = Zo).sibling,
                                                                p = d.return;
                                                            if (al(d), d === c) { Zo = null; break }
                                                            if (null !== f) { f.return = p, Zo = f; break }
                                                            Zo = p
                                                        }
                                                }
                                            }
                                            var m = s.alternate;
                                            if (null !== m) {
                                                var g = m.child;
                                                if (null !== g) {
                                                    m.child = null;
                                                    do {
                                                        var v = g.sibling;
                                                        g.sibling = null, g = v
                                                    } while (null !== g)
                                                }
                                            }
                                            Zo = s
                                        }
                                    }
                                    if (0 !== (2064 & s.subtreeFlags) && null !== o) o.return = s, Zo = o;
                                    else e: for (; null !== Zo;) {
                                        if (0 !== (2048 & (s = Zo).flags)) switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nl(9, s, s.return)
                                        }
                                        var y = s.sibling;
                                        if (null !== y) { y.return = s.return, Zo = y; break e }
                                        Zo = s.return
                                    }
                                }
                                var x = e.current;
                                for (Zo = x; null !== Zo;) {
                                    var b = (o = Zo).child;
                                    if (0 !== (2064 & o.subtreeFlags) && null !== b) b.return = o, Zo = b;
                                    else e: for (o = x; null !== Zo;) {
                                        if (0 !== (2048 & (l = Zo).flags)) try {
                                            switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rl(9, l)
                                            }
                                        } catch (A) { Cu(l, l.return, A) }
                                        if (l === o) { Zo = null; break e }
                                        var w = l.sibling;
                                        if (null !== w) { w.return = l.return, Zo = w; break e }
                                        Zo = l.return
                                    }
                                }
                                if (Pl = i, Vi(), at && "function" === typeof at.onPostCommitFiberRoot) try { at.onPostCommitFiberRoot(it, e) } catch (A) {}
                                r = !0
                            }
                            return r
                        } finally { xt = n, kl.transition = t }
                    }
                    return !1
                }

                function ju(e, t, n) { e = Qa(e, t = fo(0, t = lo(n, t), 1), 1), t = eu(), null !== e && (vt(e, 1, t), ru(e, t)) }

                function Cu(e, t, n) {
                    if (3 === e.tag) ju(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) { ju(t, e, n); break }
                            if (1 === t.tag) { var r = t.stateNode; if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Yl || !Yl.has(r))) { t = Qa(t, e = po(t, e = lo(n, e), 1), 1), e = eu(), null !== t && (vt(t, 1, e), ru(t, e)); break } }
                            t = t.return
                        }
                }

                function Eu(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = eu(), e.pingedLanes |= e.suspendedLanes & n, Nl === e && (Bl & n) === n && (4 === Fl || 3 === Fl && (130023424 & Bl) === Bl && 500 > Je() - zl ? hu(e, 0) : Ol |= n), ru(e, t)
                }

                function Su(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                    var n = eu();
                    null !== (e = Fa(e, t)) && (vt(e, t, n), ru(e, n))
                }

                function ku(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Su(e, n)
                }

                function Pu(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                i = e.memoizedState;
                            null !== i && (n = i.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(a(314))
                    }
                    null !== r && r.delete(t), Su(e, n)
                }

                function Nu(e, t) { return Ge(e, t) }

                function Tu(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

                function Bu(e, t, n, r) { return new Tu(e, t, n, r) }

                function Iu(e) { return !(!(e = e.prototype) || !e.isReactComponent) }

                function Du(e, t) { var n = e.alternate; return null === n ? ((n = Bu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

                function Fu(e, t, n, r, i, s) {
                    var o = 2;
                    if (r = e, "function" === typeof e) Iu(e) && (o = 1);
                    else if ("string" === typeof e) o = 5;
                    else e: switch (e) {
                        case j:
                            return Ru(n.children, i, s, t);
                        case C:
                            o = 8, i |= 8;
                            break;
                        case E:
                            return (e = Bu(12, n, t, 2 | i)).elementType = E, e.lanes = s, e;
                        case N:
                            return (e = Bu(13, n, t, i)).elementType = N, e.lanes = s, e;
                        case T:
                            return (e = Bu(19, n, t, i)).elementType = T, e.lanes = s, e;
                        case D:
                            return Lu(n, i, s, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case S:
                                    o = 10;
                                    break e;
                                case k:
                                    o = 9;
                                    break e;
                                case P:
                                    o = 11;
                                    break e;
                                case B:
                                    o = 14;
                                    break e;
                                case I:
                                    o = 16, r = null;
                                    break e
                            }
                            throw Error(a(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Bu(o, n, t, i)).elementType = e, t.type = r, t.lanes = s, t
                }

                function Ru(e, t, n, r) { return (e = Bu(7, e, r, t)).lanes = n, e }

                function Lu(e, t, n, r) { return (e = Bu(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = { isHidden: !1 }, e }

                function Mu(e, t, n) { return (e = Bu(6, e, null, t)).lanes = n, e }

                function Ou(e, t, n) { return (t = Bu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

                function Qu(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null }

                function Uu(e, t, n, r, i, a, s, o, l) { return e = new Qu(e, t, n, o, l), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Bu(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, La(a), e }

                function zu(e) {
                    if (!e) return ki;
                    e: {
                        if (Ve(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Ii(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(a(171))
                    }
                    if (1 === e.tag) { var n = e.type; if (Ii(n)) return Ri(e, n, t) }
                    return t
                }

                function Vu(e, t, n, r, i, a, s, o, l) { return (e = Uu(n, r, !0, e, 0, a, 0, o, l)).context = zu(null), n = e.current, (a = Oa(r = eu(), i = tu(n))).callback = void 0 !== t && null !== t ? t : null, Qa(n, a, i), e.current.lanes = i, vt(e, i, r), ru(e, r), e }

                function Hu(e, t, n, r) {
                    var i = t.current,
                        a = eu(),
                        s = tu(i);
                    return n = zu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Oa(a, s)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Qa(i, t, s)) && (nu(e, i, s, a), Ua(e, i, s)), s
                }

                function Ku(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null }

                function Wu(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Yu(e, t) { Wu(e, t), (e = e.alternate) && Wu(e, t) }
                jl = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Ni.current) xo = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return xo = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            No(t), fa();
                                            break;
                                        case 5:
                                            Ja(t);
                                            break;
                                        case 1:
                                            Ii(t.type) && Li(t);
                                            break;
                                        case 4:
                                            qa(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                i = t.memoizedProps.value;
                                            Si(Aa, r._currentValue), r._currentValue = i;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Si($a, 1 & $a.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Mo(e, t, n) : (Si($a, 1 & $a.current), null !== (e = Ko(e, t, n)) ? e.sibling : null);
                                            Si($a, 1 & $a.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Vo(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), Si($a, $a.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, Co(e, t, n)
                                    }
                                    return Ko(e, t, n)
                                }(e, t, n);
                            xo = 0 !== (131072 & e.flags)
                        }
                    else xo = !1, ia && 0 !== (1048576 & t.flags) && $i(t, Yi, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Ho(e, t), e = t.pendingProps;
                            var i = Bi(t, Pi.current);
                            Na(t, n), i = ms(null, t, r, e, i, n);
                            var s = gs();
                            return t.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ii(r) ? (s = !0, Li(t)) : s = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, La(t), i.updater = ro, t.stateNode = i, i._reactInternals = t, oo(t, r, e, n), t = Po(null, t, r, !0, s, n)) : (t.tag = 0, ia && s && ea(t), bo(null, t, i, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Ho(e, t), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) { if ("function" === typeof e) return Iu(e) ? 1 : 0; if (void 0 !== e && null !== e) { if ((e = e.$$typeof) === P) return 11; if (e === B) return 14 } return 2 }(r), e = to(r, e), i) {
                                    case 0:
                                        t = So(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = ko(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = wo(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Ao(null, t, r, to(r.type, e), n);
                                        break e
                                }
                                throw Error(a(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, i = t.pendingProps, So(e, t, r, i = t.elementType === r ? i : to(r, i), n);
                        case 1:
                            return r = t.type, i = t.pendingProps, ko(e, t, r, i = t.elementType === r ? i : to(r, i), n);
                        case 3:
                            e: {
                                if (No(t), null === e) throw Error(a(387));r = t.pendingProps,
                                i = (s = t.memoizedState).element,
                                Ma(e, t),
                                Va(t, r, null, n);
                                var o = t.memoizedState;
                                if (r = o.element, s.isDehydrated) { if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, 256 & t.flags) { t = To(e, t, r, n, i = lo(Error(a(423)), t)); break e } if (r !== i) { t = To(e, t, r, n, i = lo(Error(a(424)), t)); break e } for (ra = ui(t.stateNode.containerInfo.firstChild), na = t, ia = !0, aa = null, n = wa(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling } else {
                                    if (fa(), r === i) { t = Ko(e, t, n); break e }
                                    bo(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Ja(t), null === e && ua(t), r = t.type, i = t.pendingProps, s = null !== e ? e.memoizedProps : null, o = i.children, ni(r, i) ? o = null : null !== s && ni(r, s) && (t.flags |= 32), Eo(e, t), bo(e, t, o, n), t.child;
                        case 6:
                            return null === e && ua(t), null;
                        case 13:
                            return Mo(e, t, n);
                        case 4:
                            return qa(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = ba(t, null, r, n) : bo(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, i = t.pendingProps, wo(e, t, r, i = t.elementType === r ? i : to(r, i), n);
                        case 7:
                            return bo(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return bo(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, Si(Aa, r._currentValue), r._currentValue = o, null !== s)
                                    if (or(s.value, o)) { if (s.children === i.children && !Ni.current) { t = Ko(e, t, n); break e } } else
                                        for (null !== (s = t.child) && (s.return = t); null !== s;) {
                                            var l = s.dependencies;
                                            if (null !== l) {
                                                o = s.child;
                                                for (var u = l.firstContext; null !== u;) {
                                                    if (u.context === r) {
                                                        if (1 === s.tag) {
                                                            (u = Oa(-1, n & -n)).tag = 2;
                                                            var c = s.updateQueue;
                                                            if (null !== c) {
                                                                var d = (c = c.shared).pending;
                                                                null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                                            }
                                                        }
                                                        s.lanes |= n, null !== (u = s.alternate) && (u.lanes |= n), Pa(s.return, n, t), l.lanes |= n;
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else if (10 === s.tag) o = s.type === t.type ? null : s.child;
                                            else if (18 === s.tag) {
                                                if (null === (o = s.return)) throw Error(a(341));
                                                o.lanes |= n, null !== (l = o.alternate) && (l.lanes |= n), Pa(o, n, t), o = s.sibling
                                            } else o = s.child;
                                            if (null !== o) o.return = s;
                                            else
                                                for (o = s; null !== o;) {
                                                    if (o === t) { o = null; break }
                                                    if (null !== (s = o.sibling)) { s.return = o.return, o = s; break }
                                                    o = o.return
                                                }
                                            s = o
                                        }
                                bo(e, t, i.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return i = t.type, r = t.pendingProps.children, Na(t, n), r = r(i = Ta(i)), t.flags |= 1, bo(e, t, r, n), t.child;
                        case 14:
                            return i = to(r = t.type, t.pendingProps), Ao(e, t, r, i = to(r.type, i), n);
                        case 15:
                            return jo(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : to(r, i), Ho(e, t), t.tag = 1, Ii(r) ? (e = !0, Li(t)) : e = !1, Na(t, n), ao(t, r, i), oo(t, r, i, n), Po(null, t, r, !0, e, n);
                        case 19:
                            return Vo(e, t, n);
                        case 22:
                            return Co(e, t, n)
                    }
                    throw Error(a(156, t.tag))
                };
                var Gu = "function" === typeof reportError ? reportError : function(e) { console.error(e) };

                function Xu(e) { this._internalRoot = e }

                function qu(e) { this._internalRoot = e }

                function _u(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) }

                function Ju(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)) }

                function Zu() {}

                function $u(e, t, n, r, i) {
                    var a = n._reactRootContainer;
                    if (a) {
                        var s = a;
                        if ("function" === typeof i) {
                            var o = i;
                            i = function() {
                                var e = Ku(s);
                                o.call(e)
                            }
                        }
                        Hu(t, s, e, i)
                    } else s = function(e, t, n, r, i) {
                        if (i) {
                            if ("function" === typeof r) {
                                var a = r;
                                r = function() {
                                    var e = Ku(s);
                                    a.call(e)
                                }
                            }
                            var s = Vu(t, r, e, 0, null, !1, 0, "", Zu);
                            return e._reactRootContainer = s, e[pi] = s.current, Vr(8 === e.nodeType ? e.parentNode : e), cu(), s
                        }
                        for (; i = e.lastChild;) e.removeChild(i);
                        if ("function" === typeof r) {
                            var o = r;
                            r = function() {
                                var e = Ku(l);
                                o.call(e)
                            }
                        }
                        var l = Uu(e, 0, !1, null, 0, !1, 0, "", Zu);
                        return e._reactRootContainer = l, e[pi] = l.current, Vr(8 === e.nodeType ? e.parentNode : e), cu((function() { Hu(t, l, n, r) })), l
                    }(n, t, e, i, r);
                    return Ku(s)
                }
                qu.prototype.render = Xu.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(a(409));
                    Hu(e, t, null, null)
                }, qu.prototype.unmount = Xu.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cu((function() { Hu(null, e, null, null) })), t[pi] = null
                    }
                }, qu.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = Ct();
                        e = { blockedOn: null, target: e, priority: t };
                        for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++);
                        Dt.splice(n, 0, e), 0 === n && Mt(e)
                    }
                }, wt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = dt(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), ru(t, Je()), 0 === (6 & Pl) && (Vl = Je() + 500, Vi()))
                            }
                            break;
                        case 13:
                            cu((function() {
                                var t = Fa(e, 1);
                                if (null !== t) {
                                    var n = eu();
                                    nu(t, e, 1, n)
                                }
                            })), Yu(e, 1)
                    }
                }, At = function(e) {
                    if (13 === e.tag) {
                        var t = Fa(e, 134217728);
                        if (null !== t) nu(t, e, 134217728, eu());
                        Yu(e, 134217728)
                    }
                }, jt = function(e) {
                    if (13 === e.tag) {
                        var t = tu(e),
                            n = Fa(e, t);
                        if (null !== n) nu(n, e, t, eu());
                        Yu(e, t)
                    }
                }, Ct = function() { return xt }, Et = function(e, t) { var n = xt; try { return xt = e, t() } finally { xt = n } }, Ae = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var i = wi(r);
                                        if (!i) throw Error(a(90));
                                        G(r), Z(r, i)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ae(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Pe = uu, Ne = cu;
                var ec = { usingClientEntryPoint: !1, Events: [xi, bi, wi, Se, ke, uu] },
                    tc = { findFiberByHostInstance: yi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
                    nc = { bundleType: tc.bundleType, version: tc.version, rendererPackageName: tc.rendererPackageName, rendererConfig: tc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return null === (e = We(e)) ? null : e.stateNode }, findFiberByHostInstance: tc.findFiberByHostInstance || function() { return null }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) { var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!rc.isDisabled && rc.supportsFiber) try { it = rc.inject(nc), at = rc } catch (ce) {} }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec, t.createPortal = function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!_u(t)) throw Error(a(200)); return function(e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: A, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n } }(e, t, null, n) }, t.createRoot = function(e, t) {
                    if (!_u(e)) throw Error(a(299));
                    var n = !1,
                        r = "",
                        i = Gu;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = Uu(e, 1, !1, null, 0, n, 0, r, i), e[pi] = t.current, Vr(8 === e.nodeType ? e.parentNode : e), new Xu(t)
                }, t.findDOMNode = function(e) { if (null == e) return null; if (1 === e.nodeType) return e; var t = e._reactInternals; if (void 0 === t) { if ("function" === typeof e.render) throw Error(a(188)); throw e = Object.keys(e).join(","), Error(a(268, e)) } return e = null === (e = We(t)) ? null : e.stateNode }, t.flushSync = function(e) { return cu(e) }, t.hydrate = function(e, t, n) { if (!Ju(t)) throw Error(a(200)); return $u(null, e, t, !0, n) }, t.hydrateRoot = function(e, t, n) {
                    if (!_u(e)) throw Error(a(405));
                    var r = null != n && n.hydratedSources || null,
                        i = !1,
                        s = "",
                        o = Gu;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (s = n.identifierPrefix), void 0 !== n.onRecoverableError && (o = n.onRecoverableError)), t = Vu(t, null, e, 1, null != n ? n : null, i, 0, s, o), e[pi] = t.current, Vr(e), r)
                        for (e = 0; e < r.length; e++) i = (i = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
                    return new qu(t)
                }, t.render = function(e, t, n) { if (!Ju(t)) throw Error(a(200)); return $u(null, e, t, !1, n) }, t.unmountComponentAtNode = function(e) { if (!Ju(e)) throw Error(a(40)); return !!e._reactRootContainer && (cu((function() { $u(null, null, e, !1, (function() { e._reactRootContainer = null, e[pi] = null })) })), !0) }, t.unstable_batchedUpdates = uu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) { if (!Ju(n)) throw Error(a(200)); if (null == e || void 0 === e._reactInternals) throw Error(a(38)); return $u(e, t, n, !1, r) }, t.version = "18.3.1-next-f1338f8080-20240426"
            },
            391: (e, t, n) => {
                var r = n(950);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            950: (e, t, n) => {! function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (t) { console.error(t) } }(), e.exports = n(730) },
            153: (e, t, n) => {
                var r = n(43),
                    i = Symbol.for("react.element"),
                    a = Symbol.for("react.fragment"),
                    s = Object.prototype.hasOwnProperty,
                    o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = { key: !0, ref: !0, __self: !0, __source: !0 };

                function u(e, t, n) {
                    var r, a = {},
                        u = null,
                        c = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) s.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                    return { $$typeof: i, type: e, key: u, ref: c, props: a, _owner: o.current }
                }
                t.Fragment = a, t.jsx = u, t.jsxs = u
            },
            202: (e, t) => {
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    i = Symbol.for("react.fragment"),
                    a = Symbol.for("react.strict_mode"),
                    s = Symbol.for("react.profiler"),
                    o = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    h = Symbol.for("react.lazy"),
                    f = Symbol.iterator;
                var p = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
                    m = Object.assign,
                    g = {};

                function v(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || p }

                function y() {}

                function x(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || p }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") }, y.prototype = v.prototype;
                var b = x.prototype = new y;
                b.constructor = x, m(b, v.prototype), b.isPureReactComponent = !0;
                var w = Array.isArray,
                    A = Object.prototype.hasOwnProperty,
                    j = { current: null },
                    C = { key: !0, ref: !0, __self: !0, __source: !0 };

                function E(e, t, r) {
                    var i, a = {},
                        s = null,
                        o = null;
                    if (null != t)
                        for (i in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) A.call(t, i) && !C.hasOwnProperty(i) && (a[i] = t[i]);
                    var l = arguments.length - 2;
                    if (1 === l) a.children = r;
                    else if (1 < l) {
                        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                        a.children = u
                    }
                    if (e && e.defaultProps)
                        for (i in l = e.defaultProps) void 0 === a[i] && (a[i] = l[i]);
                    return { $$typeof: n, type: e, key: s, ref: o, props: a, _owner: j.current }
                }

                function S(e) { return "object" === typeof e && null !== e && e.$$typeof === n }
                var k = /\/+/g;

                function P(e, t) { return "object" === typeof e && null !== e && null != e.key ? function(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function(e) { return t[e] })) }("" + e.key) : t.toString(36) }

                function N(e, t, i, a, s) {
                    var o = typeof e;
                    "undefined" !== o && "boolean" !== o || (e = null);
                    var l = !1;
                    if (null === e) l = !0;
                    else switch (o) {
                        case "string":
                        case "number":
                            l = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    l = !0
                            }
                    }
                    if (l) return s = s(l = e), e = "" === a ? "." + P(l, 0) : a, w(s) ? (i = "", null != e && (i = e.replace(k, "$&/") + "/"), N(s, t, i, "", (function(e) { return e }))) : null != s && (S(s) && (s = function(e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }(s, i + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(k, "$&/") + "/") + e)), t.push(s)), 1;
                    if (l = 0, a = "" === a ? "." : a + ":", w(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = a + P(o = e[u], u);
                            l += N(o, t, i, c, s)
                        } else if (c = function(e) { return null === e || "object" !== typeof e ? null : "function" === typeof(e = f && e[f] || e["@@iterator"]) ? e : null }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(o = e.next()).done;) l += N(o = o.value, t, i, c = a + P(o, u++), s);
                        else if ("object" === o) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return l
                }

                function T(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        i = 0;
                    return N(e, r, "", "", (function(e) { return t.call(n, e, i++) })), r
                }

                function B(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t) }), (function(t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t) })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var I = { current: null },
                    D = { transition: null },
                    F = { ReactCurrentDispatcher: I, ReactCurrentBatchConfig: D, ReactCurrentOwner: j };

                function R() { throw Error("act(...) is not supported in production builds of React.") }
                t.Children = { map: T, forEach: function(e, t, n) { T(e, (function() { t.apply(this, arguments) }), n) }, count: function(e) { var t = 0; return T(e, (function() { t++ })), t }, toArray: function(e) { return T(e, (function(e) { return e })) || [] }, only: function(e) { if (!S(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } }, t.Component = v, t.Fragment = i, t.Profiler = s, t.PureComponent = x, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, t.act = R, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var i = m({}, e.props),
                        a = e.key,
                        s = e.ref,
                        o = e._owner;
                    if (null != t) { if (void 0 !== t.ref && (s = t.ref, o = j.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps; for (u in t) A.call(t, u) && !C.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]) }
                    var u = arguments.length - 2;
                    if (1 === u) i.children = r;
                    else if (1 < u) {
                        l = Array(u);
                        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                        i.children = l
                    }
                    return { $$typeof: n, type: e.type, key: a, ref: s, props: i, _owner: o }
                }, t.createContext = function(e) { return (e = { $$typeof: l, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: o, _context: e }, e.Consumer = e }, t.createElement = E, t.createFactory = function(e) { var t = E.bind(null, e); return t.type = e, t }, t.createRef = function() { return { current: null } }, t.forwardRef = function(e) { return { $$typeof: u, render: e } }, t.isValidElement = S, t.lazy = function(e) { return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: B } }, t.memo = function(e, t) { return { $$typeof: d, type: e, compare: void 0 === t ? null : t } }, t.startTransition = function(e) {
                    var t = D.transition;
                    D.transition = {};
                    try { e() } finally { D.transition = t }
                }, t.unstable_act = R, t.useCallback = function(e, t) { return I.current.useCallback(e, t) }, t.useContext = function(e) { return I.current.useContext(e) }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) { return I.current.useDeferredValue(e) }, t.useEffect = function(e, t) { return I.current.useEffect(e, t) }, t.useId = function() { return I.current.useId() }, t.useImperativeHandle = function(e, t, n) { return I.current.useImperativeHandle(e, t, n) }, t.useInsertionEffect = function(e, t) { return I.current.useInsertionEffect(e, t) }, t.useLayoutEffect = function(e, t) { return I.current.useLayoutEffect(e, t) }, t.useMemo = function(e, t) { return I.current.useMemo(e, t) }, t.useReducer = function(e, t, n) { return I.current.useReducer(e, t, n) }, t.useRef = function(e) { return I.current.useRef(e) }, t.useState = function(e) { return I.current.useState(e) }, t.useSyncExternalStore = function(e, t, n) { return I.current.useSyncExternalStore(e, t, n) }, t.useTransition = function() { return I.current.useTransition() }, t.version = "18.3.1"
            },
            43: (e, t, n) => { e.exports = n(202) },
            579: (e, t, n) => { e.exports = n(153) },
            234: (e, t) => {
                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            i = e[r];
                        if (!(0 < a(i, t))) break e;
                        e[r] = t, e[n] = i, n = r
                    }
                }

                function r(e) { return 0 === e.length ? null : e[0] }

                function i(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, i = e.length, s = i >>> 1; r < s;) {
                            var o = 2 * (r + 1) - 1,
                                l = e[o],
                                u = o + 1,
                                c = e[u];
                            if (0 > a(l, n)) u < i && 0 > a(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[o] = n, r = o);
                            else {
                                if (!(u < i && 0 > a(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function a(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var s = performance;
                    t.unstable_now = function() { return s.now() }
                } else {
                    var o = Date,
                        l = o.now();
                    t.unstable_now = function() { return o.now() - l }
                }
                var u = [],
                    c = [],
                    d = 1,
                    h = null,
                    f = 3,
                    p = !1,
                    m = !1,
                    g = !1,
                    v = "function" === typeof setTimeout ? setTimeout : null,
                    y = "function" === typeof clearTimeout ? clearTimeout : null,
                    x = "undefined" !== typeof setImmediate ? setImmediate : null;

                function b(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) i(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            i(c), t.sortIndex = t.expirationTime, n(u, t)
                        }
                        t = r(c)
                    }
                }

                function w(e) {
                    if (g = !1, b(e), !m)
                        if (null !== r(u)) m = !0, D(A);
                        else {
                            var t = r(c);
                            null !== t && F(w, t.startTime - e)
                        }
                }

                function A(e, n) {
                    m = !1, g && (g = !1, y(S), S = -1), p = !0;
                    var a = f;
                    try {
                        for (b(n), h = r(u); null !== h && (!(h.expirationTime > n) || e && !N());) {
                            var s = h.callback;
                            if ("function" === typeof s) {
                                h.callback = null, f = h.priorityLevel;
                                var o = s(h.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof o ? h.callback = o : h === r(u) && i(u), b(n)
                            } else i(u);
                            h = r(u)
                        }
                        if (null !== h) var l = !0;
                        else {
                            var d = r(c);
                            null !== d && F(w, d.startTime - n), l = !1
                        }
                        return l
                    } finally { h = null, f = a, p = !1 }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var j, C = !1,
                    E = null,
                    S = -1,
                    k = 5,
                    P = -1;

                function N() { return !(t.unstable_now() - P < k) }

                function T() {
                    if (null !== E) {
                        var e = t.unstable_now();
                        P = e;
                        var n = !0;
                        try { n = E(!0, e) } finally { n ? j() : (C = !1, E = null) }
                    } else C = !1
                }
                if ("function" === typeof x) j = function() { x(T) };
                else if ("undefined" !== typeof MessageChannel) {
                    var B = new MessageChannel,
                        I = B.port2;
                    B.port1.onmessage = T, j = function() { I.postMessage(null) }
                } else j = function() { v(T, 0) };

                function D(e) { E = e, C || (C = !0, j()) }

                function F(e, n) { S = v((function() { e(t.unstable_now()) }), n) }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) { e.callback = null }, t.unstable_continueExecution = function() { m || p || (m = !0, D(A)) }, t.unstable_forceFrameRate = function(e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < e ? Math.floor(1e3 / e) : 5 }, t.unstable_getCurrentPriorityLevel = function() { return f }, t.unstable_getFirstCallbackNode = function() { return r(u) }, t.unstable_next = function(e) {
                    switch (f) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = f
                    }
                    var n = f;
                    f = t;
                    try { return e() } finally { f = n }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = f;
                    f = e;
                    try { return t() } finally { f = n }
                }, t.unstable_scheduleCallback = function(e, i, a) {
                    var s = t.unstable_now();
                    switch ("object" === typeof a && null !== a ? a = "number" === typeof(a = a.delay) && 0 < a ? s + a : s : a = s, e) {
                        case 1:
                            var o = -1;
                            break;
                        case 2:
                            o = 250;
                            break;
                        case 5:
                            o = 1073741823;
                            break;
                        case 4:
                            o = 1e4;
                            break;
                        default:
                            o = 5e3
                    }
                    return e = { id: d++, callback: i, priorityLevel: e, startTime: a, expirationTime: o = a + o, sortIndex: -1 }, a > s ? (e.sortIndex = a, n(c, e), null === r(u) && e === r(c) && (g ? (y(S), S = -1) : g = !0, F(w, a - s))) : (e.sortIndex = o, n(u, e), m || p || (m = !0, D(A))), e
                }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(e) {
                    var t = f;
                    return function() {
                        var n = f;
                        f = t;
                        try { return e.apply(this, arguments) } finally { f = n }
                    }
                }
            },
            853: (e, t, n) => { e.exports = n(234) }
        },
        t = {};

    function n(r) { var i = t[r]; if (void 0 !== i) return i.exports; var a = t[r] = { exports: {} }; return e[r](a, a.exports, n), a.exports }
    n.m = e, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, i) {
            if (1 & i && (r = this(r)), 8 & i) return r;
            if ("object" === typeof r && r) { if (4 & i && r.__esModule) return r; if (16 & i && "function" === typeof r.then) return r }
            var a = Object.create(null);
            n.r(a);
            var s = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var o = 2 & i && r;
                "object" == typeof o && !~e.indexOf(o); o = t(o)) Object.getOwnPropertyNames(o).forEach((e => s[e] = () => r[e]));
            return s.default = () => r, n.d(a, s), a
        }
    })(), n.d = (e, t) => { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, r) => (n.f[r](e, t), t)), [])), n.u = e => "static/js/" + e + ".608812a5.chunk.js", n.miniCssF = e => {}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "techfusion:";
        n.l = (r, i, a, s) => {
            if (e[r]) e[r].push(i);
            else {
                var o, l;
                if (void 0 !== a)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) { var d = u[c]; if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + a) { o = d; break } }
                o || (l = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + a), o.src = r), e[r] = [i];
                var h = (t, n) => { o.onerror = o.onload = null, clearTimeout(f); var i = e[r]; if (delete e[r], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((e => e(n))), t) return t(n) },
                    f = setTimeout(h.bind(null, void 0, { type: "timeout", target: o }), 12e4);
                o.onerror = h.bind(null, o.onerror), o.onload = h.bind(null, o.onload), l && document.head.appendChild(o)
            }
        }
    })(), n.r = e => { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.p = "/", (() => {
        var e = { 792: 0 };
        n.f.j = (t, r) => {
            var i = n.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i) r.push(i[2]);
                else {
                    var a = new Promise(((n, r) => i = e[t] = [n, r]));
                    r.push(i[2] = a);
                    var s = n.p + n.u(t),
                        o = new Error;
                    n.l(s, (r => {
                        if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                            var a = r && ("load" === r.type ? "missing" : r.type),
                                s = r && r.target && r.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")", o.name = "ChunkLoadError", o.type = a, o.request = s, i[1](o)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, r) => {
                var i, a, s = r[0],
                    o = r[1],
                    l = r[2],
                    u = 0;
                if (s.some((t => 0 !== e[t]))) { for (i in o) n.o(o, i) && (n.m[i] = o[i]); if (l) l(n) }
                for (t && t(r); u < s.length; u++) a = s[u], n.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunktechfusion = self.webpackChunktechfusion || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })();
    var r = n(43),
        i = n.t(r, 2),
        a = n(391),
        s = n(579);
    const o = (0, r.createContext)({ transformPagePoint: e => e, isStatic: !1, reducedMotion: "never" }),
        l = (0, r.createContext)({}),
        u = (0, r.createContext)(null),
        c = "undefined" !== typeof window,
        d = c ? r.useLayoutEffect : r.useEffect,
        h = (0, r.createContext)({ strict: !1 }),
        f = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        p = "data-" + f("framerAppearId"),
        m = !1,
        g = !1;
    const v = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

    function y(e, t) {
        let n = !1,
            r = !0;
        const i = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = () => n = !0,
            s = v.reduce(((e, t) => (e[t] = function(e) {
                let t = new Set,
                    n = new Set,
                    r = !1,
                    i = !1;
                const a = new WeakSet;
                let s = { delta: 0, timestamp: 0, isProcessing: !1 };

                function o(t) { a.has(t) && (l.schedule(t), e()), t(s) }
                const l = { schedule: function(e) { const i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && r ? t : n; return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && a.add(e), i.has(e) || i.add(e), e }, cancel: e => { n.delete(e), a.delete(e) }, process: e => { s = e, r ? i = !0 : (r = !0, [t, n] = [n, t], n.clear(), t.forEach(o), r = !1, i && (i = !1, l.process(e))) } };
                return l
            }(a), e)), {}),
            { read: o, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: h } = s,
            f = () => {
                const a = g ? i.timestamp : performance.now();
                n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, 40), 1), i.timestamp = a, i.isProcessing = !0, o.process(i), l.process(i), u.process(i), c.process(i), d.process(i), h.process(i), i.isProcessing = !1, n && t && (r = !1, e(f))
            },
            p = v.reduce(((t, a) => {
                const o = s[a];
                return t[a] = function(t) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n || (n = !0, r = !0, i.isProcessing || e(f)), o.schedule(t, a, s)
                }, t
            }), {});
        return { schedule: p, cancel: e => { for (let t = 0; t < v.length; t++) s[v[t]].cancel(e) }, state: i, steps: s }
    }
    const { schedule: x, cancel: b } = y(queueMicrotask, !1);

    function w(e) { return e && "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current") }
    const A = (0, r.createContext)({});
    let j = !1;

    function C(e, t, n, i, a) {
        var s;
        const { visualElement: c } = (0, r.useContext)(l), f = (0, r.useContext)(h), m = (0, r.useContext)(u), g = (0, r.useContext)(o).reducedMotion, v = (0, r.useRef)();
        i = i || f.renderer, !v.current && i && (v.current = i(e, { visualState: t, parent: c, props: n, presenceContext: m, blockInitialAnimation: !!m && !1 === m.initial, reducedMotionConfig: g }));
        const y = v.current,
            b = (0, r.useContext)(A);
        !y || y.projection || !a || "html" !== y.type && "svg" !== y.type || function(e, t, n, r) {
            const { layoutId: i, layout: a, drag: s, dragConstraints: o, layoutScroll: l, layoutRoot: u } = t;
            e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : S(e.parent)), e.projection.setOptions({ layoutId: i, layout: a, alwaysMeasureLayout: Boolean(s) || o && w(o), visualElement: e, animationType: "string" === typeof a ? a : "both", initialPromotionConfig: r, layoutScroll: l, layoutRoot: u })
        }(v.current, n, a, b), (0, r.useInsertionEffect)((() => { y && y.update(n, m) }));
        const C = n[p],
            k = (0, r.useRef)(Boolean(C) && !window.MotionHandoffIsComplete && (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s ? void 0 : s.call(window, C)));
        return d((() => { y && (y.updateFeatures(), x.render(y.render), k.current && y.animationState && y.animationState.animateChanges()) })), (0, r.useEffect)((() => { y && (!k.current && y.animationState && y.animationState.animateChanges(), k.current = !1, j || (j = !0, queueMicrotask(E))) })), y
    }

    function E() { window.MotionHandoffIsComplete = !0 }

    function S(e) { if (e) return !1 !== e.options.allowProjection ? e.projection : S(e.parent) }

    function k(e, t, n) { return (0, r.useCallback)((r => { r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && ("function" === typeof n ? n(r) : w(n) && (n.current = r)) }), [t]) }

    function P(e) { return "string" === typeof e || Array.isArray(e) }

    function N(e) { return null !== e && "object" === typeof e && "function" === typeof e.start }
    const T = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        B = ["initial", ...T];

    function I(e) { return N(e.animate) || B.some((t => P(e[t]))) }

    function D(e) { return Boolean(I(e) || e.variants) }

    function F(e) { const { initial: t, animate: n } = function(e, t) { if (I(e)) { const { initial: t, animate: n } = e; return { initial: !1 === t || P(t) ? t : void 0, animate: P(n) ? n : void 0 } } return !1 !== e.inherit ? t : {} }(e, (0, r.useContext)(l)); return (0, r.useMemo)((() => ({ initial: t, animate: n })), [R(t), R(n)]) }

    function R(e) { return Array.isArray(e) ? e.join(" ") : e }
    const L = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] },
        M = {};
    for (const Au in L) M[Au] = { isEnabled: e => L[Au].some((t => !!e[t])) };
    const O = (0, r.createContext)({}),
        Q = Symbol.for("motionComponentSymbol");

    function U(e) {
        let { preloadedFeatures: t, createVisualElement: n, useRender: i, useVisualState: a, Component: u } = e;
        t && function(e) { for (const t in e) M[t] = {...M[t], ...e[t] } }(t);
        const d = (0, r.forwardRef)((function(e, t) {
            let d;
            const f = {...(0, r.useContext)(o), ...e, layoutId: z(e) },
                { isStatic: p } = f,
                m = F(e),
                g = a(e, p);
            if (!p && c) {
                ! function() {
                    (0, r.useContext)(h).strict;
                    0
                }();
                const e = function(e) { const { drag: t, layout: n } = M; if (!t && !n) return {}; const r = {...t, ...n }; return { MeasureLayout: (null === t || void 0 === t ? void 0 : t.isEnabled(e)) || (null === n || void 0 === n ? void 0 : n.isEnabled(e)) ? r.MeasureLayout : void 0, ProjectionNode: r.ProjectionNode } }(f);
                d = e.MeasureLayout, m.visualElement = C(u, g, f, n, e.ProjectionNode)
            }
            return (0, s.jsxs)(l.Provider, { value: m, children: [d && m.visualElement ? (0, s.jsx)(d, { visualElement: m.visualElement, ...f }) : null, i(u, e, k(g, m.visualElement, t), g, p, m.visualElement)] })
        }));
        return d[Q] = u, d
    }

    function z(e) { let { layoutId: t } = e; const n = (0, r.useContext)(O).id; return n && void 0 !== t ? n + "-" + t : t }

    function V(e) {
        function t(t) { return U(e(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})) }
        if ("undefined" === typeof Proxy) return t;
        const n = new Map;
        return new Proxy(t, { get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)) })
    }
    const H = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function K(e) { return "string" === typeof e && !e.includes("-") && !!(H.indexOf(e) > -1 || /[A-Z]/u.test(e)) }
    const W = {};
    const Y = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        G = new Set(Y);

    function X(e, t) { let { layout: n, layoutId: r } = t; return G.has(e) || e.startsWith("origin") || (n || void 0 !== r) && (!!W[e] || "opacity" === e) }
    const q = e => Boolean(e && e.getVelocity),
        _ = (e, t) => t && "number" === typeof e ? t.transform(e) : e,
        J = (e, t, n) => n > t ? t : n < e ? e : n,
        Z = { test: e => "number" === typeof e, parse: parseFloat, transform: e => e },
        $ = {...Z, transform: e => J(0, 1, e) },
        ee = {...Z, default: 1 },
        te = e => Math.round(1e5 * e) / 1e5,
        ne = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        re = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        ie = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

    function ae(e) { return "string" === typeof e }
    const se = e => ({ test: t => ae(t) && t.endsWith(e) && 1 === t.split(" ").length, parse: parseFloat, transform: t => `${t}${e}` }),
        oe = se("deg"),
        le = se("%"),
        ue = se("px"),
        ce = se("vh"),
        de = se("vw"),
        he = {...le, parse: e => le.parse(e) / 100, transform: e => le.transform(100 * e) },
        fe = {...Z, transform: Math.round },
        pe = { borderWidth: ue, borderTopWidth: ue, borderRightWidth: ue, borderBottomWidth: ue, borderLeftWidth: ue, borderRadius: ue, radius: ue, borderTopLeftRadius: ue, borderTopRightRadius: ue, borderBottomRightRadius: ue, borderBottomLeftRadius: ue, width: ue, maxWidth: ue, height: ue, maxHeight: ue, size: ue, top: ue, right: ue, bottom: ue, left: ue, padding: ue, paddingTop: ue, paddingRight: ue, paddingBottom: ue, paddingLeft: ue, margin: ue, marginTop: ue, marginRight: ue, marginBottom: ue, marginLeft: ue, rotate: oe, rotateX: oe, rotateY: oe, rotateZ: oe, scale: ee, scaleX: ee, scaleY: ee, scaleZ: ee, skew: oe, skewX: oe, skewY: oe, distance: ue, translateX: ue, translateY: ue, translateZ: ue, x: ue, y: ue, z: ue, perspective: ue, transformPerspective: ue, opacity: $, originX: he, originY: he, originZ: ue, zIndex: fe, backgroundPositionX: ue, backgroundPositionY: ue, fillOpacity: $, strokeOpacity: $, numOctaves: fe },
        me = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
        ge = Y.length;
    const ve = e => t => "string" === typeof t && t.startsWith(e),
        ye = ve("--"),
        xe = ve("var(--"),
        be = e => !!xe(e) && we.test(e.split("/*")[0].trim()),
        we = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

    function Ae(e, t, n) {
        const { style: r, vars: i, transformOrigin: a } = e;
        let s = !1,
            o = !1;
        for (const l in t) {
            const e = t[l];
            if (G.has(l)) s = !0;
            else if (ye(l)) i[l] = e;
            else {
                const t = _(e, pe[l]);
                l.startsWith("origin") ? (o = !0, a[l] = t) : r[l] = t
            }
        }
        if (t.transform || (s || n ? r.transform = function(e, t, n) {
                let r = "",
                    i = !0;
                for (let a = 0; a < ge; a++) {
                    const s = Y[a],
                        o = e[s];
                    if (void 0 === o) continue;
                    let l = !0;
                    if (l = "number" === typeof o ? o === (s.startsWith("scale") ? 1 : 0) : 0 === parseFloat(o), !l || n) {
                        const e = _(o, pe[s]);
                        l || (i = !1, r += `${me[s]||s}(${e}) `), n && (t[s] = e)
                    }
                }
                return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
            }(t, e.transform, n) : r.transform && (r.transform = "none")), o) {
            const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
            r.transformOrigin = `${e} ${t} ${n}`
        }
    }
    const je = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });

    function Ce(e, t, n) { for (const r in t) q(t[r]) || X(r, n) || (e[r] = t[r]) }

    function Ee(e, t) { const n = {}; return Ce(n, e.style || {}, e), Object.assign(n, function(e, t) { let { transformTemplate: n } = e; return (0, r.useMemo)((() => { const e = je(); return Ae(e, t, n), Object.assign({}, e.vars, e.style) }), [t]) }(e, t)), n }

    function Se(e, t) {
        const n = {},
            r = Ee(e, t);
        return e.drag && !1 !== e.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
    }
    const ke = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

    function Pe(e) { return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ke.has(e) }
    let Ne = e => !Pe(e);
    try {
        (Te = require("@emotion/is-prop-valid").default) && (Ne = e => e.startsWith("on") ? !Pe(e) : Te(e))
    } catch (bu) {}
    var Te;

    function Be(e, t, n) { return "string" === typeof e ? e : ue.transform(t + n * e) }
    const Ie = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        De = { offset: "strokeDashoffset", array: "strokeDasharray" };

    function Fe(e, t, n, r) {
        let { attrX: i, attrY: a, attrScale: s, originX: o, originY: l, pathLength: u, pathSpacing: c = 1, pathOffset: d = 0, ...h } = t;
        if (Ae(e, h, r), n) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const { attrs: f, style: p, dimensions: m } = e;
        f.transform && (m && (p.transform = f.transform), delete f.transform), m && (void 0 !== o || void 0 !== l || p.transform) && (p.transformOrigin = function(e, t, n) { return `${Be(t,e.x,e.width)} ${Be(n,e.y,e.height)}` }(m, void 0 !== o ? o : .5, void 0 !== l ? l : .5)), void 0 !== i && (f.x = i), void 0 !== a && (f.y = a), void 0 !== s && (f.scale = s), void 0 !== u && function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
            e.pathLength = 1;
            const a = i ? Ie : De;
            e[a.offset] = ue.transform(-r);
            const s = ue.transform(t),
                o = ue.transform(n);
            e[a.array] = `${s} ${o}`
        }(f, u, c, d, !1)
    }
    const Re = () => ({...je(), attrs: {} }),
        Le = e => "string" === typeof e && "svg" === e.toLowerCase();

    function Me(e, t, n, i) {
        const a = (0, r.useMemo)((() => { const n = Re(); return Fe(n, t, Le(i), e.transformTemplate), {...n.attrs, style: {...n.style } } }), [t]);
        if (e.style) {
            const t = {};
            Ce(t, e.style, e), a.style = {...t, ...a.style }
        }
        return a
    }

    function Oe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (t, n, i, a, s) => {
            let { latestValues: o } = a;
            const l = (K(t) ? Me : Se)(n, o, s, t),
                u = function(e, t, n) { const r = {}; for (const i in e) "values" === i && "object" === typeof e.values || (Ne(i) || !0 === n && Pe(i) || !t && !Pe(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]); return r }(n, "string" === typeof t, e),
                c = t !== r.Fragment ? {...u, ...l, ref: i } : {},
                { children: d } = n,
                h = (0, r.useMemo)((() => q(d) ? d.get() : d), [d]);
            return (0, r.createElement)(t, {...c, children: h })
        }
    }

    function Qe(e, t, n, r) {
        let { style: i, vars: a } = t;
        Object.assign(e.style, i, r && r.getProjectionStyles(n));
        for (const s in a) e.style.setProperty(s, a[s])
    }
    const Ue = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

    function ze(e, t, n, r) { Qe(e, t, void 0, r); for (const i in t.attrs) e.setAttribute(Ue.has(i) ? i : f(i), t.attrs[i]) }

    function Ve(e, t, n) { var r; const { style: i } = e, a = {}; for (const s in i)(q(i[s]) || t.style && q(t.style[s]) || X(s, e) || void 0 !== (null === (r = null === n || void 0 === n ? void 0 : n.getValue(s)) || void 0 === r ? void 0 : r.liveStyle)) && (a[s] = i[s]); return n && i && "string" === typeof i.willChange && (n.applyWillChange = !1), a }

    function He(e, t, n) {
        const r = Ve(e, t, n);
        for (const i in e)
            if (q(e[i]) || q(t[i])) { r[-1 !== Y.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = e[i] }
        return r
    }

    function Ke(e) { const t = [{}, {}]; return null === e || void 0 === e || e.values.forEach(((e, n) => { t[0][n] = e.get(), t[1][n] = e.getVelocity() })), t }

    function We(e, t, n, r) {
        if ("function" === typeof t) {
            const [i, a] = Ke(r);
            t = t(void 0 !== n ? n : e.custom, i, a)
        }
        if ("string" === typeof t && (t = e.variants && e.variants[t]), "function" === typeof t) {
            const [i, a] = Ke(r);
            t = t(void 0 !== n ? n : e.custom, i, a)
        }
        return t
    }

    function Ye(e) { const t = (0, r.useRef)(null); return null === t.current && (t.current = e()), t.current }
    const Ge = e => Array.isArray(e),
        Xe = e => Boolean(e && "object" === typeof e && e.mix && e.toValue),
        qe = e => Ge(e) ? e[e.length - 1] || 0 : e;

    function _e(e) { const t = q(e) ? e.get() : e; return Xe(t) ? t.toValue() : t }
    const Je = new Set(["opacity", "clipPath", "filter", "transform"]);

    function Ze(e) { return G.has(e) ? "transform" : Je.has(e) ? f(e) : void 0 }

    function $e(e, t) {-1 === e.indexOf(t) && e.push(t) }

    function et(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    const tt = e => (t, n) => {
        const i = (0, r.useContext)(l),
            a = (0, r.useContext)(u),
            s = () => function(e, t, n, r, i) { let { applyWillChange: a = !1, scrapeMotionValuesFromProps: s, createRenderState: o, onMount: l } = e; const u = { latestValues: it(t, n, r, !i && a, s), renderState: o() }; return l && (u.mount = e => l(t, e, u)), u }(e, t, i, a, n);
        return n ? s() : Ye(s)
    };

    function nt(e, t) {
        const n = Ze(t);
        n && $e(e, n)
    }

    function rt(e, t, n) {
        const r = Array.isArray(t) ? t : [t];
        for (let i = 0; i < r.length; i++) {
            const t = We(e, r[i]);
            if (t) {
                const { transitionEnd: e, transition: r, ...i } = t;
                n(i, e)
            }
        }
    }

    function it(e, t, n, r, i) {
        var a;
        const s = {},
            o = [],
            l = r && void 0 === (null === (a = e.style) || void 0 === a ? void 0 : a.willChange),
            u = i(e, {});
        for (const g in u) s[g] = _e(u[g]);
        let { initial: c, animate: d } = e;
        const h = I(e),
            f = D(e);
        t && f && !h && !1 !== e.inherit && (void 0 === c && (c = t.initial), void 0 === d && (d = t.animate));
        let p = !!n && !1 === n.initial;
        p = p || !1 === c;
        const m = p ? d : c;
        return m && "boolean" !== typeof m && !N(m) && rt(e, m, ((e, t) => {
            for (const n in e) {
                let t = e[n];
                if (Array.isArray(t)) { t = t[p ? t.length - 1 : 0] }
                null !== t && (s[n] = t)
            }
            for (const n in t) s[n] = t[n]
        })), l && (d && !1 !== c && !N(d) && rt(e, d, (e => { for (const t in e) nt(o, t) })), o.length && (s.willChange = o.join(","))), s
    }
    const at = e => e,
        { schedule: st, cancel: ot, state: lt, steps: ut } = y("undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : at, !0),
        ct = {
            useVisualState: tt({
                scrapeMotionValuesFromProps: He,
                createRenderState: Re,
                onMount: (e, t, n) => {
                    let { renderState: r, latestValues: i } = n;
                    st.read((() => { try { r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect() } catch (e) { r.dimensions = { x: 0, y: 0, width: 0, height: 0 } } })), st.render((() => { Fe(r, i, Le(t.tagName), e.transformTemplate), ze(t, r) }))
                }
            })
        },
        dt = { useVisualState: tt({ applyWillChange: !0, scrapeMotionValuesFromProps: Ve, createRenderState: je }) };

    function ht(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { passive: !0 }; return e.addEventListener(t, n, r), () => e.removeEventListener(t, n) }
    const ft = e => "mouse" === e.pointerType ? "number" !== typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

    function pt(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page"; return { point: { x: e[`${t}X`], y: e[`${t}Y`] } } }
    const mt = e => t => ft(t) && e(t, pt(t));

    function gt(e, t, n, r) { return ht(e, t, mt(n), r) }
    const vt = (e, t) => n => t(e(n)),
        yt = function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return t.reduce(vt) };

    function xt(e) { let t = null; return () => { const n = () => { t = null }; return null === t && (t = e, n) } }
    const bt = xt("dragHorizontal"),
        wt = xt("dragVertical");

    function At(e) {
        let t = !1;
        if ("y" === e) t = wt();
        else if ("x" === e) t = bt();
        else {
            const e = bt(),
                n = wt();
            e && n ? t = () => { e(), n() } : (e && e(), n && n())
        }
        return t
    }

    function jt() { const e = At(!0); return !e || (e(), !1) }
    class Ct {
        constructor(e) { this.isMounted = !1, this.node = e }
        update() {}
    }

    function Et(e, t) {
        const n = t ? "pointerenter" : "pointerleave",
            r = t ? "onHoverStart" : "onHoverEnd";
        return gt(e.current, n, ((n, i) => {
            if ("touch" === n.pointerType || jt()) return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
            const s = a[r];
            s && st.postRender((() => s(n, i)))
        }), { passive: !e.getProps()[r] })
    }
    const St = (e, t) => !!t && (e === t || St(e, t.parentElement));

    function kt(e, t) {
        if (!t) return;
        const n = new PointerEvent("pointer" + e);
        t(n, pt(n))
    }
    const Pt = new WeakMap,
        Nt = new WeakMap,
        Tt = e => {
            const t = Pt.get(e.target);
            t && t(e)
        },
        Bt = e => { e.forEach(Tt) };

    function It(e, t, n) {
        const r = function(e) {
            let { root: t, ...n } = e;
            const r = t || document;
            Nt.has(r) || Nt.set(r, {});
            const i = Nt.get(r),
                a = JSON.stringify(n);
            return i[a] || (i[a] = new IntersectionObserver(Bt, { root: t, ...n })), i[a]
        }(t);
        return Pt.set(e, n), r.observe(e), () => { Pt.delete(e), r.unobserve(e) }
    }
    const Dt = { some: 0, all: 1 };
    const Ft = {
        inView: {
            Feature: class extends Ct {
                constructor() { super(...arguments), this.hasEnteredView = !1, this.isInView = !1 }
                startObserver() {
                    this.unmount();
                    const { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = { root: t ? t.current : void 0, rootMargin: n, threshold: "number" === typeof r ? r : Dt[r] };
                    return It(this.node.current, a, (e => {
                        const { isIntersecting: t } = e;
                        if (this.isInView === t) return;
                        if (this.isInView = t, i && !t && this.hasEnteredView) return;
                        t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                        const { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
                        a && a(e)
                    }))
                }
                mount() { this.startObserver() }
                update() {
                    if ("undefined" === typeof IntersectionObserver) return;
                    const { props: e, prevProps: t } = this.node, n = ["amount", "margin", "root"].some(function(e) { let { viewport: t = {} } = e, { viewport: n = {} } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return e => t[e] !== n[e] }(e, t));
                    n && this.startObserver()
                }
                unmount() {}
            }
        },
        tap: {
            Feature: class extends Ct {
                constructor() {
                    super(...arguments), this.removeStartListeners = at, this.removeEndListeners = at, this.removeAccessibleListeners = at, this.startPointerPress = (e, t) => {
                        if (this.isPressing) return;
                        this.removeEndListeners();
                        const n = this.node.getProps(),
                            r = gt(window, "pointerup", ((e, t) => {
                                if (!this.checkPressEnd()) return;
                                const { onTap: n, onTapCancel: r, globalTapTarget: i } = this.node.getProps(), a = i || St(this.node.current, e.target) ? n : r;
                                a && st.update((() => a(e, t)))
                            }), { passive: !(n.onTap || n.onPointerUp) }),
                            i = gt(window, "pointercancel", ((e, t) => this.cancelPress(e, t)), { passive: !(n.onTapCancel || n.onPointerCancel) });
                        this.removeEndListeners = yt(r, i), this.startPress(e, t)
                    }, this.startAccessiblePress = () => {
                        const e = ht(this.node.current, "keydown", (e => {
                                if ("Enter" !== e.key || this.isPressing) return;
                                this.removeEndListeners(), this.removeEndListeners = ht(this.node.current, "keyup", (e => {
                                    "Enter" === e.key && this.checkPressEnd() && kt("up", ((e, t) => {
                                        const { onTap: n } = this.node.getProps();
                                        n && st.postRender((() => n(e, t)))
                                    }))
                                })), kt("down", ((e, t) => { this.startPress(e, t) }))
                            })),
                            t = ht(this.node.current, "blur", (() => { this.isPressing && kt("cancel", ((e, t) => this.cancelPress(e, t))) }));
                        this.removeAccessibleListeners = yt(e, t)
                    }
                }
                startPress(e, t) {
                    this.isPressing = !0;
                    const { onTapStart: n, whileTap: r } = this.node.getProps();
                    r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && st.postRender((() => n(e, t)))
                }
                checkPressEnd() { this.removeEndListeners(), this.isPressing = !1; return this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !jt() }
                cancelPress(e, t) {
                    if (!this.checkPressEnd()) return;
                    const { onTapCancel: n } = this.node.getProps();
                    n && st.postRender((() => n(e, t)))
                }
                mount() {
                    const e = this.node.getProps(),
                        t = gt(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }),
                        n = ht(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = yt(t, n)
                }
                unmount() { this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners() }
            }
        },
        focus: {
            Feature: class extends Ct {
                constructor() { super(...arguments), this.isActive = !1 }
                onFocus() {
                    let e = !1;
                    try { e = this.node.current.matches(":focus-visible") } catch (t) { e = !0 }
                    e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() { this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1) }
                mount() { this.unmount = yt(ht(this.node.current, "focus", (() => this.onFocus())), ht(this.node.current, "blur", (() => this.onBlur()))) }
                unmount() {}
            }
        },
        hover: {
            Feature: class extends Ct {
                mount() { this.unmount = yt(Et(this.node, !0), Et(this.node, !1)) }
                unmount() {}
            }
        }
    };

    function Rt(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++)
            if (t[r] !== e[r]) return !1;
        return !0
    }

    function Lt(e, t, n) { const r = e.getProps(); return We(r, t, void 0 !== n ? n : r.custom, e) }
    const Mt = e => 1e3 * e,
        Ot = e => e / 1e3,
        Qt = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        Ut = { type: "keyframes", duration: .8 },
        zt = { type: "keyframes", ease: [.25, .1, .35, 1], duration: .3 },
        Vt = (e, t) => { let { keyframes: n } = t; return n.length > 2 ? Ut : G.has(e) ? e.startsWith("scale") ? { type: "spring", stiffness: 550, damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 } : Qt : zt };

    function Ht(e, t) { return e[t] || e.default || e }
    const Kt = !1,
        Wt = e => null !== e;

    function Yt(e, t, n) {
        let { repeat: r, repeatType: i = "loop" } = t;
        const a = e.filter(Wt),
            s = r && "loop" !== i && r % 2 === 1 ? 0 : a.length - 1;
        return s && void 0 !== n ? n : a[s]
    }
    const Gt = e => /^0[^.\s]+$/u.test(e);
    let Xt = at,
        qt = at;
    const _t = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        Jt = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

    function Zt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        qt(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [r, i] = function(e) { const t = Jt.exec(e); if (!t) return [, ]; const [, n, r, i] = t; return [`--${null!==n&&void 0!==n?n:r}`, i] }(e);
        if (!r) return;
        const a = window.getComputedStyle(t).getPropertyValue(r);
        if (a) { const e = a.trim(); return _t(e) ? parseFloat(e) : e }
        return be(i) ? Zt(i, t, n + 1) : i
    }
    const $t = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        en = e => e === Z || e === ue,
        tn = (e, t) => parseFloat(e.split(", ")[t]),
        nn = (e, t) => (n, r) => { let { transform: i } = r; if ("none" === i || !i) return 0; const a = i.match(/^matrix3d\((.+)\)$/u); if (a) return tn(a[1], t); { const t = i.match(/^matrix\((.+)\)$/u); return t ? tn(t[1], e) : 0 } },
        rn = new Set(["x", "y", "z"]),
        an = Y.filter((e => !rn.has(e)));
    const sn = { width: (e, t) => { let { x: n } = e, { paddingLeft: r = "0", paddingRight: i = "0" } = t; return n.max - n.min - parseFloat(r) - parseFloat(i) }, height: (e, t) => { let { y: n } = e, { paddingTop: r = "0", paddingBottom: i = "0" } = t; return n.max - n.min - parseFloat(r) - parseFloat(i) }, top: (e, t) => { let { top: n } = t; return parseFloat(n) }, left: (e, t) => { let { left: n } = t; return parseFloat(n) }, bottom: (e, t) => { let { y: n } = e, { top: r } = t; return parseFloat(r) + (n.max - n.min) }, right: (e, t) => { let { x: n } = e, { left: r } = t; return parseFloat(r) + (n.max - n.min) }, x: nn(4, 13), y: nn(5, 14) };
    sn.translateX = sn.x, sn.translateY = sn.y;
    const on = e => t => t.test(e),
        ln = [Z, ue, le, oe, de, ce, { test: e => "auto" === e, parse: e => e }],
        un = e => ln.find(on(e)),
        cn = new Set;
    let dn = !1,
        hn = !1;

    function fn() {
        if (hn) {
            const e = Array.from(cn).filter((e => e.needsMeasurement)),
                t = new Set(e.map((e => e.element))),
                n = new Map;
            t.forEach((e => {
                const t = function(e) {
                    const t = [];
                    return an.forEach((n => {
                        const r = e.getValue(n);
                        void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                    })), t
                }(e);
                t.length && (n.set(e, t), e.render())
            })), e.forEach((e => e.measureInitialState())), t.forEach((e => {
                e.render();
                const t = n.get(e);
                t && t.forEach((t => {
                    let [n, r] = t;
                    var i;
                    null === (i = e.getValue(n)) || void 0 === i || i.set(r)
                }))
            })), e.forEach((e => e.measureEndState())), e.forEach((e => { void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY) }))
        }
        hn = !1, dn = !1, cn.forEach((e => e.complete())), cn.clear()
    }

    function pn() { cn.forEach((e => { e.readKeyframes(), e.needsMeasurement && (hn = !0) })) }
    class mn {
        constructor(e, t, n, r, i) {
            let a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a
        }
        scheduleResolve() { this.isScheduled = !0, this.isAsync ? (cn.add(this), dn || (dn = !0, st.read(pn), st.resolveKeyframes(fn))) : (this.readKeyframes(), this.complete()) }
        readKeyframes() {
            const { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
            for (let i = 0; i < e.length; i++)
                if (null === e[i])
                    if (0 === i) {
                        const i = null === r || void 0 === r ? void 0 : r.get(),
                            a = e[e.length - 1];
                        if (void 0 !== i) e[0] = i;
                        else if (n && t) {
                            const r = n.readValue(t, a);
                            void 0 !== r && null !== r && (e[0] = r)
                        }
                        void 0 === e[0] && (e[0] = a), r && void 0 === i && r.set(e[0])
                    } else e[i] = e[i - 1]
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() { this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), cn.delete(this) }
        cancel() { this.isComplete || (this.isScheduled = !1, cn.delete(this)) }
        resume() { this.isComplete || this.scheduleResolve() }
    }
    const gn = (e, t) => n => Boolean(ae(n) && ie.test(n) && n.startsWith(e) || t && ! function(e) { return null == e }(n) && Object.prototype.hasOwnProperty.call(n, t)),
        vn = (e, t, n) => r => {
            if (!ae(r)) return r;
            const [i, a, s, o] = r.match(ne);
            return {
                [e]: parseFloat(i),
                [t]: parseFloat(a),
                [n]: parseFloat(s),
                alpha: void 0 !== o ? parseFloat(o) : 1
            }
        },
        yn = {...Z, transform: e => Math.round((e => J(0, 255, e))(e)) },
        xn = { test: gn("rgb", "red"), parse: vn("red", "green", "blue"), transform: e => { let { red: t, green: n, blue: r, alpha: i = 1 } = e; return "rgba(" + yn.transform(t) + ", " + yn.transform(n) + ", " + yn.transform(r) + ", " + te($.transform(i)) + ")" } };
    const bn = {
            test: gn("#"),
            parse: function(e) {
                let t = "",
                    n = "",
                    r = "",
                    i = "";
                return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
            },
            transform: xn.transform
        },
        wn = { test: gn("hsl", "hue"), parse: vn("hue", "saturation", "lightness"), transform: e => { let { hue: t, saturation: n, lightness: r, alpha: i = 1 } = e; return "hsla(" + Math.round(t) + ", " + le.transform(te(n)) + ", " + le.transform(te(r)) + ", " + te($.transform(i)) + ")" } },
        An = { test: e => xn.test(e) || bn.test(e) || wn.test(e), parse: e => xn.test(e) ? xn.parse(e) : wn.test(e) ? wn.parse(e) : bn.parse(e), transform: e => ae(e) ? e : e.hasOwnProperty("red") ? xn.transform(e) : wn.transform(e) };
    const jn = "number",
        Cn = "color",
        En = "var",
        Sn = "var(",
        kn = "${}",
        Pn = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function Nn(e) {
        const t = e.toString(),
            n = [],
            r = { color: [], number: [], var: [] },
            i = [];
        let a = 0;
        const s = t.replace(Pn, (e => (An.test(e) ? (r.color.push(a), i.push(Cn), n.push(An.parse(e))) : e.startsWith(Sn) ? (r.var.push(a), i.push(En), n.push(e)) : (r.number.push(a), i.push(jn), n.push(parseFloat(e))), ++a, kn))).split(kn);
        return { values: n, split: s, indexes: r, types: i }
    }

    function Tn(e) { return Nn(e).values }

    function Bn(e) {
        const { split: t, types: n } = Nn(e), r = t.length;
        return e => {
            let i = "";
            for (let a = 0; a < r; a++)
                if (i += t[a], void 0 !== e[a]) {
                    const t = n[a];
                    i += t === jn ? te(e[a]) : t === Cn ? An.transform(e[a]) : e[a]
                }
            return i
        }
    }
    const In = e => "number" === typeof e ? 0 : e;
    const Dn = { test: function(e) { var t, n; return isNaN(e) && ae(e) && ((null === (t = e.match(ne)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(re)) || void 0 === n ? void 0 : n.length) || 0) > 0 }, parse: Tn, createTransformer: Bn, getAnimatableNone: function(e) { const t = Tn(e); return Bn(e)(t.map(In)) } },
        Fn = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function Rn(e) { const [t, n] = e.slice(0, -1).split("("); if ("drop-shadow" === t) return e; const [r] = n.match(ne) || []; if (!r) return e; const i = n.replace(r, ""); let a = Fn.has(t) ? 1 : 0; return r !== n && (a *= 100), t + "(" + a + i + ")" }
    const Ln = /\b([a-z-]*)\(.*?\)/gu,
        Mn = {...Dn, getAnimatableNone: e => { const t = e.match(Ln); return t ? t.map(Rn).join(" ") : e } },
        On = {...pe, color: An, backgroundColor: An, outlineColor: An, fill: An, stroke: An, borderColor: An, borderTopColor: An, borderRightColor: An, borderBottomColor: An, borderLeftColor: An, filter: Mn, WebkitFilter: Mn },
        Qn = e => On[e];

    function Un(e, t) { let n = Qn(e); return n !== Mn && (n = Dn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0 }
    const zn = new Set(["auto", "none", "0"]);
    class Vn extends mn {
        constructor(e, t, n, r, i) { super(e, t, n, r, i, !0) }
        readKeyframes() {
            const { unresolvedKeyframes: e, element: t, name: n } = this;
            if (!t || !t.current) return;
            super.readKeyframes();
            for (let o = 0; o < e.length; o++) {
                let n = e[o];
                if ("string" === typeof n && (n = n.trim(), be(n))) {
                    const r = Zt(n, t.current);
                    void 0 !== r && (e[o] = r), o === e.length - 1 && (this.finalKeyframe = n)
                }
            }
            if (this.resolveNoneKeyframes(), !$t.has(n) || 2 !== e.length) return;
            const [r, i] = e, a = un(r), s = un(i);
            if (a !== s)
                if (en(a) && en(s))
                    for (let o = 0; o < e.length; o++) { const t = e[o]; "string" === typeof t && (e[o] = parseFloat(t)) } else this.needsMeasurement = !0
        }
        resolveNoneKeyframes() {
            const { unresolvedKeyframes: e, name: t } = this, n = [];
            for (let i = 0; i < e.length; i++)("number" === typeof(r = e[i]) ? 0 === r : null === r || "none" === r || "0" === r || Gt(r)) && n.push(i);
            var r;
            n.length && function(e, t, n) {
                let r, i = 0;
                for (; i < e.length && !r;) { const t = e[i]; "string" === typeof t && !zn.has(t) && Nn(t).values.length && (r = e[i]), i++ }
                if (r && n)
                    for (const a of t) e[a] = Un(n, r)
            }(e, n, t)
        }
        measureInitialState() {
            const { element: e, unresolvedKeyframes: t, name: n } = this;
            if (!e || !e.current) return;
            "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = sn[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
            const r = t[t.length - 1];
            void 0 !== r && e.getValue(n, r).jump(r, !1)
        }
        measureEndState() {
            var e;
            const { element: t, name: n, unresolvedKeyframes: r } = this;
            if (!t || !t.current) return;
            const i = t.getValue(n);
            i && i.jump(this.measuredOrigin, !1);
            const a = r.length - 1,
                s = r[a];
            r[a] = sn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach((e => {
                let [n, r] = e;
                t.getValue(n).set(r)
            })), this.resolveNoneKeyframes()
        }
    }

    function Hn(e) { let t; return () => (void 0 === t && (t = e()), t) }
    let Kn;

    function Wn() { Kn = void 0 }
    const Yn = { now: () => (void 0 === Kn && Yn.set(lt.isProcessing || g ? lt.timestamp : performance.now()), Kn), set: e => { Kn = e, queueMicrotask(Wn) } },
        Gn = (e, t) => "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !Dn.test(e) && "0" !== e || e.startsWith("url(")));
    class Xn {
        constructor(e) {
            let { autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", ...o } = e;
            this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Yn.now(), this.options = { autoplay: t, delay: n, type: r, repeat: i, repeatDelay: a, repeatType: s, ...o }, this.updateFinishedPromise()
        }
        calcStartTime() { return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt }
        get resolved() { return this._resolved || this.hasAttemptedResolve || (pn(), fn()), this._resolved }
        onKeyframesResolved(e, t) {
            this.resolvedAt = Yn.now(), this.hasAttemptedResolve = !0;
            const { name: n, type: r, velocity: i, delay: a, onComplete: s, onUpdate: o, isGenerator: l } = this.options;
            if (!l && ! function(e, t, n, r) {
                    const i = e[0];
                    if (null === i) return !1;
                    if ("display" === t || "visibility" === t) return !0;
                    const a = e[e.length - 1],
                        s = Gn(i, t),
                        o = Gn(a, t);
                    return Xt(s === o, `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`), !(!s || !o) && (function(e) {
                        const t = e[0];
                        if (1 === e.length) return !0;
                        for (let n = 0; n < e.length; n++)
                            if (e[n] !== t) return !0
                    }(e) || "spring" === n && r)
                }(e, n, r, i)) {
                if (Kt || !a) return null === o || void 0 === o || o(Yt(e, this.options, t)), null === s || void 0 === s || s(), void this.resolveFinishedPromise();
                this.options.duration = 0
            }
            const u = this.initPlayback(e, t);
            !1 !== u && (this._resolved = { keyframes: e, finalKeyframe: t, ...u }, this.onPostResolved())
        }
        onPostResolved() {}
        then(e, t) { return this.currentFinishedPromise.then(e, t) }
        updateFinishedPromise() { this.currentFinishedPromise = new Promise((e => { this.resolveFinishedPromise = e })) }
    }

    function qn(e, t) { return t ? e * (1e3 / t) : 0 }
    const _n = 5;

    function Jn(e, t, n) { const r = Math.max(t - _n, 0); return qn(n - e(r), t - r) }
    const Zn = .001,
        $n = .01,
        er = 10,
        tr = .05,
        nr = 1;

    function rr(e) {
        let t, n, { duration: r = 800, bounce: i = .25, velocity: a = 0, mass: s = 1 } = e;
        Xt(r <= Mt(er), "Spring duration must be 10 seconds or less");
        let o = 1 - i;
        o = J(tr, nr, o), r = J($n, er, Ot(r)), o < 1 ? (t = e => {
            const t = e * o,
                n = t * r,
                i = t - a,
                s = ar(e, o),
                l = Math.exp(-n);
            return Zn - i / s * l
        }, n = e => {
            const n = e * o * r,
                i = n * a + a,
                s = Math.pow(o, 2) * Math.pow(e, 2) * r,
                l = Math.exp(-n),
                u = ar(Math.pow(e, 2), o);
            return (-t(e) + Zn > 0 ? -1 : 1) * ((i - s) * l) / u
        }) : (t = e => Math.exp(-e * r) * ((e - a) * r + 1) - Zn, n = e => Math.exp(-e * r) * (r * r * (a - e)));
        const l = function(e, t, n) { let r = n; for (let i = 1; i < ir; i++) r -= e(r) / t(r); return r }(t, n, 5 / r);
        if (r = Mt(r), isNaN(l)) return { stiffness: 100, damping: 10, duration: r }; { const e = Math.pow(l, 2) * s; return { stiffness: e, damping: 2 * o * Math.sqrt(s * e), duration: r } }
    }
    const ir = 12;

    function ar(e, t) { return e * Math.sqrt(1 - t * t) }
    const sr = ["duration", "bounce"],
        or = ["stiffness", "damping", "mass"];

    function lr(e, t) { return t.some((t => void 0 !== e[t])) }

    function ur(e) {
        let { keyframes: t, restDelta: n, restSpeed: r, ...i } = e;
        const a = t[0],
            s = t[t.length - 1],
            o = { done: !1, value: a },
            { stiffness: l, damping: u, mass: c, duration: d, velocity: h, isResolvedFromDuration: f } = function(e) {
                let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
                if (!lr(e, or) && lr(e, sr)) {
                    const n = rr(e);
                    t = {...t, ...n, mass: 1 }, t.isResolvedFromDuration = !0
                }
                return t
            }({...i, velocity: -Ot(i.velocity || 0) }),
            p = h || 0,
            m = u / (2 * Math.sqrt(l * c)),
            g = s - a,
            v = Ot(Math.sqrt(l / c)),
            y = Math.abs(g) < 5;
        let x;
        if (r || (r = y ? .01 : 2), n || (n = y ? .005 : .5), m < 1) {
            const e = ar(v, m);
            x = t => { const n = Math.exp(-m * v * t); return s - n * ((p + m * v * g) / e * Math.sin(e * t) + g * Math.cos(e * t)) }
        } else if (1 === m) x = e => s - Math.exp(-v * e) * (g + (p + v * g) * e);
        else {
            const e = v * Math.sqrt(m * m - 1);
            x = t => {
                const n = Math.exp(-m * v * t),
                    r = Math.min(e * t, 300);
                return s - n * ((p + m * v * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e
            }
        }
        return {
            calculatedDuration: f && d || null,
            next: e => {
                const t = x(e);
                if (f) o.done = e >= d;
                else {
                    let i = 0;
                    m < 1 && (i = 0 === e ? Mt(p) : Jn(x, e, t));
                    const a = Math.abs(i) <= r,
                        l = Math.abs(s - t) <= n;
                    o.done = a && l
                }
                return o.value = o.done ? s : t, o
            }
        }
    }

    function cr(e) {
        let { keyframes: t, velocity: n = 0, power: r = .8, timeConstant: i = 325, bounceDamping: a = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: u, restDelta: c = .5, restSpeed: d } = e;
        const h = t[0],
            f = { done: !1, value: h },
            p = e => void 0 === l ? u : void 0 === u || Math.abs(l - e) < Math.abs(u - e) ? l : u;
        let m = r * n;
        const g = h + m,
            v = void 0 === o ? g : o(g);
        v !== g && (m = v - h);
        const y = e => -m * Math.exp(-e / i),
            x = e => v + y(e),
            b = e => {
                const t = y(e),
                    n = x(e);
                f.done = Math.abs(t) <= c, f.value = f.done ? v : n
            };
        let w, A;
        const j = e => {
            var t;
            (t = f.value, void 0 !== l && t < l || void 0 !== u && t > u) && (w = e, A = ur({ keyframes: [f.value, p(f.value)], velocity: Jn(x, e, f.value), damping: a, stiffness: s, restDelta: c, restSpeed: d }))
        };
        return j(0), { calculatedDuration: null, next: e => { let t = !1; return A || void 0 !== w || (t = !0, b(e), j(e)), void 0 !== w && e >= w ? A.next(e - w) : (!t && b(e), f) } }
    }
    const dr = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
        hr = 1e-7,
        fr = 12;

    function pr(e, t, n, r) {
        if (e === t && n === r) return at;
        const i = t => function(e, t, n, r, i) {
            let a, s, o = 0;
            do { s = t + (n - t) / 2, a = dr(s, r, i) - e, a > 0 ? n = s : t = s } while (Math.abs(a) > hr && ++o < fr);
            return s
        }(t, 0, 1, e, n);
        return e => 0 === e || 1 === e ? e : dr(i(e), t, r)
    }
    const mr = pr(.42, 0, 1, 1),
        gr = pr(0, 0, .58, 1),
        vr = pr(.42, 0, .58, 1),
        yr = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        xr = e => t => 1 - e(1 - t),
        br = e => 1 - Math.sin(Math.acos(e)),
        wr = xr(br),
        Ar = yr(br),
        jr = pr(.33, 1.53, .69, .99),
        Cr = xr(jr),
        Er = yr(Cr),
        Sr = { linear: at, easeIn: mr, easeInOut: vr, easeOut: gr, circIn: br, circInOut: Ar, circOut: wr, backIn: Cr, backInOut: Er, backOut: jr, anticipate: e => (e *= 2) < 1 ? .5 * Cr(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))) },
        kr = e => { if (Array.isArray(e)) { qt(4 === e.length, "Cubic bezier arrays must contain four numerical values."); const [t, n, r, i] = e; return pr(t, n, r, i) } return "string" === typeof e ? (qt(void 0 !== Sr[e], `Invalid easing type '${e}'`), Sr[e]) : e },
        Pr = (e, t, n) => { const r = t - e; return 0 === r ? 1 : (n - e) / r },
        Nr = (e, t, n) => e + (t - e) * n;

    function Tr(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e }

    function Br(e, t) { return n => n > 0 ? t : e }
    const Ir = (e, t, n) => {
            const r = e * e,
                i = n * (t * t - r) + r;
            return i < 0 ? 0 : Math.sqrt(i)
        },
        Dr = [bn, xn, wn];

    function Fr(e) {
        const t = (n = e, Dr.find((e => e.test(n))));
        var n;
        if (Xt(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`), !Boolean(t)) return !1;
        let r = t.parse(e);
        return t === wn && (r = function(e) {
            let { hue: t, saturation: n, lightness: r, alpha: i } = e;
            t /= 360, n /= 100, r /= 100;
            let a = 0,
                s = 0,
                o = 0;
            if (n) {
                const e = r < .5 ? r * (1 + n) : r + n - r * n,
                    i = 2 * r - e;
                a = Tr(i, e, t + 1 / 3), s = Tr(i, e, t), o = Tr(i, e, t - 1 / 3)
            } else a = s = o = r;
            return { red: Math.round(255 * a), green: Math.round(255 * s), blue: Math.round(255 * o), alpha: i }
        }(r)), r
    }
    const Rr = (e, t) => {
            const n = Fr(e),
                r = Fr(t);
            if (!n || !r) return Br(e, t);
            const i = {...n };
            return e => (i.red = Ir(n.red, r.red, e), i.green = Ir(n.green, r.green, e), i.blue = Ir(n.blue, r.blue, e), i.alpha = Nr(n.alpha, r.alpha, e), xn.transform(i))
        },
        Lr = new Set(["none", "hidden"]);

    function Mr(e, t) { return n => Nr(e, t, n) }

    function Or(e) { return "number" === typeof e ? Mr : "string" === typeof e ? be(e) ? Br : An.test(e) ? Rr : zr : Array.isArray(e) ? Qr : "object" === typeof e ? An.test(e) ? Rr : Ur : Br }

    function Qr(e, t) {
        const n = [...e],
            r = n.length,
            i = e.map(((e, n) => Or(e)(e, t[n])));
        return e => { for (let t = 0; t < r; t++) n[t] = i[t](e); return n }
    }

    function Ur(e, t) {
        const n = {...e, ...t },
            r = {};
        for (const i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = Or(e[i])(e[i], t[i]));
        return e => { for (const t in r) n[t] = r[t](e); return n }
    }
    const zr = (e, t) => {
        const n = Dn.createTransformer(t),
            r = Nn(e),
            i = Nn(t);
        return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Lr.has(e) && !i.values.length || Lr.has(t) && !r.values.length ? function(e, t) { return Lr.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e }(e, t) : yt(Qr(function(e, t) {
            var n;
            const r = [],
                i = { color: 0, var: 0, number: 0 };
            for (let a = 0; a < t.values.length; a++) {
                const s = t.types[a],
                    o = e.indexes[s][i[s]],
                    l = null !== (n = e.values[o]) && void 0 !== n ? n : 0;
                r[a] = l, i[s]++
            }
            return r
        }(r, i), i.values), n) : (Xt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Br(e, t))
    };

    function Vr(e, t, n) { if ("number" === typeof e && "number" === typeof t && "number" === typeof n) return Nr(e, t, n); return Or(e)(e, t) }

    function Hr(e, t) {
        let { clamp: n = !0, ease: r, mixer: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const a = e.length;
        if (qt(a === t.length, "Both input and output ranges must be the same length"), 1 === a) return () => t[0];
        if (2 === a && e[0] === e[1]) return () => t[1];
        e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const s = function(e, t, n) {
                const r = [],
                    i = n || Vr,
                    a = e.length - 1;
                for (let s = 0; s < a; s++) {
                    let n = i(e[s], e[s + 1]);
                    if (t) {
                        const e = Array.isArray(t) ? t[s] || at : t;
                        n = yt(e, n)
                    }
                    r.push(n)
                }
                return r
            }(t, r, i),
            o = s.length,
            l = t => {
                let n = 0;
                if (o > 1)
                    for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                const r = Pr(e[n], e[n + 1], t);
                return s[n](r)
            };
        return n ? t => l(J(e[0], e[a - 1], t)) : l
    }

    function Kr(e) {
        const t = [0];
        return function(e, t) {
            const n = e[e.length - 1];
            for (let r = 1; r <= t; r++) {
                const i = Pr(0, t, r);
                e.push(Nr(n, 1, i))
            }
        }(t, e.length - 1), t
    }

    function Wr(e) {
        let { duration: t = 300, keyframes: n, times: r, ease: i = "easeInOut" } = e;
        const a = (e => Array.isArray(e) && "number" !== typeof e[0])(i) ? i.map(kr) : kr(i),
            s = { done: !1, value: n[0] },
            o = function(e, t) { return e.map((e => e * t)) }(r && r.length === n.length ? r : Kr(n), t),
            l = Hr(o, n, { ease: Array.isArray(a) ? a : (u = n, c = a, u.map((() => c || vr)).splice(0, u.length - 1)) });
        var u, c;
        return { calculatedDuration: t, next: e => (s.value = l(e), s.done = e >= t, s) }
    }
    const Yr = e => { const t = t => { let { timestamp: n } = t; return e(n) }; return { start: () => st.update(t, !0), stop: () => ot(t), now: () => lt.isProcessing ? lt.timestamp : Yn.now() } },
        Gr = { decay: cr, inertia: cr, tween: Wr, keyframes: Wr, spring: ur },
        Xr = e => e / 100;
    class qr extends Xn {
        constructor(e) {
            super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                this.teardown();
                const { onStop: e } = this.options;
                e && e()
            };
            const { name: t, motionValue: n, element: r, keyframes: i } = this.options, a = (null === r || void 0 === r ? void 0 : r.KeyframeResolver) || mn;
            this.resolver = new a(i, ((e, t) => this.onKeyframesResolved(e, t)), t, n, r), this.resolver.scheduleResolve()
        }
        initPlayback(e) {
            const { type: t = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = this.options, s = Gr[t] || Wr;
            let o, l;
            s !== Wr && "number" !== typeof e[0] && (o = yt(Xr, Vr(e[0], e[1])), e = [0, 100]);
            const u = s({...this.options, keyframes: e });
            "mirror" === i && (l = s({...this.options, keyframes: [...e].reverse(), velocity: -a })), null === u.calculatedDuration && (u.calculatedDuration = function(e) {
                let t = 0,
                    n = e.next(t);
                for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
                return t >= 2e4 ? 1 / 0 : t
            }(u));
            const { calculatedDuration: c } = u, d = c + r;
            return { generator: u, mirroredGenerator: l, mapPercentToKeyframes: o, calculatedDuration: c, resolvedDuration: d, totalDuration: d * (n + 1) - r }
        }
        onPostResolved() {
            const { autoplay: e = !0 } = this.options;
            this.play(), "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
        }
        tick(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const { resolved: n } = this;
            if (!n) { const { keyframes: e } = this.options; return { done: !0, value: e[e.length - 1] } }
            const { finalKeyframe: r, generator: i, mirroredGenerator: a, mapPercentToKeyframes: s, keyframes: o, calculatedDuration: l, totalDuration: u, resolvedDuration: c } = n;
            if (null === this.startTime) return i.next(0);
            const { delay: d, repeat: h, repeatType: f, repeatDelay: p, onUpdate: m } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
            const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                v = this.speed >= 0 ? g < 0 : g > u;
            this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
            let y = this.currentTime,
                x = i;
            if (h) {
                const e = Math.min(this.currentTime, u) / c;
                let t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, h + 1);
                Boolean(t % 2) && ("reverse" === f ? (n = 1 - n, p && (n -= p / c)) : "mirror" === f && (x = a)), y = J(0, 1, n) * c
            }
            const b = v ? { done: !1, value: o[0] } : x.next(y);
            s && (b.value = s(b.value));
            let { done: w } = b;
            v || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
            const A = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
            return A && void 0 !== r && (b.value = Yt(o, this.options, r)), m && m(b.value), A && this.finish(), b
        }
        get duration() { const { resolved: e } = this; return e ? Ot(e.calculatedDuration) : 0 }
        get time() { return Ot(this.currentTime) }
        set time(e) { e = Mt(e), this.currentTime = e, null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed) }
        get speed() { return this.playbackSpeed }
        set speed(e) {
            const t = this.playbackSpeed !== e;
            this.playbackSpeed = e, t && (this.time = Ot(this.currentTime))
        }
        play() {
            if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) return void(this.pendingPlayState = "running");
            if (this.isStopped) return;
            const { driver: e = Yr, onPlay: t, startTime: n } = this.options;
            this.driver || (this.driver = e((e => this.tick(e)))), t && t();
            const r = this.driver.now();
            null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r) : this.startTime = null !== n && void 0 !== n ? n : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            var e;
            this._resolved ? (this.state = "paused", this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0) : this.pendingPlayState = "paused"
        }
        complete() { "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null }
        finish() {
            this.teardown(), this.state = "finished";
            const { onComplete: e } = this.options;
            e && e()
        }
        cancel() { null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise() }
        teardown() { this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel() }
        stopDriver() { this.driver && (this.driver.stop(), this.driver = void 0) }
        sample(e) { return this.startTime = 0, this.tick(e, !0) }
    }
    const _r = e => Array.isArray(e) && "number" === typeof e[0];

    function Jr(e) { return Boolean(!e || "string" === typeof e && e in $r || _r(e) || Array.isArray(e) && e.every(Jr)) }
    const Zr = e => { let [t, n, r, i] = e; return `cubic-bezier(${t}, ${n}, ${r}, ${i})` },
        $r = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: Zr([0, .65, .55, 1]), circOut: Zr([.55, 0, 1, .45]), backIn: Zr([.31, .01, .66, -.59]), backOut: Zr([.33, 1.53, .69, .99]) };

    function ei(e) { return ti(e) || $r.easeOut }

    function ti(e) { return e ? _r(e) ? Zr(e) : Array.isArray(e) ? e.map(ei) : $r[e] : void 0 }
    const ni = Hn((() => Object.hasOwnProperty.call(Element.prototype, "animate")));
    class ri extends Xn {
        constructor(e) {
            super(e);
            const { name: t, motionValue: n, element: r, keyframes: i } = this.options;
            this.resolver = new Vn(i, ((e, t) => this.onKeyframesResolved(e, t)), t, n, r), this.resolver.scheduleResolve()
        }
        initPlayback(e, t) {
            var n;
            let { duration: r = 300, times: i, ease: a, type: s, motionValue: o, name: l, startTime: u } = this.options;
            if (!(null === (n = o.owner) || void 0 === n ? void 0 : n.current)) return !1;
            if ("spring" === (c = this.options).type || !Jr(c.ease)) {
                const { onComplete: t, onUpdate: n, motionValue: o, element: l, ...u } = this.options, c = function(e, t) { const n = new qr({...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }); let r = { done: !1, value: e[0] }; const i = []; let a = 0; for (; !r.done && a < 2e4;) r = n.sample(a), i.push(r.value), a += 10; return { times: void 0, keyframes: i, duration: a - 10, ease: "linear" } }(e, u);
                1 === (e = c.keyframes).length && (e[1] = e[0]), r = c.duration, i = c.times, a = c.ease, s = "keyframes"
            }
            var c;
            const d = function(e, t, n) {
                let { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: s = "loop", ease: o, times: l } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                const u = {
                    [t]: n
                };
                l && (u.offset = l);
                const c = ti(o);
                return Array.isArray(c) && (u.easing = c), e.animate(u, { delay: r, duration: i, easing: Array.isArray(c) ? "linear" : c, fill: "both", iterations: a + 1, direction: "reverse" === s ? "alternate" : "normal" })
            }(o.owner.current, l, e, {...this.options, duration: r, times: i, ease: a });
            return d.startTime = null !== u && void 0 !== u ? u : this.calcStartTime(), this.pendingTimeline ? (d.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : d.onfinish = () => {
                const { onComplete: n } = this.options;
                o.set(Yt(e, this.options, t)), n && n(), this.cancel(), this.resolveFinishedPromise()
            }, { animation: d, duration: r, times: i, type: s, ease: a, keyframes: e }
        }
        get duration() { const { resolved: e } = this; if (!e) return 0; const { duration: t } = e; return Ot(t) }
        get time() { const { resolved: e } = this; if (!e) return 0; const { animation: t } = e; return Ot(t.currentTime || 0) }
        set time(e) {
            const { resolved: t } = this;
            if (!t) return;
            const { animation: n } = t;
            n.currentTime = Mt(e)
        }
        get speed() { const { resolved: e } = this; if (!e) return 1; const { animation: t } = e; return t.playbackRate }
        set speed(e) {
            const { resolved: t } = this;
            if (!t) return;
            const { animation: n } = t;
            n.playbackRate = e
        }
        get state() { const { resolved: e } = this; if (!e) return "idle"; const { animation: t } = e; return t.playState }
        get startTime() { const { resolved: e } = this; if (!e) return null; const { animation: t } = e; return t.startTime }
        attachTimeline(e) {
            if (this._resolved) {
                const { resolved: t } = this;
                if (!t) return at;
                const { animation: n } = t;
                n.timeline = e, n.onfinish = null
            } else this.pendingTimeline = e;
            return at
        }
        play() { if (this.isStopped) return; const { resolved: e } = this; if (!e) return; const { animation: t } = e; "finished" === t.playState && this.updateFinishedPromise(), t.play() }
        pause() {
            const { resolved: e } = this;
            if (!e) return;
            const { animation: t } = e;
            t.pause()
        }
        stop() {
            if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
            this.resolveFinishedPromise(), this.updateFinishedPromise();
            const { resolved: e } = this;
            if (!e) return;
            const { animation: t, keyframes: n, duration: r, type: i, ease: a, times: s } = e;
            if ("idle" === t.playState || "finished" === t.playState) return;
            if (this.time) {
                const { motionValue: e, onUpdate: t, onComplete: o, element: l, ...u } = this.options, c = new qr({...u, keyframes: n, duration: r, type: i, ease: a, times: s, isGenerator: !0 }), d = Mt(this.time);
                e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
            }
            const { onStop: o } = this.options;
            o && o(), this.cancel()
        }
        complete() {
            const { resolved: e } = this;
            e && e.animation.finish()
        }
        cancel() {
            const { resolved: e } = this;
            e && e.animation.cancel()
        }
        static supports(e) { const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: s } = e; return ni() && n && Je.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && "mirror" !== i && 0 !== a && "inertia" !== s }
    }
    const ii = Hn((() => void 0 !== window.ScrollTimeline));
    class ai {
        constructor(e) { this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean) }
        then(e, t) { return Promise.all(this.animations).then(e).catch(t) }
        getAll(e) { return this.animations[0][e] }
        setAll(e, t) { for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t }
        attachTimeline(e) {
            const t = this.animations.map((t => {
                if (!ii() || !t.attachTimeline) return t.pause(),
                    function(e, t) {
                        let n;
                        const r = () => {
                            const { currentTime: r } = t, i = (null === r ? 0 : r.value) / 100;
                            n !== i && e(i), n = i
                        };
                        return st.update(r, !0), () => ot(r)
                    }((e => { t.time = t.duration * e }), e);
                t.attachTimeline(e)
            }));
            return () => { t.forEach(((e, t) => { e && e(), this.animations[t].stop() })) }
        }
        get time() { return this.getAll("time") }
        set time(e) { this.setAll("time", e) }
        get speed() { return this.getAll("speed") }
        set speed(e) { this.setAll("speed", e) }
        get startTime() { return this.getAll("startTime") }
        get duration() { let e = 0; for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration); return e }
        runAll(e) { this.animations.forEach((t => t[e]())) }
        play() { this.runAll("play") }
        pause() { this.runAll("pause") }
        cancel() { this.runAll("cancel") }
        complete() { this.runAll("complete") }
    }
    const si = function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = arguments.length > 4 ? arguments[4] : void 0,
            a = arguments.length > 5 ? arguments[5] : void 0,
            s = arguments.length > 6 ? arguments[6] : void 0;
        return o => {
            const l = Ht(r, e) || {},
                u = l.delay || r.delay || 0;
            let { elapsed: c = 0 } = r;
            c -= Mt(u);
            let d = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: t.getVelocity(), ...l, delay: -c, onUpdate: e => { t.set(e), l.onUpdate && l.onUpdate(e) }, onComplete: () => { o(), l.onComplete && l.onComplete(), s && s() }, onStop: s, name: e, motionValue: t, element: a ? void 0 : i };
            (function(e) { let { when: t, delay: n, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: s, repeatType: o, repeatDelay: l, from: u, elapsed: c, ...d } = e; return !!Object.keys(d).length })(l) || (d = {...d, ...Vt(e, d) }), d.duration && (d.duration = Mt(d.duration)), d.repeatDelay && (d.repeatDelay = Mt(d.repeatDelay)), void 0 !== d.from && (d.keyframes[0] = d.from);
            let h = !1;
            if ((!1 === d.type || 0 === d.duration && !d.repeatDelay) && (d.duration = 0, 0 === d.delay && (h = !0)), (Kt || m) && (h = !0, d.duration = 0, d.delay = 0), h && !a && void 0 !== t.get()) { const e = Yt(d.keyframes, l); if (void 0 !== e) return st.update((() => { d.onUpdate(e), d.onComplete() })), new ai([]) }
            return !a && ri.supports(d) ? new ri(d) : new qr(d)
        }
    };
    class oi {
        constructor() { this.subscriptions = [] }
        add(e) { return $e(this.subscriptions, e), () => et(this.subscriptions, e) }
        notify(e, t, n) {
            const r = this.subscriptions.length;
            if (r)
                if (1 === r) this.subscriptions[0](e, t, n);
                else
                    for (let i = 0; i < r; i++) {
                        const r = this.subscriptions[i];
                        r && r(e, t, n)
                    }
        }
        getSize() { return this.subscriptions.length }
        clear() { this.subscriptions.length = 0 }
    }
    const li = { current: void 0 };
    class ui {
        constructor(e) {
            var t = this;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.version = "11.3.30", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = function(e) {
                let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const r = Yn.now();
                t.updatedAt !== r && t.setPrevFrameValue(), t.prev = t.current, t.setCurrent(e), t.current !== t.prev && t.events.change && t.events.change.notify(t.current), n && t.events.renderRequest && t.events.renderRequest.notify(t.current)
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
        }
        setCurrent(e) {
            var t;
            this.current = e, this.updatedAt = Yn.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = (t = this.current, !isNaN(parseFloat(t))))
        }
        setPrevFrameValue() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) { return this.on("change", e) }
        on(e, t) { this.events[e] || (this.events[e] = new oi); const n = this.events[e].add(t); return "change" === e ? () => { n(), st.read((() => { this.events.change.getSize() || this.stop() })) } : n }
        clearListeners() { for (const e in this.events) this.events[e].clear() }
        attach(e, t) { this.passiveEffect = e, this.stopPassiveEffect = t }
        set(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        setWithVelocity(e, t, n) { this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n }
        jump(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() { return li.current && li.current.push(this), this.current }
        getPrevious() { return this.prev }
        getVelocity() { const e = Yn.now(); if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0; const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30); return qn(parseFloat(this.current) - parseFloat(this.prevFrameValue), t) }
        start(e) { return this.stop(), new Promise((t => { this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify() })).then((() => { this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation() })) }
        stop() { this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation() }
        isAnimating() { return !!this.animation }
        clearAnimation() { delete this.animation }
        destroy() { this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() }
    }

    function ci(e, t) { return new ui(e, t) }

    function di(e, t, n) { e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ci(n)) }

    function hi(e) { return e.getProps()[p] }
    class fi extends ui {
        constructor() { super(...arguments), this.output = [], this.counts = new Map }
        add(e) {
            const t = Ze(e);
            if (!t) return;
            const n = this.counts.get(t) || 0;
            this.counts.set(t, n + 1), 0 === n && (this.output.push(t), this.update());
            let r = !1;
            return () => {
                if (r) return;
                r = !0;
                const e = this.counts.get(t) - 1;
                this.counts.set(t, e), 0 === e && (et(this.output, t), this.update())
            }
        }
        update() { this.set(this.output.length ? this.output.join(", ") : "auto") }
    }

    function pi(e, t) { var n; if (!e.applyWillChange) return; let r = e.getValue("willChange"); return r || (null === (n = e.props.style) || void 0 === n ? void 0 : n.willChange) || (r = new fi("auto"), e.addValue("willChange", r)), i = r, Boolean(q(i) && i.add) ? r.add(t) : void 0; var i }

    function mi(e, t) { let { protectedKeys: n, needsAnimating: r } = e; const i = n.hasOwnProperty(t) && !0 !== r[t]; return r[t] = !1, i }

    function gi(e, t) {
        let { delay: n = 0, transitionOverride: r, type: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var a;
        let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...l } = t;
        r && (s = r);
        const u = [],
            c = i && e.animationState && e.animationState.getState()[i];
        for (const d in l) {
            const t = e.getValue(d, null !== (a = e.latestValues[d]) && void 0 !== a ? a : null),
                r = l[d];
            if (void 0 === r || c && mi(c, d)) continue;
            const i = { delay: n, ...Ht(s || {}, d) };
            let o = !1;
            if (window.MotionHandoffAnimation) {
                const t = hi(e);
                if (t) {
                    const e = window.MotionHandoffAnimation(t, d, st);
                    null !== e && (i.startTime = e, o = !0)
                }
            }
            t.start(si(d, t, r, e.shouldReduceMotion && G.has(d) ? { type: !1 } : i, e, o, pi(e, d)));
            const h = t.animation;
            h && u.push(h)
        }
        return o && Promise.all(u).then((() => {
            st.update((() => {
                o && function(e, t) {
                    const n = Lt(e, t);
                    let { transitionEnd: r = {}, transition: i = {}, ...a } = n || {};
                    a = {...a, ...r };
                    for (const s in a) di(e, s, qe(a[s]))
                }(e, o)
            }))
        })), u
    }

    function vi(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var r;
        const i = Lt(e, t, "exit" === n.type ? null === (r = e.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
        let { transition: a = e.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (a = n.transitionOverride);
        const s = i ? () => Promise.all(gi(e, i, n)) : () => Promise.resolve(),
            o = e.variantChildren && e.variantChildren.size ? function() {
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                const { delayChildren: i = 0, staggerChildren: s, staggerDirection: o } = a;
                return function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                        a = arguments.length > 5 ? arguments[5] : void 0;
                    const s = [],
                        o = (e.variantChildren.size - 1) * r,
                        l = 1 === i ? function() { return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r } : function() { return o - (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r };
                    return Array.from(e.variantChildren).sort(yi).forEach(((e, r) => { e.notify("AnimationStart", t), s.push(vi(e, t, {...a, delay: n + l(r) }).then((() => e.notify("AnimationComplete", t)))) })), Promise.all(s)
                }(e, t, i + r, s, o, n)
            } : () => Promise.resolve(),
            { when: l } = a;
        if (l) { const [e, t] = "beforeChildren" === l ? [s, o] : [o, s]; return e().then((() => t())) }
        return Promise.all([s(), o(n.delay)])
    }

    function yi(e, t) { return e.sortNodePosition(t) }
    const xi = [...T].reverse(),
        bi = T.length;

    function wi(e) {
        return t => Promise.all(t.map((t => {
            let { animation: n, options: r } = t;
            return function(e, t) {
                let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e.notify("AnimationStart", t), Array.isArray(t)) {
                    const i = t.map((t => vi(e, t, r)));
                    n = Promise.all(i)
                } else if ("string" === typeof t) n = vi(e, t, r);
                else {
                    const i = "function" === typeof t ? Lt(e, t, r.custom) : t;
                    n = Promise.all(gi(e, i, r))
                }
                return n.then((() => { e.notify("AnimationComplete", t) }))
            }(e, n, r)
        })))
    }

    function Ai(e, t) { return "string" === typeof t ? t !== e : !!Array.isArray(t) && !Rt(t, e) }

    function ji() { return { isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0], protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} } }

    function Ci() { return { animate: ji(!0), whileInView: ji(), whileHover: ji(), whileTap: ji(), whileDrag: ji(), whileFocus: ji(), exit: ji() } }
    let Ei = 0;
    const Si = {
            animation: {
                Feature: class extends Ct {
                    constructor(e) {
                        super(e), e.animationState || (e.animationState = function(e) {
                            let t = wi(e),
                                n = Ci(),
                                r = !0;
                            const i = t => (n, r) => {
                                var i;
                                const a = Lt(e, r, "exit" === t ? null === (i = e.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                                if (a) {
                                    const { transition: e, transitionEnd: t, ...r } = a;
                                    n = {...n, ...r, ...t }
                                }
                                return n
                            };

                            function a(a) {
                                const s = e.getProps(),
                                    o = e.getVariantContext(!0) || {},
                                    l = [],
                                    u = new Set;
                                let c = {},
                                    d = 1 / 0;
                                for (let t = 0; t < bi; t++) {
                                    const h = xi[t],
                                        f = n[h],
                                        p = void 0 !== s[h] ? s[h] : o[h],
                                        m = P(p),
                                        g = h === a ? f.isActive : null;
                                    !1 === g && (d = t);
                                    let v = p === o[h] && p !== s[h] && m;
                                    if (v && r && e.manuallyAnimateOnMount && (v = !1), f.protectedKeys = {...c }, !f.isActive && null === g || !p && !f.prevProp || N(p) || "boolean" === typeof p) continue;
                                    let y = Ai(f.prevProp, p) || h === a && f.isActive && !v && m || t > d && m,
                                        x = !1;
                                    const b = Array.isArray(p) ? p : [p];
                                    let w = b.reduce(i(h), {});
                                    !1 === g && (w = {});
                                    const { prevResolvedValues: A = {} } = f, j = {...A, ...w }, C = t => {
                                        y = !0, u.has(t) && (x = !0, u.delete(t)), f.needsAnimating[t] = !0;
                                        const n = e.getValue(t);
                                        n && (n.liveStyle = !1)
                                    };
                                    for (const e in j) {
                                        const t = w[e],
                                            n = A[e];
                                        if (c.hasOwnProperty(e)) continue;
                                        let r = !1;
                                        r = Ge(t) && Ge(n) ? !Rt(t, n) : t !== n, r ? void 0 !== t && null !== t ? C(e) : u.add(e) : void 0 !== t && u.has(e) ? C(e) : f.protectedKeys[e] = !0
                                    }
                                    f.prevProp = p, f.prevResolvedValues = w, f.isActive && (c = {...c, ...w }), r && e.blockInitialAnimation && (y = !1), !y || v && !x || l.push(...b.map((e => ({ animation: e, options: { type: h } }))))
                                }
                                if (u.size) {
                                    const t = {};
                                    u.forEach((n => {
                                        const r = e.getBaseTarget(n),
                                            i = e.getValue(n);
                                        i && (i.liveStyle = !0), t[n] = null !== r && void 0 !== r ? r : null
                                    })), l.push({ animation: t })
                                }
                                let h = Boolean(l.length);
                                return !r || !1 !== s.initial && s.initial !== s.animate || e.manuallyAnimateOnMount || (h = !1), r = !1, h ? t(l) : Promise.resolve()
                            }
                            return {
                                animateChanges: a,
                                setActive: function(t, r) {
                                    var i;
                                    if (n[t].isActive === r) return Promise.resolve();
                                    null === (i = e.variantChildren) || void 0 === i || i.forEach((e => { var n; return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r) })), n[t].isActive = r;
                                    const s = a(t);
                                    for (const e in n) n[e].protectedKeys = {};
                                    return s
                                },
                                setAnimateFunction: function(n) { t = n(e) },
                                getState: () => n,
                                reset: () => { n = Ci(), r = !0 }
                            }
                        }(e))
                    }
                    updateAnimationControlsSubscription() {
                        const { animate: e } = this.node.getProps();
                        N(e) && (this.unmountControls = e.subscribe(this.node))
                    }
                    mount() { this.updateAnimationControlsSubscription() }
                    update() {
                        const { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
                        e !== t && this.updateAnimationControlsSubscription()
                    }
                    unmount() {
                        var e;
                        this.node.animationState.reset(), null === (e = this.unmountControls) || void 0 === e || e.call(this)
                    }
                }
            },
            exit: {
                Feature: class extends Ct {
                    constructor() { super(...arguments), this.id = Ei++ }
                    update() {
                        if (!this.node.presenceContext) return;
                        const { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || e === n) return;
                        const r = this.node.animationState.setActive("exit", !e);
                        t && !e && r.then((() => t(this.id)))
                    }
                    mount() {
                        const { register: e } = this.node.presenceContext || {};
                        e && (this.unmount = e(this.id))
                    }
                    unmount() {}
                }
            }
        },
        ki = (e, t) => Math.abs(e - t);
    class Pi {
        constructor(e, t) {
            let { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                    const e = Bi(this.lastMoveEventInfo, this.history),
                        t = null !== this.startEvent,
                        n = function(e, t) {
                            const n = ki(e.x, t.x),
                                r = ki(e.y, t.y);
                            return Math.sqrt(n ** 2 + r ** 2)
                        }(e.offset, { x: 0, y: 0 }) >= 3;
                    if (!t && !n) return;
                    const { point: r } = e, { timestamp: i } = lt;
                    this.history.push({...r, timestamp: i });
                    const { onStart: a, onMove: s } = this.handlers;
                    t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, e)
                }, this.handlePointerMove = (e, t) => { this.lastMoveEvent = e, this.lastMoveEventInfo = Ni(t, this.transformPagePoint), st.update(this.updatePoint, !0) }, this.handlePointerUp = (e, t) => {
                    this.end();
                    const { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
                    if (this.dragSnapToOrigin && i && i(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                    const a = Bi("pointercancel" === e.type ? this.lastMoveEventInfo : Ni(t, this.transformPagePoint), this.history);
                    this.startEvent && n && n(e, a), r && r(e, a)
                }, !ft(e)) return;
            this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || window;
            const a = Ni(pt(e), this.transformPagePoint),
                { point: s } = a,
                { timestamp: o } = lt;
            this.history = [{...s, timestamp: o }];
            const { onSessionStart: l } = t;
            l && l(e, Bi(a, this.history)), this.removeListeners = yt(gt(this.contextWindow, "pointermove", this.handlePointerMove), gt(this.contextWindow, "pointerup", this.handlePointerUp), gt(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) { this.handlers = e }
        end() { this.removeListeners && this.removeListeners(), ot(this.updatePoint) }
    }

    function Ni(e, t) { return t ? { point: t(e.point) } : e }

    function Ti(e, t) { return { x: e.x - t.x, y: e.y - t.y } }

    function Bi(e, t) { let { point: n } = e; return { point: n, delta: Ti(n, Di(t)), offset: Ti(n, Ii(t)), velocity: Fi(t, .1) } }

    function Ii(e) { return e[0] }

    function Di(e) { return e[e.length - 1] }

    function Fi(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        let n = e.length - 1,
            r = null;
        const i = Di(e);
        for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Mt(t)));) n--;
        if (!r) return { x: 0, y: 0 };
        const a = Ot(i.timestamp - r.timestamp);
        if (0 === a) return { x: 0, y: 0 };
        const s = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
    }
    const Ri = .9999,
        Li = 1.0001,
        Mi = -.01,
        Oi = .01;

    function Qi(e) { return e.max - e.min }

    function Ui(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
        e.origin = r, e.originPoint = Nr(t.min, t.max, e.origin), e.scale = Qi(n) / Qi(t), e.translate = Nr(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Ri && e.scale <= Li || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Mi && e.translate <= Oi || isNaN(e.translate)) && (e.translate = 0)
    }

    function zi(e, t, n, r) { Ui(e.x, t.x, n.x, r ? r.originX : void 0), Ui(e.y, t.y, n.y, r ? r.originY : void 0) }

    function Vi(e, t, n) { e.min = n.min + t.min, e.max = e.min + Qi(t) }

    function Hi(e, t, n) { e.min = t.min - n.min, e.max = e.min + Qi(t) }

    function Ki(e, t, n) { Hi(e.x, t.x, n.x), Hi(e.y, t.y, n.y) }

    function Wi(e, t, n) { return { min: void 0 !== t ? e.min + t : void 0, max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0 } }

    function Yi(e, t) {
        let n = t.min - e.min,
            r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    }
    const Gi = .35;

    function Xi(e, t, n) { return { min: qi(e, t), max: qi(e, n) } }

    function qi(e, t) { return "number" === typeof e ? e : e[t] || 0 }
    const _i = () => ({ x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }),
        Ji = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });

    function Zi(e) { return [e("x"), e("y")] }

    function $i(e) { let { top: t, left: n, right: r, bottom: i } = e; return { x: { min: n, max: r }, y: { min: t, max: i } } }

    function ea(e) { return void 0 === e || 1 === e }

    function ta(e) { let { scale: t, scaleX: n, scaleY: r } = e; return !ea(t) || !ea(n) || !ea(r) }

    function na(e) { return ta(e) || ra(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY }

    function ra(e) { return ia(e.x) || ia(e.y) }

    function ia(e) { return e && "0%" !== e }

    function aa(e, t, n) { return n + t * (e - n) }

    function sa(e, t, n, r, i) { return void 0 !== i && (e = aa(e, i, r)), aa(e, n, r) + t }

    function oa(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
        e.min = sa(e.min, t, n, r, i), e.max = sa(e.max, t, n, r, i)
    }

    function la(e, t) {
        let { x: n, y: r } = t;
        oa(e.x, n.translate, n.scale, n.originPoint), oa(e.y, r.translate, r.scale, r.originPoint)
    }
    const ua = .999999999999,
        ca = 1.0000000000001;

    function da(e, t) { e.min = e.min + t, e.max = e.max + t }

    function ha(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5;
        oa(e, t, n, Nr(e.min, e.max, i), r)
    }

    function fa(e, t) { ha(e.x, t.x, t.scaleX, t.scale, t.originX), ha(e.y, t.y, t.scaleY, t.scale, t.originY) }

    function pa(e, t) {
        return $i(function(e, t) {
            if (!t) return e;
            const n = t({ x: e.left, y: e.top }),
                r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x }
        }(e.getBoundingClientRect(), t))
    }
    const ma = e => { let { current: t } = e; return t ? t.ownerDocument.defaultView : null },
        ga = new WeakMap;
    class va {
        constructor(e) { this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ji(), this.visualElement = e }
        start(e) {
            let { snapToCursor: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const { presenceContext: n } = this.visualElement;
            if (n && !1 === n.isPresent) return;
            const { dragSnapToOrigin: r } = this.getProps();
            this.panSession = new Pi(e, {
                onSessionStart: e => {
                    const { dragSnapToOrigin: n } = this.getProps();
                    n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(pt(e, "page").point)
                },
                onStart: (e, t) => {
                    var n;
                    const { drag: r, dragPropagation: i, onDragStart: a } = this.getProps();
                    if (r && !i && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = At(r), !this.openGlobalLock)) return;
                    this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Zi((e => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (le.test(t)) { const { projection: n } = this.visualElement; if (n && n.layout) { const r = n.layout.layoutBox[e]; if (r) { t = Qi(r) * (parseFloat(t) / 100) } } }
                        this.originPoint[e] = t
                    })), a && st.postRender((() => a(e, t))), null === (n = this.removeWillChange) || void 0 === n || n.call(this), this.removeWillChange = pi(this.visualElement, "transform");
                    const { animationState: s } = this.visualElement;
                    s && s.setActive("whileDrag", !0)
                },
                onMove: (e, t) => {
                    const { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
                    if (!n && !this.openGlobalLock) return;
                    const { offset: s } = t;
                    if (r && null === this.currentDirection) return this.currentDirection = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                            n = null;
                        Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                        return n
                    }(s), void(null !== this.currentDirection && i && i(this.currentDirection));
                    this.updateAxis("x", t.point, s), this.updateAxis("y", t.point, s), this.visualElement.render(), a && a(e, t)
                },
                onSessionEnd: (e, t) => this.stop(e, t),
                resumeAnimation: () => Zi((e => { var t; return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play()) }))
            }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: r, contextWindow: ma(this.visualElement) })
        }
        stop(e, t) {
            var n;
            null === (n = this.removeWillChange) || void 0 === n || n.call(this);
            const r = this.isDragging;
            if (this.cancel(), !r) return;
            const { velocity: i } = t;
            this.startAnimation(i);
            const { onDragEnd: a } = this.getProps();
            a && st.postRender((() => a(e, t)))
        }
        cancel() {
            this.isDragging = !1;
            const { projection: e, animationState: t } = this.visualElement;
            e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
            const { dragPropagation: n } = this.getProps();
            !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1)
        }
        updateAxis(e, t, n) {
            const { drag: r } = this.getProps();
            if (!n || !ya(e, r, this.currentDirection)) return;
            const i = this.getAxisMotionValue(e);
            let a = this.originPoint[e] + n[e];
            this.constraints && this.constraints[e] && (a = function(e, t, n) { let { min: r, max: i } = t; return void 0 !== r && e < r ? e = n ? Nr(r, e, n.min) : Math.max(e, r) : void 0 !== i && e > i && (e = n ? Nr(i, e, n.max) : Math.min(e, i)), e }(a, this.constraints[e], this.elastic[e])), i.set(a)
        }
        resolveConstraints() {
            var e;
            const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout, i = this.constraints;
            t && w(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(e, t) { let { top: n, left: r, bottom: i, right: a } = t; return { x: Wi(e.x, r, a), y: Wi(e.y, n, i) } }(r.layoutBox, t), this.elastic = function() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gi; return !1 === e ? e = 0 : !0 === e && (e = Gi), { x: Xi(e, "left", "right"), y: Xi(e, "top", "bottom") } }(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Zi((e => {!1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) { const n = {}; return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n }(r.layoutBox[e], this.constraints[e])) }))
        }
        resolveRefConstraints() {
            const { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
            if (!e || !w(e)) return !1;
            const n = e.current;
            qt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
            const { projection: r } = this.visualElement;
            if (!r || !r.layout) return !1;
            const i = function(e, t, n) {
                const r = pa(e, n),
                    { scroll: i } = t;
                return i && (da(r.x, i.offset.x), da(r.y, i.offset.y)), r
            }(n, r.root, this.visualElement.getTransformPagePoint());
            let a = function(e, t) { return { x: Yi(e.x, t.x), y: Yi(e.y, t.y) } }(r.layout.layoutBox, i);
            if (t) {
                const e = t(function(e) { let { x: t, y: n } = e; return { top: n.min, right: t.max, bottom: n.max, left: t.min } }(a));
                this.hasMutatedConstraints = !!e, e && (a = $i(e))
            }
            return a
        }
        startAnimation(e) {
            const { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), o = this.constraints || {}, l = Zi((s => {
                if (!ya(s, t, this.currentDirection)) return;
                let l = o && o[s] || {};
                a && (l = { min: 0, max: 0 });
                const u = r ? 200 : 1e6,
                    c = r ? 40 : 1e7,
                    d = { type: "inertia", velocity: n ? e[s] : 0, bounceStiffness: u, bounceDamping: c, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i, ...l };
                return this.startAxisValueAnimation(s, d)
            }));
            return Promise.all(l).then(s)
        }
        startAxisValueAnimation(e, t) { const n = this.getAxisMotionValue(e); return n.start(si(e, n, 0, t, this.visualElement, !1, pi(this.visualElement, e))) }
        stopAnimation() { Zi((e => this.getAxisMotionValue(e).stop())) }
        pauseAnimation() { Zi((e => { var t; return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause() })) }
        getAnimationState(e) { var t; return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state }
        getAxisMotionValue(e) {
            const t = `_drag${e.toUpperCase()}`,
                n = this.visualElement.getProps(),
                r = n[t];
            return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
            Zi((t => {
                const { drag: n } = this.getProps();
                if (!ya(t, n, this.currentDirection)) return;
                const { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    const { min: n, max: a } = r.layout.layoutBox[t];
                    i.set(e[t] - Nr(n, a, .5))
                }
            }))
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            const { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
            if (!w(t) || !n || !this.constraints) return;
            this.stopAnimation();
            const r = { x: 0, y: 0 };
            Zi((e => {
                const t = this.getAxisMotionValue(e);
                if (t && !1 !== this.constraints) {
                    const n = t.get();
                    r[e] = function(e, t) {
                        let n = .5;
                        const r = Qi(e),
                            i = Qi(t);
                        return i > r ? n = Pr(t.min, t.max - r, e.min) : r > i && (n = Pr(e.min, e.max - i, t.min)), J(0, 1, n)
                    }({ min: n, max: n }, this.constraints[e])
                }
            }));
            const { transformTemplate: i } = this.visualElement.getProps();
            this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Zi((t => {
                if (!ya(t, e, null)) return;
                const n = this.getAxisMotionValue(t),
                    { min: i, max: a } = this.constraints[t];
                n.set(Nr(i, a, r[t]))
            }))
        }
        addListeners() {
            if (!this.visualElement.current) return;
            ga.set(this.visualElement, this);
            const e = gt(this.visualElement.current, "pointerdown", (e => {
                    const { drag: t, dragListener: n = !0 } = this.getProps();
                    t && n && this.start(e)
                })),
                t = () => {
                    const { dragConstraints: e } = this.getProps();
                    w(e) && e.current && (this.constraints = this.resolveRefConstraints())
                },
                { projection: n } = this.visualElement,
                r = n.addEventListener("measure", t);
            n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), st.read(t);
            const i = ht(window, "resize", (() => this.scalePositionWithinConstraints())),
                a = n.addEventListener("didUpdate", (e => {
                    let { delta: t, hasLayoutChanged: n } = e;
                    this.isDragging && n && (Zi((e => {
                        const n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                    })), this.visualElement.render())
                }));
            return () => { i(), e(), r(), a && a() }
        }
        getProps() {
            const e = this.visualElement.getProps(),
                { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Gi, dragMomentum: s = !0 } = e;
            return {...e, drag: t, dragDirectionLock: n, dragPropagation: r, dragConstraints: i, dragElastic: a, dragMomentum: s }
        }
    }

    function ya(e, t, n) { return (!0 === t || t === e) && (null === n || n === e) }
    const xa = e => (t, n) => { e && st.postRender((() => e(t, n))) };
    const ba = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };

    function wa(e, t) { return t.max === t.min ? 0 : e / (t.max - t.min) * 100 }
    const Aa = {
            correct: (e, t) => {
                if (!t.target) return e;
                if ("string" === typeof e) {
                    if (!ue.test(e)) return e;
                    e = parseFloat(e)
                }
                return `${wa(e,t.target.x)}% ${wa(e,t.target.y)}%`
            }
        },
        ja = {
            correct: (e, t) => {
                let { treeScale: n, projectionDelta: r } = t;
                const i = e,
                    a = Dn.parse(e);
                if (a.length > 5) return i;
                const s = Dn.createTransformer(e),
                    o = "number" !== typeof a[0] ? 1 : 0,
                    l = r.x.scale * n.x,
                    u = r.y.scale * n.y;
                a[0 + o] /= l, a[1 + o] /= u;
                const c = Nr(l, u, .5);
                return "number" === typeof a[2 + o] && (a[2 + o] /= c), "number" === typeof a[3 + o] && (a[3 + o] /= c), s(a)
            }
        };
    class Ca extends r.Component {
        componentDidMount() {
            const { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
            var a;
            a = Sa, Object.assign(W, a), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => { this.safeToRemove() })), i.setOptions({...i.options, onExitComplete: () => this.safeToRemove() })), ba.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
            const { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, a = n.projection;
            return a ? (a.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || st.postRender((() => {
                const e = a.getStack();
                e && e.members.length || this.safeToRemove()
            }))), null) : null
        }
        componentDidUpdate() {
            const { projection: e } = this.props.visualElement;
            e && (e.root.didUpdate(), x.postRender((() => {!e.currentAnimation && e.isLead() && this.safeToRemove() })))
        }
        componentWillUnmount() {
            const { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
            r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
        }
        safeToRemove() {
            const { safeToRemove: e } = this.props;
            e && e()
        }
        render() { return null }
    }

    function Ea(e) {
        const [t, n] = function() {
            const e = (0, r.useContext)(u);
            if (null === e) return [!0, null];
            const { isPresent: t, onExitComplete: n, register: i } = e, a = (0, r.useId)();
            (0, r.useEffect)((() => i(a)), []);
            const s = (0, r.useCallback)((() => n && n(a)), [a, n]);
            return !t && n ? [!1, s] : [!0]
        }(), i = (0, r.useContext)(O);
        return (0, s.jsx)(Ca, {...e, layoutGroup: i, switchLayoutGroup: (0, r.useContext)(A), isPresent: t, safeToRemove: n })
    }
    const Sa = { borderRadius: {...Aa, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: Aa, borderTopRightRadius: Aa, borderBottomLeftRadius: Aa, borderBottomRightRadius: Aa, boxShadow: ja },
        ka = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Pa = ka.length,
        Na = e => "string" === typeof e ? parseFloat(e) : e,
        Ta = e => "number" === typeof e || ue.test(e);

    function Ba(e, t) { return void 0 !== e[t] ? e[t] : e.borderRadius }
    const Ia = Fa(0, .5, wr),
        Da = Fa(.5, .95, at);

    function Fa(e, t, n) { return r => r < e ? 0 : r > t ? 1 : n(Pr(e, t, r)) }

    function Ra(e, t) { e.min = t.min, e.max = t.max }

    function La(e, t) { Ra(e.x, t.x), Ra(e.y, t.y) }

    function Ma(e, t) { e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin }

    function Oa(e, t, n, r, i) { return e = aa(e -= t, 1 / n, r), void 0 !== i && (e = aa(e, 1 / i, r)), e }

    function Qa(e, t, n, r, i) {
        let [a, s, o] = n;
        ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                i = arguments.length > 4 ? arguments[4] : void 0,
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
            le.test(t) && (t = parseFloat(t), t = Nr(s.min, s.max, t / 100) - s.min);
            if ("number" !== typeof t) return;
            let o = Nr(a.min, a.max, r);
            e === a && (o -= t), e.min = Oa(e.min, t, n, o, i), e.max = Oa(e.max, t, n, o, i)
        }(e, t[a], t[s], t[o], t.scale, r, i)
    }
    const Ua = ["x", "scaleX", "originX"],
        za = ["y", "scaleY", "originY"];

    function Va(e, t, n, r) { Qa(e.x, t, Ua, n ? n.x : void 0, r ? r.x : void 0), Qa(e.y, t, za, n ? n.y : void 0, r ? r.y : void 0) }

    function Ha(e) { return 0 === e.translate && 1 === e.scale }

    function Ka(e) { return Ha(e.x) && Ha(e.y) }

    function Wa(e, t) { return e.min === t.min && e.max === t.max }

    function Ya(e, t) { return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max) }

    function Ga(e, t) { return Ya(e.x, t.x) && Ya(e.y, t.y) }

    function Xa(e) { return Qi(e.x) / Qi(e.y) }

    function qa(e, t) { return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint }
    class _a {
        constructor() { this.members = [] }
        add(e) { $e(this.members, e), e.scheduleRender() }
        remove(e) {
            if (et(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                const e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(e) { const t = this.members.findIndex((t => e === t)); if (0 === t) return !1; let n; for (let r = t; r >= 0; r--) { const e = this.members[r]; if (!1 !== e.isPresent) { n = e; break } } return !!n && (this.promote(n), !0) }
        promote(e, t) { const n = this.lead; if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) { n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0); const { crossfade: r } = e.options;!1 === r && n.hide() } }
        exitAnimationComplete() {
            this.members.forEach((e => {
                const { options: t, resumingFrom: n } = e;
                t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
            }))
        }
        scheduleRender() { this.members.forEach((e => { e.instance && e.scheduleRender(!1) })) }
        removeLeadSnapshot() { this.lead && this.lead.snapshot && (this.lead.snapshot = void 0) }
    }
    const Ja = (e, t) => e.depth - t.depth;
    class Za {
        constructor() { this.children = [], this.isDirty = !1 }
        add(e) { $e(this.children, e), this.isDirty = !0 }
        remove(e) { et(this.children, e), this.isDirty = !0 }
        forEach(e) { this.isDirty && this.children.sort(Ja), this.isDirty = !1, this.children.forEach(e) }
    }
    const $a = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 },
        es = "undefined" !== typeof window && void 0 !== window.MotionDebug,
        ts = ["", "X", "Y", "Z"],
        ns = { visibility: "hidden" };
    let rs = 0;

    function is(e, t, n, r) {
        const { latestValues: i } = t;
        i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
    }

    function as(e) {
        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
        const { visualElement: t } = e.options;
        if (!t) return;
        const n = hi(t);
        window.MotionHasOptimisedTransformAnimation(n) && window.MotionCancelOptimisedTransform(n);
        const { parent: r } = e;
        r && !r.hasCheckedOptimisedAppear && as(r)
    }

    function ss(e) {
        let { attachResizeListener: t, defaultParent: n, measureScroll: r, checkIsScrollRoot: i, resetTransform: a } = e;
        return class {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === n || void 0 === n ? void 0 : n();
                this.id = rs++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => { this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots()) }, this.updateProjection = () => { this.projectionUpdateScheduled = !1, es && ($a.totalNodes = $a.resolvedTargetDeltas = $a.recalculatedProjection = 0), this.nodes.forEach(us), this.nodes.forEach(gs), this.nodes.forEach(vs), this.nodes.forEach(cs), es && window.MotionDebug.record($a) }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = t ? t.root || t : this, this.path = t ? [...t.path, t] : [], this.parent = t, this.depth = t ? t.depth + 1 : 0;
                for (let n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
                this.root === this && (this.nodes = new Za)
            }
            addEventListener(e, t) { return this.eventHandlers.has(e) || this.eventHandlers.set(e, new oi), this.eventHandlers.get(e).add(t) }
            notifyListeners(e) {
                const t = this.eventHandlers.get(e);
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                t && t.notify(...r)
            }
            hasListeners(e) { return this.eventHandlers.has(e) }
            mount(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root.hasTreeAnimated;
                if (this.instance) return;
                var r;
                this.isSVG = (r = e) instanceof SVGElement && "svg" !== r.tagName, this.instance = e;
                const { layoutId: i, layout: a, visualElement: s } = this.options;
                if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (a || i) && (this.isLayoutDirty = !0), t) {
                    let n;
                    const r = () => this.root.updateBlockedByResize = !1;
                    t(e, (() => {
                        this.root.updateBlockedByResize = !0, n && n(), n = function(e, t) {
                            const n = Yn.now(),
                                r = i => {
                                    let { timestamp: a } = i;
                                    const s = a - n;
                                    s >= t && (ot(r), e(s - t))
                                };
                            return st.read(r, !0), () => ot(r)
                        }(r, 250), ba.hasAnimatedSinceResize && (ba.hasAnimatedSinceResize = !1, this.nodes.forEach(ms))
                    }))
                }
                i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || a) && this.addEventListener("didUpdate", (e => {
                    let { delta: t, hasLayoutChanged: n, hasRelativeTargetChanged: r, layout: i } = e;
                    if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                    const a = this.options.transition || s.getDefaultTransition() || js,
                        { onLayoutAnimationStart: o, onLayoutAnimationComplete: l } = s.getProps(),
                        u = !this.targetLayout || !Ga(this.targetLayout, i) || r,
                        c = !n && r;
                    if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || c || n && (u || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, c);
                        const e = {...Ht(a, "layout"), onPlay: o, onComplete: l };
                        (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                    } else n || ms(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = i
                }))
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                const e = this.getStack();
                e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ot(this.updateProjection)
            }
            blockUpdate() { this.updateManuallyBlocked = !0 }
            unblockUpdate() { this.updateManuallyBlocked = !1 }
            isUpdateBlocked() { return this.updateManuallyBlocked || this.updateBlockedByResize }
            isTreeAnimationBlocked() { return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1 }
            startUpdate() { this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ys), this.animationId++) }
            getTransformTemplate() { const { visualElement: e } = this.options; return e && e.getProps().transformTemplate }
            willUpdate() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
                if (window.MotionCancelOptimisedTransform && !this.hasCheckedOptimisedAppear && as(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let i = 0; i < this.path.length; i++) {
                    const e = this.path[i];
                    e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                }
                const { layoutId: t, layout: n } = this.options;
                if (void 0 === t && !n) return;
                const r = this.getTransformTemplate();
                this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
            }
            update() {
                this.updateScheduled = !1;
                if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(hs);
                this.isUpdating || this.nodes.forEach(fs), this.isUpdating = !1, this.nodes.forEach(ps), this.nodes.forEach(os), this.nodes.forEach(ls), this.clearAllSnapshots();
                const e = Yn.now();
                lt.delta = J(0, 1e3 / 60, e - lt.timestamp), lt.timestamp = e, lt.isProcessing = !0, ut.update.process(lt), ut.preRender.process(lt), ut.render.process(lt), lt.isProcessing = !1
            }
            didUpdate() { this.updateScheduled || (this.updateScheduled = !0, x.read(this.scheduleUpdate)) }
            clearAllSnapshots() { this.nodes.forEach(ds), this.sharedNodes.forEach(xs) }
            scheduleUpdateProjection() { this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, st.preRender(this.updateProjection, !1, !0)) }
            scheduleCheckAfterUnmount() { st.postRender((() => { this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed() })) }
            updateSnapshot() {!this.snapshot && this.instance && (this.snapshot = this.measure()) }
            updateLayout() {
                if (!this.instance) return;
                if (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let n = 0; n < this.path.length; n++) { this.path[n].updateScroll() }
                const e = this.layout;
                this.layout = this.measure(!1), this.layoutCorrected = Ji(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                const { visualElement: t } = this.options;
                t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
            }
            updateScroll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t) {
                    const t = i(this.instance);
                    this.scroll = { animationId: this.root.animationId, phase: e, isRoot: t, offset: r(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : t }
                }
            }
            resetTransform() {
                if (!a) return;
                const e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    t = this.projectionDelta && !Ka(this.projectionDelta),
                    n = this.getTransformTemplate(),
                    r = n ? n(this.latestValues, "") : void 0,
                    i = r !== this.prevTransformTemplateValue;
                e && (t || na(this.latestValues) || i) && (a(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure() { let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; const t = this.measurePageBox(); let n = this.removeElementScroll(t); var r; return e && (n = this.removeTransform(n)), Ss((r = n).x), Ss(r.y), { animationId: this.root.animationId, measuredBox: t, layoutBox: n, latestValues: {}, source: this.id } }
            measurePageBox() {
                var e;
                const { visualElement: t } = this.options;
                if (!t) return Ji();
                const n = t.measureViewportBox();
                if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(Ps))) {
                    const { scroll: e } = this.root;
                    e && (da(n.x, e.offset.x), da(n.y, e.offset.y))
                }
                return n
            }
            removeElementScroll(e) {
                var t;
                const n = Ji();
                if (La(n, e), null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) return n;
                for (let r = 0; r < this.path.length; r++) {
                    const t = this.path[r],
                        { scroll: i, options: a } = t;
                    t !== this.root && i && a.layoutScroll && (i.wasRoot && La(n, e), da(n.x, i.offset.x), da(n.y, i.offset.y))
                }
                return n
            }
            applyTransform(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = Ji();
                La(n, e);
                for (let r = 0; r < this.path.length; r++) { const e = this.path[r];!t && e.options.layoutScroll && e.scroll && e !== e.root && fa(n, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }), na(e.latestValues) && fa(n, e.latestValues) }
                return na(this.latestValues) && fa(n, this.latestValues), n
            }
            removeTransform(e) {
                const t = Ji();
                La(t, e);
                for (let n = 0; n < this.path.length; n++) {
                    const e = this.path[n];
                    if (!e.instance) continue;
                    if (!na(e.latestValues)) continue;
                    ta(e.latestValues) && e.updateSnapshot();
                    const r = Ji();
                    La(r, e.measurePageBox()), Va(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, r)
                }
                return na(this.latestValues) && Va(t, this.latestValues), t
            }
            setTargetDelta(e) { this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0 }
            setOptions(e) { this.options = {...this.options, ...e, crossfade: void 0 === e.crossfade || e.crossfade } }
            clearMeasurements() { this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1 }
            forceRelativeParentToResolveTarget() { this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== lt.timestamp && this.relativeParent.resolveTargetDelta(!0) }
            resolveTargetDelta() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                var t;
                const n = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
                const r = Boolean(this.resumingFrom) || this !== n;
                if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                const { layout: i, layoutId: a } = this.options;
                if (this.layout && (i || a)) {
                    if (this.resolvedRelativeTargetAt = lt.timestamp, !this.targetDelta && !this.relativeTarget) {
                        const e = this.getClosestProjectingParent();
                        e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ji(), this.relativeTargetOrigin = Ji(), Ki(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), La(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    if (this.relativeTarget || this.targetDelta) {
                        var s, o, l;
                        if (this.target || (this.target = Ji(), this.targetWithTransforms = Ji()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), s = this.target, o = this.relativeTarget, l = this.relativeParent.target, Vi(s.x, o.x, l.x), Vi(s.y, o.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : La(this.target, this.layout.layoutBox), la(this.target, this.targetDelta)) : La(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                            this.attemptToResolveRelativeTarget = !1;
                            const e = this.getClosestProjectingParent();
                            e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ji(), this.relativeTargetOrigin = Ji(), Ki(this.relativeTargetOrigin, this.target, e.target), La(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        es && $a.resolvedTargetDeltas++
                    }
                }
            }
            getClosestProjectingParent() { if (this.parent && !ta(this.parent.latestValues) && !ra(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent() }
            isProjecting() { return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout) }
            calcProjection() {
                var e;
                const t = this.getLead(),
                    n = Boolean(this.resumingFrom) || this !== t;
                let r = !0;
                if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === lt.timestamp && (r = !1), r) return;
                const { layout: i, layoutId: a } = this.options;
                if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !a) return;
                La(this.layoutCorrected, this.layout.layoutBox);
                const s = this.treeScale.x,
                    o = this.treeScale.y;
                ! function(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const i = n.length;
                    if (!i) return;
                    let a, s;
                    t.x = t.y = 1;
                    for (let o = 0; o < i; o++) {
                        a = n[o], s = a.projectionDelta;
                        const { visualElement: i } = a.options;
                        i && i.props.style && "contents" === i.props.style.display || (r && a.options.layoutScroll && a.scroll && a !== a.root && fa(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }), s && (t.x *= s.x.scale, t.y *= s.y.scale, la(e, s)), r && na(a.latestValues) && fa(e, a.latestValues))
                    }
                    t.x < ca && t.x > ua && (t.x = 1), t.y < ca && t.y > ua && (t.y = 1)
                }(this.layoutCorrected, this.treeScale, this.path, n), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = Ji());
                const { target: l } = t;
                l ? (this.projectionDelta && this.prevProjectionDelta ? (Ma(this.prevProjectionDelta.x, this.projectionDelta.x), Ma(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), zi(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === s && this.treeScale.y === o && qa(this.projectionDelta.x, this.prevProjectionDelta.x) && qa(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), es && $a.recalculatedProjection++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
            }
            hide() { this.isVisible = !1 }
            show() { this.isVisible = !0 }
            scheduleRender() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                var t;
                if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(), e) {
                    const e = this.getStack();
                    e && e.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() { this.prevProjectionDelta = _i(), this.projectionDelta = _i(), this.projectionDeltaWithTransform = _i() }
            setAnimationOrigin(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = this.snapshot,
                    r = n ? n.latestValues : {},
                    i = {...this.latestValues },
                    a = _i();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
                const s = Ji(),
                    o = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    l = this.getStack(),
                    u = !l || l.members.length <= 1,
                    c = Boolean(o && !u && !0 === this.options.crossfade && !this.path.some(As));
                let d;
                this.animationProgress = 0, this.mixTargetDelta = t => {
                    const n = t / 1e3;
                    var l, h, f, p, m, g;
                    bs(a.x, e.x, n), bs(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ki(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox), f = this.relativeTarget, p = this.relativeTargetOrigin, m = s, g = n, ws(f.x, p.x, m.x, g), ws(f.y, p.y, m.y, g), d && (l = this.relativeTarget, h = d, Wa(l.x, h.x) && Wa(l.y, h.y)) && (this.isProjectionDirty = !1), d || (d = Ji()), La(d, this.relativeTarget)), o && (this.animationValues = i, function(e, t, n, r, i, a) {
                        i ? (e.opacity = Nr(0, void 0 !== n.opacity ? n.opacity : 1, Ia(r)), e.opacityExit = Nr(void 0 !== t.opacity ? t.opacity : 1, 0, Da(r))) : a && (e.opacity = Nr(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                        for (let s = 0; s < Pa; s++) {
                            const i = `border${ka[s]}Radius`;
                            let a = Ba(t, i),
                                o = Ba(n, i);
                            void 0 === a && void 0 === o || (a || (a = 0), o || (o = 0), 0 === a || 0 === o || Ta(a) === Ta(o) ? (e[i] = Math.max(Nr(Na(a), Na(o), r), 0), (le.test(o) || le.test(a)) && (e[i] += "%")) : e[i] = o)
                        }(t.rotate || n.rotate) && (e.rotate = Nr(t.rotate || 0, n.rotate || 0, r))
                    }(i, r, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
            }
            startAnimation(e) { this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ot(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = st.update((() => { ba.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n) { const r = q(e) ? e : ci(e); return r.start(si("", r, t, n)), r.animation }(0, 1e3, {...e, onUpdate: t => { this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t) }, onComplete: () => { e.onComplete && e.onComplete(), this.completeAnimation() } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0 })) }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                const e = this.getStack();
                e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() { this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation() }
            applyTransformsToTarget() {
                const e = this.getLead();
                let { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
                if (t && n && r) {
                    if (this !== e && this.layout && r && ks(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                        n = this.target || Ji();
                        const t = Qi(this.layout.layoutBox.x);
                        n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                        const r = Qi(this.layout.layoutBox.y);
                        n.y.min = e.target.y.min, n.y.max = n.y.min + r
                    }
                    La(t, n), fa(t, i), zi(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
                }
            }
            registerSharedNode(e, t) {
                this.sharedNodes.has(e) || this.sharedNodes.set(e, new _a);
                this.sharedNodes.get(e).add(t);
                const n = t.options.initialPromotionConfig;
                t.promote({ transition: n ? n.transition : void 0, preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0 })
            }
            isLead() { const e = this.getStack(); return !e || e.lead === this }
            getLead() { var e; const { layoutId: t } = this.options; return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this }
            getPrevLead() { var e; const { layoutId: t } = this.options; return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0 }
            getStack() { const { layoutId: e } = this.options; if (e) return this.root.sharedNodes.get(e) }
            promote() {
                let { needsReset: e, transition: t, preserveFollowOpacity: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const r = this.getStack();
                r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t })
            }
            relegate() { const e = this.getStack(); return !!e && e.relegate(this) }
            resetSkewAndRotation() {
                const { visualElement: e } = this.options;
                if (!e) return;
                let t = !1;
                const { latestValues: n } = e;
                if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
                const r = {};
                n.z && is("z", e, r, this.animationValues);
                for (let i = 0; i < ts.length; i++) is(`rotate${ts[i]}`, e, r, this.animationValues), is(`skew${ts[i]}`, e, r, this.animationValues);
                e.render();
                for (const i in r) e.setStaticValue(i, r[i]), this.animationValues && (this.animationValues[i] = r[i]);
                e.scheduleRender()
            }
            getProjectionStyles(e) {
                var t, n;
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) return ns;
                const r = { visibility: "" },
                    i = this.getTransformTemplate();
                if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = _e(null === e || void 0 === e ? void 0 : e.pointerEvents) || "", r.transform = i ? i(this.latestValues, "") : "none", r;
                const a = this.getLead();
                if (!this.projectionDelta || !this.layout || !a.target) { const t = {}; return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = _e(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !na(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t }
                const s = a.animationValues || a.latestValues;
                this.applyTransformsToTarget(), r.transform = function(e, t, n) {
                    let r = "";
                    const i = e.x.translate / t.x,
                        a = e.y.translate / t.y,
                        s = (null === n || void 0 === n ? void 0 : n.z) || 0;
                    if ((i || a || s) && (r = `translate3d(${i}px, ${a}px, ${s}px) `), 1 === t.x && 1 === t.y || (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
                        const { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: s, skewY: o } = n;
                        e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), s && (r += `skewX(${s}deg) `), o && (r += `skewY(${o}deg) `)
                    }
                    const o = e.x.scale * t.x,
                        l = e.y.scale * t.y;
                    return 1 === o && 1 === l || (r += `scale(${o}, ${l})`), r || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, s), i && (r.transform = i(s, r.transform));
                const { x: o, y: l } = this.projectionDelta;
                r.transformOrigin = `${100*o.origin}% ${100*l.origin}% 0`, a.animationValues ? r.opacity = a === this ? null !== (n = null !== (t = s.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : r.opacity = a === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
                for (const u in W) { if (void 0 === s[u]) continue; const { correct: e, applyTo: t } = W[u], n = "none" === r.transform ? s[u] : e(s[u], a); if (t) { const e = t.length; for (let i = 0; i < e; i++) r[t[i]] = n } else r[u] = n }
                return this.options.layoutId && (r.pointerEvents = a === this ? _e(null === e || void 0 === e ? void 0 : e.pointerEvents) || "" : "none"), r
            }
            clearSnapshot() { this.resumeFrom = this.snapshot = void 0 }
            resetTree() { this.root.nodes.forEach((e => { var t; return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop() })), this.root.nodes.forEach(hs), this.root.sharedNodes.clear() }
        }
    }

    function os(e) { e.updateLayout() }

    function ls(e) {
        var t;
        const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
            const { layoutBox: t, measuredBox: r } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
            "size" === i ? Zi((e => {
                const r = a ? n.measuredBox[e] : n.layoutBox[e],
                    i = Qi(r);
                r.min = t[e].min, r.max = r.min + i
            })) : ks(i, n.layoutBox, t) && Zi((r => {
                const i = a ? n.measuredBox[r] : n.layoutBox[r],
                    s = Qi(t[r]);
                i.max = i.min + s, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + s)
            }));
            const s = _i();
            zi(s, t, n.layoutBox);
            const o = _i();
            a ? zi(o, e.applyTransform(r, !0), n.measuredBox) : zi(o, t, n.layoutBox);
            const l = !Ka(s);
            let u = !1;
            if (!e.resumeFrom) {
                const r = e.getClosestProjectingParent();
                if (r && !r.resumeFrom) {
                    const { snapshot: i, layout: a } = r;
                    if (i && a) {
                        const s = Ji();
                        Ki(s, n.layoutBox, i.layoutBox);
                        const o = Ji();
                        Ki(o, t, a.layoutBox), Ga(s, o) || (u = !0), r.options.layoutRoot && (e.relativeTarget = o, e.relativeTargetOrigin = s, e.relativeParent = r)
                    }
                }
            }
            e.notifyListeners("didUpdate", { layout: t, snapshot: n, delta: o, layoutDelta: s, hasLayoutChanged: l, hasRelativeTargetChanged: u })
        } else if (e.isLead()) {
            const { onExitComplete: t } = e.options;
            t && t()
        }
        e.options.transition = void 0
    }

    function us(e) { es && $a.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)) }

    function cs(e) { e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1 }

    function ds(e) { e.clearSnapshot() }

    function hs(e) { e.clearMeasurements() }

    function fs(e) { e.isLayoutDirty = !1 }

    function ps(e) {
        const { visualElement: t } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
    }

    function ms(e) { e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0 }

    function gs(e) { e.resolveTargetDelta() }

    function vs(e) { e.calcProjection() }

    function ys(e) { e.resetSkewAndRotation() }

    function xs(e) { e.removeLeadSnapshot() }

    function bs(e, t, n) { e.translate = Nr(t.translate, 0, n), e.scale = Nr(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint }

    function ws(e, t, n, r) { e.min = Nr(t.min, n.min, r), e.max = Nr(t.max, n.max, r) }

    function As(e) { return e.animationValues && void 0 !== e.animationValues.opacityExit }
    const js = { duration: .45, ease: [.4, 0, .1, 1] },
        Cs = e => "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
        Es = Cs("applewebkit/") && !Cs("chrome/") ? Math.round : at;

    function Ss(e) { e.min = Es(e.min), e.max = Es(e.max) }

    function ks(e, t, n) { return "position" === e || "preserve-aspect" === e && (r = Xa(t), i = Xa(n), a = .2, !(Math.abs(r - i) <= a)); var r, i, a }

    function Ps(e) { var t; return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot) }
    const Ns = ss({ attachResizeListener: (e, t) => ht(e, "resize", t), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => !0 }),
        Ts = { current: void 0 },
        Bs = ss({
            measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
            defaultParent: () => {
                if (!Ts.current) {
                    const e = new Ns({});
                    e.mount(window), e.setOptions({ layoutScroll: !0 }), Ts.current = e
                }
                return Ts.current
            },
            resetTransform: (e, t) => { e.style.transform = void 0 !== t ? t : "none" },
            checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        Is = {
            pan: {
                Feature: class extends Ct {
                    constructor() { super(...arguments), this.removePointerDownListener = at }
                    onPointerDown(e) { this.session = new Pi(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: ma(this.node) }) }
                    createPanHandlers() { const { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps(); return { onSessionStart: xa(e), onStart: xa(t), onMove: n, onEnd: (e, t) => { delete this.session, r && st.postRender((() => r(e, t))) } } }
                    mount() { this.removePointerDownListener = gt(this.node.current, "pointerdown", (e => this.onPointerDown(e))) }
                    update() { this.session && this.session.updateHandlers(this.createPanHandlers()) }
                    unmount() { this.removePointerDownListener(), this.session && this.session.end() }
                }
            },
            drag: {
                Feature: class extends Ct {
                    constructor(e) { super(e), this.removeGroupControls = at, this.removeListeners = at, this.controls = new va(e) }
                    mount() {
                        const { dragControls: e } = this.node.getProps();
                        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || at
                    }
                    unmount() { this.removeGroupControls(), this.removeListeners() }
                },
                ProjectionNode: Bs,
                MeasureLayout: Ea
            }
        },
        Ds = { current: null },
        Fs = { current: !1 };
    const Rs = new WeakMap,
        Ls = [...ln, An, Dn],
        Ms = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        Os = B.length;
    class Qs {
        scrapeMotionValuesFromProps(e, t, n) { return {} }
        constructor(e) {
            let { parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: a, visualState: s } = e, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = mn, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => { this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection)) }, this.isRenderScheduled = !1, this.scheduleRender = () => { this.isRenderScheduled || (this.isRenderScheduled = !0, st.render(this.render, !1, !0)) };
            const { latestValues: l, renderState: u } = s;
            this.latestValues = l, this.baseTarget = {...l }, this.initialValues = n.initial ? {...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.blockInitialAnimation = Boolean(a), this.isControllingVariants = I(n), this.isVariantNode = D(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
            const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
            for (const h in d) {
                const e = d[h];
                void 0 !== l[h] && q(e) && e.set(l[h], !1)
            }
        }
        mount(e) {
            this.current = e, Rs.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), Fs.current || function() {
                if (Fs.current = !0, c)
                    if (window.matchMedia) {
                        const e = window.matchMedia("(prefers-reduced-motion)"),
                            t = () => Ds.current = e.matches;
                        e.addListener(t), t()
                    } else Ds.current = !1
            }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Ds.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
            Rs.delete(this.current), this.projection && this.projection.unmount(), ot(this.notifyUpdate), ot(this.render), this.valueSubscriptions.forEach((e => e())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
            for (const e in this.events) this.events[e].clear();
            for (const e in this.features) {
                const t = this.features[e];
                t && (t.unmount(), t.isMounted = !1)
            }
            this.current = null
        }
        bindToMotionValue(e, t) {
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            const n = G.has(e),
                r = t.on("change", (t => { this.latestValues[e] = t, this.props.onUpdate && st.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0) })),
                i = t.on("renderRequest", this.scheduleRender);
            this.valueSubscriptions.set(e, (() => { r(), i(), t.owner && t.stop() }))
        }
        sortNodePosition(e) { return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0 }
        updateFeatures() {
            let e = "animation";
            for (e in M) {
                const t = M[e];
                if (!t) continue;
                const { isEnabled: n, Feature: r } = t;
                if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                    const t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                }
            }
        }
        triggerBuild() { this.build(this.renderState, this.latestValues, this.props) }
        measureViewportBox() { return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ji() }
        getStaticValue(e) { return this.latestValues[e] }
        setStaticValue(e, t) { this.latestValues[e] = t }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let n = 0; n < Ms.length; n++) {
                const t = Ms[n];
                this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](), delete this.propEventSubscriptions[t]);
                const r = e["on" + t];
                r && (this.propEventSubscriptions[t] = this.on(t, r))
            }
            this.prevMotionValues = function(e, t, n) {
                for (const r in t) {
                    const i = t[r],
                        a = n[r];
                    if (q(i)) e.addValue(r, i);
                    else if (q(a)) e.addValue(r, ci(i, { owner: e }));
                    else if (a !== i)
                        if (e.hasValue(r)) { const t = e.getValue(r);!0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i) } else {
                            const t = e.getStaticValue(r);
                            e.addValue(r, ci(void 0 !== t ? t : i, { owner: e }))
                        }
                }
                for (const r in n) void 0 === t[r] && e.removeValue(r);
                return t
            }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() { return this.props }
        getVariant(e) { return this.props.variants ? this.props.variants[e] : void 0 }
        getDefaultTransition() { return this.props.transition }
        getTransformPagePoint() { return this.props.transformPagePoint }
        getClosestVariantNode() { return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0 }
        getVariantContext() {
            if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return this.parent ? this.parent.getVariantContext() : void 0;
            if (!this.isControllingVariants) { const e = this.parent && this.parent.getVariantContext() || {}; return void 0 !== this.props.initial && (e.initial = this.props.initial), e }
            const e = {};
            for (let t = 0; t < Os; t++) {
                const n = B[t],
                    r = this.props[n];
                (P(r) || !1 === r) && (e[n] = r)
            }
            return e
        }
        addVariantChild(e) { const t = this.getClosestVariantNode(); if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e) }
        addValue(e, t) {
            const n = this.values.get(e);
            t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }
        removeValue(e) {
            this.values.delete(e);
            const t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) { return this.values.has(e) }
        getValue(e, t) { if (this.props.values && this.props.values[e]) return this.props.values[e]; let n = this.values.get(e); return void 0 === n && void 0 !== t && (n = ci(null === t ? void 0 : t, { owner: this }), this.addValue(e, n)), n }
        readValue(e, t) { var n; let r = void 0 === this.latestValues[e] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, e)) && void 0 !== n ? n : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]; var i; return void 0 !== r && null !== r && ("string" === typeof r && (_t(r) || Gt(r)) ? r = parseFloat(r) : (i = r, !Ls.find(on(i)) && Dn.test(t) && (r = Un(e, t))), this.setBaseTarget(e, q(r) ? r.get() : r)), q(r) ? r.get() : r }
        setBaseTarget(e, t) { this.baseTarget[e] = t }
        getBaseTarget(e) {
            var t;
            const { initial: n } = this.props;
            let r;
            if ("string" === typeof n || "object" === typeof n) {
                const i = We(this.props, n, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                i && (r = i[e])
            }
            if (n && void 0 !== r) return r;
            const i = this.getBaseTargetFromProps(this.props, e);
            return void 0 === i || q(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) { return this.events[e] || (this.events[e] = new oi), this.events[e].add(t) }
        notify(e) {
            if (this.events[e]) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                this.events[e].notify(...n)
            }
        }
    }
    class Us extends Qs {
        constructor() { super(...arguments), this.KeyframeResolver = Vn }
        sortInstanceNodePosition(e, t) { return 2 & e.compareDocumentPosition(t) ? 1 : -1 }
        getBaseTargetFromProps(e, t) { return e.style ? e.style[t] : void 0 }
        removeValueFromRenderState(e, t) {
            let { vars: n, style: r } = t;
            delete n[e], delete r[e]
        }
    }
    class zs extends Us {
        constructor() { super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = Qe }
        readValueFromInstance(e, t) {
            if (G.has(t)) { const e = Qn(t); return e && e.default || 0 } {
                const r = (n = e, window.getComputedStyle(n)),
                    i = (ye(t) ? r.getPropertyValue(t) : r[t]) || 0;
                return "string" === typeof i ? i.trim() : i
            }
            var n
        }
        measureInstanceViewportBox(e, t) { let { transformPagePoint: n } = t; return pa(e, n) }
        build(e, t, n) { Ae(e, t, n.transformTemplate) }
        scrapeMotionValuesFromProps(e, t, n) { return Ve(e, t, n) }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            const { children: e } = this.props;
            q(e) && (this.childSubscription = e.on("change", (e => { this.current && (this.current.textContent = `${e}`) })))
        }
    }
    class Vs extends Us {
        constructor() { super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ji }
        getBaseTargetFromProps(e, t) { return e[t] }
        readValueFromInstance(e, t) { if (G.has(t)) { const e = Qn(t); return e && e.default || 0 } return t = Ue.has(t) ? t : f(t), e.getAttribute(t) }
        scrapeMotionValuesFromProps(e, t, n) { return He(e, t, n) }
        build(e, t, n) { Fe(e, t, this.isSVGTag, n.transformTemplate) }
        renderInstance(e, t, n, r) { ze(e, t, 0, r) }
        mount(e) { this.isSVGTag = Le(e.tagName), super.mount(e) }
    }
    const Hs = (e, t) => K(e) ? new Vs(t) : new zs(t, { allowProjection: e !== r.Fragment }),
        Ks = {...Si, ...Ft, ...Is, ... { layout: { ProjectionNode: Bs, MeasureLayout: Ea } } },
        Ws = V(((e, t) => function(e, t, n, r) { let { forwardMotionProps: i = !1 } = t; return {...K(e) ? ct : dt, preloadedFeatures: n, useRender: Oe(i), createVisualElement: r, Component: e } }(e, t, Ks, Hs)));
    const Ys = { initial: { left: "-100vw", display: "block" }, animate: { left: "100vw", display: "none" } },
        Gs = e => { let { children: t } = e; return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Ws.div, { variants: Ys, initial: "initial", animate: "animate", transition: { ease: "easeIn", duration: .5, delay: -.1 }, style: { height: "100vh", width: "100vw", backgroundColor: "var(--primary)", position: "absolute", top: 0, zIndex: 1e3 }, children: t }), (0, s.jsx)(Ws.div, { variants: Ys, initial: "initial", animate: "animate", transition: { ease: "easeIn", duration: .5, delay: 0 }, style: { height: "100vh", width: "100vw", backgroundColor: "#f480c8", position: "absolute", top: window.scrollY, zIndex: 1e3 }, children: t }), (0, s.jsx)(Ws.div, { variants: Ys, initial: "initial", animate: "animate", transition: { ease: "easeIn", duration: .5, delay: .1 }, style: { height: "100vh", width: "100vw", backgroundColor: "#e75bb1", position: "absolute", top: window.scrollY, zIndex: 1e3 }, children: t })] }) };
    var Xs, qs = n(950),
        _s = n.t(qs, 2);

    function Js() { return Js = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, Js.apply(this, arguments) }! function(e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE" }(Xs || (Xs = {}));
    const Zs = "popstate";

    function $s(e, t) { if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t) }

    function eo(e, t) { if (!e) { "undefined" !== typeof console && console.warn(t); try { throw new Error(t) } catch (n) {} } }

    function to(e, t) { return { usr: e.state, key: e.key, idx: t } }

    function no(e, t, n, r) { return void 0 === n && (n = null), Js({ pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" }, "string" === typeof t ? io(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }) }

    function ro(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t }

    function io(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
        }
        return t
    }

    function ao(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: i = document.defaultView, v5Compat: a = !1 } = r, s = i.history, o = Xs.Pop, l = null, u = c();

        function c() { return (s.state || { idx: null }).idx }

        function d() {
            o = Xs.Pop;
            let e = c(),
                t = null == e ? null : e - u;
            u = e, l && l({ action: o, location: f.location, delta: t })
        }

        function h(e) {
            let t = "null" !== i.location.origin ? i.location.origin : i.location.href,
                n = "string" === typeof e ? e : ro(e);
            return n = n.replace(/ $/, "%20"), $s(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
        }
        null == u && (u = 0, s.replaceState(Js({}, s.state, { idx: u }), ""));
        let f = {get action() { return o },
            get location() { return e(i, s) },
            listen(e) { if (l) throw new Error("A history only accepts one active listener"); return i.addEventListener(Zs, d), l = e, () => { i.removeEventListener(Zs, d), l = null } },
            createHref: e => t(i, e),
            createURL: h,
            encodeLocation(e) { let t = h(e); return { pathname: t.pathname, search: t.search, hash: t.hash } },
            push: function(e, t) {
                o = Xs.Push;
                let r = no(f.location, e, t);
                n && n(r, e), u = c() + 1;
                let d = to(r, u),
                    h = f.createHref(r);
                try { s.pushState(d, "", h) } catch (p) {
                    if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
                    i.location.assign(h)
                }
                a && l && l({ action: o, location: f.location, delta: 1 })
            },
            replace: function(e, t) {
                o = Xs.Replace;
                let r = no(f.location, e, t);
                n && n(r, e), u = c();
                let i = to(r, u),
                    d = f.createHref(r);
                s.replaceState(i, "", d), a && l && l({ action: o, location: f.location, delta: 0 })
            },
            go: e => s.go(e)
        };
        return f
    }
    var so;
    ! function(e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error" }(so || (so = {}));
    new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

    function oo(e, t, n) { return void 0 === n && (n = "/"), lo(e, t, n, !1) }

    function lo(e, t, n, r) {
        let i = jo(("string" === typeof t ? io(t) : t).pathname || "/", n);
        if (null == i) return null;
        let a = uo(e);
        ! function(e) { e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) { let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n])); return n ? e[e.length - 1] - t[t.length - 1] : 0 }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex))))) }(a);
        let s = null;
        for (let o = 0; null == s && o < a.length; ++o) {
            let e = Ao(i);
            s = bo(a[o], e, r)
        }
        return s
    }

    function uo(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
        let i = (e, i, a) => {
            let s = { relativePath: void 0 === a ? e.path || "" : a, caseSensitive: !0 === e.caseSensitive, childrenIndex: i, route: e };
            s.relativePath.startsWith("/") && ($s(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), s.relativePath = s.relativePath.slice(r.length));
            let o = Po([r, s.relativePath]),
                l = n.concat(s);
            e.children && e.children.length > 0 && ($s(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + o + '".'), uo(e.children, t, l, o)), (null != e.path || e.index) && t.push({ path: o, score: xo(o, e.index), routesMeta: l })
        };
        return e.forEach(((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                for (let r of co(e.path)) i(e, t, r);
            else i(e, t)
        })), t
    }

    function co(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
        if (0 === r.length) return i ? [a, ""] : [a];
        let s = co(r.join("/")),
            o = [];
        return o.push(...s.map((e => "" === e ? a : [a, e].join("/")))), i && o.push(...s), o.map((t => e.startsWith("/") && "" === t ? "/" : t))
    }
    const ho = /^:[\w-]+$/,
        fo = 3,
        po = 2,
        mo = 1,
        go = 10,
        vo = -2,
        yo = e => "*" === e;

    function xo(e, t) {
        let n = e.split("/"),
            r = n.length;
        return n.some(yo) && (r += vo), t && (r += po), n.filter((e => !yo(e))).reduce(((e, t) => e + (ho.test(t) ? fo : "" === t ? mo : go)), r)
    }

    function bo(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e, i = {}, a = "/", s = [];
        for (let o = 0; o < r.length; ++o) {
            let e = r[o],
                l = o === r.length - 1,
                u = "/" === a ? t : t.slice(a.length) || "/",
                c = wo({ path: e.relativePath, caseSensitive: e.caseSensitive, end: l }, u),
                d = e.route;
            if (!c && l && n && !r[r.length - 1].route.index && (c = wo({ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 }, u)), !c) return null;
            Object.assign(i, c.params), s.push({ params: i, pathname: Po([a, c.pathname]), pathnameBase: No(Po([a, c.pathnameBase])), route: d }), "/" !== c.pathnameBase && (a = Po([a, c.pathnameBase]))
        }
        return s
    }

    function wo(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = function(e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            eo("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
            let r = [],
                i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, t, n) => (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
            e.endsWith("*") ? (r.push({ paramName: "*" }), i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))");
            let a = new RegExp(i, t ? void 0 : "i");
            return [a, r]
        }(e.path, e.caseSensitive, e.end), i = t.match(n);
        if (!i) return null;
        let a = i[0],
            s = a.replace(/(.)\/+$/, "$1"),
            o = i.slice(1),
            l = r.reduce(((e, t, n) => {
                let { paramName: r, isOptional: i } = t;
                if ("*" === r) {
                    let e = o[n] || "";
                    s = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
                }
                const l = o[n];
                return e[r] = i && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
            }), {});
        return { params: l, pathname: a, pathnameBase: s, pattern: e }
    }

    function Ao(e) { try { return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/") } catch (t) { return eo(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e } }

    function jo(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/"
    }

    function Co(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.' }

    function Eo(e) { return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0)) }

    function So(e, t) { let n = Eo(e); return t ? n.map(((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase)) : n.map((e => e.pathnameBase)) }

    function ko(e, t, n, r) {
        let i;
        void 0 === r && (r = !1), "string" === typeof e ? i = io(e) : (i = Js({}, e), $s(!i.pathname || !i.pathname.includes("?"), Co("?", "pathname", "search", i)), $s(!i.pathname || !i.pathname.includes("#"), Co("#", "pathname", "hash", i)), $s(!i.search || !i.search.includes("#"), Co("#", "search", "hash", i)));
        let a, s = "" === e || "" === i.pathname,
            o = s ? "/" : i.pathname;
        if (null == o) a = n;
        else {
            let e = t.length - 1;
            if (!r && o.startsWith("..")) {
                let t = o.split("/");
                for (;
                    ".." === t[0];) t.shift(), e -= 1;
                i.pathname = t.join("/")
            }
            a = e >= 0 ? t[e] : "/"
        }
        let l = function(e, t) { void 0 === t && (t = "/"); let { pathname: n, search: r = "", hash: i = "" } = "string" === typeof e ? io(e) : e, a = n ? n.startsWith("/") ? n : function(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((e => { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e) })), n.length > 1 ? n.join("/") : "/" }(n, t) : t; return { pathname: a, search: To(r), hash: Bo(i) } }(i, a),
            u = o && "/" !== o && o.endsWith("/"),
            c = (s || "." === o) && n.endsWith("/");
        return l.pathname.endsWith("/") || !u && !c || (l.pathname += "/"), l
    }
    const Po = e => e.join("/").replace(/\/\/+/g, "/"),
        No = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        To = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        Bo = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
    Error;

    function Io(e) { return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e }
    const Do = ["post", "put", "patch", "delete"],
        Fo = (new Set(Do), ["get", ...Do]);
    new Set(Fo), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
    Symbol("deferred");

    function Ro() { return Ro = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, Ro.apply(this, arguments) }
    const Lo = r.createContext(null);
    const Mo = r.createContext(null);
    const Oo = r.createContext(null);
    const Qo = r.createContext(null);
    const Uo = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    const zo = r.createContext(null);

    function Vo() { return null != r.useContext(Qo) }

    function Ho() { return Vo() || $s(!1), r.useContext(Qo).location }

    function Ko(e) { r.useContext(Oo).static || r.useLayoutEffect(e) }

    function Wo() {
        let { isDataRoute: e } = r.useContext(Uo);
        return e ? function() {
            let { router: e } = tl($o.UseNavigateStable), t = rl(el.UseNavigateStable), n = r.useRef(!1);
            Ko((() => { n.current = !0 }));
            let i = r.useCallback((function(r, i) { void 0 === i && (i = {}), n.current && ("number" === typeof r ? e.navigate(r) : e.navigate(r, Ro({ fromRouteId: t }, i))) }), [e, t]);
            return i
        }() : function() {
            Vo() || $s(!1);
            let e = r.useContext(Lo),
                { basename: t, future: n, navigator: i } = r.useContext(Oo),
                { matches: a } = r.useContext(Uo),
                { pathname: s } = Ho(),
                o = JSON.stringify(So(a, n.v7_relativeSplatPath)),
                l = r.useRef(!1);
            return Ko((() => { l.current = !0 })), r.useCallback((function(n, r) {
                if (void 0 === r && (r = {}), !l.current) return;
                if ("number" === typeof n) return void i.go(n);
                let a = ko(n, JSON.parse(o), s, "path" === r.relative);
                null == e && "/" !== t && (a.pathname = "/" === a.pathname ? t : Po([t, a.pathname])), (r.replace ? i.replace : i.push)(a, r.state, r)
            }), [t, i, o, s, e])
        }()
    }

    function Yo(e, t) { let { relative: n } = void 0 === t ? {} : t, { future: i } = r.useContext(Oo), { matches: a } = r.useContext(Uo), { pathname: s } = Ho(), o = JSON.stringify(So(a, i.v7_relativeSplatPath)); return r.useMemo((() => ko(e, JSON.parse(o), s, "path" === n)), [e, o, s, n]) }

    function Go(e, t, n, i) {
        Vo() || $s(!1);
        let { navigator: a } = r.useContext(Oo), { matches: s } = r.useContext(Uo), o = s[s.length - 1], l = o ? o.params : {}, u = (o && o.pathname, o ? o.pathnameBase : "/");
        o && o.route;
        let c, d = Ho();
        if (t) { var h; let e = "string" === typeof t ? io(t) : t; "/" === u || (null == (h = e.pathname) ? void 0 : h.startsWith(u)) || $s(!1), c = e } else c = d;
        let f = c.pathname || "/",
            p = f;
        if ("/" !== u) {
            let e = u.replace(/^\//, "").split("/");
            p = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let m = oo(e, { pathname: p });
        let g = Zo(m && m.map((e => Object.assign({}, e, { params: Object.assign({}, l, e.params), pathname: Po([u, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? u : Po([u, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }))), s, n, i);
        return t && g ? r.createElement(Qo.Provider, { value: { location: Ro({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c), navigationType: Xs.Pop } }, g) : g
    }

    function Xo() {
        let e = function() {
                var e;
                let t = r.useContext(zo),
                    n = nl(el.UseRouteError),
                    i = rl(el.UseRouteError);
                if (void 0 !== t) return t;
                return null == (e = n.errors) ? void 0 : e[i]
            }(),
            t = Io(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            i = "rgba(200,200,200, 0.5)",
            a = { padding: "0.5rem", backgroundColor: i };
        return r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? r.createElement("pre", { style: a }, n) : null, null)
    }
    const qo = r.createElement(Xo, null);
    class _o extends r.Component {
        constructor(e) { super(e), this.state = { location: e.location, revalidation: e.revalidation, error: e.error } }
        static getDerivedStateFromError(e) { return { error: e } }
        static getDerivedStateFromProps(e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: void 0 !== e.error ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation } }
        componentDidCatch(e, t) { console.error("React Router caught the following error during render", e, t) }
        render() { return void 0 !== this.state.error ? r.createElement(Uo.Provider, { value: this.props.routeContext }, r.createElement(zo.Provider, { value: this.state.error, children: this.props.component })) : this.props.children }
    }

    function Jo(e) { let { routeContext: t, match: n, children: i } = e, a = r.useContext(Lo); return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), r.createElement(Uo.Provider, { value: t }, i) }

    function Zo(e, t, n, i) {
        var a;
        if (void 0 === t && (t = []), void 0 === n && (n = null), void 0 === i && (i = null), null == e) {
            var s;
            if (!n) return null;
            if (n.errors) e = n.matches;
            else {
                if (!(null != (s = i) && s.v7_partialHydration && 0 === t.length && !n.initialized && n.matches.length > 0)) return null;
                e = n.matches
            }
        }
        let o = e,
            l = null == (a = n) ? void 0 : a.errors;
        if (null != l) {
            let e = o.findIndex((e => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])));
            e >= 0 || $s(!1), o = o.slice(0, Math.min(o.length, e + 1))
        }
        let u = !1,
            c = -1;
        if (n && i && i.v7_partialHydration)
            for (let r = 0; r < o.length; r++) { let e = o[r]; if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (c = r), e.route.id) { let { loaderData: t, errors: r } = n, i = e.route.loader && void 0 === t[e.route.id] && (!r || void 0 === r[e.route.id]); if (e.route.lazy || i) { u = !0, o = c >= 0 ? o.slice(0, c + 1) : [o[0]]; break } } }
        return o.reduceRight(((e, i, a) => {
            let s, d = !1,
                h = null,
                f = null;
            var p;
            n && (s = l && i.route.id ? l[i.route.id] : void 0, h = i.route.errorElement || qo, u && (c < 0 && 0 === a ? (p = "route-fallback", !1 || il[p] || (il[p] = !0), d = !0, f = null) : c === a && (d = !0, f = i.route.hydrateFallbackElement || null)));
            let m = t.concat(o.slice(0, a + 1)),
                g = () => { let t; return t = s ? h : d ? f : i.route.Component ? r.createElement(i.route.Component, null) : i.route.element ? i.route.element : e, r.createElement(Jo, { match: i, routeContext: { outlet: e, matches: m, isDataRoute: null != n }, children: t }) };
            return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === a) ? r.createElement(_o, { location: n.location, revalidation: n.revalidation, component: h, error: s, children: g(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : g()
        }), null)
    }
    var $o = function(e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e }($o || {}),
        el = function(e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e }(el || {});

    function tl(e) { let t = r.useContext(Lo); return t || $s(!1), t }

    function nl(e) { let t = r.useContext(Mo); return t || $s(!1), t }

    function rl(e) {
        let t = function() { let e = r.useContext(Uo); return e || $s(!1), e }(),
            n = t.matches[t.matches.length - 1];
        return n.route.id || $s(!1), n.route.id
    }
    const il = {};
    i.startTransition;

    function al(e) { $s(!1) }

    function sl(e) {
        let { basename: t = "/", children: n = null, location: i, navigationType: a = Xs.Pop, navigator: s, static: o = !1, future: l } = e;
        Vo() && $s(!1);
        let u = t.replace(/^\/*/, "/"),
            c = r.useMemo((() => ({ basename: u, navigator: s, static: o, future: Ro({ v7_relativeSplatPath: !1 }, l) })), [u, l, s, o]);
        "string" === typeof i && (i = io(i));
        let { pathname: d = "/", search: h = "", hash: f = "", state: p = null, key: m = "default" } = i, g = r.useMemo((() => { let e = jo(d, u); return null == e ? null : { location: { pathname: e, search: h, hash: f, state: p, key: m }, navigationType: a } }), [u, d, h, f, p, m, a]);
        return null == g ? null : r.createElement(Oo.Provider, { value: c }, r.createElement(Qo.Provider, { children: n, value: g }))
    }

    function ol(e) { let { children: t, location: n } = e; return Go(ll(t), n) }
    new Promise((() => {}));
    r.Component;

    function ll(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return r.Children.forEach(e, ((e, i) => {
            if (!r.isValidElement(e)) return;
            let a = [...t, i];
            if (e.type === r.Fragment) return void n.push.apply(n, ll(e.props.children, a));
            e.type !== al && $s(!1), e.props.index && e.props.children && $s(!1);
            let s = { id: e.props.id || a.join("-"), caseSensitive: e.props.caseSensitive, element: e.props.element, Component: e.props.Component, index: e.props.index, path: e.props.path, loader: e.props.loader, action: e.props.action, errorElement: e.props.errorElement, ErrorBoundary: e.props.ErrorBoundary, hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement, shouldRevalidate: e.props.shouldRevalidate, handle: e.props.handle, lazy: e.props.lazy };
            e.props.children && (s.children = ll(e.props.children, a)), n.push(s)
        })), n
    }

    function ul() { return ul = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, ul.apply(this, arguments) }

    function cl(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }
    new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    const dl = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"];
    try { window.__reactRouterVersion = "6" } catch (wu) {}
    new Map;
    const hl = i.startTransition;
    _s.flushSync, i.useId;

    function fl(e) {
        let { basename: t, children: n, future: i, window: a } = e, s = r.useRef();
        var o;
        null == s.current && (s.current = (void 0 === (o = { window: a, v5Compat: !0 }) && (o = {}), ao((function(e, t) { let { pathname: n, search: r, hash: i } = e.location; return no("", { pathname: n, search: r, hash: i }, t.state && t.state.usr || null, t.state && t.state.key || "default") }), (function(e, t) { return "string" === typeof t ? t : ro(t) }), null, o)));
        let l = s.current,
            [u, c] = r.useState({ action: l.action, location: l.location }),
            { v7_startTransition: d } = i || {},
            h = r.useCallback((e => { d && hl ? hl((() => c(e))) : c(e) }), [c, d]);
        return r.useLayoutEffect((() => l.listen(h)), [l, h]), r.createElement(sl, { basename: t, children: n, location: u.location, navigationType: u.action, navigator: l, future: i })
    }
    const pl = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
        ml = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        gl = r.forwardRef((function(e, t) {
            let n, { onClick: i, relative: a, reloadDocument: s, replace: o, state: l, target: u, to: c, preventScrollReset: d, unstable_viewTransition: h } = e,
                f = cl(e, dl),
                { basename: p } = r.useContext(Oo),
                m = !1;
            if ("string" === typeof c && ml.test(c) && (n = c, pl)) try {
                let e = new URL(window.location.href),
                    t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                    n = jo(t.pathname, p);
                t.origin === e.origin && null != n ? c = n + t.search + t.hash : m = !0
            } catch (wu) {}
            let g = function(e, t) {
                    let { relative: n } = void 0 === t ? {} : t;
                    Vo() || $s(!1);
                    let { basename: i, navigator: a } = r.useContext(Oo), { hash: s, pathname: o, search: l } = Yo(e, { relative: n }), u = o;
                    return "/" !== i && (u = "/" === o ? i : Po([i, o])), a.createHref({ pathname: u, search: l, hash: s })
                }(c, { relative: a }),
                v = function(e, t) {
                    let { target: n, replace: i, state: a, preventScrollReset: s, relative: o, unstable_viewTransition: l } = void 0 === t ? {} : t, u = Wo(), c = Ho(), d = Yo(e, { relative: o });
                    return r.useCallback((t => {
                        if (function(e, t) { return 0 === e.button && (!t || "_self" === t) && ! function(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) }(e) }(t, n)) {
                            t.preventDefault();
                            let n = void 0 !== i ? i : ro(c) === ro(d);
                            u(e, { replace: n, state: a, preventScrollReset: s, relative: o, unstable_viewTransition: l })
                        }
                    }), [c, u, d, i, a, n, e, s, o, l])
                }(c, { replace: o, state: l, target: u, preventScrollReset: d, relative: a, unstable_viewTransition: h });
            return r.createElement("a", ul({}, f, { href: n || g, onClick: m || s ? i : function(e) { i && i(e), e.defaultPrevented || v(e) }, ref: t, target: u }))
        }));
    var vl, yl;
    (function(e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState" })(vl || (vl = {})),
    function(e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration" }(yl || (yl = {}));

    function xl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content centerify", children: [(0, s.jsx)("h1", { className: "header", children: "TECH" }), (0, s.jsx)("h1", { className: "header", children: "FUSION" }), (0, s.jsx)(gl, { to: "/sites/techfusion/register", children: (0, s.jsx)("button", { className: "contact", children: "REGISTER NOW!" }) })] })] }) }

    function bl() {
        return (0, r.useEffect)((() => {
            const e = document.getElementsByClassName("navlink");
            for (let t of e) t.classList.remove("active-page-a");
            e[0].classList.add("active-page-a")
        }), []), (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)(gl, { to: "/sites/techfusion/events/techknowquiz", className: "folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "TECHKNOWQUIZ" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/events/hack-a-thon", className: "folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "HACK-A-THON" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/events/game-fiesta", className: "folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "GAMEFIESTA" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/events/decryption-duel", className: "folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "DECRYPTIONDUEL" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/events/web-palette", className: "folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "WEB PALETTE" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container-higher", children: (0, s.jsx)("div", { className: "terminal", children: (0, s.jsx)("h1", { children: "EVENTS" }) }) })] })] })
    }
    const wl = n.p + "sites/techfusion/static/media/window-icon.cd10f2ec93d7088229a7.png",
        Al = n.p + "sites/techfusion/static/media/arrow.ee78af88173e1dce579f.png",
        jl = n.p + "sites/techfusion/static/media/search.53f3edb8212bcca8ea61.png",
        Cl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbwAAAG8CAYAAAClsBDfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB6RSURBVHhe7d1rrC3XYRfwmXPOffjavvG9tZ3UcUJxjRWnFSENLbSQtmq/AFJ5CZCgFQikCvGlUkEg8eyHCBAIBJWQAvRDCIqMoE0U2jStqoKhJCTxoyV2SBPjpHFsJ2587fu+5957HsOs2TPnzp49+3n2Yx6/X7I9M2vWmll7zz7rv9fe+5wbJ0kSAUDXbeVLAOg0gQdALwg8AHpB4AHQCwIPgF4QeAD0gsADoBcEHgC9IPAA6AWBB0AvCDwAekHgAdALAg+AXhB4APSCwAOgFwQeAL0g8ADoBYEHQC8IPAB6QeAB0AsCD4BeEHgA9ILAA6AXBB4AvSDwAOgFgQdALwg8AHpB4AHQCwIPgF4QeAD0gsADoBcEHgC9IPAA6AWBB0AvCDwAekHgAdALAg+AXhB4APSCwAOgFwQeAL0g8ADoBYEHQC8IPAB6QeAB0AsCD4BeEHgA9ILAA6AXBB4AvSDwAOgFgQdALwg8AHpB4AHQCwIPgF4QeAD0gsADoBcEHgC9IPAA6AWBB0AvCDwAekHgAdALAg+AXhB4APSCwAOgFwQeAL0g8ADoBYEHQC8IPAB6QeAB0AtxkiT56hIkUZz+L10m4b80SnpJytcljsPVStKywTpAxy0ceGm7nYM3Lj+689q1H41eufy9ydVbj0WXrz8U7R3cHR0kO3k1GiBOJYfpNdk/OJm9JEljLtre3otOxDeiEyeuRufuejU6c/Kr8UNnPx89dPYzh+fu/fzWzvZu2lQQAp0xd+Alt26fj7/02l+JvvDajyffuvre6PAwjKdmdC2XPg/uPBHOnH4tetcDn4zf/e0fjh48++k0MQ/zPQCtNXPgJfsHZ+Jnv/7TybNf++lod/+8kOu2owD89ns/E//gd/5M9PAD/y0UZ2UALTRb4F24/v7kF/7vv4uuX36XoOufJIkPosff+kTyI4/9za3TJy/kxQCtMjHw0n1b8XNf/6nkf774T+P95HReTA9lM77zZ16I/sx7/nx83z3P58UArTE28JLDw53of7/4geipl/92HCXbeTE9loXeXacuxD/xfX8yOnv6s3kxQCuM+z28OPrNl/5h9PTLf0fYUQhvZ8c3bz+QfOSpX0zeuPI9eTFAK9QH3pde+cvRp77y99Lpn19MZ9Turfujjz330eTajXfmJQCNNxpob157PPr1F382Poz8Lh21si8uXdn9PdEvP/efkr29u/NigEYbCrwkSbaj//7CB5Nbe2fzIqiVhd4rV78/+l//71+lTxzvBACNNzRQxS+/8WeTly++PxvMYIrsefJ/vvnXohe++ZN5EUBj3Qm8dHaX/MZXfW7HXMKXmpJf+/K/jF55/QfzIoBGuhNuL7/xQ9HrV39/vgUzi/cO7k5+5befSK5efzgvAmico8BLXrjwE2Z3LOzKrYeiT6aht39wJi8BaJQs4JLDw7uiF1//Y1kJLCD7PO+Vi380eualf+5LLEATZQNTfPH6d0W7t9+alcCCstD7zO/8jejVS381LwJojMEr8W9efl/4Z36ydTiG8LZ48rHf+tfRNy98f14E0AiDtzQv33xXtgVLEO8f3pN84rc/klzffSgvAti4wQzv8s2HsrejYFmu3Py90a988cPJ/r5/ZQNohEHg7e7dly1hSbIXUC+9+aPRp1/8J1GSeDEFbNwg8A4OT2RLWKIs9J599aeiVy7+xbwIYGMGgRd7Bc5qZH+J5ePPfTC6svsH8iKAjRgEHqxQvLd/Nvnob/2XZPfmA3kRwNoJPNbjzeuPRr/6hQ8lBwen8hKAtRJ4rEX2ed5XL/6J6Omv/YwvsQCbIPBYmyz0PvfS34peuvDn8iKAtRF4rFV8cHgy+cQX/2106fp350UAayHwWLv49t755L9+/j8nt/3+J7A+Ao/NuHD98ejJFz6UHB7u5CUAKyXw2Ijs87wvfONPxV/4xt/1JRZgHQQeGxNCL3nyhX8QvfStH8uLAFZG4LFR2ZdYfvXLPxe9efXdeRHASgg8Ni6+cfvB5BPPfyy6dOPxvAhg6eIkSaLk5595Mn750g/nZbARycntS9F7Hv5Q/Mj5X4vuOv1KFG/dCsWDvUCPJNF2vB+d2rqa7Oxci7fS9Tg+zPctTODRKOnzcRBwW1uJf4UfeiyMAdvR7WjnxNXo7OmXorfd+1z8zvs+HT18/tejM6e+nteai8ADoBWyF8Q723vJ285+buu9b/+55JEHPxrvbN/Id0/lMzwAWiF8szt80W3r1UvvT375i/8h+vDnPh99+dUfTw6TmX6fV+AB0DpxkmzFl288mnzyS/8x+qXnfzHZvfWOfNdYAg+A1sqC7yvf+uPRR576VHTx2g/kxbUEHgCtF1+99c7kiWd/Kbp044fyohECD4BOiG/tnU+eeOqjyaWr78mLhgg8ADojvrn/bdHHn38iuXl75F9jEXgAdMsb1x+PnvraB/KtIwIPgE4Jv70Q/eYrPxlduPw9eVFG4AHQOfHh4ank6Zf/flgdlAg8ALrqS6/9WHT5+qP5lsADoKMOk53kxdf/Ur4l8ADopuyzvC/+7p9OkmQ7bAs8ALrrwtXviq/tPhRWBR4A3RX+sPSbN94bVgUeAN32xrV3h4XAA6Czwud4yeWbj4R1gQdAt12/fX9YCDwAuu3W/j1hIfAA6LaDwb+IHidJEiU//8yT8cuXfjjbsYgkvR2m/8mWRUEQ/qJLeT0I29X1ok5QbI+rH5TbVNeDuvZFnaDYHlc/KLeprgdFm7o6QbFdrR/UtamuB0WbujpBsV2tH9S1qa4HRZu6OkGxXa0f1LWprgdFm7o6QbFdrR/UtamuB0WbujpBsV2tH9S1qa4HRZuiHFipOP15C9Oy8GO3Vfwczi95+NyT8V94348sFnhpmyzY9tJluIV1YwC940kPaxOCbycNveI2RwAWgTffW5oh6G6n6XYtvV1NbzfT7YNQPtgN/bL4K05gTmFidTsNmxshf9LguZHeDtLtOfJn9sDbT48agu5GugwhB6RC6Ak+WKsQciH8QvDtprfwkdoMpgdemNXtpkEXwk7QwRiCDzaiCL4wKZticuCF1LyeBt2t2dITEHqwdiGirqWhdyvNqwnGB14Rdvv5NjAjsz3YiPBu5ITQqw+88DZmCDtvYcIxCD5YuxB64cuVNUYDL0wNd9P/CDtYEqEHaxVCL3yDs2I08MLv1YUPAYElMtuDtckmbmnoVaJsOPCKb2QCKyL4YC3Ctzb3h/PsTuCFJAy/SF5JRGAVhB6sXCXTSjO8tNRbmbBGZnuwUuFzvNJneXcCL4SdvIMNEHywMqVvbA4CLwRd+LIKsEFCD5au9BdYBoEXAtAvmEMDmO3BUoV8yzPvzgwPaBDBB0uTv6t5Z4YHNJDQg2PLv7gyCLytwQJoIrM9OI54K85CbpB0B8mpbAk0mOCDRSQ3Bxk3CLzrt09kS6AFhB7MZW9vJyyywIuj2E8QtIrZHswqjpLsh8WHd9Bqgg9mJfCgE4QeTCPwoDPM9mASgQedI/igjsCDzhJ6UCbwoNPM9qAg8KAXBB8IPOgVoUd/CTzoHbM9+kngQW8JPvpF4EHvCT36QeABKbM9uk/gASWCj+4SeEANoUf3CDxgDLM9ukXgAVMIPbpB4AEzMNuj/QQeMAfBR3sJPGABgo/2EXjAMQg92kPgAcdktkc7CDxgSQQfzSbwgCUTejSTwANWwGyP5hF4wAoJPZpD4AErZrZHMwg8YE0EH5sl8IA1E3xshsADNkTosV4CD9ggsz3WR+ABDSD0WD2BBzSE2R6rJfCAhhF8rIbAAxpK8LFcAg9oOKHHcgg8oAXM9jg+gQe0iNBjcQIPaBmzPRYj8ICWEnzMR+ABLSf0mI3AAzrAbI/pBB7QIYKP8QQe0EFCj1ECD+gosz2GCTyg4wQfAwIP6Amh13cCD+gRs70+E3hADwm+PhJ4QI8JvT4ReEDPme31hcADyAi+rhN4AEOEXlcNAs/1BSgx2+uiOzM81xagQvB1yfBbmq4tQA2DYxfUf4bn2gLUMDC22eQvrbi2ABVmBG01OfAC1xaghoGxbaYHXsG1BagwI2iT2QMvcG0BahgY22C+wCsIPoAKA2PTLRZ4BdcWoELwNdXxAi9wbQFqGByb5viBV3BtAWoYGJtieYFXEHwAFQbGJlh+4BVcW4AKwbdJqwu8wLUFqGFg3ITVBl5B8AFUGBjXbT2BV3BtASoE37qsN/AC1xaghoFx1dYfeAXBB1BhYFylzQVewbUFqBB8q7D5wAtcW4AaBsZlakbgFQQfQIWBcVmaFXgF1xagQvAdVzMDL3BtAWoYGBfV3MArCD6ACgPjIpofeAXXFqBC8M2jPYEXuLYANQyMs2hX4BUEH0CFgXGadgZewbUFqBB847Q78ALXFqCGgbGq/YFXEHwAFQbGsu4EXsG1BagQfEH3Ai9wbQFq9Htg7GbgFQQfQEV/B8ZuB15B6AFU9C/4+hF4QX9f1ABM0J+BsT+BVxB8ABX9GBj7F3gFoQdQ0e3g62/gBf14UQMwp24OjP0OvILgA6jo3sAo8MqEHkBFd4JP4FV170UNwBK0f3AUeOMIPoAa7R0YBd40Qg+gop0zAoE3i3ZeW4AVa9fAKPDmIfgAKtozMAq8RQg9gIrmB5/AW1R7XtQArFFzB0aBd1yCD6CimQOjwFsWoQdQ0azgE3jL1MwXNQAb1oyBUeCtguADqNj8wCjwVknoAVRsLvgE3qpt/kUNQAOtf2AUeOsi+AAq1jswCrx1E3oAFesJPoG3Cet9UQPQEqsdGAXeJgk9gIrVzQgE3qat7toCtNjyB0aB1xSCD6BiuQOjwGua8vVN8iVAry0n+AReUy3n+gJ0yPEGRoHXZEIPoMZiA6PAawPBB1Ax/8Ao8NpE6AFUzB58Aq9t5n9RA9AD0wdGgddWgg+gYvLAKPDaTugBVNQHn8DrgskvagB6anhgFHhdIvgAKsKgOIg6gddFQg9ghMDrKqEHMETgdZm3OAGOCLw+EHwAAq9XBB/QYwKvj4Qe0EMCr6/M9oCeEXh9J/iAnhB4DAg9oOMEHneY7QEdJvAYJfSADhJ41DPbAzpG4DGZ4AM6QuAxG8EHtJzAYz5CD2gpgcf8zPaAFhJ4LE7wAS0i8Dg+oQe0gMBjOcz2gIYTeCyX4AMaSuCxGkIPaBiBx+qY7QENIvBYPcEHNIDAY32EHrBBAo/1MtsDNkTgsRmCD1gzgcdmCT1gTQQem2e2B6yBwKM5BB+wQgKP5hF6wAoIPJrJbA9YMoFHswk+YEkEHu0g9IBjEni0h9kecAwCj/YRfMACBB7tJfSAOQg82s1sD5iRwKMbBB8whcCjW4QeMIbAo3vM9oAaAo/uEnxAicCj+4QekBJ49IPZHvSewKNfBB/0lsCjn4Qe9I7Ao7/M9qBXBB4IPugFgQcFoQedJvCgzGwPOkvgQR3BB50j8GASoQedIfBgGrM96ASBB7MSfNBqAg/mJfSglQQeLMJsD1pH4MFxCD5oDYEHyyD4oPEEHiyT0IPGEniwbGZ70EgCD1ZF6EGjCDxYJbM9aAyBB+tQDr4kXwJrJfBgncz4YGMEHqyb0IONEHiwKYIP1krgwaYJPVgLgQdNYLYHKyfwoEkEH6yMwIMmEnqwdAIPmspsD5ZK4EHTCT1YCoEHbWC2B8cm8KBNhB4sTOBB25jtwUIEHrSV4IO5CDxoO8EHMxF40BVCDyYSeNAlZnswlsCDLhJ8MELgQZcJPTgi8KDrzPYgI/CgLwQfPSfwoG+EHj0l8KCPzPboIYEHfSb46BGBBwg9ekHgAQNme3ScwAOGCT46SuAB9YQeHSPwgPHM9ugQgQdMJ/joAIEHzE7w0WICD5if0KOFBB6wGLM9WkbgAccj+GgJgQcsh9Cj4QQesDxmezSYwAOWT/DRQAIPWB2hR4MIPGC1zPZoCIEHrIfgY8PiJEmi6N9/9pno1cvvy8uOb8ezGpgiHXpgrP0lPkHe/pZno7/+h//g8gMvZN1btvMVAJhXmksXD/L1JcgDb0VvaQo7ABa1mgxZUeB5rwKARa0mQ1bzGZ4JHnAcXjOzzOfASt/SDB11c3Nzc3Nb9LYCfi0BaJ7wLpF3ilgygQc0l+BjiQQe0HxCjyUQeEA7mO1xTAIPaBfBx4JW82sJJz0bgTVZ0Tf62LDbS7ywK/3TYmfDnxYDgAVdWv6fFlvR39LcGawDwCIu7ucrS7DSwLs3neF5VxOARYR3My+3YYYXCDtgk8KASbst8xr602Jubm6dvZXV7Xdr/m0F/FoC0G3ecSIn8IDuC6En+HpP4AH9IfR6TeAB/WK211sCD+gnwdc7q/m1hFPFsygsi6/bFGVhu7pe/kpOsT2uflBuU10P6toXdYJie1z9oNymuh4UberqBMV2tX5Q16a6HhRt6uoExXa1flDXproeFG3q6gTFdrV+UNemuh4UberqBMV2tX5Q16a6HhRt6uoExXa1flDXproeFG3q6gTFdrV+UNemuh4UberqBMV2tX5Q16a6HhRt6uoExXa1flDXproeFG3q6gTF9ri2wbj25Xrj6gTF9ri2wbj25XqL1AnGtZml/Sx1gnFtZmk/S51gXJtJ7evaBuU6QV29fP1mUbYEK//TYnFxRwBgDiGXVvCnxVbzlqawA2BRK8qQ1f1pMYAuWOI7a8zhSlv+tBhAlwi9dlvpW5oAXeJTmk4QeACzCKEn+FpN4AHMQ/C1lsADWITQax2BB7Aos71WGQTeoSsGsDDB12z5t2y30pU4OhxsAHAMQq+ZDtO5XZp1gxne/n62AOCYhF7z5BmXzvASlwdgmbzF2Txp1g3e0tz3ZwQAlk7wNcPhYf6W5mGyFW1vX8uLAVg2obdRadZdHczw0sBLzm1/JS8HYBXM9jbn/nu+Eh1GW1vRQbId33/v00kc/oo0ACsl+NYqZFv84JmnwuRu8BneY2/9H9H21o18PwCrJvTWI2Tb77v/yfxLK0kc3XP6UnTfuY8n6UZeBYBVM9tbqeydy3PnPhbde9fFwZdWwgwvvcXf984PRvHOpbweAOsi+FYjzbT4j3zHv8nWsxle4d6TF+NH3v6BtOx2XgLAOgm9pUnncbfjx97xj6KzJ9/MCuI42crmd1vxYbQdH0SPnHs6OvfAzyaHyc2sAgDrZbZ3bGnY7UYPPPAvokfPPZXlW27wlma2lhbubO3H33n+U/H5t/2zZG/rpSQ+9JkewCYIvrkl0WGS7G9/LX7gbf84fuyB3wiZlmVbmNil4uSNm+ejm/uno2v790SXbt0XvXnr/OB28/7kG5e/N9rf/UPRyf13RNvJqThtmR0VgPUy/agVQi46iG9FezsvRyfOfDZ+532fic6fvhB92+k3onMnL0ZvOXk5OrNzIzq9czNOfufKd0S3Dk5Fuwd3Rdf37o6u7J2Nru7dG13buye6sX8m7Etu7r0lDcVz0d7+2fTYO9k3O4/EoyE4tD9V2Y6Tapvs+6GjxwlmLS+f43DSv3dUOXe1r0dK5SP9TVXbhdcQI0JRzfGH+n70LB6uV71/B8V2+Z+2qOlXUHufirql9tX7VdMue200WBsscukVi0PPRxok5ce+2r/S5rjHfah97nCGx39I3WM+5rEqqztm7XWtlz4gM9cN0h/U7DEMQsP0BeWxhrS097O3D+/t1ImPujSb2t/fnXKMunNs1Rwnrnk8htreWQ1r6d0frl/XPhWP9C99Ntc9HtV+Ht3X8j8jWj3npPteab9dOefo9cu3S0+r+mtcVzZ8jUfuS9guxoIxfR5+rOvrbJUe43L98c/Fo/I4q5/+P7t7aYPyc6m2v4VSve2tvejEzpU0zN6M7zpxOYRadPfO9eieE9eisyeuRPeevJpt37WzG53Y2ouTZ15/X7R3eCK6fXAyunlwOtrdvysLv7AeysK+/TTkwp8gCwNC8UN9tKwMEtUf+kn7h9Yn1Zt2jjvbSaVu+jCN3Td03HGD/8i5ym3urFdDfOhcdfelvD8ot5/WNhhaH9P3oGg/cr58uy4IprUfOVZN38f1Ozd8Xcb0MZi4r1Q27vELyn0JKvtr+1I27Xh1pvV3XtUBoDCuvKpuAKq0TR/Boe20t1PbzHLc9AG+sz2yL9+ecJyp/Sofs9g3qQ/BUJtKH6ptg6J9Xbug3Kdq+0XbjuvzmLaDALnjKECG6g/Xqb3P5fOWysvHL65B9Zx3jle6T0FRb1r5LO3KZdkt3Q7fQQlvX6ahFp3aupUFXHbb3o1Obd+KTm7dzj6ySz792g+Ev7YS7R/uDILv8GQWdGEZysK+EHbhFmSnKH5w00X5h3jaYFG7PztIvhHkVera1Q0Y1WOW+1aY1IeJ+0rbyz5GULev2j7Iy8ohml7ikbLMyHYeBOXy6jmOzl0+filAUrUBPnKu4jiVc9bep2Jf+bihXfGqM326De2rOWd5Pci281fPxb5x9zUYqhNWw/MwXY4ct3KMoFSnuBazGLleR+cdb2RQmSI9w3D9uva1dUJR0b10vahT275SNlQ3v4aT2h0t6/pR077arqzazzEDduaozp3zjg2KIOwr76/tb1iOCafU1KAYOWbl/gTjzhvM0j6YVh4MrY9rH5al5+0s/Rw5bqna2PNMKk//X+wvPqMLobe9dZCFXriFkAu3sB7CMN0fJ8+/8d3p82srOjjcHgRfOpsrgq4Iu/BDGuoMDRAV2b7Sg1Co1h03OJQHgqE64Xjp5shAkavtS/WcNW2LOtmy3OewWak/7ni1557WNt/O6oXV9NzlOuXysqN25brFejhG0S5slvpQWz+VrefnGCof0/9ynaBoX9d2qKy6P2yW25XW69qV22Tb5fJcbftif7oYqpuul+sF+fadMBos0jHsqN5w4JfXh18Y1Bo6bn4/5lK0S5flgWOSmQfgfPDIxOm+yvHL28V6qf1gPWwe3cXR+kFt22J/6X6V2wTVdtn2jOcKas+Xqiuf2m6GfgZZ27AZ6pf7nRu3HuqHzZE2lfs71CY1sl3qe3DUru4+5SYdo7xv3LHLao8Viqr3o3KsYOhc5eNU2gbl46RTssEyfPkyzsItC7k86LJbWj9OfvfGg2mzNNDyWVx2C81L20Gok/3g5helOmgUhspDfyrVyoNFWfV4Q/Xy1XFtg6x96fEZOV61I2V5u3Kdse2LcxSbNX0aOs6U/UFWp1RUbTO2XzXXoe7ck+pUj1Huy7h+ZMuaxyw4qlNqO3T8mrYjx6jp98TjheW4/ZVjHe2r3u+a/YPFaJ2gfL6gvC8I2+EHMqsXduXHC6p1xyn/cB/Jj1U3WAR1bcp1y/uH6mbdHLMvVRxjpDzfrvbnqDws87tbbju0XtO/unZ1ZcHQenGsUHVMn8IxJrYPm9U6NX0MivVx+4Oj7Sl9D8b2OVfdDiaeu9hXFE97/MJ6Xqdq5NjldpV+F7Lyyq6Z+hvM2C6UF9sh8IpbCLlsPYRhuj+tFyc3909lFbMm6Q/noGlpPV8Wyutl1QFgknHHKJv1eJOONe08486xSLuxj8uk/lWOU607tF25+OV9Q+sTHrexx0+PXd1XyI5XVJvQ36H2leOVjxFMPE5pX+0x8sdh3Lmz9XF1KuXl/cHYc5frhWOkm+PqFqr3cVWGBohc+Ikty+rk/S6U6wytTznepLoz7yutpxtH2+PaD9XPHd2nXFH/qO4M9zU4Ok+6qPY5yOrnxxppW9kuTOr70PaYPgYj2zV9K9T1o7ZszDFC3fAcnrdNnXHlhUn3I5i3fbl+WA/7h5al9VAlOSz/4ObrYXe2LPaFRVq/KF/UcdsHiw4ks5w71MkfmMzIuaqHmPMxqas76/2Zdp5s/52uH6k9Z7kstKlUGden6rFmrlfTh6DaftbjB+W6Wb1S1XK7unMflVWuX13dwtE58sd42nHLJh13EeXnaCY//Eh57qh8Sr1Cef9Q23S1bsCqHm/aoDRJue204xZG6k04x6S+lQ3VC6ulS1jXZqRshsd60r7CrPd5kpH7UlHsD8/Taced57zBuP5PMvc5SvWL89WVpeKk8lb/kGX/oE5SPNgLnbN0H+ZtX35gjnt/Jw3Qi5qlT1mdCdcxkx9mkT5O6kPtvrQv8zyW0+pO6vMibattFj3/PPexsMjjv8igURg3eMxyzLq2yz5eYVL7Se2qjurWPMwTzz/HOYKsvzM0Oe7jsqhZzlun3JdZn99D/Z/x6b2K+1yYcOzJgdcXiwxcm5YNnPN0u3Sd57m/4cmzroF90esw1G7a8zmtOm/fJvWr9ljzHf74xtznZYVI2VztSo/DIudbqM0CA31xnlmff0P9muNaL3J/NqVNfZ2DwGOyRUNoHdYV+gwsOtBn8qaLzjzWoaODPHcIPJimi+FocKeHBB4AvZD/WQoA6DaBB0AvCDwAekHgAdALAg+AXhB4APSCwAOgFwQeAL0g8ADoBYEHQC8IPAB6QeAB0AsCD4BeEHgA9ILAA6AHouj/A2S1Cm4wlWbHAAAAAElFTkSuQmCC";

    function El() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content event-grid", children: [(0, s.jsx)("div", { className: "folder-info-container", children: (0, s.jsxs)("div", { className: "folder-info", children: [(0, s.jsxs)("div", { className: "folder-info-header", children: [(0, s.jsxs)("div", { className: "circles", children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})] }), (0, s.jsxs)("div", { className: "window-icon", children: [(0, s.jsx)("div", { children: (0, s.jsx)("img", { src: wl }) }), (0, s.jsx)("div", { children: (0, s.jsx)("img", { src: Al }) })] }), (0, s.jsx)("div", { className: "search-icon", children: (0, s.jsx)("img", { src: jl }) })] }), (0, s.jsxs)("div", { className: "folder-data-basic", children: [(0, s.jsx)("img", { src: Cl }), (0, s.jsxs)("div", { children: [(0, s.jsx)("h1", { children: "TECHKNOWQUIZ" }), (0, s.jsx)("h2", { children: "Modified: Today, 11:42 AM" }), (0, s.jsx)("h2", { children: "2MB" })] })] }), (0, s.jsxs)("div", { className: "general-information", children: [(0, s.jsx)("h1", { children: "GENERAL" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Kind: Folder" }), (0, s.jsx)("li", { children: "Size: 2009811 bytes (2MB on disk) for 3 items" }), (0, s.jsx)("li", { children: "Where: Macintosh HD \u25cf Users \u25cf Techfusion" }), (0, s.jsx)("li", { children: "Created: 26 August, 2024 at 6:38 PM" }), (0, s.jsx)("li", { children: "Modified: 26 August, 2024 at 6:38 PM" })] }), (0, s.jsx)("h1", { children: "PREVIEW" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "preview-image-holder", children: (0, s.jsx)("img", { src: Cl }) })] })] }) }), (0, s.jsx)("div", { className: "icon-container guidlines-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/techknowquiz/guidelines", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "GUIDELINES.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container registration-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/register/techknowquiz", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "REGISTRATION.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container about-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/techknowquiz/about", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "README.txt" })] }) })] })] }) }

    function Sl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content event-grid", children: [(0, s.jsx)("div", { className: "folder-info-container", children: (0, s.jsxs)("div", { className: "folder-info", children: [(0, s.jsxs)("div", { className: "folder-info-header", children: [(0, s.jsxs)("div", { className: "circles", children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})] }), (0, s.jsxs)("div", { className: "window-icon", children: [(0, s.jsx)("div", { children: (0, s.jsx)("img", { src: wl }) }), (0, s.jsx)("div", { children: (0, s.jsx)("img", { src: Al }) })] }), (0, s.jsx)("div", { className: "search-icon", children: (0, s.jsx)("img", { src: jl }) })] }), (0, s.jsxs)("div", { className: "folder-data-basic", children: [(0, s.jsx)("img", { src: Cl }), (0, s.jsxs)("div", { children: [(0, s.jsx)("h1", { children: "HACK-A-THON" }), (0, s.jsx)("h2", { children: "Modified: Today, 11:42 AM" }), (0, s.jsx)("h2", { children: "2MB" })] })] }), (0, s.jsxs)("div", { className: "general-information", children: [(0, s.jsx)("h1", { children: "GENERAL" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Kind: Folder" }), (0, s.jsx)("li", { children: "Size: 2009811 bytes (2MB on disk) for 3 items" }), (0, s.jsx)("li", { children: "Where: Macintosh HD \u25cf Users \u25cf Techfusion" }), (0, s.jsx)("li", { children: "Created: 26 August, 2024 at 6:38 PM" }), (0, s.jsx)("li", { children: "Modified: 26 August, 2024 at 6:38 PM" })] }), (0, s.jsx)("h1", { children: "PREVIEW" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "preview-image-holder", children: (0, s.jsx)("img", { src: Cl }) })] })] }) }), (0, s.jsx)("div", { className: "icon-container guidlines-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/hack-a-thon/guidelines", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "GUIDELINES.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container registration-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/register/hack-a-thon", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "REGISTRATION.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container about-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/hack-a-thon/about", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "README.txt" })] }) })] })] }) }

    function kl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content event-grid", children: [(0, s.jsx)("div", { className: "folder-info-container", children: (0, s.jsxs)("div", { className: "folder-info", children: [(0, s.jsxs)("div", { className: "folder-info-header", children: [(0, s.jsxs)("div", { className: "circles", children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})] }), (0, s.jsxs)("div", { className: "window-icon", children: [(0, s.jsx)("div", { children: (0, s.jsx)("img", { src: wl }) }), (0, s.jsx)("div", { children: (0, s.jsx)("img", { src: Al }) })] }), (0, s.jsx)("div", { className: "search-icon", children: (0, s.jsx)("img", { src: jl }) })] }), (0, s.jsxs)("div", { className: "folder-data-basic", children: [(0, s.jsx)("img", { src: Cl }), (0, s.jsxs)("div", { children: [(0, s.jsx)("h1", { children: "GAMEFIESTA" }), (0, s.jsx)("h2", { children: "Modified: Today, 11:42 AM" }), (0, s.jsx)("h2", { children: "2MB" })] })] }), (0, s.jsxs)("div", { className: "general-information", children: [(0, s.jsx)("h1", { children: "GENERAL" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Kind: Folder" }), (0, s.jsx)("li", { children: "Size: 2009811 bytes (2MB on disk) for 3 items" }), (0, s.jsx)("li", { children: "Where: Macintosh HD \u25cf Users \u25cf Techfusion" }), (0, s.jsx)("li", { children: "Created: 26 August, 2024 at 6:38 PM" }), (0, s.jsx)("li", { children: "Modified: 26 August, 2024 at 6:38 PM" })] }), (0, s.jsx)("h1", { children: "PREVIEW" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "preview-image-holder", children: (0, s.jsx)("img", { src: Cl }) })] })] }) }), (0, s.jsx)("div", { className: "icon-container guidlines-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/game-fiesta/guidelines", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "GUIDELINES.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container registration-icon-container-1", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/register/game-fiesta/fortnite", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "REGISTRATION-FORTNITE.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container registration-icon-container-2", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/register/game-fiesta/valorant", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "REGISTRATION-VALORANT.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container about-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/game-fiesta/about", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "README.txt" })] }) })] })] }) }

    function Pl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content event-grid", children: [(0, s.jsx)("div", { className: "folder-info-container", children: (0, s.jsxs)("div", { className: "folder-info", children: [(0, s.jsxs)("div", { className: "folder-info-header", children: [(0, s.jsxs)("div", { className: "circles", children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})] }), (0, s.jsxs)("div", { className: "window-icon", children: [(0, s.jsx)("div", { children: (0, s.jsx)("img", { src: wl }) }), (0, s.jsx)("div", { children: (0, s.jsx)("img", { src: Al }) })] }), (0, s.jsx)("div", { className: "search-icon", children: (0, s.jsx)("img", { src: jl }) })] }), (0, s.jsxs)("div", { className: "folder-data-basic", children: [(0, s.jsx)("img", { src: Cl }), (0, s.jsxs)("div", { children: [(0, s.jsx)("h1", { children: "DECRYPTION DUEL" }), (0, s.jsx)("h2", { children: "Modified: Today, 11:42 AM" }), (0, s.jsx)("h2", { children: "2MB" })] })] }), (0, s.jsxs)("div", { className: "general-information", children: [(0, s.jsx)("h1", { children: "GENERAL" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Kind: Folder" }), (0, s.jsx)("li", { children: "Size: 2009811 bytes (2MB on disk) for 3 items" }), (0, s.jsx)("li", { children: "Where: Macintosh HD \u25cf Users \u25cf Techfusion" }), (0, s.jsx)("li", { children: "Created: 26 August, 2024 at 6:38 PM" }), (0, s.jsx)("li", { children: "Modified: 26 August, 2024 at 6:38 PM" })] }), (0, s.jsx)("h1", { children: "PREVIEW" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "preview-image-holder", children: (0, s.jsx)("img", { src: Cl }) })] })] }) }), (0, s.jsx)("div", { className: "icon-container guidlines-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/decryption-duel/guidelines", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "GUIDELINES.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container registration-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/register/decryption-duel", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "REGISTRATION.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container about-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/decryption-duel/about", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "README.txt" })] }) })] })] }) }

    function Nl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content event-grid", children: [(0, s.jsx)("div", { className: "folder-info-container", children: (0, s.jsxs)("div", { className: "folder-info", children: [(0, s.jsxs)("div", { className: "folder-info-header", children: [(0, s.jsxs)("div", { className: "circles", children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})] }), (0, s.jsxs)("div", { className: "window-icon", children: [(0, s.jsx)("div", { children: (0, s.jsx)("img", { src: wl }) }), (0, s.jsx)("div", { children: (0, s.jsx)("img", { src: Al }) })] }), (0, s.jsx)("div", { className: "search-icon", children: (0, s.jsx)("img", { src: jl }) })] }), (0, s.jsxs)("div", { className: "folder-data-basic", children: [(0, s.jsx)("img", { src: Cl }), (0, s.jsxs)("div", { children: [(0, s.jsx)("h1", { children: "WEB PALETTE" }), (0, s.jsx)("h2", { children: "Modified: Today, 11:42 AM" }), (0, s.jsx)("h2", { children: "2MB" })] })] }), (0, s.jsxs)("div", { className: "general-information", children: [(0, s.jsx)("h1", { children: "GENERAL" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Kind: Folder" }), (0, s.jsx)("li", { children: "Size: 2009811 bytes (2MB on disk) for 3 items" }), (0, s.jsx)("li", { children: "Where: Macintosh HD \u25cf Users \u25cf Techfusion" }), (0, s.jsx)("li", { children: "Created: 26 August, 2024 at 6:38 PM" }), (0, s.jsx)("li", { children: "Modified: 26 August, 2024 at 6:38 PM" })] }), (0, s.jsx)("h1", { children: "PREVIEW" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "preview-image-holder", children: (0, s.jsx)("img", { src: Cl }) })] })] }) }), (0, s.jsx)("div", { className: "icon-container guidlines-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/web-palette/guidelines", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "GUIDELINES.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container registration-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/register/web-palette", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "REGISTRATION.txt" })] }) }), (0, s.jsx)("div", { className: "icon-container about-icon-container", children: (0, s.jsxs)(gl, { to: "/sites/techfusion/events/web-palette/about", children: [(0, s.jsx)("div", { className: "file-image-holder" }), (0, s.jsx)("p", { children: "README.txt" })] }) })] })] }) }

    function Tl() {
        return (0, r.useEffect)((() => {
            const e = document.getElementsByClassName("navlink");
            for (let t of e) t.classList.remove("active-page-a");
            e[1].classList.add("active-page-a")
        }), []), (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)("a", { href: "https://drive.google.com/file/d/1D15vZyTPuUhclXMIoxfYWuBV9nwSaRXj/view?usp=drive_link", target: "_blank", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "BROCHURE" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/resources/oc", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "ORGANIZING COMMITTEE" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsx)("div", { className: "terminal", children: (0, s.jsx)("h1", { children: "RESOURCES" }) }) })] })] })
    }

    function Bl() {
        return (0, r.useEffect)((() => {
            const e = document.getElementsByClassName("navlink");
            for (let t of e) t.classList.remove("active-page-a");
            e[2].classList.add("active-page-a")
        }), []), (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsx)("div", { className: "terminal", children: (0, s.jsx)("h1", { children: "GUIDELINES" }) }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "It is an online event." }), (0, s.jsx)("li", { children: "Students cannot participate in multiple events." }), (0, s.jsx)("li", { children: "Students are only allowed to participate through their school." }), (0, s.jsx)("li", { children: "Schools must ensure that their registration form is complete and as per requirements." }), (0, s.jsx)("li", { children: "Registration Foms must be filled by a teacher in-charge only." }), (0, s.jsx)("li", { children: "Offensive language or indecent behavior will not to be tolerated." }), (0, s.jsx)("li", { children: "Participants should be present at the time allotted to them." }), (0, s.jsx)("li", { children: "WhatsApp group will be created to coordinate with the schools." }), (0, s.jsx)("li", { children: "The decision of the judges will be final." }), (0, s.jsx)("li", { children: "Not abiding by the rules and regulations will lead to instant disqualification." })] }) }), (0, s.jsx)("div", { className: "buffer" })] })] })
    }

    function Il() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "GUIDELINES-" }), (0, s.jsx)("h1", { children: "TECHKNOWQUIZ" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Participants will be required to screen share during the event and if found cheating will be disqualified." }), (0, s.jsx)("li", { children: "Registration fee is \u20b9150 per participant." }), (0, s.jsx)("li", { children: "Each school may register up to 2 participants for the quiz." }), (0, s.jsx)("li", { children: "Further details and topics will be communicated through the designated WhatsApp group." }), (0, s.jsx)("li", { children: "For any inquiries about the event, please contact us via email at dpswtechfusion@gmail.com." })] }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Dl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "GUIDELINES-" }), (0, s.jsx)("h1", { children: "DECRYPTION" }), (0, s.jsx)("h1", { children: "DUEL" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Each team should consist of 3 members, participation is limited to one team per school." }), (0, s.jsx)("li", { children: "External assistance from individuals not on the team is not permitted." }), (0, s.jsx)("li", { children: "One member of the team will be given the link to the challenge and will be required to screen share and the other two members can help with the challenge." }), (0, s.jsx)("li", { children: "The team to successfully solve all challenges with the fastest time will be declared the winner." }), (0, s.jsx)("li", { children: "A registration fee of \u20b9450 applies." }), (0, s.jsx)("li", { children: "For any inquiries about the event, please contact us via email at dpswtechfusion@gmail.com." }), (0, s.jsx)("li", { children: "Further details and topics will be communicated through the designated WhatsApp group." })] }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Fl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "GUIDELINES-" }), (0, s.jsx)("h1", { children: "GAME FIESTA" })] }) }), (0, s.jsxs)("div", { className: "rules-container", children: [(0, s.jsx)("h1", { children: "VALORANT" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "A registration fee of \u20b9750 applies." }), (0, s.jsx)("li", { children: "The event will follow a classic tournament format." }), (0, s.jsx)("li", { children: "Any form of cheating will lead to instant disqualification." }), (0, s.jsx)("li", { children: "Each team should consist of 6 members (5 main players+ 1 substitute player)." }), (0, s.jsx)("li", { children: "For any inquiries about the event, please contact us via email at dpswtechfusion@gmail.com." }), (0, s.jsx)("li", { children: "Further details and topics will be communicated through the designated WhatsApp group." })] }), (0, s.jsx)("h1", { children: "FORTNITE" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "A registration fee of \u20b9600 applies." }), (0, s.jsx)("li", { children: "Each team should have 5 players (4 main players+ 1 substitute)." }), (0, s.jsx)("li", { children: "Any form of cheating will lead to instant disqualification." }), (0, s.jsx)("li", { children: "Further details and topics will be communicated through the designated WhatsApp group." }), (0, s.jsx)("li", { children: "For any inquiries about the event, please contact us via email at dpswtechfusion@gmail.com." })] })] }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Rl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "GUIDELINES-" }), (0, s.jsx)("h1", { children: "HACK-A-THON" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Participants will be required to screen share during the event and if found cheating will be disqualified." }), (0, s.jsxs)("li", { children: ["The programming languages to be used at this event are ", (0, s.jsx)("i", { children: (0, s.jsx)("u", { children: "Python" }) }), " and ", (0, s.jsx)("i", { children: (0, s.jsx)("u", { children: "Java" }) }), "."] }), (0, s.jsx)("li", { children: "Each school may register up to 2 participants for the event." }), (0, s.jsx)("li", { children: "Registration fee is \u20b9150 per participant." }), (0, s.jsx)("li", { children: "For any inquiries about the event, please contact us via email at dpswtechfusion@gmail.com." }), (0, s.jsx)("li", { children: "Further details and topics will be communicated through the designated WhatsApp group." })] }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Ll() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "GUIDELINES-" }), (0, s.jsx)("h1", { children: "WEB PALETTE" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: "Each team will have one hour to design a website using platforms such as WordPress or similar systems. Participants are required to screen share their work." }), (0, s.jsx)("li", { children: "External assistance is not permitted." }), (0, s.jsx)("li", { children: "No coding is required for this event" }), (0, s.jsx)("li", { children: "Each school may register up to 2 participants for the event." }), (0, s.jsx)("li", { children: "A registration fee of \u20b9150 per participant  applies." }), (0, s.jsx)("li", { children: "For any inquiries about the event, please contact us via email at dpswtechfusion@gmail.com" })] }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Ml() {
        return (0, r.useEffect)((() => {
            const e = document.getElementsByClassName("navlink");
            for (let t of e) t.classList.remove("active-page-a");
            e[3].classList.add("active-page-a")
        }), []), (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)(gl, { to: "/sites/techfusion/register/techknowquiz", className: "reg-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "TECHKNOWQUIZ" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/register/hack-a-thon", className: "reg-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "HACK-A-THON" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/register/decryption-duel", className: "reg-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "DECRYPTION DUEL" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/register/game-fiesta/valorant", className: "reg-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "GAME FIESTA - VALORANT" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/register/game-fiesta/fortnite", className: "reg-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "GAME FIESTA - FORTNITE" })] }) }), (0, s.jsx)(gl, { to: "/sites/techfusion/register/web-palette", className: "reg-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "WEB PALETTE" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsx)("div", { className: "terminal", children: (0, s.jsx)("h1", { children: "REGISTRATION" }) }) })] })] })
    }

    function Ol() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "ABOUT-" }), (0, s.jsx)("h1", { children: "TECHKNOWQUIZ" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsx)("p", { children: "Introducing a thought-provoking quiz designed to evaluate your proficiency in technology as an individual. Do you have what it takes to excel as a top contender by demonstrating exceptional accuracy and successfully navigating through three challenging elimination rounds?" }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Ql() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "ABOUT-" }), (0, s.jsx)("h1", { children: "DECRYPTION" }), (0, s.jsx)("h1", { children: "DUEL" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsx)("p", { children: "Introducing a thought-provoking quiz designed to evaluate your proficiency in technology as an individual. Do you have what it takes to excel as a top contender by demonstrating exceptional accuracy and successfully navigating through three challenging elimination rounds?" }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Ul() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "ABOUT-" }), (0, s.jsx)("h1", { children: "GAME FIESTA" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsx)("p", { children: "Explore a diverse selection of highly engaging multiplayer video games designed to test and showcase your creativity, strategic thinking, teamwork, and gaming prowess , all in pursuit of victory." }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function zl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "ABOUT-" }), (0, s.jsx)("h1", { children: "HACK-A-THON" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsx)("p", { children: "Hack-A-Thon is a thrilling competitive coding event where participants are tasked with solving a series of coding problems within a specified time frame. This event is designed to test and showcase your problemsolving abilities, algorithmic thinking, and coding skills in a high-energy environment." }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Vl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "ABOUT-" }), (0, s.jsx)("h1", { children: "WEB PALETTE" })] }) }), (0, s.jsx)("div", { className: "rules-container", children: (0, s.jsx)("p", { children: "Unleash your creativity in the ultimate web design showdown! Put your skills to the test and race against the clock to craft the most stunning website, the best will rise to the top!" }) }), (0, s.jsx)("div", { className: "buffer" })] })] }) }

    function Hl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)("a", { href: "https://forms.gle/KPb6kqf8temWiqFbA", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "SCHOOL REGISTRATION" })] }) }), (0, s.jsx)("a", { href: "https://forms.gle/uJbRx1BZZMDzcANJ7", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "INDIVIDUAL REGISTRATION" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "REGISTRATION" }), (0, s.jsx)("h1", { children: "DECRYPTION" }), (0, s.jsx)("h1", { children: "DUEL" })] }) })] })] }) }

    function Kl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)("a", { href: "https://forms.gle/vACVrXJo6ej2xWy98", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "SCHOOL REGISTRATION" })] }) }), (0, s.jsx)("a", { href: "https://forms.gle/SpDsPQK4Toyy8WxP7", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "INDIVIDUAL REGISTRATION" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "REGISTRATION" }), (0, s.jsx)("h1", { children: "FORTNITE" })] }) })] })] }) }

    function Wl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)("a", { href: "https://forms.gle/YJ9qfK24SMuKunKD8", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "SCHOOL REGISTRATION" })] }) }), (0, s.jsx)("a", { href: "https://forms.gle/TorqUdDva5DpyYxg6", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "INDIVIDUAL REGISTRATION" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "REGISTRATION" }), (0, s.jsx)("h1", { children: "VALORANT" })] }) })] })] }) }

    function Yl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)("a", { href: "https://forms.gle/ye6VMk2SNK7G2yPS8", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "SCHOOL REGISTRATION" })] }) }), (0, s.jsx)("a", { href: "https://forms.gle/ZRkQXfJJsPpM7pEu6", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "INDIVIDUAL REGISTRATION" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "REGISTRATION" }), (0, s.jsx)("h1", { children: "HACK-A-THON" })] }) })] })] }) }

    function Gl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)("a", { href: "https://forms.gle/DmRxQ46FwJjRSAzbA", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "SCHOOL REGISTRATION" })] }) }), (0, s.jsx)("a", { href: "https://forms.gle/QkTvhtncSMadrqBu5", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "INDIVIDUAL REGISTRATION" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "REGISTRATION" }), (0, s.jsx)("h1", { children: "TECHKNOWQUIZ" })] }) })] })] }) }

    function Xl() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content abs", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsx)("a", { href: "https://forms.gle/4z2RWcxArZtGUNJt6", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "SCHOOL REGISTRATION" })] }) }), (0, s.jsx)("a", { href: "https://forms.gle/8pttfP5fnqZxTNTL9", className: "res-folder", children: (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "INDIVIDUAL REGISTRATION" })] }) })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "REGISTRATION" }), (0, s.jsx)("h1", { children: "WEB PALETTE" })] }) })] })] }) }

    function ql() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(Gs, {}), (0, s.jsxs)("div", { className: "content", children: [(0, s.jsxs)("div", { className: "folder-holder", children: [(0, s.jsxs)("div", { className: "folder", children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "KANIKA MOHAN" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "folder-name", children: "HEAD OF EVENT" })] }), (0, s.jsxs)("div", { className: "folder", children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "DEVINA JHA" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "folder-name", children: "HEAD OF DESIGN" })] }), (0, s.jsxs)("div", { className: "folder", children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "TEJUS REDDY BASIREDDYGARI" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "folder-name", children: "HEAD OF EVENT" })] }), (0, s.jsxs)("div", { className: "folder", children: [(0, s.jsx)("div", { className: "folder-img" }), (0, s.jsx)("div", { className: "folder-name", children: "TATHYA GARG" }), (0, s.jsx)("hr", {}), (0, s.jsx)("div", { className: "folder-name", children: "HEAD OF TECH" })] })] }), (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "ORGANIZING" }), (0, s.jsx)("h1", { children: "COMMITTEE" })] }) })] })] }) }

    function _l() {
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
                className: "content",
                children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsx)("div", { className: "terminal", children: (0, s.jsx)("h1", { children: "REGISTER" }) }) }), (0, s.jsxs)("div", {
                    className: "rules-container",
                    children: [(0, s.jsx)("p", { children: "Enter your name, and click the submit button." }), (0, s.jsx)("p", { children: "After clicking the submit button, you will get a user ID. Please save this user ID in a file somewhere as you will require it to submit your flags." }), (0, s.jsx)("br", {}), (0, s.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault();
                            let t = e.target[0].value;
                            fetch("https://www.techfusion.net.in/challenge/add-participant", { method: "POST", headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ name: t }) }).then((e => e.json())).then((e => { document.getElementById("uid").innerText = e }))
                        },
                        children: [(0, s.jsx)("label", { for: "name", children: "Name: " }), (0, s.jsx)("input", { type: "text", id: "name", name: "name", required: !0 }), (0, s.jsx)("input", { type: "submit", value: "Submit" })]
                    }), (0, s.jsxs)("div", { children: ["Your User ID is ", (0, s.jsx)("p", { id: "uid", children: "..." })] }), (0, s.jsxs)("div", { children: ["After getting your User ID, go to ", (0, s.jsx)("a", { href: "/challenge/submit", style: { color: "white" }, children: "the submit page" })] })]
                })]
            })
        })
    }

    function Jl() {
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
                className: "content",
                children: [(0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsx)("div", { className: "terminal", children: (0, s.jsx)("h1", { children: "SUBMIT" }) }) }), (0, s.jsxs)("div", {
                    className: "rules-container",
                    children: [(0, s.jsx)("p", { children: "Submit your flags here!" }), (0, s.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault();
                            let t = new FormData;
                            t.append("user_id", e.target[0].value), t.append("flag", e.target[1].value), fetch("https://www.techfusion.net.in/challenge/process-submission", { method: "POST", headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ user_id: e.target[0].value, flag: e.target[1].value }) }).then((e => e.json())).then((e => { const t = document.getElementById("next-link"); - 1 !== e && !1 !== e ? (document.getElementById("not-registered").style.display = "none", t.href = `/challenge/challenge-${e}`, t.style.color = "#00ff00") : !1 === e ? (document.getElementById("not-registered").style.display = "none", t.style.color = "#ff0000") : document.getElementById("not-registered").style.display = "block" }))
                        },
                        children: [(0, s.jsx)("label", { for: "uid", children: "User ID: " }), (0, s.jsx)("input", { type: "text", id: "uid", name: "uid", required: !0 }), (0, s.jsx)("br", {}), (0, s.jsx)("label", { for: "flag", children: "Flag: " }), (0, s.jsx)("input", { type: "text", id: "flag", name: "flag", required: !0 }), (0, s.jsx)("input", { type: "submit", value: "Submit" })]
                    }), (0, s.jsxs)("div", { children: [(0, s.jsxs)("p", { id: "not-registered", style: { display: "none" }, children: ["You are not registered! Go to ", (0, s.jsx)("a", { href: "https://www.techfusion.net.in/challenge/register to register and get a valid user ID!" })] }), (0, s.jsx)("a", { id: "next-link", children: "If your answer is correct, this element will take you to the next challenge." })] })]
                })]
            })
        })
    }

    function Zl() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: "content", children: (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("p", { style: { display: "none" }, className: "the-classic-caeser-cipher" }), (0, s.jsx)("h1", { className: "oanajzelepu", id: "shift-by-4", children: "ET TU, BRUTE?" })] }) }) }) }) }

    function $l() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: "content", children: (0, s.jsxs)("div", { className: "content-blocker", children: [(0, s.jsx)("h1", { children: "Why is this page so bright?" }), (0, s.jsxs)("div", { className: "centerify", style: { position: "absolute", top: "200px", left: "50%", transform: "translateX(-50%)", color: "white", userSelect: "none", width: "100%" }, children: [(0, s.jsx)("h1", { children: "Finally, you can see something now!" }), (0, s.jsx)("h2", { style: { marginTop: "100px" }, children: "Here's your second flag: ephemeral" })] })] }) }) }) }
    const eu = n.p + "sites/techfusion/static/media/qr.7926c91202ea429c5970.png";

    function tu() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: "content", children: (0, s.jsx)("img", { src: eu }) }) }) }

    function nu() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)("div", { className: "content", children: [(0, s.jsx)("div", { className: "rules-container", children: (0, s.jsxs)("p", { style: { fontSize: "25px" }, children: ["Do not go gentle into that good night,", (0, s.jsx)("br", {}), "Old age should burn and rave at close of day;", (0, s.jsx)("br", {}), "Rage, rage against the dying of the light.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Though men at their end know dark is right,", (0, s.jsx)("br", {}), "Because their words had forked no lightning they", (0, s.jsx)("br", {}), "Do not go gentle into that good night.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Good men, the last wave by, crying how bright", (0, s.jsx)("br", {}), "Their deeds might have danced in a green bay,", (0, s.jsx)("br", {}), "Rage, rage against the dying of the light.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Men who caught and sang the sun in flight,", (0, s.jsx)("br", {}), "And learn, too late, they grieved it on its way,", (0, s.jsx)("br", {}), "Do not go gentle into that good night.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Grave men, near death, who see with blinding sight", (0, s.jsx)("br", {}), "Blind eyes could blaze like meteors and be gay,", (0, s.jsx)("br", {}), "Rage, rage against the dying of the light.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "And you, my father, there on the sad height,", (0, s.jsx)("br", {}), "Curse, bless, me with your fierce tears, I pray.", (0, s.jsx)("br", {}), "Do not go gentle into that good night.", (0, s.jsx)("br", {}), "Rage, rage against the dying of the light.", (0, s.jsx)("br", {})] }) }), (0, s.jsxs)("div", { className: "rules-container", children: [(0, s.jsx)("h1", { children: "Instructions" }), "Oh no! Looks like some word robbers have stolen some words from this poem. For your next flag, find which words have been removed from the poem. Then, take these words in lowercase form, mash them all together, and sort the letters in alphabetical order. Your flag is the resultant string.", (0, s.jsx)("br", {}), 'For example, if the words were "Hello Hi", your result would be:', (0, s.jsx)("br", {}), (0, s.jsxs)("ol", { children: [(0, s.jsx)("li", { children: 'Lowercase - "hello hi"' }), (0, s.jsx)("li", { children: 'Mash the words together - "hellohi"' }), (0, s.jsx)("li", { children: 'Sort alphabetically - "ehhillo"' })] }), 'So, in this case, "ehhillo" would be the flag.', (0, s.jsx)("br", {})] })] }) }) }
    const ru = n.p + "sites/techfusion/static/media/flag.287bc14a3b43bc533ac5.zip";

    function iu() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: "content", children: (0, s.jsxs)("div", { className: "rules-container", children: [(0, s.jsx)("p", { style: { textAlign: "center" }, children: "The password lies in a shift of vision" }), (0, s.jsx)("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAALQBAMAAAA9U8BlAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRF/////v7+/f39+vr6+/v7/Pz88nvLVwAAJHRJREFUeJztnc2WJEd5hqtG9hLNdEteMoDR2hJwBQhfAVwovgKZc+yd0M+xj1eIw2y8MmjkvWGs6Z7u+ovvLzMi3+ys59kgpqsqMyOeiPi+yMiM/Q5AyF59AnDdICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhS2gLuX4w/8uvxh1gHdmG++W7J81gnbQF/uoCAf3k1/hir4O8+tv7yg98teBorBQGHg4AeCDgcBPRAwOEgoAcCDgcBPRBwOAjogYDDQUAPBBwOAnog4HAQ0AMBh4OAHgg4HAT0QMDhIKAHAg4HAT0QcDgI6IGAw0FADwQcDgJ6IOBwENADAYeDgB4IOBwE9EDA4SCgBwIOBwE9EHA4COiBgMNBQA8EHA4CeiDgcBDQAwGHg4AeCDgcBPRAwOEgoAcCDgcBPRBwOAjogYDDQUAPBBwOAnog4HAQ0AMBh4OAHgg4HAT0QMDhIKAHAg4HAT0QcDgI6IGAw0FADwQcDgJ6IOBwENADAYeDgB46Af94LftUIaCHTMD974cfYiUgoIdMwL9+PfwQKwEBPQbtlvnpq+gTVzMCI6DLmP2C9z+PPvG3r4YceI0goMcYAd/7JPrED/9lyIHXCAJ6jBHwV9H4ej0pCAL6DBHw7/8p+sT1pCAI6DNEwDiJ/mLEYVcKAnqMEJAU5AQE9BghICnICQjoMUJAUpATENBjgICkIKcgoMcAAT/4cfSJa0pBENBngIC/iD5wVSkIAvr0F5AU5AwE9OgvICnIGQjo0V3AZz+LPnFdKQgC+nQXkBTkHAT06C4gKcg5COjRW0C7tB+4moeRHkBAj94C/uZVdMArS0EQ0KezgKQglyCgR2cBh6Yg+xc3u/c+eXM3zfP+V9+9nv5LFW4+/OTdkW6+eD3lmEUBv7/K9z7+7v6/ph3wSdFZwGEpyM2HH//p4h/3N99c/mNPbj99fTaruf/J78//KaIg4P6jl+c//v0Bx17jItz+6tt3berm81cnf+kr4KAU5Pbndkdw+/mox+v2P33e/sOz/3lV+Z20gM9+baj2/Mun/Ajheas6veq+Ao5IQfYfvR984C8jughTv7eUFEwKuP+NcxnPP8sfb2V8dF6OAwWMl0KXUxC3Wh4/9MPfFn825B9e+n9/9od0p5QT8KKeznjZ/RIXYf/rV+f/NFDAeB1CNQWJquWBgg9WL30SnSZeDZE2IiVgOHbsnn3u/937hUK7d678bBGJlXAeF2RrbehAAXunIFE3dEzah4SAjWbbIDLigYSA+08T7SdoZN4ERKHcnbUkZy+zSAjYXJs8TsDeKUjtDTXZMCkWMKXD2899k/pcLOCzX6Z+yA+gveHnzZeZ37/D6UTOhq9YwPba+HEC9k1Bsho8kuyRYgHj4fCB1AtuQgHTV+peodf8s521eyfh3OJQQOO3hgnYNwWJ76lcfiVVzKGAhY431QeGAoYrKB/xejK3wNKxt/NAz3nthQIa1zVMwK4pyAT/kiNNJGB8M+eITJ8eCViJNN7/V/tvXgSeLnmnEs+nzSMBrb8PE7BnCjLJv9wRAgHjZ/pOSDgfCFg7oBNFe+Wffhme0/zODx0IaFbhKAF7piAT/Us9bhIImB8P74kXFPgCxoHLCU6X64Wu6aJ3fuS8Fw0ENH9plIDhSFJIQaoWHIhL2hewNADfEXYuvoDVl9Hanbx36ul1N3Y3elF91vHuY8XsDchuAsYtOb/4aMYbgmPLXQEndL3hIOxWRf2ApvBeDJ5O/2wBL67T7wHtPmSQgB1TkA9/NOM8wjDQFTA/A3MgGvZdAesHNC/Qi4GyAjrt4eInXAGdkxkkYDhqplOQyQHgPdEg7AkYx7ENok7XE7CY8txhXaBXbtmZaKcALtqZK6DTsMYIGJdkOg6eHgDeMfWe6dtym3booHvxBKyHnE5LdtLg7Ey0M45dDP2egJ4OYwQMw7b0ZPyUOjkhGBIdASd1gLsoD/EEDKeuKodzfiybADrVeBFBeQJ6OgwRsF8KMnMA3oWF7Qg4JQJ8i98FOgL+Wxg4Vw7nnX4yALd/4rIDcbJgV4chAvZLQaZKcITvui3gdPfdi3MEfG/SkG+1MG/sSM5E253o5cDv9ICuDkME7JaCTB0Fj/G7QFvA6YO/q7x9Sc//d9rhjHDaq/ZcBO70XJfdriOgq8MIAfulIDMzkHvcKNAU8OvaPYljXOV7tKlTjDHYO1DujWROPV5WoC2gP5SMEDDsO+Yv3qzgTjqYAv7HpIDsHq999RfQ8N2r99xEoNOHXkYZtoB+QDZCwDCZy6YgXTpAP+IxBfxH4w8ZvAijv4CW7041zBWw4bwtoF+LAwTsloL0qiuvuC0Bn/1tzhGdCxwgoHF9joC5mWh79qTxfTML/i8/IBsgYLcUpEMKfI/jQ7djnOB08QMENHRyLi0XA9kV2VDe7AGDWKa/gPH0RTIFmT8H+IATc48R0OlhBghoNDAvFE+NQXYX2mhgpoC3fn/UX8BuKcjsmyCPOD6MEdAJO0cI2G5gXiiUEdDpABpdiFVbbwKn+gvYLQWZdGOqjV3egwS0r3GEgO0g0DtSZibamYVplOfU7qK7gHEBL5yCvMX2YZCAdp87QsD20bwQJjMRaPegrTFsNQKGNZpNQWasQy0cc5CAdisbIaBxNGcIyYxCtlKt4lyLgN1SkJ4jsOPDKAHNLmaIgO0ydaYjMhOBdtG0vr0WAVd2F+QB0/pRApo1PETAdofmjCGZYcjuAVqtay0CdktBeo7Ajg+jBDTb2RAB25fnOJHpBuyqbKUwKxGwWwrSdwS2k4JRAprXOUTA9uU58zCJJalOMNW6tpUI2C0F6V1Plg/DBLSCwCECtn3yViXF/YB9ok3d1yFgvxSk3yy0f9xhAlqD/hAB2z55K5HjiUC7/2xe2joE7JaC9FoI88iUheuzsAb9MQK225cTxsQdgR2EN8P4dQjYLQUpvqIixvJhmIDWIDdGwHa5pp+GrH25Ke8qBOyXgsRLuopYUfc4AY1BboyA5TQ4ngi0O5NmJa5CwG4pSPcQ0PRhnIBGHzNGwHbBOs04rAl7DGq35TUIGI+bfR9H39/chylvMpvFGFlpQcC3WzPt3qS3ZJrwqMb0A7Zja+dYYTBup9DtaGYNAobjZjoFSYSAt8fbIjX2FDrH8CEp4P7lZ4cD3H6a2YrEiDqTAt68Xzpgu1dyJiXCicBiErwKAbulIPFzdT/67Fy46B369WXDBy42v3H3rXmgHe+mBLzc8CnaoaK8HCGKxm0B22PJCgTsl4JEfen+z68a/+i/3Nto8hkBW2/cT7zKvh11ZgRsRSpBm2wfLL/LwgX2LEz7mysQMLx7m38pb/BTkxKK9pcSArZbfPwy+3bAGwto7ADiG9g+WH6fmQtsd+sPAHj0E7BjChIM5tbv+E60SzwW0Kqp0MB2wBEKaEZnbhW3D+aMJNE8jFkFRiCvF7BfChK4bLdd905gu8RDAe030Uf3HesL5e+wx0ZvaqB9sOkC2lVgjGN6AcOZk/xLed3RxhvIvVKYJqD3BG0QlrW/Ggk48YnO9tU5Zxg8Gmx/0zBXLmD8Qpj8viBuZ+pGz+WHsSMB3aP5oWp7LA0EdKdHnDbebpbOUBKMR3YVGAFQRcCbd8PKzS++/a6bgB1TkBk77ZWXwAUC+kcLwt5miwsEdHMD5+qMDm3yPIxdBcb30gKe7q68f37SqKYL2DMFmbPHRbXEAwGDXtsv9Wbv6Qvozw87UafRoTmX58/DmF+c8jrC46+3ZtCO/pz6kRYdU5BZb5d1yqFZ4r6AUa/tN7tmW/EFDOLkwr4d9xS2OjrFHO2t2DEnYPRSmukCdkxB3GqNZg+cULQ5uvkChr22G3g0L9kXMOhxKy9tvqOw2dsppupWBaQEDF+KNFnAnimIO78RKlF6oUkgYNxruzo168r9RlRBpTf2BUdzm7JdBZa3GQHj8pwsYM8UxCu1+GEa+0yaJe4KmHh61psyb16zK2A0TNTelrFz27JbI/ZZWj1AQsDEdrZTBeyagsxaxlZ9lsYVMPEGFa/lNQ/oChgd0Cln46t2A3G7I7sKrJEsIWDifSBTBeyagnjXEkeSdh01z8ETMHPSnk/N7rr8hRNsn4wWbsfm7sHMKjDLJBYwMwhOFbBnCuJKkehIzXNplrgnYOb9FW7f3+otPAHjKrIL2uheymnLPWaxmKcYCpjaHWeigF1TEFfnxO/UplBnb6vrtb2qgLHxtk+GgM7Y5F1eOQmOBUy9l3qigOHBKynI5LjlHXaRt8Kk2fsJVfeD8QSMjbePVn8ExQnJ7H7d/FLoQKo0JwoYLoWupCDeqJYR2e6OW2cx+0XKVaG8z8d1ZLcuQ8DKjqsH7DI006RIwFwfNE3AvinIxDJ7xPa3VUeOgLm9DLxJy9YBZ80xlZ/UqG239Yh9kmYbiQTM7Q42TcC+KUj5ZsY5pfhl1rPb/uHaB3QETGyeYH/bEtCuHKdbMD23vxMImNyieJKA8QthSimIV0Wpodx0qihgMm4o9qHO1SVGqfIyPSdtcTpc80v2qBAImGzNkwTsnIKUtkluYZ5P6zwcfZLNpvj6gak3x+6xG7v15fLdu7eY3abtUWBBsjAnCRimIMnNQR+YVGSZ77eGAVvA7K7Oxfs2joCJXqK8Un7aeGJWqf0VX8DkCDxJwPAhh1oK4l1KzgnzhFonYguYLbPisvdp8yIP1AV0AiRTePsodg/gC5hL6KYJGD7WU0tBvKglp7JpRMtf++yzgUNxlagjYGakMPsms73YA5RpRakE3+ELmJ2HmyBg7xRkfqdkn1HjTGqvgm9SWyXqCJgpqLqAdhpsNrFSEPMOX8CsAxME7J2CTCqxU8xKKgmY7rhrTwEsLuCEAcWsU6dRuh5kw5kpAvZOQSaNGckfKAnY401eJQFTEW71efFJOZ1ZKE6U6gqYHk3qAnZPQToIaBrRaAu2gOmGU1twYhdYqqTMa5uyL4QlYKUAH3AFTDfmuoDdU5DyovpLzHNqlIN9/unQtfYc1OIC1ja9vKMyhDzgCpguy7KA8VLoagri/WTqTpzTJTW+30HA2oqn4ortc+oC1hu0qazXRDwBs1OqEwQM1yGkR/9HnBa7pID5QuslYCrFqi239b9Sfonr1LeipHOQuoD9U5ApQ8YZZlk0WrwpYD52rU0tzxRwQoOxY1RDDLNFeb1J/bU8LaoCDkhBvDsLSZsrBWhWaL7V1lbv1NeznDBBQLuHrj7N7o1AnoD5PKAqYPg0Zj0FmXurYNdJwPz0Ze1m1/ICltNg8xheWOwJmF+PXBRwQAqyGgELw4ZdCqsQ0Gkg7QK14qppz9HtKhYUBRyQgsxfDFMLoscK2PiR5QUsbvxrX48blTgC5vO5qoDhUuh6CvIEBazNnI8ScMrqvvYhzZjWPcGZmxO/oybgiBSkh4BmCTaasFmhhei1k4CpI9pRt1049ndqLw9xT9ARsLAaoCbgiBTEFfAm9wtvrBZfETA55/iWtQtol2izhzA/7uYSs/ale6Qk4JAUZMA+hQca5d1DwNIQJxCw+Eoj8xBudQoEHJKCjNin8JGKgIVHmUvrx2wBU8pPEbD4SiPrcvyAatYLfR4pCTgkBRkqYCMd6yFgaVW1QMBiGmx92g/lnGorDCYVAcMXwuTvJZxwtQIOG4Jry77N/tIf0Ca/DPj04OlPjkpBEr87g8tKMuum0H2XbrYqBLTlaEhldix+R+YIWEgFCgIOSkEQcOqxnOK2o/XGCZof9ktkcQEHpSCrEbBQaqsX0I6WGkGJadLUjUUGCTgoBUHAqcdyTtgZrfIlEtxVmPs097vPpj85KgV5igLaZd+oNIWATm9xmSBYnw1GtFIhmOQFDHPViSlIcg/ziVz2ytchoP2ty4NaszDB6dmFUOmK8gKGS6EnpiAI6DNNwMJrBc3FW8Fkil0IlQfD0wIOS0HGDsHXKmDhSSjzo5O3zRsi4LAU5CkKWLrZP1PA8i6W9+dhrkm9yBCsi5m+SV+lL8oKGL4QZnIKMlbAy2FkrICNWpMI6ERM51+zDhDV6LICjktBENBnooD5NNgqkEijZQUcl4IMvRd8vQLm02CraqMVBeUNJJokBQyXQk9PQRDQZ6KA6TTYnLOOgvpFBQxnSqanIGMFvGzGYwVs/IpGQPu+wVmeZH4wKg/7xAqrsZICjkxBENBnooDpm3HW6YW3M5YUcGQKgoA+EwV0ovbT0cq6lnAyzz6xyjZZOQGjFKRy9/kSBPSYKqAdNZ2WiZWthFH9ggIOTUEQ0GeqgNlZEmu+JhxHFxRwaAqCgD5TBbTP8XRwtUa3sDjsE6vokBFwbAqCgD5TBbRr7SS9sJKVOKpaTsCxKchYAS9PrceS/KcgYPJmnDULE3cqywk4NgUZ+mD64gKuZiLauxl3fKXWpcRh/WICDk5BENBnsoD2zbjjuMT6+fjcJp/YCQkBB6cgqxGwkLuVHodQCZi7GWcVR1waSwkYPo05MwVBwKnHCurZvhl3nAZbA3Us0VIChnpUbrxMO8IMLsODqxHQ7jmOT9II8BNx/VICjk5BViNgoSEtuSR/ej1n0mBrsiaxqn4hAYenID3eD2jzf787/5ceApa2A5QJmNkVzzq5RK0uJGC4XHluCjJ7L6si1yOg3bAPB7Y+kyiMZQQcn4LM3k6ySI9X9D4NATMvp7Z+PdGtLCPg+BRkNQIWYonSDtsyATM346wrSTi0jIDR05g9FCm+UHYm1yNgJgsxPpKJfRYRMHwhzPwU5CkKaDfLVQkYb41sRViZslhEwAVSEHe1zZICFp7nt7uW/m9InVHP8aJ5q+1nzmwJAZdIQRDQZ0Y9xzfjrHPLTMovIeASKUjxZXaz6bBb5qL7hMyoZzu2ebhWq4Iz5b6EgEukIOVNBWbSYb/gXnvFjRbQbigPFWeEWKl6XUDARVKQndehVJ4uSNJhx/QnI6DdgXzhfiA1GCwgYLhUuVMHtQ4B8+XmBK3rEtDOId8VrFHyqY5lvIDLpCC78u6i8+ggoDMylPYLHi5glIVYNTz8xA54Ai6Tguy8kWLm0yYt4smxEGeBRqNIhALah77P1q2WlCqJ8QIuk4Lsivv6jDtYuj05LXNdAtpj2H3GNScJHi/gUimIF6osKmC6u3UEbAStQgGjm3HGb+fmA4YLuFQKshoB0wer7ZKmFDBYEmj8OTclP1zAaCl0rxSk1+uuk5Q2Gqz+RKtRKgUMlgQaQVauJY4WcLEUpLiz2VxKK1naOMFxo+yVAgZZiNHH5Gp2tICLpSDlHebnYQuYviJnbFiZgH4WYs1n5gQaLGD4QpiO4ZkzrdH/ZrAzfiYP5syPthxWCuhnIcaZJRviYAGXS0EWXhDoCJi87+Kc7uoEdLMQY+RJhiKDBVwuBXF72/6rERwBk/MwTnTcChmkArpZiPHTybFtrIDh05g9b5I5Y1r/e3GOgMmSdwRsNUupgO6DSUZRJNvhWAGjF8L0fVyotL5uJs6VJXt1Z5l4ayZHKqD7YJJR7MlIZKiAS6Ygu9UImCw5Jzppna5UQC8LsQaepD9DBVwyBdl1mZvrcKzkVXmLhNYnoJOF/Hc7mcoObkMFXDIF2XmDWv8ngz0BU0Z44XErZNUK6GQh/94+sewNoZECLpqC7NwON3Mx/2z+5ZtXF//kCZgqe+8WUSt80groZCH/2b6QbNQzUsBlU5Dq+qZznDGxIYR3banrqo7hWgGdLOTb9riT7VwGChguhe6dGjg9buJQzrcbQriNK5EAuoXTKnqtgE409aId8WbD+4EChusQek8PO/cWEtFm6Z31voDzdG/3oGIBwzcsT/vZoQIunIL4vcqcZ7/KAs56MaixdkIsYPX1n+n1H+MEXDoF2bnKhwcrrg3we4T40rzW2WyZYgHD2jwjvSpynIDRC2EGvDTN6cTCUbF4a9YXMCx+tz6b5yoWMLyncEaHdeEzBVw8Bdm5zoe6O99t9UhBTBSFt/UQUixgGFCdkX4Ue5iAi6cgwTGDUdFrL63+LBAw6AL9/qR5qmoBi1lI2p5hAoZLoX9S+H2Hz18d/tsTMEh5vK+2eqSoPvzm5Ycnze+qBQxvq56Qj69GCVgNWidzbIf7CKg7KLgBQ6uGIwHdLjAIqJolrxawVqH5GY5RAtYazAyOBXQ1csvE7ZJa6oYjkjfk+19u9x5qAWtZSD7A35SAfqTsKOE/Pd8qiTgksgfhYH6g3VLUAtaykPzLULYloK+FPQj7Aes0AfffGD/64Y/8L7Z7D7mApSwkn2FuS0A/9TaV8Mu2OamfqA7jcJF/hlByAUv3QvLybEvAIFJ+9oeWEvtP/ebaHBIz/cH+z40PffQ8+lq7o5YLWMlCCg9ib0vAMFJ++duLf/qHl5UjPJAbkJ5/eeb2s1/GY1O74OUChncWjii8C2VbAsaR8v7lZycK3P4sNKKZvGQjottv/lQ6mDmFJhewkoUU7nJtTMDUyHjz4ovd693u5hdvXmdi5WZAXQjJb3/w9Zvv9i/ee5kLzI3pIr2A4W4vB7rsWfskBRyxaXCzIMrr49IYvYdewELZFm6zbkzAATdg2j3SOAGN3kMvYPiq0Qm/uTkBK5HypAM8ME5Ao9z1AubLtrLUeGMChmsg6rTrd5iA1m18vYD5sq2stNuagP2P245nhglozWCsQMB0FlLZlWBrAnYPAo0eaZiAVuWtQMB0FlLZGGhrAnYPAo0eaZiAVgK5AgHTWUhFna0J2D0INJLSUQKaKzlXIGB2Krr0tM/mBOw9E2gUwygBzZtYaxAw2bhLz9tuTsDq41sB1m31UQKaNq1BwGSllh4325yAncdgqzBHCWiW+hoETGZ4pQe+tydg3yNbCd0gAe3Raw0CJkeX0vOO2xOwcMcoxoynBwloj15rEDCZhZT2JNiegNVHqIu//o5BAtqdxyoETF11bVugDQrY89DmlOoYAZ26W4WAqSmG2s58GxSwYx5sz2iNEdBxaRUCprKQ2jtXNihgRznsshwjoFPmqxAwdZ+pciNumwL2ux9sl8EQAb3BaxUCpuLr2r5oWxSw21SgI8QQAb0JtHUImFgQU3zt3iYF7HU7zpnQGiGgW3XrEDBRssUX325SwE4zMd6IOEJA16R1CJiYZC2+93GbAvaJAr0ZfVvAryd3v26Jr0PARNOurEbdbVXALlGgO59lC/jl1BWJftexEgHjnr+WBG9VwB5doHtL066IL6aOzn6Br0TAuF6Lm4NvVMAOMZo/oe8IOPFmdODRSgQMW3btRtx2BZx9OySYTXAEnCZ/NHuxEgHDqejajbjtCjj7BIJQxhNwUhcYLaJbiYBhFlLd/GCzAs4chKOG7Ak45dDh7NlaBIymoqvbD21XwFnPx4WRjCtgffyPbx+sRcBoKrq6+8Z2BZwTBprvUn3EFbB+9XG/sRYBo/ii+HNbFnDG2ui4GfsCVgfhhENrETAIAss7UG5ZwMmzgYm51EDA2vifyRxXI6DftsobsG1awPiF4C2ar3Y+JxCw1Pumeo3VCOjXbPFG3NYFjF8AfUkc/70lErBgYG7qdjUC+sNK8Ubc5gWsx4HJmfxQwPSRk1HTagT0o4vqr21ewN3+168Kv7b/4eVr9JvEAiaz8Oef5Q64GgHdLKS+CfTmBSwNw1kbUgKm3E/P265HQG8qupwEDxNwTex/Gm4Oc0d7H5s2GQHjXWluP+/+QtfxVHe2XYJ1C/j9+f3mT/FnMsnvIzkB/U7w9g+VI64GL7it3ojrxdoF/P4MP3K36TjfvyYkKaDj/sUuSk8GJwis3ojrxfoF3L3do/3n7Y1pbt7/Ku4gz0gL+D23H1zIf7KB0lPDmYouB5SdeBIC3rG/efHeJ68f/9+LL3K7JV1QEfAtNzffdxx3x73Z/X7aIVeDnTdUV6N24+kI2IuqgFvCzkKqq1G7gYAHrllAVRKMgEdsX0B7IlCVBCPgEdsXcIXXjoAHti+gOQ1TvxHXCwQ8cMUC1m/E9QIBD2xeQHuRhSwHQcAjNi/gzGURQ0DAA5sX0J6FUd2IQ8BjNi+gPQuju3QEPLB5Ac03j8luxCHgMZsX0EyCZTfiEPCYrQu4xiQYAY/YuoB2DlJ+Iq4fCHhg6wJ2fLqkHwh4YOsCmjmI7kYcAh6zcQHtx4J1N+IQ8JiNC2jfBxHmIAh4xMYFtENA2WLAHQIes3EB7UfidDfiEPCYbQvoPBSsvHAEPLBtAe0RWJmDIOARmxbQeTWWMgdBwCM2LaDzXhjdYsAdAh6zaQFX+FaOOxDwwJYF9F66J71uBDywYQG9V25KcxAEPGLDAnqb4EpzEAQ8YrsCuhs0KO+DIOAxmxXQ3yVOmoMg4BEbFfDZL13DlGuxdgh4zHYE3L95/C///bI7dQ6CgEdsR8APfnxz979vEqOrNgdBwCO2JGD+s8LnQd6CgAeuU0DxVSPggasUUPhM+h0IeOAqBRSHgAh4xFUKqJ2GRsBjrlJA9UUj4AF1XfQjL6B4GhoBj7lGAYWvJboHAQ9co4DqEBABj7hGAeXXjIAH5JXRjbSA6llABDzmCgVUzwIi4DFXKKA8BETAI65QQP0lI+ABfW30IiugeC3gWxDwwPUJKH0k/R4EPHB9Aq7gihHwwAqqoxNJAVcwAiPgEVcn4ApGYAQ84uoEXMMFI+CBNdRHH3ICrmEERsAjrk1A/Sz0DgGPuTYBV3G9CHhgFRXShZSA+vvAb0HAA1cmoPadMA8g4IHrElC+FvoeBDxwXQKuowNEwCOuSsCVdIAIeMRVCbiSDhABj7gmAddwF+4OBDxwRQLqnwV5AAEPXJGA4neyHYGAB65HwNUMwAh4zNUIuIpVCO9AwAPXIuCa/EPAI65EwJe/Xeo0MiDggasQcP/NSiYA33F9Al4DtoDPP1vwNDIg4BYxBNy//Gxd3d8OATfK7Qcff/f67J/++O3q7Nsh4KbZv7i526j6r1+d27geEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCghQEBCkICFIQEKQgIEhBQJCCgCAFAUEKAoIUBAQpCAhSEBCkICBIQUCQgoAgBQFBCgKCFAQEKQgIUhAQpCAgSEFAkIKAIAUBQQoCgpT/B5w2YZQFQqrPAAAAAElFTkSuQmCC", width: "100%" }), (0, s.jsx)("a", { href: ru, download: !0, style: { color: "white" }, children: "Click to download your next clue" })] }) }) }) }

    function au() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: "content", children: (0, s.jsxs)("div", { className: "rules-container", children: [(0, s.jsx)("p", { children: "The file https://www.techfusion.net.in/capitals.csv holds the data of the distance (in km) between the capitals of various countries." }), (0, s.jsx)("p", { children: "Your next flag is the mashup of the first letters of countries whose distance between capitals contains '2500', i.e., the distance could be 2500, 12500, 25001, etc." }), (0, s.jsx)("p", { children: "Sort these first letters in alphabetical order to get your flag." })] }) }) }) }

    function su() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: "content", children: (0, s.jsx)("div", { className: "terminal-container", children: (0, s.jsxs)("div", { className: "terminal", children: [(0, s.jsx)("h1", { children: "YOU'RE DONE!" }), (0, s.jsx)("p", { style: { color: "white" }, children: "Good job!" })] }) }) }) }) }

    function ou() { return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: "content", children: (0, s.jsx)("div", { className: "rules-container", children: "There's nothing here. Maybe take a closer look at that QR code though. Those steganographists can't keep their hands off images since Cicada 3301." }) }) }) }
    class lu extends r.Component {
        getSnapshotBeforeUpdate(e) {
            const t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                const e = this.props.sizeRef.current;
                e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
            }
            return null
        }
        componentDidUpdate() {}
        render() { return this.props.children }
    }

    function uu(e) {
        let { children: t, isPresent: n } = e;
        const i = (0, r.useId)(),
            a = (0, r.useRef)(null),
            l = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
            { nonce: u } = (0, r.useContext)(o);
        return (0, r.useInsertionEffect)((() => {
            const { width: e, height: t, top: r, left: s } = l.current;
            if (n || !a.current || !e || !t) return;
            a.current.dataset.motionPopId = i;
            const o = document.createElement("style");
            return u && (o.nonce = u), document.head.appendChild(o), o.sheet && o.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${r}px !important;\n            left: ${s}px !important;\n          }\n        `), () => { document.head.removeChild(o) }
        }), [n]), (0, s.jsx)(lu, { isPresent: n, childRef: a, sizeRef: l, children: r.cloneElement(t, { ref: a }) })
    }
    const cu = e => {
        let { children: t, initial: n, isPresent: i, onExitComplete: a, custom: o, presenceAffectsLayout: l, mode: c } = e;
        const d = Ye(du),
            h = (0, r.useId)(),
            f = (0, r.useMemo)((() => ({
                id: h,
                initial: n,
                isPresent: i,
                custom: o,
                onExitComplete: e => {
                    d.set(e, !0);
                    for (const t of d.values())
                        if (!t) return;
                    a && a()
                },
                register: e => (d.set(e, !1), () => d.delete(e))
            })), l ? [Math.random()] : [i]);
        return (0, r.useMemo)((() => { d.forEach(((e, t) => d.set(t, !1))) }), [i]), r.useEffect((() => {!i && !d.size && a && a() }), [i]), "popLayout" === c && (t = (0, s.jsx)(uu, { isPresent: i, children: t })), (0, s.jsx)(u.Provider, { value: f, children: t })
    };

    function du() { return new Map }
    const hu = e => e.key || "";

    function fu(e) {
        const t = [];
        return r.Children.forEach(e, (e => {
            (0, r.isValidElement)(e) && t.push(e)
        })), t
    }
    const pu = e => {
            let { children: t, exitBeforeEnter: n, custom: i, initial: a = !0, onExitComplete: o, presenceAffectsLayout: l = !0, mode: u = "sync" } = e;
            qt(!n, "Replace exitBeforeEnter with mode='wait'");
            const c = (0, r.useMemo)((() => fu(t)), [t]),
                h = c.map(hu),
                f = (0, r.useRef)(!0),
                p = (0, r.useRef)(c),
                m = Ye((() => new Map)),
                [g, v] = (0, r.useState)(c),
                [y, x] = (0, r.useState)(c);
            d((() => {
                f.current = !1, p.current = c;
                for (let e = 0; e < y.length; e++) {
                    const t = hu(y[e]);
                    h.includes(t) ? m.delete(t) : !0 !== m.get(t) && m.set(t, !1)
                }
            }), [y, h.length, h.join("-")]);
            const b = [];
            if (c !== g) {
                let e = [...c];
                for (let t = 0; t < y.length; t++) {
                    const n = y[t],
                        r = hu(n);
                    h.includes(r) || (e.splice(t, 0, n), b.push(n))
                }
                return "wait" === u && b.length && (e = b), x(fu(e)), void v(c)
            }
            const { forceRender: w } = (0, r.useContext)(O);
            return (0, s.jsx)(s.Fragment, {
                children: y.map((e => {
                    const t = hu(e),
                        n = c === y || h.includes(t);
                    return (0, s.jsx)(cu, {
                        isPresent: n,
                        initial: !(f.current && !a) && void 0,
                        custom: n ? void 0 : i,
                        presenceAffectsLayout: l,
                        mode: u,
                        onExitComplete: n ? void 0 : () => {
                            if (!m.has(t)) return;
                            m.set(t, !0);
                            let e = !0;
                            m.forEach((t => { t || (e = !1) })), e && (null === w || void 0 === w || w(), x(p.current), o && o())
                        },
                        children: e
                    }, t)
                }))
            })
        },
        mu = n.p + "sites/techfusion/static/media/home.277b20605a20a7748ac7.png";

    function gu() { return (0, s.jsxs)("div", { className: "navbar", children: [(0, s.jsx)("a", { style: { position: "absolute" }, href: "/sites/techfusion/", children: (0, s.jsx)("img", { src: mu, className: "home-icon" }) }), (0, s.jsxs)("ul", { children: [(0, s.jsx)("li", { children: (0, s.jsx)(gl, { className: "navlink", to: "/sites/techfusion/events", children: (0, s.jsx)("span", { children: "EVENTS" }) }) }), (0, s.jsx)("li", { children: (0, s.jsx)(gl, { className: "navlink", to: "/sites/techfusion/resources", children: (0, s.jsx)("span", { children: "RESOURCES" }) }) }), (0, s.jsx)("li", { children: (0, s.jsx)(gl, { className: "navlink", to: "/sites/techfusion/guidelines", children: "GUIDELINES" }) }), (0, s.jsx)("li", { children: (0, s.jsx)(gl, { className: "navlink", to: "/sites/techfusion/register", children: "REGISTER" }) })] })] }) }
    const vu = () => { const e = Ho(); return (0, s.jsx)(pu, { children: (0, s.jsxs)(ol, { location: e, children: [(0, s.jsx)(al, { exact: !0, path: "sites/techfusion/", Component: xl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events", Component: bl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/techknowquiz", Component: El }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/hack-a-thon", Component: Sl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/game-fiesta", Component: kl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/decryption-duel", Component: Pl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/web-palette", Component: Nl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/resources", Component: Tl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/resources/oc", Component: ql }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/guidelines", Component: Bl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/techknowquiz/guidelines", Component: Il }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/hack-a-thon/guidelines", Component: Rl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/game-fiesta/guidelines", Component: Fl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/decryption-duel/guidelines", Component: Dl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/web-palette/guidelines", Component: Ll }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/techknowquiz/about", Component: Ol }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/hack-a-thon/about", Component: zl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/game-fiesta/about", Component: Ul }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/decryption-duel/about", Component: Ql }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/events/web-palette/about", Component: Vl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/register", Component: Ml }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/register/decryption-duel", Component: Hl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/register/game-fiesta/fortnite", Component: Kl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/register/game-fiesta/valorant", Component: Wl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/register/hack-a-thon", Component: Yl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/register/techknowquiz", Component: Gl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/register/web-palette", Component: Xl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/register", Component: _l }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/submit", Component: Jl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-1982", Component: Zl }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-0658", Component: $l }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-6029", Component: tu }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-6881", Component: nu }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-2772", Component: iu }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-5102", Component: au }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-complete", Component: su }), (0, s.jsx)(al, { exact: !0, path: "sites/techfusion/challenge/challenge-qr", Component: ou })] }, e.pathname) }) };
    const yu = function() { return (0, s.jsx)("div", { className: "background", children: (0, s.jsxs)(fl, { children: [(0, s.jsx)(gu, {}), (0, s.jsx)(vu, {})] }) }) },
        xu = e => {
            e && e instanceof Function && n.e(453).then(n.bind(n, 453)).then((t => {
                let { getCLS: n, getFID: r, getFCP: i, getLCP: a, getTTFB: s } = t;
                n(e), r(e), i(e), a(e), s(e)
            }))
        };
    a.createRoot(document.getElementById("root")).render((0, s.jsx)(r.StrictMode, { children: (0, s.jsx)(yu, {}) })), xu()
})();
//# sourceMappingURL=main.59ac1697.js.map