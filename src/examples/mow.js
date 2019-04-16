! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.mow = e()
}("undefined" != typeof self ? self : this, function () {
  "use strict";

  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function d(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function r(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && o(t, e)
  }

  function p(t) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function o(t, e) {
    return (o = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function s(t, e, n) {
    return (s = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
      } catch (t) {
        return !1
      }
    }() ? Reflect.construct : function (t, e, n) {
      var i = [null];
      i.push.apply(i, e);
      var r = new(Function.bind.apply(t, i));
      return n && o(r, n.prototype), r
    }).apply(null, arguments)
  }

  function m(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function v(t, e) {
    return !e || "object" != typeof e && "function" != typeof e ? m(t) : e
  }

  function c(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t
    }(t) || function (t, e) {
      var n = [],
        i = !0,
        r = !1,
        o = void 0;
      try {
        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
      } catch (t) {
        r = !0, o = t
      } finally {
        try {
          i || null == s.return || s.return()
        } finally {
          if (r) throw o
        }
      }
      return n
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var e = new WeakMap,
    u = function () {
      function t() {
        d(this, t), e.set(this, {
          events: {}
        })
      }
      return r(t, [{
        key: "on",
        value: function (t, e) {
          if (void 0 === e) throw new Error("You must provide a callback method.");
          if ("function" != typeof e) throw new Error("Listener must be a function");
          return this.events[t] = this.events[t] || [], this.events[t].push(e), this
        }
      }, {
        key: "off",
        value: function (t, n) {
          if (void 0 === this.events[t]) throw new Error("Event not found : ".concat(t));
          var i = this.events[t],
            e = function () {
              delete this.events[t]
            }.bind(this);
          return "function" == typeof n ? (i.forEach(function (t, e) {
            t === n && i.splice(e, 1)
          }), 0 === i.length && e()) : e(), this
        }
      }, {
        key: "trigger",
        value: function (t) {
          for (var e = this, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
          if (void 0 === t) throw new Error("You must provide an event to trigger");
          var o = this.events[t];
          return void 0 !== o && (o = o.slice(0)).forEach(function (t) {
            t.apply(e, i)
          }), this
        }
      }, {
        key: "emit",
        value: function () {
          return this.trigger.apply(this, arguments)
        }
      }, {
        key: "events",
        get: function () {
          return e.get(this).events
        }
      }]), t
    }(),
    l = new Map,
    f = function (t) {
      function e() {
        return d(this, e), v(this, p(e).call(this))
      }
      return a(e, u), r(e, [{
        key: "__initialized__",
        value: function (t) {
          var d = this,
            e = l.get(t || this.constructor);
          return e && e.forEach(function (t) {
            var e = t.name,
              n = t.params,
              i = void 0 === n ? {} : n,
              r = t.install,
              o = void 0 === r ? function () {} : r,
              a = t.event,
              s = void 0 === a ? {} : a,
              c = t.method,
              u = void 0 === c ? {} : c,
              l = Object.assign(i, d.options),
              f = "function" == typeof s ? s.call(d, l, t, d.constructor) : s;
            for (var h in f) d.on("".concat(e, ".").concat(h), f[h].bind(d));
            t.method = "function" == typeof u ? u.call(d, l, t, d.constructor) : u, o.call(d, l, t, d.constructor)
          }), this
        }
      }], [{
        key: "addPlugin",
        value: function (t) {
          var e = l.get(this),
            n = t.name;
          if ((l.get(this) || []).filter(function (t) {
              return t.name == n
            }).length) throw new Error("相同名字的plugin已存在，请修改成其他名字");
          l.set(this, e ? e.concat(t) : [t])
        }
      }, {
        key: "getPlugins",
        value: function () {
          return l.get(this)
        }
      }]), e
    }(),
    h = function () {
      function i() {
        var n = this,
          t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
        d(this, i);
        var e = Array.from(t);
        e.forEach(function (t, e) {
          n[e] = t
        }), this.length = e.length
      }
      return r(i, [{
        key: "each",
        value: function (t) {
          if (!t) return this;
          for (var e = 0; e < this.length; e++)
            if (!1 === t.call(this[e], e, this[e])) return this;
          return this
        }
      }, {
        key: "eq",
        value: function (t) {
          if (void 0 === t) return this;
          var e = this.length,
            n = null;
          return t < 0 ? n = e + t : t < e && (n = t), y(this[n])
        }
      }]), i
    }(),
    y = function (t, e) {
      if (t instanceof h && !e) return t;
      var n = [];
      if ("string" == typeof t)
        if ((t = t.trim()).startsWith("<") && t.endsWith(">")) {
          var i = "div",
            r = t.match(/^<[a-z]+/i);
          switch (r && (r = r[0]), r.slice(1)) {
            case "li":
              i = "ul";
              break;
            case "tr":
              i = "tbody";
              break;
            case "td":
            case "th":
              i = "tr";
              break;
            case "tbody":
              i = "table";
              break;
            case "option":
              i = "select";
              break;
            default:
              i = "div"
          }
          var o = document.createElement(i);
          o.innerHTML = t, n = o.childNodes
        } else n = document.querySelectorAll(t) || document.getElementById(t) || [];
      else t.nodeType || t === document || t === window ? n.push(t) : t.length && (n = t);
      return new h(n)
    };
  y.fn = h.prototype, y.Class = h;
  var t = Object.freeze({
    css: function (t, e) {
      var r = {};
      return "object" == n(t) ? r = t : "string" == typeof e ? r[t] = e : "number" == typeof e && (r[t] = e + "px"), this.each(function (t, e) {
        var n, i = e.style.cssText ? function (t) {
          for (var e, n = /([\w-]*)\s*:\s*([^;]*)/g, i = {}; e = n.exec(t);) i[e[1]] = e[2].trim();
          return i
        }(e.style.cssText) : {};
        e.style.cssText = (n = Object.assign(i, r), Object.entries(n).reduce(function (t, e) {
          var n = c(e, 2),
            i = n[0],
            r = n[1];
          return i = i.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase()
          }), "".concat(t).concat(i, ":").concat(r, ";")
        }, ""))
      })
    },
    on: function (e, i, r) {
      return "function" == typeof i && (r = i, i = null), this.each(function (t, n) {
        n.addEventListener(e, function (t) {
          var e = t.target;
          if (i)
            for (; e != n;) e.matches(i) && r.call(e, t), e = e.parentNode;
          else r.call(n, t)
        })
      })
    },
    find: function (n) {
      var i = [];
      return this.each(function (t, e) {
        i = i.concat(Array.from(e.querySelectorAll(n) || []))
      }), y(i)
    },
    hasClass: function (t) {
      return !!this[0] && this[0].classList.contains(t)
    },
    addClass: function (t) {
      if (!t) return this;
      var n = t.split(" ");
      return this.each(function (t, e) {
        e.classList.add.apply(e.classList, n)
      })
    },
    removeClass: function (t) {
      if (!t) return this;
      var n = t.split(" ");
      return this.each(function (t, e) {
        e.classList.remove.apply(e.classList, n)
      })
    },
    toggleClass: function (t) {
      if (!t) return this;
      var n = t.split(" ");
      return this.each(function (t, e) {
        e.classList.toggle.remove(e.classList, n)
      })
    },
    transform: function (n) {
      return this.each(function (t, e) {
        e.style.webkitTransform = e.style.transform = n
      }), this
    },
    transition: function (n) {
      return "string" != typeof n && (n = "".concat(n, "ms")), this.each(function (t, e) {
        e.style.webkitTransitionDuration = e.style.transitionDuration = n
      }), this
    }
  });

  function g(t) {
    return "object" === n(t) && null !== t && t.constructor && t.constructor === Object
  }
  var w = Object.freeze({
    argsFixed: function (t) {
      var e = t;
      t.nodeType ? e = {
        el: t
      } : "string" == typeof t && (e = {
        el: document.querySelector(t) || document.getElementById(t)
      });
      for (var n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
      i.unshift(e), i.forEach(function (t) {
        if (!g(t)) throw new Error("后续参数只能为Object")
      });
      var o = Object.assign.apply(null, i);
      if (!o.el) throw new Error("缺少必要的node对象:el");
      return {
        defaults: function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.assign(t, o)
        }
      }
    },
    isObject: g,
    isArray: function (t) {
      return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
    },
    requestAnimationFrame: function (t) {
      var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
      return e ? e(t) : window.setTimeout(t, 1e3 / 60)
    },
    cancelAnimationFrame: function (t) {
      var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
      return e ? e(t) : window.clearTimeout(t)
    },
    debounce: function (i, r, o) {
      var a;

      function t() {
        var t = this,
          e = arguments,
          n = o && !a;
        clearTimeout(a), a = setTimeout(function () {
          a = null, o || i.apply(t, e)
        }, r), n && i.apply(t, e)
      }
      return t.cancel = function () {
        clearTimeout(a), a = null
      }, t
    },
    extension: function (t) {
      return t.split(/\#|\?/)[0].split(".").pop().trim().toLowerCase()
    },
    loadImg: function (r, t) {
      r = [].concat(r);
      var o = [],
        a = 0;
      return new Promise(function (n) {
        var i = function (t, e) {
          o[t] = e, ++a == r.length && n(o)
        };
        r.forEach(function (t, e) {
          var n = new Image;
          n.onload = function () {
            i(e, {
              width: n.width,
              height: n.height,
              img: n
            })
          }, n.onerror = function (t) {
            i(e, {
              error: t,
              img: n
            })
          }, n.src = t
        })
      })
    }
  });
  [t].forEach(function (e) {
    Object.keys(e).forEach(function (t) {
      y.fn[t] = e[t]
    })
  }), Object.keys(w).forEach(function (t) {
    y[t] = w[t]
  });
  var b = function (t) {
      function o() {
        var t, e;
        d(this, o);
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        return (e = v(this, (t = p(o)).call.apply(t, [this].concat(i)))).__initialized__(o), e
      }
      return a(o, f), r(o, [{
        key: "show",
        value: function (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document.body,
            n = getComputedStyle(t),
            i = parseInt(n.zIndex);
          return this.el = document.createElement("div"), y(this.el).css({
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,.8)",
            zIndex: i ? i - 1 : "auto"
          }), e.appendChild(this.el), this.emit("show"), this
        }
      }, {
        key: "hide",
        value: function () {
          return this.el.parentNode.removeChild(this.el), this.emit("hide"), this
        }
      }]), o
    }(),
    x = function (t) {
      function o() {
        var t, e;
        d(this, o);
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        if ((e = v(this, (t = p(o)).call.apply(t, [this].concat(i)))).options = y.argsFixed.apply(y, i).defaults(), e.dialog = e.options.el, !e.dialog) throw new Error("无效的对话框");
        return e.style = Object.assign({}, {
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "none",
          zIndex: 9999
        }, e.options.style || {}), y(e.dialog).css(e.style), e.__initialized__(o), e[e.options.show ? "show" : "hide"](), e
      }
      return a(o, f), r(o, [{
        key: "show",
        value: function () {
          return y(this.dialog).css("display", "block"), this.emit("show", this.dialog), this
        }
      }, {
        key: "hide",
        value: function () {
          return y(this.dialog).css("display", "none"), this.emit("hide", this.dialog), this
        }
      }, {
        key: "close",
        value: function () {
          return this.hide()
        }
      }]), o
    }();

  function k(t) {
    return t
  }

  function I(t) {
    return --t * t * t + 1
  }

  function O(t) {
    return 1 - A(1 - t)
  }

  function A(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }
  x.addPlugin({
    name: "action",
    install: function () {
      y(this.dialog).on("click", "[mow-dialog-close]", this.hide.bind(this))
    }
  }), x.addPlugin({
    name: "shortcut",
    install: function () {
      var e = this;
      y(document).on("keyup", function (t) {
        "escape" == t.key.toLowerCase() && e.hide()
      })
    }
  }), x.addPlugin({
    name: "mask",
    params: {
      mask: !0,
      maskClickHide: !1
    },
    install: function (e) {
      var n = this;
      e.mask && this.on("show", function (t) {
        n.mask = (new b).show(t), e.maskClickHide && n.mask.el.addEventListener("click", n.hide.bind(n), !1)
      }).on("hide", function () {
        n.mask && n.mask.hide()
      })
    }
  });
  var M = Object.freeze({
      linear: k,
      quadraticIn: function (t) {
        return t * t
      },
      quadraticOut: function (t) {
        return t * (2 - t)
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
      },
      cubicIn: function (t) {
        return t * t * t
      },
      cubicOut: I,
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      },
      quarticIn: function (t) {
        return t * t * t * t
      },
      quarticOut: function (t) {
        return 1 - --t * t * t * t
      },
      quarticInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
      },
      quinticIn: function (t) {
        return t * t * t * t * t
      },
      quinticOut: function (t) {
        return --t * t * t * t * t + 1
      },
      quinticInOut: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
      },
      sinusoidalIn: function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
      },
      sinusoidalOut: function (t) {
        return Math.sin(t * Math.PI / 2)
      },
      sinusoidalInOut: function (t) {
        return .5 * (1 - Math.cos(Math.PI * t))
      },
      exponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1)
      },
      exponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
      },
      exponentialInOut: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
      },
      circularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t)
      },
      circularOut: function (t) {
        return Math.sqrt(1 - --t * t)
      },
      circularInOut: function (t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      },
      elasticIn: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
      },
      elasticOut: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
      },
      elasticInOut: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1
      },
      backIn: function (t) {
        return t * t * (2.70158 * t - 1.70158)
      },
      backOut: function (t) {
        return --t * t * (2.70158 * t + 1.70158) + 1
      },
      backInOut: function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
      },
      bounceIn: O,
      bounceOut: A,
      bounceInOut: function (t) {
        return t < .5 ? .5 * O(2 * t) : .5 * A(2 * t - 1) + .5
      }
    }),
    E = {
      effect: "linear",
      speed: 1e3,
      index: 0,
      direction: "x",
      spaceBetween: 0,
      ease: "linear"
    },
    P = {},
    z = function () {
      this.curPanel = this.panels.eq(this.index % this.panels.length), this.nextPanel = this.panels.eq((this.index + 1) % this.panels.length), this.prevPanel = this.panels.eq((this.index - 1) % this.panels.length), this.panels.removeClass("mow-slider-cur mow-slider-next mow-slider-prev"), this.curPanel.addClass("mow-slider-cur"), this.nextPanel.addClass("mow-slider-next"), this.prevPanel.addClass("mow-slider-prev")
    },
    C = function (t) {
      function h() {
        var t, n;
        d(this, h);
        for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
        (n = v(this, (t = p(h)).call.apply(t, [this].concat(i)))).options = y.argsFixed.apply(y, i).defaults(E);
        var o = y(n.options.el).find(".mow-slider-container")[0];
        n.container = y(o || n.options.el), "y" == n.options.direction && n.container.addClass("mow-slider-container-y"), n.wrapper = y(n.container).find(".mow-slider-wrapper"), n.panels = y(n.wrapper).find(".mow-slider-panel"), n.options.spaceBetween && n.panels.each(function (t, e) {
          y(e).css("y" == n.options.direction ? "marginBottom" : "marginRight", n.options.spaceBetween)
        }), n.index = n.options.index, n.aid = null, z.call(m(m(n))), n.__initialized__(h), n.effect = P[n.options.effect] || {};
        var a = n.effect,
          s = a.event,
          c = void 0 === s ? {} : s,
          u = a.create,
          l = "function" == typeof c ? c.call(m(m(n)), options, plugin, n.constructor) : c;
        for (var f in l) n.on(f, l[f]);
        return u.call(m(m(n))), n
      }
      return a(h, f), r(h, [{
        key: "next",
        value: function () {
          return this.to(this.index + 1), this
        }
      }, {
        key: "prev",
        value: function () {
          return this.to(this.index - 1), this
        }
      }, {
        key: "to",
        value: function (t) {
          var i = this,
            r = M[this.options.ease] || k;
          if (this.index != t) {
            this.aid && y.cancelAnimationFrame(this.aid);
            var o = null,
              a = this.curPanel,
              s = this.index,
              c = t % this.panels.length;
            this.index = c, z.call(this), this.emit("beforechange", s, c, 0);
            this.aid = y.requestAnimationFrame(function t(e) {
              o || (o = e);
              var n = Math.min((e - o) / i.options.speed, 1);
              n < 1 ? (i.aid = y.requestAnimationFrame(t), i.emit("playing", s, c, n)) : i.emit("afterchange", s, c, n), i.effect.methods.setTranslate.call(i, a, i.curPanel, r(n), n)
            })
          }
          return this
        }
      }], [{
        key: "addEffect",
        value: function (t) {
          var e = t.name,
            n = t.create;
          if (!e || !n) throw new Error("效果插件缺少必要的配置参数");
          P[e] = t
        }
      }]), h
    }();

  function _(t, e) {
    void 0 === e && (e = {});
    var n = e.insertAt;
    if (t && "undefined" != typeof document) {
      var i = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
      r.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
    }
  }
  _(".mow-slider-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1; }\n  .mow-slider-container-y .mow-slider-wrapper {\n    flex-direction: column; }\n\n.mow-slider-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box; }\n\n.mow-slider-panel {\n  flex-shrink: 0;\n  height: 100%;\n  position: relative;\n  transition-property: transform; }\n");
  _(".mow-slider-effect-slide .mow-slider-panel {\n  width: 100%; }\n"), C.addEffect({
    name: "slide",
    params: {},
    private: {},
    create: function () {
      this.container.css({
        height: this.panels[0].offsetHeight + "px"
      }).addClass("mow-slider-effect-slide")
    },
    methods: {
      setTranslate: function (t, e, n) {
        if ("x" == this.options.direction) {
          var i = t[0].offsetLeft - e[0].offsetLeft,
            r = -t[0].offsetLeft;
          this.wrapper.transform("translateX(" + (r + i * n) + "px)")
        } else {
          var o = t[0].offsetTop - e[0].offsetTop,
            a = -t[0].offsetTop;
          this.wrapper.transform("translateY(" + (a + o * n) + "px)")
        }
      }
    }
  });
  _(".mow-slider-effect-fade .mow-slider-panel {\n  width: 100%;\n  opacity: 0;\n  pointer-events: none; }\n\n.mow-slider-effect-fade .mow-slider-cur {\n  pointer-events: auto;\n  opacity: 1; }\n"), C.addEffect({
    name: "fade",
    params: {},
    create: function () {
      var n = this;
      this.container.css({
        height: this.panels[0].offsetHeight + "px"
      }).addClass("mow-slider-effect-fade"), this.panels.each(function (t, e) {
        y(e).transform("translate" + n.options.direction.toUpperCase() + "(-" + 100 * t + "%)")
      })
    },
    methods: {
      setTranslate: function (t, e, n) {
        e.css({
          opacity: n
        }), t.css({
          opacity: 1 - n
        })
      }
    }
  });
  _(".mow-slider-effect-flip {\n  perspective: 1500px;\n  overflow: visible; }\n  .mow-slider-effect-flip .mow-slider-wrapper, .mow-slider-effect-flip .mow-slider-panel {\n    transform-style: preserve-3d; }\n  .mow-slider-effect-flip .mow-slider-panel {\n    backface-visibility: hidden;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    transform: rotateY(-180deg);\n    z-index: 1; }\n  .mow-slider-effect-flip .mow-slider-cur {\n    transform: rotateY(0deg); }\n"), C.addEffect({
    name: "flip",
    params: {},
    create: function () {
      this.container.css({
        height: this.panels[0].offsetHeight + "px"
      }).addClass("mow-slider-effect-flip")
    },
    methods: {
      setTranslate: function (t, e, n) {
        t.transform("rotate" + this.options.direction.toUpperCase() + "(-" + 180 * n + "deg)"), e.transform("rotate" + this.options.direction.toUpperCase() + "(-" + 180 * (1 - n) + "deg)")
      }
    }
  }), C.addPlugin({
    name: "autoplay",
    params: {
      autoplay: 1e3
    },
    event: function (e, t) {
      var n = null;
      return {
        play: function () {
          var t = this;
          !n && e.autoplay && (n = setInterval(function () {
            t.next()
          }, e.autoplay))
        },
        stop: function () {
          clearInterval(n), n = null
        }
      }
    },
    install: function (t, e) {
      var n = this;
      if (0 < t.autoplay) {
        var i = function () {
            n.emit("".concat(e.name, ".play"))
          },
          r = {
            enter: y.debounce(function () {
              n.emit("".concat(e.name, ".stop"))
            }, 100),
            leave: y.debounce(i, 100)
          };
        this.container.on("mouseenter", r.enter).on("mouseleave", r.leave), i()
      }
    }
  });
  var q = "ontouchstart" in window,
    T = {
      start: q ? "touchstart" : "mousedown",
      move: q ? "touchmove" : "mousemove",
      end: q ? "touchend" : "mouseup"
    };
  C.addPlugin({
    name: "touchevent",
    install: function (n, t) {
      var i = this,
        r = null;
      this.container.on(T.start, function (t) {
        t.preventDefault();
        var e = t.touches ? t.touches[0] : t;
        r = {
          x: e.pageX,
          y: e.pageY
        }
      }), y(document).on(T.move, function (t) {
        if (r) {
          var e = (t.touches ? t.touches[0] : t)["x" == n.direction ? "pageX" : "pageY"] - r[n.direction];
          i.effect.methods.setTranslate.call(i, i.curPanel, 0 < e ? i.nextPanel : i.prevPanel)
        }
      }), y(document).on(T.end, function (t) {
        r = null
      })
    }
  });
  var j = function (t) {
      function o() {
        var t, e;
        d(this, o);
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        return (e = v(this, (t = p(o)).call.apply(t, [this].concat(i)))).__initialized__(o), e
      }
      return a(o, C), o
    }(),
    L = {
      el: null,
      background: null,
      foreground: null,
      duration: 8e3,
      index: 0,
      prizes: [],
      disabled: !1
    },
    F = function (t) {
      function c() {
        var t, e;
        d(this, c);
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        if ((e = v(this, (t = p(c)).call.apply(t, [this].concat(i)))).options = y.argsFixed.apply(y, i).defaults(L), !y.isArray(e.options.prizes)) {
          var o = parseInt(e.options.prizes);
          if (e.options.prizes = [], !isNaN(o))
            for (var a = 360 / o, s = 0; s < o; s++) e.options.prizes.push(s * a)
        }
        if (!e.options.prizes.length) throw new Error("未配置有效的prizes");
        return e.canvas = document.createElement("canvas"), y(e.options.el).addClass("mow-lottery-container"), e.context = e.canvas.getContext("2d"), y.loadImg([e.options.background, e.options.foreground]).then(function (t) {
          t.every(function (t) {
            return !t.error
          }) && (e.canvas.width = t[0].width, e.canvas.height = t[0].height, e.background = t[0].img, e.foreground = t[1].img, e.options.el.appendChild(e.canvas), e.canvas.addEventListener("mousedown", function (t) {
            console.log(t.clientX, t.clientY)
          }, !1), e.__initialized__(c))
        }), e
      }
      return a(c, f), r(c, [{
        key: "play",
        value: function (t) {
          return this.options.disabled ? this.emit("disabled") : this.emit("play", t), this
        }
      }, {
        key: "enable",
        value: function () {
          return this.options.disabled = !1, this
        }
      }, {
        key: "disable",
        value: function () {
          return this.options.disabled = !0, this
        }
      }]), c
    }();
  _(".mow-lottery-container {\n  font-size: 0; }\n  .mow-lottery-container canvas {\n    width: 100%; }\n");
  F.addPlugin({
    name: "turntable",
    method: {
      setAngle: function (t) {
        this.context.save(), this.context.translate(this.canvas.width / 2, this.canvas.height / 2), this.context.save(), this.context.rotate(t * Math.PI / 180), this.context.drawImage(this.background, -this.background.width / 2, -this.background.height / 2), this.context.restore(), this.context.drawImage(this.foreground, -this.foreground.width / 2, -this.foreground.height / 2), this.context.restore()
      }
    },
    install: function (n, s) {
      var c = this;
      n.prizes.every(function (t) {
        return /^[0-9.]+$/.test(t)
      }) && (n.type = s.name, s.method.setAngle.call(this, n.prizes[n.index]), this.on("play", function (i) {
        var t, e, r = 360 * (e = 10 - (t = 8) + 1, Math.floor(Math.random() * e + t)) + n.prizes[i],
          o = M[n.ease] || I,
          a = null;
        c.aid = y.requestAnimationFrame(function t(e) {
          a || (a = e);
          var n = Math.min((e - a) / c.options.duration, 1);
          n < 1 ? c.aid = y.requestAnimationFrame(t) : c.emit("end", c.options.index = i), s.method.setAngle.call(c, 360 - o(n) * r % 360)
        })
      }))
    }
  });
  F.addPlugin({
    name: "marquee",
    method: {
      setPrize: function (t) {
        t %= this.options.prizes.length;
        var e = this.options.prizes[t].split("_");
        this.context.save(), this.context.drawImage(this.background, 0, 0), this.context.drawImage(this.foreground, e[0], e[1]), this.context.restore()
      }
    },
    install: function (n, s) {
      var c = this;
      n.prizes.every(function (t) {
        return /^[0-9.]+_[0-9.]+$/.test(t)
      }) && (n.type = s.name, s.method.setPrize.call(this, 2), this.on("play", function (i) {
        var t, e, r = (e = 10 - (t = 8) + 1, Math.floor(Math.random() * e + t)) * n.prizes.length + i,
          o = M[n.ease] || I,
          a = null;
        c.aid = y.requestAnimationFrame(function t(e) {
          a || (a = e);
          var n = Math.min((e - a) / c.options.duration, 1);
          n < 1 ? c.aid = y.requestAnimationFrame(t) : c.emit("end", c.options.index = i), s.method.setPrize.call(c, Math.round(o(n) * r))
        })
      }))
    }
  });
  var S = {
      MaskLayer: b,
      Dialog: x,
      Slider: C,
      Swiper: j,
      Lottery: F
    },
    B = function (i) {
      S[i.replace(/^[A-Z]/, function (t) {
        return t.toLowerCase()
      })] = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return s(S[i], e)
      }
    };
  for (var R in S) B(R);
  return S
});
//# sourceMappingURL=mow.js.map