var mainStyleCssPath = "//cdn.probtn.com/style.css";
var jquerypepPath = "//cdn.probtn.com/libs/jquery.pep.min.js";
var fancyboxPath = "//cdn.probtn.com/libs/jquery.fancybox.min.js";
var fancyboxCssPath = "//cdn.probtn.com/libs/jquery.fancybox.min.css";
var probtnPath = "//cdn.probtn.com/probtn.js";
var jqueryPath = '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js';
var isServerCommunicationEnabled = true;
var useLocalFileSettings = false;
var localSettingsPath = "settings.json";
var isHPMD = true;
var domain = 'cosmo.ru';
var campaignId = '';

try {
	window.probtn_hpmd = hpmd;
} catch(ex) {
}

var loadProbtn = function() {
    jQuery.getScript(probtnPath, function () {
        jQuery(document).StartButton({
            mainStyleCss: mainStyleCssPath,
            isHPMD: isHPMD,
			domain: domain,
			hpmd: window.probtn_hpmd,
            fancyboxCssPath: fancyboxCssPath,
			SelectAdSet: campaignId
        })
    })
}

var loadFancybox = function () {
    var fancyboxFunction = null;
    try {
        fancyboxFunction = jQuery.fancybox;
    } catch (ex) {
    }

    if (typeof fancyboxFunction == 'function') {
        loadProbtn();
    } else {
        jQuery.getScript(fancyboxPath, function () {
            loadProbtn();
        })
    }
}

var loadJqueryPep = function () {
    var pepFunction = null;
    try {
        pepFunction = jQuery.pep.toggleAll;
    } catch (ex) { }

    if (typeof pepFunction == 'function') {
        loadFancybox();
    } else {
        jQuery.getScript(jquerypepPath, function() {
            loadFancybox();
        })
    }
}

if (window.jQuery) {
    console.log("Is jquery");
    if ($ == jQuery) {
		//console.log(1);
        //jQuery(document).ready(function () {
            loadJqueryPep();
        //})
    } else {
		console.log(2);
        var oHead = document.getElementsByTagName('HEAD').item(0);

        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript["data-cfasync"] = "false";
        oScript.text = "jQuery.noConflict(); jQuery.getScript('" + jquerypepPath + "', function() { jQuery.getScript('" + fancyboxPath + "', function () { jQuery.getScript('" + probtnPath + "', function () { jQuery(document).StartButton({domain: '"+ domain +"', 'SelectAdSet': '"+ campaignId +"', 'hpmd': window.probtn_hpmd, 'fancyboxCssPath': '" +fancyboxCssPath +"', 'isHPMD': " + isHPMD + ", 'mainStyleCss':'" + mainStyleCssPath + "'});});});}); ";
        oHead.appendChild(oScript);
    }
} else {
    console.log("No jquery");
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
    loadJS(jqueryPath, function () {
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript["data-cfasync"] = "false";
        oScript.text = "(function ($) {jQuery.noConflict(); jQuery.getScript('" + jquerypepPath + "', function() {jQuery.getScript('" + fancyboxPath + "', function () {jQuery.getScript('" + probtnPath + "', function () { jQuery(document).StartButton({domain: '"+ domain +"', 'SelectAdSet': '"+ campaignId +"', 'hpmd': window.probtn_hpmd, 'fancyboxCssPath': '" + fancyboxCssPath + "', 'isHPMD': " + isHPMD + ", 'mainStyleCss': '" + mainStyleCssPath + "'}); })});}); })(window.jQuery);";
        //setTimeout(function() {oHead.appendChild( oScript) }, 100);
        oHead.appendChild(oScript);
    });
}