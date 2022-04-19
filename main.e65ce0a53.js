this.wordle = this.wordle || {}, this.wordle.bundle = function (e) {
    "use strict";

    function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

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

    function i(e) { return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

    function l(e, a) { return (l = Object.setPrototypeOf || function (e, a) { return e.__proto__ = a, e })(e, a) }

    function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0 } catch (e) { return !1 } }

    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function (e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t));
            return s && l(o, s.prototype), o
        }).apply(null, arguments)
    }

    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function (e) {
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
        return function () {
            var s, t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else s = t.apply(this, arguments);
            return m(this, s)
        }
    }

    function y(e, a) {
        return function (e) { if (Array.isArray(e)) return e }(e) || function (e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s) return;
            var t, o, n = [],
                r = !0,
                i = !1;
            try { for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } }
            return n
        }(e, a) || b(e, a) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
    }

    function g(e) { return function (e) { if (Array.isArray(e)) return f(e) }(e) || function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || b(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function b(e, a) { if (e) { if ("string" == typeof e) return f(e, a); var s = Object.prototype.toString.call(e).slice(8, -1); return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0 } }

    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({ mode: "open" }), e }
        return o(t, [{ key: "last", set: function (e) { this._last = e } }, {
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function (a) { "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", { bubbles: !0, composed: !0 }))), e._render() })), this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function (e, a, s) {
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
        }, { key: "_render", value: function () { this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation)) } }], [{ key: "observedAttributes", get: function () { return ["letter", "evaluation", "reveal"] } }]), t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e._letters = "", e._evaluation = [], e._length, e }
        return o(t, [{
            key: "evaluation",
            get: function () { return this._evaluation },
            set: function (e) {
                var a = this;
                this._evaluation = e, this.$tiles && this.$tiles.forEach((function (e, s) { e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function () { e.setAttribute("reveal", "") }), 300 * s) }))
            }
        }, {
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function (a) {
                    var s = document.createElement("game-tile"),
                        t = e._letters[a];
                    (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function () { s.setAttribute("reveal", "") }), 100 * a));
                    a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                }, s = 0; s < this._length; s++) a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function (a) { "Shake" === a.animationName && e.removeAttribute("invalid") }))
            }
        }, {
            key: "attributeChangedCallback",
            value: function (e, a, s) {
                switch (e) {
                    case "letters":
                        this._letters = s || "";
                        break;
                    case "length":
                        this._length = parseInt(s, 10);
                        break;
                    case "win":
                        if (null === s) { this.$tiles.forEach((function (e) { e.classList.remove("win") })); break }
                        this.$tiles.forEach((function (e, a) { e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms") }))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function () {
                var e = this;
                this.$row && this.$tiles.forEach((function (a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }))
            }
        }], [{ key: "observedAttributes", get: function () { return ["letters", "length", "invalid", "win"] } }]), t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme11",
        S = "colorBlindTheme11",
        _ = function (e) {
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
                value: function (e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
                }
            }, {
                key: "setColorBlindTheme",
                value: function (e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
                }
            }, {
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function (a) {
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
    C.prototype.clear = function () { this.__data__ = [], this.size = 0 }, C.prototype.delete = function (e) {
        var a = this.__data__,
            s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
    }, C.prototype.get = function (e) {
        var a = this.__data__,
            s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }, C.prototype.has = function (e) { return E(this.__data__, e) > -1 }, C.prototype.set = function (e, a) {
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
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function (e) {
            var a = R.call(e, $),
                s = e[$];
            try { e[$] = void 0; var t = !0 } catch (e) { }
            var o = P.call(e);
            return t && (a ? e[$] = s : delete e[$]), o
        }(e) : function (e) { return H.call(e) }(e)
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

    function ee(e) { return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function (e) { if (null != e) { try { return J.call(e) } catch (e) { } try { return e + "" } catch (e) { } } return "" }(e)); var a }

    function ae(e, a) { var s = function (e, a) { return null == e ? void 0 : e[a] }(e, a); return ee(s) ? s : void 0 }
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
    re.prototype.clear = function () { this.__data__ = te ? te(null) : {}, this.size = 0 }, re.prototype.delete = function (e) { var a = this.has(e) && delete this.__data__[e]; return this.size -= a ? 1 : 0, a }, re.prototype.get = function (e) { var a = this.__data__; if (te) { var s = a[e]; return "__lodash_hash_undefined__" === s ? void 0 : s } return oe.call(a, e) ? a[e] : void 0 }, re.prototype.has = function (e) { var a = this.__data__; return te ? void 0 !== a[e] : ne.call(a, e) }, re.prototype.set = function (e, a) { var s = this.__data__; return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this }, le.prototype.clear = function () { this.size = 0, this.__data__ = { hash: new re, map: new (se || C), string: new re } }, le.prototype.delete = function (e) { var a = ie(this, e).delete(e); return this.size -= a ? 1 : 0, a }, le.prototype.get = function (e) { return ie(this, e).get(e) }, le.prototype.has = function (e) { return ie(this, e).has(e) }, le.prototype.set = function (e, a) {
        var s = ie(this, e),
            t = s.size;
        return s.set(e, a), this.size += s.size == t ? 0 : 1, this
    };

    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }
    de.prototype.clear = function () { this.__data__ = new C, this.size = 0 }, de.prototype.delete = function (e) {
        var a = this.__data__,
            s = a.delete(e);
        return this.size = a.size, s
    }, de.prototype.get = function (e) { return this.__data__.get(e) }, de.prototype.has = function (e) { return this.__data__.has(e) }, de.prototype.set = function (e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a), this.size = s.size, this
    };
    var ue = function () { try { var e = ae(Object, "defineProperty"); return e({}, "", {}), e } catch (e) { } }();

    function ce(e, a, s) { "__proto__" == a && ue ? ue(e, a, { configurable: !0, enumerable: !0, value: s, writable: !0 }) : e[a] = s }

    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }
    var me, he = function (e, a, s) { for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) { var i = n[me ? r : ++t]; if (!1 === a(o[i], i, o)) break } return e },
        ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0,
        fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) { var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer; return new e.constructor(o, e.byteOffset, e.length) }
    var we = Object.create,
        xe = function () {
            function e() { }
            return function (a) {
                if (!G(a)) return {};
                if (we) return we(a);
                e.prototype = a;
                var s = new e;
                return e.prototype = void 0, s
            }
        }();
    var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function (e) { return ze(je(e)) }),
        _e = Object.prototype;

    function qe(e) { var a = e && e.constructor; return e === ("function" == typeof a && a.prototype || _e) }

    function Ee(e) { return null != e && "object" == a(e) }

    function Ae(e) { return Ee(e) && "[object Arguments]" == D(e) }
    var Ce = Object.prototype,
        Le = Ce.hasOwnProperty,
        Te = Ce.propertyIsEnumerable,
        Ie = Ae(function () { return arguments }()) ? Ae : function (e) { return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee") },
        Me = Array.isArray;

    function Oe(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991 }

    function Re(e) { return null != e && Oe(e.length) && !B(e) }
    var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        He = $e && $e.exports === Pe ? I.Buffer : void 0,
        Ne = (He ? He.isBuffer : void 0) || function () { return !1 },
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
        Ve = function () { try { var e = Ue && Ue.require && Ue.require("util").types; return e || Xe && Xe.binding && Xe.binding("util") } catch (e) { } }(),
        Ke = Ve && Ve.isTypedArray,
        Qe = Ke ? function (e) { return function (a) { return e(a) } }(Ke) : function (e) { return Ee(e) && Oe(e.length) && !!Ye[D(e)] };

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
            i = r ? function (e, a) { for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s); return t }(e.length, String) : [],
            l = i.length;
        for (var d in e) !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
        if (!G(e)) return function (e) {
            var a = [];
            if (null != e)
                for (var s in Object(e)) a.push(s);
            return a
        }(e);
        var a = qe(e),
            s = [];
        for (var t in e) ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }

    function la(e) { return Re(e) ? na(e, !0) : ia(e) }

    function da(e) {
        return function (e, a, s, t) {
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
                c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function (e, a) {
                    var s = -1,
                        t = e.length;
                    for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                    return a
                }(i) : h ? (p = !1, c = function (e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                        t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t
                }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function (e) { if (!Ee(e) || "[object Object]" != D(e)) return !1; var a = Se(e); if (null === a) return !0; var s = Fe.call(a, "constructor") && a.constructor; return "function" == typeof s && s instanceof s && Be.call(s) == We }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function (e) { return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e)) }(l))) : p = !1
            }
            p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
        }
    }

    function ca(e, a, s, t, o) {
        e !== a && he(a, (function (n, r) {
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
    var ya = ue ? function (e, a) { return ue(e, "toString", { configurable: !0, enumerable: !1, value: (s = a, function () { return s }), writable: !0 }); var s } : pa,
        ga = Date.now;
    var ba = function (e) {
        var a = 0,
            s = 0;
        return function () {
            var t = ga(),
                o = 16 - (t - s);
            if (s = t, o > 0) { if (++a >= 800) return arguments[0] } else a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);

    function fa(e, a) {
        return ba(function (e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
                function () {
                    for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
                    o = -1;
                    for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                    return i[a] = s(r), ma(e, this, i)
                }
        }(e, a, pa), e + "")
    }
    var ka, va = (ka = function (e, a, s) { ca(e, a, s) }, fa((function (e, s) {
        var t = -1,
            o = s.length,
            n = o > 1 ? s[o - 1] : void 0,
            r = o > 2 ? s[2] : void 0;
        for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function (e, s, t) { if (!G(t)) return !1; var o = a(s); return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e) }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
            var i = s[t];
            i && ka(e, i, t, n)
        }
        return e
    }))),
        wa = "gameState11",
        xa = { boardState: null, evaluations: null, rowIndex: null, solution: null, gameStatus: null, lastPlayedTs: null, lastCompletedTs: null, restoringFromLocalStorage: null, hardMode: !1 };

    function za() { var e = window.localStorage.getItem(wa) || JSON.stringify(xa); return JSON.parse(e) }

    function ja(e) { var a = za(); ! function (e) { window.localStorage.setItem(wa, JSON.stringify(e)) }(va(a, e)) }
    var Sa = document.createElement("template");
    Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Challenge Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n<section>\n		 <div class ="setting" > \n <div class = "text" > \n <div class = "title" >Links</div>\n </div > \n <div class = "control" > \n   <a href = "https://www.facebook.com/groups/689305618784823" title = "Siteswaple on Facebook" target="_blank">Facebook group</a>\n | <a href="https://github.com/davebarnesy/Siteswaple" title="Github" target=" _blank">Github</a> | \n<a href="https://siteswapexplorer.com" title="Siteswap explorer" target=" _blank">Siteswap explorer</a>\n </div>\n      </div>\n    </section>\n <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Forked from </div> </div> <div class ="control">\n <a href="https://avipars.github.io/WordleOSS/index.html?utm_source=ghr">WordleOSS</a> | <a href="https://github.com/avipars/WordleOSS">Github</a> | <a href="https://www.facebook.com/groups/wordlefans/?ref=share">Group</a>  </div> \n </div>\n      </div>\n    </section>\n </div>\n  <div id="footnote">\n    <div>\n      <div id="copyright">Copyleft 2022. No Rights Reserved. </div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e, a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function (e) {
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
            value: function () {
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
    var Ea, Aa = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function () { a.classList.add("fade") }), this._duration), a.addEventListener("transitionend", (function (a) { e.parentNode.removeChild(e) }))
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
    var La = ["9195b", "08408", "84418", "a2288", "58539", "ab1b7", "13551", "647a8", "50069", "95506", "29617", "4a358", "23b86", "63178", "556b3", "b1b2a", "6b864", "68551", "8552a", "1b706", "33a8b", "03444", "b9550", "58647", "28622", "40b41", "06207", "8b920", "292a7", "25661", "5b969", "45524", "53a34", "07990", "229bb", "567a7", "1289a", "49142", "01202", "1b364", "7a20b", "9aa56", "b4014", "07292", "16620", "3196b", "81885", "80025", "723b2", "05118", "45074", "550b9", "12773", "a24b3", "49953", "41672", "90506", "ab469", "3a84a", "055aa", "69ab4", "69195", "b4145", "88342", "aa00a", "2242a", "39297", "07562", "9744b", "00ab4", "03633", "64758", "49aa7", "33a31", "b4aa5", "40b4b", "0b6b7", "33333", "63b41", "a3697", "3039a", "72777", "b779b", "2318b", "25bb1", "79400", "274b6", "68646", "4ab9b", "201b1", "57067", "253b4", "b45a5", "7a620", "2a625", "86830", "bb6b1", "20b20", "16b25", "a66b2", "6b62a", "4b9a6", "a1405", "4b334", "66206", "2283a", "95844", "b8a56", "02963", "80723", "b6350", "168b4", "8a025", "a0519", "05019", "78631", "1b774", "27862", "b3641", "b88a8", "5b9a5", "66756", "29239", "23802", "94683", "03002", "29405", "68aa1", "44449", "35a6b", "80a25", "50a64", "56914", "6b779", "22777", "190b4", "ab95a", "50505", "61616", "62368", "7a850", "40b46", "661b1", "17278", "68051", "4a678", "0a190", "a7a80", "b355b", "97581", "a6707", "35525", "64014", "72817", "9b406", "02a8a", "08a34", "a1680", "623b8", "51455", "5b7a7", "968a7", "8b470", "36916", "9514b", "a2a35", "625b6", "25b70", "2a8aa", "0a203", "12ab6", "2a166", "69b63", "34990", "8589a", "708b9", "62345", "8051b", "49138", "07783", "47a27", "890b7", "840b2", "855bb", "9799b", "05b95", "41131", "17241", "ab4a0", "1bb20", "36817", "206b6", "111b1", "aa195", "b11b6", "6800b", "633a3", "747a2", "201bb", "41451", "73b72", "673b8", "3b781", "34797", "0aab4", "b9a5a", "75625", "03aa7", "50203", "40899", "14a50", "45141", "86975", "35746", "88a3b", "5a244", "68b46", "97072", "550b4", "52445", "ab9a0", "4b884", "4a0ab", "b202a", "2238a", "b9055", "a6112", "70120", "70756", "500b9", "690a0", "41929", "12516", "0ab13", "17895", "81222", "011b7", "5a0aa", "29914", "30ab1", "1bb11", "552a8", "2723b", "9b956", "a1734", "11701", "69794", "b8a5b", "18394", "24789", "02783", "88842", "8a313", "a7968", "b8aa6", "b455a", "a7067", "b751b", "8506b", "a1180", "6b85a", "1256b", "63349", "62273", "39733", "49039", "a2738", "74789", "180ab", "46636", "89445", "bb30a", "303b3", "5a5a0", "18849", "79bb7", "01739", "b8394", "20b2a", "258aa", "34517", "27330", "53133", "25724", "a7562", "3b425", "5aab4", "94b38", "02512", "4a5a1", "8a011", "0690a", "7a819", "4b18b", "8b781", "36227", "5b630", "03a89", "31786", "3a016", "6b17a", "74234", "a3a84", "9aa51", "4253b", "4b627", "56680", "17511", "23636", "69645", "4208b", "28924", "784a1", "95b91", "50bb8", "b8858", "4a191", "a8183", "a5a69", "24685", "46384", "1729b", "208b4", "55294", "123b3", "4294b", "14555", "3a89a", "b4299", "30a1b", "66666", "22227", "55aa5", "96672", "73807", "02418", "a5799", "9145b", "9a123", "08b97", "35a2a", "bb774", "86272", "b7723", "0a5b4", "7445a", "44138", "6b300", "5a05a", "5abb8", "19253", "bb8b9", "75b1b", "34a17", "2291b", "91681", "a7990", "0a0b4", "a7ab2", "18803", "02297", "56905", "4bb77", "72385", "03a57", "02233", "4b13b", "19640", "28389", "51167", "ab752", "aa519", "034a3", "67296", "2792a", "56734", "a5753", "27786", "63551", "70805", "18308", "68b73", "bb3a0", "2030a", "45556", "50a5a", "13358", "99b97", "a3683", "9258b", "b6620", "80a66", "6bb25", "49507", "64695", "a0050", "617ab", "78339", "5b112", "b6701", "61175", "58002", "36862", "68aa6", "6900a", "06739", "44a57", "8b830", "8994a", "86420", "a8a89", "80ab1", "707a1", "17a2a", "13529", "8403a", "53584", "80313", "34233", "3b231", "8aa75", "014a0", "36722", "562a7", "0a064", "95146", "5b4aa", "45579", "0b9a0", "38946", "73177", "34495", "74464", "a62a7", "844b8", "44b38", "5113a", "5799a", "8a07a", "56207", "69708", "40853", "9b4a1", "0249a", "620b1", "bb8a5", "9b8a2", "a564a", "73b77", "a5695", "a8197", "a5b68", "8499a", "30845", "5b239", "5a749", "9500b", "51405", "80368", "8aa2a", "5a19a", "b667a", "24289", "569a5", "b3628", "91b86", "58642", "a1112", "4203b", "9a579", "23302", "128b8", "68001", "b8a29", "0a1b8", "47833", "9bb27", "b9299", "00749", "68123", "8128b", "a0744", "28951", "85525", "41681", "33338", "253b9", "75125", "b20b6", "8a06b", "789ab", "ab68a", "666bb", "3b33a", "81975", "50613", "84512", "33847", "5a014", "13a0b", "33928", "14a14", "19a0a", "85516", "a00a5", "a0b95", "29bb2", "00514", "91672", "27731", "6300b", "7017a", "16819", "08a52", "050aa", "a5a5a", "5a203", "b78b3", "b369b", "8a0b6", "94994", "0b734", "22975", "27420", "57ab7", "44a07", "55b68", "7062a", "bbbb6", "47527", "b8aab", "51630", "7512a", "42572", "b40aa", "aab13", "4a8a3", "70b1b", "abb62", "b7868", "a6135", "00663", "b8a01", "3628b", "89990", "b1616", "64753", "2247a", "a6757", "4569b", "7035a", "61666", "69294", "31420", "6670b", "6b661", "b1364", "29685", "41b3b", "94034", "38a3b", "0a6b8", "b1206", "3b47a", "701b6", "36411", "68574", "06112", "55753", "a6202", "61274", "77277", "00703", "64b9a", "84247", "014a5", "97996", "5b950", "a3192", "616bb", "5b252", "72312", "294b4", "a0190", "783a2", "a5140", "31817", "64163", "3a8b8", "50113", "69a69", "29789", "42923", "113b9", "14668", "16175", "36286", "aaa69", "666b1", "8641b", "52238", "8303b", "47a3b", "aaa64", "8a791", "a645a", "aa005", "94142", "a7a12", "283a7", "01667", "955ab", "75bb1", "66b6b", "b96b8", "bb355", "a168a", "06117", "23131", "6685a", "53084", "1b8a0", "b1355", "18349", "99a07", "68844", "b111b", "6611b", "51b3a", "17a6b", "20350", "8a34a", "b9799", "5014a", "5a6b3", "123b8", "3458a", "80813", "b68a5", "9b807", "0a550", "279b6", "b6170", "97847", "39995", "38a86", "b9253", "97478", "73b36", "44197", "50208", "88892", "02445", "289ab", "89733", "62863", "bbb6b", "2a8a0", "797a2", "1400a", "28424", "a8133", "b1774", "aa799", "318b2", "057a3", "51b80", "51685", "aa168", "62566", "57a17", "bb224", "64b18", "17345", "064aa", "1b3b9", "7abb6", "239a1", "05b9a", "01bb7", "aa0a5", "a8449", "08642", "91807", "42a31", "002a8", "0b13a", "00b45", "b419a", "555a5", "55145", "5a55a", "74405", "89738", "a7463", "35a66", "33577", "47342", "16855", "b9064", "77830", "17863", "69aaa", "6b2ab", "a069a", "78889", "4ab46", "34a35", "b3191", "403a8", "b35a6", "805b6", "03b38", "6b206", "03534", "6bb20", "73127", "9055b", "5abb3", "03142", "a19aa", "8a74b", "06239", "30228", "618aa", "62313", "3a728", "b7278", "38392", "64000", "8b28b", "1314b", "a3197", "a14a0", "84085", "9a5ab", "19663", "95399", "ab6b2", "83527", "a35a2", "14b90", "40691", "661bb", "73857", "24b12", "80890", "22812", "8146b", "b4050", "0b1b2", "791b2", "5208a", "06667", "1864b", "35813", "72367", "b7728", "9a5a1", "70850", "33883", "5bb8a", "17791", "80a11", "7a12a", "125bb", "444a3", "05064", "7075b", "70166", "b28b8", "a019a", "35511", "07067", "6b125", "1964a", "66175", "b630a", "9758b", "a5a50", "40178", "46677", "64294", "40024", "94089", "562a2", "02517", "575b2", "1b1b6", "47847", "78456", "56964", "3b73b", "64618", "b7011", "8b867", "ab900", "70774", "9aaa6", "07580", "b3b46", "a8188", "14690", "89ab2", "03b92", "8b312", "36731", "a6117", "74919", "05618", "73686", "2918a", "b6819", "83a22", "b6729", "550a5", "1b625", "24185", "bb300", "50aa0", "78681", "a1bb7", "72786", "701bb", "6630a", "a0ab4", "85a1b", "28122", "85025", "73429", "44502", "4005b", "b1779", "a2490", "9118b", "68623", "70814", "57012", "06919", "53138", "13673", "28406", "95a24", "0aaa5", "8133a", "33892", "20b11", "55ab4", "20675", "38a31", "a7580", "0b752", "b1120", "8b4bb", "13b91", "01414", "41951", "7738a", "080a7", "84062", "5a5b4", "25805", "06630", "46181", "bb670", "b8173", "249aa", "a5613", "36777", "38991", "44b92", "79455", "6b369", "bb201", "86312", "3958a", "79112", "52440", "24914", "208a5", "6662a", "a01b8", "19a14", "b6666", "869b6", "5b635", "9b451", "16bb6", "38581", "a0a0a", "000b4", "79707", "292a2", "66701", "47031", "ab1b2", "53688", "31461", "96857", "18853", "4a628", "92022", "5aa14", "28b27", "97473", "2363b", "03b97", "8b975", "99133", "9b334", "1b25b", "99b47", "00064", "b756b", "29739", "bb751", "06969", "aabb8", "bbb1b", "89580", "799aa", "062a2", "251bb", "aa000", "4b906", "25756", "2a20b", "49a39", "b6b16", "7463a", "90899", "2a864", "6b274", "53b42", "68196", "79284", "70701", "24b80", "27335", "9a64b", "85868", "6b3b9", "b1b1b", "12813", "195b4", "1116b", "3574b", "584a8", "a7a3a", "9aa5b", "77781", "05a5a", "33a81", "85278", "7ab2a", "0a000", "175bb", "0b207", "42478", "92842", "64a64", "8a363", "45079", "813b7", "0b185", "68b91", "1662a", "b61b1", "a5645", "90a0b", "500a0", "89a67", "2a350", "3303b", "6964a", "90a56", "36961", "8638a", "84445", "a05a0", "ab252", "06b8a", "30796", "b9aaa", "a6b80", "00a14", "4050b", "5690a", "0a019", "16279", "5a0b4", "499a3", "0b667", "b3b78", "34535", "bb62a", "27772", "8a291"],
        Ta = ["00000", "00005", "0000a", "00014", "00019", "00050", "00055", "0005a", "00064", "00069", "000a0", "000a5", "000aa", "000b4", "000b9", "00113", "00118", "00140", "00145", "0014a", "00163", "00168", "00190", "00195", "0019a", "001b3", "001b8", "00203", "00208", "00244", "00249", "00253", "00258", "00294", "00299", "002a3", "002a8", "00500", "00505", "0050a", "00514", "00519", "00550", "00555", "0055a", "00564", "00569", "005a0", "005a5", "005aa", "005b4", "005b9", "00613", "00618", "00640", "00645", "0064a", "00663", "00668", "00690", "00695", "0069a", "006b3", "006b8", "00703", "00708", "00744", "00749", "00753", "00758", "00794", "00799", "007a3", "007a8", "00a00", "00a05", "00a0a", "00a14", "00a19", "00a50", "00a55", "00a5a", "00a64", "00a69", "00aa0", "00aa5", "00aaa", "00ab4", "00ab9", "00b13", "00b18", "00b40", "00b45", "00b4a", "00b63", "00b68", "00b90", "00b95", "00b9a", "00bb3", "00bb8", "01112", "01117", "01130", "01135", "0113a", "01162", "01167", "01180", "01185", "0118a", "011b2", "011b7", "01202", "01207", "01234", "01239", "01252", "01257", "01284", "01289", "012a2", "012a7", "01400", "01405", "0140a", "01414", "01419", "01450", "01455", "0145a", "01464", "01469", "014a0", "014a5", "014aa", "014b4", "014b9", "01612", "01617", "01630", "01635", "0163a", "01662", "01667", "01680", "01685", "0168a", "016b2", "016b7", "01702", "01707", "01734", "01739", "01752", "01757", "01784", "01789", "017a2", "017a7", "01900", "01905", "0190a", "01914", "01919", "01950", "01955", "0195a", "01964", "01969", "019a0", "019a5", "019aa", "019b4", "019b9", "01b12", "01b17", "01b30", "01b35", "01b3a", "01b62", "01b67", "01b80", "01b85", "01b8a", "01bb2", "01bb7", "02012", "02017", "02030", "02035", "0203a", "02062", "02067", "02080", "02085", "0208a", "020b2", "020b7", "02233", "02238", "02242", "02247", "02283", "02288", "02292", "02297", "02413", "02418", "02440", "02445", "0244a", "02463", "02468", "02490", "02495", "0249a", "024b3", "024b8", "02512", "02517", "02530", "02535", "0253a", "02562", "02567", "02580", "02585", "0258a", "025b2", "025b7", "02733", "02738", "02742", "02747", "02783", "02788", "02792", "02797", "02913", "02918", "02940", "02945", "0294a", "02963", "02968", "02990", "02995", "0299a", "029b3", "029b8", "02a12", "02a17", "02a30", "02a35", "02a3a", "02a62", "02a67", "02a80", "02a85", "02a8a", "02ab2", "02ab7", "03002", "03007", "03034", "03039", "03052", "03057", "03084", "03089", "030a2", "030a7", "03133", "03138", "03142", "03147", "03183", "03188", "03192", "03197", "03403", "03408", "03444", "03449", "03453", "03458", "03494", "03499", "034a3", "034a8", "03502", "03507", "03534", "03539", "03552", "03557", "03584", "03589", "035a2", "035a7", "03633", "03638", "03642", "03647", "03683", "03688", "03692", "03697", "03903", "03908", "03944", "03949", "03953", "03958", "03994", "03999", "039a3", "039a8", "03a02", "03a07", "03a34", "03a39", "03a52", "03a57", "03a84", "03a89", "03aa2", "03aa7", "03b33", "03b38", "03b42", "03b47", "03b83", "03b88", "03b92", "03b97", "05000", "05005", "0500a", "05014", "05019", "05050", "05055", "0505a", "05064", "05069", "050a0", "050a5", "050aa", "050b4", "050b9", "05113", "05118", "05140", "05145", "0514a", "05163", "05168", "05190", "05195", "0519a", "051b3", "051b8", "05203", "05208", "05244", "05249", "05253", "05258", "05294", "05299", "052a3", "052a8", "05500", "05505", "0550a", "05514", "05519", "05550", "05555", "0555a", "05564", "05569", "055a0", "055a5", "055aa", "055b4", "055b9", "05613", "05618", "05640", "05645", "0564a", "05663", "05668", "05690", "05695", "0569a", "056b3", "056b8", "05703", "05708", "05744", "05749", "05753", "05758", "05794", "05799", "057a3", "057a8", "05a00", "05a05", "05a0a", "05a14", "05a19", "05a50", "05a55", "05a5a", "05a64", "05a69", "05aa0", "05aa5", "05aaa", "05ab4", "05ab9", "05b13", "05b18", "05b40", "05b45", "05b4a", "05b63", "05b68", "05b90", "05b95", "05b9a", "05bb3", "05bb8", "06112", "06117", "06130", "06135", "0613a", "06162", "06167", "06180", "06185", "0618a", "061b2", "061b7", "06202", "06207", "06234", "06239", "06252", "06257", "06284", "06289", "062a2", "062a7", "06400", "06405", "0640a", "06414", "06419", "06450", "06455", "0645a", "06464", "06469", "064a0", "064a5", "064aa", "064b4", "064b9", "06612", "06617", "06630", "06635", "0663a", "06662", "06667", "06680", "06685", "0668a", "066b2", "066b7", "06702", "06707", "06734", "06739", "06752", "06757", "06784", "06789", "067a2", "067a7", "06900", "06905", "0690a", "06914", "06919", "06950", "06955", "0695a", "06964", "06969", "069a0", "069a5", "069aa", "069b4", "069b9", "06b12", "06b17", "06b30", "06b35", "06b3a", "06b62", "06b67", "06b80", "06b85", "06b8a", "06bb2", "06bb7", "07012", "07017", "07030", "07035", "0703a", "07062", "07067", "07080", "07085", "0708a", "070b2", "070b7", "07233", "07238", "07242", "07247", "07283", "07288", "07292", "07297", "07413", "07418", "07440", "07445", "0744a", "07463", "07468", "07490", "07495", "0749a", "074b3", "074b8", "07512", "07517", "07530", "07535", "0753a", "07562", "07567", "07580", "07585", "0758a", "075b2", "075b7", "07733", "07738", "07742", "07747", "07783", "07788", "07792", "07797", "07913", "07918", "07940", "07945", "0794a", "07963", "07968", "07990", "07995", "0799a", "079b3", "079b8", "07a12", "07a17", "07a30", "07a35", "07a3a", "07a62", "07a67", "07a80", "07a85", "07a8a", "07ab2", "07ab7", "08002", "08007", "08034", "08039", "08052", "08057", "08084", "08089", "080a2", "080a7", "08133", "08138", "08142", "08147", "08183", "08188", "08192", "08197", "08403", "08408", "08444", "08449", "08453", "08458", "08494", "08499", "084a3", "084a8", "08502", "08507", "08534", "08539", "08552", "08557", "08584", "08589", "085a2", "085a7", "08633", "08638", "08642", "08647", "08683", "08688", "08692", "08697", "08903", "08908", "08944", "08949", "08953", "08958", "08994", "08999", "089a3", "089a8", "08a02", "08a07", "08a34", "08a39", "08a52", "08a57", "08a84", "08a89", "08aa2", "08aa7", "08b33", "08b38", "08b42", "08b47", "08b83", "08b88", "08b92", "08b97", "0a000", "0a005", "0a00a", "0a014", "0a019", "0a050", "0a055", "0a05a", "0a064", "0a069", "0a0a0", "0a0a5", "0a0aa", "0a0b4", "0a0b9", "0a113", "0a118", "0a140", "0a145", "0a14a", "0a163", "0a168", "0a190", "0a195", "0a19a", "0a1b3", "0a1b8", "0a203", "0a208", "0a244", "0a249", "0a253", "0a258", "0a294", "0a299", "0a2a3", "0a2a8", "0a500", "0a505", "0a50a", "0a514", "0a519", "0a550", "0a555", "0a55a", "0a564", "0a569", "0a5a0", "0a5a5", "0a5aa", "0a5b4", "0a5b9", "0a613", "0a618", "0a640", "0a645", "0a64a", "0a663", "0a668", "0a690", "0a695", "0a69a", "0a6b3", "0a6b8", "0a703", "0a708", "0a744", "0a749", "0a753", "0a758", "0a794", "0a799", "0a7a3", "0a7a8", "0aa00", "0aa05", "0aa0a", "0aa14", "0aa19", "0aa50", "0aa55", "0aa5a", "0aa64", "0aa69", "0aaa0", "0aaa5", "0aaaa", "0aab4", "0aab9", "0ab13", "0ab18", "0ab40", "0ab45", "0ab4a", "0ab63", "0ab68", "0ab90", "0ab95", "0ab9a", "0abb3", "0abb8", "0b112", "0b117", "0b130", "0b135", "0b13a", "0b162", "0b167", "0b180", "0b185", "0b18a", "0b1b2", "0b1b7", "0b202", "0b207", "0b234", "0b239", "0b252", "0b257", "0b284", "0b289", "0b2a2", "0b2a7", "0b400", "0b405", "0b40a", "0b414", "0b419", "0b450", "0b455", "0b45a", "0b464", "0b469", "0b4a0", "0b4a5", "0b4aa", "0b4b4", "0b4b9", "0b612", "0b617", "0b630", "0b635", "0b63a", "0b662", "0b667", "0b680", "0b685", "0b68a", "0b6b2", "0b6b7", "0b702", "0b707", "0b734", "0b739", "0b752", "0b757", "0b784", "0b789", "0b7a2", "0b7a7", "0b900", "0b905", "0b90a", "0b914", "0b919", "0b950", "0b955", "0b95a", "0b964", "0b969", "0b9a0", "0b9a5", "0b9aa", "0b9b4", "0b9b9", "0bb12", "0bb17", "0bb30", "0bb35", "0bb3a", "0bb62", "0bb67", "0bb80", "0bb85", "0bb8a", "0bbb2", "0bbb7", "11111", "11116", "1111b", "11120", "11125", "1112a", "11161", "11166", "1116b", "11170", "11175", "1117a", "111b1", "111b6", "111bb", "11201", "11206", "1120b", "11224", "11229", "11251", "11256", "1125b", "11274", "11279", "112a1", "112a6", "112ab", "11300", "11305", "1130a", "11314", "11319", "11350", "11355", "1135a", "11364", "11369", "113a0", "113a5", "113aa", "113b4", "113b9", "11611", "11616", "1161b", "11620", "11625", "1162a", "11661", "11666", "1166b", "11670", "11675", "1167a", "116b1", "116b6", "116bb", "11701", "11706", "1170b", "11724", "11729", "11751", "11756", "1175b", "11774", "11779", "117a1", "117a6", "117ab", "11800", "11805", "1180a", "11814", "11819", "11850", "11855", "1185a", "11864", "11869", "118a0", "118a5", "118aa", "118b4", "118b9", "11b11", "11b16", "11b1b", "11b20", "11b25", "11b2a", "11b61", "11b66", "11b6b", "11b70", "11b75", "11b7a", "11bb1", "11bb6", "11bbb", "12011", "12016", "1201b", "12020", "12025", "1202a", "12061", "12066", "1206b", "12070", "12075", "1207a", "120b1", "120b6", "120bb", "12223", "12228", "12241", "12246", "1224b", "12273", "12278", "12291", "12296", "1229b", "12313", "12318", "12340", "12345", "1234a", "12363", "12368", "12390", "12395", "1239a", "123b3", "123b8", "12511", "12516", "1251b", "12520", "12525", "1252a", "12561", "12566", "1256b", "12570", "12575", "1257a", "125b1", "125b6", "125bb", "12723", "12728", "12741", "12746", "1274b", "12773", "12778", "12791", "12796", "1279b", "12813", "12818", "12840", "12845", "1284a", "12863", "12868", "12890", "12895", "1289a", "128b3", "128b8", "12a11", "12a16", "12a1b", "12a20", "12a25", "12a2a", "12a61", "12a66", "12a6b", "12a70", "12a75", "12a7a", "12ab1", "12ab6", "12abb", "13001", "13006", "1300b", "13024", "13029", "13051", "13056", "1305b", "13074", "13079", "130a1", "130a6", "130ab", "13123", "13128", "13141", "13146", "1314b", "13173", "13178", "13191", "13196", "1319b", "13303", "13308", "13344", "13349", "13353", "13358", "13394", "13399", "133a3", "133a8", "13501", "13506", "1350b", "13524", "13529", "13551", "13556", "1355b", "13574", "13579", "135a1", "135a6", "135ab", "13623", "13628", "13641", "13646", "1364b", "13673", "13678", "13691", "13696", "1369b", "13803", "13808", "13844", "13849", "13853", "13858", "13894", "13899", "138a3", "138a8", "13a01", "13a06", "13a0b", "13a24", "13a29", "13a51", "13a56", "13a5b", "13a74", "13a79", "13aa1", "13aa6", "13aab", "13b23", "13b28", "13b41", "13b46", "13b4b", "13b73", "13b78", "13b91", "13b96", "13b9b", "14000", "14005", "1400a", "14014", "14019", "14050", "14055", "1405a", "14064", "14069", "140a0", "140a5", "140aa", "140b4", "140b9", "14113", "14118", "14140", "14145", "1414a", "14163", "14168", "14190", "14195", "1419a", "141b3", "141b8", "14203", "14208", "14244", "14249", "14253", "14258", "14294", "14299", "142a3", "142a8", "14500", "14505", "1450a", "14514", "14519", "14550", "14555", "1455a", "14564", "14569", "145a0", "145a5", "145aa", "145b4", "145b9", "14613", "14618", "14640", "14645", "1464a", "14663", "14668", "14690", "14695", "1469a", "146b3", "146b8", "14703", "14708", "14744", "14749", "14753", "14758", "14794", "14799", "147a3", "147a8", "14a00", "14a05", "14a0a", "14a14", "14a19", "14a50", "14a55", "14a5a", "14a64", "14a69", "14aa0", "14aa5", "14aaa", "14ab4", "14ab9", "14b13", "14b18", "14b40", "14b45", "14b4a", "14b63", "14b68", "14b90", "14b95", "14b9a", "14bb3", "14bb8", "16111", "16116", "1611b", "16120", "16125", "1612a", "16161", "16166", "1616b", "16170", "16175", "1617a", "161b1", "161b6", "161bb", "16201", "16206", "1620b", "16224", "16229", "16251", "16256", "1625b", "16274", "16279", "162a1", "162a6", "162ab", "16300", "16305", "1630a", "16314", "16319", "16350", "16355", "1635a", "16364", "16369", "163a0", "163a5", "163aa", "163b4", "163b9", "16611", "16616", "1661b", "16620", "16625", "1662a", "16661", "16666", "1666b", "16670", "16675", "1667a", "166b1", "166b6", "166bb", "16701", "16706", "1670b", "16724", "16729", "16751", "16756", "1675b", "16774", "16779", "167a1", "167a6", "167ab", "16800", "16805", "1680a", "16814", "16819", "16850", "16855", "1685a", "16864", "16869", "168a0", "168a5", "168aa", "168b4", "168b9", "16b11", "16b16", "16b1b", "16b20", "16b25", "16b2a", "16b61", "16b66", "16b6b", "16b70", "16b75", "16b7a", "16bb1", "16bb6", "16bbb", "17011", "17016", "1701b", "17020", "17025", "1702a", "17061", "17066", "1706b", "17070", "17075", "1707a", "170b1", "170b6", "170bb", "17223", "17228", "17241", "17246", "1724b", "17273", "17278", "17291", "17296", "1729b", "17313", "17318", "17340", "17345", "1734a", "17363", "17368", "17390", "17395", "1739a", "173b3", "173b8", "17511", "17516", "1751b", "17520", "17525", "1752a", "17561", "17566", "1756b", "17570", "17575", "1757a", "175b1", "175b6", "175bb", "17723", "17728", "17741", "17746", "1774b", "17773", "17778", "17791", "17796", "1779b", "17813", "17818", "17840", "17845", "1784a", "17863", "17868", "17890", "17895", "1789a", "178b3", "178b8", "17a11", "17a16", "17a1b", "17a20", "17a25", "17a2a", "17a61", "17a66", "17a6b", "17a70", "17a75", "17a7a", "17ab1", "17ab6", "17abb", "18001", "18006", "1800b", "18024", "18029", "18051", "18056", "1805b", "18074", "18079", "180a1", "180a6", "180ab", "18123", "18128", "18141", "18146", "1814b", "18173", "18178", "18191", "18196", "1819b", "18303", "18308", "18344", "18349", "18353", "18358", "18394", "18399", "183a3", "183a8", "18501", "18506", "1850b", "18524", "18529", "18551", "18556", "1855b", "18574", "18579", "185a1", "185a6", "185ab", "18623", "18628", "18641", "18646", "1864b", "18673", "18678", "18691", "18696", "1869b", "18803", "18808", "18844", "18849", "18853", "18858", "18894", "18899", "188a3", "188a8", "18a01", "18a06", "18a0b", "18a24", "18a29", "18a51", "18a56", "18a5b", "18a74", "18a79", "18aa1", "18aa6", "18aab", "18b23", "18b28", "18b41", "18b46", "18b4b", "18b73", "18b78", "18b91", "18b96", "18b9b", "19000", "19005", "1900a", "19014", "19019", "19050", "19055", "1905a", "19064", "19069", "190a0", "190a5", "190aa", "190b4", "190b9", "19113", "19118", "19140", "19145", "1914a", "19163", "19168", "19190", "19195", "1919a", "191b3", "191b8", "19203", "19208", "19244", "19249", "19253", "19258", "19294", "19299", "192a3", "192a8", "19500", "19505", "1950a", "19514", "19519", "19550", "19555", "1955a", "19564", "19569", "195a0", "195a5", "195aa", "195b4", "195b9", "19613", "19618", "19640", "19645", "1964a", "19663", "19668", "19690", "19695", "1969a", "196b3", "196b8", "19703", "19708", "19744", "19749", "19753", "19758", "19794", "19799", "197a3", "197a8", "19a00", "19a05", "19a0a", "19a14", "19a19", "19a50", "19a55", "19a5a", "19a64", "19a69", "19aa0", "19aa5", "19aaa", "19ab4", "19ab9", "19b13", "19b18", "19b40", "19b45", "19b4a", "19b63", "19b68", "19b90", "19b95", "19b9a", "19bb3", "19bb8", "1b111", "1b116", "1b11b", "1b120", "1b125", "1b12a", "1b161", "1b166", "1b16b", "1b170", "1b175", "1b17a", "1b1b1", "1b1b6", "1b1bb", "1b201", "1b206", "1b20b", "1b224", "1b229", "1b251", "1b256", "1b25b", "1b274", "1b279", "1b2a1", "1b2a6", "1b2ab", "1b300", "1b305", "1b30a", "1b314", "1b319", "1b350", "1b355", "1b35a", "1b364", "1b369", "1b3a0", "1b3a5", "1b3aa", "1b3b4", "1b3b9", "1b611", "1b616", "1b61b", "1b620", "1b625", "1b62a", "1b661", "1b666", "1b66b", "1b670", "1b675", "1b67a", "1b6b1", "1b6b6", "1b6bb", "1b701", "1b706", "1b70b", "1b724", "1b729", "1b751", "1b756", "1b75b", "1b774", "1b779", "1b7a1", "1b7a6", "1b7ab", "1b800", "1b805", "1b80a", "1b814", "1b819", "1b850", "1b855", "1b85a", "1b864", "1b869", "1b8a0", "1b8a5", "1b8aa", "1b8b4", "1b8b9", "1bb11", "1bb16", "1bb1b", "1bb20", "1bb25", "1bb2a", "1bb61", "1bb66", "1bb6b", "1bb70", "1bb75", "1bb7a", "1bbb1", "1bbb6", "1bbbb", "20111", "20116", "2011b", "20120", "20125", "2012a", "20161", "20166", "2016b", "20170", "20175", "2017a", "201b1", "201b6", "201bb", "20201", "20206", "2020b", "20224", "20229", "20251", "20256", "2025b", "20274", "20279", "202a1", "202a6", "202ab", "20300", "20305", "2030a", "20314", "20319", "20350", "20355", "2035a", "20364", "20369", "203a0", "203a5", "203aa", "203b4", "203b9", "20611", "20616", "2061b", "20620", "20625", "2062a", "20661", "20666", "2066b", "20670", "20675", "2067a", "206b1", "206b6", "206bb", "20701", "20706", "2070b", "20724", "20729", "20751", "20756", "2075b", "20774", "20779", "207a1", "207a6", "207ab", "20800", "20805", "2080a", "20814", "20819", "20850", "20855", "2085a", "20864", "20869", "208a0", "208a5", "208aa", "208b4", "208b9", "20b11", "20b16", "20b1b", "20b20", "20b25", "20b2a", "20b61", "20b66", "20b6b", "20b70", "20b75", "20b7a", "20bb1", "20bb6", "20bbb", "22222", "22227", "22231", "22236", "2223b", "22272", "22277", "22281", "22286", "2228b", "22312", "22317", "22330", "22335", "2233a", "22362", "22367", "22380", "22385", "2238a", "223b2", "223b7", "22411", "22416", "2241b", "22420", "22425", "2242a", "22461", "22466", "2246b", "22470", "22475", "2247a", "224b1", "224b6", "224bb", "22722", "22727", "22731", "22736", "2273b", "22772", "22777", "22781", "22786", "2278b", "22812", "22817", "22830", "22835", "2283a", "22862", "22867", "22880", "22885", "2288a", "228b2", "228b7", "22911", "22916", "2291b", "22920", "22925", "2292a", "22961", "22966", "2296b", "22970", "22975", "2297a", "229b1", "229b6", "229bb", "23122", "23127", "23131", "23136", "2313b", "23172", "23177", "23181", "23186", "2318b", "23302", "23307", "23334", "23339", "23352", "23357", "23384", "23389", "233a2", "233a7", "23401", "23406", "2340b", "23424", "23429", "23451", "23456", "2345b", "23474", "23479", "234a1", "234a6", "234ab", "23622", "23627", "23631", "23636", "2363b", "23672", "23677", "23681", "23686", "2368b", "23802", "23807", "23834", "23839", "23852", "23857", "23884", "23889", "238a2", "238a7", "23901", "23906", "2390b", "23924", "23929", "23951", "23956", "2395b", "23974", "23979", "239a1", "239a6", "239ab", "23b22", "23b27", "23b31", "23b36", "23b3b", "23b72", "23b77", "23b81", "23b86", "23b8b", "24112", "24117", "24130", "24135", "2413a", "24162", "24167", "24180", "24185", "2418a", "241b2", "241b7", "24202", "24207", "24234", "24239", "24252", "24257", "24284", "24289", "242a2", "242a7", "24400", "24405", "2440a", "24414", "24419", "24450", "24455", "2445a", "24464", "24469", "244a0", "244a5", "244aa", "244b4", "244b9", "24612", "24617", "24630", "24635", "2463a", "24662", "24667", "24680", "24685", "2468a", "246b2", "246b7", "24702", "24707", "24734", "24739", "24752", "24757", "24784", "24789", "247a2", "247a7", "24900", "24905", "2490a", "24914", "24919", "24950", "24955", "2495a", "24964", "24969", "249a0", "249a5", "249aa", "249b4", "249b9", "24b12", "24b17", "24b30", "24b35", "24b3a", "24b62", "24b67", "24b80", "24b85", "24b8a", "24bb2", "24bb7", "25111", "25116", "2511b", "25120", "25125", "2512a", "25161", "25166", "2516b", "25170", "25175", "2517a", "251b1", "251b6", "251bb", "25201", "25206", "2520b", "25224", "25229", "25251", "25256", "2525b", "25274", "25279", "252a1", "252a6", "252ab", "25300", "25305", "2530a", "25314", "25319", "25350", "25355", "2535a", "25364", "25369", "253a0", "253a5", "253aa", "253b4", "253b9", "25611", "25616", "2561b", "25620", "25625", "2562a", "25661", "25666", "2566b", "25670", "25675", "2567a", "256b1", "256b6", "256bb", "25701", "25706", "2570b", "25724", "25729", "25751", "25756", "2575b", "25774", "25779", "257a1", "257a6", "257ab", "25800", "25805", "2580a", "25814", "25819", "25850", "25855", "2585a", "25864", "25869", "258a0", "258a5", "258aa", "258b4", "258b9", "25b11", "25b16", "25b1b", "25b20", "25b25", "25b2a", "25b61", "25b66", "25b6b", "25b70", "25b75", "25b7a", "25bb1", "25bb6", "25bbb", "27222", "27227", "27231", "27236", "2723b", "27272", "27277", "27281", "27286", "2728b", "27312", "27317", "27330", "27335", "2733a", "27362", "27367", "27380", "27385", "2738a", "273b2", "273b7", "27411", "27416", "2741b", "27420", "27425", "2742a", "27461", "27466", "2746b", "27470", "27475", "2747a", "274b1", "274b6", "274bb", "27722", "27727", "27731", "27736", "2773b", "27772", "27777", "27781", "27786", "2778b", "27812", "27817", "27830", "27835", "2783a", "27862", "27867", "27880", "27885", "2788a", "278b2", "278b7", "27911", "27916", "2791b", "27920", "27925", "2792a", "27961", "27966", "2796b", "27970", "27975", "2797a", "279b1", "279b6", "279bb", "28122", "28127", "28131", "28136", "2813b", "28172", "28177", "28181", "28186", "2818b", "28302", "28307", "28334", "28339", "28352", "28357", "28384", "28389", "283a2", "283a7", "28401", "28406", "2840b", "28424", "28429", "28451", "28456", "2845b", "28474", "28479", "284a1", "284a6", "284ab", "28622", "28627", "28631", "28636", "2863b", "28672", "28677", "28681", "28686", "2868b", "28802", "28807", "28834", "28839", "28852", "28857", "28884", "28889", "288a2", "288a7", "28901", "28906", "2890b", "28924", "28929", "28951", "28956", "2895b", "28974", "28979", "289a1", "289a6", "289ab", "28b22", "28b27", "28b31", "28b36", "28b3b", "28b72", "28b77", "28b81", "28b86", "28b8b", "29112", "29117", "29130", "29135", "2913a", "29162", "29167", "29180", "29185", "2918a", "291b2", "291b7", "29202", "29207", "29234", "29239", "29252", "29257", "29284", "29289", "292a2", "292a7", "29400", "29405", "2940a", "29414", "29419", "29450", "29455", "2945a", "29464", "29469", "294a0", "294a5", "294aa", "294b4", "294b9", "29612", "29617", "29630", "29635", "2963a", "29662", "29667", "29680", "29685", "2968a", "296b2", "296b7", "29702", "29707", "29734", "29739", "29752", "29757", "29784", "29789", "297a2", "297a7", "29900", "29905", "2990a", "29914", "29919", "29950", "29955", "2995a", "29964", "29969", "299a0", "299a5", "299aa", "299b4", "299b9", "29b12", "29b17", "29b30", "29b35", "29b3a", "29b62", "29b67", "29b80", "29b85", "29b8a", "29bb2", "29bb7", "2a111", "2a116", "2a11b", "2a120", "2a125", "2a12a", "2a161", "2a166", "2a16b", "2a170", "2a175", "2a17a", "2a1b1", "2a1b6", "2a1bb", "2a201", "2a206", "2a20b", "2a224", "2a229", "2a251", "2a256", "2a25b", "2a274", "2a279", "2a2a1", "2a2a6", "2a2ab", "2a300", "2a305", "2a30a", "2a314", "2a319", "2a350", "2a355", "2a35a", "2a364", "2a369", "2a3a0", "2a3a5", "2a3aa", "2a3b4", "2a3b9", "2a611", "2a616", "2a61b", "2a620", "2a625", "2a62a", "2a661", "2a666", "2a66b", "2a670", "2a675", "2a67a", "2a6b1", "2a6b6", "2a6bb", "2a701", "2a706", "2a70b", "2a724", "2a729", "2a751", "2a756", "2a75b", "2a774", "2a779", "2a7a1", "2a7a6", "2a7ab", "2a800", "2a805", "2a80a", "2a814", "2a819", "2a850", "2a855", "2a85a", "2a864", "2a869", "2a8a0", "2a8a5", "2a8aa", "2a8b4", "2a8b9", "2ab11", "2ab16", "2ab1b", "2ab20", "2ab25", "2ab2a", "2ab61", "2ab66", "2ab6b", "2ab70", "2ab75", "2ab7a", "2abb1", "2abb6", "2abbb", "30011", "30016", "3001b", "30020", "30025", "3002a", "30061", "30066", "3006b", "30070", "30075", "3007a", "300b1", "300b6", "300bb", "30223", "30228", "30241", "30246", "3024b", "30273", "30278", "30291", "30296", "3029b", "30313", "30318", "30340", "30345", "3034a", "30363", "30368", "30390", "30395", "3039a", "303b3", "303b8", "30511", "30516", "3051b", "30520", "30525", "3052a", "30561", "30566", "3056b", "30570", "30575", "3057a", "305b1", "305b6", "305bb", "30723", "30728", "30741", "30746", "3074b", "30773", "30778", "30791", "30796", "3079b", "30813", "30818", "30840", "30845", "3084a", "30863", "30868", "30890", "30895", "3089a", "308b3", "308b8", "30a11", "30a16", "30a1b", "30a20", "30a25", "30a2a", "30a61", "30a66", "30a6b", "30a70", "30a75", "30a7a", "30ab1", "30ab6", "30abb", "31222", "31227", "31231", "31236", "3123b", "31272", "31277", "31281", "31286", "3128b", "31312", "31317", "31330", "31335", "3133a", "31362", "31367", "31380", "31385", "3138a", "313b2", "313b7", "31411", "31416", "3141b", "31420", "31425", "3142a", "31461", "31466", "3146b", "31470", "31475", "3147a", "314b1", "314b6", "314bb", "31722", "31727", "31731", "31736", "3173b", "31772", "31777", "31781", "31786", "3178b", "31812", "31817", "31830", "31835", "3183a", "31862", "31867", "31880", "31885", "3188a", "318b2", "318b7", "31911", "31916", "3191b", "31920", "31925", "3192a", "31961", "31966", "3196b", "31970", "31975", "3197a", "319b1", "319b6", "319bb", "33022", "33027", "33031", "33036", "3303b", "33072", "33077", "33081", "33086", "3308b", "33333", "33338", "33342", "33347", "33383", "33388", "33392", "33397", "33423", "33428", "33441", "33446", "3344b", "33473", "33478", "33491", "33496", "3349b", "33522", "33527", "33531", "33536", "3353b", "33572", "33577", "33581", "33586", "3358b", "33833", "33838", "33842", "33847", "33883", "33888", "33892", "33897", "33923", "33928", "33941", "33946", "3394b", "33973", "33978", "33991", "33996", "3399b", "33a22", "33a27", "33a31", "33a36", "33a3b", "33a72", "33a77", "33a81", "33a86", "33a8b", "34012", "34017", "34030", "34035", "3403a", "34062", "34067", "34080", "34085", "3408a", "340b2", "340b7", "34233", "34238", "34242", "34247", "34283", "34288", "34292", "34297", "34413", "34418", "34440", "34445", "3444a", "34463", "34468", "34490", "34495", "3449a", "344b3", "344b8", "34512", "34517", "34530", "34535", "3453a", "34562", "34567", "34580", "34585", "3458a", "345b2", "345b7", "34733", "34738", "34742", "34747", "34783", "34788", "34792", "34797", "34913", "34918", "34940", "34945", "3494a", "34963", "34968", "34990", "34995", "3499a", "349b3", "349b8", "34a12", "34a17", "34a30", "34a35", "34a3a", "34a62", "34a67", "34a80", "34a85", "34a8a", "34ab2", "34ab7", "35011", "35016", "3501b", "35020", "35025", "3502a", "35061", "35066", "3506b", "35070", "35075", "3507a", "350b1", "350b6", "350bb", "35223", "35228", "35241", "35246", "3524b", "35273", "35278", "35291", "35296", "3529b", "35313", "35318", "35340", "35345", "3534a", "35363", "35368", "35390", "35395", "3539a", "353b3", "353b8", "35511", "35516", "3551b", "35520", "35525", "3552a", "35561", "35566", "3556b", "35570", "35575", "3557a", "355b1", "355b6", "355bb", "35723", "35728", "35741", "35746", "3574b", "35773", "35778", "35791", "35796", "3579b", "35813", "35818", "35840", "35845", "3584a", "35863", "35868", "35890", "35895", "3589a", "358b3", "358b8", "35a11", "35a16", "35a1b", "35a20", "35a25", "35a2a", "35a61", "35a66", "35a6b", "35a70", "35a75", "35a7a", "35ab1", "35ab6", "35abb", "36222", "36227", "36231", "36236", "3623b", "36272", "36277", "36281", "36286", "3628b", "36312", "36317", "36330", "36335", "3633a", "36362", "36367", "36380", "36385", "3638a", "363b2", "363b7", "36411", "36416", "3641b", "36420", "36425", "3642a", "36461", "36466", "3646b", "36470", "36475", "3647a", "364b1", "364b6", "364bb", "36722", "36727", "36731", "36736", "3673b", "36772", "36777", "36781", "36786", "3678b", "36812", "36817", "36830", "36835", "3683a", "36862", "36867", "36880", "36885", "3688a", "368b2", "368b7", "36911", "36916", "3691b", "36920", "36925", "3692a", "36961", "36966", "3696b", "36970", "36975", "3697a", "369b1", "369b6", "369bb", "38022", "38027", "38031", "38036", "3803b", "38072", "38077", "38081", "38086", "3808b", "38333", "38338", "38342", "38347", "38383", "38388", "38392", "38397", "38423", "38428", "38441", "38446", "3844b", "38473", "38478", "38491", "38496", "3849b", "38522", "38527", "38531", "38536", "3853b", "38572", "38577", "38581", "38586", "3858b", "38833", "38838", "38842", "38847", "38883", "38888", "38892", "38897", "38923", "38928", "38941", "38946", "3894b", "38973", "38978", "38991", "38996", "3899b", "38a22", "38a27", "38a31", "38a36", "38a3b", "38a72", "38a77", "38a81", "38a86", "38a8b", "39012", "39017", "39030", "39035", "3903a", "39062", "39067", "39080", "39085", "3908a", "390b2", "390b7", "39233", "39238", "39242", "39247", "39283", "39288", "39292", "39297", "39413", "39418", "39440", "39445", "3944a", "39463", "39468", "39490", "39495", "3949a", "394b3", "394b8", "39512", "39517", "39530", "39535", "3953a", "39562", "39567", "39580", "39585", "3958a", "395b2", "395b7", "39733", "39738", "39742", "39747", "39783", "39788", "39792", "39797", "39913", "39918", "39940", "39945", "3994a", "39963", "39968", "39990", "39995", "3999a", "399b3", "399b8", "39a12", "39a17", "39a30", "39a35", "39a3a", "39a62", "39a67", "39a80", "39a85", "39a8a", "39ab2", "39ab7", "3a011", "3a016", "3a01b", "3a020", "3a025", "3a02a", "3a061", "3a066", "3a06b", "3a070", "3a075", "3a07a", "3a0b1", "3a0b6", "3a0bb", "3a223", "3a228", "3a241", "3a246", "3a24b", "3a273", "3a278", "3a291", "3a296", "3a29b", "3a313", "3a318", "3a340", "3a345", "3a34a", "3a363", "3a368", "3a390", "3a395", "3a39a", "3a3b3", "3a3b8", "3a511", "3a516", "3a51b", "3a520", "3a525", "3a52a", "3a561", "3a566", "3a56b", "3a570", "3a575", "3a57a", "3a5b1", "3a5b6", "3a5bb", "3a723", "3a728", "3a741", "3a746", "3a74b", "3a773", "3a778", "3a791", "3a796", "3a79b", "3a813", "3a818", "3a840", "3a845", "3a84a", "3a863", "3a868", "3a890", "3a895", "3a89a", "3a8b3", "3a8b8", "3aa11", "3aa16", "3aa1b", "3aa20", "3aa25", "3aa2a", "3aa61", "3aa66", "3aa6b", "3aa70", "3aa75", "3aa7a", "3aab1", "3aab6", "3aabb", "3b222", "3b227", "3b231", "3b236", "3b23b", "3b272", "3b277", "3b281", "3b286", "3b28b", "3b312", "3b317", "3b330", "3b335", "3b33a", "3b362", "3b367", "3b380", "3b385", "3b38a", "3b3b2", "3b3b7", "3b411", "3b416", "3b41b", "3b420", "3b425", "3b42a", "3b461", "3b466", "3b46b", "3b470", "3b475", "3b47a", "3b4b1", "3b4b6", "3b4bb", "3b722", "3b727", "3b731", "3b736", "3b73b", "3b772", "3b777", "3b781", "3b786", "3b78b", "3b812", "3b817", "3b830", "3b835", "3b83a", "3b862", "3b867", "3b880", "3b885", "3b88a", "3b8b2", "3b8b7", "3b911", "3b916", "3b91b", "3b920", "3b925", "3b92a", "3b961", "3b966", "3b96b", "3b970", "3b975", "3b97a", "3b9b1", "3b9b6", "3b9bb", "40001", "40006", "4000b", "40024", "40029", "40051", "40056", "4005b", "40074", "40079", "400a1", "400a6", "400ab", "40123", "40128", "40141", "40146", "4014b", "40173", "40178", "40191", "40196", "4019b", "40303", "40308", "40344", "40349", "40353", "40358", "40394", "40399", "403a3", "403a8", "40501", "40506", "4050b", "40524", "40529", "40551", "40556", "4055b", "40574", "40579", "405a1", "405a6", "405ab", "40623", "40628", "40641", "40646", "4064b", "40673", "40678", "40691", "40696", "4069b", "40803", "40808", "40844", "40849", "40853", "40858", "40894", "40899", "408a3", "408a8", "40a01", "40a06", "40a0b", "40a24", "40a29", "40a51", "40a56", "40a5b", "40a74", "40a79", "40aa1", "40aa6", "40aab", "40b23", "40b28", "40b41", "40b46", "40b4b", "40b73", "40b78", "40b91", "40b96", "40b9b", "41122", "41127", "41131", "41136", "4113b", "41172", "41177", "41181", "41186", "4118b", "41302", "41307", "41334", "41339", "41352", "41357", "41384", "41389", "413a2", "413a7", "41401", "41406", "4140b", "41424", "41429", "41451", "41456", "4145b", "41474", "41479", "414a1", "414a6", "414ab", "41622", "41627", "41631", "41636", "4163b", "41672", "41677", "41681", "41686", "4168b", "41802", "41807", "41834", "41839", "41852", "41857", "41884", "41889", "418a2", "418a7", "41901", "41906", "4190b", "41924", "41929", "41951", "41956", "4195b", "41974", "41979", "419a1", "419a6", "419ab", "41b22", "41b27", "41b31", "41b36", "41b3b", "41b72", "41b77", "41b81", "41b86", "41b8b", "42022", "42027", "42031", "42036", "4203b", "42072", "42077", "42081", "42086", "4208b", "42333", "42338", "42342", "42347", "42383", "42388", "42392", "42397", "42423", "42428", "42441", "42446", "4244b", "42473", "42478", "42491", "42496", "4249b", "42522", "42527", "42531", "42536", "4253b", "42572", "42577", "42581", "42586", "4258b", "42833", "42838", "42842", "42847", "42883", "42888", "42892", "42897", "42923", "42928", "42941", "42946", "4294b", "42973", "42978", "42991", "42996", "4299b", "42a22", "42a27", "42a31", "42a36", "42a3b", "42a72", "42a77", "42a81", "42a86", "42a8b", "44002", "44007", "44034", "44039", "44052", "44057", "44084", "44089", "440a2", "440a7", "44133", "44138", "44142", "44147", "44183", "44188", "44192", "44197", "44403", "44408", "44444", "44449", "44453", "44458", "44494", "44499", "444a3", "444a8", "44502", "44507", "44534", "44539", "44552", "44557", "44584", "44589", "445a2", "445a7", "44633", "44638", "44642", "44647", "44683", "44688", "44692", "44697", "44903", "44908", "44944", "44949", "44953", "44958", "44994", "44999", "449a3", "449a8", "44a02", "44a07", "44a34", "44a39", "44a52", "44a57", "44a84", "44a89", "44aa2", "44aa7", "44b33", "44b38", "44b42", "44b47", "44b83", "44b88", "44b92", "44b97", "45001", "45006", "4500b", "45024", "45029", "45051", "45056", "4505b", "45074", "45079", "450a1", "450a6", "450ab", "45123", "45128", "45141", "45146", "4514b", "45173", "45178", "45191", "45196", "4519b", "45303", "45308", "45344", "45349", "45353", "45358", "45394", "45399", "453a3", "453a8", "45501", "45506", "4550b", "45524", "45529", "45551", "45556", "4555b", "45574", "45579", "455a1", "455a6", "455ab", "45623", "45628", "45641", "45646", "4564b", "45673", "45678", "45691", "45696", "4569b", "45803", "45808", "45844", "45849", "45853", "45858", "45894", "45899", "458a3", "458a8", "45a01", "45a06", "45a0b", "45a24", "45a29", "45a51", "45a56", "45a5b", "45a74", "45a79", "45aa1", "45aa6", "45aab", "45b23", "45b28", "45b41", "45b46", "45b4b", "45b73", "45b78", "45b91", "45b96", "45b9b", "46122", "46127", "46131", "46136", "4613b", "46172", "46177", "46181", "46186", "4618b", "46302", "46307", "46334", "46339", "46352", "46357", "46384", "46389", "463a2", "463a7", "46401", "46406", "4640b", "46424", "46429", "46451", "46456", "4645b", "46474", "46479", "464a1", "464a6", "464ab", "46622", "46627", "46631", "46636", "4663b", "46672", "46677", "46681", "46686", "4668b", "46802", "46807", "46834", "46839", "46852", "46857", "46884", "46889", "468a2", "468a7", "46901", "46906", "4690b", "46924", "46929", "46951", "46956", "4695b", "46974", "46979", "469a1", "469a6", "469ab", "46b22", "46b27", "46b31", "46b36", "46b3b", "46b72", "46b77", "46b81", "46b86", "46b8b", "47022", "47027", "47031", "47036", "4703b", "47072", "47077", "47081", "47086", "4708b", "47333", "47338", "47342", "47347", "47383", "47388", "47392", "47397", "47423", "47428", "47441", "47446", "4744b", "47473", "47478", "47491", "47496", "4749b", "47522", "47527", "47531", "47536", "4753b", "47572", "47577", "47581", "47586", "4758b", "47833", "47838", "47842", "47847", "47883", "47888", "47892", "47897", "47923", "47928", "47941", "47946", "4794b", "47973", "47978", "47991", "47996", "4799b", "47a22", "47a27", "47a31", "47a36", "47a3b", "47a72", "47a77", "47a81", "47a86", "47a8b", "49002", "49007", "49034", "49039", "49052", "49057", "49084", "49089", "490a2", "490a7", "49133", "49138", "49142", "49147", "49183", "49188", "49192", "49197", "49403", "49408", "49444", "49449", "49453", "49458", "49494", "49499", "494a3", "494a8", "49502", "49507", "49534", "49539", "49552", "49557", "49584", "49589", "495a2", "495a7", "49633", "49638", "49642", "49647", "49683", "49688", "49692", "49697", "49903", "49908", "49944", "49949", "49953", "49958", "49994", "49999", "499a3", "499a8", "49a02", "49a07", "49a34", "49a39", "49a52", "49a57", "49a84", "49a89", "49aa2", "49aa7", "49b33", "49b38", "49b42", "49b47", "49b83", "49b88", "49b92", "49b97", "4a001", "4a006", "4a00b", "4a024", "4a029", "4a051", "4a056", "4a05b", "4a074", "4a079", "4a0a1", "4a0a6", "4a0ab", "4a123", "4a128", "4a141", "4a146", "4a14b", "4a173", "4a178", "4a191", "4a196", "4a19b", "4a303", "4a308", "4a344", "4a349", "4a353", "4a358", "4a394", "4a399", "4a3a3", "4a3a8", "4a501", "4a506", "4a50b", "4a524", "4a529", "4a551", "4a556", "4a55b", "4a574", "4a579", "4a5a1", "4a5a6", "4a5ab", "4a623", "4a628", "4a641", "4a646", "4a64b", "4a673", "4a678", "4a691", "4a696", "4a69b", "4a803", "4a808", "4a844", "4a849", "4a853", "4a858", "4a894", "4a899", "4a8a3", "4a8a8", "4aa01", "4aa06", "4aa0b", "4aa24", "4aa29", "4aa51", "4aa56", "4aa5b", "4aa74", "4aa79", "4aaa1", "4aaa6", "4aaab", "4ab23", "4ab28", "4ab41", "4ab46", "4ab4b", "4ab73", "4ab78", "4ab91", "4ab96", "4ab9b", "4b122", "4b127", "4b131", "4b136", "4b13b", "4b172", "4b177", "4b181", "4b186", "4b18b", "4b302", "4b307", "4b334", "4b339", "4b352", "4b357", "4b384", "4b389", "4b3a2", "4b3a7", "4b401", "4b406", "4b40b", "4b424", "4b429", "4b451", "4b456", "4b45b", "4b474", "4b479", "4b4a1", "4b4a6", "4b4ab", "4b622", "4b627", "4b631", "4b636", "4b63b", "4b672", "4b677", "4b681", "4b686", "4b68b", "4b802", "4b807", "4b834", "4b839", "4b852", "4b857", "4b884", "4b889", "4b8a2", "4b8a7", "4b901", "4b906", "4b90b", "4b924", "4b929", "4b951", "4b956", "4b95b", "4b974", "4b979", "4b9a1", "4b9a6", "4b9ab", "4bb22", "4bb27", "4bb31", "4bb36", "4bb3b", "4bb72", "4bb77", "4bb81", "4bb86", "4bb8b", "50000", "50005", "5000a", "50014", "50019", "50050", "50055", "5005a", "50064", "50069", "500a0", "500a5", "500aa", "500b4", "500b9", "50113", "50118", "50140", "50145", "5014a", "50163", "50168", "50190", "50195", "5019a", "501b3", "501b8", "50203", "50208", "50244", "50249", "50253", "50258", "50294", "50299", "502a3", "502a8", "50500", "50505", "5050a", "50514", "50519", "50550", "50555", "5055a", "50564", "50569", "505a0", "505a5", "505aa", "505b4", "505b9", "50613", "50618", "50640", "50645", "5064a", "50663", "50668", "50690", "50695", "5069a", "506b3", "506b8", "50703", "50708", "50744", "50749", "50753", "50758", "50794", "50799", "507a3", "507a8", "50a00", "50a05", "50a0a", "50a14", "50a19", "50a50", "50a55", "50a5a", "50a64", "50a69", "50aa0", "50aa5", "50aaa", "50ab4", "50ab9", "50b13", "50b18", "50b40", "50b45", "50b4a", "50b63", "50b68", "50b90", "50b95", "50b9a", "50bb3", "50bb8", "51112", "51117", "51130", "51135", "5113a", "51162", "51167", "51180", "51185", "5118a", "511b2", "511b7", "51202", "51207", "51234", "51239", "51252", "51257", "51284", "51289", "512a2", "512a7", "51400", "51405", "5140a", "51414", "51419", "51450", "51455", "5145a", "51464", "51469", "514a0", "514a5", "514aa", "514b4", "514b9", "51612", "51617", "51630", "51635", "5163a", "51662", "51667", "51680", "51685", "5168a", "516b2", "516b7", "51702", "51707", "51734", "51739", "51752", "51757", "51784", "51789", "517a2", "517a7", "51900", "51905", "5190a", "51914", "51919", "51950", "51955", "5195a", "51964", "51969", "519a0", "519a5", "519aa", "519b4", "519b9", "51b12", "51b17", "51b30", "51b35", "51b3a", "51b62", "51b67", "51b80", "51b85", "51b8a", "51bb2", "51bb7", "52012", "52017", "52030", "52035", "5203a", "52062", "52067", "52080", "52085", "5208a", "520b2", "520b7", "52233", "52238", "52242", "52247", "52283", "52288", "52292", "52297", "52413", "52418", "52440", "52445", "5244a", "52463", "52468", "52490", "52495", "5249a", "524b3", "524b8", "52512", "52517", "52530", "52535", "5253a", "52562", "52567", "52580", "52585", "5258a", "525b2", "525b7", "52733", "52738", "52742", "52747", "52783", "52788", "52792", "52797", "52913", "52918", "52940", "52945", "5294a", "52963", "52968", "52990", "52995", "5299a", "529b3", "529b8", "52a12", "52a17", "52a30", "52a35", "52a3a", "52a62", "52a67", "52a80", "52a85", "52a8a", "52ab2", "52ab7", "53002", "53007", "53034", "53039", "53052", "53057", "53084", "53089", "530a2", "530a7", "53133", "53138", "53142", "53147", "53183", "53188", "53192", "53197", "53403", "53408", "53444", "53449", "53453", "53458", "53494", "53499", "534a3", "534a8", "53502", "53507", "53534", "53539", "53552", "53557", "53584", "53589", "535a2", "535a7", "53633", "53638", "53642", "53647", "53683", "53688", "53692", "53697", "53903", "53908", "53944", "53949", "53953", "53958", "53994", "53999", "539a3", "539a8", "53a02", "53a07", "53a34", "53a39", "53a52", "53a57", "53a84", "53a89", "53aa2", "53aa7", "53b33", "53b38", "53b42", "53b47", "53b83", "53b88", "53b92", "53b97", "55000", "55005", "5500a", "55014", "55019", "55050", "55055", "5505a", "55064", "55069", "550a0", "550a5", "550aa", "550b4", "550b9", "55113", "55118", "55140", "55145", "5514a", "55163", "55168", "55190", "55195", "5519a", "551b3", "551b8", "55203", "55208", "55244", "55249", "55253", "55258", "55294", "55299", "552a3", "552a8", "55500", "55505", "5550a", "55514", "55519", "55550", "55555", "5555a", "55564", "55569", "555a0", "555a5", "555aa", "555b4", "555b9", "55613", "55618", "55640", "55645", "5564a", "55663", "55668", "55690", "55695", "5569a", "556b3", "556b8", "55703", "55708", "55744", "55749", "55753", "55758", "55794", "55799", "557a3", "557a8", "55a00", "55a05", "55a0a", "55a14", "55a19", "55a50", "55a55", "55a5a", "55a64", "55a69", "55aa0", "55aa5", "55aaa", "55ab4", "55ab9", "55b13", "55b18", "55b40", "55b45", "55b4a", "55b63", "55b68", "55b90", "55b95", "55b9a", "55bb3", "55bb8", "56112", "56117", "56130", "56135", "5613a", "56162", "56167", "56180", "56185", "5618a", "561b2", "561b7", "56202", "56207", "56234", "56239", "56252", "56257", "56284", "56289", "562a2", "562a7", "56400", "56405", "5640a", "56414", "56419", "56450", "56455", "5645a", "56464", "56469", "564a0", "564a5", "564aa", "564b4", "564b9", "56612", "56617", "56630", "56635", "5663a", "56662", "56667", "56680", "56685", "5668a", "566b2", "566b7", "56702", "56707", "56734", "56739", "56752", "56757", "56784", "56789", "567a2", "567a7", "56900", "56905", "5690a", "56914", "56919", "56950", "56955", "5695a", "56964", "56969", "569a0", "569a5", "569aa", "569b4", "569b9", "56b12", "56b17", "56b30", "56b35", "56b3a", "56b62", "56b67", "56b80", "56b85", "56b8a", "56bb2", "56bb7", "57012", "57017", "57030", "57035", "5703a", "57062", "57067", "57080", "57085", "5708a", "570b2", "570b7", "57233", "57238", "57242", "57247", "57283", "57288", "57292", "57297", "57413", "57418", "57440", "57445", "5744a", "57463", "57468", "57490", "57495", "5749a", "574b3", "574b8", "57512", "57517", "57530", "57535", "5753a", "57562", "57567", "57580", "57585", "5758a", "575b2", "575b7", "57733", "57738", "57742", "57747", "57783", "57788", "57792", "57797", "57913", "57918", "57940", "57945", "5794a", "57963", "57968", "57990", "57995", "5799a", "579b3", "579b8", "57a12", "57a17", "57a30", "57a35", "57a3a", "57a62", "57a67", "57a80", "57a85", "57a8a", "57ab2", "57ab7", "58002", "58007", "58034", "58039", "58052", "58057", "58084", "58089", "580a2", "580a7", "58133", "58138", "58142", "58147", "58183", "58188", "58192", "58197", "58403", "58408", "58444", "58449", "58453", "58458", "58494", "58499", "584a3", "584a8", "58502", "58507", "58534", "58539", "58552", "58557", "58584", "58589", "585a2", "585a7", "58633", "58638", "58642", "58647", "58683", "58688", "58692", "58697", "58903", "58908", "58944", "58949", "58953", "58958", "58994", "58999", "589a3", "589a8", "58a02", "58a07", "58a34", "58a39", "58a52", "58a57", "58a84", "58a89", "58aa2", "58aa7", "58b33", "58b38", "58b42", "58b47", "58b83", "58b88", "58b92", "58b97", "5a000", "5a005", "5a00a", "5a014", "5a019", "5a050", "5a055", "5a05a", "5a064", "5a069", "5a0a0", "5a0a5", "5a0aa", "5a0b4", "5a0b9", "5a113", "5a118", "5a140", "5a145", "5a14a", "5a163", "5a168", "5a190", "5a195", "5a19a", "5a1b3", "5a1b8", "5a203", "5a208", "5a244", "5a249", "5a253", "5a258", "5a294", "5a299", "5a2a3", "5a2a8", "5a500", "5a505", "5a50a", "5a514", "5a519", "5a550", "5a555", "5a55a", "5a564", "5a569", "5a5a0", "5a5a5", "5a5aa", "5a5b4", "5a5b9", "5a613", "5a618", "5a640", "5a645", "5a64a", "5a663", "5a668", "5a690", "5a695", "5a69a", "5a6b3", "5a6b8", "5a703", "5a708", "5a744", "5a749", "5a753", "5a758", "5a794", "5a799", "5a7a3", "5a7a8", "5aa00", "5aa05", "5aa0a", "5aa14", "5aa19", "5aa50", "5aa55", "5aa5a", "5aa64", "5aa69", "5aaa0", "5aaa5", "5aaaa", "5aab4", "5aab9", "5ab13", "5ab18", "5ab40", "5ab45", "5ab4a", "5ab63", "5ab68", "5ab90", "5ab95", "5ab9a", "5abb3", "5abb8", "5b112", "5b117", "5b130", "5b135", "5b13a", "5b162", "5b167", "5b180", "5b185", "5b18a", "5b1b2", "5b1b7", "5b202", "5b207", "5b234", "5b239", "5b252", "5b257", "5b284", "5b289", "5b2a2", "5b2a7", "5b400", "5b405", "5b40a", "5b414", "5b419", "5b450", "5b455", "5b45a", "5b464", "5b469", "5b4a0", "5b4a5", "5b4aa", "5b4b4", "5b4b9", "5b612", "5b617", "5b630", "5b635", "5b63a", "5b662", "5b667", "5b680", "5b685", "5b68a", "5b6b2", "5b6b7", "5b702", "5b707", "5b734", "5b739", "5b752", "5b757", "5b784", "5b789", "5b7a2", "5b7a7", "5b900", "5b905", "5b90a", "5b914", "5b919", "5b950", "5b955", "5b95a", "5b964", "5b969", "5b9a0", "5b9a5", "5b9aa", "5b9b4", "5b9b9", "5bb12", "5bb17", "5bb30", "5bb35", "5bb3a", "5bb62", "5bb67", "5bb80", "5bb85", "5bb8a", "5bbb2", "5bbb7", "61111", "61116", "6111b", "61120", "61125", "6112a", "61161", "61166", "6116b", "61170", "61175", "6117a", "611b1", "611b6", "611bb", "61201", "61206", "6120b", "61224", "61229", "61251", "61256", "6125b", "61274", "61279", "612a1", "612a6", "612ab", "61300", "61305", "6130a", "61314", "61319", "61350", "61355", "6135a", "61364", "61369", "613a0", "613a5", "613aa", "613b4", "613b9", "61611", "61616", "6161b", "61620", "61625", "6162a", "61661", "61666", "6166b", "61670", "61675", "6167a", "616b1", "616b6", "616bb", "61701", "61706", "6170b", "61724", "61729", "61751", "61756", "6175b", "61774", "61779", "617a1", "617a6", "617ab", "61800", "61805", "6180a", "61814", "61819", "61850", "61855", "6185a", "61864", "61869", "618a0", "618a5", "618aa", "618b4", "618b9", "61b11", "61b16", "61b1b", "61b20", "61b25", "61b2a", "61b61", "61b66", "61b6b", "61b70", "61b75", "61b7a", "61bb1", "61bb6", "61bbb", "62011", "62016", "6201b", "62020", "62025", "6202a", "62061", "62066", "6206b", "62070", "62075", "6207a", "620b1", "620b6", "620bb", "62223", "62228", "62241", "62246", "6224b", "62273", "62278", "62291", "62296", "6229b", "62313", "62318", "62340", "62345", "6234a", "62363", "62368", "62390", "62395", "6239a", "623b3", "623b8", "62511", "62516", "6251b", "62520", "62525", "6252a", "62561", "62566", "6256b", "62570", "62575", "6257a", "625b1", "625b6", "625bb", "62723", "62728", "62741", "62746", "6274b", "62773", "62778", "62791", "62796", "6279b", "62813", "62818", "62840", "62845", "6284a", "62863", "62868", "62890", "62895", "6289a", "628b3", "628b8", "62a11", "62a16", "62a1b", "62a20", "62a25", "62a2a", "62a61", "62a66", "62a6b", "62a70", "62a75", "62a7a", "62ab1", "62ab6", "62abb", "63001", "63006", "6300b", "63024", "63029", "63051", "63056", "6305b", "63074", "63079", "630a1", "630a6", "630ab", "63123", "63128", "63141", "63146", "6314b", "63173", "63178", "63191", "63196", "6319b", "63303", "63308", "63344", "63349", "63353", "63358", "63394", "63399", "633a3", "633a8", "63501", "63506", "6350b", "63524", "63529", "63551", "63556", "6355b", "63574", "63579", "635a1", "635a6", "635ab", "63623", "63628", "63641", "63646", "6364b", "63673", "63678", "63691", "63696", "6369b", "63803", "63808", "63844", "63849", "63853", "63858", "63894", "63899", "638a3", "638a8", "63a01", "63a06", "63a0b", "63a24", "63a29", "63a51", "63a56", "63a5b", "63a74", "63a79", "63aa1", "63aa6", "63aab", "63b23", "63b28", "63b41", "63b46", "63b4b", "63b73", "63b78", "63b91", "63b96", "63b9b", "64000", "64005", "6400a", "64014", "64019", "64050", "64055", "6405a", "64064", "64069", "640a0", "640a5", "640aa", "640b4", "640b9", "64113", "64118", "64140", "64145", "6414a", "64163", "64168", "64190", "64195", "6419a", "641b3", "641b8", "64203", "64208", "64244", "64249", "64253", "64258", "64294", "64299", "642a3", "642a8", "64500", "64505", "6450a", "64514", "64519", "64550", "64555", "6455a", "64564", "64569", "645a0", "645a5", "645aa", "645b4", "645b9", "64613", "64618", "64640", "64645", "6464a", "64663", "64668", "64690", "64695", "6469a", "646b3", "646b8", "64703", "64708", "64744", "64749", "64753", "64758", "64794", "64799", "647a3", "647a8", "64a00", "64a05", "64a0a", "64a14", "64a19", "64a50", "64a55", "64a5a", "64a64", "64a69", "64aa0", "64aa5", "64aaa", "64ab4", "64ab9", "64b13", "64b18", "64b40", "64b45", "64b4a", "64b63", "64b68", "64b90", "64b95", "64b9a", "64bb3", "64bb8", "66111", "66116", "6611b", "66120", "66125", "6612a", "66161", "66166", "6616b", "66170", "66175", "6617a", "661b1", "661b6", "661bb", "66201", "66206", "6620b", "66224", "66229", "66251", "66256", "6625b", "66274", "66279", "662a1", "662a6", "662ab", "66300", "66305", "6630a", "66314", "66319", "66350", "66355", "6635a", "66364", "66369", "663a0", "663a5", "663aa", "663b4", "663b9", "66611", "66616", "6661b", "66620", "66625", "6662a", "66661", "66666", "6666b", "66670", "66675", "6667a", "666b1", "666b6", "666bb", "66701", "66706", "6670b", "66724", "66729", "66751", "66756", "6675b", "66774", "66779", "667a1", "667a6", "667ab", "66800", "66805", "6680a", "66814", "66819", "66850", "66855", "6685a", "66864", "66869", "668a0", "668a5", "668aa", "668b4", "668b9", "66b11", "66b16", "66b1b", "66b20", "66b25", "66b2a", "66b61", "66b66", "66b6b", "66b70", "66b75", "66b7a", "66bb1", "66bb6", "66bbb", "67011", "67016", "6701b", "67020", "67025", "6702a", "67061", "67066", "6706b", "67070", "67075", "6707a", "670b1", "670b6", "670bb", "67223", "67228", "67241", "67246", "6724b", "67273", "67278", "67291", "67296", "6729b", "67313", "67318", "67340", "67345", "6734a", "67363", "67368", "67390", "67395", "6739a", "673b3", "673b8", "67511", "67516", "6751b", "67520", "67525", "6752a", "67561", "67566", "6756b", "67570", "67575", "6757a", "675b1", "675b6", "675bb", "67723", "67728", "67741", "67746", "6774b", "67773", "67778", "67791", "67796", "6779b", "67813", "67818", "67840", "67845", "6784a", "67863", "67868", "67890", "67895", "6789a", "678b3", "678b8", "67a11", "67a16", "67a1b", "67a20", "67a25", "67a2a", "67a61", "67a66", "67a6b", "67a70", "67a75", "67a7a", "67ab1", "67ab6", "67abb", "68001", "68006", "6800b", "68024", "68029", "68051", "68056", "6805b", "68074", "68079", "680a1", "680a6", "680ab", "68123", "68128", "68141", "68146", "6814b", "68173", "68178", "68191", "68196", "6819b", "68303", "68308", "68344", "68349", "68353", "68358", "68394", "68399", "683a3", "683a8", "68501", "68506", "6850b", "68524", "68529", "68551", "68556", "6855b", "68574", "68579", "685a1", "685a6", "685ab", "68623", "68628", "68641", "68646", "6864b", "68673", "68678", "68691", "68696", "6869b", "68803", "68808", "68844", "68849", "68853", "68858", "68894", "68899", "688a3", "688a8", "68a01", "68a06", "68a0b", "68a24", "68a29", "68a51", "68a56", "68a5b", "68a74", "68a79", "68aa1", "68aa6", "68aab", "68b23", "68b28", "68b41", "68b46", "68b4b", "68b73", "68b78", "68b91", "68b96", "68b9b", "69000", "69005", "6900a", "69014", "69019", "69050", "69055", "6905a", "69064", "69069", "690a0", "690a5", "690aa", "690b4", "690b9", "69113", "69118", "69140", "69145", "6914a", "69163", "69168", "69190", "69195", "6919a", "691b3", "691b8", "69203", "69208", "69244", "69249", "69253", "69258", "69294", "69299", "692a3", "692a8", "69500", "69505", "6950a", "69514", "69519", "69550", "69555", "6955a", "69564", "69569", "695a0", "695a5", "695aa", "695b4", "695b9", "69613", "69618", "69640", "69645", "6964a", "69663", "69668", "69690", "69695", "6969a", "696b3", "696b8", "69703", "69708", "69744", "69749", "69753", "69758", "69794", "69799", "697a3", "697a8", "69a00", "69a05", "69a0a", "69a14", "69a19", "69a50", "69a55", "69a5a", "69a64", "69a69", "69aa0", "69aa5", "69aaa", "69ab4", "69ab9", "69b13", "69b18", "69b40", "69b45", "69b4a", "69b63", "69b68", "69b90", "69b95", "69b9a", "69bb3", "69bb8", "6b111", "6b116", "6b11b", "6b120", "6b125", "6b12a", "6b161", "6b166", "6b16b", "6b170", "6b175", "6b17a", "6b1b1", "6b1b6", "6b1bb", "6b201", "6b206", "6b20b", "6b224", "6b229", "6b251", "6b256", "6b25b", "6b274", "6b279", "6b2a1", "6b2a6", "6b2ab", "6b300", "6b305", "6b30a", "6b314", "6b319", "6b350", "6b355", "6b35a", "6b364", "6b369", "6b3a0", "6b3a5", "6b3aa", "6b3b4", "6b3b9", "6b611", "6b616", "6b61b", "6b620", "6b625", "6b62a", "6b661", "6b666", "6b66b", "6b670", "6b675", "6b67a", "6b6b1", "6b6b6", "6b6bb", "6b701", "6b706", "6b70b", "6b724", "6b729", "6b751", "6b756", "6b75b", "6b774", "6b779", "6b7a1", "6b7a6", "6b7ab", "6b800", "6b805", "6b80a", "6b814", "6b819", "6b850", "6b855", "6b85a", "6b864", "6b869", "6b8a0", "6b8a5", "6b8aa", "6b8b4", "6b8b9", "6bb11", "6bb16", "6bb1b", "6bb20", "6bb25", "6bb2a", "6bb61", "6bb66", "6bb6b", "6bb70", "6bb75", "6bb7a", "6bbb1", "6bbb6", "6bbbb", "70111", "70116", "7011b", "70120", "70125", "7012a", "70161", "70166", "7016b", "70170", "70175", "7017a", "701b1", "701b6", "701bb", "70201", "70206", "7020b", "70224", "70229", "70251", "70256", "7025b", "70274", "70279", "702a1", "702a6", "702ab", "70300", "70305", "7030a", "70314", "70319", "70350", "70355", "7035a", "70364", "70369", "703a0", "703a5", "703aa", "703b4", "703b9", "70611", "70616", "7061b", "70620", "70625", "7062a", "70661", "70666", "7066b", "70670", "70675", "7067a", "706b1", "706b6", "706bb", "70701", "70706", "7070b", "70724", "70729", "70751", "70756", "7075b", "70774", "70779", "707a1", "707a6", "707ab", "70800", "70805", "7080a", "70814", "70819", "70850", "70855", "7085a", "70864", "70869", "708a0", "708a5", "708aa", "708b4", "708b9", "70b11", "70b16", "70b1b", "70b20", "70b25", "70b2a", "70b61", "70b66", "70b6b", "70b70", "70b75", "70b7a", "70bb1", "70bb6", "70bbb", "72222", "72227", "72231", "72236", "7223b", "72272", "72277", "72281", "72286", "7228b", "72312", "72317", "72330", "72335", "7233a", "72362", "72367", "72380", "72385", "7238a", "723b2", "723b7", "72411", "72416", "7241b", "72420", "72425", "7242a", "72461", "72466", "7246b", "72470", "72475", "7247a", "724b1", "724b6", "724bb", "72722", "72727", "72731", "72736", "7273b", "72772", "72777", "72781", "72786", "7278b", "72812", "72817", "72830", "72835", "7283a", "72862", "72867", "72880", "72885", "7288a", "728b2", "728b7", "72911", "72916", "7291b", "72920", "72925", "7292a", "72961", "72966", "7296b", "72970", "72975", "7297a", "729b1", "729b6", "729bb", "73122", "73127", "73131", "73136", "7313b", "73172", "73177", "73181", "73186", "7318b", "73302", "73307", "73334", "73339", "73352", "73357", "73384", "73389", "733a2", "733a7", "73401", "73406", "7340b", "73424", "73429", "73451", "73456", "7345b", "73474", "73479", "734a1", "734a6", "734ab", "73622", "73627", "73631", "73636", "7363b", "73672", "73677", "73681", "73686", "7368b", "73802", "73807", "73834", "73839", "73852", "73857", "73884", "73889", "738a2", "738a7", "73901", "73906", "7390b", "73924", "73929", "73951", "73956", "7395b", "73974", "73979", "739a1", "739a6", "739ab", "73b22", "73b27", "73b31", "73b36", "73b3b", "73b72", "73b77", "73b81", "73b86", "73b8b", "74112", "74117", "74130", "74135", "7413a", "74162", "74167", "74180", "74185", "7418a", "741b2", "741b7", "74202", "74207", "74234", "74239", "74252", "74257", "74284", "74289", "742a2", "742a7", "74400", "74405", "7440a", "74414", "74419", "74450", "74455", "7445a", "74464", "74469", "744a0", "744a5", "744aa", "744b4", "744b9", "74612", "74617", "74630", "74635", "7463a", "74662", "74667", "74680", "74685", "7468a", "746b2", "746b7", "74702", "74707", "74734", "74739", "74752", "74757", "74784", "74789", "747a2", "747a7", "74900", "74905", "7490a", "74914", "74919", "74950", "74955", "7495a", "74964", "74969", "749a0", "749a5", "749aa", "749b4", "749b9", "74b12", "74b17", "74b30", "74b35", "74b3a", "74b62", "74b67", "74b80", "74b85", "74b8a", "74bb2", "74bb7", "75111", "75116", "7511b", "75120", "75125", "7512a", "75161", "75166", "7516b", "75170", "75175", "7517a", "751b1", "751b6", "751bb", "75201", "75206", "7520b", "75224", "75229", "75251", "75256", "7525b", "75274", "75279", "752a1", "752a6", "752ab", "75300", "75305", "7530a", "75314", "75319", "75350", "75355", "7535a", "75364", "75369", "753a0", "753a5", "753aa", "753b4", "753b9", "75611", "75616", "7561b", "75620", "75625", "7562a", "75661", "75666", "7566b", "75670", "75675", "7567a", "756b1", "756b6", "756bb", "75701", "75706", "7570b", "75724", "75729", "75751", "75756", "7575b", "75774", "75779", "757a1", "757a6", "757ab", "75800", "75805", "7580a", "75814", "75819", "75850", "75855", "7585a", "75864", "75869", "758a0", "758a5", "758aa", "758b4", "758b9", "75b11", "75b16", "75b1b", "75b20", "75b25", "75b2a", "75b61", "75b66", "75b6b", "75b70", "75b75", "75b7a", "75bb1", "75bb6", "75bbb", "77222", "77227", "77231", "77236", "7723b", "77272", "77277", "77281", "77286", "7728b", "77312", "77317", "77330", "77335", "7733a", "77362", "77367", "77380", "77385", "7738a", "773b2", "773b7", "77411", "77416", "7741b", "77420", "77425", "7742a", "77461", "77466", "7746b", "77470", "77475", "7747a", "774b1", "774b6", "774bb", "77722", "77727", "77731", "77736", "7773b", "77772", "77777", "77781", "77786", "7778b", "77812", "77817", "77830", "77835", "7783a", "77862", "77867", "77880", "77885", "7788a", "778b2", "778b7", "77911", "77916", "7791b", "77920", "77925", "7792a", "77961", "77966", "7796b", "77970", "77975", "7797a", "779b1", "779b6", "779bb", "78122", "78127", "78131", "78136", "7813b", "78172", "78177", "78181", "78186", "7818b", "78302", "78307", "78334", "78339", "78352", "78357", "78384", "78389", "783a2", "783a7", "78401", "78406", "7840b", "78424", "78429", "78451", "78456", "7845b", "78474", "78479", "784a1", "784a6", "784ab", "78622", "78627", "78631", "78636", "7863b", "78672", "78677", "78681", "78686", "7868b", "78802", "78807", "78834", "78839", "78852", "78857", "78884", "78889", "788a2", "788a7", "78901", "78906", "7890b", "78924", "78929", "78951", "78956", "7895b", "78974", "78979", "789a1", "789a6", "789ab", "78b22", "78b27", "78b31", "78b36", "78b3b", "78b72", "78b77", "78b81", "78b86", "78b8b", "79112", "79117", "79130", "79135", "7913a", "79162", "79167", "79180", "79185", "7918a", "791b2", "791b7", "79202", "79207", "79234", "79239", "79252", "79257", "79284", "79289", "792a2", "792a7", "79400", "79405", "7940a", "79414", "79419", "79450", "79455", "7945a", "79464", "79469", "794a0", "794a5", "794aa", "794b4", "794b9", "79612", "79617", "79630", "79635", "7963a", "79662", "79667", "79680", "79685", "7968a", "796b2", "796b7", "79702", "79707", "79734", "79739", "79752", "79757", "79784", "79789", "797a2", "797a7", "79900", "79905", "7990a", "79914", "79919", "79950", "79955", "7995a", "79964", "79969", "799a0", "799a5", "799aa", "799b4", "799b9", "79b12", "79b17", "79b30", "79b35", "79b3a", "79b62", "79b67", "79b80", "79b85", "79b8a", "79bb2", "79bb7", "7a111", "7a116", "7a11b", "7a120", "7a125", "7a12a", "7a161", "7a166", "7a16b", "7a170", "7a175", "7a17a", "7a1b1", "7a1b6", "7a1bb", "7a201", "7a206", "7a20b", "7a224", "7a229", "7a251", "7a256", "7a25b", "7a274", "7a279", "7a2a1", "7a2a6", "7a2ab", "7a300", "7a305", "7a30a", "7a314", "7a319", "7a350", "7a355", "7a35a", "7a364", "7a369", "7a3a0", "7a3a5", "7a3aa", "7a3b4", "7a3b9", "7a611", "7a616", "7a61b", "7a620", "7a625", "7a62a", "7a661", "7a666", "7a66b", "7a670", "7a675", "7a67a", "7a6b1", "7a6b6", "7a6bb", "7a701", "7a706", "7a70b", "7a724", "7a729", "7a751", "7a756", "7a75b", "7a774", "7a779", "7a7a1", "7a7a6", "7a7ab", "7a800", "7a805", "7a80a", "7a814", "7a819", "7a850", "7a855", "7a85a", "7a864", "7a869", "7a8a0", "7a8a5", "7a8aa", "7a8b4", "7a8b9", "7ab11", "7ab16", "7ab1b", "7ab20", "7ab25", "7ab2a", "7ab61", "7ab66", "7ab6b", "7ab70", "7ab75", "7ab7a", "7abb1", "7abb6", "7abbb", "80011", "80016", "8001b", "80020", "80025", "8002a", "80061", "80066", "8006b", "80070", "80075", "8007a", "800b1", "800b6", "800bb", "80223", "80228", "80241", "80246", "8024b", "80273", "80278", "80291", "80296", "8029b", "80313", "80318", "80340", "80345", "8034a", "80363", "80368", "80390", "80395", "8039a", "803b3", "803b8", "80511", "80516", "8051b", "80520", "80525", "8052a", "80561", "80566", "8056b", "80570", "80575", "8057a", "805b1", "805b6", "805bb", "80723", "80728", "80741", "80746", "8074b", "80773", "80778", "80791", "80796", "8079b", "80813", "80818", "80840", "80845", "8084a", "80863", "80868", "80890", "80895", "8089a", "808b3", "808b8", "80a11", "80a16", "80a1b", "80a20", "80a25", "80a2a", "80a61", "80a66", "80a6b", "80a70", "80a75", "80a7a", "80ab1", "80ab6", "80abb", "81222", "81227", "81231", "81236", "8123b", "81272", "81277", "81281", "81286", "8128b", "81312", "81317", "81330", "81335", "8133a", "81362", "81367", "81380", "81385", "8138a", "813b2", "813b7", "81411", "81416", "8141b", "81420", "81425", "8142a", "81461", "81466", "8146b", "81470", "81475", "8147a", "814b1", "814b6", "814bb", "81722", "81727", "81731", "81736", "8173b", "81772", "81777", "81781", "81786", "8178b", "81812", "81817", "81830", "81835", "8183a", "81862", "81867", "81880", "81885", "8188a", "818b2", "818b7", "81911", "81916", "8191b", "81920", "81925", "8192a", "81961", "81966", "8196b", "81970", "81975", "8197a", "819b1", "819b6", "819bb", "83022", "83027", "83031", "83036", "8303b", "83072", "83077", "83081", "83086", "8308b", "83333", "83338", "83342", "83347", "83383", "83388", "83392", "83397", "83423", "83428", "83441", "83446", "8344b", "83473", "83478", "83491", "83496", "8349b", "83522", "83527", "83531", "83536", "8353b", "83572", "83577", "83581", "83586", "8358b", "83833", "83838", "83842", "83847", "83883", "83888", "83892", "83897", "83923", "83928", "83941", "83946", "8394b", "83973", "83978", "83991", "83996", "8399b", "83a22", "83a27", "83a31", "83a36", "83a3b", "83a72", "83a77", "83a81", "83a86", "83a8b", "84012", "84017", "84030", "84035", "8403a", "84062", "84067", "84080", "84085", "8408a", "840b2", "840b7", "84233", "84238", "84242", "84247", "84283", "84288", "84292", "84297", "84413", "84418", "84440", "84445", "8444a", "84463", "84468", "84490", "84495", "8449a", "844b3", "844b8", "84512", "84517", "84530", "84535", "8453a", "84562", "84567", "84580", "84585", "8458a", "845b2", "845b7", "84733", "84738", "84742", "84747", "84783", "84788", "84792", "84797", "84913", "84918", "84940", "84945", "8494a", "84963", "84968", "84990", "84995", "8499a", "849b3", "849b8", "84a12", "84a17", "84a30", "84a35", "84a3a", "84a62", "84a67", "84a80", "84a85", "84a8a", "84ab2", "84ab7", "85011", "85016", "8501b", "85020", "85025", "8502a", "85061", "85066", "8506b", "85070", "85075", "8507a", "850b1", "850b6", "850bb", "85223", "85228", "85241", "85246", "8524b", "85273", "85278", "85291", "85296", "8529b", "85313", "85318", "85340", "85345", "8534a", "85363", "85368", "85390", "85395", "8539a", "853b3", "853b8", "85511", "85516", "8551b", "85520", "85525", "8552a", "85561", "85566", "8556b", "85570", "85575", "8557a", "855b1", "855b6", "855bb", "85723", "85728", "85741", "85746", "8574b", "85773", "85778", "85791", "85796", "8579b", "85813", "85818", "85840", "85845", "8584a", "85863", "85868", "85890", "85895", "8589a", "858b3", "858b8", "85a11", "85a16", "85a1b", "85a20", "85a25", "85a2a", "85a61", "85a66", "85a6b", "85a70", "85a75", "85a7a", "85ab1", "85ab6", "85abb", "86222", "86227", "86231", "86236", "8623b", "86272", "86277", "86281", "86286", "8628b", "86312", "86317", "86330", "86335", "8633a", "86362", "86367", "86380", "86385", "8638a", "863b2", "863b7", "86411", "86416", "8641b", "86420", "86425", "8642a", "86461", "86466", "8646b", "86470", "86475", "8647a", "864b1", "864b6", "864bb", "86722", "86727", "86731", "86736", "8673b", "86772", "86777", "86781", "86786", "8678b", "86812", "86817", "86830", "86835", "8683a", "86862", "86867", "86880", "86885", "8688a", "868b2", "868b7", "86911", "86916", "8691b", "86920", "86925", "8692a", "86961", "86966", "8696b", "86970", "86975", "8697a", "869b1", "869b6", "869bb", "88022", "88027", "88031", "88036", "8803b", "88072", "88077", "88081", "88086", "8808b", "88333", "88338", "88342", "88347", "88383", "88388", "88392", "88397", "88423", "88428", "88441", "88446", "8844b", "88473", "88478", "88491", "88496", "8849b", "88522", "88527", "88531", "88536", "8853b", "88572", "88577", "88581", "88586", "8858b", "88833", "88838", "88842", "88847", "88883", "88888", "88892", "88897", "88923", "88928", "88941", "88946", "8894b", "88973", "88978", "88991", "88996", "8899b", "88a22", "88a27", "88a31", "88a36", "88a3b", "88a72", "88a77", "88a81", "88a86", "88a8b", "89012", "89017", "89030", "89035", "8903a", "89062", "89067", "89080", "89085", "8908a", "890b2", "890b7", "89233", "89238", "89242", "89247", "89283", "89288", "89292", "89297", "89413", "89418", "89440", "89445", "8944a", "89463", "89468", "89490", "89495", "8949a", "894b3", "894b8", "89512", "89517", "89530", "89535", "8953a", "89562", "89567", "89580", "89585", "8958a", "895b2", "895b7", "89733", "89738", "89742", "89747", "89783", "89788", "89792", "89797", "89913", "89918", "89940", "89945", "8994a", "89963", "89968", "89990", "89995", "8999a", "899b3", "899b8", "89a12", "89a17", "89a30", "89a35", "89a3a", "89a62", "89a67", "89a80", "89a85", "89a8a", "89ab2", "89ab7", "8a011", "8a016", "8a01b", "8a020", "8a025", "8a02a", "8a061", "8a066", "8a06b", "8a070", "8a075", "8a07a", "8a0b1", "8a0b6", "8a0bb", "8a223", "8a228", "8a241", "8a246", "8a24b", "8a273", "8a278", "8a291", "8a296", "8a29b", "8a313", "8a318", "8a340", "8a345", "8a34a", "8a363", "8a368", "8a390", "8a395", "8a39a", "8a3b3", "8a3b8", "8a511", "8a516", "8a51b", "8a520", "8a525", "8a52a", "8a561", "8a566", "8a56b", "8a570", "8a575", "8a57a", "8a5b1", "8a5b6", "8a5bb", "8a723", "8a728", "8a741", "8a746", "8a74b", "8a773", "8a778", "8a791", "8a796", "8a79b", "8a813", "8a818", "8a840", "8a845", "8a84a", "8a863", "8a868", "8a890", "8a895", "8a89a", "8a8b3", "8a8b8", "8aa11", "8aa16", "8aa1b", "8aa20", "8aa25", "8aa2a", "8aa61", "8aa66", "8aa6b", "8aa70", "8aa75", "8aa7a", "8aab1", "8aab6", "8aabb", "8b222", "8b227", "8b231", "8b236", "8b23b", "8b272", "8b277", "8b281", "8b286", "8b28b", "8b312", "8b317", "8b330", "8b335", "8b33a", "8b362", "8b367", "8b380", "8b385", "8b38a", "8b3b2", "8b3b7", "8b411", "8b416", "8b41b", "8b420", "8b425", "8b42a", "8b461", "8b466", "8b46b", "8b470", "8b475", "8b47a", "8b4b1", "8b4b6", "8b4bb", "8b722", "8b727", "8b731", "8b736", "8b73b", "8b772", "8b777", "8b781", "8b786", "8b78b", "8b812", "8b817", "8b830", "8b835", "8b83a", "8b862", "8b867", "8b880", "8b885", "8b88a", "8b8b2", "8b8b7", "8b911", "8b916", "8b91b", "8b920", "8b925", "8b92a", "8b961", "8b966", "8b96b", "8b970", "8b975", "8b97a", "8b9b1", "8b9b6", "8b9bb", "90001", "90006", "9000b", "90024", "90029", "90051", "90056", "9005b", "90074", "90079", "900a1", "900a6", "900ab", "90123", "90128", "90141", "90146", "9014b", "90173", "90178", "90191", "90196", "9019b", "90303", "90308", "90344", "90349", "90353", "90358", "90394", "90399", "903a3", "903a8", "90501", "90506", "9050b", "90524", "90529", "90551", "90556", "9055b", "90574", "90579", "905a1", "905a6", "905ab", "90623", "90628", "90641", "90646", "9064b", "90673", "90678", "90691", "90696", "9069b", "90803", "90808", "90844", "90849", "90853", "90858", "90894", "90899", "908a3", "908a8", "90a01", "90a06", "90a0b", "90a24", "90a29", "90a51", "90a56", "90a5b", "90a74", "90a79", "90aa1", "90aa6", "90aab", "90b23", "90b28", "90b41", "90b46", "90b4b", "90b73", "90b78", "90b91", "90b96", "90b9b", "91122", "91127", "91131", "91136", "9113b", "91172", "91177", "91181", "91186", "9118b", "91302", "91307", "91334", "91339", "91352", "91357", "91384", "91389", "913a2", "913a7", "91401", "91406", "9140b", "91424", "91429", "91451", "91456", "9145b", "91474", "91479", "914a1", "914a6", "914ab", "91622", "91627", "91631", "91636", "9163b", "91672", "91677", "91681", "91686", "9168b", "91802", "91807", "91834", "91839", "91852", "91857", "91884", "91889", "918a2", "918a7", "91901", "91906", "9190b", "91924", "91929", "91951", "91956", "9195b", "91974", "91979", "919a1", "919a6", "919ab", "91b22", "91b27", "91b31", "91b36", "91b3b", "91b72", "91b77", "91b81", "91b86", "91b8b", "92022", "92027", "92031", "92036", "9203b", "92072", "92077", "92081", "92086", "9208b", "92333", "92338", "92342", "92347", "92383", "92388", "92392", "92397", "92423", "92428", "92441", "92446", "9244b", "92473", "92478", "92491", "92496", "9249b", "92522", "92527", "92531", "92536", "9253b", "92572", "92577", "92581", "92586", "9258b", "92833", "92838", "92842", "92847", "92883", "92888", "92892", "92897", "92923", "92928", "92941", "92946", "9294b", "92973", "92978", "92991", "92996", "9299b", "92a22", "92a27", "92a31", "92a36", "92a3b", "92a72", "92a77", "92a81", "92a86", "92a8b", "94002", "94007", "94034", "94039", "94052", "94057", "94084", "94089", "940a2", "940a7", "94133", "94138", "94142", "94147", "94183", "94188", "94192", "94197", "94403", "94408", "94444", "94449", "94453", "94458", "94494", "94499", "944a3", "944a8", "94502", "94507", "94534", "94539", "94552", "94557", "94584", "94589", "945a2", "945a7", "94633", "94638", "94642", "94647", "94683", "94688", "94692", "94697", "94903", "94908", "94944", "94949", "94953", "94958", "94994", "94999", "949a3", "949a8", "94a02", "94a07", "94a34", "94a39", "94a52", "94a57", "94a84", "94a89", "94aa2", "94aa7", "94b33", "94b38", "94b42", "94b47", "94b83", "94b88", "94b92", "94b97", "95001", "95006", "9500b", "95024", "95029", "95051", "95056", "9505b", "95074", "95079", "950a1", "950a6", "950ab", "95123", "95128", "95141", "95146", "9514b", "95173", "95178", "95191", "95196", "9519b", "95303", "95308", "95344", "95349", "95353", "95358", "95394", "95399", "953a3", "953a8", "95501", "95506", "9550b", "95524", "95529", "95551", "95556", "9555b", "95574", "95579", "955a1", "955a6", "955ab", "95623", "95628", "95641", "95646", "9564b", "95673", "95678", "95691", "95696", "9569b", "95803", "95808", "95844", "95849", "95853", "95858", "95894", "95899", "958a3", "958a8", "95a01", "95a06", "95a0b", "95a24", "95a29", "95a51", "95a56", "95a5b", "95a74", "95a79", "95aa1", "95aa6", "95aab", "95b23", "95b28", "95b41", "95b46", "95b4b", "95b73", "95b78", "95b91", "95b96", "95b9b", "96122", "96127", "96131", "96136", "9613b", "96172", "96177", "96181", "96186", "9618b", "96302", "96307", "96334", "96339", "96352", "96357", "96384", "96389", "963a2", "963a7", "96401", "96406", "9640b", "96424", "96429", "96451", "96456", "9645b", "96474", "96479", "964a1", "964a6", "964ab", "96622", "96627", "96631", "96636", "9663b", "96672", "96677", "96681", "96686", "9668b", "96802", "96807", "96834", "96839", "96852", "96857", "96884", "96889", "968a2", "968a7", "96901", "96906", "9690b", "96924", "96929", "96951", "96956", "9695b", "96974", "96979", "969a1", "969a6", "969ab", "96b22", "96b27", "96b31", "96b36", "96b3b", "96b72", "96b77", "96b81", "96b86", "96b8b", "97022", "97027", "97031", "97036", "9703b", "97072", "97077", "97081", "97086", "9708b", "97333", "97338", "97342", "97347", "97383", "97388", "97392", "97397", "97423", "97428", "97441", "97446", "9744b", "97473", "97478", "97491", "97496", "9749b", "97522", "97527", "97531", "97536", "9753b", "97572", "97577", "97581", "97586", "9758b", "97833", "97838", "97842", "97847", "97883", "97888", "97892", "97897", "97923", "97928", "97941", "97946", "9794b", "97973", "97978", "97991", "97996", "9799b", "97a22", "97a27", "97a31", "97a36", "97a3b", "97a72", "97a77", "97a81", "97a86", "97a8b", "99002", "99007", "99034", "99039", "99052", "99057", "99084", "99089", "990a2", "990a7", "99133", "99138", "99142", "99147", "99183", "99188", "99192", "99197", "99403", "99408", "99444", "99449", "99453", "99458", "99494", "99499", "994a3", "994a8", "99502", "99507", "99534", "99539", "99552", "99557", "99584", "99589", "995a2", "995a7", "99633", "99638", "99642", "99647", "99683", "99688", "99692", "99697", "99903", "99908", "99944", "99949", "99953", "99958", "99994", "99999", "999a3", "999a8", "99a02", "99a07", "99a34", "99a39", "99a52", "99a57", "99a84", "99a89", "99aa2", "99aa7", "99b33", "99b38", "99b42", "99b47", "99b83", "99b88", "99b92", "99b97", "9a001", "9a006", "9a00b", "9a024", "9a029", "9a051", "9a056", "9a05b", "9a074", "9a079", "9a0a1", "9a0a6", "9a0ab", "9a123", "9a128", "9a141", "9a146", "9a14b", "9a173", "9a178", "9a191", "9a196", "9a19b", "9a303", "9a308", "9a344", "9a349", "9a353", "9a358", "9a394", "9a399", "9a3a3", "9a3a8", "9a501", "9a506", "9a50b", "9a524", "9a529", "9a551", "9a556", "9a55b", "9a574", "9a579", "9a5a1", "9a5a6", "9a5ab", "9a623", "9a628", "9a641", "9a646", "9a64b", "9a673", "9a678", "9a691", "9a696", "9a69b", "9a803", "9a808", "9a844", "9a849", "9a853", "9a858", "9a894", "9a899", "9a8a3", "9a8a8", "9aa01", "9aa06", "9aa0b", "9aa24", "9aa29", "9aa51", "9aa56", "9aa5b", "9aa74", "9aa79", "9aaa1", "9aaa6", "9aaab", "9ab23", "9ab28", "9ab41", "9ab46", "9ab4b", "9ab73", "9ab78", "9ab91", "9ab96", "9ab9b", "9b122", "9b127", "9b131", "9b136", "9b13b", "9b172", "9b177", "9b181", "9b186", "9b18b", "9b302", "9b307", "9b334", "9b339", "9b352", "9b357", "9b384", "9b389", "9b3a2", "9b3a7", "9b401", "9b406", "9b40b", "9b424", "9b429", "9b451", "9b456", "9b45b", "9b474", "9b479", "9b4a1", "9b4a6", "9b4ab", "9b622", "9b627", "9b631", "9b636", "9b63b", "9b672", "9b677", "9b681", "9b686", "9b68b", "9b802", "9b807", "9b834", "9b839", "9b852", "9b857", "9b884", "9b889", "9b8a2", "9b8a7", "9b901", "9b906", "9b90b", "9b924", "9b929", "9b951", "9b956", "9b95b", "9b974", "9b979", "9b9a1", "9b9a6", "9b9ab", "9bb22", "9bb27", "9bb31", "9bb36", "9bb3b", "9bb72", "9bb77", "9bb81", "9bb86", "9bb8b", "a0000", "a0005", "a000a", "a0014", "a0019", "a0050", "a0055", "a005a", "a0064", "a0069", "a00a0", "a00a5", "a00aa", "a00b4", "a00b9", "a0113", "a0118", "a0140", "a0145", "a014a", "a0163", "a0168", "a0190", "a0195", "a019a", "a01b3", "a01b8", "a0203", "a0208", "a0244", "a0249", "a0253", "a0258", "a0294", "a0299", "a02a3", "a02a8", "a0500", "a0505", "a050a", "a0514", "a0519", "a0550", "a0555", "a055a", "a0564", "a0569", "a05a0", "a05a5", "a05aa", "a05b4", "a05b9", "a0613", "a0618", "a0640", "a0645", "a064a", "a0663", "a0668", "a0690", "a0695", "a069a", "a06b3", "a06b8", "a0703", "a0708", "a0744", "a0749", "a0753", "a0758", "a0794", "a0799", "a07a3", "a07a8", "a0a00", "a0a05", "a0a0a", "a0a14", "a0a19", "a0a50", "a0a55", "a0a5a", "a0a64", "a0a69", "a0aa0", "a0aa5", "a0aaa", "a0ab4", "a0ab9", "a0b13", "a0b18", "a0b40", "a0b45", "a0b4a", "a0b63", "a0b68", "a0b90", "a0b95", "a0b9a", "a0bb3", "a0bb8", "a1112", "a1117", "a1130", "a1135", "a113a", "a1162", "a1167", "a1180", "a1185", "a118a", "a11b2", "a11b7", "a1202", "a1207", "a1234", "a1239", "a1252", "a1257", "a1284", "a1289", "a12a2", "a12a7", "a1400", "a1405", "a140a", "a1414", "a1419", "a1450", "a1455", "a145a", "a1464", "a1469", "a14a0", "a14a5", "a14aa", "a14b4", "a14b9", "a1612", "a1617", "a1630", "a1635", "a163a", "a1662", "a1667", "a1680", "a1685", "a168a", "a16b2", "a16b7", "a1702", "a1707", "a1734", "a1739", "a1752", "a1757", "a1784", "a1789", "a17a2", "a17a7", "a1900", "a1905", "a190a", "a1914", "a1919", "a1950", "a1955", "a195a", "a1964", "a1969", "a19a0", "a19a5", "a19aa", "a19b4", "a19b9", "a1b12", "a1b17", "a1b30", "a1b35", "a1b3a", "a1b62", "a1b67", "a1b80", "a1b85", "a1b8a", "a1bb2", "a1bb7", "a2012", "a2017", "a2030", "a2035", "a203a", "a2062", "a2067", "a2080", "a2085", "a208a", "a20b2", "a20b7", "a2233", "a2238", "a2242", "a2247", "a2283", "a2288", "a2292", "a2297", "a2413", "a2418", "a2440", "a2445", "a244a", "a2463", "a2468", "a2490", "a2495", "a249a", "a24b3", "a24b8", "a2512", "a2517", "a2530", "a2535", "a253a", "a2562", "a2567", "a2580", "a2585", "a258a", "a25b2", "a25b7", "a2733", "a2738", "a2742", "a2747", "a2783", "a2788", "a2792", "a2797", "a2913", "a2918", "a2940", "a2945", "a294a", "a2963", "a2968", "a2990", "a2995", "a299a", "a29b3", "a29b8", "a2a12", "a2a17", "a2a30", "a2a35", "a2a3a", "a2a62", "a2a67", "a2a80", "a2a85", "a2a8a", "a2ab2", "a2ab7", "a3002", "a3007", "a3034", "a3039", "a3052", "a3057", "a3084", "a3089", "a30a2", "a30a7", "a3133", "a3138", "a3142", "a3147", "a3183", "a3188", "a3192", "a3197", "a3403", "a3408", "a3444", "a3449", "a3453", "a3458", "a3494", "a3499", "a34a3", "a34a8", "a3502", "a3507", "a3534", "a3539", "a3552", "a3557", "a3584", "a3589", "a35a2", "a35a7", "a3633", "a3638", "a3642", "a3647", "a3683", "a3688", "a3692", "a3697", "a3903", "a3908", "a3944", "a3949", "a3953", "a3958", "a3994", "a3999", "a39a3", "a39a8", "a3a02", "a3a07", "a3a34", "a3a39", "a3a52", "a3a57", "a3a84", "a3a89", "a3aa2", "a3aa7", "a3b33", "a3b38", "a3b42", "a3b47", "a3b83", "a3b88", "a3b92", "a3b97", "a5000", "a5005", "a500a", "a5014", "a5019", "a5050", "a5055", "a505a", "a5064", "a5069", "a50a0", "a50a5", "a50aa", "a50b4", "a50b9", "a5113", "a5118", "a5140", "a5145", "a514a", "a5163", "a5168", "a5190", "a5195", "a519a", "a51b3", "a51b8", "a5203", "a5208", "a5244", "a5249", "a5253", "a5258", "a5294", "a5299", "a52a3", "a52a8", "a5500", "a5505", "a550a", "a5514", "a5519", "a5550", "a5555", "a555a", "a5564", "a5569", "a55a0", "a55a5", "a55aa", "a55b4", "a55b9", "a5613", "a5618", "a5640", "a5645", "a564a", "a5663", "a5668", "a5690", "a5695", "a569a", "a56b3", "a56b8", "a5703", "a5708", "a5744", "a5749", "a5753", "a5758", "a5794", "a5799", "a57a3", "a57a8", "a5a00", "a5a05", "a5a0a", "a5a14", "a5a19", "a5a50", "a5a55", "a5a5a", "a5a64", "a5a69", "a5aa0", "a5aa5", "a5aaa", "a5ab4", "a5ab9", "a5b13", "a5b18", "a5b40", "a5b45", "a5b4a", "a5b63", "a5b68", "a5b90", "a5b95", "a5b9a", "a5bb3", "a5bb8", "a6112", "a6117", "a6130", "a6135", "a613a", "a6162", "a6167", "a6180", "a6185", "a618a", "a61b2", "a61b7", "a6202", "a6207", "a6234", "a6239", "a6252", "a6257", "a6284", "a6289", "a62a2", "a62a7", "a6400", "a6405", "a640a", "a6414", "a6419", "a6450", "a6455", "a645a", "a6464", "a6469", "a64a0", "a64a5", "a64aa", "a64b4", "a64b9", "a6612", "a6617", "a6630", "a6635", "a663a", "a6662", "a6667", "a6680", "a6685", "a668a", "a66b2", "a66b7", "a6702", "a6707", "a6734", "a6739", "a6752", "a6757", "a6784", "a6789", "a67a2", "a67a7", "a6900", "a6905", "a690a", "a6914", "a6919", "a6950", "a6955", "a695a", "a6964", "a6969", "a69a0", "a69a5", "a69aa", "a69b4", "a69b9", "a6b12", "a6b17", "a6b30", "a6b35", "a6b3a", "a6b62", "a6b67", "a6b80", "a6b85", "a6b8a", "a6bb2", "a6bb7", "a7012", "a7017", "a7030", "a7035", "a703a", "a7062", "a7067", "a7080", "a7085", "a708a", "a70b2", "a70b7", "a7233", "a7238", "a7242", "a7247", "a7283", "a7288", "a7292", "a7297", "a7413", "a7418", "a7440", "a7445", "a744a", "a7463", "a7468", "a7490", "a7495", "a749a", "a74b3", "a74b8", "a7512", "a7517", "a7530", "a7535", "a753a", "a7562", "a7567", "a7580", "a7585", "a758a", "a75b2", "a75b7", "a7733", "a7738", "a7742", "a7747", "a7783", "a7788", "a7792", "a7797", "a7913", "a7918", "a7940", "a7945", "a794a", "a7963", "a7968", "a7990", "a7995", "a799a", "a79b3", "a79b8", "a7a12", "a7a17", "a7a30", "a7a35", "a7a3a", "a7a62", "a7a67", "a7a80", "a7a85", "a7a8a", "a7ab2", "a7ab7", "a8002", "a8007", "a8034", "a8039", "a8052", "a8057", "a8084", "a8089", "a80a2", "a80a7", "a8133", "a8138", "a8142", "a8147", "a8183", "a8188", "a8192", "a8197", "a8403", "a8408", "a8444", "a8449", "a8453", "a8458", "a8494", "a8499", "a84a3", "a84a8", "a8502", "a8507", "a8534", "a8539", "a8552", "a8557", "a8584", "a8589", "a85a2", "a85a7", "a8633", "a8638", "a8642", "a8647", "a8683", "a8688", "a8692", "a8697", "a8903", "a8908", "a8944", "a8949", "a8953", "a8958", "a8994", "a8999", "a89a3", "a89a8", "a8a02", "a8a07", "a8a34", "a8a39", "a8a52", "a8a57", "a8a84", "a8a89", "a8aa2", "a8aa7", "a8b33", "a8b38", "a8b42", "a8b47", "a8b83", "a8b88", "a8b92", "a8b97", "aa000", "aa005", "aa00a", "aa014", "aa019", "aa050", "aa055", "aa05a", "aa064", "aa069", "aa0a0", "aa0a5", "aa0aa", "aa0b4", "aa0b9", "aa113", "aa118", "aa140", "aa145", "aa14a", "aa163", "aa168", "aa190", "aa195", "aa19a", "aa1b3", "aa1b8", "aa203", "aa208", "aa244", "aa249", "aa253", "aa258", "aa294", "aa299", "aa2a3", "aa2a8", "aa500", "aa505", "aa50a", "aa514", "aa519", "aa550", "aa555", "aa55a", "aa564", "aa569", "aa5a0", "aa5a5", "aa5aa", "aa5b4", "aa5b9", "aa613", "aa618", "aa640", "aa645", "aa64a", "aa663", "aa668", "aa690", "aa695", "aa69a", "aa6b3", "aa6b8", "aa703", "aa708", "aa744", "aa749", "aa753", "aa758", "aa794", "aa799", "aa7a3", "aa7a8", "aaa00", "aaa05", "aaa0a", "aaa14", "aaa19", "aaa50", "aaa55", "aaa5a", "aaa64", "aaa69", "aaaa0", "aaaa5", "aaaaa", "aaab4", "aaab9", "aab13", "aab18", "aab40", "aab45", "aab4a", "aab63", "aab68", "aab90", "aab95", "aab9a", "aabb3", "aabb8", "ab112", "ab117", "ab130", "ab135", "ab13a", "ab162", "ab167", "ab180", "ab185", "ab18a", "ab1b2", "ab1b7", "ab202", "ab207", "ab234", "ab239", "ab252", "ab257", "ab284", "ab289", "ab2a2", "ab2a7", "ab400", "ab405", "ab40a", "ab414", "ab419", "ab450", "ab455", "ab45a", "ab464", "ab469", "ab4a0", "ab4a5", "ab4aa", "ab4b4", "ab4b9", "ab612", "ab617", "ab630", "ab635", "ab63a", "ab662", "ab667", "ab680", "ab685", "ab68a", "ab6b2", "ab6b7", "ab702", "ab707", "ab734", "ab739", "ab752", "ab757", "ab784", "ab789", "ab7a2", "ab7a7", "ab900", "ab905", "ab90a", "ab914", "ab919", "ab950", "ab955", "ab95a", "ab964", "ab969", "ab9a0", "ab9a5", "ab9aa", "ab9b4", "ab9b9", "abb12", "abb17", "abb30", "abb35", "abb3a", "abb62", "abb67", "abb80", "abb85", "abb8a", "abbb2", "abbb7", "b1111", "b1116", "b111b", "b1120", "b1125", "b112a", "b1161", "b1166", "b116b", "b1170", "b1175", "b117a", "b11b1", "b11b6", "b11bb", "b1201", "b1206", "b120b", "b1224", "b1229", "b1251", "b1256", "b125b", "b1274", "b1279", "b12a1", "b12a6", "b12ab", "b1300", "b1305", "b130a", "b1314", "b1319", "b1350", "b1355", "b135a", "b1364", "b1369", "b13a0", "b13a5", "b13aa", "b13b4", "b13b9", "b1611", "b1616", "b161b", "b1620", "b1625", "b162a", "b1661", "b1666", "b166b", "b1670", "b1675", "b167a", "b16b1", "b16b6", "b16bb", "b1701", "b1706", "b170b", "b1724", "b1729", "b1751", "b1756", "b175b", "b1774", "b1779", "b17a1", "b17a6", "b17ab", "b1800", "b1805", "b180a", "b1814", "b1819", "b1850", "b1855", "b185a", "b1864", "b1869", "b18a0", "b18a5", "b18aa", "b18b4", "b18b9", "b1b11", "b1b16", "b1b1b", "b1b20", "b1b25", "b1b2a", "b1b61", "b1b66", "b1b6b", "b1b70", "b1b75", "b1b7a", "b1bb1", "b1bb6", "b1bbb", "b2011", "b2016", "b201b", "b2020", "b2025", "b202a", "b2061", "b2066", "b206b", "b2070", "b2075", "b207a", "b20b1", "b20b6", "b20bb", "b2223", "b2228", "b2241", "b2246", "b224b", "b2273", "b2278", "b2291", "b2296", "b229b", "b2313", "b2318", "b2340", "b2345", "b234a", "b2363", "b2368", "b2390", "b2395", "b239a", "b23b3", "b23b8", "b2511", "b2516", "b251b", "b2520", "b2525", "b252a", "b2561", "b2566", "b256b", "b2570", "b2575", "b257a", "b25b1", "b25b6", "b25bb", "b2723", "b2728", "b2741", "b2746", "b274b", "b2773", "b2778", "b2791", "b2796", "b279b", "b2813", "b2818", "b2840", "b2845", "b284a", "b2863", "b2868", "b2890", "b2895", "b289a", "b28b3", "b28b8", "b2a11", "b2a16", "b2a1b", "b2a20", "b2a25", "b2a2a", "b2a61", "b2a66", "b2a6b", "b2a70", "b2a75", "b2a7a", "b2ab1", "b2ab6", "b2abb", "b3001", "b3006", "b300b", "b3024", "b3029", "b3051", "b3056", "b305b", "b3074", "b3079", "b30a1", "b30a6", "b30ab", "b3123", "b3128", "b3141", "b3146", "b314b", "b3173", "b3178", "b3191", "b3196", "b319b", "b3303", "b3308", "b3344", "b3349", "b3353", "b3358", "b3394", "b3399", "b33a3", "b33a8", "b3501", "b3506", "b350b", "b3524", "b3529", "b3551", "b3556", "b355b", "b3574", "b3579", "b35a1", "b35a6", "b35ab", "b3623", "b3628", "b3641", "b3646", "b364b", "b3673", "b3678", "b3691", "b3696", "b369b", "b3803", "b3808", "b3844", "b3849", "b3853", "b3858", "b3894", "b3899", "b38a3", "b38a8", "b3a01", "b3a06", "b3a0b", "b3a24", "b3a29", "b3a51", "b3a56", "b3a5b", "b3a74", "b3a79", "b3aa1", "b3aa6", "b3aab", "b3b23", "b3b28", "b3b41", "b3b46", "b3b4b", "b3b73", "b3b78", "b3b91", "b3b96", "b3b9b", "b4000", "b4005", "b400a", "b4014", "b4019", "b4050", "b4055", "b405a", "b4064", "b4069", "b40a0", "b40a5", "b40aa", "b40b4", "b40b9", "b4113", "b4118", "b4140", "b4145", "b414a", "b4163", "b4168", "b4190", "b4195", "b419a", "b41b3", "b41b8", "b4203", "b4208", "b4244", "b4249", "b4253", "b4258", "b4294", "b4299", "b42a3", "b42a8", "b4500", "b4505", "b450a", "b4514", "b4519", "b4550", "b4555", "b455a", "b4564", "b4569", "b45a0", "b45a5", "b45aa", "b45b4", "b45b9", "b4613", "b4618", "b4640", "b4645", "b464a", "b4663", "b4668", "b4690", "b4695", "b469a", "b46b3", "b46b8", "b4703", "b4708", "b4744", "b4749", "b4753", "b4758", "b4794", "b4799", "b47a3", "b47a8", "b4a00", "b4a05", "b4a0a", "b4a14", "b4a19", "b4a50", "b4a55", "b4a5a", "b4a64", "b4a69", "b4aa0", "b4aa5", "b4aaa", "b4ab4", "b4ab9", "b4b13", "b4b18", "b4b40", "b4b45", "b4b4a", "b4b63", "b4b68", "b4b90", "b4b95", "b4b9a", "b4bb3", "b4bb8", "b6111", "b6116", "b611b", "b6120", "b6125", "b612a", "b6161", "b6166", "b616b", "b6170", "b6175", "b617a", "b61b1", "b61b6", "b61bb", "b6201", "b6206", "b620b", "b6224", "b6229", "b6251", "b6256", "b625b", "b6274", "b6279", "b62a1", "b62a6", "b62ab", "b6300", "b6305", "b630a", "b6314", "b6319", "b6350", "b6355", "b635a", "b6364", "b6369", "b63a0", "b63a5", "b63aa", "b63b4", "b63b9", "b6611", "b6616", "b661b", "b6620", "b6625", "b662a", "b6661", "b6666", "b666b", "b6670", "b6675", "b667a", "b66b1", "b66b6", "b66bb", "b6701", "b6706", "b670b", "b6724", "b6729", "b6751", "b6756", "b675b", "b6774", "b6779", "b67a1", "b67a6", "b67ab", "b6800", "b6805", "b680a", "b6814", "b6819", "b6850", "b6855", "b685a", "b6864", "b6869", "b68a0", "b68a5", "b68aa", "b68b4", "b68b9", "b6b11", "b6b16", "b6b1b", "b6b20", "b6b25", "b6b2a", "b6b61", "b6b66", "b6b6b", "b6b70", "b6b75", "b6b7a", "b6bb1", "b6bb6", "b6bbb", "b7011", "b7016", "b701b", "b7020", "b7025", "b702a", "b7061", "b7066", "b706b", "b7070", "b7075", "b707a", "b70b1", "b70b6", "b70bb", "b7223", "b7228", "b7241", "b7246", "b724b", "b7273", "b7278", "b7291", "b7296", "b729b", "b7313", "b7318", "b7340", "b7345", "b734a", "b7363", "b7368", "b7390", "b7395", "b739a", "b73b3", "b73b8", "b7511", "b7516", "b751b", "b7520", "b7525", "b752a", "b7561", "b7566", "b756b", "b7570", "b7575", "b757a", "b75b1", "b75b6", "b75bb", "b7723", "b7728", "b7741", "b7746", "b774b", "b7773", "b7778", "b7791", "b7796", "b779b", "b7813", "b7818", "b7840", "b7845", "b784a", "b7863", "b7868", "b7890", "b7895", "b789a", "b78b3", "b78b8", "b7a11", "b7a16", "b7a1b", "b7a20", "b7a25", "b7a2a", "b7a61", "b7a66", "b7a6b", "b7a70", "b7a75", "b7a7a", "b7ab1", "b7ab6", "b7abb", "b8001", "b8006", "b800b", "b8024", "b8029", "b8051", "b8056", "b805b", "b8074", "b8079", "b80a1", "b80a6", "b80ab", "b8123", "b8128", "b8141", "b8146", "b814b", "b8173", "b8178", "b8191", "b8196", "b819b", "b8303", "b8308", "b8344", "b8349", "b8353", "b8358", "b8394", "b8399", "b83a3", "b83a8", "b8501", "b8506", "b850b", "b8524", "b8529", "b8551", "b8556", "b855b", "b8574", "b8579", "b85a1", "b85a6", "b85ab", "b8623", "b8628", "b8641", "b8646", "b864b", "b8673", "b8678", "b8691", "b8696", "b869b", "b8803", "b8808", "b8844", "b8849", "b8853", "b8858", "b8894", "b8899", "b88a3", "b88a8", "b8a01", "b8a06", "b8a0b", "b8a24", "b8a29", "b8a51", "b8a56", "b8a5b", "b8a74", "b8a79", "b8aa1", "b8aa6", "b8aab", "b8b23", "b8b28", "b8b41", "b8b46", "b8b4b", "b8b73", "b8b78", "b8b91", "b8b96", "b8b9b", "b9000", "b9005", "b900a", "b9014", "b9019", "b9050", "b9055", "b905a", "b9064", "b9069", "b90a0", "b90a5", "b90aa", "b90b4", "b90b9", "b9113", "b9118", "b9140", "b9145", "b914a", "b9163", "b9168", "b9190", "b9195", "b919a", "b91b3", "b91b8", "b9203", "b9208", "b9244", "b9249", "b9253", "b9258", "b9294", "b9299", "b92a3", "b92a8", "b9500", "b9505", "b950a", "b9514", "b9519", "b9550", "b9555", "b955a", "b9564", "b9569", "b95a0", "b95a5", "b95aa", "b95b4", "b95b9", "b9613", "b9618", "b9640", "b9645", "b964a", "b9663", "b9668", "b9690", "b9695", "b969a", "b96b3", "b96b8", "b9703", "b9708", "b9744", "b9749", "b9753", "b9758", "b9794", "b9799", "b97a3", "b97a8", "b9a00", "b9a05", "b9a0a", "b9a14", "b9a19", "b9a50", "b9a55", "b9a5a", "b9a64", "b9a69", "b9aa0", "b9aa5", "b9aaa", "b9ab4", "b9ab9", "b9b13", "b9b18", "b9b40", "b9b45", "b9b4a", "b9b63", "b9b68", "b9b90", "b9b95", "b9b9a", "b9bb3", "b9bb8", "bb111", "bb116", "bb11b", "bb120", "bb125", "bb12a", "bb161", "bb166", "bb16b", "bb170", "bb175", "bb17a", "bb1b1", "bb1b6", "bb1bb", "bb201", "bb206", "bb20b", "bb224", "bb229", "bb251", "bb256", "bb25b", "bb274", "bb279", "bb2a1", "bb2a6", "bb2ab", "bb300", "bb305", "bb30a", "bb314", "bb319", "bb350", "bb355", "bb35a", "bb364", "bb369", "bb3a0", "bb3a5", "bb3aa", "bb3b4", "bb3b9", "bb611", "bb616", "bb61b", "bb620", "bb625", "bb62a", "bb661", "bb666", "bb66b", "bb670", "bb675", "bb67a", "bb6b1", "bb6b6", "bb6bb", "bb701", "bb706", "bb70b", "bb724", "bb729", "bb751", "bb756", "bb75b", "bb774", "bb779", "bb7a1", "bb7a6", "bb7ab", "bb800", "bb805", "bb80a", "bb814", "bb819", "bb850", "bb855", "bb85a", "bb864", "bb869", "bb8a0", "bb8a5", "bb8aa", "bb8b4", "bb8b9", "bbb11", "bbb16", "bbb1b", "bbb20", "bbb25", "bbb2a", "bbb61", "bbb66", "bbb6b", "bbb70", "bbb75", "bbb7a", "bbbb1", "bbbb6", "bbbbb"], Ia = "present",
        Ma = "correct",
        Oa = "absent";
    var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };

    function Pa(e, a) {
        var s = {};
        return e.forEach((function (e, t) {
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
    var Ba = "0123456789ab", //alphabet
        Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }
    var Ya = "statistics11",
        Ja = "fail",
        Ua = { currentStreak: 0, maxStreak: 0, guesses: n({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, Ja, 0), winPercentage: 0, gamesPlayed: 0, gamesWon: 0, averageGuesses: 0 };

    function Xa() { var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua); return JSON.parse(e) }

    function Va(e) {
        var a = e.isWin,
            s = e.isStreak,
            t = e.numGuesses,
            o = Xa();
        a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function (e, a) {
            var s = y(a, 2),
                t = s[0],
                o = s[1];
            return t !== Ja ? e += t * o : e
        }), 0) / o.gamesWon),
            function (e) { window.localStorage.setItem(Ya, JSON.stringify(e)) }(o)
    }
    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         SITESWAPLE11\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS",
        es = "WIN",
        as = "FAIL",
        ss = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"], //results
        ts = function (e) {
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
                value: function () {
                    if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            s = this.boardState[this.rowIndex];
                        if (e = s, !Ta.includes(e) && !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not a valid siteswap");
                        if (this.hardMode) {
                            var t = function (e, a, s) {
                                if (!e || !a || !s) return { validGuess: !0 };
                                for (var t = 0; t < s.length; t++)
                                    if (s[t] === Ma && e[t] !== a[t]) return { validGuess: !1, errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase()) };
                                for (var o = {}, n = 0; n < s.length; n++) [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                var r = e.split("").reduce((function (e, a) { return e[a] ? e[a] += 1 : e[a] = 1, e }), {});
                                for (var i in o)
                                    if ((r[i] || 0) < o[i]) return { validGuess: !1, errorMessage: "Guess must contain ".concat(i.toUpperCase()) };
                                return { validGuess: !0 }
                            }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                o = t.validGuess,
                                n = t.errorMessage;
                            if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Not valid in hard mode")
                        }
                        var r = function (e, a) {
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
                            l = r.every((function (e) { return "correct" === e }));
                        if (i || l) Va({ isWin: l, isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date), numGuesses: this.rowIndex }), ja({ lastCompletedTs: Date.now() }), this.gameStatus = l ? es : as, Ca("event", "level_end", { level_name: Wa(this.solution), num_guesses: this.rowIndex, success: l });
                        this.tileIndex = 0, this.canInput = !1, ja({ rowIndex: this.rowIndex, boardState: this.boardState, evaluations: this.evaluations, solution: this.solution, gameStatus: this.gameStatus, lastPlayedTs: Date.now() })
                    }
                }
            }, { key: "addLetter", value: function (e) { this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1))) } }, {
                key: "removeLetter",
                value: function () {
                    if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                    }
                }
            }, {
                key: "submitGuess",
                value: function () {
                    if (this.gameStatus === Za && this.canInput) {
                        if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "addToast",
                value: function (e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard",
                value: function () {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                        s = 6 * Math.floor(a / 5);
                    this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
                }
            }, {
                key: "showStatsModal",
                value: function () {
                    var e = this.$game.querySelector("game-modal"),
                        a = document.createElement("game-stats");
                    this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal",
                value: function () {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function () { return e.showHelpModal() }), 100);
                    for (var a = 0; a < 6; a++) {
                        var s = document.createElement("game-row");
                        s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                    }
                    this.$game.addEventListener("game-key-press", (function (a) { var s = a.detail.key; "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase()) })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function (a) {
                        e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                        var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function () { e.showStatsModal() }), 2500))), e.restoringFromLocalStorage = !1)
                    })), this.shadowRoot.addEventListener("game-setting-change", (function (a) {
                        var s = a.detail,
                            t = s.name,
                            o = s.checked,
                            n = s.disabled;
                        switch (t) {
                            case "hard-mode":
                                return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({ hardMode: o })))
                        }
                    })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function (a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("Settings");
                        s.appendChild(t);
                        var o = document.createElement("game-settings");
                        o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function (a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("How to play");
                        s.appendChild(t);
                        var o = document.createElement("game-help");
                        o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function (a) { e.showStatsModal() })), window.addEventListener("resize", this.sizeBoard.bind(this))
                }
            }, { key: "disconnectedCallback", value: function () { } }, {
                key: "debugTools",
                value: function () {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function (a) { e.addToast("hello world") })), this.shadowRoot.getElementById("modal").addEventListener("click", (function (a) {
                        var s = e.$game.querySelector("game-modal");
                        s.textContent = "hello plz", s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function () { e.evaluateRow() })), this.shadowRoot.getElementById("shake").addEventListener("click", (function () { e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "") })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function () { var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1]; "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "") }))
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template"); //animate
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function (a) { e.shadowRoot.querySelector(".content").classList.add("closing") })), this.shadowRoot.addEventListener("animationend", (function (a) { "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open")) }))
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
        ["5", "6", "7", "8", "9"],
        ["↵", "a", "b", "←"]
    ],
        us = function (e) {
            r(t, e);
            var a = h(t);

            function t() { var e; return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({ mode: "open" }), e }
            return o(t, [{ key: "letterEvaluations", set: function (e) { this._letterEvaluations = e, this._render() } }, { key: "dispatchKeyPressEvent", value: function (e) { this.dispatchEvent(new CustomEvent("game-key-press", { bubbles: !0, composed: !0, detail: { key: e } })) } }, {
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function (a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                    })), window.addEventListener("keydown", (function (a) {
                        if (!0 !== a.repeat) {
                            var s = a.key,
                                t = a.metaKey,
                                o = a.ctrlKey;
                            t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                        }
                    })), this.$keyboard.addEventListener("transitionend", (function (a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && s.classList.remove("fade")
                    })), ds.forEach((function (a) {
                        var s = document.createElement("div");
                        s.classList.add("row"), a.forEach((function (e) {
                            var a;
                            if (e >= "0" && e <= "9" || "←" === e || "↵" === e || "a" === e || "b" === e) {
                                if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                                }
                                "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                            } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            s.appendChild(a)
                        })), e.$keyboard.appendChild(s)
                    })), this._render()
                }
            }, {
                key: "_render",
                value: function () {
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
        return new (s || (s = Promise))((function (o, n) {
            function r(e) { try { l(t.next(e)) } catch (e) { n(e) } }

            function i(e) { try { l(t.throw(e)) } catch (e) { n(e) } }

            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function (e) { e(a) }))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }))
    }

    function ps(e, a) {
        var s, t, o, n, r = { label: 0, sent: function () { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
        return n = { next: i(0), throw: i(1), return: i(2) }, "function" == typeof Symbol && (n[Symbol.iterator] = function () { return this }), n;

        function i(n) {
            return function (i) {
                return function (n) {
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
        function () {
            (console.warn || console.log).apply(console, arguments)
        }.bind("[clipboard-polyfill]");
    var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
        fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
        vs = "undefined" == typeof window ? void 0 : window,
        ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function () { this.success = !1 };

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
        return cs(this, void 0, void 0, (function () {
            var a;
            return ps(this, (function (s) {
                if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) { if (!a) throw new Error("No `text/plain` value was specified."); if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0]; throw new Error("Copying failed, possibly because the user rejected it.") }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function (e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a), s
                }(e) || function (e) {
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
    function As(e, a, s) { try { t = navigator.userAgent || navigator.vendor || window.opera, !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function (e) { return cs(this, void 0, void 0, (function () { return ps(this, (function (a) { if (ks) return [2, ks(e)]; if (!Es(function (e) { var a = {}; return a["text/plain"] = e, a }(e))) throw new Error("writeText() failed"); return [2] })) })) }(e.text).then(a, s) : navigator.share(e) } catch (e) { s() } var t }
    var Cs = document.createElement("template");
    Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = '\n  <div class="countdown">\n    <h1>Next SITESWAPLE11</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = { currentStreak: "Current Streak", maxStreak: "Max Streak", winPercentage: "Win %", gamesPlayed: "Played", gamesWon: "Won", averageGuesses: "Av. Guesses" },
        Os = function (e) {
            r(t, e);
            var a = h(t);

            function t() { var e; return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({ mode: "open" }), e.stats = Xa(), e }
            return o(t, [{
                key: "connectedCallback",
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                    var a = this.shadowRoot.getElementById("statistics"),
                        s = this.shadowRoot.getElementById("guess-distribution"),
                        t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                    if (Object.values(this.stats.guesses).every((function (e) { return 0 === e }))) {
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
                    if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function (s) {
                        var t = Ms[s],
                            o = e.stats[s],
                            n = Ls.content.cloneNode(!0);
                        n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
                    })), this.gameApp.gameStatus !== Za) {
                        var p = this.shadowRoot.querySelector(".footer"),
                            m = Is.content.cloneNode(!0);
                        p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function (a) {
                            a.preventDefault(), a.stopPropagation(); //share results
                            As(function (e) {
                                var a = e.evaluations,
                                    s = e.dayOffset,
                                    t = e.rowIndex,
                                    o = e.isHardMode,
                                    n = e.isWin,
                                    r = JSON.parse(window.localStorage.getItem(j)), //dark
                                    i = JSON.parse(window.localStorage.getItem(S)), //colorblind
                                    l = "Siteswaple11 https://siteswapexplorer.com/siteswaple11/\n".concat(s); //title
                                l += " ".concat(n ? t : "X", "/").concat(6), o && (l += "*");
                                var d = "";
                                return a.forEach((function (e) {
                                    e && (e.forEach((function (e) {
                                        if (e) {
                                            var a = "";
                                            switch (e) { //emoji time - colroblind
                                                case Ma:
                                                    a = function (e) { return e ? "🟧" : "🟩" }(i);
                                                    break;
                                                case Ia:
                                                    a = function (e) { return e ? "🟦" : "🟨" }(i);
                                                    break;
                                                case Oa:
                                                    a = function (e) { return e ? "⬛" : "⬜" }(r)
                                            }
                                            d += a
                                        }
                                    })), d += "\n")
                                })), { text: "".concat(l, "\n\n").concat(d.trimEnd()) }
                            }({ evaluations: e.gameApp.evaluations, dayOffset: e.gameApp.dayOffset, rowIndex: e.gameApp.rowIndex, isHardMode: e.gameApp.hardMode, isWin: e.gameApp.gameStatus === es }), (function () { e.gameApp.addToast("Copied results to clipboard", 2e3, !0) }), (function () { e.gameApp.addToast("Share failed", 2e3, !0) }))
                        }))
                    }
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function (a) { a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", { bubbles: !0, composed: !0, detail: { name: e.getAttribute("name"), checked: e.hasAttribute("checked"), disabled: e.hasAttribute("disabled") } })) }))
            }
        }], [{ key: "observedAttributes", get: function () { return ["checked"] } }]), t
    }(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template"); //help dialog
    $s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>SITESWAPLE11</strong> in 6 tries.</p>\n      <p>Each guess must be a valid period 5 siteswap. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the siteswap.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="7" evaluation="correct" reveal></game-tile>\n            <game-tile letter="3"></game-tile>\n            <game-tile letter="4"></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="6"></game-tile>\n          </div>\n          <p>The number <strong>7</strong> is in the siteswap and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="2" evaluation="present" reveal></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="1"></game-tile>\n            <game-tile letter="2"></game-tile>\n          </div>\n          <p>The number <strong>2</strong> is in the siteswap but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="4"></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="5"></game-tile>\n            <game-tile letter="2" evaluation="absent" reveal></game-tile>\n            <game-tile letter="4"></game-tile>\n          </div>\n          <p>The number <strong>2</strong> is not in the siteswap in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new SITESWAPLE11 will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var Hs = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{ key: "connectedCallback", value: function () { this.shadowRoot.appendChild($s.content.cloneNode(!0)) } }]), t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function (e) {
        r(t, e);
        var a = h(t);

        function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
        return o(t, [{
            key: "connectedCallback",
            value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function (a) { e.shadowRoot.querySelector(".overlay").classList.add("closing") })), this.shadowRoot.addEventListener("animationend", (function (a) { "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function (a) { e.removeChild(a) })), e.removeAttribute("open")) }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = { help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z", settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z", backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z", close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z", share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z", statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" },
        Fs = function (e) {
            r(t, e);
            var a = h(t);

            function t() { var e; return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e }
            return o(t, [{
                key: "connectedCallback",
                value: function () {
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
        Us = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({ mode: "open" });
                var o = new Date;
                return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
            }
            return o(t, [{ key: "padDigit", value: function (e) { return e.toString().padStart(2, "0") } }, {
                key: "updateTimer",
                value: function () {
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
                value: function () {
                    var e = this;
                    this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function () { e.updateTimer() }), 200)
                }
            }, { key: "disconnectedCallback", value: function () { clearInterval(this.intervalId) } }]), t
        }(c(HTMLElement));
    return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = Ps, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", { value: !0 }), e
}({});
