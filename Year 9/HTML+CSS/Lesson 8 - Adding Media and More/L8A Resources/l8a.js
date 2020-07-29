﻿(function (g, e, b, j, c, i, k) { /*! Jssor */
  new(function () {
    this.$DebugMode = c;
    this.$Log = function (c, d) {
      var a = g.console || {},
        b = this.$DebugMode;
      if (b && a.log) a.log(c);
      else b && d && alert(c)
    };
    this.$Error = function (b, d) {
      var c = g.console || {},
        a = this.$DebugMode;
      if (a && c.error) c.error(b);
      else a && alert(b);
      if (a) throw d || new Error(b);
    };
    this.$Fail = function (a) {
      throw new Error(a);
    };
    this.$Assert = function (b, c) {
      var a = this.$DebugMode;
      if (a)
        if (!b) throw new Error("Assert failed " + c || "");
    };
    this.$Trace = function (c) {
      var a = g.console || {},
        b = this.$DebugMode;
      b && a.log && a.log(c)
    };
    this.$Execute = function (b) {
      var a = this.$DebugMode;
      a && b()
    };
    this.$LiveStamp = function (c, d) {
      var b = this.$DebugMode;
      if (b) {
        var a = e.createElement("DIV");
        a.setAttribute("id", d);
        c.$Live = a
      }
    };
    this.$C_AbstractProperty = function () {
      throw new Error("The property is abstract, it should be implemented by subclass.");
    };
    this.$C_AbstractMethod = function () {
      throw new Error("The method is abstract, it should be implemented by subclass.");
    };

    function a(b) {
      if (b.constructor === a.caller) throw new Error("Cannot create instance of an abstract class.");
    }
    this.$C_AbstractClass = a
  });
  var d = g.$JssorEasing$ = {
      $EaseSwing: function (a) {
        return -b.cos(a * b.PI) / 2 + .5
      },
      $EaseLinear: function (a) {
        return a
      },
      $EaseInQuad: function (a) {
        return a * a
      },
      $EaseOutQuad: function (a) {
        return -a * (a - 2)
      },
      $EaseInOutQuad: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
      },
      $EaseInCubic: function (a) {
        return a * a * a
      },
      $EaseOutCubic: function (a) {
        return (a -= 1) * a * a + 1
      },
      $EaseInOutCubic: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
      },
      $EaseInQuart: function (a) {
        return a * a * a * a
      },
      $EaseOutQuart: function (a) {
        return -((a -= 1) * a * a * a - 1)
      },
      $EaseInOutQuart: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
      },
      $EaseInQuint: function (a) {
        return a * a * a * a * a
      },
      $EaseOutQuint: function (a) {
        return (a -= 1) * a * a * a * a + 1
      },
      $EaseInOutQuint: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
      },
      $EaseInSine: function (a) {
        return 1 - b.cos(a * b.PI / 2)
      },
      $EaseOutSine: function (a) {
        return b.sin(a * b.PI / 2)
      },
      $EaseInOutSine: function (a) {
        return -1 / 2 * (b.cos(b.PI * a) - 1)
      },
      $EaseInExpo: function (a) {
        return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
      },
      $EaseOutExpo: function (a) {
        return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
      },
      $EaseInOutExpo: function (a) {
        return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
      },
      $EaseInCirc: function (a) {
        return -(b.sqrt(1 - a * a) - 1)
      },
      $EaseOutCirc: function (a) {
        return b.sqrt(1 - (a -= 1) * a)
      },
      $EaseInOutCirc: function (a) {
        return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
      },
      $EaseInElastic: function (a) {
        if (!a || a == 1) return a;
        var c = .3,
          d = .075;
        return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
      },
      $EaseOutElastic: function (a) {
        if (!a || a == 1) return a;
        var c = .3,
          d = .075;
        return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
      },
      $EaseInOutElastic: function (a) {
        if (!a || a == 1) return a;
        var c = .45,
          d = .1125;
        return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
      },
      $EaseInBack: function (a) {
        var b = 1.70158;
        return a * a * ((b + 1) * a - b)
      },
      $EaseOutBack: function (a) {
        var b = 1.70158;
        return (a -= 1) * a * ((b + 1) * a + b) + 1
      },
      $EaseInOutBack: function (a) {
        var b = 1.70158;
        return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
      },
      $EaseInBounce: function (a) {
        return 1 - d.$EaseOutBounce(1 - a)
      },
      $EaseOutBounce: function (a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
      },
      $EaseInOutBounce: function (a) {
        return a < 1 / 2 ? d.$EaseInBounce(a * 2) * .5 : d.$EaseOutBounce(a * 2 - 1) * .5 + .5
      },
      $EaseGoBack: function (a) {
        return 1 - b.abs(2 - 1)
      },
      $EaseInWave: function (a) {
        return 1 - b.cos(a * b.PI * 2)
      },
      $EaseOutWave: function (a) {
        return b.sin(a * b.PI * 2)
      },
      $EaseOutJump: function (a) {
        return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
      },
      $EaseInJump: function (a) {
        return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
      }
    },
    f = g.$Jease$ = {
      $Swing: d.$EaseSwing,
      $Linear: d.$EaseLinear,
      $InQuad: d.$EaseInQuad,
      $OutQuad: d.$EaseOutQuad,
      $InOutQuad: d.$EaseInOutQuad,
      $InCubic: d.$EaseInCubic,
      $OutCubic: d.$EaseOutCubic,
      $InOutCubic: d.$EaseInOutCubic,
      $InQuart: d.$EaseInQuart,
      $OutQuart: d.$EaseOutQuart,
      $InOutQuart: d.$EaseInOutQuart,
      $InQuint: d.$EaseInQuint,
      $OutQuint: d.$EaseOutQuint,
      $InOutQuint: d.$EaseInOutQuint,
      $InSine: d.$EaseInSine,
      $OutSine: d.$EaseOutSine,
      $InOutSine: d.$EaseInOutSine,
      $InExpo: d.$EaseInExpo,
      $OutExpo: d.$EaseOutExpo,
      $InOutExpo: d.$EaseInOutExpo,
      $InCirc: d.$EaseInCirc,
      $OutCirc: d.$EaseOutCirc,
      $InOutCirc: d.$EaseInOutCirc,
      $InElastic: d.$EaseInElastic,
      $OutElastic: d.$EaseOutElastic,
      $InOutElastic: d.$EaseInOutElastic,
      $InBack: d.$EaseInBack,
      $OutBack: d.$EaseOutBack,
      $InOutBack: d.$EaseInOutBack,
      $InBounce: d.$EaseInBounce,
      $OutBounce: d.$EaseOutBounce,
      $InOutBounce: d.$EaseInOutBounce,
      $GoBack: d.$EaseGoBack,
      $InWave: d.$EaseInWave,
      $OutWave: d.$EaseOutWave,
      $OutJump: d.$EaseOutJump,
      $InJump: d.$EaseInJump
    };
  g.$JssorDirection$ = {
    $TO_LEFT: 1,
    $TO_RIGHT: 2,
    $TO_TOP: 4,
    $TO_BOTTOM: 8,
    $HORIZONTAL: 3,
    $VERTICAL: 12,
    $GetDirectionHorizontal: function (a) {
      return a & 3
    },
    $GetDirectionVertical: function (a) {
      return a & 12
    },
    $IsHorizontal: function (a) {
      return a & 3
    },
    $IsVertical: function (a) {
      return a & 12
    }
  };
  var a = g.$Jssor$ = new function () {
    var f = this,
      zb = /\S+/g,
      S = 1,
      fb = 2,
      jb = 3,
      ib = 4,
      nb = 5,
      I, s = 0,
      l = 0,
      q = 0,
      J = 0,
      C = 0,
      y = navigator,
      sb = y.appName,
      n = y.userAgent,
      v = e.documentElement;

    function Ib() {
      if (!I) {
        I = {
          $Touchable: "ontouchstart" in g || "createTouch" in e
        };
        var a;
        if (y.pointerEnabled || (a = y.msPointerEnabled)) I.$TouchActionAttr = a ? "msTouchAction" : "touchAction"
      }
      return I
    }

    function t(i) {
      if (!s) {
        s = -1;
        if (sb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
          var f = n.indexOf("MSIE");
          s = S;
          q = o(n.substring(f + 5, n.indexOf(";", f))); /*@cc_on J=@_jscript_version@*/ ;
          l = e.documentMode || q
        } else if (sb == "Netscape" && !!g.addEventListener) {
          var d = n.indexOf("Firefox"),
            b = n.indexOf("Safari"),
            h = n.indexOf("Chrome"),
            c = n.indexOf("AppleWebKit");
          if (d >= 0) {
            s = fb;
            l = o(n.substring(d + 8))
          } else if (b >= 0) {
            var j = n.substring(0, b).lastIndexOf("/");
            s = h >= 0 ? ib : jb;
            l = o(n.substring(j + 1, b))
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(n);
            if (a) {
              s = S;
              l = q = o(a[1])
            }
          }
          if (c >= 0) C = o(n.substring(c + 12))
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(n);
          if (a) {
            s = nb;
            l = o(a[2])
          }
        }
      }
      return i == s
    }

    function p() {
      return t(S)
    }

    function N() {
      return p() && (l < 6 || e.compatMode == "BackCompat")
    }

    function Ab() {
      return t(fb)
    }

    function hb() {
      return t(jb)
    }

    function Db() {
      return t(ib)
    }

    function mb() {
      return t(nb)
    }

    function ab() {
      return hb() && C > 534 && C < 535
    }

    function L() {
      return p() && l < 9
    }

    function cb(a) {
      var b;
      return function (d) {
        if (!b) {
          b = a;
          var c = a.substr(0, 1).toUpperCase() + a.substr(1);
          m([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (g, f) {
            var e = a;
            if (f) e = g + c;
            if (d.style[e] != k) return b = e
          })
        }
        return b
      }
    }
    var bb = cb("transform");

    function rb(a) {
      return {}.toString.call(a)
    }
    var H;

    function Fb() {
      if (!H) {
        H = {};
        m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
          H["[object " + a + "]"] = a.toLowerCase()
        })
      }
      return H
    }

    function m(a, d) {
      if (rb(a) == "[object Array]") {
        for (var b = 0; b < a.length; b++)
          if (d(a[b], b, a)) return c
      } else
        for (var e in a)
          if (d(a[e], e, a)) return c
    }

    function A(a) {
      return a == j ? String(a) : Fb()[rb(a)] || "object"
    }

    function pb(a) {
      for (var b in a) return c
    }

    function x(a) {
      try {
        return A(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
      } catch (b) {}
    }

    function w(a, b) {
      return {
        x: a,
        y: b
      }
    }

    function vb(b, a) {
      setTimeout(b, a || 0)
    }

    function F(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;
      m(d, function (c) {
        var b = c.exec(a);
        if (b) {
          var d = a.substr(0, b.index),
            e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
          a = d + e
        }
      });
      a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
      return a
    }

    function eb(b, a) {
      if (l < 9) b.style.filter = a
    }

    function Bb(g, a, i) {
      if (!J || J < 9) {
        var d = a.$ScaleX,
          e = a.$ScaleY,
          j = (a.$Rotate || 0) % 360,
          h = "";
        if (j || d != k || e != k) {
          if (d == k) d = 1;
          if (e == k) e = 1;
          var c = f.$CreateMatrix(j / 180 * b.PI, d || 1, e || 1),
            i = f.$GetMatrixOffset(c, a.$OriginalWidth, a.$OriginalHeight);
          f.$CssMarginTop(g, i.y);
          f.$CssMarginLeft(g, i.x);
          h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + c[0][0] + ", M12=" + c[0][1] + ", M21=" + c[1][0] + ", M22=" + c[1][1] + ", SizingMethod='auto expand')"
        }
        var m = g.style.filter,
          n = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
          l = F(m, [n], h);
        eb(g, l)
      }
    }
    f.$Device = Ib;
    f.$IsBrowserIE = p;
    f.$IsBrowserIeQuirks = N;
    f.$IsBrowserFireFox = Ab;
    f.$IsBrowserSafari = hb;
    f.$IsBrowserChrome = Db;
    f.$IsBrowserOpera = mb;
    f.$IsBrowserBadTransform = ab;
    f.$IsBrowserIe9Earlier = L;
    f.$BrowserVersion = function () {
      return l
    };
    f.$BrowserEngineVersion = function () {
      return q || l
    };
    f.$WebKitVersion = function () {
      t();
      return C
    };
    f.$Delay = vb;
    f.$Inherit = function (a, b) {
      b.call(a);
      return z({}, a)
    };

    function V(a) {
      a.constructor === V.caller && a.$Construct && a.$Construct.apply(a, V.caller.arguments)
    }
    f.$Construct = V;
    f.$GetElement = function (a) {
      if (f.$IsString(a)) a = e.getElementById(a);
      return a
    };

    function r(a) {
      return a || g.event
    }
    f.$GetEvent = r;
    f.$EvtSrc = function (a) {
      a = r(a);
      return a.target || a.srcElement || e
    };
    f.$EvtTarget = function (a) {
      a = r(a);
      return a.relatedTarget || a.toElement
    };
    f.$EvtWhich = function (a) {
      a = r(a);
      return a.which || ([0, 1, 3, 0, 2])[a.button] || a.charCode || a.keyCode
    };
    f.$MousePosition = function (a) {
      a = r(a);
      return {
        x: a.pageX || a.clientX || 0,
        y: a.pageY || a.clientY || 0
      }
    };
    f.$PageScroll = function () {
      var a = e.body;
      return {
        x: (g.pageXOffset || v.scrollLeft || a.scrollLeft || 0) - (v.clientLeft || a.clientLeft || 0),
        y: (g.pageYOffset || v.scrollTop || a.scrollTop || 0) - (v.clientTop || a.clientTop || 0)
      }
    };
    f.$WindowSize = function () {
      var a = e.body;
      return {
        x: a.clientWidth || v.clientWidth,
        y: a.clientHeight || v.clientHeight
      }
    };

    function B(c, d, a) {
      if (a !== k) c.style[d] = a == k ? "" : a;
      else {
        var b = c.currentStyle || c.style;
        a = b[d];
        if (a == "" && g.getComputedStyle) {
          b = c.ownerDocument.defaultView.getComputedStyle(c, j);
          b && (a = b.getPropertyValue(d) || b[d])
        }
        return a
      }
    }

    function X(b, c, a, d) {
      if (a !== k) {
        if (a == j) a = "";
        else d && (a += "px");
        B(b, c, a)
      } else return o(B(b, c))
    }

    function Jb(b, d, a) {
      return X(b, d, a, c)
    }

    function h(c, a) {
      var d = a ? X : B,
        b;
      if (a & 4) b = cb(c);
      return function (e, f) {
        return d(e, b ? b(e) : c, f, a & 2)
      }
    }

    function Cb(b) {
      if (p() && q < 9) {
        var a = /opacity=([^)]*)/.exec(b.style.filter || "");
        return a ? o(a[1]) / 100 : 1
      } else return o(b.style.opacity || "1")
    }

    function Eb(c, a, f) {
      if (p() && q < 9) {
        var h = c.style.filter || "",
          i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
          e = b.round(100 * a),
          d = "";
        if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
        var g = F(h, [i], d);
        eb(c, g)
      } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
    }
    var xb = {
      $Rotate: ["rotate"],
      $RotateX: ["rotateX"],
      $RotateY: ["rotateY"],
      $ScaleX: ["scaleX", 2],
      $ScaleY: ["scaleY", 2],
      $TranslateX: ["translateX", 1],
      $TranslateY: ["translateY", 1],
      $TranslateZ: ["translateZ", 1],
      $SkewX: ["skewX"],
      $SkewY: ["skewY"]
    };

    function Z(e, c) {
      if (p() && l && l < 10) {
        delete c.$RotateX;
        delete c.$RotateY
      }
      var d = bb(e);
      if (d) {
        var b = "";
        a.$Each(c, function (e, c) {
          var a = xb[c];
          if (a) {
            var d = a[1] || 0;
            b += (b ? " " : "") + a[0] + "(" + e + (["deg", "px", ""])[d] + ")"
          }
        });
        e.style[d] = b
      }
    }
    f.$SetStyleTransform = function (b, a) {
      if (ab()) vb(f.$CreateCallback(j, Z, b, a));
      else(L() ? Bb : Z)(b, a)
    };
    f.$CssTransformOrigin = h("transformOrigin", 4);
    f.$CssBackfaceVisibility = h("backfaceVisibility", 4);
    f.$CssTransformStyle = h("transformStyle", 4);
    f.$CssPerspective = h("perspective", 6);
    f.$CssPerspectiveOrigin = h("perspectiveOrigin", 4);
    f.$CssScale = function (a, c) {
      if (p() && q < 9 || q < 10 && N()) a.style.zoom = c == 1 ? "" : c;
      else {
        var b = bb(a);
        if (b) {
          var f = "scale(" + c + ")",
            e = a.style[b],
            g = new RegExp(/[\s]*scale\(.*?\)/g),
            d = F(e, [g], f);
          a.style[b] = d
        }
      }
    };
    var lb = 0,
      gb = 0;
    f.$WindowResizeFilter = function (b, a) {
      return L() ? function () {
        var g = c,
          d = N() ? b.document.body : b.document.documentElement;
        if (d) {
          var f = d.offsetWidth - lb,
            e = d.offsetHeight - gb;
          if (f || e) {
            lb += f;
            gb += e
          } else g = i
        }
        g && a()
      } : a
    };
    f.$MouseOverOutFilter = function (b, a) {
      return function (c) {
        c = r(c);
        var e = c.type,
          d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
        (!d || d !== a && !f.$IsChild(a, d)) && b(c)
      }
    };
    f.$AddEvent = function (a, c, d, b) {
      a = f.$GetElement(a);
      if (a.addEventListener) {
        c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
        a.addEventListener(c, d, b)
      } else if (a.attachEvent) {
        a.attachEvent("on" + c, d);
        b && a.setCapture && a.setCapture()
      }
    };
    f.$RemoveEvent = function (a, c, d, b) {
      a = f.$GetElement(a);
      if (a.removeEventListener) {
        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
        a.removeEventListener(c, d, b)
      } else if (a.detachEvent) {
        a.detachEvent("on" + c, d);
        b && a.releaseCapture && a.releaseCapture()
      }
    };
    f.$FireEvent = function (c, b) {
      var a;
      if (e.createEvent) {
        a = e.createEvent("HTMLEvents");
        a.initEvent(b, i, i);
        c.dispatchEvent(a)
      } else {
        var d = "on" + b;
        a = e.createEventObject();
        c.fireEvent(d, a)
      }
    };
    f.$CancelEvent = function (a) {
      a = r(a);
      a.preventDefault && a.preventDefault();
      a.cancel = c;
      a.returnValue = i
    };
    f.$StopEvent = function (a) {
      a = r(a);
      a.stopPropagation && a.stopPropagation();
      a.cancelBubble = c
    };
    f.$CreateCallback = function (d, c) {
      var a = [].slice.call(arguments, 2),
        b = function () {
          var b = a.concat([].slice.call(arguments, 0));
          return c.apply(d, b)
        };
      return b
    };
    f.$InnerText = function (a, b) {
      if (b == k) return a.textContent || a.innerText;
      var c = e.createTextNode(b);
      f.$Empty(a);
      a.appendChild(c)
    };
    f.$InnerHtml = function (a, b) {
      if (b == k) return a.innerHTML;
      a.innerHTML = b
    };
    f.$GetClientRect = function (b) {
      var a = b.getBoundingClientRect();
      return {
        x: a.left,
        y: a.top,
        w: a.right - a.left,
        h: a.bottom - a.top
      }
    };
    f.$ClearInnerHtml = function (a) {
      a.innerHTML = ""
    };
    f.$EncodeHtml = function (b) {
      var a = f.$CreateDiv();
      f.$InnerText(a, b);
      return f.$InnerHtml(a)
    };
    f.$DecodeHtml = function (b) {
      var a = f.$CreateDiv();
      f.$InnerHtml(a, b);
      return f.$InnerText(a)
    };
    f.$SelectElement = function (c) {
      var b;
      if (g.getSelection) b = g.getSelection();
      var a = j;
      if (e.createRange) {
        a = e.createRange();
        a.selectNode(c)
      } else {
        a = e.body.createTextRange();
        a.moveToElementText(c);
        a.select()
      }
      b && b.addRange(a)
    };
    f.$DeselectElements = function () {
      if (e.selection) e.selection.empty();
      else g.getSelection && g.getSelection().removeAllRanges()
    };
    f.$Children = function (d, c) {
      for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
      return b
    };

    function qb(a, c, e, b) {
      b = b || "u";
      for (a = a ? a.firstChild : j; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (R(a, b) == c) return a;
          if (!e) {
            var d = qb(a, c, e, b);
            if (d) return d
          }
        }
    }
    f.$FindChild = qb;

    function P(a, d, f, b) {
      b = b || "u";
      var c = [];
      for (a = a ? a.firstChild : j; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          R(a, b) == d && c.push(a);
          if (!f) {
            var e = P(a, d, f, b);
            if (e.length) c = c.concat(e)
          }
        }
      return c
    }

    function kb(a, c, d) {
      for (a = a ? a.firstChild : j; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (a.tagName == c) return a;
          if (!d) {
            var b = kb(a, c, d);
            if (b) return b
          }
        }
    }
    f.$FindChildByTag = kb;

    function db(a, c, e) {
      var b = [];
      for (a = a ? a.firstChild : j; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          (!c || a.tagName == c) && b.push(a);
          if (!e) {
            var d = db(a, c, e);
            if (d.length) b = b.concat(d)
          }
        }
      return b
    }
    f.$FindChildrenByTag = db;
    f.$GetElementsByTag = function (b, a) {
      return b.getElementsByTagName(a)
    };

    function z() {
      var e = arguments,
        d, c, b, a, g = 1 & e[0],
        f = 1 + g;
      d = e[f - 1] || {};
      for (; f < e.length; f++)
        if (c = e[f])
          for (b in c) {
            a = c[b];
            if (a !== k) {
              a = c[b];
              var h = d[b];
              d[b] = g && (x(h) || x(a)) ? z(g, {}, h, a) : a
            }
          }
        return d
    }
    f.$Extend = z;

    function W(f, g) {
      var d = {},
        c, a, b;
      for (c in f) {
        a = f[c];
        b = g[c];
        if (a !== b) {
          var e;
          if (x(a) && x(b)) {
            a = W(a, b);
            e = !pb(a)
          }!e && (d[c] = a)
        }
      }
      return d
    }
    f.$Unextend = W;
    f.$IsFunction = function (a) {
      return A(a) == "function"
    };
    f.$IsArray = function (a) {
      return A(a) == "array"
    };
    f.$IsString = function (a) {
      return A(a) == "string"
    };
    f.$IsNumeric = function (a) {
      return !isNaN(o(a)) && isFinite(a)
    };
    f.$Type = A;
    f.$Each = m;
    f.$IsNotEmpty = pb;
    f.$IsPlainObject = x;

    function O(a) {
      return e.createElement(a)
    }
    f.$CreateElement = O;
    f.$CreateDiv = function () {
      return O("DIV")
    };
    f.$CreateSpan = function () {
      return O("SPAN")
    };
    f.$EmptyFunction = function () {};

    function T(b, c, a) {
      if (a == k) return b.getAttribute(c);
      b.setAttribute(c, a)
    }

    function R(a, b) {
      return T(a, b) || T(a, "data-" + b)
    }
    f.$Attribute = T;
    f.$AttributeEx = R;

    function u(b, a) {
      if (a == k) return b.className;
      b.className = a
    }
    f.$ClassName = u;

    function ub(b) {
      var a = {};
      m(b, function (b) {
        a[b] = b
      });
      return a
    }

    function Hb(b) {
      var a = [];
      m(b, function (b) {
        a.push(b)
      });
      return a
    }

    function wb(b, a) {
      return b.match(a || zb)
    }

    function M(b, a) {
      return ub(wb(b || "", a))
    }
    f.$ToHash = ub;
    f.$FromHash = Hb;
    f.$Split = wb;

    function Y(b, c) {
      var a = "";
      m(c, function (c) {
        a && (a += b);
        a += c
      });
      return a
    }

    function E(a, c, b) {
      u(a, Y(" ", z(W(M(u(a)), M(c)), M(b))))
    }
    f.$Join = Y;
    f.$AddClass = function (b, a) {
      E(b, j, a)
    };
    f.$RemoveClass = E;
    f.$ReplaceClass = E;
    f.$ParentNode = function (a) {
      return a.parentNode
    };
    f.$HideElement = function (a) {
      f.$CssDisplay(a, "none")
    };
    f.$EnableElement = function (a, b) {
      if (b) f.$Attribute(a, "disabled", c);
      else f.$RemoveAttribute(a, "disabled")
    };
    f.$HideElements = function (b) {
      for (var a = 0; a < b.length; a++) f.$HideElement(b[a])
    };
    f.$ShowElement = function (a, b) {
      f.$CssDisplay(a, b ? "none" : "")
    };
    f.$ShowElements = function (b, c) {
      for (var a = 0; a < b.length; a++) f.$ShowElement(b[a], c)
    };
    f.$RemoveAttribute = function (b, a) {
      b.removeAttribute(a)
    };
    f.$CanClearClip = function () {
      return p() && l < 10
    };
    f.$SetStyleClip = function (d, c) {
      if (c) d.style.clip = "rect(" + b.round(c.$Top) + "% " + b.round(c.$Right) + "% " + b.round(c.$Bottom) + "% " + b.round(c.$Left) + "%)";
      else {
        var g = d.style.cssText,
          f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
          e = F(g, f, "");
        a.$CssCssText(d, e)
      }
    };
    f.$GetNow = function () {
      return +new Date
    };
    f.$AppendChild = function (b, a) {
      b.appendChild(a)
    };
    f.$AppendChildren = function (b, a) {
      m(a, function (a) {
        f.$AppendChild(b, a)
      })
    };
    f.$InsertBefore = function (b, a, c) {
      (c || a.parentNode).insertBefore(b, a)
    };
    f.$InsertAfter = function (b, a, c) {
      f.$InsertBefore(b, a.nextSibling, c || a.parentNode)
    };
    f.$InsertAdjacentHtml = function (b, a, c) {
      b.insertAdjacentHTML(a, c)
    };
    f.$RemoveElement = function (a, b) {
      (b || a.parentNode).removeChild(a)
    };
    f.$RemoveElements = function (a, b) {
      m(a, function (a) {
        f.$RemoveElement(a, b)
      })
    };
    f.$Empty = function (a) {
      f.$RemoveElements(f.$Children(a, c), a)
    };
    f.$CenterElement = function (a, b) {
      var c = f.$ParentNode(a);
      b & 1 && f.$CssLeft(a, (f.$CssWidth(c) - f.$CssWidth(a)) / 2);
      b & 2 && f.$CssTop(a, (f.$CssHeight(c) - f.$CssHeight(a)) / 2)
    };
    f.$ParseInt = function (b, a) {
      return parseInt(b, a || 10)
    };
    var o = parseFloat;
    f.$ParseFloat = o;
    f.$IsChild = function (b, a) {
      var c = e.body;
      while (a && b !== a && c !== a) try {
        a = a.parentNode
      } catch (d) {
        return i
      }
      return b === a
    };

    function U(d, c, b) {
      var a = d.cloneNode(!c);
      !b && f.$RemoveAttribute(a, "id");
      return a
    }
    f.$CloneNode = U;
    f.$LoadImage = function (e, g) {
      var a = new Image;

      function b(e, c) {
        f.$RemoveEvent(a, "load", b);
        f.$RemoveEvent(a, "abort", d);
        f.$RemoveEvent(a, "error", d);
        g && g(a, c)
      }

      function d(a) {
        b(a, c)
      }
      if (mb() && l < 11.6 || !e) b(!e);
      else {
        f.$AddEvent(a, "load", b);
        f.$AddEvent(a, "abort", d);
        f.$AddEvent(a, "error", d);
        a.src = e
      }
    };
    f.$LoadImages = function (d, a, e) {
      var c = d.length + 1;

      function b(b) {
        c--;
        if (a && b && b.src == a.src) a = b;
        !c && e && e(a)
      }
      m(d, function (a) {
        f.$LoadImage(a.src, b)
      });
      b()
    };
    f.$BuildElement = function (b, g, i, h) {
      if (h) b = U(b);
      var c = P(b, g);
      if (!c.length) c = a.$GetElementsByTag(b, g);
      for (var f = c.length - 1; f > -1; f--) {
        var d = c[f],
          e = U(i);
        u(e, u(d));
        a.$CssCssText(e, d.style.cssText);
        a.$InsertBefore(e, d);
        a.$RemoveElement(d)
      }
      return b
    };

    function Gb(b) {
      var l = this,
        p = "",
        r = ["av", "pv", "ds", "dn"],
        g = [],
        q, j = 0,
        h = 0,
        d = 0;

      function i() {
        E(b, q, g[d || j || h & 2 || h]);
        a.$Css(b, "pointer-events", d ? "none" : "")
      }

      function c() {
        j = 0;
        i();
        f.$RemoveEvent(e, "mouseup", c);
        f.$RemoveEvent(e, "touchend", c);
        f.$RemoveEvent(e, "touchcancel", c)
      }

      function o(a) {
        if (d) f.$CancelEvent(a);
        else {
          j = 4;
          i();
          f.$AddEvent(e, "mouseup", c);
          f.$AddEvent(e, "touchend", c);
          f.$AddEvent(e, "touchcancel", c)
        }
      }
      l.$Selected = function (a) {
        if (a === k) return h;
        h = a & 2 || a & 1;
        i()
      };
      l.$Enable = function (a) {
        if (a === k) return !d;
        d = a ? 0 : 3;
        i()
      };
      l.$Elmt = b = f.$GetElement(b);
      var n = a.$Split(u(b));
      if (n) p = n.shift();
      m(r, function (a) {
        g.push(p + a)
      });
      q = Y(" ", g);
      g.unshift("");
      f.$AddEvent(b, "mousedown", o);
      f.$AddEvent(b, "touchstart", o)
    }
    f.$Buttonize = function (a) {
      return new Gb(a)
    };
    f.$Css = B;
    f.$CssN = X;
    f.$CssP = Jb;
    f.$CssOverflow = h("overflow");
    f.$CssTop = h("top", 2);
    f.$CssLeft = h("left", 2);
    f.$CssWidth = h("width", 2);
    f.$CssHeight = h("height", 2);
    f.$CssMarginLeft = h("marginLeft", 2);
    f.$CssMarginTop = h("marginTop", 2);
    f.$CssPosition = h("position");
    f.$CssDisplay = h("display");
    f.$CssZIndex = h("zIndex", 1);
    f.$CssFloat = function (b, a) {
      return B(b, p() ? "styleFloat" : "cssFloat", a)
    };
    f.$CssOpacity = function (b, a, c) {
      if (a != k) Eb(b, a, c);
      else return Cb(b)
    };
    f.$CssCssText = function (a, b) {
      if (b != k) a.style.cssText = b;
      else return a.style.cssText
    };
    var Q = {
        $Opacity: f.$CssOpacity,
        $Top: f.$CssTop,
        $Left: f.$CssLeft,
        $Width: f.$CssWidth,
        $Height: f.$CssHeight,
        $Position: f.$CssPosition,
        $Display: f.$CssDisplay,
        $ZIndex: f.$CssZIndex
      },
      K;

    function G() {
      if (!K) K = z({
        $MarginTop: f.$CssMarginTop,
        $MarginLeft: f.$CssMarginLeft,
        $Clip: f.$SetStyleClip,
        $Transform: f.$SetStyleTransform
      }, Q);
      return K
    }

    function ob() {
      var a = {};
      a.$Transform = a.$Transform;
      a.$Transform = a.$Rotate;
      a.$Transform = a.$RotateX;
      a.$Transform = a.$RotateY;
      a.$Transform = a.$SkewX;
      a.$Transform = a.$SkewY;
      a.$Transform = a.$TranslateX;
      a.$Transform = a.$TranslateY;
      a.$Transform = a.$TranslateZ;
      return G()
    }
    f.$StyleSetter = G;
    f.$StyleSetterEx = ob;
    f.$GetStyles = function (c, b) {
      G();
      var a = {};
      m(b, function (d, b) {
        if (Q[b]) a[b] = Q[b](c)
      });
      return a
    };
    f.$SetStyles = function (c, b) {
      var a = G();
      m(b, function (d, b) {
        a[b] && a[b](c, d)
      })
    };
    f.$SetStylesEx = function (b, a) {
      ob();
      f.$SetStyles(b, a)
    };
    var D = new function () {
      var a = this;

      function b(d, g) {
        for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
          for (var k = f[c] = [], b = 0; b < h; b++) {
            for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
            k[b] = e
          }
        return f
      }
      a.$ScaleX = function (b, c) {
        return a.$ScaleXY(b, c, 0)
      };
      a.$ScaleY = function (b, c) {
        return a.$ScaleXY(b, 0, c)
      };
      a.$ScaleXY = function (a, c, d) {
        return b(a, [
          [c, 0],
          [0, d]
        ])
      };
      a.$TransformPoint = function (d, c) {
        var a = b(d, [
          [c.x],
          [c.y]
        ]);
        return w(a[0][0], a[1][0])
      }
    };
    f.$CreateMatrix = function (d, a, c) {
      var e = b.cos(d),
        f = b.sin(d);
      return [
        [e * a, -f * c],
        [f * a, e * c]
      ]
    };
    f.$GetMatrixOffset = function (d, c, a) {
      var e = D.$TransformPoint(d, w(-c / 2, -a / 2)),
        f = D.$TransformPoint(d, w(c / 2, -a / 2)),
        g = D.$TransformPoint(d, w(c / 2, a / 2)),
        h = D.$TransformPoint(d, w(-c / 2, a / 2));
      return w(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
    };
    var yb = {
      $Zoom: 1,
      $ScaleX: 1,
      $ScaleY: 1,
      $Rotate: 0,
      $RotateX: 0,
      $RotateY: 0,
      $TranslateX: 0,
      $TranslateY: 0,
      $TranslateZ: 0,
      $SkewX: 0,
      $SkewY: 0
    };
    f.$FormatEasings = function (b) {
      var c = b || {};
      if (b)
        if (a.$IsFunction(b)) c = {
          $Default: c
        };
        else if (a.$IsFunction(b.$Clip)) c.$Clip = {
        $Default: b.$Clip
      };
      return c
    };

    function tb(c, a) {
      var b = {};
      m(c, function (c, d) {
        var e = c;
        if (a[d] != k)
          if (f.$IsNumeric(c)) e = c + a[d];
          else e = tb(c, a[d]);
        b[d] = e
      });
      return b
    }
    f.$AddDif = tb;
    f.$Cast = function (h, i, w, n, y, z, o) {
      var c = i;
      if (h) {
        c = {};
        for (var g in i) {
          var A = z[g] || 1,
            v = y[g] || [0, 1],
            e = (w - v[0]) / v[1];
          e = b.min(b.max(e, 0), 1);
          e = e * A;
          var u = b.floor(e);
          if (e != u) e -= u;
          var l = n.$Default || d.$EaseSwing,
            m, B = h[g],
            q = i[g];
          if (a.$IsNumeric(q)) {
            l = n[g] || l;
            var x = l(e);
            m = B + q * x
          } else {
            m = a.$Extend({
              $Offset: {}
            }, h[g]);
            a.$Each(q.$Offset || q, function (d, a) {
              if (n.$Clip) l = n.$Clip[a] || n.$Clip.$Default || l;
              var c = l(e),
                b = d * c;
              m.$Offset[a] = b;
              m[a] += b
            })
          }
          c[g] = m
        }
        var t, f = {
          $OriginalWidth: o.$OriginalWidth,
          $OriginalHeight: o.$OriginalHeight
        };
        a.$Each(yb, function (d, a) {
          t = t || i[a];
          var b = c[a];
          if (b != k) {
            if (b != d) f[a] = b;
            delete c[a]
          } else if (h[a] != k && h[a] != d) f[a] = h[a]
        });
        if (i.$Zoom && f.$Zoom) {
          f.$ScaleX = f.$Zoom;
          f.$ScaleY = f.$Zoom
        }
        c.$Transform = f
      }
      if (i.$Clip && o.$Move) {
        var p = c.$Clip.$Offset,
          s = (p.$Top || 0) + (p.$Bottom || 0),
          r = (p.$Left || 0) + (p.$Right || 0);
        c.$Left = (c.$Left || 0) + r;
        c.$Top = (c.$Top || 0) + s;
        c.$Clip.$Left -= r;
        c.$Clip.$Right -= r;
        c.$Clip.$Top -= s;
        c.$Clip.$Bottom -= s
      }
      if (c.$Clip && a.$CanClearClip() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == o.$OriginalWidth && c.$Clip.$Bottom == o.$OriginalHeight) c.$Clip = j;
      return c
    }
  };

  function m() {
    var b = this,
      d = [],
      c = [];

    function i(a, b) {
      d.push({
        $EventName: a,
        $Handler: b
      })
    }

    function h(b, c) {
      a.$Each(d, function (a, e) {
        a.$EventName == b && a.$Handler === c && d.splice(e, 1)
      })
    }

    function f() {
      d = []
    }

    function e() {
      a.$Each(c, function (b) {
        a.$RemoveEvent(b.$Obj, b.$EventName, b.$Handler)
      });
      c = []
    }
    b.$Listen = function (e, b, d, f) {
      a.$AddEvent(e, b, d, f);
      c.push({
        $Obj: e,
        $EventName: b,
        $Handler: d
      })
    };
    b.$Unlisten = function (e, b, d) {
      a.$Each(c, function (f, g) {
        if (f.$Obj === e && f.$EventName == b && f.$Handler === d) {
          a.$RemoveEvent(e, b, d);
          c.splice(g, 1)
        }
      })
    };
    b.$UnlistenAll = e;
    b.$On = b.addEventListener = i;
    b.$Off = b.removeEventListener = h;
    b.$TriggerEvent = function (b) {
      var c = [].slice.call(arguments, 1);
      a.$Each(d, function (a) {
        a.$EventName == b && a.$Handler.apply(g, c)
      })
    };
    b.$Destroy = function () {
      e();
      f();
      for (var a in b) delete b[a]
    }
  }
  var l = g.$JssorAnimator$ = function (y, C, k, P, N, J) {
    y = y || 0;
    var d = this,
      q, M, n, o, v, z = 0,
      H, I, G, B, x = 0,
      h = 0,
      m = 0,
      D, l, s, f, e, p, w = [],
      A;

    function O(a) {
      f += a;
      e += a;
      l += a;
      s += a;
      h += a;
      m += a;
      x += a
    }

    function u(n) {
      var g = n;
      if (p && (g >= e || g <= f)) g = ((g - f) % p + p) % p + f;
      if (!D || v || h != g) {
        var i = b.min(g, e);
        i = b.max(i, f);
        if (!D || v || i != m) {
          if (J) {
            var j = (i - l) / (C || 1);
            if (k.$Reverse) j = 1 - j;
            var o = a.$Cast(N, J, j, H, G, I, k);
            a.$Each(o, function (b, a) {
              A[a] && A[a](P, b)
            })
          }
          d.$OnInnerOffsetChange(m - l, i - l);
          m = i;
          a.$Each(w, function (b, c) {
            var a = n < h ? w[w.length - c - 1] : b;
            a.$GoToPosition(m - x)
          });
          var r = h,
            q = m;
          h = g;
          D = c;
          d.$OnPositionChange(r, q)
        }
      }
    }

    function E(a, c, d) {
      c && a.$Shift(e);
      if (!d) {
        f = b.min(f, a.$GetPosition_OuterBegin() + x);
        e = b.max(e, a.$GetPosition_OuterEnd() + x)
      }
      w.push(a)
    }
    var r = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
    if (a.$IsBrowserSafari() && a.$BrowserVersion() < 7) r = j;
    r = r || function (b) {
      a.$Delay(b, k.$Interval)
    };

    function K() {
      if (q) {
        var d = a.$GetNow(),
          e = b.min(d - z, k.$IntervalMax),
          c = h + e * o;
        z = d;
        if (c * o >= n * o) c = n;
        u(c);
        if (!v && c * o >= n * o) L(B);
        else r(K)
      }
    }

    function t(g, i, j) {
      if (!q) {
        q = c;
        v = j;
        B = i;
        g = b.max(g, f);
        g = b.min(g, e);
        n = g;
        o = n < h ? -1 : 1;
        d.$OnStart();
        z = a.$GetNow();
        r(K)
      }
    }

    function L(a) {
      if (q) {
        v = q = B = i;
        d.$OnStop();
        a && a()
      }
    }
    d.$Play = function (a, b, c) {
      t(a ? h + a : e, b, c)
    };
    d.$PlayToPosition = t;
    d.$PlayToBegin = function (a, b) {
      t(f, a, b)
    };
    d.$PlayToEnd = function (a, b) {
      t(e, a, b)
    };
    d.$Stop = L;
    d.$Continue = function (a) {
      t(a)
    };
    d.$GetPosition = function () {
      return h
    };
    d.$GetPlayToPosition = function () {
      return n
    };
    d.$GetPosition_Display = function () {
      return m
    };
    d.$GoToPosition = u;
    d.$GoToBegin = function () {
      u(f, c)
    };
    d.$GoToEnd = function () {
      u(e, c)
    };
    d.$Move = function (a) {
      u(h + a)
    };
    d.$CombineMode = function () {
      return M
    };
    d.$GetDuration = function () {
      return C
    };
    d.$IsPlaying = function () {
      return q
    };
    d.$IsOnTheWay = function () {
      return h > l && h <= s
    };
    d.$SetLoopLength = function (a) {
      p = a
    };
    d.$Shift = O;
    d.$Join = E;
    d.$Combine = function (a, b) {
      E(a, 0, b)
    };
    d.$Chain = function (a) {
      E(a, 1)
    };
    d.$Expand = function (a) {
      e += a
    };
    d.$GetPosition_InnerBegin = function () {
      return l
    };
    d.$GetPosition_InnerEnd = function () {
      return s
    };
    d.$GetPosition_OuterBegin = function () {
      return f
    };
    d.$GetPosition_OuterEnd = function () {
      return e
    };
    d.$OnPositionChange = d.$OnStart = d.$OnStop = d.$OnInnerOffsetChange = a.$EmptyFunction;
    d.$Version = a.$GetNow();
    k = a.$Extend({
      $Interval: 16,
      $IntervalMax: 50
    }, k);
    p = k.$LoopLength;
    A = a.$Extend({}, a.$StyleSetter(), k.$Setter);
    f = l = y;
    e = s = y + C;
    I = k.$Round || {};
    G = k.$During || {};
    H = a.$FormatEasings(k.$Easing)
  };
  var o = g.$JssorSlideshowFormations$ = new function () {
    var h = this,
      d = 0,
      a = 1,
      f = 2,
      e = 3,
      s = 1,
      r = 2,
      t = 4,
      q = 8,
      w = 256,
      x = 512,
      v = 1024,
      u = 2048,
      j = u + s,
      i = u + r,
      o = x + s,
      m = x + r,
      n = w + t,
      k = w + q,
      l = v + t,
      p = v + q;

    function y(a) {
      return (a & r) == r
    }

    function z(a) {
      return (a & t) == t
    }

    function g(b, a, c) {
      c.push(a);
      b[a] = b[a] || [];
      b[a].push(c)
    }
    h.$FormationStraight = function (f) {
      for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.$Count, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
        for (a = 0; a < d; a++) {
          switch (s) {
          case j:
            c = h - (a * e + (q - b));
            break;
          case l:
            c = h - (b * d + (p - a));
            break;
          case o:
            c = h - (a * e + b);
          case n:
            c = h - (b * d + a);
            break;
          case i:
            c = a * e + b;
            break;
          case k:
            c = b * d + (p - a);
            break;
          case m:
            c = a * e + (q - b);
            break;
          default:
            c = b * d + a
          }
          g(r, c, [b, a])
        }
      return r
    };
    h.$FormationSwirl = function (q) {
      var x = q.$Cols,
        y = q.$Rows,
        B = q.$Assembly,
        w = q.$Count,
        A = [],
        z = [],
        u = 0,
        b = 0,
        h = 0,
        r = x - 1,
        s = y - 1,
        t, p, v = 0;
      switch (B) {
      case j:
        b = r;
        h = 0;
        p = [f, a, e, d];
        break;
      case l:
        b = 0;
        h = s;
        p = [d, e, a, f];
        break;
      case o:
        b = r;
        h = s;
        p = [e, a, f, d];
        break;
      case n:
        b = r;
        h = s;
        p = [a, e, d, f];
        break;
      case i:
        b = 0;
        h = 0;
        p = [f, d, e, a];
        break;
      case k:
        b = r;
        h = 0;
        p = [a, f, d, e];
        break;
      case m:
        b = 0;
        h = s;
        p = [e, d, f, a];
        break;
      default:
        b = 0;
        h = 0;
        p = [d, f, a, e]
      }
      u = 0;
      while (u < w) {
        t = h + "," + b;
        if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
          z[t] = c;
          g(A, u++, [h, b])
        } else switch (p[v++ % p.length]) {
        case d:
          b--;
          break;
        case f:
          h--;
          break;
        case a:
          b++;
          break;
        case e:
          h++
        }
        switch (p[v % p.length]) {
        case d:
          b++;
          break;
        case f:
          h++;
          break;
        case a:
          b--;
          break;
        case e:
          h--
        }
      }
      return A
    };
    h.$FormationZigZag = function (p) {
      var w = p.$Cols,
        x = p.$Rows,
        z = p.$Assembly,
        v = p.$Count,
        t = [],
        u = 0,
        b = 0,
        c = 0,
        q = w - 1,
        r = x - 1,
        y, h, s = 0;
      switch (z) {
      case j:
        b = q;
        c = 0;
        h = [f, a, e, a];
        break;
      case l:
        b = 0;
        c = r;
        h = [d, e, a, e];
        break;
      case o:
        b = q;
        c = r;
        h = [e, a, f, a];
        break;
      case n:
        b = q;
        c = r;
        h = [a, e, d, e];
        break;
      case i:
        b = 0;
        c = 0;
        h = [f, d, e, d];
        break;
      case k:
        b = q;
        c = 0;
        h = [a, f, d, f];
        break;
      case m:
        b = 0;
        c = r;
        h = [e, d, f, d];
        break;
      default:
        b = 0;
        c = 0;
        h = [d, f, a, f]
      }
      u = 0;
      while (u < v) {
        y = c + "," + b;
        if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
          g(t, u++, [c, b]);
          switch (h[s % h.length]) {
          case d:
            b++;
            break;
          case f:
            c++;
            break;
          case a:
            b--;
            break;
          case e:
            c--
          }
        } else {
          switch (h[s++ % h.length]) {
          case d:
            b--;
            break;
          case f:
            c--;
            break;
          case a:
            b++;
            break;
          case e:
            c++
          }
          switch (h[s++ % h.length]) {
          case d:
            b++;
            break;
          case f:
            c++;
            break;
          case a:
            b--;
            break;
          case e:
            c--
          }
        }
      }
      return t
    };
    h.$FormationStraightStairs = function (q) {
      var u = q.$Cols,
        v = q.$Rows,
        e = q.$Assembly,
        t = q.$Count,
        r = [],
        s = 0,
        c = 0,
        d = 0,
        f = u - 1,
        h = v - 1,
        x = t - 1;
      switch (e) {
      case j:
      case m:
      case o:
      case i:
        var a = 0,
          b = 0;
        break;
      case k:
      case l:
      case n:
      case p:
        var a = f,
          b = 0;
        break;
      default:
        e = p;
        var a = f,
          b = 0
      }
      c = a;
      d = b;
      while (s < t) {
        if (z(e) || y(e)) g(r, x - s++, [d, c]);
        else g(r, s++, [d, c]);
        switch (e) {
        case j:
        case m:
          c--;
          d++;
          break;
        case o:
        case i:
          c++;
          d--;
          break;
        case k:
        case l:
          c--;
          d--;
          break;
        case p:
        case n:
        default:
          c++;
          d++
        }
        if (c < 0 || d < 0 || c > f || d > h) {
          switch (e) {
          case j:
          case m:
            a++;
            break;
          case k:
          case l:
          case o:
          case i:
            b++;
            break;
          case p:
          case n:
          default:
            a--
          }
          if (a < 0 || b < 0 || a > f || b > h) {
            switch (e) {
            case j:
            case m:
              a = f;
              b++;
              break;
            case o:
            case i:
              b = h;
              a++;
              break;
            case k:
            case l:
              b = h;
              a--;
              break;
            case p:
            case n:
            default:
              a = 0;
              b++
            }
            if (b > h) b = h;
            else if (b < 0) b = 0;
            else if (a > f) a = f;
            else if (a < 0) a = 0
          }
          d = b;
          c = a
        }
      }
      return r
    };
    h.$FormationSquare = function (i) {
      var a = i.$Cols || 1,
        c = i.$Rows || 1,
        j = [],
        d, e, f, h, k;
      f = a < c ? (c - a) / 2 : 0;
      h = a > c ? (a - c) / 2 : 0;
      k = b.round(b.max(a / 2, c / 2)) + 1;
      for (d = 0; d < a; d++)
        for (e = 0; e < c; e++) g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
      return j
    };
    h.$FormationRectangle = function (f) {
      var d = f.$Cols || 1,
        e = f.$Rows || 1,
        h = [],
        a, c, i;
      i = b.round(b.min(d / 2, e / 2)) + 1;
      for (a = 0; a < d; a++)
        for (c = 0; c < e; c++) g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
      return h
    };
    h.$FormationRandom = function (d) {
      for (var e = [], a, c = 0; c < d.$Rows; c++)
        for (a = 0; a < d.$Cols; a++) g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
      return e
    };
    h.$FormationCircle = function (d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
        for (a = 0; a < f; a++) g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
      return h
    };
    h.$FormationCross = function (d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
        for (a = 0; a < f; a++) g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
      return h
    };
    h.$FormationRectangleCross = function (f) {
      for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++)
        for (a = 0; a < i; a++) g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
      return j
    }
  };
  g.$JssorSlideshowRunner$ = function (n, s, q, t, y) {
    var f = this,
      u, g, e, x = 0,
      w = t.$TransitionsOrder,
      r, h = 8;

    function k(g, f) {
      var e = {
        $Interval: f,
        $Duration: 1,
        $Delay: 0,
        $Cols: 1,
        $Rows: 1,
        $Opacity: 0,
        $Zoom: 0,
        $Clip: 0,
        $Move: i,
        $SlideOut: i,
        $Reverse: i,
        $Formation: o.$FormationRandom,
        $Assembly: 1032,
        $ChessMode: {
          $Column: 0,
          $Row: 0
        },
        $Easing: d.$EaseSwing,
        $Round: {},
        $Blocks: [],
        $During: {}
      };
      a.$Extend(e, g);
      e.$Count = e.$Cols * e.$Rows;
      e.$Easing = a.$FormatEasings(e.$Easing);
      e.$FramesCount = b.ceil(e.$Duration / e.$Interval);
      e.$GetBlocks = function (b, a) {
        b /= e.$Cols;
        a /= e.$Rows;
        var f = b + "x" + a;
        if (!e.$Blocks[f]) {
          e.$Blocks[f] = {
            $Width: b,
            $Height: a
          };
          for (var c = 0; c < e.$Cols; c++)
            for (var d = 0; d < e.$Rows; d++) e.$Blocks[f][d + "," + c] = {
              $Top: d * a,
              $Right: c * b + b,
              $Bottom: d * a + a,
              $Left: c * b
            }
        }
        return e.$Blocks[f]
      };
      if (e.$Brother) {
        e.$Brother = k(e.$Brother, f);
        e.$SlideOut = c
      }
      return e
    }

    function p(A, h, d, v, n, l) {
      var y = this,
        t, u = {},
        j = {},
        m = [],
        f, e, r, p = d.$ChessMode.$Column || 0,
        q = d.$ChessMode.$Row || 0,
        g = d.$GetBlocks(n, l),
        o = B(d),
        C = o.length - 1,
        s = d.$Duration + d.$Delay * C,
        w = v + s,
        k = d.$SlideOut,
        x;
      w += 50;

      function B(a) {
        var b = a.$Formation(a);
        return a.$Reverse ? b.reverse() : b
      }
      y.$EndTime = w;
      y.$ShowFrame = function (c) {
        c -= v;
        var e = c < s;
        if (e || x) {
          x = e;
          if (!k) c = s - c;
          var f = b.ceil(c / d.$Interval);
          a.$Each(j, function (c, e) {
            var d = b.max(f, c.$Min);
            d = b.min(d, c.length - 1);
            if (c.$LastFrameIndex != d) {
              if (!c.$LastFrameIndex && !k) a.$ShowElement(m[e]);
              else d == c.$Max && k && a.$HideElement(m[e]);
              c.$LastFrameIndex = d;
              a.$SetStylesEx(m[e], c[d])
            }
          })
        }
      };
      h = a.$CloneNode(h);
      if (a.$IsBrowserIe9Earlier()) {
        var D = !h["no-image"],
          z = a.$FindChildrenByTag(h);
        a.$Each(z, function (b) {
          (D || b["jssor-slider"]) && a.$CssOpacity(b, a.$CssOpacity(b), c)
        })
      }
      a.$Each(o, function (h, m) {
        a.$Each(h, function (G) {
          var K = G[0],
            J = G[1],
            v = K + "," + J,
            o = i,
            s = i,
            x = i;
          if (p && J % 2) {
            if (p & 3) o = !o;
            if (p & 12) s = !s;
            if (p & 16) x = !x
          }
          if (q && K % 2) {
            if (q & 3) o = !o;
            if (q & 12) s = !s;
            if (q & 16) x = !x
          }
          d.$Top = d.$Top || d.$Clip & 4;
          d.$Bottom = d.$Bottom || d.$Clip & 8;
          d.$Left = d.$Left || d.$Clip & 1;
          d.$Right = d.$Right || d.$Clip & 2;
          var C = s ? d.$Bottom : d.$Top,
            z = s ? d.$Top : d.$Bottom,
            B = o ? d.$Right : d.$Left,
            A = o ? d.$Left : d.$Right;
          d.$Clip = C || z || B || A;
          r = {};
          e = {
            $Top: 0,
            $Left: 0,
            $Opacity: 1,
            $Width: n,
            $Height: l
          };
          f = a.$Extend({}, e);
          t = a.$Extend({}, g[v]);
          if (d.$Opacity) e.$Opacity = 2 - d.$Opacity;
          if (d.$ZIndex) {
            e.$ZIndex = d.$ZIndex;
            f.$ZIndex = 0
          }
          var I = d.$Cols * d.$Rows > 1 || d.$Clip;
          if (d.$Zoom || d.$Rotate) {
            var H = c;
            if (a.$IsBrowserIe9Earlier())
              if (d.$Cols * d.$Rows > 1) H = i;
              else I = i;
            if (H) {
              e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
              f.$Zoom = 1;
              if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera()) e.$Zoom = b.min(e.$Zoom, 2);
              var N = d.$Rotate || 0;
              e.$Rotate = N * 360 * (x ? -1 : 1);
              f.$Rotate = 0
            }
          }
          if (I) {
            var h = t.$Offset = {};
            if (d.$Clip) {
              var w = d.$ScaleClip || 1;
              if (C && z) {
                h.$Top = g.$Height / 2 * w;
                h.$Bottom = -h.$Top
              } else if (C) h.$Bottom = -g.$Height * w;
              else if (z) h.$Top = g.$Height * w;
              if (B && A) {
                h.$Left = g.$Width / 2 * w;
                h.$Right = -h.$Left
              } else if (B) h.$Right = -g.$Width * w;
              else if (A) h.$Left = g.$Width * w
            }
            r.$Clip = t;
            f.$Clip = g[v]
          }
          var L = o ? 1 : -1,
            M = s ? 1 : -1;
          if (d.x) e.$Left += n * d.x * L;
          if (d.y) e.$Top += l * d.y * M;
          a.$Each(e, function (b, c) {
            if (a.$IsNumeric(b))
              if (b != f[c]) r[c] = b - f[c]
          });
          u[v] = k ? f : e;
          var D = d.$FramesCount,
            y = b.round(m * d.$Delay / d.$Interval);
          j[v] = new Array(y);
          j[v].$Min = y;
          j[v].$Max = y + D - 1;
          for (var F = 0; F <= D; F++) {
            var E = a.$Cast(f, r, F / D, d.$Easing, d.$During, d.$Round, {
              $Move: d.$Move,
              $OriginalWidth: n,
              $OriginalHeight: l
            });
            E.$ZIndex = E.$ZIndex || 1;
            j[v].push(E)
          }
        })
      });
      o.reverse();
      a.$Each(o, function (b) {
        a.$Each(b, function (c) {
          var f = c[0],
            e = c[1],
            d = f + "," + e,
            b = h;
          if (e || f) b = a.$CloneNode(h);
          a.$SetStyles(b, u[d]);
          a.$CssOverflow(b, "hidden");
          a.$CssPosition(b, "absolute");
          A.$AddClipElement(b);
          m[d] = b;
          a.$ShowElement(b, !k)
        })
      })
    }

    function v() {
      var a = this,
        b = 0;
      l.call(a, 0, u);
      a.$OnPositionChange = function (c, a) {
        if (a - b > h) {
          b = a;
          e && e.$ShowFrame(a);
          g && g.$ShowFrame(a)
        }
      };
      a.$Transition = r
    }
    f.$GetTransition = function () {
      var a = 0,
        c = t.$Transitions,
        d = c.length;
      if (w) a = x++ % d;
      else a = b.floor(b.random() * d);
      c[a] && (c[a].$Index = a);
      return c[a]
    };
    f.$Initialize = function (w, x, j, l, a) {
      r = a;
      a = k(a, h);
      var i = l.$Item,
        d = j.$Item;
      i["no-image"] = !l.$Image;
      d["no-image"] = !j.$Image;
      var m = i,
        o = d,
        v = a,
        c = a.$Brother || k({}, h);
      if (!a.$SlideOut) {
        m = d;
        o = i
      }
      var t = c.$Shift || 0;
      g = new p(n, o, c, b.max(t - c.$Interval, 0), s, q);
      e = new p(n, m, v, b.max(c.$Interval - t, 0), s, q);
      g.$ShowFrame(0);
      e.$ShowFrame(0);
      u = b.max(g.$EndTime, e.$EndTime);
      f.$Index = w
    };
    f.$Clear = function () {
      n.$Clear();
      g = j;
      e = j
    };
    f.$GetProcessor = function () {
      var a = j;
      if (e) a = new v;
      return a
    };
    if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera() || y && a.$WebKitVersion() < 537) h = 16;
    m.call(f);
    l.call(f, -1e7, 1e7)
  };
  var h = g.$JssorSlider$ = function (q, fc) {
    var o = this;

    function Ec() {
      var a = this;
      l.call(a, -1e8, 2e8);
      a.$GetCurrentSlideInfo = function () {
        var c = a.$GetPosition_Display(),
          d = b.floor(c),
          f = t(d),
          e = c - b.floor(c);
        return {
          $Index: f,
          $VirtualIndex: d,
          $Position: e
        }
      };
      a.$OnPositionChange = function (d, a) {
        var e = b.floor(a);
        if (e != a && a > d) e++;
        Ub(e, c);
        o.$TriggerEvent(h.$EVT_POSITION_CHANGE, t(a), t(d), a, d)
      }
    }

    function Dc() {
      var b = this;
      l.call(b, 0, 0, {
        $LoopLength: r
      });
      a.$Each(C, function (a) {
        D & 1 && a.$SetLoopLength(r);
        b.$Chain(a);
        a.$Shift(fb / bc)
      })
    }

    function Cc() {
      var a = this,
        b = Tb.$Elmt;
      l.call(a, -1, 2, {
        $Easing: d.$EaseLinear,
        $Setter: {
          $Position: Zb
        },
        $LoopLength: r
      }, b, {
        $Position: 1
      }, {
        $Position: -2
      });
      a.$Wrapper = b
    }

    function qc(n, m) {
      var a = this,
        d, e, g, k, b;
      l.call(a, -1e8, 2e8, {
        $IntervalMax: 100
      });
      a.$OnStart = function () {
        O = c;
        R = j;
        o.$TriggerEvent(h.$EVT_SWIPE_START, t(w.$GetPosition()), w.$GetPosition())
      };
      a.$OnStop = function () {
        O = i;
        k = i;
        var a = w.$GetCurrentSlideInfo();
        o.$TriggerEvent(h.$EVT_SWIPE_END, t(w.$GetPosition()), w.$GetPosition());
        !a.$Position && Gc(a.$VirtualIndex, s)
      };
      a.$OnPositionChange = function (i, h) {
        var a;
        if (k) a = b;
        else {
          a = e;
          if (g) {
            var c = h / g;
            a = f.$SlideEasing(c) * (e - d) + d
          }
        }
        w.$GoToPosition(a)
      };
      a.$PlayCarousel = function (b, f, c, h) {
        d = b;
        e = f;
        g = c;
        w.$GoToPosition(b);
        a.$GoToPosition(0);
        a.$PlayToPosition(c, h)
      };
      a.$StandBy = function (d) {
        k = c;
        b = d;
        a.$Play(d, j, c)
      };
      a.$SetStandByPosition = function (a) {
        b = a
      };
      a.$MoveCarouselTo = function (a) {
        w.$GoToPosition(a)
      };
      w = new Ec;
      w.$Combine(n);
      w.$Combine(m)
    }

    function rc() {
      var c = this,
        b = Xb();
      a.$CssZIndex(b, 0);
      a.$Css(b, "pointerEvents", "none");
      c.$Elmt = b;
      c.$AddClipElement = function (c) {
        a.$AppendChild(b, c);
        a.$ShowElement(b)
      };
      c.$Clear = function () {
        a.$HideElement(b);
        a.$Empty(b)
      }
    }

    function Bc(k, e) {
      var d = this,
        q, H, x, n, y = [],
        w, B, W, G, Q, F, g, v, p, eb;
      l.call(d, -u, u + 1, {
        $SlideItemAnimator: c
      });

      function E(b) {
        q && q.$Revert();
        T(k, b, 0);
        F = c;
        q = new I.$Class(k, I, a.$ParseFloat(a.$AttributeEx(k, "idle")) || pc);
        q.$GoToPosition(0)
      }

      function Y() {
        q.$Version < I.$Version && E()
      }

      function N(p, r, m) {
        if (!G) {
          G = c;
          if (n && m) {
            var g = m.width,
              b = m.height,
              l = g,
              k = b;
            if (g && b && f.$FillMode) {
              if (f.$FillMode & 3 && (!(f.$FillMode & 4) || g > K || b > J)) {
                var j = i,
                  q = K / J * b / g;
                if (f.$FillMode & 1) j = q > 1;
                else if (f.$FillMode & 2) j = q < 1;
                l = j ? g * J / b : K;
                k = j ? J : b * K / g
              }
              a.$CssWidth(n, l);
              a.$CssHeight(n, k);
              a.$CssTop(n, (J - k) / 2);
              a.$CssLeft(n, (K - l) / 2)
            }
            a.$CssPosition(n, "absolute");
            o.$TriggerEvent(h.$EVT_LOAD_END, e)
          }
        }
        a.$HideElement(r);
        p && p(d)
      }

      function X(b, c, f, g) {
        if (g == R && s == e && P)
          if (!Fc) {
            var a = t(b);
            A.$Initialize(a, e, c, d, f);
            c.$HideContentForSlideshow();
            U.$Shift(a - U.$GetPosition_OuterBegin() - 1);
            U.$GoToPosition(a);
            z.$PlayCarousel(b, b, 0)
          }
      }

      function ab(b) {
        if (b == R && s == e) {
          if (!g) {
            var a = j;
            if (A)
              if (A.$Index == e) a = A.$GetProcessor();
              else A.$Clear();
            Y();
            g = new yc(k, e, a, q);
            g.$SetPlayer(p)
          }!g.$IsPlaying() && g.$Replay()
        }
      }

      function S(c, h, l) {
        if (c == e) {
          if (c != h) C[h] && C[h].$ParkOut();
          else !l && g && g.$AdjustIdleOnPark();
          p && p.$Enable();
          var m = R = a.$GetNow();
          d.$LoadImage(a.$CreateCallback(j, ab, m))
        } else {
          var k = b.min(e, c),
            i = b.max(e, c),
            o = b.min(i - k, k + r - i),
            n = u + f.$LazyLoading - 1;
          (!Q || o <= n) && d.$LoadImage()
        }
      }

      function bb() {
        if (s == e && g) {
          g.$Stop();
          p && p.$Quit();
          p && p.$Disable();
          g.$OpenSlideshowPanel()
        }
      }

      function db() {
        s == e && g && g.$Stop()
      }

      function Z(a) {
        !M && o.$TriggerEvent(h.$EVT_CLICK, e, a)
      }

      function O() {
        p = v.pInstance;
        g && g.$SetPlayer(p)
      }
      d.$LoadImage = function (d, b) {
        b = b || x;
        if (y.length && !G) {
          a.$ShowElement(b);
          if (!W) {
            W = c;
            o.$TriggerEvent(h.$EVT_LOAD_START, e);
            a.$Each(y, function (b) {
              if (!a.$Attribute(b, "src")) {
                b.src = a.$AttributeEx(b, "src2");
                a.$CssDisplay(b, b["display-origin"])
              }
            })
          }
          a.$LoadImages(y, n, a.$CreateCallback(j, N, d, b))
        } else N(d, b)
      };
      d.$GoForNextSlide = function () {
        var h = e;
        if (f.$AutoPlaySteps < 0) h -= r;
        var c = h + f.$AutoPlaySteps * wc;
        if (D & 2) c = t(c);
        if (!(D & 1)) c = b.max(0, b.min(c, r - u));
        if (c != e) {
          if (A) {
            var d = A.$GetTransition(r);
            if (d) {
              var i = R = a.$GetNow(),
                g = C[t(c)];
              return g.$LoadImage(a.$CreateCallback(j, X, c, g, d, i), x)
            }
          }
          nb(c)
        }
      };
      d.$TryActivate = function () {
        S(e, e, c)
      };
      d.$ParkOut = function () {
        p && p.$Quit();
        p && p.$Disable();
        d.$UnhideContentForSlideshow();
        g && g.$Abort();
        g = j;
        E()
      };
      d.$StampSlideItemElements = function (a) {
        a = eb + "_" + a
      };
      d.$HideContentForSlideshow = function () {
        a.$HideElement(k)
      };
      d.$UnhideContentForSlideshow = function () {
        a.$ShowElement(k)
      };
      d.$EnablePlayer = function () {
        p && p.$Enable()
      };

      function T(b, d, e) {
        if (a.$Attribute(b, "jssor-slider")) return;
        if (!F) {
          if (b.tagName == "IMG") {
            y.push(b);
            if (!a.$Attribute(b, "src")) {
              Q = c;
              b["display-origin"] = a.$CssDisplay(b);
              a.$HideElement(b)
            }
          }
          a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1)
        }
        var f = a.$Children(b);
        a.$Each(f, function (f) {
          var h = f.tagName,
            j = a.$AttributeEx(f, "u");
          if (j == "player" && !v) {
            v = f;
            if (v.pInstance) O();
            else a.$AddEvent(v, "dataavailable", O)
          }
          if (j == "caption") {
            if (d) {
              a.$CssTransformOrigin(f, a.$AttributeEx(f, "to"));
              a.$CssBackfaceVisibility(f, a.$AttributeEx(f, "bf"));
              a.$CssTransformStyle(f, "preserve-3d")
            } else if (!a.$IsBrowserIE()) {
              var g = a.$CloneNode(f, i, c);
              a.$InsertBefore(g, f, b);
              a.$RemoveElement(f, b);
              f = g;
              d = c
            }
          } else if (!F && !e && !n) {
            if (h == "A") {
              if (a.$AttributeEx(f, "u") == "image") n = a.$FindChildByTag(f, "IMG");
              else n = a.$FindChild(f, "image", c);
              if (n) {
                w = f;
                a.$CssDisplay(w, "block");
                a.$SetStyles(w, V);
                B = a.$CloneNode(w, c);
                a.$CssPosition(w, "relative");
                a.$CssOpacity(B, 0);
                a.$Css(B, "backgroundColor", "#000")
              }
            } else if (h == "IMG" && a.$AttributeEx(f, "u") == "image") n = f;
            if (n) {
              n.border = 0;
              a.$SetStyles(n, V)
            }
          }
          T(f, d, e + 1)
        })
      }
      d.$OnInnerOffsetChange = function (c, b) {
        var a = u - b;
        Zb(H, a)
      };
      d.$Index = e;
      m.call(d);
      a.$CssPerspective(k, a.$AttributeEx(k, "p"));
      a.$CssPerspectiveOrigin(k, a.$AttributeEx(k, "po"));
      var L = a.$FindChild(k, "thumb", c);
      if (L) {
        d.$Thumb = a.$CloneNode(L);
        a.$HideElement(L)
      }
      a.$ShowElement(k);
      x = a.$CloneNode(cb);
      a.$CssZIndex(x, 1e3);
      a.$AddEvent(k, "click", Z);
      E(c);
      d.$Image = n;
      d.$Link = B;
      d.$Item = k;
      d.$Wrapper = H = k;
      a.$AppendChild(H, x);
      o.$On(203, S);
      o.$On(28, db);
      o.$On(24, bb)
    }

    function yc(y, f, p, q) {
      var b = this,
        m = 0,
        u = 0,
        g, j, e, d, k, t, r, n = C[f];
      l.call(b, 0, 0);

      function v() {
        a.$Empty(N);
        dc && k && n.$Link && a.$AppendChild(N, n.$Link);
        a.$ShowElement(N, !k && n.$Image)
      }

      function w() {
        b.$Replay()
      }

      function x(a) {
        r = a;
        b.$Stop();
        b.$Replay()
      }
      b.$Replay = function () {
        var a = b.$GetPosition_Display();
        if (!B && !O && !r && s == f) {
          if (!a) {
            if (g && !k) {
              k = c;
              b.$OpenSlideshowPanel(c);
              o.$TriggerEvent(h.$EVT_SLIDESHOW_START, f, m, u, g, d)
            }
            v()
          }
          var i, p = h.$EVT_STATE_CHANGE;
          if (a != d)
            if (a == e) i = d;
            else if (a == j) i = e;
          else if (!a) i = j;
          else i = b.$GetPlayToPosition();
          o.$TriggerEvent(p, f, a, m, j, e, d);
          var l = P && (!E || F);
          if (a == d)(e != d && !(E & 12) || l) && n.$GoForNextSlide();
          else(l || a != e) && b.$PlayToPosition(i, w)
        }
      };
      b.$AdjustIdleOnPark = function () {
        e == d && e == b.$GetPosition_Display() && b.$GoToPosition(j)
      };
      b.$Abort = function () {
        A && A.$Index == f && A.$Clear();
        var a = b.$GetPosition_Display();
        a < d && o.$TriggerEvent(h.$EVT_STATE_CHANGE, f, -a - 1, m, j, e, d)
      };
      b.$OpenSlideshowPanel = function (b) {
        p && a.$CssOverflow(hb, b && p.$Transition.$Outside ? "" : "hidden")
      };
      b.$OnInnerOffsetChange = function (b, a) {
        if (k && a >= g) {
          k = i;
          v();
          n.$UnhideContentForSlideshow();
          A.$Clear();
          o.$TriggerEvent(h.$EVT_SLIDESHOW_END, f, m, u, g, d)
        }
        o.$TriggerEvent(h.$EVT_PROGRESS_CHANGE, f, a, m, j, e, d)
      };
      b.$SetPlayer = function (a) {
        if (a && !t) {
          t = a;
          a.$On($JssorPlayer$.$EVT_SWITCH, x)
        }
      };
      p && b.$Chain(p);
      g = b.$GetPosition_OuterEnd();
      b.$Chain(q);
      j = g + q.$IdleBegin;
      e = g + q.$IdleEnd;
      d = b.$GetPosition_OuterEnd()
    }

    function Zb(g, f) {
      var e = x > 0 ? x : gb,
        c = Bb * f * (e & 1),
        d = Cb * f * (e >> 1 & 1);
      c = b.round(c);
      d = b.round(d);
      a.$CssLeft(g, c);
      a.$CssTop(g, d)
    }

    function Pb() {
      pb = O;
      Kb = z.$GetPlayToPosition();
      G = w.$GetPosition()
    }

    function gc() {
      Pb();
      if (B || !F && E & 12) {
        z.$Stop();
        o.$TriggerEvent(h.$EVT_FREEZE)
      }
    }

    function ec(e) {
      if (!B && (F || !(E & 12)) && !z.$IsPlaying()) {
        var c = w.$GetPosition(),
          a = b.ceil(G);
        if (e && b.abs(H) >= f.$MinDragOffsetToSlide) {
          a = b.ceil(c);
          a += eb
        }
        if (!(D & 1)) a = b.min(r - u, b.max(a, 0));
        var d = b.abs(a - c);
        d = 1 - b.pow(1 - d, 5);
        if (!M && pb) z.$Continue(Kb);
        else if (c == a) {
          tb.$EnablePlayer();
          tb.$TryActivate()
        } else z.$PlayCarousel(c, a, d * Vb)
      }
    }

    function Ib(b) {
      !a.$AttributeEx(a.$EvtSrc(b), "nodrag") && a.$CancelEvent(b)
    }

    function uc(a) {
      Yb(a, 1)
    }

    function Yb(b, d) {
      b = a.$GetEvent(b);
      var k = a.$EvtSrc(b);
      if (!L && !a.$AttributeEx(k, "nodrag") && vc() && (!d || b.touches.length == 1)) {
        B = c;
        Ab = i;
        R = j;
        a.$AddEvent(e, d ? "touchmove" : "mousemove", Db);
        a.$GetNow();
        M = 0;
        gc();
        if (!pb) x = 0;
        if (d) {
          var g = b.touches[0];
          vb = g.clientX;
          wb = g.clientY
        } else {
          var f = a.$MousePosition(b);
          vb = f.x;
          wb = f.y
        }
        H = 0;
        bb = 0;
        eb = 0;
        o.$TriggerEvent(h.$EVT_DRAG_START, t(G), G, b)
      }
    }

    function Db(e) {
      if (B) {
        e = a.$GetEvent(e);
        var f;
        if (e.type != "mousemove") {
          var l = e.touches[0];
          f = {
            x: l.clientX,
            y: l.clientY
          }
        } else f = a.$MousePosition(e);
        if (f) {
          var j = f.x - vb,
            k = f.y - wb;
          if (b.floor(G) != G) x = x || gb & L;
          if ((j || k) && !x) {
            if (L == 3)
              if (b.abs(k) > b.abs(j)) x = 2;
              else x = 1;
            else x = L;
            if (jb && x == 1 && b.abs(k) - b.abs(j) > 3) Ab = c
          }
          if (x) {
            var d = k,
              i = Cb;
            if (x == 1) {
              d = j;
              i = Bb
            }
            if (!(D & 1)) {
              if (d > 0) {
                var g = i * s,
                  h = d - g;
                if (h > 0) d = g + b.sqrt(h) * 5
              }
              if (d < 0) {
                var g = i * (r - u - s),
                  h = -d - g;
                if (h > 0) d = -g - b.sqrt(h) * 5
              }
            }
            if (H - bb < -2) eb = 0;
            else if (H - bb > 2) eb = -1;
            bb = H;
            H = d;
            sb = G - H / i / (Z || 1);
            if (H && x && !Ab) {
              a.$CancelEvent(e);
              if (!O) z.$StandBy(sb);
              else z.$SetStandByPosition(sb)
            }
          }
        }
      }
    }

    function mb() {
      sc();
      if (B) {
        B = i;
        a.$GetNow();
        a.$RemoveEvent(e, "mousemove", Db);
        a.$RemoveEvent(e, "touchmove", Db);
        M = H;
        z.$Stop();
        var b = w.$GetPosition();
        o.$TriggerEvent(h.$EVT_DRAG_END, t(b), b, t(G), G);
        E & 12 && Pb();
        ec(c)
      }
    }

    function kc(c) {
      if (M) {
        a.$StopEvent(c);
        var b = a.$EvtSrc(c);
        while (b && v !== b) {
          b.tagName == "A" && a.$CancelEvent(c);
          try {
            b = b.parentNode
          } catch (d) {
            break
          }
        }
      }
    }

    function oc(a) {
      C[s];
      s = t(a);
      tb = C[s];
      Ub(a);
      return s
    }

    function Gc(a, b) {
      x = 0;
      oc(a);
      o.$TriggerEvent(h.$EVT_PARK, t(a), b)
    }

    function Ub(b, c) {
      yb = b;
      a.$Each(S, function (a) {
        a.$SetCurrentIndex(t(b), b, c)
      })
    }

    function vc() {
      var b = h.$DragRegistry || 0,
        a = Y;
      if (jb) a & 1 && (a &= 1);
      h.$DragRegistry |= a;
      return L = a & ~b
    }

    function sc() {
      if (L) {
        h.$DragRegistry &= ~Y;
        L = 0
      }
    }

    function Xb() {
      var b = a.$CreateDiv();
      a.$SetStyles(b, V);
      a.$CssPosition(b, "absolute");
      return b
    }

    function t(a) {
      return (a % r + r) % r
    }

    function lc(a, c) {
      if (c)
        if (!D) {
          a = b.min(b.max(a + yb, 0), r - u);
          c = i
        } else if (D & 2) {
        a = t(a + yb);
        c = i
      }
      nb(a, f.$SlideDuration, c)
    }

    function zb() {
      a.$Each(S, function (a) {
        a.$Show(a.$Options.$ChanceToShow <= F)
      })
    }

    function ic() {
      if (!F) {
        F = 1;
        zb();
        if (!B) {
          E & 12 && ec();
          E & 3 && C[s].$TryActivate()
        }
      }
    }

    function hc() {
      if (F) {
        F = 0;
        zb();
        B || !(E & 12) || gc()
      }
    }

    function jc() {
      V = {
        $Width: K,
        $Height: J,
        $Top: 0,
        $Left: 0
      };
      a.$Each(T, function (b) {
        a.$SetStyles(b, V);
        a.$CssPosition(b, "absolute");
        a.$CssOverflow(b, "hidden");
        a.$HideElement(b)
      });
      a.$SetStyles(cb, V)
    }

    function lb(b, a) {
      nb(b, a, c)
    }

    function nb(g, e, l) {
      if (Rb && (!B && (F || !(E & 12)) || f.$NaviQuitDrag)) {
        O = c;
        B = i;
        z.$Stop();
        if (e == k) e = Vb;
        var d = Eb.$GetPosition_Display(),
          a = g;
        if (l) {
          a = d + g;
          if (g > 0) a = b.ceil(a);
          else a = b.floor(a)
        }
        if (D & 2) a = t(a);
        if (!(D & 1)) a = b.max(0, b.min(a, r - u));
        var j = (a - d) % r;
        a = d + j;
        var h = d == a ? 0 : e * b.abs(j);
        h = b.min(h, e * u * 1.5);
        z.$PlayCarousel(d, a, h || 1)
      }
    }
    o.$PlayTo = nb;
    o.$GoTo = function (a) {
      w.$GoToPosition(a)
    };
    o.$Next = function () {
      lb(1)
    };
    o.$Prev = function () {
      lb(-1)
    };
    o.$Pause = function () {
      P = i
    };
    o.$Play = function () {
      if (!P) {
        P = c;
        C[s] && C[s].$TryActivate()
      }
    };
    o.$SetSlideshowTransitions = function (a) {
      f.$SlideshowOptions.$Transitions = a
    };
    o.$SetCaptionTransitions = function (b) {
      I.$Transitions = b;
      I.$Version = a.$GetNow()
    };
    o.$SlidesCount = function () {
      return T.length
    };
    o.$CurrentIndex = function () {
      return s
    };
    o.$IsAutoPlaying = function () {
      return P
    };
    o.$IsDragging = function () {
      return B
    };
    o.$IsSliding = function () {
      return O
    };
    o.$IsMouseOver = function () {
      return !F
    };
    o.$LastDragSucceded = function () {
      return M
    };

    function X() {
      return a.$CssWidth(y || q)
    }

    function ib() {
      return a.$CssHeight(y || q)
    }
    o.$OriginalWidth = o.$GetOriginalWidth = X;
    o.$OriginalHeight = o.$GetOriginalHeight = ib;

    function Gb(c, d) {
      if (c == k) return a.$CssWidth(q);
      if (!y) {
        var b = a.$CreateDiv(e);
        a.$ClassName(b, a.$ClassName(q));
        a.$CssCssText(b, a.$CssCssText(q));
        a.$CssDisplay(b, "block");
        a.$CssPosition(b, "relative");
        a.$CssTop(b, 0);
        a.$CssLeft(b, 0);
        a.$CssOverflow(b, "visible");
        y = a.$CreateDiv(e);
        a.$CssPosition(y, "absolute");
        a.$CssTop(y, 0);
        a.$CssLeft(y, 0);
        a.$CssWidth(y, a.$CssWidth(q));
        a.$CssHeight(y, a.$CssHeight(q));
        a.$CssTransformOrigin(y, "0 0");
        a.$AppendChild(y, b);
        var h = a.$Children(q);
        a.$AppendChild(q, y);
        a.$Css(q, "backgroundImage", "");
        a.$Each(h, function (c) {
          a.$AppendChild(a.$AttributeEx(c, "noscale") ? q : b, c);
          a.$AttributeEx(c, "autocenter") && Lb.push(c)
        })
      }
      Z = c / (d ? a.$CssHeight : a.$CssWidth)(y);
      a.$CssScale(y, Z);
      var g = d ? Z * X() : c,
        f = d ? c : Z * ib();
      a.$CssWidth(q, g);
      a.$CssHeight(q, f);
      a.$Each(Lb, function (b) {
        var c = a.$ParseInt(a.$AttributeEx(b, "autocenter"));
        a.$CenterElement(b, c)
      })
    }
    o.$ScaleHeight = o.$GetScaleHeight = function (b) {
      if (b == k) return a.$CssHeight(q);
      Gb(b, c)
    };
    o.$ScaleWidth = o.$SetScaleWidth = o.$GetScaleWidth = Gb;
    o.$GetVirtualIndex = function (a) {
      var d = b.ceil(t(fb / bc)),
        c = t(a - s + d);
      if (c > u) {
        if (a - s > r / 2) a -= r;
        else if (a - s <= -r / 2) a += r
      } else a = s + c - d;
      return a
    };
    m.call(o);
    o.$Elmt = q = a.$GetElement(q);
    var f = a.$Extend({
      $FillMode: 0,
      $LazyLoading: 1,
      $ArrowKeyNavigation: 1,
      $StartIndex: 0,
      $AutoPlay: i,
      $Loop: 1,
      $NaviQuitDrag: c,
      $AutoPlaySteps: 1,
      $AutoPlayInterval: 3e3,
      $PauseOnHover: 1,
      $SlideDuration: 500,
      $SlideEasing: d.$EaseOutQuad,
      $MinDragOffsetToSlide: 20,
      $SlideSpacing: 0,
      $Cols: 1,
      $Align: 0,
      $UISearchMode: 1,
      $PlayOrientation: 1,
      $DragOrientation: 1
    }, fc);
    if (f.$Idle != k) f.$AutoPlayInterval = f.$Idle;
    if (f.$DisplayPieces != k) f.$Cols = f.$DisplayPieces;
    if (f.$ParkingPosition != k) f.$Align = f.$ParkingPosition;
    var gb = f.$PlayOrientation & 3,
      wc = (f.$PlayOrientation & 4) / -4 || 1,
      db = f.$SlideshowOptions,
      I = a.$Extend({
        $Class: p,
        $PlayInMode: 1,
        $PlayOutMode: 1
      }, f.$CaptionSliderOptions);
    I.$Transitions = I.$Transitions || I.$CaptionTransitions;
    var qb = f.$BulletNavigatorOptions,
      W = f.$ArrowNavigatorOptions,
      ab = f.$ThumbnailNavigatorOptions,
      Q = !f.$UISearchMode,
      y, v = a.$FindChild(q, "slides", Q),
      cb = a.$FindChild(q, "loading", Q) || a.$CreateDiv(e),
      Jb = a.$FindChild(q, "navigator", Q),
      cc = a.$FindChild(q, "arrowleft", Q),
      ac = a.$FindChild(q, "arrowright", Q),
      Hb = a.$FindChild(q, "thumbnavigator", Q),
      nc = a.$CssWidth(v),
      mc = a.$CssHeight(v),
      V, T = [],
      xc = a.$Children(v);
    a.$Each(xc, function (b) {
      if (b.tagName == "DIV" && !a.$AttributeEx(b, "u")) T.push(b);
      else a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1)
    });
    var s = -1,
      yb, tb, r = T.length,
      K = f.$SlideWidth || nc,
      J = f.$SlideHeight || mc,
      Wb = f.$SlideSpacing,
      Bb = K + Wb,
      Cb = J + Wb,
      bc = gb & 1 ? Bb : Cb,
      u = b.min(f.$Cols, r),
      hb, x, L, Ab, S = [],
      Qb, Sb, Ob, dc, Fc, P, E = f.$PauseOnHover,
      pc = f.$AutoPlayInterval,
      Vb = f.$SlideDuration,
      rb, ub, fb, Rb = u < r,
      D = Rb ? f.$Loop : 0,
      Y, M, F = 1,
      O, B, R, vb = 0,
      wb = 0,
      H, bb, eb, Eb, w, U, z, Tb = new rc,
      Z, Lb = [];
    P = f.$AutoPlay;
    o.$Options = fc;
    jc();
    a.$Attribute(q, "jssor-slider", c);
    a.$CssZIndex(v, a.$CssZIndex(v) || 0);
    a.$CssPosition(v, "absolute");
    hb = a.$CloneNode(v, c);
    a.$InsertBefore(hb, v);
    if (db) {
      dc = db.$ShowLink;
      rb = db.$Class;
      ub = u == 1 && r > 1 && rb && (!a.$IsBrowserIE() || a.$BrowserVersion() >= 8)
    }
    fb = ub || u >= r || !(D & 1) ? 0 : f.$Align;
    Y = (u > 1 || fb ? gb : -1) & f.$DragOrientation;
    var xb = v,
      C = [],
      A, N, Fb = a.$Device(),
      jb = Fb.$Touchable,
      G, pb, Kb, sb;
    Fb.$TouchActionAttr && a.$Css(xb, Fb.$TouchActionAttr, ([j, "pan-y", "pan-x", "none"])[Y] || "");
    U = new Cc;
    if (ub) A = new rb(Tb, K, J, db, jb);
    a.$AppendChild(hb, U.$Wrapper);
    a.$CssOverflow(v, "hidden");
    N = Xb();
    a.$Css(N, "backgroundColor", "#000");
    a.$CssOpacity(N, 0);
    a.$InsertBefore(N, xb.firstChild, xb);
    for (var ob = 0; ob < T.length; ob++) {
      var zc = T[ob],
        Ac = new Bc(zc, ob);
      C.push(Ac)
    }
    a.$HideElement(cb);
    Eb = new Dc;
    z = new qc(Eb, U);
    if (Y) {
      a.$AddEvent(v, "mousedown", Yb);
      a.$AddEvent(v, "touchstart", uc);
      a.$AddEvent(v, "dragstart", Ib);
      a.$AddEvent(v, "selectstart", Ib);
      a.$AddEvent(e, "mouseup", mb);
      a.$AddEvent(e, "touchend", mb);
      a.$AddEvent(e, "touchcancel", mb);
      a.$AddEvent(g, "blur", mb)
    }
    E &= jb ? 10 : 5;
    if (Jb && qb) {
      Qb = new qb.$Class(Jb, qb, X(), ib());
      S.push(Qb)
    }
    if (W && cc && ac) {
      W.$Loop = D;
      W.$Cols = u;
      Sb = new W.$Class(cc, ac, W, X(), ib());
      S.push(Sb)
    }
    if (Hb && ab) {
      ab.$StartIndex = f.$StartIndex;
      Ob = new ab.$Class(Hb, ab);
      S.push(Ob)
    }
    a.$Each(S, function (a) {
      a.$Reset(r, C, cb);
      a.$On(n.$NAVIGATIONREQUEST, lc)
    });
    a.$Css(q, "visibility", "visible");
    Gb(X());
    a.$AddEvent(v, "click", kc);
    a.$AddEvent(q, "mouseout", a.$MouseOverOutFilter(ic, q));
    a.$AddEvent(q, "mouseover", a.$MouseOverOutFilter(hc, q));
    zb();
    f.$ArrowKeyNavigation && a.$AddEvent(e, "keydown", function (a) {
      if (a.keyCode == 37) lb(-f.$ArrowKeyNavigation);
      else a.keyCode == 39 && lb(f.$ArrowKeyNavigation)
    });
    var kb = f.$StartIndex;
    if (!(D & 1)) kb = b.max(0, b.min(kb, r - u));
    z.$PlayCarousel(kb, kb, 0)
  };
  h.$EVT_CLICK = 21;
  h.$EVT_DRAG_START = 22;
  h.$EVT_DRAG_END = 23;
  h.$EVT_SWIPE_START = 24;
  h.$EVT_SWIPE_END = 25;
  h.$EVT_LOAD_START = 26;
  h.$EVT_LOAD_END = 27;
  h.$EVT_FREEZE = 28;
  h.$EVT_POSITION_CHANGE = 202;
  h.$EVT_PARK = 203;
  h.$EVT_SLIDESHOW_START = 206;
  h.$EVT_SLIDESHOW_END = 207;
  h.$EVT_PROGRESS_CHANGE = 208;
  h.$EVT_STATE_CHANGE = 209;
  var n = {
    $NAVIGATIONREQUEST: 1,
    $INDEXCHANGE: 2,
    $RESET: 3
  };
  g.$JssorBulletNavigator$ = function (e, C) {
    var f = this;
    m.call(f);
    e = a.$GetElement(e);
    var s, A, z, r, l = 0,
      d, o, k, w, x, h, g, q, p, B = [],
      y = [];

    function v(a) {
      a != -1 && y[a].$Selected(a == l)
    }

    function t(a) {
      f.$TriggerEvent(n.$NAVIGATIONREQUEST, a * o)
    }
    f.$Elmt = e;
    f.$GetCurrentIndex = function () {
      return r
    };
    f.$SetCurrentIndex = function (a) {
      if (a != r) {
        var d = l,
          c = b.floor(a / o);
        l = c;
        r = a;
        v(d);
        v(c)
      }
    };
    f.$Show = function (b) {
      a.$ShowElement(e, b)
    };
    var u;
    f.$Reset = function (E) {
      if (!u) {
        s = b.ceil(E / o);
        l = 0;
        var n = q + w,
          r = p + x,
          m = b.ceil(s / k) - 1;
        A = q + n * (!h ? m : k - 1);
        z = p + r * (h ? m : k - 1);
        a.$CssWidth(e, A);
        a.$CssHeight(e, z);
        for (var f = 0; f < s; f++) {
          var C = a.$CreateSpan();
          a.$InnerText(C, f + 1);
          var i = a.$BuildElement(g, "numbertemplate", C, c);
          a.$CssPosition(i, "absolute");
          var v = f % (m + 1);
          a.$CssLeft(i, !h ? n * v : f % k * n);
          a.$CssTop(i, h ? r * v : b.floor(f / (m + 1)) * r);
          a.$AppendChild(e, i);
          B[f] = i;
          d.$ActionMode & 1 && a.$AddEvent(i, "click", a.$CreateCallback(j, t, f));
          d.$ActionMode & 2 && a.$AddEvent(i, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(j, t, f), i));
          y[f] = a.$Buttonize(i)
        }
        u = c
      }
    };
    f.$Options = d = a.$Extend({
      $SpacingX: 10,
      $SpacingY: 10,
      $Orientation: 1,
      $ActionMode: 1
    }, C);
    g = a.$FindChild(e, "prototype");
    q = a.$CssWidth(g);
    p = a.$CssHeight(g);
    a.$RemoveElement(g, e);
    o = d.$Steps || 1;
    k = d.$Lanes || 1;
    w = d.$SpacingX;
    x = d.$SpacingY;
    h = d.$Orientation - 1;
    d.$Scale == i && a.$Attribute(e, "noscale", c);
    d.$AutoCenter && a.$Attribute(e, "autocenter", d.$AutoCenter)
  };
  g.$JssorArrowNavigator$ = function (b, g, h) {
    var d = this;
    m.call(d);
    var r, q, e, f, k;
    a.$CssWidth(b);
    a.$CssHeight(b);

    function l(a) {
      d.$TriggerEvent(n.$NAVIGATIONREQUEST, a, c)
    }

    function p(c) {
      a.$ShowElement(b, c || !h.$Loop && e == 0);
      a.$ShowElement(g, c || !h.$Loop && e >= q - h.$Cols);
      r = c
    }
    d.$GetCurrentIndex = function () {
      return e
    };
    d.$SetCurrentIndex = function (b, a, c) {
      if (c) e = a;
      else {
        e = b;
        p(r)
      }
    };
    d.$Show = p;
    var o;
    d.$Reset = function (d) {
      q = d;
      e = 0;
      if (!o) {
        a.$AddEvent(b, "click", a.$CreateCallback(j, l, -k));
        a.$AddEvent(g, "click", a.$CreateCallback(j, l, k));
        a.$Buttonize(b);
        a.$Buttonize(g);
        o = c
      }
    };
    d.$Options = f = a.$Extend({
      $Steps: 1
    }, h);
    k = f.$Steps;
    if (f.$Scale == i) {
      a.$Attribute(b, "noscale", c);
      a.$Attribute(g, "noscale", c)
    }
    if (f.$AutoCenter) {
      a.$Attribute(b, "autocenter", f.$AutoCenter);
      a.$Attribute(g, "autocenter", f.$AutoCenter)
    }
  };
  g.$JssorThumbnailNavigator$ = function (g, C) {
    var l = this,
      z, q, d, w = [],
      A, y, e, r, s, v, u, p, t, f, o;
    m.call(l);
    g = a.$GetElement(g);

    function B(m, f) {
      var g = this,
        b, k, i;

      function p() {
        k.$Selected(q == f)
      }

      function h(d) {
        if (d || !t.$LastDragSucceded()) {
          var a = e - f % e,
            b = t.$GetVirtualIndex((f + a) / e - 1),
            c = b * e + e - a;
          l.$TriggerEvent(n.$NAVIGATIONREQUEST, c)
        }
      }
      g.$Index = f;
      g.$Highlight = p;
      i = m.$Thumb || m.$Image || a.$CreateDiv();
      g.$Wrapper = b = a.$BuildElement(o, "thumbnailtemplate", i, c);
      k = a.$Buttonize(b);
      d.$ActionMode & 1 && a.$AddEvent(b, "click", a.$CreateCallback(j, h, 0));
      d.$ActionMode & 2 && a.$AddEvent(b, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(j, h, 1), b))
    }
    l.$GetCurrentIndex = function () {
      return q
    };
    l.$SetCurrentIndex = function (c, d, f) {
      var a = q;
      q = c;
      a != -1 && w[a].$Highlight();
      w[c].$Highlight();
      !f && t.$PlayTo(t.$GetVirtualIndex(b.floor(d / e)))
    };
    l.$Show = function (b) {
      a.$ShowElement(g, b)
    };
    var x;
    l.$Reset = function (F, C) {
      if (!x) {
        z = F;
        b.ceil(z / e);
        q = -1;
        p = b.min(p, C.length);
        var j = d.$Orientation & 1,
          m = v + (v + r) * (e - 1) * (1 - j),
          l = u + (u + s) * (e - 1) * j,
          o = m + (m + r) * (p - 1) * j,
          n = l + (l + s) * (p - 1) * (1 - j);
        a.$CssPosition(f, "absolute");
        a.$CssOverflow(f, "hidden");
        d.$AutoCenter & 1 && a.$CssLeft(f, (A - o) / 2);
        d.$AutoCenter & 2 && a.$CssTop(f, (y - n) / 2);
        a.$CssWidth(f, o);
        a.$CssHeight(f, n);
        var k = [];
        a.$Each(C, function (l, g) {
          var h = new B(l, g),
            d = h.$Wrapper,
            c = b.floor(g / e),
            i = g % e;
          a.$CssLeft(d, (v + r) * i * (1 - j));
          a.$CssTop(d, (u + s) * i * j);
          if (!k[c]) {
            k[c] = a.$CreateDiv();
            a.$AppendChild(f, k[c])
          }
          a.$AppendChild(k[c], d);
          w.push(h)
        });
        var E = a.$Extend({
          $AutoPlay: i,
          $NaviQuitDrag: i,
          $SlideWidth: m,
          $SlideHeight: l,
          $SlideSpacing: r * j + s * (1 - j),
          $MinDragOffsetToSlide: 12,
          $SlideDuration: 200,
          $PauseOnHover: 1,
          $PlayOrientation: d.$Orientation,
          $DragOrientation: d.$NoDrag || d.$DisableDrag ? 0 : d.$Orientation
        }, d);
        t = new h(g, E);
        x = c
      }
    };
    l.$Options = d = a.$Extend({
      $SpacingX: 0,
      $SpacingY: 0,
      $Cols: 1,
      $Orientation: 1,
      $AutoCenter: 3,
      $ActionMode: 1
    }, C);
    if (d.$DisplayPieces != k) d.$Cols = d.$DisplayPieces;
    if (d.$Rows != k) d.$Lanes = d.$Rows;
    A = a.$CssWidth(g);
    y = a.$CssHeight(g);
    f = a.$FindChild(g, "slides", c);
    o = a.$FindChild(f, "prototype");
    v = a.$CssWidth(o);
    u = a.$CssHeight(o);
    a.$RemoveElement(o, f);
    e = d.$Lanes || 1;
    r = d.$SpacingX;
    s = d.$SpacingY;
    p = d.$Cols;
    d.$Scale == i && a.$Attribute(g, "noscale", c)
  };

  function p(e, d, c) {
    var b = this;
    l.call(b, 0, c);
    b.$Revert = a.$EmptyFunction;
    b.$IdleBegin = 0;
    b.$IdleEnd = c
  }
  g.$JssorCaptionSlider$ = function (h, f, i) {
    var c = this;
    l.call(c, 0, 0);
    var e, d;

    function g(p, h, f) {
      var c = this,
        g, n = f ? h.$PlayInMode : h.$PlayOutMode,
        e = h.$Transitions,
        o = {
          $Transition: "t",
          $Delay: "d",
          $Duration: "du",
          x: "x",
          y: "y",
          $Rotate: "r",
          $Zoom: "z",
          $Opacity: "f",
          $BeginTime: "b"
        },
        d = {
          $Default: function (b, a) {
            if (!isNaN(a.$Value)) b = a.$Value;
            else b *= a.$Percent;
            return b
          },
          $Opacity: function (b, a) {
            return this.$Default(b - 1, a)
          }
        };
      d.$Zoom = d.$Opacity;
      l.call(c, 0, 0);

      function j(r, m) {
        var l = [],
          i, k = [],
          c = [];

        function h(c, d) {
          var b = {};
          a.$Each(o, function (g, h) {
            var e = a.$AttributeEx(c, g + (d || ""));
            if (e) {
              var f = {};
              if (g == "t") f.$Value = e;
              else if (e.indexOf("%") + 1) f.$Percent = a.$ParseFloat(e) / 100;
              else f.$Value = a.$ParseFloat(e);
              b[h] = f
            }
          });
          return b
        }

        function p() {
          return e[b.floor(b.random() * e.length)]
        }

        function g(f) {
          var h;
          if (f == "*") h = p();
          else if (f) {
            var d = e[a.$ParseInt(f)] || e[f];
            if (a.$IsArray(d)) {
              if (f != i) {
                i = f;
                c[f] = 0;
                k[f] = d[b.floor(b.random() * d.length)]
              } else c[f]++;
              d = k[f];
              if (a.$IsArray(d)) {
                d = d.length && d[c[f] % d.length];
                if (a.$IsArray(d)) d = d[b.floor(b.random() * d.length)]
              }
            }
            h = d;
            if (a.$IsString(h)) h = g(h)
          }
          return h
        }
        var q = a.$Children(r);
        a.$Each(q, function (b) {
          var c = [];
          c.$Elmt = b;
          var e = a.$AttributeEx(b, "u") == "caption";
          a.$Each(f ? [0, 3] : [2], function (l, o) {
            if (e) {
              var k, f;
              if (l != 2 || !a.$AttributeEx(b, "t3")) {
                f = h(b, l);
                if (l == 2 && !f.$Transition) {
                  f.$Delay = f.$Delay || {
                    $Value: 0
                  };
                  f = a.$Extend(h(b, 0), f)
                }
              }
              if (f && f.$Transition) {
                k = g(f.$Transition.$Value);
                if (k) {
                  var i = a.$Extend({
                    $Delay: 0
                  }, k);
                  a.$Each(f, function (c, a) {
                    var b = (d[a] || d.$Default).apply(d, [i[a], f[a]]);
                    if (!isNaN(b)) i[a] = b
                  });
                  if (!o)
                    if (f.$BeginTime) i.$BeginTime = f.$BeginTime.$Value || 0;
                    else if (n & 2) i.$BeginTime = 0
                }
              }
              c.push(i)
            }
            if (m % 2 && !o) c.$Children = j(b, m + 1)
          });
          l.push(c)
        });
        return l
      }

      function m(w, c, z) {
        var g = {
            $Easing: c.$Easing,
            $Round: c.$Round,
            $During: c.$During,
            $Reverse: f && !z
          },
          m = w,
          r = a.$ParentNode(w),
          k = a.$CssWidth(m),
          j = a.$CssHeight(m),
          y = a.$CssWidth(r),
          x = a.$CssHeight(r),
          h = {},
          e = {},
          i = c.$ScaleClip || 1;
        if (c.$Opacity) e.$Opacity = 1 - c.$Opacity;
        g.$OriginalWidth = k;
        g.$OriginalHeight = j;
        if (c.$Zoom || c.$Rotate) {
          e.$Zoom = (c.$Zoom || 2) - 2;
          if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera()) e.$Zoom = b.min(e.$Zoom, 1);
          h.$Zoom = 1;
          var B = c.$Rotate || 0;
          e.$Rotate = B * 360;
          h.$Rotate = 0
        } else if (c.$Clip) {
          var s = {
              $Top: 0,
              $Right: k,
              $Bottom: j,
              $Left: 0
            },
            v = a.$Extend({}, s),
            d = v.$Offset = {},
            u = c.$Clip & 4,
            p = c.$Clip & 8,
            t = c.$Clip & 1,
            q = c.$Clip & 2;
          if (u && p) {
            d.$Top = j / 2 * i;
            d.$Bottom = -d.$Top
          } else if (u) d.$Bottom = -j * i;
          else if (p) d.$Top = j * i;
          if (t && q) {
            d.$Left = k / 2 * i;
            d.$Right = -d.$Left
          } else if (t) d.$Right = -k * i;
          else if (q) d.$Left = k * i;
          g.$Move = c.$Move;
          e.$Clip = v;
          h.$Clip = s
        }
        var n = 0,
          o = 0;
        if (c.x) n -= y * c.x;
        if (c.y) o -= x * c.y;
        if (n || o || g.$Move) {
          e.$Left = n;
          e.$Top = o
        }
        var A = c.$Duration;
        h = a.$Extend(h, a.$GetStyles(m, e));
        g.$Setter = a.$StyleSetterEx();
        return new l(c.$Delay, A, g, m, h, e)
      }

      function i(b, d) {
        a.$Each(d, function (d) {
          var a, h = d.$Elmt,
            e = d[0],
            j = d[1];
          if (e) {
            a = m(h, e);
            e.$BeginTime == k && a.$Shift(b);
            b = a.$GetPosition_OuterEnd()
          }
          b = i(b, d.$Children);
          if (j) {
            var f = m(h, j, 1);
            f.$Shift(b);
            c.$Combine(f);
            g.$Combine(f)
          }
          a && c.$Combine(a)
        });
        return b
      }
      c.$Revert = function () {
        c.$GoToPosition(c.$GetPosition_OuterEnd() * (f || 0));
        g.$GoToPosition(0)
      };
      g = new l(0, 0);
      i(0, n ? j(p, 1) : [])
    }
    c.$Revert = function () {
      d.$Revert();
      e.$Revert()
    };
    e = new g(h, f, 1);
    c.$IdleBegin = e.$GetPosition_OuterEnd();
    c.$IdleEnd = c.$IdleBegin + i;
    d = new g(h, f);
    d.$Shift(c.$IdleEnd);
    c.$Combine(d);
    c.$Combine(e)
  };
  g.$JssorCaptionSlideo$ = function (n, g, m) {
    var b = this,
      o, h = {},
      i = g.$Transitions,
      d = new l(0, 0);
    l.call(b, 0, 0);

    function j(d, c) {
      var b = {};
      a.$Each(d, function (d, f) {
        var e = h[f];
        if (e) {
          if (a.$IsPlainObject(d)) d = j(d, c || f == "e");
          else if (c)
            if (a.$IsNumeric(d)) d = o[d];
          b[e] = d
        }
      });
      return b
    }

    function k(e, c) {
      var b = [],
        d = a.$Children(e);
      a.$Each(d, function (d) {
        var h = a.$AttributeEx(d, "u") == "caption";
        if (h) {
          var e = a.$AttributeEx(d, "t"),
            g = i[a.$ParseInt(e)] || i[e],
            f = {
              $Elmt: d,
              $Transition: g
            };
          b.push(f)
        }
        if (c < 5) b = b.concat(k(d, c + 1))
      });
      return b
    }

    function r(c, e, b) {
      a.$Each(e, function (f) {
        var e = j(f),
          g = {
            $Easing: a.$FormatEasings(e.$Easing),
            $Setter: a.$StyleSetterEx(),
            $OriginalWidth: b.$Width,
            $OriginalHeight: b.$Height
          },
          h = new l(f.b, f.d, g, c, b, e);
        d.$Combine(h);
        b = a.$AddDif(b, e)
      });
      return b
    }

    function q(b) {
      a.$Each(b, function (e) {
        var b = e.$Elmt,
          d = a.$CssWidth(b),
          c = a.$CssHeight(b),
          f = {
            $Left: a.$CssLeft(b),
            $Top: a.$CssTop(b),
            $Opacity: 1,
            $ZIndex: a.$CssZIndex(b) || 0,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $ScaleX: 1,
            $ScaleY: 1,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0,
            $Width: d,
            $Height: c,
            $Clip: {
              $Top: 0,
              $Right: d,
              $Bottom: c,
              $Left: 0
            }
          };
        r(b, e.$Transition, f)
      })
    }

    function t(g, f, h) {
      var e = g.b - f;
      if (e) {
        var a = new l(f, e);
        a.$Combine(d, c);
        a.$Shift(h);
        b.$Combine(a)
      }
      b.$Expand(g.d);
      return e
    }

    function s(f) {
      var c = d.$GetPosition_OuterBegin(),
        e = 0;
      a.$Each(f, function (d, f) {
        d = a.$Extend({
          d: m
        }, d);
        t(d, c, e);
        c = d.b;
        e += d.d;
        if (!f || d.t == 2) {
          b.$IdleBegin = c;
          b.$IdleEnd = c + d.d
        }
      })
    }
    b.$Revert = function () {
      b.$GoToPosition(-1, c)
    };
    o = [f.$Swing, f.$Linear, f.$InQuad, f.$OutQuad, f.$InOutQuad, f.$InCubic, f.$OutCubic, f.$InOutCubic, f.$InQuart, f.$OutQuart, f.$InOutQuart, f.$InQuint, f.$OutQuint, f.$InOutQuint, f.$InSine, f.$OutSine, f.$InOutSine, f.$InExpo, f.$OutExpo, f.$InOutExpo, f.$InCirc, f.$OutCirc, f.$InOutCirc, f.$InElastic, f.$OutElastic, f.$InOutElastic, f.$InBack, f.$OutBack, f.$InOutBack, f.$InBounce, f.$OutBounce, f.$InOutBounce, f.$GoBack, f.$InWave, f.$OutWave, f.$OutJump, f.$InJump];
    var u = {
      $Top: "y",
      $Left: "x",
      $Bottom: "m",
      $Right: "t",
      $Rotate: "r",
      $RotateX: "rX",
      $RotateY: "rY",
      $ScaleX: "sX",
      $ScaleY: "sY",
      $TranslateX: "tX",
      $TranslateY: "tY",
      $TranslateZ: "tZ",
      $SkewX: "kX",
      $SkewY: "kY",
      $Opacity: "o",
      $Easing: "e",
      $ZIndex: "i",
      $Clip: "c"
    };
    a.$Each(u, function (b, a) {
      h[b] = a
    });
    q(k(n, 1));
    d.$GoToPosition(-1);
    var p = g.$Breaks || [],
      e = [].concat(p[a.$ParseInt(a.$AttributeEx(n, "b"))] || []);
    e.push({
      b: d.$GetPosition_OuterEnd(),
      d: e.length ? 0 : m
    });
    s(e);
    b.$GoToPosition(-1)
  }
})(window, document, Math, null, true, false)