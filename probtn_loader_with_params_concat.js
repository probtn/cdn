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
})();