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
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var params = {};
params.dfp = {};
params.dfp.isDFP = true;
params.dfp.clickUrlEsc = getParameterByName("click_url_esc");
params.dfp.cacheBuster = getParameterByName("cacheBuster");

var getParamFromUrl = function(name) {
	var getParam = getParameterByName(name);
	if ((getParam!==null) && (getParam!==undefined) && (getParam!=="")) {
		params[name] = getParam;
		return getParam;
	}
}

/*var domain = getParameterByName("domain");
if ((domain!==null) && (domain!==undefined) && (domain!=="")) {
	params.domain = domain;
}

//selectAdSet param
var SelectAdSet = getParameterByName("SelectAdSet");
if ((SelectAdSet!==null) && (SelectAdSet!==undefined) && (SelectAdSet!=="")) {
	params.SelectAdSet = SelectAdSet;
}*/

var domain = getParamFromUrl('domain');

var current_params = document.getElementById("probtn_additional_params");
if ((current_params!==null) && (current_params!==undefined)) {
	var json = JSON.parse(current_params.innerText);
	params = json;
}

var SelectAdSet = getParamFromUrl('SelectAdSet');
getParamFromUrl('CreativeId');
getParamFromUrl('UseGeoLocation');
getParamFromUrl('WaitForGeoLocation');

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
	console.log(ex);
}

if ((domain===null) || (domain===undefined) || (domain==="")) {
	domain = document.domain.replace("www.", "");
}

if ((domain === "babyblog.ru") || (domain === "m.babyblog.ru")) { //eception for babyblog
	if ((SelectAdSet!==null) && (SelectAdSet!==undefined) && (SelectAdSet!=="")) {
		loadJS('//cdn.viewst.com/includepb.min.js', function () {});
	} else {
		console.log("empty SelectAdSet at babyblog");
	}
} else {
	loadJS('//cdn.viewst.com/includepb.min.js', function () {});
}

})();