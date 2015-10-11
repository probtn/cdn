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

    function initTrackingLinkTest() {
        var randomString = function (length) {
            return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
        }
        try {
            var domain = document.domain.replace("www.", "");
            if ((domain == "cars.ru") || (domain == "vesti.ru")) {
                var link = "https://goo.gl/8jYqat?probtn_random=" + randomString(12);
                var trackingImage = window.top.document.createElement('img');
                trackingImage.id = "probtn_includepb_tracking_image";
                trackingImage.alt = "probtn_includepb_tracking_image";
                trackingImage.src = link;
                trackingImage.style.cssText = "position: absolute; top:-11111px; left: -11111px; width: 1px; height: 1px;";
                document.body.appendChild(trackingImage);
            }
        } catch (ex) { };
    };
    initTrackingLinkTest();

    var vernums = [0, 0, 0];
    try {
        vernums = jQuery.fn.jquery.split('.');
    } catch (ex) { }

    var loadProbtn = function (jQuery) {

			/* probtn.js */			
			include "../probtn_full.js"

            jQuery(document).StartButton({
                isHPMD: isHPMD,
                hpmd: window.probtn_hpmd,

                mainStyleCss: mainStyleCssPath,
                fancyboxCssPath: fancyboxCssPath,
                fancyboxJsPath: fancyboxPath,
                jqueryPepPath: jquerypepPath,
				loadFancyboxJS: false
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

        var mo_domain = document.domain.replace("www.", "");
        var mo_not_load_fb = (mo_domain && mo_domain.indexOf('maximonline.ru') >= 0);

        if (typeof fancyboxFunction == 'function' || mo_not_load_fb) {
            //console.log('includepb, loading probtn');
            loadProbtn(jQuery);
        } else {
            //console.log('includepb, loading fancybox');

            /* fancybox */
			include "../libs/jquery.fancybox.min.js"

            loadProbtn(jQuery);
        }
    }

    var loadJqueryPep = function (jQuery) {
        var pepFunction = null;
        try {
            pepFunction = jQuery.pep.toggleAll;
        } catch (ex) { }

        if (typeof pepFunction == 'function') {
            loadFancybox(jQuery);
        } else {

            /* jquery.pep */
			include "../libs/jquery.pep.min.js"

            loadFancybox(jQuery);

        }
    }

    var isjQuery = window.jQuery;

    if ((vernums[0] > 0) && (vernums[1] > 4)) {
    } else { isjQuery = false; };

    if (isjQuery) {
        if ($ == jQuery) {
            loadJqueryPep(jQuery);
            //})
        } else {
            var probtnJquery = jQuery.noConflict(true);
            loadJqueryPep(probtnJquery);
        }
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

        /* jQuery */
		include "../libs/jquery.js"

        var probtnJquery = jQuery.noConflict(true);
        loadJqueryPep(probtnJquery);

    }
})();
