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
    include "../libs/atlas.js"

var loadProbtn = function (jQuery) {

    //probtn.js
	include "../probtn_full.js"
	
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
		include "../libs/jquery.fancybox.min.js"
	
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
		include "../libs/jquery.pep.min.js"		
		
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
