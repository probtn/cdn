var mainStyleCssPath = "//cdn.probtn.com/style.css";
var jquerypepPath = "//probtnexample1.azurewebsites.net/jquerypep.js";
//"//cdn.jsdelivr.net/jquery.pep/0.6.3/jquery.pep.min.js";
var fancyboxPath = "//cdn.jsdelivr.net/fancybox/2.1.5/jquery.fancybox.min.js";
var fancyboxCssPath = "//cdn.probtn.com/libs/jquery.fancybox.min.css";
var probtnPath = "//probtnexample1.azurewebsites.net/probtn2.js";
var jqueryPath = '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js';
var isServerCommunicationEnabled = true;
var useLocalFileSettings = false;
var localSettingsPath = "settings.json";
var isHPMD = false;
try {
	window.probtn_hpmd = hpmd;
} catch(ex) {
	window.probtn_hpmd = null;
}

var loadProbtn = function() {
    jQuery.getScript(probtnPath, function () {
		
		var oldUnbind = jQuery.fn.unbind;	
		
		jQuery.fn.unbind = function(types,fn) {
			if (jQuery(this).get("0")==jQuery(document).get("0")) {
				console.log("on document unbind");
				if (types=="touchmove touchend") {
					return false;
				}
			}
			
			try {
				return this.off(types, null, fn); }
			catch(ex) {
				console.log(ex);
				return false;
			}
		}
		
        jQuery(document).StartButton({
            mainStyleCss: mainStyleCssPath,
            isHPMD: isHPMD,
			hpmd: window.probtn_hpmd,
            fancyboxCssPath: fancyboxCssPath
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
        jQuery(document).ready(function () {
            loadJqueryPep();
        })
    } else {
        var oHead = document.getElementsByTagName('HEAD').item(0);

        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript["data-cfasync"] = "false";
        oScript.text = "jQuery.noConflict(); jQuery(document).ready(function() { jQuery.getScript('" + jquerypepPath + "', function() { jQuery.getScript('" + fancyboxPath + "', function () { jQuery.getScript('" + probtnPath + "', function () { jQuery(document).StartButton({'hpmd': window.probtn_hpmd, 'fancyboxCssPath': '" +fancyboxCssPath +"', 'isHPMD': " + isHPMD + ", 'mainStyleCss':'" + mainStyleCssPath + "'});});});});});";
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
        oScript.text = "(function ($) {jQuery.noConflict(); jQuery(document).ready(function() {jQuery.getScript('" + jquerypepPath + "', function() {jQuery.getScript('" + fancyboxPath + "', function () {jQuery.getScript('" + probtnPath + "', function () {jQuery(document).ready(function($){$(document).StartButton({'hpmd': window.probtn_hpmd, 'fancyboxCssPath': '" + fancyboxCssPath + "', 'isHPMD': " + isHPMD + ", 'mainStyleCss': '" + mainStyleCssPath + "'});});})});});});})(window.jQuery);";
        //setTimeout(function() {oHead.appendChild( oScript) }, 100);
        oHead.appendChild(oScript);
    });
}