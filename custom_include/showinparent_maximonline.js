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
} else {
	//params.domain = 'm.maximonline.ru';
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

})();