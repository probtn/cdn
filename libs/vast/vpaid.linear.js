!
function(t, e, i) {
  function a(t, e) {
    for (var i = t.ownerDocument, a = i.defaultView || i.parentWindow, o = t.getBoundingClientRect(), r = {
      left: o.left,
      top: o.top
    }; a !== e;) {
      var n = a.frameElement.getBoundingClientRect();
      r.left += n.left, r.top += n.top, a = a.parent
    }
    return r
  }
  function o() {
    this.props = {
      src: "",
      currentTime: 0,
      duration: 0,
      ended: !1,
      paused: !0,
      playbackRate: 1,
      volume: 1,
      muted: !1
    }, this.handlers = {}, this.style = {}
  }
  function r(e) {
    this.rootElement = e, this.intersectionSupport = !! t.IntersectionObserver, this.intersectionRatio = -1
  }
  function n(t) {
    switch (t.type) {
    case y.AdVideoStart:
      v.hide(!1), v.updateSize(), h.mute && g.customEvent("initiallyMuted"), g.customEvent(h.playerSize), h.state = y.AdImpression, h.state = y.AdVideoStart;
      break;
    case y.AdRemainingTimeChange:
      h.metaData = t.data;
      break;
    case y.AdError:
      h.state = y.AdError, g.customEvent(y.AdError + "_" + c.MEDIA_FILES_ERROR.code), A.stop(!0), setTimeout(function() {
        E.stopAd()
      }, 250);
      break;
    case y.AdVideoComplete:
      h.customParams.fdc ? (u.d(y.create(y.AdVideoComplete, h.metaData)), v.hide(!0), setTimeout(function() {
        E.stopAd()
      }, h.customParams.daf)) : (h.state = y.AdVideoComplete, h.flags.MRCViewable && h.customParams.pg && g.customEvent("AdVideoCompleteMRC"), h.customParams.nr || v.flags.userInteraction || (A.stop(), v.hide(!0), f.video && g.trackTime("mainVideoDuration", 1e3 * Math.round(f.video.currentTime)), v.etDuration >= 0 && g.trackTime("earnedTimeDuration", v.etDuration), setTimeout(function() {
        E.stopAd()
      }, h.customParams.daf)));
      break;
    case y.AdPaused:
      h.state = y.AdPaused;
      break;
    case y.AdPlaying:
      h.state = y.AdPlaying;
      break;
    default:
      b.error("======================== UNTREATED MEDIA EVENT ========================>", t)
    }
  }
  function s(t) {
    if (t.type === v.EVENT || t.type === v.EVENTRTB) return d.call(this, t);
    if (t.type === v.APPLY) {
      if ("resumeAd" === t.data.method && h.flags.userEngaged && (h.flags.userEngaged = !1), "function" == typeof E[t.data.method]) return E[t.data.method].apply(m, t.data.args);
      if ("function" == typeof v[t.data.method]) return v[t.data.method].apply(v, t.data.args)
    }
    if (t.type === v.VIDEO && S.video) return S.video.eventHandler.call(S.video, t.data);
    switch (t.data.type) {
    case y.AdLoaded:
      v.update({
        type: "SetConfig",
        data: {
          clicks: h.adParameters.clicks,
          customParams: h.customParams,
          defaultVolume: h.defaultVolume
        }
      }), v.hide(!0), h.customParams.nov ? (p.init(), h.state = y.AdLoaded, h.linear = !0) : f.init(v.videoElement) ? (h.state = y.AdLoaded, h.linear = !0) : (h.metaData = c.MEDIA_FILES_NOT_FOUND, h.state = y.AdError, g.customEvent(y.AdError + "_" + c.MEDIA_FILES_NOT_FOUND.code));
      break;
    case y.AdClickThru:
      t.data.url ? u.d(y.create(y.AdClickThru, {
        playerHandles: !0,
        id: t.data.id,
        url: t.data.url
      })) : u.d(y.create(y.AdClickThru, {
        playerHandles: !1,
        id: t.data.id
      })), t.data.pause && E.pauseAd(), g.trackClick(), h.customParams.cet && Math.round(h.metaData.currentTime) >= 0 && g.customEvent("AdVideoClick" + Math.round(h.metaData.currentTime)), h.customParams.kac > 0 && (h.customParams.nov ? (p.stop(), g.trackTime("animationDuration", 1e3 * Math.round(h.metaData.currentTime))) : (f.stop(), f.video && g.trackTime("mainVideoDuration", 1e3 * Math.round(f.video.currentTime))), v.etDuration >= 0 && g.trackTime("earnedTimeDuration", v.etDuration), A.stop(), S.stop(), v.hide(!0), setTimeout(function() {
        E.stopAd()
      }, h.customParams.daf));
      break;
    case y.AdUserClose:
      h.state = y.AdUserClose, h.customParams.nov ? (p.stop(), g.trackTime("animationDuration", 1e3 * Math.round(h.metaData.currentTime))) : (f.stop(), f.video && g.trackTime("mainVideoDuration", 1e3 * Math.round(f.video.currentTime))), v.etDuration >= 0 && g.trackTime("earnedTimeDuration", v.etDuration), A.stop(), S.stop(), v.hide(!0), setTimeout(function() {
        E.stopAd()
      }, h.customParams.daf);
      break;
    default:
      b.error("======================== UNTREATED VIEW EVENT ========================>", t)
    }
  }
  function d(t) {
    t.type === v.EVENT && t.data.type ? (g.customEvent(t.data.type, t.data.element), h.isPreviewer && console.log("JS-VPAID-WARM::CUSTOM EVENT =>", t.data.type)) : t.type === v.EVENTRTB && (0 !== h.customParams.impid && g.rtbEvent(t.data), h.isPreviewer && console.log("JS-VPAID-WARM::RTB EVENT ID =>", t.data))
  }
  var u, c, l, h, m, p, f, v, g, A, E, y, b;
  Object.assign || Object.defineProperty(Object, "assign", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(t, e) {
      "use strict";
      if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
      for (var i = Object(t), a = 1; a < arguments.length; a++) {
        var o = arguments[a];
        if (void 0 !== o && null !== o) for (var r = Object.keys(Object(o)), n = 0, s = r.length; n < s; n++) {
          var d = r[n],
              u = Object.getOwnPropertyDescriptor(o, d);
          void 0 !== u && u.enumerable && (i[d] = o[d])
        }
      }
      return i
    }
  });
  var S;
  S = {
    supported: function() {
      return !0
    },
    active: !1,
    init: function(e) {
      this.active = !0, this.environmentSlot = e, this.video = new o, this.targetWindow = function() {
        var e = t;
        try {
          for (; e.parent !== e && e.parent.document.domain === e.document.domain;) e = e.parent
        } catch (i) {}
        return e
      }(), this.slot = this.targetWindow.document.body, this.initEvents(this.targetWindow)
    },
    stop: function() {
      this.active && (this.targetWindow.removeEventListener("resize", this.updateSize), this.targetWindow.removeEventListener("scroll", this.updateSize))
    },
    initEvents: function(t) {
      this.updateSize = this.updateSize.bind(this), t.addEventListener("resize", this.updateSize), t.addEventListener("scroll", this.updateSize)
    },
    updateSize: function() {
      var t = a(this.environmentSlot, this.targetWindow);
      v.update({
        type: "AdResize",
        data: {
          width: h.adSize.width,
          height: h.adSize.height,
          left: t.left,
          top: t.top
        }
      })
    }
  }, o.prototype.play = function() {
    this.send("play")
  }, o.prototype.pause = function() {
    this.send("pause")
  }, o.prototype.canPlayType = function(t) {
    return e.createElement("video").canPlayType(t)
  }, o.prototype.addEventListener = function(t, e) {
    this.handlers[t] = e
  }, o.prototype.appendChild = function(t) {
    this.src = t.getAttribute("src")
  }, o.prototype.setAttribute = function(t, e) {
    this.props[t] = e
  }, o.prototype.removeAttribute = function(t) {}, o.prototype.eventHandler = function(t) {
    this.props = Object.assign(this.props, t.props), this.handlers[t.type] && "function" == typeof this.handlers[t.type] && this.handlers[t.type].call(this, {
      type: t.type,
      target: this
    })
  }, o.prototype.send = function(t) {
    v.update({
      type: "video",
      data: {
        method: t,
        props: this.props
      }
    })
  }, Object.defineProperties(o.prototype, {
    src: {
      set: function(t) {
        this.props.src = t
      },
      get: function() {
        return this.props.src
      }
    },
    volume: {
      set: function(t) {
        this.props.volume = t, this.send("volume")
      },
      get: function() {
        return this.props.volume
      }
    },
    currentTime: {
      get: function() {
        return this.props.currentTime
      }
    },
    duration: {
      get: function() {
        return this.props.duration
      }
    },
    currentSrc: {
      get: function() {
        return this.props.currentSrc
      }
    }
  });
  var T;
  T = {
    init: function(t) {
      function e(t) {
        return t.childNodes && t.childNodes[0] && (t = t.childNodes[0], t.wholeText) ? t.wholeText.trim() : null
      }
      this.inited = !0, this.events = {};
      var i = new XMLHttpRequest;
      i.open("GET", t, !0), i.onreadystatechange = function() {
        if (4 === i.readyState && 200 === i.status) {
          var t = i.responseXML;
          if (t) {
            for (var a, o = t.querySelectorAll("TrackingEvents event"), r = 0, n = o.length; r < n; r++) a = o[r], this.addEvent(a.getAttribute("name"), e(a));
            if (this.loaded = !0, this.queue) for (; this.queue.length;) this.trackEvent(this.queue.shift())
          }
        }
      }.bind(this), i.send()
    },
    addEvent: function(t, e) {
      t && e && this.inited && (this.events[t] = this.events[t] || [], this.events[t].push(e))
    },
    trackEvent: function(t) {
      if (this.inited) {
        if (!this.loaded) return this.queue = this.queue || [], void this.queue.push(t);
        var e = this.events[t];
        if (e && e.length) for (var i = 0, a = e.length; i < a; i++) this.sendToURL(e[i])
      }
    },
    sendToURL: function(t) {
      var e = new Image;
      t = t.replace("~RANDOM~", Math.round(1e6 * Math.random())), t = t.replace("[RANDOM]", Math.round(1e6 * Math.random())), t = t.replace("%random%", Math.round(1e6 * Math.random())), t = t.replace("%location%", h.location), e.src = t
    }
  }, u = {
    subscribers: {},
    subscribe: function(t, e, i) {
      "string" == typeof e && (e = [e]);
      for (var a = 0, o = e.length; a < o; a++) {
        var r = e[a];
        this.subscribers[r] || (this.subscribers[r] = []), this.subscribers[r].push({
          fn: t,
          ctx: i || null
        })
      }
    },
    unsubscribe: function(t, e) {
      "string" == typeof e && (e = [e]);
      for (var i = e.length; i >= 0; i--) {
        var a = this.subscribers[e[i]];
        if (a && Array.isArray(a) && a.length) for (var o = a.length - 1; o >= 0; o--)"undefined" != typeof a[o] && a[o].fn === t && a.splice(o, 1)
      }
    },
    d: function(t) {
      t.type != y.AdRemainingTimeChange && t.type != y.AdError && b.log("DispatchEvent =>", t.type, A.getViewAbility(h.viewAbilityPercent, h.viewAbilityHasFocus).state, (this.subscribers[t.type] || []).length), (this.subscribers[t.type] || []).forEach(function(e) {
        e.fn && (t.type == y.AdClickThru && h.customParams.plc ? e.fn.call(e.ctx, t.data.url, t.data.id, t.data.playerHandles) : e.fn.call(e.ctx, t))
      })
    }
  }, c = {
    WRONG_INIT_PARAMS: {
      code: 900,
      message: "Initialization parameters are wrong"
    },
    WRONG_AD_PARAMETERS: {
      code: 900,
      message: "Can't parse AdParameters"
    },
    WOW_ROLL_CROSSDOMAIN_ERROR: {
      code: 900,
      message: "Can't play WOW-Roll from cross-domain frame"
    },
    NOT_ALLOWED_METHOD: {
      code: 0,
      message: "This method is not supported"
    },
    MEDIA_FILES_ERROR: {
      code: 405,
      message: "Could not display mediaFile"
    },
    MEDIA_FILES_NOT_FOUND: {
      code: 403,
      message: "Supported mediaFiles not found"
    }
  }, l = {
    WOW: "wow",
    SIMPLE: "simple"
  }, h = Object.create(Object.prototype, {
    linear: {
      get: function() {
        return this._linear || !0
      },
      set: function(t) {
        this._linear !== t && (this._linear = t, u.d(y.create(y.AdLinearChange, {
          value: t
        })))
      }
    },
    isPreviewer: {
      get: function() {
        return this._isPreviewer || (this._isPreviewer = "none", r.getPosition() !== r.X_FRAME && (this._isPreviewer = "clients.weborama.nl" == t.top.location.host ? "preview" : "none")), "preview" == this._isPreviewer
      }
    },
    remainingTime: {
      get: function() {
        return this._remainingTime || -1
      },
      set: function(t) {
        this.remainingTime !== t && (this._remainingTime = t, v.update({
          type: y.AdRemainingTimeChange,
          data: this.metaData
        }), u.d(y.create(y.AdRemainingTimeChange, {
          value: this.remainingTime
        })))
      }
    },
    canSkip: {
      get: function() {
        return this._canSkip || !1
      },
      set: function(t) {
        this._canSkip !== t && (this._canSkip = t, v.update({
          type: y.AdSkippableStateChange,
          data: {
            value: t
          }
        }), u.d(y.create(y.AdSkippableStateChange, {
          value: t
        })))
      }
    },
    adSize: {
      get: function() {
        return this._adSize || {}
      },
      set: function(t) {
        if (this._adSize ? this._adSize.width === t.width && this._adSize.height === t.height || (this._adSize = t, v.update({
          type: y.AdSizeChange,
          data: this.adSize
        }), u.d(y.create(y.AdSizeChange, {
          width: t.width,
          height: t.height
        }))) : this._adSize = t, this.adSize.width && "object" == typeof this.playerSizeParams) {
          if (this.fullscreen) return void(this.playerSize = "PlayerFullscreen");
          var e = this.playerSizeParams,
              i = this.adSize.width;
          for (var a in e) if (e.hasOwnProperty(a)) {
            var o = e[a];
            if ((!o[0] || i >= o[0]) && (!o[1] || i < o[1])) {
              this.playerSize = a;
              break
            }
          }
        }
      }
    },
    playerSize: {
      get: function() {
        return this._playerSize
      },
      set: function(t) {
        this._playerSize = t
      }
    },
    fullscreen: {
      get: function() {
        return this.adSize.viewMode === h.FULLSCREEN
      }
    },
    duration: {
      get: function() {
        return this._duration || -2
      },
      set: function(t) {
        this._duration !== t && (this._duration = t, u.d(y.create(y.AdDurationChange, {
          duration: t
        })))
      }
    },
    defaultVolume: {
      get: function() {
        return this._defaultVolume
      },
      set: function(t) {
        t && (this._defaultVolume = t)
      }
    },
    volume: {
      get: function() {
        return this._volume || this.defaultVolume
      },
      set: function(t) {
        if (this._volume !== t) {
          this._volume = t, this.defaultVolume = t, v.update({
            type: y.AdVolumeChange,
            data: {
              volume: t
            },
            mute: !! t
          });
          try {
            "undefined" != typeof f.video && (f.video.volume = t)
          } catch (e) {
            b.error("set volume", t, e)
          }
          g.trackEvent(y.AdVolumeChange), u.d(y.create(y.AdVolumeChange, {
            volume: t
          }))
        }
      }
    },
    mute: {
      get: function() {
        return this._mute
      },
      set: function(t) {
        if (this._mute !== !! t && g.customEvent(t ? "mute" : "unmute"), "undefined" != typeof f.video) {
          try {
            f.video.muted = !! t
          } catch (e) {
            b.error("set muted", t, e)
          }
          f.video.f || (t ? f.video.setAttribute("muted", "muted") : f.video.removeAttribute("muted"))
        }
        this._mute = !! t
      }
    },
    state: {
      set: function(t) {
        this.state !== t && this.state !== y.AdStopped && (this._state = t, v.update({
          type: t,
          data: this.metaData
        }), g.trackEvent(t), u.d(y.create(t, this.metaData)))
      },
      get: function() {
        return this._state
      }
    },
    metaData: {
      get: function() {
        return this._metaData || {
          totalTime: 30,
          currentTime: 0
        }
      },
      set: function(t) {
        if (this._metaData) {
          this._metaData = t, t.currentTime >= this.customParams.co && (h.canSkip = !0);
          var e = t.currentTime / t.totalTime;
          e >= .25 && h.middleEvents[0] === !1 && (h.middleEvents[0] = !0, g.trackEvent(y.AdVideoFirstQuartile), u.d(y.create(y.AdVideoFirstQuartile, t))), e >= .5 && h.middleEvents[1] === !1 && (h.middleEvents[1] = !0, g.trackEvent(y.AdVideoMidpoint), u.d(y.create(y.AdVideoMidpoint, t))), e >= .75 && h.middleEvents[2] === !1 && (h.middleEvents[2] = !0, g.trackEvent(y.AdVideoThirdQuartile), u.d(y.create(y.AdVideoThirdQuartile, t))), h.customParams.fdc && t.totalTime - t.currentTime < h.customParams.fdc && h.middleEvents[3] === !1 && (h.middleEvents[3] = !0, g.trackEvent(y.AdVideoComplete), h.flags.MRCViewable && h.customParams.pg && g.customEvent("AdVideoCompleteMRC"), A.stop())
        } else this._metaData = t, u.d(y.create(y.AdDurationChange, this.metaData));
        h.remainingTime = this.metaData.totalTime - this.metaData.currentTime
      }
    },
    middleEvents: {
      value: [!1, !1, !1, !1]
    },
    savedSource: {
      get: function() {
        return this._savedSource || ""
      },
      set: function(t) {
        this._savedSource = t
      }
    },
    savedAttributes: {
      value: {}
    },
    origin: {
      get: function() {
        if (!this._origin) {
          var t = h.adParameters.customView || h.adParameters.mediapath,
              e = t.split("/");
          e.length = 3, this._origin = e.join("/")
        }
        return this._origin
      }
    },
    location: {
      get: function() {
        if (!this._location) if (this._location = encodeURIComponent(h.realWindow.location.href), r.getPosition() !== r.X_FRAME) this._location = encodeURIComponent(t.top.location.href);
        else
        try {
          var e = h.realWindow.location.ancestorOrigins;
          if (e && e.length > 0) {
            var i = e[e.length - 1];
            i.indexOf("chrome-extension") >= 0 ? this._location = encodeURIComponent("fraudulent-chromium-extension") : "http://a" == i || "https://a" == i ? this._location = encodeURIComponent(e[0]) : this._location = encodeURIComponent(i)
          }
        } catch (a) {}
        return this._location
      }
    },
    realWindow: {
      get: function() {
        var t = (v.overlayRoot || v.root).ownerDocument;
        return t.defaultView || t.parentWindow
      }
    },
    isInIframe: {
      get: function() {}
    },
    viewAbilityPercent: {
      get: function() {
        return 50
      }
    },
    viewAbilityHasFocus: {
      get: function() {
        return !0
      }
    },
    customParams: {
      get: function() {
        return this._customParams
      },
      set: function(t) {
        this._customParams || (this._customParams = t)
      }
    },
    format: {
      get: function() {
        return this.adParameters && this.adParameters.format ? this.adParameters.format : l.SIMPLE
      }
    },
    flags: {
      value: {}
    },
    FULLSCREEN: {
      value: "fullscreen"
    },
    NORMAL: {
      value: "normal"
    },
    animationStartTime: {
      get: function() {
        return this._startTime
      },
      set: function(t) {
        this._startTime = t
      }
    },
    animationInterval: {
      get: function() {
        return this._interval
      },
      set: function(t) {
        this._interval = t
      }
    }
  }), p = {
    flags: {},
    init: function() {
      if (!this.flags.inited && !this.flags.started) return this.flags.inited = !0, !0
    },
    play: function() {
      return !(!this.flags.inited || this.flags.started) && (this.flags.started = !0, h.animationStartTime = Date.now(), void(h.animationInterval = setInterval(function() {
        var t = Date.now() - h.animationStartTime,
            e = (t / 1e3).toFixed(1),
            i = {
            totalTime: h.customParams.nov,
            currentTime: e
            };
        return i.currentTime >= i.totalTime ? (p.stop(), void p.complete()) : (p.flags.videoStart || (p.flags.videoStart = !0, n.call(p, y.create(y.AdVideoStart, i))), void(h.flags.userEngaged || n.call(p, y.create(y.AdRemainingTimeChange, i))))
      }, r.DELAY)))
    },
    pause: function() {},
    resume: function() {},
    stop: function() {
      return !(!this.flags.started || this.flags.stopped) && (this.flags.stopped = !0, void clearInterval(h.animationInterval))
    },
    complete: function() {
      h.state = y.AdVideoComplete, h.flags.MRCViewable && h.customParams.pg && g.customEvent("AdVideoCompleteMRC"), g.trackTime("animationDuration", 1e3 * Math.round(h.metaData.currentTime)), v.etDuration >= 0 && g.trackTime("earnedTimeDuration", v.etDuration), A.stop(), S.stop(), v.hide(!0), setTimeout(function() {
        E.stopAd()
      }, h.customParams.daf)
    },
    event: function(t) {
      if (!this.flags.stopped) {
        var e = {
          totalTime: h.customParams.nov,
          currentTime: this.currentTime
        };
        switch (t) {
        case "play":
          this.flags.videoStart && n.call(this, y.create(y.AdPlaying, e));
          break;
        case "pause":
          if (e.currentTime / e.totalTime >= .98) return;
          h.flags.userEngaged || n.call(this, y.create(y.AdPaused, e));
          break;
        case "ended":
          n.call(this, y.create(y.AdVideoComplete, e));
          break;
        case "error":
          b.error("JS-VPAID-WARM::ERROR => mediaElement as animation"), n.call(this, y.create(y.AdError, e));
          break;
        case "timeupdate":
          !this.flags.videoStart && e.currentTime && (this.flags.videoStart = !0, n.call(this, y.create(y.AdVideoStart, e))), h.flags.userEngaged || n.call(this, y.create(y.AdRemainingTimeChange, e));
          break;
        default:
          b.error("JS-VPAID-WARM::ERROR => wrong animation timer event")
        }
      }
    },
    events: ["play", "pause", "ended", "timeupdate", "error"]
  }, f = {
    flags: {},
    init: function(t) {
      if (!this.flags.inited && !this.flags.started) {
        this.flags.inited = !0, this.video = t;
        var i, a, o = h.adParameters.mediafiles,
            s = h.adParameters.mediapath;
        for (i = 0; i < this.events.length; i++) this.video.addEventListener(this.events[i], function(t) {
          if (!this.flags.stopped) {
            var e = {
              totalTime: t.target.duration,
              currentTime: t.target.currentTime
            };
            switch (t.type) {
            case "play":
              this.flags.videoStart && n.call(this, y.create(y.AdPlaying, e));
              break;
            case "pause":
              if (e.currentTime / e.totalTime >= .98) return;
              h.flags.userEngaged || n.call(this, y.create(y.AdPaused, e));
              break;
            case "ended":
              n.call(this, y.create(y.AdVideoComplete, e));
              break;
            case "error":
              b.error("JS-VPAID-WARM::ERROR => mediaElement", t), n.call(this, y.create(y.AdError, e));
              break;
            case "timeupdate":
              !this.flags.videoStart && e.currentTime && (this.flags.videoStart = !0, n.call(this, y.create(y.AdVideoStart, e)), t.target.currentSrc && t.target.currentSrc.match(/[a-z0-9]+$/) && g.customEvent(t.target.currentSrc.match(/[a-z0-9]+$/)[0].toUpperCase())), h.flags.userEngaged || n.call(this, y.create(y.AdRemainingTimeChange, e))
            }
          }
        }.bind(this), !0);
        for (1 === this.video.nodeType && "undefined" != typeof this.video.hasAttribute && this.video.hasAttribute("src") && "" != this.video.getAttribute("src") && (h.savedSource = this.video.getAttribute("src"), this.video.removeAttribute("src")), i = 0; i < o.length; i++) if (this.video.canPlayType(o[i].type)) {
          var d = e.createElement("source");
		  console.log("d.src = s + o[i].src", d, s, o[i], o[i].src);
          if (d.type = o[i].type, d.src = o[i].src, d.id = "wb-src-" + Math.round(1e12 * Math.random()).toString(36), "function" == typeof this.video.appendChild && this.video.appendChild(d), this.video.f && this.video.f.indexOf("goog_") != -1 || "function" == typeof this.video.hasAttribute && !this.video.hasAttribute("src") || "function" == typeof this.video.getAttribute && "" == this.video.getAttribute("src")) {
            var u = o[i].src;
            this.video.setAttribute("src", u)
          }
          "undefined" != typeof this.video.load && this.video.load(), a = !0
        }
        var c = navigator.userAgent;
        if (c.indexOf("Chrome") < 0 && c.indexOf("Safari") >= 0) {
          var l, m;
          l = c.indexOf("Safari"), m = c.substring(l + 7), (l = c.indexOf("Version")) != -1 && (m = c.substring(l + 8));
          var p = parseInt(m.substring(0, 2));
          p >= 11 && (h.volume = 0, h.mute = !0)
        }
        return r.getPosition() == r.X_FRAME && h.customParams.sd > 0 && (h.volume = 0, h.mute = !0), a
      }
    },
    play: function() {
      return !!(h.customParams.nr || this.flags.inited && !this.flags.started) && (h.customParams.nr && (h.middleEvents[0] = !1, h.middleEvents[1] = !1, h.middleEvents[2] = !1), this.flags.started = !0, this.video.play(), !0)
    },
    pause: function() {
      !this.flags.paused && this.flags.started && (this.flags.paused = !0, this.video.pause())
    },
    rewind: function(t) {
      this.video.currentTime = t
    },
    resume: function() {
      this.flags.paused && (this.flags.paused = !1, this.video.play())
    },
    stop: function() {
      return !(!this.flags.started || this.flags.stopped) && (this.flags.stopped = !0, void this.pause())
    },
    events: ["play", "pause", "ended", "timeupdate", "error"]
  }, v = {
    APPLY: "apply",
    COMMAND: "command",
    EVENT: "event",
    EVENTRTB: "eventRTB",
    TRACK: "track",
    VIDEO: "video",
    flags: {},
    etDuration: -1,
    setFlag: function(t, e) {
      v.flags[t] = e
    },
    init: function(t, i) {
      this.root = t.appendChild(e.createElement("div")), this.root.id = "wb-" + Math.round(1e12 * Math.random()).toString(36), h.customParams.fh && (this.root.style.height = "100%");
      var a = e.createElement("link");
      a.rel = "stylesheet", a.href = h.adParameters.mediapath + "style.min.css", this.root.appendChild(a), S.active && (this.overlayRoot = S.slot.appendChild(e.createElement("div")), this.overlayRoot.id = this.root.id + "-overlay", this.overlayRoot.className = "wb-overlay", this.overlayRoot.appendChild(a.cloneNode())), this.videoElement = h.customParams.ivs || !i ? this.root.appendChild(e.createElement("video")) : i, this.videoElement.setAttribute("webkit-playsinline", "playsinline"), this.videoElement.setAttribute("playsinline", "playsinline"), h.customParams.nr && this.videoElement.setAttribute("preload", "auto"), h.customParams.up && (this.videoElement.poster = h.adParameters.mediapath + "poster.png"), h.customParams.vcl && this.videoElement.addEventListener("click", function(t) {
        v.update({
          type: y.AdClickThru,
          data: {
            value: h.customParams.vcl
          }
        })
      }), this.updateSize(), h.realWindow.addEventListener("message", function(t) {
        if (t.origin === h.origin) {
          var e = {};
          try {
            e = JSON.parse(t.data)
          } catch (i) {}
          Array.isArray(e) || (e = [e]);
          for (var a = 0; a < e.length; a++) e[a].id === this.root.id && s.call(this, e[a])
        }
      }.bind(this), !1), this.frameElement = (this.overlayRoot || this.root).appendChild(e.createElement("iframe")), this.frameElement.setAttribute("scrolling", "no"), this.frameElement.setAttribute("frameborder", "no"), this.frameElement.setAttribute("allow", "autoplay"), this.frameElement.src = (h.adParameters.customView ? h.adParameters.customView : h.adParameters.mediapath + "index.html") + "?id=" + this.root.id, this.frameElement.addEventListener("load", function(t) {
        v.update({
          type: y.AdSizeChange,
          data: h.adSize
        })
      })
    },
    hide: function(t) {
      this.frameElement && (this.frameElement.style.display = t ? "none" : "inline-block")
    },
    update: function(t) {
      this.frameElement && this.frameElement.contentWindow && this.frameElement && this.frameElement.contentWindow.postMessage(JSON.stringify({
        id: this.root.id,
        event: t
      }), "*")
    },
    destroy: function() {
      if (!this.root || !this.root.parentNode || "function" != typeof this.root.parentNode.removeChild) return !1;
      if (this.root.parentNode.removeChild(this.root), this.videoElement && this.videoElement.attributes) for (; this.videoElement.attributes.length;) this.videoElement.removeAttribute(this.videoElement.attributes[0].nodeName);
      for (var t in h.savedAttributes) this.videoElement.setAttribute(t, h.savedAttributes[t]);
      if (h.savedSource && "" !== h.savedSource && (this.videoElement.setAttribute("src", h.savedSource), this.videoElement.load(), this.videoElement.play()), "function" == typeof this.videoElement.querySelectorAll) for (var e = this.videoElement.querySelectorAll("source[id^='wb-src-']"), i = 0; i < e.length; i++) this.videoElement.removeChild(e[i]);
      if (this.videoElement && this.videoElement.attributes) for (var a, i = 0, o = this.videoElement.attributes, r = o.length; i < r; i++) a = o[i];
      return this.overlayRoot && this.overlayRoot.parentNode && this.overlayRoot.parentNode.removeChild && this.overlayRoot.parentNode.removeChild(this.overlayRoot), !0
    },
    cssStyle: function(t) {
      h.customParams.fh || (this.root.style.cssText = t, this.updateSize())
    },
    resizeVideoElement: function(t) {
      function e(t) {
        return t + ("string" == typeof t ? "" : "px")
      }
      this.videoElement && this.videoElement.style && ((0 != t.left && 0 !== t.left.indexOf("0") || 0 != t.top && 0 !== t.top.indexOf("0") || "100%" !== t.width || "100%" !== t.height) && (h.flags.resizeVideoElement = !0, this.videoElement.style.position = "absolute"), this.videoElement.style.width = e(t.width), this.videoElement.style.height = e(t.height), this.videoElement.style.top = e(t.top), this.videoElement.style.left = e(t.left))
    },
    translateVideoElement: function(t) {
      if (this.videoElement && this.videoElement.style) {
        var e = t.hor ? "-50%," : "0,",
            i = t.ver ? "-50%)" : "0)",
            a = "translate(" + e + i;
        this.videoElement.style.webkitTransform = a, this.videoElement.style.transform = a
      }
    },
    updateSize: function() {
      return !!this.root && (S.active && S.updateSize(), void(h.customParams.fh || (this.root.style.width = h.adSize.width + "px", this.root.style.height = h.adSize.height + "px", !h.flags.resizeVideoElement && this.videoElement && this.videoElement.style && (this.videoElement.style.width = h.adSize.width + "px", this.videoElement.style.height = h.adSize.height + "px"))))
    },
    setETDuration: function(t) {
      v.etDuration >= 0 ? v.etDuration += t : v.etDuration = t
    }
  }, g = {
    init: function(e, i) {
      this.options = {
        protocol: t.location.protocol,
        uuid: e.uuid,
        defaultElement: "video"
      }, this.options.protocol.indexOf("http") == -1 && (this.options.protocol = "https:"), this.viewableEvents = i || []
    },
    protocol: function() {
      return this.options.protocol
    },
    trackEvent: function(t) {
      if (!h.isPreviewer) {
        if (y.convert(t) !== t) {
          var e = "{{protocol}}//evt.adrcntr.com/e/?id={{uuid}}&ci=&ho=HOST&pl=default&cf=0&ff=0&el={{element}}&rn={{random}}&ob=default&ev={{name}}&mo=0&fof=1&foe=1&foo=1&ms=&ca=0&rt=p";
          t === y.AdImpression && (e = "{{protocol}}//cntr.adrcntr.com/i/?id={{uuid}}&ci=&ho=HOST&pl=default&fl=0&sw=0&sh=0&rt=p"), this.options.name = t, this.options.random = Math.round(1e6 * Math.random()), this.options.element = this.options.defaultElement, this.sendToURL(this.prepareURL(e, this.options)), T.trackEvent(t)
        }
        this.viewableEvents.indexOf(t) != -1 && this.customEvent(t + A.getViewAbility(h.viewAbilityPercent, h.viewAbilityHasFocus).state)
      }
    },
    trackClick: function() {
      this.customEvent("scrc")
    },
    trackTime: function(t, e) {
      if (!h.isPreviewer && t && e && !isNaN(e)) {
        var i = "{{protocol}}//evt.adrcntr.com/t/?id={{uuid}}&ho=HOST&tc[{{name}}]={{time}}&rn={{random}}";
        this.options.name = t, this.options.random = Math.round(1e6 * Math.random()), this.options.time = e, this.sendToURL(this.prepareURL(i, this.options))
      }
    },
    customEvent: function(t, e) {
      if (!h.isPreviewer && t) {
        var i = "{{protocol}}//evt.adrcntr.com/e/?id={{uuid}}&ci=&ho=HOST&pl=default&cf=0&ff=0&el={{element}}&rn={{random}}&ob=default&ev={{name}}&mo=0&fof=1&foe=1&foo=1&ms=&ca=0&rt=p";
        this.options.name = t, this.options.random = Math.round(1e6 * Math.random()), this.options.element = e || this.options.defaultElement, this.sendToURL(this.prepareURL(i, this.options)), T.trackEvent(t)
      }
    },
    rtbEvent: function(t) {
      if (t || 0 === t) {
        var e = "{{protocol}}//rtb.com.ru/event?type=clickExtra&tracking={{impid}}&index={{eventindex}}&noRedirect=true";
        this.options.impid = h.customParams.impid, this.options.eventindex = t, this.sendToURL(this.prepareURL(e, this.options))
      }
    },
    prepareURL: function(t, e) {
      e = e || this.options;
      for (var i in e) e.hasOwnProperty(i) && (t = t.replace(new RegExp("{{" + i + "}}", "g"), e[i]));
      return t
    },
    sendToURL: function(t, e) {
      var i = new Image;
      e && (i.onload = i.onerror = e), i.src = t
    }
  }, r.DELAY = 250, r.ON_PAGE = "OnPage", r.S_FRAME = "SameDomainFrame", r.X_FRAME = "CrossDomainFrame", r.VIEWABLE = "Viewable", r.NOT_VIEWABLE = "Unviewable", r.UNDETERMINED = "Undetermined", r.prototype.hasFocus = function() {
    return ("undefined" === e.hidden || e.hidden !== !0) && (r.getPosition() === r.X_FRAME || "function" != typeof t.top.document.hasFocus || t.top.document.hasFocus())
  }, r.prototype.getPosition = function() {
    if (!this.position) if (t.top === h.realWindow) this.position = r.ON_PAGE;
    else {
      this.position = r.S_FRAME;
      try {
        for (var e = h.realWindow; e.parent !== e;) {
          if (e.parent.document.domain !== e.document.domain) {
            this.position = r.X_FRAME;
            break
          }
          e = e.parent
        }
      } catch (i) {
        this.position = r.X_FRAME
      }
    }
    return this.position
  }, r.prototype.init = function(t, e) {
    if (this.intersectionSupport) {
      var i = navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? this.rootElement.ownerDocument.defaultView.IntersectionObserver : IntersectionObserver;
      this.intersectionObserver = new i(function(t) {
        this.intersectionRatio = Math.round(1e4 * t[0].intersectionRatio) / 100
      }.bind(this), {
        threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
      }), this.intersectionObserver.observe(this.rootElement)
    } else if (r.getPosition() == r.X_FRAME) {
      if (t && t.length && "function" == typeof e) for (; t.length;) e(t.shift().name + r.UNDETERMINED);
      return !1
    }
    2 == arguments.length && t && t.length && "function" == typeof e && (this.observerData = t, this.observerHandler = e, this.updater = setInterval(r.updateTime.bind(this), r.DELAY))
  }, r.prototype.stop = function(t) {
    if (clearInterval(this.updater), r.updateTime.call(this), this.observerData && this.observerData.length && !t) for (; this.observerData.length;) this.observerHandler(this.observerData.shift().name + r.NOT_VIEWABLE);
    this.observerData = []
  }, r.prototype.getViewAbility = function(e, i) {
    if (this.intersectionSupport) return r.match(this.hasFocus(), i, this.intersectionRatio, e);
    if (r.getPosition() == r.X_FRAME) return {
      state: r.UNDETERMINED,
      percent: 0,
      focus: !1
    };
    var a = this.rootElement.ownerDocument,
        o = a.defaultView || a.parentWindow,
        n = this.rootElement.getBoundingClientRect(),
        s = r.calculateArea(n, o);
    try {
      for (; o !== t.top;) {
        var d = o.name || (o.name = "wb-" + Math.round(1e6 * Math.random()).toString(16));
        o = o.parent, n = o.frames[d].frameElement.getBoundingClientRect(), s = Math.min(r.calculateArea(n, o), s)
      }
    } catch (u) {
      return {
        state: r.UNDETERMINED,
        percent: 0,
        focus: !1
      }
    }
    return s = Math.round(1e4 * s) / 100, r.match(this.hasFocus(), i, s, e)
  }, r.updateTime = function() {
    var t = this.getViewAbility();
    if (!this.observerData || !this.observerData.length) return clearInterval(this.updater);
    for (var e = [], i = 0; i < this.observerData.length; i++) {
      var a = this.observerData[i];
      "string" != typeof a.duration || a.duration.indexOf("%") == -1 || isNaN(h.metaData.totalTime) || (a.duration = Math.floor(2 * h.metaData.totalTime) / 2 * parseInt(a.duration, 10) * 10), (!a.useFocus || t.focus) && Math.round(t.percent) >= a.percent ? "true" == a.useSound ? a.timeInView = h.mute ? 0 : r.DELAY + (a.timeInView || 0) : a.timeInView = r.DELAY + (a.timeInView || 0) : a.timeInView = 0, a.timeInView >= a.duration ? this.observerHandler(a.name + r.VIEWABLE) : e.push(a)
    }
    this.observerData = e
  }, r.match = function(t, e, i, a) {
    var o = r.NOT_VIEWABLE;
    return (t || !e) && i >= a && (o = r.VIEWABLE), {
      state: o,
      focus: t,
      percent: i
    }
  }, r.calculateArea = function(t, e) {
    var i = t.width * t.height,
        a = t.width,
        o = t.height;
    return t.top < 0 && (o += t.top), t.bottom > e.innerHeight && (o -= t.bottom - e.innerHeight), t.left < 0 && (a += t.left), t.right > e.innerWidth && (a -= t.right - e.innerWidth), a * o / i
  }, r.getPosition = function() {
    if (!this.position) if (t.top === h.realWindow) this.position = r.ON_PAGE;
    else {
      this.position = r.S_FRAME;
      try {
        for (var e = h.realWindow; e.parent !== e;) {
          if (e.parent.document.domain !== e.document.domain) {
            this.position = r.X_FRAME;
            break
          }
          e = e.parent
        }
      } catch (i) {
        this.position = r.X_FRAME
      }
    }
    return this.position
  }, y = {
    create: function(t, e) {
      return {
        type: t,
        data: e
      }
    },
    convert: function(t) {
      return {
        AdLoaded: "load",
        AdStarted: "creativeView",
        AdVideoStart: "start",
        AdImpression: "impression",
        AdVideoFirstQuartile: "firstQuartile",
        AdVideoMidpoint: "midpoint",
        AdVideoThirdQuartile: "thirdQuartile",
        AdVideoComplete: "complete",
        AdUserClose: "close",
        AdClickThru: "click",
        AdPaused: "pause",
        AdPlaying: "resume",
        AdVolumeChange: "volume"
      }[t] || t
    }
  }, y.AdLoaded = "AdLoaded", y.AdStarted = "AdStarted", y.AdStopped = "AdStopped", y.AdSkipped = "AdSkipped", y.AdLinearChange = "AdLinearChange", y.AdSizeChange = "AdSizeChange", y.AdExpandedChange = "AdExpandedChange", y.AdSkippableStateChange = "AdSkippableStateChange", y.AdRemainingTimeChange = "AdRemainingTimeChange", y.AdDurationChange = "AdDurationChange", y.AdVolumeChange = "AdVolumeChange", y.AdImpression = "AdImpression", y.AdVideoStart = "AdVideoStart", y.AdVideoFirstQuartile = "AdVideoFirstQuartile", y.AdVideoMidpoint = "AdVideoMidpoint", y.AdVideoThirdQuartile = "AdVideoThirdQuartile", y.AdVideoComplete = "AdVideoComplete", y.AdClickThru = "AdClickThru", y.AdInteraction = "AdInteraction", y.AdUserAcceptInvitation = "AdUserAcceptInvitation", y.AdUserMinimize = "AdUserMinimize", y.AdUserClose = "AdUserClose", y.AdPaused = "AdPaused", y.AdPlaying = "AdPlaying", y.AdLog = "AdLog", y.AdError = "AdError", b = {
    injectScripts: function(t, i) {
      if (i && i.length) for (var a in i) if (i.hasOwnProperty(a)) {
        var o = e.createElement("script");
        o.type = "text/javascript", o.src = i[a], t.appendChild(o)
      }
    },
    injectIFrames: function(t, i) {
      if (h.customParams.sf > 0) {
        var a = e.createElement("iframe");
        a.src = g.protocol() + "//cstatic.weborama.fr/iframe/external_all.html", a.style.cssText = "width:1px;height:1px;visibility:hidden;position:absolute;border:0", t.appendChild(a)
      }
      if (i && i.length) for (var o in i) if (i.hasOwnProperty(o)) {
        var a = e.createElement("iframe");
        a.src = i[o], a.style.cssText = "width:1px;height:1px;visibility:hidden;position:absolute;border:0", t.appendChild(a)
      }
    },
    log: function() {
      i && console.log.apply(console, ["JS-VPAID-WARM::INFO =>"].concat(arguments))
    },
    warn: function() {
      console.log.apply(console, ["JS-VPAID-WARM::WARN =>"].concat(arguments))
    },
    error: function() {
      console.log.apply(console, ["JS-VPAID-WARM::ERROR =>"].concat(arguments))
    }
  }, m = function() {
    console.log("JS-VPAID-WARM::INFO => 2018-10-08T10:58:13.342Z")
  }, m.prototype.handshakeVersion = function() {
    return "2.0"
  }, m.prototype.initAd = function(t, a, o, n, s, d) {
    if ("string" == typeof s && (s = {
      AdParameters: s
    }, b.warn('The typeof parameter "creativeData" should be an "object" with key "AdParameters"'), b.warn("Read page 44 from https://www.iab.com/wp-content/uploads/2015/06/VPAID_2_0_Final_04-10-2012.pdf")), "object" != typeof s || !s.AdParameters || "object" != typeof d || !d.slot) return b.error(c.WRONG_INIT_PARAMS), b.error("initAd", arguments), u.d(y.create(y.AdError, c.WRONG_INIT_PARAMS));
    try {
      h.adParameters = JSON.parse(s.AdParameters)
    } catch (m) {
      return b.error(c.WRONG_AD_PARAMETERS), b.error("initAd", arguments), u.d(y.create(y.AdError, c.WRONG_AD_PARAMETERS))
    }
    if (d.slot && 1 === d.slot.nodeType || (d.slot = e.body, b.warn('Invalid parameter "environmentVars.slot"')), h.format === l.WOW) {
      if (!S.supported()) return b.error(c.WOW_ROLL_CROSSDOMAIN_ERROR), u.d(y.create(y.AdError, c.WOW_ROLL_CROSSDOMAIN_ERROR));
      S.init(d.slot)
    }
    var p = {
      cet: 0,
      co: 5,
      ct: 1,
      daf: 750,
      dm: 0,
      fdc: 0,
      fh: 0,
      ivs: 0,
      impid: 0,
      kac: 0,
      nov: 0,
      nr: 0,
      plc: 0,
      pg: 0,
      sd: 0,
      sf: 0,
      ss: 1,
      st: 1,
      up: 0,
      us: 0,
      vcl: 0
    };
    try {
      if (h.adParameters.cp) for (var f = decodeURIComponent(h.adParameters.cp).split("|"), E = 0; E < f.length; E++) if (f[E]) {
        var P = f[E].split(":");
        2 == P.length && "" != P[1] ? "undefined" != typeof p[P[0]] ? p[P[0]] = P[1].match(/[a-zA-Z]/i) ? P[1] : parseInt(P[1], 10) : p[P[0]] = P[1] : p[P[0]] = !0
      }
    } catch (m) {}
    if (h.customParams = p, h.playerSizeParams = h.adParameters.playerSize || {
      PlayerSmall: [0, 480],
      PlayerNormal: [480, 720],
      PlayerBig: [720, 960],
      PlayerHuge: [960, 0]
    }, h.adSize = {
      width: t,
      height: a,
      viewMode: o
    }, i = !! h.customParams.dm, h.defaultVolume = .5, b.log("initAd", arguments), d.videoSlot && "undefined" != typeof d.videoSlot.attributes) for (var R, E = 0, w = d.videoSlot.attributes, D = w.length; E < D; E++) R = w[E], h.savedAttributes[R.nodeName] = R.nodeValue;
    g.init(h.adParameters.warm, [y.AdImpression, y.AdVideoStart, y.AdVideoFirstQuartile, y.AdVideoMidpoint, y.AdVideoThirdQuartile, y.AdVideoComplete]), h.customParams.us > 0 && T.init(h.adParameters.mediapath + "settings.xml"), !d.videoSlot || 1 === d.videoSlot.nodeType && "VIDEO" === d.videoSlot.nodeName.toUpperCase() || d.videoSlot.f && d.videoSlot.f.indexOf("goog_") != -1 || (d.videoSlot = null, b.warn('Invalid parameter "environmentVars.videoSlot"'));
    var V = S.video || d.videoSlot;
    v.init(d.slot, V ? V : null), A = new r(v.root), A.init(h.adParameters.mrcTracker, function(t) {
      h.flags[t] = !0, g.customEvent(t)
    }.bind(this)), b.injectScripts(v.root, h.adParameters.scripts), b.injectIFrames(v.root, h.adParameters.frames), g.customEvent(r.getPosition())
  }, m.prototype.startAd = function() {
    b.log("startAd"), h.customParams.nov ? (p.play(), h.state = y.AdStarted) : f.play() && (h.state = y.AdStarted)
  }, m.prototype.stopAd = function() {
    b.log("stopAd"), h.customParams.nov ? p.stop() : f.stop(), A.stop(), S.stop(), v.destroy() && (h.state = y.AdStopped)
  }, m.prototype.skipAd = function() {
    this.getAdSkippableState() && (b.log("skipAd"), h.state = y.AdSkipped, h.customParams.nov ? (p.stop(), g.trackTime("animationDuration", 1e3 * Math.round(h.metaData.currentTime))) : (f.stop(), f.video && g.trackTime("mainVideoDuration", 1e3 * Math.round(f.video.currentTime))), v.etDuration >= 0 && g.trackTime("earnedTimeDuration", v.etDuration), A.stop(), S.stop(), setTimeout(function() {
      E.stopAd()
    }, h.customParams.daf))
  }, m.prototype.resizeAd = function(t, e, i) {
    b.log("resizeAd", arguments);
    var a = h.fullscreen;
    h.adSize = {
      width: t,
      height: e,
      viewMode: i || "normal"
    }, h.fullscreen && !a && g.customEvent("isFullscreen"), v.updateSize()
  }, m.prototype.pauseAd = function() {
    h.customParams.nov ? p.pause() : f.pause()
  }, m.prototype.fakePauseAd = function(t) {
    h.flags.userEngaged = !0, h.customParams.nov ? p.pause() : f.pause(), h.remainingTime = -2, h.duration = -2
  }, m.prototype.playFrom = function(t) {
    f.rewind(t), f.resume()
  }, m.prototype.resumeAd = function() {
    h.flags.userEngaged || (h.customParams.nov ? p.resume() : f.resume())
  }, m.prototype.expandAd = function() {
    u.d(y.create(y.AdLog, c.NOT_ALLOWED_METHOD))
  }, m.prototype.collapseAd = function() {
    u.d(y.create(y.AdLog, c.NOT_ALLOWED_METHOD))
  }, m.prototype.setAdVolume = function(t) {
    b.log("setAdVolume", t), t = "string" == typeof t ? parseInt(t, 10) : t, t > 1 && (t /= 100), t < 0 && (t = 0), h.mute = !t, h.volume = t
  }, m.prototype.getAdVolume = function() {
    return h.mute ? 0 : h.volume
  }, m.prototype.getAdDuration = function() {
    return h.flags.userEngaged ? h.duration : h.metaData ? h.metaData.totalTime : -2
  }, m.prototype.getAdLinear = function() {
    return h.linear
  }, m.prototype.getAdWidth = function() {
    return h.adSize.width
  }, m.prototype.getAdHeight = function() {
    return h.adSize.height
  }, m.prototype.getAdRemainingTime = function() {
    return h.remainingTime
  }, m.prototype.getAdExpanded = function() {
    return !0
  }, m.prototype.getAdSkippableState = function() {
    return h.canSkip
  }, m.prototype.getAdIcons = function() {
    return !1
  }, m.prototype.getAdCompanions = function() {
    return ""
  }, m.prototype.subscribe = function(t, e, i) {
    u.subscribe(t, e, i)
  }, m.prototype.unsubscribe = function(t, e) {
    u.unsubscribe(t, e)
  }, t.getVPAIDAd = function() {
    return E || (E = new m), E
  }
}(window, document, !1);