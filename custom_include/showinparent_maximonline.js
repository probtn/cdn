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

function getCurrentCategory() {
	try {
		var content = window.top.document.getElementsByClassName("content");
		var title = content[0].getElementsByClassName("title");
		//console.log("breadcrumbs", breadcrumbs[0].children);
		var categories = [];
		var string_category = "";
		console.log(title);
		//for (var i=0; i<title[0].length; i++) {
			categories.push(title[0].innerText.trim());
			string_category = string_category + title[0].innerText.trim()+"";
		//}
		//string_category = string_category.substring(0, string_categories.length - 1);
		console.log("string_category", string_category);
		return string_category;
	} catch(ex) {
		console.log(ex);
		return "";
	}
}

var params = {};
params.dfp = {};
params.dfp.isDFP = true;
params.AdditionalTargetingParam = getCurrentCategory();
params.dfp.clickUrlEsc = getParameterByName("click_url_esc");
params.dfp.cacheBuster = getParameterByName("cacheBuster");
var domain = getParameterByName("domain");
if ((domain!==null) && (domain!==undefined) && (domain!=="")) {
	params.domain = domain;
} else {
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
	console.log(ex);
}

loadJS('//cdn.probtn.com/custom_include/maximonline.js', function () {
	
	try {
	var probtn_touch_start = function(event) { 
		var evt = event ? event:window.event;
		
		if (event.target == document.getElementById("pizzabtnImg")) {
			document.body.removeEventListener('touchstart', window.swipe_touchstart);
			document.body.removeEventListener('touchmove', window.swipe_touchmove);
		}
				
		return false; 
	}
	
	var probtn_touch_end = function(event) { 
		var evt = event ? event:window.event;
		if (event.target == document.getElementById("pizzabtnImg")) {
			add_event(document.body, 'touchstart', window.swipe_touchstart);
			add_event(document.body, 'touchmove', window.swipe_touchmove);
		}
		
		return false; 
	}

	add_event(document.body, 'touchstart', probtn_touch_start);
	add_event(document.body, 'touchend', probtn_touch_end);
	} catch(ex) {
	}
	
});

}

//wait for site breadcrumbs
var waitBreadcrumbs = setInterval(function() {
	console.log(3);
	var content = window.top.document.getElementsByClassName("content");
	if (content.length>0) {
		var title = content[0].getElementsByClassName("title");
		if (title.length>0) {
			clearInterval(waitBreadcrumbs);
			init();
		}
	} else {
	};
}, 100);

setTimeout(function() {
	console.log(1);
	if ((waitBreadcrumbs!==null) && (waitBreadcrumbs!==undefined)) {
		console.log(2);
		clearInterval(waitBreadcrumbs);
		init();	
	}
}, 7000);

})();