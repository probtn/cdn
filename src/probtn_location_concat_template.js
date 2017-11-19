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
    var mainStyleCssPath = "https://cdn.probtn.com/style.css";
    var jquerypepPath = "https://cdn.probtn.com/libs/jquery.pep.min.js";
    var fancyboxPath = "https://cdn.probtn.com/libs/jquery.fancybox.min.js";
    var fancyboxCssPath = "https://cdn.probtn.com/libs/jquery.fancybox.min.css";
    var probtnPath = "https://cdn.probtn.com/probtn.js"; //"//probtnexample1.azurewebsites.net/probtn2.js";
    var jqueryPath = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js';
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

    /*atlas lib*/
    include "../libs/atlas.js"
	
	/*postscribe lib*/
    include "../libs/postscribe/postscribe.js"
	include "../libs/postscribe/htmlParser.js"

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
				loadFancyboxJS: false,
				loadJqueryPepJS: false,
				
				'UseGeoLocation': true,
                'WaitForGeoLocation': true
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
			include "../libs/jquery.fancybox.min.js"

            loadProbtn(jQuery);
    }

    var loadJqueryPep = function (jQuery) {
        var pepFunction = null;
        try {
            pepFunction = jQuery.pep.toggleAll;
        } catch (ex) { }

            /* jquery.pep */
			include "../libs/jquery.pep.min.js"

            loadFancybox(jQuery);

        //}
    }

    var isjQuery = window.jQuery;

    if ((vernums[0] > 0) && (vernums[1] > 4)) {
    } else { isjQuery = false; };

	/* jQuery */
	include "../libs/jquery.js"

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
