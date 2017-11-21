function probtn_callPlayer(frame_id, func, args) {
    var player;
    if ((func == null) || (func == undefined)) {
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


(function () {
var mainStyleCssPath = "//cdn.probtn.com/style.css";
var jquerypepPath =  "//cdn.probtn.com/libs/jquery.pep.min.js";
var fancyboxPath = "//cdn.probtn.com/libs/jquery.fancybox.min.js";
var fancyboxCssPath = "//cdn.probtn.com/libs/jquery.fancybox.min.css";
var probtnPath = "//cdn.probtn.com/probtn.js"; //"//probtnexample1.azurewebsites.net/probtn2.js";
var jqueryPath = '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js';
var isServerCommunicationEnabled = true;
var useLocalFileSettings = false;
var localSettingsPath = "settings.json";
var isHPMD = false;
var domain = 'm.maximonline.ru';
try {
    window.probtn_hpmd = hpmd;
} catch(ex) {
    window.probtn_hpmd = null;
}

var vernums = [0,0,0];
try {
    vernums = jQuery.fn.jquery.split('.');
} catch(ex) { }

/*atlas lib*/
    var DeviceAtlas=DeviceAtlas||{}; DeviceAtlas=function(d,g,l,r){var c={apiVersion:"1.5",propsCache:"",cookieName:DeviceAtlas.cookieName||"DAPROPS",cookieExpiryDays:DeviceAtlas.cookieExpiryDays||1,cookieDomain:DeviceAtlas.cookieDomain||null,cookiePath:DeviceAtlas.cookiePath||"/",divStyle:null,debug:DeviceAtlas.debug||!1,ns:{svg:"http://www.w3.org/2000/svg"},cssPrfxs:["Webkit","Moz","O","ms","Khtml"],fncPrfxs:["webkit","moz","o","ms","khtml"],properties:DeviceAtlas.properties||{},getPropertiesAsString:function(){return this.propsCache},testCustomProperties:function(){var a= !1,b;for(b in c.properties)a=!0,h[b]=c.properties[b],m(b);a&&(n(),k(f))},getBattery:function(){return"undefined"===typeof this.battery?null:this.battery}},q="function"==typeof c.debug?c.debug:c.debug?console.log:function(){},f={},h={devicePixelRatio:function(){var a=1;try{a=d.devicePixelRatio}catch(b){}return a+""},"js.deviceOrientation":function(){return"js.deviceOrientation"in f?f["js.deviceOrientation"]:!1},deviceAspectRatio:function(){a:{var a="2/3 40/71 3/4 16/9 16/10 375/667 9/16 10/16".split(" "); if("undefined"!=typeof d.matchMedia)for(var b in a)if(d.matchMedia("(device-aspect-ratio:"+a[b]+")").matches){a=a[b]+"";break a}a=null}return a},"js.webGlRenderer":function(){if(!d.CanvasRenderingContext2D)return null;var a=g.createElement("canvas");a=a.getContext("webgl")||a.getContext("experimental-webgl");if(!a)return null;var b=a.getExtension("WEBGL_debug_renderer_info");return b&&(a=a.getParameter(b.UNMASKED_RENDERER_WEBGL))?a:null}},m=function(a){try{var b=h[a]()}catch(e){q(e)}null!=b&&"undefined"!= typeof b&&p(a,b)},p=function(a,b){if(-1!=a.indexOf(".")){var e=a.split(".");"undefined"==typeof c[e[0]]&&(c[e[0]]={});c[e[0]][e[1]]=b}else c[a]=b;f[a]=b},k=function(a){a="undefined"==typeof l.cookieEnabled&&"string"==typeof g.cookie?!0:!!l.cookieEnabled;if(a){a=new Date;a.setDate(a.getDate()+c.cookieExpiryDays);var b="";null!=c.cookieDomain&&(b=";domain="+c.cookieDomain);g.cookie=c.cookieName+'="'+c.propsCache+'";expires='+a.toUTCString()+";path="+c.cookiePath+b}},n=function(){var a=f;var b="",e; for(e in a){var d=a[e];d="boolean"==typeof d?"b":"number"==typeof d?"i":"s";b+=d+e+":"+("b"==d?a[e]+0:a[e])+"|"}a=b.slice(0,-1);c.propsCache=a};(function(){if(d.addEventListener&&d.removeEventListener){var a=function(b){null!=b&&null!=b.alpha&&(p("js.deviceOrientation",!0),k(f));d.removeEventListener("deviceorientation",a,!1)};d.addEventListener("deviceorientation",a,!1)}})();(function(){for(var a in h)m(a)})();n();k(f);return c}(window,document,navigator);DeviceAtlas.testCustomProperties();

var loadProbtn = function (jQuery) {

    //probtn.js
	/*global _comma_separated_list_of_variables_*/

	/// <reference path="libs/jquery.js" />

	function probtn_callPlayer(frame_id, func, args) {
	  var player;
	  if ((func === null) || (func === undefined)) {
	    func = "playVideo";
	  }
	  var youtube_command = window.JSON.stringify({
	    event: "command",
	    func: func
	  });

	  try {
	    player = document.getElementById(frame_id);
	    console.log("probtn_callPlayer", frame_id, func, args);
	    player.contentWindow.postMessage(youtube_command, 'https://www.youtube.com');
	  } catch (ex) {
	    console.log(ex);
	  }
	}

	/**
	 * function to add tracking link (using image) when code added to page
	 * @return {[type]} [description]
	 */
	function probtn_initTrackingLinkTest() {
	  var randomString = function (length) {
	    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
	  };
	  try {
	    var addLink = function (link) {
	      var trackingImage = window.top.document.createElement('img');
	      trackingImage.id = "probtn_includepb_tracking_image";
	      trackingImage.alt = "probtn_includepb_tracking_image";
	      trackingImage.src = link;
	      trackingImage.style.cssText = "position: absolute; top:-11111px; left: -11111px; width: 1px; height: 1px;";
	      document.body.appendChild(trackingImage);
	    };

	    var domain = document.domain.replace("www.", "");
	    var link = "";

	    if ((domain === "m.babyblog.ru") || (domain === "babyblog.ru")) {
	      link = "https://goo.gl/nktfPO?probtn_random=" + randomString(12);
	      //addLink(link);
	    }

	    try {
	      var probtn_additional_params = document.getElementById("probtn_additional_params");
	      if (probtn_additional_params !== null) {
	        var textData = JSON.parse(probtn_additional_params.innerHTML);
	        if (textData.domain !== undefined) {
	          domain = textData.domain;
	        }

	        if (domain === "getintent_dsp") {
	          link = "https://goo.gl/N7JUcj?probtn_random=" + randomString(12);
	          addLink(link);
	        }
	      }
	    } catch (ex) {
	      console.log(ex);
	    }
	  } catch (ex) {
	  }
	}

	probtn_initTrackingLinkTest();


	(function ($) {
	  //'use strict';
	  
	/**
	 * UAParser.js v0.7.17
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */

	(function (window, undefined) {

	    'use strict';

	    //////////////
	    // Constants
	    /////////////


	    var LIBVERSION  = '0.7.17',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major', // deprecated
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded';


	    ///////////
	    // Helper
	    //////////


	    var util = {
	        extend : function (regexes, extensions) {
	            var margedRegexes = {};
	            for (var i in regexes) {
	                if (extensions[i] && extensions[i].length % 2 === 0) {
	                    margedRegexes[i] = extensions[i].concat(regexes[i]);
	                } else {
	                    margedRegexes[i] = regexes[i];
	                }
	            }
	            return margedRegexes;
	        },
	        has : function (str1, str2) {
	          if (typeof str1 === "string") {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	          } else {
	            return false;
	          }
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        },
	        major : function (version) {
	            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
	        },
	        trim : function (str) {
	          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	        }
	    };


	    ///////////////
	    // Map helper
	    //////////////


	    var mapper = {

	        rgx : function (ua, arrays) {

	            //var result = {},
	            var i = 0, j, k, p, q, matches, match;//, args = arguments;

	            /*// construct object barebones
	            for (p = 0; p < args[1].length; p++) {
	                q = args[1][p];
	                result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
	            }*/

	            // loop through all regexes maps
	            while (i < arrays.length && !matches) {

	                var regex = arrays[i],       // even sequence (0,2,4,..)
	                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
	                j = k = 0;

	                // try matching uastring with regexes
	                while (j < regex.length && !matches) {

	                    matches = regex[j++].exec(ua);

	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        this[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        this[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                this[q] = match ? match : undefined;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	            // console.log(this);
	            //return this;
	        },

	        str : function (str, map) {

	            for (var i in map) {
	                // check if array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };


	    ///////////////
	    // String map
	    //////////////


	    var maps = {

	        browser : {
	            oldsafari : {
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },

	        device : {
	            amazon : {
	                model : {
	                    'Fire Phone' : ['SD', 'KF']
	                }
	            },
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },

	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    '10'        : ['NT 6.4', 'NT 10.0'],
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };


	    //////////////
	    // Regex map
	    /////////////


	    var regexes = {

	        browser : [[

	            // Presto based
	            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
	            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
	            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
	            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
	            ], [NAME, VERSION], [

	            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
	            ], [[NAME, 'Opera Mini'], VERSION], [

	            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION], [

	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

	            // Webkit/KHTML based
	            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
	            ], [NAME, VERSION], [

	            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
	            ], [[NAME, 'IE'], VERSION], [

	            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
	            ], [NAME, VERSION], [

	            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
	            ], [[NAME, 'Yandex'], VERSION], [

	            /(puffin)\/([\w\.]+)/i                                              // Puffin
	            ], [[NAME, 'Puffin'], VERSION], [

	            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
	                                                                                // UCBrowser
	            ], [[NAME, 'UCBrowser'], VERSION], [

	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
	            ], [[NAME, 'WeChat'], VERSION], [

	            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
	            ], [NAME, VERSION], [

	            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
	            ], [NAME, VERSION], [

	            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [

	            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
	            ], [VERSION, [NAME, 'Facebook']], [

	            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
	            ], [VERSION, [NAME, 'Chrome Headless']], [

	            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
	            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

	            /((?:oculus|samsung)browser)\/([\w\.]+)/i
	            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

	            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [

	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION], [

	            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION], [

	            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION], [

	            /(coast)\/([\w\.]+)/i                                               // Opera Coast
	            ], [[NAME, 'Opera Coast'], VERSION], [

	            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [

	            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [

	            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
	            ], [VERSION, NAME], [

	            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
	            ], [[NAME, 'GSA'], VERSION], [

	            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

	            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [

	            // Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i,                                            // Links
	            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
	            ], [NAME, VERSION]

	            /* /////////////////////
	            // Media players BEGIN
	            ////////////////////////

	            , [

	            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
	            /(coremedia) v((\d+)[\w\._]+)/i
	            ], [NAME, VERSION], [

	            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
	            ], [NAME, VERSION], [

	            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
	            ], [NAME, VERSION], [

	            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
	                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
	                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
	            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
	            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
	            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
	            ], [NAME, VERSION], [
	            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
	            ], [NAME, VERSION], [

	            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
	            ], [[NAME, 'Flip Player'], VERSION], [

	            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
	                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
	            ], [NAME], [

	            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
	                                                                                // Gstreamer
	            ], [NAME, VERSION], [

	            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
	            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
	                                                                                // Java/urllib/requests/wget/cURL
	            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
	            ], [NAME, VERSION], [

	            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
	                                                                                // MPlayer SVN
	            ], [NAME, VERSION], [

	            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
	            ], [NAME, VERSION], [

	            /(mplayer)/i,                                                       // MPlayer (no other info)
	            /(yourmuze)/i,                                                      // YourMuze
	            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
	            ], [NAME], [

	            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
	            ], [NAME, VERSION], [

	            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
	            ], [NAME, VERSION], [

	            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
	            ], [NAME, VERSION], [

	            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
	            /(winamp)\s((\d+)[\w\.-]+)/i,
	            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
	            ], [NAME, VERSION], [

	            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
	                                                                                // inlight radio
	            ], [NAME], [

	            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
	                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
	                                                                                // SoundTap/Totem/Stagefright/Streamium
	            ], [NAME, VERSION], [

	            /(smp)((\d+)[\d\.]+)/i                                              // SMP
	            ], [NAME, VERSION], [

	            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
	            /(vlc)\/((\d+)[\w\.-]+)/i,
	            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
	            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
	            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
	            ], [NAME, VERSION], [

	            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
	            /(windows-media-player)\/((\d+)[\w\.-]+)/i
	            ], [[NAME, /-/g, ' '], VERSION], [

	            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
	                                                                                // Windows Media Server
	            ], [VERSION, [NAME, 'Windows']], [

	            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
	            ], [NAME, VERSION], [

	            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
	            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
	            ], [[NAME, 'rad.io'], VERSION]

	            //////////////////////
	            // Media players END
	            ////////////////////*/

	        ],

	        cpu : [[

	            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
	            ], [[ARCHITECTURE, 'amd64']], [

	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [

	            /((?:i[346]|x)86)[;\)]/i                                            // IA32
	            ], [[ARCHITECTURE, 'ia32']], [

	            // PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i
	            ], [[ARCHITECTURE, 'arm']], [

	            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [

	            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]
	        ],

	        device : [[

	            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [

	            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

	            /(apple\s{0,1}tv)/i                                                 // Apple TV
	            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

	            /(archos)\s(gamepad2?)/i,                                           // Archos
	            /(hp).+(touchpad)/i,                                                // HP TouchPad
	            /(hp).+(tablet)/i,                                                  // HP Tablet
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
	            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

	            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
	            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
	            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

	            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
	                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
	            /(asus)-?(\w+)/i                                                    // Asus
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
	                                                                                // Asus Tablets
	            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
	            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

	            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
	            /(sony)?(?:sgp.+)\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
	            /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

	            /\s(ouya)\s/i,                                                      // Ouya
	            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

	            /android.+;\s(shield)\sbuild/i                                      // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

	            /(playstation\s[34portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

	            /(sprint\s(\w+))/i                                                  // Sprint Phones
	            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

	            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
	            /(zte)-(\w+)*/i,                                                    // ZTE
	            /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
	                                                                                // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

	            /(nexus\s9)/i                                                       // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

	            /d\/huawei([\w\s-]+)[;\)]/i,
	            /(nexus\s6p)/i                                                      // Huawei
	            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

	            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

	                                                                                // Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
	            /mot[\s-]?(\w+)*/i,
	            /(XT\d{3,4}) build\//i,
	            /(nexus\s6)/i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
	            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

	            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
	            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

	            /hbbtv.+maple;(\d+)/i
	            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

	            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
	            /((SM-T\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
	            /smart-tv.+(samsung)/i
	            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
	            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
	            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
	            /sec-((sgh\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

	            /sie-(\w+)*/i                                                       // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

	            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
	            /(nokia)[\s_-]?([\w-]+)*/i
	            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

	            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

	            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
	            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
	            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
	            /(lg) netcast\.tv/i                                                 // LG SmartTV
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
	            /(nexus\s[45])/i,                                                   // LG
	            /lg[e;\s\/-]+(\w+)*/i,
	            /android.+lg(\-?[\d\w]+)\s+build/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

	            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

	            /linux;.+((jolla));/i                                               // Jolla
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

	            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /crkey/i                                                            // Google Chromecast
	            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

	            /android.+;\s(glass)\s\d/i                                          // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

	            /android.+;\s(pixel c)\s/i                                          // Google Pixel C
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

	            /android.+;\s(pixel xl|pixel)\s/i                                   // Google Pixel
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

	            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
	            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
	            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,    // Xiaomi Mi
	            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i      // Redmi Phones
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
	            /android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i          // Mi Pad tablets
	            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
	            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu Tablet
	            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [

	            /android.+a000(1)\s+build/i                                         // OnePlus
	            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

	            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
	            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*(Venue[\d\s]*)\s+build/i                          // Dell Venue Tablets
	            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
	            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

	            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
	            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

	            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
	            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i                        // ZTE K Series Tablet
	            ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [

	            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

	            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
	            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

	            /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,
	            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i          // Dragon Touch Tablet
	            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

	            /android.+[;\/]\s*(NS-?.+)\s+build/i                                // Insignia Tablets
	            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*((NX|Next)-?.+)\s+build/i                         // NextBook Tablets
	            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
	            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

	            /android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i                     // LvTel Phones
	            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

	            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
	            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i             // Le Pan Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
	            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

	            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
	            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

	            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

	            /android.+(Gigaset)[\s\-]+(Q.+)\s+build/i                           // Gigaset Tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
	            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

	            /(android.+)[;\/].+build/i                                          // Generic Android Device
	            ], [MODEL, [VENDOR, 'Generic']]


	        /*//////////////////////////
	            // TODO: move to string map
	            ////////////////////////////

	            /(C6603)/i                                                          // Sony Xperia Z C6603
	            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	            /(C6903)/i                                                          // Sony Xperia Z 1
	            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

	            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
	            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
	            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
	            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
	            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
	            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
	            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
	            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

	            /(T3C)/i                                                            // Advan Vandroid T3C
	            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
	            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
	            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

	            /(V972M)/i                                                          // ZTE V972M
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

	            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
	            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
	            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

	            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
	            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

	            /////////////
	            // END TODO
	            ///////////*/

	        ],

	        engine : [[

	            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows based
	            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
	            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
	            /linux;.+(sailfish);/i                                              // Sailfish OS
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION], [
	            /\((series40);/i                                                    // Series 40
	            ], [NAME], [
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [

	            // Console
	            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [

	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [

	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[

	            /(haiku)\s(\w+)/i                                                  // Haiku
	            ], [NAME, VERSION],[

	            /cfnetwork\/.+darwin/i,
	            /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i                 // iOS
	            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
	            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	            // Other
	            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };


	    /////////////////
	    // Constructor
	    ////////////////
	    /*
	    var Browser = function (name, version) {
	        this[NAME] = name;
	        this[VERSION] = version;
	    };
	    var CPU = function (arch) {
	        this[ARCHITECTURE] = arch;
	    };
	    var Device = function (vendor, model, type) {
	        this[VENDOR] = vendor;
	        this[MODEL] = model;
	        this[TYPE] = type;
	    };
	    var Engine = Browser;
	    var OS = Browser;
	    */
	    var UAParser = function (uastring, extensions) {

	        if (typeof uastring === 'object') {
	            extensions = uastring;
	            uastring = undefined;
	        }

	        if (!(this instanceof UAParser)) {
	            return new UAParser(uastring, extensions).getResult();
	        }

	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
	        //var browser = new Browser();
	        //var cpu = new CPU();
	        //var device = new Device();
	        //var engine = new Engine();
	        //var os = new OS();

	        this.getBrowser = function () {
	            var browser = { name: undefined, version: undefined };
	            mapper.rgx.call(browser, ua, rgxmap.browser);
	            browser.major = util.major(browser.version); // deprecated
	            return browser;
	        };
	        this.getCPU = function () {
	            var cpu = { architecture: undefined };
	            mapper.rgx.call(cpu, ua, rgxmap.cpu);
	            return cpu;
	        };
	        this.getDevice = function () {
	            var device = { vendor: undefined, model: undefined, type: undefined };
	            mapper.rgx.call(device, ua, rgxmap.device);
	            return device;
	        };
	        this.getEngine = function () {
	            var engine = { name: undefined, version: undefined };
	            mapper.rgx.call(engine, ua, rgxmap.engine);
	            return engine;
	        };
	        this.getOS = function () {
	            var os = { name: undefined, version: undefined };
	            mapper.rgx.call(os, ua, rgxmap.os);
	            return os;
	        };
	        this.getResult = function () {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            //browser = new Browser();
	            //cpu = new CPU();
	            //device = new Device();
	            //engine = new Engine();
	            //os = new OS();
	            return this;
	        };
	        return this;
	    };

	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER = {
	        NAME    : NAME,
	        MAJOR   : MAJOR, // deprecated
	        VERSION : VERSION
	    };
	    UAParser.CPU = {
	        ARCHITECTURE : ARCHITECTURE
	    };
	    UAParser.DEVICE = {
	        MODEL   : MODEL,
	        VENDOR  : VENDOR,
	        TYPE    : TYPE,
	        CONSOLE : CONSOLE,
	        MOBILE  : MOBILE,
	        SMARTTV : SMARTTV,
	        TABLET  : TABLET,
	        WEARABLE: WEARABLE,
	        EMBEDDED: EMBEDDED
	    };
	    UAParser.ENGINE = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    UAParser.OS = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    //UAParser.Utils = util;

	    ///////////
	    // Export
	    //////////

	    window.UAParser = UAParser;

	    // jQuery/Zepto specific (optional)
	    // Note:
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = window && (window.jQuery || window.Zepto);
	    if (typeof $ !== UNDEF_TYPE) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function () {
	            return parser.getUA();
	        };
	        $.ua.set = function (uastring) {
	            parser.setUA(uastring);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }

	})(typeof window === 'object' ? window : this);

	  //load nessesary libraries and show button
	  $.fn.StartButton = function (options) {

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

	    /**
	     * Main object which include all nessesary functions for button functionality and params
	     * @type {Object}
	     */
	    var ProBtnControl;
	    ProBtnControl = {
	      guidCookieControlPath: "https://cdn.probtn.com/cookie_iframe/cookie-iframe.html",
	      //guidCookieControlPath: "https://probtnlandings1.azurewebsites.net/cookie-iframe.html",
	      uaParserPath: 'https://cdn.probtn.com/libs/ua-parser.js',
	      atlasPath: 'https://cdn.probtn.com/libs/atlas.js',
	      currentDomain: document.domain.replace("www.", ""),
	      realDomain: document.domain.replace("www.", ""),
	      initializedActiveZones: {},
	      //curent app version
	      mainVersion: "1.40.1814_02112017_dev",
	      DeviceCID_log: "none",
	      hintText: undefined, //hinttext object with additional functions
	      pizzabtn: undefined,
	      pizzabtnImg: undefined,
	      wrapper: undefined,
	      additionalItemsContainer: undefined,
	      closebutton: undefined,
	      overlaped: false,
	      buttonMainParams: {
	        isEmpty: true,
	        hidden: false
	      },
	      /**
	       * status about loaded additional libs
	       * @type {Object}
	       */
	      loadedStatus: {
	        postscribe: false
	      },
	      closed: false, //is button closed
	      //movedFirstTime: false, 
	      once_moved: false, //is button was moved first time or not. False - button yet wasn't moved
	      onButtonTapCountCheck: 0,
	      /**
	       * main function called after button tap or active zone interaction
	       * @param  {[string]} currentContentURL - current url (or js code) to show on button click
	       * @param  {[type]} areaName
	       * @param  {[type]} currentButtonContentType
	       * @return {[type]}
	       */
	      onButtonTap: function (currentContentURL, areaName, currentButtonContentType) {
	        if (ProBtnControl.params.Debug) console.log("onButtonTap");
	        window.probtn_button_tap = true;

	        var lookoutParams = ProBtnControl.params.isAnimation.split('_');
	        if ((lookoutParams[0].toLowerCase() === "lookoutAndOut".toLowerCase()) || (lookoutParams[0].toLowerCase() === "forwardAndStop".toLowerCase())) {

	          if ((lookoutParams[0].toLowerCase() === "forwardAndStop".toLowerCase())) {
	            ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	              message: "probtn_forwardAndStop_stop",
	              data: ProBtnControl.pizzabtn.position()
	            });
	          }

	          if ($.fancybox.isOpen) {
	            //console.log("$.fancybox.isOpen", $.fancybox.isOpen);
	            ProBtnControl.additionalButtonFunctions.hideAll();
	            $.fancybox.close();

	            return;
	          }
	        }
	        ;

	        try {
	          if (ProBtnControl.lookOutTimeout !== undefined) {
	            //console.log("ProBtnControl.lookOutTimeout", ProBtnControl.lookOutTimeout);
	            ProBtnControl.pizzabtn.stop(true, false);
	            clearTimeout(ProBtnControl.lookOutTimeout);
	          }
	          if (ProBtnControl.lookOutTimeout2 !== undefined) {
	            ProBtnControl.pizzabtn.stop(true, false);
	            clearTimeout(ProBtnControl.lookOutTimeout2);
	          }
	        } catch (ex) {
	          console.log(ex);
	        }

	        if ((ProBtnControl.params.MainButtonClickable === false) && (ProBtnControl.params.ButtonType !== "menu")) {
	          if (ProBtnControl.params.Debug) {
	            console.log("ProBtnControl.params.ActiveZoneMainButtonClickEnabled " + ProBtnControl.params.MainButtonClickable);
	          }
	          if ((areaName === "") || (areaName === null) || areaName === undefined) {
	            if (ProBtnControl.params.Debug) {
	              console.log("areaname empty");
	            }
	            return;
	          }
	        }

	        if ((currentContentURL !== null) && (currentContentURL !== undefined) && (currentContentURL !== "")) {
	        } else {
	          currentContentURL = ProBtnControl.params.ContentURL;
	        }

	        if (ProBtnControl.params.ButtonType === "button_and_scroll_zones") {
	          if ((ProBtnControl.params.currentContentURL !== "") && (ProBtnControl.params.currentContentURL !== null) && (ProBtnControl.params.currentContentURL !== undefined)) {
	            currentContentURL = ProBtnControl.params.currentContentURL;
	          }

	          if ((ProBtnControl.params.currentButtonContentType !== "") && (ProBtnControl.params.currentButtonContentType !== null) && (ProBtnControl.params.currentButtonContentType !== undefined)) {
	            currentButtonContentType = ProBtnControl.params.currentButtonContentType;
	          }

	          areaName = ProBtnControl.params.currentAreaName;
	        }

	        if ((areaName !== "") && (areaName !== null) && (areaName !== undefined)) {
	          ProBtnControl.params.currentAreaName = areaName;
	        }

	        //add random get params and utm params, if nessesary
	        currentContentURL = ProBtnControl.additionalButtonFunctions.replaceRandom(currentContentURL);
	        currentContentURL = ProBtnControl.additionalButtonFunctions.replaceDeviceUID(currentContentURL);
	        currentContentURL = ProBtnControl.additionalButtonFunctions.replaceDeviceCUID(currentContentURL);
	        currentContentURL = ProBtnControl.additionalButtonFunctions.getContentUrlWithUtm(currentContentURL);

	        if ((currentButtonContentType !== null) && (currentButtonContentType !== undefined) && (currentButtonContentType !== "")) {
	        } else {
	          currentButtonContentType = ProBtnControl.params.ButtonContentType;

	          //init menu mode
	          if (ProBtnControl.params.ButtonType === "menu") {
	            if ($("#probtn_menu_ul").length > 0) {
	              ProBtnControl.initFunctions.initRemoveMenu();
	            } else {
	              ProBtnControl.initFunctions.initFloatingMenu();
	              return;
	            }
	          }
	        }

	        //TODO: refactor function and add elements for different types in separate functions
	        if (ProBtnControl.params.ButtonType == "js") {
	          var waitForPostscribe = setInterval(function () {
	            if (ProBtnControl.loadedStatus.postscribe) {
	              clearInterval(waitForPostscribe);

	              var current_block_id = ProBtnControl.additionalButtonFunctions.randomString(12);
	              var code_block = $('<div/>', {
	                id: current_block_id,
	                css: {
	                  display: 'none'
	                }
	              }).prependTo(ProBtnControl.additionalItemsContainer);

	              postscribe("#" + current_block_id, '' + ProBtnControl.params.ContentURL + '');

	            } else {

	            }
	          }, 100);
	          return;
	        }

	        //TODO: refactor function and add elements for different types in separate functions
	        if (((ProBtnControl.params.ButtonType === "expansionButton") || (ProBtnControl.params.ButtonType === "expansionVideo")) && (ProBtnControl.onButtonTapCountCheck === 0)) {

	          ProBtnControl.onButtonTapCountCheck++;
	          $.pep.toggleAll(false);
	          ProBtnControl.pizzabtn.stop(true, true);

	          var newWidth = ProBtnControl.additionalButtonFunctions.getWindowWidth() - 20;
	          var newHeight = ProBtnControl.additionalButtonFunctions.getWindowHeight() - 20;

	          if (ProBtnControl.params.ButtonType === "expansionVideo") {
	            newHeight = newWidth * 0.5625;
	          }

	          var animationSizes = {
	            width: newWidth,
	            height: newHeight
	          };

	          $('head').append("<style type='text/css'> #pizzabtnImg { margin: 0px !important; } </style>");
	          $("body").addClass("probtn_disable_scroll");

	          var animationParams = {
	            duration: 1000,
	            step: function (s) {
	            },
	            complete: function () {

	              $(".fancybox-wrap").fadeIn();
	              $(".fancybox-overlay").fadeIn();

	              if (ProBtnControl.params.ButtonType === "expansionVideo") {
	                //remove iframe overlay to give user access to iframe control - for example to pause video, toggle sound and so on
	                $("#pizzabtnIframeOverlay").remove();
	              } else {
	                ProBtnControl.onButtonTap(ProBtnControl.params.ContentURL, "expansionButton", "iframe");
	              }
	            }
	          };

	          ProBtnControl.pizzabtn.css("left", "10px");
	          ProBtnControl.pizzabtn.css("top", "10px");

	          ProBtnControl.pizzabtn.css("width", newWidth);
	          ProBtnControl.pizzabtn.css("height", newHeight);


	          //animate button sizes
	          $("#pizzabtnImg").animate(animationSizes, animationParams);
	          return;
	        }

	        if (currentButtonContentType === "iframe") {
	          ProBtnControl.additionalButtonFunctions.sendMessageToParent("probtn_onbuttontap");

	          //check is protocol's correct to open page in iframe
	          if ((window.location.protocol === "https:") && (currentContentURL.split("/")[0] === "http:")) {
	            console.log("detected protocols mismatch");
	            currentButtonContentType = "anchor_external";
	          }
	        }

	        ProBtnControl.contentTime.startTimer();
	        ProBtnControl.HpmdFunctions.expandHpmdTrack();

	        if (ProBtnControl.additionalButtonFunctions.animation.animationRuning) {
	          ProBtnControl.additionalButtonFunctions.animation.doneAnimation();
	        }

	        //click for dfp
	        if (ProBtnControl.params.dfp.isDFP) {
	          try {
	            if (ProBtnControl.params.dfp.clickUrlEsc !== "") {
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

	        if (ProBtnControl.params.ButtonType !== "menu") {
	          //custom click
	          //TODO - put in function to prevent duplicates
	          if ((ProBtnControl.params.ClickCounterLink) && (ProBtnControl.params.ClickCounterLink !== "")) {
	            try {
	              ProBtnControl.statistics.createClickCounterImage(ProBtnControl.params.ClickCounterLink);
	            } catch (ex) {
	              if (ProBtnControl.params.Debug) console.log(ex);
	            }
	          }
	          ProBtnControl.statistics.callSuperPixelExt("ClickCounterLink");
	        }

	        ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	        });

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
	        };

	        var InitLeft = 0;
	        var InitTop = 0;
	        try {
	          if ($("#probtn_button").offset() !== undefined) {
	            InitLeft = $("#probtn_button").offset().left;
	            InitTop = $("#probtn_button").offset().top;
	          }
	        } catch (ex) {
	          console.log(ex);
	        }

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

	        var iframeLoadedSend = false;

	        var fancyboxParams = {
	          href: currentContentURL, //ProBtnControl.params.ContentURL,
	          sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
	          type: 'iframe',

	          parent: ProBtnControl.params.ButtonInjectPath,

	          autoCenter: true,
	          titlePosition: 'inside',
	          scrolling: 'yes',
	          margin: margins,
	          scrollOutside: true,
	          speedIn: 0, //1000
	          openSpeed: 100, //1000

	          closeMethod: ProBtnControl.params.FancyboxcloseMethod, //'perspectiveOut',
	          closeSpeed: ProBtnControl.params.FancyboxCloseSpeed, //3000,

	          //closeSpeed: 0,
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
	              //TODO: check and switch back to false
	              locked: true, //false
	              speedIn: 0,
	              speedOut: 0, // duration of fadeOut animation
	              showEarly: true // indicates if should be opened immediately or wait until the content is ready
	            },
	            title: {
	              type: 'inside'
	            }
	          },
	          beforeLoad: function () {
	            ProBtnControl.hintText.hide();

	            $(".fancybox-iframe").first().attr("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");

	            //lookOutAndOut position
	            try {
	              var lookoutParams = ProBtnControl.params.isAnimation.split('_');
	              var forwardAndStopParams = ProBtnControl.params.isAnimation.split('_');
	              var additionalMode = "";
	              try {
	                if ((forwardAndStopParams[3] !== null) && (forwardAndStopParams[3] !== undefined)) {
	                  additionalMode = forwardAndStopParams[3].toLowerCase();
	                }
	              } catch (ex) {
	              }
	              if ((lookoutParams[0] === "lookoutAndOut") || (additionalMode === "openmodal")) {
	              } else {
	                ProBtnControl.pizzabtn.css(positionObj.property, positionObj.finishValue);


	                if (positionObj.property == 'top') {
	                  ProBtnControl.pizzabtn.css('left', InitLeft + 'px');
	                } else {
	                  ProBtnControl.pizzabtn.css('top', InitTop + 'px');
	                }
	              }
	            } catch (ex) {
	              console.log(ex);
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
	          beforeShow: function () {
	            $("body").addClass("probtn_disable_scroll");
	            //send message inside iframe, that it's showed and ready
	            $(".fancybox-iframe").first().on('load', function () {
	              var frame_id = $(".fancybox-iframe").first().attr("id");
	              if ($("#" + frame_id).is("iframe")) {
	                try {
	                  var myIframe = document.getElementById(frame_id);
	                  if (myIframe.contentWindow !== null) {
	                    iframeLoadedSend = true;
	                    //console.log("iframe_showed_and_loaded");
	                    myIframe.contentWindow.postMessage({
	                      message: "iframe_showed_and_loaded"
	                    }, '*');
	                  }
	                } catch (ex) {

	                }
	              }

	              $(".fancybox-inner").addClass("opened");
	              //console.log('load the iframe');
	            });
	          },
	          afterShow: function () {
	            var pizzabtn_wrapper = ProBtnControl.wrapper;
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
	            ProBtnControl.additionalButtonFunctions.setIfameSizes();
	            ProBtnControl.pizzabtn.bind("click", $.fancybox.close);

	            var lookOutAndOut_right = 0;
	            //lookOutAndOut position
	            try {
	              var lookoutParams = ProBtnControl.params.isAnimation.split('_');
	              if (lookoutParams[0] === "lookoutAndOut") {

	                ProBtnControl.additionalButtonFunctions.MaximizeWrapper();

	                var side = "left";
	                if (lookoutParams[1] !== undefined) {
	                  side = lookoutParams[1];
	                }

	                var top_diff = 0;
	                var left_diff = 0;
	                if (lookoutParams[3] !== undefined) {
	                  top_diff = lookoutParams[3];
	                }
	                if (lookoutParams[4] !== undefined) {
	                  left_diff = lookoutParams[4];
	                }

	                if (side === "right") {
	                  var lookOutAndOut_right = $(".fancybox-wrap").position().left +
	                    $(".fancybox-wrap").width() - ProBtnControl.params.ButtonSize.W / 2;
	                  console.log("lookOutAndOut_right", lookOutAndOut_right);

	                  ProBtnControl.pizzabtn.css("transition", "0s !important");
	                  ProBtnControl.pizzabtn.stop(true, false);

	                  ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                    message: "probtn_lookoutandout_start"
	                  });
	                  ProBtnControl.pizzabtn.animate({
	                      left: (parseFloat(lookOutAndOut_right) + parseFloat(left_diff)),
	                      top: (parseFloat($(".fancybox-wrap").position().top) + parseFloat(top_diff))
	                    }, 3000,
	                    function () {
	                      setTimeout(ProBtnControl.additionalButtonFunctions.MinimizeWrapper(), 100);
	                      ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                        message: "probtn_lookoutandout_stop"
	                      });
	                    });

	                } else {
	                  ProBtnControl.pizzabtn.stop(true, false);

	                  var lookOutAndOut_left = $(".fancybox-wrap").position().left - ProBtnControl.params.ButtonSize.W / 2;

	                  ProBtnControl.pizzabtn.animate({
	                    left: (parseFloat(lookOutAndOut_left) + parseFloat(left_diff)),
	                    top: (parseFloat($(".fancybox-wrap").position().top) + parseFloat(top_diff))
	                  }, 3000, function () {
	                    setTimeout(ProBtnControl.additionalButtonFunctions.MinimizeWrapper(), 100);
	                  });
	                }

	              } else {
	              }

	              var forwardAndStopParams = ProBtnControl.params.isAnimation.split('_');
	              var additionalMode = "";
	              try {
	                if ((forwardAndStopParams[3] !== null) && (forwardAndStopParams[3] !== undefined)) {
	                  additionalMode = forwardAndStopParams[3].toLowerCase();
	                }
	              } catch (ex) {
	              }
	              if (additionalMode === "openmodal") {
	                ProBtnControl.additionalButtonFunctions.MaximizeWrapper();

	                lookOutAndOut_right = $(".fancybox-wrap").position().left +
	                  $(".fancybox-wrap").width() - ProBtnControl.params.ButtonSize.W / 2;
	                console.log("lookOutAndOut_right", lookOutAndOut_right);

	                ProBtnControl.pizzabtn.css("transition", "0s !important");
	                ProBtnControl.pizzabtn.stop(true, false);

	                ProBtnControl.pizzabtn.animate({
	                    //left: (parseFloat(lookOutAndOut_right) + parseFloat(left_diff)),
	                    top: parseFloat($(".fancybox-wrap").position().top + $(".fancybox-wrap").height())
	                  }, 3000,
	                  function () {
	                    setTimeout(ProBtnControl.additionalButtonFunctions.MinimizeWrapper(), 100);
	                    /*ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                                            message: "probtn_lookoutandout_stop"
	                                        });*/
	                  });
	              }
	            } catch (ex) {
	              console.log(ex);
	            }

	            if (currentButtonContentType === "video") {
	              ProBtnControl.additionalButtonFunctions.onOrientationChange(null);
	              try {
	                var video;
	                if ((areaName !== null) && (areaName !== undefined)) {
	                  try {
	                    video = $("#video_probtn_" + areaName).get(0);
	                    video.play();
	                  } catch (ex) {
	                    console.log("video error1", ex);
	                  }
	                } else {
	                  video = $("#video_probtn").get(0);
	                  video.play();
	                }
	              } catch (ex) {
	                if (ProBtnControl.params.Debug) {
	                  console.log(ex);
	                }
	              }
	            }

	            if (iframeLoadedSend === false) {
	              iframeLoadedSend = true;

	              //var frame_id = $(".fancybox-iframe").first().attr("id");
	              if ($("#" + frame_id).is("iframe")) {
	                try {
	                  var myIframe = document.getElementById(frame_id);
	                  if (myIframe.contentWindow !== null) {
	                    iframeLoadedSend = true;
	                    //console.log("iframe_showed_and_loaded");
	                    myIframe.contentWindow.postMessage({
	                      message: "iframe_showed_and_loaded"
	                    }, '*');
	                  }
	                } catch (ex) {

	                }
	              }
	            }
	          },
	          afterClose: function () {
	            $("body").removeClass("probtn_disable_scroll");
	            if (currentButtonContentType === "video") {
	              try {
	                var video;
	                if ((areaName !== null) && (areaName !== undefined)) {
	                  video = $("#video_probtn_" + areaName).get(0);
	                  video.pause();
	                } else {
	                  video = $("#video_probtn").get(0);
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

	            if (ProBtnControl.params.HideAfterFirstShow === true) {
	              ProBtnControl.additionalButtonFunctions.hideAll();
	            }
	            if (lookoutParams[0] === "lookoutAndOut") {
	              console.log("hide if lookoutAndOut");
	              ProBtnControl.additionalButtonFunctions.hideAll();
	              //$.fancybox.close();
	            }

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
	              console.log("fancyboxParams.href", fancyboxParams.href);
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

	        var outVendorText = '';
	        if (ProBtnControl.params.Debug === true) {
	          outVendorText = ProBtnControl.params.VendorText + " " + ProBtnControl.mainVersion;
	        } else {
	          outVendorText = ProBtnControl.params.VendorText;
	        }

	        if ((outVendorText !== "") && (outVendorText !== " ") && (ProBtnControl.params.ButtonEnabled === true) && (ProBtnControl.params.ButtonVisible === true)) {
	          fancyboxParams.title = ProBtnControl.additionalButtonFunctions.getTitleTextForModalWindow();
	          fancyboxParams.titleShow = true;
	        }

	        if (ProBtnControl.params.IsManualSize === true) {
	          fancyboxParams.width = ProBtnControl.params.ContentSize.X;
	          fancyboxParams.height = ProBtnControl.params.ContentSize.Y;

	          //TODO - check
	          if (ProBtnControl.params.ContentSize.X.indexOf('%') !== -1) {
	            fancyboxParams.width = window.innerWidth * (parseFloat(ProBtnControl.params.ContentSize.X) / 100);
	          } else {
	            fancyboxParams.width = ProBtnControl.params.ContentSize.X;
	          }

	          if (ProBtnControl.params.ContentSize.Y.indexOf('-') !== -1) {
	            //console.log("fancyboxParams.width", fancyboxParams.width);
	            fancyboxParams.height = fancyboxParams.width * Math.abs(ProBtnControl.params.ContentSize.H);
	            //console.log("fancyboxParams.height", fancyboxParams.height, ProBtnControl.params.ContentSize.H, ProBtnControl.params.ContentSize);
	            if (fancyboxParams.height > (window.innerHeight - ProBtnControl.pizzabtn.height())) {
	              fancyboxParams.height = window.innerHeight - ProBtnControl.pizzabtn.height();
	              fancyboxParams.width = fancyboxParams.height / Math.abs(ProBtnControl.params.ContentSize.H);
	            }
	          } else {
	            if (ProBtnControl.params.ContentSize.Y.indexOf('%') !== -1) {
	              fancyboxParams.height = window.innerHeight * (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
	            } else {
	              fancyboxParams.height = ProBtnControl.params.ContentSize.Y;
	            }
	          }
	          //fancyboxParams.autoScale = false;
	        } else {
	          //if IsManualSize is false, we set sizes in px
	          fancyboxParams.width = ProBtnControl.params.ContentSize.W;
	          fancyboxParams.height = ProBtnControl.params.ContentSize.H;
	        }
	        if (ProBtnControl.params.MaxWidth > 0) {
	          fancyboxParams.maxWidth = ProBtnControl.params.MaxWidth;
	        }
	        if (ProBtnControl.params.MaxHeight > 0) {
	          fancyboxParams.maxHeight = ProBtnControl.params.MaxHeight;
	        }

	        var hideButtonAfterFirstShow = function () {
	          if (ProBtnControl.params.HideAfterFirstShow === true) {
	            ProBtnControl.statistics.SendStatObject({
	              //"Closed": 1,
	              "Hidded": 1
	            });
	            ProBtnControl.pizzabtn.hide();
	            ProBtnControl.closeButton.remove();
	            ProBtnControl.additionalButtonFunctions.hideAllActiveZones();
	          }
	        };

	        if ((ProBtnControl.params.OpenExternal === true) || (currentButtonContentType === "anchor_external")) {

	          ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
	          $.pep.toggleAll(true);
	          window.open(currentContentURL, '_blank');
	          ProBtnControl.additionalButtonFunctions.MinimizeWrapper(function () {
	          });

	          hideButtonAfterFirstShow();

	        } else {
	          if (currentButtonContentType === "anchor") {
	            if (currentContentURL.charAt(0) === "#") {
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
	              try {

	                var additionalMode = "";
	                if ((lookoutParams[3] !== null) && (lookoutParams[3] !== undefined)) {
	                  additionalMode = lookoutParams[3].toLowerCase();
	                }

	                if ((lookoutParams[0] === "lookoutAndOut") || (additionalMode.toLowerCase() === "openmodal")) {
	                } else {
	                  ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
	                }
	              } catch (ex) {
	                ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
	              }
	            }

	            var pizzabtn_wrapper = ProBtnControl.wrapper;
	            var opts = {
	              width: ProBtnControl.additionalButtonFunctions.getWindowWidth(),
	              height: ProBtnControl.additionalButtonFunctions.getWindowHeight(),
	              position: "fixed"
	            };
	            pizzabtn_wrapper.css(opts);

	            $.fancybox.open(fancyboxParams);
	          }
	        }
	      },

	      //dropedActiveZone: null,
	      /**
	       * Timer control functions
	       * @type {Object}
	       */
	      contentTime: {
	        /**
	         * Different timer types
	         * @type {Object}
	         */
	        timeValue: {
	          "ContentShowedDuration": 0,
	          "MovedDuration": 0
	        },
	        contentOpenedTime: 0,
	        movedTime: 0, //button moved duration
	        startTimer: function (param) {
	          if ((param === null) || (param === undefined)) {
	            param = "ContentShowedDuration";
	          }

	          if (ProBtnControl.contentTime.intervalId[param] !== undefined) {
	            clearInterval(ProBtnControl.contentTime.intervalId[param]);
	          } else {
	          }
	          ProBtnControl.contentTime.timeValue[param] = 0;

	          ProBtnControl.contentTime.intervalId[param] = setInterval(function () {
	            ProBtnControl.contentTime.timeValue[param]++;
	          }, 1000);
	        },
	        endTimer: function (param) {
	          if ((param === null) || (param === undefined)) {
	            param = "ContentShowedDuration";
	          }

	          clearInterval(ProBtnControl.contentTime.intervalId[param]);
	          ProBtnControl.contentTime.intervalId[param] = undefined;

	          ProBtnControl.statistics.SendStatisticsData(param, ProBtnControl.contentTime.timeValue[param], "", function () {
	            if (((ProBtnControl.params.ActiveZones !== null) || (ProBtnControl.params.ActiveZones.length > 0)) && (ProBtnControl.params.ButtonType === "button_and_active_zones")) {
	              if (param === "ContentShowedDuration") {
	                ProBtnControl.params.currentAreaName = "";
	              }
	            }
	          });


	        },
	        intervalId: {
	          "ContentShowedDuration": undefined,
	          "MovedDuration": undefined
	        }
	      },
	      userData: {},
	      /**
	       * Geolocation functions
	       * @type {Object}
	       */
	      geolocation: {
	        checkPlaces: function (callback) {

	          //test coordinates
	          //ProBtnControl.geolocation.latitude = 57.58689;
	          //ProBtnControl.geolocation.longitude = 39.855294;

	          for (var i = 0; i < ProBtnControl.params.LocationPoints.length; i++) {
	            var item = ProBtnControl.params.LocationPoints[i];
	            var distance = ProBtnControl.geolocation.calculateDistance(ProBtnControl.geolocation.latitude, ProBtnControl.geolocation.longitude,
	              item.lat, item.lon);
	            //console.log("distance "+ item.name+ " "+distance, ProBtnControl.geolocation.position, item);
	            if (item.rad >= distance) {
	              console.log("In radius " + item.name + " " + distance, ProBtnControl.geolocation.position, item);
	              callback(true, item);
	              return;
	            }
	          }
	          callback(false, null);
	          return;
	        },
	        calculateDistance: function (lat1, lon1, lat2, lon2) {
	          // Converts numeric degrees to radians
	          function toRad(Value) {
	            return Value * Math.PI / 180;
	          }

	          var R = 6371; // km
	          var dLat = toRad(lat2 - lat1);
	          var dLon = toRad(lon2 - lon1);
	          var lat1 = toRad(lat1);
	          var lat2 = toRad(lat2);

	          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	          var d = R * c;
	          return d * 1000; //in meters
	        },
	        checkAndRunGeolocation: function (callback) {
	          if (ProBtnControl.params.UseGeoLocation === true) {
	            if (ProBtnControl.params.WaitForGeoLocation === true) {
	              ProBtnControl.geolocation.getLocation(function (position) {
	                ProBtnControl.geolocation.getPosition(position);
	                callback();
	              });
	            } else {
	              ProBtnControl.geolocation.getLocation(function (position) {
	                ProBtnControl.geolocation.getPosition(position);
	              });
	              callback();
	            }
	          } else {
	            callback();
	          }
	        },
	        getLocation: function (callback) {
	          try {
	            if (navigator.geolocation) {
	              navigator.geolocation.getCurrentPosition(callback); //ProBtnControl.geolocation.getPosition
	            } else {
	              if (ProBtnControl.params.Debug) {
	                console.log("Geolocation is not supported by this browser.");
	              }
	            }
	          } catch (ex) {
	            if (ProBtnControl.params.Debug) console.log(ex);
	          }
	        },
	        getPosition: function (position) {
	          try {
	            if (ProBtnControl.params.Debug) {
	              console.log("position", position);
	            }
	            ProBtnControl.geolocation.position = position;
	            ProBtnControl.geolocation.longitude = position.coords.longitude;
	            ProBtnControl.geolocation.latitude = position.coords.latitude;
	            //if (ProBtnControl.params.Debug) console.log(ex);
	          } catch (ex) {
	            if (ProBtnControl.params.Debug) console.log(ex);
	          }
	        },
	        position: {},
	        longitude: 0,
	        latitude: 0
	      },
	      //get user data - information about browser, os and so on
	      userDataFunction: function (callback) {
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
	          var clientStrings = [{
	            s: 'Windows 3.11',
	            r: /Win16/
	          }, {
	            s: 'Windows 95',
	            r: /(Windows 95|Win95|Windows_95)/
	          }, {
	            s: 'Windows ME',
	            r: /(Win 9x 4.90|Windows ME)/
	          }, {
	            s: 'Windows 98',
	            r: /(Windows 98|Win98)/
	          }, {
	            s: 'Windows CE',
	            r: /Windows CE/
	          }, {
	            s: 'Windows 2000',
	            r: /(Windows NT 5.0|Windows 2000)/
	          }, {
	            s: 'Windows XP',
	            r: /(Windows NT 5.1|Windows XP)/
	          }, {
	            s: 'Windows Server 2003',
	            r: /Windows NT 5.2/
	          }, {
	            s: 'Windows Vista',
	            r: /Windows NT 6.0/
	          }, {
	            s: 'Windows 7',
	            r: /(Windows 7|Windows NT 6.1)/
	          }, {
	            s: 'Windows 8.1',
	            r: /(Windows 8.1|Windows NT 6.3)/
	          }, {
	            s: 'Windows 8',
	            r: /(Windows 8|Windows NT 6.2)/
	          }, {
	            s: 'Windows NT 4.0',
	            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
	          }, {
	            s: 'Windows ME',
	            r: /Windows ME/
	          }, {
	            s: 'Android',
	            r: /Android/
	          }, {
	            s: 'Open BSD',
	            r: /OpenBSD/
	          }, {
	            s: 'Sun OS',
	            r: /SunOS/
	          }, {
	            s: 'Linux',
	            r: /(Linux|X11)/
	          }, {
	            s: 'iOS',
	            r: /(iPhone|iPad|iPod)/
	          }, {
	            s: 'Mac OS X',
	            r: /Mac OS X/
	          }, {
	            s: 'Mac OS',
	            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
	          }, {
	            s: 'QNX',
	            r: /QNX/
	          }, {
	            s: 'UNIX',
	            r: /UNIX/
	          }, {
	            s: 'BeOS',
	            r: /BeOS/
	          }, {
	            s: 'OS/2',
	            r: /OS\/2/
	          }, {
	            s: 'Search Bot',
	            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
	          }];

	          var osVersion = unknown;
	          try {
	            for (var id in clientStrings) {
	              var cs = clientStrings[id];
	              if (cs.r.test(nAgt)) {
	                os = cs.s;
	                break;
	              }
	            }

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

	          var isiPad = navigator.userAgent.match(/iPad/i) !== null;
	          var daProps = "";
	          if (typeof DeviceAtlas !== "undefined") {
	            daProps = DeviceAtlas.getPropertiesAsString();
	          }
	          
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
	            isiPad: isiPad,
	            retina: 1,
	            kbs: 0,
	            DAPROPS: daProps
	          };
	          ProBtnControl.userData = result;

	          callback(result);
	          return result;
	        } catch (ex) {
	          callback(undefined);
	          return undefined;
	        }
	      },
	      XProBtnToken: "b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b",
	      //main server url
	      serverUrl: "https://admin.probtn.com",
	      /**
	       * Get user unique id at current site (and create it if needed)
	       */
	      GetDeviceUID: function () {
	        var probtnId = "1234";
	        if (ProBtnControl.cookieFunctions.readCookie("probtnId") !== null) {
	        } else {
	          //set cookie
	          var currentdate = new Date();
	          currentdate = currentdate.getTime();
	          probtnId = currentdate.toString() + "-" + navigator.userAgent.toString().ProBtnHashCode();
	          ProBtnControl.cookieFunctions.createCookie("probtnId", probtnId, 365);
	        }
	        ProBtnControl.cookieFunctions.setHashCookie();
	        probtnId = ProBtnControl.cookieFunctions.readCookie("probtnId");
	        return probtnId;
	      },
	      DeviceCID: "",
	      cookieFunctions: {
	        getDeviceCID: function (callback) {
	          try {

	            /////////////////////////////////////////////////////////////////
	            //TODO remove this and use some regular function to get params
	            try {
	              if ($("#probtn_additional_params").length > 0) {
	                var textData = $("#probtn_additional_params").text();
	                textData = JSON.parse(textData);
	                //console.log("textData", textData);
	                if ((textData.useGuidIframe !== null) && (textData.useGuidIframe !== undefined) && (textData.useGuidIframe !== "")) {
	                  ProBtnControl.params.useGuidIframe = textData.useGuidIframe;
	                }
	              }
	            } catch (ex) {
	              if (ProBtnControl.params.Debug) console.log(ex);
	            }
	            //////////////////////////////////////////////////////////////////

	            ProBtnControl.statistics.callSuperPixelExt("getDeviceCID");
	            ProBtnControl.statistics.createClickCounterImage("https://goo.gl/SHW3J0");

	            var probtnCID = ProBtnControl.cookieFunctions.readCookie("probtnCID");

	            if (ProBtnControl.params.useGuidIframe === false) {
	              //if ((probtnCID !== null) && (probtnCID !== undefined) && (probtnCID !== "")) {
	              ProBtnControl.statistics.callSuperPixelExt("getDeviceCID0");
	              ProBtnControl.DeviceCID = probtnCID;
	              callback(probtnCID);
	              return;
	            }

	            //don't add if we are in offline mode
	            if (ProBtnControl.params.isServerCommunicationEnabled !== false) {
	              try {
	                ProBtnControl.statistics.callSuperPixelExt("getDeviceCID1");
	                $("#probtn_guidIframe").remove();

	                var isCordovaApp = !!window.cordova;
	                if (isCordovaApp) {
	                  ProBtnControl.statistics.callSuperPixelExt("getDeviceCID2");
	                  setTimeout(function () {
	                    var cookieName = "";
	                    var deviceCUID_item = {
	                      'type': 'probtnCID',
	                      'cid': cookieName
	                    };
	                    console.log("deviceCUID_item", deviceCUID_item);
	                    window.top.postMessage(deviceCUID_item, "*");
	                    window.postMessage(deviceCUID_item, "*");
	                  }, 500);
	                }

	                $("<iframe/>", {
	                  id: "probtn_guidIframe",
	                  scrolling: 'no',
	                  'seamless': "seamless",
	                  src: ProBtnControl.guidCookieControlPath,
	                  css: {
	                    'width': "0px",
	                    'height': "0px",
	                    'position': 'absolute',
	                    'top': '-10000px',
	                    'left': '-10000px'
	                  }
	                }).appendTo("body");
	                ProBtnControl.statistics.callSuperPixelExt("getDeviceCID3");
	              } catch (ex) {
	                try {
	                  ProBtnControl.statistics.callSuperPixelExt("getDeviceCID4" + ex);
	                  var cookieName = "";
	                  var deviceCUID_item = {
	                    'type': 'probtnCID',
	                    'cid': cookieName
	                  };
	                  window.top.postMessage(deviceCUID_item, "*");
	                  window.postMessage(deviceCUID_item, "*");
	                } catch (ex1) {
	                  ProBtnControl.statistics.callSuperPixelExt("getDeviceCID5_" + ex1);
	                }
	              }
	            }

	            //console.log("ProBtnControl.params.useGuidIframe", ProBtnControl.params.useGuidIframe);
	            if (ProBtnControl.params.useGuidIframe === true) {
	              if (ProBtnControl.params.isServerCommunicationEnabled !== false) {
	                var recievedMessage = false;
	                var receiveMessage = function (event) {
	                  //console.log("DeviceCID event", event);
	                  try {
	                    if ((event.data.type !== undefined) && (event.data.type !== null) && (event.data.type === "probtnCID") && ((event.origin === "https://cdn.probtn.com") || (event.origin === "http://cdn.probtn.com")) && (recievedMessage === false)) {
	                      recievedMessage = true;

	                      ProBtnControl.statistics.callSuperPixelExt("getDeviceCID6_6");
	                      ProBtnControl.DeviceCID_log = JSON.stringify(event.data);

	                      ProBtnControl.cookieFunctions.createCookie("probtnCID", event.data.cid, 365);
	                      ProBtnControl.DeviceCID = event.data.cid;
	                      callback(event.data.cid);
	                    } else {
	                    }
	                  } catch (ex) {
	                    ProBtnControl.statistics.callSuperPixelExt("getDeviceCID6_ex_" + ex);
	                  }
	                };
	                setTimeout(function () {
	                  if (!recievedMessage) {
	                    ProBtnControl.statistics.callSuperPixelExt("getDeviceCID6_timeout");
	                    recievedMessage = true;
	                    callback(null);
	                  }
	                }, 500);//wait for 3000ms
	                window.window.addEventListener("message", receiveMessage, false);
	              } else {
	                ProBtnControl.statistics.callSuperPixelExt("getDeviceCID7");
	                callback(null);
	              }
	            } else {
	              callback(null);
	            }
	          } catch (ex) {
	            ProBtnControl.statistics.callSuperPixelExt("getDeviceCID8");
	            callback(null);
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
	              ProBtnControl.params.hpmd.trackEvent("hpmd.time-expanded", {
	                weight: ProBtnControl.contentTime.contentOpenedTime
	              });
	            } catch (ex) {
	            }
	          }
	        },
	        expandHpmdTrack: function () {
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
	      /**
	       * Collection of statistics function
	       * @type {Object}
	       */
	      statistics: {
	        /**
	         * Check is adBlock active at current page.
	         * At current moment not useful, case cdn.probtn.com added to black list
	         * @return {[type]} [description]
	         */
	        checkAdBlock: function () {
	          try {
	            $.ajax({
	              url: "https://cdn.probtn.com/showads.js", // this is just an empty js file
	              dataType: "javascript",
	              success: function (data) {
	                console.log("Success:", data);
	              }
	            }).fail(function (xhr) {
	              if (xhr.status === 0) {
	                ProBtnControl.statistics.SendStatisticsData("performedAction", "adBlockDetected");
	                console.log("probtn.js - adBlock detected");
	              }
	            });
	          } catch (ex) {
	            console.log("ex", ex);
	          }
	        },
	        //create probtn_events event with data same as we send to admin.probtn.com
	        createEventHandler: function (data) {
	          try {
	            var event = document.createEvent('Event');
	            event.initEvent('probtn_events', true, true);
	            event.data = data;
	            document.dispatchEvent(event);
	          } catch (ex) {

	          }
	        },
	        prepareObjectForEventHandler: function (object) {
	          var result_object = {
	            AZName: "",
	            Statistic: []
	          };
	          try {
	            if ((object !== null) && (object !== "") && (object !== undefined)) {
	              for (var k in object) {
	                if (object.hasOwnProperty(k)) {
	                  var item = {};
	                  item.value = object[k];
	                  item.name = k;
	                  result_object.Statistic.push(item);
	                }
	              }
	            }
	          } catch (ex) {

	          }
	          return result_object;
	        },
	        callSuperPixel: function () {
	          try {
	            var superPixelPath = "https://pixel.probtn.com/1/from-ref";
	            ProBtnControl.statistics.createClickCounterImage(superPixelPath);
	          } catch (ex) {
	          }
	        },
	        callSuperPixelExt: function (param) {
	          try {
	            //console.log("callSuperPixelExt " + param);
	            var domain = "";
	            var probtn_additional_params = document.getElementById("probtn_additional_params");
	            if (probtn_additional_params !== null) {
	              var textData = JSON.parse(probtn_additional_params.innerHTML);
	              if (textData.domain !== undefined) {
	                domain = textData.domain;
	              }
	            }

	            if ((ProBtnControl.currentDomain === "getintent_dsp") || (domain === "getintent_dsp")) {
	              var probtnId = "1234";
	              probtnId = ProBtnControl.GetDeviceUID();
	              var probtncid = ProBtnControl.DeviceCID;


	              var superPixelPath = "https://pixel.probtn.com/1/from-ref?pbdebug=getintent&DeviceUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&daction=" + param;
	              ProBtnControl.statistics.createClickCounterImage(superPixelPath);
	            }
	          } catch (ex) {
	            console.log(ex);
	          }
	        },
	        /**
	         * Create image with tracking link
	         * @param  {[type]} clickPath - tracking image path
	         * @param  {[type]} name - specific name in format probtn_ClickCounterLink_NAME, if not set would be random
	         * @return {[type]}
	         */
	        createClickCounterImage: function (clickPath, name) {
	          try {
	            var clickCounterLink_random = clickPath;
	            clickCounterLink_random = ProBtnControl.additionalButtonFunctions.replaceRandom(clickPath);
	            if ((clickCounterLink_random === clickPath) && (clickPath !== ProBtnControl.params.TrackingLink)) {
	              clickCounterLink_random = ProBtnControl.additionalButtonFunctions.replaceUrlParam(clickCounterLink_random, 'probtn_random', ProBtnControl.additionalButtonFunctions.randomString(12));
	            }

	            var prependBlock = ProBtnControl.additionalItemsContainer;
	            if ((ProBtnControl.additionalItemsContainer === null) && (ProBtnControl.additionalItemsContainer === undefined)) {
	              prependBlock = "body";
	            }
	            var currentName = ProBtnControl.additionalButtonFunctions.randomString(12);
	            if ((name !== null) && (name !== undefined)) {
	              currentName = name;
	            }
	            $("<img/>", {
	              id: "probtn_ClickCounterLink_" + currentName,
	              src: clickCounterLink_random,
	              style: 'width: 1px; height: 1px; position: absolute; left: -10001px; top: -10001px;'
	            }).prependTo(prependBlock);
	            //console.log("probtn_TrackingLink", probtn_TrackingLink);
	          } catch (ex) {
	            console.log(ex);
	          }

	        },
	        createStatisticsLink: function (path, additional_params, params_object) {
	          if ((path === undefined) || (path === null)) {
	            path = "updateUserStatistic";
	          }

	          var probtnId = "1234";
	          probtnId = ProBtnControl.GetDeviceUID();
	          var probtncid = ProBtnControl.DeviceCID;

	          var campaignId = "";
	          if ((ProBtnControl.params.CampaignID !== null) && (ProBtnControl.params.CampaignID !== undefined)) {
	            campaignId = "&CampaignID=" + ProBtnControl.params.CampaignID;
	          }

	          var AZName = "";
	          if ((ProBtnControl.params.currentAreaName !== null) && (ProBtnControl.params.currentAreaName !== undefined) && (ProBtnControl.params.currentAreaName !== "")) {
	            AZName = ProBtnControl.params.currentAreaName;
	          }

	          var referer = "";
	          if ((document.referrer !== null) && (document.referrer !== undefined)) {
	            referer = document.referrer;
	          }

	          var url = ProBtnControl.serverUrl + "/1/functions/" + path + "?BundleID=" + ProBtnControl.currentDomain + "&DeviceType=web" + campaignId + "&Version=" + ProBtnControl.mainVersion + "&AZName=" + AZName + "&log=" + ProBtnControl.DeviceCID_log + "&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + additional_params + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b" + "&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&ScreenResolutionX=" + ProBtnControl.userData.screenHeight + "&ScreenResolutionY=" +
	            ProBtnControl.userData.screenWidth + "&retina=" + ProBtnControl.userData.retina + "&ConnectionSpeed=" + ProBtnControl.userData.kbs + "&AdditionalTargetingParam=" + ProBtnControl.params.AdditionalTargetingParam +
	            "&OriginalReferer=" + referer +  "&DAPROPS=" + ProBtnControl.userData.DAPROPS + "&callback=?";

	          if ((params_object === null) || (params_object === undefined)) {
	            params_object = {
	              "additional_params": additional_params
	            };
	          } else {
	            ProBtnControl.statistics.createEventHandler(params_object);
	          }

	          return url;
	        },
	        //TODO:
	        //check AZName value - correct using of areaName
	        sendAreaActivatedStats: function (areaName, callback) {
	          if (ProBtnControl.params.isServerCommunicationEnabled) {
	            ProBtnControl.params.currentAreaName = areaName;
	            //"&AZName=" + areaName +
	            $.getJSON(ProBtnControl.statistics.createStatisticsLink("updateUserStatistic", "&Statistic=" + "{\"ContentShowed\": \"1\"}&", {
	                AZName: areaName,
	                Statistic: [{
	                  "name": "ContentShowed",
	                  "value": 1
	                }]
	              }),
	              function () {
	              }).always(function () {
	              if ((callback !== null) && (callback !== undefined)) {
	                callback();
	              }
	            });
	          }
	        },
	        //TODO refactoring - make universal function with azname stats sending
	        sendScrollAreaShowedStats: function (areaName, callback) {

	          if ($("#pizzabtnImg").is("iframe")) {
	            var myIframe = document.getElementById('pizzabtnImg');
	            myIframe.contentWindow.postMessage({
	              message: "probtn_page_scrollzone_changed",
	              name: areaName
	            }, '*');
	          }

	          if (ProBtnControl.params.isServerCommunicationEnabled) {
	            ProBtnControl.params.currentAreaName = areaName;

	            $.getJSON(ProBtnControl.statistics.createStatisticsLink("updateUserStatistic", "&Statistic=" + "{\"ScrollZoneShowed\": \"1\"}&", {
	                AZName: areaName,
	                Statistic: [{
	                  "name": "ScrollZoneShowed",
	                  "value": 1
	                }]
	              }),
	              function () {
	              }).done(function () {
	            }).fail(function () {
	            }).always(function () {
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
	        /**
	         * Function used to send "custom" statistics
	         * for example information about resolution, OS, browser, browser version
	         * This information would be rewriten by last resived data for deviceUID each time when it send to server
	         * @param {[type]} name          [description]
	         * @param {[type]} value         [description]
	         * @param {[type]} probtnId      [description]
	         * @param {[type]} currentDomain [description]
	         */
	        SendCustomStat: function (name, value) {
	          if (ProBtnControl.params.isServerCommunicationEnabled) {
	            //&AZName=areaName
	            $.getJSON(ProBtnControl.statistics.createStatisticsLink("updateUserStatistic", "&Statistic=" + "{\"" + name + "\": \"" + value + "\"}&", {
	                AZName: areaName,
	                Statistic: [{
	                  "name": name,
	                  "value": value
	                }]
	              }),
	              function () {
	              }).always(function () {
	              if ((callback !== null) && (callback !== undefined)) {
	                callback();
	              }
	            });
	          }
	        },
	        /**
	         * Send stats to probtn
	         * @param {[string]}   paramName - name for statistics parameter
	         * @param {[string]}   value - value of this parameter. Default is 1
	         * @param {[type]}   custom - if set to 1, this param and it's value will be send as custom stats
	         * @param {Function} callback
	         */
	        SendStatisticsData: function (paramName, value, custom, callback) {
	          if (ProBtnControl.params.isServerCommunicationEnabled) {

	            var probtnId = "1234";
	            probtnId = ProBtnControl.GetDeviceUID();
	            probtnId = ProBtnControl.DeviceCID;

	            if (paramName === "" || paramName === null) {
	              paramName = "Opened";
	            }
	            if (value === "" || value === null) {
	              value = 1;
	            }
	            if (custom === "" || custom === null || custom === undefined) {
	              ProBtnControl.statistics.SendStat(paramName, value, probtnId, ProBtnControl.currentDomain, callback);
	            } else {
	              ProBtnControl.statistics.SendCustomStat(paramName, value, probtnId, ProBtnControl.currentDomain, callback);
	            }
	          }
	        },
	        SendStat: function (name, value, probtnId, currentDomain, callback) {

	          ProBtnControl.statistics.callSuperPixelExt("SendStat");
	          //ProBtnControl.statistics.callSuperPixelExt('{"' + name + '": "' + value + '"}');
	          if (ProBtnControl.params.isServerCommunicationEnabled) {
	            var AZName = "";

	            if ((ProBtnControl.params.currentAreaName !== null) && (ProBtnControl.params.currentAreaName !== undefined) && (ProBtnControl.params.currentAreaName !== "")) {
	              AZName = ProBtnControl.params.currentAreaName;
	            }
	            //console.log("AZName SendStat", AZName);

	            $.getJSON(ProBtnControl.statistics.createStatisticsLink("updateUserStatistic", "&Statistic=" + "{\"" + name + "\": \"" + value + "\"}&", {
	                AZName: AZName,
	                Statistic: [{
	                  "name": name,
	                  "value": value
	                }]
	              }),
	              function (data1) {
	              }).always(function () {
	              if ((callback !== null) && (callback !== undefined)) {
	                callback();
	              }
	            });
	          }
	        },
	        SendStatObject: function (object, callback) {
	          var statistic = JSON.stringify(object);

	          ProBtnControl.statistics.callSuperPixelExt("SendStatObject");
	          if (ProBtnControl.params.isServerCommunicationEnabled) {
	            var converted_object = ProBtnControl.statistics.prepareObjectForEventHandler(object);
	            $.getJSON(ProBtnControl.statistics.createStatisticsLink("updateUserStatistic", "&Statistic=" + statistic + "&", converted_object),
	              function (data1) {
	                if (ProBtnControl.params.Debug) {
	                  console.log(data1);
	                }
	              }).done(function () {
	            }).fail(function () {
	            }).always(function () {
	              if ((callback !== null) && (callback !== undefined)) {
	                callback();
	              }
	            });
	          }
	        },
	        SendStatisticsDataObject: function (object, callback) {

	          ProBtnControl.statistics.callSuperPixelExt("SendStatisticsDataObject");
	          if (ProBtnControl.params.isServerCommunicationEnabled) {

	            var converted_object = ProBtnControl.statistics.prepareObjectForEventHandler(object);
	            $.getJSON(ProBtnControl.statistics.createStatisticsLink("updateCustomStatistic", "&Statistic=" + JSON.stringify(object) + "&", converted_object),
	              function (data1) {
	                if (ProBtnControl.params.Debug) {
	                  console.log(data1);
	                }
	              }).done(function () {
	            }).fail(function () {
	            }).always(function () {
	              if ((callback !== null) && (callback !== undefined)) {
	                callback();
	              }
	            });
	          }
	        }
	      },
	      videoFunctions: {
	        /**
	         * Create block with video
	         * @param  {[type]} name - unique video block name
	         * @param  {[type]} path - url to video
	         * @return {[type]}
	         */
	        createVideoItem: function (name, path) {

	          var videoItemNameBlock = "video_item";
	          var videoItemNameVideo = "video_probtn";
	          if ((name !== null) && (name !== undefined) && (name !== "")) {
	            videoItemNameBlock = "video_item_" + name;
	            videoItemNameVideo = "video_probtn_" + name;
	          }

	          if ($("#" + videoItemNameBlock).length < 1) {

	            var content = '<div id="' + videoItemNameBlock + '" class="probtn_video_wrapper2" style="display: none; width: auto; height: auto; margin: 0 auto; vertical-align: middle; background: black;">' +
	              '<table class="probtn_video_wrapper2" style="width: auto; height: auto; margin: 0 auto;"><tr><td style="vertical-align: middle; text-align: center;"><video webkit-playsinline id="' + videoItemNameVideo + '" class="probtn_video"  controls="controls" width="100%"height="100%" style="background: black; margin: 0 auto; vertical-align: middle; width: 100%; height: 100%; display: inline-block;">' +
	              '<source src="' + path + '" type="video/mp4">' +
	              'Your browser does not support the video tag.' +
	              '</video></td></tr></table></div>';
	            //$('body').append(content);
	            ProBtnControl.additionalItemsContainer.append(content);

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
	        }
	      },
	      /**
	       * Init functions
	       * @type {Object}
	       */
	      initFunctions: {
	        stopWebAudio: function () {
	          ProBtnControl.initFunctions.stopedWebAudio = true;
	          if ((ProBtnControl.initFunctions.soundSource !== null) && (ProBtnControl.initFunctions.soundSource !== undefined)) {
	            ProBtnControl.initFunctions.soundSource.stop(0);

	          }
	        },
	        soundSource: null,
	        stopedWebAudio: false,
	        initWebAudio: function () {

	          if ((ProBtnControl.params.SoundURL !== "") && (ProBtnControl.params.SoundURL !== null) && (ProBtnControl.params.SoundURL !== undefined)) {

	            var soundMode = ProBtnControl.params.SoundMode.split('_');

	            window.AudioContext = window.AudioContext || window.webkitAudioContext;
	            var context = new AudioContext();

	            var loadSound = function (url) {
	              var request = new XMLHttpRequest();
	              request.open('GET', url, true);
	              request.responseType = 'arraybuffer';

	              function onError(e) {
	                console.log(e);
	              }

	              // Decode asynchronously
	              request.onload = function () {
	                context.decodeAudioData(request.response, function (buffer) {
	                  var playBuffer = buffer;
	                  playSound(playBuffer);
	                }, onError);
	              };
	              request.send();
	            };

	            var playSound = function (buffer) {
	              ProBtnControl.initFunctions.soundSource = context.createBufferSource(); // creates a sound source
	              ProBtnControl.initFunctions.soundSource.buffer = buffer; // tell the source which sound to play
	              ProBtnControl.initFunctions.soundSource.connect(context.destination); // connect the source to the context's destination (the speakers)
	              ProBtnControl.initFunctions.soundSource.start(0); // play the source now
	              // note: on older systems, may have to use deprecated noteOn(time);

	              ProBtnControl.initFunctions.soundSource.onended = function () {
	                if ((soundMode[1] === "cycle") && (!ProBtnControl.initFunctions.stopedWebAudio)) {
	                  playSound(buffer);
	                }
	              };
	            };

	            var touchSoundStart = true;
	            if ((soundMode[0] === "autoStart") && (ProBtnControl.userData.os !== "iOS")) {
	              touchSoundStart = false;
	            }

	            var audioUnlocked = true;
	            var isUnlocked = false;
	            var isIOS = false;

	            var isFunction = function (functionToCheck) {
	              var getType = {};
	              return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	            };

	            if (touchSoundStart) {
	              var unlock = function (callback) {
	                if (isIOS || this.unlocked) {
	                  console.log("return");
	                  callback();
	                  return;
	                }

	                try {
	                  // create empty buffer and play it
	                  var buffer = context.createBuffer(1, 1, 22050);
	                  var source = context.createBufferSource();
	                  source.buffer = buffer;
	                  source.connect(context.destination);

	                  console.log(source);
	                  if (isFunction(source.noteOn)) {
	                    source.noteOn(0);
	                  } else {
	                    source.start(0);
	                  }
	                } catch (ex) {
	                  console.log(ex);
	                }

	                // by checking the play state after some time, we know if we're really unlocked
	                setTimeout(function () {
	                  if ((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
	                    isUnlocked = true;
	                    callback();
	                  } else {
	                    callback();
	                  }
	                }, 0);
	              };

	              var checkndStartAudio = function () {
	                //console.log("checkndStartAudio");
	                if (audioUnlocked) {
	                  try {
	                    unlock(function () {
	                      if (audioUnlocked) {
	                        audioUnlocked = false;

	                        loadSound(ProBtnControl.params.SoundURL);

	                        //TODO
	                        //replace by one universal function for such usercases
	                        if ($("#pizzabtnImg").is("iframe")) {
	                          try {
	                            var myIframe = document.getElementById('pizzabtnImg');
	                            if (myIframe.contentWindow !== null) {

	                              //console.log("probtn_web_audio_api_enabled");
	                              myIframe.contentWindow.postMessage({
	                                message: "probtn_web_audio_api_enabled"
	                              }, '*');
	                            }
	                          } catch (ex) {

	                          }
	                        }
	                      }
	                    });
	                  } catch (ex) {
	                    console.log(ex);
	                  }
	                }
	              };

	              window.addEventListener('touchstart', checkndStartAudio, false);
	              window.addEventListener('click', checkndStartAudio, false);
	            } else {
	              loadSound(ProBtnControl.params.SoundURL);

	              if ($("#pizzabtnImg").is("iframe")) {
	                try {
	                  var myIframe = document.getElementById('pizzabtnImg');
	                  if (myIframe.contentWindow !== null) {

	                    myIframe.contentWindow.postMessage({
	                      message: "probtn_web_audio_api_enabled"
	                    }, '*');
	                  }
	                } catch (ex) {

	                }
	              }
	            }
	          }
	        },
	        initButtonAndUserDeviceInfo: function () {
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

	              ProBtnControl.statistics.callSuperPixelExt("initButtonAndUserDeviceInfo_" + ProBtnControl.parsed_ua);
	            }
	          } catch (ex) {
	            if (ProBtnControl.params.Debug) console.log(ex);
	            ProBtnControl.statistics.callSuperPixelExt("initButtonAndUserDeviceInfo_ex_" + ex);
	          }

	          allButton1();
	        },
	        initExternalData: {
	          //init external user data, when first avialable data from external service will used
	          initFirstAvailable: function (callback) {
	            ProBtnControl.statistics.callSuperPixelExt("initFirstAvailable1");
	            if (ProBtnControl.params.UseExternalDataAboutUser === true) {
	              if (ProBtnControl.params.ExternalDataSources.length > 0) {
	                ProBtnControl.params.ExternalDataSources.sort(
	                  function (a, b) {
	                    return a.Priority - b.Priority;
	                  }
	                );

	                window.addEventListener("message", receiveMessage, false);
	                var receiveMessage = function (event) {
	                  var origin = event.origin || event.originalEvent.origin;
	                  origin = ProBtnControl.additionalButtonFunctions.extractDomain(origin);

	                  if (ProBtnControl.additionalButtonFunctions.extractDomain(ProBtnControl.params.ExternalDataSources[0].Source) === origin) {
	                    ProBtnControl.params.ExternalData = {};
	                    ProBtnControl.params.ExternalData = event.data;
	                    callback();
	                  }
	                };

	                ProBtnControl.initFunctions.initExternalData.createExternalDataIframe(ProBtnControl.params.ExternalDataSources[0]);
	              } else {
	                callback();
	              }
	            } else {
	              ProBtnControl.statistics.callSuperPixelExt("initFirstAvailable2");
	              callback();
	            }
	          },
	          //init external use data, when all sources
	          initSupplementing: function () {

	          },
	          createExternalDataIframe: function (item) {
	            $("<iframe/>", {
	              id: item.Name,
	              scrolling: 'no',
	              'seamless': "seamless",
	              src: item.Source,
	              css: {
	                'width': "0px",
	                'height': "0px",
	                'position': 'absolute',
	                'top': '-10000px',
	                'left': '-10000px'
	              }
	            }).appendTo("body");
	          }
	        },
	        circularMenuPositionUpdate: function() {
	          var probtn_menu_items = $("#probtn_menu_ul li");

	          function toDegrees(angle) {
	            return angle * (180 / Math.PI);
	          }
	          function toRadians(angle) {
	            return angle * (Math.PI / 180);
	          }
	          var menuRadius = 0;
	          var itemWidth = 0;

	          if (ProBtnControl.params.MenuOptions.MenuRadius > 0) {
	            menuRadius = ProBtnControl.params.MenuOptions.MenuRadius;
	          }
	          if (ProBtnControl.params.MenuOptions.ItemWidth > 0) {
	            itemWidth = ProBtnControl.params.MenuOptions.ItemWidth;
	          }

	          var animateTop = window.innerHeight / 2 - ProBtnControl.pizzabtn.height() / 2;
	          var animateLeft = window.innerWidth / 2 - ProBtnControl.pizzabtn.width() / 2;

	          probtn_menu_items.each(function(count, item) {
	            try {
	              var anglePart = toRadians(360 / (ProBtnControl.params.MenuItems.length));

	              var x = animateTop + ProBtnControl.pizzabtn.height() / 2 - itemWidth/2 - (menuRadius * 1.1) * Math.cos(anglePart * (count));
	              var y = animateLeft + ProBtnControl.pizzabtn.width() / 2 - itemWidth/2 + (menuRadius * 1.1) * Math.sin(anglePart * (count));

	              var itemStyle = {
	                "position": "absolute",
	                "top": x,
	                "left": y
	              };
	              $(item).css(itemStyle);
	            } catch(ex) {
	              console.log(ex);
	            }
	          });


	        },
	        /**
	         * Init menu button mode and create all nessesary DOM elements
	         * @return {[type]} [description]
	         */
	        initFloatingMenu: function () {
	          console.log("initFloatingMenu");

	          if ((ProBtnControl.params.ClickCounterLink) && (ProBtnControl.params.ClickCounterLink !== "")) {
	            try {
	              ProBtnControl.statistics.createClickCounterImage(ProBtnControl.params.ClickCounterLink);
	            } catch (ex) {
	              if (ProBtnControl.params.Debug) console.log(ex);
	            }
	          }

	          ProBtnControl.statistics.SendStatObject({
	            "MenuOpened": 1
	          });

	          ProBtnControl.initFunctions.initRemoveMenu();
	          ProBtnControl.hintText.makeInvisible();

	          ProBtnControl.pizzabtn.stop(true, true);

	          ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {

	            var pizzabtn_wrapper = ProBtnControl.wrapper;
	            pizzabtn_wrapper.css("background", "rgba(0, 0, 0, 0.5)");

	            //create menu close button
	            ////////////////////////////////
	            var menuCloseParams = ProBtnControl.params.MenuClose;
	            var menuClose;
	            if ((menuCloseParams!==null) && (menuCloseParams!==undefined)) {
	              console.log("ProBtnControl.params.MenuOptions", ProBtnControl.params.MenuOptions);
	              if (menuCloseParams.MenuCloseEnabled) {
	                menuClose = $("<img/>", {
	                  id: 'probtn_menu_close_button',
	                  'src': menuCloseParams.MenuCloseImage,
	                  scrolling: 'no',
	                  css: {
	                    position: 'fixed',
	                    width: menuCloseParams.MenuCloseSize.W,
	                    height: menuCloseParams.MenuCloseSize.H,
	                    border: '0px',
	                    overflow: 'hidden',
	                    cursor: 'pointer'
	                  }
	                }).prependTo(ProBtnControl.additionalItemsContainer);

	                //set position for menuCLose button
	                menuClose.setPosition = function () {
	                  //debugger;
	                  var closex = ProBtnControl.params.MenuClose.MenuClosePosition.X / 100;
	                  var closey = ProBtnControl.params.MenuClose.MenuClosePosition.Y / 100;


	                  var closeHeight = this.height();
	                  if (this.height() === 0) {
	                    closeHeight = ProBtnControl.params.MenuClose.MenuCloseSize.H;
	                  }

	                  var closeWidth = this.width();
	                  if (this.width() === 0) {
	                    closeWidth = ProBtnControl.params.MenuClose.MenuCloseSize.W;
	                  }

	                  this.css('top', (ProBtnControl.additionalButtonFunctions.getWindowHeight()) * closey - closeHeight/2 + 'px');
	                  this.css('left', (ProBtnControl.additionalButtonFunctions.getWindowWidth()) * closex - closeWidth/2 + $(window).scrollLeft() + 'px');
	                };

	                menuClose.on("click", function() {
	                  ProBtnControl.initFunctions.initRemoveMenu();
	                });

	                menuClose.setPosition();
	                ProBtnControl.menuClose = menuClose;

	              }
	            }

	            ////////////////////////////////

	            ProBtnControl.pizzabtn.stop(true, true);
	            setTimeout(function () {

	              var animateLeft = 0;
	              var animateTop = window.innerHeight - ProBtnControl.pizzabtn.height();
	              var menuType = ProBtnControl.params.MenuTemplateVariant.split('_');
	              console.log("ProBtnControl.params.MenuTemplateVariant", ProBtnControl.params.MenuTemplateVariant);
	              if (menuType[0] === "circularCenter") {
	                animateTop = window.innerHeight / 2 - ProBtnControl.pizzabtn.height() / 2;
	                animateLeft = window.innerWidth / 2 - ProBtnControl.pizzabtn.width() / 2;
	              }

	              ProBtnControl.pizzabtn.animate({
	                left: animateLeft,
	                top: animateTop
	              }, 500, function () {
	                setTimeout(function () {
	                  var menu = $("<div/>", {
	                    id: "probtn_menu",
	                    style: "opacity: 0.1"
	                  }).prependTo(ProBtnControl.wrapper);

	                  var menuUL = $("<ul/>", {
	                    id: 'probtn_menu_ul'
	                  }).prependTo(menu);

	                  var menuRadius = 0;
	                  var itemWidth = 0;

	                  if (ProBtnControl.params.MenuOptions.MenuRadius > 0) {
	                    menuRadius = ProBtnControl.params.MenuOptions.MenuRadius;
	                  }

	                  if (ProBtnControl.params.MenuOptions.ItemWidth > 0) {
	                    itemWidth = ProBtnControl.params.MenuOptions.ItemWidth;
	                  }

	                  if ((menuType[0].toLowerCase() === "radialcorner".toLowerCase()) || (menuType[0].toLowerCase() === "circularcenter".toLowerCase())) {
	                    $('head').append('<style type="text/css">' +
	                      '#probtn_menu_ul li { ' +
	                      '    background:transparent!important; padding:0px!important; margin:0px!important; width:auto!important; display:inline-block!important; ' +
	                      '}' +
	                      '#probtn_menu_ul { position: absolute; } ' +
	                      '#probtn_menu_ul img { height: '+ itemWidth +'px !important; width: '+ itemWidth +'px !important;     max-width: inherit !important; } ' +
	                      '#probtn_menu_ul {padding-left: 0px; }' +
	                      '#probtn_menu_ul li a span { display: none; } ' +
	                      '<\/style>');
	                  }

	                  //add menu items
	                  if (ProBtnControl.params.MenuItems) {
	                    var count = 1;
	                    var style = "style='font-size:" + ProBtnControl.params.MenuOptions.FontSize + "; font-family: " + ProBtnControl.params.MenuOptions.FontFamily + "; color: " + ProBtnControl.params.MenuOptions.ForegroundColor + " '";
	                    $.each(ProBtnControl.params.MenuItems, function (index, menuItem) {
	                      var image = "";
	                      if ((menuItem.Image !== undefined) && (menuItem.Image !== null) && (menuItem.Image !== "")) {
	                        image = "<img style='height: 50px; margin-right: 10px;' src='" + menuItem.Image + "'/>";
	                      } else {
	                        image = "<div class='probtn_image_placeholder' style='display: inline-block; width: 40px; height:40px; margin-right: 10px;'>&nbsp;</div>";
	                      }

	                      var actionURL = menuItem.ActionURL;
	                      if (menuItem.Type === "video") {
	                        actionURL = "#video_item_" + menuItem.Name;
	                      }

	                      var onclick = 'return false;'; //return false
	                      if ((menuItem.Type === "video") && (ProBtnControl.userData.mobile)) {
	                        onclick = ProBtnControl.params.ButtonOnClick + ' return false';
	                      }

	                      menuUL.append("<li class='menu_item_elem_count" + count + "' style='opacity: 0;'><a " + style + " class='probtn_menu_link " + menuItem.Type + "' rel='" + menuItem.Name + "' rev='" + menuItem.Type + "' target='_blank' onclick='" + onclick + "' href='" + actionURL + "'><table><tr><td>" + image + "</td><td><span " + style + ">" + "<span>" + menuItem.Text + "</span>" + "</a></span></td></tr></table></a></li>");

	                      function toDegrees(angle) {
	                        return angle * (180 / Math.PI);
	                      }

	                      function toRadians(angle) {
	                        return angle * (Math.PI / 180);
	                      }

	                      if (menuRadius < 1) {
	                        menuRadius = ProBtnControl.pizzabtn.height();
	                      }

	                      var anglePart = 0;
	                      var x = 0;
	                      var y = 0;
	                      var itemStyle = {};
	                      switch (menuType[0]) {
	                        case "radialcorner":
	                          if (ProBtnControl.params.MenuItems.length === 2) {
	                            anglePart = toRadians(90 / (ProBtnControl.params.MenuItems.length + 1));
	                            x = -(menuRadius * 1.1) * Math.cos(anglePart * (count + 0));
	                            y = (menuRadius * 1.1) * Math.sin(anglePart * (count + 0));
	                          } else {
	                            anglePart = toRadians(90 / (ProBtnControl.params.MenuItems.length - 1));
	                            console.log("anglePart", anglePart);
	                            x = -(menuRadius * 1.1) * Math.cos(anglePart * (count - 1));
	                            y = (menuRadius * 1.1) * Math.sin(anglePart * (count - 1));
	                          }

	                          itemStyle = {
	                            "position": "absolute",
	                            "top": x,
	                            "left": y
	                          };
	                          console.log("itemStyle", itemStyle);
	                          $(".menu_item_elem_count" + count).css(itemStyle);
	                          break;
	                        case "circularCenter":
	                          anglePart = toRadians(360 / (ProBtnControl.params.MenuItems.length));

	                          x = animateTop + ProBtnControl.pizzabtn.height() / 2 - itemWidth/2 - (menuRadius * 1.1) * Math.cos(anglePart * (count));
	                          y = animateLeft + ProBtnControl.pizzabtn.width() / 2 - itemWidth/2 + (menuRadius * 1.1) * Math.sin(anglePart * (count));

	                          itemStyle = {
	                            "position": "absolute",
	                            "top": x,
	                            "left": y
	                          };
	                          $(".menu_item_elem_count" + count).css(itemStyle);
	                          break;
	                        default:
	                          $("#probtn_menu li:last").css({
	                            "margin-left": -$("#probtn_menu li:last").width()
	                          });
	                          break;
	                      }
	                      count++;

	                      //add video
	                      if (menuItem.Type == "video") {
	                        ProBtnControl.videoFunctions.createVideoItem(menuItem.Name, menuItem.ActionURL);
	                      }
	                    });
	                  }

	                  $(document).on("click", ".probtn_menu_link", function (e) {
	                    var menuType = $(this).attr("rev");

	                    switch (menuType) {
	                      case "external":
	                        window.probtn_dropedActiveZone = {};
	                        window.probtn_dropedActiveZone.currentActiveZone = null;
	                        window.probtn_ButtonContentType = "external";

	                        ProBtnControl.statistics.sendAreaActivatedStats($(this).attr("rel"));
	                        window.open($(this).attr("href"));

	                        e.preventDefault();
	                        return false;
	                      //break;
	                      case "iframe":
	                        window.probtn_dropedActiveZone = {};
	                        window.probtn_dropedActiveZone.currentActiveZone = null;
	                        window.probtn_ButtonContentType = "iframe";

	                        ProBtnControl.onButtonTap($(this).attr("href"), $(this).attr("rel"), "iframe");

	                        break;
	                      case "closeMenu":
	                        ProBtnControl.initFunctions.initRemoveMenu();
	                        return false;
	                      //break;
	                      case "video":
	                        window.probtn_dropedActiveZone = {};
	                        window.probtn_dropedActiveZone.currentActiveZone = {};
	                        window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType = "video";
	                        window.probtn_dropedActiveZone.currentActiveZone.Name = $(this).attr("rel");
	                        window.probtn_ButtonContentType = "video";

	                        ProBtnControl.onButtonTap($(this).attr("href"), $(this).attr("rel"), "video");
	                        return false;
	                      //break;
	                      default:
	                        ProBtnControl.statistics.sendAreaActivatedStats($(this).attr("rel"));
	                        window.open($(this).attr("href"));
	                        e.preventDefault();
	                        return false;
	                      //break;
	                    }
	                  });

	                  var menuTop = ProBtnControl.pizzabtn.position().top - menuUL.height();

	                  if (menuType[0] == "radialcorner") {
	                    menuTop = ProBtnControl.pizzabtn.position().top;
	                    menuTop = menuTop + (menuRadius / 2);
	                  }
	                  if (menuType[0] == "circularCenter") {
	                    menuTop = 0;
	                  }

	                  //set menu position
	                  menu.css("top", menuTop);
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
	        /**
	         * Remove menu block from page DOM
	         * @return
	         */
	        initRemoveMenu: function () {
	          var pizzabtn_wrapper = ProBtnControl.wrapper;
	          pizzabtn_wrapper.css("background", "rgba(0, 0, 0, 0)");
	          $("#probtn_menu").remove();
	          $("#probtn_menu_close_button").remove();
	        },
	        hintTextStyle: {},
	        /**
	         * Show fullscreen
	         * @return {[type]} [description]
	         */
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

	            if (ProBtnControl.params.ButtonType !== "fullscreen_and_button") {
	              //add ower own block (with applying fancybox styles to it)
	              $('body').append('<div class="fancybox-overlay fancybox-overlay-fixed" style="width: auto; height: auto; display: block;"></div>');
	            }

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
	              '</div>');

	            if (ProBtnControl.params.ButtonType !== "fullscreen_and_button") {
	              ProBtnControl.statistics.SendStatObject({
	                "ContentShowed": 1,
	                "Showed": 1
	              });
	            } else {
	              //send only contentShowed, case Showed event would be send while initializing button
	              ProBtnControl.statistics.SendStatObject({
	                "ContentShowed": 1
	              });
	            }

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

	              ProBtnControl.additionalButtonFunctions.hideAll();
	            });
	            if (ProBtnControl.params.HideAfterFirstShow === true) {
	              //and now add cookie to add flag that we are open fullscreen once
	              ProBtnControl.cookieFunctions.createCookie("probtnCloseFlag", true, 60);
	            } else {
	            }
	          }
	        },
	        /**
	         * init active zones if enabled in options
	         * @return {[type]} [description]
	         */
	        initActiveZones: function () {
	          if (((ProBtnControl.params.ActiveZones !== null) || (ProBtnControl.params.ActiveZones.length > 0)) && (ProBtnControl.params.ButtonType == "button_and_active_zones")) {

	            //define nessesary zone functions to add it to all zones in cycle later
	            var activeZone_setPosition = function () {
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
	            };

	            var activeZone_animateActive = function () {
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
	            };

	            var activeZone_setTransitionDuration = function (duration) {
	              var val = duration + 's';
	              this.css({
	                'transition-duration': val,
	                '-webkit-transition-duration': val,
	                '-moz-transition-duration': val,
	                '-o-transition-duration': val
	              });
	            };

	            var activeZone_animateInactive = function () {
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

	            var activeZone_requestClickCounterLink = function () {
	              if ((this.currentActiveZone.ClickCounterLink) && (this.currentActiveZone.ClickCounterLink !== "")) {
	                try {
	                  ProBtnControl.statistics.createClickCounterImage(this.currentActiveZone.ClickCounterLink);
	                } catch (ex) {
	                  if (ProBtnControl.params.Debug) console.log(ex);
	                }
	              }
	            };


	            //check every zone
	            for (var i = 0; i < ProBtnControl.params.ActiveZones.length; i++) {
	              var currentActiveZone = ProBtnControl.params.ActiveZones[i];

	              currentActiveZone.ActiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(currentActiveZone.ActiveSize);
	              currentActiveZone.InactiveSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(currentActiveZone.InactiveSize);

	              if ((currentActiveZone.Name === "") || (currentActiveZone.Name === null) || (currentActiveZone.Name === undefined)) {
	                currentActiveZone.Name = ProBtnControl.additionalButtonFunctions.randomString(12);
	              }

	              var elementType = '<img/>';
	              if (currentActiveZone.ButtonImageType == "iframe") {
	                elementType = '<iframe/>';
	              }
	              if ((currentActiveZone.ButtonIframeInitialSize === null) || (currentActiveZone.ButtonIframeInitialSize === undefined)) {
	                currentActiveZone.ButtonIframeInitialSize = {
	                  W: 0,
	                  H: 0
	                };
	              }
	              var activeZoneBtn = $(elementType, {
	                id: 'probtn_active_zone_' + currentActiveZone.Name,
	                'src': currentActiveZone.InactiveImage, //'//probtnexample1.azurewebsites.net/img/logo.png',
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
	              }).prependTo(ProBtnControl.additionalItemsContainer);

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
	              activeZoneBtn.setPosition = activeZone_setPosition;
	              activeZoneBtn.setTransitionDuration = activeZone_setTransitionDuration;
	              //animation to move from inactive to active state
	              activeZoneBtn.animateActive = activeZone_animateActive;

	              //animation to move from active to inactive state
	              activeZoneBtn.animateInactive = activeZone_animateInactive;

	              activeZoneBtn.requestClickCounterLink = activeZone_requestClickCounterLink;

	              activeZoneBtn.setPosition();
	              ProBtnControl.initializedActiveZones[currentActiveZone.Name] = activeZoneBtn;
	            }
	          }
	        },
	        scrollZoneFirstRun: false,
	        /**
	         * for button_and_scroll_zones buttonType add nessesary handlers
	         * @param  {[type]} runOnScroll [description]
	         * @return {[type]}
	         */
	        initScrollChange: function (runOnScroll) {
	          var onScroll = function (e) {
	            var scrollZone = ProBtnControl.initFunctions.initStartScrollParams('get');
	            var scrollEvent = e;

	            if ((scrollZone === null) && (ProBtnControl.currentScrollZone !== null) && (ProBtnControl.currentScrollZone !== undefined)) {
	              ProBtnControl.statistics.sendScrollAreaShowedStats(ProBtnControl.currentScrollZone.Name);
	            } else {
	              if (ProBtnControl.initFunctions.scrollZoneFirstRun === true) {
	                ProBtnControl.statistics.sendScrollAreaShowedStats(scrollZone.Name);
	              }
	            }

	            if (scrollZone !== null) {
	              //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
	              if ((ProBtnControl.currentScrollZone.Name !== scrollZone.Name) || (!$("#pizzabtnImg", ProBtnControl.pizzabtn).hasClass("pizzabtnImg_iframe_cached"))) {

	                console.log("scrollZone.Name", scrollZone.Name);

	                //TODO: showing iframe from cahced items
	                if (scrollZone.ButtonImageType === "iframe") {
	                  if ((scrollZone.CustomContentURL !== ProBtnControl.currentScrollZone.CustomContentURL) || (scrollZone.ButtonImageType !== ProBtnControl.currentScrollZone.ButtonImageType) || (scrollZone.ButtonImage !== ProBtnControl.currentScrollZone.ButtonImage)) {
	                    $("#pizzabtnImg", ProBtnControl.pizzabtn).hide();
	                    $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("id", "");

	                    //
	                    if ($(".pizzabtnImg_iframe_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).length > 0) {
	                      $(".pizzabtnImg_iframe_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).attr("id", "pizzabtnImg");
	                      $(".pizzabtnImg_iframe_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).show();
	                    } else {
	                      $(".pizzabtnImg_iframe_cached." + scrollZone.Name + "", ProBtnControl.pizzabtn).attr("id", "pizzabtnImg");
	                      $(".pizzabtnImg_iframe_cached." + scrollZone.Name + "", ProBtnControl.pizzabtn).show();
	                    }
	                  }
	                } else {
	                  //$("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);
	                  $("#pizzabtnImg", ProBtnControl.pizzabtn).hide();
	                  $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("id", "");

	                  $(".pizzabtnImg_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).attr("id", "pizzabtnImg");

	                  $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);

	                  $(".pizzabtnImg_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).show();
	                }


	                //send statistics about scroll zone change
	                if ((ProBtnControl.initFunctions.scrollZoneFirstRun !== true) && (ProBtnControl.currentScrollZone.Name !== scrollZone.Name)) {
	                  ProBtnControl.statistics.sendScrollAreaShowedStats(scrollZone.Name);
	                }
	              }


	              if (scrollZone.CustomButtonParams) {
	                scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonSize);
	              } else {
	                scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
	              }


	              if ((scrollZone.ButtonIframeInitialSize === null) || (scrollZone.ButtonIframeInitialSize === undefined)) {
	                scrollZone.ButtonIframeInitialSize = ProBtnControl.params.ButtonIframeInitialSize;
	              }

	              //if we have additional params for button, different from main button params
	              if (scrollZone.CustomButtonParams) {
	                $(ProBtnControl.pizzabtn).css({
	                  'width': scrollZone.ButtonSize.W,
	                  'height': scrollZone.ButtonSize.H
	                });

	                //if ((scrollEvent !== undefined) && (scrollEvent !== null)) {
	                //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
	                if (ProBtnControl.currentScrollZone !== scrollZone) {
	                  if (scrollZone.ButtonImageType === "iframe") {
	                  } else {
	                    $("#pizzabtnImg").attr("src", scrollZone.ButtonImage);
	                  }
	                }

	                if ((scrollZone.ButtonIframeInitialSize.W > 0) && (scrollZone.ButtonIframeInitialSize.H > 0)) {
	                  if (scrollZone.CustomButtonParams) {
	                    $("#pizzabtnImg").css({
	                      'width': scrollZone.ButtonIframeInitialSize.W,
	                      'height': scrollZone.ButtonIframeInitialSize.H,
	                      'opacity': ProBtnControl.params.ButtonOpacity
	                    });
	                  }

	                  //ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), scrollZone.ButtonIframeInitialSize, scrollZone.ButtonSize);
	                } else {
	                  $("#pizzabtnImg").css({
	                    'width': ProBtnControl.params.ButtonSize.W,
	                    'height': ProBtnControl.params.ButtonSize.H,
	                    'opacity': ProBtnControl.params.ButtonOpacity
	                  });
	                }

	                $(ProBtnControl.pizzabtn).css({
	                  'width': ProBtnControl.params.ButtonSize.W,
	                  'height': ProBtnControl.params.ButtonSize.H
	                });

	                if ((scrollZone.ButtonIframeInitialSize.W > 0) && (scrollZone.ButtonIframeInitialSize.H > 0)) {
	                  ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), scrollZone.ButtonIframeInitialSize, scrollZone.ButtonSize);
	                }

	              } else {
	                //if main button params where saved, then restore it
	                if (ProBtnControl.buttonMainParams.isEmpty === false) {

	                  if (ProBtnControl.currentScrollZone == scrollZone) {
	                    if (scrollZone.ButtonImageType === "iframe") {
	                    } else {
	                      $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);
	                    }
	                  }
	                  $("#pizzabtnImg").css({
	                    'width': ProBtnControl.params.ButtonSize.W,
	                    'height': ProBtnControl.params.ButtonSize.H,
	                    'opacity': ProBtnControl.params.ButtonOpacity
	                  });

	                  //$(ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);
	                  $(ProBtnControl.pizzabtn).css({
	                    'width': ProBtnControl.params.ButtonSize.W,
	                    'height': ProBtnControl.params.ButtonSize.H
	                  });
	                } else {
	                  //TODO make better check
	                  if (scrollZone.ButtonImageType !== "iframe") {
	                    $("#pizzabtnImg").css({
	                      'width': ProBtnControl.params.ButtonSize.W,
	                      'height': ProBtnControl.params.ButtonSize.H,
	                      'opacity': ProBtnControl.params.ButtonOpacity
	                    });

	                    $(ProBtnControl.pizzabtn).css({
	                      'width': ProBtnControl.params.ButtonSize.W,
	                      'height': ProBtnControl.params.ButtonSize.H
	                    });
	                  }
	                }
	              }

	              if (ProBtnControl.currentScrollZone != scrollZone) {
	                if (scrollZone.ButtonImageType == "iframe") {
	                  ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), scrollZone.ButtonIframeInitialSize, scrollZone.ButtonSize);
	                }

	                //if button move disabled, restore button position
	                if (ProBtnControl.params.DisableButtonMove === true) {
	                  //set button init position again if button movement is disabled
	                  ProBtnControl.additionalButtonFunctions.setButtonStartPosition(ProBtnControl.pizzabtn);
	                }
	              }
	            }
	            ProBtnControl.initFunctions.scrollZoneFirstRun = false;
	            ProBtnControl.currentScrollZone = scrollZone;
	          };

	          if (ProBtnControl.params.ButtonType == "button_and_scroll_zones") {
	            if ((runOnScroll !== null) && (runOnScroll !== undefined)) {
	              onScroll(null);
	            } else {
	              $.each(ProBtnControl.params.ScrollZones, function (index, scrollZone) {
	                ProBtnControl.additionalButtonFunctions.preloadImage(scrollZone.ButtonImage);
	                ProBtnControl.additionalButtonFunctions.preloadImage(scrollZone.ButtonDragImage);

	                $("body").on('click', "#video_probtn_" + scrollZone.Name, function (e) {
	                  console.log("");
	                  try {
	                    var video = $("#video_probtn_" + scrollZone.Name).get(0);
	                    video.pause();
	                  } catch (ex) {
	                    console.log(ex);
	                  }

	                  //setTimeout(function () {
	                  //send stats and open link
	                  ProBtnControl.statistics.SendStatisticsData("VideoClicked", 1);
	                  window.open(ProBtnControl.params.VideoClickURL);
	                  //}, 150);
	                });
	              });
	              ProBtnControl.initFunctions.scrollZoneFirstRun = true;

	              ProBtnControl.additionalButtonFunctions.preloadIframeScrollZones();
	              onScroll(null);

	              $(window).scroll(onScroll);
	            }
	          }
	        },
	        /**
	         * [initStartScrollParams description]
	         * @param  {[type]} position [description]
	         * @return {[type]}          [description]
	         */
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
	            };

	            var getDocumentHeight = function () {
	              return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, getViewportHeight());
	            };

	            //if all at one screen mode
	            if (ProBtnControl.params.ChangeScrollButtonAtFullSiteHeight === false) {
	              getDocumentHeight = function () {
	                return window.innerHeight;
	              };
	              top = 0;
	            }

	            var currentButtonHeight = 0;
	            if ((position === null) || (position === undefined)) {
	              currentButtonHeight = (window.innerHeight - (ProBtnControl.params.ButtonSize.H / 2)) * (ProBtnControl.params.ButtonPosition.Y);
	              var buttonleft = ($('body').innerWidth() - (ProBtnControl.params.ButtonSize.W / 2)) * (ProBtnControl.params.ButtonPosition.X) + $(window).scrollLeft() + 'px';
	            } else {
	              currentButtonHeight = ProBtnControl.pizzabtn.position().top;
	            }

	            var currentFullTop = 0;
	            $.each(ProBtnControl.params.ScrollZones, function (index, scrollZone) {

	              if ((scrollZone.Name === undefined) || (scrollZone.Name === null)) {
	                scrollZone.Name = "scrollZone" + index;
	              }

	              if (scrollZone.ButtonContentType === "video") {
	                ProBtnControl.videoFunctions.createVideoItem(scrollZone.Name, scrollZone.CustomContentURL);


	              }

	              var areaHeight = currentFullTop + getDocumentHeight() * scrollZone.ZoneHeight;
	              var buttonHeight = currentButtonHeight + top;

	              if ((buttonHeight <= areaHeight) && (buttonHeight > currentFullTop)) {

	                window.probtn_dropedActiveZone = {};
	                window.probtn_dropedActiveZone.currentActiveZone = null;

	                currentZone = scrollZone;
	                window.probtn_dropedActiveZone.currentActiveZone = scrollZone;


	                if ((ProBtnControl.currentScrollZone === null) || (ProBtnControl.currentScrollZone === undefined)) {
	                  ProBtnControl.currentScrollZone = currentZone;
	                }

	                try {
	                  ProBtnControl.params.currentContentURL = scrollZone.CustomContentURL;
	                  ProBtnControl.params.currentButtonContentType = scrollZone.ButtonContentType;
	                  ProBtnControl.params.currentAreaName = scrollZone.Name;
	                } catch (ex) {
	                }
	                ProBtnControl.params.ButtonImage = scrollZone.ButtonImage;

	                var widgetHTML = "";
	                if (scrollZone.ButtonImageType === "iframe") {
	                  $("#probtn_hintText").remove();
	                  $("#pizzabtnImg").css('border', '0px solid transparent');

	                  //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
	                  if (ProBtnControl.currentScrollZone != scrollZone) {
	                    widgetHTML = $(ProBtnControl.pizzabtn).html();

	                    if ((widgetHTML !== undefined) && (widgetHTML !== null)) {
	                      //widgetHTML = widgetHTML.replace('img', 'iframe');
	                      //TODO: from image to iframe
	                      if (ProBtnControl.currentScrollZone.ButtonImageType == "image") {
	                        //$('#pizzabtnImg').html(widgetHTML);
	                      }
	                    }
	                  }
	                  ProBtnControl.params.ButtonImageType = scrollZone.ButtonImageType;
	                } else {
	                  $("#pizzabtnIframeOverlay").remove();
	                  widgetHTML = $(ProBtnControl.pizzabtn).html();

	                  if (ProBtnControl.currentScrollZone != scrollZone) {
	                    if (ProBtnControl.currentScrollZone.ButtonImageType === "iframe") {
	                      if ((widgetHTML !== undefined) && (widgetHTML !== null)) {
	                        //TODO: from iframe to image
	                        if (scrollZone.ButtonImageType == "image") {
	                          ProBtnControl.additionalButtonFunctions.hideIframeScrollZones();
	                        }
	                      }
	                    }
	                  }

	                  ProBtnControl.params.ButtonImageType = "image";
	                }

	                //set default values for ButtonIframeInitialSize
	                if ((scrollZone.ButtonIframeInitialSize === null) || (scrollZone.ButtonIframeInitialSize === undefined)) {
	                  scrollZone.ButtonIframeInitialSize = {
	                    W: 0,
	                    H: 0
	                  };
	                }
	                if ((scrollZone.ButtonSize === null) || (scrollZone.ButtonSize === undefined)) {
	                  scrollZone.ButtonSize = ProBtnControl.params.ButtonSize;
	                }

	                if (scrollZone.ButtonImageType === "iframe") {
	                  if (($("#pizzabtnIframeOverlay").length <= 0) || (ProBtnControl.currentScrollZone != scrollZone)) {

	                    pizzabtnCss = {
	                      'width': scrollZone.ButtonSize.W,
	                      'height': scrollZone.ButtonSize.H,
	                      'opacity': 1
	                    };

	                    pizzabtnCss.position = 'absolute';
	                    pizzabtnCss.top = '0px';

	                    //TODO: test
	                    if (ProBtnControl.currentScrollZone.ButtonImageType !== "iframe") {
	                      var pizzabtnImg2 = $("<div/>", {
	                        id: "pizzabtnIframeOverlay",
	                        css: pizzabtnCss
	                      }).appendTo(ProBtnControl.pizzabtn);
	                    }
	                  }

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
	                    if ((scrollZone.ButtonDragSize !== null) && (scrollZone.ButtonDragSize !== undefined)) {
	                      ProBtnControl.params.ButtonDragSize = scrollZone.ButtonDragSize;
	                    }
	                    ProBtnControl.params.ButtonOpacity = scrollZone.ButtonOpacity;
	                    ProBtnControl.params.ButtonDragOpacity = scrollZone.ButtonDragOpacity;
	                  } else {
	                    if (ProBtnControl.buttonMainParams.isEmpty === false) {
	                      ProBtnControl.params.ButtonSize = ProBtnControl.buttonMainParams.ButtonSize;
	                      ProBtnControl.params.ButtonDragSize = ProBtnControl.buttonMainParams.ButtonDragSize;
	                      ProBtnControl.params.ButtonOpacity = ProBtnControl.buttonMainParams.ButtonOpacity;
	                      ProBtnControl.params.ButtonDragOpacity = ProBtnControl.buttonMainParams.ButtonDragOpacity;
	                    }
	                  }
	                }
	              }
	              currentFullTop = currentFullTop + getDocumentHeight() * scrollZone.ZoneHeight;

	              //check positions for new sizes
	              ProBtnControl.additionalButtonFunctions.checkAndCorrentButtonPosition();
	            });
	            //ProBtnControl.currentScrollZone = currentZone;
	            return currentZone;
	          } else {
	            return null;
	          }
	        },
	        //pizza button constructor
	        initPizzaButton: function () {
	          var pizzabtn_wrapper = ProBtnControl.wrapper;
	          var body = $('body');

	          if (ProBtnControl.params.ButtonContentType === 'youtube') {

	            var title = "";
	            title = ProBtnControl.additionalButtonFunctions.getTitleTextForModalWindow();

	            body.append('<div class="fancybox-overlay fancybox-overlay-fixed" id="youtube_fullscreen" style="width: auto; height: auto; display: none;""></div>');
	            body.append('<div id="fullscreen_probtn" style="display: none;">' +
	              '<div class="fancybox-wrap fancybox-mobile fancybox-type-iframe fancybox-opened" tabindex="-1" ' +
	              'style="margin: 0 auto; height: auto; position: fixed; opacity: 1; overflow: visible;">' +
	              '<div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">' +
	              '<div class="fancybox-outer">' +
	              '<div class="fancybox-inner" style="overflow: scroll; ">' +
	              '<iframe id="video_probtn" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="' + ProBtnControl.additionalButtonFunctions.getContentUrlWithUtm(ProBtnControl.params.ContentURL) + '"' +
	              ' sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>' +
	              '</div></div>' +
	              '<div style="background: white;" class="fancybox-title fancybox-title-inside-wrap">' + title + '</div>' +
	              '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a></div></div>' +
	              '</div>');

	            //close youtube player
	            body.on('click', "#fullscreen_probtn .fancybox-close, .fancybox-overlay", function () {
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
	            if ((ProBtnControl.params.VideoClickURL === "") || (ProBtnControl.params.VideoClickURL === null) || (ProBtnControl.params.VideoClickURL === undefined)) {
	              ProBtnControl.params.VideoClickURL = ProBtnControl.params.VideoPoster;
	            }

	            var content = '';

	            // replace with video item
	            content = '<div id="video_item" class="probtn_video_wrapper2" style="display: none; width: auto; height: auto; margin: 0 auto; vertical-align: middle; background: black;">' +
	              '<table class="probtn_video_wrapper2" style="width: auto; height: auto; margin: 0px;"><tr><td style="vertical-align: middle; text-align: center;"><video webkit-playsinline onclick="' + videoOnCLick + '" poster="' + ProBtnControl.params.VideoPoster + '" id="video_probtn" class="probtn_video"  controls="controls" width="100%"height="100%" style="background: black; margin: 0 auto; vertical-align: middle; width: 100%; height: 100%; display: inline-block;">' +
	              '<source src="' + ProBtnControl.params.ContentURL + '" type="video/mp4">' +
	              'Your browser does not support the video tag. ' +
	              '</video></td></tr></table></div>';

	            //$('body').append(content);
	            ProBtnControl.additionalItemsContainer.append(content);

	            if ((ProBtnControl.params.VideoClickURL !== "") && (ProBtnControl.params.VideoClickURL !== null) && (ProBtnControl.params.VideoClickURL !== undefined)) {

	              console.log("ProBtnControl.params.VideoClickURL1", ProBtnControl.params.VideoClickURL);

	              $("body").on('click', "#video_probtn", function (e) {
	                try {
	                  var video = $("#video_probtn").get(0);
	                  video.pause();
	                } catch (ex) {
	                  console.log(ex);
	                }

	                //setTimeout(function () {
	                //send stats and open link
	                ProBtnControl.statistics.SendStatisticsData("VideoClicked", 1);
	                window.open(ProBtnControl.params.VideoClickURL);
	                //}, 150);
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
	            if (newFancyboxWidth < newFancyboxHeight) {
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
	          //TODO: use function to add links
	          ProBtnControl.statistics.callSuperPixelExt("TrackingLink");
	          if ((ProBtnControl.params.TrackingLink !== null) && (ProBtnControl.params.TrackingLink !== null) && (ProBtnControl.params.TrackingLink !== "")) {

	            //ProBtnControl.statistics.createClickCounterImage("https://goo.gl/n3bnly");
	            var links = ProBtnControl.params.TrackingLink.split("%7C");
	            links.forEach(function (element, index) {
	              ProBtnControl.statistics.createClickCounterImage(element);
	            });
	          }
	          pizzabtn_wrapper.css(opts);

	          /**
	           * extrusion mode of button
	           * @param  {[string]} ProBtnControl.params.ExtrusionMode - extrusion type
	           */
	          var extrusionMode_params = ProBtnControl.params.ExtrusionMode.split('_');
	          var extrusionMode_width = 0;
	          var extrusionMode_height = 0;
	          var pizzabtnCss = {};
	          
	          switch (extrusionMode_params[0]) {
	            case "topButton":
	              $('head').append('<style type="text/css" id="extrusionMode_topButton">body {margin-top: ' + ProBtnControl.params.ButtonSize.H + 'px; } #probtn_button { top: 0px !important;} #probtn_wrapper { margin-top:' + "-" + ProBtnControl.params.ButtonSize.H + 'px !important; position: absolute !important; }</style>');
	              break;
	            case "topButtonTimeout":
	              var time = extrusionMode_params[1];
	              extrusionMode_width = parseInt(extrusionMode_params[2]);
	              extrusionMode_height = parseInt(extrusionMode_params[3]);

	              $('head').append('<style type="text/css" id="extrusionMode_topButton">body {margin-top: ' + ProBtnControl.params.ButtonSize.H + 'px; } #probtn_button { top: 0px !important;} #probtn_wrapper { margin-top:' + "-" + ProBtnControl.params.ButtonSize.H + 'px !important; position: absolute !important; }</style>');
	              setTimeout(function () {
	                $("#extrusionMode_topButton").remove();
	                ProBtnControl.params.ButtonSize.W = extrusionMode_width;
	                ProBtnControl.params.ButtonSize.H = extrusionMode_height;
	                ProBtnControl.params.ButtonSize.Initial = {};

	                if (ProBtnControl.params.ButtonImageType == 'iframe') {
	                  ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), ProBtnControl.params.ButtonIframeInitialSize, ProBtnControl.params.ButtonSize);
	                }

	                $(ProBtnControl.pizzabtn).css({
	                  'width': ProBtnControl.params.ButtonSize.W,
	                  'height': ProBtnControl.params.ButtonSize.H
	                });

	                $("#pizzabtnIframeOverlay").css({
	                  'width': ProBtnControl.params.ButtonSize.W,
	                  'height': ProBtnControl.params.ButtonSize.H
	                });
	              }, time);
	              break;
	            case "topButtonScroll":
	              var percent = extrusionMode_params[1];
	              extrusionMode_width = parseInt(extrusionMode_params[2]);
	              extrusionMode_height = parseInt(extrusionMode_params[3]);

	              $('head').append('<style type="text/css" id="extrusionMode_topButton">body {margin-top: ' + ProBtnControl.params.ButtonSize.H + 'px; } #probtn_button { top: 0px !important;} #probtn_wrapper { margin-top:' + "-" + ProBtnControl.params.ButtonSize.H + 'px !important; position: absolute !important; }</style>');

	              var topButtonScrollTriggered = false;

	              var onScroll_topButtonScroll = function (e) {

	                var doc = document.documentElement;
	                var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	                var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

	                var topButton = (window.innerHeight - (ProBtnControl.params.ButtonSize.H / 2)) * (ProBtnControl.params.ButtonPosition.Y);

	                var ua = navigator.userAgent.toLowerCase();
	                var isOpera = (ua.indexOf('opera') > -1);
	                var isIE = (!isOpera && ua.indexOf('msie') > -1);

	                var getViewportHeight = function () {
	                  return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight : (document.parentWindow || document.defaultView).innerHeight;
	                };

	                var getDocumentHeight = function () {
	                  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, getViewportHeight());
	                };

	                var currentButtonHeight = ProBtnControl.pizzabtn.position().top;
	                var buttonHeight = currentButtonHeight + top;

	                //console.log("top", top, top/getDocumentHeight());

	                if ((top / getDocumentHeight() > percent) && (topButtonScrollTriggered === false)) {

	                  topButtonScrollTriggered = true;

	                  ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                    message: "probtn_banner_to_button"
	                  });

	                  $("#extrusionMode_topButton").remove();
	                  ProBtnControl.params.ButtonSize.W = extrusionMode_width;
	                  ProBtnControl.params.ButtonSize.H = extrusionMode_height;
	                  ProBtnControl.params.ButtonSize.Initial = {};

	                  //console.log("ProBtnControl.params.ButtonSize1", ProBtnControl.params.ButtonSize);

	                  //ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);

	                  //console.log("ProBtnControl.params.ButtonSize2", ProBtnControl.params.ButtonSize);

	                  if (ProBtnControl.params.ButtonImageType == 'iframe') {
	                    ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), ProBtnControl.params.ButtonIframeInitialSize, ProBtnControl.params.ButtonSize);
	                  }

	                  //console.log("extrusionMode_params",extrusionMode_params);

	                  $(ProBtnControl.pizzabtn).css({
	                    'width': ProBtnControl.params.ButtonSize.W,
	                    'height': ProBtnControl.params.ButtonSize.H
	                  });

	                  $("#pizzabtnIframeOverlay").css({
	                    'width': ProBtnControl.params.ButtonSize.W,
	                    'height': ProBtnControl.params.ButtonSize.H
	                  });
	                }
	              };

	              $(window).scroll(onScroll_topButtonScroll);
	              break;
	            case "insertBlock":
	              pizzabtnCss.width = "100%";
	              break;
	            case "fixedTop":
	              pizzabtnCss.width = "100%";
	              /*$('body').css("margin-top", ProBtnControl.params.ButtonSize.H + "px");
	              $('head').append('<style type="text/css">#probtn_wrapper { margin-top:' + "-" + ProBtnControl.params.ButtonSize.H + 'px !important; position: fixed !important; }</style>');*/
	              break;
	            default:
	              break;
	          }

	          //var btn = undefined;
	          var btn = $("#probtn_button");

	          if (btn.length === 0) {
	            btn = $("<div/>", {
	              id: "probtn_button"
	            }).prependTo(pizzabtn_wrapper);
	          }

	          btn.addClass("pizzabtn_normal");
	          btn.addClass("probtn_normal");

	          if (ProBtnControl.userData.mobile) {
	            btn.attr("onclick", ProBtnControl.params.ButtonOnClick);

	            btn.attr("ontouchend", ProBtnControl.params.ButtonOnTouchEnd);
	            btn.attr("ontouchstart", ProBtnControl.params.ButtonOnTouchStart);
	          }         

	          if (ProBtnControl.params.ControlInIframeFromParent === true) {
	            btn.css({
	              'display': 'none',
	              'width': ProBtnControl.params.ButtonSize.W,
	              'height': ProBtnControl.params.ButtonSize.H
	            });

	            pizzabtnCss = {
	              'width': ProBtnControl.params.ButtonSize.W,
	              'height': ProBtnControl.params.ButtonSize.H,
	              'opacity': ProBtnControl.params.ButtonOpacity,
	              'max-width': 'inherit !important',
	              'max-height': 'inherit !important'
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

	              'max-width': 'inherit !important',
	              'max-height': 'inherit !important',

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

	          var pizzabtnImg = null;
	          if (ProBtnControl.params.ButtonImageType === 'iframe') {
	            //init iframe button
	            //
	            pizzabtnCss.border = '0px';
	            pizzabtnCss.overflow = 'hidden';
	            pizzabtnImg = $("<iframe/>", {
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
	              try {
	                myIframe.onload = function () {
	                  if (ProBtnControl.params.Debug) console.log("waitForIframeButtonLoaded show1");
	                  btn.show();
	                };
	              } catch (ex) {

	              }
	            } else {
	            }

	            //add hover event
	            //TODO:
	            //replace with universal function
	            try {
	              $("#pizzabtnIframeOverlay").hover(
	                function () { //hover
	                  var myIframe = document.getElementById('pizzabtnImg');
	                  if (myIframe.contentWindow !== null) {
	                    myIframe.contentWindow.postMessage({
	                      message: "probtn_hover_started"
	                    }, '*');
	                  }
	                },
	                function () { //unhover
	                  var myIframe = document.getElementById('pizzabtnImg');
	                  if (myIframe.contentWindow !== null) {
	                    myIframe.contentWindow.postMessage({
	                      message: "probtn_hover_stoped"
	                    }, '*');
	                  }
	                }
	              );

	            } catch (ex) {
	            }
	          } else {
	            // add image
	            pizzabtnImg = $("<img/>", {
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

	          ProBtnControl.additionalButtonFunctions.MinimizeWrapper(function () {
	          }, ProBtnControl.params.MinimizeWrapperTime);

	          ProBtnControl.hintText.makeInvisible = function () {
	            this.css({
	              'transition-duration': ProBtnControl.params.HintHideDuration + 's',
	              '-webkit-transition-duration': ProBtnControl.params.HintHideDuration + 's',
	              '-moz-transition-duration': ProBtnControl.params.HintHideDuration + 's',
	              '-o-transition-duration': ProBtnControl.params.HintHideDuration + 's'
	            });
	            this.css('opacity', 0);
	          };

	          btn.center = function () {
	            var body = ProBtnControl.wrapper;
	            this.css('top', (window.innerHeight - this.height()) / 2 + $(window).scrollTop() + 'px');
	            this.css('left', (window.innerWidth - this.width()) / 2 + $(window).scrollLeft() + 'px');
	          };

	          btn.show = function () {
	            var me = this;
	            setTimeout(function () {
	              me.stop(true, true).fadeIn(ProBtnControl.params.ButtonShowDuration * 1000);
	            }, ProBtnControl.params.ButtonShowDelay * 1000);
	          };

	          btn.hide = function () {
	            var me = jQuery("#probtn_button");
	            setTimeout(function () {
	              console.log("btn hide");
	              me.stop(true, true).fadeOut(ProBtnControl.params.ButtonHideDuration * 1000);

	            }, ProBtnControl.params.ButtonHideDelay * 1000);
	          };

	          //aditional actions
	          window.proBtn = {};
	          window.proBtn.hide = btn.hide;
	          window.proBtn.hideContent = function () {
	            $.fancybox.close();
	          };
	          window.proBtn.close = function () {
	            $.fancybox.close();
	            ProBtnControl.statistics.SendStatObject({
	              "Closed": 1
	            });
	            ProBtnControl.additionalButtonFunctions.MinimizeWrapper();
	            $("body").removeClass("probtn_disable_scroll");
	            ProBtnControl.additionalButtonFunctions.hideAll();
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
	          };

	          btn.undragAnimate = function () {
	            if ((ProBtnControl.params.ButtonImageType !== "iframe")) {
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
	          };

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
	          };

	          btn.hideHint = function () {
	            var me = this;
	            ProBtnControl.hintText.makeInvisible();
	            setTimeout(function () {
	              me.animateDuringHintHide();
	            }, 100);
	            me.hintTextActive = false;
	          };

	          btn.hideHintDelay = function () {
	            setTimeout(function () {
	              ProBtnControl.hintText.makeInvisible();
	            }, ProBtnControl.params.HintLaunchDuration * 1000);
	          };

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
	          };

	          //set button init position
	          ProBtnControl.additionalButtonFunctions.setButtonStartPosition(btn);

	          ProBtnControl.additionalButtonFunctions.changeBodySize();

	          ProBtnControl.interactionFunctions.initInteractionTimer();


	          //TODO: put in spetialized function
	          try {
	            if ($("#pizzabtnImg").is("iframe")) {
	              try {
	                var myIframeCheck = document.getElementById('pizzabtnImg');
	                window.addEventListener('deviceorientation', function (event) {
	                  if (myIframeCheck.contentWindow !== null) {
	                    myIframeCheck.contentWindow.postMessage({
	                      message: "probtn_page_deviceorientation",
	                      dataEvent: {
	                        alpha: event.alpha,
	                        beta: event.beta,
	                        gamma: event.gamma
	                      }
	                    }, '*');
	                  }
	                });
	              } catch (ex) {

	              }
	            }
	          } catch (ex) {
	            console.log(ex);
	          }

	          //TODO
	          //move styles from js code to css file
	          //hide button until we get message from iframe creative that it's ready to be shown
	          if (ProBtnControl.params.waitIframeLoadedMsg) {
	            console.log("waitIframeLoadedMsg hide1");
	            //var myIframe = document.getElementById('pizzabtnImg');
	            $('head').append('<style type="text/css" id="probtn_waitIframeLoadedMsg">#probtn_wrapper.hide {display: none !important;} #probtn_wrapper.show {display: inherit;}</style>');
	            ProBtnControl.buttonMainParams.hidden = true;
	            ProBtnControl.wrapper.addClass('hide');
	            btn.hide();
	          } else {
	          }

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
	          }).prependTo(ProBtnControl.additionalItemsContainer);

	          //always show close button
	          /*if (ProBtnControl.params.AlwaysShowCloseButton == true) {
	                        $('head').append('<style type="text/css">#probtn_closeButton { display: block !important; }</style>');
	                    }*/

	          //hide button on close area click
	          if (ProBtnControl.params.ClickOnCloseButton === true) {
	            $(document).on('click', '#probtn_closeButton', function () {
	              ProBtnControl.statistics.SendStatObject({
	                "Closed": 1
	              });
	              ProBtnControl.additionalButtonFunctions.hideAll();
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

	          //set close button position
	          btn.center = function () {
	            var body = $('body');
	            var closex = ProBtnControl.params.ClosePosition.X;
	            var closey = ProBtnControl.params.ClosePosition.Y;

	            if (ProBtnControl.params.ControlInIframeFromParent === true) {
	            }

	            ProBtnControl.params.CloseSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.CloseSize);

	            var closeHeight = this.height();
	            if (this.height() === 0) {
	              closeHeight = ProBtnControl.params.CloseSize.H;
	            }

	            var closeWidth = this.width();
	            if (this.width() === 0) {
	              closeWidth = ProBtnControl.params.CloseSize.W;
	            }

	            this.css('top', (ProBtnControl.additionalButtonFunctions.getWindowHeight() - closeHeight) * closey + 'px');
	            this.css('left', (ProBtnControl.additionalButtonFunctions.getWindowWidth() - closeWidth) * closex + $(window).scrollLeft() + 'px');
	          };

	          btn.show = function () {
	            var me = this;
	            me.center();
	            setTimeout(function () {
	              me.stop(true, true).fadeIn(ProBtnControl.params.CloseShowDuration * 1000);
	            }, ProBtnControl.params.CloseShowDelay * 1000);
	          };

	          btn.hide = function () {
	            var me = this;
	            setTimeout(function () {
	              me.stop(true, true).fadeOut(ProBtnControl.params.CloseHideDuration * 1000);
	            }, ProBtnControl.params.CloseHideDelay * 1000);
	          };

	          btn.setTransitionDuration = function (duration) {
	            var val = duration + 's';
	            this.css({
	              'transition-duration': val,
	              '-webkit-transition-duration': val,
	              '-moz-transition-duration': val,
	              '-o-transition-duration': val
	            });
	          };

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
	          };

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
	              if ((ProBtnControl.interactionFunctions.wasInteraction === false) || (ProBtnControl.interactionFunctions.wasInteraction === undefined)) {

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

	                if (ProBtnControl.params.ButtonType === "fullscreen") {
	                  try {
	                    $(".fancybox-overlay").remove();
	                    $("#fullscreen_probtn").remove();
	                  } catch (ex) {
	                  }
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
	        callPassback: function() {
	          if ((ProBtnControl.params.OnNoShowPixel !== undefined) 
	                && (ProBtnControl.params.OnNoShowPixel !== null) 
	                && (ProBtnControl.params.OnNoShowPixel !== "")) {
	            ProBtnControl.statistics.createClickCounterImage(ProBtnControl.params.OnNoShowPixel);
	          }

	          var postscribeCall = function () {
	              $("body").append("<div id='probtn_passback'></div>");
	              var addate = new Date();
	              var scrheight = '',
	                scrwidth = '';
	              var jkit;
	              var scrsize;
	              var pr;

	              switch (ProBtnControl.currentDomain) {
	                default:
	                  //postscribe(ProBtnControl.params.PassbackCodeSelector, '<script type="text/javascript">' + ProBtnControl.params.PassbackCustomCode + '</script>');
	                  if ((ProBtnControl.params.PassbackCustomCode !== null) && (ProBtnControl.params.PassbackCustomCode !== undefined) && (ProBtnControl.params.PassbackCustomCode !== "")) {
	                    postscribe(ProBtnControl.params.PassbackCodeSelector, '' + ProBtnControl.params.PassbackCustomCode + '');
	                  }
	                  break;
	              }
	          };
	          if (typeof postscribe === "undefined") {
	            $.getScript("https://cdn.probtn.com/libs/postscribe/htmlParser.js", function () {
	              $.getScript("https://cdn.probtn.com/libs/postscribe/postscribe.js", postscribeCall);
	            });
	          } else {
	            postscribeCall();
	          }
	        },
	        extractDomain: function (url) {
	          var domain;
	          //find & remove protocol (http, ftp, etc.) and get domain
	          if (url.indexOf("://") > -1) {
	            domain = url.split('/')[2];
	          } else {
	            domain = url.split('/')[0];
	          }

	          //find & remove port number
	          domain = domain.split(':')[0];

	          return domain;
	        },
	        checkProtocolInUrl: function (url) {
	          if (window.location.protocol === "https:") {
	            var position = url.indexOf("http://");
	            if (position === 0) {
	              url = url.replace("http://", "https://");
	            }
	          }
	          return url;
	        },
	        checkProtocolLinks: function (inObject) {
	          try {
	            for (var property in inObject) {
	              if (inObject.hasOwnProperty(property)) {
	                if (ProBtnControl.params.ButtonImageType == 'iframe') {
	                  switch (property) {
	                    case "ButtonImage":
	                    case "ButtonImage2x":
	                    case "ButtonDragImage":
	                    case "ButtonOpenImage":
	                      inObject[property] = ProBtnControl.additionalButtonFunctions.checkProtocolInUrl(inObject[property]);
	                      break;
	                    default:
	                      break;
	                  }
	                }
	              }
	            }
	          } catch (ex) {
	          }
	        },
	        setButtonStartPosition: function (btn) {
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

	            switch (ProBtnControl.params.ExtrusionMode) {
	              case "insertBlock":
	                left = 0;
	                top = 0;
	                break;
	              default:
	                break;
	            }

	            var lookoutParams = ProBtnControl.params.isAnimation.split('_');

	            //button start position
	            if (lookoutParams[0] === "lookoutAndOut") {
	              var top_diff = 0;
	              if (lookoutParams[3] !== undefined) {
	                top_diff = lookoutParams[3];
	              }

	              top = (( window.innerHeight - ProBtnControl.params.ContentSize.H) / 2) + parseFloat(top_diff);
	              console.log("lookoutAndOut top", top, ProBtnControl.params.ContentSize.H);
	            }
	            ;

	            btn.css({
	              left: left,
	              top: top,
	              position: 'absolute'
	            });
	          } catch (ex) {
	          }
	        },
	        //format title for fancybox\modal window
	        getTitleTextForModalWindow: function () {
	          var title = "";
	          var outVendorText = "";
	          if (ProBtnControl.params.Debug === true) {
	            outVendorText = ProBtnControl.params.VendorText + " " + ProBtnControl.mainVersion;
	          } else {
	            outVendorText = ProBtnControl.params.VendorText;
	          }

	          if ((outVendorText !== "") && (ProBtnControl.params.ButtonEnabled === true) && (ProBtnControl.params.ButtonVisible === true)) {
	            try {
	              title = "<style> .fancybox-title-inside-wrap {color: rgba(" + ProBtnControl.params.VendorColor.R + "," + ProBtnControl.params.VendorColor.G + "," + ProBtnControl.params.VendorColor.B + "," + ProBtnControl.params.VendorColor.A + "); text-align: center; } </style><a style='font-family: " + ProBtnControl.params.VendorTextFont.Family + "; font-size: " + ProBtnControl.params.VendorTextFont.Size + "px; color: rgba(" + ProBtnControl.params.VendorTextColor.R + "," + ProBtnControl.params.VendorTextColor.G + "," + ProBtnControl.params.VendorTextColor.B + "," + ProBtnControl.params.VendorTextColor.A + ")' onclick=\"window.window.postMessage({ command: 'probtn_performed_action', value: 'VendorSite_clicked' }, '*');\" href='" + ProBtnControl.params.VendorSite + "' target='_blank'>" + outVendorText + "</a>";
	            } catch (ex) {
	            }
	          }

	          return title;
	        },
	        //calculate and apply custom fancybox for sizes
	        youtubeModalWindowSizes: function () {
	          if ($("#youtube_fullscreen:visible").length > 0) {
	            var margins = ProBtnControl.additionalButtonFunctions.getFancyboxMargins();
	            var titleHeight = $(".fancybox-title").first().height();
	            var style = {
	              //t r b l
	              width: (window.innerWidth - margins[1] - margins[3]),
	              height: (window.innerHeight - margins[0] - margins[2] - titleHeight)
	            };

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
	        hideAll: function () {
	          ProBtnControl.closed = true;

	          //TODO: save and restore body margin to prevent errors with some custome sites
	          //check is extrusion mode enabled and restore body margin
	          switch (ProBtnControl.params.ExtrusionMode) {
	            case "topButton":
	              $('body').css("margin-top", "0px");
	              $('head').append('<style type="text/css">#probtn_wrapper { margin-top: 0px !important; position: absolute !important; }</style>');
	              break;
	            case "fixedTop":
	              $('body').css("margin-top", "0px");
	              $('head').append('<style type="text/css">#probtn_wrapper { margin-top: 0px !important; position: absolute !important; }</style>');
	              break;
	            default:
	              break;
	          }

	          ProBtnControl.statistics.SendStatObject({
	            //"Closed": 1,
	            "Hidded": 1
	          });

	          ProBtnControl.pizzabtn.stop(true, true);

	          ProBtnControl.pizzabtn.hide();
	          ProBtnControl.closeButton.remove();
	          ProBtnControl.additionalButtonFunctions.hideAllActiveZones();

	          ProBtnControl.initFunctions.initRemoveMenu();
	          //remove wrapper
	          //ProBtnControl.wrapper.remove();

	          ProBtnControl.initFunctions.stopWebAudio();

	          $("#fullscreen_probtn").remove();
	        },
	        //TODO
	        //fix incorrect written word Correct (insted of Corrent)
	        checkAndCorrentButtonPosition: function () {

	          switch (ProBtnControl.params.ExtrusionMode) {
	            case "insertBlock":
	              ProBtnControl.pizzabtn.css("top", 0);
	              ProBtnControl.pizzabtn.css("left", 0);
	              break;
	            default:
	              //check is button was moved and if nessesary correct it start position, overwise just correct it's position
	              if ((ProBtnControl.params.CorrectPositionBeforeMove === true) && (ProBtnControl.once_moved === false)) {
	                ProBtnControl.additionalButtonFunctions.setButtonStartPosition(ProBtnControl.pizzabtn);
	              } else {
	                if ((ProBtnControl.pizzabtn !== undefined) && (ProBtnControl.pizzabtn !== null)) {
	                  if (ProBtnControl.pizzabtn.position().left > (window.innerWidth - ProBtnControl.params.ButtonSize.W)) {
	                    ProBtnControl.pizzabtn.css("left", window.innerWidth - ProBtnControl.params.ButtonSize.W);
	                  }
	                  if (ProBtnControl.pizzabtn.css('top').replace('px', '') > (window.innerHeight - ProBtnControl.params.ButtonSize.H)) {
	                    ProBtnControl.pizzabtn.css("top", window.innerHeight - ProBtnControl.params.ButtonSize.H);
	                  }
	                }
	              }
	              break;
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
	          if (ProBtnControl.params.ButtonImageType == 'iframe') {
	            ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), ProBtnControl.params.ButtonIframeInitialSize, ProBtnControl.params.ButtonSize);
	          }

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
	                newWidth = buttonSize.Initial.W;
	                newHeight = buttonSize.Initial.H;

	                newWidthInit = buttonSize.Initial.W;
	                newHeightInit = buttonSize.Initial.H;

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
	              if ((ProBtnControl.params.ExtrusionMode === "insertBlock") || (ProBtnControl.params.ExtrusionMode === "fixedTop")) {
	                newWidth = $(ProBtnControl.params.ExtrusionPath).width() * (parseFloat(newWidth) / 100);
	              } else {
	                newWidth = window.innerWidth * (parseFloat(newWidth) / 100);
	              }

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

	              if ((ProBtnControl.params.ExtrusionMode === "insertBlock") || (ProBtnControl.params.ExtrusionMode === "fixedTop")) {
	                newHeight = $(ProBtnControl.params.ExtrusionPath).height() * (parseFloat(newHeight) / 100);
	              } else {
	                newHeight = window.innerHeight * (parseFloat(newHeight) / 100);
	              }

	              //if other param set to proportions
	              if ((parseFloat(newWidthInit) > 0) && (buttonSize.H.toString().indexOf('%') == -1)) {
	                newWidth = parseFloat(newWidthInit) * newHeight;
	              }
	            } else {
	            }
	            buttonSize.W = newWidth;
	            buttonSize.H = newHeight;

	            if (ProBtnControl.params.ExtrusionMode === "fixedTop") {
	              if ($('#probtn_button').height() !== null) {
	                $('body').css("margin-top", $('#probtn_button').height() + "px");
	                $('head').append('<style type="text/css">#probtn_wrapper { margin-top:' + "-" + $('#probtn_button').height() + 'px !important; position: fixed !important; }</style>');
	              } else {
	                $('body').css("margin-top", newHeight + "px");
	                $('head').append('<style type="text/css">#probtn_wrapper { margin-top:' + "-" + newHeight + 'px !important; position: fixed !important; }</style>');
	              }

	            }

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

	            var round_params = ProBtnControl.params.RoundButton.split('_');

	            var scaleX = ButtonSize.W / ButtonIframeInitialSize.W;
	            var scaleY = ButtonSize.H / ButtonIframeInitialSize.H;

	            if ((round_params[1] === "fill") && (round_params[0] === "auto")) {
	              scaleX = ButtonSize.W * 0.8 / ButtonIframeInitialSize.W;
	              scaleY = ButtonSize.H * 0.8 / ButtonIframeInitialSize.H;
	            }

	            //console.log("scale", scaleX, scaleY);

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
	          var output = contentURL.replace(/\[RANDOM\]/g, ProBtnControl.additionalButtonFunctions.randomString(12));
	          output = output.replace(/\%random\%/g, ProBtnControl.additionalButtonFunctions.randomString(12));

	          return output;
	        },
	        replaceDeviceUID: function (contentURL) {
	          return contentURL.replace(/\[DEVICEUID\]/g, ProBtnControl.GetDeviceUID());
	        },
	        replaceDeviceCUID: function (contentURL) {
	          return contentURL.replace(/\[DEVICECUID\]/g, ProBtnControl.DeviceCID);
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
	              };

	              download.onerror = function (err, msg) {
	                if (ProBtnControl.params.Debug) console.log(err);
	              };

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
	            };

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
	          }).prependTo(ProBtnControl.additionalItemsContainer);
	          $(probtn_TrackingLink).attr("src", clickCounterLink_random);
	        },
	        preloadIframe: function (iframePath) {

	        },
	        preloadIframeScrollZonesDone: false,
	        hideIframeScrollZones: function () {
	          $("iframe.pizzabtnImg_iframe_cached").attr("id", "");
	          $("iframe.pizzabtnImg_iframe_cached").hide();
	        },
	        preloadIframeScrollZones: function () {
	          if (ProBtnControl.additionalButtonFunctions.preloadIframeScrollZonesDone === false) {
	            ProBtnControl.additionalButtonFunctions.preloadIframeScrollZonesDone = true;


	            for (var i = 0; i < ProBtnControl.params.ScrollZones.length; i++) {
	              var scrollZone = ProBtnControl.params.ScrollZones[i];

	              if (scrollZone.CustomButtonParams) {
	                scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonSize);
	              } else {
	                scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
	              }

	              var pizzabtnCss = {
	                'width': scrollZone.ButtonSize.W,
	                'height': scrollZone.ButtonSize.H,
	                'opacity': scrollZone.ButtonOpacity,
	                'display': 'none',
	                'border': '0px'
	              };

	              pizzabtnCss.position = 'absolute';
	              pizzabtnCss.top = '0px';
	              var pizzabtnImg = null;
	              if (scrollZone.ButtonImageType == "iframe") {
	                var duplicate = false;
	                //TODO: don't add duplicates
	                for (var j = 0; j < ProBtnControl.params.ScrollZones.length; j++) {
	                  if (j !== i) {
	                    if ($(".pizzabtnImg_iframe_cached[rel='" + ProBtnControl.params.ScrollZones[j].Name + "']", ProBtnControl.pizzabtn).attr("src") === scrollZone.ButtonImage) {
	                      $(".pizzabtnImg_iframe_cached[rel='" + ProBtnControl.params.ScrollZones[j].Name + "']", ProBtnControl.pizzabtn).addClass(scrollZone.Name);
	                      duplicate = true;
	                    }

	                  }
	                }
	                if (duplicate === false) {
	                  pizzabtnImg = $("<iframe/>", {
	                    class: "pizzabtnImg_iframe_cached " + scrollZone.Name,
	                    scrolling: 'no',
	                    //id: "pizzabtnImg",
	                    rel: scrollZone.Name,
	                    'seamless': "seamless",
	                    src: scrollZone.ButtonImage,
	                    css: pizzabtnCss
	                  }).prependTo(ProBtnControl.pizzabtn);
	                }
	              } else {
	                pizzabtnImg = $("<img/>", {
	                  class: "pizzabtnImg_cached",
	                  scrolling: 'no',
	                  //id: "pizzabtnImg",
	                  rel: scrollZone.Name,
	                  'seamless': "seamless",
	                  src: scrollZone.ButtonImage,
	                  css: pizzabtnCss
	                }).prependTo(ProBtnControl.pizzabtn);
	              }
	            }
	          }
	        },
	        sendMessageToParent: function (type) {
	          if ((type === null) || (type === undefined)) {
	            type = "probtn_end_move";
	          }

	          ProBtnControl.additionalButtonFunctions.sendCustomMessageToParent({
	            type: type,
	            params: ProBtnControl.params,
	            button: ProBtnControl.pizzabtn.position()
	          });
	        },
	        sendMessageToCreative: function (object) {
	          if ($("#pizzabtnImg").is("iframe")) {

	            var myIframe = document.getElementById('pizzabtnImg');
	            myIframe.contentWindow.postMessage(object, '*');
	          }
	        },
	        sendMessageToModal: function (object) {
	          var frame_id = $(".fancybox-iframe").first().attr("id");
	          if ($("#" + frame_id).is("iframe")) {
	            try {
	              var myIframe = document.getElementById(frame_id);
	              if (myIframe.contentWindow !== null) {
	                iframeLoadedSend = true;
	                //console.log("iframe_showed_and_loaded");
	                myIframe.contentWindow.postMessage(object, '*');
	              }
	            } catch (ex) {
	              console.log(ex);
	            }
	          }
	        },
	        sendCustomMessageToParent: function (object) {
	          if (ProBtnControl.params.ControlInIframeFromParent === true) {
	            if (window.window !== window.top) {
	              window.top.postMessage(object, "*");
	            }
	          }
	        },
	        getWindowHeight: function () {
	          if (ProBtnControl.params.ControlInIframeFromParent === true) {
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
	          if (ProBtnControl.params.ControlInIframeFromParent === true) {
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
	          var pattern = new RegExp('(\\?|\\&)(' + paramName + '=).*?(&|$)');
	          var newUrl = url;
	          if (url.search(pattern) >= 0) {
	            newUrl = url.replace(pattern, '$1$2' + paramValue + '$3');
	          } else {
	            newUrl = newUrl + (newUrl.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
	          }
	          return newUrl;
	        },
	        //when window is resized or changed orientation on device
	        onOrientationChange: function (e) {
	          try {
	            if (((ProBtnControl.params.ButtonType === "expansionButton") || (ProBtnControl.params.ButtonType === "expansionVideo")) && (ProBtnControl.onButtonTapCountCheck > 0)) {
	              var newWidth = ProBtnControl.additionalButtonFunctions.getWindowWidth() - 20;
	              var newHeight = ProBtnControl.additionalButtonFunctions.getWindowHeight() - 20;

	              if (ProBtnControl.params.ButtonType === "expansionVideo") {
	                newHeight = newWidth * 0.5625;
	              }
	              if (ProBtnControl.onButtonTapCountCheck > 0) {
	                ProBtnControl.pizzabtn.css({
	                  'width': newWidth,
	                  'height': newHeight
	                });
	                $("#pizzabtnImg").css({
	                  'width': newWidth,
	                  'height': newHeight
	                });
	              }

	              return;
	            } else {
	              //update sizes for all percent values
	              ProBtnControl.additionalButtonFunctions.updateAllPercentSizes();
	              ProBtnControl.additionalButtonFunctions.checkAndCorrentButtonPosition();

	              try {
	                ProBtnControl.closeButton.center();
	              } catch (ex) {
	                if (ProBtnControl.params.Debug) console.log(ex);
	              }

	              if (ProBtnControl.params.ButtonContentType == "youtube") {
	                ProBtnControl.additionalButtonFunctions.youtubeModalWindowSizes();
	              }

	              if (ProBtnControl.params.ButtonType == "button_and_scroll_zones") {
	                ProBtnControl.initFunctions.initScrollChange("orientationChange");
	              }

	              //check is menu opened and update it's positions
	              if (ProBtnControl.params.ButtonType == "menu") {
	                if ($("#probtn_menu").length > 0) {
	                  ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                  });

	                  //fix button position for menu varians
	                  switch (ProBtnControl.params.MenuTemplateVariant) {
	                    case "radialcorner":
	                      $("#probtn_menu").css("left", 0);
	                      $("#probtn_menu").css("top", window.innerHeight - $("#probtn_menu").height());

	                      if (ProBtnControl.pizzabtn.position().left < (window.innerWidth - ProBtnControl.params.ButtonSize.W)) {
	                        ProBtnControl.pizzabtn.css("left", "0px");
	                      }
	                      if (ProBtnControl.pizzabtn.position().top < (window.innerHeight - ProBtnControl.params.ButtonSize.H)) {
	                        ProBtnControl.pizzabtn.css("top", window.innerHeight - ProBtnControl.params.ButtonSize.H);
	                      }
	                      break;
	                    case "circularCenter":
	                      ProBtnControl.pizzabtn.css("top", window.innerHeight / 2 - ProBtnControl.pizzabtn.height() / 2);
	                      ProBtnControl.pizzabtn.css("left",window.innerWidth / 2 - ProBtnControl.pizzabtn.width() / 2);

	                      ProBtnControl.menuClose.setPosition();

	                      ProBtnControl.initFunctions.circularMenuPositionUpdate();

	                      break;
	                    default:
	                      $("#probtn_menu").css("left", 0);
	                      $("#probtn_menu").css("top", (window.innerHeight - $("#probtn_menu").height() - ProBtnControl.params.ButtonSize.H));

	                      if (ProBtnControl.pizzabtn.position().left < (window.innerWidth - ProBtnControl.params.ButtonSize.W)) {
	                        ProBtnControl.pizzabtn.css("left", "0px");
	                      }
	                      if (ProBtnControl.pizzabtn.position().top < (window.innerHeight - ProBtnControl.params.ButtonSize.H)) {
	                        ProBtnControl.pizzabtn.css("top", window.innerHeight - ProBtnControl.params.ButtonSize.H);
	                      }
	                      break;
	                  }

	                }
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
	          } catch (ex) {
	          }

	          if (($.fancybox !== undefined) || (ProBtnControl.params.ButtonType === "fullscreen")) {
	            if ((isOpen) || (ProBtnControl.params.ButtonType === "fullscreen")) {
	              //resizefancybox

	              var contentSizeX = ProBtnControl.params.ContentSize.X;
	              var contentSizeY = ProBtnControl.params.ContentSize.Y;

	              //get fancybox margins
	              var margins = ProBtnControl.additionalButtonFunctions.getFancyboxMargins();

	              var newFancyboxWidth = window.innerWidth - margins[1] - margins[3];
	              var newFancyboxHeight = window.innerHeight - margins[0] - margins[2];

	              //get fancybox sizes
	              if (ProBtnControl.params.IsManualSize === true) {
	                if (ProBtnControl.params.ContentSize.X.indexOf('%') !== -1) {
	                  newFancyboxWidth = window.innerWidth * (parseFloat(ProBtnControl.params.ContentSize.X) / 100);
	                  contentSizeX = (parseFloat(ProBtnControl.params.ContentSize.X) / 100);
	                } else {
	                  newFancyboxWidth = ProBtnControl.params.ContentSize.X;
	                }

	                if (ProBtnControl.params.ContentSize.Y.indexOf('-') !== -1) {
	                  //console.log("fancyboxParams.width", newFancyboxWidth);
	                  newFancyboxHeight = newFancyboxWidth * Math.abs(ProBtnControl.params.ContentSize.H);
	                  //console.log("fancyboxParams.height", newFancyboxHeight, ProBtnControl.params.ContentSize.H, ProBtnControl.params.ContentSize);
	                  if (newFancyboxHeight > (window.innerHeight - ProBtnControl.pizzabtn.height())) {
	                    newFancyboxHeight = window.innerHeight - ProBtnControl.pizzabtn.height();
	                    newFancyboxWidth = newFancyboxHeight / Math.abs(ProBtnControl.params.ContentSize.H);
	                  }

	                } else {
	                  if (ProBtnControl.params.ContentSize.Y.indexOf('%') !== -1) {
	                    newFancyboxHeight = window.innerHeight * (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
	                  } else {
	                    newFancyboxHeight = ProBtnControl.params.ContentSize.Y;
	                  }
	                }

	                /*if (ProBtnControl.params.ContentSize.Y.indexOf('%') !== -1) {
	                                    newFancyboxHeight = window.innerHeight * (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
	                                    contentSizeY = (parseFloat(ProBtnControl.params.ContentSize.Y) / 100);
	                                } else {
	                                    newFancyboxHeight = ProBtnControl.params.ContentSize.Y;
	                                }*/
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
	              };

	              var newFancyboxWidthInner = newFancyboxWidth - $(".fancybox-title").width();
	              var newFancyboxHeightInner = newFancyboxHeight - $(".fancybox-title").height();

	              setFancyboxSizes();

	              var videoHeight = 0;
	              var videoWidth = 0;
	              //if (newFancyboxWidth < newFancyboxHeight) {
	              if ($('.fancybox-inner').width() > $('.fancybox-inner').height()) {
	                videoHeight = $('.fancybox-inner').height();
	                videoWidth = (videoHeight / ProBtnControl.params.VideoSize.Y) * ProBtnControl.params.VideoSize.X;

	                if (videoWidth > $('.fancybox-inner').width()) {
	                  videoWidth = $('.fancybox-inner').width();
	                  videoHeight = (videoWidth / ProBtnControl.params.VideoSize.X) * ProBtnControl.params.VideoSize.Y;
	                }
	              } else {
	                videoWidth = $('.fancybox-inner').width();
	                videoHeight = (videoWidth / ProBtnControl.params.VideoSize.X) * ProBtnControl.params.VideoSize.Y;

	                if (videoHeight > $('.fancybox-inner').height()) {
	                  videoHeight = $('.fancybox-inner').height();
	                  videoWidth = (videoHeight / ProBtnControl.params.VideoSize.Y) * ProBtnControl.params.VideoSize.X;
	                }
	              }

	              //set video sizes
	              $(".probtn_video_wrapper2").width($('.fancybox-inner').width());
	              $(".probtn_video_wrapper2").height($('.fancybox-inner').height());
	              $(".probtn_video").width(videoWidth);
	              $(".probtn_video").height(videoHeight);

	              setFancyboxSizes();


	              setTimeout(function () {
	                //setFancyboxSizes();


	                var forwardAndStopParams = ProBtnControl.params.isAnimation.split('_');
	                var additionalMode = "";
	                try {
	                  if ((forwardAndStopParams[3] !== null) && (forwardAndStopParams[3] !== undefined)) {
	                    additionalMode = forwardAndStopParams[3].toLowerCase();
	                  }
	                } catch (ex) {
	                }
	                if ((additionalMode === "openmodal")) {

	                  ProBtnControl.additionalButtonFunctions.setIfameSizes();

	                  $('.fancybox-skin').width($('.fancybox-wrap').width());
	                  $('.fancybox-skin').height($('.fancybox-wrap').height());

	                  ProBtnControl.pizzabtn.css("top", parseFloat($(".fancybox-wrap").position().top + $(".fancybox-wrap").height()));
	                }
	              }, 500);

	            }
	          }
	        },

	        changeBodySize: function () {
	          var opts = {
	            width: window.availWidth,
	            height: window.availHeight
	          };
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

	            var pizzabtn_wrapper = ProBtnControl.wrapper;
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
	            setTimeout(minimize, time);
	          } else {
	            minimize();
	          }
	        },
	        //maximiza button wrapper
	        MaximizeWrapper: function (callback) {
	          var pizzabtn_wrapper = ProBtnControl.wrapper;

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
	              ProBtnControl.pizzabtn.css({
	                left: newleft + 'px'
	              });
	            }
	          } catch (ex) {
	          }
	          try {
	            var scrollTop = 0;
	            scrollTop = $(window).scrollTop();

	            if ((ProBtnControl.pizzabtn.offset().top - scrollTop) > pizzabtn_wrapper.height()) {
	              var newtop = pizzabtn_wrapper.height() - ProBtnControl.pizzabtn.height();
	              ProBtnControl.pizzabtn.css({
	                top: newtop + 'px'
	              });
	            }
	          } catch (ex) {
	          }

	          try {
	            callback();
	          } catch (ex) {
	          }
	        },
	        animation: {
	          animationRuning: false,
	          //
	          pathAnimation: function (animationName) {

	            //crSpline animation
	            //path https://raw.githubusercontent.com/MmmCurry/jquery.crSpline/master/jquery.crSpline.js
	            //https://github.com/MmmCurry/jquery.crSpline/
	            (function ($) {

	              $.crSpline = {};

	              // Catmull-Rom interpolation between p0 and p1 for previous point p_1 and later point p2
	              // http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
	              var interpolate = function (t, p_1, p0, p1, p2) {
	                return Math.floor((t * ((2 - t) * t - 1) * p_1 +
	                  (t * t * (3 * t - 5) + 2) * p0 +
	                  t * ((4 - 3 * t) * t + 1) * p1 +
	                  (t - 1) * t * t * p2
	                ) / 2);
	              };

	              // Extend this p1,p2 sequence linearly to a new p3
	              var generateExtension = function (p1, p2) {
	                return [
	                  p2[0] + (p2[0] - p1[0]),
	                  p2[1] + (p2[1] - p1[1])
	                ];

	              };

	              var converPointList = function (initPointList) {
	                var pointList = [];
	                var initPointList_length = initPointList.length;

	                var ax, ab, countadd = 0;

	                if (initPointList[0].relative !== true) {
	                  pointList[0] = [ProBtnControl.pizzabtn.position().left, ProBtnControl.pizzabtn.position().top];
	                  countadd = 1;
	                }

	                for (var i = 0; i < initPointList_length; i++) {
	                  var x = initPointList[i].x;
	                  var y = initPointList[i].y;

	                  if (initPointList[i].scalable) {
	                    x = Math.round(initPointList[i].x * ProBtnControl.additionalButtonFunctions.getWindowWidth());
	                    y = Math.round(initPointList[i].y * ProBtnControl.additionalButtonFunctions.getWindowHeight());
	                  }

	                  if (i === 0) {
	                    ax = ProBtnControl.pizzabtn.position().left - x;
	                    ay = ProBtnControl.pizzabtn.position().top - y;
	                  }

	                  if (initPointList[i].relative === true) {
	                    //console.log("relative");
	                    y = y + ay;
	                    x = x + ax;
	                  }

	                  pointList[i + countadd] = [x, y];
	                }
	                ;
	                console.log("new pointList", pointList, JSON.stringify(pointList));

	                return pointList;
	              }

	              // Return an animation object based on a sequence of points
	              // pointList must be an array of [x,y] pairs
	              $.crSpline.buildSequence = function (rawPointList) {
	                var res = {};
	                var seq = [];
	                var numSegments;

	                var pointList = converPointList(rawPointList);

	                if (pointList.length < 2) {
	                  throw "crSpline.buildSequence requires at least two points";
	                }

	                // Generate the first p_1 so the caller doesn't need to provide it
	                seq.push(generateExtension(pointList[1], pointList[0]));

	                // Throw provided points on the list
	                for (var i = 0; i < pointList.length; i++) {
	                  seq.push(pointList[i]);
	                }

	                // Generate the last p2 so the caller doesn't need to provide it
	                seq.push(generateExtension(seq[seq.length - 2], seq[seq.length - 1]));

	                numSegments = seq.length - 3;

	                res.getPos = function (t) {
	                  // XXX For now, assume all segments take equal time
	                  var segNum = Math.floor(t * numSegments);
	                  if (segNum === numSegments) {
	                    return {
	                      left: seq[seq.length - 2][0],
	                      top: seq[seq.length - 2][1]
	                    };
	                  }
	                  var microT = (t - segNum / numSegments) * numSegments;
	                  var result = {
	                    left: interpolate(microT,
	                      seq[segNum][0],
	                      seq[segNum + 1][0],
	                      seq[segNum + 2][0],
	                      seq[segNum + 3][0]) + "px",
	                    top: interpolate(microT,
	                      seq[segNum][1],
	                      seq[segNum + 1][1],
	                      seq[segNum + 2][1],
	                      seq[segNum + 3][1]) + "px"
	                  };
	                  return result;
	                };
	                return res;
	              };

	              $.fx.step.crSpline = function (fx) {
	                var css = fx.end.getPos(fx.pos);
	                for (var i in css) {
	                  fx.elem.style[i] = css[i];
	                }
	              };

	            })(jQuery);

	            var animations = animationName.split('_');
	            var path = "";
	            var text = ProBtnControl.params.animationData;
	            ProBtnControl.params.animationData = $('<div/>').html(text).text();

	            try {
	              path = JSON.parse(ProBtnControl.params.animationData);
	            } catch (ex) {
	              //console.log(ex);
	              path = "";
	            }
	            var check = ((path === "") || (path === undefined) || (path === null));
	            if ((path === "") || (path === undefined) || (path === null)) {
	              path = [{
	                "x": 10,
	                "y": 10,
	                "type": "point"
	              }, {
	                "x": 30,
	                "y": 80,
	                "type": "point"
	              }, {
	                "x": 100,
	                "y": 200,
	                "type": "point"
	              }, {
	                "x": 320,
	                "y": 10,
	                "type": "point"
	              }];
	            }
	            //console.log("path2", path);

	            if (animations[0] === "path") {
	              ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                setTimeout(function () {
	                  $("#probtn_button").animate({
	                    crSpline: $.crSpline.buildSequence(path)
	                  }, ProBtnControl.params.animationDuration, function () {
	                    console.log("pathAnimation finished");
	                  });
	                }, ProBtnControl.params.animationDuration / 5);
	              });
	            }

	          },
	          opacityAnimation: function (animationName) {
	            //console.log("opacityAnimation1", animationName);
	            setTimeout(function () {
	              //console.log("opacityAnimation2", animationName);
	              var animations = animationName.split('_');
	              if (animations[0] == "opacity") {
	                var opacity_param = animations[1];
	                if ((opacity_param !== null) && (opacity_param !== undefined) && (!isNaN(opacity_param))) {
	                } else {
	                  opacity_param = 0.5;
	                }
	                ProBtnControl.additionalButtonFunctions.animation.animationRuning = true;

	                ProBtnControl.pizzabtn.animate({
	                  opacity: opacity_param
	                }, {
	                  duration: ProBtnControl.params.animationDuration,
	                  step: function (now) {
	                  },
	                  complete: ProBtnControl.additionalButtonFunctions.animation.doneAnimation
	                });
	              }
	            }, ProBtnControl.params.animationDuration / 2);
	          },
	          rolloutAnimation: function () {
	            var rolloutParams = ProBtnControl.params.isAnimation.split('_');

	            var side = "left";
	            try {
	              if ((rolloutParams[1] !== null) && (rolloutParams[1] !== undefined)) {
	                side = rolloutParams[1];
	              }
	            } catch (ex) {
	            }

	            if (rolloutParams[0] == "rollout") {

	              if (side == 'right') {
	                ProBtnControl.pizzabtn.css("left", $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 0.2));
	              } else {
	                ProBtnControl.pizzabtn.css("left", -(ProBtnControl.params.ButtonSize.W * 0.8));
	              }

	              var onScrollRollAnimation = function (e) {
	                //send message about scroll
	                //TODO: check new function
	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: "probtn_page_scroll"
	                });

	                var rollOutPercent = 80;
	                try {
	                  if ((rolloutParams[2] !== null) && (rolloutParams[2] !== undefined)) {
	                    rollOutPercent = rolloutParams[2];
	                  } else {
	                  }
	                } catch (ex) {
	                }

	                var doc = document.documentElement;
	                var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	                var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

	                var topButton = (window.innerHeight - (ProBtnControl.params.ButtonSize.H / 2)) * (ProBtnControl.params.ButtonPosition.Y);

	                var ua = navigator.userAgent.toLowerCase();
	                var isOpera = (ua.indexOf('opera') > -1);
	                var isIE = (!isOpera && ua.indexOf('msie') > -1);

	                var getViewportHeight = function () {
	                  return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight : (document.parentWindow || document.defaultView).innerHeight;
	                };

	                var getDocumentHeight = function () {
	                  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, getViewportHeight());
	                };

	                var currentButtonHeight = ProBtnControl.pizzabtn.position().top;
	                var buttonHeight = currentButtonHeight + top;

	                if (side === 'right') {
	                  ProBtnControl.pizzabtn.css("left", $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 0.2) - ((rollOutPercent / 100) * $('body').innerWidth()) * ((buttonHeight - topButton) / getDocumentHeight()));
	                } else {
	                  ProBtnControl.pizzabtn.css("left", -(ProBtnControl.params.ButtonSize.W * 0.8) + ((rollOutPercent / 100) * $('body').innerWidth()) * ((buttonHeight - topButton) / getDocumentHeight()));
	                }

	              };

	              $(window).scroll(onScrollRollAnimation);
	            }
	          },
	          lookoutAndOutAnimation: function () {
	            var lookoutParams = ProBtnControl.params.isAnimation.split('_');

	            var side = "left";
	            try {
	              if ((lookoutParams[1] !== null) && (lookoutParams[1] !== undefined)) {
	                side = lookoutParams[1];
	              }
	            } catch (ex) {
	            }

	            if (lookoutParams[0] == "lookoutAndOut") {

	              ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transition-property", "left, top");
	              ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	              if (side == 'right') {
	                ProBtnControl.pizzabtn.css("left", $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 0.2));
	              } else {
	                ProBtnControl.pizzabtn.css("left", -(ProBtnControl.params.ButtonSize.W * 0.8));
	              }

	              var rollOutPercent = 50;
	              try {
	                if ((lookoutParams[2] !== null) && (lookoutParams[2] !== undefined)) {
	                  rollOutPercent = lookoutParams[2];
	                } else {
	                }
	              } catch (ex) {
	                console.log(ex);
	              }
	              rollOutPercent = rollOutPercent / 100;

	              var lookoutCount = 0;

	              var onBackLookOut = function (e) {
	                console.log("onBackLookOut");
	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: "probtn_lookoutandout_stop"
	                });

	                ProBtnControl.lookOutTimeout2 = setTimeout(function () {
	                  var left = -(ProBtnControl.params.ButtonSize.W * 0.8);
	                  if (side === 'right') {
	                    left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 0.2);
	                  }

	                  ProBtnControl.pizzabtn.stop(true, false);

	                  ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                    message: "probtn_lookoutandout_start"
	                  });

	                  ProBtnControl.pizzabtn.animate({
	                    left: left
	                  }, {
	                    duration: ProBtnControl.params.animationDuration,
	                    easing: "linear",
	                    complete: onLookOut
	                  });
	                }, ProBtnControl.params.animationDuration / 2);
	              };

	              var onLookOut = function (e) {
	                console.log("onLookOut");
	                lookoutCount++;
	                var left = 0;
	                if ((lookoutCount < 2)) {
	                  //setTimeout(function() {
	                  left = -(ProBtnControl.params.ButtonSize.W * rollOutPercent);

	                  if (side == 'right') {
	                    left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * rollOutPercent);
	                  }
	                  console.log("left", left);

	                  ProBtnControl.pizzabtn.stop(true, false);

	                  ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                    message: "probtn_lookoutandout_start"
	                  });

	                  ProBtnControl.pizzabtn.animate({
	                    left: left
	                  }, {
	                    duration: ProBtnControl.params.animationDuration,
	                    easing: "linear",
	                    complete: onBackLookOut,
	                    queue: true
	                  });
	                  //}, ProBtnControl.params.animationDuration);
	                } else {
	                  left = (ProBtnControl.params.ButtonSize.W * 1.2);
	                  if (side == 'right') {
	                    left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 1.2);
	                  }
	                  ProBtnControl.pizzabtn.animate({
	                    left: left
	                  }, {
	                    duration: ProBtnControl.params.animationDuration,
	                    easing: "linear",
	                    complete: function (e) {

	                      ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                        message: "probtn_lookoutandout_stop"
	                      });

	                      ProBtnControl.lookOutTimeout = setTimeout(function () {
	                        console.log("lookout timeout click now");
	                        ProBtnControl.statistics.SendStatisticsData("Showed", 1);
	                        ProBtnControl.onButtonTap();
	                      }, 10000);
	                    }
	                  });
	                }
	              };

	              //onLookOut();
	              //FIX IT!!!
	              ProBtnControl.lookOutTimeout2 = setTimeout(onLookOut, ProBtnControl.params.animationDuration / 2);
	            }
	          },
	          lookoutAnimation: function () {
	            var lookoutParams = ProBtnControl.params.isAnimation.split('_');

	            var side = "left";
	            try {
	              if ((lookoutParams[1] !== null) && (lookoutParams[1] !== undefined)) {
	                side = lookoutParams[1];
	              }
	            } catch (ex) {
	            }

	            if (lookoutParams[0] == "lookout") {

	              ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transition-property", "left, top");
	              ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	              if (side == 'right') {
	                ProBtnControl.pizzabtn.css("left", $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 0.2));
	              } else {
	                ProBtnControl.pizzabtn.css("left", -(ProBtnControl.params.ButtonSize.W * 0.8));
	              }

	              var rollOutPercent = 30;
	              try {
	                if ((lookoutParams[2] !== null) && (lookoutParams[2] !== undefined)) {
	                  rollOutPercent = lookoutParams[2];
	                } else {
	                }
	              } catch (ex) {
	              }

	              try {
	                if ((lookoutParams[2] !== null) && (lookoutParams[2] !== undefined)) {
	                  rollOutPercent = lookoutParams[2];
	                } else {
	                }
	              } catch (ex) {
	              }

	              var onBackLookOut = function (e) {
	                setTimeout(function () {
	                  var left = -(ProBtnControl.params.ButtonSize.W * 0.8);
	                  if (side === 'right') {
	                    left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 0.2);
	                  }

	                  ProBtnControl.pizzabtn.stop(true, true);
	                  ProBtnControl.pizzabtn.animate({
	                    left: left
	                  }, {
	                    duration: ProBtnControl.params.animationDuration,
	                    easing: "linear",
	                    complete: onLookOut
	                  });
	                }, ProBtnControl.params.animationDuration);
	              };

	              var onLookOut = function (e) {
	                setTimeout(function () {
	                  var left = -(ProBtnControl.params.ButtonSize.W * 0.1);
	                  if (side == 'right') {
	                    left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W * 0.9);
	                  }

	                  ProBtnControl.pizzabtn.stop(true, true);
	                  ProBtnControl.pizzabtn.animate({
	                    left: left
	                  }, {
	                    duration: ProBtnControl.params.animationDuration,
	                    easing: "linear",
	                    complete: onBackLookOut
	                  });
	                }, ProBtnControl.params.animationDuration);
	              };

	              setTimeout(onLookOut, ProBtnControl.params.animationDuration);
	            }
	          },
	          cornerToCornerAnimation: function () {
	            if ((ProBtnControl.params.isAnimation === "anim1") || (ProBtnControl.params.isAnimation === "anim2")) {
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
	              });

	            }
	          },
	          forwardStopAndAwayAnimation: function () {
	            var forwardStopAndAwayParams = ProBtnControl.params.isAnimation.split('_');

	            //console.log("forwardStopAndAwayParams", forwardStopAndAwayParams);

	            //get side from isAnimation param
	            var side = "left";
	            try {
	              if ((forwardStopAndAwayParams[1] !== null) && (forwardStopAndAwayParams[1] !== undefined)) {
	                side = forwardStopAndAwayParams[1];
	              }
	            } catch (ex) {
	            }

	            if (forwardStopAndAwayParams[0] == "forwardStopAndAway") {


	              ProBtnControl.pizzabtn.stop(true, true);
	              //set start position for button
	              if (side === 'right') {
	                ProBtnControl.pizzabtn.css("left", $('body').innerWidth());
	              } else {
	                ProBtnControl.pizzabtn.css("left", -ProBtnControl.params.ButtonSize.W - 10);
	                ProBtnControl.pizzabtn.stop(true, true);
	              }

	              window.setTimeout(function () {

	                var left = $('body').innerWidth() / 2 - (ProBtnControl.params.ButtonSize.W) / 2;
	                //set first stop position for button
	                if (side === 'right') {
	                  left = $('body').innerWidth() / 2 - (ProBtnControl.params.ButtonSize.W) / 2;
	                }

	                ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	                ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	                ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	                ProBtnControl.pizzabtn.css("transition-property", "left, top");
	                ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	                ProBtnControl.pizzabtn.stop(true, true);

	                //window.setTimeout(function () {
	                if ((ProBtnControl.params.ButtonDragImage !== null) || (ProBtnControl.params.ButtonDragImage !== undefined)) {

	                  $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", ProBtnControl.params.ButtonDragImage);
	                }
	                ProBtnControl.pizzabtn.animate({
	                  left: left
	                }, {
	                  duration: ProBtnControl.params.animationDuration,
	                  easing: "linear",
	                  done: function () {
	                    if ((ProBtnControl.params.ButtonImage !== null) || (ProBtnControl.params.ButtonImage !== undefined)) {
	                      $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", ProBtnControl.params.ButtonImage);
	                    }
	                    window.setTimeout(function () {
	                      var left = $('body').innerWidth() + (ProBtnControl.params.ButtonSize.W) + 20;
	                      if (side === 'right') {
	                        left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W) - 20;
	                      }

	                      ProBtnControl.pizzabtn.stop(true, true);
	                      if ((ProBtnControl.params.ButtonDragImage !== null) || (ProBtnControl.params.ButtonDragImage !== undefined)) {
	                        $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", ProBtnControl.params.ButtonDragImage);
	                      }

	                      ProBtnControl.pizzabtn.animate({
	                        left: left
	                      }, {
	                        step: function (now) {
	                        },
	                        duration: ProBtnControl.params.animationDuration,
	                        easing: "linear"
	                      });
	                    }, ProBtnControl.params.animationDuration);
	                  }
	                });
	                //}, (ProBtnControl.params.animationDuration / 5));
	              }, ProBtnControl.params.animationDuration);
	            }
	          },
	          upToDownAnimation: function () {
	            var upToDownParams = ProBtnControl.params.isAnimation.split('_');

	            var side = "up";
	            try {
	              if ((upToDownParams[1] !== null) && (upToDownParams[1] !== undefined)) {
	                side = upToDownParams[1];
	              }
	            } catch (ex) {
	            }


	            var firstPartDuration = ProBtnControl.params.animationDuration / 2;
	            try {
	              if ((upToDownParams[2] !== null) && (upToDownParams[2] !== undefined)) {
	                firstPartDuration = upToDownParams[2];
	              }
	            } catch (ex) {
	            }

	            var additionalMode = "";
	            var heightPercent = "1";

	            if (upToDownParams[0].toLowerCase() === "upToDown".toLowerCase()) {

	              if (side === 'down') {
	                ProBtnControl.pizzabtn.css("top", window.innerHeight - (ProBtnControl.params.ButtonSize.H));
	              } else {
	                ProBtnControl.pizzabtn.css("top", 0);
	              }

	              var vertical = window.innerHeight * heightPercent - (ProBtnControl.params.ButtonSize.H);
	              if (side === 'down') {
	                vertical = window.innerHeight * (1 - heightPercent);
	              }

	              ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transition-property", "left, top");
	              ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	              ProBtnControl.pizzabtn.stop(true, true);

	              var probtnIframeEvent = function (name, data) {
	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: name,
	                  data: data
	                });
	              };

	              setTimeout(function () {
	                probtnIframeEvent("probtn_upToDown_start");
	                ProBtnControl.pizzabtn.animate({
	                  top: vertical
	                }, {
	                  duration: ProBtnControl.params.animationDuration,
	                  complete: function () {
	                    console.log("compelete");
	                    probtnIframeEvent("probtn_upToDown_stop", ProBtnControl.pizzabtn.position());

	                    setTimeout(function () {

	                      ProBtnControl.pizzabtn.stop(true, true);
	                    }, ProBtnControl.params.animationDuration);
	                  },
	                  done: function () {

	                  }
	                });
	              }, firstPartDuration);

	            }
	          },
	          forwardAndStopAnimation: function () {
	            var forwardAndStopParams = ProBtnControl.params.isAnimation.split('_');

	            var side = "left";
	            try {
	              if ((forwardAndStopParams[1] !== null) && (forwardAndStopParams[1] !== undefined)) {
	                side = forwardAndStopParams[1];
	              }
	            } catch (ex) {
	            }


	            var firstPartDuration = ProBtnControl.params.animationDuration / 2;
	            try {
	              if ((forwardAndStopParams[2] !== null) && (forwardAndStopParams[2] !== undefined)) {
	                firstPartDuration = forwardAndStopParams[2];
	              }
	            } catch (ex) {
	            }


	            var additionalMode = "";
	            try {
	              if ((forwardAndStopParams[3] !== null) && (forwardAndStopParams[3] !== undefined)) {
	                additionalMode = forwardAndStopParams[3];
	              }
	            } catch (ex) {
	            }

	            var widthPercent = "1";
	            try {
	              if ((forwardAndStopParams[4] !== null) && (forwardAndStopParams[4] !== undefined)) {
	                widthPercent = forwardAndStopParams[4];
	              }
	            } catch (ex) {
	            }

	            if (forwardAndStopParams[0] == "forwardAndStop") {

	              if (side == 'right') {
	                ProBtnControl.pizzabtn.css("left", $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W));
	              } else {
	                ProBtnControl.pizzabtn.css("left", 0);
	              }

	              var left = $('body').innerWidth() * widthPercent - (ProBtnControl.params.ButtonSize.W);
	              if (side === 'right') {
	                left = $('body').innerWidth() * (1 - widthPercent);
	              }

	              ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transition-property", "left, top");
	              ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	              ProBtnControl.pizzabtn.stop(true, true);

	              var probtnIframeEvent = function (name, data) {
	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: name,
	                  data: data
	                });
	              };

	              setTimeout(function () {
	                probtnIframeEvent("probtn_forwardAndStop_start");
	                ProBtnControl.pizzabtn.animate({
	                  left: left
	                }, {
	                  duration: ProBtnControl.params.animationDuration,
	                  complete: function () {
	                    console.log("compelete");
	                    probtnIframeEvent("probtn_forwardAndStop_stop", ProBtnControl.pizzabtn.position());
	                    /*ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                                            message: "probtn_forwardAndStop_stop",
	                                            data: ProBtnControl.pizzabtn.position()
	                                        });*/


	                    switch (additionalMode) {
	                      case "openModal":
	                        if (!ProBtnControl.closed) {
	                          console.log("ProBtnControl.once_moved", ProBtnControl.once_moved);
	                          if (true) { // !ProBtnControl.once_moved
	                            console.log("open modal param");
	                            //ProBtnControl.statistics.SendStatisticsData("Showed", 1);
	                            ProBtnControl.onButtonTap();
	                          }
	                        }
	                        break;
	                      case "maximizeButton":
	                        var newWidth = ProBtnControl.additionalButtonFunctions.getWindowWidth() - 0;
	                        var newHeight = ProBtnControl.additionalButtonFunctions.getWindowHeight() - 0;

	                        ProBtnControl.pizzabtn.css("left", "0px");
	                        ProBtnControl.pizzabtn.css("top", "0px");

	                        ProBtnControl.pizzabtn.css("width", newWidth);
	                        ProBtnControl.pizzabtn.css("height", newHeight);

	                        $("#pizzabtnImg").css("width", newWidth);
	                        $("#pizzabtnImg").css("height", newHeight);
	                        break;
	                      default:
	                    }

	                    setTimeout(function () {
	                      var left = 0;
	                      if (side == 'right') {
	                        left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W);
	                      }

	                      ProBtnControl.pizzabtn.stop(true, true);
	                    }, ProBtnControl.params.animationDuration);
	                  },
	                  done: function () {

	                  }
	                });
	              }, firstPartDuration);

	            }
	          },
	          forwardAndBackAnimation: function () {

	            var forwardAndBackParams = ProBtnControl.params.isAnimation.split('_');

	            var side = "left";
	            try {
	              if ((forwardAndBackParams[1] !== null) && (forwardAndBackParams[1] !== undefined)) {
	                side = forwardAndBackParams[1];
	              }
	            } catch (ex) {
	            }

	            var pauseDuration = ProBtnControl.params.animationDuration / 2;
	            try {
	              if ((forwardAndBackParams[2] !== null) && (forwardAndBackParams[2] !== undefined)) {
	                pauseDuration = forwardAndBackParams[2];
	              }
	            } catch (ex) {
	            }

	            var stopDuration = 0;
	            try {
	              if ((forwardAndBackParams[3] !== null) && (forwardAndBackParams[3] !== undefined)) {
	                stopDuration = forwardAndBackParams[3];
	              }
	            } catch (ex) {
	            }

	            if (forwardAndBackParams[0] == "forwardAndBack") {
	              //ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	              if (side == 'right') {
	                ProBtnControl.pizzabtn.css("left", $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W));
	              } else {
	                ProBtnControl.pizzabtn.css("left", 0);
	              }

	              var left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W);
	              if (side == 'right') {
	                left = 0;
	              }

	              ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transition-property", "left, top");
	              ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	              ProBtnControl.pizzabtn.stop(true, true);

	              var probtnIframeEvent = function (name) {
	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: name
	                });
	              };

	              setTimeout(function () {
	                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                  //console.log("MaximizeWrapper forwardAndBack 2");
	                  probtnIframeEvent("probtn_forwardAndBack_start");

	                  ProBtnControl.pizzabtn.animate({
	                    left: left
	                  }, {
	                    duration: ProBtnControl.params.animationDuration,
	                    easing: "linear",
	                    done: function () {
	                      probtnIframeEvent("probtn_forwardAndBack_stop");
	                      window.setTimeout(function () {
	                        var left = 0;
	                        if (side == 'right') {
	                          left = $('body').innerWidth() - (ProBtnControl.params.ButtonSize.W);
	                        }

	                        ProBtnControl.pizzabtn.stop(true, true);
	                        probtnIframeEvent("probtn_forwardAndBack_reverse");
	                        probtnIframeEvent("probtn_forwardAndBack_start");
	                        probtnIframeEvent("probtn_forwardAndBack_start_reverse");
	                        ProBtnControl.pizzabtn.animate({
	                          left: left
	                        }, {
	                          duration: ProBtnControl.params.animationDuration,
	                          easing: "linear",
	                          done: function () {
	                            probtnIframeEvent("probtn_forwardAndBack_stop");
	                            probtnIframeEvent("probtn_forwardAndBack_stop_reverse");

	                            setTimeout(function () {
	                              ProBtnControl.additionalButtonFunctions.MinimizeWrapper();
	                            }, stopDuration);

	                          }
	                        });
	                      }, pauseDuration);
	                    }
	                  });
	                }, 50);
	              }, (ProBtnControl.params.animationDuration / 2));
	              //}, 0);
	            }
	          },
	          TopToBottomAndStopAnimation: function () {
	            var forwardAndStopParams = ProBtnControl.params.isAnimation.split('_');

	            var side = "top";
	            try {
	              if ((forwardAndStopParams[1] !== null) && (forwardAndStopParams[1] !== undefined)) {
	                side = forwardAndStopParams[1];
	              }
	            } catch (ex) {
	            }


	            var firstPartDuration = ProBtnControl.params.animationDuration / 2;
	            try {
	              if ((forwardAndStopParams[2] !== null) && (forwardAndStopParams[2] !== undefined)) {
	                firstPartDuration = forwardAndStopParams[2];
	              }
	            } catch (ex) {
	            }


	            var additionalMode = "";
	            try {
	              if ((forwardAndStopParams[3] !== null) && (forwardAndStopParams[3] !== undefined)) {
	                additionalMode = forwardAndStopParams[3];
	              }
	            } catch (ex) {
	            }

	            if (forwardAndStopParams[0].toLowerCase() == "TopToBottomAndStop".toLowerCase()) {

	              if (side == 'bottom') {
	                ProBtnControl.pizzabtn.css("top", ProBtnControl.additionalButtonFunctions.getWindowHeight() - (ProBtnControl.params.ButtonSize.H));
	              } else {
	                ProBtnControl.pizzabtn.css("top", 0);
	              }

	              var top = ProBtnControl.additionalButtonFunctions.getWindowHeight() - (ProBtnControl.params.ButtonSize.H);
	              if (side == 'bottom') {
	                top = 0;
	              }

	              ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transition-property", "left, top");
	              ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	              ProBtnControl.pizzabtn.stop(true, true);

	              var probtnIframeEvent = function (name, data) {
	                if ($("#pizzabtnImg").is("iframe")) {
	                  var myIframe = document.getElementById('pizzabtnImg');
	                  myIframe.contentWindow.postMessage({
	                    message: name,
	                    data: data
	                  }, '*');
	                }
	              };

	              setTimeout(function () {
	                probtnIframeEvent("probtn_topToBottomAndStop_start");

	                ProBtnControl.pizzabtn.animate({
	                  top: top
	                }, {
	                  duration: ProBtnControl.params.animationDuration,
	                  done: function () {
	                    probtnIframeEvent("probtn_topToBottomAndStop_stop", ProBtnControl.pizzabtn.position());

	                    switch (additionalMode) {
	                      case "maximizeButton":
	                        break;
	                      default:
	                    }

	                    setTimeout(function () {
	                      var top = 0;
	                      if (side == 'bottom') {
	                        top = ProBtnControl.additionalButtonFunctions.getWindowHeight() - (ProBtnControl.params.ButtonSize.H);
	                      }

	                      ProBtnControl.pizzabtn.stop(true, true);
	                    }, ProBtnControl.params.animationDuration);
	                  }
	                });
	              }, firstPartDuration);

	            }
	          },
	          ToCenterAnimation: function () {
	            var ToCenterAnimationParams = ProBtnControl.params.isAnimation.split('_');

	            var delay = 1000;
	            try {
	              if ((ToCenterAnimationParams[2] !== null) && (ToCenterAnimationParams[2] !== undefined)) {
	                delay = ToCenterAnimationParams[1];
	              }
	            } catch (ex) {
	            }

	            if (ToCenterAnimationParams[0].toLowerCase() == "ToCenter".toLowerCase()) {

	              var top = (ProBtnControl.additionalButtonFunctions.getWindowHeight() - (ProBtnControl.params.ButtonSize.H))/2;
	              var left = (ProBtnControl.additionalButtonFunctions.getWindowWidth() - (ProBtnControl.params.ButtonSize.W))/2;

	              ProBtnControl.pizzabtn.css("-webkit-transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transform", "translateZ(0)");
	              ProBtnControl.pizzabtn.css("transition-property", "left, top");
	              ProBtnControl.pizzabtn.css("-webkit-transition-property", "left, top");

	              ProBtnControl.pizzabtn.stop(true, true);

	              var probtnIframeEvent = function (name, data) {
	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: name,
	                  data: data
	                });
	              };

	              setTimeout(function() {
	                probtnIframeEvent("probtn_topToCenter_start");

	                ProBtnControl.pizzabtn.animate({
	                  top: top,
	                  left: left
	                }, {
	                  duration: ProBtnControl.params.animationDuration,
	                  done: function () {
	                    probtnIframeEvent("probtn_topToCenter_stop", ProBtnControl.pizzabtn.position());
	                  }
	                });
	              }, delay);

	            }
	          },
	          checkAndRunAnimation: function () {

	            setTimeout(function () {

	              //console.log("ProBtnControl.params.isAnimation", ProBtnControl.params.isAnimation);

	              //$(document).ready(function () {
	              ProBtnControl.additionalButtonFunctions.animation.cornerToCornerAnimation();

	              ProBtnControl.additionalButtonFunctions.animation.rolloutAnimation();
	              ProBtnControl.additionalButtonFunctions.animation.lookoutAnimation();

	              ProBtnControl.additionalButtonFunctions.animation.lookoutAndOutAnimation();

	              ProBtnControl.additionalButtonFunctions.animation.forwardAndBackAnimation();
	              ProBtnControl.additionalButtonFunctions.animation.forwardAndStopAnimation();
	              ProBtnControl.additionalButtonFunctions.animation.upToDownAnimation();


	              ProBtnControl.additionalButtonFunctions.animation.TopToBottomAndStopAnimation();

	              //ProBtnControl.additionalButtonFunctions.animation.forwardAndBackAnimation();
	              ProBtnControl.additionalButtonFunctions.animation.forwardStopAndAwayAnimation();


	              ProBtnControl.additionalButtonFunctions.animation.opacityAnimation(ProBtnControl.params.isAnimation);

	              ProBtnControl.additionalButtonFunctions.animation.pathAnimation(ProBtnControl.params.isAnimation);

	              ProBtnControl.additionalButtonFunctions.animation.ToCenterAnimation(ProBtnControl.params.isAnimation);

	              //});
	            }, 400);
	          },
	          getRotationCss: function (deg, origin) {
	            if ((origin === null) && (origin === undefined)) {
	              origin = '50% 50%';
	            }
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
	            if ((ProBtnControl.params.ButtonAnimationDoneImage !== "") && (ProBtnControl.params.ButtonAnimationDoneImage !== undefined)) {
	              ProBtnControl.params.ButtonImage = ProBtnControl.params.ButtonAnimationDoneImage;
	              $("#pizzabtnImg", ProBtnControl.pizzabtn).attr('src', ProBtnControl.params.ButtonAnimationDoneImage);
	            }

	            ProBtnControl.additionalButtonFunctions.MinimizeWrapper();
	          }
	        },
	        //search for active zone by name
	        getCurrentActiveArea: function (areaName) {
	          if (((ProBtnControl.params.ActiveZones !== null) || (ProBtnControl.params.ActiveZones.length > 0)) && (ProBtnControl.params.ButtonType === "button_and_active_zones")) {

	            for (var i = 0; i < ProBtnControl.params.ActiveZones.length; i++) {
	              var currentActiveZone = ProBtnControl.params.ActiveZones[i];
	              if (currentActiveZone.Name === areaName) {
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
	          var margins = [70, 70, 70, 70];
	          if ((ProBtnControl.params.ContentInsets.T < 0) || (ProBtnControl.params.ContentInsets.B < 0) || (ProBtnControl.params.ContentInsets.L < 0) || (ProBtnControl.params.ContentInsets.R < 0)) {
	            var isMobileLandscape = (ProBtnControl.additionalButtonFunctions.isLandscape() && ProBtnControl.userData.mobile);
	            margins = (isMobileLandscape) ? [ProBtnControl.params.ButtonSize.H / 4, ProBtnControl.params.ButtonSize.H / 4 + 5, ProBtnControl.params.ButtonSize.H / 4, ProBtnControl.params.ButtonSize.H / 4 + 5] : [ProBtnControl.params.ButtonSize.H + 5, ProBtnControl.params.ButtonSize.H / 2, ProBtnControl.params.ButtonSize.H + 5, ProBtnControl.params.ButtonSize.H / 2];

	            if ((ProBtnControl.userData.mobile) && (ProBtnControl.params.ButtonSize.H > 70)) {
	              margins = [ProBtnControl.params.ButtonSize.H / 8, ProBtnControl.params.ButtonSize.H / 8, ProBtnControl.params.ButtonSize.H / 8, ProBtnControl.params.ButtonSize.H / 8];
	            } else {
	              if (ProBtnControl.params.ButtonSize.H > 70) {
	                margins = [70, 70, 70, 70];
	              }
	            }
	          } else {
	            margins = [ProBtnControl.params.ContentInsets.T, ProBtnControl.params.ContentInsets.R, ProBtnControl.params.ContentInsets.B, ProBtnControl.params.ContentInsets.L];
	          }
	          return margins;
	        },
	        setIfameSizes: function () {
	          if (ProBtnControl.userData.mobile) {
	            //$(".fancybox-iframe").first().attr("scrolling", "no");
	            //$(".fancybox-iframe").first().width($(".fancybox-inner").first().width());
	            $(".fancybox-iframe").first().css("margin-bottom", "-5000px");
	            $(".fancybox-iframe").css("margin-bottom", "-5000px");
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

	          };

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

	    ProBtnControl.statistics.callSuperPixelExt("StartButton");

	    //check that all is initialized and start button
	    var allButtonInitStart = function () {
	      ProBtnControl.statistics.callSuperPixelExt("allButtonInitStart_" + ProBtnControl.allButtonInit);
	      if (ProBtnControl.allButtonInit === false) {
	        ProBtnControl.allButtonInit = true;

	        ProBtnControl.initFunctions.initButtonAndUserDeviceInfo();
	      }
	    };

	    var getUserDataFunction = function() {
	      ProBtnControl.userDataFunction(function () {
	        window.probtn_ButtonContentType = null;

	        ProBtnControl.HpmdFunctions.probtnHpmdTrack(1);

	        if (document.readyState === 'complete') {
	          ProBtnControl.statistics.callSuperPixelExt("Init_document_readyState_complete");
	          allButtonInitStart();
	        }

	        $(window).bind("load", function () {
	          ProBtnControl.statistics.callSuperPixelExt("Init_load");
	          if (ProBtnControl.params.Debug) console.log("windows bind load");
	          allButtonInitStart();
	        });

	        //start hpmd tracking event
	        ProBtnControl.HpmdFunctions.probtnHpmdTrack(1);

	        setTimeout(function () {
	          ProBtnControl.statistics.callSuperPixelExt("Init_timeout");
	          if (ProBtnControl.params.Debug) console.log("setTimeout");
	          allButtonInitStart();
	        }, 2000);
	      });
	    }

	    try {
	      if (typeof DeviceAtlas !== 'undefined') {
	        getUserDataFunction(null);
	      } else {
	        $.getScript(ProBtnControl.atlasPath, getUserDataFunction);
	        //getUserDataFunction(null);
	      }
	    } catch (ex) {
	      console.log("ex deviceatlas",ex);
	      getUserDataFunction(null);
	    }

	    function allButton1() {
	      ProBtnControl.statistics.callSuperPixelExt("allButton1");

	      if (!((ProBtnControl.userData.browserMajorVersion > "8") || (ProBtnControl.userData.browser !== "Microsoft Internet Explorer"))) {
	        //console.log("IE8 not supported.");
	      } else {

	        try {
	          if ($("#probtn_additional_params").length > 0) {
	            var textData = $("#probtn_additional_params").text();
	            textData = JSON.parse(textData);
	            //console.log("textData", textData);
	            options = $.extend(true, {}, textData, options);
	          }
	        } catch (ex) {
	          if (ProBtnControl.params.Debug) console.log(ex);
	        }

	        ProBtnControl.statistics.callSuperPixelExt("allButton1_not_ie");
	        //init default params
	        ProBtnControl.params = $.extend(true, {

	          BrandingImage: "", //image which would be used as background-image for #probtn_wrapper

	          CorrectPositionBeforeMove: true, //should we coreect button position before button moves first time

	          OnNoShowPixel: "", //pixel when button is disabled
	          OnShowPixel: "", //pixel when button is showed

	          ButtonInjectPath: "body",

	          LocationPoints: [], //lcations we should check before showing button
	          RequireLocation: false, //should we check geolocation after get settings from admin.probtn.com

	          useGuidIframe: true, //create and use iframe to get guid of user

	          waitIframeLoadedMsg: false,
	          waitContentLoadedMsg: false,

	          //aditional data for animation, for example complex path for button movement
	          animationData: "",

	          RoundButton: "none",
	          LockBody: false, //when modal windows opened, using css to <body> we hide scrolls and set width and height to a 100% - to prevent strange things with keyboard ad input fields on ios

	          CloseButtonShowDelay: 0, //delay before showing close button when AlwaysShowCloseButton == true

	          SoundURL: "",
	          SoundMode: "",

	          ExternalData: {},

	          ExternalDataSources: [{
	            Name: "ASource3",
	            Source: "https://demo.probtn.com/button_example4/externalData/iframe3/",
	            Priority: 13
	          }, {
	            Name: "Source1",
	            Source: "https://demo.probtn.com/button_example4/externalData/iframe1/",
	            Priority: 1
	          }, {
	            Name: "Source2",
	            Source: "https://demo.probtn.com/button_example4/externalData/iframe2/",
	            Priority: 2
	          }],

	          UseExternalDataAboutUser: false,

	          FancyboxcloseMethod: "zoomOut", //'perspectiveOut',
	          FancyboxCloseSpeed: 0, //3000,

	          CreativeId: "",

	          PassbackCustomCode: "",
	          PassbackCodeSelector: "#probtn_wrapper #probtn_additionalItemsContainer",
	          //variants:
	          //- sidebarLeft
	          //- sidebarRight
	          //- sidebarTop
	          //- sidebarBottom
	          ModalWindowMode: "",

	          //variants:
	          //none - nothing changes at page
	          //topButton - body woulb be moved down with button height value
	          ExtrusionMode: "",

	          //param, that allow make custom targetings
	          AdditionalTargetingParam: "",

	          CheckPageAjaxUpdate: false,
	          HideButtonAfterAjaxUpdate: false,


	          SelectAdSet: '',
	          MenuTemplateVariant: 'list',

	          UseGeoLocation: false,
	          WaitForGeoLocation: false,

	          loadJqueryPepJS: true,
	          loadFancyboxJS: true,

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

	          ClickOnCloseButton: false,
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
	            MenuHeight: "3.4em",
	            MenuRadius: 0,
	            ItemWidth: 60
	          },
	          MenuClose: {
	              MenuCloseEnabled: false,
	              MenuCloseImage: "https://cdn.probtn.com/images/close-menu-btn@2x.png",
	              MenuCloseSize: {
	                W: 72,
	                H: 72
	              },
	              MenuClosePosition: {
	                X: 50,
	                Y: 80
	              }
	          },
	          MenuItems: [{
	            Name: "Menu1",
	            Text: "External1",
	            ActionURL: "http://yandex.ru",
	            Image: '//admin.probtn.com/eqwid_btn_nonpress.png',
	            Type: "external" //iframe, video
	          }],

	          ScrollZones: [{
	            ZoneHeight: 0.5,
	            ButtonImage: "https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/gray.png",
	            ButtonDragImage: "",
	            HintText: "",
	            TrackingLink: "",
	            CustomButtonParams: false,
	            CustomContentURL: '',
	            ButtonContentType: '',
	            ButtonSize: {
	              // Размер
	              W: 64.0,
	              H: 64.0
	            },
	            ButtonDragSize: {
	              // Размер при перемещении
	              W: 68.0,
	              H: 68.0
	            },
	            ButtonOpacity: 0.8, // Прозрачность
	            ButtonDragOpacity: 1.0 // Прозрачность при перемещении
	          }, {
	            ZoneHeight: 0.5,
	            ButtonImage: "https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/gray.png",
	            ButtonDragImage: "",
	            HintText: "",
	            TrackingLink: "",
	            CustomButtonParams: false,
	            ButtonSize: {
	              // Размер
	              W: 64.0,
	              H: 64.0
	            },
	            ButtonDragSize: {
	              // Размер при перемещении
	              W: 68.0,
	              H: 68.0
	            },
	            ButtonOpacity: 0.8, // Прозрачность
	            ButtonDragOpacity: 1.0 // Прозрачность при перемещении
	          }],
	          ChangeScrollButtonAtFullSiteHeight: true,
	          MainButtonClickable: true,
	          ActiveZones: [{
	            Name: "Area1",
	            ButtonContentType: "iframe",
	            ButtonImageType: "image", //image or iframe
	            Position: {
	              X: 0.5,
	              Y: 0.5
	            },
	            ActiveImage: "https://admin.probtn.com/eqwid_btn_nonpress.png",
	            InactiveImage: "https://admin.probtn.com/eqwid_btn_nonpress.png",
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
	          }],

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

	          Debug: false, //false

	          VideoPoster: '',
	          ButtonOnClick: 'console.log("ButtonOnClick"); function start1() { console.log("start1"); try { if (window.probtn_ButtonContentType!==null) { if (window.probtn_ButtonContentType=="video") { if (window.probtn_dropedActiveZone!==null) { if (window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType=="video") { var video = jQuery("#video_probtn_"+window.probtn_dropedActiveZone.currentActiveZone.Name).get(0); video.play(); } } else { var video = jQuery("#video_probtn").get(0); var frame_id = jQuery(".fancybox-iframe").first().attr("id"); probtn_callPlayer("video_probtn", "playVideo"); video.play(); } } } } catch(ex) { } }; start1(); setTimeout(start1 , 1000); setTimeout(start1 , 2000);',
	          ButtonOnTouchEnd: 'var moved = window.probtn_pizzabtn_moved; clearInterval(window.probtn_touch_interval); function start2() { console.log("window.probtn_dropedActiveZone", window.probtn_dropedActiveZone, moved); try { if ((window.probtn_dropedActiveZone!==null) && (window.probtn_dropedActiveZone!==undefined) && (moved === false)) { if (window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType=="video") { var videoZone = document.getElementById("#video_probtn_"+window.probtn_dropedActiveZone.currentActiveZone.Name); videoZone.play(); moved = true; } } else { console.log("moved", moved); if (moved === false) { try { if (window.probtn_ButtonContentType!==null) { if (window.probtn_ButtonContentType=="video") { moved = true; var video = document.getElementById("video_probtn"); video.play(); probtn_callPlayer("video_probtn", "playVideo");  } } } catch(ex) { console.log(ex); } } } } catch(ex) { console.log(ex); } }; start2();',
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
	          fancyboxJsPath: "https://cdn.probtn.com/libs/jquery.fancybox.min.js",
	          //"//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js",
	          //"//cdn.jsdelivr.net/fancybox/2.1.5/jquery.fancybox.min.js",
	          fancyboxCssPath: "https://cdn.probtn.com/libs/jquery.fancybox.min.css",

	          //"//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css",
	          //"//cdn.jsdelivr.net/fancybox/2.1.5/jquery.fancybox.min.css",
	          mainStyleCss: "https://cdn.probtn.com/style.css",
	          jqueryPepPath: "https://cdn.probtn.com/libs/jquery.pep.min.js",
	          //"//cdn.jsdelivr.net/jquery.pep/0.6.3/jquery.pep.min.js",
	          buttonAnimationTimeAfterFancybox: 0,

	          HideAfterFirstShow: true,

	          LoadFancyboxCSS: true,

	          //base params
	          ContentURL: "http://app.ecwid.com/jsp/2557212/m", //site url address
	          BaseInsets: {
	            // Базовое смещение от краев экрана с учетом статус бара
	            T: 4.0,
	            B: 4.0,
	            L: 4.0,
	            R: 4.0
	          },
	          ButtonEnabled: false, // Включена / выключена
	          ButtonVisible: false, // видна / не видна
	          // Кнопка
	          ButtonOpenInsets: {
	            // Смещение в открытом состоянии
	            T: 32.0,
	            B: 32.0,
	            L: 32.0,
	            R: 32.0
	          },
	          ButtonPosition: {
	            // Позиция
	            X: 0.85, // По умолчанию центр экрана
	            Y: 0.15 // По умолчанию центр экрана
	          },
	          ButtonSize: {
	            // Размер
	            W: 64.0,
	            H: 64.0
	          },
	          ButtonDragSize: {
	            // Размер при перемещении
	            W: 68.0,
	            H: 68.0
	          },
	          ButtonOpenSize: {
	            // Размер в открытом состоянии
	            W: 64.0,
	            H: 64.0
	          },
	          ButtonInactiveSize: {
	            // Размер в неактивном состоянии
	            W: 64.0,
	            H: 64.0
	          },
	          ButtonOpacity: 0.8, // Прозрачность
	          ButtonDragOpacity: 1.0, // Прозрачность при перемещении
	          ButtonOpenOpacity: 1.0, // Прозрачность в открытом состоянии
	          ButtonInactiveOpacity: 0.5, // Прозрачность в неактивном состоянии
	          ButtonImage: "https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/gray.png",
	          ButtonDragImage: "https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/drag_gray.png",
	          ButtonOpenImage: "https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/drag_gray.png",
	          ButtonInactiveImage: "https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/drag_gray.png",

	          ClosePosition: {
	            // Позиция
	            X: 0.9, // По умолчанию центр экрана
	            Y: 0.9 // По умолчанию центр экрана
	          },
	          CloseSize: {
	            // Размер
	            W: 64,
	            H: 64
	          },
	          CloseActiveSize: {
	            // Размер в активном состоянии
	            W: 72,
	            H: 72
	          },
	          CloseOpacity: 1.0, // Прозрачность
	          CloseActiveOpacity: 1.0, // Прозрачность в активном состоянии
	          CloseImage: "https://cdn.probtn.com/libs/close_btn.png", // Ссылка на изображение
	          CloseActiveImage: "https://cdn.probtn.com/libs/close_btn.png", // Ссылка на изображение в активном состоянии
	          HintInsets: {
	            // Смещение от краев
	            T: 4.0,
	            B: 4.0,
	            L: 4.0,
	            R: 4.0
	          },
	          HintLabelInsets: {
	            // Смещение для текста
	            T: 4.0,
	            B: 4.0,
	            L: 4.0,
	            R: 4.0
	          },
	          HintImageInsets: {
	            // Бордюры для изображения
	            T: 8.0,
	            B: 8.0,
	            L: 8.0,
	            R: 8.0
	          },
	          HintText: "", // Текст
	          HintFont: {
	            // Шрифт
	            Family: "Arial",
	            Size: 18
	          },
	          HintFontColor: {
	            // Цвет
	            R: 1.0,
	            G: 1.0,
	            B: 1.0,
	            A: 1.0
	          },
	          VendorText: "",
	          VendorSite: "#",
	          VendorTextFont: {
	            "Family": "Arial",
	            "Size": 10
	          },
	          VendorTextColor: {
	            "R": 1,
	            "G": 1,
	            "B": 1,
	            "A": 1
	          },
	          VendorOpacity: 0.4,
	          VendorColor: {
	            "R": 0,
	            "G": 0,
	            "B": 0,
	            "A": 1
	          },

	          HintOpacity: 0.8, // Прозрачность подсказки
	          HintImage: "https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.0/images/probtn/hint.png", // Ссылка на изображение

	          HintArrowSize: {
	            // Размер стрелки
	            W: 8.0,
	            H: 8.0
	          },
	          HintArrowOffset: {
	            // Нахлест стрелки
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
	          ContentInsets: {
	            // Смещение от краев
	            T: -2.0,
	            B: -2.0,
	            L: -2.0,
	            R: -2.0
	          },
	          ContentWebViewInsets: {
	            // Смещение для WebView
	            T: 12.0,
	            B: 12.0,
	            L: 12.0,
	            R: 12.0
	          },
	          ContentImageInsets: {
	            // Бордюры для изображения
	            T: 32.0,
	            B: 32.0,
	            L: 32.0,
	            R: 32.0
	          },
	          ContentOpacity: 1.0, // Прозрачность
	          ContentBackOpacity: 1.0, // Прозрачность фоновой части контента
	          ContentBackColor: {
	            // Цвет фоновой части контента
	            R: 0.0,
	            G: 0.0,
	            B: 0.0,
	            A: 1.0
	          },
	          ContentActivityColor: {
	            // Цвет индикатора загрузки
	            R: 0.0,
	            G: 0.0,
	            B: 0.0,
	            A: 1.0
	          },
	          ContentImage: "", // Ссылка на изображение

	          ContentArrowSize: {
	            // Размер стрелки
	            W: 14.0,
	            H: 14.0
	          },
	          ContentArrowOffset: {
	            // Нахлест стрелки
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

	        if ((ProBtnControl.params.HintText === "") || (ProBtnControl.params.HintText === null)) {
	          ProBtnControl.initFunctions.hintTextStyle.display = "none";
	          ProBtnControl.initFunctions.hintTextStyle.opacity = "0.0";
	        }

	        //undefined until we init close button
	        ProBtnControl.closeButton = undefined; //initCloseButton();

	        //default domain
	        ProBtnControl.currentDomain = document.domain.replace("www.", "");
	        if (ProBtnControl.currentDomain === "" || ProBtnControl.currentDomain === null) {
	          ProBtnControl.currentDomain = "example.com";
	        }

	        //rewrite domain if it specified in plugins params
	        if ((ProBtnControl.params.domain !== "") && (ProBtnControl.params.domain !== null)) {
	          ProBtnControl.currentDomain = ProBtnControl.params.domain;
	        }

	        // orientation
	        var supportsOrientationChange = "onorientationchange" in window;
	        var orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	        var windowHeight = window.innerHeight;
	        var windowWidth = window.innerWidth;

	        ProBtnControl.additionalButtonFunctions.closeAfterOrientationChange = false;

	        var operator = null;
	        var settingsUrl = "";

	        //add button script at parent window
	        var CheckAndRunButtonAtParent = function () {
	          ProBtnControl.statistics.callSuperPixelExt("CheckAndRunButtonAtParent1");
	          if ((ProBtnControl.params.showInParent) && (window.window !== window.top)) {
	            try {
	              ProBtnControl.statistics.callSuperPixelExt("CheckAndRunButtonAtParent2_showinparent");
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
	              };

	              console.log("CheckAndRunButtonAtParent loadJS probtn_concat.js");
	              loadJS('//cdn.probtn.com/probtn_concat.js', function () {
	              });
	            } catch (ex) {
	              if (ProBtnControl.params.Debug) console.log(ex);
	            }
	          }
	        };

	        //check settings and run smartbanner
	        var startAppBanner = function () {
	          ProBtnControl.statistics.callSuperPixelExt("startAppBanner");
	          if ((ProBtnControl.params.ButtonType === "smartbanner") || (ProBtnControl.params.IsSmartBanner === true)) {

	            //add custom css to head
	            if ((ProBtnControl.params.ZCustomCss !== "") && (ProBtnControl.params.ZCustomCss !== null) && (ProBtnControl.params.ZCustomCss !== undefined)) {
	              $('head').append('<style type="text/css" id="probtn_ZCustomCss">' + ProBtnControl.params.ZCustomCss + '</style>');
	            }

	            var initSmartBanner = function () {
	              if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.smartbanner);
	              ProBtnControl.statistics.SendStatObject({
	                "Opened": 1,
	                "Showed": 1
	              });


	              try {
	                try {
	                  if ((!ProBtnControl.params.smartbanner.androidAppId) || (ProBtnControl.params.smartbanner.androidAppId === "")) {
	                    if (!$('meta[name=apple-itunes-app]').length) {
	                      $('head').append('<meta name="apple-itunes-app" content="app-id=' + ProBtnControl.params.smartbanner.iosAppId + '" />');
	                    }
	                  }
	                  if ((!ProBtnControl.params.smartbanner.androidAppId) || (ProBtnControl.params.smartbanner.androidAppId === "")) {
	                    if (!$('meta[name=google-play-app]').length) {
	                      $('head').append('<meta name="google-play-app" content="app-id=' + ProBtnControl.params.smartbanner.androidAppId + '" />');
	                    }
	                  }
	                } catch (ex1) {
	                  if (ProBtnControl.params.Debug) console.log(ex1);
	                }

	                //appendToSelector
	                if (ProBtnControl.params.smartbanner.isFixedMode === 'extrusion') {
	                  ProBtnControl.params.smartbanner.appendToSelector = 'html';
	                }

	                $.smartbanner(ProBtnControl.params.smartbanner);

	                if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.smartbanner.isFixed);
	                if (ProBtnControl.params.smartbanner.isFixed === true) {
	                  $("#smartbanner").css("position", "fixed");
	                }

	                $("#smartbanner .sb-info").append('<div style="margin-left: -1px;" class="rating"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>');
	                //★ ☆
	                //add styles to body tag to move it down - to get some free space for smartbanner
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
	                  //close smartbanner
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
	            };

	            if (typeof $.smartbanner === 'function') {
	              initSmartBanner();
	              return true;
	            } else {
	              $('head').append('<link rel="stylesheet" href="' + ProBtnControl.params.smartbannerCssPath + '" type="text/css" />');
	              $.getScript(ProBtnControl.params.smartbannerJsPath, function () {
	                initSmartBanner();
	              });
	              return true;
	            }
	          } else {
	            return false;
	          }
	        };

	        var CheckInFrameAndEnabled = function () {
	          ProBtnControl.statistics.callSuperPixelExt("CheckInFrameAndEnabled1");
	          try {
	            if (((ProBtnControl.params.UseExternalDataAboutUser === true)) && (document.getElementById("probtn_guidIframe") !== undefined)) {
	              document.getElementById("probtn_guidIframe").contentWindow.postMessage({
	                "command": "amber_matching"
	              }, ProBtnControl.guidCookieControlPath); //ProBtnControl.guidCookieControlPath
	            }
	          } catch (ex) {
	            console.log(ex);
	          }


	          var isStartAppBanner = startAppBanner();
	          CheckAndRunButtonAtParent();

	          //check sizes if in percents
	          ProBtnControl.params.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
	          ProBtnControl.params.ButtonDragSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonDragSize);

	          if ((ProBtnControl.params.HideInFrame === true && window.window !== window.top) || (isStartAppBanner)) {
	            //do nothing
	            if (ProBtnControl.params.Debug) console.log("do nothing");
	          } else {
	            if (ProBtnControl.params.ButtonEnabled === true) {

	              if (ProBtnControl.params.LoadFancyboxCSS === true) {
	                $('head').append('<link rel="stylesheet" href="' + ProBtnControl.params.fancyboxCssPath + '" type="text/css" />');
	              }

	              //add custom css to head
	              if ((ProBtnControl.params.ZCustomCss !== "") && (ProBtnControl.params.ZCustomCss !== null) && (ProBtnControl.params.ZCustomCss !== undefined)) {
	                $('head').append('<style type="text/css" id="probtn_ZCustomCss">' + ProBtnControl.params.ZCustomCss + '</style>');
	              }

	              if ((ProBtnControl.params.BrandingImage !== "") && (ProBtnControl.params.BrandingImage !== null) && (ProBtnControl.params.BrandingImage !== undefined)) {
	                $('head').append('<style type="text/css" id="probtn_BrandingImage">#probtn_wrapper { background: url("' + ProBtnControl.params.BrandingImage + '") no-repeat top center; background-size: 100% !important; }</style>');
	              }

	              //Set styles for LockBody param
	              var probtn_disable_scroll_style = '<style type="text/css" id="probtn_ZCustomCss_probtn_disable_scroll">.probtn_disable_scroll { overflow: hidden !important; height: 100% !important; width: 100% !important; position: fixed !important; }</style>';
	              if (ProBtnControl.params.LockBody === true) {
	                $('head').append(probtn_disable_scroll_style);
	              }

	              //TODO: move to styles file later
	              $('head').append('<style type="text/css" id="probtn_ZCustomCss_probtnImg_max">#pizzabtnImg { max-width: inherit !important; max-height: inherit !important;}</style>');

	              //Set styles for RoundButton param
	              var round_params = ProBtnControl.params.RoundButton.split('_');

	              //var probtn_round_button_style = '<style type="text/css" id="probtn_ZCustomCss_round_button">#pizzabtnImg { border-radius: 20px; }</style>';
	              var probtn_round_button_style = '';
	              var border_radius = 20;
	              switch (round_params[0]) {
	                case "auto":
	                  border_radius = ProBtnControl.params.ButtonSize.W / 2;
	                  if (ProBtnControl.params.ButtonSize.W > ProBtnControl.params.ButtonSize.H) {
	                    border_radius = ProBtnControl.params.ButtonSize.H / 2;
	                  }
	                  var addtional_css = "";
	                  if (round_params[1] === "fill") {
	                    //if button is iframe, we need to apply transform
	                    if (ProBtnControl.params.ButtonImageType === "iframe") {

	                      addtional_css = '#probtn_button { background: ' + round_params[2] +
	                        '} #pizzabtnImg { margin-left: 10% !important; margin-top: 10% !important; }';
	                    } else {
	                      addtional_css = '#probtn_button { background: ' + round_params[2] +
	                        '} #pizzabtnImg { width: 80% !important; height: 80% !important; margin-top: 10% !important; }';
	                    }

	                    probtn_round_button_style = '<style type="text/css" id="probtn_ZCustomCss_round_button">#probtn_button { border-radius: ' + border_radius + 'px; overflow: hidden !important; } ' + addtional_css + '</style>';

	                  } else {
	                    probtn_round_button_style = '<style type="text/css" id="probtn_ZCustomCss_round_button">#pizzabtnImg, #probtn_button { border-radius: ' + border_radius + 'px; ' + addtional_css + '}</style>';
	                  }
	                  break;
	                case "manual":
	                  border_radius = round_params[1];
	                  probtn_round_button_style = '<style type="text/css" id="probtn_ZCustomCss_round_button">#pizzabtnImg, #probtn_button { border-radius: ' + border_radius + 'px; }</style>';
	                  break;
	                default:
	                  break;
	              }
	              /* box-shadow: inset 0 2px 14px 0 rgba(0,0,0,0.20); border-radius: 20px; */
	              $('head').append(probtn_round_button_style);

	              //check ModalWindowMode
	              //and apply nessesary css
	              switch (ProBtnControl.params.ModalWindowMode) {
	                case "sidebarRight":
	                  $('head').append('<style type="text/css">' + ".fancybox-inner, .fancybox-outer, .fancybox-skin, .fancybox-wrap { height: 100% !important; } .fancybox-wrap  {position: fixed !important;}" +
	                    ".fancybox-wrap { top: 0px !important; right: 0px !important; left: initial !important; }" +
	                    ".fancybox-close { top: 0px !important; right: 0px !important; }" + '</style>');
	                  break;
	                case "sidebarLeft":
	                  $('head').append('<style type="text/css">' + ".fancybox-inner, .fancybox-outer, .fancybox-skin, .fancybox-wrap { height: 100% !important; } .fancybox-wrap  {position: fixed !important;}" +
	                    ".fancybox-wrap { top: 0px !important; left: 0px !important; }" +
	                    ".fancybox-close { top: 0px !important; right: 0px !important; }" + '</style>');
	                  break;
	                case "sidebarTop":
	                  $('head').append('<style type="text/css">' + ".fancybox-inner, .fancybox-outer, .fancybox-skin, .fancybox-wrap { width: 100% !important; } .fancybox-wrap  {position: fixed !important;}" +
	                    ".fancybox-wrap { top: 0px !important; left: 0px !important; }" +
	                    ".fancybox-close { top: 0px !important; right: 0px !important; }" + '</style>');
	                  break;
	                case "sidebarBottom":
	                  $('head').append('<style type="text/css">' + ".fancybox-inner, .fancybox-outer, .fancybox-skin, .fancybox-wrap { width: 100% !important; top: initial !important; } .fancybox-wrap  {position: fixed !important;}" +
	                    ".fancybox-wrap { bottom: 0px !important; left: 0px !important; }" +
	                    ".fancybox-close { bottom: 0px !important; right: 0px !important; }" + '</style>');
	                  break;
	                default:
	              }

	              //init close button
	              //ProBtnControl.closeButton = ProBtnControl.initFunctions.initCloseButton();

	              //bind orientation change events
	              $(window).bind("orientationchange", ProBtnControl.additionalButtonFunctions.onOrientationChange);
	              $(window).bind("resize", ProBtnControl.additionalButtonFunctions.onOrientationChange);

	              if ((ProBtnControl.params.ButtonInitDelay !== 0) && (ProBtnControl.params.ButtonInitDelay !== null) && (ProBtnControl.params.ButtonInitDelay !== undefined)) {
	                setTimeout(BeginButtonProcess, ProBtnControl.params.ButtonInitDelay);
	              } else {
	                BeginButtonProcess();
	              }

	            } else {
	              ProBtnControl.additionalButtonFunctions.callPassback();
	            }
	          }
	        };

	        var getSettingsAndLaunchButton = function (operator) {

	          if (ProBtnControl.params.Debug) console.log("getSettingsAndLaunchButton");
	          var retina = 1;
	          if ((ProBtnControl.userData.os === "iOS") || (ProBtnControl.userData.os === "Mac OS") || (ProBtnControl.userData.os === "Mac OS X")) {
	            retina = window.devicePixelRatio;
	          }
	          ProBtnControl.userData.retina = retina;

	          /**
	           * parse results recieved from admin.probtn.com (or local source)
	           * @param  {[json]} data json data
	           * @return {[type]}
	           */
	          function parseResultData(data) {
	            ProBtnControl.statistics.callSuperPixelExt("parseResultData");
	            if (ProBtnControl.params.Debug) console.log(data);
	            try {
	              try {
	                data.result.HintText = HintText;
	              } catch (ex) {
	              }

	              /**
	               * Modify recieved settings - convert percent sizes, etc.
	               * @param  {[json]} data
	               * @return {[type]}
	               */
	              var parseResultDataStep2 = function (data) {
	                if (data.code === 100) {
	                  if (data.MSMediaKeyNeededEvent.location === 1) {
	                    /*ProBtnControl.geolocation.getLocation(function(position) {
	                      ProBtnControl.geolocation.getPosition(position);
	                    });*/
	                  }
	                } else {
	                  if (ProBtnControl.params.Debug) console.log(ProBtnControl.params);
	                  var params1 = $.extend(true, {}, ProBtnControl.params, data.result);
	                  ProBtnControl.params = params1;

	                  //set PassbackCustomCode from admin.probtn.com
	                  try {
	                    ProBtnControl.params.PassbackCustomCode = data.PassbackCustomCode;
	                    ProBtnControl.params.PassbackCodeSelector = data.PassbackCodeSelector;

	                    ProBtnControl.params.OnShowPixel = data.OnShowPixel;
	                    ProBtnControl.params.OnNoShowPixel = data.OnNoShowPixel;

	                    if ((ProBtnControl.params.PassbackCodeSelector === "") || (ProBtnControl.params.PassbackCodeSelector === undefined) || (ProBtnControl.params.PassbackCodeSelector === null)) {
	                      ProBtnControl.params.PassbackCodeSelector = "#probtn_passback";
	                    }
	                  } catch (ex) {
	                  }
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
	                  /**
	                   * check params for html code and remove unnessesary tags
	                   * @param  {[object]} inObject - button params object
	                   */
	                  var checkHtmlInObject = function (inObject) {
	                    try {
	                      for (var property in inObject) {
	                        if (inObject.hasOwnProperty(property)) {
	                          if (typeof(inObject[property]) == "string") {
	                            try {
	                              /**
	                               * TODO: add check what ButtonType == js and only then except ContentURL from this check
	                               * Added ContentURL param exception
	                               */
	                              if ((property !== "PassbackCustomCode") && ((property !== "ContentURL"))) {
	                                var before = inObject[property];
	                                //inObject[property] = inObject[property].replace(/<\/?[^>]+(>|$)/g, ""); //$(inObject[property]).text();
	                                inObject[property] = inObject[property].split('<style>').join('')
	                                  .split('</style>').join('')
	                                  .split('<script>').join('')
	                                  .split('</script>').join('');
	                              } else {
	                              }
	                            } catch (ex) {
	                              if (ProBtnControl.params.Debug) console.log(ex);
	                            }

	                          }
	                        }
	                      }
	                    } catch (ex) {
	                      if (ProBtnControl.params.Debug) console.log(ex);
	                    }
	                  };

	                  checkHtmlInObject(ProBtnControl.params);
	                  ProBtnControl.additionalButtonFunctions.checkProtocolLinks(ProBtnControl.params);

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
	                  }
	                  if ((ProBtnControl.params.HintText === "") || (ProBtnControl.params.HintText === null)) {
	                    ProBtnControl.initFunctions.hintTextStyle.display = "none";
	                    ProBtnControl.initFunctions.hintTextStyle.opacity = "0.0";
	                  }
	                  ;

	                  //TODO - if it is js execute after click, then load additional libs - postsribe
	                  if (ProBtnControl.params.ButtonType == "js") {
	                    $.getScript("https://cdn.probtn.com/libs/postscribe/htmlParser.js", function () {
	                      $.getScript("https://cdn.probtn.com/libs/postscribe/postscribe.js", function () {
	                        ProBtnControl.loadedStatus.postscribe = true;
	                      });
	                    });
	                  }
	                } //else end data.code==100
	              };

	              if (ProBtnControl.params.UseGeoLocation === true) {
	                parseResultDataStep2(data);
	              } else {
	                parseResultDataStep2(data);
	              }

	            } catch (ex) {
	              if (ProBtnControl.params.Debug) console.log(ex);
	            }
	          }

	          if ((ProBtnControl.params.isServerCommunicationEnabled) || (ProBtnControl.params.useLocalFileSettings)) {

	            ProBtnControl.statistics.callSuperPixel();
	            ProBtnControl.statistics.callSuperPixelExt("getSettingsAndLaunchButton");

	            ProBtnControl.additionalButtonFunctions.testSpeed(function (kbs) {
	              ProBtnControl.userData.kbs = kbs; //add it to userData object to use it later on requests
	              if ((ProBtnControl.params.Debug) && (kbs > 0)) {
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

	              if (ProBtnControl.params.useLocalFileSettings) {
	                settingsUrl = ProBtnControl.params.localSettingsPath;
	              }

	              var loadSettings = function () {

	                if (!ProBtnControl.params.useLocalFileSettings) {

	                  var domain = document.domain.replace("www.", "");

	                  var Details = "";
	                  if (ProBtnControl.params.UseExternalDataAboutUser === true) {
	                    Details = "Details=" + JSON.stringify(ProBtnControl.params.ExternalData) + "&";
	                  }

	                  if ((ProBtnControl.params.CreativeId !== "") && (ProBtnControl.params.CreativeId !== null) && (ProBtnControl.params.CreativeId !== undefined)) {
	                    settingsUrl = ProBtnControl.statistics.createStatisticsLink("getClientSettings", "&SelectAdSet=" + ProBtnControl.params.SelectAdSet + "&" + "ForceCampaign=" + ProBtnControl.params.CreativeId + "&" + Details);
	                  } else {
	                    settingsUrl = ProBtnControl.statistics.createStatisticsLink("getClientSettings", "&SelectAdSet=" + ProBtnControl.params.SelectAdSet + "&" + Details);
	                  }


	                } else {
	                  settingsUrl = ProBtnControl.params.localSettingsPath;
	                }

	                //pixel
	                if (ProBtnControl.currentDomain === "getintent_dsp") {
	                  ProBtnControl.statistics.createClickCounterImage("https://goo.gl/Fm9AUX");
	                }

	                ProBtnControl.statistics.callSuperPixelExt("getClientSettings");

	                try {
	                  $.getJSON(settingsUrl, parseResultData).done(function () {
	                    ProBtnControl.statistics.callSuperPixelExt("getClientSettings_loaded");
	                    if (ProBtnControl.params.Debug) console.log('done settings load');
	                  }).fail(function (jqXHR, textStatus, errorThrown) {
	                    if (ProBtnControl.params.Debug) console.log(errorThrown);
	                    if (ProBtnControl.params.Debug) console.log(textStatus);
	                  }).always(function () {
	                    //console.log("CheckInFrameAndEnabled", ProBtnControl.params.RequireLocation);

	                    if (ProBtnControl.params.RequireLocation) {
	                      ProBtnControl.statistics.SendStatisticsData("performedAction", "checkLocation");
	                      ProBtnControl.geolocation.checkAndRunGeolocation(function () {
	                        if (ProBtnControl.params.RequireLocation) {
	                          ProBtnControl.geolocation.checkPlaces(function (isNear, place) {
	                            if (isNear) {
	                              ProBtnControl.statistics.SendStatisticsData("performedAction", "isNearPlace");
	                              CheckInFrameAndEnabled();
	                            } else {
	                              ProBtnControl.statistics.SendStatisticsData("performedAction", "notNearPlaces");
	                              //button not enabled, so show passback code
	                              ProBtnControl.additionalButtonFunctions.callPassback();

	                              return false;
	                            }
	                          });
	                        } else {
	                          CheckInFrameAndEnabled();
	                        }
	                      });
	                    } else {
	                      CheckInFrameAndEnabled();
	                    }

	                  });
	                } catch (ex) {
	                  console.log(ex);
	                  $.getJSON(settingsUrl, function (data) {
	                    parseResultData(data);
	                    CheckInFrameAndEnabled();
	                  });
	                }
	              };

	              loadSettings();

	            });
	          } else {
	            if (ProBtnControl.params.Debug) console.log("Dont load settings");
	          }
	        };

	        //BEGIN BUTTON PROCESS
	        var BeginButtonProcess = function () {
	          ProBtnControl.statistics.callSuperPixelExt("BeginButtonProcess");
	          if ($("#probtn_wrapper").length > 0) {
	            ProBtnControl.statistics.callSuperPixelExt("buttonDuplicate");
	            //button already exist on page
	            try {
	              if (ProBtnControl.params.isServerCommunicationEnabled) {
	                //calll pixel if button already exists at page
	                var duplicatePixel = "https://goo.gl/ezDN1A?random=[RANDOM]";
	                ProBtnControl.statistics.createClickCounterImage(duplicatePixel);
	                ProBtnControl.statistics.SendStatisticsData("performedAction", "duplicateDetected");
	              }
	            } catch (ex) {
	              if (ProBtnControl.params.Debug) console.log(ex);
	            }
	            return;
	          }

	          var probtn_start_content_showed_timer = false;
	          /**
	           * Recieve messages from iframe or other sources to execute some available commands
	           * List of commands available in our docs (readthedocs)
	           * @param  {[type]} event [description]
	           * @return {[type]}
	           */
	          var receiveMessage = function (event) {
	            try {
	              console.log("receiveMessage", event.data.command.toLowerCase());
	              switch (event.data.command.toLowerCase()) {
	                case "probtn_message_to_creative":
	                  if ((event.data.object !== null) && (event.data.object !== undefined)) {
	                    ProBtnControl.additionalButtonFunctions.sendMessageToCreative(event.data.object);
	                  }
	                  break;
	                case "probtn_creative_loaded_message":
	                  console.log("probtn_creative_loaded_message recieved");
	                  try {
	                    if (ProBtnControl.buttonMainParams.hidden) {
	                      ProBtnControl.pizzabtn.show();
	                      ProBtnControl.wrapper.removeClass('hide');
	                      ProBtnControl.additionalButtonFunctions.animation.checkAndRunAnimation();
	                      ProBtnControl.buttonMainParams.hidden = false;
	                    } else {

	                    }
	                  } catch (ex) {
	                    console.log(ex);
	                  }
	                  break;
	                case "probtn_opened_and_showed":
	                  ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
	                  break;
	                case "probtn_change_content_url":
	                  if ((event.data.value !== "") && (event.data.value !== undefined) && (event.data.value !== null)) {
	                    ProBtnControl.params.ContentURL = event.data.value;
	                  }
	                  break;
	                case "probtn_performed_action":
	                  var actionValue = "buy";
	                  if ((event.data.value !== "") && (event.data.value !== undefined) && (event.data.value !== null)) {
	                    actionValue = event.data.value.toLowerCase();
	                  }
	                  ProBtnControl.statistics.SendStatisticsData("performedAction", actionValue);
	                  break;
	                case "probtn_start_content_showed_timer":
	                  if (!probtn_start_content_showed_timer) {
	                    ProBtnControl.contentTime.startTimer();
	                    probtn_start_content_showed_timer = true;
	                  }
	                  break;
	                case "probtn_stop_content_showed_timer":
	                  probtn_start_content_showed_timer = false;
	                  ProBtnControl.contentTime.endTimer();
	                  break;
	                case "probtn_close":
	                  window.proBtn.close();
	                  break;
	                case "probtn_hide":
	                  window.proBtn.hide();
	                  break;
	                case "probtn_hide_content":
	                  window.proBtn.hideContent();
	                  break;

	                case "button_image_iframe_disable_overlay":
	                  $("#pizzabtnIframeOverlay").hide();
	                  break;
	                case "probtn_restore_button_size":
	                  ProBtnControl.pizzabtn.css({
	                    'width': ProBtnControl.params.ButtonSize.W,
	                    'height': ProBtnControl.params.ButtonSize.H,
	                    'left': event.data.position.left,
	                    'top': event.data.position.top
	                  });
	                  $("#pizzabtnImg").css({
	                    'width': ProBtnControl.params.ButtonSize.W,
	                    'height': ProBtnControl.params.ButtonSize.H,
	                    'opacity': ProBtnControl.params.ButtonOpacity
	                  });
	                  break;
	                case "button_image_iframe_done":
	                  $("#pizzabtnIframeOverlay").show();
	                  break;
	                case "button_image_iframe_size":
	                  $("#pizzabtnIframeOverlay").css({
	                    'width': event.data.size.w,
	                    'height': event.data.size.h
	                  });
	                  if (event.data.size.top !== undefined) {
	                    $("#pizzabtnIframeOverlay").css({
	                      'top': event.data.size.top
	                    });  
	                  }
	                  break;
	                default:
	                  break;
	              }
	            } catch (ex) {
	            }

	            try {
	              ProBtnControl.params.ParentParams.width = event.data.width;
	              ProBtnControl.params.ParentParams.height = event.data.height;
	              if (ProBtnControl.params.Debug) console.log(ProBtnControl.params.ParentParams);
	            } catch (ex) {
	              if (ProBtnControl.params.Debug) console.log(ex);
	            }
	          };
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
	          }

	          var pizzabtn_wrapper = $("<div/>", {
	            id: "probtn_wrapper"
	          });
	          switch (ProBtnControl.params.ExtrusionMode) {
	            case "insertBlock":
	              $('head').append('<style type="text/css">#probtn_wrapper { width: 100% !important; display: inline-block !important; position: relative !important; height:' + ProBtnControl.params.ButtonSize.H + 'px !important; } #probtn_button { top: 0px !important; left: 0px !important; width:100% !important; }</style>');
	              pizzabtn_wrapper.prependTo(ProBtnControl.params.ExtrusionPath);
	              break;
	            case "fixedTop":
	              $('head').append('<style type="text/css">#probtn_wrapper { width: 100% !important; display: inline-block !important; position: fixed !important;  } #probtn_button { top: 0px !important; left: 0px !important; width:100% !important; }</style>');
	              //height:' + ProBtnControl.params.ButtonSize.H + 'px !important;
	              pizzabtn_wrapper.prependTo(ProBtnControl.params.ButtonInjectPath);
	              break;
	            default:
	              pizzabtn_wrapper.prependTo(ProBtnControl.params.ButtonInjectPath);
	              break;
	          }
	          ProBtnControl.wrapper = pizzabtn_wrapper;
	          //create additionalItemsContainer - to store all additional probtn elements
	          ProBtnControl.additionalItemsContainer = $("<div/>", {
	            id: "probtn_additionalItemsContainer"
	          }).prependTo(ProBtnControl.wrapper);

	          //init close button
	          ProBtnControl.closeButton = ProBtnControl.initFunctions.initCloseButton();
	          ProBtnControl.closeButton.attr('src', ProBtnControl.params.CloseImage);

	          // append pizzabtn and close btn styles
	          if (ProBtnControl.params.NeverClose === false) {
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
	          }

	          if ((ProBtnControl.params.ButtonType == "fullscreen_fancybox") || (ProBtnControl.params.ButtonType == "fullscreen")) {
	            ProBtnControl.params.ButtonVisible = false;
	          }

	          ProBtnControl.statistics.callSuperPixelExt("BeginButtonProcess2");

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

	            // load fancybox and jquery.pep
	            if ((typeof fancyboxFunction === 'function') || (ProBtnControl.params.loadFancyboxJS === false)) {
	              loadPep();
	            } else {
	              $.getScript(ProBtnControl.params.fancyboxJsPath, loadPep); //fancybox end
	            }
	          } else {
	            ProBtnControl.initFunctions.fullscreenInitAndShow();
	          }

	          function addFancyboxAnimations() {
	            (function ($, F) {
	              F.transitions.dropIn = function () {
	                var endPos = F._getPosition(true);

	                endPos.top = (parseInt(endPos.top, 10) - 200) + 'px';

	                F.wrap.css(endPos).show().animate({
	                  top: '+=200px'
	                }, {
	                  duration: F.current.openSpeed,
	                  complete: F._afterZoomIn
	                });
	              };

	              F.transitions.perspectiveOut = function () {
	                var perspect = ProBtnControl.additionalButtonFunctions.getWindowHeight();
	                if (ProBtnControl.additionalButtonFunctions.getWindowWidth() > ProBtnControl.additionalButtonFunctions.getWindowHeight()) {
	                  perspect = ProBtnControl.additionalButtonFunctions.getWindowWidth();
	                }
	                $("body").css("perspective", perspect + "px");

	                F.wrap.removeClass('fancybox-opened');

	                $({
	                  deg: 0
	                }).animate({
	                  deg: 7 * 50
	                }, {
	                  duration: F.current.closeSpeed,
	                  step: function (now) {
	                    var transform = 'rotateX(' + now / 50 + 'deg) scaleX(' + (1 - now / 720) + ')';

	                    $(".fancybox-wrap").css('transform', transform);
	                    $(".fancybox-skin").css('transform', transform);

	                  },
	                  complete: function (e) {
	                    $("body").css("perspective", "inherit");
	                    F._afterZoomOut(e);
	                  }
	                });

	                F.wrap.removeClass('fancybox-opened').animate({
	                  top: "-300px"
	                }, {
	                  duration: F.current.closeSpeed
	                });
	              };

	            }(jQuery, jQuery.fancybox));
	          }

	          function loadPep() {
	            //ProBtnControl.statistics.callSuperPixelExt("loadPep");
	            addFancyboxAnimations();
	            try {
	              if ((typeof $.pep.toggleAll === 'function') || (ProBtnControl.params.loadJqueryPepJS === false)) {
	                AllLoadedButtonProcess();
	              } else {
	                $.getScript(ProBtnControl.params.jqueryPepPath, AllLoadedButtonProcess);
	              }
	            } catch (ex) {
	              $.getScript(ProBtnControl.params.jqueryPepPath, AllLoadedButtonProcess);
	            }
	          }

	          ///
	          function AllLoadedButtonProcess() {

	            ProBtnControl.statistics.callSuperPixelExt("AllLoadedButtonProcess");

	            //TODO fix undefined values
	            ProBtnControl.statistics.SendStatisticsData();
	            ProBtnControl.statistics.SendBrowserStatsInfo();

	            // show button
	            if (ProBtnControl.params.ButtonEnabled && ProBtnControl.params.ButtonVisible) {

	              ProBtnControl.statistics.callSuperPixelExt("ButtonEnabled");
	              ProBtnControl.statistics.createClickCounterImage(ProBtnControl.params.OnShowPixel); //add on show pixel

	              ProBtnControl.statistics.checkAdBlock();
	              ProBtnControl.pizzabtn.show();
	              ProBtnControl.closeButton.center();

	              //always show close button
	              if (ProBtnControl.params.AlwaysShowCloseButton === true) {
	                setTimeout(function () {
	                  $('head').append('<style type="text/css">#probtn_closeButton { display: block !important; }</style>');
	                }, ProBtnControl.params.CloseButtonShowDelay);
	              }
	            } else {
	            }

	            if (ProBtnControl.params.ButtonType === "fullscreen_fancybox") {
	              ProBtnControl.statistics.SendStatisticsData("Showed", 1);
	              ProBtnControl.onButtonTap();
	            }

	            if (ProBtnControl.params.ButtonType === "fullscreen") {
	              ProBtnControl.initFunctions.fullscreenInitAndShow();
	            }

	            if (ProBtnControl.params.ButtonType === "fullscreen_and_button") {
	              ProBtnControl.initFunctions.fullscreenInitAndShow();
	            }


	            if (ProBtnControl.params.ButtonVisible) {
	              //m.babyblog.ru counter
	              if (ProBtnControl.params.CampaignID === "581b2b2c2b4d994563000024") {
	                ProBtnControl.statistics.createClickCounterImage("https://goo.gl/nulZu1");
	              }

	              ProBtnControl.statistics.SendStatisticsData("Showed", 1);

	            }

	            //hide hint after params.HintLaunchDuration time (in seconds)
	            ProBtnControl.pizzabtn.hideHintDelay();

	            //show hint with nessesary animation
	            ProBtnControl.pizzabtn.showHint();


	            // help vars
	            ProBtnControl.overlaped = false;

	            window.probtn_pizzabtn_moved = false; //TODO - was false
	            ProBtnControl.pizzabtn.moved = false;

	            var cssEaseDuration = ProBtnControl.params.cssEaseDuration;
	            if (ProBtnControl.params.ControlInIframeFromParent === true) {
	              cssEaseDuration = 0;
	            } else {
	            }

	            //DisableButtonMove
	            ProBtnControl.pizzabtn.pep({
	              // hardwareAccelerate: false,
	              useCSSTranslation: false,
	              constrainTo: 'parent',
	              // cssEaseString: 'cubic-bezier(0, 0, .58, 1)', // ease-out
	              cssEaseString: 'cubic-bezier(0, .50, .50, 1)',
	              cssEaseDuration: cssEaseDuration,
	              allowDragEventPropagation: false,
	              shouldPreventDefault: true,

	              velocityMultiplier: 1.0,
	              startThreshold: [1, 1],
	              droppable: '.probtn_active_zone',
	              initiate: ProBtnControl.additionalButtonFunctions.changeBodySize,
	              start: function () {
	                ProBtnControl.once_moved = true;

	                try {
	                  ProBtnControl.pizzabtn.stop(true, true);
	                  if (ProBtnControl.lookOutTimeout !== undefined) {
	                    //console.log("ProBtnControl.lookOutTimeout", ProBtnControl.lookOutTimeout);
	                    ProBtnControl.pizzabtn.stop(true, true);
	                    clearTimeout(ProBtnControl.lookOutTimeout);
	                  }
	                  if (ProBtnControl.lookOutTimeout2 !== undefined) {
	                    ProBtnControl.pizzabtn.stop(true, true);
	                    clearTimeout(ProBtnControl.lookOutTimeout2);
	                  }
	                } catch (ex) {
	                  console.log(ex);
	                }

	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: "probtn_lookoutandout_start"
	                });

	                ProBtnControl.interactionFunctions.wasInteraction = true;
	                window.probtn_button_tap = false;

	                if (ProBtnControl.params.MainButtonClickable === false) {
	                  if ($("#probtn_menu").length>0) {
	                    //hide menu if button moved
	                    ProBtnControl.initFunctions.initRemoveMenu();
	                  }
	                } else {
	                }

	                window.probtn_dropedActiveZone = null;

	                ProBtnControl.initFunctions.initScrollChange(true);

	                //end button animation if it's active
	                if (ProBtnControl.additionalButtonFunctions.animation.animationRuning) {
	                  ProBtnControl.additionalButtonFunctions.animation.doneAnimation();
	                }

	                //show each active zone which visible when button moves
	                $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {
	                  if (activeZone.currentActiveZone.VisibleOnlyInteraction) {
	                    activeZone.show();
	                  }
	                });

	                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {

	                  if (ProBtnControl.pizzabtn.moved === false) {
	                    ProBtnControl.pizzabtn.dragAnimate();
	                  }
	                  window.probtn_pizzabtn_moved = true;
	                  ProBtnControl.pizzabtn.moved = true;
	                  ProBtnControl.once_moved = true;

	                  //hide hint
	                  if (ProBtnControl.pizzabtn.hintTextActive) {
	                    ProBtnControl.pizzabtn.hideHint();
	                  }
	                  // show close button
	                  if (ProBtnControl.params.NeverClose === false) {
	                    try {
	                      ProBtnControl.closeButton.show();
	                    } catch (ex) {

	                    }
	                  }
	                  ProBtnControl.statistics.SendStatisticsData("Moved", 1);
	                  ProBtnControl.contentTime.startTimer("MovedDuration");

	                  ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                    message: "probtn_start_move"
	                  });
	                });
	              },
	              drag: function (ev, obj) {
	                ProBtnControl.initFunctions.initScrollChange(true);

	                //if set, disable button move
	                if (ProBtnControl.params.DisableButtonMove === true) {
	                  return false;
	                }

	                //check is button above close area
	                ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                  var fancybox_wrap = $(".fancybox-wrap");

	                  var pizzabtnRect = ProBtnControl.pizzabtn[0].getBoundingClientRect();
	                  var closeButtonRect = ProBtnControl.closeButton[0].getBoundingClientRect();

	                  if ($(".fancybox-inner").length > 0) {
	                    var modal_width = $(".fancybox-inner iframe").width();
	                    var modal_height = $(".fancybox-inner iframe").height();
	                    var modal_top = fancybox_wrap.position().top;
	                    var modal_left = fancybox_wrap.position().left;
	                    ProBtnControl.additionalButtonFunctions.sendMessageToModal({
	                      message: "probtn_drag_event",
	                      rect: {
	                        left: pizzabtnRect.left,
	                        right: pizzabtnRect.right,
	                        top: pizzabtnRect.top,
	                        bottom: pizzabtnRect.bottom
	                      },
	                      modal: {width: modal_width, height: modal_height, top: modal_top, left: modal_left}
	                    });
	                  }

	                  if ((pizzabtnRect.top + pizzabtnRect.height) > window.innerHeight) {
	                  }

	                  var overlap = !(pizzabtnRect.right < closeButtonRect.left || pizzabtnRect.left > closeButtonRect.right || pizzabtnRect.bottom < closeButtonRect.top || pizzabtnRect.top > closeButtonRect.bottom);

	                  if (overlap && closeButtonRect.width !== 0) {
	                    if (!ProBtnControl.overlaped) {
	                      ProBtnControl.closeButton.overlayActive();
	                      ProBtnControl.overlaped = true;
	                    }
	                  } else {
	                    if (ProBtnControl.overlaped) {
	                      try {
	                        ProBtnControl.closeButton.overlayUnactive();
	                        ProBtnControl.overlaped = false;
	                      } catch (ex) {
	                        if (ProBtnControl.params.Debug) console.log(ex);
	                      }
	                    }
	                  }
	                });

	                try {
	                  //check is button overlap any active zones
	                  if (this.activeDropRegions.length > 0) {
	                    //if yes, make this zone "active"
	                    var currentZoneName = jQuery(this.activeDropRegions[0]).attr("rel");

	                    var activeZone = ProBtnControl.initializedActiveZones[currentZoneName];
	                    if ((activeZone !== null) && (activeZone !== undefined)) {
	                      activeZone.animateActive();
	                      window.probtn_dropedActiveZone = activeZone;
	                    }
	                  } else {
	                    //if no, then set active zones at "inactive" state
	                    //todo uncomment
	                    //window.probtn_dropedActiveZone = null;

	                    $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {

	                      if (activeZone.currentActiveZone.ButtonImageType !== "iframe") {
	                        activeZone.attr("src", activeZone.currentActiveZone.InactiveImage);
	                      }
	                      if ((activeZone.currentActiveZone.ButtonIframeInitialSize === null) || (activeZone.currentActiveZone.ButtonIframeInitialSize === undefined)) {
	                        activeZone.currentActiveZone.ButtonIframeInitialSize = {
	                          W: 0,
	                          H: 0
	                        };
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

	                    });
	                  }
	                } catch (ex) {
	                  console.log(ex);
	                }

	              },
	              stop: function () {

	                ProBtnControl.additionalButtonFunctions.sendMessageToCreative({
	                  message: "probtn_lookoutandout_stop"
	                });

	                //event that button stoped (for example to get in postion for some interactions and so on)
	                ProBtnControl.additionalButtonFunctions.sendMessageToModal({ message: "probtn_stop_event" });

	                ProBtnControl.contentTime.endTimer("MovedDuration");
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

	                    if ((activeZone.requestClickCounterLink !== null) && (activeZone.requestClickCounterLink !== undefined)) {
	                      activeZone.requestClickCounterLink();
	                    }

	                    //satrt video for active zone of this type - different variants for platforms
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
	                  //todo uncomment
	                  //window.probtn_dropedActiveZone = null;
	                }

	                //hide zones and set inactive sizes
	                $.each(ProBtnControl.initializedActiveZones, function (index, activeZone) {
	                  if (activeZone.currentActiveZone.VisibleOnlyInteraction) {
	                    if (activeZone.currentActiveZone.ButtonImageType !== "iframe") {
	                      activeZone.attr("src", activeZone.currentActiveZone.InactiveImage);
	                    }
	                    if ((activeZone.currentActiveZone.ButtonIframeInitialSize === null) || (activeZone.currentActiveZone.ButtonIframeInitialSize === undefined)) {
	                      activeZone.currentActiveZone.ButtonIframeInitialSize = {
	                        W: 0,
	                        H: 0
	                      };
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

	                //for menu check variant if main button is still clickable and update her position
	                if (ProBtnControl.params.MainButtonClickable === true) {

	                  if ($("#probtn_menu").length > 0) {
	                    ProBtnControl.additionalButtonFunctions.MaximizeWrapper();
	                    //ProBtnControl.pizzabtn.moved = true;
	                    ProBtnControl.pizzabtn.stop(true, false);

	                    var animateLeft = 0;
	                    var animateTop = window.innerHeight - ProBtnControl.pizzabtn.height();
	                    var menuType = ProBtnControl.params.MenuTemplateVariant.split('_');
	                    if (menuType[0] === "circularCenter") {
	                      animateTop = window.innerHeight / 2 - ProBtnControl.pizzabtn.height() / 2;
	                      animateLeft = window.innerWidth / 2 - ProBtnControl.pizzabtn.width() / 2;
	                    }

	                    ProBtnControl.pizzabtn.css({
	                      left: animateLeft,
	                      top: animateTop
	                    });

	                  }
	                }

	                if (!ProBtnControl.pizzabtn.moved) {
	                  //if button clicked
	                  //ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                  if ((activeZone === null) || (activeZone === undefined)) {
	                    if (ProBtnControl.params.ButtonContentType !== 'video') {
	                      ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                        ProBtnControl.onButtonTap();
	                      });
	                    } else {
	                      //if VIDEO mode
	                      if ((ProBtnControl.userData.os !== "iOS") || (ProBtnControl.userData.isiPad)) {
	                        ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                          ProBtnControl.onButtonTap();
	                        });
	                      } else {
	                        ProBtnControl.additionalButtonFunctions.MaximizeWrapper(function () {
	                          ProBtnControl.additionalButtonFunctions.MinimizeWrapper();
	                          //send info that video showed
	                          ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
	                          ProBtnControl.HpmdFunctions.expandHpmdTrack();

	                          ProBtnControl.contentTime.startTimer();

	                          //start timer for ios - to user's get video playback duration
	                          $(window).on("touchstart", function (event) {
	                            if ((ProBtnControl.contentTime.intervalId !== undefined) && (ProBtnControl.contentTime.intervalId !== null)) {
	                              // event.target is the clicked object
	                              ProBtnControl.contentTime.endTimer();
	                            }
	                          });

	                          if (ProBtnControl.params.HideAfterFirstShow === true) {
	                            ProBtnControl.additionalButtonFunctions.hideAll();
	                          }

	                          //check for VideoClickURL not empty
	                          if ((ProBtnControl.params.VideoClickURL !== "") && (ProBtnControl.params.VideoClickURL !== null) && (ProBtnControl.params.VideoClickURL !== undefined)) {
	                            //console.log("ProBtnControl.params.VideoClickURL", ProBtnControl.params.VideoClickURL);
	                            if ((ProBtnControl.params.VideoClickURL.indexOf("#blank") > -1) || (ProBtnControl.params.OpenExternal === true)) {
	                              //setTimeout(function () {
	                              ProBtnControl.statistics.SendStatisticsData("VideoClicked", 1);
	                              ProBtnControl.onButtonTap(ProBtnControl.params.VideoClickURL, null, 'anchor_external');
	                              //}, 1500);
	                            } else {
	                              setTimeout(function () {
	                                ProBtnControl.statistics.SendStatisticsData("VideoClicked", 1);
	                                ProBtnControl.onButtonTap(ProBtnControl.params.VideoClickURL, null, 'iframe');
	                              }, 1500);
	                            }
	                          }
	                        }, 50);
	                      }
	                    }
	                  }
	                  //});
	                } else {

	                  if ($("#probtn_menu").length > 0) {
	                  if (ProBtnControl.params.MainButtonClickable === true) {
	                      ProBtnControl.additionalButtonFunctions.MaximizeWrapper();
	                    }
	                  } else {
	                    ProBtnControl.additionalButtonFunctions.MinimizeWrapper();
	                  }

	                  var moved = window.probtn_pizzabtn_moved;
	                  if ((window.probtn_dropedActiveZone !== null) && (window.probtn_dropedActiveZone !== undefined) && (moved === false)) {
	                    if (window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType == "video") {
	                      //console.log("pause video zone");
	                      var videoZone = jQuery("#video_probtn_" + window.probtn_dropedActiveZone.currentActiveZone.Name).get(0);
	                      videoZone.pause();
	                    }
	                  }

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

	                    ProBtnControl.additionalButtonFunctions.hideAll();

	                  } else {
	                    ProBtnControl.pizzabtn.undragAnimate();
	                  }
	                }
	                ProBtnControl.closeButton.hide();

	                ProBtnControl.pizzabtn.moved = false;
	                //check moved and ontouchend event
	                window.probtn_pizzabtn_moved = false;
	                ProBtnControl.overlaped = false;

	                if (ProBtnControl.params.MainButtonClickable === true) {
	                  if ($("#probtn_menu").length > 0) {
	                    ProBtnControl.additionalButtonFunctions.MaximizeWrapper();
	                  }
	                }
	              }
	            });


	            ProBtnControl.initFunctions.initWebAudio();
	          } //onButtonTap

	          ProBtnControl.initFunctions.initScrollChange(true);

	          if (ProBtnControl.params.waitIframeLoadedMsg !== true) {
	            ProBtnControl.additionalButtonFunctions.animation.checkAndRunAnimation();
	          }

	          //HideButtonAfterAjaxUpdate
	          //Checking this to hide button if page is "changed" on some js app
	          if (ProBtnControl.params.CheckPageAjaxUpdate === true) {
	            if ("onhashchange" in window) {
	            }

	            var locationHashChanged = function () {
	              if (ProBtnControl.params.HideButtonAfterAjaxUpdate === true) {
	                ProBtnControl.additionalButtonFunctions.hideAll();
	              }
	            };

	            var locationHashChanged2 = function () {
	              if (ProBtnControl.params.HideButtonAfterAjaxUpdate === true) {
	                if (window.location.pathname !== startLocation) {
	                  ProBtnControl.additionalButtonFunctions.hideAll();
	                }
	              }
	            };

	            var startLocation = window.location.pathname;
	            setInterval(locationHashChanged2, 50);
	            window.onhashchange = locationHashChanged;
	          }
	        };

	        //ProBtnControl.statistics.callSuperPixelExt("before_getDeviceCID_done");
	        ProBtnControl.cookieFunctions.getDeviceCID(function (guid) {
	          //ProBtnControl.statistics.callSuperPixelExt("getDeviceCID_done0");
	          ProBtnControl.initFunctions.initExternalData.initFirstAvailable(function () {
	            
	            ProBtnControl.statistics.callSuperPixelExt("initFirstAvailable_done");

	            //get coordinates if nessesary
	            ProBtnControl.geolocation.checkAndRunGeolocation(function () {
	              getSettingsAndLaunchButton(null);
	            });

	          });
	        });
	      }
	    }
	  };

	})(jQuery);

	
        jQuery(document).StartButton({
            isHPMD: isHPMD,
            loadFancyboxJS: false,
            hpmd: window.probtn_hpmd,
            domain: domain,
            mainStyleCss: mainStyleCssPath,
            fancyboxCssPath: fancyboxCssPath,
            fancyboxJsPath: fancyboxPath,
            jqueryPepPath: jquerypepPath
        })
}

var loadFancybox = function (jQuery1) {
    var jQuery = jQuery1;

    var fancyboxFunction = null;
    try {
        fancyboxFunction = jQuery.fancybox;
        if ((fancyboxFunction!==null) && (fancyboxFunction!==undefined)) {
            fancyboxFunction = jQuery.fancybox.open;
        }
    } catch (ex) {
    }

    var mo_domain = document.domain.replace("www.", "");
    var mo_not_load_fb = false; // ( mo_domain && mo_domain.indexOf('maximonline.ru') >= 0 );

    if (typeof fancyboxFunction == 'function' || mo_not_load_fb) {
        loadProbtn(jQuery);
    } else {

		//fancybox
		/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */(function(window,document,$,undefined){var H=$("html"),W=$(window),D=$(document),F=$.fancybox=function(){F.open.apply(this,arguments)},IE=navigator.userAgent.match(/msie/i),didUpdate=null,isTouch=document.createTouch!==undefined,isQuery=function(obj){return obj&&obj.hasOwnProperty&&obj instanceof $},isString=function(str){return str&&$.type(str)==="string"},isPercentage=function(str){return isString(str)&&str.indexOf("%")>0},isScrollable=function(el){return(el&&!(el.style.overflow&&el.style.overflow==="hidden")&&((el.clientWidth&&el.scrollWidth>el.clientWidth)||(el.clientHeight&&el.scrollHeight>el.clientHeight)))},getScalar=function(orig,dim){var value=parseInt(orig,10)||0;if(dim&&isPercentage(orig)){value=F.getViewport()[dim]/100*value}return Math.ceil(value)},getValue=function(value,dim){return getScalar(value,dim)+"px"};$.extend(F,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!isTouch,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(IE?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeChange:$.noop,beforeClose:$.noop,afterClose:$.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(group,opts){if(!group){return}if(!$.isPlainObject(opts)){opts={}}if(false===F.close(true)){return}if(!$.isArray(group)){group=isQuery(group)?$(group).get():[group]}$.each(group,function(i,element){var obj={},href,title,content,type,rez,hrefParts,selector;if($.type(element)==="object"){if(element.nodeType){element=$(element)}if(isQuery(element)){obj={href:element.data("fancybox-href")||element.attr("href"),title:element.data("fancybox-title")||element.attr("title"),isDom:true,element:element};if($.metadata){$.extend(true,obj,element.metadata())}}else{obj=element}}href=opts.href||obj.href||(isString(element)?element:null);title=opts.title!==undefined?opts.title:obj.title||"";content=opts.content||obj.content;type=content?"html":(opts.type||obj.type);if(!type&&obj.isDom){type=element.data("fancybox-type");if(!type){rez=element.prop("class").match(/fancybox\.(\w+)/);type=rez?rez[1]:null}}if(isString(href)){if(!type){if(F.isImage(href)){type="image"}else{if(F.isSWF(href)){type="swf"}else{if(href.charAt(0)==="#"){type="inline"}else{if(isString(element)){type="html";content=element}}}}}if(type==="ajax"){hrefParts=href.split(/\s+/,2);href=hrefParts.shift();selector=hrefParts.shift()}}if(!content){if(type==="inline"){if(href){content=$(isString(href)?href.replace(/.*(?=#[^\s]+$)/,""):href)}else{if(obj.isDom){content=element}}}else{if(type==="html"){content=href}else{if(!type&&!href&&obj.isDom){type="inline";content=element}}}}$.extend(obj,{href:href,type:type,content:content,title:title,selector:selector});group[i]=obj});F.opts=$.extend(true,{},F.defaults,opts);if(opts.keys!==undefined){F.opts.keys=opts.keys?$.extend({},F.defaults.keys,opts.keys):false}F.group=group;return F._start(F.opts.index)},cancel:function(){var coming=F.coming;if(!coming||false===F.trigger("onCancel")){return}F.hideLoading();if(F.ajaxLoad){F.ajaxLoad.abort()}F.ajaxLoad=null;if(F.imgPreload){F.imgPreload.onload=F.imgPreload.onerror=null}if(coming.wrap){coming.wrap.stop(true,true).trigger("onReset").remove()}F.coming=null;if(!F.current){F._afterZoomOut(coming)}},close:function(event){F.cancel();if(false===F.trigger("beforeClose")){return}F.unbindEvents();if(!F.isActive){return}if(!F.isOpen||event===true){$(".fancybox-wrap").stop(true).trigger("onReset").remove();F._afterZoomOut()}else{F.isOpen=F.isOpened=false;F.isClosing=true;$(".fancybox-item, .fancybox-nav").remove();F.wrap.stop(true,true).removeClass("fancybox-opened");F.transitions[F.current.closeMethod]()}},play:function(action){var clear=function(){clearTimeout(F.player.timer)},set=function(){clear();if(F.current&&F.player.isActive){F.player.timer=setTimeout(F.next,F.current.playSpeed)}},stop=function(){clear();D.unbind(".player");F.player.isActive=false;F.trigger("onPlayEnd")},start=function(){if(F.current&&(F.current.loop||F.current.index<F.group.length-1)){F.player.isActive=true;D.bind({"onCancel.player beforeClose.player":stop,"onUpdate.player":set,"beforeLoad.player":clear});set();F.trigger("onPlayStart")}};if(action===true||(!F.player.isActive&&action!==false)){start()}else{stop()}},next:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.next}F.jumpto(current.index+1,direction,"next")}},prev:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.prev}F.jumpto(current.index-1,direction,"prev")}},jumpto:function(index,direction,router){var current=F.current;if(!current){return}index=getScalar(index);F.direction=direction||current.direction[(index>=current.index?"next":"prev")];F.router=router||"jumpto";if(current.loop){if(index<0){index=current.group.length+(index%current.group.length)}index=index%current.group.length}if(current.group[index]!==undefined){F.cancel();F._start(index)}},reposition:function(e,onlyAbsolute){var current=F.current,wrap=current?current.wrap:null,pos;if(wrap){pos=F._getPosition(onlyAbsolute);if(e&&e.type==="scroll"){delete pos.position;wrap.stop(true,true).animate(pos,200)}else{wrap.css(pos);current.pos=$.extend({},current.dim,pos)}}},update:function(e){var type=(e&&e.type),anyway=!type||type==="orientationchange";if(anyway){clearTimeout(didUpdate);didUpdate=null}if(!F.isOpen||didUpdate){return}didUpdate=setTimeout(function(){var current=F.current;if(!current||F.isClosing){return}F.wrap.removeClass("fancybox-tmp");if(anyway||type==="load"||(type==="resize"&&current.autoResize)){F._setDimension()}if(!(type==="scroll"&&current.canShrink)){F.reposition(e)}F.trigger("onUpdate");didUpdate=null},(anyway&&!isTouch?0:300))},toggle:function(action){if(F.isOpen){F.current.fitToView=$.type(action)==="boolean"?action:!F.current.fitToView;if(isTouch){F.wrap.removeAttr("style").addClass("fancybox-tmp");F.trigger("onUpdate")}F.update()}},hideLoading:function(){D.unbind(".loading");$("#fancybox-loading").remove()},showLoading:function(){var el,viewport;F.hideLoading();el=$('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo("body");D.bind("keydown.loading",function(e){if((e.which||e.keyCode)===27){e.preventDefault();F.cancel()}});if(!F.defaults.fixed){viewport=F.getViewport();el.css({position:"absolute",top:(viewport.h*0.5)+viewport.y,left:(viewport.w*0.5)+viewport.x})}},getViewport:function(){var locked=(F.current&&F.current.locked)||false,rez={x:W.scrollLeft(),y:W.scrollTop()};if(locked){rez.w=locked[0].clientWidth;rez.h=locked[0].clientHeight}else{rez.w=isTouch&&window.innerWidth?window.innerWidth:W.width();rez.h=isTouch&&window.innerHeight?window.innerHeight:W.height()}return rez},unbindEvents:function(){if(F.wrap&&isQuery(F.wrap)){F.wrap.unbind(".fb")}D.unbind(".fb");W.unbind(".fb")},bindEvents:function(){var current=F.current,keys;if(!current){return}W.bind("orientationchange.fb"+(isTouch?"":" resize.fb")+(current.autoCenter&&!current.locked?" scroll.fb":""),F.update);keys=current.keys;if(keys){D.bind("keydown.fb",function(e){var code=e.which||e.keyCode,target=e.target||e.srcElement;if(code===27&&F.coming){return false}if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&!(target&&(target.type||$(target).is("[contenteditable]")))){$.each(keys,function(i,val){if(current.group.length>1&&val[code]!==undefined){F[i](val[code]);e.preventDefault();return false}if($.inArray(code,val)>-1){F[i]();e.preventDefault();return false}})}})}if($.fn.mousewheel&&current.mouseWheel){F.wrap.bind("mousewheel.fb",function(e,delta,deltaX,deltaY){var target=e.target||null,parent=$(target),canScroll=false;while(parent.length){if(canScroll||parent.is(".fancybox-skin")||parent.is(".fancybox-wrap")){break}canScroll=isScrollable(parent[0]);parent=$(parent).parent()}if(delta!==0&&!canScroll){if(F.group.length>1&&!current.canShrink){if(deltaY>0||deltaX>0){F.prev(deltaY>0?"down":"left")}else{if(deltaY<0||deltaX<0){F.next(deltaY<0?"up":"right")}}e.preventDefault()}}})}},trigger:function(event,o){var ret,obj=o||F.coming||F.current;if(!obj){return}if($.isFunction(obj[event])){ret=obj[event].apply(obj,Array.prototype.slice.call(arguments,1))}if(ret===false){return false}if(obj.helpers){$.each(obj.helpers,function(helper,opts){if(opts&&F.helpers[helper]&&$.isFunction(F.helpers[helper][event])){F.helpers[helper][event]($.extend(true,{},F.helpers[helper].defaults,opts),obj)}})}D.trigger(event)},isImage:function(str){return isString(str)&&str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(str){return isString(str)&&str.match(/\.(swf)((\?|#).*)?$/i)},_start:function(index){var coming={},obj,href,type,margin,padding;index=getScalar(index);obj=F.group[index]||null;if(!obj){return false}coming=$.extend(true,{},F.opts,obj);margin=coming.margin;padding=coming.padding;if($.type(margin)==="number"){coming.margin=[margin,margin,margin,margin]}if($.type(padding)==="number"){coming.padding=[padding,padding,padding,padding]}if(coming.modal){$.extend(true,coming,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(coming.autoSize){coming.autoWidth=coming.autoHeight=true}if(coming.width==="auto"){coming.autoWidth=true}if(coming.height==="auto"){coming.autoHeight=true}coming.group=F.group;coming.index=index;F.coming=coming;if(false===F.trigger("beforeLoad")){F.coming=null;return}type=coming.type;href=coming.href;if(!type){F.coming=null;if(F.current&&F.router&&F.router!=="jumpto"){F.current.index=index;return F[F.router](F.direction)}return false}F.isActive=true;if(type==="image"||type==="swf"){coming.autoHeight=coming.autoWidth=false;coming.scrolling="visible"}if(type==="image"){coming.aspectRatio=true}if(type==="iframe"&&isTouch){coming.scrolling="scroll"}coming.wrap=$(coming.tpl.wrap).addClass("fancybox-"+(isTouch?"mobile":"desktop")+" fancybox-type-"+type+" fancybox-tmp "+coming.wrapCSS).appendTo(coming.parent||"body");$.extend(coming,{skin:$(".fancybox-skin",coming.wrap),outer:$(".fancybox-outer",coming.wrap),inner:$(".fancybox-inner",coming.wrap)});$.each(["Top","Right","Bottom","Left"],function(i,v){coming.skin.css("padding"+v,getValue(coming.padding[i]))});F.trigger("onReady");if(type==="inline"||type==="html"){if(!coming.content||!coming.content.length){return F._error("content")}}else{if(!href){return F._error("href")}}if(type==="image"){F._loadImage()}else{if(type==="ajax"){F._loadAjax()}else{if(type==="iframe"){F._loadIframe()}else{F._afterLoad()}}}},_error:function(type){$.extend(F.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:type,content:F.coming.tpl.error});F._afterLoad()},_loadImage:function(){var img=F.imgPreload=new Image();img.onload=function(){this.onload=this.onerror=null;F.coming.width=this.width/F.opts.pixelRatio;F.coming.height=this.height/F.opts.pixelRatio;F._afterLoad()};img.onerror=function(){this.onload=this.onerror=null;F._error("image")};img.src=F.coming.href;if(img.complete!==true){F.showLoading()}},_loadAjax:function(){var coming=F.coming;F.showLoading();F.ajaxLoad=$.ajax($.extend({},coming.ajax,{url:coming.href,error:function(jqXHR,textStatus){if(F.coming&&textStatus!=="abort"){F._error("ajax",jqXHR)}else{F.hideLoading()}},success:function(data,textStatus){if(textStatus==="success"){coming.content=data;F._afterLoad()}}}))},_loadIframe:function(){var coming=F.coming,iframe=$(coming.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",isTouch?"auto":coming.iframe.scrolling).attr("src",coming.href);$(coming.wrap).bind("onReset",function(){try{$(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}});if(coming.iframe.preload){F.showLoading();iframe.one("load",function(){$(this).data("ready",1);if(!isTouch){$(this).bind("load.fb",F.update)}$(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();F._afterLoad()})}coming.content=iframe.appendTo(coming.inner);if(!coming.iframe.preload){F._afterLoad()}},_preloadImages:function(){var group=F.group,current=F.current,len=group.length,cnt=current.preload?Math.min(current.preload,len-1):0,item,i;for(i=1;i<=cnt;i+=1){item=group[(current.index+i)%len];if(item.type==="image"&&item.href){new Image().src=item.href}}},_afterLoad:function(){var coming=F.coming,previous=F.current,placeholder="fancybox-placeholder",current,content,type,scrolling,href,embed;F.hideLoading();if(!coming||F.isActive===false){return}if(false===F.trigger("afterLoad",coming,previous)){coming.wrap.stop(true).trigger("onReset").remove();F.coming=null;return}if(previous){F.trigger("beforeChange",previous);previous.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()}F.unbindEvents();current=coming;content=coming.content;type=coming.type;scrolling=coming.scrolling;$.extend(F,{wrap:current.wrap,skin:current.skin,outer:current.outer,inner:current.inner,current:current,previous:previous});href=current.href;switch(type){case"inline":case"ajax":case"html":if(current.selector){content=$("<div>").html(content).find(current.selector)}else{if(isQuery(content)){if(!content.data(placeholder)){content.data(placeholder,$('<div class="'+placeholder+'"></div>').insertAfter(content).hide())}content=content.show().detach();current.wrap.bind("onReset",function(){if($(this).find(content).length){content.hide().replaceAll(content.data(placeholder)).data(placeholder,false)}})}}break;case"image":content=current.tpl.image.replace("{href}",href);break;case"swf":content='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+href+'"></param>';embed="";$.each(current.swf,function(name,val){content+='<param name="'+name+'" value="'+val+'"></param>';embed+=" "+name+'="'+val+'"'});content+='<embed src="'+href+'" type="application/x-shockwave-flash" width="100%" height="100%"'+embed+"></embed></object>";break}if(!(isQuery(content)&&content.parent().is(current.inner))){current.inner.append(content)}F.trigger("beforeShow");current.inner.css("overflow",scrolling==="yes"?"scroll":(scrolling==="no"?"hidden":scrolling));F._setDimension();F.reposition();F.isOpen=false;F.coming=null;F.bindEvents();if(!F.isOpened){$(".fancybox-wrap").not(current.wrap).stop(true).trigger("onReset").remove()}else{if(previous.prevMethod){F.transitions[previous.prevMethod]()}}F.transitions[F.isOpened?current.nextMethod:current.openMethod]();F._preloadImages()},_setDimension:function(){var viewport=F.getViewport(),steps=0,canShrink=false,canExpand=false,wrap=F.wrap,skin=F.skin,inner=F.inner,current=F.current,width=current.width,height=current.height,minWidth=current.minWidth,minHeight=current.minHeight,maxWidth=current.maxWidth,maxHeight=current.maxHeight,scrolling=current.scrolling,scrollOut=current.scrollOutside?current.scrollbarWidth:0,margin=current.margin,wMargin=getScalar(margin[1]+margin[3]),hMargin=getScalar(margin[0]+margin[2]),wPadding,hPadding,wSpace,hSpace,origWidth,origHeight,origMaxWidth,origMaxHeight,ratio,width_,height_,maxWidth_,maxHeight_,iframe,body;wrap.add(skin).add(inner).width("auto").height("auto").removeClass("fancybox-tmp");wPadding=getScalar(skin.outerWidth(true)-skin.width());hPadding=getScalar(skin.outerHeight(true)-skin.height());wSpace=wMargin+wPadding;hSpace=hMargin+hPadding;origWidth=isPercentage(width)?(viewport.w-wSpace)*getScalar(width)/100:width;origHeight=isPercentage(height)?(viewport.h-hSpace)*getScalar(height)/100:height;if(current.type==="iframe"){iframe=current.content;if(current.autoHeight&&iframe.data("ready")===1){try{if(iframe[0].contentWindow.document.location){inner.width(origWidth).height(9999);body=iframe.contents().find("body");if(scrollOut){body.css("overflow-x","hidden")}origHeight=body.outerHeight(true)}}catch(e){}}}else{if(current.autoWidth||current.autoHeight){inner.addClass("fancybox-tmp");if(!current.autoWidth){inner.width(origWidth)}if(!current.autoHeight){inner.height(origHeight)}if(current.autoWidth){origWidth=inner.width()}if(current.autoHeight){origHeight=inner.height()}inner.removeClass("fancybox-tmp")}}width=getScalar(origWidth);height=getScalar(origHeight);ratio=origWidth/origHeight;minWidth=getScalar(isPercentage(minWidth)?getScalar(minWidth,"w")-wSpace:minWidth);maxWidth=getScalar(isPercentage(maxWidth)?getScalar(maxWidth,"w")-wSpace:maxWidth);minHeight=getScalar(isPercentage(minHeight)?getScalar(minHeight,"h")-hSpace:minHeight);maxHeight=getScalar(isPercentage(maxHeight)?getScalar(maxHeight,"h")-hSpace:maxHeight);origMaxWidth=maxWidth;origMaxHeight=maxHeight;if(current.fitToView){maxWidth=Math.min(viewport.w-wSpace,maxWidth);maxHeight=Math.min(viewport.h-hSpace,maxHeight)}maxWidth_=viewport.w-wMargin;maxHeight_=viewport.h-hMargin;if(current.aspectRatio){if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio)}if(height>maxHeight){height=maxHeight;width=getScalar(height*ratio)}if(width<minWidth){width=minWidth;height=getScalar(width/ratio)}if(height<minHeight){height=minHeight;width=getScalar(height*ratio)}}else{width=Math.max(minWidth,Math.min(width,maxWidth));if(current.autoHeight&&current.type!=="iframe"){inner.width(width);height=inner.height()}height=Math.max(minHeight,Math.min(height,maxHeight))}if(current.fitToView){inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();if(current.aspectRatio){while((width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight){if(steps++>19){break}height=Math.max(minHeight,Math.min(maxHeight,height-10));width=getScalar(height*ratio);if(width<minWidth){width=minWidth;height=getScalar(width/ratio)}if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio)}inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height()}}else{width=Math.max(minWidth,Math.min(width,width-(width_-maxWidth_)));height=Math.max(minHeight,Math.min(height,height-(height_-maxHeight_)))}}if(scrollOut&&scrolling==="auto"&&height<origHeight&&(width+wPadding+scrollOut)<maxWidth_){width+=scrollOut}inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();canShrink=(width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight;canExpand=current.aspectRatio?(width<origMaxWidth&&height<origMaxHeight&&width<origWidth&&height<origHeight):((width<origMaxWidth||height<origMaxHeight)&&(width<origWidth||height<origHeight));$.extend(current,{dim:{width:getValue(width_),height:getValue(height_)},origWidth:origWidth,origHeight:origHeight,canShrink:canShrink,canExpand:canExpand,wPadding:wPadding,hPadding:hPadding,wrapSpace:height_-skin.outerHeight(true),skinSpace:skin.height()-height});if(!iframe&&current.autoHeight&&height>minHeight&&height<maxHeight&&!canExpand){inner.height("auto")}},_getPosition:function(onlyAbsolute){var current=F.current,viewport=F.getViewport(),margin=current.margin,width=F.wrap.width()+margin[1]+margin[3],height=F.wrap.height()+margin[0]+margin[2],rez={position:"absolute",top:margin[0],left:margin[3]};if(current.autoCenter&&current.fixed&&!onlyAbsolute&&height<=viewport.h&&width<=viewport.w){rez.position="fixed"}else{if(!current.locked){rez.top+=viewport.y;rez.left+=viewport.x}}rez.top=getValue(Math.max(rez.top,rez.top+((viewport.h-height)*current.topRatio)));rez.left=getValue(Math.max(rez.left,rez.left+((viewport.w-width)*current.leftRatio)));return rez},_afterZoomIn:function(){var current=F.current;if(!current){return}F.isOpen=F.isOpened=true;F.wrap.css("overflow","visible").addClass("fancybox-opened");F.update();if(current.closeClick||(current.nextClick&&F.group.length>1)){F.inner.css("cursor","pointer").bind("click.fb",function(e){if(!$(e.target).is("a")&&!$(e.target).parent().is("a")){e.preventDefault();F[current.closeClick?"close":"next"]()}})}if(current.closeBtn){$(current.tpl.closeBtn).appendTo(F.skin).bind("click.fb",function(e){e.preventDefault();F.close()})}if(current.arrows&&F.group.length>1){if(current.loop||current.index>0){$(current.tpl.prev).appendTo(F.outer).bind("click.fb",F.prev)}if(current.loop||current.index<F.group.length-1){$(current.tpl.next).appendTo(F.outer).bind("click.fb",F.next)}}F.trigger("afterShow");if(!current.loop&&current.index===current.group.length-1){F.play(false)}else{if(F.opts.autoPlay&&!F.player.isActive){F.opts.autoPlay=false;F.play()}}},_afterZoomOut:function(obj){obj=obj||F.current;$(".fancybox-wrap").trigger("onReset").remove();$.extend(F,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});F.trigger("afterClose",obj)}});F.transitions={getOrigPosition:function(){var current=F.current,element=current.element,orig=current.orig,pos={},width=50,height=50,hPadding=current.hPadding,wPadding=current.wPadding,viewport=F.getViewport();if(!orig&&current.isDom&&element.is(":visible")){orig=element.find("img:first");if(!orig.length){orig=element}}if(isQuery(orig)){pos=orig.offset();if(orig.is("img")){width=orig.outerWidth();height=orig.outerHeight()}}else{pos.top=viewport.y+(viewport.h-height)*current.topRatio;pos.left=viewport.x+(viewport.w-width)*current.leftRatio}if(F.wrap.css("position")==="fixed"||current.locked){pos.top-=viewport.y;pos.left-=viewport.x}pos={top:getValue(pos.top-hPadding*current.topRatio),left:getValue(pos.left-wPadding*current.leftRatio),width:getValue(width+wPadding),height:getValue(height+hPadding)};return pos},step:function(now,fx){var ratio,padding,value,prop=fx.prop,current=F.current,wrapSpace=current.wrapSpace,skinSpace=current.skinSpace;if(prop==="width"||prop==="height"){ratio=fx.end===fx.start?1:(now-fx.start)/(fx.end-fx.start);if(F.isClosing){ratio=1-ratio}padding=prop==="width"?current.wPadding:current.hPadding;value=now-padding;F.skin[prop](getScalar(prop==="width"?value:value-(wrapSpace*ratio)));F.inner[prop](getScalar(prop==="width"?value:value-(wrapSpace*ratio)-(skinSpace*ratio)))}},zoomIn:function(){var current=F.current,startPos=current.pos,effect=current.openEffect,elastic=effect==="elastic",endPos=$.extend({opacity:1},startPos);delete endPos.position;if(elastic){startPos=this.getOrigPosition();if(current.openOpacity){startPos.opacity=0.1}}else{if(effect==="fade"){startPos.opacity=0.1}}F.wrap.css(startPos).animate(endPos,{duration:effect==="none"?0:current.openSpeed,easing:current.openEasing,step:elastic?this.step:null,complete:F._afterZoomIn})},zoomOut:function(){var current=F.current,effect=current.closeEffect,elastic=effect==="elastic",endPos={opacity:0.1};if(elastic){endPos=this.getOrigPosition();if(current.closeOpacity){endPos.opacity=0.1}}F.wrap.animate(endPos,{duration:effect==="none"?0:current.closeSpeed,easing:current.closeEasing,step:elastic?this.step:null,complete:F._afterZoomOut})},changeIn:function(){var current=F.current,effect=current.nextEffect,startPos=current.pos,endPos={opacity:1},direction=F.direction,distance=200,field;startPos.opacity=0.1;if(effect==="elastic"){field=direction==="down"||direction==="up"?"top":"left";if(direction==="down"||direction==="right"){startPos[field]=getValue(getScalar(startPos[field])-distance);endPos[field]="+="+distance+"px"}else{startPos[field]=getValue(getScalar(startPos[field])+distance);endPos[field]="-="+distance+"px"}}if(effect==="none"){F._afterZoomIn()}else{F.wrap.css(startPos).animate(endPos,{duration:current.nextSpeed,easing:current.nextEasing,complete:F._afterZoomIn})}},changeOut:function(){var previous=F.previous,effect=previous.prevEffect,endPos={opacity:0.1},direction=F.direction,distance=200;if(effect==="elastic"){endPos[direction==="down"||direction==="up"?"top":"left"]=(direction==="up"||direction==="left"?"-":"+")+"="+distance+"px"}previous.wrap.animate(endPos,{duration:effect==="none"?0:previous.prevSpeed,easing:previous.prevEasing,complete:function(){$(this).trigger("onReset").remove()}})}};F.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!isTouch,fixed:true},overlay:null,fixed:false,el:$("html"),create:function(opts){opts=$.extend({},this.defaults,opts);if(this.overlay){this.close()}this.overlay=$('<div class="fancybox-overlay"></div>').appendTo(F.coming?F.coming.parent:opts.parent);this.fixed=false;if(opts.fixed&&F.defaults.fixed){this.overlay.addClass("fancybox-overlay-fixed");this.fixed=true}},open:function(opts){var that=this;opts=$.extend({},this.defaults,opts);if(this.overlay){this.overlay.unbind(".overlay").width("auto").height("auto")}else{this.create(opts)}if(!this.fixed){W.bind("resize.overlay",$.proxy(this.update,this));this.update()}if(opts.closeClick){this.overlay.bind("click.overlay",function(e){if($(e.target).hasClass("fancybox-overlay")){if(F.isActive){F.close()}else{that.close()}return false}})}this.overlay.css(opts.css).show()},close:function(){var scrollV,scrollH;W.unbind("resize.overlay");if(this.el.hasClass("fancybox-lock")){$(".fancybox-margin").removeClass("fancybox-margin");scrollV=W.scrollTop();scrollH=W.scrollLeft();this.el.removeClass("fancybox-lock");W.scrollTop(scrollV).scrollLeft(scrollH)}$(".fancybox-overlay").remove().hide();$.extend(this,{overlay:null,fixed:false})},update:function(){var width="100%",offsetWidth;this.overlay.width(width).height("100%");if(IE){offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(D.width()>offsetWidth){width=D.width()}}else{if(D.width()>W.width()){width=D.width()}}this.overlay.width(width).height(D.height())},onReady:function(opts,obj){var overlay=this.overlay;$(".fancybox-overlay").stop(true,true);if(!overlay){this.create(opts)}if(opts.locked&&this.fixed&&obj.fixed){if(!overlay){this.margin=D.height()>W.height()?$("html").css("margin-right").replace("px",""):false}obj.locked=this.overlay.append(obj.wrap);obj.fixed=false}if(opts.showEarly===true){this.beforeShow.apply(this,arguments)}},beforeShow:function(opts,obj){var scrollV,scrollH;if(obj.locked){if(this.margin!==false){$("*").filter(function(){return($(this).css("position")==="fixed"&&!$(this).hasClass("fancybox-overlay")&&!$(this).hasClass("fancybox-wrap"))}).addClass("fancybox-margin");this.el.addClass("fancybox-margin")}scrollV=W.scrollTop();scrollH=W.scrollLeft();this.el.addClass("fancybox-lock");W.scrollTop(scrollV).scrollLeft(scrollH)}this.open(opts)},onUpdate:function(){if(!this.fixed){this.update()}},afterClose:function(opts){if(this.overlay&&!F.coming){this.overlay.fadeOut(opts.speedOut,$.proxy(this.close,this))}}};F.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(opts){var current=F.current,text=current.title,type=opts.type,title,target;if($.isFunction(text)){text=text.call(current.element,current)}if(!isString(text)||$.trim(text)===""){return}title=$('<div class="fancybox-title fancybox-title-'+type+'-wrap">'+text+"</div>");switch(type){case"inside":target=F.skin;break;case"outside":target=F.wrap;break;case"over":target=F.inner;break;default:target=F.skin;title.appendTo("body");if(IE){title.width(title.width())}title.wrapInner('<span class="child"></span>');F.current.margin[2]+=Math.abs(getScalar(title.css("margin-bottom")));break}title[(opts.position==="top"?"prependTo":"appendTo")](target)}};$.fn.fancybox=function(options){var index,that=$(this),selector=this.selector||"",run=function(e){var what=$(this).blur(),idx=index,relType,relVal;if(!(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&!what.is(".fancybox-wrap")){relType=options.groupAttr||"data-fancybox-group";relVal=what.attr(relType);if(!relVal){relType="rel";relVal=what.get(0)[relType]}if(relVal&&relVal!==""&&relVal!=="nofollow"){what=selector.length?$(selector):that;what=what.filter("["+relType+'="'+relVal+'"]');idx=what.index(this)}options.index=idx;if(F.open(what,options)!==false){e.preventDefault()}}};options=options||{};index=options.index||0;if(!selector||options.live===false){that.unbind("click.fb-start").bind("click.fb-start",run)}else{D.undelegate(selector,"click.fb-start").delegate(selector+":not('.fancybox-item, .fancybox-nav')","click.fb-start",run)}this.filter("[data-fancybox-start=1]").trigger("click");return this};D.ready(function(){var w1,w2;if($.scrollbarWidth===undefined){$.scrollbarWidth=function(){var parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),child=parent.children(),width=child.innerWidth()-child.height(99).innerWidth();parent.remove();return width}}if($.support.fixedPosition===undefined){$.support.fixedPosition=(function(){var elem=$('<div style="position:fixed;top:20px;"></div>').appendTo("body"),fixed=(elem[0].offsetTop===20||elem[0].offsetTop===15);elem.remove();return fixed}())}$.extend(F.defaults,{scrollbarWidth:$.scrollbarWidth(),fixed:$.support.fixedPosition,parent:$("body")});w1=$(window).width();H.addClass("fancybox-lock-test");w2=$(window).width();H.removeClass("fancybox-lock-test");$("<style type='text/css'>.fancybox-margin{margin-right:"+(w2-w1)+"px;}</style>").appendTo("head")})}(window,document,jQuery));

	
        loadProbtn(jQuery);
    }
}

var loadJqueryPep = function (jQuery1) {
    var jQuery = jQuery1;
    var pepFunction = null;
    try {
        pepFunction = jQuery.pep.toggleAll;
    } catch (ex) { }

    if (typeof pepFunction == 'function') {
        loadFancybox(jQuery);
    } else {

        /* jquery.pep */
		/*! cdn 2017-11-21 13:11:12 */
		!function(a,b,c){"use strict";function d(b,c){return this.name=e,this.el=b,this.$el=a(b),this.options=a.extend({},f,c),this.$document=a(this.$el[0].ownerDocument),this.$body=this.$document.find("body"),this.moveTrigger="MSPointerMove pointermove touchmove mousemove",this.startTrigger="MSPointerDown pointerdown touchstart mousedown",this.stopTrigger="MSPointerUp pointerup touchend mouseup",this.startTriggerArray=this.startTrigger.split(" "),this.moveTriggerArray=this.moveTrigger.split(" "),this.stopTriggerArray=this.stopTrigger.split(" "),this.stopEvents=[this.stopTrigger,this.options.stopEvents].join(" "),"window"===this.options.constrainTo?this.$container=this.$document:this.options.constrainTo&&"parent"!==this.options.constrainTo?this.$container=a(this.options.constrainTo):this.$container=this.$el.parent(),this.isPointerEventCompatible()&&this.applyMSDefaults(),this.CSSEaseHash=this.getCSSEaseHash(),this.scale=1,this.started=!1,this.disabled=!1,this.activeDropRegions=[],this.resetVelocityQueue(),this.init(),this}var e="pep",f={initiate:function(){},start:function(){},drag:function(){},stop:function(){},easing:null,rest:function(){},moveTo:!1,callIfNotStarted:["stop","rest"],startThreshold:[0,0],grid:[1,1],debug:!1,activeClass:"pep-active",multiplier:1,velocityMultiplier:2.5,shouldPreventDefault:!0,allowDragEventPropagation:!0,stopEvents:"",hardwareAccelerate:!0,useCSSTranslation:!0,disableSelect:!0,cssEaseString:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",cssEaseDuration:1e3,shouldEase:!0,droppable:!1,droppableActiveClass:"pep-dpa",overlapFunction:!1,constrainTo:!1,removeMargins:!0,place:!0,deferPlacement:!1,axis:null,forceNonCSS3Movement:!1,elementsWithInteraction:"input",revert:!1,revertAfter:"stop",revertIf:function(){return!0},ignoreRightClick:!0,startPos:{left:null,top:null}};d.prototype.init=function(){this.options.debug&&this.buildDebugDiv(),this.options.disableSelect&&this.disableSelect(),this.options.place&&!this.options.deferPlacement&&(this.positionParent(),this.placeObject()),this.ev={},this.pos={},this.subscribe()},d.prototype.subscribe=function(){var a=this;this.onStartEvent=function(b){a.handleStart(b)},this.$el.on(this.startTrigger,this.onStartEvent),this.onStartEventOnElementsWithInteraction=function(a){a.stopPropagation()},this.$el.on(this.startTrigger,this.options.elementsWithInteraction,this.onStartEventOnElementsWithInteraction),this.onStopEvents=function(b){a.handleStop(b)},this.$document.on(this.stopEvents,this.onStopEvents),this.onMoveEvents=function(b){a.moveEvent=b},this.$document.on(this.moveTrigger,this.onMoveEvents)},d.prototype.unsubscribe=function(){this.$el.off(this.startTrigger,this.onStartEvent),this.$el.off(this.startTrigger,this.options.elementsWithInteraction,this.onStartEventOnElementsWithInteraction),this.$document.off(this.stopEvents,this.onStopEvents),this.$document.off(this.moveTrigger,this.onMoveEvents)},d.prototype.handleStart=function(a){var b=this;if(this.isValidMoveEvent(a)&&!this.disabled&&(!this.options.ignoreRightClick||3!==a.which)){this.isPointerEventCompatible()&&a.preventManipulation&&a.preventManipulation(),a=this.normalizeEvent(a),this.options.place&&this.options.deferPlacement&&(this.positionParent(),this.placeObject()),this.log({type:"event",event:a.type}),this.options.hardwareAccelerate&&!this.hardwareAccelerated&&(this.hardwareAccelerate(),this.hardwareAccelerated=!0);var c=this.options.initiate.call(this,a,this);if(c===!1)return;clearTimeout(this.restTimeout),this.$el.addClass(this.options.activeClass),this.removeCSSEasing(),this.startX=this.ev.x=a.pep.x,this.startY=this.ev.y=a.pep.y,this.initialPosition=this.initialPosition||this.$el.position(),this.startEvent=this.moveEvent=a,this.active=!0,this.options.shouldPreventDefault&&a.preventDefault(),this.options.allowDragEventPropagation||a.stopPropagation(),function d(){b.active&&(b.handleMove(),b.requestAnimationFrame(d))}(),function e(){b.options.easing&&(b.easing&&b.options.easing.call(b,null,b),b.requestAnimationFrame(e))}()}},d.prototype.handleMove=function(){if("undefined"!=typeof this.moveEvent){var c=this.normalizeEvent(this.moveEvent),d=b.parseInt(c.pep.x/this.options.grid[0])*this.options.grid[0],e=b.parseInt(c.pep.y/this.options.grid[1])*this.options.grid[1];this.addToLIFO({time:c.timeStamp,x:d,y:e});var f,g;if(a.inArray(c.type,this.startTriggerArray)>-1?(f=0,g=0):(f=d-this.ev.x,g=e-this.ev.y),this.dx=f,this.dy=g,this.ev.x=d,this.ev.y=e,0===f&&0===g)return void this.log({type:"event",event:"** stopped **"});var h=Math.abs(this.startX-d),i=Math.abs(this.startY-e);!this.started&&(h>this.options.startThreshold[0]||i>this.options.startThreshold[1])&&(this.started=!0,this.$el.addClass("pep-start"),this.options.start.call(this,this.startEvent,this)),this.options.droppable&&this.calculateActiveDropRegions();var j=this.options.drag.call(this,c,this);if(j===!1)return void this.resetVelocityQueue();this.log({type:"event",event:c.type}),this.log({type:"event-coords",x:this.ev.x,y:this.ev.y}),this.log({type:"velocity"}),this.doMoveTo(f,g)}},d.prototype.doMoveTo=function(a,b){var c,d,e=this.handleConstraint(a,b);"function"==typeof this.options.moveTo?(c=a>=0?"+="+Math.abs(a/this.scale)*this.options.multiplier:"-="+Math.abs(a/this.scale)*this.options.multiplier,d=b>=0?"+="+Math.abs(b/this.scale)*this.options.multiplier:"-="+Math.abs(b/this.scale)*this.options.multiplier,this.options.constrainTo&&(c=e.x!==!1?e.x:c,d=e.y!==!1?e.y:d),"x"===this.options.axis&&(d=e.y),"y"===this.options.axis&&(c=e.x),this.options.moveTo.call(this,c,d)):this.shouldUseCSSTranslation()?(a=a/this.scale*this.options.multiplier,b=b/this.scale*this.options.multiplier,this.options.constrainTo&&(a=e.x===!1?a:0,b=e.y===!1?b:0),"x"===this.options.axis&&(b=0),"y"===this.options.axis&&(a=0),this.moveToUsingTransforms(a,b)):(c=a>=0?"+="+Math.abs(a/this.scale)*this.options.multiplier:"-="+Math.abs(a/this.scale)*this.options.multiplier,d=b>=0?"+="+Math.abs(b/this.scale)*this.options.multiplier:"-="+Math.abs(b/this.scale)*this.options.multiplier,this.options.constrainTo&&(c=e.x!==!1?e.x:c,d=e.y!==!1?e.y:d),"x"===this.options.axis&&(d=e.y),"y"===this.options.axis&&(c=e.x),this.moveTo(c,d))},d.prototype.handleStop=function(b){this.active&&(this.log({type:"event",event:b.type}),this.active=!1,this.easing=!0,this.$el.removeClass("pep-start").addClass("pep-ease"),this.options.droppable&&this.calculateActiveDropRegions(),(this.started||!this.started&&a.inArray("stop",this.options.callIfNotStarted)>-1)&&this.options.stop.call(this,b,this),this.options.shouldEase?this.ease(b,this.started):this.removeActiveClass(),this.options.revert&&("stop"===this.options.revertAfter||!this.options.shouldEase)&&this.options.revertIf&&this.options.revertIf.call(this)&&this.revert(),this.started=!1,this.resetVelocityQueue())},d.prototype.ease=function(b,c){var d=(this.$el.position(),this.velocity()),e=(this.dt,d.x/this.scale*this.options.multiplier),f=d.y/this.scale*this.options.multiplier,g=this.handleConstraint(e,f,!0);this.cssAnimationsSupported()&&this.$el.css(this.getCSSEaseHash());var h=d.x>0?"+="+e:"-="+Math.abs(e),i=d.y>0?"+="+f:"-="+Math.abs(f);this.options.constrainTo&&(h=g.x!==!1?g.x:h,i=g.y!==!1?g.y:i),"x"===this.options.axis&&(i="+=0"),"y"===this.options.axis&&(h="+=0");var j=!this.cssAnimationsSupported()||this.options.forceNonCSS3Movement;"function"==typeof this.options.moveTo?this.options.moveTo.call(this,h,i):this.moveTo(h,i,j);var k=this;this.restTimeout=setTimeout(function(){k.options.droppable&&k.calculateActiveDropRegions(),k.easing=!1,(c||!c&&a.inArray("rest",k.options.callIfNotStarted)>-1)&&k.options.rest.call(k,b,k),k.options.revert&&"ease"===k.options.revertAfter&&k.options.shouldEase&&k.options.revertIf&&k.options.revertIf.call(k)&&k.revert(),k.removeActiveClass()},this.options.cssEaseDuration)},d.prototype.normalizeEvent=function(a){return a.pep={},this.isTouch(a)?(a.pep.x=a.originalEvent.touches[0].pageX,a.pep.y=a.originalEvent.touches[0].pageY,a.pep.type=a.type):(this.isPointerEventCompatible()||!this.isTouch(a))&&(a.pageX?(a.pep.x=a.pageX,a.pep.y=a.pageY):(a.pep.x=a.originalEvent.pageX,a.pep.y=a.originalEvent.pageY),a.pep.type=a.type),a},d.prototype.resetVelocityQueue=function(){this.velocityQueue=new Array(5)},d.prototype.moveTo=function(a,b,c){this.log({type:"delta",x:a,y:b}),c?this.$el.animate({top:b,left:a},0,"easeOutQuad",{queue:!1}):this.$el.stop(!0,!1).css({top:b,left:a})},d.prototype.moveToUsingTransforms=function(a,b){var c=this.matrixToArray(this.matrixString());this.cssX||(this.cssX=this.xTranslation(c)),this.cssY||(this.cssY=this.yTranslation(c)),this.cssX=this.cssX+a,this.cssY=this.cssY+b,this.log({type:"delta",x:a,y:b}),c[4]=this.cssX,c[5]=this.cssY,this.translation=this.arrayToMatrix(c),this.transform(this.translation)},d.prototype.transform=function(a){this.$el.css({"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,"-o-transform":a,transform:a})},d.prototype.xTranslation=function(a){return a=a||this.matrixToArray(this.matrixString()),parseInt(a[4],10)},d.prototype.yTranslation=function(a){return a=a||this.matrixToArray(this.matrixString()),parseInt(a[5],10)},d.prototype.matrixString=function(){var a=function(a){return!(!a||"none"===a||a.indexOf("matrix")<0)},b="matrix(1, 0, 0, 1, 0, 0)";return a(this.$el.css("-webkit-transform"))&&(b=this.$el.css("-webkit-transform")),a(this.$el.css("-moz-transform"))&&(b=this.$el.css("-moz-transform")),a(this.$el.css("-ms-transform"))&&(b=this.$el.css("-ms-transform")),a(this.$el.css("-o-transform"))&&(b=this.$el.css("-o-transform")),a(this.$el.css("transform"))&&(b=this.$el.css("transform")),b},d.prototype.matrixToArray=function(a){return a.split("(")[1].split(")")[0].split(",")},d.prototype.arrayToMatrix=function(a){return"matrix("+a.join(",")+")"},d.prototype.addToLIFO=function(a){var b=this.velocityQueue;b=b.slice(1,b.length),b.push(a),this.velocityQueue=b},d.prototype.velocity=function(){for(var a=0,b=0,c=0;c<this.velocityQueue.length-1;c++)this.velocityQueue[c]&&(a+=this.velocityQueue[c+1].x-this.velocityQueue[c].x,b+=this.velocityQueue[c+1].y-this.velocityQueue[c].y,this.dt=this.velocityQueue[c+1].time-this.velocityQueue[c].time);return{x:a*this.options.velocityMultiplier,y:b*this.options.velocityMultiplier}},d.prototype.revert=function(){this.shouldUseCSSTranslation()&&this.moveToUsingTransforms(-this.xTranslation(),-this.yTranslation()),this.moveTo(this.initialPosition.left,this.initialPosition.top)},d.prototype.requestAnimationFrame=function(a){return b.requestAnimationFrame&&b.requestAnimationFrame(a)||b.webkitRequestAnimationFrame&&b.webkitRequestAnimationFrame(a)||b.mozRequestAnimationFrame&&b.mozRequestAnimationFrame(a)||b.oRequestAnimationFrame&&b.mozRequestAnimationFrame(a)||b.msRequestAnimationFrame&&b.msRequestAnimationFrame(a)||b.setTimeout(a,1e3/60)},d.prototype.positionParent=function(){this.options.constrainTo&&!this.parentPositioned&&(this.parentPositioned=!0,"parent"===this.options.constrainTo?this.$container.css({position:"relative"}):"window"===this.options.constrainTo&&"#document"!==this.$container.get(0).nodeName&&"static"!==this.$container.css("position")&&this.$container.css({position:"static"}))},d.prototype.placeObject=function(){this.objectPlaced||(this.objectPlaced=!0,this.offset="parent"===this.options.constrainTo||this.hasNonBodyRelative()?this.$el.position():this.$el.offset(),parseInt(this.$el.css("left"),10)&&(this.offset.left=this.$el.css("left")),"number"==typeof this.options.startPos.left&&(this.offset.left=this.options.startPos.left),parseInt(this.$el.css("top"),10)&&(this.offset.top=this.$el.css("top")),"number"==typeof this.options.startPos.top&&(this.offset.top=this.options.startPos.top),this.options.removeMargins&&this.$el.css({margin:0}),this.$el.css({position:"absolute",top:this.offset.top,left:this.offset.left}))},d.prototype.hasNonBodyRelative=function(){return this.$el.parents().filter(function(){var b=a(this);return b.is("body")||"relative"===b.css("position")}).length>1},d.prototype.setScale=function(a){this.scale=a},d.prototype.setMultiplier=function(a){this.options.multiplier=a},d.prototype.removeCSSEasing=function(){this.cssAnimationsSupported()&&this.$el.css(this.getCSSEaseHash(!0))},d.prototype.disableSelect=function(){this.$el.css({"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"})},d.prototype.removeActiveClass=function(){this.$el.removeClass([this.options.activeClass,"pep-ease"].join(" "))},d.prototype.handleConstraint=function(b,d,e){var f=this.$el.position();this.pos.x=f.left,this.pos.y=f.top;var g,h,i,j,k={x:!1,y:!1};return this.log({type:"pos-coords",x:this.pos.x,y:this.pos.y}),a.isArray(this.options.constrainTo)?(this.options.constrainTo[3]!==c&&this.options.constrainTo[1]!==c&&(h=this.options.constrainTo[1]===!1?1/0:this.options.constrainTo[1],i=this.options.constrainTo[3]===!1?-(1/0):this.options.constrainTo[3]),this.options.constrainTo[0]!==!1&&this.options.constrainTo[2]!==!1&&(g=this.options.constrainTo[2]===!1?1/0:this.options.constrainTo[2],j=this.options.constrainTo[0]===!1?-(1/0):this.options.constrainTo[0]),this.pos.x+b<i&&(k.x=i),this.pos.y+d<j&&(k.y=j)):"string"==typeof this.options.constrainTo&&(i=0,j=0,h=this.$container.width()-this.$el.outerWidth(),g=this.$container.height()-this.$el.outerHeight(),this.pos.x+b<0&&(k.x=0),this.pos.y+d<0&&(k.y=0)),this.pos.x+b>h&&(k.x=h),this.pos.y+d>g&&(k.y=g),this.shouldUseCSSTranslation()&&e&&(k.x===i&&this.xTranslation()&&(k.x=i-this.xTranslation()),k.x===h&&this.xTranslation()&&(k.x=h-this.xTranslation()),k.y===j&&this.yTranslation()&&(k.y=j-this.yTranslation()),k.y===g&&this.yTranslation()&&(k.y=g-this.yTranslation())),k},d.prototype.getCSSEaseHash=function(a){"undefined"==typeof a&&(a=!1);var b;if(a)b="";else{if(this.CSSEaseHash)return this.CSSEaseHash;b=["all",this.options.cssEaseDuration+"ms",this.options.cssEaseString].join(" ")}return{"-webkit-transition":b,"-moz-transition":b,"-ms-transition":b,"-o-transition":b,transition:b}},d.prototype.calculateActiveDropRegions=function(){var b=this;this.activeDropRegions.length=0,a.each(a(this.options.droppable),function(c,d){var e=a(d);b.isOverlapping(e,b.$el)?(e.addClass(b.options.droppableActiveClass),b.activeDropRegions.push(e)):e.removeClass(b.options.droppableActiveClass)})},d.prototype.isOverlapping=function(a,b){if(this.options.overlapFunction)return this.options.overlapFunction(a,b);var c=a[0].getBoundingClientRect(),d=b[0].getBoundingClientRect();return!(c.right<d.left||c.left>d.right||c.bottom<d.top||c.top>d.bottom)},d.prototype.isTouch=function(a){return a.type.search("touch")>-1},d.prototype.isPointerEventCompatible=function(){return"MSPointerEvent"in b},d.prototype.applyMSDefaults=function(a){this.$el.css({"-ms-touch-action":"none","touch-action":"none","-ms-scroll-chaining":"none","-ms-scroll-limit":"0 0 0 0"})},d.prototype.isValidMoveEvent=function(a){return!this.isTouch(a)||this.isTouch(a)&&a.originalEvent&&a.originalEvent.touches&&1===a.originalEvent.touches.length},d.prototype.shouldUseCSSTranslation=function(){if(this.options.forceNonCSS3Movement)return!1;if("undefined"!=typeof this.useCSSTranslation)return this.useCSSTranslation;var a=!1;return a=!this.options.useCSSTranslation||"undefined"!=typeof Modernizr&&!Modernizr.csstransforms?!1:!0,this.useCSSTranslation=a,a},d.prototype.cssAnimationsSupported=function(){if("undefined"!=typeof this.cssAnimationsSupport)return this.cssAnimationsSupport;if("undefined"!=typeof Modernizr&&Modernizr.cssanimations)return this.cssAnimationsSupport=!0,!0;var a=!1,b=document.createElement("div"),d="animation",e="",f="Webkit Moz O ms Khtml".split(" "),g="";if(b.style.animationName&&(a=!0),a===!1)for(var h=0;h<f.length;h++)if(b.style[f[h]+"AnimationName"]!==c){g=f[h],d=g+"Animation",e="-"+g.toLowerCase()+"-",a=!0;break}return this.cssAnimationsSupport=a,a},d.prototype.hardwareAccelerate=function(){this.$el.css({"-webkit-perspective":1e3,perspective:1e3,"-webkit-backface-visibility":"hidden","backface-visibility":"hidden"})},d.prototype.getMovementValues=function(){return{ev:this.ev,pos:this.pos,velocity:this.velocity()}},d.prototype.buildDebugDiv=function(){var b;0===a("#pep-debug").length&&(b=a("<div></div>"),b.attr("id","pep-debug").append("<div style='font-weight:bold; background: red; color: white;'>DEBUG MODE</div>").append("<div id='pep-debug-event'>no event</div>").append("<div id='pep-debug-ev-coords'>event coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-pos-coords'>position coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-velocity'>velocity: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-delta'>&Delta; movement: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").css({position:"fixed",bottom:5,right:5,zIndex:99999,textAlign:"right",fontFamily:"Arial, sans",fontSize:10,border:"1px solid #DDD",padding:"3px",background:"white",color:"#333"}));var c=this;setTimeout(function(){c.debugElements={$event:a("#pep-debug-event"),$velocityX:a("#pep-debug-velocity .pep-x"),$velocityY:a("#pep-debug-velocity .pep-y"),$dX:a("#pep-debug-delta .pep-x"),$dY:a("#pep-debug-delta .pep-y"),$evCoordsX:a("#pep-debug-ev-coords .pep-x"),$evCoordsY:a("#pep-debug-ev-coords .pep-y"),$posCoordsX:a("#pep-debug-pos-coords .pep-x"),$posCoordsY:a("#pep-debug-pos-coords .pep-y")}},0),a("body").append(b)},d.prototype.log=function(a){if(this.options.debug)switch(a.type){case"event":this.debugElements.$event.text(a.event);break;case"pos-coords":this.debugElements.$posCoordsX.text(a.x),this.debugElements.$posCoordsY.text(a.y);break;case"event-coords":this.debugElements.$evCoordsX.text(a.x),this.debugElements.$evCoordsY.text(a.y);break;case"delta":this.debugElements.$dX.text(a.x),this.debugElements.$dY.text(a.y);break;case"velocity":var b=this.velocity();this.debugElements.$velocityX.text(Math.round(b.x)),this.debugElements.$velocityY.text(Math.round(b.y))}},d.prototype.toggle=function(a){"undefined"==typeof a?this.disabled=!this.disabled:this.disabled=!a},a.extend(a.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeOutExpo:function(a,b,c,d,e){return b===e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c}}),a.fn[e]=function(b){return this.each(function(){if(!a.data(this,"plugin_"+e)){var c=new d(this,b);a.data(this,"plugin_"+e,c),a.pep.peps.push(c)}})},a.pep={},a.pep.peps=[],a.pep.toggleAll=function(b){a.each(this.peps,function(a,c){c.toggle(b)})},a.pep.unbind=function(a){var b=a.data("plugin_"+e);"undefined"!=typeof b&&(b.toggle(!1),b.unsubscribe(),a.removeData("plugin_"+e))}}(jQuery,window);
		
        loadFancybox(jQuery);
    }
}

var isjQuery = window.jQuery;
if ((vernums[0]>0) && (vernums[1]>4)) {
} else { isjQuery = false; };

var oHead = document.getElementsByTagName('HEAD').item(0);

function loadJS(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s["data-cfasync"] = "false";
    s.async = true;
    s.onreadystatechange = s.onload = function () {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(s);
}

if (isjQuery) {
    if ($ == jQuery) {

        loadJS(jqueryPath, function () {
            var probtnJquery = jQuery.noConflict(true);
            loadJqueryPep(probtnJquery);
        });

    } else {

        loadJS(jqueryPath, function () {
            var probtnJquery = jQuery.noConflict(true);
            loadJqueryPep(probtnJquery);
        });
    }
} else {
    
    loadJS(jqueryPath, function () {
        var probtnJquery = jQuery.noConflict(true);
        loadJqueryPep(probtnJquery);

    });
}
})();
