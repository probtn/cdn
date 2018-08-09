(function() {
function loadJS(current, src, callback) {
    var s = current.document.createElement("script");
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function () {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    current.document.getElementsByTagName("head")[0].appendChild(s);
}
var addLink = function(link) {
            var trackingImage = window.self.document.createElement("img");
            trackingImage.id = "probtn_getintent_includepb_tracking_image";
            trackingImage.alt = "probtn_getintent_includepb_tracking_image";
            trackingImage.src = link;
            trackingImage.style.cssText = "position: absolute; top:-11111px; left: -11111px; width: 1px; height: 1px;";
            document.body.appendChild(trackingImage);
};
var r = {
      NO_IFRAME: 0,
      IFRAME: 1,
      UNKNOWN: 2,
      XD_IFRAME: 3
};
function checkIframe() {
    try {
      if (window.top == window) return "NO_IFRAME";
      for (var a = window, f = 0; a.parent != a && 1E3 > f;) {
        f++;
        if (a.parent.document.domain != a.document.domain) return "XD_IFRAME";
        a = a.parent
      }
      return "IFRAME"
    } catch (n) {}
    return "XD_IFRAME";
}
var addSuperPixelLink = function(param) {
	console.log(param);
	var suf = "_ECLICK";
	var out_param = param + suf;
	addLink("https://pixel.probtn.com/1/from-ref?pbdebug=getintent&DeviceUID=&localDomain="+document.domain.replace("www.", "")+"&daction=" + out_param);
	out_param = document.domain.replace("www.", "") + "_" + param + suf;
	return true;
}
addSuperPixelLink(checkIframe() + "_" + "doublebanner" + "_" + "otm");

if (window.top !== window.self) { 
	try {
		var probtn_content1 = window.top.document.createElement("div");
		probtn_content1.id = "probtn_content1";
		probtn_content1.innerHTML = document.getElementById("probtn_content1").innerHTML;
		probtn_content1.style.cssText = "display: none;";
		window.top.document.body.appendChild(probtn_content1);
		
		loadJS(window.top, "https://cdn.probtn.com/probtn_concat.js", function() {
		});
	} catch(ex) {
		console.log("cant go to top");
		console.log(ex);
	}
} else {
	loadJS(window.self, "https://cdn.probtn.com/probtn_concat.js", function() {
	});
}

var runBanner = function(param, name) {
	if ((checkIframe() === param)) {
		var settings_banner = document.getElementById(name);
		if ((settings_banner!==null) && (settings_banner!==undefined)) {
			document.getElementById("probtn_additional_params").innerHTML = settings_banner.innerHTML;
			loadJS(window.self, "https://cdn.probtn.com/probtn_concat.js", function() {
			});
		} else {
			console.log("no " + name + " for " + param);
		}
	}
}
runBanner("XD_IFRAME", "probtn_additional_params_banner_safeframe");
runBanner("IFRAME", "probtn_additional_params_banner_iframe");

})();