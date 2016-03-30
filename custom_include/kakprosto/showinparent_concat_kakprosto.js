(function () {

var init = function() {

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

function getCurrentCategories() {
	try {
		var breadcrumbs = window.top.document.getElementsByClassName("breadcrumb__list");
		//console.log("breadcrumbs", breadcrumbs[0].children);
		var categories = [];
		var string_categories = "";
		for (var i=0; i<breadcrumbs[0].children.length; i++) {
			categories.push(breadcrumbs[0].children[i].innerText.trim());
			string_categories = string_categories + breadcrumbs[0].children[i].innerText.trim()+",";
		}
		string_categories = string_categories.substring(0, string_categories.length - 1);
		//console.log("categories", categories);
		return string_categories;
	} catch(ex) {
		console.log(ex);
		return "";
	}
}

var params = {};
params.dfp = {};
params.dfp.isDFP = true;
//console.log("string_categories", getCurrentCategories());
params.AdditionalTargetingParam = getCurrentCategories();
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
	window.frameElement.style.cssText = "display: none; border: 0px; width: 0px; height: 0px; margin: 0px; padding: 0px;";
} catch (ex) {
}

////cdn.probtn.com/probtn_concat.js
loadJS('//cdn.probtn.com/probtn_concat.js', function () {
});

};

if (document.readyState === 'complete') {
   init();
} else {
	window.onload = init();
}

})();