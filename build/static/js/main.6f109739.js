/*! For license information please see main.6f109739.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          j = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          C = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          I = Symbol.for("react.memo"),
          z = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function O(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          F = Object.assign;
        function D(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var U = !1;
        function A(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case j:
              return "StrictMode";
            case P:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case I:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return W(t);
            case 8:
              return t === j ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function le(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
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
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          je = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Se ? (je ? je.push(e) : (je = [e])) : (Se = e);
        }
        function _e() {
          if (Se) {
            var e = Se,
              t = je;
            if (((je = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Pe() {}
        var Te = !1;
        function Ie(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (Te = !1), (null !== Se || null !== je) && (Pe(), _e());
          }
        }
        function ze(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Le = !1;
          }
        function Oe(e, t, n, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Fe = null,
          De = !1,
          Ue = null,
          Ae = {
            onError: function (e) {
              (Me = !0), (Fe = e);
            },
          };
        function Be(e, t, n, r, a, l, i, o, s) {
          (Me = !1), (Fe = null), Oe.apply(Ae, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (We(e) !== e) throw Error(l(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ve(a), e;
                    if (i === r) return Ve(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
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
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          jt,
          Et,
          Nt = !1,
          _t = [],
          Ct = null,
          Pt = null,
          Tt = null,
          It = new Map(),
          zt = new Map(),
          Lt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ot(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ct = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              It.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function At() {
          (Nt = !1),
            null !== Ct && Dt(Ct) && (Ct = null),
            null !== Pt && Dt(Pt) && (Pt = null),
            null !== Tt && Dt(Tt) && (Tt = null),
            It.forEach(Ut),
            zt.forEach(Ut);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, At)));
        }
        function Wt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < _t.length) {
            Bt(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ct && Bt(Ct, e),
              null !== Pt && Bt(Pt, e),
              null !== Tt && Bt(Tt, e),
              It.forEach(t),
              zt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Vt = !0;
        function $t(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Vt) {
            var a = Kt(e, t, n, r);
            if (null === a) Vr(e, t, r, Yt, n), Ot(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ct = Mt(Ct, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Tt = Mt(Tt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return It.set(l, Mt(It.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      zt.set(l, Mt(zt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ot(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && xt(l),
                  null === (l = Kt(e, t, n, r)) && Vr(e, t, r, Yt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Kt(e, t, n, r) {
          if (((Yt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Gt(e) {
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
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = F({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          gn = an(F({}, dn, { relatedTarget: 0 })),
          vn = an(
            F({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = F({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(F({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function jn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return jn;
        }
        var Nn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          _n = an(Nn),
          Cn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = an(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Tn = an(
            F({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          In = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          zn = an(In),
          Ln = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          On = null;
        c && "documentMode" in document && (On = document.documentMode);
        var Mn = c && "TextEvent" in window && !On,
          Fn = c && (!Rn || (On && 8 < On && 11 >= On)),
          Dn = String.fromCharCode(32),
          Un = !1;
        function An(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ne(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Yn(e) {
          Dr(e, 0);
        }
        function Kn(e) {
          if (q(wa(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(qn)) {
            var t = [];
            $n(t, qn, e, xe(e)), Ie(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Kn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Y(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          jr = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in jr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((jr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Nr = Er("animationend"),
          _r = Er("animationiteration"),
          Cr = Er("animationstart"),
          Pr = Er("transitionend"),
          Tr = new Map(),
          Ir =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function zr(e, t) {
          Tr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < Ir.length; Lr++) {
          var Rr = Ir[Lr];
          zr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        zr(Nr, "onAnimationEnd"),
          zr(_r, "onAnimationIteration"),
          zr(Cr, "onAnimationStart"),
          zr("dblclick", "onDoubleClick"),
          zr("focusin", "onFocus"),
          zr("focusout", "onBlur"),
          zr(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Or =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Or)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, s, u) {
              if ((Be.apply(this, arguments), Me)) {
                if (!Me) throw Error(l(198));
                var c = Fe;
                (Me = !1), (Fe = null), De || ((De = !0), (Ue = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Fr(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, o, u), (l = s);
                }
            }
          }
          if (De) throw ((e = Ue), (De = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ar(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ar(t, !1, e), Ar(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ar("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = l,
              a = xe(n),
              i = [];
            e: {
              var o = Tr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = _n;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
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
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case Nr:
                  case _r:
                  case Cr:
                    s = vn;
                    break;
                  case Pr:
                    s = Tn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = zn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Cn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = ze(h, f)) &&
                        c.push($r(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Cn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? o : wa(s)),
                  (p = null == u ? o : wa(u)),
                  ((o = new c(m, h + "leave", s, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Yr(i, o, s, c, !1),
                  null !== u && null !== d && Yr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var g = Gn;
              else if (Vn(o))
                if (Xn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? $n(i, g, n, a)
                  : (v && v(e, o, r),
                    "focusout" === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var y;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? An(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Wn = !0))),
                0 < (v = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Rn && An(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = ze(e, n)) && r.unshift($r(e, l, a)),
              null != (l = ze(e, t)) && r.push($r(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = ze(n, l)) && i.unshift($r(n, s, o))
                : a || (null != (s = ze(n, l)) && i.push($r(n, s, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Kr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Gr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function ja(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Na(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var _a = {},
          Ca = ja(_a),
          Pa = ja(!1),
          Ta = _a;
        function Ia(e, t) {
          var n = e.type.contextTypes;
          if (!n) return _a;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function za(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ea(Pa), Ea(Ca);
        }
        function Ra(e, t, n) {
          if (Ca.current !== _a) throw Error(l(168));
          Na(Ca, t), Na(Pa, n);
        }
        function Oa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, H(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (Ta = Ca.current),
            Na(Ca, e),
            Na(Pa, Pa.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Oa(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Pa),
              Ea(Ca),
              Na(Ca, e))
            : Ea(Pa),
            Na(Pa, n);
        }
        var Da = null,
          Ua = !1,
          Aa = !1;
        function Ba(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Wa() {
          if (!Aa && null !== Da) {
            Aa = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ua = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Ze, Wa), a);
            } finally {
              (bt = t), (Aa = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          $a = null,
          Qa = 0,
          qa = [],
          Ya = 0,
          Ka = null,
          Ga = 1,
          Xa = "";
        function Ja(e, t) {
          (Ha[Va++] = Qa), (Ha[Va++] = $a), ($a = e), (Qa = t);
        }
        function Za(e, t, n) {
          (qa[Ya++] = Ga), (qa[Ya++] = Xa), (qa[Ya++] = Ka), (Ka = e);
          var r = Ga;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ga = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = l + e);
          } else (Ga = (1 << l) | (n << a) | r), (Xa = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function tl(e) {
          for (; e === $a; )
            ($a = Ha[--Va]), (Ha[Va] = null), (Qa = Ha[--Va]), (Ha[Va] = null);
          for (; e === Ka; )
            (Ka = qa[--Ya]),
              (qa[Ya] = null),
              (Xa = qa[--Ya]),
              (qa[Ya] = null),
              (Ga = qa[--Ya]),
              (qa[Ya] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = Iu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ka ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Iu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = w.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = ja(null),
          yl = null,
          bl = null,
          wl = null;
        function xl() {
          wl = bl = yl = null;
        }
        function kl(e) {
          var t = vl.current;
          Ea(vl), (e._currentValue = t);
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function jl(e, t) {
          (yl = e),
            (wl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wo = !0), (e.firstContext = null));
        }
        function El(e) {
          var t = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Nl = null;
        function _l(e) {
          null === Nl ? (Nl = [e]) : Nl.push(e);
        }
        function Cl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), _l(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Pl(e, r)
          );
        }
        function Pl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Tl = !1;
        function Il(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function zl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ll(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Rl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Cs))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Pl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), _l(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Pl(e, n)
          );
        }
        function Ol(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ml(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fl(e, t, n, r) {
          var a = e.updateQueue;
          Tl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Tl = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Ms |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Dl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Ul = new r.Component().refs;
        function Al(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Ll(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Rl(e, l, a)) && (nu(t, e, a, r), Ol(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Ll(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Rl(e, l, a)) && (nu(t, e, a, r), Ol(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ll(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Rl(e, a, r)) && (nu(t, e, r, n), Ol(t, e, r));
          },
        };
        function Wl(e, t, n, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function Hl(e, t, n) {
          var r = !1,
            a = _a,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = El(l))
              : ((a = za(t) ? Ta : Ca.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ia(e, a)
                  : _a)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Vl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
        }
        function $l(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ul), Il(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = El(l))
            : ((l = za(t) ? Ta : Ca.current), (a.context = Ia(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Al(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bl.enqueueReplaceState(a, a.state, null),
              Fl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Ul && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yl(e) {
          return (0, e._init)(e._payload);
        }
        function Kl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === z &&
                    Yl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Ru(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Ou(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Ru(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Du(t, e.mode, n)).return = e), t;
                case z:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || O(t))
                return ((t = Ou(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case z:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || O(n)) return null !== a ? null : d(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case z:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || O(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function m(a, l, o, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, o[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = i(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === o.length) return n(a, d), al && Ja(a, m), u;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((l = i(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Ja(a, m), u;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (g = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, m),
              u
            );
          }
          function g(a, o, s, u) {
            var c = O(s);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = o, g = (o = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), al && Ja(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((o = i(y, o, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Ja(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, g),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === z &&
                            Yl(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = Ql(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((l = Ou(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = Ru(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = Ql(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case k:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Du(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case z:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, l, i, s);
              if (O(i)) return g(r, l, i, s);
              ql(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Fu(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var Gl = Kl(!0),
          Xl = Kl(!1),
          Jl = {},
          Zl = ja(Jl),
          ei = ja(Jl),
          ti = ja(Jl);
        function ni(e) {
          if (e === Jl) throw Error(l(174));
          return e;
        }
        function ri(e, t) {
          switch ((Na(ti, t), Na(ei, e), Na(Zl, Jl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Zl), Na(Zl, t);
        }
        function ai() {
          Ea(Zl), Ea(ei), Ea(ti);
        }
        function li(e) {
          ni(ti.current);
          var t = ni(Zl.current),
            n = se(t, e.type);
          t !== n && (Na(ei, e), Na(Zl, n));
        }
        function ii(e) {
          ei.current === e && (Ea(Zl), Ea(ei));
        }
        var oi = ja(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ui = [];
        function ci() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          fi = w.ReactCurrentBatchConfig,
          pi = 0,
          hi = null,
          mi = null,
          gi = null,
          vi = !1,
          yi = !1,
          bi = 0,
          wi = 0;
        function xi() {
          throw Error(l(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function Si(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (hi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? io : oo),
            (e = n(r, a)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (bi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (gi = mi = null),
                (t.updateQueue = null),
                (di.current = so),
                (e = n(r, a));
            } while (yi);
          }
          if (
            ((di.current = lo),
            (t = null !== mi && null !== mi.next),
            (pi = 0),
            (gi = mi = hi = null),
            (vi = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function ji() {
          var e = 0 !== bi;
          return (bi = 0), e;
        }
        function Ei() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function Ni() {
          if (null === mi) {
            var e = hi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === gi ? hi.memoizedState : gi.next;
          if (null !== t) (gi = t), (mi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function _i(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ci(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((pi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (hi.lanes |= d),
                  (Ms |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (wo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (hi.lanes |= i), (Ms |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Pi(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (wo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ti() {}
        function Ii(e, t) {
          var n = hi,
            r = Ni(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wo = !0)),
            (r = r.queue),
            Hi(Ri.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Di(9, Li.bind(null, n, r, a, t), void 0, null),
              null === Ps)
            )
              throw Error(l(349));
            0 !== (30 & pi) || zi(n, t, a);
          }
          return a;
        }
        function zi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Li(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Oi(t) && Mi(e);
        }
        function Ri(e, t, n) {
          return n(function () {
            Oi(t) && Mi(e);
          });
        }
        function Oi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Mi(e) {
          var t = Pl(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Fi(e) {
          var t = Ei();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _i,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, hi, e)),
            [t.memoizedState, e]
          );
        }
        function Di(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return Ni().memoizedState;
        }
        function Ai(e, t, n, r) {
          var a = Ei();
          (hi.flags |= e),
            (a.memoizedState = Di(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bi(e, t, n, r) {
          var a = Ni();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((l = i.destroy), null !== r && ki(r, i.deps)))
              return void (a.memoizedState = Di(t, n, l, r));
          }
          (hi.flags |= e), (a.memoizedState = Di(1 | t, n, l, r));
        }
        function Wi(e, t) {
          return Ai(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return Bi(2048, 8, e, t);
        }
        function Vi(e, t) {
          return Bi(4, 2, e, t);
        }
        function $i(e, t) {
          return Bi(4, 4, e, t);
        }
        function Qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Ki(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Gi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (wo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (hi.lanes |= n), (Ms |= n), (e.baseState = !0)),
              t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fi.transition;
          fi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (fi.transition = r);
          }
        }
        function Zi() {
          return Ni().memoizedState;
        }
        function eo(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = Cl(e, t, n, r))) {
            nu(n, e, r, eu()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), _l(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Cl(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === hi || (null !== t && t === hi);
        }
        function ro(e, t) {
          yi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var lo = {
            readContext: El,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: El,
            useCallback: function (e, t) {
              return (Ei().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: El,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ai(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ai(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ai(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ei();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ei();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, hi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ei().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (Ei().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (Ei().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hi,
                a = Ei();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(l(349));
                0 !== (30 & pi) || zi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Ri.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Di(9, Li.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ei(),
                t = Ps.identifierPrefix;
              if (al) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ga & ~(1 << (32 - it(Ga) - 1))).toString(32) + n)),
                  0 < (n = bi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: El,
            useCallback: Ki,
            useContext: El,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: $i,
            useMemo: Gi,
            useReducer: Ci,
            useRef: Ui,
            useState: function () {
              return Ci(_i);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Xi(Ni(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ci(_i)[0], Ni().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Ii,
            useId: Zi,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: El,
            useCallback: Ki,
            useContext: El,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: $i,
            useMemo: Gi,
            useReducer: Pi,
            useRef: Ui,
            useState: function () {
              return Pi(_i);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = Ni();
              return null === mi
                ? (t.memoizedState = e)
                : Xi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(_i)[0], Ni().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Ii,
            useId: Zi,
            unstable_isNewReconciler: !1,
          };
        function uo(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var po = "function" === typeof WeakMap ? WeakMap : Map;
        function ho(e, t, n) {
          ((n = Ll(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), ($s = r)), fo(0, t);
            }),
            n
          );
        }
        function mo(e, t, n) {
          (n = Ll(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fo(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  "function" !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function go(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new po();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function vo(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ll(-1, 1)).tag = 2), Rl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bo = w.ReactCurrentOwner,
          wo = !1;
        function xo(e, t, n, r) {
          t.child = null === e ? Xl(t, null, n, r) : Gl(t, e.child, n, r);
        }
        function ko(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            jl(t, a),
            (r = Si(e, t, n, r, l, a)),
            (n = ji()),
            null === e || wo
              ? (al && n && el(t), (t.flags |= 1), xo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vo(e, t, a))
          );
        }
        function So(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              zu(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ru(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), jo(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Vo(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function jo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((wo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vo(e, t, a);
              0 !== (131072 & e.flags) && (wo = !0);
            }
          }
          return _o(e, t, n, r, a);
        }
        function Eo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Ls, zs),
                (zs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Ls, zs),
                  (zs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Na(Ls, zs),
                (zs |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Ls, zs),
              (zs |= r);
          return xo(e, t, a, n), t.child;
        }
        function No(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _o(e, t, n, r, a) {
          var l = za(n) ? Ta : Ca.current;
          return (
            (l = Ia(t, l)),
            jl(t, a),
            (n = Si(e, t, n, r, l, a)),
            (r = ji()),
            null === e || wo
              ? (al && r && el(t), (t.flags |= 1), xo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vo(e, t, a))
          );
        }
        function Co(e, t, n, r, a) {
          if (za(n)) {
            var l = !0;
            Ma(t);
          } else l = !1;
          if ((jl(t, a), null === t.stateNode))
            Ho(e, t), Hl(t, n, r), $l(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = El(u))
              : (u = Ia(t, (u = za(n) ? Ta : Ca.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Vl(t, i, r, u)),
              (Tl = !1);
            var f = t.memoizedState;
            (i.state = f),
              Fl(t, r, i, a),
              (s = t.memoizedState),
              o !== r || f !== s || Pa.current || Tl
                ? ("function" === typeof c &&
                    (Al(t, n, c, r), (s = t.memoizedState)),
                  (o = Tl || Wl(t, n, o, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              zl(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : gl(t.type, o)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = El(s))
                : (s = Ia(t, (s = za(n) ? Ta : Ca.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && Vl(t, i, r, s)),
              (Tl = !1),
              (f = t.memoizedState),
              (i.state = f),
              Fl(t, r, i, a);
            var h = t.memoizedState;
            o !== d || f !== h || Pa.current || Tl
              ? ("function" === typeof p &&
                  (Al(t, n, p, r), (h = t.memoizedState)),
                (u = Tl || Wl(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Po(e, t, n, r, l, a);
        }
        function Po(e, t, n, r, a, l) {
          No(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), Vo(e, t, l);
          (r = t.stateNode), (bo.current = t);
          var o =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Gl(t, e.child, null, l)),
                (t.child = Gl(t, null, o, l)))
              : xo(e, t, o, l),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function To(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ra(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ra(0, t.context, !1),
            ri(e, t.containerInfo);
        }
        function Io(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), xo(e, t, n, r), t.child;
        }
        var zo,
          Lo,
          Ro,
          Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fo(e, t, n) {
          var r,
            a = t.pendingProps,
            i = oi.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Na(oi, 1 & i),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Mu(s, a, 0, null)),
                      (e = Ou(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Mo(n)),
                      (t.memoizedState = Oo),
                      e)
                    : Do(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Uo(e, t, o, (r = co(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Mu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Ou(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Gl(t, e.child, null, o),
                    (t.child.memoizedState = Mo(o)),
                    (t.memoizedState = Oo),
                    i);
              if (0 === (1 & t.mode)) return Uo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Uo(e, t, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), wo || s)) {
                if (null !== (r = Ps)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Pl(e, a), nu(r, e, a, -1));
                }
                return mu(), Uo(e, t, o, (r = co(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = _u.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ya++] = Ga),
                    (qa[Ya++] = Xa),
                    (qa[Ya++] = Ka),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (Ka = t)),
                  (t = Do(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Lu(r, o))
                : ((o = Ou(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Mo(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Oo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Lu(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Do(e, t) {
          return (
            ((t = Mu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Uo(e, t, n, r) {
          return (
            null !== r && hl(r),
            Gl(t, e.child, null, n),
            ((e = Do(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ao(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sl(e.return, t, n);
        }
        function Bo(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Wo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((xo(e, t, r.children, n), 0 !== (2 & (r = oi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ao(e, n, t);
                else if (19 === e.tag) Ao(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(oi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bo(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bo(t, !0, n, null, l);
                break;
              case "together":
                Bo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ho(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ms |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $o(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
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
              return Qo(t), null;
            case 1:
            case 17:
              return za(t.type) && La(), Qo(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Ea(Pa),
                Ea(Ca),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (iu(ll), (ll = null)))),
                Qo(t),
                null
              );
            case 5:
              ii(t);
              var a = ni(ti.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Lo(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Qo(t), null;
                }
                if (((e = ni(Zl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Or.length; a++) Ur(Or[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      G(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ur("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    zo(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Or.length; a++) Ur(Or[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = K(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ur("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
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
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qo(t), null;
            case 6:
              if (e && null != t.stateNode) Ro(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = ni(ti.current)), ni(Zl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Qo(t), null;
            case 13:
              if (
                (Ea(oi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (i = !1);
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qo(t), (i = !1);
                } else null !== ll && (iu(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & oi.current)
                        ? 0 === Rs && (Rs = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qo(t),
                  null);
            case 4:
              return (
                ai(), null === e && Wr(t.stateNode.containerInfo), Qo(t), null
              );
            case 10:
              return kl(t.type._context), Qo(t), null;
            case 19:
              if ((Ea(oi), null === (i = t.memoizedState))) return Qo(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) $o(i, !1);
                else {
                  if (0 !== Rs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = si(e))) {
                        for (
                          t.flags |= 128,
                            $o(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(oi, (1 & oi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    $o(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $o(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return Qo(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $o(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = oi.current),
                  Na(oi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qo(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & zs) &&
                    (Qo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qo(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Yo(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                za(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Ea(Pa),
                Ea(Ca),
                ci(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ii(t), null;
            case 13:
              if (
                (Ea(oi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(oi), null;
            case 4:
              return ai(), null;
            case 10:
              return kl(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (zo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Lo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ni(Zl.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = K(e, a)), (r = K(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ur("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ro = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ko = !1,
          Go = !1,
          Xo = "function" === typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function Zo(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ju(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            ju(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && es(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ls(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ls(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function os(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Go || Zo(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Wt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Go &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Go &&
                (Zo(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  ju(n, t, o);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Go = (r = Go) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Go = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xo()),
              t.forEach(function (t) {
                var r = Cu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(l(160));
                ps(i, o, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ju(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  ju(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && Zo(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && Zo(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      be(s, o);
                    var c = be(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    ju(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (g) {
                  ju(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Xe())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Go = (c = Go) || d), ms(t, e), (Go = c))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Jo = e, d = e.child; null !== d; ) {
                    for (f = Jo = d; null !== Jo; ) {
                      switch (((h = (p = Jo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zo(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              ju(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zo(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jo = h)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", o)));
                      } catch (g) {
                        ju(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        ju(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, os(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, os(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              ju(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Jo = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
            var a = Jo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Ko;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Go;
                o = Ko;
                var u = Go;
                if (((Ko = i), (Go = s) && !u))
                  for (Jo = a; null !== Jo; )
                    (s = (i = Jo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                        ? ((s.return = i), (Jo = s))
                        : ks(a);
                for (; null !== l; ) (Jo = l), bs(l, t, n), (l = l.sibling);
                (Jo = a), (Ko = o), (Go = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Jo = l))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Go)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Dl(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Dl(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
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
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Go || (512 & t.flags && as(t));
              } catch (p) {
                ju(t, t.return, p);
              }
            }
            if (t === e) {
              Jo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function xs(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (t === e) {
              Jo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    ju(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ju(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ju(t, l, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ju(t, i, s);
                  }
              }
            } catch (s) {
              ju(t, t.return, s);
            }
            if (t === e) {
              Jo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Jo = o);
              break;
            }
            Jo = t.return;
          }
        }
        var Ss,
          js = Math.ceil,
          Es = w.ReactCurrentDispatcher,
          Ns = w.ReactCurrentOwner,
          _s = w.ReactCurrentBatchConfig,
          Cs = 0,
          Ps = null,
          Ts = null,
          Is = 0,
          zs = 0,
          Ls = ja(0),
          Rs = 0,
          Os = null,
          Ms = 0,
          Fs = 0,
          Ds = 0,
          Us = null,
          As = null,
          Bs = 0,
          Ws = 1 / 0,
          Hs = null,
          Vs = !1,
          $s = null,
          Qs = null,
          qs = !1,
          Ys = null,
          Ks = 0,
          Gs = 0,
          Xs = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & Cs) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Cs) && 0 !== Is
            ? Is & -Is
            : null !== ml.transition
            ? (0 === Zs && (Zs = mt()), Zs)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Gs) throw ((Gs = 0), (Xs = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & Cs) && e === Ps) ||
              (e === Ps && (0 === (2 & Cs) && (Fs |= n), 4 === Rs && ou(e, Is)),
              ru(e, r),
              1 === n &&
                0 === Cs &&
                0 === (1 & t.mode) &&
                ((Ws = Xe() + 500), Ua && Wa()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = ft(e, e === Ps ? Is : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Ba(e);
                  })(su.bind(null, e))
                : Ba(su.bind(null, e)),
                ia(function () {
                  0 === (6 & Cs) && Wa();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & Cs))) throw Error(l(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ps ? Is : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = Cs;
            Cs |= 2;
            var i = hu();
            for (
              (Ps === e && Is === t) ||
              ((Hs = null), (Ws = Xe() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            xl(),
              (Es.current = i),
              (Cs = a),
              null !== Ts ? (t = 0) : ((Ps = null), (Is = 0), (t = Rs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = Os), fu(e, 0), ou(e, r), ru(e, Xe()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = lu(e, i))),
                  1 === t))
              )
                throw ((n = Os), fu(e, 0), ou(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  xu(e, As, Hs);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, As, Hs), t);
                    break;
                  }
                  xu(e, As, Hs);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * js(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, As, Hs), r);
                    break;
                  }
                  xu(e, As, Hs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = Us;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = As), (As = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === As ? (As = e) : As.push.apply(As, e);
        }
        function ou(e, t) {
          for (
            t &= ~Ds,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Cs)) throw Error(l(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = Os), fu(e, 0), ou(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, As, Hs),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = Cs;
          Cs |= 1;
          try {
            return e(t);
          } finally {
            0 === (Cs = n) && ((Ws = Xe() + 500), Ua && Wa());
          }
        }
        function cu(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & Cs) && ku();
          var t = Cs;
          Cs |= 1;
          var n = _s.transition,
            r = bt;
          try {
            if (((_s.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (_s.transition = n), 0 === (6 & (Cs = t)) && Wa();
          }
        }
        function du() {
          (zs = Ls.current), Ea(Ls);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ts))
            for (n = Ts.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  ai(), Ea(Pa), Ea(Ca), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Ea(oi);
                  break;
                case 10:
                  kl(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Ts = e = Lu(e.current, null)),
            (Is = zs = t),
            (Rs = 0),
            (Os = null),
            (Ds = Fs = Ms = 0),
            (As = Us = null),
            null !== Nl)
          ) {
            for (t = 0; t < Nl.length; t++)
              if (null !== (r = (n = Nl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Nl = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ts;
            try {
              if ((xl(), (di.current = lo), vi)) {
                for (var r = hi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((pi = 0),
                (gi = mi = hi = null),
                (yi = !1),
                (bi = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (Rs = 1), (Os = t), (Ts = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Is),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vo(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      yo(h, o, s, 0, t),
                      1 & h.mode && go(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    go(i, c, t), mu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = vo(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      yo(v, o, s, 0, t),
                      hl(uo(u, s));
                    break e;
                  }
                }
                (i = u = uo(u, s)),
                  4 !== Rs && (Rs = 2),
                  null === Us ? (Us = [i]) : Us.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ml(i, ho(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ml(i, mo(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (w) {
              (t = w), Ts === n && null !== n && (Ts = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Es.current;
          return (Es.current = lo), null === e ? lo : e;
        }
        function mu() {
          (0 !== Rs && 3 !== Rs && 2 !== Rs) || (Rs = 4),
            null === Ps ||
              (0 === (268435455 & Ms) && 0 === (268435455 & Fs)) ||
              ou(Ps, Is);
        }
        function gu(e, t) {
          var n = Cs;
          Cs |= 2;
          var r = hu();
          for ((Ps === e && Is === t) || ((Hs = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((xl(), (Cs = n), (Es.current = r), null !== Ts))
            throw Error(l(261));
          return (Ps = null), (Is = 0), Rs;
        }
        function vu() {
          for (; null !== Ts; ) bu(Ts);
        }
        function yu() {
          for (; null !== Ts && !Ke(); ) bu(Ts);
        }
        function bu(e) {
          var t = Ss(e.alternate, e, zs);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ts = t),
            (Ns.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qo(n, t, zs))) return void (Ts = n);
            } else {
              if (null !== (n = Yo(n, t)))
                return (n.flags &= 32767), void (Ts = n);
              if (null === e) return (Rs = 6), void (Ts = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ts = t);
            Ts = t = e;
          } while (null !== t);
          0 === Rs && (Rs = 5);
        }
        function xu(e, t, n) {
          var r = bt,
            a = _s.transition;
          try {
            (_s.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ys);
                if (0 !== (6 & Cs)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === Ps && ((Ts = Ps = null), (Is = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Pu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = _s.transition), (_s.transition = null);
                  var o = bt;
                  bt = 1;
                  var s = Cs;
                  (Cs |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = o),
                                    p === i && ++d === r && (u = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Jo = t;
                        null !== Jo;

                      )
                        if (
                          ((e = (t = Jo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jo = e);
                        else
                          for (; null !== Jo; ) {
                            t = Jo;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
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
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (x) {
                              ju(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jo = e);
                              break;
                            }
                            Jo = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ge(),
                    (Cs = s),
                    (bt = o),
                    (_s.transition = i);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Ys = e), (Ks = a)),
                  (i = e.pendingLanes),
                  0 === i && (Qs = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Vs) throw ((Vs = !1), (e = $s), ($s = null), e);
                0 !== (1 & Ks) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xs
                      ? Gs++
                      : ((Gs = 0), (Xs = e))
                    : (Gs = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (_s.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ys) {
            var e = wt(Ks),
              t = _s.transition,
              n = bt;
            try {
              if (((_s.transition = null), (bt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Ks = 0), 0 !== (6 & Cs)))
                  throw Error(l(331));
                var a = Cs;
                for (Cs |= 4, Jo = e.current; null !== Jo; ) {
                  var i = Jo,
                    o = i.child;
                  if (0 !== (16 & Jo.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jo = c; null !== Jo; ) {
                          var d = Jo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jo = f);
                          else
                            for (; null !== Jo; ) {
                              var p = (d = Jo).sibling,
                                h = d.return;
                              if ((ls(d), d === c)) {
                                Jo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jo = p);
                                break;
                              }
                              Jo = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Jo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Jo = o);
                  else
                    e: for (; null !== Jo; ) {
                      if (0 !== (2048 & (i = Jo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jo = y);
                        break e;
                      }
                      Jo = i.return;
                    }
                }
                var b = e.current;
                for (Jo = b; null !== Jo; ) {
                  var w = (o = Jo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), (Jo = w);
                  else
                    e: for (o = b; null !== Jo; ) {
                      if (0 !== (2048 & (s = Jo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          ju(s, s.return, k);
                        }
                      if (s === o) {
                        Jo = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Jo = x);
                        break e;
                      }
                      Jo = s.return;
                    }
                }
                if (
                  ((Cs = a),
                  Wa(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (_s.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Rl(e, (t = ho(0, (t = uo(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function ju(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  (t = Rl(t, (e = mo(t, (e = uo(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Is & n) === n &&
              (4 === Rs ||
              (3 === Rs && (130023424 & Is) === Is && 500 > Xe() - Bs)
                ? fu(e, 0)
                : (Ds |= n)),
            ru(e, t);
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Pl(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function _u(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nu(e, n);
        }
        function Cu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Nu(e, n);
        }
        function Pu(e, t) {
          return qe(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Iu(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Iu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ru(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) zu(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case S:
                return Ou(n.children, a, i, t);
              case j:
                (o = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Iu(12, n, t, 2 | a)).elementType = E), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Iu(13, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Iu(19, n, t, a)).elementType = T), (e.lanes = i), e
                );
              case L:
                return Mu(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      o = 10;
                      break e;
                    case _:
                      o = 9;
                      break e;
                    case C:
                      o = 11;
                      break e;
                    case I:
                      o = 14;
                      break e;
                    case z:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Iu(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ou(e, t, n, r) {
          return ((e = Iu(7, e, r, t)).lanes = n), e;
        }
        function Mu(e, t, n, r) {
          return (
            ((e = Iu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Iu(6, e, null, t)).lanes = n), e;
        }
        function Du(e, t, n) {
          return (
            ((t = Iu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Au(e, t, n, r, a, l, i, o, s) {
          return (
            (e = new Uu(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Iu(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Il(l),
            e
          );
        }
        function Bu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Wu(e) {
          if (!e) return _a;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (za(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (za(n)) return Oa(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, a, l, i, o, s) {
          return (
            ((e = Au(n, r, !0, e, 0, l, 0, o, s)).context = Wu(null)),
            (n = e.current),
            ((l = Ll((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Rl(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var a = t.current,
            l = eu(),
            i = tu(a);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ll(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Rl(a, t, i)) && (nu(e, a, i, l), Ol(e, a, i)),
            i
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) wo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        To(t), pl();
                        break;
                      case 5:
                        li(t);
                        break;
                      case 1:
                        za(t.type) && Ma(t);
                        break;
                      case 4:
                        ri(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(oi, 1 & oi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fo(e, t, n)
                            : (Na(oi, 1 & oi.current),
                              null !== (e = Vo(e, t, n)) ? e.sibling : null);
                        Na(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(oi, oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Eo(e, t, n);
                    }
                    return Vo(e, t, n);
                  })(e, t, n)
                );
              wo = 0 !== (131072 & e.flags);
            }
          else (wo = !1), al && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ho(e, t), (e = t.pendingProps);
              var a = Ia(t, Ca.current);
              jl(t, n), (a = Si(null, t, r, e, a, n));
              var i = ji();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    za(r) ? ((i = !0), Ma(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Il(t),
                    (a.updater = Bl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $l(t, r, e, n),
                    (t = Po(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    xo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ho(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = _o(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Co(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ko(null, t, r, e, n);
                    break e;
                  case 14:
                    t = So(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _o(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Co(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((To(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  zl(e, t),
                  Fl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Io(e, t, r, n, (a = uo(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Io(e, t, r, n, (a = uo(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Xl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Vo(e, t, n);
                    break e;
                  }
                  xo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                li(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                No(e, t),
                xo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Fo(e, t, n);
            case 4:
              return (
                ri(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Gl(t, null, r, n)) : xo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ko(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return xo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Na(vl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Pa.current) {
                      t = Vo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ll(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Sl(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          Sl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                xo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                jl(t, n),
                (r = r((a = El(a)))),
                (t.flags |= 1),
                xo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                So(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return jo(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Ho(e, t),
                (t.tag = 1),
                za(r) ? ((e = !0), Ma(t)) : (e = !1),
                jl(t, n),
                Hl(t, r, a),
                $l(t, r, a, n),
                Po(null, t, r, !0, e, n)
              );
            case 19:
              return Wo(e, t, n);
            case 22:
              return Eo(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Yu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = $u(i);
                o.call(e);
              };
            }
            Vu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = $u(i);
                    l.call(e);
                  };
                }
                var i = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = $u(s);
                  o.call(e);
                };
              }
              var s = Au(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Vu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return $u(i);
        }
        (Gu.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Vu(e, t, null, null);
          }),
          (Gu.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Vu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Gu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = jt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Xe()),
                    0 === (6 & Cs) && ((Ws = Xe() + 500), Wa()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Pl(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Pl(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              qu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Pl(e, t);
              if (null !== n) nu(n, e, t, eu());
              qu(e, t);
            }
          }),
          (jt = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(l(90));
                      q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = uu),
          (Pe = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ne, _e, uu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(l(200));
            return Bu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Yu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Au(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              o = Yu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ha] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Gu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          j = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !j.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: S.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + C(s, 0) : l),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(_, "$&/") + "/"),
                  P(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(_, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + C((o = e[u]), u);
              s += P(o, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += P((o = o.value), t, a, (c = l + C(o, u++)), i);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z = { current: null },
          L = { transition: null },
          R = {
            ReactCurrentDispatcher: z,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !j.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: I,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return z.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return z.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return z.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return z.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return z.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return z.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return z.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return z.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return z.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return z.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return z.current.useRef(e);
          }),
          (t.useState = function (e) {
            return z.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return z.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return z.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(k);
            else {
              var t = r(c);
              null !== t && R(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), y(N), (N = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !P()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var o = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && R(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          j = !1,
          E = null,
          N = -1,
          _ = 5,
          C = -1;
        function P() {
          return !(t.unstable_now() - C < _);
        }
        function T() {
          if (null !== E) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((j = !1), (E = null));
            }
          } else j = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var I = new MessageChannel(),
            z = I.port2;
          (I.port1.onmessage = T),
            (S = function () {
              z.postMessage(null);
            });
        } else
          S = function () {
            v(T, 0);
          };
        function L(e) {
          (E = e), j || ((j = !0), S());
        }
        function R(e, n) {
          N = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
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
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(N), (N = -1)) : (g = !0), R(x, l - i)))
                : ((e.sortIndex = o), n(u, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var l = Object.create(null);
      n.r(l);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & a && r; "object" == typeof o && !~e.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach(function (e) {
          i[e] = function () {
            return r[e];
          };
        });
      return (
        (i.default = function () {
          return r;
        }),
        n.d(l, i),
        l
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      var e = n(164);
      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function r(e, n) {
        if (e) {
          if ("string" === typeof e) return t(e, n);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? t(e, n)
              : void 0
          );
        }
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l,
                i,
                o = [],
                s = !0,
                u = !1;
              try {
                if (((l = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = l.call(n)).done) &&
                    (o.push(r.value), o.length !== t);
                    s = !0
                  );
              } catch (c) {
                (u = !0), (a = c);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          r(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var l,
        i = n(791),
        o = n.t(i, 2);
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return t(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          r(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      function d(e) {
        var t = (function (e, t) {
          if ("object" !== c(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== c(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, d(r.key), r);
        }
      }
      function p(e, t, n) {
        return (
          t && f(e.prototype, t),
          n && f(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function h(e, t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          h(e, t)
        );
      }
      function m(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && h(e, t);
      }
      function g(e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          g(e)
        );
      }
      function v() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function y(e, t) {
        if (t && ("object" === c(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function b(e) {
        var t = v();
        return function () {
          var n,
            r = g(e);
          if (t) {
            var a = g(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function w(e, t, n) {
        return (
          (w = v()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && h(a, n.prototype), a;
              }),
          w.apply(null, arguments)
        );
      }
      function x(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (x = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return w(e, arguments, g(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              h(r, e)
            );
          }),
          x(e)
        );
      }
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(l || (l = {}));
      var S,
        j = "popstate";
      function E(e) {
        return { usr: e.state, key: e.key };
      }
      function N(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          k(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? C(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function _(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          l = e.hash,
          i = void 0 === l ? "" : l;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function C(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function P(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : "unknown://unknown",
          n = "string" === typeof e ? e : _(e);
        return new URL(n, t);
      }
      function T(e, t, n, r) {
        void 0 === r && (r = {});
        var a = r,
          i = a.window,
          o = void 0 === i ? document.defaultView : i,
          s = a.v5Compat,
          u = void 0 !== s && s,
          c = o.history,
          d = l.Pop,
          f = null;
        function p() {
          (d = l.Pop), f && f({ action: d, location: h.location });
        }
        var h = {
          get action() {
            return d;
          },
          get location() {
            return e(o, c);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(j, p),
              (f = e),
              function () {
                o.removeEventListener(j, p), (f = null);
              }
            );
          },
          createHref: function (e) {
            return t(o, e);
          },
          encodeLocation: function (e) {
            var t = P("string" === typeof e ? e : _(e));
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            d = l.Push;
            var r = N(h.location, e, t);
            n && n(r, e);
            var a = E(r),
              i = h.createHref(r);
            try {
              c.pushState(a, "", i);
            } catch (s) {
              o.location.assign(i);
            }
            u && f && f({ action: d, location: h.location });
          },
          replace: function (e, t) {
            d = l.Replace;
            var r = N(h.location, e, t);
            n && n(r, e);
            var a = E(r),
              i = h.createHref(r);
            c.replaceState(a, "", i),
              u && f && f({ action: d, location: h.location });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return h;
      }
      function I(e, t, n) {
        void 0 === n && (n = "/");
        var r = U(("string" === typeof t ? C(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = z(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var l = null, i = 0; null == l && i < a.length; ++i)
          l = M(a[i], D(r));
        return l;
      }
      function z(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var l = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            l.relativePath.startsWith("/") &&
              (A(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                  l.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (l.relativePath = l.relativePath.slice(r.length)));
            var i = W([r, l.relativePath]),
              o = n.concat(l);
            e.children &&
              e.children.length > 0 &&
              (A(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  i +
                  '".'
              ),
              z(e.children, t, o, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: O(i, e.index), routesMeta: o });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(S || (S = {}));
      var L = /^:\w+$/,
        R = function (e) {
          return "*" === e;
        };
      function O(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(R) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !R(e);
            })
            .reduce(function (e, t) {
              return e + (L.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function M(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", l = [], i = 0;
          i < n.length;
          ++i
        ) {
          var o = n[i],
            s = i === n.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            c = F(
              { path: o.relativePath, caseSensitive: o.caseSensitive, end: s },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var d = o.route;
          l.push({
            params: r,
            pathname: W([a, c.pathname]),
            pathnameBase: H(W([a, c.pathnameBase])),
            route: d,
          }),
            "/" !== c.pathnameBase && (a = W([a, c.pathnameBase]));
        }
        return l;
      }
      function F(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            B(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var l = new RegExp(a, t ? void 0 : "i");
            return [l, r];
          })(e.path, e.caseSensitive, e.end),
          r = a(n, 2),
          l = r[0],
          i = r[1],
          o = t.match(l);
        if (!o) return null;
        var s = o[0],
          u = s.replace(/(.)\/+$/, "$1"),
          c = o.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              u = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    B(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: s,
          pathnameBase: u,
          pattern: e,
        };
      }
      function D(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            B(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function U(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function A(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function B(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      var W = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        H = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        V = (function (e) {
          m(n, e);
          var t = b(n);
          function n() {
            return u(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(x(Error));
      var $ = p(function e(t, n, r, a) {
        u(this, e),
          void 0 === a && (a = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = a),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function Q(e) {
        return e instanceof $;
      }
      var q = ["post", "put", "patch", "delete"],
        Y = (new Set(q), ["get"].concat(q));
      new Set(Y),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      function K() {
        return (
          (K = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          K.apply(this, arguments)
        );
      }
      var G =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        X = i.useState,
        J = i.useEffect,
        Z = i.useLayoutEffect,
        ee = i.useDebugValue;
      function te(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !G(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        o.useSyncExternalStore;
      var ne = i.createContext(null);
      var re = i.createContext(null);
      var ae = i.createContext(null);
      var le = i.createContext(null);
      var ie = i.createContext(null);
      var oe = i.createContext(null);
      var se = i.createContext({ outlet: null, matches: [] });
      var ue = i.createContext(null);
      function ce() {
        return null != i.useContext(oe);
      }
      function de() {
        return ce() || A(!1), i.useContext(oe).location;
      }
      var fe = i.createContext(null);
      function pe() {
        var e = (function () {
            var e,
              t = i.useContext(ue),
              n = be(me.UseRouteError),
              r = i.useContext(se),
              a = r.matches[r.matches.length - 1];
            if (t) return t;
            return (
              r || A(!1),
              !a.route.id && A(!1),
              null == (e = n.errors) ? void 0 : e[a.route.id]
            );
          })(),
          t = Q(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          a = { padding: "0.5rem", backgroundColor: r },
          l = { padding: "2px 4px", backgroundColor: r };
        return i.createElement(
          i.Fragment,
          null,
          i.createElement("h2", null, "Unhandled Thrown Error!"),
          i.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? i.createElement("pre", { style: a }, n) : null,
          i.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          i.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            i.createElement("code", { style: l }, "errorElement"),
            " props on\xa0",
            i.createElement("code", { style: l }, "<Route>")
          )
        );
      }
      var he,
        me,
        ge = (function (e) {
          m(n, e);
          var t = b(n);
          function n(e) {
            var r;
            return (
              u(this, n),
              ((r = t.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              r
            );
          }
          return (
            p(
              n,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? i.createElement(ue.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            n
          );
        })(i.Component);
      function ve(e) {
        var t = e.routeContext,
          n = e.match,
          r = e.children,
          a = i.useContext(ne);
        return (
          a &&
            n.route.errorElement &&
            (a._deepestRenderedBoundaryId = n.route.id),
          i.createElement(se.Provider, { value: t }, r)
        );
      }
      function ye(e, t, n) {
        if ((void 0 === t && (t = []), null == e)) {
          if (null == n || !n.errors) return null;
          e = n.matches;
        }
        var r = e,
          a = null == n ? void 0 : n.errors;
        if (null != a) {
          var l = r.findIndex(function (e) {
            return e.route.id && (null == a ? void 0 : a[e.route.id]);
          });
          l >= 0 || A(!1), (r = r.slice(0, Math.min(r.length, l + 1)));
        }
        return r.reduceRight(function (e, l, o) {
          var s = l.route.id ? (null == a ? void 0 : a[l.route.id]) : null,
            u = n ? l.route.errorElement || i.createElement(pe, null) : null,
            c = function () {
              return i.createElement(
                ve,
                {
                  match: l,
                  routeContext: {
                    outlet: e,
                    matches: t.concat(r.slice(0, o + 1)),
                  },
                },
                s ? u : void 0 !== l.route.element ? l.route.element : e
              );
            };
          return n && (l.route.errorElement || 0 === o)
            ? i.createElement(ge, {
                location: n.location,
                component: u,
                error: s,
                children: c(),
              })
            : c();
        }, null);
      }
      function be(e) {
        var t = i.useContext(ae);
        return t || A(!1), t;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(he || (he = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(me || (me = {}));
      var we;
      function xe(e) {
        return (function (e) {
          var t = i.useContext(se).outlet;
          return t ? i.createElement(fe.Provider, { value: e }, t) : t;
        })(e.context);
      }
      function ke(e) {
        A(!1);
      }
      function Se(e) {
        var t = e.basename,
          n = void 0 === t ? "/" : t,
          r = e.children,
          a = void 0 === r ? null : r,
          o = e.location,
          s = e.navigationType,
          u = void 0 === s ? l.Pop : s,
          c = e.navigator,
          d = e.static,
          f = void 0 !== d && d;
        ce() && A(!1);
        var p = n.replace(/^\/*/, "/"),
          h = i.useMemo(
            function () {
              return { basename: p, navigator: c, static: f };
            },
            [p, c, f]
          );
        "string" === typeof o && (o = C(o));
        var m = o,
          g = m.pathname,
          v = void 0 === g ? "/" : g,
          y = m.search,
          b = void 0 === y ? "" : y,
          w = m.hash,
          x = void 0 === w ? "" : w,
          k = m.state,
          S = void 0 === k ? null : k,
          j = m.key,
          E = void 0 === j ? "default" : j,
          N = i.useMemo(
            function () {
              var e = U(v, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: x, state: S, key: E };
            },
            [p, v, b, x, S, E]
          );
        return null == N
          ? null
          : i.createElement(
              ie.Provider,
              { value: h },
              i.createElement(oe.Provider, {
                children: a,
                value: { location: N, navigationType: u },
              })
            );
      }
      function je(e) {
        var t = e.children,
          n = e.location,
          r = i.useContext(re);
        return (function (e, t) {
          ce() || A(!1);
          var n,
            r = i.useContext(ie).navigator,
            a = i.useContext(ae),
            o = i.useContext(se).matches,
            s = o[o.length - 1],
            u = s ? s.params : {},
            c = (s && s.pathname, s ? s.pathnameBase : "/"),
            d = (s && s.route, de());
          if (t) {
            var f,
              p = "string" === typeof t ? C(t) : t;
            "/" === c ||
              (null == (f = p.pathname) ? void 0 : f.startsWith(c)) ||
              A(!1),
              (n = p);
          } else n = d;
          var h = n.pathname || "/",
            m = I(e, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            g = ye(
              m &&
                m.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, u, e.params),
                    pathname: W([
                      c,
                      r.encodeLocation
                        ? r.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : W([
                            c,
                            r.encodeLocation
                              ? r.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              o,
              a || void 0
            );
          return t && g
            ? i.createElement(
                oe.Provider,
                {
                  value: {
                    location: K(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      n
                    ),
                    navigationType: l.Pop,
                  },
                },
                g
              )
            : g;
        })(r && !t ? r.router.routes : Ne(t), n);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(we || (we = {}));
      var Ee = new Promise(function () {});
      i.Component;
      function Ne(e, t) {
        void 0 === t && (t = []);
        var n = [];
        return (
          i.Children.forEach(e, function (e, r) {
            if (i.isValidElement(e))
              if (e.type !== i.Fragment) {
                e.type !== ke && A(!1),
                  e.props.index && e.props.children && A(!1);
                var a = [].concat(s(t), [r]),
                  l = {
                    id: e.props.id || a.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (l.children = Ne(e.props.children, a)),
                  n.push(l);
              } else n.push.apply(n, Ne(e.props.children, t));
          }),
          n
        );
      }
      function _e(e) {
        var t,
          n = e.basename,
          r = e.children,
          l = e.window,
          o = i.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (t = { window: l, v5Compat: !0 }) && (t = {}),
            T(
              function (e, t) {
                var n = e.location;
                return N(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : _(t);
              },
              null,
              t
            )));
        var s = o.current,
          u = a(i.useState({ action: s.action, location: s.location }), 2),
          c = u[0],
          d = u[1];
        return (
          i.useLayoutEffect(
            function () {
              return s.listen(d);
            },
            [s]
          ),
          i.createElement(Se, {
            basename: n,
            children: r,
            location: c.location,
            navigationType: c.action,
            navigator: s,
          })
        );
      }
      var Ce, Pe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Ce || (Ce = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Pe || (Pe = {}));
      var Te = n(184);
      var Ie = function () {
          return (0, Te.jsxs)("header", {
            children: [
              (0, Te.jsxs)("nav", {
                children: [
                  (0, Te.jsx)("a", {
                    className: "navLink",
                    href: "/final/projects",
                    children: "projects,",
                  }),
                  " ",
                  (0, Te.jsx)("a", {
                    className: "navLink",
                    href: "/final/writing",
                    children: "writing,",
                  }),
                  " ",
                  (0, Te.jsx)("a", {
                    className: "navLink",
                    href: "/final/resume",
                    children: "resume,",
                  }),
                  " ",
                  "&",
                  " ",
                  (0, Te.jsx)("a", {
                    className: "navLink",
                    href: "/final/contact",
                    children: "where to contact me",
                  }),
                ],
              }),
              (0, Te.jsx)("div", { className: "navBar" }),
              (0, Te.jsx)("a", {
                className: "myName",
                href: "/final",
                children: "Will Allstetter",
              }),
            ],
          });
        },
        ze = function () {
          return (0, Te.jsxs)(Te.Fragment, {
            children: [
              (0, Te.jsxs)("div", {
                className: "not-footer",
                children: [(0, Te.jsx)(Ie, {}), (0, Te.jsx)(xe, {})],
              }),
              (0, Te.jsx)("div", {
                className: "footer",
                id: "footer",
                children:
                  "Website designed + coded by me using Javascript, React, and HTML.",
              }),
            ],
          });
        };
      var Le = function () {
        return (0, Te.jsxs)("body", {
          children: [
            (0, Te.jsx)("div", { className: "title", children: "Soundtable" }),
            (0, Te.jsxs)("div", {
              children: [
                "For my end of semester Design Studio project, I built an Ableton controller. This project grew out of a desire to both simplify and introduce an aspect of play to sound synthesis. Modern digital VST synthesizers relies on extensive knowledge of sine wave and wavetable properties, creating a high barrier to entry into the field. As opposed to most software synthesizers, the Soundtable was designed to allow anyone\u2014including those without experience\u2014to experiment and, most importantly, play. The design is intentionally organic, placing it in direct contrast with the digital style popular in the field. The meanings of the controls are intentionally obscure on first interaction. This is in an effort to encourage exploration and discovery rather than the achievement of specific sonic goals. For those looking to have granular, percise control over their synthesis, there is already a variety of technology. Instead, the Soundtable fufills a different need: to have a fun, casual introduction to sound synthesis.",
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                "Behind the scenes,",
                " ",
                (0, Te.jsx)("a", {
                  href: "https://www.arduino.cc/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Arduinos",
                }),
                " ",
                "send capacitive touch data through a serial port to a Python program, which controls parameters of",
                " ",
                (0, Te.jsx)("a", {
                  href: "https://vital.audio/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Vital Basic",
                }),
                ".",
              ],
            }),
            (0, Te.jsxs)("div", {
              className: "bricks",
              children: [
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Demo",
                    }),
                    (0, Te.jsx)("iframe", {
                      src: "https://player.vimeo.com/video/780633910?h=0e5fb3f82a&badge=0&autopause=0&player_id=0&app_id=58479",
                      frameborder: "0",
                      allow: "autoplay; fullscreen; picture-in-picture",
                      allowfullscreen: !0,
                      title: "soundtable_demo (1080p).mp4",
                      className: "vimeo",
                    }),
                  ],
                }),
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Build Process",
                    }),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "Wanting to create a tactile, touchable interface without a digital asthetic, I decided on utilizng capative touch sensors and copper tape. My initial design consisted of overlapping sections of tape, however I got lots of interference in the signal, as overlapping signals would ground eachother and bring the outputs to zero.",
                    }),
                    (0, Te.jsx)("img", {
                      className: "smallimg",
                      src: "https://i.imgur.com/pGaSVib.jpg",
                    }),
                    (0, Te.jsx)("img", {
                      className: "smallimg",
                      src: "https://i.imgur.com/Uyi6DF1.jpg",
                    }),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "As a result, I created an altertaitve design that, in the end, better suited the needs of the project. This iteration gestured at the grid like asthetic I was intentionally subverting while keeping the simplcity needed.",
                    }),
                    (0, Te.jsx)("img", {
                      className: "smallimg",
                      src: "https://i.imgur.com/W2rC6hg.jpg",
                    }),
                    (0, Te.jsxs)("div", {
                      className: "disc",
                      children: [
                        "Once the circutry was working, I wrote a program that recieved serial data from the Arduinos and utilized the",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://github.com/ideoforms/pylive",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "pyLive",
                        }),
                        " ",
                        "library to control Ableton Live.",
                      ],
                    }),
                    (0, Te.jsx)("img", {
                      src: "https://i.imgur.com/srWmGfm.png",
                    }),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "Then, when it came to creating the casing for the technology, it was important for the project's goals to create a natrual looking piece of furniture with organic materials.",
                    }),
                    (0, Te.jsx)("img", {
                      className: "mediumImg",
                      src: "https://i.imgur.com/VT8PnMR.jpg",
                    }),
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "If I were to make another iteration, I woud focus on creating an more organic shape to further signal its ideological departure from a tradutional synthesizer/digital music ethos.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Re = function () {
        return (0, Te.jsxs)("body", {
          className: "contact",
          children: [
            (0, Te.jsxs)("div", {
              className: "left-half",
              children: [
                "You can contact me:",
                (0, Te.jsxs)("ul", {
                  children: [
                    (0, Te.jsxs)("li", {
                      children: [
                        "on",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://www.linkedin.com/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "LinkedIn",
                        }),
                      ],
                    }),
                    (0, Te.jsxs)("li", {
                      children: [
                        "by",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://gmail.com",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "email",
                        }),
                      ],
                    }),
                    (0, Te.jsx)("li", {
                      children:
                        "through snail mail at 69 Brown St. Box #####, Providence, RI 02912",
                    }),
                    (0, Te.jsxs)("li", {
                      children: [
                        "or check out what I'm saving on",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://www.are.na/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "are.na",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Te.jsxs)("div", {
              className: "contactPhoto",
              children: [
                " ",
                (0, Te.jsx)("img", {
                  src: "https://pbs.twimg.com/media/EY7tGKrUMAAToB9?format=jpg&name=large",
                }),
              ],
            }),
          ],
        });
      };
      var Oe = function () {
        return (0, Te.jsxs)("body", {
          children: [
            (0, Te.jsxs)("div", {
              className: "flex",
              children: [
                (0, Te.jsxs)("div", {
                  className: "left-half-noDash",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "title",
                      children: "POWER HOUSE Books Redesign",
                    }),
                    (0, Te.jsxs)("div", {
                      children: [
                        "For a project in my",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://cs.brown.edu/courses/csci1300/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "UI/UX class",
                        }),
                        ", I redesigned Powerhouse Bookstore's home page. It was out of date and hard to navigate. As a writer and avid reader, I appricate the importance of independent booksellers and wanted to help modernize an iconic NYC one.",
                      ],
                    }),
                  ],
                }),
                (0, Te.jsx)("div", {
                  className: "mePhoto",
                  children: (0, Te.jsx)("img", {
                    src: "https://yourbrooklynguide.com/wp-content/uploads/2021/09/powerhouse-bookstore-in-Industry-City-in-Sunset-Park-Brooklyn.jpg",
                    alt: "inside of powerhouse books",
                  }),
                }),
              ],
            }),
            (0, Te.jsxs)("div", {
              className: "bricks",
              children: [
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Part 1: Wireframes",
                    }),
                    (0, Te.jsxs)("div", {
                      className: "disc",
                      children: [
                        "When designing my wireframes, I tried to identify the major problems with Powerhouse's website and remedy them. The issues I identified (and solved in the sub-bullets) were:",
                        (0, Te.jsxs)("ul", {
                          children: [
                            (0, Te.jsxs)("li", {
                              children: [
                                (0, Te.jsx)("p", {
                                  children:
                                    "The page had lots of redundant information",
                                }),
                                (0, Te.jsxs)("ul", {
                                  children: [
                                    (0, Te.jsx)("li", {
                                      children: (0, Te.jsx)("p", {
                                        children:
                                          "only listed staff picks and social media links once",
                                      }),
                                    }),
                                    (0, Te.jsx)("li", {
                                      children: (0, Te.jsx)("p", {
                                        children:
                                          "removed any information that was on other pages on the website",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Te.jsxs)("li", {
                              children: [
                                (0, Te.jsx)("p", {
                                  children: "Unclear navigation\xa0",
                                }),
                                (0, Te.jsx)("ul", {
                                  children: (0, Te.jsx)("li", {
                                    children: (0, Te.jsx)("p", {
                                      children:
                                        "removed the menu bar, as all the info was linked elsewhere in the page and mostly focused on their publishing arm, despite it having its own website",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, Te.jsxs)("li", {
                              children: [
                                (0, Te.jsx)("p", {
                                  children:
                                    "No way to edit the cart when looking at it",
                                }),
                                (0, Te.jsx)("ul", {
                                  children: (0, Te.jsx)("li", {
                                    children: (0, Te.jsx)("p", {
                                      children:
                                        "Made items removable in the cart",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, Te.jsxs)("li", {
                              children: [
                                (0, Te.jsx)("p", {
                                  children: "No hierarchy of information",
                                }),
                                (0, Te.jsx)("ul", {
                                  children: (0, Te.jsx)("li", {
                                    children: (0, Te.jsx)("p", {
                                      children:
                                        "Split the page into two sections: book browsing and bookstore information",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, Te.jsxs)("li", {
                              children: [
                                (0, Te.jsx)("p", {
                                  children:
                                    "Events calendar doesn\u2019t show event names",
                                }),
                                (0, Te.jsx)("ul", {
                                  children: (0, Te.jsx)("li", {
                                    children: (0, Te.jsx)("p", {
                                      children:
                                        "Only listed upcoming events, linking to the full calendar for more detailed information",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, Te.jsxs)("li", {
                              children: [
                                (0, Te.jsx)("p", {
                                  children: "Busy, text heavy design",
                                }),
                                (0, Te.jsx)("ul", {
                                  children: (0, Te.jsx)("li", {
                                    children: (0, Te.jsx)("p", {
                                      children:
                                        "Reworked their copy to display the same information in less space",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, Te.jsxs)("li", {
                              children: [
                                (0, Te.jsx)("p", {
                                  children:
                                    "Columns collapse in weird order when page gets smaller",
                                }),
                                (0, Te.jsxs)("ul", {
                                  children: [
                                    (0, Te.jsx)("li", {
                                      children: (0, Te.jsx)("p", {
                                        children:
                                          "exchanged detailed shopping cart to a clickable icon when page is small enough",
                                      }),
                                    }),
                                    (0, Te.jsx)("li", {
                                      children: (0, Te.jsx)("p", {
                                        children:
                                          "made a one-column, scrolling solution on small screens",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        "My new design attempts to consolidate the page, making what needs to be visible prominent while removing redundancies and unnecessary information. There was also a fair amount of accessibility issues which I addressed, including:",
                        (0, Te.jsxs)("ul", {
                          children: [
                            (0, Te.jsx)("li", {
                              children: (0, Te.jsx)("p", {
                                children: "Language not identified",
                              }),
                            }),
                            (0, Te.jsx)("li", {
                              children: (0, Te.jsx)("p", {
                                children: "The HTML was not split into regions",
                              }),
                            }),
                            (0, Te.jsx)("li", {
                              children: (0, Te.jsx)("p", {
                                children: "Images without alternative text",
                              }),
                            }),
                            (0, Te.jsx)("li", {
                              children: (0, Te.jsx)("p", {
                                children:
                                  "Certain areas (e.g. shopping cart) had low contrast between text and background",
                              }),
                            }),
                            (0, Te.jsx)("li", {
                              children: (0, Te.jsx)("p", {
                                children:
                                  "Adjacent links go to the same URL (photo and header links)",
                              }),
                            }),
                            (0, Te.jsx)("li", {
                              children: (0, Te.jsx)("p", {
                                children: "Underlined text that isn't a link",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Te.jsx)("img", {
                      src: "https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/dQqCA7SGkpgLRm0b.png",
                    }),
                    "Desktop Wireframe",
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("img", {
                      src: "https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/zJkfyz4oBFTpwKt6.png",
                    }),
                    "Tablet Wireframe",
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("img", {
                      src: "https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/W19RyquNUoWSWpeH.png",
                    }),
                    "Phone Wireframe",
                  ],
                }),
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Part 2: Style Guide",
                    }),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "For the style guide, I tried to use simple, organic colors, looking to replicate the cozy, \"hygge\" feeling that many bookstores, including Powerhouse, play into. Their current website uses metallic and modern colors, which seems discordant with their brick and mortar branding. For interactions, I tried to keep it in line with the dominant trends, not making any choices that wouldn't be seen elsewhere and the user wouldn't be used to.",
                    }),
                    (0, Te.jsx)("img", {
                      src: "https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/4AWMXDbQVf0WIjyL.png",
                      className: "padBottom",
                    }),
                  ],
                }),
                (0, Te.jsx)("div", {
                  className: "brick",
                  children: (0, Te.jsxs)("div", {
                    className: "centerElements",
                    children: [
                      (0, Te.jsx)("div", {
                        className: "subhead",
                        children: "Part 3: Hi-fi Annotated Mockup",
                      }),
                      (0, Te.jsx)("img", {
                        src: "https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/sOYxymcxGvl6uPIT.png",
                        alt: "annotated hifi",
                        className: "padBottom",
                      }),
                    ],
                  }),
                }),
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Part 4: Deploying my Design",
                    }),
                    (0, Te.jsxs)("div", {
                      className: "disc",
                      children: [
                        "I, to the best of my HTML and CSS abilities, implemented my Figma mockup. Thanks to my use of flexboxes, the design was already responsive across screen sizes. I did, however, have to do some CSS tricks to make a one column solution on mobile pages. I used the",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://www.w3schools.com/cssref/css3_pr_mediaquery.asp",
                          target: "_blank",
                          rel: "noopener noreferrer nofollow",
                          children: "@media",
                        }),
                        " ",
                        "rule to create a single column solution when the screen size was below 750px. At that size, I also unhid the shopping cart icon, removed the detailed shopping cart. ",
                        (0, Te.jsx)("br", {}),
                        (0, Te.jsx)("br", {}),
                        "There were a few discrepancies (thanks to my limited web-dev abilities) between the Hi-Fi prototype and the HTML page, such as fonts, minor alignment issues, and the ability to implement a carousel. I also did not implement the (ideal + prototyped) infinite scroll, but stuck to four browsing rows.",
                        (0, Te.jsx)("br", {}),
                        (0, Te.jsx)("br", {}),
                        " Check out the website",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://woefulworm.github.io/assignment2-website/",
                          target: "_blank",
                          rel: "noopener noreferrer nofollow",
                          children: "here",
                        }),
                        ".",
                      ],
                    }),
                    (0, Te.jsx)("img", {
                      src: "https://storage.googleapis.com/uxfolio/633b7c971d43db0003adbb93/634fff9b18e80100031f54db/1e1Be5BJt5j78hn9.gif",
                      alt: "annotated hifi",
                      className: "padBottom",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Me = function () {
        return (0, Te.jsxs)("body", {
          className: "writing",
          children: [
            (0, Te.jsxs)("div", {
              className: "left-half",
              children: [
                "I've publshed\xa0",
                (0, Te.jsx)("a", {
                  href: "http://www.theindy.org/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "these articles",
                }),
                " ",
                "in ",
                (0, Te.jsx)("i", { children: "The College Hill Independent" }),
                ", worked as a copywriter for",
                " ",
                (0, Te.jsx)("a", {
                  href: "https://www.pipsrewards.com/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "PIPs",
                }),
                ", and won",
                " ",
                (0, Te.jsx)("a", {
                  href: "https://brownmotionpictures.org/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Brown Motion Pictures",
                }),
                "' screenwriting competition. ",
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                "I find myself often interested in challanging traiditional formal practices, and the structure of my pieces reflect that. ",
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                "Please email me (",
                (0, Te.jsx)("a", {
                  href: "mailto:fake@fake.com",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "[email redacted]",
                }),
                ") if you'd like other examples of my academic, professional, or fictional pieces.",
              ],
            }),
            (0, Te.jsxs)("div", {
              className: "contactPhoto",
              children: [
                " ",
                (0, Te.jsx)("img", { src: "https://i.imgur.com/DDQ7Gc3.png" }),
              ],
            }),
          ],
        });
      };
      var Fe = function () {
        return (0, Te.jsxs)("div", {
          className: "resume",
          children: [
            (0, Te.jsx)("iframe", {
              src: "https://drive.google.com/file/d/12xjdTJsgjJ9araiEcEehAtUVt9fyo8_G/preview",
              width: "90%",
              allow: "autoplay",
              className: "pdf",
            }),
            (0, Te.jsx)("br", {}),
            " download a copy",
            " ",
            (0, Te.jsx)("a", {
              href: "https://drive.google.com/file/d/12xjdTJsgjJ9araiEcEehAtUVt9fyo8_G/view?usp=sharing",
              target: "_blank",
              rel: "noreferrer",
              children: "here",
            }),
          ],
        });
      };
      var De = function () {
        return (0, Te.jsxs)("body", {
          children: [
            (0, Te.jsx)("div", {
              className: "subhead",
              children: "Art/Design",
            }),
            (0, Te.jsxs)("div", {
              className: "bricks",
              children: [
                (0, Te.jsx)("a", {
                  href: "/final/soundtable",
                  children: (0, Te.jsxs)("div", {
                    className: "brickHomepage",
                    children: [
                      (0, Te.jsx)("img", {
                        className: "sampleImg",
                        src: "https://i.imgur.com/8PB7tdj.jpg",
                      }),
                      (0, Te.jsx)("div", {
                        class: "overlay",
                        children: (0, Te.jsx)("div", {
                          class: "overlayText",
                          children: "soundtable",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, Te.jsx)("a", {
                  href: "/final/techlands",
                  children: (0, Te.jsxs)("div", {
                    className: "brickHomepage",
                    children: [
                      (0, Te.jsx)("img", {
                        className: "sampleImg",
                        src: "https://i.imgur.com/A50iPdN.png",
                      }),
                      (0, Te.jsx)("div", {
                        class: "overlay",
                        children: (0, Te.jsx)("div", {
                          class: "overlayText",
                          children: "the map is not the territory",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, Te.jsx)("a", {
                  href: "/final/cyanobacteria",
                  children: (0, Te.jsxs)("div", {
                    className: "brickHomepage",
                    children: [
                      (0, Te.jsx)("img", {
                        className: "sampleImg",
                        src: "https://i.imgur.com/rmVfAdn.jpg",
                      }),
                      (0, Te.jsx)("div", {
                        class: "overlay",
                        children: (0, Te.jsx)("div", {
                          class: "overlayText",
                          children: "cyanobacteria sonification",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, Te.jsx)("a", {
                  href: "/final/bluenoAr",
                  children: (0, Te.jsxs)("div", {
                    className: "brickHomepage",
                    children: [
                      (0, Te.jsx)("img", {
                        className: "sampleImg",
                        src: "https://media4.giphy.com/media/YUu0xmmRmePOyu8uIh/giphy.gif?cid=790b76114918966cc373c0d38ecd43826ed176ce4cf224d3&rid=giphy.gif&ct=g",
                      }),
                      (0, Te.jsx)("div", {
                        class: "overlay",
                        children: (0, Te.jsx)("div", {
                          class: "overlayText",
                          children: "blueno ar",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, Te.jsxs)("div", {
              hidden: !0,
              children: [
                (0, Te.jsx)("div", {
                  className: "subhead",
                  children: "Software Engineering",
                }),
                (0, Te.jsxs)("div", {
                  className: "bricks",
                  children: [
                    (0, Te.jsx)("a", {
                      href: "/weensyOS",
                      children: (0, Te.jsxs)("div", {
                        className: "brickHomepage",
                        children: [
                          (0, Te.jsx)("img", {
                            className: "sampleImg",
                            src: "https://media3.giphy.com/media/cnagYypJlDdV4b0Uei/giphy.gif?cid=790b76113674abdbe3bcf55322b48ca1826b81c0f38a9fb9&rid=giphy.gif&ct=g",
                          }),
                          (0, Te.jsx)("div", {
                            class: "overlay",
                            children: (0, Te.jsx)("div", {
                              class: "overlayText",
                              children: "weensyOS",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, Te.jsx)("a", {
                      href: "/iterative",
                      children: (0, Te.jsxs)("div", {
                        className: "brickHomepage",
                        children: [
                          (0, Te.jsx)("img", {
                            className: "sampleImg",
                            src: "https://i.imgur.com/8EPBv3q.jpg",
                          }),
                          (0, Te.jsx)("div", {
                            class: "overlay",
                            children: (0, Te.jsx)("div", {
                              class: "overlayText",
                              children: "handwritten digit generator",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, Te.jsx)("a", {
                      href: "/iterative",
                      children: (0, Te.jsxs)("div", {
                        className: "brickHomepage",
                        children: [
                          (0, Te.jsx)("img", {
                            className: "sampleImg",
                            src: "https://i.imgur.com/0xa94m1.jpg?1",
                          }),
                          (0, Te.jsx)("div", {
                            class: "overlay",
                            children: (0, Te.jsx)("div", {
                              class: "overlayText",
                              children: "dog-cat identifier",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, Te.jsx)("a", {
                      href: "/iterative",
                      children: (0, Te.jsxs)("div", {
                        className: "brickHomepage",
                        children: [
                          (0, Te.jsx)("img", {
                            className: "sampleImg",
                            src: "https://i.imgur.com/tOG1dJt.gif",
                          }),
                          (0, Te.jsx)("div", {
                            class: "overlay",
                            children: (0, Te.jsx)("div", {
                              class: "overlayText",
                              children: "gitlab prune",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, Te.jsx)("div", { className: "subhead", children: "UI/UX" }),
            (0, Te.jsxs)("div", {
              className: "bricks",
              children: [
                (0, Te.jsx)("a", {
                  href: "/final/iterative",
                  children: (0, Te.jsxs)("div", {
                    className: "brickHomepage",
                    children: [
                      (0, Te.jsx)("img", {
                        className: "sampleImg",
                        src: "https://i.imgur.com/sESXgRm.png",
                      }),
                      (0, Te.jsx)("div", {
                        class: "overlay",
                        children: (0, Te.jsx)("div", {
                          class: "overlayText",
                          children: "andi design",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, Te.jsx)("a", {
                  href: "/final/backpack",
                  children: (0, Te.jsxs)("div", {
                    className: "brickHomepage",
                    children: [
                      (0, Te.jsx)("img", {
                        className: "sampleImg",
                        src: "https://i.imgur.com/u1J9TG6.jpg",
                      }),
                      (0, Te.jsx)("div", {
                        class: "overlay",
                        children: (0, Te.jsx)("div", {
                          class: "overlayText",
                          children: "backpack game",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, Te.jsx)("a", {
                  href: "/final/redesign",
                  children: (0, Te.jsxs)("div", {
                    className: "brickHomepage",
                    children: [
                      (0, Te.jsx)("img", {
                        className: "sampleImg",
                        src: "https://cdn.vox-cdn.com/thumbor/fvwx9IbRHceEHEWFjYFvRF6S0i0=/41x0:681x480/1400x1400/filters:focal(41x0:681x480):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47552007/unnamed-4.0.0.jpg",
                      }),
                      (0, Te.jsx)("div", {
                        class: "overlay",
                        children: (0, Te.jsx)("div", {
                          class: "overlayText",
                          children: "powerHouse redesign",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var Ue = function () {
        return (0, Te.jsx)("div", {
          className: "centerHome",
          children: (0, Te.jsxs)("div", {
            className: "bricks",
            children: [
              (0, Te.jsxs)("div", {
                className: "left-half",
                children: [
                  (0, Te.jsx)("div", {
                    children: (0, Te.jsxs)("div", {
                      className: "title",
                      children: [
                        " ",
                        "Hi, I'm ",
                        (0, Te.jsx)("i", { children: "Will Allstetter" }),
                      ],
                    }),
                  }),
                  "I'm a creative technologist & writer pursuing a bachelor's degree in Computer Science & English at",
                  " ",
                  (0, Te.jsx)("a", {
                    href: "https://www.brown.edu/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Brown University",
                  }),
                  " ",
                  "(and sometimes",
                  " ",
                  (0, Te.jsx)("a", {
                    href: "https://www.risd.edu/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "RISD",
                  }),
                  "). At school, I work in the New Media Department of the",
                  " ",
                  (0, Te.jsx)("a", {
                    href: "https://www.ivyfilmfestival.org/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Ivy Film Festival",
                  }),
                  " ",
                  "and handle Operations and Sustainability for",
                  " ",
                  (0, Te.jsx)("a", {
                    href: "http://betterworldxdesign.com/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Better World by Design",
                  }),
                  ". ",
                  (0, Te.jsx)("br", {}),
                  (0, Te.jsx)("br", {}),
                  "I'm interested in how nature, exploration, play, and minimal interfaces can contribute to an ethical, critical design practice.",
                ],
              }),
              (0, Te.jsxs)("div", {
                className: "mePhoto",
                children: [
                  (0, Te.jsx)("img", {
                    src: "https://i.insider.com/56d5b238dd089554178b4752?width=1000&format=jpeg&auto=webp",
                    alt: "a photo of me (Will Allstetter)",
                    className: "left-pad",
                  }),
                  (0, Te.jsx)("br", {}),
                  "I'm not allowed to have photos of myself so this will have to do for the time being (I'm the dog)",
                ],
              }),
            ],
          }),
        });
      };
      var Ae = function () {
        return (0, Te.jsxs)("body", {
          children: [
            (0, Te.jsxs)("div", {
              className: "flex",
              children: [
                (0, Te.jsxs)("div", {
                  className: "left-most-noDash",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "title",
                      children: "Andi Mobile Design",
                    }),
                    (0, Te.jsxs)("div", {
                      children: [
                        "For a project in my",
                        " ",
                        (0, Te.jsx)("a", {
                          href: "https://cs.brown.edu/courses/csci1300/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "UI/UX class",
                        }),
                        ", my group chose to redesign Andi, a startup using AI & language models to create a better search engine. I was especially interested in this product's mission as it stood in oppsotion to the SEO optimized, advertisement cluttered, and data tracking current state of online search engines. Andi summerizes it's findings, giving simple answers to it's users while still encouraging divergent online journeys.",
                        (0, Te.jsx)("br", {}),
                        (0, Te.jsx)("br", {}),
                        "While Andi operates across interfaces, we designed specifically for their mobile application. In line with it's vision, Andi is primarily for users who are no longer interested in being the product for mega-corporations - specifically users frustrated by endless ads, data tracking, and convoluted search results. This encapsulates a large segment of potential customers, but as a tech minded alterative to the current industry giants, Andi is likely most relevant to users who are digitally native, frequently use search engines like Google or Yahoo (and are familiar with their layout), and are interested in need and actively searching for a better alterative.",
                        (0, Te.jsx)("br", {}),
                        (0, Te.jsx)("br", {}),
                        "Andi would change the game - challanging competitors who subject their users to advertisments and SEO tricks that pollute their experience and obscure relevant information. Instead, it would offer more direct & accurate answers based on searches (helpful for researchers/frequent searchers), and also a friendlier UI that encourages exploration and highlights the most crucial information.",
                      ],
                    }),
                  ],
                }),
                (0, Te.jsx)("div", {
                  className: "mePhotoSmall",
                  children: (0, Te.jsx)("img", {
                    className: "mediumImgPad",
                    src: "https://media3.giphy.com/media/fvCdHSSIuYUkfGhOc0/giphy.gif?cid=790b7611f6848dedc6d007c6832f3337b3e6b86dd8e92d89&rid=giphy.gif&ct=g",
                  }),
                }),
              ],
            }),
            (0, Te.jsxs)("div", {
              className: "bricks",
              children: [
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Part 1: Sketching",
                    }),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "We brainstormed what Andi could look like in the following sketches, ranging from a persona that engages with the user to a traditional search engine interface. We also played with the way resluts are shared and organized. While doing this, we tried to keep in mind what layout would be easiest for a new user to apply their existing mental maps to, while also communicating Andi's difference from it's competitors.",
                    }),
                    (0, Te.jsx)("img", {
                      className: "mediumImgPad",
                      src: "https://iterative-design.vercel.app/IMG_4695.jpeg",
                    }),
                    (0, Te.jsx)("img", {
                      className: "mediumImgPad",
                      src: "https://iterative-design.vercel.app/IMG_4694.jpeg",
                    }),
                    (0, Te.jsx)("img", {
                      className: "mediumImgPad",
                      src: "https://iterative-design.vercel.app/wireframe3.png",
                    }),
                  ],
                }),
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Part 2: Wireframing",
                    }),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "After skteching, we mocked up this concept in Balsamiq. In the end, we decided to follow a more traditional search engine layout, displayed in the second image, commmincating Andi's difference in the simplcity of the search results. We decided to stick with box-based results that summarizes the most relevant information/high-level summary first, and then follows up with more context. In this way, search results more directly answer the user's inquiry and if needed they can easily find more related information. We agreed that stepping too far out of convention would go against Andi's goal of creating a smoother, simpler search experience. We also included an \"About Andi\" modal that communicates Andi's unique mission to users.",
                    }),
                    (0, Te.jsx)("img", {
                      src: "https://iterative-design.vercel.app/New-Wireframe-1.png",
                    }),
                  ],
                }),
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Part 3: Hifi Prototype",
                    }),
                    (0, Te.jsx)("div", {
                      class: "figma",
                      children: (0, Te.jsx)("iframe", {
                        src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fc8WzWfbsaWjfoNZuJudGm2%2Fiterative-(Copy)%3Fnode-id%3D2%253A35%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A35",
                        allowfullscreen: "",
                        className: "figma",
                      }),
                    }),
                    (0, Te.jsxs)("div", {
                      className: "disc",
                      children: [
                        "Following our critique session, we incorporated a handful of changes to further iterate on our prototype. These included:",
                        (0, Te.jsxs)("ul", {
                          children: [
                            (0, Te.jsx)("li", {
                              children:
                                "Addition of a bolded, simplified description of Andi on the \u201cHow it works\u201d frame (per industry critique). This \u201cTL:DR\u201d text embodies Andi's ethos by giving a straightforward, quick answer to the frame's proposed question.",
                            }),
                            (0, Te.jsx)("li", {
                              children:
                                "Addition of a caption to image and video results to help contextualize results.",
                            }),
                            (0, Te.jsx)("li", {
                              children:
                                "Removal of the \u201cOpen in YouTube\u201d button in the video results frame to reduce redundancies. We transferred this action to a new frame which, upon clicking on a video result, presents the user an option to leave Andi to view the video, or cancel the operation and stay within the app.",
                            }),
                            (0, Te.jsx)("li", {
                              children:
                                "A more consitent use of shadows to signify clickable elements",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Te.jsxs)("div", {
                  className: "brick",
                  children: [
                    (0, Te.jsx)("div", {
                      className: "subhead",
                      children: "Part 4: User Testing",
                    }),
                    (0, Te.jsx)("div", {
                      className: "disc",
                      children:
                        "After implementing our changes from the critique, we tested our prototype with real users, giving them the following prompt:",
                    }),
                    (0, Te.jsx)("div", {
                      class: "block-quote",
                      children:
                        '"Andi is a search engine that uses generative AI models to generate simple answers to your questions. Presented here is a prototype of Andi\'s user interface designed specifically for mobile users. Suppose you want to visit the Brown Computer Science Department offices. Using Andi, find the location of the Brown CS department and open the location in Apple Maps. As you complete the task, please think aloud so that our designers can better understand your train of thought while using the interface. Thank you!"',
                    }),
                    (0, Te.jsxs)("div", {
                      className: "disc",
                      children: [
                        "And these subtasks:",
                        (0, Te.jsxs)("ul", {
                          children: [
                            (0, Te.jsx)("li", {
                              children: 'Using Andi, search for "Brown CS"',
                            }),
                            (0, Te.jsx)("li", {
                              children:
                                "Navigate to the result containing the department's location",
                            }),
                            (0, Te.jsx)("li", {
                              children:
                                'Open the building\'s location in "Maps"',
                            }),
                          ],
                        }),
                        "From our first respondent, we noticed that he struggled with the second subtask, when attempting our given task, to find the address of the Brown CS Building. He found the search bar easily and was able to determine what each component on the page was. However, he expressed trouble figuring out whether he was supposed to select from the field of search queries automatically populated in the search bar or to click the search button call-to-action (CTA). This struggle is something that we anticipated, as our prototype only used a mock version of type-to-search functionality, so the search queries populating the dropdown menu were not based on anything the user typed in. This initial confusion was likely due to the user's mental model of type-to-search dropdowns in other interfaces, where, as you type, results are listed. However, our given dropdown menu only displayed content that we manually added to display on the screen. The user did, however, successfully search for Brown CS (one of our subtasks).",
                        (0, Te.jsx)("br", {}),
                        (0, Te.jsx)("br", {}),
                        "Once the users completed this task, they were able to successfully search on our interface and complete the remaining subtasks, accomplishing our main task of finding the address for Brown CS. A piece of feedback we got from this user was to make the interface more indicative of the tasks the user needs to take on that given page. The second respondent was able to complete the task quickly and validated our expectation that the interface would be intuitive for a user unfamiliar with Andi, stating that the app was \u201csimple and easy to use\u201d (1:32 in video 4342277B). We found that the third user had an easy time navigating through the app and completing the task as well. She did struggle with the final sub-task of navigating from the individual search result page to the \u201copen in maps\u201d button. Both the third and first users expressed difficulty with noticing the maps icon when on the search results page. Since this was a bottleneck for completing the final sub-task of getting to the map view for two of the three users, we think that an area for improvement on our interface would be to 1.) making the map icon more prominent to the user and 2.) making the task more clear on the screen overall.",
                      ],
                    }),
                    (0, Te.jsx)("iframe", {
                      src: "https://www.youtube.com/embed/PQk1jDrAmGw",
                      title: "YouTube video player",
                      frameborder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowfullscreen: "",
                    }),
                    (0, Te.jsx)("iframe", {
                      src: "https://www.youtube.com/embed/SNTNFMDG7Eg",
                      title: "YouTube video player",
                      frameborder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowfullscreen: "",
                    }),
                    (0, Te.jsx)("iframe", {
                      src: "https://www.youtube.com/embed/fSNIWrx390g",
                      title: "YouTube video player",
                      frameborder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowfullscreen: "",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Be = function () {
        return (0, Te.jsxs)("body", {
          className: "flex",
          children: [
            (0, Te.jsxs)("div", {
              className: "left-half-noDash",
              children: [
                (0, Te.jsx)("div", {
                  className: "title",
                  children: "Cyanobacteria Sonificaiton",
                }),
                (0, Te.jsxs)("div", {
                  className: "disc",
                  children: [
                    "Working with a team from the University of Colorado's",
                    " ",
                    (0, Te.jsx)("a", {
                      href: "https://www.colorado.edu/cinemastudies/",
                      children: "Department of Moving Pictures",
                    }),
                    " ",
                    "and",
                    " ",
                    (0, Te.jsxs)("a", {
                      href: "https://www.colorado.edu/lab/cameron/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: [" ", "The Cameron Lab"],
                    }),
                    ", I wrote a program that uses",
                    " ",
                    (0, Te.jsx)("a", {
                      href: "https://opencv.org/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "OpenCV",
                    }),
                    " ",
                    "and",
                    " ",
                    (0, Te.jsx)("a", {
                      href: "https://midiutil.readthedocs.io/en/1.2.1/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "MIDIUtil",
                    }),
                    " ",
                    "to create a MIDI composition from data. It is a Python algorithm that intakes CSV data and video to sonify Cyanobacteria cells' growth. It does so by mapping different heuristics (change in cell size, cell growth rate, video movement, etc.) to different properties such as arpeggiator rate or the triggering of a kick drum. The output, in MIDI format, is currently being used as a soundtrack in the production of a documentary about the bacteria. This project as a whole attempted to understand the poetic and scientific similarities between man-made climate change and the cyanobacteria life cycle. ",
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("br", {}),
                    "Selections of my work are currently on display at the",
                    " ",
                    (0, Te.jsx)("a", {
                      href: "https://www.dmns.org/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Denver Museum of Nature and Science",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            (0, Te.jsx)("iframe", {
              className: "vimeoTall",
              height: "500px",
              src: "https://player.vimeo.com/video/659179487?h=f514f6d975&badge=0&autopause=0&player_id=0&app_id=58479",
              title:
                "cyanobacteria_sonification_example_AdobeCreativeCloudExpress.mp4",
            }),
          ],
        });
      };
      var We = function () {
        return (0, Te.jsxs)("body", {
          children: [
            (0, Te.jsxs)("div", {
              className: "title",
              children: [
                "Current Research/",
                (0, Te.jsx)("i", { children: "The Map Is Not The Territory" }),
              ],
            }),
            "Right now, I'm working on a research project with",
            " ",
            (0, Te.jsx)("a", {
              href: "https://naturelab.risd.edu/",
              target: "_blank",
              rel: "noreferrer",
              children: "RISD's Nature Lab",
            }),
            " ",
            "and the graduate department of",
            " ",
            (0, Te.jsx)("a", {
              href: "https://dm.risd.edu/",
              target: "_blank",
              rel: "noreferrer",
              children: "Digital + Media Studies",
            }),
            " ",
            "exploring memory, myth, cartography, and note-taking. Still very much in progress, reach out if you'd like to know more or have any resources I might find interesting. Attached is an creative/research essay I wrote while a guest at the",
            " ",
            (0, Te.jsx)("a", {
              href: "http://nbnerr.org/",
              target: "_blank",
              rel: "noreferrer",
              children: "Narragansett Bay Research Reserve",
            }),
            ".",
            (0, Te.jsx)("br", {}),
            (0, Te.jsx)("br", {}),
            (0, Te.jsx)("div", {
              className: "resume",
              children: (0, Te.jsx)("iframe", {
                src: "https://drive.google.com/file/d/1N7V8yYidbCrqC4Tx7FHkZWIryJ0NwrKo/preview",
                width: "90%",
                allow: "autoplay",
                className: "pdf",
              }),
            }),
          ],
        });
      };
      var He = function () {
        return (0, Te.jsxs)("body", {
          className: "centerElements",
          children: [
            (0, Te.jsxs)("div", {
              className: "left-half-noDash",
              children: [
                (0, Te.jsx)("div", {
                  className: "title",
                  children: "Blueno AR",
                }),
                (0, Te.jsxs)("div", {
                  children: [
                    "To advertise the Ivy Film Festival's Virtual Reality Arcade, I made a website that uses",
                    " ",
                    (0, Te.jsx)("a", {
                      href: "https://ar-js-org.github.io/AR.js-Docs/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "AR.js",
                    }),
                    " ",
                    "to display a Blender model (which I also made) of an",
                    " ",
                    (0, Te.jsx)("a", {
                      href: "https://www.brown.edu/news/2020-09-03/blueno",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "iconic statue at Brown",
                    }),
                    ". The banner at the bottom of the page links to a sign-up sheet, where you can reserve a spot to view the",
                    " ",
                    (0, Te.jsx)("a", {
                      href: "https://www.ivyfilmfestival.org/new-media",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "official New Media selection",
                    }),
                    " ",
                    "my team and I chose for the 2022 festival. ",
                    (0, Te.jsx)("br", {}),
                    (0, Te.jsx)("br", {}),
                    "By attaching an ambigous QR code and call to action on the posters scattered around campus, viewers are drawn into the world of the festival. My goal was to create a promotional experience that felt like discovery and gestured towards IFF's takeover of campus during festival week.",
                  ],
                }),
              ],
            }),
            (0, Te.jsx)("div", {
              className: "mePhoto",
              children: (0, Te.jsx)("img", {
                className: "mediumImgPad",
                src: "https://media4.giphy.com/media/YUu0xmmRmePOyu8uIh/giphy.gif?cid=790b76114918966cc373c0d38ecd43826ed176ce4cf224d3&rid=giphy.gif&ct=g",
              }),
            }),
          ],
        });
      };
      var Ve = function () {
        return (0, Te.jsxs)("body", {
          children: [
            (0, Te.jsx)("div", { className: "title", children: "WeensyOS" }),
            (0, Te.jsxs)("div", {
              children: [
                "For my",
                " ",
                (0, Te.jsx)("a", {
                  href: "http://cs.brown.edu/courses/csci0300/2022/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "computer systems class",
                }),
                ", I implemented kernel isolation, process isolation, virtual page allocation, overlapping virtual address spaces, forking, shared memory, and the process exiting function for a basic operating system called WeensyOS. The entirety of the project was written in C++.",
              ],
            }),
            (0, Te.jsx)("br", {}),
            (0, Te.jsx)("img", {
              src: "https://i.imgur.com/i1SLhtd.gif",
              className: "mediumImg",
            }),
            (0, Te.jsx)("div", {
              className: "footer2",
              children: "credit to brown cs 300, spring 2022, ",
            }),
            (0, Te.jsx)("a", {
              href: "https://cs.brown.edu/courses/csci0300/2022/assign/projects/project4.html#Project-4-WeensyOS",
              target: "_blank",
              rel: "noreferrer",
              children: "assignment 4",
            }),
          ],
        });
      };
      var $e = function () {
        return (0, Te.jsxs)("body", {
          className: "centerHome",
          children: [
            (0, Te.jsx)("div", {
              className: "title",
              children: "Backpack Game",
            }),
            (0, Te.jsxs)("div", {
              className: "left-small",
              children: [
                "For a project in my",
                " ",
                (0, Te.jsx)("a", {
                  href: "https://cs.brown.edu/courses/csci1300/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "UI/UX class",
                }),
                ", I created a fun and whimsical web application (almost game) where the user rifles through my backpack, stealing items. I harkened back to an earlier GeoCties-esque design language to play up the fun and unseriousness of the website. I embeded the website to the right or you can visit it",
                " ",
                (0, Te.jsx)("a", {
                  href: "https://woefulworm.github.io/development/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "here",
                }),
                ".",
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                'To navigate the items, I added two sorting catagories. I thought the "value (to me)" critera would be helpful to a theif who wanted to inflict the most damage and the alphabetical one would be helpful if they were looking for a specific item. Then I added two filtering catagories because I thought they were funny due to being intentionally useless. ',
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                "I also made it so that when hovering over a component it was clear that that component was highlighted and selectable. To let the user know the system status, I made sure that the 1.) the value of and 2.) the specific items stolen were visible at all times. For accesibility, I ensured that the contrast was correct and everything could be read by a screenreader, including alt text for images.",
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                "I decided to show all the items in a grid at once; that felt most similar to how exploring a backpack would be, where you are able to see its entire contents. The repeating items in the grid made it clear that each item component behaved the same way and were part of the same family.",
                (0, Te.jsx)("br", {}),
                (0, Te.jsx)("br", {}),
                'The data on my website is read from a JSON file. From there, it is unpacked and stored in an array with a custom "generalItem" constructor. To make it responsive, I maintained three React useState arrays that had all the currently visible elements, the filtered out ones, and the stolen ones.',
              ],
            }),
            (0, Te.jsx)("br", {}),
            (0, Te.jsx)("iframe", {
              src: "https://woefulworm.github.io/development/",
              className: "webEmbed",
            }),
          ],
        });
      };
      function Qe() {
        return (0, Te.jsx)("div", {
          className: "all",
          children: (0, Te.jsx)(_e, {
            children: (0, Te.jsx)(je, {
              children: (0, Te.jsxs)(ke, {
                path: "/final/",
                element: (0, Te.jsx)(ze, {}),
                children: [
                  (0, Te.jsx)(ke, { index: !0, element: (0, Te.jsx)(Ue, {}) }),
                  (0, Te.jsx)(ke, {
                    path: "final",
                    element: (0, Te.jsx)(Ue, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "contact",
                    element: (0, Te.jsx)(Re, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "bluenoAr",
                    element: (0, Te.jsx)(He, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "weensyOS",
                    element: (0, Te.jsx)(Ve, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "backpack",
                    element: (0, Te.jsx)($e, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "soundtable",
                    element: (0, Te.jsx)(Le, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "redesign",
                    element: (0, Te.jsx)(Oe, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "writing",
                    element: (0, Te.jsx)(Me, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "resume",
                    element: (0, Te.jsx)(Fe, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "projects",
                    element: (0, Te.jsx)(De, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "techlands",
                    element: (0, Te.jsx)(We, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "iterative",
                    element: (0, Te.jsx)(Ae, {}),
                  }),
                  (0, Te.jsx)(ke, {
                    path: "cyanobacteria",
                    element: (0, Te.jsx)(Be, {}),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      e.render((0, Te.jsx)(Qe, {}), document.getElementById("root"));
    })();
})();
//# sourceMappingURL=main.6f109739.js.map