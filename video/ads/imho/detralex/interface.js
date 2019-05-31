(function(window, document){
    function Interface() {
        this.handlers = {};
        this.modules = [];
        this.id = parseQuery("id");
        this.local = !this.id;
        this.timeData = {};
        this.mediaPath = window.location.href.split("/").slice(0, -1).join('/');
    }
    Interface.prototype.init = function() {
        window.addEventListener("message", function (event) {
            var message;
            try {
                message = JSON.parse(event.data);
            } catch(err) {
                return;
            }
            if(message.id !== parseQuery("id") || !message.event) {
                return;
            }
            if(message.event.type !== "AdRemainingTimeChange") {
                /*
                    Вызов сторонних счетчиков осуществляется на стороне контейнера
                 */
                //CustomEvent.trackEvent(message.event.type);
                //CustomEvent.trackEvent(message.event.type + message.event.viewState);
            }
            switch(message.event.type) {
                case "AdRemainingTimeChange":
                    this.timeData = message.event.data;
                    //CustomEvent.trackEvent("AdVideoProgress" + Math.round(this.timeData.currentTime));
                    var i = 0, handlerData = {};
                    if(this.handlers["timeChange"] && this.handlers["timeChange"].length) {
                        for(i = 0; i < this.handlers["timeChange"].length; i++) {
                            handlerData = this.handlers["timeChange"][i];
                            handlerData.fn.call(handlerData.ctx, message.event.data);
                        }
                    }
                    if(this.handlers["cuePoint"] && this.handlers["cuePoint"].length) {
                        for(i = 0; i < this.handlers["cuePoint"].length; i++) {
                            handlerData = this.handlers["cuePoint"][i];
                            if(message.event.data.currentTime >= handlerData.time && !handlerData.fired) {
                                handlerData.fired = !0;
                                handlerData.fn.call(handlerData.ctx, handlerData.time, message.event.data);
                            }
                        }
                    }
                    $updateState.call(this, "AdRemainingTimeChange", message.event.data);
                    break;
                case "AdSkippableStateChange":
                    $updateState.call(this, "AdSkippableStateChange", message.event.data.value);
                    break;
                case "AdPaused":
                    $updateState.call(this, "AdPaused");
                    break;
                case "AdPlaying":
                    $updateState.call(this, "AdPlaying");
                    break;
                case "AdVolumeChange":
                    $updateState.call(this, "AdVolumeChange", message.event.data.volume);
                    break;
                case "SetConfig":
                    this.clicks = message.event.data.clicks;
                    this.customParams = message.event.data.customParams;
                    this.defaultVolume = message.event.data.defaultVolume;
                    //CustomEvent.init(this.customParams["us"]);
                    $updateState.call(this, "SetConfig", message.event.data);
                    break;
                default :
                    $updateState.call(this, message.event.type, message.event.data);
            }
        }.bind(this), false);

        sendToAPP("action", {type:"AdLoaded"}, this.id);
    };
    Interface.prototype.initFromDOM = function(element) {
        this.ui = new UI(element);
        this.ui.onEvent = this.onUIEvent.bind(this);
        this.addModule(this.ui);
        this.init();
    };
    Interface.prototype.onUIEvent = function(event, data) {
        switch (event) {
            case 'ad-close':
                this.close();
                break;
            case 'ad-mute':
                this.setAdVolume(0);
                break;
            case 'ad-unmute':
                this.setAdVolume(1);
                break;
            case 'ad-resume':
                this.resume();
                break;
            case 'ad-click':
                if (this.customParams["ct"] === 1) {
                    this.click(data.value);
                    if (data.track) {
                        this.trackEvent(data.track);
                    }
                }
        }
    };
    Interface.prototype.pause = function() {
        sendToAPP("apply", {method:"pauseAd"}, this.id);
    };
    Interface.prototype.fakePause = function() {
        sendToAPP("apply", {method:"fakePauseAd"}, this.id);
    };
    Interface.prototype.playFrom = function(second) {
        sendToAPP("apply", {method:"playFrom", args: [second]}, this.id);
    };
    Interface.prototype.stop = function() {
        sendToAPP("apply", {method:"stopAd"}, this.id);
    };
    Interface.prototype.setAdVolume = function(value) {
        sendToAPP("apply", {method:"setAdVolume", args: [value > 0 ? this.defaultVolume : 0]}, this.id);
    };
    Interface.prototype.resume = function() {
        sendToAPP("apply", {method:"resumeAd"}, this.id);
    };
    Interface.prototype.setFlags = function(k, v) {
        sendToAPP("apply", {method:"setFlag", args: [k, v]}, this.id);
    };
    Interface.prototype.cuePoint = function(second, callback, context) {
        this.handlers.cuePoint = this.handlers.cuePoint || [];
        second = typeof second === "number" ? [second] : second;
        for(var i = 0; i < second.length; i++) {
            this.handlers.cuePoint.push({time: second[i], fn: callback, ctx: context});
        }
    };
    Interface.prototype.timeChange = function(callback, context) {
        this.handlers.timeChange = this.handlers.timeChange || [];
        this.handlers.timeChange.push({fn: callback, ctx: context});
    };
    Interface.prototype.stateChange = function(callback, context) {
        this.handlers.stateChange = this.handlers.stateChange || [];
        this.handlers.stateChange.push({fn: callback, ctx: context});
    };
    Interface.prototype.close = function() {
        //this.trackEventRTB(2);
        sendToAPP("action", {type: "AdUserClose", id: name}, this.id);
    };
    Interface.prototype.trackEvent = function(data) {
        if(typeof data === "string") {
            data = {type: data}
        }
        sendToAPP("event", data, this.id);
    };
    Interface.prototype.trackEventRTB = function(eventID) {
        sendToAPP("eventRTB", eventID, this.id);
    };

    Interface.DELAY = 250;
    Interface.interval = 0;
    Interface.etDuration = 0;
    Interface.prototype.trackEventTimer = function(bool) {
        if (bool) {
            Interface.etDuration = 0;
            Interface.interval = setInterval(countSeconds, Interface.DELAY);
        }
        else {
            clearInterval(Interface.interval);
            sendToAPP("apply", {method:"setETDuration", args: [Interface.etDuration]}, this.id);
        }
    }
    function countSeconds () {
        Interface.etDuration += Interface.DELAY;
    }

    Interface.prototype.resizeVideoTranslate = function(hor, ver) {
        sendToAPP("apply", {method:"translateVideoElement", args: [{
            hor: hor,
            ver: ver
        }]}, this.id);
    }
    Interface.prototype.resizeVideo = function(left, top, width, height) {
        sendToAPP("apply", {method:"resizeVideoElement", args: [{
            left: left,
            top: top,
            width: width,
            height: height
        }]}, this.id);
    };
    Interface.prototype.cssStyle = function(style) {
        sendToAPP("apply", {method:"cssStyle", args: [style]}, this.id);
    };
    Interface.prototype.click = function(name) {
        name = name || "default";
        if (this.customParams["plc"]) { // if only player should open url
            sendToAPP("action", {type: "AdClickThru", id: name, url: getClickURL(this.clicks, name)}, this.id);
        } else {
            window.open(getClickURL(this.clicks, name));
            sendToAPP("action", {type: "AdClickThru", id: name}, this.id);
        }
    };
    Interface.prototype.subscribe = function(eventName, handler, context) {
        eventName = typeof eventName === "string" ? [eventName] : eventName;
        for(var i = 0; i < eventName.length; i++) {
            this.handlers[eventName[i]] = this.handlers[eventName[i]] || [];
            this.handlers[eventName[i]].push({fn: callback, ctx: context});
        }
    };
    Interface.prototype.addModule = function(module) {
        this.modules.push(module);
    }
    Interface.prototype.send = function(type, data) {
        sendToAPP(type, data, this.id);
    };

    function $updateState(state, data) {
        if(this.handlers["stateChange"] && this.handlers["stateChange"].length) {
            for(var i = 0; i < this.handlers["stateChange"].length; i++) {
                var handlerData = this.handlers["stateChange"][i];
                handlerData.fn.call(handlerData.ctx, state, data);
            }
        }
        if(this.modules && this.modules.length) {
            for (i = 0; i < this.modules.length; i++) {
                this.modules[i].updateState.call(this.modules[i], state, data);
            }
        }
    }
    function sendToAPP(type, data, id) {
        parent.postMessage(JSON.stringify({
            type: type,
            data: data,
            id: id
        }), "*");
    }
    function getClickURL(clicks, name) {
        return clicks[name || "default"];
    }
    function parseQuery(name) {
        var query = location.search.substr(1).split("&");
        var result = {};
        for(var i = 0; i < query.length; i++) {
            var item = query[i].split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        }
        return name ? result[name] : result;
    }
    function getData(element) {
        var data = {};
        for (var prop in element.dataset) {
            data[prop] = element.dataset[prop];
        }
        return data;
    }

    document.body.addEventListener("contextmenu", function (event) {
        event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.cancelBubble = true;
        return false;
    }); // hide context menu

    window.Interface = Interface;

    //UI module
    function UI(element) {
        this.element = element || document.body;
        this.components = {
            timer: this.element.querySelector('[data-event=ad-timer]'),
            close: this.element.querySelector('[data-event=ad-close]'),
            sound: this.element.querySelector('[data-event=ad-mute]'),
            click: this.element.querySelector('[data-event=ad-click][data-value=default]')
        };
        //Use delegation
        this.element.addEventListener('click', this.clickHandler.bind(this));
    }
    UI.prototype.clickHandler = function(event) {
        event = event || window.event;
        var target = event.target;
        if (target && typeof this.onEvent === 'function') {
            this.onEvent(target.getAttribute('data-event'), getData(target));
        }
    };
    UI.prototype.updateState = function(state, data) {
        switch (state) {
            case "SetConfig":
                if (data.customParams["st"] !== 1) { // hide timer
                    this.components.timer.style.display = "none";
                }
                if (data.customParams["ss"] !== 1 && this.components.sound) { // hide sound
                    this.components.sound.style.display = "none";
                }
                if (data.customParams["co"] > 0 && this.components.close) { // time for close button
                    this.components.close.style.display = "none";
                }
                if (data.customParams["ct"] !== 1) { // click denied
                    this.components.click.style.cursor = "default";
                }
                break;
            case "AdRemainingTimeChange":
                this.components.timer.innerText = "Реклама | " + Math.round(data.totalTime - data.currentTime) + " сек.";
                break;
            case "AdSkippableStateChange":
                this.components.close.style.display = "block";
                break;
            case "AdVolumeChange":
                if (this.components.sound) {
                    this.components.sound.setAttribute("data-event", data > 0 ? "ad-mute" : "ad-unmute");
                }
                break;
            case "AdPaused":
                if (this.components && this.components.click) {
                  this.components.click.setAttribute("data-event", "ad-resume");
                }
                break;
            case "AdPlaying":
                if (this.components && this.components.click) {
                  this.components.click.setAttribute("data-event", "ad-click");
                }
                break;
        }
    };
})(window, document);
