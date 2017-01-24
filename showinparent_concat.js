(function () {

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

function getParameterByName(name) {
	try {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	} catch(ex) {
	}
}

var params = {};
params.dfp = {};
params.dfp.isDFP = true;
params.dfp.clickUrlEsc = getParameterByName("click_url_esc");
params.dfp.cacheBuster = getParameterByName("cacheBuster");
var domain = getParameterByName("domain");
if ((domain!==null) && (domain!==undefined) && (domain!=="")) {
	params.domain = domain;
}

//selectAdSet param
var SelectAdSet = getParameterByName("SelectAdSet");
if ((SelectAdSet!==null) && (SelectAdSet!==undefined) && (SelectAdSet!=="")) {
	params.SelectAdSet = SelectAdSet;
}

var paramsDiv = window.top.document.createElement('div');
paramsDiv.id = "probtn_additional_params";
paramsDiv.innerHTML = JSON.stringify(params);
paramsDiv.style.cssText = "display: none;";
window.top.document.body.appendChild(paramsDiv);

try {
	if ((window.frameElement!==null) && (window.frameElement!==undefined)) {
		window.frameElement.style.cssText = "display: none; border: 0px; width: 0px; height: 0px; margin: 0px; padding: 0px;";
	}
} catch (ex) {
}


loadJS('//cdn.probtn.com/probtn_concat.js', function () {
});

})();