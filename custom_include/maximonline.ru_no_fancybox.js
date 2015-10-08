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

var loadProbtn = function() {
    jQuery.getScript(probtnPath, function () {
        jQuery(document).StartButton({
            isHPMD: isHPMD,
            hpmd: window.probtn_hpmd,
            domain: domain,
            mainStyleCss: mainStyleCssPath,
            fancyboxCssPath: fancyboxCssPath,
            fancyboxJsPath: fancyboxPath,
            jqueryPepPath: jquerypepPath
        })
    })
}

var loadFancybox = function () {
    var fancyboxFunction = null;
    try {
        fancyboxFunction = jQuery.fancybox;
        if ((fancyboxFunction!==null) && (fancyboxFunction!==undefined)) {
            fancyboxFunction = jQuery.fancybox.open;
        }
    } catch (ex) {
    }

    var mo_domain = document.domain.replace("www.", "");
    var mo_not_load_fb = ( mo_domain && mo_domain.indexOf('maximonline.ru') >= 0 );

    if (typeof fancyboxFunction == 'function' || mo_not_load_fb) {
        console.log('includepb, loading probtn');
        loadProbtn();
    } else {
        console.log('includepb, loading fancybox');
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

var isjQuery = window.jQuery;
if ((vernums[0]>0) && (vernums[1]>4)) {
} else { isjQuery = false; };

if (isjQuery) {
    if ($ == jQuery) {
        //jQuery(document).ready(function () {
            loadJqueryPep();
        //})
    } else {
        var oHead = document.getElementsByTagName('HEAD').item(0);

        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript["data-cfasync"] = "false";
        oScript.text = "jQuery.noConflict(); jQuery.getScript('" + jquerypepPath + "', function() { jQuery.getScript('" + fancyboxPath + "', function () { jQuery.getScript('" + probtnPath + "', function () { jQuery(document).StartButton({domain: '"+ domain +"', 'hpmd': window.probtn_hpmd, 'fancyboxCssPath': '" +fancyboxCssPath +"', 'isHPMD': " + isHPMD + ", 'mainStyleCss':'" + mainStyleCssPath + "'});});});}); ";
        oHead.appendChild(oScript);
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
    loadJS(jqueryPath, function () {
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript["data-cfasync"] = "false";
        oScript.text = "(function ($) {jQuery.noConflict(); jQuery.getScript('" + jquerypepPath + "', function() {jQuery.getScript('" + fancyboxPath + "', function () {jQuery.getScript('" + probtnPath + "', function () { jQuery(document).StartButton({domain: '"+ domain +"', 'hpmd': window.probtn_hpmd, 'fancyboxCssPath': '" + fancyboxCssPath + "', 'isHPMD': " + isHPMD + ", 'mainStyleCss': '" + mainStyleCssPath + "'}); })});}); })(window.jQuery);";
        //setTimeout(function() {oHead.appendChild( oScript) }, 100);
        oHead.appendChild(oScript);
    });
}
})();
