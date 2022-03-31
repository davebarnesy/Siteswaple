this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
    "use strict";

    function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

    function s(e, a) { if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function") }

    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }

    function o(e, a, s) { return a && t(e.prototype, a), s && t(e, s), e }

    function n(e, a, s) { return a in e ? Object.defineProperty(e, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = s, e }

    function r(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), a && l(e, a)
    }

    function i(e) { return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

    function l(e, a) { return (l = Object.setPrototypeOf || function(e, a) { return e.__proto__ = a, e })(e, a) }

    function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }

    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new(Function.bind.apply(e, t));
            return s && l(o, s.prototype), o
        }).apply(null, arguments)
    }

    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function(e) {
            if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
            var s;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e)) return a.get(e);
                a.set(e, t)
            }

            function t() { return u(e, arguments, i(this).constructor) }
            return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), l(t, e)
        })(e)
    }

    function p(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

    function m(e, a) { return !a || "object" != typeof a && "function" != typeof a ? p(e) : a }

    function h(e) {
        var a = d();
        return function() {
            var s, t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else s = t.apply(this, arguments);
            return m(this, s)
        }
    }

    function y(e, a) {
        return function(e) { if (Array.isArray(e)) return e }(e) || function(e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s) return;
            var t, o, n = [],
                r = !0,
                i = !1;
            try { for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } }
            return n
        }(e, a) || b(e, a) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
    }

    function g(e) { return function(e) { if (Array.isArray(e)) return f(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || b(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function b(e, a) { if (e) { if ("string" == typeof e) return f(e, a); var s = Object.prototype.toString.call(e).slice(8, -1); return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0 } }

    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({ mode: "open" }), e }
        return o(t, [{ key: "last", set: function(e) { this._last = e } }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) { "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", { bubbles: !0, composed: !0 }))), e._render() })), this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letter":
                        if (s === a) break;
                        var t = "null" === s ? "" : s;
                        this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                        break;
                    case "evaluation":
                        if (!s) break;
                        this._state = s;
                        break;
                    case "reveal":
                        this._animation = "flip-in", this._reveal = !0
                }
                this._render()
            }
        }, { key: "_render", value: function() { this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation)) } }], [{ key: "observedAttributes", get: function() { return ["letter", "evaluation", "reveal"] } }]), t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e._letters = "", e._evaluation = [], e._length, e }
        return o(t, [{
            key: "evaluation",
            get: function() { return this._evaluation },
            set: function(e) {
                var a = this;
                this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) { e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() { e.setAttribute("reveal", "") }), 300 * s) }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                        var s = document.createElement("game-tile"),
                            t = e._letters[a];
                        (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() { s.setAttribute("reveal", "") }), 100 * a));
                        a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                    }, s = 0; s < this._length; s++) a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) { "Shake" === a.animationName && e.removeAttribute("invalid") }))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letters":
                        this._letters = s || "";
                        break;
                    case "length":
                        this._length = parseInt(s, 10);
                        break;
                    case "win":
                        if (null === s) { this.$tiles.forEach((function(e) { e.classList.remove("win") })); break }
                        this.$tiles.forEach((function(e, a) { e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms") }))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }))
            }
        }], [{ key: "observedAttributes", get: function() { return ["letters", "length", "invalid", "win"] } }]), t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme",
        S = "colorBlindTheme",
        _ = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({ mode: "open" });
                var o = JSON.parse(window.localStorage.getItem(j)),
                    r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                    i = JSON.parse(window.localStorage.getItem(S));
                return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
            }
            return o(t, [{
                key: "setDarkTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
                }
            }, {
                key: "setColorBlindTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            o = s.checked;
                        switch (t) {
                            case "dark-theme":
                                return void e.setDarkTheme(o);
                            case "color-blind-theme":
                                return void e.setColorBlindTheme(o)
                        }
                    }))
                }
            }]), t
        }(c(HTMLElement));

    function q(e, a) { return e === a || e != e && a != a }

    function E(e, a) {
        for (var s = e.length; s--;)
            if (q(e[s][0], a)) return s;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;

    function C(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    C.prototype.clear = function() { this.__data__ = [], this.size = 0 }, C.prototype.delete = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
    }, C.prototype.get = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }, C.prototype.has = function(e) { return E(this.__data__, e) > -1 }, C.prototype.set = function(e, a) {
        var s = this.__data__,
            t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
    };
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
        T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
        I = L || T || Function("return this")(),
        M = I.Symbol,
        O = Object.prototype,
        R = O.hasOwnProperty,
        P = O.toString,
        $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;

    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
            var a = R.call(e, $),
                s = e[$];
            try { e[$] = void 0; var t = !0 } catch (e) {}
            var o = P.call(e);
            return t && (a ? e[$] = s : delete e[$]), o
        }(e) : function(e) { return H.call(e) }(e)
    }

    function G(e) { var s = a(e); return null != e && ("object" == s || "function" == s) }

    function B(e) { if (!G(e)) return !1; var a = D(e); return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a }
    var F, W = I["__core-js_shared__"],
        Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
        X = Function.prototype,
        V = Object.prototype,
        K = X.toString,
        Q = V.hasOwnProperty,
        Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ee(e) { return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) { if (null != e) { try { return J.call(e) } catch (e) {} try { return e + "" } catch (e) {} } return "" }(e)); var a }

    function ae(e, a) { var s = function(e, a) { return null == e ? void 0 : e[a] }(e, a); return ee(s) ? s : void 0 }
    var se = ae(I, "Map"),
        te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;

    function re(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }

    function ie(e, s) { var t, o, n = e.__data__; return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map }

    function le(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() { this.__data__ = te ? te(null) : {}, this.size = 0 }, re.prototype.delete = function(e) { var a = this.has(e) && delete this.__data__[e]; return this.size -= a ? 1 : 0, a }, re.prototype.get = function(e) { var a = this.__data__; if (te) { var s = a[e]; return "__lodash_hash_undefined__" === s ? void 0 : s } return oe.call(a, e) ? a[e] : void 0 }, re.prototype.has = function(e) { var a = this.__data__; return te ? void 0 !== a[e] : ne.call(a, e) }, re.prototype.set = function(e, a) { var s = this.__data__; return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this }, le.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new re, map: new(se || C), string: new re } }, le.prototype.delete = function(e) { var a = ie(this, e).delete(e); return this.size -= a ? 1 : 0, a }, le.prototype.get = function(e) { return ie(this, e).get(e) }, le.prototype.has = function(e) { return ie(this, e).has(e) }, le.prototype.set = function(e, a) {
        var s = ie(this, e),
            t = s.size;
        return s.set(e, a), this.size += s.size == t ? 0 : 1, this
    };

    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }
    de.prototype.clear = function() { this.__data__ = new C, this.size = 0 }, de.prototype.delete = function(e) {
        var a = this.__data__,
            s = a.delete(e);
        return this.size = a.size, s
    }, de.prototype.get = function(e) { return this.__data__.get(e) }, de.prototype.has = function(e) { return this.__data__.has(e) }, de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a), this.size = s.size, this
    };
    var ue = function() { try { var e = ae(Object, "defineProperty"); return e({}, "", {}), e } catch (e) {} }();

    function ce(e, a, s) { "__proto__" == a && ue ? ue(e, a, { configurable: !0, enumerable: !0, value: s, writable: !0 }) : e[a] = s }

    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }
    var me, he = function(e, a, s) { for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) { var i = n[me ? r : ++t]; if (!1 === a(o[i], i, o)) break } return e },
        ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0,
        fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) { var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer; return new e.constructor(o, e.byteOffset, e.length) }
    var we = Object.create,
        xe = function() {
            function e() {}
            return function(a) {
                if (!G(a)) return {};
                if (we) return we(a);
                e.prototype = a;
                var s = new e;
                return e.prototype = void 0, s
            }
        }();
    var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) { return ze(je(e)) }),
        _e = Object.prototype;

    function qe(e) { var a = e && e.constructor; return e === ("function" == typeof a && a.prototype || _e) }

    function Ee(e) { return null != e && "object" == a(e) }

    function Ae(e) { return Ee(e) && "[object Arguments]" == D(e) }
    var Ce = Object.prototype,
        Le = Ce.hasOwnProperty,
        Te = Ce.propertyIsEnumerable,
        Ie = Ae(function() { return arguments }()) ? Ae : function(e) { return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee") },
        Me = Array.isArray;

    function Oe(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991 }

    function Re(e) { return null != e && Oe(e.length) && !B(e) }
    var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        He = $e && $e.exports === Pe ? I.Buffer : void 0,
        Ne = (He ? He.isBuffer : void 0) || function() { return !1 },
        De = Function.prototype,
        Ge = Object.prototype,
        Be = De.toString,
        Fe = Ge.hasOwnProperty,
        We = Be.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Xe = Ue && Ue.exports === Je && L.process,
        Ve = function() { try { var e = Ue && Ue.require && Ue.require("util").types; return e || Xe && Xe.binding && Xe.binding("util") } catch (e) {} }(),
        Ke = Ve && Ve.isTypedArray,
        Qe = Ke ? function(e) { return function(a) { return e(a) } }(Ke) : function(e) { return Ee(e) && Oe(e.length) && !!Ye[D(e)] };

    function Ze(e, a) { if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a] }
    var ea = Object.prototype.hasOwnProperty;

    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/; //regex 

    function ta(e, s) { var t = a(e); return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s }
    var oa = Object.prototype.hasOwnProperty;

    function na(e, a) {
        var s = Me(e),
            t = !s && Ie(e),
            o = !s && !t && Ne(e),
            n = !s && !t && !o && Qe(e),
            r = s || t || o || n,
            i = r ? function(e, a) { for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s); return t }(e.length, String) : [],
            l = i.length;
        for (var d in e) !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
        if (!G(e)) return function(e) {
            var a = [];
            if (null != e)
                for (var s in Object(e)) a.push(s);
            return a
        }(e);
        var a = qe(e),
            s = [];
        for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }

    function la(e) { return Re(e) ? na(e, !0) : ia(e) }

    function da(e) {
        return function(e, a, s, t) {
            var o = !s;
            s || (s = {});
            for (var n = -1, r = a.length; ++n < r;) {
                var i = a[n],
                    l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }

    function ua(e, a, s, t, o, n, r) {
        var i = Ze(e, s),
            l = Ze(a, s),
            d = r.get(l);
        if (d) pe(e, s, d);
        else {
            var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
                p = void 0 === c;
            if (p) {
                var m = Me(l),
                    h = !m && Ne(l),
                    y = !m && !h && Qe(l);
                c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                    var s = -1,
                        t = e.length;
                    for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                    return a
                }(i) : h ? (p = !1, c = function(e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                        t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t
                }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) { if (!Ee(e) || "[object Object]" != D(e)) return !1; var a = Se(e); if (null === a) return !0; var s = Fe.call(a, "constructor") && a.constructor; return "function" == typeof s && s instanceof s && Be.call(s) == We }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) { return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e)) }(l))) : p = !1
            }
            p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
        }
    }

    function ca(e, a, s, t, o) {
        e !== a && he(a, (function(n, r) {
            if (o || (o = new de), G(n)) ua(e, a, r, s, ca, t, o);
            else {
                var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                void 0 === i && (i = n), pe(e, r, i)
            }
        }), la)
    }

    function pa(e) { return e }

    function ma(e, a, s) {
        switch (s.length) {
            case 0:
                return e.call(a);
            case 1:
                return e.call(a, s[0]);
            case 2:
                return e.call(a, s[0], s[1]);
            case 3:
                return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ue ? function(e, a) { return ue(e, "toString", { configurable: !0, enumerable: !1, value: (s = a, function() { return s }), writable: !0 }); var s } : pa,
        ga = Date.now;
    var ba = function(e) {
        var a = 0,
            s = 0;
        return function() {
            var t = ga(),
                o = 16 - (t - s);
            if (s = t, o > 0) { if (++a >= 800) return arguments[0] } else a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);

    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
                function() {
                    for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
                    o = -1;
                    for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                    return i[a] = s(r), ma(e, this, i)
                }
        }(e, a, pa), e + "")
    }
    var ka, va = (ka = function(e, a, s) { ca(e, a, s) }, fa((function(e, s) {
            var t = -1,
                o = s.length,
                n = o > 1 ? s[o - 1] : void 0,
                r = o > 2 ? s[2] : void 0;
            for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function(e, s, t) { if (!G(t)) return !1; var o = a(s); return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e) }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
                var i = s[t];
                i && ka(e, i, t, n)
            }
            return e
        }))),
        wa = "gameState",
        xa = { boardState: null, evaluations: null, rowIndex: null, solution: null, gameStatus: null, lastPlayedTs: null, lastCompletedTs: null, restoringFromLocalStorage: null, hardMode: !1 };

    function za() { var e = window.localStorage.getItem(wa) || JSON.stringify(xa); return JSON.parse(e) }

    function ja(e) { var a = za();! function(e) { window.localStorage.setItem(wa, JSON.stringify(e)) }(va(a, e)) }
    var Sa = document.createElement("template");
    Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Challenge Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n<section> <div class ="setting" > \n <div class = "text" > \n <div class = "title" > Facebook group </div>\n </div > \n <div class = "control" > \n  <a href = "https://www.facebook.com/groups/689305618784823" title = "Siteswaple on Facebook" target="_blank"> Here </a>\n </div>\n </div>\n </section>\n\n <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Siteswap explorer</div> \n </div>\n       <div class="control">\n          <a href="https://siteswapexplorer.com" title="Siteswap explorer" target=" _blank">Here</a>\n     </div>\n      </div>\n    </section>\n <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Github repo</div> \n </div>\n       <div class="control">\n          <a href="https://github.com/davebarnesy/Siteswaple" title="Code on github" target=" _blank">Here</a>\n     </div>\n      </div>\n    </section>\n <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Forked from  </div> <div class ="control">\n <a href="https://avipars.github.io/WordleOSS/index.html?utm_source=ghr">WordleOSS</a> | <a href="https://github.com/avipars/WordleOSS">Github</a> | <a href="https://www.facebook.com/groups/wordlefans/?ref=share">Group</a>  </div> \n </div>\n      </div>\n    </section>\n </div>\n  <div id="footnote">\n    <div>\n      <div id="copyright">Copyleft 2022. No Rights Reserved. </div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e, a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                    e.stopPropagation();
                    var s = e.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change", { bubbles: !0, composed: !0, detail: { name: t, checked: o, disabled: n } })), a.render()
                })), this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea, Aa = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() { a.classList.add("fade") }), this._duration), a.addEventListener("transitionend", (function(a) { e.parentNode.removeChild(e) }))
            }
        }]), t
    }(c(HTMLElement));

    // probably google tag manager - verify then remove
    function Ca() { dataLayer.push(arguments) }
    customElements.define("game-toast", Aa), window.dataLayer = window.dataLayer || [], Ca("js", new Date);
    Ca("config", "G-2SSGMHY3NP", {
        app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
        debug_mode: !1
    }); //word lists
    var La = ["49552", "22470", "55744", "96839", "94147", "38941", "42383", "58188", "92581", "11805", "47522", "22966", "28622", "95579", "53197", "73172", "73622", "55550", "75814", "74469", "25675", "95853", "97842", "84585", "23339", "51964", "62525", "92397", "79612", "89445", "22867", "41131", "52940", "36830", "64019", "88923", "78352", "85345", "45308", "13858", "52085", "84288", "52238", "89495", "64145", "36277", "74905", "89580", "45551", "61206", "28686", "61201", "94183", "97022", "77925", "13844", "92941", "89968", "58683", "96122", "18353", "44584", "89292", "16305", "20224", "14014", "51617", "50244", "14145", "56630", "53534", "20850", "90358", "55799", "86416", "41406", "19514", "90353", "69794", "69744", "34468", "46627", "57292", "57918", "39747", "96906", "96852", "79239", "13853", "34440", "24469", "88842", "41302", "50744", "84567", "99692", "75279", "80390", "40574", "39288", "57580", "84242", "35016", "56635", "61729", "17066", "95029", "12511", "69145", "84238", "84918", "96307", "20256", "42897", "64618", "67368", "18178", "55569", "25800", "84413", "11279", "79117", "53057", "23302", "38888", "44057", "80520", "29112", "31862", "63808", "84562", "67796", "44994", "31420", "80575", "49557", "28357", "27727", "16175", "77380", "75701", "44908", "11300", "36777", "47888", "25175", "31966", "84797", "81466", "29752", "31222", "11229", "84792", "20364", "25751", "64069", "31867", "99688", "44507", "41906", "40501", "63691", "91924", "67728", "33022", "51405", "55514", "66729", "84445", "88428", "13808", "64555", "13074", "94453", "72380", "52535", "38572", "85228", "19064", "35895", "86920", "16314", "19000", "52035", "96631", "80818", "45641", "41622", "55168", "50055", "31362", "77466", "46686", "53552", "33423", "79455", "72222", "41802", "35778", "47333", "94949", "89792", "40641", "83586", "89738", "69708", "84783", "27830", "25111", "13173", "45128", "73401", "55708", "25855", "52288", "75616", "99507", "29789", "24662", "85778", "49539", "29252", "49057", "75355", "30791", "67278", "63029", "18574", "73127", "99002", "25120", "49908", "62291", "18579", "24207", "95178", "85070", "51414", "55005", "62278", "91802", "67566", "62368", "66701", "19550", "77777", "92577", "70364", "11206", "12363", "78384", "56469", "35241", "79400", "75869", "50005", "81335", "77961", "36817", "36812", "63696", "84283", "56612", "78924", "28956", "77367", "92338", "39567", "30291", "95691", "86830", "70864", "79955", "68196", "12345", "24617", "84468", "80223", "30570", "77461", "92392", "44692", "22312", "78177", "30273", "70774", "95303", "68844", "14249", "35011", "72966", "53007", "17395", "61251", "40191", "75675", "86281", "84733", "62773", "18344", "69514", "77385", "12895", "22380", "79112", "31272", "17728", "69500", "84297", "56617", "22286", "33478", "49507", "11814", "49683", "51130", "40858", "14244", "23901", "44084", "33531", "73924", "52733", "83996", "64703", "99999", "17895", "16670", "69019", "29450", "90696", "44647", "61314", "57517", "25170", "73636", "50014", "81862", "20201", "22961", "42838", "56252", "29969", "45623", "36281", "79464", "53994", "42973", "99633", "67070", "63399", "42392", "61751", "46406", "18506", "62061", "51252", "80570", "81835", "22835", "35796", "49692", "67313", "47581", "46357", "41834", "62070", "31911", "55140", "44552", "52783", "44499", "33072", "51257", "34017", "58444", "42027", "75224", "31335", "55069", "77772", "51419", "92022", "24630", "14569", "91672", "66756", "14668", "36330", "66369", "22731", "27470", "91339", "77222", "45006", "39968", "46857", "55208", "11611", "99552", "27362", "25305", "11724", "88086", "27380", "70661", "35890", "77966", "55753", "45844", "70675", "30223", "27281", "67318", "29400", "13029", "28456", "45141", "99953", "23929", "20616", "64163", "89440", "36380", "16120", "77786", "78474", "28384", "24789", "44403", "44999", "72475", "92423", "64744", "70274", "72880", "18308", "46334", "31281", "25251", "44147", "52297", "52242", "96686", "64064", "67395", "14118", "84012", "94499", "27475", "66620", "52913", "88027", "97978", "12791", "24180", "17520", "66350", "34963", "19253", "39292", "78401", "22722", "35318", "67818", "29950", "96807", "84247", "56289", "78122", "50140", "40051", "23857", "94692", "17845", "53499", "62818", "31736", "58949", "91839", "64749", "88397", "31411", "27722", "73474", "23424", "12070", "68853", "83946", "64253", "91451", "80778", "46929", "97536", "73352", "85723", "16774", "83536", "53142", "53188", "95344", "55195", "39242", "23839", "62223", "39783", "68178", "66166", "35520", "97892", "74252", "81475", "30246", "79257", "31385", "38536", "57247", "96636", "91686", "73686", "33383", "81362", "61661", "66319", "72830", "12840", "58903", "13146", "80566", "17723", "92491", "34418", "29469", "31970", "90141", "81330", "25625", "38928", "42581", "56450", "23834", "81925", "24252", "49458", "73681", "14113", "50064", "68641", "81411", "25805", "11661", "46127", "70224", "62016", "58084", "40001", "63556", "31231", "16279", "91834", "75305", "69640", "95641", "92586", "89530", "27222", "33928", "90178", "13628", "36961", "78839", "42941", "20300", "80796", "20206", "64208", "17363", "79252", "90524", "16350", "33941", "25161", "25724", "99539", "35075", "58138", "56112", "46401", "96302", "81227", "49584", "12318", "91389", "19258", "85025", "56185", "45191", "80741", "39585", "41672", "28636", "11779", "49052", "18029", "18074", "78334", "86317", "97996", "27272", "42333", "86772", "91302", "84945", "69569", "13894", "20229", "69000", "44534", "80061", "25814", "94697", "63128", "36911", "33338", "24685", "80241", "72231", "74162", "39738", "79135", "97446", "66805", "86277", "30020", "62363", "36222", "19749", "33973", "51207", "44633", "89017", "41677", "27772", "22367", "30773", "31781", "58453", "84062", "61756", "33946", "86722", "34733", "13178", "63006", "25774", "18808", "55244", "70814", "49142", "12796", "56739", "16616", "23401", "27920", "27862", "39517", "50069", "66170", "40146", "69055", "62728", "64294", "85246", "46852", "57562", "94057", "39297", "96924", "85773", "24239", "99449", "49958", "41339", "27817", "99589", "23636", "52963", "12570", "64055", "66111", "67813", "49147", "35291", "79900", "11729", "31777", "90024", "66274", "41631", "66229", "73406", "84512", "52292", "73429", "33536", "95623", "78686", "20675", "47478", "92072", "96974", "18349", "17241", "68623", "78429", "63051", "85746", "25229", "66251", "73672", "38946", "39080", "40623", "30575", "13678", "79752", "28884", "97392", "97941", "64113", "19505", "57297", "55613", "20279", "63506", "18696", "38342", "13673", "24450", "24955", "40691", "56707", "19758", "29464", "52742", "44007", "88946", "42086", "73889", "49453", "44453", "66625", "61670", "99697", "67241", "56257", "84747", "29135", "11850", "62791", "99453", "16869", "12075", "72385", "75850", "61305", "56130", "78884", "97928", "75319", "13123", "96429", "17566", "63353", "63579", "90574", "41889", "28924", "77781", "14758", "81722", "38446", "68141", "47572", "33392", "40646", "27925", "62066", "25364", "14208", "36312", "91906", "63641", "68506", "46834", "92923", "62778", "51919", "28802", "50050", "47086", "45529", "11355", "47423", "74914", "31812", "29905", "92383", "50749", "94007", "74739", "31731", "57968", "45074", "12340", "11701", "17511", "58638", "39512", "39562", "31722", "75201", "19055", "31772", "28974", "84788", "19294", "92978", "12868", "81281", "28852", "16161", "66814", "69645", "13191", "33581", "23136", "35818", "40006", "53584", "88333", "80723", "56919", "67561", "14299", "68349", "45123", "40579", "17570", "40079", "77835", "19695", "52080", "86367", "66611", "34080", "70729", "78672", "57512", "29257", "41901", "63574", "45858", "86286", "68399", "64203", "91627", "12395", "51612", "19163", "74784", "81781", "12813", "29707", "39085", "96627", "55163", "49903", "50663", "91622", "72420", "83897", "36862", "84067", "62723", "34288", "90074", "94552", "50500", "85566", "51202", "70256", "39580", "29914", "56900", "58403", "47392", "57738", "69550", "28951", "99534", "83347", "29419", "96802", "85020", "99638", "50145", "34580", "16666", "74400", "95358", "95074", "85741", "31416", "25819", "18141", "78456", "19190", "50690", "11201", "36772", "33496", "30368", "91884", "97522", "73302", "20756", "94589", "95858", "20111", "23951", "68353", "97838", "18691", "52012", "28406", "51789", "77885", "27961", "53494", "78406", "75706", "58953", "27885", "74789", "73677", "27781", "77277", "64258", "20305", "40696", "70869", "69749", "68803", "66175", "96131", "22777", "79130", "51469", "25116", "91929", "86916", "45678", "58089", "50019", "67791", "14258", "50703", "34738", "81731", "97581", "39030", "12575", "47883", "24257"],
        Ta = ["00505", "00514", "00519", "00550", "00555", "00564", "00569", "00613", "00618", "00640", "00645", "00663", "00668", "00690", "00695", "00703", "00708", "00744", "00749", "00753", "00758", "00794", "00799", "01112", "01117", "01130", "01135", "01162", "01167", "01180", "01185", "01202", "01207", "01234", "01239", "01252", "01257", "01284", "01289", "01400", "01405", "01414", "01419", "01450", "01455", "01464", "01469", "01612", "01617", "01630", "01635", "01662", "01667", "01680", "01685", "01702", "01707", "01734", "01739", "01752", "01757", "01784", "01789", "01900", "01905", "01914", "01919", "01950", "01955", "01964", "01969", "02012", "02017", "02030", "02035", "02062", "02067", "02080", "02085", "02233", "02238", "02242", "02247", "02283", "02288", "02292", "02297", "02413", "02418", "02440", "02445", "02463", "02468", "02490", "02495", "02512", "02517", "02530", "02535", "02562", "02567", "02580", "02585", "02733", "02738", "02742", "02747", "02783", "02788", "02792", "02797", "02913", "02918", "02940", "02945", "02963", "02968", "02990", "02995", "03002", "03007", "03034", "03039", "03052", "03057", "03084", "03089", "03133", "03138", "03142", "03147", "03183", "03188", "03192", "03197", "03403", "03408", "03444", "03449", "03453", "03458", "03494", "03499", "03502", "03507", "03534", "03539", "03552", "03557", "03584", "03589", "03633", "03638", "03642", "03647", "03683", "03688", "03692", "03697", "03903", "03908", "03944", "03949", "03953", "03958", "03994", "03999", "05000", "05005", "05014", "05019", "05050", "05055", "05064", "05069", "05113", "05118", "05140", "05145", "05163", "05168", "05190", "05195", "05203", "05208", "05244", "05249", "05253", "05258", "05294", "05299", "05500", "05505", "05514", "05519", "05550", "05555", "05564", "05569", "05613", "05618", "05640", "05645", "05663", "05668", "05690", "05695", "05703", "05708", "05744", "05749", "05753", "05758", "05794", "05799", "06112", "06117", "06130", "06135", "06162", "06167", "06180", "06185", "06202", "06207", "06234", "06239", "06252", "06257", "06284", "06289", "06400", "06405", "06414", "06419", "06450", "06455", "06464", "06469", "06612", "06617", "06630", "06635", "06662", "06667", "06680", "06685", "06702", "06707", "06734", "06739", "06752", "06757", "06784", "06789", "06900", "06905", "06914", "06919", "06950", "06955", "06964", "06969", "07012", "07017", "07030", "07035", "07062", "07067", "07080", "07085", "07233", "07238", "07242", "07247", "07283", "07288", "07292", "07297", "07413", "07418", "07440", "07445", "07463", "07468", "07490", "07495", "07512", "07517", "07530", "07535", "07562", "07567", "07580", "07585", "07733", "07738", "07742", "07747", "07783", "07788", "07792", "07797", "07913", "07918", "07940", "07945", "07963", "07968", "07990", "07995", "08002", "08007", "08034", "08039", "08052", "08057", "08084", "08089", "08133", "08138", "08142", "08147", "08183", "08188", "08192", "08197", "08403", "08408", "08444", "08449", "08453", "08458", "08494", "08499", "08502", "08507", "08534", "08539", "08552", "08557", "08584", "08589", "08633", "08638", "08642", "08647", "08683", "08688", "08692", "08697", "08903", "08908", "08944", "08949", "08953", "08958", "08994", "08999", "11111", "11116", "11120", "11125", "11161", "11166", "11170", "11175", "11201", "11206", "11224", "11229", "11251", "11256", "11274", "11279", "11300", "11305", "11314", "11319", "11350", "11355", "11364", "11369", "11611", "11616", "11620", "11625", "11661", "11666", "11670", "11675", "11701", "11706", "11724", "11729", "11751", "11756", "11774", "11779", "11800", "11805", "11814", "11819", "11850", "11855", "11864", "11869", "12011", "12016", "12020", "12025", "12061", "12066", "12070", "12075", "12223", "12228", "12241", "12246", "12273", "12278", "12291", "12296", "12313", "12318", "12340", "12345", "12363", "12368", "12390", "12395", "12511", "12516", "12520", "12525", "12561", "12566", "12570", "12575", "12723", "12728", "12741", "12746", "12773", "12778", "12791", "12796", "12813", "12818", "12840", "12845", "12863", "12868", "12890", "12895", "13001", "13006", "13024", "13029", "13051", "13056", "13074", "13079", "13123", "13128", "13141", "13146", "13173", "13178", "13191", "13196", "13303", "13308", "13344", "13349", "13353", "13358", "13394", "13399", "13501", "13506", "13524", "13529", "13551", "13556", "13574", "13579", "13623", "13628", "13641", "13646", "13673", "13678", "13691", "13696", "13803", "13808", "13844", "13849", "13853", "13858", "13894", "13899", "14000", "14005", "14014", "14019", "14050", "14055", "14064", "14069", "14113", "14118", "14140", "14145", "14163", "14168", "14190", "14195", "14203", "14208", "14244", "14249", "14253", "14258", "14294", "14299", "14500", "14505", "14514", "14519", "14550", "14555", "14564", "14569", "14613", "14618", "14640", "14645", "14663", "14668", "14690", "14695", "14703", "14708", "14744", "14749", "14753", "14758", "14794", "14799", "16111", "16116", "16120", "16125", "16161", "16166", "16170", "16175", "16201", "16206", "16224", "16229", "16251", "16256", "16274", "16279", "16300", "16305", "16314", "16319", "16350", "16355", "16364", "16369", "16611", "16616", "16620", "16625", "16661", "16666", "16670", "16675", "16701", "16706", "16724", "16729", "16751", "16756", "16774", "16779", "16800", "16805", "16814", "16819", "16850", "16855", "16864", "16869", "17011", "17016", "17020", "17025", "17061", "17066", "17070", "17075", "17223", "17228", "17241", "17246", "17273", "17278", "17291", "17296", "17313", "17318", "17340", "17345", "17363", "17368", "17390", "17395", "17511", "17516", "17520", "17525", "17561", "17566", "17570", "17575", "17723", "17728", "17741", "17746", "17773", "17778", "17791", "17796", "17813", "17818", "17840", "17845", "17863", "17868", "17890", "17895", "18001", "18006", "18024", "18029", "18051", "18056", "18074", "18079", "18123", "18128", "18141", "18146", "18173", "18178", "18191", "18196", "18303", "18308", "18344", "18349", "18353", "18358", "18394", "18399", "18501", "18506", "18524", "18529", "18551", "18556", "18574", "18579", "18623", "18628", "18641", "18646", "18673", "18678", "18691", "18696", "18803", "18808", "18844", "18849", "18853", "18858", "18894", "18899", "19000", "19005", "19014", "19019", "19050", "19055", "19064", "19069", "19113", "19118", "19140", "19145", "19163", "19168", "19190", "19195", "19203", "19208", "19244", "19249", "19253", "19258", "19294", "19299", "19500", "19505", "19514", "19519", "19550", "19555", "19564", "19569", "19613", "19618", "19640", "19645", "19663", "19668", "19690", "19695", "19703", "19708", "19744", "19749", "19753", "19758", "19794", "19799", "20111", "20116", "20120", "20125", "20161", "20166", "20170", "20175", "20201", "20206", "20224", "20229", "20251", "20256", "20274", "20279", "20300", "20305", "20314", "20319", "20350", "20355", "20364", "20369", "20611", "20616", "20620", "20625", "20661", "20666", "20670", "20675", "20701", "20706", "20724", "20729", "20751", "20756", "20774", "20779", "20800", "20805", "20814", "20819", "20850", "20855", "20864", "20869", "22222", "22227", "22231", "22236", "22272", "22277", "22281", "22286", "22312", "22317", "22330", "22335", "22362", "22367", "22380", "22385", "22411", "22416", "22420", "22425", "22461", "22466", "22470", "22475", "22722", "22727", "22731", "22736", "22772", "22777", "22781", "22786", "22812", "22817", "22830", "22835", "22862", "22867", "22880", "22885", "22911", "22916", "22920", "22925", "22961", "22966", "22970", "22975", "23122", "23127", "23131", "23136", "23172", "23177", "23181", "23186", "23302", "23307", "23334", "23339", "23352", "23357", "23384", "23389", "23401", "23406", "23424", "23429", "23451", "23456", "23474", "23479", "23622", "23627", "23631", "23636", "23672", "23677", "23681", "23686", "23802", "23807", "23834", "23839", "23852", "23857", "23884", "23889", "23901", "23906", "23924", "23929", "23951", "23956", "23974", "23979", "24112", "24117", "24130", "24135", "24162", "24167", "24180", "24185", "24202", "24207", "24234", "24239", "24252", "24257", "24284", "24289", "24400", "24405", "24414", "24419", "24450", "24455", "24464", "24469", "24612", "24617", "24630", "24635", "24662", "24667", "24680", "24685", "24702", "24707", "24734", "24739", "24752", "24757", "24784", "24789", "24900", "24905", "24914", "24919", "24950", "24955", "24964", "24969", "25111", "25116", "25120", "25125", "25161", "25166", "25170", "25175", "25201", "25206", "25224", "25229", "25251", "25256", "25274", "25279", "25300", "25305", "25314", "25319", "25350", "25355", "25364", "25369", "25611", "25616", "25620", "25625", "25661", "25666", "25670", "25675", "25701", "25706", "25724", "25729", "25751", "25756", "25774", "25779", "25800", "25805", "25814", "25819", "25850", "25855", "25864", "25869", "27222", "27227", "27231", "27236", "27272", "27277", "27281", "27286", "27312", "27317", "27330", "27335", "27362", "27367", "27380", "27385", "27411", "27416", "27420", "27425", "27461", "27466", "27470", "27475", "27722", "27727", "27731", "27736", "27772", "27777", "27781", "27786", "27812", "27817", "27830", "27835", "27862", "27867", "27880", "27885", "27911", "27916", "27920", "27925", "27961", "27966", "27970", "27975", "28122", "28127", "28131", "28136", "28172", "28177", "28181", "28186", "28302", "28307", "28334", "28339", "28352", "28357", "28384", "28389", "28401", "28406", "28424", "28429", "28451", "28456", "28474", "28479", "28622", "28627", "28631", "28636", "28672", "28677", "28681", "28686", "28802", "28807", "28834", "28839", "28852", "28857", "28884", "28889", "28901", "28906", "28924", "28929", "28951", "28956", "28974", "28979", "29112", "29117", "29130", "29135", "29162", "29167", "29180", "29185", "29202", "29207", "29234", "29239", "29252", "29257", "29284", "29289", "29400", "29405", "29414", "29419", "29450", "29455", "29464", "29469", "29612", "29617", "29630", "29635", "29662", "29667", "29680", "29685", "29702", "29707", "29734", "29739", "29752", "29757", "29784", "29789", "29900", "29905", "29914", "29919", "29950", "29955", "29964", "29969", "30011", "30016", "30020", "30025", "30061", "30066", "30070", "30075", "30223", "30228", "30241", "30246", "30273", "30278", "30291", "30296", "30313", "30318", "30340", "30345", "30363", "30368", "30390", "30395", "30511", "30516", "30520", "30525", "30561", "30566", "30570", "30575", "30723", "30728", "30741", "30746", "30773", "30778", "30791", "30796", "30813", "30818", "30840", "30845", "30863", "30868", "30890", "30895", "31222", "31227", "31231", "31236", "31272", "31277", "31281", "31286", "31312", "31317", "31330", "31335", "31362", "31367", "31380", "31385", "31411", "31416", "31420", "31425", "31461", "31466", "31470", "31475", "31722", "31727", "31731", "31736", "31772", "31777", "31781", "31786", "31812", "31817", "31830", "31835", "31862", "31867", "31880", "31885", "31911", "31916", "31920", "31925", "31961", "31966", "31970", "31975", "33022", "33027", "33031", "33036", "33072", "33077", "33081", "33086", "33333", "33338", "33342", "33347", "33383", "33388", "33392", "33397", "33423", "33428", "33441", "33446", "33473", "33478", "33491", "33496", "33522", "33527", "33531", "33536", "33572", "33577", "33581", "33586", "33833", "33838", "33842", "33847", "33883", "33888", "33892", "33897", "33923", "33928", "33941", "33946", "33973", "33978", "33991", "33996", "34012", "34017", "34030", "34035", "34062", "34067", "34080", "34085", "34233", "34238", "34242", "34247", "34283", "34288", "34292", "34297", "34413", "34418", "34440", "34445", "34463", "34468", "34490", "34495", "34512", "34517", "34530", "34535", "34562", "34567", "34580", "34585", "34733", "34738", "34742", "34747", "34783", "34788", "34792", "34797", "34913", "34918", "34940", "34945", "34963", "34968", "34990", "34995", "35011", "35016", "35020", "35025", "35061", "35066", "35070", "35075", "35223", "35228", "35241", "35246", "35273", "35278", "35291", "35296", "35313", "35318", "35340", "35345", "35363", "35368", "35390", "35395", "35511", "35516", "35520", "35525", "35561", "35566", "35570", "35575", "35723", "35728", "35741", "35746", "35773", "35778", "35791", "35796", "35813", "35818", "35840", "35845", "35863", "35868", "35890", "35895", "36222", "36227", "36231", "36236", "36272", "36277", "36281", "36286", "36312", "36317", "36330", "36335", "36362", "36367", "36380", "36385", "36411", "36416", "36420", "36425", "36461", "36466", "36470", "36475", "36722", "36727", "36731", "36736", "36772", "36777", "36781", "36786", "36812", "36817", "36830", "36835", "36862", "36867", "36880", "36885", "36911", "36916", "36920", "36925", "36961", "36966", "36970", "36975", "38022", "38027", "38031", "38036", "38072", "38077", "38081", "38086", "38333", "38338", "38342", "38347", "38383", "38388", "38392", "38397", "38423", "38428", "38441", "38446", "38473", "38478", "38491", "38496", "38522", "38527", "38531", "38536", "38572", "38577", "38581", "38586", "38833", "38838", "38842", "38847", "38883", "38888", "38892", "38897", "38923", "38928", "38941", "38946", "38973", "38978", "38991", "38996", "39012", "39017", "39030", "39035", "39062", "39067", "39080", "39085", "39233", "39238", "39242", "39247", "39283", "39288", "39292", "39297", "39413", "39418", "39440", "39445", "39463", "39468", "39490", "39495", "39512", "39517", "39530", "39535", "39562", "39567", "39580", "39585", "39733", "39738", "39742", "39747", "39783", "39788", "39792", "39797", "39913", "39918", "39940", "39945", "39963", "39968", "39990", "39995", "40001", "40006", "40024", "40029", "40051", "40056", "40074", "40079", "40123", "40128", "40141", "40146", "40173", "40178", "40191", "40196", "40303", "40308", "40344", "40349", "40353", "40358", "40394", "40399", "40501", "40506", "40524", "40529", "40551", "40556", "40574", "40579", "40623", "40628", "40641", "40646", "40673", "40678", "40691", "40696", "40803", "40808", "40844", "40849", "40853", "40858", "40894", "40899", "41122", "41127", "41131", "41136", "41172", "41177", "41181", "41186", "41302", "41307", "41334", "41339", "41352", "41357", "41384", "41389", "41401", "41406", "41424", "41429", "41451", "41456", "41474", "41479", "41622", "41627", "41631", "41636", "41672", "41677", "41681", "41686", "41802", "41807", "41834", "41839", "41852", "41857", "41884", "41889", "41901", "41906", "41924", "41929", "41951", "41956", "41974", "41979", "42022", "42027", "42031", "42036", "42072", "42077", "42081", "42086", "42333", "42338", "42342", "42347", "42383", "42388", "42392", "42397", "42423", "42428", "42441", "42446", "42473", "42478", "42491", "42496", "42522", "42527", "42531", "42536", "42572", "42577", "42581", "42586", "42833", "42838", "42842", "42847", "42883", "42888", "42892", "42897", "42923", "42928", "42941", "42946", "42973", "42978", "42991", "42996", "44002", "44007", "44034", "44039", "44052", "44057", "44084", "44089", "44133", "44138", "44142", "44147", "44183", "44188", "44192", "44197", "44403", "44408", "44444", "44449", "44453", "44458", "44494", "44499", "44502", "44507", "44534", "44539", "44552", "44557", "44584", "44589", "44633", "44638", "44642", "44647", "44683", "44688", "44692", "44697", "44903", "44908", "44944", "44949", "44953", "44958", "44994", "44999", "45001", "45006", "45024", "45029", "45051", "45056", "45074", "45079", "45123", "45128", "45141", "45146", "45173", "45178", "45191", "45196", "45303", "45308", "45344", "45349", "45353", "45358", "45394", "45399", "45501", "45506", "45524", "45529", "45551", "45556", "45574", "45579", "45623", "45628", "45641", "45646", "45673", "45678", "45691", "45696", "45803", "45808", "45844", "45849", "45853", "45858", "45894", "45899", "46122", "46127", "46131", "46136", "46172", "46177", "46181", "46186", "46302", "46307", "46334", "46339", "46352", "46357", "46384", "46389", "46401", "46406", "46424", "46429", "46451", "46456", "46474", "46479", "46622", "46627", "46631", "46636", "46672", "46677", "46681", "46686", "46802", "46807", "46834", "46839", "46852", "46857", "46884", "46889", "46901", "46906", "46924", "46929", "46951", "46956", "46974", "46979", "47022", "47027", "47031", "47036", "47072", "47077", "47081", "47086", "47333", "47338", "47342", "47347", "47383", "47388", "47392", "47397", "47423", "47428", "47441", "47446", "47473", "47478", "47491", "47496", "47522", "47527", "47531", "47536", "47572", "47577", "47581", "47586", "47833", "47838", "47842", "47847", "47883", "47888", "47892", "47897", "47923", "47928", "47941", "47946", "47973", "47978", "47991", "47996", "49002", "49007", "49034", "49039", "49052", "49057", "49084", "49089", "49133", "49138", "49142", "49147", "49183", "49188", "49192", "49197", "49403", "49408", "49444", "49449", "49453", "49458", "49494", "49499", "49502", "49507", "49534", "49539", "49552", "49557", "49584", "49589", "49633", "49638", "49642", "49647", "49683", "49688", "49692", "49697", "49903", "49908", "49944", "49949", "49953", "49958", "49994", "49999", "50000", "50005", "50014", "50019", "50050", "50055", "50064", "50069", "50113", "50118", "50140", "50145", "50163", "50168", "50190", "50195", "50203", "50208", "50244", "50249", "50253", "50258", "50294", "50299", "50500", "50505", "50514", "50519", "50550", "50555", "50564", "50569", "50613", "50618", "50640", "50645", "50663", "50668", "50690", "50695", "50703", "50708", "50744", "50749", "50753", "50758", "50794", "50799", "51112", "51117", "51130", "51135", "51162", "51167", "51180", "51185", "51202", "51207", "51234", "51239", "51252", "51257", "51284", "51289", "51400", "51405", "51414", "51419", "51450", "51455", "51464", "51469", "51612", "51617", "51630", "51635", "51662", "51667", "51680", "51685", "51702", "51707", "51734", "51739", "51752", "51757", "51784", "51789", "51900", "51905", "51914", "51919", "51950", "51955", "51964", "51969", "52012", "52017", "52030", "52035", "52062", "52067", "52080", "52085", "52233", "52238", "52242", "52247", "52283", "52288", "52292", "52297", "52413", "52418", "52440", "52445", "52463", "52468", "52490", "52495", "52512", "52517", "52530", "52535", "52562", "52567", "52580", "52585", "52733", "52738", "52742", "52747", "52783", "52788", "52792", "52797", "52913", "52918", "52940", "52945", "52963", "52968", "52990", "52995", "53002", "53007", "53034", "53039", "53052", "53057", "53084", "53089", "53133", "53138", "53142", "53147", "53183", "53188", "53192", "53197", "53403", "53408", "53444", "53449", "53453", "53458", "53494", "53499", "53502", "53507", "53534", "53539", "53552", "53557", "53584", "53589", "53633", "53638", "53642", "53647", "53683", "53688", "53692", "53697", "53903", "53908", "53944", "53949", "53953", "53958", "53994", "53999", "55000", "55005", "55014", "55019", "55050", "55055", "55064", "55069", "55113", "55118", "55140", "55145", "55163", "55168", "55190", "55195", "55203", "55208", "55244", "55249", "55253", "55258", "55294", "55299", "55500", "55505", "55514", "55519", "55550", "55555", "55564", "55569", "55613", "55618", "55640", "55645", "55663", "55668", "55690", "55695", "55703", "55708", "55744", "55749", "55753", "55758", "55794", "55799", "56112", "56117", "56130", "56135", "56162", "56167", "56180", "56185", "56202", "56207", "56234", "56239", "56252", "56257", "56284", "56289", "56400", "56405", "56414", "56419", "56450", "56455", "56464", "56469", "56612", "56617", "56630", "56635", "56662", "56667", "56680", "56685", "56702", "56707", "56734", "56739", "56752", "56757", "56784", "56789", "56900", "56905", "56914", "56919", "56950", "56955", "56964", "56969", "57012", "57017", "57030", "57035", "57062", "57067", "57080", "57085", "57233", "57238", "57242", "57247", "57283", "57288", "57292", "57297", "57413", "57418", "57440", "57445", "57463", "57468", "57490", "57495", "57512", "57517", "57530", "57535", "57562", "57567", "57580", "57585", "57733", "57738", "57742", "57747", "57783", "57788", "57792", "57797", "57913", "57918", "57940", "57945", "57963", "57968", "57990", "57995", "58002", "58007", "58034", "58039", "58052", "58057", "58084", "58089", "58133", "58138", "58142", "58147", "58183", "58188", "58192", "58197", "58403", "58408", "58444", "58449", "58453", "58458", "58494", "58499", "58502", "58507", "58534", "58539", "58552", "58557", "58584", "58589", "58633", "58638", "58642", "58647", "58683", "58688", "58692", "58697", "58903", "58908", "58944", "58949", "58953", "58958", "58994", "58999", "61111", "61116", "61120", "61125", "61161", "61166", "61170", "61175", "61201", "61206", "61224", "61229", "61251", "61256", "61274", "61279", "61300", "61305", "61314", "61319", "61350", "61355", "61364", "61369", "61611", "61616", "61620", "61625", "61661", "61666", "61670", "61675", "61701", "61706", "61724", "61729", "61751", "61756", "61774", "61779", "61800", "61805", "61814", "61819", "61850", "61855", "61864", "61869", "62011", "62016", "62020", "62025", "62061", "62066", "62070", "62075", "62223", "62228", "62241", "62246", "62273", "62278", "62291", "62296", "62313", "62318", "62340", "62345", "62363", "62368", "62390", "62395", "62511", "62516", "62520", "62525", "62561", "62566", "62570", "62575", "62723", "62728", "62741", "62746", "62773", "62778", "62791", "62796", "62813", "62818", "62840", "62845", "62863", "62868", "62890", "62895", "63001", "63006", "63024", "63029", "63051", "63056", "63074", "63079", "63123", "63128", "63141", "63146", "63173", "63178", "63191", "63196", "63303", "63308", "63344", "63349", "63353", "63358", "63394", "63399", "63501", "63506", "63524", "63529", "63551", "63556", "63574", "63579", "63623", "63628", "63641", "63646", "63673", "63678", "63691", "63696", "63803", "63808", "63844", "63849", "63853", "63858", "63894", "63899", "64000", "64005", "64014", "64019", "64050", "64055", "64064", "64069", "64113", "64118", "64140", "64145", "64163", "64168", "64190", "64195", "64203", "64208", "64244", "64249", "64253", "64258", "64294", "64299", "64500", "64505", "64514", "64519", "64550", "64555", "64564", "64569", "64613", "64618", "64640", "64645", "64663", "64668", "64690", "64695", "64703", "64708", "64744", "64749", "64753", "64758", "64794", "64799", "66111", "66116", "66120", "66125", "66161", "66166", "66170", "66175", "66201", "66206", "66224", "66229", "66251", "66256", "66274", "66279", "66300", "66305", "66314", "66319", "66350", "66355", "66364", "66369", "66611", "66616", "66620", "66625", "66661", "66666", "66670", "66675", "66701", "66706", "66724", "66729", "66751", "66756", "66774", "66779", "66800", "66805", "66814", "66819", "66850", "66855", "66864", "66869", "67011", "67016", "67020", "67025", "67061", "67066", "67070", "67075", "67223", "67228", "67241", "67246", "67273", "67278", "67291", "67296", "67313", "67318", "67340", "67345", "67363", "67368", "67390", "67395", "67511", "67516", "67520", "67525", "67561", "67566", "67570", "67575", "67723", "67728", "67741", "67746", "67773", "67778", "67791", "67796", "67813", "67818", "67840", "67845", "67863", "67868", "67890", "67895", "68001", "68006", "68024", "68029", "68051", "68056", "68074", "68079", "68123", "68128", "68141", "68146", "68173", "68178", "68191", "68196", "68303", "68308", "68344", "68349", "68353", "68358", "68394", "68399", "68501", "68506", "68524", "68529", "68551", "68556", "68574", "68579", "68623", "68628", "68641", "68646", "68673", "68678", "68691", "68696", "68803", "68808", "68844", "68849", "68853", "68858", "68894", "68899", "69000", "69005", "69014", "69019", "69050", "69055", "69064", "69069", "69113", "69118", "69140", "69145", "69163", "69168", "69190", "69195", "69203", "69208", "69244", "69249", "69253", "69258", "69294", "69299", "69500", "69505", "69514", "69519", "69550", "69555", "69564", "69569", "69613", "69618", "69640", "69645", "69663", "69668", "69690", "69695", "69703", "69708", "69744", "69749", "69753", "69758", "69794", "69799", "70111", "70116", "70120", "70125", "70161", "70166", "70170", "70175", "70201", "70206", "70224", "70229", "70251", "70256", "70274", "70279", "70300", "70305", "70314", "70319", "70350", "70355", "70364", "70369", "70611", "70616", "70620", "70625", "70661", "70666", "70670", "70675", "70701", "70706", "70724", "70729", "70751", "70756", "70774", "70779", "70800", "70805", "70814", "70819", "70850", "70855", "70864", "70869", "72222", "72227", "72231", "72236", "72272", "72277", "72281", "72286", "72312", "72317", "72330", "72335", "72362", "72367", "72380", "72385", "72411", "72416", "72420", "72425", "72461", "72466", "72470", "72475", "72722", "72727", "72731", "72736", "72772", "72777", "72781", "72786", "72812", "72817", "72830", "72835", "72862", "72867", "72880", "72885", "72911", "72916", "72920", "72925", "72961", "72966", "72970", "72975", "73122", "73127", "73131", "73136", "73172", "73177", "73181", "73186", "73302", "73307", "73334", "73339", "73352", "73357", "73384", "73389", "73401", "73406", "73424", "73429", "73451", "73456", "73474", "73479", "73622", "73627", "73631", "73636", "73672", "73677", "73681", "73686", "73802", "73807", "73834", "73839", "73852", "73857", "73884", "73889", "73901", "73906", "73924", "73929", "73951", "73956", "73974", "73979", "74112", "74117", "74130", "74135", "74162", "74167", "74180", "74185", "74202", "74207", "74234", "74239", "74252", "74257", "74284", "74289", "74400", "74405", "74414", "74419", "74450", "74455", "74464", "74469", "74612", "74617", "74630", "74635", "74662", "74667", "74680", "74685", "74702", "74707", "74734", "74739", "74752", "74757", "74784", "74789", "74900", "74905", "74914", "74919", "74950", "74955", "74964", "74969", "75111", "75116", "75120", "75125", "75161", "75166", "75170", "75175", "75201", "75206", "75224", "75229", "75251", "75256", "75274", "75279", "75300", "75305", "75314", "75319", "75350", "75355", "75364", "75369", "75611", "75616", "75620", "75625", "75661", "75666", "75670", "75675", "75701", "75706", "75724", "75729", "75751", "75756", "75774", "75779", "75800", "75805", "75814", "75819", "75850", "75855", "75864", "75869", "77222", "77227", "77231", "77236", "77272", "77277", "77281", "77286", "77312", "77317", "77330", "77335", "77362", "77367", "77380", "77385", "77411", "77416", "77420", "77425", "77461", "77466", "77470", "77475", "77722", "77727", "77731", "77736", "77772", "77777", "77781", "77786", "77812", "77817", "77830", "77835", "77862", "77867", "77880", "77885", "77911", "77916", "77920", "77925", "77961", "77966", "77970", "77975", "78122", "78127", "78131", "78136", "78172", "78177", "78181", "78186", "78302", "78307", "78334", "78339", "78352", "78357", "78384", "78389", "78401", "78406", "78424", "78429", "78451", "78456", "78474", "78479", "78622", "78627", "78631", "78636", "78672", "78677", "78681", "78686", "78802", "78807", "78834", "78839", "78852", "78857", "78884", "78889", "78901", "78906", "78924", "78929", "78951", "78956", "78974", "78979", "79112", "79117", "79130", "79135", "79162", "79167", "79180", "79185", "79202", "79207", "79234", "79239", "79252", "79257", "79284", "79289", "79400", "79405", "79414", "79419", "79450", "79455", "79464", "79469", "79612", "79617", "79630", "79635", "79662", "79667", "79680", "79685", "79702", "79707", "79734", "79739", "79752", "79757", "79784", "79789", "79900", "79905", "79914", "79919", "79950", "79955", "79964", "79969", "80011", "80016", "80020", "80025", "80061", "80066", "80070", "80075", "80223", "80228", "80241", "80246", "80273", "80278", "80291", "80296", "80313", "80318", "80340", "80345", "80363", "80368", "80390", "80395", "80511", "80516", "80520", "80525", "80561", "80566", "80570", "80575", "80723", "80728", "80741", "80746", "80773", "80778", "80791", "80796", "80813", "80818", "80840", "80845", "80863", "80868", "80890", "80895", "81222", "81227", "81231", "81236", "81272", "81277", "81281", "81286", "81312", "81317", "81330", "81335", "81362", "81367", "81380", "81385", "81411", "81416", "81420", "81425", "81461", "81466", "81470", "81475", "81722", "81727", "81731", "81736", "81772", "81777", "81781", "81786", "81812", "81817", "81830", "81835", "81862", "81867", "81880", "81885", "81911", "81916", "81920", "81925", "81961", "81966", "81970", "81975", "83022", "83027", "83031", "83036", "83072", "83077", "83081", "83086", "83333", "83338", "83342", "83347", "83383", "83388", "83392", "83397", "83423", "83428", "83441", "83446", "83473", "83478", "83491", "83496", "83522", "83527", "83531", "83536", "83572", "83577", "83581", "83586", "83833", "83838", "83842", "83847", "83883", "83888", "83892", "83897", "83923", "83928", "83941", "83946", "83973", "83978", "83991", "83996", "84012", "84017", "84030", "84035", "84062", "84067", "84080", "84085", "84233", "84238", "84242", "84247", "84283", "84288", "84292", "84297", "84413", "84418", "84440", "84445", "84463", "84468", "84490", "84495", "84512", "84517", "84530", "84535", "84562", "84567", "84580", "84585", "84733", "84738", "84742", "84747", "84783", "84788", "84792", "84797", "84913", "84918", "84940", "84945", "84963", "84968", "84990", "84995", "85011", "85016", "85020", "85025", "85061", "85066", "85070", "85075", "85223", "85228", "85241", "85246", "85273", "85278", "85291", "85296", "85313", "85318", "85340", "85345", "85363", "85368", "85390", "85395", "85511", "85516", "85520", "85525", "85561", "85566", "85570", "85575", "85723", "85728", "85741", "85746", "85773", "85778", "85791", "85796", "85813", "85818", "85840", "85845", "85863", "85868", "85890", "85895", "86222", "86227", "86231", "86236", "86272", "86277", "86281", "86286", "86312", "86317", "86330", "86335", "86362", "86367", "86380", "86385", "86411", "86416", "86420", "86425", "86461", "86466", "86470", "86475", "86722", "86727", "86731", "86736", "86772", "86777", "86781", "86786", "86812", "86817", "86830", "86835", "86862", "86867", "86880", "86885", "86911", "86916", "86920", "86925", "86961", "86966", "86970", "86975", "88022", "88027", "88031", "88036", "88072", "88077", "88081", "88086", "88333", "88338", "88342", "88347", "88383", "88388", "88392", "88397", "88423", "88428", "88441", "88446", "88473", "88478", "88491", "88496", "88522", "88527", "88531", "88536", "88572", "88577", "88581", "88586", "88833", "88838", "88842", "88847", "88883", "88888", "88892", "88897", "88923", "88928", "88941", "88946", "88973", "88978", "88991", "88996", "89012", "89017", "89030", "89035", "89062", "89067", "89080", "89085", "89233", "89238", "89242", "89247", "89283", "89288", "89292", "89297", "89413", "89418", "89440", "89445", "89463", "89468", "89490", "89495", "89512", "89517", "89530", "89535", "89562", "89567", "89580", "89585", "89733", "89738", "89742", "89747", "89783", "89788", "89792", "89797", "89913", "89918", "89940", "89945", "89963", "89968", "89990", "89995", "90001", "90006", "90024", "90029", "90051", "90056", "90074", "90079", "90123", "90128", "90141", "90146", "90173", "90178", "90191", "90196", "90303", "90308", "90344", "90349", "90353", "90358", "90394", "90399", "90501", "90506", "90524", "90529", "90551", "90556", "90574", "90579", "90623", "90628", "90641", "90646", "90673", "90678", "90691", "90696", "90803", "90808", "90844", "90849", "90853", "90858", "90894", "90899", "91122", "91127", "91131", "91136", "91172", "91177", "91181", "91186", "91302", "91307", "91334", "91339", "91352", "91357", "91384", "91389", "91401", "91406", "91424", "91429", "91451", "91456", "91474", "91479", "91622", "91627", "91631", "91636", "91672", "91677", "91681", "91686", "91802", "91807", "91834", "91839", "91852", "91857", "91884", "91889", "91901", "91906", "91924", "91929", "91951", "91956", "91974", "91979", "92022", "92027", "92031", "92036", "92072", "92077", "92081", "92086", "92333", "92338", "92342", "92347", "92383", "92388", "92392", "92397", "92423", "92428", "92441", "92446", "92473", "92478", "92491", "92496", "92522", "92527", "92531", "92536", "92572", "92577", "92581", "92586", "92833", "92838", "92842", "92847", "92883", "92888", "92892", "92897", "92923", "92928", "92941", "92946", "92973", "92978", "92991", "92996", "94002", "94007", "94034", "94039", "94052", "94057", "94084", "94089", "94133", "94138", "94142", "94147", "94183", "94188", "94192", "94197", "94403", "94408", "94444", "94449", "94453", "94458", "94494", "94499", "94502", "94507", "94534", "94539", "94552", "94557", "94584", "94589", "94633", "94638", "94642", "94647", "94683", "94688", "94692", "94697", "94903", "94908", "94944", "94949", "94953", "94958", "94994", "94999", "95001", "95006", "95024", "95029", "95051", "95056", "95074", "95079", "95123", "95128", "95141", "95146", "95173", "95178", "95191", "95196", "95303", "95308", "95344", "95349", "95353", "95358", "95394", "95399", "95501", "95506", "95524", "95529", "95551", "95556", "95574", "95579", "95623", "95628", "95641", "95646", "95673", "95678", "95691", "95696", "95803", "95808", "95844", "95849", "95853", "95858", "95894", "95899", "96122", "96127", "96131", "96136", "96172", "96177", "96181", "96186", "96302", "96307", "96334", "96339", "96352", "96357", "96384", "96389", "96401", "96406", "96424", "96429", "96451", "96456", "96474", "96479", "96622", "96627", "96631", "96636", "96672", "96677", "96681", "96686", "96802", "96807", "96834", "96839", "96852", "96857", "96884", "96889", "96901", "96906", "96924", "96929", "96951", "96956", "96974", "96979", "97022", "97027", "97031", "97036", "97072", "97077", "97081", "97086", "97333", "97338", "97342", "97347", "97383", "97388", "97392", "97397", "97423", "97428", "97441", "97446", "97473", "97478", "97491", "97496", "97522", "97527", "97531", "97536", "97572", "97577", "97581", "97586", "97833", "97838", "97842", "97847", "97883", "97888", "97892", "97897", "97923", "97928", "97941", "97946", "97973", "97978", "97991", "97996", "99002", "99007", "99034", "99039", "99052", "99057", "99084", "99089", "99133", "99138", "99142", "99147", "99183", "99188", "99192", "99197", "99403", "99408", "99444", "99449", "99453", "99458", "99494", "99499", "99502", "99507", "99534", "99539", "99552", "99557", "99584", "99589", "99633", "99638", "99642", "99647", "99683", "99688", "99692", "99697", "99903", "99908", "99944", "99949", "99953", "99958", "99994", "99999" ],
        Ia = "present",
        Ma = "correct",
        Oa = "absent";
    var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };

    function Pa(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var o = 0; o < e.length; o++) {
                    var n = e[o],
                        r = a[t][o],
                        i = s[n] || "unknown";
                    Ra[r] > Ra[i] && (s[n] = r)
                }
        })), s
    }

    function $a(e) {
        var a = ["th", "st", "nd", "rd"], //numbers for the last digit of a number first, second etc
            s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

    function Na(e, a) {
        var s = new Date(e),
            t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }

    function Da(e) { var a, s = Ga(e); return a = s % La.length, La[a] }

    function Ga(e) { return Na(Ha, e) }
    var Ba = "0123456789", //alphabet
        Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }
    var Ya = "statistics",
        Ja = "fail",
        Ua = { currentStreak: 0, maxStreak: 0, guesses: n({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, Ja, 0), winPercentage: 0, gamesPlayed: 0, gamesWon: 0, averageGuesses: 0 };

    function Xa() { var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua); return JSON.parse(e) }

    function Va(e) {
        var a = e.isWin,
            s = e.isStreak,
            t = e.numGuesses,
            o = Xa();
        a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
                var s = y(a, 2),
                    t = s[0],
                    o = s[1];
                return t !== Ja ? e += t * o : e
            }), 0) / o.gamesWon),
            function(e) { window.localStorage.setItem(Ya, JSON.stringify(e)) }(o)
    }
    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         SITESWAPLE\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS",
        es = "WIN",
        as = "FAIL",
        ss = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"], //results
        ts = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "tileIndex", 0), n(p(e), "rowIndex", 0), n(p(e), "solution", void 0), n(p(e), "boardState", void 0), n(p(e), "evaluations", void 0), n(p(e), "canInput", !0), n(p(e), "gameStatus", Za), n(p(e), "letterEvaluations", {}), n(p(e), "$board", void 0), n(p(e), "$keyboard", void 0), n(p(e), "$game", void 0), n(p(e), "today", void 0), n(p(e), "lastPlayedTs", void 0), n(p(e), "lastCompletedTs", void 0), n(p(e), "hardMode", void 0), n(p(e), "dayOffset", void 0), e.attachShadow({ mode: "open" }), e.today = new Date;
                var o = za();
                return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Da(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({ rowIndex: e.rowIndex, boardState: e.boardState, evaluations: e.evaluations, solution: e.solution, gameStatus: e.gameStatus }),
                    Ca("event", "level_start", { level_name: Wa(e.solution) })) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = Pa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
            }
            return o(t, [{
                key: "evaluateRow",
                value: function() {
                    if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            s = this.boardState[this.rowIndex];
                        if (e = s, !Ta.includes(e) && !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not a valid siteswap");
                        if (this.hardMode) {
                            var t = function(e, a, s) {
                                    if (!e || !a || !s) return { validGuess: !0 };
                                    for (var t = 0; t < s.length; t++)
                                        if (s[t] === Ma && e[t] !== a[t]) return { validGuess: !1, errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase()) };
                                    for (var o = {}, n = 0; n < s.length; n++)[Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                    var r = e.split("").reduce((function(e, a) { return e[a] ? e[a] += 1 : e[a] = 1, e }), {});
                                    for (var i in o)
                                        if ((r[i] || 0) < o[i]) return { validGuess: !1, errorMessage: "Guess must contain ".concat(i.toUpperCase()) };
                                    return { validGuess: !0 }
                                }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                o = t.validGuess,
                                n = t.errorMessage;
                            if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Not valid in hard mode")
                        }
                        var r = function(e, a) {
                            for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (t[r])
                                    for (var l = 0; l < a.length; l++) { var d = a[l]; if (o[l] && i === d) { s[r] = Ia, o[l] = !1; break } }
                            }
                            return s
                        }(s, this.solution);
                        this.evaluations[this.rowIndex] = r, this.letterEvaluations = Pa(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                        var i = this.rowIndex >= 6,
                            l = r.every((function(e) { return "correct" === e }));
                        if (i || l) Va({ isWin: l, isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date), numGuesses: this.rowIndex }), ja({ lastCompletedTs: Date.now() }), this.gameStatus = l ? es : as, Ca("event", "level_end", { level_name: Wa(this.solution), num_guesses: this.rowIndex, success: l });
                        this.tileIndex = 0, this.canInput = !1, ja({ rowIndex: this.rowIndex, boardState: this.boardState, evaluations: this.evaluations, solution: this.solution, gameStatus: this.gameStatus, lastPlayedTs: Date.now() })
                    }
                }
            }, { key: "addLetter", value: function(e) { this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1))) } }, {
                key: "removeLetter",
                value: function() {
                    if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                    }
                }
            }, {
                key: "submitGuess",
                value: function() {
                    if (this.gameStatus === Za && this.canInput) {
                        if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "addToast",
                value: function(e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard",
                value: function() {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                        s = 6 * Math.floor(a / 5);
                    this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
                }
            }, {
                key: "showStatsModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal"),
                        a = document.createElement("game-stats");
                    this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() { return e.showHelpModal() }), 100);
                    for (var a = 0; a < 6; a++) {
                        var s = document.createElement("game-row");
                        s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                    }
                    this.$game.addEventListener("game-key-press", (function(a) { var s = a.detail.key; "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase()) })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                        e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                        var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function() { e.showStatsModal() }), 2500))), e.restoringFromLocalStorage = !1)
                    })), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            o = s.checked,
                            n = s.disabled;
                        switch (t) {
                            case "hard-mode":
                                return void(n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({ hardMode: o })))
                        }
                    })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("Settings");
                        s.appendChild(t);
                        var o = document.createElement("game-settings");
                        o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("How to play");
                        s.appendChild(t);
                        var o = document.createElement("game-help");
                        o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) { e.showStatsModal() })), window.addEventListener("resize", this.sizeBoard.bind(this))
                }
            }, { key: "disconnectedCallback", value: function() {} }, {
                key: "debugTools",
                value: function() {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) { e.addToast("hello world") })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-modal");
                        s.textContent = "hello plz", s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() { e.evaluateRow() })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() { e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "") })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() { var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1]; "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "") }))
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template"); //animate
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function(a) { e.shadowRoot.querySelector(".content").classList.add("closing") })), this.shadowRoot.addEventListener("animationend", (function(a) { "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open")) }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [ //keyboard
            ["0", "1", "2", "3", "4"],
            ["5", "6", "7", "8", "9"  ],
            ["↵",, "←"]
        ],
        us = function(e) {
            r(t, e);
            var a = h(t);

            function t() { var e; return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({ mode: "open" }), e }
            return o(t, [{ key: "letterEvaluations", set: function(e) { this._letterEvaluations = e, this._render() } }, { key: "dispatchKeyPressEvent", value: function(e) { this.dispatchEvent(new CustomEvent("game-key-press", { bubbles: !0, composed: !0, detail: { key: e } })) } }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                    })), window.addEventListener("keydown", (function(a) {
                        if (!0 !== a.repeat) {
                            var s = a.key,
                                t = a.metaKey,
                                o = a.ctrlKey;
                            t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                        }
                    })), this.$keyboard.addEventListener("transitionend", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && s.classList.remove("fade")
                    })), ds.forEach((function(a) {
                        var s = document.createElement("div");
                        s.classList.add("row"), a.forEach((function(e) {
                            var a;
                            if (e >= "0" && e <= "9" || "←" === e || "↵" === e) {
                                if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                                }
                                "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                            } else(a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            s.appendChild(a)
                        })), e.$keyboard.appendChild(s)
                    })), this._render()
                }
            }, {
                key: "_render",
                value: function() {
                    for (var e in this._letterEvaluations) {
                        var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                        a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                    }
                }
            }]), t
        }(c(HTMLElement));
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function cs(e, a, s, t) {
        return new(s || (s = Promise))((function(o, n) {
            function r(e) { try { l(t.next(e)) } catch (e) { n(e) } }

            function i(e) { try { l(t.throw(e)) } catch (e) { n(e) } }

            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) { e(a) }))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }))
    }

    function ps(e, a) {
        var s, t, o, n, r = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
        return n = { next: i(0), throw: i(1), return: i(2) }, "function" == typeof Symbol && (n[Symbol.iterator] = function() { return this }), n;

        function i(n) {
            return function(i) {
                return function(n) {
                    if (s) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done) return o;
                        switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return r.label++, { value: n[1], done: !1 };
                            case 5:
                                r.label++, t = n[1], n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) { r = 0; continue }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) { r.label = n[1]; break }
                                if (6 === n[0] && r.label < o[1]) { r.label = o[1], o = n; break }
                                if (o && r.label < o[2]) { r.label = o[2], r.ops.push(n); break }
                                o[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        n = a.call(e, r)
                    } catch (e) { n = [6, e], t = 0 } finally { s = o = 0 }
                    if (5 & n[0]) throw n[1];
                    return { value: n[0] ? n[1] : void 0, done: !0 }
                }([n, i])
            }
        }
    }
    customElements.define("game-keyboard", us),
        function() {
            (console.warn || console.log).apply(console, arguments)
        }.bind("[clipboard-polyfill]");
    var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
        fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
        vs = "undefined" == typeof window ? void 0 : window,
        ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function() { this.success = !1 };

    function zs(e, a, s) { //clipboard
        for (var t in e.success = !0, a) {
            var o = a[t],
                n = s.clipboardData;
            n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1)
        }
        s.preventDefault()
    }

    function js(e) { //copy results
        var a = new xs,
            s = zs.bind(this, a, e);
        document.addEventListener("copy", s);
        try { document.execCommand("copy") } finally { document.removeEventListener("copy", s) }
        return a.success
    }

    function Ss(e, a) { _s(e); var s = js(a); return qs(), s }

    function _s(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
        }
    }

    function qs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }

    function Es(e) {
        return cs(this, void 0, void 0, (function() {
            var a;
            return ps(this, (function(s) {
                if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) { if (!a) throw new Error("No `text/plain` value was specified."); if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0]; throw new Error("Copying failed, possibly because the user rejected it.") }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a), s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({ mode: "open" }));
                    var t = document.createElement("span");
                    t.innerText = e, s.appendChild(t), document.body.appendChild(a), _s(t);
                    var o = document.execCommand("copy");
                    return qs(), document.body.removeChild(a), o
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }))
        }))
    }

    //user agent
    function As(e, a, s) { try { t = navigator.userAgent || navigator.vendor || window.opera, !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) { return cs(this, void 0, void 0, (function() { return ps(this, (function(a) { if (ks) return [2, ks(e)]; if (!Es(function(e) { var a = {}; return a["text/plain"] = e, a }(e))) throw new Error("writeText() failed"); return [2] })) })) }(e.text).then(a, s) : navigator.share(e) } catch (e) { s() } var t }
    var Cs = document.createElement("template");
    Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = '\n  <div class="countdown">\n    <h1>Next SITESWAPLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = { currentStreak: "Current Streak", maxStreak: "Max Streak", winPercentage: "Win %", gamesPlayed: "Played", gamesWon: "Won", averageGuesses: "Av. Guesses" },
        Os = function(e) {
            r(t, e);
            var a = h(t);

            function t() { var e; return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({ mode: "open" }), e.stats = Xa(), e }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                    var a = this.shadowRoot.getElementById("statistics"),
                        s = this.shadowRoot.getElementById("guess-distribution"),
                        t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                    if (Object.values(this.stats.guesses).every((function(e) { return 0 === e }))) {
                        var o = document.createElement("div");
                        o.classList.add("no-data"), o.innerText = "No Data", s.appendChild(o)
                    } else
                        for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                            var r = n,
                                i = this.stats.guesses[n],
                                l = Ts.content.cloneNode(!0),
                                d = Math.max(7, Math.round(i / t * 100));
                            l.querySelector(".guess").textContent = r;
                            var u = l.querySelector(".graph-bar");
                            if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
                                l.querySelector(".num-guesses").textContent = i, i > 0 && u.classList.add("align-right");
                                var c = parseInt(this.getAttribute("highlight-guess"), 10);
                                c && n === c && u.classList.add("highlight")
                            }
                            s.appendChild(l)
                        }
                    if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                            var t = Ms[s],
                                o = e.stats[s],
                                n = Ls.content.cloneNode(!0);
                            n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
                        })), this.gameApp.gameStatus !== Za) {
                        var p = this.shadowRoot.querySelector(".footer"),
                            m = Is.content.cloneNode(!0);
                        p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                            a.preventDefault(), a.stopPropagation(); //share results
                            As(function(e) {
                                var a = e.evaluations,
                                    s = e.dayOffset,
                                    t = e.rowIndex,
                                    o = e.isHardMode,
                                    n = e.isWin,
                                    r = JSON.parse(window.localStorage.getItem(j)), //dark
                                    i = JSON.parse(window.localStorage.getItem(S)), //colorblind
                                    l = "Siteswaple https://siteswapexplorer.com/siteswaple/\n".concat(s); //title
                                l += " ".concat(n ? t : "X", "/").concat(6), o && (l += "*");
                                var d = "";
                                return a.forEach((function(e) {
                                    e && (e.forEach((function(e) {
                                        if (e) {
                                            var a = "";
                                            switch (e) { //emoji time - colroblind
                                                case Ma:
                                                    a = function(e) { return e ? "🟧" : "🟩" }(i);
                                                    break;
                                                case Ia:
                                                    a = function(e) { return e ? "🟦" : "🟨" }(i);
                                                    break;
                                                case Oa:
                                                    a = function(e) { return e ? "⬛" : "⬜" }(r)
                                            }
                                            d += a
                                        }
                                    })), d += "\n")
                                })), { text: "".concat(l, "\n\n").concat(d.trimEnd()) }
                            }({ evaluations: e.gameApp.evaluations, dayOffset: e.gameApp.dayOffset, rowIndex: e.gameApp.rowIndex, isHardMode: e.gameApp.hardMode, isWin: e.gameApp.gameStatus === es }), (function() { e.gameApp.addToast("Copied results to clipboard", 2e3, !0) }), (function() { e.gameApp.addToast("Share failed", 2e3, !0) }))
                        }))
                    }
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) { a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", { bubbles: !0, composed: !0, detail: { name: e.getAttribute("name"), checked: e.hasAttribute("checked"), disabled: e.hasAttribute("disabled") } })) }))
            }
        }], [{ key: "observedAttributes", get: function() { return ["checked"] } }]), t
    }(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template"); //help dialog
    $s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>SITESWAPLE</strong> in 6 tries.</p>\n      <p>Each guess must be a valid period 5 siteswap. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the siteswap.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="7" evaluation="correct" reveal></game-tile>\n            <game-tile letter="3"></game-tile>\n            <game-tile letter="4"></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="6"></game-tile>\n          </div>\n          <p>The number <strong>7</strong> is in the siteswap and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="2" evaluation="present" reveal></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="1"></game-tile>\n            <game-tile letter="2"></game-tile>\n          </div>\n          <p>The number <strong>2</strong> is in the siteswap but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="4"></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="2" evaluation="absent" reveal></game-tile>\n            <game-tile letter="4"></game-tile>\n          </div>\n          <p>The number <strong>2</strong> is not in the siteswap in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new SITESWAPLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var Hs = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{ key: "connectedCallback", value: function() { this.shadowRoot.appendChild($s.content.cloneNode(!0)) } }]), t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function(e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) { e.shadowRoot.querySelector(".overlay").classList.add("closing") })), this.shadowRoot.addEventListener("animationend", (function(a) { "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) { e.removeChild(a) })), e.removeAttribute("open")) }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = { help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z", settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z", backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z", close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z", share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z", statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" },
        Fs = function(e) {
            r(t, e);
            var a = h(t);

            function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                    var e = this.getAttribute("icon");
                    this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
        Js = 36e5,
        Us = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({ mode: "open" });
                var o = new Date;
                return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
            }
            return o(t, [{ key: "padDigit", value: function(e) { return e.toString().padStart(2, "0") } }, {
                key: "updateTimer",
                value: function() {
                    var e, a = (new Date).getTime(),
                        s = Math.floor(this.targetEpochMS - a);
                    if (s <= 0) e = "00:00:00";
                    else {
                        var t = Math.floor(s % 864e5 / Js),
                            o = Math.floor(s % Js / Ys),
                            n = Math.floor(s % Ys / 1e3);
                        e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                    }
                    this.$timer.textContent = e
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() { e.updateTimer() }), 200)
                }
            }, { key: "disconnectedCallback", value: function() { clearInterval(this.intervalId) } }]), t
        }(c(HTMLElement));
    return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = Ps, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", { value: !0 }), e
}({});
