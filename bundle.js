/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      940: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.call(this)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setFeelsLike",
                value: function (e) {
                  (this.feelsLikeData = e), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.feelsLikeData) {
                    var e = this.feelsLikeData.main.feels_like;
                    this.innerHTML =
                      '\n             <div class="feelsLike-details">\n             <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"/></svg>\n                 <div class = "desc">\n                  <p>'.concat(
                        e.toFixed(1),
                        "<span>°c</span></p>\n                 </div>\n             </div>\n             "
                      );
                  }
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("fl-details", c);
      },
      564: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function n(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function r(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return o(e, arguments, c(this).constructor);
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
                a(r, e)
              );
            }),
            r(e)
          );
        }
        function o(e, t, n) {
          return (
            (o = i()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && a(o, n.prototype), o;
                }),
            o.apply(null, arguments)
          );
        }
        function i() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function a(e, t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            a(e, t)
          );
        }
        function c(e) {
          return (
            (c = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            c(e)
          );
        }
        var s = (function (r) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && a(e, t);
          })(p, r);
          var o,
            s,
            u,
            l,
            f =
              ((u = p),
              (l = i()),
              function () {
                var t,
                  n = c(u);
                if (l) {
                  var r = c(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function p() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              f.call(this)
            );
          }
          return (
            (o = p),
            (s = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setForecastData",
                value: function (e) {
                  (this.forecastData = e), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (this.forecastData) {
                    var n = (function () {
                        var n,
                          r = {},
                          o = (function (e, n) {
                            var r =
                              ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                            if (!r) {
                              if (
                                Array.isArray(e) ||
                                (r = (function (e, n) {
                                  if (e) {
                                    if ("string" == typeof e) return t(e, n);
                                    var r = Object.prototype.toString
                                      .call(e)
                                      .slice(8, -1);
                                    return (
                                      "Object" === r &&
                                        e.constructor &&
                                        (r = e.constructor.name),
                                      "Map" === r || "Set" === r
                                        ? Array.from(e)
                                        : "Arguments" === r ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            r
                                          )
                                        ? t(e, n)
                                        : void 0
                                    );
                                  }
                                })(e)) ||
                                (n && e && "number" == typeof e.length)
                              ) {
                                r && (e = r);
                                var o = 0,
                                  i = function () {};
                                return {
                                  s: i,
                                  n: function () {
                                    return o >= e.length
                                      ? { done: !0 }
                                      : { done: !1, value: e[o++] };
                                  },
                                  e: function (e) {
                                    throw e;
                                  },
                                  f: i,
                                };
                              }
                              throw new TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                              );
                            }
                            var a,
                              c = !0,
                              s = !1;
                            return {
                              s: function () {
                                r = r.call(e);
                              },
                              n: function () {
                                var e = r.next();
                                return (c = e.done), e;
                              },
                              e: function (e) {
                                (s = !0), (a = e);
                              },
                              f: function () {
                                try {
                                  c || null == r.return || r.return();
                                } finally {
                                  if (s) throw a;
                                }
                              },
                            };
                          })(e.forecastData.list);
                        try {
                          for (o.s(); !(n = o.n()).done; ) {
                            var i = n.value,
                              a = new Date(i.dt_txt).toDateString();
                            r[a] || (r[a] = []), r[a].push(i);
                          }
                        } catch (e) {
                          o.e(e);
                        } finally {
                          o.f();
                        }
                        return r;
                      })(),
                      r = new Date();
                    r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + 1);
                    var o = Object.values(n).filter(function (e) {
                      var t = new Date(1e3 * e[0].dt);
                      return t.setHours(0, 0, 0, 0), t >= r;
                    });
                    this.innerHTML = "\n          <table>\n            ".concat(
                      o
                        .slice(0, 4)
                        .map(function (e, t) {
                          var n = (function (e) {
                              var t,
                                n =
                                  e.reduce(function (e, t) {
                                    return e + t.main.temp;
                                  }, 0) / e.length;
                              return {
                                weatherIcon:
                                  ((t = e.map(function (e) {
                                    return e.weather[0].icon;
                                  })),
                                  t.reduce(
                                    function (e, t) {
                                      var n =
                                        (t in e.counts ? e.counts[t] : 0) + 1;
                                      return (
                                        (e.counts[t] = n),
                                        n > e.maxCount &&
                                          ((e.mode = t), (e.maxCount = n)),
                                        e
                                      );
                                    },
                                    { mode: null, maxCount: 0, counts: {} }
                                  ).mode),
                                averageTemperature: n,
                              };
                            })(e),
                            r = n.weatherIcon,
                            o = n.averageTemperature,
                            i = new Date(1e3 * e[0].dt);
                          return '\n                <tr class="forecast-dt-'
                            .concat(
                              t + 1,
                              '">\n                  <td class="flex">\n                    <img src="http://openweathermap.org/img/wn/'
                            )
                            .concat(r, '@2x.png"> \n                    <p>')
                            .concat(
                              o.toFixed(1),
                              '°C</p>\n                  </td>\n                  <td><p id="date">'
                            )
                            .concat(
                              i.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              }),
                              '</p></td>\n                  <td><p id="day">'
                            )
                            .concat(
                              i.toLocaleDateString("en-US", {
                                weekday: "long",
                              }),
                              "</p></td>\n                </tr>\n              "
                            );
                        })
                        .join(""),
                      "\n          </table>\n      "
                    );
                  } else this.innerHTML = "";
                },
              },
            ]) && n(o.prototype, s),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            p
          );
        })(r(HTMLElement));
        customElements.define("forecast-box", s);
      },
      122: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.apply(this, arguments)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this.innerHTML =
                    '\n    <div class = "header-nav">\n      <div>\n          <p>weathercheck</p>\n      </div>\n    </div>';
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("header-nav", c);
      },
      741: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.call(this)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setHumData",
                value: function (e) {
                  (this.humData = e), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.humData) {
                    var e = this.humData.main.humidity;
                    this.innerHTML =
                      '\n    <div class="hum-details">\n          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>\n          <div class = "desc">\n            <p>'.concat(
                        e,
                        "<span>%</span></p>\n          </div>\n    </div>\n    "
                      );
                  }
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("hum-details", c);
      },
      318: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              (e = l.call(this)).render(),
              e
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "render",
                value: function () {
                  this.innerHTML =
                    '\n         <style>\n           .loading-container {\n             position: fixed;\n             top: 0;\n             left: 0;\n             width: 100%;\n             height: 100%;\n             background: #131214;\n             display: flex;\n             justify-content: center;\n             align-items: center;\n             z-index: 999; \n           }\n   \n           .loading-circle {\n             border: 4px solid #dddae5; \n             border-top: 4px solid #f3f3f3; \n             border-radius: 50%;\n             width: 50px;\n             height: 50px;\n             animation: spin 2s linear infinite; \n           }\n   \n           @keyframes spin {\n             0% { transform: rotate(0deg); }\n             100% { transform: rotate(360deg); }\n           }\n         </style>\n         <div class="loading-container">\n           <div class="loading-circle"></div>\n         </div>\n       ';
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("loading-circle", c);
      },
      981: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.call(this)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setPressureData",
                value: function (e) {
                  (this.pressureData = e), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.pressureData) {
                    var e = this.pressureData.main.pressure;
                    this.innerHTML =
                      '\n          <div class="pressure-details">\n              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>\n              <div class = "desc">\n                <p>'.concat(
                        e,
                        "<span>hPa</span></p>\n              </div>\n          </div>\n          "
                      );
                  }
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("pressure-details", c);
      },
      170: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.apply(this, arguments)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "ClickEvent",
                set: function (e) {
                  (this.clickEvent = e), this.render();
                },
              },
              {
                key: "value",
                get: function () {
                  return this.querySelector("#searchElement").value;
                },
              },
              {
                key: "render",
                value: function () {
                  (this.innerHTML =
                    '<div id="searchContainer" class="searchContainer"> \n      <input \n        placeholder = "Enter a City"\n        id="searchElement"\n        type="search"      \n      />\n      <button id="btnSearch" type="submit">&#62;</button>\n    </div>\n    '),
                    document
                      .querySelector("#btnSearch")
                      .addEventListener("click", this.clickEvent);
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("search-bar", c);
      },
      977: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.call(this)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setSunData",
                value: function (e) {
                  (this.sunData = e), this.render();
                },
              },
              {
                key: "formatTime",
                value: function (e) {
                  var t = new Date(1e3 * e),
                    n = t.getHours(),
                    r = t.getMinutes(),
                    o = n >= 12 ? "PM" : "AM",
                    i = n % 12 == 0 ? 12 : n % 12,
                    a = r < 10 ? "0".concat(r) : r;
                  return "".concat(i, ":").concat(a, " ").concat(o);
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.sunData) {
                    var e = this.formatTime(this.sunData.sys.sunset),
                      t = this.formatTime(this.sunData.sys.sunrise);
                    this.innerHTML =
                      '\n         <div class="sun-details">\n         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>\n         <div class = desc>\n           <div class = desc-sunrise>\n             <p>Sunrise</p>\n             <p><span>'
                        .concat(
                          t,
                          "</span></p>\n           </div>\n           <div class = desc-sunset>\n             <p>Sunset</p>\n             <p><span>"
                        )
                        .concat(
                          e,
                          "</span></p>\n           </div>\n         </div> \n         </div>\n         "
                        );
                  } else this.innerHTML = "";
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("sun-details", c);
      },
      164: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.call(this)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setTempDetails",
                value: function (e) {
                  (this.tempDetails = e), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.tempDetails) {
                    var e = this.tempDetails.main.temp_min.toFixed(1),
                      t = this.tempDetails.main.temp_max.toFixed(1);
                    this.innerHTML =
                      '\n        <div class="temp-details">\n        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"/></svg>\n            <div class = desc>\n              <div class = desc-temp-min>\n                <p>Temp Min</p>\n                <p><span>'
                        .concat(
                          e,
                          "°c</span></p>\n              </div>\n              <div class = desc-temp-max>\n                <p>Temp max</p>\n                <p><span>"
                        )
                        .concat(
                          t,
                          "°c</span></p>\n              </div>\n            </div>          \n        </div>\n          "
                        );
                  } else this.innerHTML = "";
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("temp-details", c);
      },
      992: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.apply(this, arguments)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "ClickEvent",
                get: function () {
                  return this.clickEvent;
                },
                set: function (e) {
                  (this.clickEvent = e), this.render();
                },
              },
              {
                key: "getLocation",
                value: function () {
                  var e = this;
                  "geolocation" in navigator
                    ? navigator.geolocation.getCurrentPosition(
                        function (t) {
                          var n = t.coords.latitude,
                            r = t.coords.longitude;
                          e.clickEvent(n, r);
                        },
                        function (e) {
                          console.error("Error getting location:", e);
                        }
                      )
                    : console.error(
                        "Geolocation is not available in this browser."
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  (this.innerHTML =
                    '<button id="btnLocation" type="submit">\n    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>\n    </button>'),
                    document
                      .querySelector("#btnLocation")
                      .addEventListener("click", function () {
                        "function" == typeof e.clickEvent && e.getLocation();
                      });
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("use-location", c);
      },
      836: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.call(this)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setVisibility",
                value: function (e) {
                  (this.visibilityData = e), this.render();
                },
              },
              {
                key: "formatVisibility",
                value: function (e) {
                  return (e / 1e3).toFixed(1);
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.visibilityData) {
                    var e = this.visibilityData.visibility,
                      t = this.formatVisibility(e);
                    this.innerHTML =
                      '\n         <div class="visibility-details">\n             <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>\n             <div class = "desc">\n             <p>'.concat(
                        t,
                        "<span>km</span></p> \n             </div>\n         </div>\n         "
                      );
                  }
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("visibility-details", c);
      },
      685: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(p, n);
          var r,
            c,
            s,
            u,
            l,
            f =
              ((u = p),
              (l = o()),
              function () {
                var t,
                  n = a(u);
                if (l) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function p() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              f.call(this)
            );
          }
          return (
            (r = p),
            (s = [
              {
                key: "capitalizeWeatherDescription",
                value: function (e) {
                  return e
                    .split(" ")
                    .map(function (e) {
                      return e.charAt(0).toUpperCase() + e.slice(1);
                    })
                    .join(" ");
                },
              },
            ]),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setWeatherData",
                value: function (e) {
                  (this.weatherData = e), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.weatherData) {
                    var e = this.weatherData.name,
                      t = this.weatherData.sys.country,
                      n = this.weatherData.main.temp.toFixed(0),
                      r = this.weatherData.weather[0].description,
                      o = this.weatherData.weather[0].icon,
                      i = p.capitalizeWeatherDescription(r),
                      a = new Date(),
                      c = a.toLocaleDateString("en-US", { weekday: "long" }),
                      s = a.toLocaleDateString("en-US", { day: "numeric" }),
                      u = a.toLocaleDateString("en-US", { month: "short" });
                    this.innerHTML =
                      '\n      <div class="weather-box">\n          <p id="des">Now</p>\n          <div class="row">\n            <p id="temp"><span>'
                        .concat(
                          n,
                          '°c</span></p>\n              <div class = "details-image">\n                <img src="http://openweathermap.org/img/wn/'
                        )
                        .concat(
                          o,
                          '@2x.png" />\n              </div>\n          </div>\n          <div class = cols>\n            <p id="weather-desc">'
                        )
                        .concat(
                          i,
                          '</p>\n            <hr>\n            <p id="date">\n                  <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>\n                  </svg>\n                  '
                        )
                        .concat(c, " ")
                        .concat(s, ", ")
                        .concat(
                          u,
                          '\n            </p>\n            <p id="loc"> \n                  <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>\n                  </svg>\n                  '
                        )
                        .concat(e, ", ")
                        .concat(
                          t,
                          "\n            </p>\n          </div>\n      </div>\n      "
                        );
                  } else this.innerHTML = "";
                },
              },
            ]) && t(r.prototype, c),
            s && t(r, s),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            p
          );
        })(n(HTMLElement));
        customElements.define("weather-box", c);
      },
      551: () => {
        function e(t) {
          return (
            (e =
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
            e(t)
          );
        }
        function t(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ("object" !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function n(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o);
              }
              function o() {
                return r(e, arguments, a(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(o, e)
              );
            }),
            n(e)
          );
        }
        function r(e, t, n) {
          return (
            (r = o()
              ? Reflect.construct.bind()
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && i(o, n.prototype), o;
                }),
            r.apply(null, arguments)
          );
        }
        function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
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
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var c = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t);
          })(f, n);
          var r,
            c,
            s,
            u,
            l =
              ((s = f),
              (u = o()),
              function () {
                var t,
                  n = a(s);
                if (u) {
                  var r = a(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (function (t, n) {
                  if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(t);
                })(this, t);
              });
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              l.call(this)
            );
          }
          return (
            (r = f),
            (c = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "setWindDetails",
                value: function (e) {
                  (this.windDetails = e), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.windDetails) {
                    var e = this.windDetails.wind.speed,
                      t = this.windDetails.wind.deg;
                    this.innerHTML =
                      '\n    <div class="wind-details">\n      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<style>svg{fill:#dddae5}</style><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>\n      <div class = desc>\n        <div class = desc-speed>\n          <p>Speed</p>\n          <p><span>'
                        .concat(
                          e,
                          '</span><span id = "unit">km/h</span></p>\n        </div>\n        <div class = desc-deg>\n          <p>Deg</p>\n          <p><span>'
                        )
                        .concat(
                          t,
                          "°</span></p>\n        </div>\n      </div>\n    \n    </div>   \n     "
                        );
                  } else this.innerHTML = "";
                },
              },
            ]) && t(r.prototype, c),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            f
          );
        })(n(HTMLElement));
        customElements.define("wind-details", c);
      },
      691: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          "forecast-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: var(--surface);\n  border-radius: 20px 20px 20px 20px;\n  padding: 1.6rem 1.6rem 1.6rem 0.5rem;\n}\n\nforecast-box table .flex p {\n  font-size: 1.3rem;\n  color: var(--on-surface);\n}\n\nforecast-box table .flex {\n  display: flex;\n  align-items: center;\n}\n\nforecast-box table .flex img {\n  width: 60px;\n  height: 60px;\n}\n\n/* Forecast Day 1 Start */\nforecast-box table .forecast-dt-1 {\n  color: var(--on-surface-variant);\n}\n\nforecast-box table .forecast-dt-1 #date {\n  font-size: 0.9rem;\n  text-align: center;\n}\n\nforecast-box table .forecast-dt-1 #day {\n  text-align: end;\n  font-size: 0.9rem;\n}\n/* Forecast Day 1 Ends */\n\n/* Forecast Day 2 Start */\nforecast-box table .forecast-dt-2 {\n  color: var(--on-surface-variant);\n}\n\nforecast-box table .forecast-dt-2 #date {\n  font-size: 0.9rem;\n  text-align: center;\n}\n\nforecast-box table .forecast-dt-2 #day {\n  text-align: end;\n  font-size: 0.9rem;\n}\n/* Forecast Day 2 Ends */\n\n/* Forecast Day 3 Start */\nforecast-box table .forecast-dt-3 {\n  color: var(--on-surface-variant);\n}\n\nforecast-box table .forecast-dt-3 #date {\n  font-size: 0.9rem;\n  text-align: center;\n}\n\nforecast-box table .forecast-dt-3 #day {\n  text-align: end;\n  font-size: 0.9rem;\n}\n/* Forecast Day 3 Ends */\n\n/* Foreacast Day 4 Start */\nforecast-box table .forecast-dt-4 {\n  color: var(--on-surface-variant);\n}\nforecast-box table .forecast-dt-4 #date {\n  font-size: 0.9rem;\n  text-align: center;\n}\n\nforecast-box table .forecast-dt-4 #day {\n  text-align: end;\n  font-size: 0.9rem;\n}\n/* Forecast Day 4 Ends */\n",
          "",
        ]);
        const c = a;
      },
      158: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          ".header-nav p{\n  color: #ffff;\n  cursor: pointer;\n  text-align: center;\n  padding: 0.3rem 1rem 0.3rem 1rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n",
          "",
        ]);
        const c = a;
      },
      976: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          "main .container .row2 .hg-box {\n  background-color: var(--surface);\n  padding: 2rem;\n  border-radius: 20px 20px 20px 20px;\n}\n\nmain .container .row2 .hg-box h4 {\n  color: var(--on-surface);\n  padding-bottom: 1.2rem;\n}\n\n.container .row2 .hg-box .details {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2.5rem;\n}\n\n.container .row2 .hg-box .details .row1 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.container .row2 .hg-box .row1 .wind-box {\n  background-color: var(--background);\n  border-radius: 5px 5px 5px 5px;\n  padding: 1rem;\n  height: 200px;\n}\n\n.container .row2 .hg-box .details .row1 .wind-box h4 {\n  color: var(--on-surface-variant);\n}\n\n.container .row2 .hg-box .details .row1 .wind-box .wind-details {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 1.2rem;\n  padding: 1rem;\n}\n\n.container .row2 .hg-box .details .row1 .wind-box .wind-details svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-right: 1.4rem;\n}\n\n.container .row2 .hg-box .details .row1 .wind-box .wind-details .desc {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 3rem;\n}\n\n.container .row2 .hg-box .details .row1 .wind-box .wind-details .desc p {\n  color: var(--on-surface-variant);\n  font-size: 0.8rem;\n  text-align: center;\n}\n\n.container .row2 .hg-box .details .row1 .wind-box .wind-details .desc p span {\n  color: var(--on-surface);\n  font-size: 1.7rem;\n}\n\n.container .row2 .hg-box .details .row1 .wind-box .wind-details .desc p #unit {\n  color: var(--on-surface);\n  font-size: 1rem;\n}\n\n.container .row2 .hg-box .row1 .temp-box {\n  background-color: var(--background);\n  border-radius: 5px 5px 5px 5px;\n  padding: 1rem;\n}\n\n.container .row2 .hg-box .row1 .temp-box h4 {\n  color: var(--on-surface-variant);\n}\n\n.container .row2 .hg-box .details .row1 .temp-box .temp-details {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 1.2rem;\n  padding: 1rem;\n}\n\n.container .row2 .hg-box .details .row1 .temp-box .temp-details svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-right: 1rem;\n}\n\n.container .row2 .hg-box .details .row1 .temp-box .temp-details .desc {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 3rem;\n}\n\n.container .row2 .hg-box .details .row1 .temp-box .temp-details .desc p {\n  color: var(--on-surface-variant);\n  font-size: 0.8rem;\n  text-align: center;\n}\n\n.container .row2 .hg-box .details .row1 .temp-box .temp-details .desc p span {\n  color: var(--on-surface);\n  font-size: 1.7rem;\n}\n\n.container .row2 .hg-box .details .row1 .sun-box {\n  background-color: var(--background);\n  border-radius: 5px 5px 5px 5px;\n  padding: 1rem;\n}\n\n.container .row2 .hg-box .details .row1 .sun-box h4 {\n  color: var(--on-surface-variant);\n}\n\n.container .row2 .hg-box .details .row1 .sun-box .sun-details {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 1.2rem;\n  padding: 1rem;\n}\n\n.container .row2 .hg-box .details .row1 .sun-box .sun-details svg {\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-right: 1rem;\n}\n\n.container .row2 .hg-box .details .row1 .sun-box .sun-details .desc {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 3rem;\n}\n\n.container .row2 .hg-box .details .row1 .sun-box .sun-details .desc p {\n  color: var(--on-surface-variant);\n  font-size: 0.8rem;\n  text-align: center;\n}\n\n.container .row2 .hg-box .details .row1 .sun-box .sun-details .desc p span {\n  color: var(--on-surface);\n  font-size: 1.7rem;\n}\n\n.container .row2 .hg-box .details .row2 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1.4rem;\n}\n\n.container .row2 .hg-box .details .row2 .hum-box {\n  background-color: var(--background);\n  border-radius: 5px 5px 5px 5px;\n  padding: 1rem 1.7rem 0rem 1.5rem;\n  width: 250px;\n  height: 170px;\n}\n\n.container .row2 .hg-box .details .row2 .hum-box h4 {\n  color: var(--on-surface-variant);\n  margin-bottom: 2rem;\n}\n\n.container .row2 .hg-box .details .row2 .hum-box .hum-details {\n  display: flex;\n  flex-direction: row;\n  gap: 5rem;\n  align-items: center;\n  color: var(--on-surface-variant);\n}\n\n.container .row2 .hg-box .details .row2 .hum-box .hum-details svg {\n  height: 3rem;\n  width: 3rem;\n}\n\n.container .row2 .hg-box .details .row2 .hum-box .hum-details .desc p {\n  color: var(--on-surface);\n  font-size: 2.5rem;\n}\n\n.container .row2 .hg-box .details .row2 .hum-box .hum-details .desc p span {\n  font-size: 1.7rem;\n}\n\n.container .row2 .hg-box .details .row2 .pressure-box {\n  background-color: var(--background);\n  border-radius: 5px 5px 5px 5px;\n  padding: 1rem 1.7rem 0rem 1.5rem;\n  width: 300px;\n  height: 170px;\n}\n\n.container .row2 .hg-box .details .row2 .pressure-box h4 {\n  color: var(--on-surface-variant);\n  margin-bottom: 2rem;\n}\n\n.container .row2 .hg-box .details .row2 .pressure-box .pressure-details {\n  display: flex;\n  flex-direction: row;\n  gap: 5rem;\n  align-items: center;\n  color: var(--on-surface-variant);\n}\n\n.container .row2 .hg-box .details .row2 .pressure-box .pressure-details svg {\n  height: 3rem;\n  width: 3rem;\n}\n\n.container\n  .row2\n  .hg-box\n  .details\n  .row2\n  .pressure-box\n  .pressure-details\n  .desc\n  p {\n  color: var(--on-surface);\n  font-size: 2.5rem;\n}\n\n.container\n  .row2\n  .hg-box\n  .details\n  .row2\n  .pressure-box\n  .pressure-details\n  .desc\n  p\n  span {\n  font-size: 1.7rem;\n}\n\n.container .row2 .hg-box .details .row2 .visibility-box {\n  background-color: var(--background);\n  border-radius: 5px 5px 5px 5px;\n  padding: 1rem 1.7rem 1rem 1.5rem;\n}\n\n.container .row2 .hg-box .details .row2 .visibility-box h4 {\n  color: var(--on-surface-variant);\n  margin-bottom: 2rem;\n}\n\n.container .row2 .hg-box .details .row2 .visibility-box .visibility-details {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 5rem;\n  color: var(--on-surface-variant);\n}\n\n.container\n  .row2\n  .hg-box\n  .details\n  .row2\n  .visibility-box\n  .visibility-details\n  svg {\n  height: 3rem;\n  width: 3rem;\n}\n\n.container\n  .row2\n  .hg-box\n  .details\n  .row2\n  .visibility-box\n  .visibility-details\n  .desc\n  p {\n  color: var(--on-surface);\n  font-size: 2.5rem;\n}\n\n.container\n  .row2\n  .hg-box\n  .details\n  .row2\n  .visibility-box\n  .visibility-details\n  .desc\n  p\n  span {\n  font-size: 1.7rem;\n}\n\n.container .row2 .hg-box .details .row2 .feelsLike-box {\n  background-color: var(--background);\n  border-radius: 5px 5px 5px 5px;\n  padding: 1rem 1.7rem 1rem 1.5rem;\n}\n\n.container .row2 .hg-box .details .row2 .feelsLike-box h4 {\n  color: var(--on-surface-variant);\n  margin-bottom: 2rem;\n}\n\n.container .row2 .hg-box .details .row2 .feelsLike-box .feelsLike-details {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 5rem;\n  color: var(--on-surface-variant);\n}\n\n.container .row2 .hg-box .details .row2 .feelsLike-box .feelsLike-details svg {\n  height: 3rem;\n  width: 3rem;\n}\n\n.container\n  .row2\n  .hg-box\n  .details\n  .row2\n  .feelsLike-box\n  .feelsLike-details\n  .desc\n  p {\n  color: var(--on-surface);\n  font-size: 2.5rem;\n}\n\n.container\n  .row2\n  .hg-box\n  .details\n  .row2\n  .feelsLike-box\n  .feelsLike-details\n  .desc\n  p\n  span {\n  font-size: 1.7rem;\n}\n",
          "",
        ]);
        const c = a;
      },
      340: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          'search-bar .searchContainer {\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  margin: 0;\n}\n\nsearch-bar .searchContainer .feather-map-pin {\n  position: absolute;\n  margin-top: 0.8rem;\n  margin-left: 0.6rem;\n}\n\nsearch-bar .searchContainer input {\n  padding: 0.7rem 1rem 0.7rem 1rem;\n  border: none;\n  outline: none;\n  font-size: 0.9rem;\n  border-radius: 15px 0px 0px 15px;\n  background-color: var(--surface);\n  color: #fff;\n  width: 380px;\n}\n\nsearch-bar .searchContainer button {\n  border: none;\n  padding: 0 0.5rem 0 0.5rem;\n  font-size: 1.4rem;\n  cursor: pointer;\n  border-radius: 0px 15px 15px 0px;\n  background-color: rgb(220, 253, 0);\n}\n\nsearch-bar .searchContainer button:hover {\n  background-color: rgb(202, 236, 6);\n}\n',
          "",
        ]);
        const c = a;
      },
      772: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => h });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          c = n(158),
          s = n(340),
          u = n(999),
          l = n(796),
          f = n(691),
          p = n(976),
          d = a()(o());
        d.i(c.Z),
          d.i(s.Z),
          d.i(u.Z),
          d.i(l.Z),
          d.i(f.Z),
          d.i(p.Z),
          d.push([
            e.id,
            "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);",
          ]),
          d.push([
            e.id,
            ':root {\n  --primary: #b5a1e5;\n  --on-primary: #100e17;\n  --background: #131214;\n  --on-background: #eae6f2;\n  --surface: #232125;\n  --on-surface: #dddae5;\n  --on-surface-variant: #7b7980;\n  --on-surface-variant-2: #b9b6bf;\n}\n\n* {\n  font-family: "Poppins", sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.navbar {\n  display: flex;\n  background-color: var(--background);\n  align-items: center;\n  justify-content: space-around;\n  padding: 2rem 4rem 1.5rem 4rem;\n}\n\nmain {\n  background-color: var(--background);\n  min-height: 100vh;\n  margin: 0;\n}\n\nmain .container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 3rem;\n  gap: 3rem;\n}\n\nmain .container .row1 {\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n}\n\nmain .container .row2 {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Media  */\n\n/* Laptop */\n@media (max-width: 1650px) {\n  html {\n    font-size: 81%;\n  }\n\n  .navbar {\n    justify-content: space-between;\n  }\n\n  main .container {\n    gap: 2.5rem;\n  }\n\n  .weather-box {\n    width: 350px;\n    height: 270px;\n  }\n\n  .container .row2 .hg-box .row1 .wind-box {\n    width: 290px;\n    height: 150px;\n  }\n\n  .container .row2 .hg-box .row1 .temp-box {\n    width: 310px;\n    height: 150px;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box {\n    width: 340px;\n    height: 150px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box {\n    width: 200px;\n    height: 150px;\n  }\n\n  .container .row2 .hg-box .details .row2 .pressure-box {\n    width: 250px;\n    height: 150px;\n  }\n\n  .container .row2 .hg-box .details .row2 .visibility-box {\n    width: 250px;\n    height: 150px;\n  }\n\n  .container .row2 .hg-box .details .row2 .feelsLike-box {\n    width: 250px;\n    height: 150px;\n  }\n}\n\n@media (max-width: 1370px) {\n  html {\n    font-size: 81%;\n  }\n\n  .weather-box {\n    width: 350px;\n    height: 270px;\n  }\n\n  .container .row2 .hg-box .details {\n    flex-direction: column;\n    max-width: 850px;\n  }\n\n  .container .row2 .hg-box .details .row1 {\n    display: flex;\n    justify-content: flex-start;\n    overflow-x: scroll;\n    flex-direction: row;\n    max-width: 850px;\n  }\n  .container .row2 .hg-box .details .row1 .wind-box {\n    height: 175px;\n  }\n\n  .container .row2 .hg-box .row1 .temp-box {\n    height: 175px;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box {\n    height: 175px;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box .sun-details .desc p span {\n    color: var(--on-surface);\n    font-size: 1.4rem;\n  }\n\n  .container .row2 .hg-box .details .row2 {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1.4rem;\n    overflow-x: scroll;\n    flex-wrap: wrap;\n    max-width: 850px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box {\n    width: 250px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box .hum-details {\n    gap: 7rem;\n  }\n}\n\n/* Tablet */\n@media (max-width: 1300px) {\n  main .container {\n    gap: 2rem;\n  }\n\n  search-bar .searchContainer input {\n    width: 300px;\n  }\n\n  .weather-box {\n    width: 330px;\n  }\n\n  .container .row2 .hg-box .details {\n    flex-direction: column;\n    gap: 2rem;\n    justify-content: center;\n  }\n\n  .container .row2 .hg-box .details .row1 {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    overflow-x: scroll;\n    max-height: 200px;\n    max-width: fit-content;\n    gap: 2rem;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box {\n    width: 300px;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box .sun-details .desc p span {\n    color: var(--on-surface);\n    font-size: 1.3rem;\n  }\n\n  .container .row2 .hg-box .details .row2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1.4rem;\n    flex-wrap: wrap;\n    overflow-x: scroll;\n    max-height: 162px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box {\n    width: 280px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box .hum-details {\n    gap: 11rem;\n  }\n}\n\n@media (max-width: 950px) {\n  main .container {\n    gap: 2rem;\n  }\n\n  search-bar .searchContainer input {\n    width: 300px;\n  }\n\n  .weather-box {\n    width: 330px;\n  }\n\n  .container .row2 .hg-box .details {\n    flex-direction: column;\n    gap: 2rem;\n    justify-content: center;\n  }\n\n  .container .row2 .hg-box .details .row1 {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    overflow-x: scroll;\n    max-height: 200px;\n    max-width: fit-content;\n    gap: 2rem;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box {\n    width: 300px;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box .sun-details .desc p span {\n    color: var(--on-surface);\n    font-size: 1.3rem;\n  }\n\n  .container .row2 .hg-box .details .row2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1.4rem;\n    flex-wrap: wrap;\n    overflow-x: scroll;\n    max-height: 162px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box {\n    width: 280px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box .hum-details {\n    gap: 11rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .navbar {\n    justify-content: space-around;\n  }\n\n  header nav-bar .navbar-nav {\n    gap: 0.9rem;\n  }\n  .container-box .weather-box {\n    width: 600px;\n  }\n\n  search-bar .searchContainer input {\n    width: 200px;\n  }\n}\n\n/* Phone */\n@media (max-width: 720px) {\n  main .container {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 450px) {\n  html {\n    font-size: 65%;\n  }\n\n  .navbar {\n    justify-content: space-between;\n  }\n\n  search-bar .searchContainer {\n    padding-left: 1.2rem;\n    padding-right: 1rem;\n  }\n\n  search-bar .searchContainer input {\n    width: 110px;\n  }\n\n  use-location button {\n    width: 30px;\n    height: 30px;\n  }\n\n  use-location button svg {\n    height: 18px;\n  }\n\n  main .container {\n    flex-wrap: wrap;\n  }\n\n  main .container .row1 .weather-box {\n    width: 330px;\n  }\n\n  main .container .row2 .hg-box {\n    width: 340px;\n  }\n\n  main .container .row2 .hg-box h4 {\n    padding-bottom: 2rem;\n  }\n  .container .row2 .hg-box .details .row1 {\n    max-height: 150px;\n  }\n\n  .container .row2 .hg-box .row1 .wind-box {\n    width: fit-content;\n    max-height: 120px;\n  }\n  .container .row2 .hg-box .details .row1 .wind-box h4 {\n    padding-bottom: 1rem;\n  }\n  .container .row2 .hg-box .row1 .temp-box {\n    width: fit-content;\n    max-height: 120px;\n  }\n\n  .container .row2 .hg-box .details .row1 .temp-box h4 {\n    padding-bottom: 0.5rem;\n  }\n\n  .container .row2 .hg-box .row1 .sun-box {\n    width: fit-content;\n    max-height: 120px;\n  }\n\n  .container .row2 .hg-box .details .row1 .sun-box h4 {\n    padding-bottom: 1rem;\n  }\n\n  .container .row2 .hg-box .details .row2 {\n    max-height: 135px;\n  }\n\n  .container .row2 .hg-box .details .row2 .hum-box {\n    max-height: 120px;\n  }\n\n  .container .row2 .hg-box .details .row2 .pressure-box {\n    max-height: 120px;\n  }\n\n  .container .row2 .hg-box .details .row2 .visibility-box {\n    max-height: 120px;\n  }\n  .container .row2 .hg-box .details .row2 .feelsLike-box {\n    max-height: 120px;\n  }\n}\n\n@media (max-width: 380px) {\n  search-bar .searchContainer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  search-bar .searchContainer input {\n    width: 100px;\n  }\n}\n',
            "",
          ]);
        const h = d;
      },
      999: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          "use-location button {\n  border: none;\n  cursor: pointer;\n  border-radius: 100%;\n  color: var(--on-surface);\n  background-color: #4d3c77;\n  width: 45px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nuse-location button:hover {\n  background-color: #614c97;\n  transition: 0.3s;\n}\n\nuse-location button svg {\n  width: 100%;\n  height: 20px;\n}\n",
          "",
        ]);
        const c = a;
      },
      796: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          ".weather-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 2rem 3rem 3rem 3rem;\n  background-color: var(--surface);\n  color: #fff;\n  width: 400px;\n  height: 300px;\n  border-radius: 20px 20px 20px 20px;\n}\n\n.weather-box #des {\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n.weather-box .row {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.weather-box .row span {\n  font-size: 3rem;\n  color: var(--on-surface);\n  margin-right: 6.4rem;\n}\n\n.weather-box .cols {\n  display: flex;\n  flex-direction: column;\n}\n\n.weather-box .cols #weather-desc {\n  color: var(--on-surface);\n  padding-bottom: 1rem;\n}\n\n.weather-box .cols #date {\n  padding-top: 1rem;\n  color: var(--on-surface-variant);\n}\n\n.weather-box .cols #date svg {\n  padding-right: 0.4rem;\n  align-items: center;\n}\n\n.weather-box .cols #loc {\n  padding-top: 0.4rem;\n  color: var(--on-surface-variant);\n}\n\n.weather-box .cols #loc svg {\n  padding-right: 0.5rem;\n  align-items: center;\n}\n",
          "",
        ]);
        const c = a;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            c = i.slice,
            s = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            u = i.push,
            l = i.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            y = h.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            g = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              o,
              i = (n = n || b).createElement("script");
            if (((i.text = e), t))
              for (r in x)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function j(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[p.call(e)] || "object"
              : typeof e;
          }
          var S = "3.7.1",
            T = /HTML$/i,
            E = function (e, t) {
              return new E.fn.init(e, t);
            };
          function O(e) {
            var t = !!e && "length" in e && e.length,
              n = j(e);
            return (
              !v(e) &&
              !g(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (E.fn = E.prototype =
            {
              jquery: S,
              constructor: E,
              length: 0,
              toArray: function () {
                return c.call(this);
              },
              get: function (e) {
                return null == e
                  ? c.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return E.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  E.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(c.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: i.sort,
              splice: i.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  c = 1,
                  s = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof a &&
                    ((u = a), (a = arguments[c] || {}), c++),
                    "object" == typeof a || v(a) || (a = {}),
                    c === s && ((a = this), c--);
                  c < s;
                  c++
                )
                  if (null != (e = arguments[c]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (u &&
                          r &&
                          (E.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (o = !1),
                              (a[t] = E.extend(u, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            E.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== p.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = d.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== y))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (O(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (!o) for (; (t = e[r++]); ) n += E.text(t);
                return 1 === o || 11 === o
                  ? e.textContent
                  : 9 === o
                  ? e.documentElement.textContent
                  : 3 === o || 4 === o
                  ? e.nodeValue
                  : n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (O(Object(e))
                      ? E.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !T.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (O(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return s(a);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = i[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var C = i.pop,
            D = i.sort,
            P = i.splice,
            L = "[\\x20\\t\\r\\n\\f]",
            A = new RegExp(
              "^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$",
              "g"
            );
          E.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !(
                !n ||
                1 !== n.nodeType ||
                !(e.contains
                  ? e.contains(n)
                  : e.compareDocumentPosition &&
                    16 & e.compareDocumentPosition(n))
              )
            );
          };
          var M = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function R(e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          E.escapeSelector = function (e) {
            return (e + "").replace(M, R);
          };
          var H = b,
            _ = u;
          !(function () {
            var e,
              t,
              n,
              o,
              a,
              s,
              u,
              f,
              p,
              h,
              y = _,
              v = E.expando,
              g = 0,
              b = 0,
              x = ee(),
              w = ee(),
              j = ee(),
              S = ee(),
              T = function (e, t) {
                return e === t && (a = !0), 0;
              },
              O =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                L +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              R =
                "\\[" +
                L +
                "*(" +
                M +
                ")(?:" +
                L +
                "*([*^$|!~]?=)" +
                L +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                L +
                "*\\]",
              F =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                R +
                ")*)|.*)\\)|)",
              N = new RegExp(L + "+", "g"),
              q = new RegExp("^" + L + "*," + L + "*"),
              z = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
              B = new RegExp(L + "|>"),
              I = new RegExp(F),
              W = new RegExp("^" + M + "$"),
              $ = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    L +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    L +
                    "*(?:([+-]|)" +
                    L +
                    "*(\\d+)|))" +
                    L +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    L +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    L +
                    "*((?:-\\d)?\\d*)" +
                    L +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              V = /^(?:input|select|textarea|button)$/i,
              U = /^h\d$/i,
              X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              Z = /[+~]/,
              G = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              Y = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              Q = function () {
                se();
              },
              J = pe(
                function (e) {
                  return !0 === e.disabled && k(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              y.apply((i = c.call(H.childNodes)), H.childNodes),
                i[H.childNodes.length].nodeType;
            } catch (e) {
              y = {
                apply: function (e, t) {
                  _.apply(e, c.call(t));
                },
                call: function (e) {
                  _.apply(e, c.call(arguments, 1));
                },
              };
            }
            function K(e, t, n, r) {
              var o,
                i,
                a,
                c,
                u,
                l,
                d,
                h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
              )
                return n;
              if (!r && (se(t), (t = t || s), f)) {
                if (11 !== g && (u = X.exec(e)))
                  if ((o = u[1])) {
                    if (9 === g) {
                      if (!(a = t.getElementById(o))) return n;
                      if (a.id === o) return y.call(n, a), n;
                    } else if (
                      h &&
                      (a = h.getElementById(o)) &&
                      K.contains(t, a) &&
                      a.id === o
                    )
                      return y.call(n, a), n;
                  } else {
                    if (u[2]) return y.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = u[3]) && t.getElementsByClassName)
                      return y.apply(n, t.getElementsByClassName(o)), n;
                  }
                if (!(S[e + " "] || (p && p.test(e)))) {
                  if (((d = e), (h = t), 1 === g && (B.test(e) || z.test(e)))) {
                    for (
                      ((h = (Z.test(e) && ce(t.parentNode)) || t) == t &&
                        m.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = E.escapeSelector(c))
                          : t.setAttribute("id", (c = v))),
                        i = (l = le(e)).length;
                      i--;

                    )
                      l[i] = (c ? "#" + c : ":scope") + " " + fe(l[i]);
                    d = l.join(",");
                  }
                  try {
                    return y.apply(n, h.querySelectorAll(d)), n;
                  } catch (t) {
                    S(e, !0);
                  } finally {
                    c === v && t.removeAttribute("id");
                  }
                }
              }
              return ge(e.replace(A, "$1"), t, n, r);
            }
            function ee() {
              var e = [];
              return function n(r, o) {
                return (
                  e.push(r + " ") > t.cacheLength && delete n[e.shift()],
                  (n[r + " "] = o)
                );
              };
            }
            function te(e) {
              return (e[v] = !0), e;
            }
            function ne(e) {
              var t = s.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function re(e) {
              return function (t) {
                return k(t, "input") && t.type === e;
              };
            }
            function oe(e) {
              return function (t) {
                return (k(t, "input") || k(t, "button")) && t.type === e;
              };
            }
            function ie(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && J(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ae(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function ce(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function se(e) {
              var n,
                r = e ? e.ownerDocument || e : H;
              return r != s && 9 === r.nodeType && r.documentElement
                ? ((u = (s = r).documentElement),
                  (f = !E.isXMLDoc(s)),
                  (h =
                    u.matches ||
                    u.webkitMatchesSelector ||
                    u.msMatchesSelector),
                  u.msMatchesSelector &&
                    H != s &&
                    (n = s.defaultView) &&
                    n.top !== n &&
                    n.addEventListener("unload", Q),
                  (m.getById = ne(function (e) {
                    return (
                      (u.appendChild(e).id = E.expando),
                      !s.getElementsByName ||
                        !s.getElementsByName(E.expando).length
                    );
                  })),
                  (m.disconnectedMatch = ne(function (e) {
                    return h.call(e, "*");
                  })),
                  (m.scope = ne(function () {
                    return s.querySelectorAll(":scope");
                  })),
                  (m.cssHas = ne(function () {
                    try {
                      return s.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  m.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace(G, Y);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && f) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace(G, Y);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && f) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                            for (
                              o = t.getElementsByName(e), r = 0;
                              (i = o[r++]);

                            )
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && f)
                      return t.getElementsByClassName(e);
                  }),
                  (p = []),
                  ne(function (e) {
                    var t;
                    (u.appendChild(e).innerHTML =
                      "<a id='" +
                      v +
                      "' href='' disabled='disabled'></a><select id='" +
                      v +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        p.push("\\[" + L + "*(?:value|" + O + ")"),
                      e.querySelectorAll("[id~=" + v + "-]").length ||
                        p.push("~="),
                      e.querySelectorAll("a#" + v + "+*").length ||
                        p.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length ||
                        p.push(":checked"),
                      (t = s.createElement("input")).setAttribute(
                        "type",
                        "hidden"
                      ),
                      e.appendChild(t).setAttribute("name", "D"),
                      (u.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        p.push(":enabled", ":disabled"),
                      (t = s.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        p.push(
                          "\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")"
                        );
                  }),
                  m.cssHas || p.push(":has"),
                  (p = p.length && new RegExp(p.join("|"))),
                  (T = function (e, t) {
                    if (e === t) return (a = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!m.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === s || (e.ownerDocument == H && K.contains(H, e))
                          ? -1
                          : t === s ||
                            (t.ownerDocument == H && K.contains(H, t))
                          ? 1
                          : o
                          ? l.call(o, e) - l.call(o, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }),
                  s)
                : s;
            }
            for (e in ((K.matches = function (e, t) {
              return K(e, null, null, t);
            }),
            (K.matchesSelector = function (e, t) {
              if ((se(e), f && !S[t + " "] && (!p || !p.test(t))))
                try {
                  var n = h.call(e, t);
                  if (
                    n ||
                    m.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return n;
                } catch (e) {
                  S(t, !0);
                }
              return K(t, s, null, [e]).length > 0;
            }),
            (K.contains = function (e, t) {
              return (e.ownerDocument || e) != s && se(e), E.contains(e, t);
            }),
            (K.attr = function (e, n) {
              (e.ownerDocument || e) != s && se(e);
              var r = t.attrHandle[n.toLowerCase()],
                o =
                  r && d.call(t.attrHandle, n.toLowerCase())
                    ? r(e, n, !f)
                    : void 0;
              return void 0 !== o ? o : e.getAttribute(n);
            }),
            (K.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (E.uniqueSort = function (e) {
              var t,
                n = [],
                r = 0,
                i = 0;
              if (
                ((a = !m.sortStable),
                (o = !m.sortStable && c.call(e, 0)),
                D.call(e, T),
                a)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                for (; r--; ) P.call(e, n[r], 1);
              }
              return (o = null), e;
            }),
            (E.fn.uniqueSort = function () {
              return this.pushStack(E.uniqueSort(c.apply(this)));
            }),
            (t = E.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: $,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(G, Y)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(G, Y)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || K.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && K.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return $.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            I.test(n) &&
                            (t = le(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(G, Y).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return k(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = x[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + L + ")" + e + "(" + L + "|$)"
                      )) &&
                        x(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = K.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                              ? o !== n
                              : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                              ? n && o.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + o.replace(N, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (o === n ||
                                  o.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      c = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, s) {
                          var u,
                            l,
                            f,
                            p,
                            d,
                            h = i !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            m = c && t.nodeName.toLowerCase(),
                            b = !s && !c,
                            x = !1;
                          if (y) {
                            if (i) {
                              for (; h; ) {
                                for (f = t; (f = f[h]); )
                                  if (c ? k(f, m) : 1 === f.nodeType) return !1;
                                d = h = "only" === e && !d && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((d = [a ? y.firstChild : y.lastChild]), a && b)
                            ) {
                              for (
                                x =
                                  (p =
                                    (u =
                                      (l = y[v] || (y[v] = {}))[e] || [])[0] ===
                                      g && u[1]) && u[2],
                                  f = p && y.childNodes[p];
                                (f =
                                  (++p && f && f[h]) || (x = p = 0) || d.pop());

                              )
                                if (1 === f.nodeType && ++x && f === t) {
                                  l[e] = [g, p, x];
                                  break;
                                }
                            } else if (
                              (b &&
                                (x = p =
                                  (u =
                                    (l = t[v] || (t[v] = {}))[e] || [])[0] ===
                                    g && u[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (f =
                                  (++p && f && f[h]) ||
                                  (x = p = 0) ||
                                  d.pop()) &&
                                (!(c ? k(f, m) : 1 === f.nodeType) ||
                                  !++x ||
                                  (b && ((l = f[v] || (f[v] = {}))[e] = [g, x]),
                                  f !== t));

                              );
                            return (x -= o) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var r,
                      o =
                        t.pseudos[e] ||
                        t.setFilters[e.toLowerCase()] ||
                        K.error("unsupported pseudo: " + e);
                    return o[v]
                      ? o(n)
                      : o.length > 1
                      ? ((r = [e, e, "", n]),
                        t.setFilters.hasOwnProperty(e.toLowerCase())
                          ? te(function (e, t) {
                              for (var r, i = o(e, n), a = i.length; a--; )
                                e[(r = l.call(e, i[a]))] = !(t[r] = i[a]);
                            })
                          : function (e) {
                              return o(e, 0, r);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      n = [],
                      r = ve(e.replace(A, "$1"));
                    return r[v]
                      ? te(function (e, t, n, o) {
                          for (
                            var i, a = r(e, null, o, []), c = e.length;
                            c--;

                          )
                            (i = a[c]) && (e[c] = !(t[c] = i));
                        })
                      : function (e, o, i) {
                          return (
                            (t[0] = e),
                            r(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return K(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace(G, Y)),
                      function (t) {
                        return (t.textContent || E.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      W.test(e || "") || K.error("unsupported lang: " + e),
                      (e = e.replace(G, Y).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = f
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = r.location && r.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === u;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return s.activeElement;
                          } catch (e) {}
                        })() &&
                      s.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ie(!1),
                  disabled: ie(!0),
                  checked: function (e) {
                    return (
                      (k(e, "input") && !!e.checked) ||
                      (k(e, "option") && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return U.test(e.nodeName);
                  },
                  input: function (e) {
                    return V.test(e.nodeName);
                  },
                  button: function (e) {
                    return (
                      (k(e, "input") && "button" === e.type) || k(e, "button")
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      k(e, "input") &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ae(function () {
                    return [0];
                  }),
                  last: ae(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ae(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ae(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ae(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ae(function (e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ae(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = re(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = oe(e);
            function ue() {}
            function le(e, n) {
              var r,
                o,
                i,
                a,
                c,
                s,
                u,
                l = w[e + " "];
              if (l) return n ? 0 : l.slice(0);
              for (c = e, s = [], u = t.preFilter; c; ) {
                for (a in ((r && !(o = q.exec(c))) ||
                  (o && (c = c.slice(o[0].length) || c), s.push((i = []))),
                (r = !1),
                (o = z.exec(c)) &&
                  ((r = o.shift()),
                  i.push({ value: r, type: o[0].replace(A, " ") }),
                  (c = c.slice(r.length))),
                t.filter))
                  !(o = $[a].exec(c)) ||
                    (u[a] && !(o = u[a](o))) ||
                    ((r = o.shift()),
                    i.push({ value: r, type: a, matches: o }),
                    (c = c.slice(r.length)));
                if (!r) break;
              }
              return n ? c.length : c ? K.error(e) : w(e, s).slice(0);
            }
            function fe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function pe(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                c = b++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, s) {
                    var u,
                      l,
                      f = [g, c];
                    if (s) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, s)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (((l = t[v] || (t[v] = {})), o && k(t, o)))
                            t = t[r] || t;
                          else {
                            if ((u = l[i]) && u[0] === g && u[1] === c)
                              return (f[2] = u[2]);
                            if (((l[i] = f), (f[2] = e(t, n, s)))) return !0;
                          }
                    return !1;
                  };
            }
            function de(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function he(e, t, n, r, o) {
              for (
                var i, a = [], c = 0, s = e.length, u = null != t;
                c < s;
                c++
              )
                (i = e[c]) &&
                  ((n && !n(i, r, o)) || (a.push(i), u && t.push(c)));
              return a;
            }
            function ye(e, t, n, r, o, i) {
              return (
                r && !r[v] && (r = ye(r)),
                o && !o[v] && (o = ye(o, i)),
                te(function (i, a, c, s) {
                  var u,
                    f,
                    p,
                    d,
                    h = [],
                    m = [],
                    v = a.length,
                    g =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) K(e, t[r], n);
                        return n;
                      })(t || "*", c.nodeType ? [c] : c, []),
                    b = !e || (!i && t) ? g : he(g, h, e, c, s);
                  if (
                    (n
                      ? n(b, (d = o || (i ? e : v || r) ? [] : a), c, s)
                      : (d = b),
                    r)
                  )
                    for (u = he(d, m), r(u, [], c, s), f = u.length; f--; )
                      (p = u[f]) && (d[m[f]] = !(b[m[f]] = p));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (u = [], f = d.length; f--; )
                          (p = d[f]) && u.push((b[f] = p));
                        o(null, (d = []), u, s);
                      }
                      for (f = d.length; f--; )
                        (p = d[f]) &&
                          (u = o ? l.call(i, p) : h[f]) > -1 &&
                          (i[u] = !(a[u] = p));
                    }
                  } else (d = he(d === a ? d.splice(v, d.length) : d)), o ? o(null, a, d, s) : y.apply(a, d);
                })
              );
            }
            function me(e) {
              for (
                var r,
                  o,
                  i,
                  a = e.length,
                  c = t.relative[e[0].type],
                  s = c || t.relative[" "],
                  u = c ? 1 : 0,
                  f = pe(
                    function (e) {
                      return e === r;
                    },
                    s,
                    !0
                  ),
                  p = pe(
                    function (e) {
                      return l.call(r, e) > -1;
                    },
                    s,
                    !0
                  ),
                  d = [
                    function (e, t, o) {
                      var i =
                        (!c && (o || t != n)) ||
                        ((r = t).nodeType ? f(e, t, o) : p(e, t, o));
                      return (r = null), i;
                    },
                  ];
                u < a;
                u++
              )
                if ((o = t.relative[e[u].type])) d = [pe(de(d), o)];
                else {
                  if ((o = t.filter[e[u].type].apply(null, e[u].matches))[v]) {
                    for (i = ++u; i < a && !t.relative[e[i].type]; i++);
                    return ye(
                      u > 1 && de(d),
                      u > 1 &&
                        fe(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(A, "$1"),
                      o,
                      u < i && me(e.slice(u, i)),
                      i < a && me((e = e.slice(i))),
                      i < a && fe(e)
                    );
                  }
                  d.push(o);
                }
              return de(d);
            }
            function ve(e, r) {
              var o,
                i = [],
                a = [],
                c = j[e + " "];
              if (!c) {
                for (r || (r = le(e)), o = r.length; o--; )
                  (c = me(r[o]))[v] ? i.push(c) : a.push(c);
                (c = j(
                  e,
                  (function (e, r) {
                    var o = r.length > 0,
                      i = e.length > 0,
                      a = function (a, c, u, l, p) {
                        var d,
                          h,
                          m,
                          v = 0,
                          b = "0",
                          x = a && [],
                          w = [],
                          j = n,
                          S = a || (i && t.find.TAG("*", p)),
                          T = (g += null == j ? 1 : Math.random() || 0.1),
                          O = S.length;
                        for (
                          p && (n = c == s || c || p);
                          b !== O && null != (d = S[b]);
                          b++
                        ) {
                          if (i && d) {
                            for (
                              h = 0,
                                c || d.ownerDocument == s || (se(d), (u = !f));
                              (m = e[h++]);

                            )
                              if (m(d, c || s, u)) {
                                y.call(l, d);
                                break;
                              }
                            p && (g = T);
                          }
                          o && ((d = !m && d) && v--, a && x.push(d));
                        }
                        if (((v += b), o && b !== v)) {
                          for (h = 0; (m = r[h++]); ) m(x, w, c, u);
                          if (a) {
                            if (v > 0)
                              for (; b--; ) x[b] || w[b] || (w[b] = C.call(l));
                            w = he(w);
                          }
                          y.apply(l, w),
                            p &&
                              !a &&
                              w.length > 0 &&
                              v + r.length > 1 &&
                              E.uniqueSort(l);
                        }
                        return p && ((g = T), (n = j)), x;
                      };
                    return o ? te(a) : a;
                  })(a, i)
                )),
                  (c.selector = e);
              }
              return c;
            }
            function ge(e, n, r, o) {
              var i,
                a,
                c,
                s,
                u,
                l = "function" == typeof e && e,
                p = !o && le((e = l.selector || e));
              if (((r = r || []), 1 === p.length)) {
                if (
                  (a = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (c = a[0]).type &&
                  9 === n.nodeType &&
                  f &&
                  t.relative[a[1].type]
                ) {
                  if (
                    !(n = (t.find.ID(c.matches[0].replace(G, Y), n) || [])[0])
                  )
                    return r;
                  l && (n = n.parentNode),
                    (e = e.slice(a.shift().value.length));
                }
                for (
                  i = $.needsContext.test(e) ? 0 : a.length;
                  i-- && ((c = a[i]), !t.relative[(s = c.type)]);

                )
                  if (
                    (u = t.find[s]) &&
                    (o = u(
                      c.matches[0].replace(G, Y),
                      (Z.test(a[0].type) && ce(n.parentNode)) || n
                    ))
                  ) {
                    if ((a.splice(i, 1), !(e = o.length && fe(a))))
                      return y.apply(r, o), r;
                    break;
                  }
              }
              return (
                (l || ve(e, p))(
                  o,
                  n,
                  !f,
                  r,
                  !n || (Z.test(e) && ce(n.parentNode)) || n
                ),
                r
              );
            }
            (ue.prototype = t.filters = t.pseudos),
              (t.setFilters = new ue()),
              (m.sortStable = v.split("").sort(T).join("") === v),
              se(),
              (m.sortDetached = ne(function (e) {
                return (
                  1 & e.compareDocumentPosition(s.createElement("fieldset"))
                );
              })),
              (E.find = K),
              (E.expr[":"] = E.expr.pseudos),
              (E.unique = E.uniqueSort),
              (K.compile = ve),
              (K.select = ge),
              (K.setDocument = se),
              (K.tokenize = le),
              (K.escape = E.escapeSelector),
              (K.getText = E.text),
              (K.isXML = E.isXMLDoc),
              (K.selectors = E.expr),
              (K.support = E.support),
              (K.uniqueSort = E.uniqueSort);
          })();
          var F = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && E(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            N = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            q = E.expr.match.needsContext,
            z =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function B(e, t, n) {
            return v(t)
              ? E.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? E.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? E.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
                })
              : E.filter(t, e, n);
          }
          (E.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? E.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : E.find.matches(
                    e,
                    E.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            E.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    E(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (E.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  E.find(e, o[t], n);
                return r > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(B(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(B(this, e || [], !0));
              },
              is: function (e) {
                return !!B(
                  this,
                  "string" == typeof e && q.test(e) ? E(e) : e || [],
                  !1
                ).length;
              },
            });
          var I,
            W = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || I), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : W.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof E ? t[0] : t),
                  E.merge(
                    this,
                    E.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  z.test(r[1]) && E.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = b.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          }).prototype = E.fn),
            (I = E(b));
          var $ = /^(?:parents|prev(?:Until|All))/,
            V = { children: !0, contents: !0, next: !0, prev: !0 };
          function U(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && E(e);
              if (!q.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? E.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? l.call(E(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            E.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return F(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return F(e, "parentNode", n);
                },
                next: function (e) {
                  return U(e, "nextSibling");
                },
                prev: function (e) {
                  return U(e, "previousSibling");
                },
                nextAll: function (e) {
                  return F(e, "nextSibling");
                },
                prevAll: function (e) {
                  return F(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return F(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return F(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return N((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return N(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (k(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes));
                },
              },
              function (e, t) {
                E.fn[e] = function (n, r) {
                  var o = E.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = E.filter(r, o)),
                    this.length > 1 &&
                      (V[e] || E.uniqueSort(o), $.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var X = /[^\x20\t\r\n\f]+/g;
          function Z(e) {
            return e;
          }
          function G(e) {
            throw e;
          }
          function Y(e, t, n, r) {
            var o;
            try {
              e && v((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && v((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (E.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      E.each(e.match(X) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : E.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              c = -1,
              s = function () {
                for (o = o || e.once, r = t = !0; a.length; c = -1)
                  for (n = a.shift(); ++c < i.length; )
                    !1 === i[c].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((c = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((c = i.length - 1), a.push(n)),
                      (function t(n) {
                        E.each(n, function (n, r) {
                          v(r)
                            ? (e.unique && u.has(r)) || i.push(r)
                            : r && r.length && "string" !== j(r) && t(r);
                        });
                      })(arguments),
                      n && !t && s()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (e, t) {
                      for (var n; (n = E.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= c && c--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? E.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || s()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return u;
          }),
            E.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      E.Callbacks("memory"),
                      E.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return E.Deferred(function (n) {
                        E.each(t, function (t, r) {
                          var o = v(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var c = this,
                            s = arguments,
                            u = function () {
                              var r, u;
                              if (!(e < i)) {
                                if ((r = n.apply(c, s)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  v(u)
                                    ? o
                                      ? u.call(r, a(i, t, Z, o), a(i, t, G, o))
                                      : (i++,
                                        u.call(
                                          r,
                                          a(i, t, Z, o),
                                          a(i, t, G, o),
                                          a(i, t, Z, t.notifyWith)
                                        ))
                                    : (n !== Z && ((c = void 0), (s = [r])),
                                      (o || t.resolveWith)(c, s));
                              }
                            },
                            l = o
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (r) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(r, l.error),
                                      e + 1 >= i &&
                                        (n !== G && ((c = void 0), (s = [r])),
                                        t.rejectWith(c, s));
                                  }
                                };
                          e
                            ? l()
                            : (E.Deferred.getErrorHook
                                ? (l.error = E.Deferred.getErrorHook())
                                : E.Deferred.getStackHook &&
                                  (l.error = E.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return E.Deferred(function (r) {
                        t[0][3].add(a(0, r, v(o) ? o : Z, r.notifyWith)),
                          t[1][3].add(a(0, r, v(e) ? e : Z)),
                          t[2][3].add(a(0, r, v(n) ? n : G));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? E.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  E.each(t, function (e, r) {
                    var a = r[2],
                      c = r[5];
                    (o[r[1]] = a.add),
                      c &&
                        a.add(
                          function () {
                            n = c;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = c.call(arguments),
                  i = E.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? c.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (Y(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || v(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) Y(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              Q.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (E.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var J = E.Deferred();
          function K() {
            b.removeEventListener("DOMContentLoaded", K),
              r.removeEventListener("load", K),
              E.ready();
          }
          (E.fn.ready = function (e) {
            return (
              J.then(e).catch(function (e) {
                E.readyException(e);
              }),
              this
            );
          }),
            E.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) ||
                  ((E.isReady = !0),
                  (!0 !== e && --E.readyWait > 0) || J.resolveWith(b, [E]));
              },
            }),
            (E.ready.then = J.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(E.ready)
              : (b.addEventListener("DOMContentLoaded", K),
                r.addEventListener("load", K));
          var ee = function (e, t, n, r, o, i, a) {
              var c = 0,
                s = e.length,
                u = null == n;
              if ("object" === j(n))
                for (c in ((o = !0), n)) ee(e, t, c, n[c], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                v(r) || (a = !0),
                u &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(E(e), n);
                      }))),
                t)
              )
                for (; c < s; c++)
                  t(e[c], n, a ? r : r.call(e[c], c, t(e[c], n)));
              return o ? e : u ? t.call(e) : s ? t(e[0], n) : i;
            },
            te = /^-ms-/,
            ne = /-([a-z])/g;
          function re(e, t) {
            return t.toUpperCase();
          }
          function oe(e) {
            return e.replace(te, "ms-").replace(ne, re);
          }
          var ie = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function ae() {
            this.expando = E.expando + ae.uid++;
          }
          (ae.uid = 1),
            (ae.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    ie(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[oe(t)] = n;
                else for (r in t) o[oe(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][oe(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(oe)
                      : (t = oe(t)) in r
                      ? [t]
                      : t.match(X) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || E.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t);
              },
            });
          var ce = new ae(),
            se = new ae(),
            ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            le = /[A-Z]/g;
          function fe(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(le, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ue.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                se.set(e, t, n);
              } else n = void 0;
            return n;
          }
          E.extend({
            hasData: function (e) {
              return se.hasData(e) || ce.hasData(e);
            },
            data: function (e, t, n) {
              return se.access(e, t, n);
            },
            removeData: function (e, t) {
              se.remove(e, t);
            },
            _data: function (e, t, n) {
              return ce.access(e, t, n);
            },
            _removeData: function (e, t) {
              ce.remove(e, t);
            },
          }),
            E.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = se.get(i)),
                    1 === i.nodeType && !ce.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = oe(r.slice(5))), fe(i, r, o[r]));
                    ce.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      se.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = se.get(i, e)) ||
                            void 0 !== (n = fe(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          se.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  se.remove(this, e);
                });
              },
            }),
            E.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = ce.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = ce.access(e, t, E.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = E._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        E.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  ce.get(e, n) ||
                  ce.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      ce.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? E.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  E.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = E.Deferred(),
                  i = this,
                  a = this.length,
                  c = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = ce.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(c));
                return c(), o.promise(t);
              },
            });
          var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
            he = ["Top", "Right", "Bottom", "Left"],
            ye = b.documentElement,
            me = function (e) {
              return E.contains(e.ownerDocument, e);
            },
            ve = { composed: !0 };
          ye.getRootNode &&
            (me = function (e) {
              return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(ve) === e.ownerDocument
              );
            });
          var ge = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                me(e) &&
                "none" === E.css(e, "display"))
            );
          };
          function be(e, t, n, r) {
            var o,
              i,
              a = 20,
              c = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              s = c(),
              u = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              l =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== u && +s)) &&
                de.exec(E.css(e, t));
            if (l && l[3] !== u) {
              for (s /= 2, u = u || l[3], l = +s || 1; a--; )
                E.style(e, t, l + u),
                  (1 - i) * (1 - (i = c() / s || 0.5)) <= 0 && (a = 0),
                  (l /= i);
              (l *= 2), E.style(e, t, l + u), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +s || 0),
                (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = u), (r.start = l), (r.end = o))),
              o
            );
          }
          var xe = {};
          function we(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = xe[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = E.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (xe[r] = o),
              o)
            );
          }
          function je(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = ce.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && ge(r) && (o[i] = we(r)))
                  : "none" !== n && ((o[i] = "none"), ce.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          E.fn.extend({
            show: function () {
              return je(this, !0);
            },
            hide: function () {
              return je(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ge(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var Se,
            Te,
            Ee = /^(?:checkbox|radio)$/i,
            Oe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ke = /^$|^module$|\/(?:java|ecma)script/i;
          (Se = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (Te = b.createElement("input")).setAttribute("type", "radio"),
            Te.setAttribute("checked", "checked"),
            Te.setAttribute("name", "t"),
            Se.appendChild(Te),
            (m.checkClone = Se.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Se.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!Se.cloneNode(!0).lastChild.defaultValue),
            (Se.innerHTML = "<option></option>"),
            (m.option = !!Se.lastChild);
          var Ce = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function De(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && k(e, t)) ? E.merge([e], n) : n
            );
          }
          function Pe(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              ce.set(e[n], "globalEval", !t || ce.get(t[n], "globalEval"));
          }
          (Ce.tbody = Ce.tfoot = Ce.colgroup = Ce.caption = Ce.thead),
            (Ce.th = Ce.td),
            m.option ||
              (Ce.optgroup = Ce.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Le = /<|&#?\w+;/;
          function Ae(e, t, n, r, o) {
            for (
              var i,
                a,
                c,
                s,
                u,
                l,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((i = e[d]) || 0 === i)
                if ("object" === j(i)) E.merge(p, i.nodeType ? [i] : i);
                else if (Le.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      c = (Oe.exec(i) || ["", ""])[1].toLowerCase(),
                      s = Ce[c] || Ce._default,
                      a.innerHTML = s[1] + E.htmlPrefilter(i) + s[2],
                      l = s[0];
                    l--;

                  )
                    a = a.lastChild;
                  E.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; (i = p[d++]); )
              if (r && E.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((u = me(i)),
                (a = De(f.appendChild(i), "script")),
                u && Pe(a),
                n)
              )
                for (l = 0; (i = a[l++]); ) ke.test(i.type || "") && n.push(i);
            return f;
          }
          var Me = /^([^.]*)(?:\.(.+)|)/;
          function Re() {
            return !0;
          }
          function He() {
            return !1;
          }
          function _e(e, t, n, r, o, i) {
            var a, c;
            if ("object" == typeof t) {
              for (c in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                _e(e, c, n, r, t[c], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = He;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                (o = function (e) {
                  return E().off(e), a.apply(this, arguments);
                }),
                (o.guid = a.guid || (a.guid = E.guid++))),
              e.each(function () {
                E.event.add(this, t, o, r, n);
              })
            );
          }
          function Fe(e, t, n) {
            n
              ? (ce.set(e, t, !1),
                E.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      r = ce.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r)
                        (E.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = c.call(arguments)),
                        ce.set(this, t, r),
                        this[t](),
                        (n = ce.get(this, t)),
                        ce.set(this, t, !1),
                        r !== n)
                      )
                        return (
                          e.stopImmediatePropagation(), e.preventDefault(), n
                        );
                    } else
                      r &&
                        (ce.set(
                          this,
                          t,
                          E.event.trigger(r[0], r.slice(1), this)
                        ),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = Re));
                  },
                }))
              : void 0 === ce.get(e, t) && E.event.add(e, t, Re);
          }
          (E.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                c,
                s,
                u,
                l,
                f,
                p,
                d,
                h,
                y,
                m = ce.get(e);
              if (ie(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && E.find.matchesSelector(ye, o),
                    n.guid || (n.guid = E.guid++),
                    (s = m.events) || (s = m.events = Object.create(null)),
                    (a = m.handle) ||
                      (a = m.handle =
                        function (t) {
                          return void 0 !== E && E.event.triggered !== t.type
                            ? E.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match(X) || [""]).length;
                  u--;

                )
                  (d = y = (c = Me.exec(t[u]) || [])[1]),
                    (h = (c[2] || "").split(".").sort()),
                    d &&
                      ((f = E.event.special[d] || {}),
                      (d = (o ? f.delegateType : f.bindType) || d),
                      (f = E.event.special[d] || {}),
                      (l = E.extend(
                        {
                          type: d,
                          origType: y,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && E.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i
                      )),
                      (p = s[d]) ||
                        (((p = s[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                      (E.event.global[d] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                c,
                s,
                u,
                l,
                f,
                p,
                d,
                h,
                y,
                m = ce.hasData(e) && ce.get(e);
              if (m && (s = m.events)) {
                for (u = (t = (t || "").match(X) || [""]).length; u--; )
                  if (
                    ((d = y = (c = Me.exec(t[u]) || [])[1]),
                    (h = (c[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = E.event.special[d] || {},
                        p =
                          s[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        c =
                          c[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = i = p.length;
                      i--;

                    )
                      (l = p[i]),
                        (!o && y !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (c && !c.test(l.namespace)) ||
                          (r &&
                            r !== l.selector &&
                            ("**" !== r || !l.selector)) ||
                          (p.splice(i, 1),
                          l.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, l));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                        E.removeEvent(e, d, m.handle),
                      delete s[d]);
                  } else for (d in s) E.event.remove(e, d + t[u], n, r, !0);
                E.isEmptyObject(s) && ce.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                c = new Array(arguments.length),
                s = E.event.fix(e),
                u =
                  (ce.get(this, "events") || Object.create(null))[s.type] || [],
                l = E.event.special[s.type] || {};
              for (c[0] = s, t = 1; t < arguments.length; t++)
                c[t] = arguments[t];
              if (
                ((s.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, s))
              ) {
                for (
                  a = E.event.handlers.call(this, s, u), t = 0;
                  (o = a[t++]) && !s.isPropagationStopped();

                )
                  for (
                    s.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();

                  )
                    (s.rnamespace &&
                      !1 !== i.namespace &&
                      !s.rnamespace.test(i.namespace)) ||
                      ((s.handleObj = i),
                      (s.data = i.data),
                      void 0 !==
                        (r = (
                          (E.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, c)) &&
                        !1 === (s.result = r) &&
                        (s.preventDefault(), s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s), s.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                c = [],
                s = t.delegateCount,
                u = e.target;
              if (s && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < s; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? E(o, this).index(u) > -1
                          : E.find(o, this, null, [u]).length),
                        a[o] && i.push(r);
                    i.length && c.push({ elem: u, handlers: i });
                  }
              return (
                (u = this),
                s < t.length && c.push({ elem: u, handlers: t.slice(s) }),
                c
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[E.expando] ? e : new E.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    Ee.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Fe(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    Ee.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Fe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (Ee.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      ce.get(t, "click")) ||
                    k(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (E.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (E.Event = function (e, t) {
              if (!(this instanceof E.Event)) return new E.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Re
                      : He),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
              constructor: E.Event,
              isDefaultPrevented: He,
              isPropagationStopped: He,
              isImmediatePropagationStopped: He,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Re),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Re),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Re),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            E.each(
              {
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
                code: !0,
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
                which: !0,
              },
              E.event.addProp
            ),
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(e) {
                if (b.documentMode) {
                  var n = ce.get(this, "handle"),
                    r = E.event.fix(e);
                  (r.type = "focusin" === e.type ? "focus" : "blur"),
                    (r.isSimulated = !0),
                    n(e),
                    r.target === r.currentTarget && n(r);
                } else E.event.simulate(t, e.target, E.event.fix(e));
              }
              (E.event.special[e] = {
                setup: function () {
                  var r;
                  if ((Fe(this, e, !0), !b.documentMode)) return !1;
                  (r = ce.get(this, t)) || this.addEventListener(t, n),
                    ce.set(this, t, (r || 0) + 1);
                },
                trigger: function () {
                  return Fe(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!b.documentMode) return !1;
                  (e = ce.get(this, t) - 1)
                    ? ce.set(this, t, e)
                    : (this.removeEventListener(t, n), ce.remove(this, t));
                },
                _default: function (t) {
                  return ce.get(t.target, e);
                },
                delegateType: t,
              }),
                (E.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = b.documentMode ? this : r,
                      i = ce.get(o, t);
                    i ||
                      (b.documentMode
                        ? this.addEventListener(t, n)
                        : r.addEventListener(e, n, !0)),
                      ce.set(o, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = b.documentMode ? this : r,
                      i = ce.get(o, t) - 1;
                    i
                      ? ce.set(o, t, i)
                      : (b.documentMode
                          ? this.removeEventListener(t, n)
                          : r.removeEventListener(e, n, !0),
                        ce.remove(o, t));
                  },
                });
            }),
            E.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                E.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === this || E.contains(this, r))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (e, t, n, r) {
                return _e(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return _e(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    E(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = He),
                  this.each(function () {
                    E.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Ne = /<script|<style|<link/i,
            qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ze = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Be(e, t) {
            return (
              (k(e, "table") &&
                k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
              e
            );
          }
          function Ie(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function We(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function $e(e, t) {
            var n, r, o, i, a, c;
            if (1 === t.nodeType) {
              if (ce.hasData(e) && (c = ce.get(e).events))
                for (o in (ce.remove(t, "handle events"), c))
                  for (n = 0, r = c[o].length; n < r; n++)
                    E.event.add(t, o, c[o][n]);
              se.hasData(e) &&
                ((i = se.access(e)), (a = E.extend({}, i)), se.set(t, a));
            }
          }
          function Ve(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ee.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Ue(e, t, n, r) {
            t = s(t);
            var o,
              i,
              a,
              c,
              u,
              l,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              y = v(h);
            if (
              y ||
              (p > 1 && "string" == typeof h && !m.checkClone && qe.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                y && (t[0] = h.call(this, o, i.html())), Ue(i, t, n, r);
              });
            if (
              p &&
              ((i = (o = Ae(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (c = (a = E.map(De(o, "script"), Ie)).length; f < p; f++)
                (u = o),
                  f !== d &&
                    ((u = E.clone(u, !0, !0)),
                    c && E.merge(a, De(u, "script"))),
                  n.call(e[f], u, f);
              if (c)
                for (
                  l = a[a.length - 1].ownerDocument, E.map(a, We), f = 0;
                  f < c;
                  f++
                )
                  (u = a[f]),
                    ke.test(u.type || "") &&
                      !ce.access(u, "globalEval") &&
                      E.contains(l, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !u.noModule &&
                          E._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            l
                          )
                        : w(u.textContent.replace(ze, ""), u, l));
            }
            return e;
          }
          function Xe(e, t, n) {
            for (
              var r, o = t ? E.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || E.cleanData(De(r)),
                r.parentNode &&
                  (n && me(r) && Pe(De(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                c = e.cloneNode(!0),
                s = me(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  E.isXMLDoc(e)
                )
              )
                for (a = De(c), r = 0, o = (i = De(e)).length; r < o; r++)
                  Ve(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || De(e), a = a || De(c), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    $e(i[r], a[r]);
                else $e(e, c);
              return (
                (a = De(c, "script")).length > 0 &&
                  Pe(a, !s && De(e, "script")),
                c
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = E.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (ie(n)) {
                  if ((t = n[ce.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? E.event.remove(n, r)
                          : E.removeEvent(n, r, t.handle);
                    n[ce.expando] = void 0;
                  }
                  n[se.expando] && (n[se.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (e) {
                return Xe(this, e, !0);
              },
              remove: function (e) {
                return Xe(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? E.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ue(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Be(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ue(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Be(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ue(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ue(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (E.cleanData(De(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return E.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Ne.test(e) &&
                      !Ce[(Oe.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = E.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (E.cleanData(De(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ue(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 &&
                      (E.cleanData(De(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            E.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                E.fn[e] = function (e) {
                  for (
                    var n, r = [], o = E(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      E(o[a])[t](n),
                      u.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Ze = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
            Ge = /^--/,
            Ye = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Qe = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            Je = new RegExp(he.join("|"), "i");
          function Ke(e, t, n) {
            var r,
              o,
              i,
              a,
              c = Ge.test(t),
              s = e.style;
            return (
              (n = n || Ye(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                c && a && (a = a.replace(A, "$1") || void 0),
                "" !== a || me(e) || (a = E.style(e, t)),
                !m.pixelBoxStyles() &&
                  Ze.test(a) &&
                  Je.test(t) &&
                  ((r = s.width),
                  (o = s.minWidth),
                  (i = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = o),
                  (s.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (l) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ye.appendChild(u).appendChild(l);
                var e = r.getComputedStyle(l);
                (n = "1%" !== e.top),
                  (s = 12 === t(e.marginLeft)),
                  (l.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (l.style.position = "absolute"),
                  (i = 12 === t(l.offsetWidth / 3)),
                  ye.removeChild(u),
                  (l = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              c,
              s,
              u = b.createElement("div"),
              l = b.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
              E.extend(m, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), s;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == c &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ye.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (c =
                        parseInt(o.height, 10) +
                          parseInt(o.borderTopWidth, 10) +
                          parseInt(o.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ye.removeChild(e)),
                    c
                  );
                },
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            nt = b.createElement("div").style,
            rt = {};
          function ot(e) {
            return (
              E.cssProps[e] ||
              rt[e] ||
              (e in nt
                ? e
                : (rt[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = tt.length;
                        n--;

                      )
                        if ((e = tt[n] + t) in nt) return e;
                    })(e) || e))
            );
          }
          var it = /^(none|table(?!-c[ea]).+)/,
            at = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            ct = { letterSpacing: "0", fontWeight: "400" };
          function st(e, t, n) {
            var r = de.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function ut(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              c = 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += E.css(e, n + he[a], !0, o)),
                r
                  ? ("content" === n &&
                      (s -= E.css(e, "padding" + he[a], !0, o)),
                    "margin" !== n &&
                      (s -= E.css(e, "border" + he[a] + "Width", !0, o)))
                  : ((s += E.css(e, "padding" + he[a], !0, o)),
                    "padding" !== n
                      ? (s += E.css(e, "border" + he[a] + "Width", !0, o))
                      : (c += E.css(e, "border" + he[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (s +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        s -
                        c -
                        0.5
                    )
                  ) || 0),
              s + u
            );
          }
          function lt(e, t, n) {
            var r = Ye(e),
              o =
                (!m.boxSizingReliable() || n) &&
                "border-box" === E.css(e, "boxSizing", !1, r),
              i = o,
              a = Ke(e, t, r),
              c = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ze.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!m.boxSizingReliable() && o) ||
                (!m.reliableTrDimensions() && k(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === E.css(e, "boxSizing", !1, r)),
                (i = c in e) && (a = e[c])),
              (a = parseFloat(a) || 0) +
                ut(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }
          function ft(e, t, n, r, o) {
            return new ft.prototype.init(e, t, n, r, o);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ke(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  c = oe(t),
                  s = Ge.test(t),
                  u = e.style;
                if (
                  (s || (t = ot(c)),
                  (a = E.cssHooks[t] || E.cssHooks[c]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : u[t];
                "string" == (i = typeof n) &&
                  (o = de.exec(n)) &&
                  o[1] &&
                  ((n = be(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      s ||
                      (n += (o && o[3]) || (E.cssNumber[c] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (s ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                c = oe(t);
              return (
                Ge.test(t) || (t = ot(c)),
                (a = E.cssHooks[t] || E.cssHooks[c]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = Ke(e, t, r)),
                "normal" === o && t in ct && (o = ct[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            E.each(["height", "width"], function (e, t) {
              E.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !it.test(E.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? lt(e, t, r)
                      : Qe(e, at, function () {
                          return lt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = Ye(e),
                    a = !m.scrollboxSize() && "absolute" === i.position,
                    c =
                      (a || r) && "border-box" === E.css(e, "boxSizing", !1, i),
                    s = r ? ut(e, t, r, c, i) : 0;
                  return (
                    c &&
                      a &&
                      (s -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          ut(e, t, "border", !1, i) -
                          0.5
                      )),
                    s &&
                      (o = de.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = E.css(e, t))),
                    st(0, n, s)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = et(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ke(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Qe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (E.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + he[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (E.cssHooks[e + t].set = st);
              }
            ),
            E.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Ye(e), o = t.length; a < o; a++)
                        i[t[a]] = E.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = ft),
            (ft.prototype = {
              constructor: ft,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || E.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = ft.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : ft.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = ft.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        E.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : ft.propHooks._default.set(this),
                  this
                );
              },
            }),
            (ft.prototype.init.prototype = ft.prototype),
            (ft.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  E.fx.step[e.prop]
                    ? E.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!E.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : E.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (ft.propHooks.scrollTop = ft.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (E.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (E.fx = ft.prototype.init),
            (E.fx.step = {});
          var pt,
            dt,
            ht = /^(?:toggle|show|hide)$/,
            yt = /queueHooks$/;
          function mt() {
            dt &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(mt)
                : r.setTimeout(mt, E.fx.interval),
              E.fx.tick());
          }
          function vt() {
            return (
              r.setTimeout(function () {
                pt = void 0;
              }),
              (pt = Date.now())
            );
          }
          function gt(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = he[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function bt(e, t, n) {
            for (
              var r,
                o = (xt.tweeners[t] || []).concat(xt.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function xt(e, t, n) {
            var r,
              o,
              i = 0,
              a = xt.prefilters.length,
              c = E.Deferred().always(function () {
                delete s.elem;
              }),
              s = function () {
                if (o) return !1;
                for (
                  var t = pt || vt(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = 1 - (n / u.duration || 0),
                    i = 0,
                    a = u.tweens.length;
                  i < a;
                  i++
                )
                  u.tweens[i].run(r);
                return (
                  c.notifyWith(e, [u, r, n]),
                  r < 1 && a
                    ? n
                    : (a || c.notifyWith(e, [u, 1, 0]),
                      c.resolveWith(e, [u]),
                      !1)
                );
              },
              u = c.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || vt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = E.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? u.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) u.tweens[n].run(1);
                  return (
                    t
                      ? (c.notifyWith(e, [u, 1, 0]), c.resolveWith(e, [u, t]))
                      : c.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              l = u.props;
            for (
              (function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = oe(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = E.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(l, u.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = xt.prefilters[i].call(u, e, l, u.opts)))
                return (
                  v(r.stop) &&
                    (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              E.map(l, bt, u),
              v(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              E.fx.timer(
                E.extend(s, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (E.Animation = E.extend(xt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return be(n.elem, e, de.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(X));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (xt.tweeners[n] = xt.tweeners[n] || []),
                  xt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  c,
                  s,
                  u,
                  l,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  y = e.nodeType && ge(e),
                  m = ce.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = E._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (c = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || c();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), ht.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (y ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !m || void 0 === m[r]) continue;
                      y = !0;
                    }
                    d[r] = (m && m[r]) || E.style(e, r);
                  }
                if ((s = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (u = m && m.display) && (u = ce.get(e, "display")),
                    "none" === (l = E.css(e, "display")) &&
                      (u
                        ? (l = u)
                        : (je([e], !0),
                          (u = e.style.display || u),
                          (l = E.css(e, "display")),
                          je([e]))),
                    ("inline" === l || ("inline-block" === l && null != u)) &&
                      "none" === E.css(e, "float") &&
                      (s ||
                        (p.done(function () {
                          h.display = u;
                        }),
                        null == u &&
                          ((l = h.display), (u = "none" === l ? "" : l))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (s = !1),
                  d))
                    s ||
                      (m
                        ? "hidden" in m && (y = m.hidden)
                        : (m = ce.access(e, "fxshow", { display: u })),
                      i && (m.hidden = !y),
                      y && je([e], !0),
                      p.done(function () {
                        for (r in (y || je([e]), ce.remove(e, "fxshow"), d))
                          E.style(e, r, d[r]);
                      })),
                      (s = bt(y ? m[r] : 0, r, p)),
                      r in m ||
                        ((m[r] = s.start),
                        y && ((s.end = s.start), (s.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
            },
          })),
            (E.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? E.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                E.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in E.fx.speeds
                      ? (r.duration = E.fx.speeds[r.duration])
                      : (r.duration = E.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this),
                    r.queue && E.dequeue(this, r.queue);
                }),
                r
              );
            }),
            E.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ge)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = E.isEmptyObject(e),
                  i = E.speed(t, n, r),
                  a = function () {
                    var t = xt(this, E.extend({}, e), i);
                    (o || ce.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = E.timers,
                      a = ce.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && yt.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || E.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = ce.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = E.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (e, t) {
              var n = E.fn[t];
              E.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(gt(t, !0), e, r, o);
              };
            }),
            E.each(
              {
                slideDown: gt("show"),
                slideUp: gt("hide"),
                slideToggle: gt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                E.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (E.timers = []),
            (E.fx.tick = function () {
              var e,
                t = 0,
                n = E.timers;
              for (pt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || E.fx.stop(), (pt = void 0);
            }),
            (E.fx.timer = function (e) {
              E.timers.push(e), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              dt || ((dt = !0), mt());
            }),
            (E.fx.stop = function () {
              dt = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (e, t) {
              return (
                (e = (E.fx && E.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var wt,
            jt = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return ee(this, E.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                E.removeAttr(this, e);
              });
            },
          }),
            E.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? E.prop(e, t, n)
                    : ((1 === i && E.isXMLDoc(e)) ||
                        (o =
                          E.attrHooks[t.toLowerCase()] ||
                          (E.expr.match.bool.test(t) ? wt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void E.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = E.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && k(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(X);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (wt = {
              set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = jt[t] || E.find.attr;
              jt[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = jt[a]),
                    (jt[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (jt[a] = i)),
                  o
                );
              };
            });
          var St = /^(?:input|select|textarea|button)$/i,
            Tt = /^(?:a|area)$/i;
          function Et(e) {
            return (e.match(X) || []).join(" ");
          }
          function Ot(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function kt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(X)) || [];
          }
          E.fn.extend({
            prop: function (e, t) {
              return ee(this, E.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[E.propFix[e] || e];
              });
            },
          }),
            E.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && E.isXMLDoc(e)) ||
                      ((t = E.propFix[t] || t), (o = E.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : St.test(e.nodeName) || (Tt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (E.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            E.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                E.propFix[this.toLowerCase()] = this;
              }
            ),
            E.fn.extend({
              addClass: function (e) {
                var t, n, r, o, i, a;
                return v(e)
                  ? this.each(function (t) {
                      E(this).addClass(e.call(this, t, Ot(this)));
                    })
                  : (t = kt(e)).length
                  ? this.each(function () {
                      if (
                        ((r = Ot(this)),
                        (n = 1 === this.nodeType && " " + Et(r) + " "))
                      ) {
                        for (i = 0; i < t.length; i++)
                          (o = t[i]),
                            n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        (a = Et(n)), r !== a && this.setAttribute("class", a);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, o, i, a;
                return v(e)
                  ? this.each(function (t) {
                      E(this).removeClass(e.call(this, t, Ot(this)));
                    })
                  : arguments.length
                  ? (t = kt(e)).length
                    ? this.each(function () {
                        if (
                          ((r = Ot(this)),
                          (n = 1 === this.nodeType && " " + Et(r) + " "))
                        ) {
                          for (i = 0; i < t.length; i++)
                            for (o = t[i]; n.indexOf(" " + o + " ") > -1; )
                              n = n.replace(" " + o + " ", " ");
                          (a = Et(n)), r !== a && this.setAttribute("class", a);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = typeof e,
                  c = "string" === a || Array.isArray(e);
                return v(e)
                  ? this.each(function (n) {
                      E(this).toggleClass(e.call(this, n, Ot(this), t), t);
                    })
                  : "boolean" == typeof t && c
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = kt(e)),
                    this.each(function () {
                      if (c)
                        for (i = E(this), o = 0; o < n.length; o++)
                          (r = n[o]),
                            i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                      else
                        (void 0 !== e && "boolean" !== a) ||
                          ((r = Ot(this)) && ce.set(this, "__className__", r),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              r || !1 === e
                                ? ""
                                : ce.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + Et(Ot(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Ct = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, E(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = E.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    E.valHooks[o.type] ||
                    E.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(Ct, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : Et(E.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      c = a ? null : [],
                      s = a ? i + 1 : o.length;
                    for (r = i < 0 ? s : a ? i : 0; r < s; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
                      ) {
                        if (((t = E(n).val()), a)) return t;
                        c.push(t);
                      }
                    return c;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = E.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        E.inArray(E.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            E.each(["radio", "checkbox"], function () {
              (E.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = E.inArray(E(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var Dt = r.location,
            Pt = { guid: Date.now() },
            Lt = /\?/;
          E.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                E.error(
                  "Invalid XML: " +
                    (n
                      ? E.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var At = /^(?:focusinfocus|focusoutblur)$/,
            Mt = function (e) {
              e.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                c,
                s,
                u,
                l,
                f,
                p,
                h = [n || b],
                y = d.call(e, "type") ? e.type : e,
                m = d.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = c = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !At.test(y + E.event.triggered) &&
                  (y.indexOf(".") > -1 &&
                    ((m = y.split(".")), (y = m.shift()), m.sort()),
                  (u = y.indexOf(":") < 0 && "on" + y),
                  ((e = e[E.expando]
                    ? e
                    : new E.Event(y, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : E.makeArray(t, [e])),
                  (f = E.event.special[y] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !g(n)) {
                  for (
                    s = f.delegateType || y,
                      At.test(s + y) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (c = a);
                  c === (n.ownerDocument || b) &&
                    h.push(c.defaultView || c.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = i > 1 ? s : f.bindType || y),
                    (l =
                      (ce.get(a, "events") || Object.create(null))[e.type] &&
                      ce.get(a, "handle")) && l.apply(a, t),
                    (l = u && a[u]) &&
                      l.apply &&
                      ie(a) &&
                      ((e.result = l.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = y),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !ie(n) ||
                    (u &&
                      v(n[y]) &&
                      !g(n) &&
                      ((c = n[u]) && (n[u] = null),
                      (E.event.triggered = y),
                      e.isPropagationStopped() && p.addEventListener(y, Mt),
                      n[y](),
                      e.isPropagationStopped() && p.removeEventListener(y, Mt),
                      (E.event.triggered = void 0),
                      c && (n[u] = c))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
              E.event.trigger(r, null, t);
            },
          }),
            E.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  E.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0);
              },
            });
          var Rt = /\[\]$/,
            Ht = /\r?\n/g,
            _t = /^(?:submit|button|image|reset|file)$/i,
            Ft = /^(?:input|select|textarea|keygen)/i;
          function Nt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              E.each(t, function (t, o) {
                n || Rt.test(e)
                  ? r(e, o)
                  : Nt(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== j(t)) r(e, t);
            else for (o in t) Nt(e + "[" + o + "]", t[o], n, r);
          }
          (E.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
              E.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Nt(n, e[n], t, o);
            return r.join("&");
          }),
            E.fn.extend({
              serialize: function () {
                return E.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = E.prop(this, "elements");
                  return e ? E.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !E(this).is(":disabled") &&
                      Ft.test(this.nodeName) &&
                      !_t.test(e) &&
                      (this.checked || !Ee.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (e) {
                          return { name: t.name, value: e.replace(Ht, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Ht, "\r\n") };
                  })
                  .get();
              },
            });
          var qt = /%20/g,
            zt = /#.*$/,
            Bt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Wt = /^(?:GET|HEAD)$/,
            $t = /^\/\//,
            Vt = {},
            Ut = {},
            Xt = "*/".concat("*"),
            Zt = b.createElement("a");
          function Gt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(X) || [];
              if (v(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Yt(e, t, n, r) {
            var o = {},
              i = e === Ut;
            function a(c) {
              var s;
              return (
                (o[c] = !0),
                E.each(e[c] || [], function (e, c) {
                  var u = c(t, n, r);
                  return "string" != typeof u || i || o[u]
                    ? i
                      ? !(s = u)
                      : void 0
                    : (t.dataTypes.unshift(u), a(u), !1);
                }),
                s
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function Qt(e, t) {
            var n,
              r,
              o = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e;
          }
          (Zt.href = Dt.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Dt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Dt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Xt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Qt(Qt(e, E.ajaxSettings), t) : Qt(E.ajaxSettings, e);
              },
              ajaxPrefilter: Gt(Vt),
              ajaxTransport: Gt(Ut),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  c,
                  s,
                  u,
                  l,
                  f,
                  p,
                  d = E.ajaxSetup({}, t),
                  h = d.context || d,
                  y = d.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                  m = E.Deferred(),
                  v = E.Callbacks("once memory"),
                  g = d.statusCode || {},
                  x = {},
                  w = {},
                  j = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!a)
                          for (a = {}; (t = It.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) S.always(e[S.status]);
                        else for (t in e) g[t] = [g[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || j;
                      return n && n.abort(t), T(0, t), this;
                    },
                  };
                if (
                  (m.promise(S),
                  (d.url = ((e || d.url || Dt.href) + "").replace(
                    $t,
                    Dt.protocol + "//"
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(X) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  s = b.createElement("a");
                  try {
                    (s.href = d.url),
                      (s.href = s.href),
                      (d.crossDomain =
                        Zt.protocol + "//" + Zt.host !=
                        s.protocol + "//" + s.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = E.param(d.data, d.traditional)),
                  Yt(Vt, d, t, S),
                  u)
                )
                  return S;
                for (f in ((l = E.event && d.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Wt.test(d.type)),
                (o = d.url.replace(zt, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(qt, "+"))
                  : ((p = d.url.slice(o.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((o += (Lt.test(o) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((o = o.replace(Bt, "$1")),
                      (p = (Lt.test(o) ? "&" : "?") + "_=" + Pt.guid++ + p)),
                    (d.url = o + p)),
                d.ifModified &&
                  (E.lastModified[o] &&
                    S.setRequestHeader("If-Modified-Since", E.lastModified[o]),
                  E.etag[o] && S.setRequestHeader("If-None-Match", E.etag[o])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", d.contentType),
                S.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  S.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, S, d) || u))
                  return S.abort();
                if (
                  ((j = "abort"),
                  v.add(d.complete),
                  S.done(d.success),
                  S.fail(d.error),
                  (n = Yt(Ut, d, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), l && y.trigger("ajaxSend", [S, d]), u)
                  )
                    return S;
                  d.async &&
                    d.timeout > 0 &&
                    (c = r.setTimeout(function () {
                      S.abort("timeout");
                    }, d.timeout));
                  try {
                    (u = !1), n.send(x, T);
                  } catch (e) {
                    if (u) throw e;
                    T(-1, e);
                  }
                } else T(-1, "No Transport");
                function T(e, t, a, s) {
                  var f,
                    p,
                    b,
                    x,
                    w,
                    j = t;
                  u ||
                    ((u = !0),
                    c && r.clearTimeout(c),
                    (n = void 0),
                    (i = s || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (x = (function (e, t, n) {
                        for (
                          var r, o, i, a, c = e.contents, s = e.dataTypes;
                          "*" === s[0];

                        )
                          s.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in c)
                            if (c[o] && c[o].test(r)) {
                              s.unshift(o);
                              break;
                            }
                        if (s[0] in n) i = s[0];
                        else {
                          for (o in n) {
                            if (!s[0] || e.converters[o + " " + s[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== s[0] && s.unshift(i), n[i];
                      })(d, S, a)),
                    !f &&
                      E.inArray("script", d.dataTypes) > -1 &&
                      E.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (x = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        c,
                        s,
                        u = {},
                        l = e.dataTypes.slice();
                      if (l[1])
                        for (a in e.converters)
                          u[a.toLowerCase()] = e.converters[a];
                      for (i = l.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !s &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (s = i),
                          (i = l.shift()))
                        )
                          if ("*" === i) i = s;
                          else if ("*" !== s && s !== i) {
                            if (!(a = u[s + " " + i] || u["* " + i]))
                              for (o in u)
                                if (
                                  (c = o.split(" "))[1] === i &&
                                  (a = u[s + " " + c[0]] || u["* " + c[0]])
                                ) {
                                  !0 === a
                                    ? (a = u[o])
                                    : !0 !== u[o] &&
                                      ((i = c[0]), l.unshift(c[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + s + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(d, x, S, f)),
                    f
                      ? (d.ifModified &&
                          ((w = S.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[o] = w),
                          (w = S.getResponseHeader("etag")) && (E.etag[o] = w)),
                        204 === e || "HEAD" === d.type
                          ? (j = "nocontent")
                          : 304 === e
                          ? (j = "notmodified")
                          : ((j = x.state), (p = x.data), (f = !(b = x.error))))
                      : ((b = j),
                        (!e && j) || ((j = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || j) + ""),
                    f
                      ? m.resolveWith(h, [p, j, S])
                      : m.rejectWith(h, [S, j, b]),
                    S.statusCode(g),
                    (g = void 0),
                    l &&
                      y.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        S,
                        d,
                        f ? p : b,
                      ]),
                    v.fireWith(h, [S, j]),
                    l &&
                      (y.trigger("ajaxComplete", [S, d]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
              },
            }),
            E.each(["get", "post"], function (e, t) {
              E[t] = function (e, n, r, o) {
                return (
                  v(n) && ((o = o || r), (r = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: e, type: t, dataType: o, data: n, success: r },
                      E.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (E._evalUrl = function (e, t, n) {
              return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  E.globalEval(e, t, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      E(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = E(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  E(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      E(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (E.expr.pseudos.hidden = function (e) {
              return !E.expr.pseudos.visible(e);
            }),
            (E.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (E.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Jt = { 0: 200, 1223: 204 },
            Kt = E.ajaxSettings.xhr();
          (m.cors = !!Kt && "withCredentials" in Kt),
            (m.ajax = Kt = !!Kt),
            E.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Kt && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      c = e.xhr();
                    if (
                      (c.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) c[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      c.overrideMimeType &&
                      c.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      c.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            c.onload =
                            c.onerror =
                            c.onabort =
                            c.ontimeout =
                            c.onreadystatechange =
                              null),
                          "abort" === e
                            ? c.abort()
                            : "error" === e
                            ? "number" != typeof c.status
                              ? i(0, "error")
                              : i(c.status, c.statusText)
                            : i(
                                Jt[c.status] || c.status,
                                c.statusText,
                                "text" !== (c.responseType || "text") ||
                                  "string" != typeof c.responseText
                                  ? { binary: c.response }
                                  : { text: c.responseText },
                                c.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (c.onload = t()),
                      (n = c.onerror = c.ontimeout = t("error")),
                      void 0 !== c.onabort
                        ? (c.onabort = n)
                        : (c.onreadystatechange = function () {
                            4 === c.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      c.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            E.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            E.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return E.globalEval(e), e;
                },
              },
            }),
            E.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            E.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = E("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || E.expando + "_" + Pt.guid++;
              return (this[e] = !0), e;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                c =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      nn.test(e.data) &&
                      "data");
              if (c || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  c
                    ? (e[c] = e[c].replace(nn, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || E.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? E(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), tn.push(o)),
                      a && v(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((en = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === en.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (i = !n && []),
                  (o = z.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Ae([e], t, i)),
                      i && i.length && E(i).remove(),
                      E.merge([], o.childNodes)));
              var r, o, i;
            }),
            (E.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                c = e.indexOf(" ");
              return (
                c > -1 && ((r = Et(e.slice(c))), (e = e.slice(0, c))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  E.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? E("<div>").append(E.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (e) {
              return E.grep(E.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  c,
                  s,
                  u = E.css(e, "position"),
                  l = E(e),
                  f = {};
                "static" === u && (e.style.position = "relative"),
                  (c = l.offset()),
                  (i = E.css(e, "top")),
                  (s = E.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (i + s).indexOf("auto") > -1
                    ? ((a = (r = l.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(s) || 0)),
                  v(t) && (t = t.call(e, n, E.extend({}, c))),
                  null != t.top && (f.top = t.top - c.top + a),
                  null != t.left && (f.left = t.left - c.left + o),
                  "using" in t ? t.using.call(e, f) : l.css(f);
              },
            }),
            E.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        E.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === E.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = E(e).offset()).top += E.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += E.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - E.css(r, "marginTop", !0),
                    left: t.left - o.left - E.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === E.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ye;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (r) {
                  return ee(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (g(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (e, t) {
              E.cssHooks[t] = et(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ke(e, t)), Ze.test(n) ? E(e).position()[t] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (e, t) {
              E.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  E.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                      c = n || (!0 === o || !0 === i ? "margin" : "border");
                    return ee(
                      this,
                      function (t, n, o) {
                        var i;
                        return g(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((i = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              i["scroll" + e],
                              t.body["offset" + e],
                              i["offset" + e],
                              i["client" + e]
                            ))
                          : void 0 === o
                          ? E.css(t, n, c)
                          : E.style(t, n, o, c);
                      },
                      t,
                      a ? o : void 0,
                      a
                    );
                  };
                }
              );
            }),
            E.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                E.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            E.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
              },
            }),
            E.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                E.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (r = c.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(c.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || E.guid++),
                o
              );
          }),
            (E.holdReady = function (e) {
              e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = k),
            (E.isFunction = v),
            (E.isWindow = g),
            (E.camelCase = oe),
            (E.type = j),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
              var t = E.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (E.trim = function (e) {
              return null == e ? "" : (e + "").replace(rn, "$1");
            }),
            void 0 ===
              (n = function () {
                return E;
              }.apply(t, [])) || (e.exports = n);
          var on = r.jQuery,
            an = r.$;
          return (
            (E.noConflict = function (e) {
              return (
                r.$ === E && (r.$ = an),
                e && r.jQuery === E && (r.jQuery = on),
                E
              );
            }),
            void 0 === o && (r.jQuery = r.$ = E),
            E
          );
        });
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = r.base ? s[0] + r.base : s[0],
              l = i[u] || 0,
              f = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var p = n(f),
              d = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: f, updater: h, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              t[c].references--;
            }
            for (var s = r(e, o), u = 0; u < i.length; u++) {
              var l = n(i[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = s;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = "ba153b72752607d260affc41b1c47565",
        t = function (t) {
          var n = "https://api.openweathermap.org/data/2.5/weather?q="
            .concat(t, "&units=metric&appid=")
            .concat(e);
          return fetch(n, { cache: "force-cache" })
            .then(function (e) {
              if (!e.ok) throw new Error("City not found");
              return e.json();
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              throw e;
            });
        },
        r = function (t, n) {
          var r = "https://api.openweathermap.org/data/2.5/weather?lat="
            .concat(t, "&lon=")
            .concat(n, "&units=metric&appid=")
            .concat(e);
          return fetch(r, { cache: "force-cache" })
            .then(function (e) {
              if (!e.ok) throw new Error("Weather data not found");
              return e.json();
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              throw e;
            });
        },
        o = function (t, n) {
          var r = "https://api.openweathermap.org/data/2.5/forecast?lat="
            .concat(t, "&lon=")
            .concat(n, "&units=metric&appid=")
            .concat(e);
          return fetch(r, { cache: "force-cache" })
            .then(function (e) {
              if (!e.ok) throw new Error("Forecast data not found");
              return e.json();
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              throw e;
            });
        },
        i = n(755),
        a = n.n(i);
      n(564);
      n(685);
      var c = n(379),
        s = n.n(c),
        u = n(795),
        l = n.n(u),
        f = n(569),
        p = n.n(f),
        d = n(565),
        h = n.n(d),
        y = n(216),
        m = n.n(y),
        v = n(589),
        g = n.n(v),
        b = n(772),
        x = {};
      (x.styleTagTransform = g()),
        (x.setAttributes = h()),
        (x.insert = p().bind(null, "head")),
        (x.domAPI = l()),
        (x.insertStyleElement = m()),
        s()(b.Z, x),
        b.Z && b.Z.locals && b.Z.locals,
        n(122),
        n(170),
        n(992),
        n(551),
        n(164),
        n(977),
        n(741),
        n(981),
        n(836),
        n(940),
        n(318),
        document.addEventListener("DOMContentLoaded", function () {
          var n = a()("#btnSearch"),
            i = a()("weather-box"),
            c = a()("forecast-box"),
            s = a()("wind-details"),
            u = a()("temp-details"),
            l = a()("sun-details"),
            f = a()("hum-details"),
            p = a()("pressure-details"),
            d = a()("visibility-details"),
            h = a()("fl-details"),
            y = function () {
              document.getElementById("loadingCircle").style.display = "block";
            },
            m = function () {
              document.getElementById("loadingCircle").style.display = "none";
            };
          y(),
            "geolocation" in navigator
              ? navigator.geolocation.getCurrentPosition(
                  function (e) {
                    var t = e.coords.latitude,
                      n = e.coords.longitude;
                    y(),
                      setTimeout(function () {
                        r(t, n)
                          .then(function (e) {
                            i[0].setWeatherData(e);
                          })
                          .catch(function (e) {
                            console.error("Error:", e);
                          }),
                          r(t, n)
                            .then(function (e) {
                              s[0].setWindDetails(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            }),
                          o(t, n)
                            .then(function (e) {
                              c[0].setForecastData(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            }),
                          r(t, n)
                            .then(function (e) {
                              u[0].setTempDetails(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            }),
                          r(t, n)
                            .then(function (e) {
                              l[0].setSunData(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            }),
                          r(t, n)
                            .then(function (e) {
                              f[0].setHumData(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            }),
                          r(t, n)
                            .then(function (e) {
                              p[0].setPressureData(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            }),
                          r(t, n)
                            .then(function (e) {
                              d[0].setVisibility(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            }),
                          r(t, n)
                            .then(function (e) {
                              h[0].setFeelsLike(e);
                            })
                            .catch(function (e) {
                              console.error("Error:", e);
                            })
                            .finally(function () {
                              m();
                            });
                      }, 1e3);
                  },
                  function (e) {
                    console.error("Error getting location:", e);
                  }
                )
              : console.error("Geolocation is not available in this browser."),
            n.on("click", function () {
              var n = a()("#searchElement").val();
              0 != n.length
                ? (y(),
                  setTimeout(function () {
                    t(n)
                      .then(function (e) {
                        i[0].setWeatherData(e);
                      })
                      .catch(function (e) {
                        console.error("Error:", e);
                      }),
                      t(n)
                        .then(function (e) {
                          s[0].setWindDetails(e);
                        })
                        .catch(function (e) {
                          console.error("Error:", e);
                        }),
                      (function (t) {
                        var n =
                          "https://api.openweathermap.org/data/2.5/forecast?q="
                            .concat(t, "&units=metric&appid=")
                            .concat(e);
                        return fetch(n, { cache: "force-cache" })
                          .then(function (e) {
                            if (!e.ok) throw new Error("City not found");
                            return e.json();
                          })
                          .then(function (e) {
                            return e;
                          })
                          .catch(function (e) {
                            throw e;
                          });
                      })(n)
                        .then(function (e) {
                          c[0].setForecastData(e);
                        })
                        .catch(function (e) {
                          console.error("Error fetching forecast data:", e);
                        }),
                      t(n)
                        .then(function (e) {
                          u[0].setTempDetails(e);
                        })
                        .catch(function (e) {
                          console.error("Error:", e);
                        }),
                      t(n)
                        .then(function (e) {
                          l[0].setSunData(e);
                        })
                        .catch(function (e) {
                          console.error("Error:", e);
                        }),
                      t(n)
                        .then(function (e) {
                          f[0].setHumData(e);
                        })
                        .catch(function (e) {
                          console.error("Error:", e);
                        }),
                      t(n)
                        .then(function (e) {
                          p[0].setPressureData(e);
                        })
                        .catch(function (e) {
                          console.error("Error:", e);
                        }),
                      t(n)
                        .then(function (e) {
                          d[0].setVisibility(e);
                        })
                        .catch(function (e) {
                          console.error("Error:", e);
                        }),
                      t(n)
                        .then(function (e) {
                          h[0].setFeelsLike(e);
                        })
                        .catch(function (e) {
                          console.error("Error:", e);
                        })
                        .finally(function () {
                          m();
                        });
                  }, 4e3))
                : alert("Enter a city name!");
            });
          var v = a()("<use-location></use-location>");
          (v[0].ClickEvent = function (e, t) {
            y(),
              setTimeout(function () {
                r(e, t)
                  .then(function (e) {
                    i[0].setWeatherData(e);
                  })
                  .catch(function (e) {
                    console.error("Error:", e);
                  }),
                  r(e, t)
                    .then(function (e) {
                      s[0].setWindDetails(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    }),
                  o(e, t)
                    .then(function (e) {
                      c[0].setForecastData(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    }),
                  r(e, t)
                    .then(function (e) {
                      u[0].setTempDetails(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    }),
                  r(e, t)
                    .then(function (e) {
                      l[0].setSunData(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    }),
                  r(e, t)
                    .then(function (e) {
                      f[0].setHumData(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    }),
                  r(e, t)
                    .then(function (e) {
                      p[0].setPressureData(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    }),
                  r(e, t)
                    .then(function (e) {
                      d[0].setVisibility(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    }),
                  r(e, t)
                    .then(function (e) {
                      h[0].setFeelsLike(e);
                    })
                    .catch(function (e) {
                      console.error("Error:", e);
                    })
                    .finally(function () {
                      m();
                    });
              }, 1e3);
          }),
            a()("#locationContainer").append(v);
        });
    })();
})();
