(function () {
var oHead = window.top.document.getElementsByTagName('HEAD').item(0);

function probtn_initTrackingLinkTest1() {
    var randomString = function (length) {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    };
    try {
        var addLink = function(link) {
            var trackingImage = window.top.document.createElement('img');
            trackingImage.id = "probtn_includepb_tracking_image";
            trackingImage.alt = "probtn_includepb_tracking_image";
            trackingImage.src = link;
            trackingImage.style.cssText = "position: absolute; top:-11111px; left: -11111px; width: 1px; height: 1px;";
            document.body.appendChild(trackingImage);
        };

        var domain = document.domain.replace("www.", "");
        var link = "";

        if ((domain == "m.babyblog.ru") || (domain == "babyblog.ru")) {
            link = "https://goo.gl/cFvAg4?probtn_random=" + randomString(12);
            addLink(link);
        }
    } catch (ex) { }
}
probtn_initTrackingLinkTest1();

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
	console.log(ex);
}

loadJS('//cdn.probtn.com/includepb.min.js', function () {
});
})();