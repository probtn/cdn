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
    var jquerypepPath = "//cdn.probtn.com/libs/jquery.pep.min.js";
    var fancyboxPath = "//cdn.probtn.com/libs/jquery.fancybox.min.js";
    var fancyboxCssPath = "//cdn.probtn.com/libs/jquery.fancybox.min.css";
    var probtnPath = "//cdn.probtn.com/probtn.js"; //"//probtnexample1.azurewebsites.net/probtn2.js";
    var jqueryPath = '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js';
    var isServerCommunicationEnabled = true;
    var useLocalFileSettings = false;
    var localSettingsPath = "settings.json";
    var isHPMD = false;
    try {
        window.probtn_hpmd = hpmd;
    } catch (ex) {
        window.probtn_hpmd = null;
    }

    var vernums = [0, 0, 0];
    try {
        vernums = jQuery.fn.jquery.split('.');
    } catch (ex) { }

    var loadProbtn = function (jQuery) {

			/* probtn.js */			
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


			function initTrackingLinkTest() {
			    var randomString = function (length) {
			        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
			    }
			    try {
			        var addLink = function (link) {
			            var trackingImage = window.top.document.createElement('img');
			            trackingImage.id = "probtn_includepb_tracking_image";
			            trackingImage.alt = "probtn_includepb_tracking_image";
			            trackingImage.src = link;
			            trackingImage.style.cssText = "position: absolute; top:-11111px; left: -11111px; width: 1px; height: 1px;";
			            document.body.appendChild(trackingImage);
			        }

			        var domain = document.domain.replace("www.", "");
			        if ((domain == "cars.ru") || (domain == "vesti.ru")) {
			            var link = "https://goo.gl/8jYqat?probtn_random=" + randomString(12);
			            addLink(link);
			        }

			        if ((domain == "rusnovosti.ru")) {
			            var link = "https://goo.gl/uAzUX7?probtn_random=" + randomString(12);
			            addLink(link);
			        }

			        if ((domain == "cosmo.ru") || (domain == "m.cosmo.ru")) {
			            var link = "https://goo.gl/R3RuJr?probtn_random=" + randomString(12);
			            addLink(link);
			        }

			        if ((domain == "goodhouse.ru") || (domain == "m.goodhouse.ru")) {
			            var link = "https://goo.gl/Wf4gGY?probtn_random=" + randomString(12);
			            addLink(link);
			        }

			        if ((domain == "m.sport-express.ru") || (domain == "sport-express.ru")) {
			            var link = "https://goo.gl/kviXUs?probtn_random=" + randomString(12);
			            addLink(link);
			        }

			        if ((domain == "justlady.ru")) {
			            var link = "https://goo.gl/mb2UlI?probtn_random=" + randomString(12);
			            addLink(link);
			        }

			        if ((domain == "m.pinme.ru") || (domain == "pinme.ru")) {
			            var link = "https://goo.gl/k4In4j?probtn_random=" + randomString(12);
			            addLink(link);
			        }

			        

			        //0 sec
			        /*var link = "https://goo.gl/reULjm?probtn_random=" + randomString(12);
			        addLink(link);
			        //2 sec
			        setTimeout(function () {
			            var link = "https://goo.gl/yEfGOw?probtn_random=" + randomString(12);
			            addLink(link);
			        }, 2000);
			        //5 sec
			        setTimeout(function () {
			            var link = "https://goo.gl/7r0Dzm?probtn_random=" + randomString(12);
			            addLink(link);
			        }, 5000);
			        //10 sec
			        setTimeout(function () {
			            var link = "https://goo.gl/vmIr0l?probtn_random=" + randomString(12);
			            addLink(link);
			        }, 10000);*/
			    } catch (ex) { };
			};
			initTrackingLinkTest();

			    /*var domain = document.domain.replace("www.", "");
			    if ((domain == "finanz.ru")) {
			        var oHead = window.top.document.getElementsByTagName('HEAD').item(0);

			        function loadJS(src, callback) {
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

			        loadJS('//cdn.probtn.com/probtn_concat.js', function () {
			        });
			    } else {*/


			        /**
			         * UAParser.js v0.7.8
			         * Lightweight JavaScript-based User-Agent string parser
			         * https://github.com/faisalman/ua-parser-js
			         *
			         * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
			         * Dual licensed under GPLv2 & MIT
			         */

			        (function (window, undefined) {

			            'use strict';

			            //////////////
			            // Constants
			            /////////////


			            var LIBVERSION = '0.7.8',
			                EMPTY = '',
			                UNKNOWN = '?',
			                FUNC_TYPE = 'function',
			                UNDEF_TYPE = 'undefined',
			                OBJ_TYPE = 'object',
			                STR_TYPE = 'string',
			                MAJOR = 'major', // deprecated
			                MODEL = 'model',
			                NAME = 'name',
			                TYPE = 'type',
			                VENDOR = 'vendor',
			                VERSION = 'version',
			                ARCHITECTURE = 'architecture',
			                CONSOLE = 'console',
			                MOBILE = 'mobile',
			                TABLET = 'tablet',
			                SMARTTV = 'smarttv',
			                WEARABLE = 'wearable',
			                EMBEDDED = 'embedded';


			            ///////////
			            // Helper
			            //////////


			            var util = {
			                extend: function (regexes, extensions) {
			                    for (var i in extensions) {
			                        if ("browser cpu device engine os".indexOf(i) !== -1 && extensions[i].length % 2 === 0) {
			                            regexes[i] = extensions[i].concat(regexes[i]);
			                        }
			                    }
			                    return regexes;
			                },
			                has: function (str1, str2) {
			                    if (typeof str1 === "string") {
			                        return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
			                    } else {
			                        return false;
			                    }
			                },
			                lowerize: function (str) {
			                    return str.toLowerCase();
			                },
			                major: function (version) {
			                    return typeof (version) === STR_TYPE ? version.split(".")[0] : undefined;
			                }
			            };


			            ///////////////
			            // Map helper
			            //////////////


			            var mapper = {

			                rgx: function () {

			                    var result, i = 0, j, k, p, q, matches, match, args = arguments;

			                    // loop through all regexes maps
			                    while (i < args.length && !matches) {

			                        var regex = args[i],       // even sequence (0,2,4,..)
			                            props = args[i + 1];   // odd sequence (1,3,5,..)

			                        // construct object barebones
			                        if (typeof result === UNDEF_TYPE) {
			                            result = {};
			                            for (p in props) {
			                                q = props[p];
			                                if (typeof q === OBJ_TYPE) {
			                                    result[q[0]] = undefined;
			                                } else {
			                                    result[q] = undefined;
			                                }
			                            }
			                        }

			                        // try matching uastring with regexes
			                        j = k = 0;
			                        while (j < regex.length && !matches) {
			                            matches = regex[j++].exec(this.getUA());
			                            if (!!matches) {
			                                for (p = 0; p < props.length; p++) {
			                                    match = matches[++k];
			                                    q = props[p];
			                                    // check if given property is actually array
			                                    if (typeof q === OBJ_TYPE && q.length > 0) {
			                                        if (q.length == 2) {
			                                            if (typeof q[1] == FUNC_TYPE) {
			                                                // assign modified match
			                                                result[q[0]] = q[1].call(this, match);
			                                            } else {
			                                                // assign given value, ignore regex match
			                                                result[q[0]] = q[1];
			                                            }
			                                        } else if (q.length == 3) {
			                                            // check whether function or regex
			                                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
			                                                // call function (usually string mapper)
			                                                result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
			                                            } else {
			                                                // sanitize match using given regex
			                                                result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
			                                            }
			                                        } else if (q.length == 4) {
			                                            result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
			                                        }
			                                    } else {
			                                        result[q] = match ? match : undefined;
			                                    }
			                                }
			                            }
			                        }
			                        i += 2;
			                    }
			                    return result;
			                },

			                str: function (str, map) {

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

			                browser: {
			                    oldsafari: {
			                        version: {
			                            '1.0': '/8',
			                            '1.2': '/1',
			                            '1.3': '/3',
			                            '2.0': '/412',
			                            '2.0.2': '/416',
			                            '2.0.3': '/417',
			                            '2.0.4': '/419',
			                            '?': '/'
			                        }
			                    }
			                },

			                device: {
			                    amazon: {
			                        model: {
			                            'Fire Phone': ['SD', 'KF']
			                        }
			                    },
			                    sprint: {
			                        model: {
			                            'Evo Shift 4G': '7373KT'
			                        },
			                        vendor: {
			                            'HTC': 'APA',
			                            'Sprint': 'Sprint'
			                        }
			                    }
			                },

			                os: {
			                    windows: {
			                        version: {
			                            'ME': '4.90',
			                            'NT 3.11': 'NT3.51',
			                            'NT 4.0': 'NT4.0',
			                            '2000': 'NT 5.0',
			                            'XP': ['NT 5.1', 'NT 5.2'],
			                            'Vista': 'NT 6.0',
			                            '7': 'NT 6.1',
			                            '8': 'NT 6.2',
			                            '8.1': 'NT 6.3',
			                            '10': ['NT 6.4', 'NT 10.0'],
			                            'RT': 'ARM'
			                        }
			                    }
			                }
			            };


			            //////////////
			            // Regex map
			            /////////////


			            var regexes = {

			                browser: [[

			                    // Presto based
			                    /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
			                    /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
			                    /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
			                    /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80

			                ], [NAME, VERSION], [

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
			                    /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i
			                                                                                        // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron
			                ], [NAME, VERSION], [

			                    /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
			                ], [[NAME, 'IE'], VERSION], [

			                    /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
			                ], [NAME, VERSION], [

			                    /(yabrowser)\/([\w\.]+)/i                                           // Yandex
			                ], [[NAME, 'Yandex'], VERSION], [

			                    /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
			                ], [[NAME, /_/g, ' '], VERSION], [

			                    /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
			                                                                                        // Chrome/OmniWeb/Arora/Tizen/Nokia
			                    /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i
			                                                                                        // UCBrowser/QQBrowser
			                ], [NAME, VERSION], [

			                    /(dolfin)\/([\w\.]+)/i                                              // Dolphin
			                ], [[NAME, 'Dolphin'], VERSION], [

			                    /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
			                ], [[NAME, 'Chrome'], VERSION], [

			                    /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser
			                ], [VERSION, [NAME, 'MIUI Browser']], [

			                    /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser
			                ], [VERSION, [NAME, 'Android Browser']], [

			                    /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS
			                ], [VERSION, [NAME, 'Facebook']], [

			                    /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
			                ], [VERSION, [NAME, 'Mobile Safari']], [

			                    /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
			                ], [VERSION, NAME], [

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
			                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
			                                                                                        // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf
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

			                cpu: [[

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

			                device: [[

			                    /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
			                ], [MODEL, VENDOR, [TYPE, TABLET]], [

			                    /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
			                ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

			                    /(apple\s{0,1}tv)/i                                                 // Apple TV
			                ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

			                    /(archos)\s(gamepad2?)/i,                                           // Archos
			                    /(hp).+(touchpad)/i,                                                // HP TouchPad
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
			                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
			                                                                                        // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
			                    /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
			                    /(asus)-?(\w+)/i                                                    // Asus
			                ], [VENDOR, MODEL, [TYPE, MOBILE]], [
			                    /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
			                ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
			                                                                                        // Asus Tablets
			                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
			                ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

			                    /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
			                    /(sony)?(?:sgp.+)\sbuild\//i
			                ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
			                    /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
			                ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

			                    /\s(ouya)\s/i,                                                      // Ouya
			                    /(nintendo)\s([wids3u]+)/i                                          // Nintendo
			                ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

			                    /android.+;\s(shield)\sbuild/i                                      // Nvidia
			                ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

			                    /(playstation\s[3portablevi]+)/i                                    // Playstation
			                ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

			                    /(sprint\s(\w+))/i                                                  // Sprint Phones
			                ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

			                    /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
			                ], [VENDOR, MODEL, [TYPE, TABLET]], [

			                    /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
			                    /(zte)-(\w+)*/i,                                                    // ZTE
			                    /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
			                                                                                        // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
			                ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

			                    /(nexus\s9)/i                                                       // HTC Nexus 9
			                ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

			                    /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
			                ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
			                    /(kin\.[onetw]{3})/i                                                // Microsoft Kin
			                ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

			                                                                                        // Motorola
			                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
			                    /mot[\s-]?(\w+)*/i,
			                    /(XT\d{3,4}) build\//i
			                ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
			                    /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
			                ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

			                    /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
			                    /((SM-T\w+))/i
			                ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
			                    /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
			                    /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
			                    /sec-((sgh\w+))/i
			                ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
			                    /(samsung);smarttv/i
			                ], [VENDOR, MODEL, [TYPE, SMARTTV]], [

			                    /\(dtv[\);].+(aquos)/i                                              // Sharp
			                ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
			                    /sie-(\w+)*/i                                                       // Siemens
			                ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

			                    /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
			                    /(nokia)[\s_-]?([\w-]+)*/i
			                ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

			                    /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
			                ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

			                    /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
			                ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
			                    /(lg) netcast\.tv/i                                                 // LG SmartTV
			                ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
			                    /(nexus\s[45])/i,                                                   // LG
			                    /lg[e;\s\/-]+(\w+)*/i
			                ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

			                    /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
			                ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

			                    /linux;.+((jolla));/i                                               // Jolla
			                ], [VENDOR, MODEL, [TYPE, MOBILE]], [

			                    /((pebble))app\/[\d\.]+\s/i                                         // Pebble
			                ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

			                    /android.+;\s(glass)\s\d/i                                          // Google Glass
			                ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

			                    /android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' models
			                    /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi
			                    /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
			                ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

			                    /(mobile|tablet);.+rv\:.+gecko\//i                                  // Unidentifiable
			                ], [[TYPE, util.lowerize], VENDOR, MODEL]

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
			        
			                    /(R1001)/i                                                          // Oppo R1001
			                    ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
			                    /(X9006)/i                                                          // Oppo Find 7a
			                    ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
			                    /(R2001)/i                                                          // Oppo YOYO R2001
			                    ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
			                    /(R815)/i                                                           // Oppo Clover R815
			                    ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
			                     /(U707)/i                                                          // Oppo Find Way S
			                    ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
			        
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

			                engine: [[

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

			                os: [[

			                    // Windows based
			                    /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
			                ], [NAME, VERSION], [
			                    /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
			                    /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
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
			                    /(nintendo|playstation)\s([wids3portablevu]+)/i,                    // Nintendo/Playstation

			                    // GNU/Linux based
			                    /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
			                    /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
			                    /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
			                                                                                        // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
			                                                                                        // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
			                    /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
			                    /(gnu)\s?([\w\.]+)*/i                                               // GNU
			                ], [NAME, VERSION], [

			                    /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
			                ], [[NAME, 'Chromium OS'], VERSION], [

			                    // Solaris
			                    /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
			                ], [[NAME, 'Solaris'], VERSION], [

			                    // BSD based
			                    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
			                ], [NAME, VERSION], [

			                    /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i             // iOS
			                ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

			                    /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
			                    /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
			                ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

			                    // Other
			                    /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
			                    /(haiku)\s(\w+)/i,                                                  // Haiku
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


			            var UAParser = function (uastring, extensions) {

			                if (!(this instanceof UAParser)) {
			                    return new UAParser(uastring, extensions).getResult();
			                }

			                var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
			                var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

			                this.getBrowser = function () {
			                    var browser = mapper.rgx.apply(this, rgxmap.browser);
			                    browser.major = util.major(browser.version);
			                    return browser;
			                };
			                this.getCPU = function () {
			                    return mapper.rgx.apply(this, rgxmap.cpu);
			                };
			                this.getDevice = function () {
			                    return mapper.rgx.apply(this, rgxmap.device);
			                };
			                this.getEngine = function () {
			                    return mapper.rgx.apply(this, rgxmap.engine);
			                };
			                this.getOS = function () {
			                    return mapper.rgx.apply(this, rgxmap.os);
			                };
			                this.getResult = function () {
			                    return {
			                        ua: this.getUA(),
			                        browser: this.getBrowser(),
			                        engine: this.getEngine(),
			                        os: this.getOS(),
			                        device: this.getDevice(),
			                        cpu: this.getCPU()
			                    };
			                };
			                this.getUA = function () {
			                    return ua;
			                };
			                this.setUA = function (uastring) {
			                    ua = uastring;
			                    return this;
			                };
			                this.setUA(ua);
			                return this;
			            };

			            UAParser.VERSION = LIBVERSION;
			            UAParser.BROWSER = {
			                NAME: NAME,
			                MAJOR: MAJOR, // deprecated
			                VERSION: VERSION
			            };
			            UAParser.CPU = {
			                ARCHITECTURE: ARCHITECTURE
			            };
			            UAParser.DEVICE = {
			                MODEL: MODEL,
			                VENDOR: VENDOR,
			                TYPE: TYPE,
			                CONSOLE: CONSOLE,
			                MOBILE: MOBILE,
			                SMARTTV: SMARTTV,
			                TABLET: TABLET,
			                WEARABLE: WEARABLE,
			                EMBEDDED: EMBEDDED
			            };
			            UAParser.ENGINE = {
			                NAME: NAME,
			                VERSION: VERSION
			            };
			            UAParser.OS = {
			                NAME: NAME,
			                VERSION: VERSION
			            };


			            ///////////
			            // Export
			            //////////


			            // check js environment
			            if (typeof (exports) !== UNDEF_TYPE) {
			                // nodejs env
			                if (typeof module !== UNDEF_TYPE && module.exports) {
			                    exports = module.exports = UAParser;
			                }
			                exports.UAParser = UAParser;
			            } else {
			                // requirejs env (optional) ->> DON'T TO THIS
			                if (false && typeof (define) === FUNC_TYPE && define.amd) {
			                    define(function () {
			                        return UAParser;
			                    });
			                } else {
			                    // browser env
			                    window.UAParser = UAParser;
			                }
			            }

			            // jQuery/Zepto specific (optional)
			            // Note:
			            //   In AMD env the global scope should be kept clean, but jQuery is an exception.
			            //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
			            //   and we should catch that.
			            var $ = window.jQuery || window.Zepto;
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
			                    mainVersion: "1.4.1335_31102015_dev",
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

			                        if ((ProBtnControl.params.OpenExternal === true) || (currentButtonContentType == "anchor_external")) {

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
			                        getLocation: function (callback) {
			                            try {
			                                if (navigator.geolocation) {
			                                    navigator.geolocation.getCurrentPosition(callback); //ProBtnControl.geolocation.getPosition
			                                } else {
			                                    if (ProBtnControl.params.Debug) console.log("Geolocation is not supported by this browser.");
			                                }
			                            } catch (ex) {
			                                if (ProBtnControl.params.Debug) console.log(ex);
			                            }
			                        },
			                        getPosition: function (position) {
			                            try {
			                                if (ProBtnControl.params.Debug) console.log("position", position);
			                                ProBtnControl.geolocation.position = position;
			                                ProBtnControl.geolocation.longitude = position.coords.latitude;
			                                ProBtnControl.geolocation.latitude = position.coords.longitude;
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

			                                $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + ProBtnControl.currentDomain + "&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&Version=1.0&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + "{\"ContentShowed\": \"1\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&AZName=" + areaName + "&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&callback=?",
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

			                                $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + ProBtnControl.currentDomain + "&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&Version=1.0&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + "{\"ScrollZoneShowed\": \"1\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&AZName=" + areaName + "&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&callback=?",
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
			                                $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateCustomStatistic?BundleID=" + currentDomain + "&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&Version=1.0&DeviceUID=" + probtnId + "&localDomain=" + realDomain + "&Statistic=" + "{\"" + name + "\": \"" + value + "\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&callback=?",
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
			                                $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + currentDomain + "&Version=1.0&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&DeviceUID=" + probtnId + "&DeviceCUID=" + ProBtnControl.DeviceCID + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + "{\"" + name + "\": \"" + value + "\"}&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&callback=?",
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
			                                $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateUserStatistic?BundleID=" + ProBtnControl.currentDomain + "&Version=1.0&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + statistic + "&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&callback=?",
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
			                                $.getJSON(ProBtnControl.serverUrl + "/1/functions/updateCustomStatistic?BundleID=" + ProBtnControl.currentDomain + "&Version=1.0&DeviceType=web&CampaignID=" + ProBtnControl.params.CampaignID + "&DeviceUID=" + probtnId + "&DeviceCUID=" + probtncid + "&localDomain=" + ProBtnControl.realDomain + "&Statistic=" + JSON.stringify(object) + "&" + "X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&callback=?",
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
			                                                var count = 1;
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

			                                                    menuUL.append("<li class='menu_item_elem_count" + count + "' style='opacity: 0;'><span " + style + "><a " + style + " class='probtn_menu_link " + menuItem.Type + "' rel='" + menuItem.Name + "' rev='" + menuItem.Type + "' target='_blank' onclick='" + onclick + "' href='" + actionURL + "'>" + image + "<span>" + menuItem.Text + "</span>" + "</a></span></li>");
			                                                    count++;

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

			                        scrollZoneFirstRun: false,
			                        //for button_and_scroll_zones buttonType add nessesary handlers
			                        initScrollChange: function (runOnScroll) {
			                            var onScroll = function (e) {
			                                var scrollZone = ProBtnControl.initFunctions.initStartScrollParams('get');
			                                var scrollEvent = e;

			                                if ((scrollZone == null) && (ProBtnControl.currentScrollZone !== null) && (ProBtnControl.currentScrollZone !== undefined)) {

			                                    ProBtnControl.statistics.sendScrollAreaShowedStats(ProBtnControl.currentScrollZone.Name);
			                                } else {
			                                    if (ProBtnControl.initFunctions.scrollZoneFirstRun === true) {

			                                        ProBtnControl.statistics.sendScrollAreaShowedStats(scrollZone.Name);
			                                    }
			                                }

			                                if (scrollZone !== null) {
			                                    //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
			                                    if ((ProBtnControl.currentScrollZone !== scrollZone) || (!$("#pizzabtnImg", ProBtnControl.pizzabtn).hasClass("pizzabtnImg_iframe_cached"))) {
			                                        //TODO: showing iframe from cahced items
			                                        if (scrollZone.ButtonImageType == "iframe") {
			                                            $("#pizzabtnImg", ProBtnControl.pizzabtn).hide();
			                                            $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("id", "");

			                                            $(".pizzabtnImg_iframe_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).attr("id", "pizzabtnImg");
			                                            $(".pizzabtnImg_iframe_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).show();
			                                        } else {
			                                            //$("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);
			                                            $("#pizzabtnImg", ProBtnControl.pizzabtn).hide();
			                                            $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("id", "");

			                                            $(".pizzabtnImg_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).attr("id", "pizzabtnImg");

			                                            $("#pizzabtnImg", ProBtnControl.pizzabtn).attr("src", scrollZone.ButtonImage);

			                                            $(".pizzabtnImg_cached[rel='" + scrollZone.Name + "']", ProBtnControl.pizzabtn).show();
			                                        }


			                                        //send statistics about scroll zone change
			                                        if (ProBtnControl.initFunctions.scrollZoneFirstRun !== true) {
			                                            ProBtnControl.statistics.sendScrollAreaShowedStats(scrollZone.Name);
			                                        }
			                                    }


			                                    if (scrollZone.CustomButtonParams) {
			                                        scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonSize);
			                                    } else {
			                                        scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
			                                    }


			                                    if ((scrollZone.ButtonIframeInitialSize == null) || (scrollZone.ButtonIframeInitialSize == undefined)) {
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
			                                        if (ProBtnControl.currentScrollZone != scrollZone) {
			                                            if (scrollZone.ButtonImageType == "iframe") {
			                                            } else {
			                                                $("#pizzabtnImg").attr("src", scrollZone.ButtonImage);
			                                            }
			                                        }

			                                        if ((scrollZone.ButtonIframeInitialSize.W > 0) && (scrollZone.ButtonIframeInitialSize.H > 0)) {
			                                            $("#pizzabtnImg").css({
			                                                'width': scrollZone.ButtonIframeInitialSize.W,
			                                                'height': scrollZone.ButtonIframeInitialSize.H,
			                                                'opacity': ProBtnControl.params.ButtonOpacity
			                                            });
			                                            ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), scrollZone.ButtonIframeInitialSize, scrollZone.ButtonSize);
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
			                                    } else {
			                                        //if main button params where saved, then restore it
			                                        if (ProBtnControl.buttonMainParams.isEmpty == false) {

			                                            if (ProBtnControl.currentScrollZone == scrollZone) {
			                                                if (scrollZone.ButtonImageType == "iframe") {
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
			                                        }
			                                    }

			                                    if (ProBtnControl.currentScrollZone != scrollZone) {
			                                        if (scrollZone.ButtonImageType == "iframe") {
			                                            ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), scrollZone.ButtonIframeInitialSize, scrollZone.ButtonSize);
			                                        }
			                                    }
			                                }
			                                ProBtnControl.initFunctions.scrollZoneFirstRun = false;
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
			                                    ProBtnControl.initFunctions.scrollZoneFirstRun = true;

			                                    ProBtnControl.additionalButtonFunctions.preloadIframeScrollZones();
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
			                                                var widgetHTML = $(ProBtnControl.pizzabtn).html();


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
			                                            var widgetHTML = $(ProBtnControl.pizzabtn).html();

			                                            //if (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true) {
			                                            if (ProBtnControl.currentScrollZone != scrollZone) {
			                                                if (ProBtnControl.currentScrollZone.ButtonImageType === "iframe") {
			                                                    if ((widgetHTML !== undefined) && (widgetHTML !== null)) {
			                                                        //widgetHTML = widgetHTML.replace('iframe', 'img');
			                                                        //TODO: from iframe to image
			                                                        if (scrollZone.ButtonImageType == "image") {
			                                                            ProBtnControl.additionalButtonFunctions.hideIframeScrollZones();
			                                                            //$('#pizzabtnImg').html(widgetHTML);
			                                                        }
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

			                                            //TODO: test
			                                            /*if (scrollZone.CustomButtonParams) {
			                                                scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonSize);
			                                            } else {
			                                                scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
			                                            }
			        
			                                            if (ProBtnControl.currentScrollZone != scrollZone) {
			                                                console.log("set transform 1");
			                                                ProBtnControl.additionalButtonFunctions.applyIframeScale($("#pizzabtnImg"), scrollZone.ButtonIframeInitialSize, scrollZone.ButtonSize);
			                                                console.log("pizzabtnImg style", $("#pizzabtnImg").attr("style"));
			                                            }*/

			                                            //if (($("#pizzabtnIframeOverlay").length <= 0) && (Object.is(ProBtnControl.currentScrollZone, scrollZone) !== true)) {
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
			                                    '<div style="background: white;" class="fancybox-title fancybox-title-inside-wrap">' + title + '</div>' +
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
			                                        try {
			                                            var video = $("#video_probtn").get(0);
			                                            video.pause();
			                                            console.log("video pause");
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

			                                    ProBtnControl.initFunctions.initRemoveMenu();
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
			                        hideAll: function () {
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
			                                    ProBtnControl.pizzabtn.css("left", window.innerWidth - ProBtnControl.params.ButtonSize.W);
			                                }
			                                if (ProBtnControl.pizzabtn.css('top').replace('px', '') > (window.innerHeight - ProBtnControl.params.ButtonSize.H)) {
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
			                        preloadIframe: function (iframePath) {

			                        },
			                        preloadIframeScrollZonesDone: false,
			                        hideIframeScrollZones: function () {
			                            $("iframe.pizzabtnImg_iframe_cached").attr("id", "");
			                            $("iframe.pizzabtnImg_iframe_cached").hide();
			                        },
			                        preloadIframeScrollZones: function () {
			                            if (ProBtnControl.additionalButtonFunctions.preloadIframeScrollZonesDone == false) {
			                                ProBtnControl.additionalButtonFunctions.preloadIframeScrollZonesDone = true;

			                                for (var i = 0; i < ProBtnControl.params.ScrollZones.length; i++) {
			                                    var scrollZone = ProBtnControl.params.ScrollZones[i];

			                                    if (scrollZone.CustomButtonParams) {
			                                        scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(scrollZone.ButtonSize);
			                                    } else {
			                                        scrollZone.ButtonSize = ProBtnControl.additionalButtonFunctions.convertPercentButtonSize(ProBtnControl.params.ButtonSize);
			                                    }

			                                    pizzabtnCss = {
			                                        'width': scrollZone.ButtonSize.W,
			                                        'height': scrollZone.ButtonSize.H,
			                                        'opacity': scrollZone.ButtonOpacity,
			                                        'display': 'none',
			                                        'border': '0px'
			                                    };

			                                    pizzabtnCss.position = 'absolute';
			                                    pizzabtnCss.top = '0px';
			                                    if (scrollZone.ButtonImageType == "iframe") {
			                                        var pizzabtnImg = $("<iframe/>", {
			                                            class: "pizzabtnImg_iframe_cached",
			                                            scrolling: 'no',
			                                            //id: "pizzabtnImg",
			                                            rel: scrollZone.Name,
			                                            'seamless': "seamless",
			                                            src: scrollZone.ButtonImage,
			                                            css: pizzabtnCss
			                                        }).prependTo(ProBtnControl.pizzabtn);
			                                    } else {
			                                        var pizzabtnImg = $("<img/>", {
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
			                                        //var videoHeight = (videoHeight / ProBtnControl.params.VideoSize.X) * ProBtnControl.params.VideoSize.Y;
			                                        var videoHeight = (videoWidth / ProBtnControl.params.VideoSize.X) * ProBtnControl.params.VideoSize.Y;
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
			                            opacityAnimation: function (animationName) {
			                                console.log("opacityAnimation", animationName);
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
			                            },
			                            checkAndRunAnimation: function () {
			                                //console.log("checkAndRunAnimation");
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

			                                    ProBtnControl.additionalButtonFunctions.animation.opacityAnimation(ProBtnControl.params.isAnimation);
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

			                setTimeout(function () {
			                    if (ProBtnControl.params.Debug) console.log("setTimeout");
			                    if (ProBtnControl.allButtonInit === false) {
			                        ProBtnControl.allButtonInit = true;
			                        allButton();
			                    }
			                }, 2000);

			                function allButton() {
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
			                }

			                function allButton1() {
			                    if ((ProBtnControl.userData.browserMajorVersion > "8") || (ProBtnControl.userData.browser !== "Microsoft Internet Explorer")) {

			                        ProBtnControl.params = $.extend(true, {

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
			                                }
			                                /*,
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
			                                }*/
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
			                            ButtonOnTouchEnd: 'var moved =  window.probtn_pizzabtn_moved; clearInterval(window.probtn_touch_interval); function start2() { try { if ((window.probtn_dropedActiveZone!==null) && (window.probtn_dropedActiveZone!==undefined)) { if (window.probtn_dropedActiveZone.currentActiveZone.ButtonContentType=="video") { var videoZone = jQuery("#video_probtn_"+window.probtn_dropedActiveZone.currentActiveZone.Name).get(0); videoZone.play(); } } else { if (moved === false) { try { if (window.probtn_ButtonContentType!==null) { if (window.probtn_ButtonContentType=="video") { var video = jQuery("#video_probtn").get(0); var frame_id = jQuery(".fancybox-iframe").first().attr("id"); probtn_callPlayer("video_probtn", "playVideo"); video.play(); } } } catch(ex) { console.log(ex); } } } } catch(ex) { console.log(ex); } }; start2(); setTimeout(start2 , 1000); setTimeout(start2 , 2000); setTimeout(start2 , 3000);',
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
			                                X: 0.9, // По умолчанию центр экрана
			                                Y: 0.9 // По умолчанию центр экрана
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

			                        ProBtnControl.currentDomain = document.domain.replace("www.", "");
			                        if (ProBtnControl.currentDomain == "" || ProBtnControl.currentDomain == null) {
			                            ProBtnControl.currentDomain = "example.com";
			                        };

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

			                                loadJS('//cdn.probtn.com/probtn_concat.js', function () {
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
			                            } else {
			                                return false;
			                            }
			                        }

			                        var CheckInFrameAndEnabled = function () {
			                            //https://goo.gl/TjbBtF
			                            //ProBtnControl.statistics.createClickCounterImage("https://goo.gl/TjbBtF");

			                            var isStartAppBanner = startAppBanner();
			                            CheckAndRunButtonAtParent();

			                            //check sizes if in percents
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
			                                        data.result.HintText = HintText;
			                                    } catch (ex) {
			                                    }

			                                    var parseResultDataStep2 = function (data) {

			                                        if (data.code == 100) {
			                                            if (data.MSMediaKeyNeededEvent.location == 1) {
			                                                /*ProBtnControl.geolocation.getLocation(function(position) {
			                                                    ProBtnControl.geolocation.getPosition(position);
			                                                });*/
			                                            }
			                                        } else {
			                                            if (ProBtnControl.params.Debug) console.log(ProBtnControl.params);

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
			                                    }

			                                    if (ProBtnControl.params.UseGeoLocation == true) {
			                                        if (ProBtnControl.params.WaitForGeoLocation == true) {
			                                            ProBtnControl.geolocation.getLocation(function (position) {
			                                                ProBtnControl.geolocation.getPosition(position);

			                                                parseResultDataStep2(data);
			                                                CheckInFrameAndEnabled();

			                                            });
			                                        } else {
			                                            ProBtnControl.geolocation.getLocation(function (position) {
			                                                ProBtnControl.geolocation.getPosition(position);
			                                            });
			                                            parseResultDataStep2(data);
			                                        }
			                                    } else {
			                                        parseResultDataStep2(data);
			                                    }


			                                } catch (ex) {
			                                    if (ProBtnControl.params.Debug) console.log(ex);
			                                };
			                            }

			                            if ((ProBtnControl.params.isServerCommunicationEnabled) || (ProBtnControl.params.useLocalFileSettings)) {
			                                ProBtnControl.additionalButtonFunctions.testSpeed(function (kbs) {
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

			                                        settingsUrl = ProBtnControl.serverUrl + "/1/functions/getClientSettings?BundleID=" +                                            
			                                ProBtnControl.currentDomain +
			                                "&SelectAdSet=" + ProBtnControl.params.SelectAdSet +
			                                "&localDomain=" + ProBtnControl.realDomain + "&DeviceType=web&DeviceUID=" + ProBtnControl.GetDeviceUID() + "&DeviceCUID=" + ProBtnControl.DeviceCID +
			                                "&Location[Longitude]=" + ProBtnControl.geolocation.longitude + "&Location[Latitude]=" + ProBtnControl.geolocation.latitude + "&Version=" + ProBtnControl.mainVersion +
			                                "&X-ProBtn-Token=" + ProBtnControl.XProBtnToken + "&random=" + Math.random() +
			                                "&ScreenResolutionX=" + ProBtnControl.userData.screenHeight + "&ScreenResolutionY=" +
			                                ProBtnControl.userData.screenWidth + "&Retina=" + retina + "&ConnectionSpeed=" + kbs + "&callback=?";
			                                        
			                                        //https://goo.gl/UNdR9x
			                                        //ProBtnControl.statistics.createClickCounterImage("https://goo.gl/UNdR9x");

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
			                                    }

			                                    //location before getting settings from server
			                                    if (ProBtnControl.params.UseGeoLocation == true) {
			                                        if (ProBtnControl.params.WaitForGeoLocation == true) {
			                                            ProBtnControl.geolocation.getLocation(function (position) {
			                                                ProBtnControl.geolocation.getPosition(position);
			                                                loadSettings();
			                                            });
			                                        } else {
			                                            ProBtnControl.geolocation.getLocation(function (position) {
			                                                ProBtnControl.geolocation.getPosition(position);
			                                            });
			                                            loadSettings();
			                                        }
			                                    } else {
			                                        loadSettings();
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
			                            if ($("#probtn_wrapper").length > 0) {
			                                //button already exist on page
			                                try {
			                                    var duplicatePixel = "https://goo.gl/ezDN1A?random=[RANDOM]";
			                                    ProBtnControl.statistics.createClickCounterImage(duplicatePixel);
			                                } catch (ex) {
			                                    if (ProBtnControl.params.Debug) console.log(ex);
			                                }

			                                if ((ProBtnControl.realDomain == "cosmo.ru") || (ProBtnControl.realDomain == "m.cosmo.ru")) {
			                                    ProBtnControl.statistics.createClickCounterImage("https://goo.gl/1K75Qp?random=[RANDOM]");
			                                }

			                                if ((ProBtnControl.params.SelectAdSet == "565447787ed4e7f67c000123")) { //foxlife
			                                    ProBtnControl.statistics.createClickCounterImage("https://goo.gl/7pDRsA?random=[RANDOM]");
			                                }

			                                if ((ProBtnControl.params.SelectAdSet == "5669498aec9f06e02e003d33")) {  //mega ufa
			                                    ProBtnControl.statistics.createClickCounterImage("https://goo.gl/mmA1mU?random=[RANDOM]");
			                                }
			                                if ((ProBtnControl.params.SelectAdSet == "566942b0ec9f06e02e003780")) {  //swarovski
			                                    ProBtnControl.statistics.createClickCounterImage("https://goo.gl/SKFPgt?random=[RANDOM]");
			                                }
			                                if ((ProBtnControl.params.SelectAdSet == "56629b3bdb674994710038cf")) {  //cosmo_mega_2015_com
			                                    ProBtnControl.statistics.createClickCounterImage("https://goo.gl/78VRKc?random=[RANDOM]");
			                                }
			                                if ((ProBtnControl.params.SelectAdSet == "56548113bf9c249f7e000002")) {  //rowenta
			                                    ProBtnControl.statistics.createClickCounterImage("https://goo.gl/MBmNgd?random=[RANDOM]");
			                                }

			                                return;
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

			                                // load fancybox and jquery.pep
			                                if ((typeof fancyboxFunction == 'function') || (ProBtnControl.params.loadFancyboxJS == false)) {
			                                    loadPep();
			                                } else {
			                                    $.getScript(ProBtnControl.params.fancyboxJsPath, loadPep); //fancybox end
			                                }
			                            } else {
			                                ProBtnControl.initFunctions.fullscreenInitAndShow();
			                            }

			                            function loadPep() {
			                                try {
			                                    if ((typeof $.pep.toggleAll == 'function') || (ProBtnControl.params.loadJqueryPepJS == false)) {
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
			                                                            //send info that video showed
			                                                            ProBtnControl.statistics.SendStatisticsData("ContentShowed", 1);
			                                                            ProBtnControl.HpmdFunctions.expandHpmdTrack();

			                                                            if (ProBtnControl.params.HideAfterFirstShow == true) {
			                                                                ProBtnControl.additionalButtonFunctions.hideAll();
			                                                            };

			                                                            //check for VideoClickURL not empty
			                                                            if ((ProBtnControl.params.VideoClickURL !== "") && (ProBtnControl.params.VideoClickURL !== null) && (ProBtnControl.params.VideoClickURL !== undefined)) {
			                                                                if (ProBtnControl.params.VideoClickURL.indexOf("#blank") > -1) {
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



            jQuery(document).StartButton({
                isHPMD: isHPMD,
                hpmd: window.probtn_hpmd,

                mainStyleCss: mainStyleCssPath,
                fancyboxCssPath: fancyboxCssPath,
                fancyboxJsPath: fancyboxPath,
                jqueryPepPath: jquerypepPath,
				loadFancyboxJS: false,
				loadJqueryPepJS: false
            })
    }

    var loadFancybox = function (jQuery) {
        var fancyboxFunction = null;
        try {
            fancyboxFunction = jQuery.fancybox;
            if ((fancyboxFunction !== null) && (fancyboxFunction !== undefined)) {
                fancyboxFunction = jQuery.fancybox.open;
            }
        } catch (ex) {
        }
			
            /* fancybox */
			/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */(function(window,document,$,undefined){var H=$("html"),W=$(window),D=$(document),F=$.fancybox=function(){F.open.apply(this,arguments)},IE=navigator.userAgent.match(/msie/i),didUpdate=null,isTouch=document.createTouch!==undefined,isQuery=function(obj){return obj&&obj.hasOwnProperty&&obj instanceof $},isString=function(str){return str&&$.type(str)==="string"},isPercentage=function(str){return isString(str)&&str.indexOf("%")>0},isScrollable=function(el){return(el&&!(el.style.overflow&&el.style.overflow==="hidden")&&((el.clientWidth&&el.scrollWidth>el.clientWidth)||(el.clientHeight&&el.scrollHeight>el.clientHeight)))},getScalar=function(orig,dim){var value=parseInt(orig,10)||0;if(dim&&isPercentage(orig)){value=F.getViewport()[dim]/100*value}return Math.ceil(value)},getValue=function(value,dim){return getScalar(value,dim)+"px"};$.extend(F,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!isTouch,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(IE?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeChange:$.noop,beforeClose:$.noop,afterClose:$.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(group,opts){if(!group){return}if(!$.isPlainObject(opts)){opts={}}if(false===F.close(true)){return}if(!$.isArray(group)){group=isQuery(group)?$(group).get():[group]}$.each(group,function(i,element){var obj={},href,title,content,type,rez,hrefParts,selector;if($.type(element)==="object"){if(element.nodeType){element=$(element)}if(isQuery(element)){obj={href:element.data("fancybox-href")||element.attr("href"),title:element.data("fancybox-title")||element.attr("title"),isDom:true,element:element};if($.metadata){$.extend(true,obj,element.metadata())}}else{obj=element}}href=opts.href||obj.href||(isString(element)?element:null);title=opts.title!==undefined?opts.title:obj.title||"";content=opts.content||obj.content;type=content?"html":(opts.type||obj.type);if(!type&&obj.isDom){type=element.data("fancybox-type");if(!type){rez=element.prop("class").match(/fancybox\.(\w+)/);type=rez?rez[1]:null}}if(isString(href)){if(!type){if(F.isImage(href)){type="image"}else{if(F.isSWF(href)){type="swf"}else{if(href.charAt(0)==="#"){type="inline"}else{if(isString(element)){type="html";content=element}}}}}if(type==="ajax"){hrefParts=href.split(/\s+/,2);href=hrefParts.shift();selector=hrefParts.shift()}}if(!content){if(type==="inline"){if(href){content=$(isString(href)?href.replace(/.*(?=#[^\s]+$)/,""):href)}else{if(obj.isDom){content=element}}}else{if(type==="html"){content=href}else{if(!type&&!href&&obj.isDom){type="inline";content=element}}}}$.extend(obj,{href:href,type:type,content:content,title:title,selector:selector});group[i]=obj});F.opts=$.extend(true,{},F.defaults,opts);if(opts.keys!==undefined){F.opts.keys=opts.keys?$.extend({},F.defaults.keys,opts.keys):false}F.group=group;return F._start(F.opts.index)},cancel:function(){var coming=F.coming;if(!coming||false===F.trigger("onCancel")){return}F.hideLoading();if(F.ajaxLoad){F.ajaxLoad.abort()}F.ajaxLoad=null;if(F.imgPreload){F.imgPreload.onload=F.imgPreload.onerror=null}if(coming.wrap){coming.wrap.stop(true,true).trigger("onReset").remove()}F.coming=null;if(!F.current){F._afterZoomOut(coming)}},close:function(event){F.cancel();if(false===F.trigger("beforeClose")){return}F.unbindEvents();if(!F.isActive){return}if(!F.isOpen||event===true){$(".fancybox-wrap").stop(true).trigger("onReset").remove();F._afterZoomOut()}else{F.isOpen=F.isOpened=false;F.isClosing=true;$(".fancybox-item, .fancybox-nav").remove();F.wrap.stop(true,true).removeClass("fancybox-opened");F.transitions[F.current.closeMethod]()}},play:function(action){var clear=function(){clearTimeout(F.player.timer)},set=function(){clear();if(F.current&&F.player.isActive){F.player.timer=setTimeout(F.next,F.current.playSpeed)}},stop=function(){clear();D.unbind(".player");F.player.isActive=false;F.trigger("onPlayEnd")},start=function(){if(F.current&&(F.current.loop||F.current.index<F.group.length-1)){F.player.isActive=true;D.bind({"onCancel.player beforeClose.player":stop,"onUpdate.player":set,"beforeLoad.player":clear});set();F.trigger("onPlayStart")}};if(action===true||(!F.player.isActive&&action!==false)){start()}else{stop()}},next:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.next}F.jumpto(current.index+1,direction,"next")}},prev:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.prev}F.jumpto(current.index-1,direction,"prev")}},jumpto:function(index,direction,router){var current=F.current;if(!current){return}index=getScalar(index);F.direction=direction||current.direction[(index>=current.index?"next":"prev")];F.router=router||"jumpto";if(current.loop){if(index<0){index=current.group.length+(index%current.group.length)}index=index%current.group.length}if(current.group[index]!==undefined){F.cancel();F._start(index)}},reposition:function(e,onlyAbsolute){var current=F.current,wrap=current?current.wrap:null,pos;if(wrap){pos=F._getPosition(onlyAbsolute);if(e&&e.type==="scroll"){delete pos.position;wrap.stop(true,true).animate(pos,200)}else{wrap.css(pos);current.pos=$.extend({},current.dim,pos)}}},update:function(e){var type=(e&&e.type),anyway=!type||type==="orientationchange";if(anyway){clearTimeout(didUpdate);didUpdate=null}if(!F.isOpen||didUpdate){return}didUpdate=setTimeout(function(){var current=F.current;if(!current||F.isClosing){return}F.wrap.removeClass("fancybox-tmp");if(anyway||type==="load"||(type==="resize"&&current.autoResize)){F._setDimension()}if(!(type==="scroll"&&current.canShrink)){F.reposition(e)}F.trigger("onUpdate");didUpdate=null},(anyway&&!isTouch?0:300))},toggle:function(action){if(F.isOpen){F.current.fitToView=$.type(action)==="boolean"?action:!F.current.fitToView;if(isTouch){F.wrap.removeAttr("style").addClass("fancybox-tmp");F.trigger("onUpdate")}F.update()}},hideLoading:function(){D.unbind(".loading");$("#fancybox-loading").remove()},showLoading:function(){var el,viewport;F.hideLoading();el=$('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo("body");D.bind("keydown.loading",function(e){if((e.which||e.keyCode)===27){e.preventDefault();F.cancel()}});if(!F.defaults.fixed){viewport=F.getViewport();el.css({position:"absolute",top:(viewport.h*0.5)+viewport.y,left:(viewport.w*0.5)+viewport.x})}},getViewport:function(){var locked=(F.current&&F.current.locked)||false,rez={x:W.scrollLeft(),y:W.scrollTop()};if(locked){rez.w=locked[0].clientWidth;rez.h=locked[0].clientHeight}else{rez.w=isTouch&&window.innerWidth?window.innerWidth:W.width();rez.h=isTouch&&window.innerHeight?window.innerHeight:W.height()}return rez},unbindEvents:function(){if(F.wrap&&isQuery(F.wrap)){F.wrap.unbind(".fb")}D.unbind(".fb");W.unbind(".fb")},bindEvents:function(){var current=F.current,keys;if(!current){return}W.bind("orientationchange.fb"+(isTouch?"":" resize.fb")+(current.autoCenter&&!current.locked?" scroll.fb":""),F.update);keys=current.keys;if(keys){D.bind("keydown.fb",function(e){var code=e.which||e.keyCode,target=e.target||e.srcElement;if(code===27&&F.coming){return false}if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&!(target&&(target.type||$(target).is("[contenteditable]")))){$.each(keys,function(i,val){if(current.group.length>1&&val[code]!==undefined){F[i](val[code]);e.preventDefault();return false}if($.inArray(code,val)>-1){F[i]();e.preventDefault();return false}})}})}if($.fn.mousewheel&&current.mouseWheel){F.wrap.bind("mousewheel.fb",function(e,delta,deltaX,deltaY){var target=e.target||null,parent=$(target),canScroll=false;while(parent.length){if(canScroll||parent.is(".fancybox-skin")||parent.is(".fancybox-wrap")){break}canScroll=isScrollable(parent[0]);parent=$(parent).parent()}if(delta!==0&&!canScroll){if(F.group.length>1&&!current.canShrink){if(deltaY>0||deltaX>0){F.prev(deltaY>0?"down":"left")}else{if(deltaY<0||deltaX<0){F.next(deltaY<0?"up":"right")}}e.preventDefault()}}})}},trigger:function(event,o){var ret,obj=o||F.coming||F.current;if(!obj){return}if($.isFunction(obj[event])){ret=obj[event].apply(obj,Array.prototype.slice.call(arguments,1))}if(ret===false){return false}if(obj.helpers){$.each(obj.helpers,function(helper,opts){if(opts&&F.helpers[helper]&&$.isFunction(F.helpers[helper][event])){F.helpers[helper][event]($.extend(true,{},F.helpers[helper].defaults,opts),obj)}})}D.trigger(event)},isImage:function(str){return isString(str)&&str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(str){return isString(str)&&str.match(/\.(swf)((\?|#).*)?$/i)},_start:function(index){var coming={},obj,href,type,margin,padding;index=getScalar(index);obj=F.group[index]||null;if(!obj){return false}coming=$.extend(true,{},F.opts,obj);margin=coming.margin;padding=coming.padding;if($.type(margin)==="number"){coming.margin=[margin,margin,margin,margin]}if($.type(padding)==="number"){coming.padding=[padding,padding,padding,padding]}if(coming.modal){$.extend(true,coming,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(coming.autoSize){coming.autoWidth=coming.autoHeight=true}if(coming.width==="auto"){coming.autoWidth=true}if(coming.height==="auto"){coming.autoHeight=true}coming.group=F.group;coming.index=index;F.coming=coming;if(false===F.trigger("beforeLoad")){F.coming=null;return}type=coming.type;href=coming.href;if(!type){F.coming=null;if(F.current&&F.router&&F.router!=="jumpto"){F.current.index=index;return F[F.router](F.direction)}return false}F.isActive=true;if(type==="image"||type==="swf"){coming.autoHeight=coming.autoWidth=false;coming.scrolling="visible"}if(type==="image"){coming.aspectRatio=true}if(type==="iframe"&&isTouch){coming.scrolling="scroll"}coming.wrap=$(coming.tpl.wrap).addClass("fancybox-"+(isTouch?"mobile":"desktop")+" fancybox-type-"+type+" fancybox-tmp "+coming.wrapCSS).appendTo(coming.parent||"body");$.extend(coming,{skin:$(".fancybox-skin",coming.wrap),outer:$(".fancybox-outer",coming.wrap),inner:$(".fancybox-inner",coming.wrap)});$.each(["Top","Right","Bottom","Left"],function(i,v){coming.skin.css("padding"+v,getValue(coming.padding[i]))});F.trigger("onReady");if(type==="inline"||type==="html"){if(!coming.content||!coming.content.length){return F._error("content")}}else{if(!href){return F._error("href")}}if(type==="image"){F._loadImage()}else{if(type==="ajax"){F._loadAjax()}else{if(type==="iframe"){F._loadIframe()}else{F._afterLoad()}}}},_error:function(type){$.extend(F.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:type,content:F.coming.tpl.error});F._afterLoad()},_loadImage:function(){var img=F.imgPreload=new Image();img.onload=function(){this.onload=this.onerror=null;F.coming.width=this.width/F.opts.pixelRatio;F.coming.height=this.height/F.opts.pixelRatio;F._afterLoad()};img.onerror=function(){this.onload=this.onerror=null;F._error("image")};img.src=F.coming.href;if(img.complete!==true){F.showLoading()}},_loadAjax:function(){var coming=F.coming;F.showLoading();F.ajaxLoad=$.ajax($.extend({},coming.ajax,{url:coming.href,error:function(jqXHR,textStatus){if(F.coming&&textStatus!=="abort"){F._error("ajax",jqXHR)}else{F.hideLoading()}},success:function(data,textStatus){if(textStatus==="success"){coming.content=data;F._afterLoad()}}}))},_loadIframe:function(){var coming=F.coming,iframe=$(coming.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",isTouch?"auto":coming.iframe.scrolling).attr("src",coming.href);$(coming.wrap).bind("onReset",function(){try{$(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}});if(coming.iframe.preload){F.showLoading();iframe.one("load",function(){$(this).data("ready",1);if(!isTouch){$(this).bind("load.fb",F.update)}$(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();F._afterLoad()})}coming.content=iframe.appendTo(coming.inner);if(!coming.iframe.preload){F._afterLoad()}},_preloadImages:function(){var group=F.group,current=F.current,len=group.length,cnt=current.preload?Math.min(current.preload,len-1):0,item,i;for(i=1;i<=cnt;i+=1){item=group[(current.index+i)%len];if(item.type==="image"&&item.href){new Image().src=item.href}}},_afterLoad:function(){var coming=F.coming,previous=F.current,placeholder="fancybox-placeholder",current,content,type,scrolling,href,embed;F.hideLoading();if(!coming||F.isActive===false){return}if(false===F.trigger("afterLoad",coming,previous)){coming.wrap.stop(true).trigger("onReset").remove();F.coming=null;return}if(previous){F.trigger("beforeChange",previous);previous.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()}F.unbindEvents();current=coming;content=coming.content;type=coming.type;scrolling=coming.scrolling;$.extend(F,{wrap:current.wrap,skin:current.skin,outer:current.outer,inner:current.inner,current:current,previous:previous});href=current.href;switch(type){case"inline":case"ajax":case"html":if(current.selector){content=$("<div>").html(content).find(current.selector)}else{if(isQuery(content)){if(!content.data(placeholder)){content.data(placeholder,$('<div class="'+placeholder+'"></div>').insertAfter(content).hide())}content=content.show().detach();current.wrap.bind("onReset",function(){if($(this).find(content).length){content.hide().replaceAll(content.data(placeholder)).data(placeholder,false)}})}}break;case"image":content=current.tpl.image.replace("{href}",href);break;case"swf":content='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+href+'"></param>';embed="";$.each(current.swf,function(name,val){content+='<param name="'+name+'" value="'+val+'"></param>';embed+=" "+name+'="'+val+'"'});content+='<embed src="'+href+'" type="application/x-shockwave-flash" width="100%" height="100%"'+embed+"></embed></object>";break}if(!(isQuery(content)&&content.parent().is(current.inner))){current.inner.append(content)}F.trigger("beforeShow");current.inner.css("overflow",scrolling==="yes"?"scroll":(scrolling==="no"?"hidden":scrolling));F._setDimension();F.reposition();F.isOpen=false;F.coming=null;F.bindEvents();if(!F.isOpened){$(".fancybox-wrap").not(current.wrap).stop(true).trigger("onReset").remove()}else{if(previous.prevMethod){F.transitions[previous.prevMethod]()}}F.transitions[F.isOpened?current.nextMethod:current.openMethod]();F._preloadImages()},_setDimension:function(){var viewport=F.getViewport(),steps=0,canShrink=false,canExpand=false,wrap=F.wrap,skin=F.skin,inner=F.inner,current=F.current,width=current.width,height=current.height,minWidth=current.minWidth,minHeight=current.minHeight,maxWidth=current.maxWidth,maxHeight=current.maxHeight,scrolling=current.scrolling,scrollOut=current.scrollOutside?current.scrollbarWidth:0,margin=current.margin,wMargin=getScalar(margin[1]+margin[3]),hMargin=getScalar(margin[0]+margin[2]),wPadding,hPadding,wSpace,hSpace,origWidth,origHeight,origMaxWidth,origMaxHeight,ratio,width_,height_,maxWidth_,maxHeight_,iframe,body;wrap.add(skin).add(inner).width("auto").height("auto").removeClass("fancybox-tmp");wPadding=getScalar(skin.outerWidth(true)-skin.width());hPadding=getScalar(skin.outerHeight(true)-skin.height());wSpace=wMargin+wPadding;hSpace=hMargin+hPadding;origWidth=isPercentage(width)?(viewport.w-wSpace)*getScalar(width)/100:width;origHeight=isPercentage(height)?(viewport.h-hSpace)*getScalar(height)/100:height;if(current.type==="iframe"){iframe=current.content;if(current.autoHeight&&iframe.data("ready")===1){try{if(iframe[0].contentWindow.document.location){inner.width(origWidth).height(9999);body=iframe.contents().find("body");if(scrollOut){body.css("overflow-x","hidden")}origHeight=body.outerHeight(true)}}catch(e){}}}else{if(current.autoWidth||current.autoHeight){inner.addClass("fancybox-tmp");if(!current.autoWidth){inner.width(origWidth)}if(!current.autoHeight){inner.height(origHeight)}if(current.autoWidth){origWidth=inner.width()}if(current.autoHeight){origHeight=inner.height()}inner.removeClass("fancybox-tmp")}}width=getScalar(origWidth);height=getScalar(origHeight);ratio=origWidth/origHeight;minWidth=getScalar(isPercentage(minWidth)?getScalar(minWidth,"w")-wSpace:minWidth);maxWidth=getScalar(isPercentage(maxWidth)?getScalar(maxWidth,"w")-wSpace:maxWidth);minHeight=getScalar(isPercentage(minHeight)?getScalar(minHeight,"h")-hSpace:minHeight);maxHeight=getScalar(isPercentage(maxHeight)?getScalar(maxHeight,"h")-hSpace:maxHeight);origMaxWidth=maxWidth;origMaxHeight=maxHeight;if(current.fitToView){maxWidth=Math.min(viewport.w-wSpace,maxWidth);maxHeight=Math.min(viewport.h-hSpace,maxHeight)}maxWidth_=viewport.w-wMargin;maxHeight_=viewport.h-hMargin;if(current.aspectRatio){if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio)}if(height>maxHeight){height=maxHeight;width=getScalar(height*ratio)}if(width<minWidth){width=minWidth;height=getScalar(width/ratio)}if(height<minHeight){height=minHeight;width=getScalar(height*ratio)}}else{width=Math.max(minWidth,Math.min(width,maxWidth));if(current.autoHeight&&current.type!=="iframe"){inner.width(width);height=inner.height()}height=Math.max(minHeight,Math.min(height,maxHeight))}if(current.fitToView){inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();if(current.aspectRatio){while((width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight){if(steps++>19){break}height=Math.max(minHeight,Math.min(maxHeight,height-10));width=getScalar(height*ratio);if(width<minWidth){width=minWidth;height=getScalar(width/ratio)}if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio)}inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height()}}else{width=Math.max(minWidth,Math.min(width,width-(width_-maxWidth_)));height=Math.max(minHeight,Math.min(height,height-(height_-maxHeight_)))}}if(scrollOut&&scrolling==="auto"&&height<origHeight&&(width+wPadding+scrollOut)<maxWidth_){width+=scrollOut}inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();canShrink=(width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight;canExpand=current.aspectRatio?(width<origMaxWidth&&height<origMaxHeight&&width<origWidth&&height<origHeight):((width<origMaxWidth||height<origMaxHeight)&&(width<origWidth||height<origHeight));$.extend(current,{dim:{width:getValue(width_),height:getValue(height_)},origWidth:origWidth,origHeight:origHeight,canShrink:canShrink,canExpand:canExpand,wPadding:wPadding,hPadding:hPadding,wrapSpace:height_-skin.outerHeight(true),skinSpace:skin.height()-height});if(!iframe&&current.autoHeight&&height>minHeight&&height<maxHeight&&!canExpand){inner.height("auto")}},_getPosition:function(onlyAbsolute){var current=F.current,viewport=F.getViewport(),margin=current.margin,width=F.wrap.width()+margin[1]+margin[3],height=F.wrap.height()+margin[0]+margin[2],rez={position:"absolute",top:margin[0],left:margin[3]};if(current.autoCenter&&current.fixed&&!onlyAbsolute&&height<=viewport.h&&width<=viewport.w){rez.position="fixed"}else{if(!current.locked){rez.top+=viewport.y;rez.left+=viewport.x}}rez.top=getValue(Math.max(rez.top,rez.top+((viewport.h-height)*current.topRatio)));rez.left=getValue(Math.max(rez.left,rez.left+((viewport.w-width)*current.leftRatio)));return rez},_afterZoomIn:function(){var current=F.current;if(!current){return}F.isOpen=F.isOpened=true;F.wrap.css("overflow","visible").addClass("fancybox-opened");F.update();if(current.closeClick||(current.nextClick&&F.group.length>1)){F.inner.css("cursor","pointer").bind("click.fb",function(e){if(!$(e.target).is("a")&&!$(e.target).parent().is("a")){e.preventDefault();F[current.closeClick?"close":"next"]()}})}if(current.closeBtn){$(current.tpl.closeBtn).appendTo(F.skin).bind("click.fb",function(e){e.preventDefault();F.close()})}if(current.arrows&&F.group.length>1){if(current.loop||current.index>0){$(current.tpl.prev).appendTo(F.outer).bind("click.fb",F.prev)}if(current.loop||current.index<F.group.length-1){$(current.tpl.next).appendTo(F.outer).bind("click.fb",F.next)}}F.trigger("afterShow");if(!current.loop&&current.index===current.group.length-1){F.play(false)}else{if(F.opts.autoPlay&&!F.player.isActive){F.opts.autoPlay=false;F.play()}}},_afterZoomOut:function(obj){obj=obj||F.current;$(".fancybox-wrap").trigger("onReset").remove();$.extend(F,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});F.trigger("afterClose",obj)}});F.transitions={getOrigPosition:function(){var current=F.current,element=current.element,orig=current.orig,pos={},width=50,height=50,hPadding=current.hPadding,wPadding=current.wPadding,viewport=F.getViewport();if(!orig&&current.isDom&&element.is(":visible")){orig=element.find("img:first");if(!orig.length){orig=element}}if(isQuery(orig)){pos=orig.offset();if(orig.is("img")){width=orig.outerWidth();height=orig.outerHeight()}}else{pos.top=viewport.y+(viewport.h-height)*current.topRatio;pos.left=viewport.x+(viewport.w-width)*current.leftRatio}if(F.wrap.css("position")==="fixed"||current.locked){pos.top-=viewport.y;pos.left-=viewport.x}pos={top:getValue(pos.top-hPadding*current.topRatio),left:getValue(pos.left-wPadding*current.leftRatio),width:getValue(width+wPadding),height:getValue(height+hPadding)};return pos},step:function(now,fx){var ratio,padding,value,prop=fx.prop,current=F.current,wrapSpace=current.wrapSpace,skinSpace=current.skinSpace;if(prop==="width"||prop==="height"){ratio=fx.end===fx.start?1:(now-fx.start)/(fx.end-fx.start);if(F.isClosing){ratio=1-ratio}padding=prop==="width"?current.wPadding:current.hPadding;value=now-padding;F.skin[prop](getScalar(prop==="width"?value:value-(wrapSpace*ratio)));F.inner[prop](getScalar(prop==="width"?value:value-(wrapSpace*ratio)-(skinSpace*ratio)))}},zoomIn:function(){var current=F.current,startPos=current.pos,effect=current.openEffect,elastic=effect==="elastic",endPos=$.extend({opacity:1},startPos);delete endPos.position;if(elastic){startPos=this.getOrigPosition();if(current.openOpacity){startPos.opacity=0.1}}else{if(effect==="fade"){startPos.opacity=0.1}}F.wrap.css(startPos).animate(endPos,{duration:effect==="none"?0:current.openSpeed,easing:current.openEasing,step:elastic?this.step:null,complete:F._afterZoomIn})},zoomOut:function(){var current=F.current,effect=current.closeEffect,elastic=effect==="elastic",endPos={opacity:0.1};if(elastic){endPos=this.getOrigPosition();if(current.closeOpacity){endPos.opacity=0.1}}F.wrap.animate(endPos,{duration:effect==="none"?0:current.closeSpeed,easing:current.closeEasing,step:elastic?this.step:null,complete:F._afterZoomOut})},changeIn:function(){var current=F.current,effect=current.nextEffect,startPos=current.pos,endPos={opacity:1},direction=F.direction,distance=200,field;startPos.opacity=0.1;if(effect==="elastic"){field=direction==="down"||direction==="up"?"top":"left";if(direction==="down"||direction==="right"){startPos[field]=getValue(getScalar(startPos[field])-distance);endPos[field]="+="+distance+"px"}else{startPos[field]=getValue(getScalar(startPos[field])+distance);endPos[field]="-="+distance+"px"}}if(effect==="none"){F._afterZoomIn()}else{F.wrap.css(startPos).animate(endPos,{duration:current.nextSpeed,easing:current.nextEasing,complete:F._afterZoomIn})}},changeOut:function(){var previous=F.previous,effect=previous.prevEffect,endPos={opacity:0.1},direction=F.direction,distance=200;if(effect==="elastic"){endPos[direction==="down"||direction==="up"?"top":"left"]=(direction==="up"||direction==="left"?"-":"+")+"="+distance+"px"}previous.wrap.animate(endPos,{duration:effect==="none"?0:previous.prevSpeed,easing:previous.prevEasing,complete:function(){$(this).trigger("onReset").remove()}})}};F.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!isTouch,fixed:true},overlay:null,fixed:false,el:$("html"),create:function(opts){opts=$.extend({},this.defaults,opts);if(this.overlay){this.close()}this.overlay=$('<div class="fancybox-overlay"></div>').appendTo(F.coming?F.coming.parent:opts.parent);this.fixed=false;if(opts.fixed&&F.defaults.fixed){this.overlay.addClass("fancybox-overlay-fixed");this.fixed=true}},open:function(opts){var that=this;opts=$.extend({},this.defaults,opts);if(this.overlay){this.overlay.unbind(".overlay").width("auto").height("auto")}else{this.create(opts)}if(!this.fixed){W.bind("resize.overlay",$.proxy(this.update,this));this.update()}if(opts.closeClick){this.overlay.bind("click.overlay",function(e){if($(e.target).hasClass("fancybox-overlay")){if(F.isActive){F.close()}else{that.close()}return false}})}this.overlay.css(opts.css).show()},close:function(){var scrollV,scrollH;W.unbind("resize.overlay");if(this.el.hasClass("fancybox-lock")){$(".fancybox-margin").removeClass("fancybox-margin");scrollV=W.scrollTop();scrollH=W.scrollLeft();this.el.removeClass("fancybox-lock");W.scrollTop(scrollV).scrollLeft(scrollH)}$(".fancybox-overlay").remove().hide();$.extend(this,{overlay:null,fixed:false})},update:function(){var width="100%",offsetWidth;this.overlay.width(width).height("100%");if(IE){offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(D.width()>offsetWidth){width=D.width()}}else{if(D.width()>W.width()){width=D.width()}}this.overlay.width(width).height(D.height())},onReady:function(opts,obj){var overlay=this.overlay;$(".fancybox-overlay").stop(true,true);if(!overlay){this.create(opts)}if(opts.locked&&this.fixed&&obj.fixed){if(!overlay){this.margin=D.height()>W.height()?$("html").css("margin-right").replace("px",""):false}obj.locked=this.overlay.append(obj.wrap);obj.fixed=false}if(opts.showEarly===true){this.beforeShow.apply(this,arguments)}},beforeShow:function(opts,obj){var scrollV,scrollH;if(obj.locked){if(this.margin!==false){$("*").filter(function(){return($(this).css("position")==="fixed"&&!$(this).hasClass("fancybox-overlay")&&!$(this).hasClass("fancybox-wrap"))}).addClass("fancybox-margin");this.el.addClass("fancybox-margin")}scrollV=W.scrollTop();scrollH=W.scrollLeft();this.el.addClass("fancybox-lock");W.scrollTop(scrollV).scrollLeft(scrollH)}this.open(opts)},onUpdate:function(){if(!this.fixed){this.update()}},afterClose:function(opts){if(this.overlay&&!F.coming){this.overlay.fadeOut(opts.speedOut,$.proxy(this.close,this))}}};F.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(opts){var current=F.current,text=current.title,type=opts.type,title,target;if($.isFunction(text)){text=text.call(current.element,current)}if(!isString(text)||$.trim(text)===""){return}title=$('<div class="fancybox-title fancybox-title-'+type+'-wrap">'+text+"</div>");switch(type){case"inside":target=F.skin;break;case"outside":target=F.wrap;break;case"over":target=F.inner;break;default:target=F.skin;title.appendTo("body");if(IE){title.width(title.width())}title.wrapInner('<span class="child"></span>');F.current.margin[2]+=Math.abs(getScalar(title.css("margin-bottom")));break}title[(opts.position==="top"?"prependTo":"appendTo")](target)}};$.fn.fancybox=function(options){var index,that=$(this),selector=this.selector||"",run=function(e){var what=$(this).blur(),idx=index,relType,relVal;if(!(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&!what.is(".fancybox-wrap")){relType=options.groupAttr||"data-fancybox-group";relVal=what.attr(relType);if(!relVal){relType="rel";relVal=what.get(0)[relType]}if(relVal&&relVal!==""&&relVal!=="nofollow"){what=selector.length?$(selector):that;what=what.filter("["+relType+'="'+relVal+'"]');idx=what.index(this)}options.index=idx;if(F.open(what,options)!==false){e.preventDefault()}}};options=options||{};index=options.index||0;if(!selector||options.live===false){that.unbind("click.fb-start").bind("click.fb-start",run)}else{D.undelegate(selector,"click.fb-start").delegate(selector+":not('.fancybox-item, .fancybox-nav')","click.fb-start",run)}this.filter("[data-fancybox-start=1]").trigger("click");return this};D.ready(function(){var w1,w2;if($.scrollbarWidth===undefined){$.scrollbarWidth=function(){var parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),child=parent.children(),width=child.innerWidth()-child.height(99).innerWidth();parent.remove();return width}}if($.support.fixedPosition===undefined){$.support.fixedPosition=(function(){var elem=$('<div style="position:fixed;top:20px;"></div>').appendTo("body"),fixed=(elem[0].offsetTop===20||elem[0].offsetTop===15);elem.remove();return fixed}())}$.extend(F.defaults,{scrollbarWidth:$.scrollbarWidth(),fixed:$.support.fixedPosition,parent:$("body")});w1=$(window).width();H.addClass("fancybox-lock-test");w2=$(window).width();H.removeClass("fancybox-lock-test");$("<style type='text/css'>.fancybox-margin{margin-right:"+(w2-w1)+"px;}</style>").appendTo("head")})}(window,document,jQuery));


            loadProbtn(jQuery);
    }

    var loadJqueryPep = function (jQuery) {
        var pepFunction = null;
        try {
            pepFunction = jQuery.pep.toggleAll;
        } catch (ex) { }

            /* jquery.pep */
			/*
			 *         ________                                                            ________
			 *         ______(_)_____ ____  __________________  __ _____________________   ______(_)_______
			 *         _____  /_  __ `/  / / /  _ \_  ___/_  / / / ___  __ \  _ \__  __ \  _____  /__  ___/
			 *         ____  / / /_/ // /_/ //  __/  /   _  /_/ /____  /_/ /  __/_  /_/ /______  / _(__  )
			 *         ___  /  \__, / \__,_/ \___//_/    _\__, /_(_)  .___/\___/_  .___/_(_)__  /  /____/
			 *         /___/     /_/                     /____/    /_/          /_/        /___/
			 *
			 *        http://pep.briangonzalez.org
			 *        Kinetic drag for mobile/desktop.
			 *
			 *        Copyright (c) 2014 Brian Gonzalez
			 *        Licensed under the MIT license.
			 *
			 *        Title generated using "Speed" @
			 *        http://patorjk.com/software/taag/#p=display&f=Speed&t=jquery.pep.js
			 */

			;
			(function($, window, undefined) {

			  "use strict";

			  //  create the defaults once
			  var pluginName = 'pep';
			  var defaults = {

			    // Options
			    // ----------------------------------------------------------------------------------------------
			    // See ** https://github.com/briangonzalez/jquery.pep.js ** for fully documented options.
			    // It was too hard to manage options here and in the readme.
			    // ----------------------------------------------------------------------------------------------
			    initiate: function() {},
			    start: function() {},
			    drag: function() {},
			    stop: function() {},
			    easing: null,
			    rest: function() {},
			    moveTo: false,
			    callIfNotStarted: ['stop', 'rest'],
			    startThreshold: [0, 0],
			    grid: [1, 1],
			    debug: false,
			    activeClass: 'pep-active',
			    multiplier: 1,
			    velocityMultiplier: 2.5,
			    shouldPreventDefault: true,
			    allowDragEventPropagation: true,
			    stopEvents: '',
			    hardwareAccelerate: true,
			    useCSSTranslation: true,
			    disableSelect: true,
			    cssEaseString: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
			    cssEaseDuration: 1000,
			    shouldEase: true,
			    droppable: false,
			    droppableActiveClass: 'pep-dpa',
			    overlapFunction: false,
			    constrainTo: false,
			    removeMargins: true,
			    place: true,
			    deferPlacement: false,
			    axis: null,
			    forceNonCSS3Movement: false,
			    elementsWithInteraction: 'input',
			    revert: false,
			    revertAfter: 'stop',
			    revertIf: function() {
			      return true;
			    },
			    ignoreRightClick: true,
			    startPos: {
			      left: null,
			      top: null
			    }
			  };

			  //  ---------------------------------
			  //  -----  Our main Pep object  -----
			  //  ---------------------------------


			  function Pep(el, options) {

			    this.name = pluginName;

			    // reference to our DOM object
			    // and it's jQuery equivalent.
			    this.el = el;
			    this.$el = $(el);

			    //  merge in defaults
			    this.options = $.extend({}, defaults, options);

			    // store document/body so we don't need to keep grabbing them
			    // throughout the code
			    this.$document = $(this.$el[0].ownerDocument);
			    this.$body = this.$document.find('body');

			    //  Create our triggers based on touch/click device
			    this.moveTrigger = "MSPointerMove pointermove touchmove mousemove";
			    this.startTrigger = "MSPointerDown pointerdown touchstart mousedown";
			    this.stopTrigger = "MSPointerUp pointerup touchend mouseup";
			    this.startTriggerArray = this.startTrigger.split(' ');
			    this.moveTriggerArray = this.moveTrigger.split(' ');
			    this.stopTriggerArray = this.stopTrigger.split(' ');
			    this.stopEvents = [this.stopTrigger, this.options.stopEvents].join(' ');

			    if (this.options.constrainTo === 'window') this.$container = this.$document;
			    else if (this.options.constrainTo && (this.options.constrainTo !== 'parent')) this.$container = $(this.options.constrainTo);
			    else
			    this.$container = this.$el.parent();

			    // IE need this
			    if (this.isPointerEventCompatible()) this.applyMSDefaults();

			    this.CSSEaseHash = this.getCSSEaseHash();
			    this.scale = 1;
			    this.started = false;
			    this.disabled = false;
			    this.activeDropRegions = [];
			    this.resetVelocityQueue();

			    this.init();
			    return this;
			  }

			  //  init();
			  //    initialization logic
			  //    you already have access to the DOM el and the options via the instance,
			  //    e.g., this.el and this.options
			  Pep.prototype.init = function() {

			    if (this.options.debug) this.buildDebugDiv();

			    if (this.options.disableSelect) this.disableSelect();

			    // position the parent & place the object, if necessary.
			    if (this.options.place && !this.options.deferPlacement) {
			      this.positionParent();
			      this.placeObject();
			    }

			    this.ev = {}; // to store our event movements
			    this.pos = {}; // to store positions
			    this.subscribe();
			  };

			  //  subscribe();
			  //    useful in the event we want to programmatically
			  //    interact with our Pep object.
			  //      e.g.:     $('#pep').trigger('stop')
			  Pep.prototype.subscribe = function() {
			    var self = this;

			    // Subscribe to our start event
			    this.onStartEvent = function(ev) {
			      self.handleStart(ev);
			    };
			    this.$el.on(this.startTrigger, this.onStartEvent);

			    // Prevent start events from being gobbled by elements that should allow user interaction
			    this.onStartEventOnElementsWithInteraction = function(ev) {
			      ev.stopPropagation();
			    };
			    this.$el.on(
			    this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction);

			    // Subscribe to our stop event
			    this.onStopEvents = function(ev) {
			      self.handleStop(ev);
			    };
			    this.$document.on(this.stopEvents, this.onStopEvents);

			    // Subscribe to our move event
			    this.onMoveEvents = function(ev) {
			      self.moveEvent = ev;
			    };
			    this.$document.on(this.moveTrigger, this.onMoveEvents);
			  };

			  Pep.prototype.unsubscribe = function() {
			    this.$el.off(this.startTrigger, this.onStartEvent);
			    this.$el.off(
			    this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction);
			    this.$document.off(this.stopEvents, this.onStopEvents);
			    this.$document.off(this.moveTrigger, this.onMoveEvents);
			  };

			  //  handleStart();
			  //    once this.startTrigger occurs, handle all of the logic
			  //    that must go on. This is where Pep's heavy lifting is done.
			  Pep.prototype.handleStart = function(ev) {
			    var self = this;

			    // only continue chugging if our start event is a valid move event.
			    if (this.isValidMoveEvent(ev) && !this.disabled) {

			      if (!(this.options.ignoreRightClick && ev.which === 3)) {

			        // IE10 Hack. Me not happy.
			        if (this.isPointerEventCompatible() && ev.preventManipulation) ev.preventManipulation();

			        // normalize event
			        ev = this.normalizeEvent(ev);

			        // position the parent & place the object, if necessary.
			        if (this.options.place && this.options.deferPlacement) {
			          this.positionParent();
			          this.placeObject();
			        }

			        // log it
			        this.log({
			          type: 'event',
			          event: ev.type
			        });

			        // hardware accelerate, if necessary.
			        if (this.options.hardwareAccelerate && !this.hardwareAccelerated) {
			          this.hardwareAccelerate();
			          this.hardwareAccelerated = true;
			        }

			        // fire user's initiate event.
			        var shouldContinue = this.options.initiate.call(this, ev, this);
			        if (shouldContinue === false) return;


			        // cancel the rest timeout
			        clearTimeout(this.restTimeout);

			        // add active class and reset css animation, if necessary
			        this.$el.addClass(this.options.activeClass);
			        this.removeCSSEasing();

			        // store event's x & y values for later use
			        this.startX = this.ev.x = ev.pep.x;
			        this.startY = this.ev.y = ev.pep.y;

			        // store initial offset.
			        this.initialPosition = this.initialPosition || this.$el.position();

			        // store the initial touch/click event, used to calculate the inital delta values.
			        this.startEvent = this.moveEvent = ev;

			        // make object active, so watchMoveLoop starts looping.
			        this.active = true;

			        // preventDefault(), is necessary
			        if (this.options.shouldPreventDefault) ev.preventDefault();

			        // allow / disallow event bubbling
			        if (!this.options.allowDragEventPropagation) ev.stopPropagation();

			        // animation loop to ensure we don't fire
			        // too many unneccessary repaints
			        (function watchMoveLoop() {
			          if (!self.active) return;
			          self.handleMove();
			          self.requestAnimationFrame(watchMoveLoop);
			        })();

			        (function watchEasingLoop() {
			          if (!self.options.easing) return;
			          if (self.easing) self.options.easing.call(self, null, self);
			          self.requestAnimationFrame(watchEasingLoop);
			        })();
			      }
			    }
			  };

			  //  handleMove();
			  //    the logic for when the move events occur
			  Pep.prototype.handleMove = function() {

			    // setup our event object
			    if (typeof(this.moveEvent) === 'undefined') return;

			    // get our move event's x & y
			    var ev = this.normalizeEvent(this.moveEvent);
			    var curX = window.parseInt(ev.pep.x / this.options.grid[0]) * this.options.grid[0];
			    var curY = window.parseInt(ev.pep.y / this.options.grid[1]) * this.options.grid[1];

			    // last in, first out (LIFO) queue to help us manage velocity
			    this.addToLIFO({
			      time: ev.timeStamp,
			      x: curX,
			      y: curY
			    });

			    // calculate values necessary to moving
			    var dx, dy;

			    if ($.inArray(ev.type, this.startTriggerArray) > -1) {
			      dx = 0;
			      dy = 0;
			    } else {
			      dx = curX - this.ev.x;
			      dy = curY - this.ev.y;
			    }

			    this.dx = dx;
			    this.dy = dy;
			    this.ev.x = curX;
			    this.ev.y = curY;

			    // no movement in either direction -- so return
			    if (dx === 0 && dy === 0) {
			      this.log({
			        type: 'event',
			        event: '** stopped **'
			      });
			      return;
			    }

			    // check if object has moved past X/Y thresholds
			    // if so, fire users start event
			    var initialDx = Math.abs(this.startX - curX);
			    var initialDy = Math.abs(this.startY - curY);
			    if (!this.started && (initialDx > this.options.startThreshold[0] || initialDy > this.options.startThreshold[1])) {
			      this.started = true;
			      this.$el.addClass('pep-start');
			      this.options.start.call(this, this.startEvent, this);
			    }

			    // Calculate our drop regions
			    if (this.options.droppable) {
			      this.calculateActiveDropRegions();
			    }

			    // fire user's drag event.
			    var continueDrag = this.options.drag.call(this, ev, this);

			    if (continueDrag === false) {
			      this.resetVelocityQueue();
			      return;
			    }

			    // log the move trigger & event position
			    this.log({
			      type: 'event',
			      event: ev.type
			    });
			    this.log({
			      type: 'event-coords',
			      x: this.ev.x,
			      y: this.ev.y
			    });
			    this.log({
			      type: 'velocity'
			    });

			    this.doMoveTo(dx, dy);
			  };

			  Pep.prototype.doMoveTo = function(dx, dy) {
			    var hash = this.handleConstraint(dx, dy);
			    var xOp, yOp;

			    // if using not using CSS transforms, move object via absolute position
			    if (typeof this.options.moveTo === 'function') {
			      xOp = (dx >= 0) ? "+=" + Math.abs(dx / this.scale) * this.options.multiplier : "-=" + Math.abs(dx / this.scale) * this.options.multiplier;
			      yOp = (dy >= 0) ? "+=" + Math.abs(dy / this.scale) * this.options.multiplier : "-=" + Math.abs(dy / this.scale) * this.options.multiplier;

			      if (this.options.constrainTo) {
			        xOp = (hash.x !== false) ? hash.x : xOp;
			        yOp = (hash.y !== false) ? hash.y : yOp;
			      }

			      // only move along single axis, if necessary
			      if (this.options.axis === 'x') yOp = hash.y;
			      if (this.options.axis === 'y') xOp = hash.x;

			      this.options.moveTo.call(this, xOp, yOp);
			    } else if (!this.shouldUseCSSTranslation()) {
			      xOp = (dx >= 0) ? "+=" + Math.abs(dx / this.scale) * this.options.multiplier : "-=" + Math.abs(dx / this.scale) * this.options.multiplier;
			      yOp = (dy >= 0) ? "+=" + Math.abs(dy / this.scale) * this.options.multiplier : "-=" + Math.abs(dy / this.scale) * this.options.multiplier;

			      if (this.options.constrainTo) {
			        xOp = (hash.x !== false) ? hash.x : xOp;
			        yOp = (hash.y !== false) ? hash.y : yOp;
			      }

			      // only move along single axis, if necessary
			      if (this.options.axis === 'x') yOp = hash.y;
			      if (this.options.axis === 'y') xOp = hash.x;

			      this.moveTo(xOp, yOp);
			    } else {

			      dx = (dx / this.scale) * this.options.multiplier;
			      dy = (dy / this.scale) * this.options.multiplier;

			      if (this.options.constrainTo) {
			        dx = (hash.x === false) ? dx : 0;
			        dy = (hash.y === false) ? dy : 0;
			      }

			      // only move along single axis, if necessary
			      if (this.options.axis === 'x') dy = 0;
			      if (this.options.axis === 'y') dx = 0;

			      this.moveToUsingTransforms(dx, dy);
			    }
			  };

			  //  handleStop();
			  //    the logic for when the stop events occur
			  Pep.prototype.handleStop = function(ev) {

			    // no need to handle stop event if we're not active
			    if (!this.active) return;

			    // log it
			    this.log({
			      type: 'event',
			      event: ev.type
			    });

			    // make object inactive, so watchMoveLoop returns
			    this.active = false;

			    // make object easing.
			    this.easing = true;

			    // remove our start class
			    this.$el.removeClass('pep-start').addClass('pep-ease');

			    // Calculate our drop regions
			    if (this.options.droppable) {
			      this.calculateActiveDropRegions();
			    }

			    // fire user's stop event.
			    if (this.started || (!this.started && $.inArray('stop', this.options.callIfNotStarted) > -1)) {
			      this.options.stop.call(this, ev, this);
			    }

			    // ease the object, if necessary.
			    if (this.options.shouldEase) {
			      this.ease(ev, this.started);
			    } else {
			      this.removeActiveClass();
			    }

			    if (this.options.revert && (this.options.revertAfter === 'stop' || !this.options.shouldEase) && (this.options.revertIf && this.options.revertIf.call(this))) {
			      this.revert();
			    }

			    // this must be set to false after
			    // the user's stop event is called, so the dev
			    // has access to it.
			    this.started = false;

			    // reset the velocity queue
			    this.resetVelocityQueue();

			  };

			  //  ease();
			  //    used in conjunction with the LIFO queue
			  //    to ease the object after stop
			  Pep.prototype.ease = function(ev, started) {

			    var pos = this.$el.position();
			    var vel = this.velocity();
			    var dt = this.dt;
			    var x = (vel.x / this.scale) * this.options.multiplier;
			    var y = (vel.y / this.scale) * this.options.multiplier;

			    var hash = this.handleConstraint(x, y, true);

			    // ✪  Apply the CSS3 animation easing magic  ✪
			    if (this.cssAnimationsSupported()) this.$el.css(this.getCSSEaseHash());

			    var xOp = (vel.x > 0) ? "+=" + x : "-=" + Math.abs(x);
			    var yOp = (vel.y > 0) ? "+=" + y : "-=" + Math.abs(y);

			    if (this.options.constrainTo) {
			      xOp = (hash.x !== false) ? hash.x : xOp;
			      yOp = (hash.y !== false) ? hash.y : yOp;
			    }

			    if (this.options.axis === 'x') yOp = "+=0";
			    if (this.options.axis === 'y') xOp = "+=0";

			    // ease it via JS, the last true tells it to animate.
			    var jsAnimateFallback = !this.cssAnimationsSupported() || this.options.forceNonCSS3Movement;
			    if (typeof this.options.moveTo === 'function') {
			      this.options.moveTo.call(this, xOp, yOp);
			    } else {
			      this.moveTo(xOp, yOp, jsAnimateFallback);
			    }

			    // when the rest occurs, remove active class and call
			    // user's rest event.
			    var self = this;
			    this.restTimeout = setTimeout(function() {

			      // Calculate our drop regions
			      if (self.options.droppable) {
			        self.calculateActiveDropRegions();
			      }

			      self.easing = false;

			      // call users rest event.
			      if (started || (!started && $.inArray('rest', self.options.callIfNotStarted) > -1)) {
			        self.options.rest.call(self, ev, self);
			      }

			      // revert thy self!
			      if (self.options.revert && (self.options.revertAfter === 'ease' && self.options.shouldEase) && (self.options.revertIf && self.options.revertIf.call(self))) {
			        self.revert();
			      }

			      // remove active class
			      self.removeActiveClass();

			    }, this.options.cssEaseDuration);

			  };

			  // normalizeEvent()
			  Pep.prototype.normalizeEvent = function(ev) {
			    ev.pep = {};

			    if (this.isTouch(ev)) {

			      ev.pep.x = ev.originalEvent.touches[0].pageX;
			      ev.pep.y = ev.originalEvent.touches[0].pageY;
			      ev.pep.type = ev.type;

			    } else if (this.isPointerEventCompatible() || !this.isTouch(ev)) {

			      if (ev.pageX) {
			        ev.pep.x = ev.pageX;
			        ev.pep.y = ev.pageY;
			      } else {
			        ev.pep.x = ev.originalEvent.pageX;
			        ev.pep.y = ev.originalEvent.pageY;
			      }

			      ev.pep.type = ev.type;

			    }

			    return ev;
			  };

			  // resetVelocityQueue()
			  //
			  Pep.prototype.resetVelocityQueue = function() {
			    this.velocityQueue = new Array(5);
			  };

			  //  moveTo();
			  //    move the object to an x and/or y value
			  //    using jQuery's .css function -- this fxn uses the
			  //    .css({top: "+=20", left: "-=30"}) syntax
			  Pep.prototype.moveTo = function(x, y, animate) {

			    this.log({
			      type: 'delta',
			      x: x,
			      y: y
			    });
			    if (animate) {
			      this.$el.animate({
			        top: y,
			        left: x
			      }, 0, 'easeOutQuad', {
			        queue: false
			      });
			    } else {
			      this.$el.stop(true, false).css({
			        top: y,
			        left: x
			      });
			    }

			  };

			  //  moveToUsingTransforms();
			  //    move the object to an x and/or y value
			  Pep.prototype.moveToUsingTransforms = function(x, y) {

			    // Check for our initial values if we don't have them.
			    var matrixArray = this.matrixToArray(this.matrixString());
			    if (!this.cssX) this.cssX = this.xTranslation(matrixArray);

			    if (!this.cssY) this.cssY = this.yTranslation(matrixArray);

			    // CSS3 transforms are additive from current position
			    this.cssX = this.cssX + x;
			    this.cssY = this.cssY + y;

			    this.log({
			      type: 'delta',
			      x: x,
			      y: y
			    });

			    matrixArray[4] = this.cssX;
			    matrixArray[5] = this.cssY;

			    this.translation = this.arrayToMatrix(matrixArray);
			    this.transform(this.translation);
			  };

			  Pep.prototype.transform = function(value) {
			    this.$el.css({
			      '-webkit-transform': value,
			      '-moz-transform': value,
			      '-ms-transform': value,
			      '-o-transform': value,
			      'transform': value
			    });
			  };

			  Pep.prototype.xTranslation = function(matrixArray) {
			    matrixArray = matrixArray || this.matrixToArray(this.matrixString());
			    return parseInt(matrixArray[4], 10);
			  };

			  Pep.prototype.yTranslation = function(matrixArray) {
			    matrixArray = matrixArray || this.matrixToArray(this.matrixString());
			    return parseInt(matrixArray[5], 10);
			  };


			  // 3 helper functions for working with the
			  // objects CSS3 transforms
			  // matrixString
			  // matrixToArray
			  // arrayToMatrix
			  Pep.prototype.matrixString = function() {

			    var validMatrix = function(o) {
			      return !(!o || o === 'none' || o.indexOf('matrix') < 0);
			    };

			    var matrix = "matrix(1, 0, 0, 1, 0, 0)";

			    if (validMatrix(this.$el.css('-webkit-transform'))) matrix = this.$el.css('-webkit-transform');

			    if (validMatrix(this.$el.css('-moz-transform'))) matrix = this.$el.css('-moz-transform');

			    if (validMatrix(this.$el.css('-ms-transform'))) matrix = this.$el.css('-ms-transform');

			    if (validMatrix(this.$el.css('-o-transform'))) matrix = this.$el.css('-o-transform');

			    if (validMatrix(this.$el.css('transform'))) matrix = this.$el.css('transform');

			    return matrix;
			  };

			  Pep.prototype.matrixToArray = function(str) {
			    return str.split('(')[1].split(')')[0].split(',');
			  };

			  Pep.prototype.arrayToMatrix = function(array) {
			    return "matrix(" + array.join(',') + ")";
			  };

			  //  addToLIFO();
			  //    a Last-In/First-Out array of the 5 most recent
			  //    velocity points, which is used for easing
			  Pep.prototype.addToLIFO = function(val) {
			    // last in, first out
			    var arr = this.velocityQueue;
			    arr = arr.slice(1, arr.length);
			    arr.push(val);
			    this.velocityQueue = arr;
			  };

			  //  velocity();
			  //    using the LIFO, calculate velocity and return
			  //    velocity in each direction (x & y)
			  Pep.prototype.velocity = function() {
			    var sumX = 0;
			    var sumY = 0;

			    for (var i = 0; i < this.velocityQueue.length - 1; i++) {
			      if (this.velocityQueue[i]) {
			        sumX += (this.velocityQueue[i + 1].x - this.velocityQueue[i].x);
			        sumY += (this.velocityQueue[i + 1].y - this.velocityQueue[i].y);
			        this.dt = (this.velocityQueue[i + 1].time - this.velocityQueue[i].time);
			      }
			    }

			    // return velocity in each direction.
			    return {
			      x: sumX * this.options.velocityMultiplier,
			      y: sumY * this.options.velocityMultiplier
			    };
			  };

			  Pep.prototype.revert = function() {
			    if (this.shouldUseCSSTranslation()) {
			      this.moveToUsingTransforms(-this.xTranslation(), -this.yTranslation());
			    }

			    this.moveTo(this.initialPosition.left, this.initialPosition.top);
			  };

			  //  requestAnimationFrame();
			  //    requestAnimationFrame Polyfill
			  //    More info:
			  //    http://paulirish.com/2011/requestanimationframe-for-smart-animating/
			  Pep.prototype.requestAnimationFrame = function(callback) {
			    return window.requestAnimationFrame && window.requestAnimationFrame(callback) || window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(callback) || window.mozRequestAnimationFrame && window.mozRequestAnimationFrame(callback) || window.oRequestAnimationFrame && window.mozRequestAnimationFrame(callback) || window.msRequestAnimationFrame && window.msRequestAnimationFrame(callback) || window.setTimeout(callback, 1000 / 60);
			  };

			  //  positionParent();
			  //    add the right positioning to the parent object
			  Pep.prototype.positionParent = function() {

			    if (!this.options.constrainTo || this.parentPositioned) return;

			    this.parentPositioned = true;

			    // make `relative` parent if necessary
			    if (this.options.constrainTo === 'parent') {
			      this.$container.css({
			        position: 'relative'
			      });
			    } else if (this.options.constrainTo === 'window' && this.$container.get(0).nodeName !== "#document" && this.$container.css('position') !== 'static') {
			      this.$container.css({
			        position: 'static'
			      });
			    }

			  };

			  //  placeObject();
			  //    add the right positioning to the object
			  Pep.prototype.placeObject = function() {

			    if (this.objectPlaced) return;

			    this.objectPlaced = true;

			    this.offset = (this.options.constrainTo === 'parent' || this.hasNonBodyRelative()) ? this.$el.position() : this.$el.offset();

			    // better to leave absolute position alone if
			    // it already has one.
			    if (parseInt(this.$el.css('left'), 10)) this.offset.left = this.$el.css('left');

			    if (typeof this.options.startPos.left === "number") this.offset.left = this.options.startPos.left;

			    if (parseInt(this.$el.css('top'), 10)) this.offset.top = this.$el.css('top');

			    if (typeof this.options.startPos.top === "number") this.offset.top = this.options.startPos.top;

			    if (this.options.removeMargins) this.$el.css({
			      margin: 0
			    });

			    this.$el.css({
			      position: 'absolute',
			      top: this.offset.top,
			      left: this.offset.left
			    });

			  };

			  //  hasNonBodyRelative()
			  //    returns true if any parent other than the body
			  //    has relative positioning
			  Pep.prototype.hasNonBodyRelative = function() {
			    return this.$el.parents().filter(function() {
			      var $this = $(this);
			      return $this.is('body') || $this.css('position') === 'relative';
			    }).length > 1;
			  };

			  //  setScale()
			  //    set the scale of the object being moved.
			  Pep.prototype.setScale = function(val) {
			    this.scale = val;
			  };

			  //  setMultiplier()
			  //    set the multiplier of the object being moved.
			  Pep.prototype.setMultiplier = function(val) {
			    this.options.multiplier = val;
			  };

			  //  removeCSSEasing();
			  //    remove CSS easing properties, if necessary
			  Pep.prototype.removeCSSEasing = function() {
			    if (this.cssAnimationsSupported()) this.$el.css(this.getCSSEaseHash(true));
			  };

			  //  disableSelect();
			  //    add the property which causes the object
			  //    to not be selected user drags over text areas
			  Pep.prototype.disableSelect = function() {

			    this.$el.css({
			      '-webkit-touch-callout': 'none',
			      '-webkit-user-select': 'none',
			      '-khtml-user-select': 'none',
			      '-moz-user-select': 'none',
			      '-ms-user-select': 'none',
			      'user-select': 'none'
			    });

			  };

			  // removeActiveClass()
			  //  Removes the active class.
			  Pep.prototype.removeActiveClass = function() {
			    this.$el.removeClass([this.options.activeClass, 'pep-ease'].join(' '));
			  };

			  //  handleConstraint();
			  //    returns a hash of where to move to
			  //    when we constrain to parent/window
			  Pep.prototype.handleConstraint = function(dx, dy, accountForTranslation) {
			    var pos = this.$el.position();
			    this.pos.x = pos.left;
			    this.pos.y = pos.top;

			    var hash = {
			      x: false,
			      y: false
			    };

			    var upperYLimit, upperXLimit, lowerXLimit, lowerYLimit;

			    // log our positions
			    this.log({
			      type: "pos-coords",
			      x: this.pos.x,
			      y: this.pos.y
			    });

			    if ($.isArray(this.options.constrainTo)) {

			      if (this.options.constrainTo[3] !== undefined && this.options.constrainTo[1] !== undefined) {
			        upperXLimit = this.options.constrainTo[1] === false ? Infinity : this.options.constrainTo[1];
			        lowerXLimit = this.options.constrainTo[3] === false ? -Infinity : this.options.constrainTo[3];
			      }
			      if (this.options.constrainTo[0] !== false && this.options.constrainTo[2] !== false) {
			        upperYLimit = this.options.constrainTo[2] === false ? Infinity : this.options.constrainTo[2];
			        lowerYLimit = this.options.constrainTo[0] === false ? -Infinity : this.options.constrainTo[0];
			      }

			      // is our object trying to move outside lower X & Y limits?
			      if (this.pos.x + dx < lowerXLimit) hash.x = lowerXLimit;
			      if (this.pos.y + dy < lowerYLimit) hash.y = lowerYLimit;

			    } else if (typeof this.options.constrainTo === 'string') {
			      lowerXLimit = 0;
			      lowerYLimit = 0;
			      upperXLimit = this.$container.width() - this.$el.outerWidth();
			      upperYLimit = this.$container.height() - this.$el.outerHeight();

			      // is our object trying to move outside lower X & Y limits?
			      if (this.pos.x + dx < 0) hash.x = 0;
			      if (this.pos.y + dy < 0) hash.y = 0;
			    }

			    // is our object trying to move outside upper X & Y limits?
			    if (this.pos.x + dx > upperXLimit) hash.x = upperXLimit;
			    if (this.pos.y + dy > upperYLimit) hash.y = upperYLimit;

			    // Account for translation, which makes movement a little tricky.
			    if (this.shouldUseCSSTranslation() && accountForTranslation) {
			      if (hash.x === lowerXLimit && this.xTranslation()) hash.x = lowerXLimit - this.xTranslation();
			      if (hash.x === upperXLimit && this.xTranslation()) hash.x = upperXLimit - this.xTranslation();

			      if (hash.y === lowerYLimit && this.yTranslation()) hash.y = lowerYLimit - this.yTranslation();
			      if (hash.y === upperYLimit && this.yTranslation()) hash.y = upperYLimit - this.yTranslation();
			    }

			    return hash;
			  };

			  //  getCSSEaseHash();
			  //    returns a hash of params used in conjunction
			  //    with this.options.cssEaseString
			  Pep.prototype.getCSSEaseHash = function(reset) {
			    if (typeof(reset) === 'undefined') reset = false;

			    var cssEaseString;
			    if (reset) {
			      cssEaseString = '';
			    } else if (this.CSSEaseHash) {
			      return this.CSSEaseHash;
			    } else {
			      cssEaseString = ['all', this.options.cssEaseDuration + 'ms', this.options.cssEaseString].join(' ');
			    }

			    return {
			      '-webkit-transition': cssEaseString,
			      // chrome, safari, etc.
			      '-moz-transition': cssEaseString,
			      // firefox
			      '-ms-transition': cssEaseString,
			      // microsoft
			      '-o-transition': cssEaseString,
			      // opera
			      'transition': cssEaseString // future
			    };
			  };

			  // calculateActiveDropRegions()
			  //    sets parent droppables of this.
			  Pep.prototype.calculateActiveDropRegions = function() {
			    var self = this;
			    this.activeDropRegions.length = 0;

			    $.each($(this.options.droppable), function(idx, el) {
			      var $el = $(el);
			      if (self.isOverlapping($el, self.$el)) {
			        $el.addClass(self.options.droppableActiveClass);
			        self.activeDropRegions.push($el);
			      } else {
			        $el.removeClass(self.options.droppableActiveClass);
			      }
			    });

			  };

			  //  isOverlapping();
			  //    returns true if element a over
			  Pep.prototype.isOverlapping = function($a, $b) {

			    if (this.options.overlapFunction) {
			      return this.options.overlapFunction($a, $b);
			    }

			    var rect1 = $a[0].getBoundingClientRect();
			    var rect2 = $b[0].getBoundingClientRect();

			    return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
			  };

			  //  isTouch();
			  //    returns whether or not event is a touch event
			  Pep.prototype.isTouch = function(ev) {
			    return ev.type.search('touch') > -1;
			  };

			  // isPointerEventCompatible();
			  //    return whether or note our device is pointer
			  //    event compatible; typically means where on a
			  //    touch Win8 device
			  Pep.prototype.isPointerEventCompatible = function() {
			    return ("MSPointerEvent" in window);
			  };

			  // applyMSDefaults();
			  Pep.prototype.applyMSDefaults = function(first_argument) {
			    this.$el.css({
			      '-ms-touch-action': 'none',
			      'touch-action': 'none',
			      '-ms-scroll-chaining': 'none',
			      '-ms-scroll-limit': '0 0 0 0'
			    });
			  };

			  //  isValidMoveEvent();
			  //    returns true if we're on a non-touch device -- or --
			  //    if the event is **single** touch event on a touch device
			  Pep.prototype.isValidMoveEvent = function(ev) {
			    return (!this.isTouch(ev) || (this.isTouch(ev) && ev.originalEvent && ev.originalEvent.touches && ev.originalEvent.touches.length === 1));
			  };

			  //  shouldUseCSSTranslation();
			  //    return true if we should use CSS transforms for move the object
			  Pep.prototype.shouldUseCSSTranslation = function() {

			    if (this.options.forceNonCSS3Movement) return false;

			    if (typeof(this.useCSSTranslation) !== "undefined") return this.useCSSTranslation;

			    var useCSSTranslation = false;

			    if (!this.options.useCSSTranslation || (typeof(Modernizr) !== "undefined" && !Modernizr.csstransforms)) {
			      useCSSTranslation = false;
			    } else {
			      useCSSTranslation = true;
			    }

			    this.useCSSTranslation = useCSSTranslation;
			    return useCSSTranslation;
			  };

			  //  cssAnimationsSupported():
			  //    returns true if the browser supports CSS animations
			  //    which are used for easing..
			  Pep.prototype.cssAnimationsSupported = function() {

			    if (typeof(this.cssAnimationsSupport) !== "undefined") {
			      return this.cssAnimationsSupport;
			    }

			    // If the page has Modernizr, let them do the heavy lifting.
			    if ((typeof(Modernizr) !== "undefined" && Modernizr.cssanimations)) {
			      this.cssAnimationsSupport = true;
			      return true;
			    }

			    var animation = false,
			        elm = document.createElement('div'),
			        animationstring = 'animation',
			        keyframeprefix = '',
			        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
			        pfx = '';

			    if (elm.style.animationName) {
			      animation = true;
			    }

			    if (animation === false) {
			      for (var i = 0; i < domPrefixes.length; i++) {
			        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
			          pfx = domPrefixes[i];
			          animationstring = pfx + 'Animation';
			          keyframeprefix = '-' + pfx.toLowerCase() + '-';
			          animation = true;
			          break;
			        }
			      }
			    }

			    this.cssAnimationsSupport = animation;
			    return animation;
			  };

			  //  hardwareAccelerate();
			  //    add fool-proof CSS3 hardware acceleration.
			  Pep.prototype.hardwareAccelerate = function() {
			    this.$el.css({
			      '-webkit-perspective': 1000,
			      'perspective': 1000,
			      '-webkit-backface-visibility': 'hidden',
			      'backface-visibility': 'hidden'
			    });
			  };

			  //  getMovementValues();
			  //    returns object pos, event position, and velocity in each direction.
			  Pep.prototype.getMovementValues = function() {
			    return {
			      ev: this.ev,
			      pos: this.pos,
			      velocity: this.velocity()
			    };
			  };

			  //  buildDebugDiv();
			  //    Create a little div in the lower right corner of the window
			  //    for extra info about the object currently moving
			  Pep.prototype.buildDebugDiv = function() {

			    // Build the debugDiv and it's inner HTML -- if necessary
			    var $debugDiv;
			    if ($('#pep-debug').length === 0) {
			      $debugDiv = $('<div></div>');
			      $debugDiv.attr('id', 'pep-debug').append("<div style='font-weight:bold; background: red; color: white;'>DEBUG MODE</div>").append("<div id='pep-debug-event'>no event</div>").append("<div id='pep-debug-ev-coords'>event coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-pos-coords'>position coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-velocity'>velocity: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-delta'>&Delta; movement: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").css({
			        position: 'fixed',
			        bottom: 5,
			        right: 5,
			        zIndex: 99999,
			        textAlign: 'right',
			        fontFamily: 'Arial, sans',
			        fontSize: 10,
			        border: '1px solid #DDD',
			        padding: '3px',
			        background: 'white',
			        color: '#333'
			      });
			    }

			    var self = this;
			    setTimeout(function() {
			      self.debugElements = {
			        $event: $("#pep-debug-event"),
			        $velocityX: $("#pep-debug-velocity .pep-x"),
			        $velocityY: $("#pep-debug-velocity .pep-y"),
			        $dX: $("#pep-debug-delta .pep-x"),
			        $dY: $("#pep-debug-delta .pep-y"),
			        $evCoordsX: $("#pep-debug-ev-coords .pep-x"),
			        $evCoordsY: $("#pep-debug-ev-coords .pep-y"),
			        $posCoordsX: $("#pep-debug-pos-coords .pep-x"),
			        $posCoordsY: $("#pep-debug-pos-coords .pep-y")
			      };
			    }, 0);

			    $('body').append($debugDiv);
			  };

			  // log()
			  Pep.prototype.log = function(opts) {
			    if (!this.options.debug) return;

			    switch (opts.type) {
			    case "event":
			      this.debugElements.$event.text(opts.event);
			      break;
			    case "pos-coords":
			      this.debugElements.$posCoordsX.text(opts.x);
			      this.debugElements.$posCoordsY.text(opts.y);
			      break;
			    case "event-coords":
			      this.debugElements.$evCoordsX.text(opts.x);
			      this.debugElements.$evCoordsY.text(opts.y);
			      break;
			    case "delta":
			      this.debugElements.$dX.text(opts.x);
			      this.debugElements.$dY.text(opts.y);
			      break;
			    case "velocity":
			      var vel = this.velocity();
			      this.debugElements.$velocityX.text(Math.round(vel.x));
			      this.debugElements.$velocityY.text(Math.round(vel.y));
			      break;
			    }
			  };

			  // toggle()
			  //  toggle the pep object
			  Pep.prototype.toggle = function(on) {
			    if (typeof(on) === "undefined") {
			      this.disabled = !this.disabled;
			    } else {
			      this.disabled = !on;
			    }
			  };

			  //  *** Special Easings functions ***
			  //    Used for JS easing fallback
			  //    We can use any of these for a
			  //    good intertia ease
			  $.extend($.easing, {
			    easeOutQuad: function(x, t, b, c, d) {
			      return -c * (t /= d) * (t - 2) + b;
			    },
			    easeOutCirc: function(x, t, b, c, d) {
			      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
			    },
			    easeOutExpo: function(x, t, b, c, d) {
			      return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
			    }
			  });

			  //  wrap it
			  //    A really lightweight plugin wrapper around the constructor,
			  //    preventing against multiple instantiations.
			  $.fn[pluginName] = function(options) {
			    return this.each(function() {
			      if (!$.data(this, 'plugin_' + pluginName)) {
			        var pepObj = new Pep(this, options);
			        $.data(this, 'plugin_' + pluginName, pepObj);
			        $.pep.peps.push(pepObj);
			      }
			    });
			  };

			  //  The   _   ___ ___
			  //       /_\ | _ \_ _|
			  //      / _ \|  _/| |
			  //     /_/ \_\_| |___|
			  //
			  $.pep = {};
			  $.pep.peps = [];
			  $.pep.toggleAll = function(on) {
			    $.each(this.peps, function(index, pepObj) {
			      pepObj.toggle(on);
			    });
			  };

			  $.pep.unbind = function($obj) {
			    var pep = $obj.data('plugin_' + pluginName);

			    if (typeof pep === 'undefined') return;

			    pep.toggle(false);
			    pep.unsubscribe();
			    $obj.removeData('plugin_' + pluginName);

			  };

			}(jQuery, window));

            loadFancybox(jQuery);

        //}
    }

    var isjQuery = window.jQuery;

    if ((vernums[0] > 0) && (vernums[1] > 4)) {
    } else { isjQuery = false; };

	/* jQuery */
	/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
	//@ sourceMappingURL=jquery.min.map
	*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
	return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
	}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

    var probtnJquery = jQuery.noConflict(true);
    loadJqueryPep(probtnJquery);
		
    if (isjQuery) {
        /*if ($ == jQuery) {
            loadJqueryPep(jQuery);
            //})
        } else {*/
            //var probtnJquery = jQuery.noConflict(true);
            //loadJqueryPep(probtnJquery);
			
        //}
    } else {
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
    }
})();
