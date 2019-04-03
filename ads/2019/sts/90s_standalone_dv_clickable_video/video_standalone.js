(function() {
  /**
   * [addCounterImageString description]
   * @param {[type]} clickPath [description]
   * @param {[type]} name      [description]
   */
  function addCounterImageString(clickPath, name) {
    try {
      if ((clickPath !== "") && (clickPath !== undefined)) {
        var randomString = function(length) {
          return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
        };

        var replaceRandom = function(contentURL) {
          var output = contentURL.replace(/\[RANDOM\]/g, randomString(12));

          var currentTimestamp = new Date().getTime();
          output = output.replace(/\[timestamp\]/g, currentTimestamp);
          output = output.replace(/\[TIMESTAMP\]/g, currentTimestamp);

          output = output.replace(/\%random\%/g, randomString(12));
          output = output.replace(/\%RANDOM\%/g, randomString(12));

          return output;
        };

        var clickCounterLink_random = clickPath;
        clickCounterLink_random = replaceRandom(clickPath);

        var currentName = randomString(12);
        if ((name !== null) && (name !== undefined)) {
          currentName = name;
        }

        //  var id = "probtn_CounterLink_" + currentName;
        //  var style = 'width: 1px; height: 1px; position: absolute; left: -10001px; top: -10001px;';
        //  result = '<img id="' + id + '" src="' + clickCounterLink_random + '" style="' + style + '">';

        var img = document.createElement('IMG');
        img.id = "probtn_CounterLink_" + currentName;
        img.src = clickCounterLink_random;
        img.style = 'width: 1px; height: 1px; position: absolute; left: -10001px; top: -10001px;';
        document.getElementById("video_wrapper").appendChild(img);
      } else {
        //console.log("empty clickPath");
      }
    } catch (ex) {
      console.log(ex);
    }
  }


  /**
   * [ClickableAreaBase description]
   * @param {[type]} item [description]
   */
  function ClickableAreaBase(item) {
    this.id = item.id;
    this.top = item.top;
    this.left = item.left;
    this.width = item.width;
    this.height = item.height;
    this.html = item.html;
    this.href = item.href;
    this.clickType = item.clickType;
    this.isVisible = false;
    this.closeButton = item.closeButton;
    this.pauseOnClick = item.pauseOnClick;
    this.playOnClose = item.playOnClose;
    this.isClicked = false;
    this.trackingLinkClick = item.trackingLinkClick;
    this.trackingLinkShow = item.trackingLinkShow;
  }

  ClickableAreaBase.prototype = {
    /**
     * [recalculatePositionAndSize description]
     * @param  {[type]} coef_w       [description]
     * @param  {[type]} coef_h       [description]
     * @param  {[type]} offsetDeltaX [description]
     * @param  {[type]} offsetDeltaY [description]
     * @return {[type]}              [description]
     */
    recalculatePositionAndSize: function(coef_w, coef_h, offsetDeltaX, offsetDeltaY) {
      var newPosition = {};
      newPosition.left = coef_w * this.left + offsetDeltaX;
      newPosition.top = coef_h * this.top + offsetDeltaY;
      newPosition.width = coef_w * this.width;
      newPosition.height = coef_h * this.height;
      console.log(newPosition);

      var elem = document.getElementById(this.id);
      elem.style.left = newPosition.left + "px";
      elem.style.top = newPosition.top + "px";
      elem.style.width = newPosition.width + "px";
      elem.style.height = newPosition.height + "px";
    },
    /**
     * [AddHtmlBlockToPage description]
     */
    AddHtmlBlockToPage: function() {
      var closeArea = "";
      if ((this.closeButton !== undefined) && (this.closeButton !== null) && (this.closeButton !== false)) {
        var id = "closeAreaButton_" + this.id;
        closeArea = '<div class="closeClickableArea" id="' + id + '" style="width: 40px; height: 40px; position: absolute; z-index: 2000;"><img class="closeAreaImgClass" src="' + this.closeButton + '"></div>';
      }

      var style = 'position: absolute; z-index: 1000; display: none; cursor:pointer;' + 'width:' + this.width + 'px;' + 'height:' + this.height + 'px;' + 'top:' + this.top + 'px;' + 'left:' + this.left + 'px;';
      var html = '<div class="clickableVideoAreaClass" id="' + this.id + '" style=' + '"' + style + '">' + closeArea + this.html + '</div>';
      if (this.clickType === "external") {
        html = '<a href="' + this.href + '" target="_blank">' + html + '</a>';
      }

      var div = document.createElement('div');
      div.innerHTML = html;
      document.getElementById("video_wrapper").appendChild(div);
    },
    /**
     * [setHandlers description]
     * @param {[type]} areas [description]
     */
    setHandlers: function(areas) {

    var handleClick = function() {
      if (this.pauseOnClick === true) {
        document.getElementById("video_probtn").pause();
        this.isClicked = true;
      }

      if (this.clickType === "area") {
        areas.forEach(function(area) {
          if (area.id === this.href) {
            if (area.showWindow !== undefined) {
              area.showWindow();
            }
          }
        }.bind(this));
      }

      if ((this.trackingLinkClick !== undefined) && (this.trackingLinkClick !== null) && (this.trackingLinkClick !== "")) {
        addCounterImageString(this.trackingLinkClick);
      }
    };
    document.getElementById(this.id).addEventListener("click", handleClick.bind(this));

    if ((this.closeButton !== undefined) && (this.closeButton !== null) && (this.closeButton !== false)) {
      var id = "closeAreaButton_" + this.id;
      var handleCloseClick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.isVisible = false;
        document.getElementById(this.id).style.display = "none";

        if (this.playOnClose === true) {
          var video = document.getElementById("video_probtn");
          if (video.paused) {
            video.play();
          }
        }
      };
      document.getElementById(id).addEventListener("click", handleCloseClick.bind(this));
    }
  }
  };

  /**
   * [ClickableAreaTime description]
   * @param {[type]} item [description]
   */
  function ClickableAreaTime(item) {
    ClickableAreaBase.call(this, item);

    this.startTime = item.startTime;
    if ((item.stopTime !== null) || (item.stopTime !== undefined) || (item.stopTime !== "")) {
      this.stopTime = item.stopTime;
    } else {
      this.stopTime = 1000;
    }
  }

  ClickableAreaTime.prototype = Object.create(ClickableAreaBase.prototype);
  ClickableAreaTime.prototype.constructor = ClickableAreaTime;

  /**
   * [checkTime description]
   * @param  {[type]} currentTime [description]
   * @return {[type]}             [description]
   */
  ClickableAreaTime.prototype.checkTime = function(currentTime) {
    if ((currentTime > this.startTime) && (currentTime < this.stopTime)) {
      if (!this.isVisible) {
        document.getElementById(this.id).style.display = "block";
        this.isVisible = true;

        if ((this.trackingLinkShow !== undefined) && (this.trackingLinkShow !== null) && (this.trackingLinkShow !== "")) {
          addCounterImageString(this.trackingLinkShow);
        }
      }
    } else {
      if (this.isVisible) {
        document.getElementById(this.id).style.display = "none";
        this.isVisible = false;
      }
    }
  };

  /**
   * [ClickableAreaWindow description]
   * @param {[type]} item [description]
   */
  function ClickableAreaWindow(item) {
    ClickableAreaBase.call(this, item);
    this.closeWithoutInteractionTime = item.closeWithoutInteractionTime;
  }

  ClickableAreaWindow.prototype = Object.create(ClickableAreaBase.prototype);
  ClickableAreaWindow.prototype.constructor = ClickableAreaWindow;

  /**
   * [showWindow description]
   * @param  {[type]} currentTime [description]
   * @return {[type]}             [description]
   */
  //TODO currentTime is not used in function
  ClickableAreaWindow.prototype.showWindow = function(currentTime) {
    this.isVisible = true;
    document.getElementById(this.id).style.display = "block";
    setTimeout(function() {
      if (this.isVisible && (!this.isClicked)) {
        document.getElementById(this.id).style.display = "none";
        document.getElementById('video_probtn').play();
        this.isVisible = true;
      }

      this.isClicked = false;
    }.bind(this), this.closeWithoutInteractionTime);

    if ((this.trackingLinkShow !== undefined) && (this.trackingLinkShow !== null) && (this.trackingLinkShow !== "")) {
      addCounterImageString(this.trackingLinkShow);
    }
  };

  /**
   * [Start description]
   * @param {[type]} VideoParams [description]
   */
  function Start(VideoParams) {
    var video = document.getElementById("video_probtn");
    var paramsVFB = JSON.parse(VideoParams.VideoFooterButton);
    console.log(paramsVFB);
    var clickableAreas = paramsVFB.map(function(param) {
      if (param.startTime !== undefined) {
        return new ClickableAreaTime(param);
      } else {
        return new ClickableAreaWindow(param);
      }
    });

    clickableAreas.forEach(function(item) {
      item.AddHtmlBlockToPage();
      item.setHandlers(clickableAreas);
    });

    /**
     * [recalculateVideoClickableAreasPos description]
     * @return {[type]} [description]
     */
    function recalculateVideoClickableAreasPos() {
      var width_cur = video.offsetWidth;
      var coef_w = width_cur / VideoParams.VideoSize.X;

      var height_cur = video.offsetHeight;
      var coef_h = height_cur / VideoParams.VideoSize.Y;
      var offsetDeltaX = video.offsetLeft;
      var offsetDeltaY = video.offsetTop;
      clickableAreas.forEach(function(area) {
        area.recalculatePositionAndSize(coef_w, coef_h, offsetDeltaX, offsetDeltaY);
      });
    }

    var isOnce = false;

    video.ontimeupdate = function() {
      if (!isOnce) {
        recalculateVideoClickableAreasPos();
        isOnce = true;
      }

      clickableAreas.forEach(function(item) {
        if (item instanceof ClickableAreaTime) {
          item.checkTime(video.currentTime);
        }
      });
    };

    window.addEventListener("resize", recalculateVideoClickableAreasPos);

    if ((VideoParams.TrackingLink !== undefined) || (VideoParams.TrackingLink !== null) ||
      (VideoParams.TrackingLink !== "")) {
      addCounterImageString(VideoParams.TrackingLink);
    }
  }

  window.startScript = Start;
}());
