function probtn_callPlayer(frame_id, func, args) {
    var player;
    if ((func==null) || (func==undefined)) {
        func = "playVideo";
    }
    var youtube_command = window.JSON.stringify({ event: 'command', func: func });

    try {
        player = document.getElementById(frame_id);
        player.contentWindow.postMessage(youtube_command, 'https://www.youtube.com');
    } catch (ex) {
        console.log(ex);
    }
}


(function ($) {

    //load nessesary libraries and show button
    $.fn.StartButton = function (options) {
        //options = JSON.parse(JSON.stringify(options));

        String.prototype.ProBtnHashCode = function () {
            var hash = 0;
            //, i, char;
            var char1 = 0;
            var i = 0;
            if (this.length === 0) return hash;
            for (i = 0, l = this.length; i < l; i++) {
                char1 = this.charCodeAt(i);
                hash = ((hash << 5) - hash) + char1;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        };

        var ProBtnControl = {
            guidCookieControlPath: "//cdn.probtn.com/cookie_iframe/cookie-iframe.html",
            uaParserPath: '//cdn.probtn.com/libs/ua-parser.js',
            currentDomain: document.domain.replace("www.", ""),
            realDomain: document.domain.replace("www.", ""),
            initializedActiveZones: {},
            //curent app version
            mainVersion: "1.34.1947_13072015_dev",
            hintText: undefined, //hinttext object with additional functions
            pizzabtn: undefined,
            closebutton: undefined,
            overlaped: false,
            buttonMainParams: {
                isEmpty: true
            },

            onButtonTap: function (currentContentURL, areaName, currentButtonContentType) {
                if (ProBtnControl.params.Debug) console.log("onButtonTap");
                window.probtn_button_tap = true;

                if (ProBtnControl.params.MainButtonClickable === false) {
                    if (ProBtnControl.params.Debug) console.log("ProBtnControl.params.ActiveZoneMainButtonClickEnabled " + ProBtnControl.params.MainButtonClickable);
                    if ((areaName == "") || (areaName == null) || areaName == undefined) {
                        if (ProBtnControl.params.Debug) console.log("areaname empty");
                        return;
                    }
                }

                if ((currentContentURL !== null) && (currentContentURL !== undefined) && (currentContentURL !== "")) {
                } else {
                    currentContentURL = ProBtnControl.params.ContentURL;
                }
                if (ProBtnControl.params.ButtonType == "button_and_scroll_zones") {
                    if ((ProBtnControl.params.currentContentURL !== "") && (ProBtnControl.params.currentContentURL !== null) && (ProBtnControl.params.currentContentURL !== undefined)) {
                        currentContentURL = ProBtnControl.params.currentContentURL;
                    }
                }

                currentContentURL = ProBtnControl.additionalButtonFunctions.replaceRandom(currentContentURL);
                currentContentURL = ProBtnControl.additionalButtonFunctions.getContentUrlWithUtm(currentContentURL);

                if ((currentButtonContentType !== null) && (currentButtonContentType !== undefined) && (currentButtonContentType !== "")) {
                    if (ProBtnControl.params.Debug) console.log("currentButtonContentType" + currentButtonContentType);
                } else {
                    currentButtonContentType = ProBtnControl.params.ButtonContentType;

                    if (ProBtnControl.params.ButtonType == "menu") {
                        ProBtnControl.initFunctions.initFloatingMenu();
                        return;
                    }
                }


                if (currentButtonContentType == "iframe") {
                    ProBtnControl.additionalButtonFunctions.sendMessageToParent("probtn_onbuttontap");
                }

                ProBtnControl.contentTime.startTimer();
                ProBtnControl.HpmdFunctions.expandHpmdTrack();

                if (ProBtnControl.additionalButtonFunctions.animation.animationRuning) {
                    ProBtnControl.additionalButtonFunctions.animation.doneAnimation();
                }



                //click for dfp
                if (ProBtnControl.params.dfp.isDFP) {
                    try {
                        if (ProBtnControl.params.dfp.clickUrlEsc != "") {
                            $.get(ProBtnControl.params.dfp.clickUrlEsc,
                                function (data) {
                                    //we send get request for dfp
                                }
                            );
                        }
                    } catch (ex) {
                        if (ProBtnControl.params.Debug) console.log(ex);
                    }
                }

                //custom click
                if ((ProBtnControl.params.ClickCounterLink) && (ProBtnControl.params.ClickCounterLink !== "")) {
                    try {
                        ProBtnControl.statistics.createClickCounterImage(ProBtnControl.params.ClickCounterLink);
                    } catch (ex) {
                        if (ProBtnControl.params.Debug) console.log(ex);
                    }
                }

                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () { });


                var isMobileLandscape = (ProBtnControl.additionalButtonFunctions.isLandscape() && ProBtnControl.userData.mobile),
                    position = ProBtnControl.pizzabtn.position(),
                    buttonTop = position.top,
                    buttonLeft = position.left,
                    winWidth = window.innerWidth,
                    winHeight = window.innerHeight,
                    finishTop = '0px',
                    finishLeft = '0px',
                    widthCenter = (winWidth + ProBtnControl.params.ButtonSize.W) / 2,
                    heightCenter = (winHeight + ProBtnControl.params.ButtonSize.H) / 2;

                // top or bottom
                if (heightCenter <= buttonTop) {
                    finishTop = (winHeight - ProBtnControl.params.ButtonSize.H) + 'px';
                }
                // left or right
                if (widthCenter <= buttonLeft) {
                    finishLeft = (winWidth - ProBtnControl.params.ButtonSize.W) + 'px';
                }

                var margins = ProBtnControl.additionalButtonFunctions.getFancyboxMargins();

                var positionObj = {
                    property: (isMobileLandscape) ? "left" : "top",
                    currentValue: (isMobileLandscape) ? buttonLeft : buttonTop,
                    finishValue: (isMobileLandscape) ? finishLeft : finishTop
                }

                var InitLeft = $("#probtn_button").offset().left;
                var InitTop = $("#probtn_button").offset().top;

                $.pep.toggleAll(false);


                //youtube video player mode
                if (ProBtnControl.params.ButtonContentType == "youtube") {
                    ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);

                    probtn_callPlayer("video_probtn");
                    $("#youtube_fullscreen").show();
                    $("#fullscreen_probtn").show();

                    ProBtnControl.additionalButtonFunctions.youtubeModalWindowSizes();

                    ProBtnControl.contentTime.startTimer();
                    ProBtnControl.HpmdFunctions.expandHpmdTrack();
                    //run it to update width and margins for ower 'fullscreen'
                    ProBtnControl.additionalButtonFunctions.onOrientationChange(null);



                    probtn_callPlayer("video_probtn");
                    return;
                }


                var fancyboxParams = {
                    href: currentContentURL, //ProBtnControl.params.ContentURL,
                    sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                    type: 'iframe',

                    autoCenter: true,
                    titlePosition: 'inside',
                    scrolling: 'yes',
                    margin: margins,
                    scrollOutside: true,
                    speedIn: 1000,
                    openSpeed: 1000,
                    closeSpeed: 0,
                    speedOut: 0,
                    openOpacity: false,
                    padding: "0px",
                    height: "100%",
                    minWidth: 100,
                    minHeight: 100,
                    autoHeight: false,
                    autoWidht: false,
                    autoResize: false,
                    autoSize: false,
                    iframe: {
                        sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                        preload: false,
                        scrolling: "yes"
                    },
                    helpers: {
                        overlay: {
                            locked: false,
                            speedIn: 0,
                            speedOut: 0,   // duration of fadeOut animation
                            showEarly: true  // indicates if should be opened immediately or wait until the content is ready
                        },
                        title: { type: 'inside' }
                    },
                    beforeLoad: function () {
                        ProBtnControl.hintText.hide();

                        $(".fancybox-iframe").first().attr("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");

                        ProBtnControl.pizzabtn.css(positionObj.property, positionObj.finishValue);
                        if (positionObj.property == 'top') {
                            ProBtnControl.pizzabtn.css('left', InitLeft + 'px');
                        } else {
                            ProBtnControl.pizzabtn.css('top', InitTop + 'px');
                        }

                        if (ProBtnControl.userData.os === "iOS") {
                            $(document.body).bind("touchmove", function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                e.returnValue = false; // ie
                            });
                        }
                        $('html').css("overflow", "hidden");
                    },
                    afterShow: function () {
                        var pizzabtn_wrapper = $("#probtn_wrapper");
                        var opts = {
                            width: ProBtnControl.additionalButtonFunctions.getWindowWidth(),
                            height: ProBtnControl.additionalButtonFunctions.getWindowHeight(),
                            position: "fixed"
                        };

                        pizzabtn_wrapper.css(opts);

                        $(".fancybox-iframe").first().attr("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
                        try {
                            $(".fancybox-iframe").first().contents().find("html").css("visibility", "visible !important");
                        } catch (ex) {
                        }

                        var frame_id = $(".fancybox-iframe").first().attr("id");
                        //callPlayer(frame_id, "playVideo");

                        ProBtnControl.additionalButtonFunctions.setIfameSizes();

                        ProBtnControl.pizzabtn.bind("click", $.fancybox.close);

                        if (currentButtonContentType === "video") {
                            ProBtnControl.additionalButtonFunctions.onOrientationChange(null);
                            try {
                                if ((areaName !== null) && (areaName !== undefined)) {
                                        var video = $("#video_probtn_" + areaName).get(0);
                                        video.play();
                                } else {
                                        var video = $("#video_probtn").get(0);
                                        video.play();
                                }
                            } catch (ex) {
                                if (ProBtnControl.params.Debug) console.log(ex);
                            }
                        }
                    },
                    afterClose: function () {
                        if (currentButtonContentType === "video") {
                            try {
                                if ((areaName !== null) && (areaName !== undefined)) {
                                    var video = $("#video_probtn_" + areaName).get(0);
                                    video.pause();
                                } else {
                                    var video = $("#video_probtn").get(0);
                                    video.pause();
                                }
                            } catch (ex) {

                            }
                        }

                        if (ProBtnControl.params.ButtonType !== "menu") {
                            ProBtnControl.additionalButtonFunctions.MinimizeWrapper(function () {
                            }, ProBtnControl.params.MinimizeWrapperTime);
                        }

                        if (ProBtnControl.userData.os === "iOS") {
                            $(document.body).unbind('touchmove');
                        }
                        $('html').css("overflow", "auto");
                        ProBtnControl.pizzabtn.unbind('click');
                        $.pep.toggleAll(true);
                        if (ProBtnControl.additionalButtonFunctions.closeAfterOrientationChange) {
                            ProBtnControl.pizzabtn.center();
                            ProBtnControl.additionalButtonFunctions.closeAfterOrientationChange = false;
                        } else {
                            ProBtnControl.pizzabtn.css(positionObj.property, positionObj.currentValue + 'px');
                        }

                        if (ProBtnControl.params.HideAfterFirstShow == true) {
                            ProBtnControl.additionalButtonFunctions.hideAll();
                        };

                        ProBtnControl.contentTime.endTimer();
                        ProBtnControl.HpmdFunctions.closeHpmdTrack();
                    }
                };

                fancyboxParams.type = ProBtnControl.params.FancyboxType;
                if (currentButtonContentType === "video") {
                    fancyboxParams.type = "inline";

                    try {
                        if ((areaName !== null) && (areaName !== undefined)) {
                            //if (window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType == "video") {
                            //var video = $("#video_probtn_" + window.probtn_dropedActiveZone.currentActiveZone.Name).get(0);
                            fancyboxParams.href = '#video_item_' + areaName;
                            //}
                        } else {
                            fancyboxParams.href = "#video_item";
                        }
                    } catch (ex) {
                    }
                }

                function formatTitle() {
                    return '<div id="button_fancybox_title">' + ProBtnControl.params.VendorText + '</div>';
                }

                if (ProBtnControl.params.Debug === true) {
                    var outVendorText = ProBtnControl.params.VendorText + " " + ProBtnControl.mainVersion;
                } else {
                    var outVendorText = ProBtnControl.params.VendorText;
                }

                if ((outVendorText !== "") && (ProBtnControl.params.ButtonEnabled === true) && (ProBtnControl.params.ButtonVisible === true)) {
                    fancyboxParams.title = ProBtnControl.additionalButtonFunctions.getTitleTextForModalWindow();
                    fancyboxParams.titleShow = true;
                }

                if (ProBtnControl.params.IsManualSize === true) {
                    fancyboxParams.width = ProBtnControl.params.ContentSize.X;
                    fancyboxParams.height = ProBtnControl.params.ContentSize.Y;
                    //fancyboxParams.autoScale = false;
                } else {
                    //if IsManualSize is false, we set sizes in px
                    fancyboxParams.width = ProBtnControl.params.ContentSize.W;
                    fancyboxParams.height = ProBtnControl.params.ContentSize.H;
                }
                if (ProBtnControl.params.MaxWidth > 0) {
                    fancyboxParams.maxWidth = ProBtnControl.params.MaxWidth;
                };
                if (ProBtnControl.params.MaxHeight > 0) {
                    fancyboxParams.maxHeight = ProBtnControl.params.MaxHeight;
                };

                var hideButtonAfterFirstShow = function () {
                    if (ProBtnControl.params.HideAfterFirstShow == true) {
                        ProBtnControl.statistics.SendStatObject({
                            //"Closed": 1,
                            "Hidded": 1
                        });
                        ProBtnControl.pizzabtn.hide();
                        ProBtnControl.closeButton.remove();
                        ProBtnControl.additionalButtonFunctions.hideAllActiveZones();
                    };
                }

                if (ProBtnControl.params.OpenExternal === true) {

                    ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
                    $.pep.toggleAll(true);
                    window.open(currentContentURL, '_blank');
                    ProBtnControl.additionalButtonFunctions.MinimizeWrapper(function () { });

                    hideButtonAfterFirstShow();

                } else {
                    if (currentButtonContentType == "anchor") {
                        if (currentContentURL.charAt(0) == "#") {
                            $.pep.toggleAll(true);
                            window.location.hash = "";
                            window.location.hash = currentContentURL;
                        } else {
                            ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1, null, function () {

                                $.pep.toggleAll(true);
                                window.open(currentContentURL, '_top');

                                hideButtonAfterFirstShow();
                            });
                        }
                    } else {
                        if ((areaName !== null) && (areaName !== undefined)) {
                            ProBtnControl.statistics.sendAreaActivatedStats(areaName);
                        } else {
                            // send content showed stat
                            ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
                        }

                        var pizzabtn_wrapper = $("#probtn_wrapper");
                        var opts = {
                            width: ProBtnControl.additionalButtonFunctions.getWindowWidth(),
                            height: ProBtnControl.additionalButtonFunctions.getWindowHeight(),
                            position: "fixed"
                        };
                        pizzabtn_wrapper.css(opts);

                        $.fancybox.open(fancyboxParams);
                    }
                };

                //});
            },

            //dropedActiveZone: null,
            contentTime: {
                contentOpenedTime: 0,
                startTimer: function () {
                    if (ProBtnControl.contentTime.intervalId !== undefined) {
                    } else {
                        clearInterval(ProBtnControl.contentTime.intervalId);
                    }
                    ProBtnControl.contentTime.contentOpenedTime = 0;

                    ProBtnControl.contentTime.intervalId = setInterval(function () {
                        ProBtnControl.contentTime.contentOpenedTime++;
                    }, 1000);
                },
                endTimer: function () {
                    clearInterval(ProBtnControl.contentTime.intervalId);
                    ProBtnControl.contentTime.intervalId = undefined;

                    if (ProBtnControl.params.Debug) console.log("ProBtnControl.contentTime.contentOpenedTime - " + ProBtnControl.contentTime.contentOpenedTime);

                    ProBtnControl.statistics.SendStatisticsData("ContentShowedDuration", ProBtnControl.contentTime.contentOpenedTime);
                },
                intervalId: undefined
            },
            userData: {},
            geolocation: {
                getLocation: function () {
                    try {

                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(ProBtnControl.geolocation.getPosition);
                        } else {
                            if (ProBtnControl.params.Debug) console.log("Geolocation is not supported by this browser.");
                        }
                    } catch (ex) {
                        if (ProBtnControl.params.Debug) console.log(ex);
                    }
                },
                getPosition: function (position) {
                    try {
                        if (ProBtnControl.params.Debug) console.log(position);
                        ProBtnControl.geolocation.longitude = position.coords.latitude;
                        ProBtnControl.geolocation.latitude = position.coords.longitude;
                    } catch (ex) {
                        if (ProBtnControl.params.Debug) console.log(ex);
                    }
                },
                longitude: null,
                latitude: null
            },
            //get user data - information about browser, os and so on
            userDataFunction: function () {
                try {
                    var unknown = 'Unbekannt';

                    // screen
                    var screenSize = '';
                    var width = '';
                    var height = '';
                    if (screen.width) {
                        width = (screen.width) ? screen.width : '';
                        height = (screen.height) ? screen.height : '';
                        screenSize += '' + width + " x " + height;
                    }

                    //browser
                    var nVer = navigator.appVersion;
                    var nAgt = navigator.userAgent;
                    var browser = navigator.appName;
                    var version = '' + parseFloat(navigator.appVersion);
                    var majorVersion = parseInt(navigator.appVersion, 10);
                    var nameOffset, verOffset, ix;

                    // Opera
                    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                        browser = 'Opera';
                        version = nAgt.substring(verOffset + 6);
                        if ((verOffset = nAgt.indexOf('Version')) != -1) {
                            version = nAgt.substring(verOffset + 8);
                        }
                    }
                        // MSIE
                    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                        browser = 'Microsoft Internet Explorer';
                        version = nAgt.substring(verOffset + 5);
                    }
                        // Chrome
                    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                        browser = 'Chrome';
                        version = nAgt.substring(verOffset + 7);
                    }
                        // Safari
                    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                        browser = 'Safari';
                        version = nAgt.substring(verOffset + 7);
                        if ((verOffset = nAgt.indexOf('Version')) != -1) {
                            version = nAgt.substring(verOffset + 8);
                        }
                    }
                        // Firefox
                    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                        browser = 'Firefox';
                        version = nAgt.substring(verOffset + 8);
                    }
                        // Other browsers
                    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                        browser = nAgt.substring(nameOffset, verOffset);
                        version = nAgt.substring(verOffset + 1);
                        if (browser.toLowerCase() == browser.toUpperCase()) {
                            browser = navigator.appName;
                        }
                    }
                    // trim the version string
                    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
                    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);

                    majorVersion = parseInt('' + version, 10);
                    if (isNaN(majorVersion)) {
                        version = '' + parseFloat(navigator.appVersion);
                        majorVersion = parseInt(navigator.appVersion, 10);
                    }

                    // mobile version
                    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

                    // cookie
                    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

                    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                        document.cookie = 'testcookie';
                        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
                    }

                    // system
                    var os = unknown;
                    var clientStrings = [
                        { s: 'Windows 3.11', r: /Win16/ },
                        { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                        { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                        { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                        { s: 'Windows CE', r: /Windows CE/ },
                        { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                        { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                        { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                        { s: 'Windows Vista', r: /Windows NT 6.0/ },
                        { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                        { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                        { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                        { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                        { s: 'Windows ME', r: /Windows ME/ },
                        { s: 'Android', r: /Android/ },
                        { s: 'Open BSD', r: /OpenBSD/ },
                        { s: 'Sun OS', r: /SunOS/ },
                        { s: 'Linux', r: /(Linux|X11)/ },
                        { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                        { s: 'Mac OS X', r: /Mac OS X/ },
                        { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                        { s: 'QNX', r: /QNX/ },
                        { s: 'UNIX', r: /UNIX/ },
                        { s: 'BeOS', r: /BeOS/ },
                        { s: 'OS/2', r: /OS\/2/ },
                        { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
                    ];

                    try {
                        for (var id in clientStrings) {
                            var cs = clientStrings[id];
                            if (cs.r.test(nAgt)) {
                                os = cs.s;
                                break;
                            }
                        }

                        var osVersion = unknown;

                        if (/Windows/.test(os)) {
                            osVersion = /Windows (.*)/.exec(os)[1];
                            os = 'Windows';
                        }
                        switch (os) {
                            case 'Mac OS X':
                                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                                break;

                            case 'Android':
                                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                                break;

                            case 'iOS':
                                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                                break;

                        }
                    } catch (ex) {
                        os = unknown;
                    }

                    var isiPad = navigator.userAgent.match(/iPad/i) != null;

                    var result = {
                        screen: screenSize,
                        screenWidth: width,
                        screenHeight: height,
                        browser: browser,
                        browserVersion: version,
                        browserMajorVersion: majorVersion,
                        mobile: mobile,
                        os: os,
                        osVersion: osVersion,
                        cookies: cookieEnabled,
                        isiPad: isiPad
                    };
                    ProBtnControl.userData = result;
                    return result;
                } catch (ex) {
                    return undefined;
                };
            },
            XProBtnToken: "b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b",
            //main server url
            serverUrl: "//admin.probtn.com",
            GetDeviceUID: function () {
                var probtnId = "1234";
                if (ProBtnControl.cookieFunctions.readCookie("probtnId") != null) {
                } else {
                    //set cookie
                    var currentdate = new Date();
                    currentdate = currentdate.getTime();
                    probtnId = currentdate.toString() + "-" + navigator.userAgent.toString().ProBtnHashCode();
                    ProBtnControl.cookieFunctions.createCookie("probtnId", probtnId, 365);
                };
                ProBtnControl.cookieFunctions.setHashCookie();
                probtnId = ProBtnControl.cookieFunctions.readCookie("probtnId");
                return probtnId;
            },
            DeviceCID: "",
            cookieFunctions: {
                getDeviceCID: function (callback) {
                    var probtnCID = ProBtnControl.cookieFunctions.readCookie("probtnCID");
                    if ((probtnCID !== null) && (probtnCID !== undefined) && (probtnCID !== "")) {
                        ProBtnControl.DeviceCID = probtnCID;
                        callback(probtnCID);
                    } else {
                        var receiveMessage = function (event) {
                            if (ProBtnControl.params.Debug) console.log("event", event);
                            if ((event.data.type !== undefined) && (event.data.type !== null) && (event.data.type === "probtnCID")) {
                                ProBtnControl.cookieFunctions.createCookie("probtnCID", event.data.cid, 365);
                                ProBtnControl.DeviceCID = event.data.cid;
                                callback(event.data.cid);
                            } else {

                            }
                        }
                        window.self.addEventListener("message", receiveMessage, false);

                        $("#guidIframe").remove();
                        var guidIframe = $("<iframe/>", {
                            id: "guidIframe",
                            scrolling: 'no',
                            'seamless': "seamless",
                            src: ProBtnControl.guidCookieControlPath,
                            css: {
                                'width': "0px",
                                'height': "0px",
                                'position': 'absolute',
                                'top': '-10000px',
                                'left': '-10000px',
                            }
                        }).appendTo("body");
                    }
                },
                setHashCookie: function () {
                    var re = /#\S*=/g;
                    var str = window.location.hash;
                    var m;

                    while ((m = re.exec(str)) !== null) {
                        if (m.index === re.lastIndex) {
                            re.lastIndex++;
                        }
                        var hashId = m[0].replace("=", "");
                        if (hashId == "#probtn_deviceid") {
                            var hashValue = str.replace(m[0], "");
                            if ((hashValue !== "") && (hashValue !== undefined) && (hashValue !== null)) {
                                //set NAMED cookie as devide identificator
                                ProBtnControl.cookieFunctions.createCookie("probtnId", "_NAMED_" + hashValue, 365);
                            } else {
                                //set cookie to default random value
                                ProBtnControl.cookieFunctions.eraseCookie("probtnId");
                                ProBtnControl.GetDeviceUID();
                            }

                        }
                    }
                },
                createCookie: function (name, value, days) {
                    var expires = "";
                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                        expires = "; expires=" + date.toGMTString();
                    }
                    document.cookie = name + "=" + value + expires + "; path=/";
                },
                readCookie: function (name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                    }
                    return null;
                },
                eraseCookie: function (name) {
                    ProBtnControl.cookieFunctions.createCookie(name, "", -1);
                }
            },
            allButtonInit: false,
            params: {},
            HpmdFunctions: {
                probtnHpmdTrack: function (i) {
                    if (ProBtnControl.params.isHPMD) {
                        try {
                            if (i === undefined) {
                                i = 1;
                            }
                            //ProBtnControl.params.hpmd.trackEvent("probtn" + i);
                        } catch (ex) {
                        }
                    }
                },
                closeHpmdTrack: function () {
                    //ProBtnControl.contentTime.endTimer();
                    if (ProBtnControl.params.isHPMD) {
                        try {
                            //fancybox closed
                            ProBtnControl.params.hpmd.trackEvent("hpmd.close");
                            //track opened time
                            ProBtnControl.params.hpmd.trackEvent("hpmd.time-expanded", { weight: ProBtnControl.contentTime.contentOpenedTime });
                        } catch (ex) {
                        }
                    }
                },
                expandHpmdTrack: function () {
                    //start opened content timer
                    //ProBtnControl.contentTime.startTimer();
                    if (ProBtnControl.params.isHPMD) {
                        try {
                            //fancybox closed
                            ProBtnControl.params.hpmd.trackEvent("hpmd.expand");
                        } catch (ex) {
                            if (ProBtnControl.params.Debug) console.log(ex);
                        }
                    }
                }
            },
            randomElements: {
                probtnId: "probtn_button_" //+ ProBtnControl.additionalButtonFunctions.randomString(12)
            },
            statistics: {
                createClickCounterImage: function (clickPath) {
                    var clickCounterLink_random = clickPath;
                    var clickCounterLink_random = ProBtnControl.additionalButtonFunctions.replaceRandom(clickPath);
                    if (clickCounterLink_random == clickPath) {
                        clickCounterLink_random = ProBtnControl.additionalButtonFunctions.replaceUrlParam(clickCounterLink_random, 'probtn_random', ProBtnControl.additionalButtonFunctions.randomString(12));
                    }
                    var probtn_TrackingLink = $("<img/>", {
                        id: "probtn_ClickCounterLink_" + ProBtnControl.additionalButtonFunctions.randomString(12),
                        src: clickCounterLink_random,
                        style: 'width: 1px; height: 1px; position: absolute; left: -10001px; top: -10001px;'
                    }).prependTo('body');
                },
                sendAreaActivatedStats: function (areaName, callback) {
                    if (ProBtnControl.params.isServerCommunicationEnabled) {
                        var probtnId = "1234";
                        probtnId = ProBtnControl.GetDeviceUID();
                        var probtncid = ProBtnControl.DeviceCID;

                        $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + ProBtnControl.currentDomain + "&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&Version=1.0&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + "{\"ContentShowed\": \"1\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&AZName=" + areaName + "&callback=?",
                            function () { }).done(function () {

                            }).fail(function () { }).always(function () {
                                if ((callback !== null) && (callback !== undefined)) {
                                    callback();
                                }
                            });
                    }
                },
                //TODO refactoring - make universal function with azname stats sending
                sendScrollAreaShowedStats: function (areaName, callback) {
                    if (ProBtnControl.params.isServerCommunicationEnabled) {
                        var probtnId = "1234";
                        probtnId = ProBtnControl.GetDeviceUID();
                        var probtncid = ProBtnControl.DeviceCID;

                        $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + ProBtnControl.currentDomain + "&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&Version=1.0&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + "{\"ScrollZoneShowed\": \"1\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&AZName=" + areaName + "&callback=?",
                            function () { }).done(function () {
                            }).fail(function () { }).always(function () {
                                if ((callback !== null) && (callback !== undefined)) {
                                    callback();
                                }
                            });
                    }
                },
                ///
                /// send information about browser version, resolution and some other data
                ///
                SendBrowserStatsInfo: function () {
                    try {
                        if (ProBtnControl.params.isServerCommunicationEnabled) {
                            /*ProBtnControl.statistics.SendStatisticsData("Resolution", jscd.screen, 1);
                            ProBtnControl.statistics.SendStatisticsData("Browser", jscd.browser, 1);
                            ProBtnControl.statistics.SendStatisticsData("BrowserVersion", jscd.browserVersion, 1);
                            ProBtnControl.statistics.SendStatisticsData("OS", jscd.os + ' ' + jscd.osVersion, 1);*/

                            ProBtnControl.statistics.SendStatisticsDataObject({
                                "Resolution": ProBtnControl.userData.screen,
                                "Browser": ProBtnControl.userData.browser,
                                "BrowserVersion": ProBtnControl.userData.browserVersion,
                                "OS": ProBtnControl.userData.os + ' ' + ProBtnControl.userData.osVersion
                            });
                        }
                    } catch (ex) {
                        if (ProBtnControl.params.Debug) console.log(ex);
                    }
                },
                ///
                /// Function used to send "custom" statistics
                /// for example information about resolution, OS, browser, browser version
                /// This information would be rewriten by last resived data for deviceUID each time when it send to server
                ///
                SendCustomStat: function (name, value, probtnId, currentDomain) {
                    if (ProBtnControl.params.isServerCommunicationEnabled) {
                        $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateCustomStatistic?BundleID=" + currentDomain + "&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&Version=1.0&DeviceUID=" + probtnId + "&localDomain=" + realDomain + "&Statistic=" + "{\"" + name + "\": \"" + value + "\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",
                        function () { }).done(function () {

                        }).fail(function () { }).always(function () {
                            if ((callback !== null) && (callback !== undefined)) {
                                callback();
                            }
                        });
                    }
                },
                ///
                /// Send stats to probtn
                /// <values>
                /// paramName - name for statistics parameter
                /// value - value of this paarameter. Default is 1
                /// custom - if set to 1, this param and it's value will be send as custom stats
                /// </values>
                ///
                SendStatisticsData: function (paramName, value, custom, callback) {
                    if (ProBtnControl.params.isServerCommunicationEnabled) {
                        var probtnId = "1234";

                        if (paramName == "" || paramName == null) {
                            paramName = "Opened";
                        };
                        if (value == "" || value == null) {
                            value = 1;
                        };
                        probtnId = ProBtnControl.GetDeviceUID();
                        var probtncid = ProBtnControl.DeviceCID;

                        if (custom == "" || custom == null || custom == undefined) {
                            ProBtnControl.statistics.SendStat(paramName, value, probtnId, ProBtnControl.currentDomain, callback);
                        } else {
                            ProBtnControl.statistics.SendCustomStat(paramName, value, probtnId, ProBtnControl.currentDomain, callback);
                        };
                    }
                },
                SendStat: function (name, value, probtnId, currentDomain, callback) {
                    if (ProBtnControl.params.isServerCommunicationEnabled) {
                        $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + currentDomain + "&Version=1.0&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&DeviceUID=" + probtnId + "&DeviceCUID=" + ProBtnControl.DeviceCID + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + "{\"" + name + "\": \"" + value + "\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",
                            function (data1) {
                                //if (ProBtnControl.params.Debug) console.log(data1);
                            }).done(function () { }).fail(function () { }).always(function () {
                                ///if (ProBtnControl.params.Debug) console.log("SendStat always");
                                if ((callback !== null) && (callback !== undefined)) {
                                    callback();
                                }
                            });
                    }
                },
                SendStatObject: function (object, callback) {
                    var statistic = JSON.stringify(object);
                    var probtnId = "1234";
                    probtnId = ProBtnControl.GetDeviceUID();
                    var probtncid = ProBtnControl.DeviceCID;

                    if (ProBtnControl.params.isServerCommunicationEnabled) {
                        $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + ProBtnControl.currentDomain + "&Version=1.0&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + statistic + "&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",
                            function (data1) {
                                if (ProBtnControl.params.Debug) console.log(data1);
                            }).done(function () { }).fail(function () { }).always(function () {
                                if (ProBtnControl.params.Debug) console.log("SendStat always");
                                if ((callback !== null) && (callback !== undefined)) {
                                    callback();
                                }
                            });
                    }
                },
                SendStatisticsDataObject: function (object, callback) {
                    var probtnId = "1234";
                    probtnId = ProBtnControl.GetDeviceUID();
                    var probtncid = ProBtnControl.DeviceCID;

                    if (ProBtnControl.params.isServerCommunicationEnabled) {
                        $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateCustomStatistic?BundleID=" + ProBtnControl.currentDomain + "&Version=1.0&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + JSON.stringify(object) + "&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",
                            function (data1) {
                                if (ProBtnControl.params.Debug) console.log(data1);
                            }).done(function () { }).fail(function () { }).always(function () {
                                if (ProBtnControl.params.Debug) console.log("SendStat always");
                                if ((callback !== null) && (callback !== undefined)) {
                                    callback();
                                }
                            });
                    }
                }
            },
            videoFunctions: {
                createVideoItem: function (name, path) {

                    var videoItemNameBlock = "video_item";
                    var videoItemNameVideo = "video_probtn";
                    if ((name !== null) && (name !== undefined) && (name !== "")) {
                        videoItemNameBlock = "video_item_" + name;
                        videoItemNameVideo = "video_probtn_" + name;
                    }

                    $(videoItemNameBlock).remove();

                    //menuItem.Name
                    var content = '<div id="' + videoItemNameBlock + '" class="probtn_video_wrapper2" style="display: none; width: auto; height: auto; margin: 0 auto; vertical-align: middle; background: black;"> \
        <table class="probtn_video_wrapper2" style="width: auto; height: auto; margin: 0 auto;"><tr><td style="vertical-align: middle; text-align: center;"><video webkit-playsinline id="' + videoItemNameVideo + '" class="probtn_video"  controls="controls" width="100%"height="100%" style="background: black; margin: 0 auto; vertical-align: middle; width: 100%; height: 100%; display: inline-block;"> \
          <source src="' + path + '" type="video/mp4"> \
            Your browser does not support the video tag. \
        </video></td></tr></table> \
    </div>';
                    $('body').append(content);

                    var newFancyboxWidth = window.innerWidth - 30;
                    var newFancyboxHeight = window.innerHeight - 60;
                    if (ProBtnControl.params.IsManualSize === true) {
                        if (ProBtnControl.params.ContentSize.X.indexOf('%') !== -1) {
                            newFancyboxWidth = window.innerWidth * (parseFloat(ProBtnControl.params.ContentSize.X) / 100);
                        } else {
                            newFancyboxWidth = ProBtnControl.params.ContentSize.X;
                        }

                        if (ProBtnControl.params.ContentSize.Y.indexOf('%') !== -1) {
                            newFancyboxHeight = window.innerHeight * (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
                        } else {
                            newFancyboxHeight = ProBtnControl.params.ContentSize.Y;
                        }
                    } else {
                    }

                    var videoHeight = 0;
                    var videoWidth = 0;
                    if (newFancyboxWidth > newFancyboxHeight) {
                        videoHeight = newFancyboxHeight;
                        videoWidth = (videoHeight / ProBtnControl.params.VideoSize.Y) * ProBtnControl.params.VideoSize.X;
                    } else {
                        videoWidth = newFancyboxWidth;
                        videoHeight = (videoWidth / ProBtnControl.params.VideoSize.X) * ProBtnControl.params.VideoSize.Y;
                    }

                    $("#" + videoItemNameVideo).width(videoWidth);
                    $("#" + videoItemNameVideo).height(videoHeight);
                }
            },
            initFunctions: {
                initFloatingMenu: function () {

                    ProBtnControl.initFunctions.initRemoveMenu();
                    ProBtnControl.hintText.makeInvisible();

                    //$.pep.toggleAll(false);
                    ProBtnControl.pizzabtn.stop(true, true);

                    ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {

                        var pizzabtn_wrapper = $("#probtn_wrapper");
                        pizzabtn_wrapper.css("background", "rgba(0, 0, 0, 0.5)");

                        ProBtnControl.pizzabtn.stop(true, true);
                        setTimeout(function () {
                            ProBtnControl.pizzabtn.animate({
                                left: 0,
                                top: (window.innerHeight - ProBtnControl.pizzabtn.height())
                            }, 500, function () {
                                setTimeout(function () {
                                    var menu = $("<div/>", {
                                        id: "probtn_menu",
                                        style: "opacity: 0.1"
                                    }).prependTo('#probtn_wrapper');

                                    var menuUL = $("<ul/>", { id: 'probtn_menu_ul' }).prependTo(menu);

                                    //add menu items
                                    if (ProBtnControl.params.MenuItems) {
                                        var style = "style='font-size:" + ProBtnControl.params.MenuOptions.FontSize + "; font-family: " + ProBtnControl.params.MenuOptions.FontFamily + "; color: " + ProBtnControl.params.MenuOptions.ForegroundColor + " '";
                                        $.each(ProBtnControl.params.MenuItems, function (index, menuItem) {
                                            var image = "";
                                            if ((menuItem.Image !== undefined) && (menuItem.Image !== null) && (menuItem.Image !== "")) {
                                                image = "<img style='height: 40px; margin-right: 10px;' src='" + menuItem.Image + "'/>";
                                            } else {
                                                image = "<div class='probtn_image_placeholder' style='display: inline-block; width: 40px; height:40px; margin-right: 10px;'>&nbsp;</div>";
                                            }

                                            var actionURL = menuItem.ActionURL;
                                            if (menuItem.Type == "video") {
                                                actionURL = "#video_item_" + menuItem.Name;
                                            }

                                            var onclick = 'return false';
                                            if ((menuItem.Type == "video") && (ProBtnControl.userData.mobile)) {
                                                onclick = ProBtnControl.params.ButtonOnClick + ' return false';
                                            }

                                            menuUL.append("<li style='opacity: 0;'><span " + style + "><a " + style + " class='probtn_menu_link " + menuItem.Type + "' rel='" + menuItem.Name + "' rev='" + menuItem.Type + "' target='_blank' onclick='" + onclick + "' href='" + actionURL + "'>" + image + "<span>" + menuItem.Text + "</span>" + "</a></span></li>");

                                            $("#probtn_menu li:last").css({
                                                "margin-left": -$("#probtn_menu li:last").width()
                                            });

                                            //add video
                                            if (menuItem.Type == "video") {
                                                ProBtnControl.videoFunctions.createVideoItem(menuItem.Name, menuItem.ActionURL);
                                            }
                                        });
                                    }

                                    $(document).on("click", ".probtn_menu_link", function () {
                                        var menuType = $(this).attr("rev");

                                        switch (menuType) {
                                            case "external":
                                                window.probtn_dropedActiveZone = {};
                                                window.probtn_dropedActiveZone.currentActiveZone = null;
                                                window.probtn_ButtonContentType = "external";

                                                ProBtnControl.statistics.sendAreaActivatedStats($(this).attr("rel"));
                                                window.open($(this).attr("href"));
                                                break
                                            case "iframe":
                                                window.probtn_dropedActiveZone = {};
                                                window.probtn_dropedActiveZone.currentActiveZone = null;
                                                window.probtn_ButtonContentType = "iframe";

                                                ProBtnControl.statistics.sendAreaActivatedStats($(this).attr("rel"));
                                                ProBtnControl.onButtonTap($(this).attr("href"), null, "iframe");

                                                break
                                            case "video":
                                                window.probtn_dropedActiveZone = {};
                                                window.probtn_dropedActiveZone.currentActiveZone = {};
                                                window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType = "video";
                                                window.probtn_dropedActiveZone.currentActiveZone.Name = $(this).attr("rel");
                                                window.probtn_ButtonContentType = "video";

                                                ProBtnControl.statistics.sendAreaActivatedStats($(this).attr("rel"));
                                                ProBtnControl.onButtonTap($(this).attr("href"), $(this).attr("rel"), "video");
                                                break
                                            default:
                                                ProBtnControl.statistics.sendAreaActivatedStats($(this).attr("rel"));
                                                window.open($(this).attr("href"));
                                        }
                                    })

                                    //set menu position
                                    menu.css("top", ProBtnControl.pizzabtn.position().top - menuUL.height());
                                    menu.css("left", 0);
                                    menu.css("display", "block");


                                    menu.animate({
                                        left: 1,
                                        opacity: 1.0
                                    }, 500, function () {
                                    });

                                    var countLi = 300;
                                    $.each($("#probtn_menu li"), function (index, value) {
                                        $(value).animate({
                                            "margin-left": 0,
                                            opacity: 1.0
                                        }, countLi, function () {
                                        });
                                        //});
                                        countLi = countLi + 300;
                                    });

                                }, 300);

                            });
                        }, 1);

                    });

                },
                initRemoveMenu: function () {
                    var pizzabtn_wrapper = $("#probtn_wrapper");
                    pizzabtn_wrapper.css("background", "rgba(0, 0, 0, 0)");
                    $("#probtn_menu").remove();
                },
                hintTextStyle: {
                },
                //show fullscreen
                fullscreenInitAndShow: function () {
                    //if HideAfterFirstShow
                    var cookieHideAfterClose = null;
                    if (ProBtnControl.params.HideAfterFirstShow === true) {
                        cookieHideAfterClose = ProBtnControl.cookieFunctions.readCookie("probtnCloseFlag");
                    } else {
                        ProBtnControl.cookieFunctions.eraseCookie("probtnCloseFlag");
                    }

                    if (cookieHideAfterClose === null) {

                        var onclickIframe = 'return false;';
                        var iframeOverlay = '';

                        if ((ProBtnControl.params.FullscreenClickLink !== "") && (ProBtnControl.params.FullscreenClickLink !== undefined) && (ProBtnControl.params.FullscreenClickLink !== null)) {
                            onclickIframe = ProBtnControl.additionalButtonFunctions.getContentUrlWithUtm(ProBtnControl.params.FullscreenClickLink);
                            iframeOverlay = '<div id="probtn_iframe_overlay" style="  z-index: 200000; display: inline-block; width: 100%; height: 100%; margin-top: -100%;"></div>';
                            //onclick="window.open(\'' + onclickIframe + '\')"
                        }

                        //add ower own block (with applying fancybox styles to it)
                        $('body').append('<div class="fancybox-overlay fancybox-overlay-fixed" style="width: auto; height: auto; display: block;"></div>');
                        $('body').append('<div id="fullscreen_probtn">' +
                            '<div class="fancybox-wrap fancybox-mobile fancybox-type-iframe fancybox-opened" tabindex="-1" ' +
                            'style="margin: 0 auto; height: auto; position: fixed; opacity: 1; overflow: visible;">' +
                            '<div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">' +
                            '<div class="fancybox-outer">' +
                            '<div class="fancybox-inner" style="overflow: scroll; ">' +
                            '<iframe id="probtn_fullscreen_iframe" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="' + ProBtnControl.additionalButtonFunctions.getContentUrlWithUtm(ProBtnControl.params.ContentURL) + '"' +
                            ' sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>' +
                            iframeOverlay + '</div></div>' +
                            '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a></div></div>' +
                            '</div');

                        ProBtnControl.statistics.SendStatObject({
                            "ContentShowed": 1,
                            "Showed": 1
                        });

                        ProBtnControl.interactionFunctions.initInteractionTimer();

                        $("body").on('click', '#probtn_iframe_overlay', function () {
                            ProBtnControl.statistics.SendStatObject({
                                "Clicked": 1
                            });
                            window.open(onclickIframe);
                        });


                        ProBtnControl.contentTime.startTimer();
                        ProBtnControl.HpmdFunctions.expandHpmdTrack();

                        //run it to update width and margins for ower 'fullscreen'
                        ProBtnControl.additionalButtonFunctions.onOrientationChange(null);

                        //listen for click event's on items - to close our 'fullscreen'
                        $('body').on('click', "#fullscreen_probtn .fancybox-close, .fancybox-overlay", function () {
                            $('#fullscreen_probtn').hide();
                            $('.fancybox-overlay').hide();

                            ProBtnControl.contentTime.endTimer();
                            ProBtnControl.HpmdFunctions.closeHpmdTrack();
                        });
                        if (ProBtnControl.params.HideAfterFirstShow === true) {
                            //and now add cookie to add flag that we are open fullscreen once
                            ProBtnControl.cookieFunctions.createCookie("probtnCloseFlag", true, 60);
                        } else {
                        }
                    }
                },
                //init active zones if enabled in options
                initActiveZones: function () {
                    if (((ProBtnControl.params.ActiveZones !== null) || (ProBtnControl.params.ActiveZones.length > 0)) && (ProBtnControl.params.ButtonType == "button_and_active_zones")) {
                        //check every zone
                        for (var i = 0; i < ProBtnControl.params.ActiveZones.length; i++) {
                            var currentActiveZone = ProBtnControl.params.ActiveZones[i];

                            currentActiveZone.ActiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(currentActiveZone.ActiveSize);
                            currentActiveZone.InactiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(currentActiveZone.InactiveSize);

                            if ((currentActiveZone.Name == "") || (currentActiveZone.Name == null) || (currentActiveZone.Name == undefined)) {
                                currentActiveZone.Name = ProBtnControl.additionalButtonFunctions.randomString(12);
                            }

                            var elementType = '<img/>';
                            if (currentActiveZone.ButtonImageType == "iframe") {
                                elementType = '<iframe/>';
                            }
                            if ((currentActiveZone.ButtonIframeInitialSize == null) || (currentActiveZone.ButtonIframeInitialSize == undefined)) {
                                currentActiveZone.ButtonIframeInitialSize = { W: 0, H: 0 };
                            }
                            var activeZoneBtn = $(elementType, {
                                id: 'probtn_active_zone_' + currentActiveZone.Name,
                                'src': currentActiveZone.InactiveImage,  //'//probtnexample1.azurewebsites.net/img/logo.png',
                                'class': 'probtn_active_zone',
                                'rel': currentActiveZone.Name,
                                scrolling: 'no',
                                css: {
                                    position: 'fixed',
                                    width: currentActiveZone.InactiveSize.W,
                                    height: currentActiveZone.InactiveSize.H,
                                    opacity: currentActiveZone.InactiveOpacity,
                                    border: '0px',
                                    overflow: 'hidden'
                                }
                            }).prependTo('body');

                            if (currentActiveZone.ButtonImageType == "iframe") {
                                ProBtnControl.additionalButtonFunctions.applyIframeScale(activeZoneBtn, currentActiveZone.ButtonIframeInitialSize, currentActiveZone.InactiveSize);
                            }

                            ProBtnControl.additionalButtonFunctions.preloadImage(currentActiveZone.ActiveImage);

                            if (currentActiveZone.ButtonContentType == "video") {
                                ProBtnControl.videoFunctions.createVideoItem(currentActiveZone.Name, currentActiveZone.ActionURL);
                            }

                            if (currentActiveZone.VisibleOnlyInteraction) {
                                activeZoneBtn.hide();
                            }
                            activeZoneBtn.isActive = false;

                            activeZoneBtn.currentActiveZone = currentActiveZone;

                            activeZoneBtn.setPosition = function () {
                                var body = $('body');

                                var activex = this.currentActiveZone.Position.X;
                                var activey = this.currentActiveZone.Position.Y;

                                var top = (window.innerHeight - this.height()) * activey;
                                var left = (body.innerWidth() - this.width()) * activex + $(window).scrollLeft();

                                //check top borders
                                if (top <= 0) {
                                    top = 0;
                                }
                                if ((top + this.height()) > window.innerHeight) {
                                    top = (window.innerHeight - this.height());
                                }

                                //check left borders
                                if (left <= 0) {
                                    left = 0;
                                }
                                if ((left + this.width()) > body.innerWidth()) {
                                    left = (body.innerWidth() - this.width());
                                }

                                this.css('top', top + 'px');
                                this.css('left', left + 'px');
                            }

                            activeZoneBtn.setTransitionDuration = function (duration) {
                                var val = duration + 's';
                                this.css({
                                    'transition-duration': val,
                                    '-webkit-transition-duration': val,
                                    '-moz-transition-duration': val,
                                    '-o-transition-duration': val
                                });
                            }

                            //animation to move from inactive to active state
                            activeZoneBtn.animateActive = function () {
                                this.setTransitionDuration(ProBtnControl.params.CloseActiveDuration);
                                //if (this.isActive == false) {
                                this.isActive = true;
                                if (this.currentActiveZone.ButtonImageType !== "iframe") {
                                    this.attr("src", this.currentActiveZone.ActiveImage);
                                }

                                var activeZoneBtn = this;

                                if (ProBtnControl.additionalButtonFunctions.checkExistInitIframeSIze(this)) {
                                    this.css({
                                        opacity: this.currentActiveZone.ActiveOpacity
                                    });
                                } else {
                                    this.currentActiveZone.ActiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(this.currentActiveZone.ActiveSize);
                                    this.css({
                                        opacity: this.currentActiveZone.ActiveOpacity,
                                        width: this.currentActiveZone.ActiveSize.W,
                                        height: this.currentActiveZone.ActiveSize.H
                                    });
                                }
                            }

                            //animation to move from active to inactive state
                            activeZoneBtn.animateInactive = function () {
                                this.setTransitionDuration(ProBtnControl.params.CloseActiveDuration);

                                var activeZoneBtn = this;

                                if (ProBtnControl.additionalButtonFunctions.checkExistInitIframeSIze(activeZoneBtn)) {
                                    activeZoneBtn.css({
                                        opacity: activeZoneBtn.currentActiveZone.InactiveOpacity
                                    });
                                } else {
                                    this.currentActiveZone.InactiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(this.currentActiveZone.InactiveSize);
                                    activeZoneBtn.css({
                                        opacity: activeZoneBtn.currentActiveZone.InactiveOpacity,
                                        width: activeZoneBtn.currentActiveZone.InactiveSize.W,
                                        height: activeZoneBtn.currentActiveZone.InactiveSize.H
                                    });
                                }
                            };

                            activeZoneBtn.requestClickCounterLink = function () {
                                if ((this.currentActiveZone.ClickCounterLink) && (this.currentActiveZone.ClickCounterLink !== "")) {
                                    try {
                                        ProBtnControl.statistics.createClickCounterImage(this.currentActiveZone.ClickCounterLink);
                                    } catch (ex) {
                                        if (ProBtnControl.params.Debug) console.log(ex);
                                    }
                                }
                            }

                            activeZoneBtn.setPosition();
                            ProBtnControl.initializedActiveZones[currentActiveZone.Name] = activeZoneBtn;
                        }
                    }
                },

                //for button_and_scroll_zones buttonType add nessesary handlers
                initScrollChange: function (runOnScroll) {
                    var firstRun = false;
                    var onScroll = function (e) {
                        var scrollZone = ProBtnControl.initFunctions.initStartScrollParams('get');
                        var scrollEvent = e;

                        //console.log('on scroll', ProBtnControl.currentScrollZone, scrollZone);

                        if ((scrollZone == null) && (ProBtnControl.currentScrollZone !== null) && (ProBtnControl.currentScrollZone !== undefined)) {
                            ProBtnControl.statistics.sendScrollAreaShowedStats(ProBtnControl.currentScrollZone.Name);
                        } else {
                            if (firstRun === true) {
                                ProBtnControl.statistics.sendScrollAreaShowedStats(scrollZone.Name);
                            }
                        }
                        firstRun = false;

                        if (scrollZone !== null) {
                            //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
                            if (ProBtnControl.currentScrollZone != scrollZone) {
                                //console.log("scrollZone.ButtonImage", scrollZone.ButtonImage);
                                $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);

                                //send statistics about scroll zone change
                                ProBtnControl.statistics.sendScrollAreaShowedStats(scrollZone.Name);
                            }

                            //if we have additional params for button, different from main button params
                            if (scrollZone.CustomButtonParams) {
                                $(ProBtnControl.pizzabtn).css({
                                    'width': ProBtnControl.params.ButtonSize.W,
                                    'height': ProBtnControl.params.ButtonSize.H
                                });

                                //if ((scrollEvent !== undefined) && (scrollEvent !== null)) {
                                //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
                                if (ProBtnControl.currentScrollZone != scrollZone) {
                                    $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);
                                }

                                if ((scrollZone.ButtonIframeInitialSize.W > 0) && (scrollZone.ButtonIframeInitialSize.H > 0)) {
                                    $("#pizzabtnImg", ProBtnControl.pizzabtn).css({
                                        'width': scrollZone.ButtonIframeInitialSize.W,
                                        'height': scrollZone.ButtonIframeInitialSize.H,
                                        'opacity': ProBtnControl.params.ButtonOpacity
                                    });
                                } else {
                                    $("#pizzabtnImg", ProBtnControl.pizzabtn).css({
                                        'width': ProBtnControl.params.ButtonSize.W,
                                        'height': ProBtnControl.params.ButtonSize.H,
                                        'opacity': ProBtnControl.params.ButtonOpacity
                                    });
                                }

                                $(ProBtnControl.pizzabtn).css({
                                    'width': ProBtnControl.params.ButtonSize.W,
                                    'height': ProBtnControl.params.ButtonSize.H
                                });
                            } else {
                                //if main button params where saved, then restore it
                                if (ProBtnControl.buttonMainParams.isEmpty == false) {
                                    //if ((scrollEvent !== undefined) && (scrollEvent !== null)) {
                                    //if ((Object.is(ProBtnControl.currentScrollZone, scrollZone))) {
                                    if (ProBtnControl.currentScrollZone == scrollZone) {
                                        $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);
                                    }
                                    $("#pizzabtnImg", ProBtnControl.pizzabtn).css({
                                        'width': ProBtnControl.params.ButtonSize.W,
                                        'height': ProBtnControl.params.ButtonSize.H,
                                        'opacity': ProBtnControl.params.ButtonOpacity
                                    });

                                    //$(ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);
                                    $(ProBtnControl.pizzabtn).css({
                                        'width': ProBtnControl.params.ButtonSize.W,
                                        'height': ProBtnControl.params.ButtonSize.H
                                    });
                                }
                            }
                        }
                        ProBtnControl.currentScrollZone = scrollZone;
                    };

                    if (ProBtnControl.params.ButtonType == "button_and_scroll_zones") {
                        if ((runOnScroll !== null) && (runOnScroll !== undefined)) {
                            onScroll(null);
                            //ProBtnControl.statistics.sendScrollAreaShowedStats(ProBtnControl.currentScrollZone.Name);
                        } else {
                            $.each(ProBtnControl.params.ScrollZones, function (index, scrollZone) {
                                ProBtnControl.additionalButtonFunctions.preloadImage(scrollZone.ButtonImage);
                                ProBtnControl.additionalButtonFunctions.preloadImage(scrollZone.ButtonDragImage);
                            });
                            firstRun = true;
                            onScroll(null);

                            $(window).scroll(onScroll);
                        }
                    }
                },


                initStartScrollParams: function (position) {
                    if (ProBtnControl.params.ButtonType == "button_and_scroll_zones") {

                        var currentZone = null;
                        var doc = document.documentElement;
                        var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
                        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

                        var ua = navigator.userAgent.toLowerCase();
                        var isOpera = (ua.indexOf('opera') > -1);
                        var isIE = (!isOpera && ua.indexOf('msie') > -1);

                        var getViewportHeight = function () {
                            return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight : (document.parentWindow || document.defaultView).innerHeight;
                        }

                        var getDocumentHeight = function () {
                            //return Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollHeight : document.documentElement.scrollHeight, getViewportHeight());
                            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, getViewportHeight());
                        }

                        //if all at one screen mode
                        if (ProBtnControl.params.ChangeScrollButtonAtFullSiteHeight == false) {
                            var getDocumentHeight = function () { return window.innerHeight };
                            top = 0;
                        }

                        if ((position == null) || (position == undefined)) {
                            var currentButtonHeight = (window.innerHeight - (ProBtnControl.params.ButtonSize.H / 2)) * (ProBtnControl.params.ButtonPosition.Y);
                            var buttonleft = ($('body').innerWidth() - (ProBtnControl.params.ButtonSize.W / 2)) * (ProBtnControl.params.ButtonPosition.X) + $(window).scrollLeft() + 'px';
                        } else {
                            var currentButtonHeight = ProBtnControl.pizzabtn.position().top;
                        }

                        var currentFullTop = 0;
                        $.each(ProBtnControl.params.ScrollZones, function (index, scrollZone) {

                            if ((scrollZone.Name == undefined) || (scrollZone.Name == null)) {
                                scrollZone.Name = "scrollZone" + index;
                            }

                            var areaHeight = currentFullTop + getDocumentHeight() * scrollZone.ZoneHeight;
                            var buttonHeight = currentButtonHeight + top;

                            if ((buttonHeight <= areaHeight) && (buttonHeight > currentFullTop)) {
                                currentZone = scrollZone;
                                if ((ProBtnControl.currentScrollZone == null) || (ProBtnControl.currentScrollZone == undefined)) {
                                    ProBtnControl.currentScrollZone = currentZone;
                                }

                                try {
                                    ProBtnControl.params.currentContentURL = scrollZone.CustomContentURL;
                                } catch (ex) { }
                                ProBtnControl.params.ButtonImage = scrollZone.ButtonImage;

                                if (scrollZone.ButtonImageType == "iframe") {
                                    $("#probtn_hintText").remove();
                                    $("#pizzabtnImg").css('border', '0px solid transparent');

                                    //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
                                    if (ProBtnControl.currentScrollZone != scrollZone) {
                                        var widgetHTML = $('#probtn_button').html();

                                        if ((widgetHTML !== undefined) && (widgetHTML !== null)) {
                                            widgetHTML = widgetHTML.replace('img', 'iframe');
                                            $('#probtn_button').html(widgetHTML);
                                        }
                                    }
                                    ProBtnControl.params.ButtonImageType = scrollZone.ButtonImageType;
                                } else {
                                    $("#pizzabtnIframeOverlay").remove();
                                    var widgetHTML = $('#probtn_button').html();

                                    //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
                                    if (ProBtnControl.currentScrollZone != scrollZone) {
                                        if (ProBtnControl.currentScrollZone.ButtonImageType === "iframe") {
                                            if ((widgetHTML !== undefined) && (widgetHTML !== null)) {
                                                widgetHTML = widgetHTML.replace('iframe', 'img');
                                                $('#probtn_button').html(widgetHTML);
                                            }
                                        }
                                    }

                                    ProBtnControl.params.ButtonImageType = "image";
                                }


                                //set default values for ButtonIframeInitialSize
                                if ((scrollZone.ButtonIframeInitialSize == null) || (scrollZone.ButtonIframeInitialSize == undefined)) {
                                    scrollZone.ButtonIframeInitialSize = { W: 0, H: 0 };
                                }
                                if ((scrollZone.ButtonSize == null) || (scrollZone.ButtonSize == undefined)) {
                                    scrollZone.ButtonSize = ProBtnControl.params.ButtonSize;
                                }
                                if (scrollZone.ButtonImageType == "iframe") {
                                    //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
                                    if (ProBtnControl.currentScrollZone != scrollZone) {
                                        ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), scrollZone.ButtonIframeInitialSize, scrollZone.ButtonSize);
                                    }

                                    //if (($("#pizzabtnIframeOverlay").length <= 0) && (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true)) {
                                    if (($("#pizzabtnIframeOverlay").length <= 0) && (ProBtnControl.currentScrollZone != scrollZone)) {

                                        scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonSize);
                                        pizzabtnCss = {
                                            'width': scrollZone.ButtonSize.W,
                                            'height': scrollZone.ButtonSize.H,
                                            'opacity': 1
                                        };

                                        pizzabtnCss.position = 'absolute';
                                        pizzabtnCss.top = '0px';

                                        var pizzabtnImg2 = $("<div/>", {
                                            id: "pizzabtnIframeOverlay",
                                            css: pizzabtnCss
                                        }).appendTo(ProBtnControl.pizzabtn);
                                    }

                                    //scrollZone.ButtonSize = scrollZone.ButtonIframeInitialSize;
                                    scrollZone.CustomButtonParams = true;
                                    //}
                                } else {
                                    ProBtnControl.additionalButtonFunctions.setTransform($("#pizzabtnImg"), 1, 1);
                                }

                                //if we have image for draging state of button
                                if (scrollZone.ButtonDragImage !== "") {
                                    ProBtnControl.params.ButtonDragImage = scrollZone.ButtonDragImage;
                                } else {
                                    ProBtnControl.params.ButtonDragImage = scrollZone.ButtonImage;
                                }
                                if (scrollZone.ButtonImageType == "iframe") {
                                    ProBtnControl.params.ButtonDragImage = "";
                                }

                                //if (Object.is(ProBtnControl.currentScrollZone, scrollZone)) {
                                if (false) {
                                } else {
                                    if (scrollZone.CustomButtonParams) {
                                        //save main button params
                                        if (ProBtnControl.buttonMainParams.isEmpty) {
                                            ProBtnControl.buttonMainParams.ButtonSize = ProBtnControl.params.ButtonSize;
                                            ProBtnControl.buttonMainParams.ButtonDragSize = ProBtnControl.params.ButtonDragSize;
                                            ProBtnControl.buttonMainParams.ButtonOpacity = ProBtnControl.params.ButtonOpacity;
                                            ProBtnControl.buttonMainParams.ButtonDragOpacity = ProBtnControl.params.ButtonDragOpacity;
                                            ProBtnControl.buttonMainParams.isEmpty = false;
                                        }

                                        if (scrollZone.ButtonImageType !== 'iframe') {
                                            scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonSize);
                                            scrollZone.ButtonDragSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonDragSize);
                                        }

                                        //now apply custom button zone params
                                        ProBtnControl.params.ButtonSize = scrollZone.ButtonSize;
                                        ProBtnControl.params.ButtonDragSize = scrollZone.ButtonDragSize;
                                        ProBtnControl.params.ButtonOpacity = scrollZone.ButtonOpacity;
                                        ProBtnControl.params.ButtonDragOpacity = scrollZone.ButtonDragOpacity;
                                    } else {
                                        if (ProBtnControl.buttonMainParams.isEmpty == false) {
                                            ProBtnControl.params.ButtonSize = ProBtnControl.buttonMainParams.ButtonSize;
                                            ProBtnControl.params.ButtonDragSize = ProBtnControl.buttonMainParams.ButtonDragSize;
                                            ProBtnControl.params.ButtonOpacity = ProBtnControl.buttonMainParams.ButtonOpacity;
                                            ProBtnControl.params.ButtonDragOpacity = ProBtnControl.buttonMainParams.ButtonDragOpacity;
                                        }
                                    }
                                }
                            }
                            currentFullTop = currentFullTop + getDocumentHeight() * scrollZone.ZoneHeight;

                            //console.log("scrollzone");

                            //check positions for new sizes
                            ProBtnControl.additionalButtonFunctions.checkAndCorrentButtonPosition();
                        });
                        //ProBtnControl.currentScrollZone = currentZone;
                        return currentZone;
                    } else {
                        return null;
                    }
                },

                // pizza button constructor
                initPizzaButton: function () {
                    var pizzabtn_wrapper = $("<div/>", {
                        id: "probtn_wrapper"
                    }).prependTo('body');


                    if (ProBtnControl.params.ButtonContentType === 'youtube') {

                        var title = "";
                        title = ProBtnControl.additionalButtonFunctions.getTitleTextForModalWindow();

                        $('body').append('<div class="fancybox-overlay fancybox-overlay-fixed" id="youtube_fullscreen" style="width: auto; height: auto; display: none;""></div>');
                        $('body').append('<div id="fullscreen_probtn" style="display: none;">' +
                            '<div class="fancybox-wrap fancybox-mobile fancybox-type-iframe fancybox-opened" tabindex="-1" ' +
                            'style="margin: 0 auto; height: auto; position: fixed; opacity: 1; overflow: visible;">' +
                            '<div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">' +
                            '<div class="fancybox-outer">' +
                            '<div class="fancybox-inner" style="overflow: scroll; ">' +
                            '<iframe id="video_probtn" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="' + ProBtnControl.additionalButtonFunctions.getContentUrlWithUtm(ProBtnControl.params.ContentURL) + '"' +
                            ' sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>' +
                            '</div></div>' +
                            '<div style="background: white;" class="fancybox-title fancybox-title-inside-wrap">'+ title +'</div>' +
                            '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a></div></div>' +
                            '</div');

                        //close youtube player
                        $('body').on('click', "#fullscreen_probtn .fancybox-close, .fancybox-overlay", function () {
                            $('#fullscreen_probtn').hide();
                            $('.fancybox-overlay').hide();

                            ProBtnControl.contentTime.endTimer();
                            ProBtnControl.HpmdFunctions.closeHpmdTrack();

                            ProBtnControl.additionalButtonFunctions.MinimizeWrapper(function () {
                            }, ProBtnControl.params.MinimizeWrapperTime);

                            $.pep.toggleAll(true);
                            probtn_callPlayer("video_probtn", "pauseVideo");
                            probtn_callPlayer("video_probtn", "stopVideo");
                        });
                    }

                    if (ProBtnControl.params.ButtonContentType === 'video') {
                        var videoOnCLick = "";

                        //TEMPORARY
                        //rewrite VideoClickURL param by VideoPoster param
                        if ((ProBtnControl.params.VideoClickURL == "") || (ProBtnControl.params.VideoClickURL == null) || (ProBtnControl.params.VideoClickURL == undefined)) {
                            ProBtnControl.params.VideoClickURL = ProBtnControl.params.VideoPoster;
                        }

                        var content = '';

                            // replace with video item
                            content = '<div id="video_item" class="probtn_video_wrapper2" style="display: none; width: auto; height: auto; margin: 0 auto; vertical-align: middle; background: black;"> \
        <table class="probtn_video_wrapper2" style="width: auto; height: auto; margin: 0 auto;"><tr><td style="vertical-align: middle; text-align: center;"><video webkit-playsinline onclick="' + videoOnCLick + '" poster="' + ProBtnControl.params.VideoPoster + '" id="video_probtn" class="probtn_video"  controls="controls" width="100%"height="100%" style="background: black; margin: 0 auto; vertical-align: middle; width: 100%; height: 100%; display: inline-block;"> \
          <source src="' + ProBtnControl.params.ContentURL + '" type="video/mp4"> \
            Your browser does not support the video tag. \
        </video></td></tr></table> \
    </div>';

                        $('body').append(content);

                        if ((ProBtnControl.params.VideoClickURL !== "") && (ProBtnControl.params.VideoClickURL !== null) && (ProBtnControl.params.VideoClickURL !== undefined)) {

                            $("body").on('click', "#video_probtn", function (e) {
                                //send stats and open link
                                ProBtnControl.statistics.SendStatisticsData("VideoClicked", 1);
                                window.open(ProBtnControl.params.VideoClickURL);
                            });
                        }


                        var newFancyboxWidth = window.innerWidth - 30;
                        var newFancyboxHeight = window.innerHeight - 60;
                        if (ProBtnControl.params.IsManualSize === true) {
                            if (ProBtnControl.params.ContentSize.X.indexOf('%') !== -1) {
                                newFancyboxWidth = window.innerWidth * (parseFloat(ProBtnControl.params.ContentSize.X) / 100);
                            } else {
                                newFancyboxWidth = ProBtnControl.params.ContentSize.X;
                            }

                            if (ProBtnControl.params.ContentSize.Y.indexOf('%') !== -1) {
                                newFancyboxHeight = window.innerHeight * (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
                            } else {
                                newFancyboxHeight = ProBtnControl.params.ContentSize.Y;
                            }
                        } else {
                        }

                        var videoHeight = 0;
                        var videoWidth = 0;
                        if (newFancyboxWidth > newFancyboxHeight) {
                            videoHeight = newFancyboxHeight;
                            videoWidth = (videoHeight / ProBtnControl.params.VideoSize.Y) * ProBtnControl.params.VideoSize.X;
                        } else {
                            videoWidth = newFancyboxWidth;
                            videoHeight = (videoWidth / ProBtnControl.params.VideoSize.X) * ProBtnControl.params.VideoSize.Y;

                        }

                        $(".probtn_video_wrapper").width(newFancyboxWidth);
                        $(".probtn_video_wrapper").height(newFancyboxHeight);
                        $(".probtn_video").width(videoWidth);
                        $(".probtn_video").height(videoHeight);
                    }

                    var opts = {
                        width: "auto",
                        height: "auto",
                        position: "fixed"
                    };

                    //add tracking link image
                    if ((ProBtnControl.params.TrackingLink !== null) && (ProBtnControl.params.TrackingLink !== null) && (ProBtnControl.params.TrackingLink !== "")) {
                        var probtn_TrackingLink_random = ProBtnControl.params.TrackingLink;
                        var probtn_TrackingLink_random = ProBtnControl.additionalButtonFunctions.replaceRandom(ProBtnControl.params.TrackingLink);
                        if (probtn_TrackingLink_random == ProBtnControl.params.TrackingLink) {
                            probtn_TrackingLink_random = ProBtnControl.additionalButtonFunctions.replaceUrlParam(probtn_TrackingLink_random, 'probtn_random', ProBtnControl.additionalButtonFunctions.randomString(12));
                        }

                        var probtn_TrackingLink = $("<img/>", {
                            id: "probtn_TrackingLink",
                            src: probtn_TrackingLink_random,
                            style: 'width: 1px; height: 1px; position: absolute; left: -10000px; top: -10000px;'
                        }).prependTo('body');
                    }
                    pizzabtn_wrapper.css(opts);

                    //var btn = undefined;
                    var btn = $("#probtn_button");

                    if (btn.length === 0) {
                        btn = $("<div/>", {
                            id: "probtn_button"
                        }).prependTo(pizzabtn_wrapper);
                    };

                    btn.addClass("pizzabtn_normal");
                    btn.addClass("probtn_normal");

                    if (ProBtnControl.userData.mobile) {
                        btn.attr("onclick", ProBtnControl.params.ButtonOnClick);

                        btn.attr("ontouchend", ProBtnControl.params.ButtonOnTouchEnd);
                        btn.attr("ontouchstart", ProBtnControl.params.ButtonOnTouchStart);
                    }
                    //btn.attr("onclick", ProBtnControl.params.ButtonOnClick);
                    //btn.attr("ontouchend", ProBtnControl.params.ButtonOnTouchEnd);

                    var pizzabtnCss = {};


                    if (ProBtnControl.params.ControlInIframeFromParent == true) {
                        btn.css({
                            'display': 'none',
                            'width': ProBtnControl.params.ButtonSize.W,
                            'height': ProBtnControl.params.ButtonSize.H
                        });

                        pizzabtnCss = {
                            'width': ProBtnControl.params.ButtonSize.W,
                            'height': ProBtnControl.params.ButtonSize.H,
                            'opacity': ProBtnControl.params.ButtonOpacity
                        };
                    } else {
                        btn.css({
                            'display': 'none',

                            '-webkit-transform': 'translateZ(0)',
                            '-moz-transform': 'translateZ(0)',
                            '-ms-transform': 'translateZ(0)',
                            '-o-transform': 'translateZ(0)',
                            'transform': 'translateZ(0)',

                            '-webkit-backface-visibility': 'hidden',
                            '-moz-backface-visibility': 'hidden',
                            '-ms-backface-visibility': 'hidden',
                            'backface-visibility': 'hidden',

                            '-webkit-perspective': 1000,
                            '-moz-perspective': 1000,
                            '-ms-perspective': 1000,
                            'perspective': 1000,

                            '-webkit-transition': 'top, left ' + ProBtnControl.params.buttonAnimationTimeAfterFancybox + 'ms linear',
                            '-moz-transition': 'top, left ' + ProBtnControl.params.buttonAnimationTimeAfterFancybox + 'ms linear',
                            '-ms-transition': 'top, left ' + ProBtnControl.params.buttonAnimationTimeAfterFancybox + 'ms linear',
                            '-o-transition': 'top, left ' + ProBtnControl.params.buttonAnimationTimeAfterFancybox + 'ms linear',
                            'transition': 'top, left ' + ProBtnControl.params.buttonAnimationTimeAfterFancybox + 'ms linear',
                            'width': ProBtnControl.params.ButtonSize.W,
                            'height': ProBtnControl.params.ButtonSize.H
                        });

                        pizzabtnCss = {
                            'width': ProBtnControl.params.ButtonSize.W,
                            'height': ProBtnControl.params.ButtonSize.H,
                            'opacity': ProBtnControl.params.ButtonOpacity,

                            'transition-property': 'opacity, width, height',
                            'timing-function': 'linear',

                            '-webkit-transition-property': 'opacity, width, height',
                            '-webkit-timing-function': 'linear',

                            '-moz-transition-property': 'opacity, width, height',
                            '-moz-timing-function': 'linear',

                            '-o-transition-property': 'opacity, width, height',
                            '-o-timing-function': 'linear'
                        };
                    }

                    if (ProBtnControl.params.ButtonImageType == 'iframe') {
                        //init iframe button
                        pizzabtnCss.border = '0px';
                        pizzabtnCss.overflow = 'hidden';
                        var pizzabtnImg = $("<iframe/>", {
                            id: "pizzabtnImg",
                            scrolling: 'no',
                            'seamless': "seamless",
                            src: ProBtnControl.params.ButtonImage,
                            css: pizzabtnCss
                        }).appendTo(btn);

                        ProBtnControl.additionalButtonFunctions.applyIframeScale(pizzabtnImg, ProBtnControl.params.ButtonIframeInitialSize, ProBtnControl.params.ButtonSize);


                        pizzabtnCss.position = 'absolute';
                        pizzabtnCss.top = '0px';

                        var pizzabtnImg2 = $("<div/>", {
                            id: "pizzabtnIframeOverlay",
                            css: pizzabtnCss
                        }).appendTo(btn);

                        //hide button until iframe loaded
                        if (ProBtnControl.params.waitForIframeButtonLoaded) {
                            if (ProBtnControl.params.Debug) console.log("waitForIframeButtonLoaded hide1");
                            var myIframe = document.getElementById('pizzabtnImg');
                            btn.hide();
                            myIframe.onload = function () {
                                if (ProBtnControl.params.Debug) console.log("waitForIframeButtonLoaded show1");
                                btn.show();
                            };
                        } else {

                        }

                    } else {
                        // add image
                        var pizzabtnImg = $("<img/>", {
                            id: "pizzabtnImg",
                            src: ProBtnControl.params.ButtonImage,
                            css: pizzabtnCss
                        }).appendTo(btn);
                        $("#pizzabtnImg").attr("src", ProBtnControl.params.ButtonImage);
                    }


                    ProBtnControl.additionalButtonFunctions.preloadImage(ProBtnControl.params.ButtonDragImage);

                    // add hint text
                    ProBtnControl.hintText = $("<span/>", {
                        id: "probtn_hintText",
                        css: {
                            opacity: 0,

                            'transition-property': 'opacity',
                            'timing-function': 'linear',

                            '-webkit-transition-property': 'opacity',
                            '-webkit-timing-function': 'linear',

                            '-moz-transition-property': 'opacity',
                            '-moz-timing-function': 'linear',

                            '-o-transition-property': 'opacity',
                            '-o-timing-function': 'linear',

                            'transition-duration': ProBtnControl.params.HintShowDuration + 's',
                            '-webkit-transition-duration': ProBtnControl.params.HintShowDuration + 's',
                            '-moz-transition-duration': ProBtnControl.params.HintShowDuration + 's',
                            '-o-transition-duration': ProBtnControl.params.HintShowDuration + 's'
                        },
                        html: ProBtnControl.params.HintText.replace(/ /g, "&nbsp;")
                    }).appendTo(btn);
                    btn.hintTextActive = false;

                    ProBtnControl.additionalButtonFunctions.MinimizeWrapper(function () { }, ProBtnControl.params.MinimizeWrapperTime);

                    ProBtnControl.hintText.makeInvisible = function () {
                        this.css({
                            'transition-duration': ProBtnControl.params.HintHideDuration + 's',
                            '-webkit-transition-duration': ProBtnControl.params.HintHideDuration + 's',
                            '-moz-transition-duration': ProBtnControl.params.HintHideDuration + 's',
                            '-o-transition-duration': ProBtnControl.params.HintHideDuration + 's'
                        });
                        this.css('opacity', 0);
                    }

                    btn.center = function () {
                        var body = $('#probtn_wrapper');
                        this.css('top', (window.innerHeight - this.height()) / 2 + $(window).scrollTop() + 'px');
                        this.css('left', (window.innerWidth - this.width()) / 2 + $(window).scrollLeft() + 'px');
                    }

                    btn.show = function () {
                        var me = this;
                        setTimeout(function () {
                            me.stop(true, true).fadeIn(ProBtnControl.params.ButtonShowDuration * 1000);
                        }, ProBtnControl.params.ButtonShowDelay * 1000);
                    }

                    btn.hide = function () {
                        var me = jQuery("#probtn_button");
                        setTimeout(function () {
                            me.stop(true, true).fadeOut(ProBtnControl.params.ButtonHideDuration * 1000);
                        }, ProBtnControl.params.ButtonHideDelay * 1000);
                    }

                    //aditional actions
                    window.proBtn = {};
                    window.proBtn.hide = btn.hide;
                    window.proBtn.hideContent = function () {
                        $.fancybox.close();
                    };
                    window.proBtn.performAction = function () {
                        if (ProBtnControl.params.CampaignID !== null) {
                            $.getJSON(ProBtnControl.serverUrl + "/1/functions/performAction?DeviceType=web&DeviceUID=" + ProBtnControl.GetDeviceUID() + "&DeviceCUID=" + ProBtnControl.DeviceCID + "&X-ProBtn-Token=" + XProBtnToken + "&CampaignID=" + ProBtnControl.params.CampaignID + "&random=" + Math.random() + "&callback=?",
                                function (data) {

                                }
                            );
                        }
                    };

                    btn.dragAnimate = function () {
                        if ((ProBtnControl.params.ButtonDragImage !== "") && (ProBtnControl.params.ButtonDragImage !== undefined) && (ProBtnControl.params.ButtonDragImage !== null) && (ProBtnControl.params.ButtonImageType !== "iframe")) {
                            if (ProBtnControl.params.Debug) console.log("drag image apply");
                            pizzabtnImg.attr("src", ProBtnControl.params.ButtonDragImage);
                        }
                        setTimeout(function () {
                            if (ProBtnControl.params.ControlInIframeFromParent !== true) {
                                pizzabtnImg.css({
                                    'transition-duration': ProBtnControl.params.ButtonDragDuration + 's',
                                    '-webkit-transition-duration': ProBtnControl.params.ButtonDragDuration + 's',
                                    '-moz-transition-duration': ProBtnControl.params.ButtonDragDuration + 's',
                                    '-o-transition-duration': ProBtnControl.params.ButtonDragDuration + 's'
                                });
                            }

                            if (ProBtnControl.params.ButtonImageType !== 'iframe') {
                                pizzabtnImg.css({
                                    opacity: ProBtnControl.params.ButtonDragOpacity,
                                    width: ProBtnControl.params.ButtonDragSize.W,
                                    height: ProBtnControl.params.ButtonDragSize.H
                                });
                            }

                        }, ProBtnControl.params.ButtonDragDelay * 1000);
                    }

                    btn.undragAnimate = function () {
                        if ((ProBtnControl.params.ButtonImageType !== "iframe")) {
                            //if (ProBtnControl.params.Debug) console.log("undrag image apply");
                            pizzabtnImg.attr("src", ProBtnControl.params.ButtonImage);
                        }
                        setTimeout(function () {
                            if (ProBtnControl.params.ControlInIframeFromParent !== true) {
                                pizzabtnImg.css({
                                    'transition-duration': ProBtnControl.params.ButtonUndragDuration + 's',
                                    '-webkit-transition-duration': ProBtnControl.params.ButtonUndragDuration + 's',
                                    '-moz-transition-duration': ProBtnControl.params.ButtonUndragDuration + 's',
                                    '-o-transition-duration': ProBtnControl.params.ButtonUndragDuration + 's'
                                });
                            }

                            if (ProBtnControl.params.ButtonImageType !== 'iframe') {
                                pizzabtnImg.css({
                                    opacity: ProBtnControl.params.ButtonOpacity,
                                    width: ProBtnControl.params.ButtonSize.W,
                                    height: ProBtnControl.params.ButtonSize.H
                                });
                            }

                        }, ProBtnControl.params.ButtonUndragDelay * 1000);
                    }

                    btn.showHint = function () {
                        var me = this;
                        setTimeout(function () {
                            ProBtnControl.hintText.css(ProBtnControl.initFunctions.hintTextStyle);
                            me.hintTextActive = true;

                            /*var textOffset = (($('#hintText').width() - params.ButtonSize.W) / 2);
                            $("#hintText").css("margin-left", "-" + textOffset + "px");*/
                            var textOffset = ((ProBtnControl.hintText.width() - ProBtnControl.params.ButtonSize.W) / 2);
                            ProBtnControl.hintText.css("margin-left", "-" + textOffset + "px");

                        }, ProBtnControl.params.HintLaunchDelay * 1000);
                    }

                    btn.hideHint = function () {
                        var me = this;
                        ProBtnControl.hintText.makeInvisible();
                        setTimeout(function () {
                            me.animateDuringHintHide();
                        }, 100)
                        me.hintTextActive = false;
                    }

                    btn.hideHintDelay = function () {
                        setTimeout(function () {
                            ProBtnControl.hintText.makeInvisible();
                        }, ProBtnControl.params.HintLaunchDuration * 1000);
                    }

                    btn.animateDuringHintHide = function () {
                        var me = this;
                        var hintWidth = ProBtnControl.hintText.outerWidth();
                        var diffWidth = (hintWidth - ProBtnControl.params.ButtonSize.W) / 2;
                        if (diffWidth > 0) {
                            me.css({
                                width: ProBtnControl.params.ButtonSize.W,
                                height: ProBtnControl.params.ButtonSize.H,
                                left: me.position().left + diffWidth
                            });
                        }
                    }

                    try {
                        var top = (window.innerHeight - (ProBtnControl.params.ButtonSize.H / 2)) * (ProBtnControl.params.ButtonPosition.Y);

                        if (top < 0) {
                            top = 0;
                        }
                        if ((top + ProBtnControl.params.ButtonSize.H) > window.innerHeight) {
                            top = window.innerHeight - ProBtnControl.params.ButtonSize.H;
                        }
                        var left = (window.innerWidth - (ProBtnControl.params.ButtonSize.W / 2)) * (ProBtnControl.params.ButtonPosition.X) + $(window).scrollLeft();
                        if (left < 0) {
                            left = 0;
                        }
                        if ((left + ProBtnControl.params.ButtonSize.W) >= window.innerWidth) {
                            left = window.innerWidth - ProBtnControl.params.ButtonSize.W;
                        }

                        btn.css({
                            left: left,
                            top: top,
                            position: 'absolute'
                        });
                    } catch (ex) { }

                    ProBtnControl.additionalButtonFunctions.changeBodySize();

                    ProBtnControl.interactionFunctions.initInteractionTimer();

                    return btn;
                },


                // close button constructor
                initCloseButton: function () {
                    var btn = $('<img/>', {
                        id: 'probtn_closeButton',
                        'src': ProBtnControl.params.CloseImage,
                        'class': 'close_pro_button_normal probtn_active_zone',
                        css: {
                            position: 'fixed',
                            display: 'none'
                        }
                    }).prependTo('body');

                    //always show close button
                    /*if (ProBtnControl.params.AlwaysShowCloseButton == true) {
                        $('head').append('<style type="text/css">#probtn_closeButton { display: block !important; }</style>');
                    }*/

                    //hide button on close area click
                    if (ProBtnControl.params.ClickOnCloseButton == true) {
                        $(document).on('click', '#probtn_closeButton', function () {
                            ProBtnControl.statistics.SendStatObject({
                                "Closed": 1,
                                "Hidded": 1
                            });

                            ProBtnControl.pizzabtn.hide();
                            ProBtnControl.closeButton.remove();
                            ProBtnControl.additionalButtonFunctions.hideAllActiveZones();
                        });
                    }


                    btn.active = false;
                    btn.rect = {};

                    btn.css({
                        '-webkit-transform': 'translateZ(0)',
                        '-moz-transform': 'translateZ(0)',
                        '-ms-transform': 'translateZ(0)',
                        '-o-transform': 'translateZ(0)',
                        'transform': 'translateZ(0)',

                        '-webkit-backface-visibility': 'hidden',
                        '-moz-backface-visibility': 'hidden',
                        '-ms-backface-visibility': 'hidden',
                        'backface-visibility': 'hidden',

                        '-webkit-perspective': 1000,
                        '-moz-perspective': 1000,
                        '-ms-perspective': 1000,
                        'perspective': 1000,

                        'transition-property': 'opacity, width, height, left, top',
                        'timing-function': 'linear',

                        '-webkit-transition-property': 'opacity, width, height, left, top',
                        '-webkit-timing-function': 'linear',

                        '-moz-transition-property': 'opacity, width, height, left, top',
                        '-moz-timing-function': 'linear',

                        '-o-transition-property': 'opacity, width, height, left, top',
                        '-o-timing-function': 'linear'
                    });

                    btn.center = function () {
                        var body = $('body');
                        var closex = ProBtnControl.params.ClosePosition.X;
                        var closey = ProBtnControl.params.ClosePosition.Y;

                        if (ProBtnControl.params.ControlInIframeFromParent == true) {
                        } else {
                        }

                        ProBtnControl.params.CloseSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.CloseSize);

                        var closeHeight = this.height();
                        if (this.height() == 0) {
                            closeHeight = ProBtnControl.params.CloseSize.H;
                        }

                        var closeWidth = this.width();
                        if (this.width() == 0) {
                            closeWidth = ProBtnControl.params.CloseSize.W;
                        }

                        this.css('top', (ProBtnControl.additionalButtonFunctions.getWindowHeight() - closeHeight) * closey + 'px');
                        this.css('left', (ProBtnControl.additionalButtonFunctions.getWindowWidth() - closeWidth) * closex + $(window).scrollLeft() + 'px');

                        /*this.css('top', (window.innerHeight - this.height()) * closey + 'px');
                        this.css('left', (body.innerWidth() - this.width()) * closex + $(window).scrollLeft() + 'px');*/
                    }

                    btn.show = function () {
                        var me = this;
                        me.center();
                        setTimeout(function () {
                            me.stop(true, true).fadeIn(ProBtnControl.params.CloseShowDuration * 1000);
                        }, ProBtnControl.params.CloseShowDelay * 1000);
                    }

                    btn.hide = function () {
                        var me = this;
                        setTimeout(function () {
                            me.stop(true, true).fadeOut(ProBtnControl.params.CloseHideDuration * 1000);
                        }, ProBtnControl.params.CloseHideDelay * 1000);
                    }

                    btn.setTransitionDuration = function (duration) {
                        var val = duration + 's';
                        this.css({
                            'transition-duration': val,
                            '-webkit-transition-duration': val,
                            '-moz-transition-duration': val,
                            '-o-transition-duration': val
                        });
                    }

                    // Animation when close button become active - change size and opacity
                    btn.overlayActive = function () {
                        var me = this;
                        var position = me.position();
                        me.setTransitionDuration(ProBtnControl.params.CloseActiveDuration);

                        ProBtnControl.params.CloseActiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.CloseActiveSize);

                        setTimeout(function () {
                            me.css({
                                opacity: ProBtnControl.params.CloseActiveOpacity,
                                width: ProBtnControl.params.CloseActiveSize.W,
                                height: ProBtnControl.params.CloseActiveSize.H

                            });
                        }, ProBtnControl.params.CloseActiveDelay * 1000);
                    }

                    // Animation when button become inactive - restore close button size and opacity
                    btn.overlayUnactive = function () {
                        var me = this;
                        var body = $('body');
                        var closex = ProBtnControl.params.ClosePosition.X;
                        var closey = ProBtnControl.params.ClosePosition.Y;

                        var top = (ProBtnControl.additionalButtonFunctions.getWindowHeight() - this.height()) * closey + 'px';
                        var left = (ProBtnControl.additionalButtonFunctions.getWindowHeight() - ProBtnControl.closeButton.width()) * closex + $(window).scrollLeft();
                        /*var top = (window.innerHeight - this.height()) * closey + 'px';
                        var left = (body.innerWidth() - ProBtnControl.closeButton.width()) * closex + $(window).scrollLeft();*/

                        me.setTransitionDuration(ProBtnControl.params.CloseUnactiveDuration);
                        setTimeout(function () {
                            ProBtnControl.params.CloseSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.CloseSize);
                            var options = {
                                opacity: ProBtnControl.params.CloseOpacity,
                                width: ProBtnControl.params.CloseSize.W,
                                height: ProBtnControl.params.CloseSize.H
                                //left: left,
                                //top: top
                            };
                            me.css(options);
                        }, ProBtnControl.params.CloseUnactiveDelay * 1000);
                    };

                    btn.setTransitionDuration(ProBtnControl.params.CloseActiveDuration);

                    btn.center();

                    return btn;
                }

            },
            interactionFunctions: {
                time: 0,
                initInteractionTimer: function () {
                    if (ProBtnControl.interactionFunctions.intervalId !== undefined) {
                    } else {
                        clearInterval(ProBtnControl.interactionFunctions.intervalId);
                    }
                    ProBtnControl.interactionFunctions.time = 0;

                    if (ProBtnControl.params.HideWithoutInteractionTime > 0) {

                        ProBtnControl.contentTime.intervalId = setTimeout(function () {
                            if ((ProBtnControl.interactionFunctions.wasInteraction == false) || (ProBtnControl.interactionFunctions.wasInteraction == undefined)) {

                                ProBtnControl.statistics.SendStatObject({
                                    //"Closed": 1,
                                    "Hidded": 1
                                });

                                try {
                                    ProBtnControl.pizzabtn.hide();
                                    ProBtnControl.closeButton.remove();
                                    ProBtnControl.additionalButtonFunctions.hideAllActiveZones();
                                } catch (ex) {
                                    if (ProBtnControl.params.Debug) console.log(ex);
                                }

                                if (ProBtnControl.params.ButtonType == "fullscreen") {
                                    try {
                                        $(".fancybox-overlay").remove();
                                        $("#fullscreen_probtn").remove();
                                    } catch (ex) { }
                                }
                            } else {
                            }
                        }, ProBtnControl.params.HideWithoutInteractionTime);
                    }
                },
                intervalId: undefined,
                wasInteraction: false
            },
            additionalButtonFunctions: {
                //format title for fancybox\modal window
                getTitleTextForModalWindow: function () {
                    var title = "";
                    if (ProBtnControl.params.Debug === true) {
                        var outVendorText = ProBtnControl.params.VendorText + " " + ProBtnControl.mainVersion;
                    } else {
                        var outVendorText = ProBtnControl.params.VendorText;
                    }

                    if ((outVendorText !== "") && (ProBtnControl.params.ButtonEnabled === true) && (ProBtnControl.params.ButtonVisible === true)) {
                        try {
                            title = "<style> .fancybox-title-inside-wrap {color: rgba(" + ProBtnControl.params.VendorColor.R + "," + ProBtnControl.params.VendorColor.G + "," + ProBtnControl.params.VendorColor.B + "," + ProBtnControl.params.VendorColor.A + "); text-align: center; } </style><a style='font-family: " + ProBtnControl.params.VendorTextFont.Family + "; font-size: " + ProBtnControl.params.VendorTextFont.Size + "px; color: rgba(" + ProBtnControl.params.VendorTextColor.R + "," + ProBtnControl.params.VendorTextColor.G + "," + ProBtnControl.params.VendorTextColor.B + "," + ProBtnControl.params.VendorTextColor.A + ")' href='" + ProBtnControl.params.VendorSite + "' target='_blank'>" + outVendorText + "</a>";
                        } catch (ex) { }
                    }

                    return title;
                },
                //calculate and apply custom fancybox for sizes
                youtubeModalWindowSizes: function () {
                    if ($("#youtube_fullscreen:visible").length > 0) {
                        var margins = ProBtnControl.additionalButtonFunctions.getFancyboxMargins();
                        var titleHeight = $(".fancybox-title").first().height();
                        var style = { //t r b l
                            width: (window.innerWidth - margins[1] - margins[3]),
                            height: (window.innerHeight - margins[0] - margins[2] - titleHeight)
                        }

                        $("#fullscreen_probtn .fancybox-wrap").css(style);
                        $("#fullscreen_probtn .fancybox-wrap").css({
                            'margin-left': margins[3],
                            'margin-right': margins[1],
                            'margin-top': margins[0],
                            'margin-bottom': margins[2]
                        });
                        $("#fullscreen_probtn .fancybox-skin").css(style);
                        $("#fullscreen_probtn .fancybox-outer").css(style);
                        $("#fullscreen_probtn .fancybox-inner").css(style);
                    }
                },
                hideAll: function() {
                    ProBtnControl.statistics.SendStatObject({
                        //"Closed": 1,
                        "Hidded": 1
                    });
                    ProBtnControl.pizzabtn.hide();
                    ProBtnControl.closeButton.remove();
                    ProBtnControl.additionalButtonFunctions.hideAllActiveZones();
                },
                checkAndCorrentButtonPosition: function () {
                    if ((ProBtnControl.pizzabtn !== undefined) && (ProBtnControl.pizzabtn !== null)) {
                        if (ProBtnControl.pizzabtn.position().left > (window.innerWidth - ProBtnControl.params.ButtonSize.W)) {
                            //console.log("left", window.innerWidth - ProBtnControl.params.ButtonSize.W);
                            ProBtnControl.pizzabtn.css("left", window.innerWidth - ProBtnControl.params.ButtonSize.W);
                        }
                        //console.log("ProBtnControl.pizzabtn.position().top", ProBtnControl.pizzabtn.position().top);
                        //console.log("ProBtnControl.pizzabtn.css('top')", ProBtnControl.pizzabtn.css('top').replace('px', ''));
                        if (ProBtnControl.pizzabtn.css('top').replace('px', '') > (window.innerHeight - ProBtnControl.params.ButtonSize.H)) {
                            //console.log("top", window.innerHeight - ProBtnControl.params.ButtonSize.H);
                            ProBtnControl.pizzabtn.css("top", window.innerHeight - ProBtnControl.params.ButtonSize.H);
                        }
                    }
                },
                //update values for all percent params
                updateAllPercentSizes: function () {
                    if (ProBtnControl.params.ButtonImageType !== 'iframe') {
                        //for main button
                        ProBtnControl.params.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
                        ProBtnControl.params.ButtonDragSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonDragSize);
                    }

                    ProBtnControl.params.CloseSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.CloseSize);
                    ProBtnControl.params.CloseActiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.CloseActiveSize);

                    $("#pizzabtnImg", ProBtnControl.pizzabtn).css({
                        'width': ProBtnControl.params.ButtonSize.W,
                        'height': ProBtnControl.params.ButtonSize.H,
                        'opacity': ProBtnControl.params.ButtonOpacity
                    });
                    $(ProBtnControl.pizzabtn).css({
                        'width': ProBtnControl.params.ButtonSize.W,
                        'height': ProBtnControl.params.ButtonSize.H
                    });

                    //for active zones
                    if (((ProBtnControl.params.ActiveZones !== null) || (ProBtnControl.params.ActiveZones.length > 0)) && (ProBtnControl.params.ButtonType == "button_and_active_zones")) {
                        //check every zone
                        $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {
                            if (activeZone.currentActiveZone.ButtonImageType !== 'iframe') {
                                //activeZoneBtn.currentActiveZone
                                activeZone.currentActiveZone.ActiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(activeZone.currentActiveZone.ActiveSize);
                                activeZone.currentActiveZone.InactiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(activeZone.currentActiveZone.InactiveSize);
                            }
                        });
                    }
                },
                //convert button percents to px
                convertPercentButtonSize: function (buttonSize) {
                    try {
                        var sButtonSize = buttonSize;
                        var newWidth = buttonSize.W;
                        var newHeight = buttonSize.H;

                        var newWidthInit = buttonSize.W;
                        var newHeightInit = buttonSize.H;

                        try {
                            //restore initial percent sizes if exists
                            if ((buttonSize.Initial !== undefined) && (buttonSize.initial !== null)) {
                                var newWidth = buttonSize.Initial.W;
                                var newHeight = buttonSize.Initial.H;

                                var newWidthInit = buttonSize.Initial.W;
                                var newHeightInit = buttonSize.Initial.H;

                                buttonSize.W = buttonSize.Initial.W;
                                buttonSize.H = buttonSize.Initial.H;

                                buttonSize.Initial = {};
                                buttonSize.Initial.W = newWidth;
                                buttonSize.Initial.H = newHeight;
                            } else {
                                buttonSize.Initial = {};
                                buttonSize.Initial.W = newWidth;
                                buttonSize.Initial.H = newHeight;
                            }
                        } catch (ex) {
                            //save initial sizes
                            buttonSize.Initial = {};
                            buttonSize.Initial.W = newWidth;
                            buttonSize.Initial.H = newHeight;

                            if (ProBtnControl.params.Debug) console.log(ex);
                        }

                        if ((newWidth.toString().indexOf('%') !== -1) || (parseFloat(newWidth) < 0)) {
                            if (parseFloat(newWidthInit) < 0) {
                                newWidth = Math.abs(parseFloat(newWidth));
                            }
                            newWidth = window.innerWidth * (parseFloat(newWidth) / 100);
                            //if other param set to proportions
                            if ((parseFloat(newHeightInit) > 0) && (buttonSize.W.toString().indexOf('%') == -1)) {
                                newHeight = newWidth * parseFloat(newHeightInit);
                            }
                        } else {
                        }
                        if ((newHeight.toString().indexOf('%') !== -1) || (parseFloat(newHeight) < 0)) {
                            if (parseFloat(newHeightInit) < 0) {
                                newHeight = Math.abs(parseFloat(newHeight));
                            }
                            newHeight = window.innerHeight * (parseFloat(newHeight) / 100);
                            //if other param set to proportions
                            if ((parseFloat(newWidthInit) > 0) && (buttonSize.H.toString().indexOf('%') == -1)) {
                                newWidth = parseFloat(newWidthInit) * newHeight;
                            }
                        } else {
                        }
                        buttonSize.W = newWidth;
                        buttonSize.H = newHeight;
                    } catch (ex) {
                    }
                    return buttonSize;
                },
                //check is ButtonIframeInitialSize exists and set properly
                checkExistInitIframeSIze: function (activeZone) {
                    return ((activeZone.currentActiveZone.ButtonImageType == "iframe") && (activeZone.currentActiveZone.ButtonIframeInitialSize.W > 0) && (activeZone.currentActiveZone.ButtonIframeInitialSize.H > 0) && (activeZone.currentActiveZone.ButtonIframeInitialSize.W !== undefined) && (activeZone.currentActiveZone.ButtonIframeInitialSize.W !== null) && (activeZone.currentActiveZone.ButtonIframeInitialSize.H !== undefined) && (activeZone.currentActiveZone.ButtonIframeInitialSize.H !== null));
                },
                //apply scale for iframe item (used for button image iframe)
                applyIframeScale: function (iframeItem, ButtonIframeInitialSize, ButtonSize) {
                    if ((ButtonIframeInitialSize.W > 0) && (ButtonIframeInitialSize.H > 0) && (ButtonIframeInitialSize.W !== undefined) && (ButtonIframeInitialSize.W !== null) && (ButtonIframeInitialSize.H !== undefined) && (ButtonIframeInitialSize.H !== null)) {

                        var scaleX = ButtonSize.W / ButtonIframeInitialSize.W;
                        var scaleY = ButtonSize.H / ButtonIframeInitialSize.H;

                        iframeItem.css("width", ButtonIframeInitialSize.W);
                        iframeItem.css("height", ButtonIframeInitialSize.H);

                        ProBtnControl.additionalButtonFunctions.setTransform(iframeItem, scaleX, scaleY);
                    }
                },
                //add transform css properties for iframe items (to scale it)
                setTransform: function (iframeItem, scaleX, scaleY) {
                    iframeItem.css({
                        "transform": "scale(" + scaleX + "," + scaleY + ")",
                        "-moz-transform": "scale(" + scaleX + "," + scaleY + ")",
                        "-webkit-transform": "scale(" + scaleX + "," + scaleY + ")",
                        "-o-transform": "scale(" + scaleX + "," + scaleY + ")",
                        "-ms-transform": "scale(" + scaleX + "," + scaleY + ")"
                    });

                    //top left
                    iframeItem.css("transform-origin", "top left");
                    iframeItem.css("-moz-transform-origin", "top left");
                    iframeItem.css("-webkit-transform-origin", "top left");
                    iframeItem.css("-o-transform-origin", "top left");
                    iframeItem.css("-ms-transform-origin", "top left");
                },
                replaceRandom: function (contentURL) {
                    return contentURL.replace(/\[RANDOM\]/g, ProBtnControl.additionalButtonFunctions.randomString(12));
                },
                hideAllActiveZones: function () {
                    try {
                        $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {
                            activeZone.hide();
                            /*if (activeZone.currentActiveZone.VisibleOnlyInteraction) {
                            activeZone.attr("src", activeZone.currentActiveZone.InactiveImage);
                            activeZone.css({
                                width: activeZone.currentActiveZone.InactiveSize.W,
                                height: activeZone.currentActiveZone.InactiveSize.H,
                                opacity: activeZone.currentActiveZone.InactiveOpacity
                            });
                            activeZone.hide();
                        }*/
                        });
                    } catch (ex) {

                    }
                },
                //add utm param to link
                getContentUrlWithUtm: function (currentContentURL) {
                    try {
                        //check for utm source settings
                        if (ProBtnControl.params.isAddUtmSource) {
                            var currentUtmSource = window.location.href;
                            //set only domain if such param set
                            if (ProBtnControl.params.UtmSourceUseOnlyDomain) {
                                currentUtmSource = ProBtnControl.realDomain;
                            }

                            if (ProBtnControl.params.UtmSource !== "") {
                                currentUtmSource = ProBtnControl.params.UtmSource;
                            }

                            currentContentURL = ProBtnControl.additionalButtonFunctions.replaceUrlParam(currentContentURL, 'utm_source', currentUtmSource);

                            if ((ProBtnControl.params.UtmCampaign !== "") && (ProBtnControl.params.UtmCampaign !== null) && ((ProBtnControl.params.UtmCampaign !== undefined))) {
                                currentContentURL = ProBtnControl.additionalButtonFunctions.replaceUrlParam(currentContentURL, 'utm_campaign', ProBtnControl.params.UtmCampaign);
                            }

                            if (ProBtnControl.params.Debug) console.log("newpath - " + currentContentURL);
                        }
                    } catch (ex) {
                        if (ProBtnControl.params.Debug) console.log(ex);
                    }
                    return currentContentURL;
                },
                testSpeed: function (callback) {
                    if (ProBtnControl.params.isTestSpeed) {

                        var imageAddr = "https://cdn.probtn.com/load2.png";
                        var downloadSize = 339234; //bytes

                        measureSpeedByImage = function () {
                            var startTime, endTime;
                            var download = new Image();
                            download.onload = function () {
                                endTime = (new Date()).getTime();
                                showResults();
                            }

                            download.onerror = function (err, msg) {
                                if (ProBtnControl.params.Debug) console.log(err);
                            }

                            startTime = (new Date()).getTime();
                            var cacheBuster = "?nnn=" + startTime;
                            download.src = imageAddr + cacheBuster;

                            function showResults() {
                                var duration = (endTime - startTime) / 1000;
                                var bitsLoaded = downloadSize * 8;
                                var speedBps = (bitsLoaded / duration).toFixed(2);
                                var speedKbps = (speedBps / 1024).toFixed(2);
                                var speedMbps = (speedKbps / 1024).toFixed(2);
                                var result = "Your connection speed is: \n\r" +
                                    speedBps + " bps\n\r" +
                                    speedKbps + " kbps\n\r" +
                                    speedMbps + " Mbps\n\r";
                                if (ProBtnControl.params.Debug) console.log(result);

                                if ((callback !== null) && (callback !== undefined)) {
                                    callback(speedKbps);
                                }
                            }
                        }

                        setTimeout(measureSpeedByImage, 1);
                    } else {
                        if ((callback !== null) && (callback !== undefined)) {
                            callback(0);
                        }
                    }
                },
                preloadImage: function (clickPath) {
                    var clickCounterLink_random = clickPath;

                    var probtn_TrackingLink = $("<img/>", {
                        id: "probtn_ClickCounterLink_" + ProBtnControl.additionalButtonFunctions.randomString(12),
                        src: clickCounterLink_random,
                        style: 'width: 1px; height: 1px; position: absolute; left: -10001px; top: -10001px;'
                    }).prependTo('body');
                    $(probtn_TrackingLink).attr("src", clickCounterLink_random);
                },
                sendMessageToParent: function (type) {
                    if ((type == null) || (type == undefined)) {
                        type = "probtn_end_move";
                    }

                    ProBtnControl.additionalButtonFunctions.sendCustomMessageToParent({
                        type: type,
                        params: ProBtnControl.params,
                        button: ProBtnControl.pizzabtn.position()
                    });
                },
                sendCustomMessageToParent: function (object) {
                    if (ProBtnControl.params.ControlInIframeFromParent == true) {
                        if (window.self !== window.top) {
                            window.top.postMessage(object, "*");
                        }
                    }
                },
                getWindowHeight: function () {
                    if (ProBtnControl.params.ControlInIframeFromParent == true) {
                        if ((ProBtnControl.params.ParentParams.height > 0) && (ProBtnControl.params.ParentParams.height !== undefined) && (ProBtnControl.params.ParentParams.height !== null)) {
                            return ProBtnControl.params.ParentParams.height;
                        } else {
                            return window.innerHeight; //window.innerHeight;
                        }

                    } else {
                        return window.innerHeight; //window.innerHeight;
                    }
                },
                getWindowWidth: function () {
                    if (ProBtnControl.params.ControlInIframeFromParent == true) {
                        if ((ProBtnControl.params.ParentParams.width > 0) && (ProBtnControl.params.ParentParams.width !== undefined) && (ProBtnControl.params.ParentParams.width !== null)) {
                            return ProBtnControl.params.ParentParams.width;
                        } else {
                            return window.innerWidth; //window.innerWidth;
                        }
                        return ProBtnControl.params.ParentParams.width;
                    } else {
                        return window.innerWidth; //window.innerWidth;
                    }
                },
                replaceUrlParam: function (url, paramName, paramValue) {
                    var pattern = new RegExp('(\\?|\\&)(' + paramName + '=).*?(&|$)')
                    var newUrl = url
                    if (url.search(pattern) >= 0) {
                        newUrl = url.replace(pattern, '$1$2' + paramValue + '$3');
                    }
                    else {
                        newUrl = newUrl + (newUrl.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue
                    }
                    return newUrl;
                },
                //when window is resized or changed orientation on device
                onOrientationChange: function (e) {
                    try {

                        //update sizes for all percent values
                        ProBtnControl.additionalButtonFunctions.updateAllPercentSizes();

                        //console.log("onOrientationChange", e);
                        ProBtnControl.additionalButtonFunctions.checkAndCorrentButtonPosition();

                        try {
                            ProBtnControl.closeButton.center();
                        } catch (ex) {
                            if (ProBtnControl.params.Debug) console.log(ex);
                        }

                        if (ProBtnControl.params.ButtonContentType == "youtube") {
                            ProBtnControl.additionalButtonFunctions.youtubeModalWindowSizes();
                        }

                        //check is menu opened and update it's positions
                        if (ProBtnControl.params.ButtonType == "menu") {
                            if ($("#probtn_menu").length > 0) {
                                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () { });

                                if (ProBtnControl.pizzabtn.position().left < (window.innerWidth - ProBtnControl.params.ButtonSize.W)) {
                                    ProBtnControl.pizzabtn.css("left", "0px");
                                }
                                if (ProBtnControl.pizzabtn.position().top < (window.innerHeight - ProBtnControl.params.ButtonSize.H)) {
                                    ProBtnControl.pizzabtn.css("top", window.innerHeight - ProBtnControl.params.ButtonSize.H);
                                }

                                $("#probtn_menu").css("top", (window.innerHeight - $("#probtn_menu").height() - ProBtnControl.params.ButtonSize.H));

                                $("#probtn_menu").css("left", 0);
                            }
                        }
                    } catch (ex) {
                    }

                    //check is fancybox is open at current moment
                    var isOpen = false;
                    try {
                        if ($.fancybox !== undefined) {
                            isOpen = $.fancybox.isOpen;
                        }
                    } catch (ex) { }

                    if (($.fancybox !== undefined) || (ProBtnControl.params.ButtonType == "fullscreen")) {
                        if ((isOpen) || (ProBtnControl.params.ButtonType == "fullscreen")) {
                            //resizefancybox

                            var contentSizeX = ProBtnControl.params.ContentSize.X;
                            var contentSizeY = ProBtnControl.params.ContentSize.Y;

                            //get fancybox margins
                            var margins = ProBtnControl.additionalButtonFunctions.getFancyboxMargins();

                            var newFancyboxWidth = window.innerWidth - margins[1] - margins[3];;
                            var newFancyboxHeight = window.innerHeight - margins[0] - margins[2];

                            //get fancybox sizes
                            if (ProBtnControl.params.IsManualSize === true) {
                                if (ProBtnControl.params.ContentSize.X.indexOf('%') !== -1) {
                                    newFancyboxWidth = window.innerWidth * (parseFloat(ProBtnControl.params.ContentSize.X) / 100);
                                    contentSizeX = (parseFloat(ProBtnControl.params.ContentSize.X) / 100);
                                } else {
                                    newFancyboxWidth = ProBtnControl.params.ContentSize.X;
                                }
                                if (ProBtnControl.params.ContentSize.Y.indexOf('%') !== -1) {
                                    newFancyboxHeight = window.innerHeight * (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
                                    contentSizeY = (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
                                } else {
                                    newFancyboxHeight = ProBtnControl.params.ContentSize.Y;
                                }
                            } else {
                                //if isManualSize is not set, then fancybox should be sized in px
                                newFancyboxHeight = ProBtnControl.params.ContentSize.H;
                                newFancyboxWidth = ProBtnControl.params.ContentSize.W;
                            }

                            newFancyboxHeight = newFancyboxHeight - margins[0] - margins[2];
                            newFancyboxWidth = newFancyboxWidth - margins[1] - margins[3];

                            var setFancyboxSizes = function () {
                                //if (params.IsManualSize === true) {
                                $('.fancybox-wrap').width(newFancyboxWidth);
                                $('.fancybox-wrap').height(newFancyboxHeight);

                                $('.fancybox-inner').width(newFancyboxWidth);
                                $('.fancybox-inner').height(newFancyboxHeightInner);
                                //}

                                if (ProBtnControl.params.ButtonType == "fullscreen") {
                                    $('.fancybox-wrap').css("left", margins[1]);
                                    $('.fancybox-wrap').css("top", margins[0]);
                                    $('.fancybox-wrap').css("bottom", margins[2]);
                                    $('.fancybox-wrap').css("right", margins[3]);
                                }

                                ProBtnControl.additionalButtonFunctions.setIfameSizes();
                            }

                            var newFancyboxWidthInner = newFancyboxWidth - $(".fancybox-title").width();
                            var newFancyboxHeightInner = newFancyboxHeight - $(".fancybox-title").height();

                            setFancyboxSizes();

                            if (newFancyboxWidth > newFancyboxHeight) {
                                var videoHeight = $('.fancybox-inner').height();
                                var videoWidth = (videoHeight / ProBtnControl.params.VideoSize.Y) * ProBtnControl.params.VideoSize.X;
                            } else {
                                var videoWidth = $('.fancybox-inner').width();
                                var videoHeight = (videoHeight / ProBtnControl.params.VideoSize.X) * ProBtnControl.params.VideoSize.Y;
                            }

                            //set video sizes
                            $(".probtn_video_wrapper2").width($('.fancybox-inner').width());
                            $(".probtn_video_wrapper2").height($('.fancybox-inner').height());
                            $(".probtn_video").width(videoWidth);
                            $(".probtn_video").height(videoHeight);

                            setFancyboxSizes();
                        }
                    }
                },

                changeBodySize: function () {
                    var opts = {
                        width: window.availWidth,
                        height: window.availHeight
                    }
                    if (ProBtnControl.userData.browser === "Microsoft Internet Explorer") {
                        opts.overflow = "auto";
                    }
                    try {
                        $('body').css(opts);
                    } catch (ex) {
                    }
                },

                MinimizeWrapper: function (callback1, time) {
                    var callback = callback1;
                    function minimize() {

                        var pizzabtn_wrapper = undefined;
                        pizzabtn_wrapper = $("#probtn_wrapper");

                        var opts = {
                            width: "auto",
                            height: "auto",
                            position: "fixed"
                        };

                        ProBtnControl.additionalButtonFunctions.sendMessageToParent("probtn_end_move");

                        try {
                            $.pep.toggleAll(false);
                            pizzabtn_wrapper.css(opts);
                            $.pep.toggleAll(true);
                        } catch (ex) {
                            pizzabtn_wrapper.css(opts);
                        }

                        if ((callback !== null) && (callback !== undefined)) {
                            callback();
                        }
                    }

                    if (time !== null) {
                        setTimeout(minimize, time)
                    } else {
                        minimize();
                    }
                },
                //maximiza button wrapper
                MaximizeWrapper: function (callback) {
                    var pizzabtn_wrapper = undefined;
                    pizzabtn_wrapper = $("#probtn_wrapper");

                    var opts = {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        position: "fixed"
                    };

                    ProBtnControl.additionalButtonFunctions.sendMessageToParent("probtn_start_move");

                    pizzabtn_wrapper.css(opts);
                    try {
                        var scrollLeft = 0;
                        scrollLeft = $(window).scrollLeft();
                        if ((ProBtnControl.pizzabtn.offset().left - scrollLeft) > pizzabtn_wrapper.width()) {
                            var newleft = pizzabtn_wrapper.width() - ProBtnControl.pizzabtn.width();
                            ProBtnControl.pizzabtn.css({ left: newleft + 'px' });
                        };
                    } catch (ex) { };
                    try {
                        var scrollTop = 0;
                        scrollTop = $(window).scrollTop();

                        if ((ProBtnControl.pizzabtn.offset().top - scrollTop) > pizzabtn_wrapper.height()) {
                            var newtop = pizzabtn_wrapper.height() - ProBtnControl.pizzabtn.height();
                            ProBtnControl.pizzabtn.css({ top: newtop + 'px' });
                        };
                    } catch (ex) { };

                    try {
                        callback();
                    } catch (ex) { };
                },
                animation: {
                    animationRuning: false,
                    checkAndRunAnimation: function () {
                        setTimeout(function () {
                            if ((ProBtnControl.params.isAnimation == "anim1") || (ProBtnControl.params.isAnimation == "anim2")) {
                                //$.pep.toggleAll(false);
                                var initLeft = ProBtnControl.pizzabtn.position().left;
                                var initTop = ProBtnControl.pizzabtn.position().top;

                                ProBtnControl.additionalButtonFunctions.animation.animationRuning = true;

                                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {

                                    var count = 0;

                                    ProBtnControl.pizzabtn.animate({
                                        top: (window.innerHeight - ProBtnControl.pizzabtn.height()),
                                        left: ($("body").innerWidth() - ProBtnControl.pizzabtn.width())
                                    }, {
                                        duration: ProBtnControl.params.animationDuration,
                                        step: function (now) {
                                            if (ProBtnControl.userData.mobile) {
                                                count = count + 2;
                                            } else {
                                                count = now;
                                            }

                                            if (ProBtnControl.params.isAnimation == "anim2") {
                                                count = -count;
                                                $(this).css(ProBtnControl.additionalButtonFunctions.animation.getRotationCss(count, '60% 50%'));
                                            } else {
                                                $(this).css(ProBtnControl.additionalButtonFunctions.animation.getRotationCss(count));
                                            }
                                        },
                                        complete: ProBtnControl.additionalButtonFunctions.animation.doneAnimation
                                    });

                                    //ProBtnControl.pizzabtn.animate({ path: new parabolic }, ProBtnControl.params.animationDuration, ProBtnControl.additionalButtonFunctions.animation.doneAnimation);
                                })

                            }
                        }, 2000);
                    },
                    getRotationCss: function (deg, origin) {
                        if ((origin == null) && (origin == undefined)) {
                            origin = '50% 50%';
                        };
                        return {
                            'transform': 'rotate(' + deg + 'deg)',
                            '-webkit-transform': 'rotate(' + deg + 'deg)',
                            '-moz-transform': 'rotate(' + deg + 'deg)',
                            '-ms-transform': 'rotate(' + deg + 'deg)',
                            '-o-transform': 'rotate(' + deg + 'deg)',

                            '-webkit-transform-origin': origin,
                            '-moz-transform-origin': origin,
                            '-ms-transform-origin': origin,
                            '-o-transform-origin': origin,
                            'transform-origin': origin
                        };
                    },
                    doneAnimation: function () {
                        ProBtnControl.pizzabtn.css(ProBtnControl.additionalButtonFunctions.animation.getRotationCss(0));
                        ProBtnControl.additionalButtonFunctions.animation.animationRuning = false;
                        if ((ProBtnControl.params.ButtonAnimationDoneImage != "") && (ProBtnControl.params.ButtonAnimationDoneImage != undefined)) {
                            ProBtnControl.params.ButtonImage = ProBtnControl.params.ButtonAnimationDoneImage;
                            $("#pizzabtnImg", ProBtnControl.pizzabtn).attr('src', ProBtnControl.params.ButtonAnimationDoneImage);
                        }

                        ProBtnControl.additionalButtonFunctions.MinimizeWrapper();
                    }
                },
                //search for active zone by name
                getCurrentActiveArea: function (areaName) {
                    if (((ProBtnControl.params.ActiveZones !== null) || (ProBtnControl.params.ActiveZones.length > 0)) && (ProBtnControl.params.ButtonType == "button_and_active_zones")) {

                        for (var i = 0; i < ProBtnControl.params.ActiveZones.length; i++) {
                            var currentActiveZone = ProBtnControl.params.ActiveZones[i];
                            if (currentActiveZone.Name == areaName) {
                                //we found this area
                                return currentActiveZone;
                            }
                        }
                        return null;
                    } else {
                        return null;
                    }
                },
                randomString: function (length) {
                    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
                },
                //check for orientation - landscape or not
                isLandscape: function () {
                    return (window.innerWidth > window.innerHeight);
                },
                getFancyboxMargins: function () {
                    if ((ProBtnControl.params.ContentInsets.T < 0) || (ProBtnControl.params.ContentInsets.B < 0) || (ProBtnControl.params.ContentInsets.L < 0) || (ProBtnControl.params.ContentInsets.R < 0)) {
                        var isMobileLandscape = (ProBtnControl.additionalButtonFunctions.isLandscape() && ProBtnControl.userData.mobile);
                        var margins = (isMobileLandscape)
                            ? [ProBtnControl.params.ButtonSize.H / 4, ProBtnControl.params.ButtonSize.H / 4 + 5, ProBtnControl.params.ButtonSize.H / 4, ProBtnControl.params.ButtonSize.H / 4 + 5]
                            : [ProBtnControl.params.ButtonSize.H + 5, ProBtnControl.params.ButtonSize.H / 2, ProBtnControl.params.ButtonSize.H + 5, ProBtnControl.params.ButtonSize.H / 2];

                        if ((ProBtnControl.userData.mobile) && (ProBtnControl.params.ButtonSize.H > 70)) {
                            margins = [ProBtnControl.params.ButtonSize.H / 8, ProBtnControl.params.ButtonSize.H / 8, ProBtnControl.params.ButtonSize.H / 8, ProBtnControl.params.ButtonSize.H / 8];
                        } else {
                            if (ProBtnControl.params.ButtonSize.H > 70) {
                                margins = [70, 70, 70, 70];
                            };
                        };
                    } else {
                        var margins = [ProBtnControl.params.ContentInsets.T, ProBtnControl.params.ContentInsets.R, ProBtnControl.params.ContentInsets.B, ProBtnControl.params.ContentInsets.L];
                    }
                    return margins;
                },
                setIfameSizes: function () {
                    if (ProBtnControl.userData.mobile) {
                        //$(".fancybox-iframe").first().attr("scrolling", "no");
                        //$(".fancybox-iframe").first().width($(".fancybox-inner").first().width());
                    }

                    if ((ProBtnControl.params.iframeScaleMinWidth !== 0) && (ProBtnControl.params.iframeScaleMinWidth > $(".fancybox-inner").first().width())) {
                        ProBtnControl.params.iframeScale = $(".fancybox-inner").first().width() / ProBtnControl.params.iframeScaleMinWidth;

                        $(".fancybox-iframe").first().css("margin-bottom", "-5000px");
                        $(".fancybox-iframe").css("margin-bottom", "-5000px");
                    } else {
                    }

                    var setIframeScale = function (iframeScale) {
                        $(".fancybox-iframe").first().css("transform", "scale(" + iframeScale + ")");
                        $(".fancybox-iframe").first().css("-moz-transform", "scale(" + iframeScale + ")");
                        $(".fancybox-iframe").first().css("-webkit-transform", "scale(" + iframeScale + ")");
                        $(".fancybox-iframe").first().css("-o-transform", "scale(" + iframeScale + ")");
                        $(".fancybox-iframe").first().css("-ms-transform", "scale(" + iframeScale + ")");

                        $(".fancybox-iframe").first().css("transform-origin", "top left");
                        $(".fancybox-iframe").first().css("-webkit-transform-origin", "top left");
                        $(".fancybox-iframe").first().css("-moz-transform-origin", "top left");

                        $(".fancybox-iframe").first().width($(".fancybox-inner").first().width() / iframeScale);
                        $(".fancybox-iframe").first().height($(".fancybox-inner").first().height() / iframeScale);
                    }

                    if (ProBtnControl.params.iframeScale !== 1) {
                        setIframeScale(ProBtnControl.params.iframeScale);
                    } else {
                        switch (ProBtnControl.parsed_ua.ua_device_type) {
                            case 'mobile':
                                if ((ProBtnControl.params.iframeScaleMobile !== 1) && (ProBtnControl.params.iframeScaleMobile !== undefined) && (ProBtnControl.params.iframeScaleMobile !== null)) {
                                    setIframeScale(ProBtnControl.params.iframeScaleMobile);
                                }
                                break;
                            case 'tablet':
                                if ((ProBtnControl.params.iframeScaleTablet !== 1) && (ProBtnControl.params.iframeScaleTablet !== undefined) && (ProBtnControl.params.iframeScaleTablet !== null)) {
                                    setIframeScale(ProBtnControl.params.iframeScaleTablet);
                                }
                                break;
                            default:
                                if ((ProBtnControl.params.iframeScaleDesktop !== 1) && (ProBtnControl.params.iframeScaleDesktop !== undefined) && (ProBtnControl.params.iframeScaleDesktop !== null)) {
                                    setIframeScale(ProBtnControl.params.iframeScaleDesktop);
                                }
                                break;
                        }
                    }
                }
            }
        };

        ProBtnControl.userDataFunction();
        window.probtn_ButtonContentType = null;
        //console.log(ProBtnControl.additionalButtonFunctions.randomString(14));

        ProBtnControl.HpmdFunctions.probtnHpmdTrack(1);

        $(window).bind("load", function () {
            if (ProBtnControl.params.Debug) console.log("windows bind load");
            if (ProBtnControl.allButtonInit === false) {
                ProBtnControl.allButtonInit = true;
                allButton();
            }
        });

        ProBtnControl.HpmdFunctions.probtnHpmdTrack(1);

        /*$(document).ready(function () {
        console.log("documentready");
        ProBtnControl.allButtonInit = true;
        allButton();
        });*/

        setTimeout(function () {
            if (ProBtnControl.params.Debug) console.log("setTimeout");
            if (ProBtnControl.allButtonInit === false) {
                ProBtnControl.allButtonInit = true;
                allButton();
            }
        }, 2000);

        function allButton() {
            jQuery.getScript(ProBtnControl.uaParserPath, function () {

                try {
                    var parser = new UAParser();
                    var parsed_ua = parser.getResult();

                    if (parsed_ua && parsed_ua.device && parsed_ua.os) {
                        if (parsed_ua.os.name) {
                            parsed_ua.ua_os_name = parsed_ua.os.name.toLowerCase();
                        } else {
                            parsed_ua.ua_os_name = 'android';
                        }

                        if (parsed_ua.device.type) {
                            parsed_ua.ua_device_type = parsed_ua.device.type.toLowerCase();
                        } else {
                            switch (parsed_ua.ua_os_name) {
                                case 'android':
                                    parsed_ua.ua_device_type = 'mobile';
                                    break;
                                case 'ios':
                                    parsed_ua.ua_device_type = 'mobile';
                                    break;
                                case 'windows phone':
                                    parsed_ua.ua_device_type = 'mobile';
                                    break;
                                case 'windows mobile':
                                    parsed_ua.ua_device_type = 'mobile';
                                    break;
                                default:
                                    parsed_ua.ua_device_type = 'console';
                                    break;
                            }
                        }
                        ProBtnControl.parsed_ua = parsed_ua;
                        if (ProBtnControl.params.Debug) console.log(ProBtnControl.parsed_ua);
                    }
                } catch (ex) {
                    if (ProBtnControl.params.Debug) console.log(ex);
                }

                allButton1();
            });
        }

        function allButton1() {
            if ((ProBtnControl.userData.browserMajorVersion > "8") || (ProBtnControl.userData.browser !== "Microsoft Internet Explorer")) {

                ProBtnControl.params = $.extend(true, {
                    VideoType: 'mp4',
                    //disable or not button movement
                    DisableButtonMove: false,

                    //should we wait for content in iframe-button loaded, or show it as fast as we can
                    waitForIframeButtonLoaded: true,

                    uaParserPath: '//cdn.probtn.com/libs/ua-parser.js',
                    ButtonImageType: 'image', //variants image/iframe
                    ButtonIframeInitialSize: {
                        W: 0,
                        H: 0
                    },

                    ClickOnCloseButton: true,
                    AlwaysShowCloseButton: false,

                    FullscreenClickLink: '',

                    UtmSourceUseOnlyDomain: false,
                    UtmCampaign: "",
                    isTestSpeed: false,

                    HideWithoutInteractionTime: 0,

                    cssEaseDuration: 300,
                    ControlInIframeFromParent: false,
                    ParentParams: {
                        width: 0,
                        height: 0
                    },

                    isAddUtmSource: false,
                    UtmSource: '',

                    ButtonInitDelay: 0,

                    MenuOptions: {
                        FontSize: "1.4em",
                        FontFamily: '"Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif',
                        BackgroundColor: 'rgba(49,55,61,.95)',
                        ForegroundColor: '#fff',
                        MenuHeight: "3.4em"
                    },
                    MenuItems: [
                        {
                            Name: "Menu1",
                            Text: "External1",
                            ActionURL: "http://yandex.ru",
                            Image: '//admin.probtn.com/eqwid_btn_nonpress.png',
                            Type: "external"
                        },
                        {
                            Name: "Menu2",
                            Text: "External2",
                            ActionURL: "http://yandex.ru",
                            Image: '',
                            Type: "external"
                        },
                        {
                            Name: "Menu3",
                            Text: "Iframe",
                            ActionURL: "http://probtn.com",
                            Image: '//admin.probtn.com/eqwid_btn_nonpress.png',
                            Type: "iframe"
                        },
                        {
                            Name: "Menu3",
                            Text: "Video",
                            ActionURL: "http://jaguar-atlantm.by/upload/attachments/2/1/2115cee1a53649bb92b3b660e535e173.mp4",
                            Image: '//admin.probtn.com/eqwid_btn_nonpress.png',
                            Type: "video"
                        }
                    ],

                    ScrollZones: [
                    {
                        ZoneHeight: 0.5,
                        ButtonImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/gray.png",
                        ButtonDragImage: "",
                        HintText: "",
                        TrackingLink: "",
                        CustomButtonParams: false,
                        CustomContentURL: '',
                        ButtonSize: { // Размер
                            W: 64.0,
                            H: 64.0
                        },
                        ButtonDragSize: { // Размер при перемещении
                            W: 68.0,
                            H: 68.0
                        },
                        ButtonOpacity: 0.8, // Прозрачность
                        ButtonDragOpacity: 1.0 // Прозрачность при перемещении
                    },
                    {
                        ZoneHeight: 0.5,
                        ButtonImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/gray.png",
                        ButtonDragImage: "",
                        HintText: "",
                        TrackingLink: "",
                        CustomButtonParams: false,
                        ButtonSize: { // Размер
                            W: 64.0,
                            H: 64.0
                        },
                        ButtonDragSize: { // Размер при перемещении
                            W: 68.0,
                            H: 68.0
                        },
                        ButtonOpacity: 0.8, // Прозрачность
                        ButtonDragOpacity: 1.0 // Прозрачность при перемещении
                    }
                    ],
                    ChangeScrollButtonAtFullSiteHeight: true,
                    MainButtonClickable: true,
                    ActiveZones: [
                        {
                            Name: "Area1",
                            ButtonContentType: "iframe",
                            ButtonImageType: "image", //image or iframe
                            Position: {
                                X: 0.5,
                                Y: 0.5
                            },
                            ActiveImage: "//admin.probtn.com/eqwid_btn_nonpress.png",
                            InactiveImage: "//admin.probtn.com/eqwid_btn_nonpress.png",
                            ActiveSize: {
                                W: 64,
                                H: 64
                            },
                            InactiveSize: {
                                W: 64,
                                H: 64
                            },
                            ActionURL: "https://admin.probtn.com/probtn_demo_page.html",
                            ClickCounterLink: "",
                            VisibleOnlyInteraction: true,
                            InactiveOpacity: 0.8,
                            ActiveOpacity: 1
                        }
                    ],

                    hpmd: undefined, //main hpmd object

                    isServerCommunicationEnabled: true,
                    localSettingsPath: "settings.json",
                    useLocalFileSettings: false,

                    ClickCounterLink: "",

                    isSmartBanner: false,
                    smartbannerJsPath: '//cdn.probtn.com/libs/jquery.smartbanner.js',
                    smartbannerCssPath: '//cdn.probtn.com/libs/jquery.smartbanner.css',

                    animationDuration: 5000,
                    isAnimation: "",
                    ButtonAnimationDoneImage: "",

                    //smartbanner settings
                    smartbanner: {
                        iosAppId: null,
                        androidAppId: null,
                        isFixed: false,
                        isFixedMode: 'default', //default - position fixed over content
                        // extrusion - banner is fixed, but content moved down (banner height) - so banner don't close any content at page

                        title: null, // What the title of the app should be in the banner (defaults to <title>)
                        author: null, // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
                        price: 'FREE', // Price of the app
                        appStoreLanguage: 'us', // Language code for App Store
                        inAppStore: 'On the App Store', // Text of price for iOS
                        inGooglePlay: 'In Google Play', // Text of price for Android
                        inAmazonAppStore: 'In the Amazon Appstore',
                        inWindowsStore: 'In the Windows Store', // Text of price for Windows
                        GooglePlayParams: null, // Aditional parameters for the market
                        icon: null, // The URL of the icon (defaults to <meta name="apple-touch-icon">)
                        iconGloss: null, // Force gloss effect for iOS even for precomposed
                        url: null, // The URL for the button. Keep null if you want the button to link to the app store.
                        button: 'VIEW', // Text for the install button
                        scale: 'auto', // Scale based on viewport size (set to 1 to disable)
                        speedIn: 300, // Show animation speed of the banner
                        speedOut: 400, // Close animation speed of the banner
                        daysHidden: 0, // Duration to hide the banner after being closed (0 = always show banner)
                        daysReminder: 0, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
                        force: null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
                        hideOnInstall: true, // Hide the banner after "VIEW" is clicked.
                        layer: false, // Display as overlay layer or slide down the page
                        iOSUniversalApp: true, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.
                        appendToSelector: 'body' //Append the banner to a specific selector
                    },

                    //params for dfp google ads network
                    dfp: {
                        isDFP: false,
                        clickUrlEsc: "",
                        cacheBuster: ""
                    },

                    showInParent: false,
                    isHPMD: false,
                    iframeScaleMinWidth: 0,
                    iframeScale: 1.0,

                    iframeScaleMobile: 1.0,
                    iframeScaleTablet: 1.0,
                    iframeScaleDesktop: 1.0,

                    Debug: false,

                    VideoPoster: '',
                    ButtonOnClick: 'function start1() { console.log("start1"); try { if (window.probtn_ButtonContentType!==null) { if (window.probtn_ButtonContentType=="video") { if (window.probtn_dropedActiveZone!==null) { if (window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType=="video") { var video = jQuery("#video_probtn_"+window.probtn_dropedActiveZone.currentActiveZone.Name).get(0); video.play(); } } else { var video = jQuery("#video_probtn").get(0); var frame_id = jQuery(".fancybox-iframe").first().attr("id"); probtn_callPlayer("video_probtn", "playVideo"); video.play(); } } } } catch(ex) { } }; start1(); setTimeout(start1 , 1000); setTimeout(start1 , 2000);',
                    ButtonOnTouchEnd: 'console.log("window.probtn_pizzabtn_moved - " + window.probtn_pizzabtn_moved); var moved =  window.probtn_pizzabtn_moved; clearInterval(window.probtn_touch_interval); function start2() { try { if ((window.probtn_dropedActiveZone!==null) && (window.probtn_dropedActiveZone!==undefined)) { if (window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType=="video") { var videoZone = jQuery("#video_probtn_"+window.probtn_dropedActiveZone.currentActiveZone.Name).get(0); videoZone.play(); } } else { if (moved === false) { try { if (window.probtn_ButtonContentType!==null) { if (window.probtn_ButtonContentType=="video") { var video = jQuery("#video_probtn").get(0); var frame_id = jQuery(".fancybox-iframe").first().attr("id"); probtn_callPlayer("video_probtn", "playVideo"); video.play(); } } } catch(ex) { console.log(ex); } } } } catch(ex) { console.log(ex); } }; start2(); setTimeout(start2 , 1000); setTimeout(start2 , 2000); setTimeout(start2 , 3000);',
                    ButtonOnTouchStart: 'window.probtn_touch_start = 0; window.probtn_touch_interval = setInterval(function() { window.probtn_touch_start = window.probtn_touch_start + 1; }, 1);',
                    ButtonType: 'fancybox',
                    VideoSize: {
                        X: 1920,
                        Y: 1080
                    },
                    //link to site after clicking video
                    VideoClickURL: '',
                    ButtonContentType: "iframe",
                    FancyboxType: "iframe",

                    TrackingLink: null,
                    MinimizeWrapperTime: 600,
                    OpenExternal: false,
                    CampaignID: null,
                    NeverClose: true,
                    MaxHeight: 0,
                    MaxWidth: 0,
                    domain: "",
                    fancyboxJsPath: "//cdn.probtn.com/libs/jquery.fancybox.min.js",
                    //"//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js",
                    //"//cdn.jsdelivr.net/fancybox/2.1.5/jquery.fancybox.min.js",
                    fancyboxCssPath: "//cdn.probtn.com/libs/jquery.fancybox.min.css",
                    //"//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css",
                    //"//cdn.jsdelivr.net/fancybox/2.1.5/jquery.fancybox.min.css",
                    mainStyleCss: "//cdn.probtn.com/style.css",
                    jqueryPepPath: "//cdn.probtn.com/libs/jquery.pep.min.js",
                    //"//cdn.jsdelivr.net/jquery.pep/0.6.3/jquery.pep.min.js",
                    buttonAnimationTimeAfterFancybox: 40,

                    HideAfterFirstShow: false,

                    LoadFancyboxCSS: true,

                    //base params
                    ContentURL: "http://app.ecwid.com/jsp/2557212/m", //site url address
                    BaseInsets: { // Базовое смещение от краев экрана с учетом статус бара
                        T: 4.0,
                        B: 4.0,
                        L: 4.0,
                        R: 4.0
                    },
                    ButtonEnabled: false, // Включена / выключена
                    ButtonVisible: false, // видна / не видна
                    // Кнопка
                    ButtonOpenInsets: { // Смещение в открытом состоянии
                        T: 32.0,
                        B: 32.0,
                        L: 32.0,
                        R: 32.0
                    },
                    ButtonPosition: { // Позиция
                        X: 0.85, // По умолчанию центр экрана
                        Y: 0.15 // По умолчанию центр экрана
                    },
                    ButtonSize: { // Размер
                        W: 64.0,
                        H: 64.0
                    },
                    ButtonDragSize: { // Размер при перемещении
                        W: 68.0,
                        H: 68.0
                    },
                    ButtonOpenSize: { // Размер в открытом состоянии
                        W: 64.0,
                        H: 64.0
                    },
                    ButtonInactiveSize: { // Размер в неактивном состоянии
                        W: 64.0,
                        H: 64.0
                    },
                    ButtonOpacity: 0.8, // Прозрачность
                    ButtonDragOpacity: 1.0, // Прозрачность при перемещении
                    ButtonOpenOpacity: 1.0, // Прозрачность в открытом состоянии
                    ButtonInactiveOpacity: 0.5, // Прозрачность в неактивном состоянии
                    ButtonImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/gray.png",
                    ButtonDragImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/drag_gray.png",
                    ButtonOpenImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/drag_gray.png",
                    ButtonInactiveImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/drag_gray.png",

                    ClosePosition: { // Позиция
                        X: 0.5, // По умолчанию центр экрана
                        Y: 0.85 // По умолчанию центр экрана
                    },
                    CloseSize: { // Размер
                        W: 64,
                        H: 64
                    },
                    CloseActiveSize: { // Размер в активном состоянии
                        W: 72,
                        H: 72
                    },
                    CloseOpacity: 0.6, // Прозрачность
                    CloseActiveOpacity: 1.0, // Прозрачность в активном состоянии
                    CloseImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/close.png", // Ссылка на изображение
                    CloseActiveImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/close.png", // Ссылка на изображение в активном состоянии

                    HintInsets: { // Смещение от краев
                        T: 4.0,
                        B: 4.0,
                        L: 4.0,
                        R: 4.0
                    },
                    HintLabelInsets: { // Смещение для текста
                        T: 4.0,
                        B: 4.0,
                        L: 4.0,
                        R: 4.0
                    },
                    HintImageInsets: { // Бордюры для изображения
                        T: 8.0,
                        B: 8.0,
                        L: 8.0,
                        R: 8.0
                    },
                    HintText: "Press me", // Текст
                    HintFont: { // Шрифт
                        Family: "Arial",
                        Size: 18
                    },
                    HintFontColor: { // Цвет
                        R: 1.0,
                        G: 1.0,
                        B: 1.0,
                        A: 1.0
                    },
                    VendorText: "",
                    VendorSite: "#",
                    VendorTextFont: { "Family": "Arial", "Size": 10 },
                    VendorTextColor: { "R": 1, "G": 1, "B": 1, "A": 1 },
                    VendorOpacity: 0.4,
                    VendorColor: { "R": 0, "G": 0, "B": 0, "A": 1 },

                    HintOpacity: 0.8, // Прозрачность подсказки
                    HintImage: "//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/hint.png", // Ссылка на изображение

                    HintArrowSize: { // Размер стрелки
                        W: 8.0,
                        H: 8.0
                    },
                    HintArrowOffset: { // Нахлест стрелки
                        T: 0.0,
                        B: 0.0,
                        L: 0.0,
                        R: 0.0
                    },
                    HintArrowImageT: "", // Ссылка на изображение
                    HintArrowImageB: "", // Ссылка на изображение
                    HintArrowImageL: "", // Ссылка на изображение
                    HintArrowImageR: "", // Ссылка на изображение

                    ContentSize: {
                        W: 100,
                        H: 100,
                        X: "90%",
                        Y: "90%"
                    },
                    IsManualSize: true,

                    // Контент
                    ContentInsets: { // Смещение от краев
                        T: -2.0,
                        B: -2.0,
                        L: -2.0,
                        R: -2.0
                    },
                    ContentWebViewInsets: { // Смещение для WebView
                        T: 12.0,
                        B: 12.0,
                        L: 12.0,
                        R: 12.0
                    },
                    ContentImageInsets: { // Бордюры для изображения
                        T: 32.0,
                        B: 32.0,
                        L: 32.0,
                        R: 32.0
                    },
                    ContentOpacity: 1.0, // Прозрачность
                    ContentBackOpacity: 1.0, // Прозрачность фоновой части контента
                    ContentBackColor: { // Цвет фоновой части контента
                        R: 0.0,
                        G: 0.0,
                        B: 0.0,
                        A: 1.0
                    },
                    ContentActivityColor: { // Цвет индикатора загрузки
                        R: 0.0,
                        G: 0.0,
                        B: 0.0,
                        A: 1.0
                    },
                    ContentImage: "", // Ссылка на изображение

                    ContentArrowSize: { // Размер стрелки
                        W: 14.0,
                        H: 14.0
                    },
                    ContentArrowOffset: { // Нахлест стрелки
                        T: 8.0,
                        B: 8.0,
                        L: 9.0,
                        R: 9.0
                    },
                    ContentArrowImageT: "", // Ссылка на изображение
                    ContentArrowImageB: "", // Ссылка на изображение
                    ContentArrowImageL: "", // Ссылка на изображение
                    ContentArrowImageR: "", // Ссылка на изображение

                    // Настройки анимации

                    DefaultDuration: 0.1, // Стандартная длительность анимации
                    DefaultDelay: 0.0, // Стандартная задежка анимации

                    OpenDuration: 0.2, // Длительность анимации "Открытия"
                    OpenDelay: 0.5, // Задержка анимации "Открытия"
                    CloseDuration: 0.2, // Длительность анимации "Закрытия"
                    CloseDelay: 0.5, // Задержка анимации "Закрытия"

                    ButtonShowDuration: 0.2, // Длительность анимации "Показать"
                    ButtonShowDelay: 0.0, // Задержка анимации "Показать"
                    ButtonHideDuration: 0.2, // Длительность анимации "Скрыть"
                    ButtonHideDelay: 0.0, // Задержка анимации "Скрыть"
                    ButtonDragDuration: 0.1, // Длительность анимации "Начать перемещать"
                    ButtonDragDelay: 0.0, // Задержка анимации "Начать перемещать"
                    ButtonUndragDuration: 0.2, // Длительность анимации "Перестать перемещать"
                    ButtonUndragDelay: 0.0, // Задержка анимации "Перестать перемещать"
                    ButtonInactiveDuration: 0.1, // Длительность анимации "Переход в неактивное состояние"
                    ButtonInactiveDelay: 5.0, // Время простоя перед переходом в неактивное состояние
                    ButtonInertiaSpeed: 512.0, // Скорость анимации "Инерция"
                    ButtonInertiaSpeedMin: 32.0, // Максимальная скорость анимации "Инерция"
                    ButtonInertiaSpeedMax: 1024.0, // Минимальная скорость анимации "Инерция"
                    ButtonInertiaFactor: 6.0, // Множитель анимации "Инерция"

                    CloseShowDuration: 0.1, // Длительность анимации "Показать область закрытия"
                    CloseShowDelay: 0.0, // Задержка анимации "Показать область закрытия"
                    CloseHideDuration: 0.2, // Длительность анимации "Скрыть область закрытия"
                    CloseHideDelay: 0.0, // Задержка анимации "Скрыть область закрытия"
                    CloseActiveDuration: 0.1, // Длительность анимации "Активировать область закрытия"
                    CloseActiveDelay: 0.0, // Задержка анимации "Активировать область закрытия"
                    CloseUnactiveDuration: 0.1, // Длительность анимации "Деактивировать область закрытия"
                    CloseUnactiveDelay: 0.0, // Задержка анимации "Деактивировать область закрытия"

                    HintLaunchDuration: 30000.0, // Длительность анимации "Показать при запуске подсказку"
                    HintLaunchDelay: 0.0, // Задержка анимации "Показать при запуске подсказку"
                    HintShowDuration: 0.1, // Длительность анимации "Показать подсказку"
                    HintShowDelay: 0.0, // Задержка анимации "Показать подсказку"
                    HintHideDuration: 0.2, // Длительность анимации "Скрыть подсказку"
                    HintHideDelay: 0.0, // Задержка анимации "Скрыть подсказку"

                    ContentShowDuration: 0.1, // Длительность анимации "Показать контент"
                    ContentShowDelay: 0.0, // Задержка анимации "Показать контент"
                    ContentHideDuration: 0.2, // Длительность анимации "Скрыть контент"
                    ContentHideDelay: 0.0, // Задержка анимации "Скрыть контент",

                    HideInFrame: true, // Скрывать, если кнопка показывается внутри другой кнопки

                    ZCustomCss: ""
                }, options);

                // hint style
                ProBtnControl.initFunctions.hintTextStyle = {
                    "opacity": ProBtnControl.params.HintOpacity,
                    "font-size": ProBtnControl.params.HintFont.Size,
                    "font-family": ProBtnControl.params.HintFont.Family,
                    "color": "white",
                    "padding": "4px",
                    "background": "url('" + ProBtnControl.params.HintImage + "')"
                };

                if ((ProBtnControl.params.HintText == "") || (ProBtnControl.params.HintText == null)) {
                    ProBtnControl.initFunctions.hintTextStyle.display = "none";
                    ProBtnControl.initFunctions.hintTextStyle.opacity = "0.0";
                }

                //undefined until we init close button

                ProBtnControl.closeButton = undefined; //initCloseButton();

                //$(document).ready(function () {
                ProBtnControl.currentDomain = document.domain.replace("www.", "");
                if (ProBtnControl.currentDomain == "" || ProBtnControl.currentDomain == null) {
                    ProBtnControl.currentDomain = "example.com";
                };

                //ProBtnControl.realDomain = ProBtnControl.currentDomain;
                //rewrite domain if it specified in plugins params
                if ((ProBtnControl.params.domain != "") && (ProBtnControl.params.domain != null)) {
                    ProBtnControl.currentDomain = ProBtnControl.params.domain;
                } else { };

                // orientation
                var supportsOrientationChange = "onorientationchange" in window;
                var orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

                var windowHeight = window.innerHeight;
                var windowWidth = window.innerWidth;

                ProBtnControl.additionalButtonFunctions.closeAfterOrientationChange = false;

                var operator = null;
                var settingsUrl = "";

                var CheckAndRunButtonAtParent = function () {
                    if ((ProBtnControl.params.showInParent) && (window.self !== window.top)) {
                        ProBtnControl.params.showInParent = false;
                        ProBtnControl.params.HideInFrame = true;

                        // https://cdn.probtn.com/includepb.min.js
                        var oHead = window.top.document.getElementsByTagName('HEAD').item(0);

                        var loadJS = function (src, callback) {
                            var s = window.top.document.createElement('script');
                            s.src = src;
                            s.async = true;
                            s.onreadystatechange = s.onload = function () {
                                var state = s.readyState;
                                if (!callback.done && (!state || /loaded|complete/.test(state))) {
                                    callback.done = true;
                                    callback();
                                }
                            };
                            window.top.document.getElementsByTagName('head')[0].appendChild(s);
                        }

                        loadJS('//cdn.probtn.com/includepb.min.js', function () {
                        });
                    }
                }

                //check settings and run smartbanner
                var startAppBanner = function () {
                    if ((ProBtnControl.params.ButtonType == "smartbanner") || (ProBtnControl.params.IsSmartBanner == true)) {

                        //add custom css to head
                        if ((ProBtnControl.params.ZCustomCss !== "") && (ProBtnControl.params.ZCustomCss !== null) && (ProBtnControl.params.ZCustomCss !== undefined)) {
                            $('head').append('<style type="text/css">' + ProBtnControl.params.ZCustomCss + '</style>');
                        }

                        var initSmartBanner = function () {
                            if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.smartbanner);
                            //ProBtnControl.statistics.SendStatisticsData("Opened", 1);
                            //ProBtnControl.statistics.SendStatisticsData("Showed", 1);
                            ProBtnControl.statistics.SendStatObject({
                                "Opened": 1,
                                "Showed": 1
                            });


                            try {
                                try {
                                    if ((!ProBtnControl.params.smartbanner.androidAppId) || (ProBtnControl.params.smartbanner.androidAppId == "")) {
                                        if (!$('meta[name=apple-itunes-app]').length) {
                                            $('head').append('<meta name="apple-itunes-app" content="app-id=' + ProBtnControl.params.smartbanner.iosAppId + '" />');
                                        }
                                    }
                                    if ((!ProBtnControl.params.smartbanner.androidAppId) || (ProBtnControl.params.smartbanner.androidAppId == "")) {
                                        if (!$('meta[name=google-play-app]').length) {
                                            $('head').append('<meta name="google-play-app" content="app-id=' + ProBtnControl.params.smartbanner.androidAppId + '" />');
                                        }
                                    }
                                } catch (ex1) {
                                    if (ProBtnControl.params.Debug) console.log(ex1);
                                }

                                //appendToSelector
                                if (ProBtnControl.params.smartbanner.isFixedMode == 'extrusion') {
                                    ProBtnControl.params.smartbanner.appendToSelector = 'html';
                                }

                                $.smartbanner(ProBtnControl.params.smartbanner);

                                if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.smartbanner.isFixed);
                                if (ProBtnControl.params.smartbanner.isFixed == true) {
                                    $("#smartbanner").css("position", "fixed");
                                }

                                $("#smartbanner .sb-info").append('<div style="margin-left: -1px;" class="rating"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>');
                                //★ ☆
                                if (ProBtnControl.params.smartbanner.isFixedMode == 'extrusion') {
                                    if (ProBtnControl.params.Debug) console.log("extrusion");
                                    $("#smartbanner").css("position", "fixed");
                                    $("body").css("top", "78px");
                                    $("body").css("margin", "0px");
                                    $("body").css("position", "absolute");
                                    $("body").css("width", "100%");
                                }

                                try {
                                    $("#smartbanner .sb-button").attr("target", "_blank");
                                } catch (ex) {
                                    if (ProBtnControl.params.Debug) console.log(ex);
                                }

                                try {
                                    $(document).on('click', "#smartbanner .sb-button", function () {
                                        if (ProBtnControl.params.Debug) console.log("smartbanner click");
                                        ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
                                    });
                                } catch (ex) {
                                    if (ProBtnControl.params.Debug) console.log(ex);
                                }

                                try {
                                    $(document).on('click', "#smartbanner a.sb-close", function () {
                                        if (ProBtnControl.params.Debug) console.log("smartbanner close");
                                        ProBtnControl.statistics.SendStatObject({
                                            "Closed": 1,
                                            "Hidded": 1
                                        });
                                        if (ProBtnControl.params.smartbanner.isFixedMode == 'extrusion') {
                                            $("body").css("top", "0px");
                                        }
                                        $("#smartbanner").hide(300);
                                    });
                                } catch (ex) {
                                    if (ProBtnControl.params.Debug) console.log(ex);
                                }

                            } catch (ex) {
                                if (ProBtnControl.params.Debug) console.log(ex);
                            }
                        }

                        if (typeof $.smartbanner == 'function') {
                            initSmartBanner();
                            return true;
                        } else {
                            $('head').append('<link rel="stylesheet" href="' + ProBtnControl.params.smartbannerCssPath + '" type="text/css" />');
                            $.getScript(ProBtnControl.params.smartbannerJsPath, function () {
                                initSmartBanner();
                            });
                            return true;
                        }
                        //return false;
                    } else {
                        return false;
                    }
                }

                var CheckInFrameAndEnabled = function () {
                    var isStartAppBanner = startAppBanner();
                    CheckAndRunButtonAtParent();

                    ProBtnControl.params.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
                    ProBtnControl.params.ButtonDragSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonDragSize);

                    if ((ProBtnControl.params.HideInFrame === true && window.self !== window.top) || (isStartAppBanner)) {
                        //do nothing
                        if (ProBtnControl.params.Debug) console.log("do nothing");
                    }
                    else {
                        if (ProBtnControl.params.ButtonEnabled == true) {

                            if (ProBtnControl.params.LoadFancyboxCSS === true) {
                                $('head').append('<link rel="stylesheet" href="' + ProBtnControl.params.fancyboxCssPath + '" type="text/css" />');
                            }

                            //add custom css to head
                            if ((ProBtnControl.params.ZCustomCss !== "") && (ProBtnControl.params.ZCustomCss !== null) && (ProBtnControl.params.ZCustomCss !== undefined)) {
                                $('head').append('<style type="text/css">' + ProBtnControl.params.ZCustomCss + '</style>');
                            }

                            //init close button
                            ProBtnControl.closeButton = ProBtnControl.initFunctions.initCloseButton();
                            //ProBtnControl.closeButton.center();

                            //bind orientation change events
                            $(window).bind("orientationchange", ProBtnControl.additionalButtonFunctions.onOrientationChange);
                            $(window).bind("resize", ProBtnControl.additionalButtonFunctions.onOrientationChange);

                            if ((ProBtnControl.params.ButtonInitDelay !== 0) && (ProBtnControl.params.ButtonInitDelay !== null) && (ProBtnControl.params.ButtonInitDelay !== undefined)) {
                                setTimeout(BeginButtonProcess, ProBtnControl.params.ButtonInitDelay);
                            } else {
                                BeginButtonProcess();
                            }

                        }
                    }
                }

                var getSettingsAndLaunchButton = function (operator) {
                    if (ProBtnControl.params.Debug) console.log("getSettingsAndLaunchButton");
                    var retina = 1;
                    if ((ProBtnControl.userData.os === "iOS") || (ProBtnControl.userData.os === "Mac OS") || (ProBtnControl.userData.os === "Mac OS X")) {
                        retina = window.devicePixelRatio;
                    };

                    function parseResultData(data) {
                        if (ProBtnControl.params.Debug) console.log(data);
                        try {
                            if (ProBtnControl.params.Debug) console.log(data);

                            try {
                                //var HintText = utf8_encode(data.result.HintText);
                                data.result.HintText = HintText;
                            } catch (ex) {
                            }

                            if (data.code == 100) {
                                if (data.MSMediaKeyNeededEvent.location == 1) {
                                    ProBtnControl.geolocation.getLocation();
                                }
                            } else {
                                if (ProBtnControl.params.Debug) console.log(ProBtnControl.params);
                                if (ProBtnControl.params.Debug) console.log(options);
                                ProBtnControl.params = $.extend(true, ProBtnControl.params, data.result);
                                if (ProBtnControl.params.Debug) console.log("after server", ProBtnControl.params);
                                ProBtnControl.params = $.extend(true, ProBtnControl.params, options);


                                if (ProBtnControl.params.Debug) console.log("after options", ProBtnControl.params);

                                ProBtnControl.params.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
                                if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.ButtonSize);
                                ProBtnControl.params.ButtonDragSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonDragSize);
                                if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.ButtonDragSize);

                                //get one more additional params
                                try {
                                    if ($("#probtn_additional_params").length > 0) {
                                        var textData = $("#probtn_additional_params").text();
                                        textData = JSON.parse(textData);

                                        $.extend(true, ProBtnControl.params, ProBtnControl.params, textData);
                                    }
                                } catch (ex) {
                                    if (ProBtnControl.params.Debug) console.log(ex);
                                }

                                //check params for html code
                                var checkHtmlInObject = function (inObject) {
                                    try {
                                        for (var property in inObject) {
                                            if (inObject.hasOwnProperty(property)) {
                                                if (typeof (inObject[property]) == "string") {
                                                    try {
                                                        var before = inObject[property];
                                                        //inObject[property] = inObject[property].replace(/<\/?[^>]+(>|$)/g, ""); //$(inObject[property]).text();
                                                        inObject[property] = inObject[property].split('<style>').join('')
                                                            .split('</style>').join('')
                                                            .split('<script>').join('')
                                                            .split('</script>').join('');
                                                    } catch (ex) {
                                                        if (ProBtnControl.params.Debug) console.log(ex);
                                                    }
                                                }
                                            }
                                        }
                                    } catch (ex) {
                                        if (ProBtnControl.params.Debug) console.log(ex);
                                    }
                                }

                                checkHtmlInObject(ProBtnControl.params);

                                //show button if we have probtnDebug hash in url
                                if (window.location.hash == "#probtnDebug") {
                                    ProBtnControl.params.ButtonVisible = true;
                                    ProBtnControl.params.ButtonEnabled = true;
                                    ProBtnControl.params.Debug = true;
                                }

                                ProBtnControl.initFunctions.hintTextStyle = {
                                    "opacity": ProBtnControl.params.HintOpacity,
                                    "font-size": ProBtnControl.params.HintFont.Size,
                                    "font-family": ProBtnControl.params.HintFont.Family,
                                    "color": "rgb(" + ProBtnControl.params.HintFontColor.R * 100 + "%, " + ProBtnControl.params.HintFontColor.G * 100 + "%, " + ProBtnControl.params.HintFontColor.B * 100 + "%)",
                                    "padding-left": ProBtnControl.params.HintLabelInsets.L,
                                    "padding-top": ProBtnControl.params.HintLabelInsets.T,
                                    "padding-right": ProBtnControl.params.HintLabelInsets.R,
                                    "padding-bottom": ProBtnControl.params.HintLabelInsets.B,
                                    "background": "url('" + ProBtnControl.params.HintImage + "')"
                                };
                                if ((ProBtnControl.params.HintText == "") || (ProBtnControl.params.HintText == null)) {
                                    ProBtnControl.initFunctions.hintTextStyle.display = "none";
                                    ProBtnControl.initFunctions.hintTextStyle.opacity = "0.0";
                                }
                            }
                        } catch (ex) {
                            if (ProBtnControl.params.Debug) console.log(ex);
                        };
                    }

                    if ((ProBtnControl.params.isServerCommunicationEnabled) || (ProBtnControl.params.useLocalFileSettings)) {
                        ProBtnControl.additionalButtonFunctions.testSpeed(function (kbs) {
                            if ((ProBtnControl.params.Debug) && (kbs > 0)) {
                                //alert("test speed complited - " + kbs + " kbps");
                            }

                            //get one more additional params
                            try {
                                if ($("#probtn_additional_params").length > 0) {
                                    var textData = $("#probtn_additional_params").text();
                                    textData = JSON.parse(textData);

                                    $.extend(true, ProBtnControl.params, ProBtnControl.params, textData);

                                    if (ProBtnControl.params.domain !== "") {
                                        ProBtnControl.currentDomain = ProBtnControl.params.domain;
                                    }
                                }
                            } catch (ex) {
                                if (ProBtnControl.params.Debug) console.log(ex);
                            }

                            settingsUrl = ProBtnControl.serverUrl + "/1/functions/getClientSettings?BundleID=" +
                        ProBtnControl.currentDomain + "&localDomain=" + ProBtnControl.realDomain + "&DeviceType=web&DeviceUID=" + ProBtnControl.GetDeviceUID() + "&DeviceCUID=" + ProBtnControl.DeviceCID +
                        "&Location[Longitude]=0&Location[Latitude]=0&Version=" + ProBtnControl.mainVersion +
                        "&X-ProBtn-Token=" + ProBtnControl.XProBtnToken + "&random=" + Math.random() +
                        "&ScreenResolutionX=" + ProBtnControl.userData.screenHeight + "&ScreenResolutionY=" +
                        ProBtnControl.userData.screenWidth + "&Retina=" + retina + "&ConnectionSpeed=" + kbs + "&callback=?";

                            if (ProBtnControl.params.useLocalFileSettings) {
                                settingsUrl = ProBtnControl.params.localSettingsPath;
                            }

                            try {
                                $.getJSON(settingsUrl, parseResultData).done(function () { if (ProBtnControl.params.Debug) console.log('done settings load'); }).fail(function (jqXHR, textStatus, errorThrown) {
                                    if (ProBtnControl.params.Debug) console.log(errorThrown);
                                    if (ProBtnControl.params.Debug) console.log(textStatus);
                                }).always(CheckInFrameAndEnabled);
                            } catch (ex) {
                                $.getJSON(settingsUrl, function (data) {
                                    parseResultData(data);
                                    CheckInFrameAndEnabled();
                                });
                            }
                        });
                    } else {
                        if (ProBtnControl.params.Debug) console.log("Dont load settings");
                    }
                }

                ProBtnControl.cookieFunctions.getDeviceCID(function (guid) {
                    getSettingsAndLaunchButton(null);
                });

                //BEGIN BUTTON PROCESS
                var BeginButtonProcess = function () {

                    try {
                        //ProBtnControl.closeButton.center();
                    } catch (ex) {
                        console.log(ex);
                    }

                    function receiveMessage(event) {
                        try {
                            ProBtnControl.params.ParentParams.width = event.data.width;
                            ProBtnControl.params.ParentParams.height = event.data.height;
                            if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.ParentParams);
                        } catch (ex) {
                            if (ProBtnControl.params.Debug) console.log(ex);
                        }
                    }
                    if (window.addEventListener) {
                        window.addEventListener("message", receiveMessage, false);
                    } else {
                        window.attachEvent("onmessage", receiveMessage);
                    }

                    ProBtnControl.HpmdFunctions.probtnHpmdTrack(2);
                    //add button styles
                    $('head').append('<link rel="stylesheet" href="' + ProBtnControl.params.mainStyleCss + '" type="text/css" />');

                    //add classes for ios devices
                    if (ProBtnControl.userData.os === "iOS") {
                        $("body").addClass("btn_os_ios");
                        if (ProBtnControl.userData.isiPad === true) {
                            $("body").addClass("btn_device_ipad");
                        } else {
                            $("body").addClass("btn_device_iphone");
                        }
                    }

                    if ((ProBtnControl.userData.mobile)) {
                        $('head').append("<style type='text/css'> .fancybox-inner { -webkit-overflow-scrolling: touch !important; overflow: scroll !important; } </style>");
                    } else {
                        $('head').append("<style type='text/css'> .fancybox-inner { -webkit-overflow-scrolling: touch !important; overflow: hidden !important; } </style>");
                    };

                    //var closeButton = initCloseButton();
                    $('#probtn_closeButton').attr('src', ProBtnControl.params.CloseImage);

                    // append pizzabtn and close btn styles
                    if (ProBtnControl.params.NeverClose == false) {
                        $('head').append(
                            $('<style/>', {
                                id: 'probtn_style',
                                type: "text/css",
                                html: [
                                    '#probtn_button.pizzabtn_normal { display: block; clear: both; position: device-fixed !important; }',
                                    '.close_pro_button_normal{ width:' + ProBtnControl.params.CloseSize.W + 'px; height:' + ProBtnControl.params.CloseSize.H + 'px; opacity:' + ProBtnControl.params.CloseOpacity + '; display: block; clear: both; }',
                                ].join("\n")
                            })
                        );
                    };

                    if ((ProBtnControl.params.ButtonType == "fullscreen_fancybox") || (ProBtnControl.params.ButtonType == "fullscreen")) {
                        ProBtnControl.params.ButtonVisible = false;
                    }

                    ProBtnControl.initFunctions.initStartScrollParams();

                    // get or create pizzabtn
                    ProBtnControl.pizzabtn = ProBtnControl.initFunctions.initPizzaButton();
                    window.probtn_ButtonContentType = ProBtnControl.params.ButtonContentType;

                    ProBtnControl.initFunctions.initScrollChange();
                    ProBtnControl.initFunctions.initActiveZones();

                    //if not fullscreen - load pep and fancybox
                    if (ProBtnControl.params.ButtonType !== "fullscreen") {

                        var fancyboxFunction = null;
                        try {
                            fancyboxFunction = jQuery.fancybox;
                            if ((fancyboxFunction !== null) && (fancyboxFunction !== undefined)) {
                                fancyboxFunction = jQuery.fancybox.open;
                            }
                        } catch (ex) {
                        }

                        var mo_domain = document.domain.replace("www.", "");
                        var mo_not_load_fb = (mo_domain && mo_domain.indexOf('maximonline.ru') >= 0);

                        // load fancybox and jquery.pep
                        if (typeof fancyboxFunction == 'function' || mo_not_load_fb) {
                            console.log('probtn, loading jquery.pep');
                            loadPep();
                        } else {
                            console.log('probtn, loading fancybox');
                            $.getScript(ProBtnControl.params.fancyboxJsPath, loadPep); //fancybox end
                        }
                    } else {
                        ProBtnControl.initFunctions.fullscreenInitAndShow();
                    }

                    function loadPep() {
                        try {
                            if (typeof $.pep.toggleAll == 'function') {
                                AllLoadedButtonProcess();
                            } else {
                                $.getScript(ProBtnControl.params.jqueryPepPath, AllLoadedButtonProcess);
                            };
                        } catch (ex) {
                            $.getScript(ProBtnControl.params.jqueryPepPath, AllLoadedButtonProcess);
                        }
                    }

                    ///
                    function AllLoadedButtonProcess() {

                        ProBtnControl.statistics.SendStatisticsData();
                        ProBtnControl.statistics.SendBrowserStatsInfo();

                        // show button
                        if (ProBtnControl.params.ButtonEnabled && ProBtnControl.params.ButtonVisible) {
                            ProBtnControl.pizzabtn.show();

                            ProBtnControl.closeButton.center();

                            //always show close button
                            if (ProBtnControl.params.AlwaysShowCloseButton == true) {
                                $('head').append('<style type="text/css">#probtn_closeButton { display: block !important; }</style>');
                            }
                        }

                        if (ProBtnControl.params.ButtonType == "fullscreen_fancybox") {
                            ProBtnControl.statistics.SendStatisticsData("Showed", 1);
                            ProBtnControl.onButtonTap();
                        }

                        if (ProBtnControl.params.ButtonType == "fullscreen") {
                            ProBtnControl.initFunctions.fullscreenInitAndShow();
                        }

                        if (ProBtnControl.params.ButtonVisible) {
                            ProBtnControl.statistics.SendStatisticsData("Showed", 1);
                        }

                        //hide hint after params.HintLaunchDuration time (in seconds)
                        ProBtnControl.pizzabtn.hideHintDelay();

                        //show hint with nessesary animation
                        ProBtnControl.pizzabtn.showHint();


                        // help vars
                        ProBtnControl.overlaped = false;

                        window.probtn_pizzabtn_moved = false;
                        ProBtnControl.pizzabtn.moved = false;

                        var cssEaseDuration = ProBtnControl.params.cssEaseDuration;
                        if (ProBtnControl.params.ControlInIframeFromParent == true) {
                            cssEaseDuration = 0;
                        } else {
                        }


                        //DisableButtonMove
                        ProBtnControl.pizzabtn.pep({
                            // hardwareAccelerate: false,
                            useCSSTranslation: false,
                            constrainTo: 'parent',
                            // cssEaseString: 'cubic-bezier(0.225, 0.500, 0.580, 1.000)', //default
                            // cssEaseString: 'cubic-bezier(0, 1, 1, 1)', // fast
                            // cssEaseString: 'cubic-bezier(0, 0, 1, 1)', // linear
                            // cssEaseString: 'cubic-bezier(.42, 0, .58, 1)', // ease-in-out
                            // cssEaseString: 'cubic-bezier(0, 0, .58, 1)', // ease-out
                            cssEaseString: 'cubic-bezier(0, .50, .50, 1)',
                            cssEaseDuration: cssEaseDuration,
                            velocityMultiplier: 1.0,
                            startThreshold: [1, 1],
                            droppable: '.probtn_active_zone',
                            initiate: ProBtnControl.additionalButtonFunctions.changeBodySize,
                            start: function () {

                                ProBtnControl.interactionFunctions.wasInteraction = true;
                                window.probtn_button_tap = false;

                                ProBtnControl.initFunctions.initRemoveMenu();

                                window.probtn_dropedActiveZone = null;

                                ProBtnControl.initFunctions.initScrollChange(true);

                                if (ProBtnControl.additionalButtonFunctions.animation.animationRuning) {
                                    ProBtnControl.additionalButtonFunctions.animation.doneAnimation();
                                }

                                $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {
                                    if (activeZone.currentActiveZone.VisibleOnlyInteraction) {
                                        activeZone.show();
                                    }
                                });

                                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {

                                    if (ProBtnControl.pizzabtn.moved == false) {
                                        ProBtnControl.pizzabtn.dragAnimate();
                                    };
                                    window.probtn_pizzabtn_moved = true;
                                    ProBtnControl.pizzabtn.moved = true;
                                    //hide hint
                                    if (ProBtnControl.pizzabtn.hintTextActive) {
                                        ProBtnControl.pizzabtn.hideHint();
                                    }
                                    // show close button
                                    if (ProBtnControl.params.NeverClose == false) {
                                        try {
                                            ProBtnControl.closeButton.show();
                                        } catch (ex) {

                                        }
                                    };
                                    ProBtnControl.statistics.SendStatisticsData("Moved", 1);
                                });
                            },
                            drag: function (ev, obj) {
                                ProBtnControl.initFunctions.initScrollChange(true);

                                //if set, disable button move
                                if (ProBtnControl.params.DisableButtonMove === true) {
                                    return false;
                                }

                                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
                                    var pizzabtnRect = ProBtnControl.pizzabtn[0].getBoundingClientRect();
                                    var closeButtonRect = ProBtnControl.closeButton[0].getBoundingClientRect();

                                    if ((pizzabtnRect.top + pizzabtnRect.height) > window.innerHeight) {
                                    }

                                    var overlap = !(pizzabtnRect.right < closeButtonRect.left || pizzabtnRect.left > closeButtonRect.right || pizzabtnRect.bottom < closeButtonRect.top || pizzabtnRect.top > closeButtonRect.bottom);

                                    //console.log("overlap - " + overlap);

                                    if (overlap && closeButtonRect.width !== 0) {
                                        if (!ProBtnControl.overlaped) {
                                            //console.log("overlaped true");
                                            ProBtnControl.closeButton.overlayActive();
                                            ProBtnControl.overlaped = true;
                                        }
                                    } else {
                                        if (ProBtnControl.overlaped) {
                                            try {
                                                ProBtnControl.closeButton.overlayUnactive();
                                                ProBtnControl.overlaped = false;
                                                //console.log("overlaped false");
                                            } catch (ex) {
                                                if (ProBtnControl.params.Debug) console.log(ex);
                                            }
                                        }
                                    }
                                });

                                try {
                                    if (this.activeDropRegions.length > 0) {

                                        var currentZoneName = jQuery(this.activeDropRegions[0]).attr("rel");

                                        var activeZone = ProBtnControl.initializedActiveZones[currentZoneName];
                                        if ((activeZone !== null) && (activeZone !== undefined)) {
                                            activeZone.animateActive();
                                            window.probtn_dropedActiveZone = activeZone;
                                        }

                                    } else {
                                        window.probtn_dropedActiveZone = null;

                                        $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {
                                            //activeZone.animateInactive();
                                            if (activeZone.currentActiveZone.ButtonImageType !== "iframe") {
                                                activeZone.attr("src", activeZone.currentActiveZone.InactiveImage);
                                            }
                                            if ((activeZone.currentActiveZone.ButtonIframeInitialSize == null) || (activeZone.currentActiveZone.ButtonIframeInitialSize == undefined)) {
                                                activeZone.currentActiveZone.ButtonIframeInitialSize = { W: 0, H: 0 };
                                            }

                                            if (ProBtnControl.additionalButtonFunctions.checkExistInitIframeSIze(activeZone)) {
                                                activeZone.css({
                                                    opacity: activeZone.currentActiveZone.InactiveOpacity
                                                });
                                            } else {
                                                activeZone.currentActiveZone.InactiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(activeZone.currentActiveZone.InactiveSize);
                                                activeZone.css({
                                                    width: activeZone.currentActiveZone.InactiveSize.W,
                                                    height: activeZone.currentActiveZone.InactiveSize.H,
                                                    opacity: activeZone.currentActiveZone.InactiveOpacity
                                                });
                                            }
                                            //activeZone.hide();
                                        });
                                    }
                                } catch (ex) {
                                    console.log(ex);
                                }

                            },
                            stop: function () {

                                var activeZone = null;
                                //check is there is some active zone after we stop using button
                                if (this.activeDropRegions.length > 0) {
                                    try {
                                        //get zone name
                                        var currentZoneName = jQuery(this.activeDropRegions[0]).attr("rel");
                                        if (ProBtnControl.params.Debug) console.log(currentZoneName);
                                        //get zone object
                                        activeZone = ProBtnControl.initializedActiveZones[currentZoneName];
                                        window.probtn_dropedActiveZone = activeZone;

                                        if ((activeZone.requestClickCounterLink !== null) && (activeZone.requestClickCounterLink !== null)) {
                                            activeZone.requestClickCounterLink();
                                        }

                                        if (activeZone.currentActiveZone.ButtonContentType !== "video") {
                                            ProBtnControl.onButtonTap(activeZone.currentActiveZone.ActionURL, currentZoneName, activeZone.currentActiveZone.ButtonContentType);
                                        } else {
                                            if (ProBtnControl.params.Debug) console.log("ProBtnControl.userData.isiPad - " + ProBtnControl.userData.isiPad);
                                            if ((ProBtnControl.userData.os !== "iOS") || (ProBtnControl.userData.isiPad !== false)) {
                                                ProBtnControl.onButtonTap(activeZone.currentActiveZone.ActionURL, currentZoneName, activeZone.currentActiveZone.ButtonContentType);
                                            } else {
                                                if (ProBtnControl.params.VideoClickURL !== "") {

                                                }
                                            }
                                        }
                                    } catch (ex) {
                                        if (ProBtnControl.params.Debug) console.log(ex);
                                        window.probtn_dropedActiveZone = null;
                                    }
                                } else {
                                    window.probtn_dropedActiveZone = null;
                                }

                                //hide zones and set inactive sizes
                                $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {
                                    if (activeZone.currentActiveZone.VisibleOnlyInteraction) {
                                        if (activeZone.currentActiveZone.ButtonImageType !== "iframe") {
                                            activeZone.attr("src", activeZone.currentActiveZone.InactiveImage);
                                        }
                                        if ((activeZone.currentActiveZone.ButtonIframeInitialSize == null) || (activeZone.currentActiveZone.ButtonIframeInitialSize == undefined)) {
                                            activeZone.currentActiveZone.ButtonIframeInitialSize = { W: 0, H: 0 };
                                        }

                                        if (ProBtnControl.additionalButtonFunctions.checkExistInitIframeSIze(activeZone)) {
                                            activeZone.css({
                                                opacity: activeZone.currentActiveZone.InactiveOpacity
                                            });
                                        } else {
                                            activeZone.css({
                                                width: activeZone.currentActiveZone.InactiveSize.W,
                                                height: activeZone.currentActiveZone.InactiveSize.H,
                                                opacity: activeZone.currentActiveZone.InactiveOpacity
                                            });
                                        }

                                        activeZone.hide();
                                    }
                                });

                                if (!ProBtnControl.pizzabtn.moved) {
                                    //if button clicked
                                    ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
                                        if ((activeZone === null) || (activeZone === undefined)) {
                                            if (ProBtnControl.params.ButtonContentType !== 'video') {
                                                ProBtnControl.onButtonTap();
                                            } else {
                                                if ((ProBtnControl.userData.os !== "iOS") || (ProBtnControl.userData.isiPad)) {
                                                    // (true) //
                                                    ProBtnControl.onButtonTap();
                                                } else {

                                                    if (ProBtnControl.params.HideAfterFirstShow == true) {
                                                        ProBtnControl.additionalButtonFunctions.hideAll();
                                                    };

                                                    //check for VideoClickURL not empty
                                                    if ((ProBtnControl.params.VideoClickURL !== "") && (ProBtnControl.params.VideoClickURL !== null) && (ProBtnControl.params.VideoClickURL !== undefined)) {

                                                        setTimeout(function () {
                                                            ProBtnControl.statistics.SendStatisticsData("VideoClicked", 1);
                                                            ProBtnControl.onButtonTap(ProBtnControl.params.VideoClickURL, null, 'iframe');
                                                        }, 3000);
                                                    }

                                                }
                                            }
                                        }
                                    });
                                } else {
                                    ProBtnControl.additionalButtonFunctions.MinimizeWrapper();

                                    if (ProBtnControl.overlaped) {
                                        //send close statistics
                                        ProBtnControl.statistics.SendStatObject({
                                            "Closed": 1,
                                            "Hidded": 1
                                        });

                                        //remove close button, main button and active zones
                                        ProBtnControl.pizzabtn.hide();
                                        ProBtnControl.closeButton.remove();
                                        ProBtnControl.additionalButtonFunctions.hideAllActiveZones();

                                    } else {
                                        ProBtnControl.pizzabtn.undragAnimate();
                                    };
                                }
                                ProBtnControl.closeButton.hide();

                                ProBtnControl.pizzabtn.moved = false;
                                window.probtn_pizzabtn_moved = false;
                                ProBtnControl.overlaped = false;
                            }
                        });


                    } //onButtonTap

                    ProBtnControl.additionalButtonFunctions.animation.checkAndRunAnimation();

                    ProBtnControl.initFunctions.initScrollChange(true);
                };
            } else {
                //console.log("IE8 not supported.");
            }
        }
    }

})(jQuery);
