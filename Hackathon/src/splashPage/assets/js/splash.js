
/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function(t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function() {
    function t(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function e(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = function(t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function n(t) {
                return (t[0] || t).nodeType
            }

            function i() {
                return {
                    bindType: a.end,
                    delegateType: a.end,
                    handle: function(e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function o() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in h)
                    if (void 0 !== t.style[e]) return {
                        end: h[e]
                    };
                return !1
            }

            function r(e) {
                var n = this,
                    i = !1;
                return t(this).one(c.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || c.triggerTransitionEnd(n)
                }, e), this
            }

            function s() {
                a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i())
            }
            var a = !1,
                l = 1e6,
                h = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                c = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        do t += ~~(Math.random() * l); while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        t(e).trigger(a.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(a)
                    },
                    typeCheckConfig: function(t, i, o) {
                        for (var r in o)
                            if (o.hasOwnProperty(r)) {
                                var s = o[r],
                                    a = i[r],
                                    l = a && n(a) ? "element" : e(a);
                                if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                            }
                    }
                };
            return s(), c
        }(jQuery),
        s = (function(t) {
            var e = "alert",
                i = "4.0.0-alpha.6",
                s = "bs.alert",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 150,
                u = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                d = {
                    CLOSE: "close" + a,
                    CLOSED: "closed" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                f = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                _ = function() {
                    function e(t) {
                        n(this, e), this._element = t
                    }
                    return e.prototype.close = function(t) {
                        t = t || this._element;
                        var e = this._getRootElement(t),
                            n = this._triggerCloseEvent(e);
                        n.isDefaultPrevented() || this._removeElement(e)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, s), this._element = null
                    }, e.prototype._getRootElement = function(e) {
                        var n = r.getSelectorFromElement(e),
                            i = !1;
                        return n && (i = t(n)[0]), i || (i = t(e).closest("." + f.ALERT)[0]), i
                    }, e.prototype._triggerCloseEvent = function(e) {
                        var n = t.Event(d.CLOSE);
                        return t(e).trigger(n), n
                    }, e.prototype._removeElement = function(e) {
                        var n = this;
                        return t(e).removeClass(f.SHOW), r.supportsTransitionEnd() && t(e).hasClass(f.FADE) ? void t(e).one(r.TRANSITION_END, function(t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(c) : void this._destroyElement(e)
                    }, e.prototype._destroyElement = function(e) {
                        t(e).detach().trigger(d.CLOSED).remove()
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this),
                                o = i.data(s);
                            o || (o = new e(this), i.data(s, o)), "close" === n && o[n](this)
                        })
                    }, e._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _)), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
                return t.fn[e] = h, _._jQueryInterface
            }, _
        }(jQuery), function(t) {
            var e = "button",
                i = "4.0.0-alpha.6",
                r = "bs.button",
                s = "." + r,
                a = ".data-api",
                l = t.fn[e],
                h = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                c = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                u = {
                    CLICK_DATA_API: "click" + s + a,
                    FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)
                },
                d = function() {
                    function e(t) {
                        n(this, e), this._element = t
                    }
                    return e.prototype.toggle = function() {
                        var e = !0,
                            n = t(this._element).closest(c.DATA_TOGGLE)[0];
                        if (n) {
                            var i = t(this._element).find(c.INPUT)[0];
                            if (i) {
                                if ("radio" === i.type)
                                    if (i.checked && t(this._element).hasClass(h.ACTIVE)) e = !1;
                                    else {
                                        var o = t(n).find(c.ACTIVE)[0];
                                        o && t(o).removeClass(h.ACTIVE)
                                    }
                                e && (i.checked = !t(this._element).hasClass(h.ACTIVE), t(i).trigger("change")), i.focus()
                            }
                        }
                        this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, r), this._element = null
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data(r);
                            i || (i = new e(this), t(this).data(r, i)), "toggle" === n && i[n]()
                        })
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                e.preventDefault();
                var n = e.target;
                t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle")
            }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                var n = t(e.target).closest(c.BUTTON)[0];
                t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type))
            }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                return t.fn[e] = l, d._jQueryInterface
            }, d
        }(jQuery), function(t) {
            var e = "carousel",
                s = "4.0.0-alpha.6",
                a = "bs.carousel",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 600,
                d = 37,
                f = 39,
                _ = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                g = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                p = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                m = {
                    SLIDE: "slide" + l,
                    SLID: "slid" + l,
                    KEYDOWN: "keydown" + l,
                    MOUSEENTER: "mouseenter" + l,
                    MOUSELEAVE: "mouseleave" + l,
                    LOAD_DATA_API: "load" + l + h,
                    CLICK_DATA_API: "click" + l + h
                },
                E = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                },
                v = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                T = function() {
                    function h(e, i) {
                        n(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners()
                    }
                    return h.prototype.next = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(p.NEXT)
                    }, h.prototype.nextWhenVisible = function() {
                        document.hidden || this.next()
                    }, h.prototype.prev = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(p.PREV)
                    }, h.prototype.pause = function(e) {
                        e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, h.prototype.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, h.prototype.to = function(e) {
                        var n = this;
                        this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0)) {
                            if (this._isSliding) return void t(this._element).one(m.SLID, function() {
                                return n.to(e)
                            });
                            if (i === e) return this.pause(), void this.cycle();
                            var o = e > i ? p.NEXT : p.PREV;
                            this._slide(o, this._items[e])
                        }
                    }, h.prototype.dispose = function() {
                        t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, h.prototype._getConfig = function(n) {
                        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                    }, h.prototype._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(m.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(m.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        })
                    }, h.prototype._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case d:
                                t.preventDefault(), this.prev();
                                break;
                            case f:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, h.prototype._getItemIndex = function(e) {
                        return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e)
                    }, h.prototype._getItemByDirection = function(t, e) {
                        var n = t === p.NEXT,
                            i = t === p.PREV,
                            o = this._getItemIndex(e),
                            r = this._items.length - 1,
                            s = i && 0 === o || n && o === r;
                        if (s && !this._config.wrap) return e;
                        var a = t === p.PREV ? -1 : 1,
                            l = (o + a) % this._items.length;
                        return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                    }, h.prototype._triggerSlideEvent = function(e, n) {
                        var i = t.Event(m.SLIDE, {
                            relatedTarget: e,
                            direction: n
                        });
                        return t(this._element).trigger(i), i
                    }, h.prototype._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && t(n).addClass(E.ACTIVE)
                        }
                    }, h.prototype._slide = function(e, n) {
                        var i = this,
                            o = t(this._element).find(v.ACTIVE_ITEM)[0],
                            s = n || o && this._getItemByDirection(e, o),
                            a = Boolean(this._interval),
                            l = void 0,
                            h = void 0,
                            c = void 0;
                        if (e === p.NEXT ? (l = E.LEFT, h = E.NEXT, c = p.LEFT) : (l = E.RIGHT, h = E.PREV, c = p.RIGHT), s && t(s).hasClass(E.ACTIVE)) return void(this._isSliding = !1);
                        var d = this._triggerSlideEvent(s, c);
                        if (!d.isDefaultPrevented() && o && s) {
                            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                            var f = t.Event(m.SLID, {
                                relatedTarget: s,
                                direction: c
                            });
                            r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function() {
                                t(s).removeClass(l + " " + h).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE + " " + h + " " + l), i._isSliding = !1, setTimeout(function() {
                                    return t(i._element).trigger(f)
                                }, 0)
                            }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(f)), a && this.cycle()
                        }
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(a),
                                o = t.extend({}, _, t(this).data());
                            "object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(o, e);
                            var r = "string" == typeof e ? e : o.slide;
                            if (n || (n = new h(this, o), t(this).data(a, n)), "number" == typeof e) n.to(e);
                            else if ("string" == typeof r) {
                                if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                                n[r]()
                            } else o.interval && (n.pause(), n.cycle())
                        })
                    }, h._dataApiClickHandler = function(e) {
                        var n = r.getSelectorFromElement(this);
                        if (n) {
                            var i = t(n)[0];
                            if (i && t(i).hasClass(E.CAROUSEL)) {
                                var o = t.extend({}, t(i).data(), t(this).data()),
                                    s = this.getAttribute("data-slide-to");
                                s && (o.interval = !1), h._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault()
                            }
                        }
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return _
                        }
                    }]), h
                }();
            return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function() {
                t(v.DATA_RIDE).each(function() {
                    var e = t(this);
                    T._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function() {
                return t.fn[e] = c, T._jQueryInterface
            }, T
        }(jQuery), function(t) {
            var e = "collapse",
                s = "4.0.0-alpha.6",
                a = "bs.collapse",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 600,
                d = {
                    toggle: !0,
                    parent: ""
                },
                f = {
                    toggle: "boolean",
                    parent: "string"
                },
                _ = {
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    CLICK_DATA_API: "click" + l + h
                },
                g = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                p = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                m = {
                    ACTIVES: ".card > .show, .card > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                E = function() {
                    function l(e, i) {
                        n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return l.prototype.toggle = function() {
                        t(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
                    }, l.prototype.show = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (!t(this._element).hasClass(g.SHOW)) {
                            var n = void 0,
                                i = void 0;
                            if (this._parent && (n = t.makeArray(t(this._parent).find(m.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(a), i && i._isTransitioning))) {
                                var o = t.Event(_.SHOW);
                                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                    n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));
                                    var s = this._getDimension();
                                    t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var h = function() {
                                        t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[s] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN)
                                    };
                                    if (!r.supportsTransitionEnd()) return void h();
                                    var c = s[0].toUpperCase() + s.slice(1),
                                        d = "scroll" + c;
                                    t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(u), this._element.style[s] = this._element[d] + "px"
                                }
                            }
                        }
                    }, l.prototype.hide = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (t(this._element).hasClass(g.SHOW)) {
                            var n = t.Event(_.HIDE);
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension(),
                                    o = i === p.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var s = function() {
                                    e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)
                                };
                                return this._element.style[i] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s()
                            }
                        }
                    }, l.prototype.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, l.prototype.dispose = function() {
                        t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, l.prototype._getConfig = function(n) {
                        return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, f), n
                    }, l.prototype._getDimension = function() {
                        var e = t(this._element).hasClass(p.WIDTH);
                        return e ? p.WIDTH : p.HEIGHT
                    }, l.prototype._getParent = function() {
                        var e = this,
                            n = t(this._config.parent)[0],
                            i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(n).find(i).each(function(t, n) {
                            e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n])
                        }), n
                    }, l.prototype._addAriaAndCollapsedClass = function(e, n) {
                        if (e) {
                            var i = t(e).hasClass(g.SHOW);
                            e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(g.COLLAPSED, !i).attr("aria-expanded", i)
                        }
                    }, l._getTargetFromElement = function(e) {
                        var n = r.getSelectorFromElement(e);
                        return n ? t(n)[0] : null
                    }, l._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this),
                                o = n.data(a),
                                r = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                            if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), n.data(a, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e]()
                            }
                        })
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }]), l
                }();
            return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
                e.preventDefault();
                var n = E._getTargetFromElement(this),
                    i = t(n).data(a),
                    o = i ? "toggle" : t(this).data();
                E._jQueryInterface.call(t(n), o)
            }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function() {
                return t.fn[e] = c, E._jQueryInterface
            }, E
        }(jQuery), function(t) {
            var e = "dropdown",
                i = "4.0.0-alpha.6",
                s = "bs.dropdown",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 27,
                u = 32,
                d = 38,
                f = 40,
                _ = 3,
                g = new RegExp(d + "|" + f + "|" + c + "|" + u),
                p = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK: "click" + a,
                    CLICK_DATA_API: "click" + a + l,
                    FOCUSIN_DATA_API: "focusin" + a + l,
                    KEYDOWN_DATA_API: "keydown" + a + l
                },
                m = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    SHOW: "show"
                },
                E = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                v = function() {
                    function e(t) {
                        n(this, e), this._element = t, this._addEventListeners()
                    }
                    return e.prototype.toggle = function() {
                        if (this.disabled || t(this).hasClass(m.DISABLED)) return !1;
                        var n = e._getParentFromElement(this),
                            i = t(n).hasClass(m.SHOW);
                        if (e._clearMenus(), i) return !1;
                        if ("ontouchstart" in document.documentElement && !t(n).closest(E.NAVBAR_NAV).length) {
                            var o = document.createElement("div");
                            o.className = m.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                        }
                        var r = {
                                relatedTarget: this
                            },
                            s = t.Event(p.SHOW, r);
                        return t(n).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(m.SHOW), t(n).trigger(t.Event(p.SHOWN, r)), !1)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, s), t(this._element).off(a), this._element = null
                    }, e.prototype._addEventListeners = function() {
                        t(this._element).on(p.CLICK, this.toggle)
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data(s);
                            if (i || (i = new e(this), t(this).data(s, i)), "string" == typeof n) {
                                if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                                i[n].call(this)
                            }
                        })
                    }, e._clearMenus = function(n) {
                        if (!n || n.which !== _) {
                            var i = t(E.BACKDROP)[0];
                            i && i.parentNode.removeChild(i);
                            for (var o = t.makeArray(t(E.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                                var s = e._getParentFromElement(o[r]),
                                    a = {
                                        relatedTarget: o[r]
                                    };
                                if (t(s).hasClass(m.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(s, n.target))) {
                                    var l = t.Event(p.HIDE, a);
                                    t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(m.SHOW).trigger(t.Event(p.HIDDEN, a)))
                                }
                            }
                        }
                    }, e._getParentFromElement = function(e) {
                        var n = void 0,
                            i = r.getSelectorFromElement(e);
                        return i && (n = t(i)[0]), n || e.parentNode
                    }, e._dataApiKeydownHandler = function(n) {
                        if (g.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(m.DISABLED))) {
                            var i = e._getParentFromElement(this),
                                o = t(i).hasClass(m.SHOW);
                            if (!o && n.which !== c || o && n.which === c) {
                                if (n.which === c) {
                                    var r = t(i).find(E.DATA_TOGGLE)[0];
                                    t(r).trigger("focus")
                                }
                                return void t(this).trigger("click")
                            }
                            var s = t(i).find(E.VISIBLE_ITEMS).get();
                            if (s.length) {
                                var a = s.indexOf(n.target);
                                n.which === d && a > 0 && a--, n.which === f && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                            }
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(p.KEYDOWN_DATA_API, E.DATA_TOGGLE, v._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, E.ROLE_MENU, v._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, E.ROLE_LISTBOX, v._dataApiKeydownHandler).on(p.CLICK_DATA_API + " " + p.FOCUSIN_DATA_API, v._clearMenus).on(p.CLICK_DATA_API, E.DATA_TOGGLE, v.prototype.toggle).on(p.CLICK_DATA_API, E.FORM_CHILD, function(t) {
                t.stopPropagation()
            }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
                return t.fn[e] = h, v._jQueryInterface
            }, v
        }(jQuery), function(t) {
            var e = "modal",
                s = "4.0.0-alpha.6",
                a = "bs.modal",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 300,
                d = 150,
                f = 27,
                _ = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                g = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                p = {
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    FOCUSIN: "focusin" + l,
                    RESIZE: "resize" + l,
                    CLICK_DISMISS: "click.dismiss" + l,
                    KEYDOWN_DISMISS: "keydown.dismiss" + l,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + l,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
                    CLICK_DATA_API: "click" + l + h
                },
                m = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                },
                E = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                },
                v = function() {
                    function h(e, i) {
                        n(this, h), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return h.prototype.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, h.prototype.show = function(e) {
                        var n = this;
                        if (this._isTransitioning) throw new Error("Modal is transitioning");
                        r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) && (this._isTransitioning = !0);
                        var i = t.Event(p.SHOW, {
                            relatedTarget: e
                        });
                        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function(t) {
                            return n.hide(t)
                        }), t(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                            t(n._element).one(p.MOUSEUP_DISMISS, function(e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return n._showElement(e)
                        }))
                    }, h.prototype.hide = function(e) {
                        var n = this;
                        if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                        var i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                        i && (this._isTransitioning = !0);
                        var o = t.Event(p.HIDE);
                        t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(p.FOCUSIN), t(this._element).removeClass(m.SHOW), t(this._element).off(p.CLICK_DISMISS), t(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function(t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(u) : this._hideModal())
                    }, h.prototype.dispose = function() {
                        t.removeData(this._element, a), t(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, h.prototype._getConfig = function(n) {
                        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                    }, h.prototype._showElement = function(e) {
                        var n = this,
                            i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();
                        var o = t.Event(p.SHOWN, {
                                relatedTarget: e
                            }),
                            s = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                            };
                        i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s()
                    }, h.prototype._enforceFocus = function() {
                        var e = this;
                        t(document).off(p.FOCUSIN).on(p.FOCUSIN, function(n) {
                            document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                        })
                    }, h.prototype._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(p.KEYDOWN_DISMISS, function(t) {
                            t.which === f && e.hide()
                        }) : this._isShown || t(this._element).off(p.KEYDOWN_DISMISS)
                    }, h.prototype._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(p.RESIZE, function(t) {
                            return e._handleUpdate(t)
                        }) : t(window).off(p.RESIZE)
                    }, h.prototype._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() {
                            t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(p.HIDDEN)
                        })
                    }, h.prototype._removeBackdrop = function() {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, h.prototype._showBackdrop = function(e) {
                        var n = this,
                            i = t(this._element).hasClass(m.FADE) ? m.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var o = r.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(p.CLICK_DISMISS, function(t) {
                                    return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                                }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.SHOW), !e) return;
                            if (!o) return void e();
                            t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(d)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(m.SHOW);
                            var s = function() {
                                n._removeBackdrop(), e && e()
                            };
                            r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(d) : s()
                        } else e && e()
                    }, h.prototype._handleUpdate = function() {
                        this._adjustDialog()
                    }, h.prototype._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, h.prototype._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, h.prototype._checkScrollbar = function() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, h.prototype._setScrollbar = function() {
                        var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                    }, h.prototype._resetScrollbar = function() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, h.prototype._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, h._jQueryInterface = function(e, n) {
                        return this.each(function() {
                            var o = t(this).data(a),
                                r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                            if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e](n)
                            } else r.show && o.show(n)
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return _
                        }
                    }]), h
                }();
            return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function(e) {
                var n = this,
                    i = void 0,
                    o = r.getSelectorFromElement(this);
                o && (i = t(o)[0]);
                var s = t(i).data(a) ? "toggle" : t.extend({}, t(i).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(i).one(p.SHOW, function(e) {
                    e.isDefaultPrevented() || l.one(p.HIDDEN, function() {
                        t(n).is(":visible") && n.focus()
                    })
                });
                v._jQueryInterface.call(t(i), s, this)
            }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
                return t.fn[e] = c, v._jQueryInterface
            }, v
        }(jQuery), function(t) {
            var e = "scrollspy",
                s = "4.0.0-alpha.6",
                a = "bs.scrollspy",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                d = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                f = {
                    ACTIVATE: "activate" + l,
                    SCROLL: "scroll" + l,
                    LOAD_DATA_API: "load" + l + h
                },
                _ = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                g = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                p = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                m = function() {
                    function h(e, i) {
                        var o = this;
                        n(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(f.SCROLL, function(t) {
                            return o._process(t)
                        }), this.refresh(), this._process()
                    }
                    return h.prototype.refresh = function() {
                        var e = this,
                            n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
                            i = "auto" === this._config.method ? n : this._config.method,
                            o = i === p.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        var s = t.makeArray(t(this._selector));
                        s.map(function(e) {
                            var n = void 0,
                                s = r.getSelectorFromElement(e);
                            return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, h.prototype.dispose = function() {
                        t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, h.prototype._getConfig = function(n) {
                        if (n = t.extend({}, u, n), "string" != typeof n.target) {
                            var i = t(n.target).attr("id");
                            i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return r.typeCheckConfig(e, n, d), n
                    }, h.prototype._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, h.prototype._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, h.prototype._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                    }, h.prototype._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            return void(this._activeTarget !== i && this._activate(i))
                        }
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
                            r && this._activate(this._targets[o])
                        }
                    }, h.prototype._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(t) {
                            return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
                        });
                        var i = t(n.join(","));
                        i.hasClass(_.DROPDOWN_ITEM) ? (i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i.addClass(_.ACTIVE)) : i.parents(g.LI).find("> " + g.NAV_LINKS).addClass(_.ACTIVE), t(this._scrollElement).trigger(f.ACTIVATE, {
                            relatedTarget: e
                        })
                    }, h.prototype._clear = function() {
                        t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(a),
                                o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                            if (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e) {
                                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }]), h
                }();
            return t(window).on(f.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(g.DATA_SPY)), n = e.length; n--;) {
                    var i = t(e[n]);
                    m._jQueryInterface.call(i, i.data())
                }
            }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                return t.fn[e] = c, m._jQueryInterface
            }, m
        }(jQuery), function(t) {
            var e = "tab",
                i = "4.0.0-alpha.6",
                s = "bs.tab",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 150,
                u = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                d = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                },
                f = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                _ = function() {
                    function e(t) {
                        n(this, e), this._element = t
                    }
                    return e.prototype.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(d.ACTIVE) || t(this._element).hasClass(d.DISABLED))) {
                            var n = void 0,
                                i = void 0,
                                o = t(this._element).closest(f.LIST)[0],
                                s = r.getSelectorFromElement(this._element);
                            o && (i = t.makeArray(t(o).find(f.ACTIVE)), i = i[i.length - 1]);
                            var a = t.Event(u.HIDE, {
                                    relatedTarget: this._element
                                }),
                                l = t.Event(u.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                s && (n = t(s)[0]), this._activate(this._element, o);
                                var h = function() {
                                    var n = t.Event(u.HIDDEN, {
                                            relatedTarget: e._element
                                        }),
                                        o = t.Event(u.SHOWN, {
                                            relatedTarget: i
                                        });
                                    t(i).trigger(n), t(e._element).trigger(o)
                                };
                                n ? this._activate(n, n.parentNode, h) : h()
                            }
                        }
                    }, e.prototype.dispose = function() {
                        t.removeClass(this._element, s), this._element = null
                    }, e.prototype._activate = function(e, n, i) {
                        var o = this,
                            s = t(n).find(f.ACTIVE_CHILD)[0],
                            a = i && r.supportsTransitionEnd() && (s && t(s).hasClass(d.FADE) || Boolean(t(n).find(f.FADE_CHILD)[0])),
                            l = function() {
                                return o._transitionComplete(e, s, a, i)
                            };
                        s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(c) : l(), s && t(s).removeClass(d.SHOW)
                    }, e.prototype._transitionComplete = function(e, n, i, o) {
                        if (n) {
                            t(n).removeClass(d.ACTIVE);
                            var s = t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];
                            s && t(s).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1)
                        }
                        if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(d.SHOW)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
                            var a = t(e).closest(f.DROPDOWN)[0];
                            a && t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0)
                        }
                        o && o()
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this),
                                o = i.data(s);
                            if (o || (o = new e(this), i.data(s, o)), "string" == typeof n) {
                                if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
                                o[n]()
                            }
                        })
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(e) {
                e.preventDefault(), _._jQueryInterface.call(t(this), "show")
            }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
                return t.fn[e] = h, _._jQueryInterface
            }, _
        }(jQuery), function(t) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var e = "tooltip",
                s = "4.0.0-alpha.6",
                a = "bs.tooltip",
                l = "." + a,
                h = t.fn[e],
                c = 150,
                u = "bs-tether",
                d = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: [],
                    container: !1
                },
                f = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array",
                    container: "(string|element|boolean)"
                },
                _ = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                g = {
                    SHOW: "show",
                    OUT: "out"
                },
                p = {
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    INSERTED: "inserted" + l,
                    CLICK: "click" + l,
                    FOCUSIN: "focusin" + l,
                    FOCUSOUT: "focusout" + l,
                    MOUSEENTER: "mouseenter" + l,
                    MOUSELEAVE: "mouseleave" + l
                },
                m = {
                    FADE: "fade",
                    SHOW: "show"
                },
                E = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                v = {
                    element: !1,
                    enabled: !1
                },
                T = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                I = function() {
                    function h(t, e) {
                        n(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    return h.prototype.enable = function() {
                        this._isEnabled = !0
                    }, h.prototype.disable = function() {
                        this._isEnabled = !1
                    }, h.prototype.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, h.prototype.toggle = function(e) {
                        if (e) {
                            var n = this.constructor.DATA_KEY,
                                i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass(m.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, h.prototype.dispose = function() {
                        clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, h.prototype.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var n = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            t(this.element).trigger(n);
                            var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !i) return;
                            var o = this.getTipElement(),
                                s = r.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);
                            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                l = this._getAttachment(a),
                                c = this.config.container === !1 ? document.body : t(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: l,
                                element: o,
                                target: this.element,
                                classes: v,
                                classPrefix: u,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), r.reflow(o), this._tether.position(), t(o).addClass(m.SHOW);
                            var d = function() {
                                var n = e._hoverState;
                                e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === g.OUT && e._leave(null, e)
                            };
                            if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(h._TRANSITION_DURATION);
                            d()
                        }
                    }, h.prototype.hide = function(e) {
                        var n = this,
                            i = this.getTipElement(),
                            o = t.Event(this.constructor.Event.HIDE);
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        var s = function() {
                            n._hoverState !== g.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e()
                        };
                        t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = !1, this._activeTrigger[T.FOCUS] = !1, this._activeTrigger[T.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(c)) : s(), this._hoverState = "")
                    }, h.prototype.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, h.prototype.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0]
                    }, h.prototype.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether()
                    }, h.prototype.setElementContent = function(e, n) {
                        var o = this.config.html;
                        "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()): e[o ? "html" : "text"](n)
                    }, h.prototype.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, h.prototype.cleanupTether = function() {
                        this._tether && this._tether.destroy()
                    }, h.prototype._getAttachment = function(t) {
                        return _[t.toUpperCase()]
                    }, h.prototype._setListeners = function() {
                        var e = this,
                            n = this.config.trigger.split(" ");
                        n.forEach(function(n) {
                            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                            else if (n !== T.MANUAL) {
                                var i = n === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    o = n === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(i, e.config.selector, function(t) {
                                    return e._enter(t)
                                }).on(o, e.config.selector, function(t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = t.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, h.prototype._fixTitle = function() {
                        var t = i(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, h.prototype._enter = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(n.getTipElement()).hasClass(m.SHOW) || n._hoverState === g.SHOW ? void(n._hoverState = g.SHOW) : (clearTimeout(n._timeout), n._hoverState = g.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                            n._hoverState === g.SHOW && n.show()
                        }, n.config.delay.show)) : void n.show())
                    }, h.prototype._leave = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = g.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function() {
                            n._hoverState === g.OUT && n.hide()
                        }, n.config.delay.hide)) : void n.hide()
                    }, h.prototype._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, h.prototype._getConfig = function(n) {
                        return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, h.prototype._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(a),
                                o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return f
                        }
                    }]), h
                }();
            return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function() {
                return t.fn[e] = h, I._jQueryInterface
            }, I
        }(jQuery));
    (function(r) {
        var a = "popover",
            l = "4.0.0-alpha.6",
            h = "bs.popover",
            c = "." + h,
            u = r.fn[a],
            d = r.extend({}, s.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            f = r.extend({}, s.DefaultType, {
                content: "(string|element|function)"
            }),
            _ = {
                FADE: "fade",
                SHOW: "show"
            },
            g = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            },
            p = {
                HIDE: "hide" + c,
                HIDDEN: "hidden" + c,
                SHOW: "show" + c,
                SHOWN: "shown" + c,
                INSERTED: "inserted" + c,
                CLICK: "click" + c,
                FOCUSIN: "focusin" + c,
                FOCUSOUT: "focusout" + c,
                MOUSEENTER: "mouseenter" + c,
                MOUSELEAVE: "mouseleave" + c
            },
            m = function(s) {
                function u() {
                    return n(this, u), t(this, s.apply(this, arguments))
                }
                return e(u, s), u.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, u.prototype.getTipElement = function() {
                    return this.tip = this.tip || r(this.config.template)[0]
                }, u.prototype.setContent = function() {
                    var t = r(this.getTipElement());
                    this.setElementContent(t.find(g.TITLE), this.getTitle()), this.setElementContent(t.find(g.CONTENT), this._getContent()), t.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether()
                }, u.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, u._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = r(this).data(h),
                            n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data(h, e)), "string" == typeof t)) {
                            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, o(u, null, [{
                    key: "VERSION",
                    get: function() {
                        return l
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return d
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return h
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return c
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return f
                    }
                }]), u
            }(s);
        return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function() {
            return r.fn[a] = u, m._jQueryInterface
        }, m
    })(jQuery)
}();
// SmoothScroll for websites v1.4.6 (Balazs Galambosi)
! function() {
    function e() {
        z.keyboardSupport && m("keydown", a)
    }

    function t() {
        if (!Y && document.body) {
            Y = !0;
            var t = document.body,
                o = document.documentElement,
                n = window.innerHeight,
                r = t.scrollHeight;
            if (A = document.compatMode.indexOf("CSS") >= 0 ? o : t, D = t, e(), top != self) O = !0;
            else if (te && r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
                var a = document.createElement("div");
                a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + A.scrollHeight + "px", document.body.appendChild(a);
                var i;
                T = function() {
                    i || (i = setTimeout(function() {
                        L || (a.style.height = "0", a.style.height = A.scrollHeight + "px", i = null)
                    }, 500))
                }, setTimeout(T, 10), m("resize", T);
                var l = {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                };
                if (M = new W(T), M.observe(t, l), A.offsetHeight <= n) {
                    var c = document.createElement("div");
                    c.style.clear = "both", t.appendChild(c)
                }
            }
            z.fixedBackground || L || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
        }
    }

    function o() {
        M && M.disconnect(), w(I, r), w("mousedown", i), w("keydown", a), w("resize", T), w("load", t)
    }

    function n(e, t, o) {
        if (p(t, o), 1 != z.accelerationMax) {
            var n = Date.now(),
                r = n - q;
            if (r < z.accelerationDelta) {
                var a = (1 + 50 / r) / 2;
                a > 1 && (a = Math.min(a, z.accelerationMax), t *= a, o *= a)
            }
            q = Date.now()
        }
        if (R.push({
                x: t,
                y: o,
                lastX: t < 0 ? .99 : -.99,
                lastY: o < 0 ? .99 : -.99,
                start: Date.now()
            }), !j) {
            var i = e === document.body,
                l = function(n) {
                    for (var r = Date.now(), a = 0, c = 0, u = 0; u < R.length; u++) {
                        var d = R[u],
                            s = r - d.start,
                            f = s >= z.animationTime,
                            m = f ? 1 : s / z.animationTime;
                        z.pulseAlgorithm && (m = x(m));
                        var w = d.x * m - d.lastX >> 0,
                            h = d.y * m - d.lastY >> 0;
                        a += w, c += h, d.lastX += w, d.lastY += h, f && (R.splice(u, 1), u--)
                    }
                    i ? window.scrollBy(a, c) : (a && (e.scrollLeft += a), c && (e.scrollTop += c)), t || o || (R = []), R.length ? _(l, e, 1e3 / z.frameRate + 1) : j = !1
                };
            _(l, e, 0), j = !0
        }
    }

    function r(e) {
        Y || t();
        var o = e.target;
        if (e.defaultPrevented || e.ctrlKey) return !0;
        if (h(D, "embed") || h(o, "embed") && /\.pdf/i.test(o.src) || h(D, "object") || o.shadowRoot) return !0;
        var r = -e.wheelDeltaX || e.deltaX || 0,
            a = -e.wheelDeltaY || e.deltaY || 0;
        N && (e.wheelDeltaX && y(e.wheelDeltaX, 120) && (r = -120 * (e.wheelDeltaX / Math.abs(e.wheelDeltaX))), e.wheelDeltaY && y(e.wheelDeltaY, 120) && (a = -120 * (e.wheelDeltaY / Math.abs(e.wheelDeltaY)))), r || a || (a = -e.wheelDelta || 0), 1 === e.deltaMode && (r *= 40, a *= 40);
        var i = u(o);
        return i ? !!v(a) || (Math.abs(r) > 1.2 && (r *= z.stepSize / 120), Math.abs(a) > 1.2 && (a *= z.stepSize / 120), n(i, r, a), e.preventDefault(), void l()) : !O || !J || (Object.defineProperty(e, "target", {
            value: window.frameElement
        }), parent.wheel(e))
    }

    function a(e) {
        var t = e.target,
            o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== K.spacebar;
        document.body.contains(D) || (D = document.activeElement);
        var r = /^(textarea|select|embed|object)$/i,
            a = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (e.defaultPrevented || r.test(t.nodeName) || h(t, "input") && !a.test(t.type) || h(D, "video") || g(e) || t.isContentEditable || o) return !0;
        if ((h(t, "button") || h(t, "input") && a.test(t.type)) && e.keyCode === K.spacebar) return !0;
        if (h(t, "input") && "radio" == t.type && P[e.keyCode]) return !0;
        var i, c = 0,
            d = 0,
            s = u(D);
        if (!s) return !O || !J || parent.keydown(e);
        var f = s.clientHeight;
        switch (s == document.body && (f = window.innerHeight), e.keyCode) {
            case K.up:
                d = -z.arrowScroll;
                break;
            case K.down:
                d = z.arrowScroll;
                break;
            case K.spacebar:
                i = e.shiftKey ? 1 : -1, d = -i * f * .9;
                break;
            case K.pageup:
                d = .9 * -f;
                break;
            case K.pagedown:
                d = .9 * f;
                break;
            case K.home:
                d = -s.scrollTop;
                break;
            case K.end:
                var m = s.scrollHeight - s.scrollTop,
                    w = m - f;
                d = w > 0 ? w + 10 : 0;
                break;
            case K.left:
                c = -z.arrowScroll;
                break;
            case K.right:
                c = z.arrowScroll;
                break;
            default:
                return !0
        }
        n(s, c, d), e.preventDefault(), l()
    }

    function i(e) {
        D = e.target
    }

    function l() {
        clearTimeout(E), E = setInterval(function() {
            F = {}
        }, 1e3)
    }

    function c(e, t) {
        for (var o = e.length; o--;) F[V(e[o])] = t;
        return t
    }

    function u(e) {
        var t = [],
            o = document.body,
            n = A.scrollHeight;
        do {
            var r = F[V(e)];
            if (r) return c(t, r);
            if (t.push(e), n === e.scrollHeight) {
                var a = s(A) && s(o),
                    i = a || f(A);
                if (O && d(A) || !O && i) return c(t, $())
            } else if (d(e) && f(e)) return c(t, e)
        } while (e = e.parentElement)
    }

    function d(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }

    function s(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "hidden" !== t
    }

    function f(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }

    function m(e, t) {
        window.addEventListener(e, t, !1)
    }

    function w(e, t) {
        window.removeEventListener(e, t, !1)
    }

    function h(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }

    function p(e, t) {
        e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, X.x === e && X.y === t || (X.x = e, X.y = t, R = [], q = 0)
    }

    function v(e) {
        if (e) return B.length || (B = [e, e, e]), e = Math.abs(e), B.push(e), B.shift(), clearTimeout(C), C = setTimeout(function() {
            try {
                localStorage.SS_deltaBuffer = B.join(",")
            } catch (e) {}
        }, 1e3), !b(120) && !b(100)
    }

    function y(e, t) {
        return Math.floor(e / t) == e / t
    }

    function b(e) {
        return y(B[0], e) && y(B[1], e) && y(B[2], e)
    }

    function g(e) {
        var t = e.target,
            o = !1;
        if (document.URL.indexOf("www.youtube.com/watch") != -1)
            do
                if (o = t.classList && t.classList.contains("html5-video-controls")) break;
        while (t = t.parentNode);
        return o
    }

    function S(e) {
        var t, o, n;
        return e *= z.pulseScale, e < 1 ? t = e - (1 - Math.exp(-e)) : (o = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = o + n * (1 - o)), t * z.pulseNormalize
    }

    function x(e) {
        return e >= 1 ? 1 : e <= 0 ? 0 : (1 == z.pulseNormalize && (z.pulseNormalize /= S(1)), S(e))
    }

    function k(e) {
        for (var t in e) H.hasOwnProperty(t) && (z[t] = e[t])
    }
    var D, M, T, E, C, H = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            fixedBackground: !0,
            excluded: ""
        },
        z = H,
        L = !1,
        O = !1,
        X = {
            x: 0,
            y: 0
        },
        Y = !1,
        A = document.documentElement,
        B = [],
        N = /^Mac/.test(navigator.platform),
        K = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        P = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        },
        R = [],
        j = !1,
        q = Date.now(),
        V = function() {
            var e = 0;
            return function(t) {
                return t.uniqueID || (t.uniqueID = e++)
            }
        }(),
        F = {};
    if (window.localStorage && localStorage.SS_deltaBuffer) try {
        B = localStorage.SS_deltaBuffer.split(",")
    } catch (e) {}
    var I, _ = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, o) {
                window.setTimeout(e, o || 1e3 / 60)
            }
        }(),
        W = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        $ = function() {
            var e;
            return function() {
                if (!e) {
                    var t = document.createElement("div");
                    t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
                    var o = document.body.scrollTop;
                    document.documentElement.scrollTop;
                    window.scrollBy(0, 3), e = document.body.scrollTop != o ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
                }
                return e
            }
        }(),
        U = window.navigator.userAgent,
        G = /Edge/.test(U),
        J = /chrome/i.test(U) && !G,
        Q = /safari/i.test(U) && !G,
        Z = /mobile/i.test(U),
        ee = /Windows NT 6.1/i.test(U) && /rv:11/i.test(U),
        te = Q && (/Version\/8/i.test(U) || /Version\/9/i.test(U)),
        oe = (J || Q || ee) && !Z;
    "onwheel" in document.createElement("div") ? I = "wheel" : "onmousewheel" in document.createElement("div") && (I = "mousewheel"), I && oe && (m(I, r), m("mousedown", i), m("load", t)), k.destroy = o, window.SmoothScrollOptions && k(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
        return k
    }) : "object" == typeof exports ? module.exports = k : window.SmoothScroll = k
}();

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
! function(t, i, e, s) {
    function o(i, e) {
        var h = this;
        "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        this.$mirror = t("<div />").prependTo("body");
        var a = this.$element.find(">.parallax-slider"),
            n = !1;
        0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }), this.$slider.addClass("parallax-slider").one("load", function() {
            h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender()
        }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load")
    }

    function h(s) {
        return this.each(function() {
            var h = t(this),
                r = "object" == typeof s && s;
            this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]())
        })
    }! function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function(e) {
            var s = (new Date).getTime(),
                o = Math.max(0, 16 - (s - t)),
                h = i.setTimeout(function() {
                    e(s + o)
                }, o);
            return t = s + o, h
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), t.extend(o.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t = o.winHeight,
                i = o.docHeight,
                e = Math.min(this.boxOffsetTop, i - t),
                s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
                h = this.boxHeight + (e - s) * (1 - this.speed) | 0,
                r = (this.boxOffsetTop - e) * (1 - this.speed) | 0;
            if (h * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r;
                var a = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a)
            } else {
                this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
                var a = this.imageHeight - h;
                this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a)
            }
        },
        render: function() {
            var t = o.scrollTop,
                i = o.scrollLeft,
                e = this.overScrollFix ? o.overScroll : 0,
                s = t + o.winHeight;
            this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - e,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            }), this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }), t.extend(o, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            if (!this.isReady) {
                var s = t(e),
                    h = t(i),
                    r = function() {
                        o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width()
                    },
                    a = function() {
                        var t = h.scrollTop(),
                            i = o.docHeight - o.winHeight,
                            e = o.docWidth - o.winWidth;
                        o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0))
                    };
                h.on("resize.px.parallax load.px.parallax", function() {
                    r(), o.isFresh = !1, o.requestRender()
                }).on("scroll.px.parallax load.px.parallax", function() {
                    a(), o.requestRender()
                }), r(), a(), this.isReady = !0
            }
        },
        configure: function(i) {
            "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i))
        },
        refresh: function() {
            t.each(this.sliders, function() {
                this.refresh()
            }), this.isFresh = !0
        },
        render: function() {
            this.isFresh || this.refresh(), t.each(this.sliders, function() {
                this.render()
            })
        },
        requestRender: function() {
            var t = this;
            this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function() {
                t.render(), t.isBusy = !1
            }))
        },
        destroy: function(e) {
            var s, h = t(e).data("px.parallax");
            for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) this.sliders[s] == h && this.sliders.splice(s, 1);
            t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1)
        }
    });
    var r = t.fn.parallax;
    t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function() {
        return t.fn.parallax = r, this
    }, t(e).on("ready.px.parallax.data-api", function() {
        t('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document);
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var i = o[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "dist/", t(0)
    }([function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                }
                return e
            },
            a = o(1),
            r = (n(a), o(5)),
            c = n(r),
            u = o(6),
            s = n(u),
            d = o(7),
            f = n(d),
            l = o(8),
            m = n(l),
            p = o(9),
            b = n(p),
            v = o(10),
            g = n(v),
            y = o(13),
            w = n(y),
            h = [],
            k = !1,
            x = document.all && !window.atob,
            j = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded"
            },
            O = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                return e && (k = !0), k ? (h = (0, g["default"])(h, j), (0, b["default"])(h, j.once), h) : void 0
            },
            _ = function() {
                h = (0, w["default"])(), O()
            },
            z = function() {
                h.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            },
            A = function(e) {
                return e === !0 || "mobile" === e && m["default"].mobile() || "phone" === e && m["default"].phone() || "tablet" === e && m["default"].tablet() || "function" == typeof e && e() === !0
            },
            E = function(e) {
                return j = i(j, e), h = (0, w["default"])(), A(j.disable) || x ? z() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                    O(!0)
                }) : document.addEventListener(j.startEvent, function() {
                    O(!0)
                }), window.addEventListener("resize", (0, s["default"])(O, 50, !0)), window.addEventListener("orientationchange", (0, s["default"])(O, 50, !0)), window.addEventListener("scroll", (0, c["default"])(function() {
                    (0, b["default"])(h, j.once)
                }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, s["default"])(_, 50, !0)
                }), (0, f["default"])("[data-aos]", _), h)
            };
        e.exports = {
            init: E,
            refresh: O,
            refreshHard: _
        }
    }, function(e, t) {}, , , , function(e, t, o) {
        "use strict";

        function n(e, t, o) {
            var n = !0,
                a = !0;
            if ("function" != typeof e) throw new TypeError(c);
            return i(o) && (n = "leading" in o ? !!o.leading : n, a = "trailing" in o ? !!o.trailing : a), r(e, t, {
                leading: n,
                maxWait: t,
                trailing: a
            })
        }

        function i(e) {
            var t = "undefined" == typeof e ? "undefined" : a(e);
            return !!e && ("object" == t || "function" == t)
        }
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            r = o(6),
            c = "Expected a function";
        e.exports = n
    }, function(e, t) {
        "use strict";

        function o(e, t, o) {
            function n(t) {
                var o = b,
                    n = v;
                return b = v = void 0, O = t, y = e.apply(n, o)
            }

            function a(e) {
                return O = e, w = setTimeout(d, t), _ ? n(e) : y
            }

            function r(e) {
                var o = e - h,
                    n = e - O,
                    i = t - o;
                return z ? x(i, g - n) : i
            }

            function u(e) {
                var o = e - h,
                    n = e - O;
                return !h || o >= t || 0 > o || z && n >= g
            }

            function d() {
                var e = j();
                return u(e) ? f(e) : void(w = setTimeout(d, r(e)))
            }

            function f(e) {
                return clearTimeout(w), w = void 0, A && b ? n(e) : (b = v = void 0, y)
            }

            function l() {
                void 0 !== w && clearTimeout(w), h = O = 0, b = v = w = void 0
            }

            function m() {
                return void 0 === w ? y : f(j())
            }

            function p() {
                var e = j(),
                    o = u(e);
                if (b = arguments, v = this, h = e, o) {
                    if (void 0 === w) return a(h);
                    if (z) return clearTimeout(w), w = setTimeout(d, t), n(h)
                }
                return void 0 === w && (w = setTimeout(d, t)), y
            }
            var b, v, g, y, w, h = 0,
                O = 0,
                _ = !1,
                z = !1,
                A = !0;
            if ("function" != typeof e) throw new TypeError(s);
            return t = c(t) || 0, i(o) && (_ = !!o.leading, z = "maxWait" in o, g = z ? k(c(o.maxWait) || 0, t) : g, A = "trailing" in o ? !!o.trailing : A), p.cancel = l, p.flush = m, p
        }

        function n(e) {
            var t = i(e) ? h.call(e) : "";
            return t == f || t == l
        }

        function i(e) {
            var t = "undefined" == typeof e ? "undefined" : u(e);
            return !!e && ("object" == t || "function" == t)
        }

        function a(e) {
            return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
        }

        function r(e) {
            return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || a(e) && h.call(e) == m
        }

        function c(e) {
            if ("number" == typeof e) return e;
            if (r(e)) return d;
            if (i(e)) {
                var t = n(e.valueOf) ? e.valueOf() : e;
                e = i(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(p, "");
            var o = v.test(e);
            return o || g.test(e) ? y(e.slice(2), o ? 2 : 8) : b.test(e) ? d : +e
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            s = "Expected a function",
            d = NaN,
            f = "[object Function]",
            l = "[object GeneratorFunction]",
            m = "[object Symbol]",
            p = /^\s+|\s+$/g,
            b = /^[-+]0x[0-9a-f]+$/i,
            v = /^0b[01]+$/i,
            g = /^0o[0-7]+$/i,
            y = parseInt,
            w = Object.prototype,
            h = w.toString,
            k = Math.max,
            x = Math.min,
            j = Date.now;
        e.exports = o
    }, function(e, t) {
        "use strict";

        function o(e, t) {
            r.push({
                selector: e,
                fn: t
            }), !c && a && (c = new a(n), c.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })), n()
        }

        function n() {
            for (var e, t, o = 0, n = r.length; n > o; o++) {
                e = r[o], t = i.querySelectorAll(e.selector);
                for (var a, c = 0, u = t.length; u > c; c++) a = t[c], a.ready || (a.ready = !0, e.fn.call(a, a))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document,
            a = window.MutationObserver || window.WebKitMutationObserver,
            r = [],
            c = void 0;
        t["default"] = o
    }, function(e, t) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, o, n) {
                    return o && e(t.prototype, o), n && e(t, n), t
                }
            }(),
            i = function() {
                function e() {
                    o(this, e)
                }
                return n(e, [{
                    key: "phone",
                    value: function() {
                        var e = !1;
                        return function(t) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = !1;
                        return function(t) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t["default"] = new i
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e, t, o) {
                var n = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof n && ("false" === n || !o && "true" !== n) && e.node.classList.remove("aos-animate")
            },
            n = function(e, t) {
                var n = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach(function(e, a) {
                    o(e, i + n, t)
                })
            };
        t["default"] = n
    }, function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(11),
            a = n(i),
            r = function(e, t) {
                return e.forEach(function(e, o) {
                    e.node.classList.add("aos-init"), e.position = (0, a["default"])(e.node, t.offset)
                }), e
            };
        t["default"] = r
    }, function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(12),
            a = n(i),
            r = function(e, t) {
                var o = 0,
                    n = 0,
                    i = window.innerHeight,
                    r = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), o = (0, a["default"])(e).top, r.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        o += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        o += e.offsetHeight;
                        break;
                    case "top-center":
                        o += i / 2;
                        break;
                    case "bottom-center":
                        o += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        o += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        o += i;
                        break;
                    case "bottom-top":
                        o += e.offsetHeight + i;
                        break;
                    case "center-top":
                        o += e.offsetHeight / 2 + i
                }
                return r.anchorPlacement || r.offset || isNaN(t) || (n = t), o + n
            };
        t["default"] = r
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
            for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: o,
                left: t
            }
        };
        t["default"] = o
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
            e = e || document.querySelectorAll("[data-aos]");
            var t = [];
            return [].forEach.call(e, function(e, o) {
                t.push({
                    node: e
                })
            }), t
        };
        t["default"] = o
    }])
});
//# sourceMappingURL=aos.js.map
/*! Lity - v2.2.2 - 2016-12-14
 * http://sorgalla.com/lity/
 * Copyright (c) 2015-2016 Jan Sorgalla; Licensed MIT */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(c) {
        return b(a, c)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = b(a, require("jquery")) : a.lity = b(a, a.jQuery || a.Zepto)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";

    function c(a) {
        var b = B();
        return N && a.length ? (a.one(N, b.resolve), setTimeout(b.resolve, 500)) : b.resolve(), b.promise()
    }

    function d(a, c, d) {
        if (1 === arguments.length) return b.extend({}, a);
        if ("string" == typeof c) {
            if ("undefined" == typeof d) return "undefined" == typeof a[c] ? null : a[c];
            a[c] = d
        } else b.extend(a, c);
        return this
    }

    function e(a) {
        for (var b, c = decodeURI(a.split("#")[0]).split("&"), d = {}, e = 0, f = c.length; e < f; e++) c[e] && (b = c[e].split("="), d[b[0]] = b[1]);
        return d
    }

    function f(a, c) {
        return a + (a.indexOf("?") > -1 ? "&" : "?") + b.param(c)
    }

    function g(a, b) {
        var c = a.indexOf("#");
        return -1 === c ? b : (c > 0 && (a = a.substr(c)), b + a)
    }

    function h(a) {
        return b('<span class="lity-error"/>').append(a)
    }

    function i(a, c) {
        var d = c.opener() && c.opener().data("lity-desc") || "Image with no description",
            e = b('<img src="' + a + '" alt="' + d + '"/>'),
            f = B(),
            g = function() {
                f.reject(h("Failed loading image"))
            };
        return e.on("load", function() {
            return 0 === this.naturalWidth ? g() : void f.resolve(e)
        }).on("error", g), f.promise()
    }

    function j(a, c) {
        var d, e, f;
        try {
            d = b(a)
        } catch (a) {
            return !1
        }
        return !!d.length && (e = b('<i style="display:none !important"/>'), f = d.hasClass("lity-hide"), c.element().one("lity:remove", function() {
            e.before(d).remove(), f && !d.closest(".lity-content").length && d.addClass("lity-hide")
        }), d.removeClass("lity-hide").after(e))
    }

    function k(a) {
        var c = J.exec(a);
        return !!c && o(g(a, f("https://www.youtube" + (c[2] || "") + ".com/embed/" + c[4], b.extend({
            autoplay: 1
        }, e(c[5] || "")))))
    }

    function l(a) {
        var c = K.exec(a);
        return !!c && o(g(a, f("https://player.vimeo.com/video/" + c[3], b.extend({
            autoplay: 1
        }, e(c[4] || "")))))
    }

    function m(a) {
        var c = M.exec(a);
        return !!c && (0 !== a.indexOf("http") && (a = "https:" + a), o(g(a, f("https://www.facebook.com/plugins/video.php?href=" + a, b.extend({
            autoplay: 1
        }, e(c[4] || ""))))))
    }

    function n(a) {
        var b = L.exec(a);
        return !!b && o(g(a, f("https://www.google." + b[3] + "/maps?" + b[6], {
            output: b[6].indexOf("layer=c") > 0 ? "svembed" : "embed"
        })))
    }

    function o(a) {
        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + a + '"/></div>'
    }

    function p() {
        return z.documentElement.clientHeight ? z.documentElement.clientHeight : Math.round(A.height())
    }

    function q(a) {
        var b = v();
        b && (27 === a.keyCode && b.close(), 9 === a.keyCode && r(a, b))
    }

    function r(a, b) {
        var c = b.element().find(G),
            d = c.index(z.activeElement);
        a.shiftKey && d <= 0 ? (c.get(c.length - 1).focus(), a.preventDefault()) : a.shiftKey || d !== c.length - 1 || (c.get(0).focus(), a.preventDefault())
    }

    function s() {
        b.each(D, function(a, b) {
            b.resize()
        })
    }

    function t(a) {
        1 === D.unshift(a) && (C.addClass("lity-active"), A.on({
            resize: s,
            keydown: q
        })), b("body > *").not(a.element()).addClass("lity-hidden").each(function() {
            var a = b(this);
            void 0 === a.data(F) && a.data(F, a.attr(E) || null)
        }).attr(E, "true")
    }

    function u(a) {
        var c;
        a.element().attr(E, "true"), 1 === D.length && (C.removeClass("lity-active"), A.off({
            resize: s,
            keydown: q
        })), D = b.grep(D, function(b) {
            return a !== b
        }), c = D.length ? D[0].element() : b(".lity-hidden"), c.removeClass("lity-hidden").each(function() {
            var a = b(this),
                c = a.data(F);
            c ? a.attr(E, c) : a.removeAttr(E), a.removeData(F)
        })
    }

    function v() {
        return 0 === D.length ? null : D[0]
    }

    function w(a, c, d, e) {
        var f, g = "inline",
            h = b.extend({}, d);
        return e && h[e] ? (f = h[e](a, c), g = e) : (b.each(["inline", "iframe"], function(a, b) {
            delete h[b], h[b] = d[b]
        }), b.each(h, function(b, d) {
            return !d || (!(!d.test || d.test(a, c)) || (f = d(a, c), !1 !== f ? (g = b, !1) : void 0))
        })), {
            handler: g,
            content: f || ""
        }
    }

    function x(a, e, f, g) {
        function h(a) {
            k = b(a).css("max-height", p() + "px"), j.find(".lity-loader").each(function() {
                var a = b(this);
                c(a).always(function() {
                    a.remove()
                })
            }), j.removeClass("lity-loading").find(".lity-content").empty().append(k), m = !0, k.trigger("lity:ready", [l])
        }
        var i, j, k, l = this,
            m = !1,
            n = !1;
        e = b.extend({}, H, e), j = b(e.template), l.element = function() {
            return j
        }, l.opener = function() {
            return f
        }, l.options = b.proxy(d, l, e), l.handlers = b.proxy(d, l, e.handlers), l.resize = function() {
            m && !n && k.css("max-height", p() + "px").trigger("lity:resize", [l])
        }, l.close = function() {
            if (m && !n) {
                n = !0, u(l);
                var a = B();
                if (g && (z.activeElement === j[0] || b.contains(j[0], z.activeElement))) try {
                    g.focus()
                } catch (a) {}
                return k.trigger("lity:close", [l]), j.removeClass("lity-opened").addClass("lity-closed"), c(k.add(j)).always(function() {
                    k.trigger("lity:remove", [l]), j.remove(), j = void 0, a.resolve()
                }), a.promise()
            }
        }, i = w(a, l, e.handlers, e.handler), j.attr(E, "false").addClass("lity-loading lity-opened lity-" + i.handler).appendTo("body").focus().on("click", "[data-lity-close]", function(a) {
            b(a.target).is("[data-lity-close]") && l.close()
        }).trigger("lity:open", [l]), t(l), b.when(i.content).always(h)
    }

    function y(a, c, d) {
        a.preventDefault ? (a.preventDefault(), d = b(this), a = d.data("lity-target") || d.attr("href") || d.attr("src")) : d = b(d);
        var e = new x(a, b.extend({}, d.data("lity-options") || d.data("lity"), c), d, z.activeElement);
        if (!a.preventDefault) return e
    }
    var z = a.document,
        A = b(a),
        B = b.Deferred,
        C = b("html"),
        D = [],
        E = "aria-hidden",
        F = "lity-" + E,
        G = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
        H = {
            handler: null,
            handlers: {
                image: i,
                inline: j,
                youtube: k,
                vimeo: l,
                googlemaps: n,
                facebookvideo: m,
                iframe: o
            },
            template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
        },
        I = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
        J = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
        K = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
        L = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
        M = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,
        N = function() {
            var a = z.createElement("div"),
                b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c]) return b[c];
            return !1
        }();
    return i.test = function(a) {
        return I.test(a)
    }, y.version = "2.2.2", y.options = b.proxy(d, y, H), y.handlers = b.proxy(d, y, H.handlers), y.current = v, b(z).on("click.lity", "[data-lity]", y), y
});
/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: March 10, 2017
 */
! function() {
    "use strict";
    var e, a = function(t, s) {
        function r(e) {
            return Math.floor(e)
        }

        function i() {
            var e = x.params.autoplay,
                a = x.slides.eq(x.activeIndex);
            a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || x.params.autoplay), x.autoplayTimeoutId = setTimeout(function() {
                x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? s.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
            }, e)
        }

        function n(a, t) {
            var s = e(a.target);
            if (!s.is(t))
                if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) {
                var r;
                return s.parents().each(function(e, a) {
                    a === t && (r = t)
                }), r ? t : void 0
            }
            if (0 !== s.length) return s[0]
        }

        function o(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                s = new t(function(e) {
                    e.forEach(function(e) {
                        x.onResize(!0), x.emit("onObserverUpdate", x, e)
                    })
                });
            s.observe(e, {
                attributes: void 0 === a.attributes || a.attributes,
                childList: void 0 === a.childList || a.childList,
                characterData: void 0 === a.characterData || a.characterData
            }), x.observers.push(s)
        }

        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === a || !x.isHorizontal() && 40 === a)) return !1;
            if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === a || !x.isHorizontal() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;
                    var s = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        r = window.innerWidth,
                        i = window.innerHeight,
                        n = x.container.offset();
                    x.rtl && (n.left = n.left - x.container[0].scrollLeft);
                    for (var o = [
                            [n.left, n.top],
                            [n.left + x.width, n.top],
                            [n.left, n.top + x.height],
                            [n.left + x.width, n.top + x.height]
                        ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + r && p[1] >= s.top && p[1] <= s.top + i && (t = !0)
                    }
                    if (!t) return
                }
                x.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !x.rtl || 37 === a && x.rtl) && x.slideNext(), (37 === a && !x.rtl || 39 === a && x.rtl) && x.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && x.slideNext(), 38 === a && x.slidePrev()), x.emit("onKeyPress", x, a)
            }
        }

        function p(e) {
            var a = 0,
                t = 0,
                s = 0,
                r = 0;
            return "detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = t, t = 0), s = 10 * a, r = 10 * t, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || r) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, r *= 40) : (s *= 800, r *= 800)), s && !a && (a = s < 1 ? -1 : 1), r && !t && (t = r < 1 ? -1 : 1), {
                spinX: a,
                spinY: t,
                pixelX: s,
                pixelY: r
            }
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = 0,
                t = x.rtl ? -1 : 1,
                s = p(e);
            if (x.params.mousewheelForceToAxis)
                if (x.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;
                    a = s.pixelX * t
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;
                    a = s.pixelY
                } else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
            if (0 !== a) {
                if (x.params.mousewheelInvert && (a = -a), x.params.freeMode) {
                    var r = x.getWrapperTranslate() + a * x.params.mousewheelSensitivity,
                        i = x.isBeginning,
                        n = x.isEnd;
                    if (r >= x.minTranslate() && (r = x.minTranslate()), r <= x.maxTranslate() && (r = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(r), x.updateProgress(), x.updateActiveIndex(), (!i && x.isBeginning || !n && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function() {
                            x.slideReset()
                        }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === r || r === x.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (x.isEnd && !x.params.loop || x.animating) {
                                if (x.params.mousewheelReleaseOnEdges) return !0
                            } else x.slideNext(), x.emit("onScroll", x, e);
                    else if (x.isBeginning && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges) return !0
                    } else x.slidePrev(), x.emit("onScroll", x, e);
                    x.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function m(a, t) {
            a = e(a);
            var s, r, i, n = x.rtl ? -1 : 1;
            s = a.attr("data-swiper-parallax") || "0", r = a.attr("data-swiper-parallax-x"), i = a.attr("data-swiper-parallax-y"), r || i ? (r = r || "0", i = i || "0") : x.isHorizontal() ? (r = s, i = "0") : (i = s, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t * n + "%" : r * t * n + "px", i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", a.transform("translate3d(" + r + ", " + i + ",0px)")
        }

        function u(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof a)) return new a(t, s);
        var c = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            g = s && s.virtualTranslate;
        s = s || {};
        var h = {};
        for (var v in s)
            if ("object" != typeof s[v] || null === s[v] || (s[v].nodeType || s[v] === window || s[v] === document || "undefined" != typeof Dom7 && s[v] instanceof Dom7 || "undefined" != typeof jQuery && s[v] instanceof jQuery)) h[v] = s[v];
            else {
                h[v] = {};
                for (var f in s[v]) h[v][f] = s[v][f]
            }
        for (var w in c)
            if (void 0 === s[w]) s[w] = c[w];
            else if ("object" == typeof s[w])
            for (var y in c[w]) void 0 === s[w][y] && (s[w][y] = c[w][y]);
        var x = this;
        if (x.params = s, x.originalParams = h, x.classNames = [], void 0 !== e && "undefined" != typeof Dom7 && (e = Dom7), (void 0 !== e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (x.$ = e, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function() {
                if (!x.params.breakpoints) return !1;
                var e, a = !1,
                    t = [];
                for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && t.push(e);
                t.sort(function(e, a) {
                    return parseInt(e, 10) > parseInt(a, 10)
                });
                for (var s = 0; s < t.length; s++)(e = t[s]) >= window.innerWidth && !a && (a = e);
                return a || "max"
            }, x.setBreakpoint = function() {
                var e = x.getActiveBreakpoint();
                if (e && x.currentBreakpoint !== e) {
                    var a = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                        t = x.params.loop && a.slidesPerView !== x.params.slidesPerView;
                    for (var s in a) x.params[s] = a[s];
                    x.currentBreakpoint = e, t && x.destroyLoop && x.reLoop(!0)
                }
            }, x.params.breakpoints && x.setBreakpoint(), x.container = e(t), 0 !== x.container.length)) {
            if (x.container.length > 1) {
                var T = [];
                return x.container.each(function() {
                    T.push(new a(this, s))
                }), T
            }
            x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push(x.params.containerModifierClass + x.params.direction), x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"), x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect), "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, void 0 === g && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = e(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function() {
                return "horizontal" === x.params.direction
            }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"), x.device.android && x.classNames.push(x.params.containerModifierClass + "android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function() {
                x.params.allowSwipeToNext = !1, x.params.allowSwipeToPrev === !1 && x.params.grabCursor && x.unsetGrabCursor()
            }, x.lockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !1, x.params.allowSwipeToNext === !1 && x.params.grabCursor && x.unsetGrabCursor()
            }, x.lockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1, x.params.grabCursor && x.unsetGrabCursor()
            }, x.unlockSwipeToNext = function() {
                x.params.allowSwipeToNext = !0, x.params.allowSwipeToPrev === !0 && x.params.grabCursor && x.setGrabCursor()
            }, x.unlockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !0, x.params.allowSwipeToNext === !0 && x.params.grabCursor && x.setGrabCursor()
            }, x.unlockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0, x.params.grabCursor && x.setGrabCursor()
            }, x.setGrabCursor = function(e) {
                x.container[0].style.cursor = "move", x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", x.container[0].style.cursor = e ? "grabbing" : "grab"
            }, x.unsetGrabCursor = function() {
                x.container[0].style.cursor = ""
            }, x.params.grabCursor && x.setGrabCursor(), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function(e, a, t, s, r, i) {
                function n() {
                    i && i()
                }
                var o;
                e.complete && r ? n() : a ? (o = new window.Image, o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n()
            }, x.preloadImages = function() {
                function e() {
                    void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                }
                x.imagesToLoad = x.container.find("img");
                for (var a = 0; a < x.imagesToLoad.length; a++) x.loadImage(x.imagesToLoad[a], x.imagesToLoad[a].currentSrc || x.imagesToLoad[a].getAttribute("src"), x.imagesToLoad[a].srcset || x.imagesToLoad[a].getAttribute("srcset"), x.imagesToLoad[a].sizes || x.imagesToLoad[a].getAttribute("sizes"), !0, e)
            }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function() {
                return void 0 === x.autoplayTimeoutId && (!!x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void i())))
            }, x.stopAutoplay = function(e) {
                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
            }, x.pauseAutoplay = function(e) {
                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, i()) : x.wrapper.transitionEnd(function() {
                    x && (x.autoplayPaused = !1, x.autoplaying ? i() : x.stopAutoplay())
                }))
            }, x.minTranslate = function() {
                return -x.snapGrid[0]
            }, x.maxTranslate = function() {
                return -x.snapGrid[x.snapGrid.length - 1]
            }, x.updateAutoHeight = function() {
                var e, a = [],
                    t = 0;
                if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                        var s = x.activeIndex + e;
                        if (s > x.slides.length) break;
                        a.push(x.slides.eq(s)[0])
                    } else a.push(x.slides.eq(x.activeIndex)[0]);
                for (e = 0; e < a.length; e++)
                    if (void 0 !== a[e]) {
                        var r = a[e].offsetHeight;
                        t = r > t ? r : t
                    }
                t && x.wrapper.css("height", t + "px")
            }, x.updateContainerSize = function() {
                var e, a;
                e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth, a = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === a && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), a = a - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = a, x.size = x.isHorizontal() ? x.width : x.height)
            }, x.updateSlidesSize = function() {
                x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];
                var e, a = x.params.spaceBetween,
                    t = -x.params.slidesOffsetBefore,
                    s = 0,
                    i = 0;
                if (void 0 !== x.size) {
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * x.size), x.virtualSize = -a, x.rtl ? x.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : x.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var n;
                    x.params.slidesPerColumn > 1 && (n = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (n = Math.max(n, x.params.slidesPerView * x.params.slidesPerColumn)));
                    var o, l = x.params.slidesPerColumn,
                        p = n / l,
                        d = p - (x.params.slidesPerColumn * p - x.slides.length);
                    for (e = 0; e < x.slides.length; e++) {
                        o = 0;
                        var m = x.slides.eq(e);
                        if (x.params.slidesPerColumn > 1) {
                            var u, c, g;
                            "column" === x.params.slidesPerColumnFill ? (c = Math.floor(e / l), g = e - c * l, (c > d || c === d && g === l - 1) && ++g >= l && (g = 0, c++), u = c + g * n / l, m.css({
                                "-webkit-box-ordinal-group": u,
                                "-moz-box-ordinal-group": u,
                                "-ms-flex-order": u,
                                "-webkit-order": u,
                                order: u
                            })) : (g = Math.floor(e / p), c = e - g * p), m.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== g && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", c).attr("data-swiper-row", g)
                        }
                        "none" !== m.css("display") && ("auto" === x.params.slidesPerView ? (o = x.isHorizontal() ? m.outerWidth(!0) : m.outerHeight(!0), x.params.roundLengths && (o = r(o))) : (o = (x.size - (x.params.slidesPerView - 1) * a) / x.params.slidesPerView, x.params.roundLengths && (o = r(o)), x.isHorizontal() ? x.slides[e].style.width = o + "px" : x.slides[e].style.height = o + "px"), x.slides[e].swiperSlideSize = o, x.slidesSizesGrid.push(o), x.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === s && 0 !== e && (t = t - x.size / 2 - a), 0 === e && (t = t - x.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % x.params.slidesPerGroup == 0 && x.snapGrid.push(t), x.slidesGrid.push(t)) : (i % x.params.slidesPerGroup == 0 && x.snapGrid.push(t), x.slidesGrid.push(t), t = t + o + a), x.virtualSize += o + a, s = o, i++)
                    }
                    x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                    var h;
                    if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px"
                        }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px"
                        }) : x.wrapper.css({
                            height: x.virtualSize + x.params.spaceBetween + "px"
                        })), x.params.slidesPerColumn > 1 && (x.virtualSize = (o + x.params.spaceBetween) * n, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px"
                        }) : x.wrapper.css({
                            height: x.virtualSize + x.params.spaceBetween + "px"
                        }), x.params.centeredSlides)) {
                        for (h = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && h.push(x.snapGrid[e]);
                        x.snapGrid = h
                    }
                    if (!x.params.centeredSlides) {
                        for (h = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && h.push(x.snapGrid[e]);
                        x.snapGrid = h, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                    }
                    0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                        marginLeft: a + "px"
                    }) : x.slides.css({
                        marginRight: a + "px"
                    }) : x.slides.css({
                        marginBottom: a + "px"
                    })), x.params.watchSlidesProgress && x.updateSlidesOffset()
                }
            }, x.updateSlidesOffset = function() {
                for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
            }, x.currentSlidesPerView = function() {
                var e, a, t = 1;
                if (x.params.centeredSlides) {
                    var s, r = x.slides[x.activeIndex].swiperSlideSize;
                    for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slides[e] && !s && (r += x.slides[e].swiperSlideSize, t++, r > x.size && (s = !0));
                    for (a = x.activeIndex - 1; a >= 0; a--) x.slides[a] && !s && (r += x.slides[a].swiperSlideSize, t++, r > x.size && (s = !0))
                } else
                    for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && t++;
                return t
            }, x.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
                    void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                    var a = -e;
                    x.rtl && (a = e), x.slides.removeClass(x.params.slideVisibleClass);
                    for (var t = 0; t < x.slides.length; t++) {
                        var s = x.slides[t],
                            r = (a + (x.params.centeredSlides ? x.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + x.params.spaceBetween);
                        if (x.params.watchSlidesVisibility) {
                            var i = -(a - s.swiperSlideOffset),
                                n = i + x.slidesSizesGrid[t];
                            (i >= 0 && i < x.size || n > 0 && n <= x.size || i <= 0 && n >= x.size) && x.slides.eq(t).addClass(x.params.slideVisibleClass)
                        }
                        s.progress = x.rtl ? -r : r
                    }
                }
            }, x.updateProgress = function(e) {
                void 0 === e && (e = x.translate || 0);
                var a = x.maxTranslate() - x.minTranslate(),
                    t = x.isBeginning,
                    s = x.isEnd;
                0 === a ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / a, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !t && x.emit("onReachBeginning", x), x.isEnd && !s && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress)
            }, x.updateActiveIndex = function() {
                var e, a, t, s = x.rtl ? x.translate : -x.translate;
                for (a = 0; a < x.slidesGrid.length; a++) void 0 !== x.slidesGrid[a + 1] ? s >= x.slidesGrid[a] && s < x.slidesGrid[a + 1] - (x.slidesGrid[a + 1] - x.slidesGrid[a]) / 2 ? e = a : s >= x.slidesGrid[a] && s < x.slidesGrid[a + 1] && (e = a + 1) : s >= x.slidesGrid[a] && (e = a);
                x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), t = Math.floor(e / x.params.slidesPerGroup), t >= x.snapGrid.length && (t = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = t, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses(), x.updateRealIndex())
            }, x.updateRealIndex = function() {
                x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
            }, x.updateClasses = function() {
                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                var a = x.slides.eq(x.activeIndex);
                a.addClass(x.params.slideActiveClass), s.loop && (a.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                var t = a.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                x.params.loop && 0 === t.length && (t = x.slides.eq(0), t.addClass(x.params.slideNextClass));
                var r = a.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                if (x.params.loop && 0 === r.length && (r = x.slides.eq(-1), r.addClass(x.params.slidePrevClass)), s.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), r.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && x.paginationContainer.length > 0) {
                    var i, n = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                    if (x.params.loop ? (i = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), i > x.slides.length - 1 - 2 * x.loopedSlides && (i -= x.slides.length - 2 * x.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== x.params.paginationType && (i = n + i)) : i = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function() {
                            e(this).index() === i && e(this).addClass(x.params.bulletActiveClass)
                        }) : x.bullets.eq(i).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(i + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(n)), "progress" === x.params.paginationType) {
                        var o = (i + 1) / n,
                            l = o,
                            p = 1;
                        x.isHorizontal() || (p = o, l = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(x.params.speed)
                    }
                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, i + 1, n)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                }
                x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
            }, x.updatePagination = function() {
                if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === x.params.paginationType) {
                        for (var a = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, t = 0; t < a; t++) e += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, t, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                        x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                    }
                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                }
            }, x.update = function(e) {
                function a() {
                    x.rtl, x.translate;
                    t = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(t), x.updateActiveIndex(), x.updateClasses()
                }
                if (x) {
                    x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                    var t;
                    if (e) {
                        x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (a(), x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || a()
                    } else x.params.autoHeight && x.updateAutoHeight()
                }
            }, x.onResize = function(e) {
                x.params.onBeforeResize && x.params.onBeforeResize(x), x.params.breakpoints && x.setBreakpoint();
                var a = x.params.allowSwipeToPrev,
                    t = x.params.allowSwipeToNext;
                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
                var s = !1;
                if (x.params.freeMode) {
                    var r = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                    x.setWrapperTranslate(r), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight()
                } else x.updateClasses(), s = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                x.params.lazyLoading && !s && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = a, x.params.allowSwipeToNext = t, x.params.onAfterResize && x.params.onAfterResize(x)
            }, x.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), x.touchEvents = {
                start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function(e) {
                var a = e ? "off" : "on",
                    t = e ? "removeEventListener" : "addEventListener",
                    r = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                    i = x.support.touch ? r : document,
                    n = !!x.params.nested;
                if (x.browser.ie) r[t](x.touchEvents.start, x.onTouchStart, !1), i[t](x.touchEvents.move, x.onTouchMove, n), i[t](x.touchEvents.end, x.onTouchEnd, !1);
                else {
                    if (x.support.touch) {
                        var o = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r[t](x.touchEvents.start, x.onTouchStart, o), r[t](x.touchEvents.move, x.onTouchMove, n), r[t](x.touchEvents.end, x.onTouchEnd, o)
                    }(s.simulateTouch && !x.device.ios && !x.device.android || s.simulateTouch && !x.support.touch && x.device.ios) && (r[t]("mousedown", x.onTouchStart, !1), document[t]("mousemove", x.onTouchMove, n), document[t]("mouseup", x.onTouchEnd, !1))
                }
                window[t]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[a]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[a]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[a]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[a]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[a]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[a]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && r[t]("click", x.preventClicks, !0)
            }, x.attachEvents = function() {
                x.initEvents()
            }, x.detachEvents = function() {
                x.initEvents(!0)
            }, x.allowClick = !0, x.preventClicks = function(e) {
                x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, x.onClickNext = function(e) {
                e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext()
            }, x.onClickPrev = function(e) {
                e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev()
            }, x.onClickIndex = function(a) {
                a.preventDefault();
                var t = e(this).index() * x.params.slidesPerGroup;
                x.params.loop && (t += x.loopedSlides), x.slideTo(t)
            }, x.updateClickedSlide = function(a) {
                var t = n(a, "." + x.params.slideClass),
                    s = !1;
                if (t)
                    for (var r = 0; r < x.slides.length; r++) x.slides[r] === t && (s = !0);
                if (!t || !s) return x.clickedSlide = void 0, void(x.clickedIndex = void 0);
                if (x.clickedSlide = t, x.clickedIndex = e(t).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                    var i, o = x.clickedIndex,
                        l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                    if (x.params.loop) {
                        if (x.animating) return;
                        i = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10), x.params.centeredSlides ? o < x.loopedSlides - l / 2 || o > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            x.slideTo(o)
                        }, 0)) : x.slideTo(o) : o > x.slides.length - l ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            x.slideTo(o)
                        }, 0)) : x.slideTo(o)
                    } else x.slideTo(o)
                }
            };
            var b, C, S, z, M, P, E, I, k, D, L = "input, select, textarea, button, video",
                B = Date.now(),
                H = [];
            x.animating = !1, x.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var G, X;
            x.onTouchStart = function(a) {
                if (a.originalEvent && (a = a.originalEvent), (G = "touchstart" === a.type) || !("which" in a) || 3 !== a.which) {
                    if (x.params.noSwiping && n(a, "." + x.params.noSwipingClass)) return void(x.allowClick = !0);
                    if (!x.params.swipeHandler || n(a, x.params.swipeHandler)) {
                        var t = x.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                            s = x.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && t <= x.params.iOSEdgeSwipeThreshold)) {
                            if (b = !0, C = !1, S = !0, M = void 0, X = void 0, x.touches.startX = t, x.touches.startY = s, z = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (I = !1), "touchstart" !== a.type) {
                                var r = !0;
                                e(a.target).is(L) && (r = !1), document.activeElement && e(document.activeElement).is(L) && document.activeElement.blur(), r && a.preventDefault()
                            }
                            x.emit("onTouchStart", x, a)
                        }
                    }
                }
            }, x.onTouchMove = function(a) {
                if (a.originalEvent && (a = a.originalEvent), !G || "mousemove" !== a.type) {
                    if (a.preventedByNestedSwiper) return x.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void(x.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                    if (x.params.onlyExternal) return x.allowClick = !1, void(b && (x.touches.startX = x.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, x.touches.startY = x.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, z = Date.now()));
                    if (G && x.params.touchReleaseOnEdges && !x.params.loop)
                        if (x.isHorizontal()) {
                            if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return
                        } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;
                    if (G && document.activeElement && a.target === document.activeElement && e(a.target).is(L)) return C = !0, void(x.allowClick = !1);
                    if (S && x.emit("onTouchMove", x, a), !(a.targetTouches && a.targetTouches.length > 1)) {
                        if (x.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, x.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, void 0 === M) {
                            var t;
                            x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? M = !1 : (t = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, M = x.isHorizontal() ? t > x.params.touchAngle : 90 - t > x.params.touchAngle)
                        }
                        if (M && x.emit("onTouchMoveOpposite", x, a), void 0 === X && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (X = !0)), b) {
                            if (M) return void(b = !1);
                            if (X) {
                                x.allowClick = !1, x.emit("onSliderMove", x, a), a.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && a.stopPropagation(), C || (s.loop && x.fixLoop(), E = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), D = !1, !x.params.grabCursor || x.params.allowSwipeToNext !== !0 && x.params.allowSwipeToPrev !== !0 || x.setGrabCursor(!0)), C = !0;
                                var r = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                r *= x.params.touchRatio, x.rtl && (r = -r), x.swipeDirection = r > 0 ? "prev" : "next", P = r + E;
                                var i = !0;
                                if (r > 0 && P > x.minTranslate() ? (i = !1, x.params.resistance && (P = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + E + r, x.params.resistanceRatio))) : r < 0 && P < x.maxTranslate() && (i = !1, x.params.resistance && (P = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - E - r, x.params.resistanceRatio))), i && (a.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && P < E && (P = E), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && P > E && (P = E), x.params.threshold > 0) {
                                    if (!(Math.abs(r) > x.params.threshold || I)) return void(P = E);
                                    if (!I) return I = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, P = E, void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                }
                                x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === H.length && H.push({
                                    position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                    time: z
                                }), H.push({
                                    position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), x.updateProgress(P), x.setWrapperTranslate(P))
                            }
                        }
                    }
                }
            }, x.onTouchEnd = function(a) {
                if (a.originalEvent && (a = a.originalEvent), S && x.emit("onTouchEnd", x, a), S = !1, b) {
                    x.params.grabCursor && C && b && (x.params.allowSwipeToNext === !0 || x.params.allowSwipeToPrev === !0) && x.setGrabCursor(!1);
                    var t = Date.now(),
                        s = t - z;
                    if (x.allowClick && (x.updateClickedSlide(a), x.emit("onTap", x, a), s < 300 && t - B > 300 && (k && clearTimeout(k), k = setTimeout(function() {
                            x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(a.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, a))
                        }, 300)), s < 300 && t - B < 300 && (k && clearTimeout(k), x.emit("onDoubleTap", x, a))), B = Date.now(), setTimeout(function() {
                            x && (x.allowClick = !0)
                        }, 0), !b || !C || !x.swipeDirection || 0 === x.touches.diff || P === E) return void(b = C = !1);
                    b = C = !1;
                    var r;
                    if (r = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -P, x.params.freeMode) {
                        if (r < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                        if (r > -x.maxTranslate()) return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                        if (x.params.freeModeMomentum) {
                            if (H.length > 1) {
                                var i = H.pop(),
                                    n = H.pop(),
                                    o = i.position - n.position,
                                    l = i.time - n.time;
                                x.velocity = o / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (x.velocity = 0)
                            } else x.velocity = 0;
                            x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio, H.length = 0;
                            var p = 1e3 * x.params.freeModeMomentumRatio,
                                d = x.velocity * p,
                                m = x.translate + d;
                            x.rtl && (m = -m);
                            var u, c = !1,
                                g = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                            if (m < x.maxTranslate()) x.params.freeModeMomentumBounce ? (m + x.maxTranslate() < -g && (m = x.maxTranslate() - g), u = x.maxTranslate(), c = !0, D = !0) : m = x.maxTranslate();
                            else if (m > x.minTranslate()) x.params.freeModeMomentumBounce ? (m - x.minTranslate() > g && (m = x.minTranslate() + g), u = x.minTranslate(), c = !0, D = !0) : m = x.minTranslate();
                            else if (x.params.freeModeSticky) {
                                var h, v = 0;
                                for (v = 0; v < x.snapGrid.length; v += 1)
                                    if (x.snapGrid[v] > -m) {
                                        h = v;
                                        break
                                    }
                                m = Math.abs(x.snapGrid[h] - m) < Math.abs(x.snapGrid[h - 1] - m) || "next" === x.swipeDirection ? x.snapGrid[h] : x.snapGrid[h - 1], x.rtl || (m = -m)
                            }
                            if (0 !== x.velocity) p = x.rtl ? Math.abs((-m - x.translate) / x.velocity) : Math.abs((m - x.translate) / x.velocity);
                            else if (x.params.freeModeSticky) return void x.slideReset();
                            x.params.freeModeMomentumBounce && c ? (x.updateProgress(u), x.setWrapperTransition(p), x.setWrapperTranslate(m), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function() {
                                x && D && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(u), x.wrapper.transitionEnd(function() {
                                    x && x.onTransitionEnd()
                                }))
                            })) : x.velocity ? (x.updateProgress(m), x.setWrapperTransition(p), x.setWrapperTranslate(m), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                                x && x.onTransitionEnd()
                            }))) : x.updateProgress(m), x.updateActiveIndex()
                        }
                        return void((!x.params.freeModeMomentum || s >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()))
                    }
                    var f, w = 0,
                        y = x.slidesSizesGrid[0];
                    for (f = 0; f < x.slidesGrid.length; f += x.params.slidesPerGroup) void 0 !== x.slidesGrid[f + x.params.slidesPerGroup] ? r >= x.slidesGrid[f] && r < x.slidesGrid[f + x.params.slidesPerGroup] && (w = f, y = x.slidesGrid[f + x.params.slidesPerGroup] - x.slidesGrid[f]) : r >= x.slidesGrid[f] && (w = f, y = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                    var T = (r - x.slidesGrid[w]) / y;
                    if (s > x.params.longSwipesMs) {
                        if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && (T >= x.params.longSwipesRatio ? x.slideTo(w + x.params.slidesPerGroup) : x.slideTo(w)), "prev" === x.swipeDirection && (T > 1 - x.params.longSwipesRatio ? x.slideTo(w + x.params.slidesPerGroup) : x.slideTo(w))
                    } else {
                        if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && x.slideTo(w + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(w)
                    }
                }
            }, x._slideTo = function(e, a) {
                return x.slideTo(e, a, !0, !0)
            }, x.slideTo = function(e, a, t, s) {
                void 0 === t && (t = !0), void 0 === e && (e = 0), e < 0 && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                var r = -x.snapGrid[x.snapIndex];
                if (x.params.autoplay && x.autoplaying && (s || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(a) : x.stopAutoplay()), x.updateProgress(r), x.params.normalizeSlideIndex)
                    for (var i = 0; i < x.slidesGrid.length; i++) - Math.floor(100 * r) >= Math.floor(100 * x.slidesGrid[i]) && (e = i);
                return !(!x.params.allowSwipeToNext && r < x.translate && r < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && r > x.translate && r > x.maxTranslate() && (x.activeIndex || 0) !== e) && (void 0 === a && (a = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -r === x.translate || !x.rtl && r === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(r), !1) : (x.updateClasses(), x.onTransitionStart(t), 0 === a || x.browser.lteIE9 ? (x.setWrapperTranslate(r), x.setWrapperTransition(0), x.onTransitionEnd(t)) : (x.setWrapperTranslate(r), x.setWrapperTransition(a), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                    x && x.onTransitionEnd(t)
                }))), !0)))
            }, x.onTransitionStart = function(e) {
                void 0 === e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
            }, x.onTransitionEnd = function(e) {
                x.animating = !1, x.setWrapperTransition(0), void 0 === e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex), x.params.hashnav && x.hashnav && x.hashnav.setHash()
            }, x.slideNext = function(e, a, t) {
                if (x.params.loop) {
                    if (x.animating) return !1;
                    x.fixLoop();
                    x.container[0].clientLeft;
                    return x.slideTo(x.activeIndex + x.params.slidesPerGroup, a, e, t)
                }
                return x.slideTo(x.activeIndex + x.params.slidesPerGroup, a, e, t)
            }, x._slideNext = function(e) {
                return x.slideNext(!0, e, !0)
            }, x.slidePrev = function(e, a, t) {
                if (x.params.loop) {
                    if (x.animating) return !1;
                    x.fixLoop();
                    x.container[0].clientLeft;
                    return x.slideTo(x.activeIndex - 1, a, e, t)
                }
                return x.slideTo(x.activeIndex - 1, a, e, t)
            }, x._slidePrev = function(e) {
                return x.slidePrev(!0, e, !0)
            }, x.slideReset = function(e, a, t) {
                return x.slideTo(x.activeIndex, a, e)
            }, x.disableTouchControl = function() {
                return x.params.onlyExternal = !0, !0
            }, x.enableTouchControl = function() {
                return x.params.onlyExternal = !1, !0
            }, x.setWrapperTransition = function(e, a) {
                x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, a), x.emit("onSetTransition", x, e)
            }, x.setWrapperTranslate = function(e, a, t) {
                var s = 0,
                    i = 0;
                x.isHorizontal() ? s = x.rtl ? -e : e : i = e, x.params.roundLengths && (s = r(s), i = r(i)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + s + "px, " + i + "px, 0px)") : x.wrapper.transform("translate(" + s + "px, " + i + "px)")), x.translate = x.isHorizontal() ? s : i;
                var n, o = x.maxTranslate() - x.minTranslate();
                n = 0 === o ? 0 : (e - x.minTranslate()) / o, n !== x.progress && x.updateProgress(e), a && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, t), x.emit("onSetTranslate", x, x.translate)
            }, x.getTranslate = function(e, a) {
                var t, s, r, i;
                return void 0 === a && (a = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), i = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), x.rtl && s && (s = -s), s || 0)
            }, x.getWrapperTranslate = function(e) {
                return void 0 === e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e)
            }, x.observers = [], x.initObservers = function() {
                if (x.params.observeParents)
                    for (var e = x.container.parents(), a = 0; a < e.length; a++) o(e[a]);
                o(x.container[0], {
                    childList: !1
                }), o(x.wrapper[0], {
                    attributes: !1
                })
            }, x.disconnectObservers = function() {
                for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                x.observers = []
            }, x.createLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                var a = x.wrapper.children("." + x.params.slideClass);
                "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = a.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > a.length && (x.loopedSlides = a.length);
                var t, s = [],
                    r = [];
                for (a.each(function(t, i) {
                        var n = e(this);
                        t < x.loopedSlides && r.push(i), t < a.length && t >= a.length - x.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                    }), t = 0; t < r.length; t++) x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                for (t = s.length - 1; t >= 0; t--) x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
            }, x.destroyLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index")
            }, x.reLoop = function(e) {
                var a = x.activeIndex - x.loopedSlides;
                x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(a + x.loopedSlides, 0, !1)
            }, x.fixLoop = function() {
                var e;
                x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0))
            }, x.appendSlide = function(e) {
                if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++) e[a] && x.wrapper.append(e[a]);
                else x.wrapper.append(e);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0)
            }, x.prependSlide = function(e) {
                x.params.loop && x.destroyLoop();
                var a = x.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++) e[t] && x.wrapper.prepend(e[t]);
                    a = x.activeIndex + e.length
                } else x.wrapper.prepend(e);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(a, 0, !1)
            }, x.removeSlide = function(e) {
                x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                var a, t = x.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var s = 0; s < e.length; s++) a = e[s], x.slides[a] && x.slides.eq(a).remove(), a < t && t--;
                    t = Math.max(t, 0)
                } else a = e, x.slides[a] && x.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);
                x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(t + x.loopedSlides, 0, !1) : x.slideTo(t, 0, !1)
            }, x.removeAllSlides = function() {
                for (var e = [], a = 0; a < x.slides.length; a++) e.push(a);
                x.removeSlide(e)
            }, x.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < x.slides.length; e++) {
                            var a = x.slides.eq(e),
                                t = a[0].swiperSlideOffset,
                                s = -t;
                            x.params.virtualTranslate || (s -= x.translate);
                            var r = 0;
                            x.isHorizontal() || (r = s, s = 0);
                            var i = x.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: i
                            }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            x.slides.transitionEnd(function() {
                                if (!a && x) {
                                    a = !0, x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) x.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var a = 0; a < x.slides.length; a++) {
                            var t = x.slides.eq(a),
                                s = t[0].progress;
                            x.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                            var r = t[0].swiperSlideOffset,
                                i = -180 * s,
                                n = i,
                                o = 0,
                                l = -r,
                                p = 0;
                            if (x.isHorizontal() ? x.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + x.slides.length, x.params.flip.slideShadows) {
                                var d = x.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    m = x.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(m)), d.length && (d[0].style.opacity = Math.max(-s, 0)), m.length && (m[0].style.opacity = Math.max(s, 0))
                            }
                            t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                        }
                    },
                    setTransition: function(a) {
                        if (x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), x.params.virtualTranslate && 0 !== a) {
                            var t = !1;
                            x.slides.eq(x.activeIndex).transitionEnd(function() {
                                if (!t && x && e(this).hasClass(x.params.slideActiveClass)) {
                                    t = !0, x.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < a.length; s++) x.wrapper.trigger(a[s])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var a, t = 0;
                        x.params.cube.shadow && (x.isHorizontal() ? (a = x.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(a)), a.css({
                            height: x.width + "px"
                        })) : (a = x.container.find(".swiper-cube-shadow"), 0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'), x.container.append(a))));
                        for (var s = 0; s < x.slides.length; s++) {
                            var r = x.slides.eq(s),
                                i = 90 * s,
                                n = Math.floor(i / 360);
                            x.rtl && (i = -i, n = Math.floor(-i / 360));
                            var o = Math.max(Math.min(r[0].progress, 1), -1),
                                l = 0,
                                p = 0,
                                d = 0;
                            s % 4 == 0 ? (l = 4 * -n * x.size, d = 0) : (s - 1) % 4 == 0 ? (l = 0, d = 4 * -n * x.size) : (s - 2) % 4 == 0 ? (l = x.size + 4 * n * x.size, d = x.size) : (s - 3) % 4 == 0 && (l = -x.size, d = 3 * x.size + 4 * x.size * n), x.rtl && (l = -l), x.isHorizontal() || (p = l, l = 0);
                            var m = "rotateX(" + (x.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (x.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                            if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, x.rtl && (t = 90 * -s - 90 * o)), r.transform(m), x.params.cube.slideShadows) {
                                var u = x.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                    c = x.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(c)), u.length && (u[0].style.opacity = Math.max(-o, 0)), c.length && (c[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (x.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "transform-origin": "50% 50% -" + x.size / 2 + "px"
                            }), x.params.cube.shadow)
                            if (x.isHorizontal()) a.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                            else {
                                var g = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                    h = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2),
                                    v = x.params.cube.shadowScale,
                                    f = x.params.cube.shadowScale / h,
                                    w = x.params.cube.shadowOffset;
                                a.transform("scale3d(" + v + ", 1, " + f + ") translate3d(0px, " + (x.height / 2 + w) + "px, " + -x.height / 2 / f + "px) rotateX(-90deg)")
                            }
                        var y = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                        x.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (x.isHorizontal() ? 0 : t) + "deg) rotateY(" + (x.isHorizontal() ? -t : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var a = x.translate, t = x.isHorizontal() ? -a + x.width / 2 : -a + x.height / 2, s = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, r = x.params.coverflow.depth, i = 0, n = x.slides.length; i < n; i++) {
                            var o = x.slides.eq(i),
                                l = x.slidesSizesGrid[i],
                                p = o[0].swiperSlideOffset,
                                d = (t - p - l / 2) / l * x.params.coverflow.modifier,
                                m = x.isHorizontal() ? s * d : 0,
                                u = x.isHorizontal() ? 0 : s * d,
                                c = -r * Math.abs(d),
                                g = x.isHorizontal() ? 0 : x.params.coverflow.stretch * d,
                                h = x.isHorizontal() ? x.params.coverflow.stretch * d : 0;
                            Math.abs(h) < .001 && (h = 0), Math.abs(g) < .001 && (g = 0), Math.abs(c) < .001 && (c = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0);
                            var v = "translate3d(" + h + "px," + g + "px," + c + "px)  rotateX(" + u + "deg) rotateY(" + m + "deg)";
                            if (o.transform(v), o[0].style.zIndex = 1 - Math.abs(Math.round(d)), x.params.coverflow.slideShadows) {
                                var f = x.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                    w = x.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), o.append(f)), 0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), f.length && (f[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (x.browser.ie) {
                            x.wrapper[0].style.perspectiveOrigin = t + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, x.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(a, t) {
                    if (void 0 !== a && (void 0 === t && (t = !0), 0 !== x.slides.length)) {
                        var s = x.slides.eq(a),
                            r = s.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                        !s.hasClass(x.params.lazyLoadingClass) || s.hasClass(x.params.lazyStatusLoadedClass) || s.hasClass(x.params.lazyStatusLoadingClass) || (r = r.add(s[0])), 0 !== r.length && r.each(function() {
                            var a = e(this);
                            a.addClass(x.params.lazyStatusLoadingClass);
                            var r = a.attr("data-background"),
                                i = a.attr("data-src"),
                                n = a.attr("data-srcset"),
                                o = a.attr("data-sizes");
                            x.loadImage(a[0], i || r, n, o, !1, function() {
                                if (void 0 !== x && null !== x && x) {
                                    if (r ? (a.css("background-image", 'url("' + r + '")'), a.removeAttr("data-background")) : (n && (a.attr("srcset", n), a.removeAttr("data-srcset")), o && (a.attr("sizes", o), a.removeAttr("data-sizes")), i && (a.attr("src", i), a.removeAttr("data-src"))), a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), s.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && t) {
                                        var e = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(x.params.slideDuplicateClass)) {
                                            var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                            x.lazy.loadImageInSlide(l.index(), !1)
                                        } else {
                                            var p = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            x.lazy.loadImageInSlide(p.index(), !1)
                                        }
                                    }
                                    x.emit("onLazyImageReady", x, s[0], a[0])
                                }
                            }), x.emit("onLazyImageLoad", x, s[0], a[0])
                        })
                    }
                },
                load: function() {
                    var a, t = x.params.slidesPerView;
                    if ("auto" === t && (t = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                        x.lazy.loadImageInSlide(e(this).index())
                    });
                    else if (t > 1)
                        for (a = x.activeIndex; a < x.activeIndex + t; a++) x.slides[a] && x.lazy.loadImageInSlide(a);
                    else x.lazy.loadImageInSlide(x.activeIndex);
                    if (x.params.lazyLoadingInPrevNext)
                        if (t > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                            var s = x.params.lazyLoadingInPrevNextAmount,
                                r = t,
                                i = Math.min(x.activeIndex + r + Math.max(s, r), x.slides.length),
                                n = Math.max(x.activeIndex - Math.max(r, s), 0);
                            for (a = x.activeIndex + t; a < i; a++) x.slides[a] && x.lazy.loadImageInSlide(a);
                            for (a = n; a < x.activeIndex; a++) x.slides[a] && x.lazy.loadImageInSlide(a)
                        } else {
                            var o = x.wrapper.children("." + x.params.slideNextClass);
                            o.length > 0 && x.lazy.loadImageInSlide(o.index());
                            var l = x.wrapper.children("." + x.params.slidePrevClass);
                            l.length > 0 && x.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function() {
                    x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                },
                onTransitionEnd: function() {
                    x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                }
            }, x.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var a = x.scrollbar,
                        t = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                        s = t - a.track.offset()[x.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                        r = -x.minTranslate() * a.moveDivider,
                        i = -x.maxTranslate() * a.moveDivider;
                    s < r ? s = r : s > i && (s = i), s = -s / a.moveDivider, x.updateProgress(s), x.setWrapperTranslate(s, !0)
                },
                dragStart: function(e) {
                    var a = x.scrollbar;
                    a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), x.params.scrollbarHide && a.track.css("opacity", 1), x.wrapper.transition(100), a.drag.transition(100), x.emit("onScrollbarDragStart", x)
                },
                dragMove: function(e) {
                    var a = x.scrollbar;
                    a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), x.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), x.emit("onScrollbarDragMove", x))
                },
                dragEnd: function(e) {
                    var a = x.scrollbar;
                    a.isTouched && (a.isTouched = !1, x.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
                        a.track.css("opacity", 0), a.track.transition(400)
                    }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                },
                draggableEvents: function() {
                    return x.params.simulateTouch !== !1 || x.support.touch ? x.touchEvents : x.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var a = x.scrollbar,
                        t = x.support.touch ? a.track : document;
                    e(a.track).on(a.draggableEvents.start, a.dragStart), e(t).on(a.draggableEvents.move, a.dragMove), e(t).on(a.draggableEvents.end, a.dragEnd)
                },
                disableDraggable: function() {
                    var a = x.scrollbar,
                        t = x.support.touch ? a.track : document;
                    e(a.track).off(a.draggableEvents.start, a.dragStart), e(t).off(a.draggableEvents.move, a.dragMove), e(t).off(a.draggableEvents.end, a.dragEnd)
                },
                set: function() {
                    if (x.params.scrollbar) {
                        var a = x.scrollbar;
                        a.track = e(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && a.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (a.track = x.container.find(x.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = x.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = x.size / x.virtualSize, a.moveDivider = a.divider * (a.trackSize / x.size), a.dragSize = a.trackSize * a.divider, x.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", x.params.scrollbarHide && (a.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (x.params.scrollbar) {
                        var e, a = x.scrollbar,
                            t = (x.translate, a.dragSize);
                        e = (a.trackSize - a.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (x.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), x.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0, a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    x.params.scrollbar && x.scrollbar.drag.transition(e)
                }
            }, x.controller = {
                LinearSpline: function(e, a) {
                    var t = function() {
                        var e, a, t;
                        return function(s, r) {
                            for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t : e = t;
                            return e
                        }
                    }();
                    this.x = e, this.y = a, this.lastIndex = e.length - 1;
                    var s, r;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (r = t(this.x, e), s = r - 1, (e - this.x[s]) * (this.y[r] - this.y[s]) / (this.x[r] - this.x[s]) + this.y[s]) : 0
                    }
                },
                getInterpolateFunction: function(e) {
                    x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function s(a) {
                        e = a.rtl && "horizontal" === a.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(a), i = -x.controller.spline.interpolate(-e)), i && "container" !== x.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (x.maxTranslate() - x.minTranslate()), i = (e - x.minTranslate()) * r + a.minTranslate()), x.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, x), a.updateActiveIndex()
                    }
                    var r, i, n = x.params.control;
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++) n[o] !== t && n[o] instanceof a && s(n[o]);
                    else n instanceof a && t !== n && s(n)
                },
                setTransition: function(e, t) {
                    function s(a) {
                        a.setWrapperTransition(e, x), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                            i && (a.params.loop && "slide" === x.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                        }))
                    }
                    var r, i = x.params.control;
                    if (Array.isArray(i))
                        for (r = 0; r < i.length; r++) i[r] !== t && i[r] instanceof a && s(i[r]);
                    else i instanceof a && t !== i && s(i)
                }
            }, x.hashnav = {
                onHashCange: function(e, a) {
                    var t = document.location.hash.replace("#", "");
                    t !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    e(window)[t]("hashchange", x.hashnav.onHashCange)
                },
                setHash: function() {
                    if (x.hashnav.initialized && x.params.hashnav)
                        if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                        else {
                            var e = x.slides.eq(x.activeIndex),
                                a = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = a || ""
                        }
                },
                init: function() {
                    if (x.params.hashnav && !x.params.history) {
                        x.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var a = 0, t = x.slides.length; a < t; a++) {
                                var s = x.slides.eq(a),
                                    r = s.attr("data-hash") || s.attr("data-history");
                                if (r === e && !s.hasClass(x.params.slideDuplicateClass)) {
                                    var i = s.index();
                                    x.slideTo(i, 0, x.params.runCallbacksOnInit, !0)
                                }
                            }
                        x.params.hashnavWatchState && x.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                }
            }, x.history = {
                init: function() {
                    if (x.params.history) {
                        if (!window.history || !window.history.pushState) return x.params.history = !1, void(x.params.hashnav = !0);
                        x.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    x.history.paths = x.history.getPathValues(), x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"),
                        a = e.length;
                    return {
                        key: e[a - 2],
                        value: e[a - 1]
                    }
                },
                setHistory: function(e, a) {
                    if (x.history.initialized && x.params.history) {
                        var t = x.slides.eq(a),
                            s = this.slugify(t.attr("data-history"));
                        window.location.pathname.includes(e) || (s = e + "/" + s), x.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, a, t) {
                    if (a)
                        for (var s = 0, r = x.slides.length; s < r; s++) {
                            var i = x.slides.eq(s),
                                n = this.slugify(i.attr("data-history"));
                            if (n === a && !i.hasClass(x.params.slideDuplicateClass)) {
                                var o = i.index();
                                x.slideTo(o, e, t)
                            }
                        } else x.slideTo(0, e, t)
                }
            }, x.disableKeyboardControl = function() {
                x.params.keyboardControl = !1, e(document).off("keydown", l)
            }, x.enableKeyboardControl = function() {
                x.params.keyboardControl = !0, e(document).on("keydown", l)
            }, x.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel" in document;
                if (!e) {
                    var a = document.createElement("div");
                    a.setAttribute("onwheel", "return;"), e = "function" == typeof a.onwheel
                }
                return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel"), x.disableMousewheelControl = function() {
                if (!x.mousewheel.event) return !1;
                var a = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (a = e(x.params.mousewheelEventsTarged)), a.off(x.mousewheel.event, d), x.params.mousewheelControl = !1, !0
            }, x.enableMousewheelControl = function() {
                if (!x.mousewheel.event) return !1;
                var a = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (a = e(x.params.mousewheelEventsTarged)), a.on(x.mousewheel.event, d), x.params.mousewheelControl = !0, !0
            }, x.parallax = {
                setTranslate: function() {
                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        m(this, x.progress)
                    }), x.slides.each(function() {
                        var a = e(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            m(this, Math.min(Math.max(a[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(a) {
                    void 0 === a && (a = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = e(this),
                            s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (s = 0), t.transition(s)
                    })
                }
            }, x.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: x.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var a = e.targetTouches[0].pageX,
                        t = e.targetTouches[0].pageY,
                        s = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - a, 2) + Math.pow(r - t, 2))
                },
                onGestureStart: function(a) {
                    var t = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2) return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
                    }
                    if (!(t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this), 0 === t.gesture.slide.length && (t.gesture.slide = x.slides.eq(x.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + x.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== t.gesture.imageWrap.length))) return void(t.gesture.image = void 0);
                    t.gesture.image.transition(0), t.isScaling = !0
                },
                onGestureChange: function(e) {
                    var a = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                    }
                    a.gesture.image && 0 !== a.gesture.image.length && (x.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < x.params.zoomMin && (a.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var a = x.zoom;
                    !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), x.params.zoomMin), a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0))
                },
                onTouchStart: function(e, a) {
                    var t = e.zoom;
                    t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                },
                onTouchMove: function(e) {
                    var a = x.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length && (x.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
                        a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = x.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = x.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), x.rtl && (a.image.startX = -a.image.startX), x.rtl && (a.image.startY = -a.image.startY));
                        var t = a.image.width * a.scale,
                            s = a.image.height * a.scale;
                        if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                            if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                                if (x.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void(a.image.isTouched = !1);
                                if (!x.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void(a.image.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, a) {
                    var t = e.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void(t.image.isMoved = !1);
                        t.image.isTouched = !1, t.image.isMoved = !1;
                        var s = 300,
                            r = 300,
                            i = t.velocity.x * s,
                            n = t.image.currentX + i,
                            o = t.velocity.y * r,
                            l = t.image.currentY + o;
                        0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (r = Math.abs((l - t.image.currentY) / t.velocity.y));
                        var p = Math.max(s, r);
                        t.image.currentX = n, t.image.currentY = l;
                        var d = t.image.width * t.scale,
                            m = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - m / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var a = e.zoom;
                    a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1)
                },
                toggleZoom: function(a, t) {
                    var s = a.zoom;
                    if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + a.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
                        var r, i, n, o, l, p, d, m, u, c, g, h, v, f, w, y, x, T;
                        void 0 === s.image.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = s.image.touchesStart.x, i = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - r, p = o + T / 2 - i, u = s.gesture.image[0].offsetWidth, c = s.gesture.image[0].offsetHeight, g = u * s.scale, h = c * s.scale, v = Math.min(x / 2 - g / 2, 0), f = Math.min(T / 2 - h / 2, 0), w = -v, y = -f, d = l * s.scale, m = p * s.scale, d < v && (d = v), d > w && (d = w), m < f && (m = f), m > y && (m = y)) : (d = 0, m = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + m + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                    }
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    if (x.params.zoom) {
                        var s = (x.slides, !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        x.support.gestures ? (x.slides[t]("gesturestart", x.zoom.onGestureStart, s), x.slides[t]("gesturechange", x.zoom.onGestureChange, s), x.slides[t]("gestureend", x.zoom.onGestureEnd, s)) : "touchstart" === x.touchEvents.start && (x.slides[t](x.touchEvents.start, x.zoom.onGestureStart, s), x.slides[t](x.touchEvents.move, x.zoom.onGestureChange, s), x.slides[t](x.touchEvents.end, x.zoom.onGestureEnd, s)), x[t]("touchStart", x.zoom.onTouchStart), x.slides.each(function(a, s) {
                            e(s).find("." + x.params.zoomContainerClass).length > 0 && e(s)[t](x.touchEvents.move, x.zoom.onTouchMove)
                        }), x[t]("touchEnd", x.zoom.onTouchEnd), x[t]("transitionEnd", x.zoom.onTransitionEnd), x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                    }
                },
                init: function() {
                    x.zoom.attachEvents()
                },
                destroy: function() {
                    x.zoom.attachEvents(!0)
                }
            }, x._plugins = [];
            for (var Y in x.plugins) {
                var A = x.plugins[Y](x, x.params[Y]);
                A && x._plugins.push(A)
            }
            return x.callPlugins = function(e) {
                for (var a = 0; a < x._plugins.length; a++) e in x._plugins[a] && x._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, x.emitterEventListeners = {}, x.emit = function(e) {
                x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (x.emitterEventListeners[e])
                    for (a = 0; a < x.emitterEventListeners[e].length; a++) x.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, x.on = function(e, a) {
                return e = u(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(a), x
            }, x.off = function(e, a) {
                var t;
                if (e = u(e), void 0 === a) return x.emitterEventListeners[e] = [], x;
                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                    for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t] === a && x.emitterEventListeners[e].splice(t, 1);
                    return x
                }
            }, x.once = function(e, a) {
                e = u(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, t)
                };
                return x.on(e, t), x
            }, x.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(a) {
                    13 === a.keyCode && (e(a.target).is(x.params.nextButton) ? (x.onClickNext(a), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(a.target).is(x.params.prevButton) && (x.onClickPrev(a), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), e(a.target).is("." + x.params.bulletClass) && e(a.target)[0].click())
                },
                liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = x.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), e(x.container).append(x.a11y.liveRegion)
                },
                initPagination: function() {
                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                        var a = e(this);
                        x.a11y.makeFocusable(a), x.a11y.addRole(a, "button"), x.a11y.addLabel(a, x.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                destroy: function() {
                    x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                }
            }, x.init = function() {
                x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.zoom && x.zoom && x.zoom.init(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState), x.params.history && x.history && x.history.init(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x)
            }, x.cleanupStyles = function() {
                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
            }, x.destroy = function(e, a) {
                x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), a && x.cleanupStyles(), x.disconnectObservers(), x.params.zoom && x.zoom && x.zoom.destroy(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState), x.params.hashnav && x.hashnav && x.hashnav.destroy(), x.emit("onDestroy"), e !== !1 && (x = null)
            }, x.init(), x
        }
    };
    a.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = window.navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || r || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, a)
                } catch (e) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var t = ["jQuery", "Zepto", "Dom7"], s = 0; s < t.length; s++) window[t[s]] && function(e) {
        e.fn.swiper = function(t) {
            var s;
            return e(this).each(function() {
                var e = new a(this, t);
                s || (s = e)
            }), s
        }
    }(window[t[s]]);
    var r;
    r = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (t = 0; t < s.length; t++) r.on(s[t], a);
        return this
    }), "transform" in r.fn || (r.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    }), "outerWidth" in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = a
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});
//# sourceMappingURL=maps/swiper.jquery.min.js.map

/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                var s = r && r[o];
                s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t.allOff = t.removeAllListeners = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if ("number" == typeof e.length)
            for (var i = 0; i < e.length; i++) t.push(e[i]);
        else t.push(e);
        return t
    }

    function o(e, t, r) {
        return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(e, t, r)
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.shuffle = e()
}(this, function() {
    "use strict";

    function t(t, e) {
        if (b) return b.call(t, e);
        for (var i = t.parentNode.querySelectorAll(e), n = 0; n < i.length; n++)
            if (i[n] == t) return !0;
        return !1
    }

    function e() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) L.call(i, n) && (t[n] = i[n])
        }
        return t
    }

    function i(t, e) {
        function i() {
            r = 0, l = +new Date, o = t.apply(n, s), n = null, s = null
        }
        var n, s, o, r, l = 0;
        return function() {
            n = this, s = arguments;
            var t = new Date - l;
            return r || (t >= e ? i() : r = setTimeout(i, e - t)), o
        }
    }

    function n() {}

    function s(t) {
        return parseFloat(t) || 0
    }

    function o(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null),
            n = s(i[e]);
        return W || "width" !== e ? W || "height" !== e || (n += s(i.paddingTop) + s(i.paddingBottom) + s(i.borderTopWidth) + s(i.borderBottomWidth)) : n += s(i.paddingLeft) + s(i.paddingRight) + s(i.borderLeftWidth) + s(i.borderRightWidth), n
    }

    function r(t) {
        for (var e = t.length; e;) {
            e -= 1;
            var i = Math.floor(Math.random() * (e + 1)),
                n = t[i];
            t[i] = t[e], t[e] = n
        }
        return t
    }

    function l(t, e) {
        var i = w(R, e),
            n = [].slice.call(t),
            s = !1;
        return t.length ? i.randomize ? r(t) : ("function" == typeof i.by && t.sort(function(t, e) {
            if (s) return 0;
            var n = i.by(t[i.key]),
                o = i.by(e[i.key]);
            return void 0 === n && void 0 === o ? (s = !0, 0) : n < o || "sortFirst" === n || "sortLast" === o ? -1 : n > o || "sortLast" === n || "sortFirst" === o ? 1 : 0
        }), s ? n : (i.reverse && t.reverse(), t)) : []
    }

    function a() {
        return P += 1, q + P
    }

    function u(t) {
        return !!H[t] && (H[t].element.removeEventListener(q, H[t].listener), H[t] = null, !0)
    }

    function h(t, e) {
        var i = a(),
            n = function(t) {
                t.currentTarget === t.target && (u(i), e(t))
            };
        return t.addEventListener(q, n), H[i] = {
            element: t,
            listener: n
        }, i
    }

    function f(t) {
        return Math.max.apply(Math, t)
    }

    function c(t) {
        return Math.min.apply(Math, t)
    }

    function d(t, e, i, n) {
        var s = t / e;
        return Math.abs(Math.round(s) - s) < n && (s = Math.round(s)), Math.min(Math.ceil(s), i)
    }

    function m(t, e, i) {
        if (1 === e) return t;
        for (var n = [], s = 0; s <= i - e; s++) n.push(f(t.slice(s, s + e)));
        return n
    }

    function v(t, e) {
        for (var i = c(t), n = 0, s = t.length; n < s; n++)
            if (t[n] >= i - e && t[n] <= i + e) return n;
        return 0
    }

    function p(t) {
        for (var e = t.itemSize, i = t.positions, n = t.gridSize, s = t.total, o = t.threshold, r = t.buffer, l = d(e.width, n, s, o), a = m(i, l, s), u = v(a, r), h = new A(Math.round(n * u), Math.round(a[u])), f = a[u] + e.height, c = 0; c < l; c++) i[u + c] = f;
        return h
    }

    function y(t) {
        return Array.prototype.slice.call(t)
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }
    try {
        var _ = new window.CustomEvent("test");
        if (_.preventDefault(), !0 !== _.defaultPrevented) throw new Error("Could not prevent default")
    } catch (t) {
        var E = function(t, e) {
            var i, n;
            return e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, i = document.createEvent("CustomEvent"), i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n = i.preventDefault, i.preventDefault = function() {
                n.call(this);
                try {
                    Object.defineProperty(this, "defaultPrevented", {
                        get: function() {
                            return !0
                        }
                    })
                } catch (t) {
                    this.defaultPrevented = !0
                }
            }, i
        };
        E.prototype = window.Event.prototype, window.CustomEvent = E
    }
    var S = Element.prototype,
        b = S.matches || S.matchesSelector || S.webkitMatchesSelector || S.mozMatchesSelector || S.msMatchesSelector || S.oMatchesSelector,
        I = t,
        k = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        T = function(t, e) {
            return e = {
                exports: {}
            }, t(e, e.exports), e.exports
        }(function(t) {
            function e(t) {
                for (var e = [], i = 0; i < t.length; i++) - 1 === e.indexOf(t[i]) && e.push(t[i]);
                return e
            }

            function i(t) {
                var e = new Set;
                return t.filter(function(t) {
                    return !e.has(t) && (e.add(t), !0)
                })
            }

            function n(t) {
                var e = [];
                return new Set(t).forEach(function(t) {
                    e.push(t)
                }), e
            }
            "Set" in k ? "function" == typeof Set.prototype.forEach && function() {
                var t = !1;
                return new Set([!0]).forEach(function(e) {
                    t = e
                }), !0 === t
            }() ? t.exports = n : t.exports = i : t.exports = e
        }),
        w = e,
        L = Object.prototype.hasOwnProperty,
        C = i,
        z = function(t, e, i) {
            function s(t) {
                return function(e, n) {
                    if (!r) {
                        if (e) return i(e, l), void(r = !0);
                        l[t] = n, --o || i(null, l)
                    }
                }
            }
            i || ("function" == typeof e ? (i = e, e = null) : i = n);
            var o = t && t.length;
            if (!o) return i(null, []);
            var r = !1,
                l = new Array(o);
            t.forEach(e ? function(t, i) {
                t.call(e, s(i))
            } : function(t, e) {
                t(s(e))
            })
        },
        D = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        M = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        A = function() {
            function t(e, i) {
                D(this, t), this.x = s(e), this.y = s(i)
            }
            return M(t, null, [{
                key: "equals",
                value: function(t, e) {
                    return t.x === e.x && t.y === e.y
                }
            }]), t
        }(),
        F = {
            BASE: "shuffle",
            SHUFFLE_ITEM: "shuffle-item",
            VISIBLE: "shuffle-item--visible",
            HIDDEN: "shuffle-item--hidden"
        },
        x = 0,
        B = function() {
            function t(e) {
                D(this, t), x += 1, this.id = x, this.element = e, this.isVisible = !0
            }
            return M(t, [{
                key: "show",
                value: function() {
                    this.isVisible = !0, this.element.classList.remove(F.HIDDEN), this.element.classList.add(F.VISIBLE)
                }
            }, {
                key: "hide",
                value: function() {
                    this.isVisible = !1, this.element.classList.remove(F.VISIBLE), this.element.classList.add(F.HIDDEN)
                }
            }, {
                key: "init",
                value: function() {
                    this.addClasses([F.SHUFFLE_ITEM, F.VISIBLE]), this.applyCss(t.Css.INITIAL), this.scale = t.Scale.VISIBLE, this.point = new A
                }
            }, {
                key: "addClasses",
                value: function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        e.element.classList.add(t)
                    })
                }
            }, {
                key: "removeClasses",
                value: function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        e.element.classList.remove(t)
                    })
                }
            }, {
                key: "applyCss",
                value: function(t) {
                    var e = this;
                    Object.keys(t).forEach(function(i) {
                        e.element.style[i] = t[i]
                    })
                }
            }, {
                key: "dispose",
                value: function() {
                    this.removeClasses([F.HIDDEN, F.VISIBLE, F.SHUFFLE_ITEM]), this.element.removeAttribute("style"), this.element = null
                }
            }]), t
        }();
    B.Css = {
        INITIAL: {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "visible",
            "will-change": "transform"
        },
        VISIBLE: {
            before: {
                opacity: 1,
                visibility: "visible"
            },
            after: {}
        },
        HIDDEN: {
            before: {
                opacity: 0
            },
            after: {
                visibility: "hidden"
            }
        }
    }, B.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
    };
    var O = document.body || document.documentElement,
        V = document.createElement("div");
    V.style.cssText = "width:10px;padding:2px;box-sizing:border-box;", O.appendChild(V);
    var N = window.getComputedStyle(V, null).width,
        W = "10px" === N;
    O.removeChild(V);
    var R = {
            reverse: !1,
            by: null,
            randomize: !1,
            key: "element"
        },
        H = {},
        q = "transitionend",
        P = 0,
        U = 0,
        Y = function() {
            function t(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                D(this, t), this.options = w(t.options, i), this.useSizer = !1, this.lastSort = {}, this.group = t.ALL_ITEMS, this.lastFilter = t.ALL_ITEMS, this.isEnabled = !0, this.isDestroyed = !1, this.isInitialized = !1, this._transitions = [], this.isTransitioning = !1, this._queue = [];
                var n = this._getElementOption(e);
                if (!n) throw new TypeError("Shuffle needs to be initialized with an element.");
                this.element = n, this.id = "shuffle_" + U, U += 1, this._init(), this.isInitialized = !0
            }
            return M(t, [{
                key: "_init",
                value: function() {
                    this.items = this._getItems(), this.options.sizer = this._getElementOption(this.options.sizer), this.options.sizer && (this.useSizer = !0), this.element.classList.add(t.Classes.BASE), this._initItems(), this._onResize = this._getResizeFunction(), window.addEventListener("resize", this._onResize);
                    var e = window.getComputedStyle(this.element, null),
                        i = t.getSize(this.element).width;
                    this._validateStyles(e), this._setColumns(i), this.filter(this.options.group, this.options.initialSort), this.element.offsetWidth, this._setTransitions(), this.element.style.transition = "height " + this.options.speed + "ms " + this.options.easing
                }
            }, {
                key: "_getResizeFunction",
                value: function() {
                    var t = this._handleResize.bind(this);
                    return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t
                }
            }, {
                key: "_getElementOption",
                value: function(t) {
                    return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
                }
            }, {
                key: "_validateStyles",
                value: function(t) {
                    "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
                }
            }, {
                key: "_filter",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items,
                        i = this._getFilteredSets(t, e);
                    return this._toggleFilterClasses(i), this.lastFilter = t, "string" == typeof t && (this.group = t), i
                }
            }, {
                key: "_getFilteredSets",
                value: function(e, i) {
                    var n = this,
                        s = [],
                        o = [];
                    return e === t.ALL_ITEMS ? s = i : i.forEach(function(t) {
                        n._doesPassFilter(e, t.element) ? s.push(t) : o.push(t)
                    }), {
                        visible: s,
                        hidden: o
                    }
                }
            }, {
                key: "_doesPassFilter",
                value: function(e, i) {
                    function n(t) {
                        return g(o, t)
                    }
                    if ("function" == typeof e) return e.call(i, i, this);
                    var s = i.getAttribute("data-" + t.FILTER_ATTRIBUTE_KEY),
                        o = this.options.delimeter ? s.split(this.options.delimeter) : JSON.parse(s);
                    return Array.isArray(e) ? this.options.filterMode === t.FilterMode.ANY ? e.some(n) : e.every(n) : g(o, e)
                }
            }, {
                key: "_toggleFilterClasses",
                value: function(t) {
                    var e = t.visible,
                        i = t.hidden;
                    e.forEach(function(t) {
                        t.show()
                    }), i.forEach(function(t) {
                        t.hide()
                    })
                }
            }, {
                key: "_initItems",
                value: function() {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.items).forEach(function(t) {
                        t.init()
                    })
                }
            }, {
                key: "_disposeItems",
                value: function() {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.items).forEach(function(t) {
                        t.dispose()
                    })
                }
            }, {
                key: "_updateItemCount",
                value: function() {
                    this.visibleItems = this._getFilteredItems().length
                }
            }, {
                key: "_setTransitions",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.items,
                        e = this.options.speed,
                        i = this.options.easing,
                        n = this.options.useTransforms ? "transform " + e + "ms " + i + ", opacity " + e + "ms " + i : "top " + e + "ms " + i + ", left " + e + "ms " + i + ", opacity " + e + "ms " + i;
                    t.forEach(function(t) {
                        t.element.style.transition = n
                    })
                }
            }, {
                key: "_getItems",
                value: function() {
                    var t = this;
                    return y(this.element.children).filter(function(e) {
                        return I(e, t.options.itemSelector)
                    }).map(function(t) {
                        return new B(t)
                    })
                }
            }, {
                key: "_updateItemsOrder",
                value: function() {
                    var t = this.element.children;
                    this.items = l(this.items, {
                        by: function(e) {
                            return Array.prototype.indexOf.call(t, e)
                        }
                    })
                }
            }, {
                key: "_getFilteredItems",
                value: function() {
                    return this.items.filter(function(t) {
                        return t.isVisible
                    })
                }
            }, {
                key: "_getConcealedItems",
                value: function() {
                    return this.items.filter(function(t) {
                        return !t.isVisible
                    })
                }
            }, {
                key: "_getColumnSize",
                value: function(e, i) {
                    var n = void 0;
                    return n = "function" == typeof this.options.columnWidth ? this.options.columnWidth(e) : this.useSizer ? t.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? t.getSize(this.items[0].element, !0).width : e, 0 === n && (n = e), n + i
                }
            }, {
                key: "_getGutterSize",
                value: function(t) {
                    return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.useSizer ? o(this.options.sizer, "marginLeft") : this.options.gutterWidth
                }
            }, {
                key: "_setColumns",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.getSize(this.element).width,
                        i = this._getGutterSize(e),
                        n = this._getColumnSize(e, i),
                        s = (e + i) / n;
                    Math.abs(Math.round(s) - s) < this.options.columnThreshold && (s = Math.round(s)), this.cols = Math.max(Math.floor(s), 1), this.containerWidth = e, this.colWidth = n
                }
            }, {
                key: "_setContainerSize",
                value: function() {
                    this.element.style.height = this._getContainerSize() + "px"
                }
            }, {
                key: "_getContainerSize",
                value: function() {
                    return f(this.positions)
                }
            }, {
                key: "_getStaggerAmount",
                value: function(t) {
                    return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax)
                }
            }, {
                key: "_dispatch",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return !this.isDestroyed && (e.shuffle = this, !this.element.dispatchEvent(new CustomEvent(t, {
                        bubbles: !0,
                        cancelable: !1,
                        detail: e
                    })))
                }
            }, {
                key: "_resetCols",
                value: function() {
                    var t = this.cols;
                    for (this.positions = []; t;) t -= 1, this.positions.push(0)
                }
            }, {
                key: "_layout",
                value: function(e) {
                    var i = this,
                        n = 0;
                    e.forEach(function(e) {
                        function s() {
                            e.element.style.transitionDelay = "", e.applyCss(B.Css.VISIBLE.after)
                        }
                        var o = e.point,
                            r = e.scale,
                            l = t.getSize(e.element, !0),
                            a = i._getItemPosition(l);
                        if (A.equals(o, a) && r === B.Scale.VISIBLE) return e.applyCss(B.Css.VISIBLE.before), void s();
                        e.point = a, e.scale = B.Scale.VISIBLE;
                        var u = w(B.Css.VISIBLE.before);
                        u.transitionDelay = i._getStaggerAmount(n) + "ms", i._queue.push({
                            item: e,
                            styles: u,
                            callback: s
                        }), n += 1
                    })
                }
            }, {
                key: "_getItemPosition",
                value: function(t) {
                    return p({
                        itemSize: t,
                        positions: this.positions,
                        gridSize: this.colWidth,
                        total: this.cols,
                        threshold: this.options.columnThreshold,
                        buffer: this.options.buffer
                    })
                }
            }, {
                key: "_shrink",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems(),
                        i = 0;
                    e.forEach(function(e) {
                        function n() {
                            e.applyCss(B.Css.HIDDEN.after)
                        }
                        if (e.scale === B.Scale.HIDDEN) return e.applyCss(B.Css.HIDDEN.before), void n();
                        e.scale = B.Scale.HIDDEN;
                        var s = w(B.Css.HIDDEN.before);
                        s.transitionDelay = t._getStaggerAmount(i) + "ms", t._queue.push({
                            item: e,
                            styles: s,
                            callback: n
                        }), i += 1
                    })
                }
            }, {
                key: "_handleResize",
                value: function() {
                    if (this.isEnabled && !this.isDestroyed) {
                        t.getSize(this.element).width !== this.containerWidth && this.update()
                    }
                }
            }, {
                key: "_getStylesForTransition",
                value: function(t) {
                    var e = t.item,
                        i = t.styles;
                    i.transitionDelay || (i.transitionDelay = "0ms");
                    var n = e.point.x,
                        s = e.point.y;
                    return this.options.useTransforms ? i.transform = "translate(" + n + "px, " + s + "px) scale(" + e.scale + ")" : (i.left = n + "px", i.top = s + "px"), i
                }
            }, {
                key: "_whenTransitionDone",
                value: function(t, e, i) {
                    var n = h(t, function(t) {
                        e(), i(null, t)
                    });
                    this._transitions.push(n)
                }
            }, {
                key: "_getTransitionFunction",
                value: function(t) {
                    var e = this;
                    return function(i) {
                        t.item.applyCss(e._getStylesForTransition(t)), e._whenTransitionDone(t.item.element, t.callback, i)
                    }
                }
            }, {
                key: "_processQueue",
                value: function() {
                    this.isTransitioning && this._cancelMovement();
                    var t = this.options.speed > 0,
                        e = this._queue.length > 0;
                    e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue), this._dispatchLayout()) : this._dispatchLayout(), this._queue.length = 0
                }
            }, {
                key: "_startTransitions",
                value: function(t) {
                    var e = this;
                    this.isTransitioning = !0;
                    var i = t.map(function(t) {
                        return e._getTransitionFunction(t)
                    });
                    z(i, this._movementFinished.bind(this))
                }
            }, {
                key: "_cancelMovement",
                value: function() {
                    this._transitions.forEach(u), this._transitions.length = 0, this.isTransitioning = !1
                }
            }, {
                key: "_styleImmediately",
                value: function(e) {
                    var i = this;
                    if (e.length) {
                        var n = e.map(function(t) {
                            return t.item.element
                        });
                        t._skipTransitions(n, function() {
                            e.forEach(function(t) {
                                t.item.applyCss(i._getStylesForTransition(t)), t.callback()
                            })
                        })
                    }
                }
            }, {
                key: "_movementFinished",
                value: function() {
                    this._transitions.length = 0, this.isTransitioning = !1, this._dispatchLayout()
                }
            }, {
                key: "_dispatchLayout",
                value: function() {
                    this._dispatch(t.EventType.LAYOUT)
                }
            }, {
                key: "filter",
                value: function(e, i) {
                    this.isEnabled && ((!e || e && 0 === e.length) && (e = t.ALL_ITEMS), this._filter(e), this._shrink(), this._updateItemCount(), this.sort(i))
                }
            }, {
                key: "sort",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                    if (this.isEnabled) {
                        this._resetCols();
                        var e = this._getFilteredItems();
                        e = l(e, t), this._layout(e), this._processQueue(), this._setContainerSize(), this.lastSort = t
                    }
                }
            }, {
                key: "update",
                value: function(t) {
                    this.isEnabled && (t || this._setColumns(), this.sort())
                }
            }, {
                key: "layout",
                value: function() {
                    this.update(!0)
                }
            }, {
                key: "add",
                value: function(t) {
                    var e = T(t).map(function(t) {
                        return new B(t)
                    });
                    this._initItems(e), this._setTransitions(e), this.items = this.items.concat(e), this._updateItemsOrder(), this.filter(this.lastFilter)
                }
            }, {
                key: "disable",
                value: function() {
                    this.isEnabled = !1
                }
            }, {
                key: "enable",
                value: function(t) {
                    this.isEnabled = !0, !1 !== t && this.update()
                }
            }, {
                key: "remove",
                value: function(e) {
                    var i = this;
                    if (e.length) {
                        var n = T(e),
                            s = n.map(function(t) {
                                return i.getItemByElement(t)
                            }).filter(function(t) {
                                return !!t
                            }),
                            o = function e() {
                                i.element.removeEventListener(t.EventType.LAYOUT, e), i._disposeItems(s), n.forEach(function(t) {
                                    t.parentNode.removeChild(t)
                                }), i._dispatch(t.EventType.REMOVED, {
                                    collection: n
                                })
                            };
                        this._toggleFilterClasses({
                            visible: [],
                            hidden: s
                        }), this._shrink(s), this.sort(), this.items = this.items.filter(function(t) {
                            return !g(s, t)
                        }), this._updateItemCount(), this.element.addEventListener(t.EventType.LAYOUT, o)
                    }
                }
            }, {
                key: "getItemByElement",
                value: function(t) {
                    for (var e = this.items.length - 1; e >= 0; e--)
                        if (this.items[e].element === t) return this.items[e];
                    return null
                }
            }, {
                key: "destroy",
                value: function() {
                    this._cancelMovement(), window.removeEventListener("resize", this._onResize), this.element.classList.remove("shuffle"), this.element.removeAttribute("style"), this._disposeItems(), this.items = null, this.options.sizer = null, this.element = null, this._transitions = null, this.isDestroyed = !0
                }
            }], [{
                key: "getSize",
                value: function(t, e) {
                    var i = window.getComputedStyle(t, null),
                        n = o(t, "width", i),
                        s = o(t, "height", i);
                    if (e) {
                        var r = o(t, "marginLeft", i),
                            l = o(t, "marginRight", i),
                            a = o(t, "marginTop", i),
                            u = o(t, "marginBottom", i);
                        n += r + l, s += a + u
                    }
                    return {
                        width: n,
                        height: s
                    }
                }
            }, {
                key: "_skipTransitions",
                value: function(t, e) {
                    var i = t.map(function(t) {
                        var e = t.style,
                            i = e.transitionDuration,
                            n = e.transitionDelay;
                        return e.transitionDuration = "0ms", e.transitionDelay = "0ms", {
                            duration: i,
                            delay: n
                        }
                    });
                    e(), t[0].offsetWidth, t.forEach(function(t, e) {
                        t.style.transitionDuration = i[e].duration, t.style.transitionDelay = i[e].delay
                    })
                }
            }]), t
        }();
    return Y.ShuffleItem = B, Y.ALL_ITEMS = "all", Y.FILTER_ATTRIBUTE_KEY = "groups", Y.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
    }, Y.Classes = F, Y.FilterMode = {
        ANY: "any",
        ALL: "all"
    }, Y.options = {
        group: Y.ALL_ITEMS,
        speed: 250,
        easing: "ease",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimeter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: C,
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 250,
        useTransforms: !0,
        filterMode: Y.FilterMode.ANY
    }, Y.__Point = A, Y.__sorter = l, Y.__getColumnSpan = d, Y.__getAvailablePositions = m, Y.__getShortColumn = v, Y
});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
/*
 * jQuery.countTo
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, this.dataOptions(), i), this.init()
    };
    o.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: e,
        onUpdate: null,
        onComplete: null
    }, o.prototype.init = function() {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, o.prototype.dataOptions = function() {
        var t = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            e = Object.keys(t);
        for (var o in e) {
            var i = e[o];
            "undefined" == typeof t[i] && delete t[i]
        }
        return t
    }, o.prototype.update = function() {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, o.prototype.render = function() {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }, o.prototype.restart = function() {
        this.stop(), this.init(), this.start()
    }, o.prototype.start = function() {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, o.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }, o.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }, t.fn.countTo = function(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("countTo"),
                s = !n || "object" == typeof e,
                r = "object" == typeof e ? e : {},
                a = "string" == typeof e ? e : "start";
            s && (n && n.stop(), i.data("countTo", n = new o(this, r))), n[a].call(n)
        })
    }
});
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";

    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function(b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s",
            d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
    }
    var f = [],
        g = [],
        h = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        },
        j = function(b, c, d) {
            this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
        };
    a.extend(j.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function() {
                a.update.call(a)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            this.finalDate = b(a)
        },
        update: function() {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var b, c = void 0 !== a._data(this.el, "events"),
                d = new Date;
            b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && b < 0 ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        },
        dispatchEvent: function(b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
});
! function(t) {
    "use strict";
    var s = function(s, e) {
        this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    s.prototype = {
        constructor: s,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function() {
            var s = this;
            if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var e = this.stringsElement.children();
                t.each(e, function(e, i) {
                    s.strings.push(t(i).html())
                })
            }
            this.init()
        },
        typewrite: function(t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var e = 0,
                        r = t.substr(s);
                    if ("^" === r.charAt(0)) {
                        var o = 1;
                        /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
                    }
                    if ("html" === i.contentType) {
                        var n = t.substr(s).charAt(0);
                        if ("<" === n || "&" === n) {
                            var a = "",
                                h = "";
                            for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
                            s++, a += h
                        }
                    }
                    i.timeout = setTimeout(function() {
                        if (s === t.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function() {
                                i.backspace(t, s)
                            }, i.backDelay)
                        } else {
                            0 === s && i.options.preStringTyped(i.arrayPos);
                            var e = t.substr(0, s + 1);
                            i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function(t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.backSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var e = "";
                            "<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(0 > s)););
                        s--, e += "<"
                    }
                    var r = t.substr(0, s);
                    i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
                }, e)
            }
        },
        shuffleArray: function(t) {
            var s, e, i = t.length;
            if (i)
                for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
            return t
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            this.el.attr("id");
            this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("typed"),
                o = "object" == typeof e && e;
            r && r.reset(), i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery);
! function(t, i) {
    function n(n, o) {
        function s() {
            this.x = Math.random() * n.width, this.y = Math.random() * n.height, this.vx = r.velocity - .5 * Math.random(), this.vy = r.velocity - .5 * Math.random(), this.radius = Math.random() * r.star.width
        }
        var e = t(n),
            h = n.getContext("2d"),
            a = {
                star: {
                    color: "rgba(224, 224, 224, .7)",
                    width: 1
                },
                line: {
                    color: "rgba(224, 224, 224, .7)",
                    width: .2
                },
                position: {
                    x: 0,
                    y: 0
                },
                width: i.innerWidth,
                height: i.innerHeight,
                velocity: .1,
                length: 100,
                distance: 100,
                radius: 150,
                stars: []
            },
            r = t.extend(!0, {}, a, o);
        s.prototype = {
            create: function() {
                h.beginPath(), h.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), h.fill()
            },
            animate: function() {
                var t;
                for (t = 0; t < r.length; t++) {
                    var i = r.stars[t];
                    i.y < 0 || i.y > n.height ? (i.vx = i.vx, i.vy = -i.vy) : (i.x < 0 || i.x > n.width) && (i.vx = -i.vx, i.vy = i.vy), i.x += i.vx, i.y += i.vy
                }
            },
            line: function() {
                var t, i, n, o, s = r.length;
                for (n = 0; s > n; n++)
                    for (o = 0; s > o; o++) t = r.stars[n], i = r.stars[o], t.x - i.x < r.distance && t.y - i.y < r.distance && t.x - i.x > -r.distance && t.y - i.y > -r.distance && t.x - r.position.x < r.radius && t.y - r.position.y < r.radius && t.x - r.position.x > -r.radius && t.y - r.position.y > -r.radius && (h.beginPath(), h.moveTo(t.x, t.y), h.lineTo(i.x, i.y), h.stroke(), h.closePath())
            }
        }, this.createStars = function() {
            var t, i, o = r.length;
            for (h.clearRect(0, 0, n.width, n.height), i = 0; o > i; i++) r.stars.push(new s), t = r.stars[i], t.create();
            t.line(), t.animate()
        }, this.setCanvas = function() {
            n.width = r.width, n.height = r.height
        }, this.setContext = function() {
            h.fillStyle = r.star.color, h.strokeStyle = r.line.color, h.lineWidth = r.line.width
        }, this.setInitialPosition = function() {
            o && o.hasOwnProperty("position") || (r.position = {
                x: .5 * n.width,
                y: .5 * n.height
            })
        }, this.loop = function(t) {
            t(), i.requestAnimationFrame(function() {
                this.loop(t)
            }.bind(this))
        }, this.bind = function() {
            t(document).on("mousemove", function(t) {
                r.position.x = t.pageX - e.offset().left, r.position.y = t.pageY - e.offset().top
            })
        }, this.init = function() {
            this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
        }
    }
    t.fn.constellation = function(t) {
        return this.each(function() {
            var i = new n(this, t);
            i.init()
        })
    }
}($, window);
! function() {
    "use strict";
    if ("objectFit" in document.documentElement.style != !1) return void(window.objectFitPolyfill = function() {
        return !1
    });
    var t = function(t) {
            var e = window.getComputedStyle(t, null),
                i = e.getPropertyValue("position"),
                o = e.getPropertyValue("overflow"),
                n = e.getPropertyValue("display");
            i && "static" !== i || (t.style.position = "relative"), "hidden" !== o && (t.style.overflow = "hidden"), n && "inline" !== n || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill")
        },
        e = function(t) {
            var e = window.getComputedStyle(t, null),
                i = {
                    "max-width": "none",
                    "max-height": "none",
                    "min-width": "0px",
                    "min-height": "0px",
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto",
                    "margin-top": "0px",
                    "margin-right": "0px",
                    "margin-bottom": "0px",
                    "margin-left": "0px"
                };
            for (var o in i) {
                e.getPropertyValue(o) !== i[o] && (t.style[o] = i[o])
            }
        },
        i = function(t, e, i) {
            var o, n, l, a, d;
            if (i = i.split(" "), i.length < 2 && (i[1] = i[0]), "x" === t) o = i[0], n = i[1], l = "left", a = "right", d = e.clientWidth;
            else {
                if ("y" !== t) return;
                o = i[1], n = i[0], l = "top", a = "bottom", d = e.clientHeight
            }
            return o === l || n === l ? void(e.style[l] = "0") : o === a || n === a ? void(e.style[a] = "0") : "center" === o || "50%" === o ? (e.style[l] = "50%", void(e.style["margin-" + l] = d / -2 + "px")) : o.indexOf("%") >= 0 ? (o = parseInt(o), void(o < 50 ? (e.style[l] = o + "%", e.style["margin-" + l] = d * (o / -100) + "px") : (o = 100 - o, e.style[a] = o + "%", e.style["margin-" + a] = d * (o / -100) + "px"))) : void(e.style[l] = o)
        },
        o = function(o) {
            var n = o.dataset ? o.dataset.objectFit : o.getAttribute("data-object-fit"),
                l = o.dataset ? o.dataset.objectPosition : o.getAttribute("data-object-position");
            n = n || "cover", l = l || "50% 50%";
            var a = o.parentNode;
            t(a), e(o), o.style.position = "absolute", o.style.height = "100%", o.style.width = "auto", "scale-down" === n && (o.style.height = "auto", o.clientWidth < a.clientWidth && o.clientHeight < a.clientHeight ? (i("x", o, l), i("y", o, l)) : (n = "contain", o.style.height = "100%")), "none" === n ? (o.style.width = "auto", o.style.height = "auto", i("x", o, l), i("y", o, l)) : "cover" === n && o.clientWidth > a.clientWidth || "contain" === n && o.clientWidth < a.clientWidth ? (o.style.top = "0", o.style.marginTop = "0", i("x", o, l)) : "scale-down" !== n && (o.style.width = "100%", o.style.height = "auto", o.style.left = "0", o.style.marginLeft = "0", i("y", o, l))
        },
        n = function(t) {
            if (void 0 === t) t = document.querySelectorAll("[data-object-fit]");
            else if (t && t.nodeName) t = [t];
            else {
                if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
                t = t
            }
            for (var e = 0; e < t.length; e++)
                if (t[e].nodeName) {
                    var i = t[e].nodeName.toLowerCase();
                    "img" === i ? t[e].complete ? o(t[e]) : t[e].addEventListener("load", function() {
                        o(this)
                    }) : "video" === i && (t[e].readyState > 0 ? o(t[e]) : t[e].addEventListener("loadedmetadata", function() {
                        o(this)
                    }))
                }
            return !0
        };
    document.addEventListener("DOMContentLoaded", function() {
        n()
    }), window.addEventListener("resize", function() {
        n()
    }), window.objectFitPolyfill = n
}();

$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.fit-why').offset().top }, 'slow');
     return false;
   });
 });
