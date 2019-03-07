!
  function (currentWindow, currentDocument, i) {

    function getNewSizes(t, e) {
      for (var i = t.ownerDocument, a = i.defaultView || i.parentWindow, o = t.getBoundingClientRect(), r = {
        left: o.left,
        top: o.top
      }; a !== e;) {
        var n = a.frameElement.getBoundingClientRect();
        r.left += n.left;
        r.top += n.top;
        a = a.parent;
      }
      return r;
    };

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
      };
      this.handlers = {};
      this.style = {};
    };

    function r(e) {
      this.rootElement = e, this.intersectionSupport = !!currentWindow.IntersectionObserver, this.intersectionRatio = -1
    };

    function n(t) {
      switch (t.type) {
        case eventDescriptionObject.AdVideoStart:
          videoDomElementsAndPostMessages.hide(!1), videoDomElementsAndPostMessages.updateSize(), mainAdObject.mute && cntEventsTracking.customEvent("initiallyMuted"), cntEventsTracking.customEvent(mainAdObject.playerSize), mainAdObject.state = eventDescriptionObject.AdStarted, mainAdObject.state = eventDescriptionObject.AdImpression, mainAdObject.state = eventDescriptionObject.AdVideoStart;
          break;
        case eventDescriptionObject.AdRemainingTimeChange:
          mainAdObject.metaData = t.data;
          break;
        case eventDescriptionObject.AdError:
          mainAdObject.state = eventDescriptionObject.AdError, cntEventsTracking.customEvent(eventDescriptionObject.AdError + "_" + errorMessagesAndCodes.MEDIA_FILES_ERROR.code), A.stop(!0), setTimeout(function () {
            E.stopAd()
          }, 250);
          break;
        case eventDescriptionObject.AdVideoComplete:
          mainAdObject.customParams.fdc ? (eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdVideoComplete, mainAdObject.metaData)), videoDomElementsAndPostMessages.hide(!0), setTimeout(function () {
            E.stopAd()
          }, mainAdObject.customParams.daf)) : (mainAdObject.state = eventDescriptionObject.AdVideoComplete, mainAdObject.flags.MRCViewable && mainAdObject.customParams.pg && cntEventsTracking.customEvent("AdVideoCompleteMRC"), mainAdObject.customParams.nr || videoDomElementsAndPostMessages.flags.userInteraction || (A.stop(), videoDomElementsAndPostMessages.hide(!0), mainVideo.video && cntEventsTracking.trackTime("mainVideoDuration", 1e3 * Math.round(mainVideo.video.currentTime)), videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration), setTimeout(function () {
            E.stopAd()
          }, mainAdObject.customParams.daf)));
          break;
        case eventDescriptionObject.AdPaused:
          mainAdObject.state = eventDescriptionObject.AdPaused;
          break;
        case eventDescriptionObject.AdPlaying:
          mainAdObject.state = eventDescriptionObject.AdPlaying;
          break;
        default:
          injectContentObject.error("======================== UNTREATED MEDIA EVENT ========================>", t)
      }
    };

    function s(t) {
      if (t.type === videoDomElementsAndPostMessages.EVENT || t.type === videoDomElementsAndPostMessages.EVENTRTB) {
        return processCreativeEventWithData.call(this, t);
      }
      if (t.type === videoDomElementsAndPostMessages.APPLY) {
        if ("resumeAd" === t.data.method && mainAdObject.flags.userEngaged && (mainAdObject.flags.userEngaged = !1), "function" == typeof E[t.data.method]) return E[t.data.method].apply(possibleMainAdUnit, t.data.args);
        if ("function" == typeof videoDomElementsAndPostMessages[t.data.method]) return videoDomElementsAndPostMessages[t.data.method].apply(videoDomElementsAndPostMessages, t.data.args)
      }
      if (t.type === videoDomElementsAndPostMessages.VIDEO && S.video) return S.video.eventHandler.call(S.video, t.data);
      switch (t.data.type) {
        case eventDescriptionObject.AdLoaded:
          //console.log("mainAdObject", mainAdObject);
          videoDomElementsAndPostMessages.update({
            type: "SetConfig",
            data: {
              clicks: mainAdObject.adParameters.clicks,
              customParams: mainAdObject.customParams,
              defaultVolume: mainAdObject.defaultVolume,
              trackingEvents: mainAdObject.adParameters.trackingEvents,
            }
          });
          videoDomElementsAndPostMessages.hide(!0);
          if (mainAdObject.customParams.nov) {
            p.init();
            mainAdObject.state = eventDescriptionObject.AdLoaded;
            mainAdObject.linear = !0;
          } else {
            if (mainVideo.init(videoDomElementsAndPostMessages.videoElement)) {
              mainAdObject.state = eventDescriptionObject.AdLoaded;
              mainAdObject.linear = !0;
            } else {
              mainAdObject.metaData = errorMessagesAndCodes.MEDIA_FILES_NOT_FOUND;
              mainAdObject.state = eventDescriptionObject.AdError;
              cntEventsTracking.customEvent(eventDescriptionObject.AdError + "_" + errorMessagesAndCodes.MEDIA_FILES_NOT_FOUND.code);
            }
          }
          break;
        case eventDescriptionObject.AdClickThru:
          //console.log("eventDescriptionObject.AdClickThru", t.data);
          if (t.data.url) {
            eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdClickThru, {
              playerHandles: !0,
              id: t.data.id,
              url: t.data.url
            })), t.data.pause && E.pauseAd(), cntEventsTracking.trackClick(), mainAdObject.customParams.cet && Math.round(mainAdObject.metaData.currentTime) >= 0 && cntEventsTracking.customEvent("AdVideoClick" + Math.round(mainAdObject.metaData.currentTime)), mainAdObject.customParams.kac > 0 && (mainAdObject.customParams.nov ? (p.stop(), cntEventsTracking.trackTime("animationDuration", 1e3 * Math.round(mainAdObject.metaData.currentTime))) : (mainVideo.stop(), mainVideo.video && cntEventsTracking.trackTime("mainVideoDuration", 1e3 * Math.round(mainVideo.video.currentTime))), videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration), A.stop(), S.stop(), videoDomElementsAndPostMessages.hide(!0), setTimeout(function () {
              E.stopAd()
            }, mainAdObject.customParams.daf));
          } else {
            eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdClickThru, {
              playerHandles: !1,
              id: t.data.id
            })), t.data.pause && E.pauseAd(), cntEventsTracking.trackClick(), mainAdObject.customParams.cet && Math.round(mainAdObject.metaData.currentTime) >= 0 && cntEventsTracking.customEvent("AdVideoClick" + Math.round(mainAdObject.metaData.currentTime)), mainAdObject.customParams.kac > 0 && (mainAdObject.customParams.nov ? (p.stop(), cntEventsTracking.trackTime("animationDuration", 1e3 * Math.round(mainAdObject.metaData.currentTime))) : (mainVideo.stop(), mainVideo.video && cntEventsTracking.trackTime("mainVideoDuration", 1e3 * Math.round(mainVideo.video.currentTime))), videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration), A.stop(), S.stop(), videoDomElementsAndPostMessages.hide(!0), setTimeout(function () {
              E.stopAd()
            }, mainAdObject.customParams.daf));
          }
          break;
        case eventDescriptionObject.AdUserClose:
          //console.log("y.AdUserClose");
          mainAdObject.state = eventDescriptionObject.AdUserClose;
          if (mainAdObject.customParams.nov) {
            p.stop();
            cntEventsTracking.trackTime("animationDuration", 1e3 * Math.round(mainAdObject.metaData.currentTime));
            videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration);
            A.stop();
            S.stop();
            videoDomElementsAndPostMessages.hide(!0);
            setTimeout(function () {
              E.stopAd()
            }, mainAdObject.customParams.daf);
          } else {
            mainVideo.stop();
            mainVideo.video && cntEventsTracking.trackTime("mainVideoDuration", 1e3 * Math.round(mainVideo.video.currentTime));
            videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration);
            A.stop();
            S.stop();
            videoDomElementsAndPostMessages.hide(!0);
            setTimeout(function () {
              E.stopAd()
            }, mainAdObject.customParams.daf);
          }
          break;
        default:
          injectContentObject.error("======================== UNTREATED VIEW EVENT ========================>", t)
      }
    }

    function processCreativeEventWithData(creativeEventWithData) {
      if (creativeEventWithData.type === videoDomElementsAndPostMessages.EVENT && creativeEventWithData.data.type) {
        cntEventsTracking.customEvent(creativeEventWithData.data.type, creativeEventWithData.data.element);
        mainAdObject.isPreviewer && console.log("JS-VPAID-WARM::CUSTOM EVENT =>", creativeEventWithData.data.type);
      } else {
        creativeEventWithData.type === videoDomElementsAndPostMessages.EVENTRTB && (0 !== mainAdObject.customParams.impid && cntEventsTracking.rtbEvent(creativeEventWithData.data), mainAdObject.isPreviewer && console.log("JS-VPAID-WARM::RTB EVENT ID =>", creativeEventWithData.data))
      }
    }

    var eventProcessingObject, errorMessagesAndCodes, l, mainAdObject, possibleMainAdUnit, p, mainVideo,
      videoDomElementsAndPostMessages, cntEventsTracking, A, E, eventDescriptionObject, injectContentObject;
    Object.assign || Object.defineProperty(Object, "assign", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (t, e) {
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
      supported: function () {
        return !0
      },
      active: !1,
      init: function (e) {
        this.active = !0, this.environmentSlot = e, this.video = new o, this.targetWindow = function () {
          var e = currentWindow;
          try {
            for (; e.parent !== e && e.parent.document.domain === e.document.domain;) e = e.parent
          } catch (i) {
          }
          return e
        }(), this.slot = this.targetWindow.document.body, this.initEvents(this.targetWindow)
      },
      stop: function () {
        this.active && (this.targetWindow.removeEventListener("resize", this.updateSize), this.targetWindow.removeEventListener("scroll", this.updateSize))
      },
      initEvents: function (t) {
        this.updateSize = this.updateSize.bind(this), t.addEventListener("resize", this.updateSize), t.addEventListener("scroll", this.updateSize)
      },
      updateSize: function () {
        var t = getNewSizes(this.environmentSlot, this.targetWindow);
        videoDomElementsAndPostMessages.update({
          type: "AdResize",
          data: {
            width: mainAdObject.adSize.width,
            height: mainAdObject.adSize.height,
            left: t.left,
            top: t.top
          }
        })
      }
    };
    o.prototype.play = function () {
      this.send("play")
    };
    o.prototype.pause = function () {
      this.send("pause")
    };
    o.prototype.canPlayType = function (t) {
      return currentDocument.createElement("video").canPlayType(t)
    };
    o.prototype.addEventListener = function (t, e) {
      this.handlers[t] = e
    };
    o.prototype.appendChild = function (t) {
      this.src = t.getAttribute("src")
    };
    o.prototype.setAttribute = function (t, e) {
      this.props[t] = e
    };
    o.prototype.removeAttribute = function (t) {
    };
    o.prototype.eventHandler = function (t) {
      this.props = Object.assign(this.props, t.props), this.handlers[t.type] && "function" == typeof this.handlers[t.type] && this.handlers[t.type].call(this, {
        type: t.type,
        target: this
      })
    };
    o.prototype.send = function (t) {
      videoDomElementsAndPostMessages.update({
        type: "video",
        data: {
          method: t,
          props: this.props
        }
      })
    };
    Object.defineProperties(o.prototype, {
      src: {
        set: function (t) {
          this.props.src = t
        },
        get: function () {
          return this.props.src
        }
      },
      volume: {
        set: function (t) {
          this.props.volume = t, this.send("volume")
        },
        get: function () {
          return this.props.volume
        }
      },
      currentTime: {
        get: function () {
          return this.props.currentTime
        }
      },
      duration: {
        get: function () {
          return this.props.duration
        }
      },
      currentSrc: {
        get: function () {
          return this.props.currentSrc
        }
      }
    });
    var T;
    T = {
      init: function (t) {
        // console.log("init T", t);
        function e(t) {
          return t.childNodes && t.childNodes[0] && (t = t.childNodes[0], t.wholeText) ? t.wholeText.trim() : null
        }

        this.inited = !0, this.events = {};
        var i = new XMLHttpRequest;
        i.open("GET", t, !0), i.onreadystatechange = function () {
          if (4 === i.readyState && 200 === i.status) {
            var t = i.responseXML;
            if (t) {
              //console.log("t", t);
              for (var a, o = t.querySelectorAll("TrackingEvents event"), r = 0, n = o.length; r < n; r++) a = o[r], this.addEvent(a.getAttribute("name"), e(a));
              if (this.loaded = !0, this.queue) for (; this.queue.length;) this.trackEvent(this.queue.shift())
            }
          }
        }.bind(this), i.send()
      },
      addEvent: function (t, e) {
        t && e && this.inited && (this.events[t] = this.events[t] || [], this.events[t].push(e))
      },
      trackEvent: function (t) {
        if (this.inited) {
          if (!this.loaded) return this.queue = this.queue || [], void this.queue.push(t);
          var e = this.events[t];
          if (e && e.length) for (var i = 0, a = e.length; i < a; i++) this.sendToURL(e[i])
        }
      },
      sendToURL: function (t) {
        //console.log("sendToURL h.location", mainAdObject.location, mainAdObject);
        var e = new Image;
        t = t.replace("~RANDOM~", Math.round(1e6 * Math.random()));
        t = t.replace("[RANDOM]", Math.round(1e6 * Math.random()));
        t = t.replace("%random%", Math.round(1e6 * Math.random()));
        t = t.replace("%location%", mainAdObject.location);
        e.src = t;
      }
    };
    errorMessagesAndCodes = {
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
    };
    eventProcessingObject = {
      subscribers: {},
      subscribe: function (t, e, i) {
        "string" == typeof e && (e = [e]);
        for (var a = 0, o = e.length; a < o; a++) {
          var r = e[a];
          this.subscribers[r] || (this.subscribers[r] = []), this.subscribers[r].push({
            fn: t,
            ctx: i || null
          })
        }
      },
      unsubscribe: function (t, e) {
        "string" == typeof e && (e = [e]);
        for (var i = e.length; i >= 0; i--) {
          var a = this.subscribers[e[i]];
          if (a && Array.isArray(a) && a.length) for (var o = a.length - 1; o >= 0; o--) "undefined" != typeof a[o] && a[o].fn === t && a.splice(o, 1)
        }
      },
      d: function (creativeEvent) {
        //console.log("creativeEvent", creativeEvent);
        creativeEvent.type != eventDescriptionObject.AdRemainingTimeChange && creativeEvent.type != eventDescriptionObject.AdError && injectContentObject.log("DispatchEvent =>", creativeEvent.type, A.getViewAbility(mainAdObject.viewAbilityPercent, mainAdObject.viewAbilityHasFocus).state, (this.subscribers[creativeEvent.type] || []).length), (this.subscribers[creativeEvent.type] || []).forEach(function (e) {
          //we call external function which call extarnal lib and call link
          //from TrckingEvents in XML
          //TRACKING HERE
          //console.log("d(creativeEvent)", creativeEvent);
          if ((creativeEvent.type == eventDescriptionObject.AdUserClose) || (creativeEvent.type == eventDescriptionObject.AdStopped)) {
          }
          e.fn && (creativeEvent.type == eventDescriptionObject.AdClickThru && mainAdObject.customParams.plc ? e.fn.call(e.ctx, creativeEvent.data.url, creativeEvent.data.id, creativeEvent.data.playerHandles) : e.fn.call(e.ctx, creativeEvent))
        })
      }
    };
    l = {
      WOW: "wow",
      SIMPLE: "simple"
    };

    /**
     * Ad and player main object
     * @type {Object}
     */
    mainAdObject = Object.create(Object.prototype, {
      linear: {
        get: function () {
          return this._linear || !0
        },
        set: function (t) {
          this._linear !== t && (this._linear = t, eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdLinearChange, {
            value: t
          })))
        }
      },
      isPreviewer: {
        get: function () {
          return this._isPreviewer || (this._isPreviewer = "none", r.getPosition() !== r.X_FRAME && (this._isPreviewer = "clients.weborama.nl" == currentWindow.top.location.host ? "preview" : "none")), "preview" == this._isPreviewer
        }
      },
      remainingTime: {
        get: function () {
          return this._remainingTime || -1
        },
        set: function (t) {
          this.remainingTime !== t && (this._remainingTime = t, videoDomElementsAndPostMessages.update({
            type: eventDescriptionObject.AdRemainingTimeChange,
            data: this.metaData
          }), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdRemainingTimeChange, {
            value: this.remainingTime
          })))
        }
      },
      canSkip: {
        get: function () {
          return this._canSkip || !1
        },
        set: function (t) {
          this._canSkip !== t && (this._canSkip = t, videoDomElementsAndPostMessages.update({
            type: eventDescriptionObject.AdSkippableStateChange,
            data: {
              value: t
            }
          }), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdSkippableStateChange, {
            value: t
          })))
        }
      },
      adSize: {
        get: function () {
          return this._adSize || {}
        },
        set: function (t) {
          if (this._adSize ? this._adSize.width === t.width && this._adSize.height === t.height || (this._adSize = t, videoDomElementsAndPostMessages.update({
            type: eventDescriptionObject.AdSizeChange,
            data: this.adSize
          }), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdSizeChange, {
            width: t.width,
            height: t.height
          }))) : this._adSize = t, this.adSize.width && "object" == typeof this.playerSizeParams) {
            if (this.fullscreen) return void (this.playerSize = "PlayerFullscreen");
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
        get: function () {
          return this._playerSize
        },
        set: function (t) {
          this._playerSize = t
        }
      },
      fullscreen: {
        get: function () {
          return this.adSize.viewMode === mainAdObject.FULLSCREEN
        }
      },
      duration: {
        get: function () {
          return this._duration || -2
        },
        set: function (t) {
          this._duration !== t && (this._duration = t, eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdDurationChange, {
            duration: t
          })))
        }
      },
      defaultVolume: {
        get: function () {
          return this._defaultVolume
        },
        set: function (t) {
          t && (this._defaultVolume = t)
        }
      },
      volume: {
        get: function () {
          return this._volume || this.defaultVolume
        },
        set: function (t) {
          if (this._volume !== t) {
            this._volume = t, this.defaultVolume = t, videoDomElementsAndPostMessages.update({
              type: eventDescriptionObject.AdVolumeChange,
              data: {
                volume: t
              },
              mute: !!t
            });
            try {
              "undefined" != typeof mainVideo.video && (mainVideo.video.volume = t)
            } catch (e) {
              injectContentObject.error("set volume", t, e)
            }
            cntEventsTracking.trackEvent(eventDescriptionObject.AdVolumeChange), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdVolumeChange, {
              volume: t
            }))
          }
        }
      },
      mute: {
        get: function () {
          return this._mute
        },
        set: function (t) {
          if (this._mute !== !!t && cntEventsTracking.customEvent(t ? "mute" : "unmute"), "undefined" != typeof mainVideo.video) {
            try {
              mainVideo.video.muted = !!t
            } catch (e) {
              injectContentObject.error("set muted", t, e)
            }
            mainVideo.video.f || (t ? mainVideo.video.setAttribute("muted", "muted") : mainVideo.video.removeAttribute("muted"))
          }
          this._mute = !!t
        }
      },
      state: {
        set: function (t) {
          this.state !== t && this.state !== eventDescriptionObject.AdStopped && (this._state = t, videoDomElementsAndPostMessages.update({
            type: t,
            data: this.metaData
          }), cntEventsTracking.trackEvent(t), eventProcessingObject.d(eventDescriptionObject.create(t, this.metaData)))
        },
        get: function () {
          return this._state
        }
      },
      metaData: {
        get: function () {
          return this._metaData || {
            totalTime: 30,
            currentTime: 0
          }
        },
        set: function (t) {
          if (this._metaData) {
            this._metaData = t, t.currentTime >= this.customParams.co && (mainAdObject.canSkip = !0);
            var e = t.currentTime / t.totalTime;
            e >= .25 && mainAdObject.middleEvents[0] === !1 && (mainAdObject.middleEvents[0] = !0, cntEventsTracking.trackEvent(eventDescriptionObject.AdVideoFirstQuartile), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdVideoFirstQuartile, t))), e >= .5 && mainAdObject.middleEvents[1] === !1 && (mainAdObject.middleEvents[1] = !0, cntEventsTracking.trackEvent(eventDescriptionObject.AdVideoMidpoint), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdVideoMidpoint, t))), e >= .75 && mainAdObject.middleEvents[2] === !1 && (mainAdObject.middleEvents[2] = !0, cntEventsTracking.trackEvent(eventDescriptionObject.AdVideoThirdQuartile), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdVideoThirdQuartile, t))), mainAdObject.customParams.fdc && t.totalTime - t.currentTime < mainAdObject.customParams.fdc && mainAdObject.middleEvents[3] === !1 && (mainAdObject.middleEvents[3] = !0, cntEventsTracking.trackEvent(eventDescriptionObject.AdVideoComplete), mainAdObject.flags.MRCViewable && mainAdObject.customParams.pg && cntEventsTracking.customEvent("AdVideoCompleteMRC"), A.stop())
          } else this._metaData = t, eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdDurationChange, this.metaData));
          mainAdObject.remainingTime = this.metaData.totalTime - this.metaData.currentTime
        }
      },
      middleEvents: {
        value: [!1, !1, !1, !1]
      },
      savedSource: {
        get: function () {
          return this._savedSource || ""
        },
        set: function (t) {
          this._savedSource = t
        }
      },
      savedAttributes: {
        value: {}
      },
      origin: {
        get: function () {
          if (!this._origin) {
            var t = mainAdObject.adParameters.customView || mainAdObject.adParameters.mediapath,
              e = t.split("/");
            e.length = 3, this._origin = e.join("/")
          }
          return this._origin
        }
      },
      location: {
        get: function () {
          if (!this._location) if (this._location = encodeURIComponent(mainAdObject.realWindow.location.href), r.getPosition() !== r.X_FRAME) this._location = encodeURIComponent(currentWindow.top.location.href);
          else
            try {
              var e = mainAdObject.realWindow.location.ancestorOrigins;
              if (e && e.length > 0) {
                var i = e[e.length - 1];
                i.indexOf("chrome-extension") >= 0 ? this._location = encodeURIComponent("fraudulent-chromium-extension") : "http://a" == i || "https://a" == i ? this._location = encodeURIComponent(e[0]) : this._location = encodeURIComponent(i)
              }
            } catch (a) {
            }
          return this._location
        }
      },
      realWindow: {
        get: function () {
          var t = (videoDomElementsAndPostMessages.overlayRoot || videoDomElementsAndPostMessages.root).ownerDocument;
          return t.defaultView || t.parentWindow
        }
      },
      isInIframe: {
        get: function () {
        }
      },
      viewAbilityPercent: {
        get: function () {
          return 50
        }
      },
      viewAbilityHasFocus: {
        get: function () {
          return !0
        }
      },
      customParams: {
        get: function () {
          return this._customParams
        },
        set: function (t) {
          this._customParams || (this._customParams = t)
        }
      },
      format: {
        get: function () {
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
        get: function () {
          return this._startTime
        },
        set: function (t) {
          this._startTime = t
        }
      },
      animationInterval: {
        get: function () {
          return this._interval
        },
        set: function (t) {
          this._interval = t
        }
      }
    });
    p = {
      flags: {},
      init: function () {
        if (!this.flags.inited && !this.flags.started) return this.flags.inited = !0, !0
      },
      play: function () {
        return !(!this.flags.inited || this.flags.started) && (this.flags.started = !0, mainAdObject.animationStartTime = Date.now(), void (mainAdObject.animationInterval = setInterval(function () {
          var t = Date.now() - mainAdObject.animationStartTime,
            e = (t / 1e3).toFixed(1),
            i = {
              totalTime: mainAdObject.customParams.nov,
              currentTime: e
            };//adStarted

          return i.currentTime >= i.totalTime ? (p.stop(), void p.complete()) : (p.flags.videoStart || (p.flags.videoStart = !0, n.call(p, eventDescriptionObject.create(eventDescriptionObject.AdVideoStart, i))), void (mainAdObject.flags.userEngaged || n.call(p, eventDescriptionObject.create(eventDescriptionObject.AdRemainingTimeChange, i))))
        }, r.DELAY)))
      },
      pause: function () {
      },
      resume: function () {
      },
      stop: function () {
        return !(!this.flags.started || this.flags.stopped) && (this.flags.stopped = !0, void clearInterval(mainAdObject.animationInterval))
      },
      complete: function () {
        mainAdObject.state = eventDescriptionObject.AdVideoComplete, mainAdObject.flags.MRCViewable && mainAdObject.customParams.pg && cntEventsTracking.customEvent("AdVideoCompleteMRC"), cntEventsTracking.trackTime("animationDuration", 1e3 * Math.round(mainAdObject.metaData.currentTime)), videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration), A.stop(), S.stop(), videoDomElementsAndPostMessages.hide(!0), setTimeout(function () {
          E.stopAd()
        }, mainAdObject.customParams.daf)
      },
      event: function (eventType) {
        if (!this.flags.stopped) {
          var e = {
            totalTime: mainAdObject.customParams.nov,
            currentTime: this.currentTime
          };
          switch (eventType) {
            case "play":
              this.flags.videoStart && n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdPlaying, e));
              break;
            case "pause":
              if (e.currentTime / e.totalTime >= .98) return;
              mainAdObject.flags.userEngaged || n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdPaused, e));
              break;
            case "ended":
              n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdVideoComplete, e));
              break;
            case "error":
              injectContentObject.error("JS-VPAID-WARM::ERROR => mediaElement as animation"), n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdError, e));
              break;
            case "timeupdate":
              //REMOVE adVideoStart call to prevent it from calling until button will do it
              //!this.flags.videoStart && e.currentTime && (this.flags.videoStart = !0), mainAdObject.flags.userEngaged || n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdRemainingTimeChange, e));
              !this.flags.videoStart && e.currentTime && (this.flags.videoStart = !0, n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdVideoStart, e))), mainAdObject.flags.userEngaged || n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdRemainingTimeChange, e));
              break;
            default:
              injectContentObject.error("JS-VPAID-WARM::ERROR => wrong animation timer event")
          }
        }
      },
      events: ["play", "pause", "ended", "timeupdate", "error"]
    };
    mainVideo = {
      flags: {},
      init: function (videoElement) {
        if (!this.flags.inited && !this.flags.started) {
          this.flags.inited = !0;
          this.video = videoElement;
          var i, a;
          var mediaFiles = mainAdObject.adParameters.mediafiles;
          var mediaPath = mainAdObject.adParameters.mediapath;

          for (i = 0; i < this.events.length; i++) this.video.addEventListener(this.events[i], function (t) {
            if (!this.flags.stopped) {
              var e = {
                totalTime: t.target.duration,
                currentTime: t.target.currentTime
              };
              switch (t.type) {
                case "play":
                  this.flags.videoStart && n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdPlaying, e));
                  break;
                case "pause":
                  if (e.currentTime / e.totalTime >= .98) return;
                  mainAdObject.flags.userEngaged || n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdPaused, e));
                  break;
                case "ended":
                  n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdVideoComplete, e));
                  break;
                case "error":
                  injectContentObject.error("JS-VPAID-WARM::ERROR => mediaElement", t), n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdError, e));
                  break;
                case "timeupdate":
                  //!this.flags.videoStart && e.currentTime && (this.flags.videoStart = !0, t.target.currentSrc && t.target.currentSrc.match(/[a-z0-9]+$/) && cntEventsTracking.customEvent(t.target.currentSrc.match(/[a-z0-9]+$/)[0].toUpperCase())), mainAdObject.flags.userEngaged || n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdRemainingTimeChange, e))
                  !this.flags.videoStart && e.currentTime && (this.flags.videoStart = !0, n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdVideoStart, e)), t.target.currentSrc && t.target.currentSrc.match(/[a-z0-9]+$/) && cntEventsTracking.customEvent(t.target.currentSrc.match(/[a-z0-9]+$/)[0].toUpperCase())), mainAdObject.flags.userEngaged || n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdRemainingTimeChange, e))
              }
            }
          }.bind(this), !0);
          for (1 === this.video.nodeType && "undefined" != typeof this.video.hasAttribute && this.video.hasAttribute("src") && "" != this.video.getAttribute("src") && (mainAdObject.savedSource = this.video.getAttribute("src"), this.video.removeAttribute("src")), i = 0; i < mediaFiles.length; i++) {
            if (this.video.canPlayType(mediaFiles[i].type)) {
              var currentVideoSource = currentDocument.createElement("source");
              //console.log("currentVideoSource", currentVideoSource, mediaPath, mediaFiles[i], mediaFiles[i].src);
              if (currentVideoSource.type = mediaFiles[i].type, currentVideoSource.src = mediaFiles[i].src, currentVideoSource.id = "wb-src-" + Math.round(1e12 * Math.random()).toString(36), "function" == typeof this.video.appendChild && this.video.appendChild(currentVideoSource), this.video.f && this.video.f.indexOf("goog_") != -1 || "function" == typeof this.video.hasAttribute && !this.video.hasAttribute("src") || "function" == typeof this.video.getAttribute && "" == this.video.getAttribute("src")) {
                var u = mediaFiles[i].src;
                this.video.setAttribute("src", u)
              }
              "undefined" != typeof this.video.load && this.video.load(), a = !0
            }
          }
          var c = navigator.userAgent;
          if (c.indexOf("Chrome") < 0 && c.indexOf("Safari") >= 0) {
            var l, m;
            l = c.indexOf("Safari"), m = c.substring(l + 7), (l = c.indexOf("Version")) != -1 && (m = c.substring(l + 8));
            var p = parseInt(m.substring(0, 2));
            p >= 11 && (mainAdObject.volume = 0, mainAdObject.mute = !0)
          }
          return r.getPosition() == r.X_FRAME && mainAdObject.customParams.sd > 0 && (mainAdObject.volume = 0, mainAdObject.mute = !0), a
        }
      },
      play: function () {
        try {
          //console.log("play video1");
          this.flags.started = !0;
          //console.log("this.video", this.video, this.video.play);

          try {
            Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
              get: function () {
                return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
              }
            });
          } catch (ex) {

          }

          var playInterval = setInterval(function () {
            try {
              if (document.querySelector('video').playing) { // checks if element is playing right now
                // Do anything you want to
                clearInterval(playInterval);
              } else {
                this.video.play();
              }
            } catch (ex) {
            }
          }.bind(this), 500);

          this.video.play();
        } catch (ex) {
          cosnole.log(ex);
        }

        return !!(mainAdObject.customParams.nr || this.flags.inited && !this.flags.started) && (mainAdObject.customParams.nr && (mainAdObject.middleEvents[0] = !1, mainAdObject.middleEvents[1] = !1, mainAdObject.middleEvents[2] = !1), !0)
        /*return !!(mainAdObject.customParams.nr || this.flags.inited && !this.flags.started) && (mainAdObject.customParams.nr && (mainAdObject.middleEvents[0] = !1, mainAdObject.middleEvents[1] = !1, mainAdObject.middleEvents[2] = !1), this.flags.started = !0, this.video.play(), !0)*/
      },
      pause: function () {
        !this.flags.paused && this.flags.started && (this.flags.paused = !0, this.video.pause())
      },
      rewind: function (t) {
        this.video.currentTime = t
      },
      resume: function () {
        this.flags.paused && (this.flags.paused = !1, this.video.play())
      },
      stop: function () {
        return !(!this.flags.started || this.flags.stopped) && (this.flags.stopped = !0, void this.pause())
      },
      events: ["play", "pause", "ended", "timeupdate", "error"]
    };

    videoDomElementsAndPostMessages = {
      APPLY: "apply",
      COMMAND: "command",
      EVENT: "event",
      EVENTRTB: "eventRTB",
      TRACK: "track",
      VIDEO: "video",
      flags: {},
      etDuration: -1,
      setFlag: function (t, e) {
        videoDomElementsAndPostMessages.flags[t] = e
      },
      init: function (vpaidSlot, vpaidVideoPlayer) {
        this.root = vpaidSlot.appendChild(currentDocument.createElement("div"));
        this.root.id = "wb-" + Math.round(1e12 * Math.random()).toString(36);
        mainAdObject.customParams.fh && (this.root.style.height = "100%");
        var a = currentDocument.createElement("link");
        a.rel = "stylesheet";
        a.href = mainAdObject.adParameters.mediapath + "style.min.css";
        this.root.appendChild(a);

        S.active && (this.overlayRoot = S.slot.appendChild(currentDocument.createElement("div")), this.overlayRoot.id = this.root.id + "-overlay", this.overlayRoot.className = "wb-overlay", this.overlayRoot.appendChild(a.cloneNode()));
        if (mainAdObject.customParams.ivs || !vpaidVideoPlayer) {
          this.videoElement = this.root.appendChild(currentDocument.createElement("video"));
          this.videoElement.setAttribute("webkit-playsinline", "playsinline");
          this.videoElement.setAttribute("playsinline", "playsinline");
          this.videoElement.setAttribute("muted", "muted");
          this.videoElement.setAttribute("autoplay", "autoplay");
          mainAdObject.customParams.nr && this.videoElement.setAttribute("preload", "auto");
          mainAdObject.customParams.up && (this.videoElement.poster = mainAdObject.adParameters.mediapath + "poster.png");
          //don;'t add video click on video itself
          /*mainAdObject.customParams.vcl && this.videoElement.addEventListener("click", function (t) {
            v.update({
              type: eventDescriptionObject.AdClickThru,
              data: {
                value: mainAdObject.customParams.vcl
              }
            })
          });*/
        } else {
          this.videoElement = vpaidVideoPlayer;
          this.videoElement.setAttribute("webkit-playsinline", "playsinline");
          this.videoElement.setAttribute("playsinline", "playsinline");
          this.videoElement.setAttribute("muted", "muted");
          this.videoElement.setAttribute("autoplay", "autoplay");

          mainAdObject.customParams.nr && this.videoElement.setAttribute("preload", "auto");
          mainAdObject.customParams.up && (this.videoElement.poster = mainAdObject.adParameters.mediapath + "poster.png");
          mainAdObject.customParams.vcl && this.videoElement.addEventListener("click", function (t) {
            videoDomElementsAndPostMessages.update({
              type: eventDescriptionObject.AdClickThru,
              data: {
                value: mainAdObject.customParams.vcl
              }
            })
          });
        }
        this.updateSize();
        mainAdObject.realWindow.addEventListener("message", function (recieveMessage) {
          //console.log("mainAdObject recieveMessage", recieveMessage);
          if (recieveMessage.origin === mainAdObject.origin) {
            var recievedData = {};
            try {
              recievedData = JSON.parse(recieveMessage.data);
            } catch (i) {
            }
            Array.isArray(recievedData) || (recievedData = [recievedData]);
            for (var a = 0; a < recievedData.length; a++) {
              recievedData[a].id === this.root.id;
              s.call(this, recievedData[a]);
            }
          }
        }.bind(this), !1);
        /** set frame params **/
        this.frameElement = (this.overlayRoot || this.root).appendChild(currentDocument.createElement("iframe"));
        this.frameElement.setAttribute("scrolling", "no");
        this.frameElement.setAttribute("frameborder", "no");
        this.frameElement.setAttribute("allow", "autoplay");
        this.frameElement.src = (mainAdObject.adParameters.customView ? mainAdObject.adParameters.customView : mainAdObject.adParameters.mediapath + "index.html") + "?id=" + this.root.id;
        this.frameElement.addEventListener("load", function (t) {
          videoDomElementsAndPostMessages.update({
            type: eventDescriptionObject.AdSizeChange,
            data: mainAdObject.adSize
          })
        });
      },
      hide: function (t) {
        this.frameElement && (this.frameElement.style.display = t ? "none" : "inline-block")
      },
      update: function (updateData) {
        //console.log("postMessage update", updateData);
        if ((updateData.type === "AdUserClose") || (updateData.type === "AdStopped")) {
          //console.log("postMessage update", updateData);
        }
        this.frameElement && this.frameElement.contentWindow && this.frameElement && this.frameElement.contentWindow.postMessage(JSON.stringify({
          id: this.root.id,
          event: updateData
        }), "*")
      },
      destroy: function () {
        if (!this.root || !this.root.parentNode || "function" != typeof this.root.parentNode.removeChild) return !1;
        if (this.root.parentNode.removeChild(this.root), this.videoElement && this.videoElement.attributes) for (; this.videoElement.attributes.length;) this.videoElement.removeAttribute(this.videoElement.attributes[0].nodeName);
        for (var t in mainAdObject.savedAttributes) this.videoElement.setAttribute(t, mainAdObject.savedAttributes[t]);
        if (mainAdObject.savedSource && "" !== mainAdObject.savedSource && (this.videoElement.setAttribute("src", mainAdObject.savedSource), this.videoElement.load(), this.videoElement.play()), "function" == typeof this.videoElement.querySelectorAll) for (var e = this.videoElement.querySelectorAll("source[id^='wb-src-']"), i = 0; i < e.length; i++) this.videoElement.removeChild(e[i]);
        if (this.videoElement && this.videoElement.attributes) for (var a, i = 0, o = this.videoElement.attributes, r = o.length; i < r; i++) a = o[i];
        return this.overlayRoot && this.overlayRoot.parentNode && this.overlayRoot.parentNode.removeChild && this.overlayRoot.parentNode.removeChild(this.overlayRoot), !0
      },
      cssStyle: function (newCssStyle) {
        mainAdObject.customParams.fh || (this.root.style.cssText = newCssStyle, this.updateSize())
      },
      resizeVideoElement: function (t) {
        function e(t) {
          return t + ("string" == typeof t ? "" : "px")
        }

        this.videoElement && this.videoElement.style && ((0 != t.left && 0 !== t.left.indexOf("0") || 0 != t.top && 0 !== t.top.indexOf("0") || "100%" !== t.width || "100%" !== t.height) && (mainAdObject.flags.resizeVideoElement = !0, this.videoElement.style.position = "absolute"), this.videoElement.style.width = e(t.width), this.videoElement.style.height = e(t.height), this.videoElement.style.top = e(t.top), this.videoElement.style.left = e(t.left))
      },
      translateVideoElement: function (t) {
        if (this.videoElement && this.videoElement.style) {
          var e = t.hor ? "-50%," : "0,",
            i = t.ver ? "-50%)" : "0)",
            a = "translate(" + e + i;
          this.videoElement.style.webkitTransform = a, this.videoElement.style.transform = a
        }
      },
      updateSize: function () {
        return !!this.root && (S.active && S.updateSize(), void (mainAdObject.customParams.fh || (this.root.style.width = mainAdObject.adSize.width + "px", this.root.style.height = mainAdObject.adSize.height + "px", !mainAdObject.flags.resizeVideoElement && this.videoElement && this.videoElement.style && (this.videoElement.style.width = mainAdObject.adSize.width + "px", this.videoElement.style.height = mainAdObject.adSize.height + "px"))))
      },
      setETDuration: function (t) {
        videoDomElementsAndPostMessages.etDuration >= 0 ? videoDomElementsAndPostMessages.etDuration += t : videoDomElementsAndPostMessages.etDuration = t
      }
    };

    cntEventsTracking = {
      init: function (e, viewableEvents) {
        this.options = {
          protocol: currentWindow.location.protocol,
          uuid: e.uuid,
          defaultElement: "video"
        }, this.options.protocol.indexOf("http") == -1 && (this.options.protocol = "https:"), this.viewableEvents = viewableEvents || []
      },
      protocol: function () {
        return this.options.protocol
      },
      trackEvent: function (t) {
        if (!mainAdObject.isPrevieadrcntrwer) {
          if (eventDescriptionObject.convert(t) !== t) {
            /*var e = "{{protocol}}//evt.adrcntr.com/e/?id={{uuid}}&ci=&ho=HOST&pl=default&cf=0&ff=0&el={{element}}&rn={{random}}&ob=default&ev={{name}}&mo=0&fof=1&foe=1&foo=1&ms=&ca=0&rt=p";
            t === y.AdImpression && (e = "{{protocol}}//cntr.adrcntr.com/i/?id={{uuid}}&ci=&ho=HOST&pl=default&fl=0&sw=0&sh=0&rt=p"), this.options.name = t, this.options.random = Math.round(1e6 * Math.random()), this.options.element = this.options.defaultElement, this.sendToURL(this.prepareURL(e, this.options)), T.trackEvent(t)*/
          }
          this.viewableEvents.indexOf(t) != -1 && this.customEvent(t + A.getViewAbility(mainAdObject.viewAbilityPercent, mainAdObject.viewAbilityHasFocus).state)
        }
      },
      trackClick: function () {
        this.customEvent("scrc")
      },
      trackTime: function (t, e) {
        if (!mainAdObject.isPreviewer && t && e && !isNaN(e)) {
          /*var i = "{{protocol}}//evt.adrcntr.com/t/?id={{uuid}}&ho=HOST&tc[{{name}}]={{time}}&rn={{random}}";
          this.options.name = t, this.options.random = Math.round(1e6 * Math.random()), this.options.time = e, this.sendToURL(this.prepareURL(i, this.options))*/
        }
      },
      customEvent: function (t, e) {
        if (!mainAdObject.isPreviewer && t) {
          /*var i = "{{protocol}}//evt.adrcntr.com/e/?id={{uuid}}&ci=&ho=HOST&pl=default&cf=0&ff=0&el={{element}}&rn={{random}}&ob=default&ev={{name}}&mo=0&fof=1&foe=1&foo=1&ms=&ca=0&rt=p";
          this.options.name = t, this.options.random = Math.round(1e6 * Math.random()), this.options.element = e || this.options.defaultElement, this.sendToURL(this.prepareURL(i, this.options)), T.trackEvent(t)*/
        }
      },
      rtbEvent: function (t) {
        if (t || 0 === t) {
          var e = "{{protocol}}//rtb.com.ru/event?type=clickExtra&tracking={{impid}}&index={{eventindex}}&noRedirect=true";
          this.options.impid = mainAdObject.customParams.impid, this.options.eventindex = t, this.sendToURL(this.prepareURL(e, this.options))
        }
      },
      prepareURL: function (t, e) {
        e = e || this.options;
        for (var i in e) e.hasOwnProperty(i) && (t = t.replace(new RegExp("{{" + i + "}}", "g"), e[i]));
        return t
      },
      sendToURL: function (t, e) {
        var i = new Image;
        e && (i.onload = i.onerror = e), i.src = t
      }
    };

    r.DELAY = 250;
    r.ON_PAGE = "OnPage";
    r.S_FRAME = "SameDomainFrame";
    r.X_FRAME = "CrossDomainFrame";
    r.VIEWABLE = "Viewable";
    r.NOT_VIEWABLE = "Unviewable";
    r.UNDETERMINED = "Undetermined";
    r.prototype.hasFocus = function () {
      return ("undefined" === currentDocument.hidden || currentDocument.hidden !== !0) && (r.getPosition() === r.X_FRAME || "function" != typeof currentWindow.top.document.hasFocus || currentWindow.top.document.hasFocus())
    };
    r.prototype.getPosition = function () {
      if (!this.position) if (currentWindow.top === mainAdObject.realWindow) this.position = r.ON_PAGE;
      else {
        this.position = r.S_FRAME;
        try {
          for (var e = mainAdObject.realWindow; e.parent !== e;) {
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
    };
    r.prototype.init = function (t, e) {
      if (this.intersectionSupport) {
        var i = navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? this.rootElement.ownerDocument.defaultView.IntersectionObserver : IntersectionObserver;
        this.intersectionObserver = new i(function (t) {
          this.intersectionRatio = Math.round(1e4 * t[0].intersectionRatio) / 100
        }.bind(this), {
          threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }), this.intersectionObserver.observe(this.rootElement)
      } else if (r.getPosition() == r.X_FRAME) {
        if (t && t.length && "function" == typeof e) for (; t.length;) e(t.shift().name + r.UNDETERMINED);
        return !1
      }
      2 == arguments.length && t && t.length && "function" == typeof e && (this.observerData = t, this.observerHandler = e, this.updater = setInterval(r.updateTime.bind(this), r.DELAY))
    };
    r.prototype.stop = function (t) {
      if (clearInterval(this.updater), r.updateTime.call(this), this.observerData && this.observerData.length && !t) for (; this.observerData.length;) this.observerHandler(this.observerData.shift().name + r.NOT_VIEWABLE);
      this.observerData = []
    };
    r.prototype.getViewAbility = function (e, i) {
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
        for (; o !== currentWindow.top;) {
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
    };
    r.updateTime = function () {
      var t = this.getViewAbility();
      if (!this.observerData || !this.observerData.length) return clearInterval(this.updater);
      for (var e = [], i = 0; i < this.observerData.length; i++) {
        var a = this.observerData[i];
        "string" != typeof a.duration || a.duration.indexOf("%") == -1 || isNaN(mainAdObject.metaData.totalTime) || (a.duration = Math.floor(2 * mainAdObject.metaData.totalTime) / 2 * parseInt(a.duration, 10) * 10), (!a.useFocus || t.focus) && Math.round(t.percent) >= a.percent ? "true" == a.useSound ? a.timeInView = mainAdObject.mute ? 0 : r.DELAY + (a.timeInView || 0) : a.timeInView = r.DELAY + (a.timeInView || 0) : a.timeInView = 0, a.timeInView >= a.duration ? this.observerHandler(a.name + r.VIEWABLE) : e.push(a)
      }
      this.observerData = e
    };
    r.match = function (t, e, i, a) {
      var o = r.NOT_VIEWABLE;
      return (t || !e) && i >= a && (o = r.VIEWABLE), {
        state: o,
        focus: t,
        percent: i
      }
    };
    r.calculateArea = function (t, e) {
      var i = t.width * t.height,
        a = t.width,
        o = t.height;
      return t.top < 0 && (o += t.top), t.bottom > e.innerHeight && (o -= t.bottom - e.innerHeight), t.left < 0 && (a += t.left), t.right > e.innerWidth && (a -= t.right - e.innerWidth), a * o / i
    };
    r.getPosition = function () {
      if (!this.position) if (currentWindow.top === mainAdObject.realWindow) this.position = r.ON_PAGE;
      else {
        this.position = r.S_FRAME;
        try {
          for (var e = mainAdObject.realWindow; e.parent !== e;) {
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
    };
    eventDescriptionObject = {
      create: function (t, e) {
        return {
          type: t,
          data: e
        }
      },
      convert: function (t) {
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
    };
    eventDescriptionObject.AdLoaded = "AdLoaded";
    eventDescriptionObject.AdStarted = "AdStarted";
    eventDescriptionObject.AdStopped = "AdStopped";
    eventDescriptionObject.AdSkipped = "AdSkipped";
    eventDescriptionObject.AdLinearChange = "AdLinearChange";
    eventDescriptionObject.AdSizeChange = "AdSizeChange";
    eventDescriptionObject.AdExpandedChange = "AdExpandedChange";
    eventDescriptionObject.AdSkippableStateChange = "AdSkippableStateChange";
    eventDescriptionObject.AdRemainingTimeChange = "AdRemainingTimeChange";
    eventDescriptionObject.AdDurationChange = "AdDurationChange";
    eventDescriptionObject.AdVolumeChange = "AdVolumeChange";
    eventDescriptionObject.AdImpression = "AdImpression";
    eventDescriptionObject.AdVideoStart = "AdVideoStart";
    eventDescriptionObject.AdVideoFirstQuartile = "AdVideoFirstQuartile";
    eventDescriptionObject.AdVideoMidpoint = "AdVideoMidpoint";
    eventDescriptionObject.AdVideoThirdQuartile = "AdVideoThirdQuartile";
    eventDescriptionObject.AdVideoComplete = "AdVideoComplete";
    eventDescriptionObject.AdClickThru = "AdClickThru";
    eventDescriptionObject.AdInteraction = "AdInteraction";
    eventDescriptionObject.AdUserAcceptInvitation = "AdUserAcceptInvitation";
    eventDescriptionObject.AdUserMinimize = "AdUserMinimize";
    eventDescriptionObject.AdUserClose = "AdUserClose";
    eventDescriptionObject.AdPaused = "AdPaused";
    eventDescriptionObject.AdPlaying = "AdPlaying";
    eventDescriptionObject.AdLog = "AdLog";
    eventDescriptionObject.AdError = "AdError";

    injectContentObject = {
      injectScripts: function (t, i) {
        if (i && i.length) for (var a in i) if (i.hasOwnProperty(a)) {
          var o = currentDocument.createElement("script");
          o.type = "text/javascript", o.src = i[a], t.appendChild(o)
        }
      },
      injectIFrames: function (t, i) {
        //console.log("injectIFrames: function (t, i) {", t, i);
        if (mainAdObject.customParams.sf > 0) {
          var a = currentDocument.createElement("iframe");
          //remove weborama iframe
          //a.src = g.protocol() + "//cstatic.weborama.fr/iframe/external_all.html", a.style.cssText = "width:1px;height:1px;visibility:hidden;position:absolute;border:0", t.appendChild(a)
        }
        if (i && i.length) for (var o in i) if (i.hasOwnProperty(o)) {
          var a = currentDocument.createElement("iframe");
          a.src = i[o], a.style.cssText = "width:1px;height:1px;visibility:hidden;position:absolute;border:0", t.appendChild(a)
        }
      },
      log: function () {
        i && console.log.apply(console, ["JS-VPAID-WARM::INFO =>"].concat(arguments))
      },
      warn: function () {
        console.log.apply(console, ["JS-VPAID-WARM::WARN =>"].concat(arguments))
      },
      error: function () {
        console.log("error arguments", arguments);
        console.log.apply(console, ["JS-VPAID-WARM::ERROR =>"].concat(arguments))
      }
    };

    possibleMainAdUnit = function () {
      console.log("JS-VPAID-WARM::INFO => 2018-10-08T10:58:13.342Z")
    };

    possibleMainAdUnit.prototype.handshakeVersion = function () {
      return "2.0"
    };
    possibleMainAdUnit.prototype.initAd = function (width, height, viewMode, n, adParameters, slotInDomIds) {
      if ("string" == typeof adParameters && (adParameters = {
        AdParameters: adParameters
      }, injectContentObject.warn('The typeof parameter "creativeData" should be an "object" with key "AdParameters"'), injectContentObject.warn("Read page 44 from https://www.iab.com/wp-content/uploads/2015/06/VPAID_2_0_Final_04-10-2012.pdf")), "object" != typeof adParameters || !adParameters.AdParameters || "object" != typeof slotInDomIds || !slotInDomIds.slot) {
        return injectContentObject.error(errorMessagesAndCodes.WRONG_INIT_PARAMS), injectContentObject.error("initAd", arguments), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdError, errorMessagesAndCodes.WRONG_INIT_PARAMS));
      }

      try {
        mainAdObject.adParameters = JSON.parse(adParameters.AdParameters)
      } catch (m) {
        return injectContentObject.error(errorMessagesAndCodes.WRONG_AD_PARAMETERS), injectContentObject.error("initAd", arguments), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdError, errorMessagesAndCodes.WRONG_AD_PARAMETERS))
      }

      if (slotInDomIds.slot && 1 === slotInDomIds.slot.nodeType || (slotInDomIds.slot = currentDocument.body, injectContentObject.warn('Invalid parameter "environmentVars.slot"')), mainAdObject.format === l.WOW) {
        if (!S.supported()) return injectContentObject.error(errorMessagesAndCodes.WOW_ROLL_CROSSDOMAIN_ERROR), eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdError, errorMessagesAndCodes.WOW_ROLL_CROSSDOMAIN_ERROR));
        S.init(slotInDomIds.slot)
      }

      /** have no idea what is it yet **/
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
        if (mainAdObject.adParameters.cp) {
          for (var f = decodeURIComponent(mainAdObject.adParameters.cp).split("|"), E = 0; E < f.length; E++) {
            if (f[E]) {
              var P = f[E].split(":");
              2 == P.length && "" != P[1] ? "undefined" != typeof p[P[0]] ? p[P[0]] = P[1].match(/[a-zA-Z]/i) ? P[1] : parseInt(P[1], 10) : p[P[0]] = P[1] : p[P[0]] = !0
            }
          }
        }
      } catch (m) {
      }
      if (mainAdObject.customParams = p, mainAdObject.playerSizeParams = mainAdObject.adParameters.playerSize || {
        PlayerSmall: [0, 480],
        PlayerNormal: [480, 720],
        PlayerBig: [720, 960],
        PlayerHuge: [960, 0]
      }, mainAdObject.adSize = {
        width: width,
        height: height,
        viewMode: viewMode
      }, i = !!mainAdObject.customParams.dm, mainAdObject.defaultVolume = .5, injectContentObject.log("initAd", arguments), slotInDomIds.videoSlot && "undefined" != typeof slotInDomIds.videoSlot.attributes) for (var R, E = 0, w = slotInDomIds.videoSlot.attributes, D = w.length; E < D; E++) R = w[E], mainAdObject.savedAttributes[R.nodeName] = R.nodeValue;
      cntEventsTracking.init(mainAdObject.adParameters.warm, [eventDescriptionObject.AdStarted, eventDescriptionObject.AdImpression, eventDescriptionObject.AdVideoStart, eventDescriptionObject.AdVideoFirstQuartile, eventDescriptionObject.AdVideoMidpoint, eventDescriptionObject.AdVideoThirdQuartile, eventDescriptionObject.AdVideoComplete]), mainAdObject.customParams.us > 0 && T.init(mainAdObject.adParameters.mediapath + "settings.xml"), !slotInDomIds.videoSlot || 1 === slotInDomIds.videoSlot.nodeType && "VIDEO" === slotInDomIds.videoSlot.nodeName.toUpperCase() || slotInDomIds.videoSlot.f && slotInDomIds.videoSlot.f.indexOf("goog_") != -1 || (slotInDomIds.videoSlot = null, injectContentObject.warn('Invalid parameter "environmentVars.videoSlot"'));
      var V = S.video || slotInDomIds.videoSlot;
      videoDomElementsAndPostMessages.init(slotInDomIds.slot, V ? V : null);
      A = new r(videoDomElementsAndPostMessages.root);
      A.init(mainAdObject.adParameters.mrcTracker, function (t) {
        mainAdObject.flags[t] = !0, cntEventsTracking.customEvent(t)
      }.bind(this));
      injectContentObject.injectScripts(videoDomElementsAndPostMessages.root, mainAdObject.adParameters.scripts);
      injectContentObject.injectIFrames(videoDomElementsAndPostMessages.root, mainAdObject.adParameters.frames);
      cntEventsTracking.customEvent(r.getPosition());
    };
    possibleMainAdUnit.prototype.startAd = function () {
      injectContentObject.log("startAd");
      if (mainAdObject.customParams.nov) {
        p.play();
        mainAdObject.state = eventDescriptionObject.AdStarted;
      } else {
        mainVideo.play() && (mainAdObject.state = eventDescriptionObject.AdStarted)
      }
      /*videoDomElementsAndPostMessages.update({
        type: eventDescriptionObject.AdStarted
      });*/

      /*videoDomElementsAndPostMessages.update({
        type: eventDescriptionObject.AdStarted,
        data: {
          totalTime: mainAdObject.customParams.nov,
        }
      });*/
      var e = {
        totalTime: mainAdObject.customParams.nov,
        currentTime: this.currentTime
      };
      n.call(this, eventDescriptionObject.create(eventDescriptionObject.AdStarted, e));
    };
    possibleMainAdUnit.prototype.stopAd = function () {
      injectContentObject.log("stopAd");
      if (mainAdObject.customParams.nov) {
        p.stop();
        A.stop();
        S.stop();
        videoDomElementsAndPostMessages.destroy() && (mainAdObject.state = eventDescriptionObject.AdStopped)
      } else {
        mainVideo.stop();
        A.stop();
        S.stop();
        videoDomElementsAndPostMessages.destroy() && (mainAdObject.state = eventDescriptionObject.AdStopped)
      }
    };
    possibleMainAdUnit.prototype.skipAd = function () {
      if (mainAdObject.customParams.nov) {
        this.getAdSkippableState() && (injectContentObject.log("skipAd"), mainAdObject.state = eventDescriptionObject.AdSkipped, p.stop(), cntEventsTracking.trackTime("animationDuration", 1e3 * Math.round(mainAdObject.metaData.currentTime)), videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration), A.stop(), S.stop(), setTimeout(function () {
          E.stopAd()
        }, mainAdObject.customParams.daf))
      } else {
        this.getAdSkippableState() && (injectContentObject.log("skipAd"), mainAdObject.state = eventDescriptionObject.AdSkipped, mainVideo.stop(), mainVideo.video && cntEventsTracking.trackTime("mainVideoDuration", 1e3 * Math.round(mainVideo.video.currentTime)), videoDomElementsAndPostMessages.etDuration >= 0 && cntEventsTracking.trackTime("earnedTimeDuration", videoDomElementsAndPostMessages.etDuration), A.stop(), S.stop(), setTimeout(function () {
          E.stopAd()
        }, mainAdObject.customParams.daf))
      }
    };
    possibleMainAdUnit.prototype.resizeAd = function (t, e, i) {
      injectContentObject.log("resizeAd", arguments);
      var a = mainAdObject.fullscreen;
      mainAdObject.adSize = {
        width: t,
        height: e,
        viewMode: i || "normal"
      }, mainAdObject.fullscreen && !a && cntEventsTracking.customEvent("isFullscreen"), videoDomElementsAndPostMessages.updateSize()
    };
    possibleMainAdUnit.prototype.pauseAd = function () {
      mainAdObject.customParams.nov ? p.pause() : mainVideo.pause()
    };
    possibleMainAdUnit.prototype.fakePauseAd = function (t) {
      mainAdObject.flags.userEngaged = !0, mainAdObject.customParams.nov ? p.pause() : mainVideo.pause(), mainAdObject.remainingTime = -2, mainAdObject.duration = -2
    };
    possibleMainAdUnit.prototype.playFrom = function (t) {
      mainVideo.rewind(t), mainVideo.resume()
    };
    possibleMainAdUnit.prototype.resumeAd = function () {
      mainAdObject.flags.userEngaged || (mainAdObject.customParams.nov ? p.resume() : mainVideo.resume())
    };
    possibleMainAdUnit.prototype.expandAd = function () {
      eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdLog, errorMessagesAndCodes.NOT_ALLOWED_METHOD))
    };
    possibleMainAdUnit.prototype.collapseAd = function () {
      eventProcessingObject.d(eventDescriptionObject.create(eventDescriptionObject.AdLog, errorMessagesAndCodes.NOT_ALLOWED_METHOD))
    };
    possibleMainAdUnit.prototype.setAdVolume = function (t) {
      injectContentObject.log("setAdVolume", t), t = "string" == typeof t ? parseInt(t, 10) : t, t > 1 && (t /= 100), t < 0 && (t = 0), mainAdObject.mute = !t, mainAdObject.volume = t
    };
    possibleMainAdUnit.prototype.getAdVolume = function () {
      return mainAdObject.mute ? 0 : mainAdObject.volume
    };
    possibleMainAdUnit.prototype.getAdDuration = function () {
      return mainAdObject.flags.userEngaged ? mainAdObject.duration : mainAdObject.metaData ? mainAdObject.metaData.totalTime : -2
    };
    possibleMainAdUnit.prototype.getAdLinear = function () {
      return mainAdObject.linear
    };
    possibleMainAdUnit.prototype.getAdWidth = function () {
      return mainAdObject.adSize.width
    };
    possibleMainAdUnit.prototype.getAdHeight = function () {
      return mainAdObject.adSize.height
    };
    possibleMainAdUnit.prototype.getAdRemainingTime = function () {
      return mainAdObject.remainingTime
    };
    possibleMainAdUnit.prototype.getAdExpanded = function () {
      return !0
    };
    possibleMainAdUnit.prototype.getAdSkippableState = function () {
      return mainAdObject.canSkip
    };
    possibleMainAdUnit.prototype.getAdIcons = function () {
      return !1
    };
    possibleMainAdUnit.prototype.getAdCompanions = function () {
      return ""
    };
    possibleMainAdUnit.prototype.subscribe = function (t, e, i) {
      eventProcessingObject.subscribe(t, e, i)
    };
    possibleMainAdUnit.prototype.unsubscribe = function (t, e) {
      eventProcessingObject.unsubscribe(t, e)
    };
    currentWindow.getVPAIDAd = function () {
      return E || (E = new possibleMainAdUnit), E
    }
  }(window, document, !1);
