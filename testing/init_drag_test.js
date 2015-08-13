
var bililiteRange = '//probtnexample1.azurewebsites.net/testing/libs/bililiteRange.js';
var simulatejs = '//probtnexample1.azurewebsites.net/testing/libs/jquery.simulate.js';
var simulatejsext = '//probtnexample1.azurewebsites.net/testing/src/jquery.simulate.ext.js';
var dragndrop = '//probtnexample1.azurewebsites.net/testing/src/jquery.simulate.drag-n-drop.js';

var oHead = window.top.document.getElementsByTagName('HEAD').item(0);
function loadJS(src, callback) {
    try {
        var s = window.top.document.createElement('script');
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function() {
            var state = s.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                callback.done = true;
                callback();
            }
        };
        window.top.document.getElementsByTagName('head')[0].appendChild(s);
    } catch (ex) {
        console.log(ex);
    }
}

function checkButtonBrag(callback) {
	$('#probtn_closeButton').show();
	$('#probtn_button').simulate("drag-n-drop", {dragTarget: $('#probtn_closeButton'), clickToDrag: false, interpolation: {stepCount: 100, duration: 1000} }, function() {
		console.log('drag finished');
		/*$('#probtn_button').simulate("drop", {}, function() {
			console.log('drop');
		});*/
	});
	//
	//dx: 300, dy: 300	
	//$('#probtn_button').simulate("drag", {dragTarget: document.getElementById('probtn_closeButton')});
	callback();
}

function probtn_start_test(callback1) {
	var callback = callback1;
	//load libs
	loadJS(bililiteRange, function() {
		loadJS(simulatejs, function() {
			loadJS(simulatejsext, function() {
				loadJS(dragndrop, function() {
					checkButtonBrag(function() {
						callback();
					});
				});
			});
		});
	});
}

probtn_start_test(function() {
	return true;
});

