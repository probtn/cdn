(function () {
	var oHead = window.top.document.getElementsByTagName('HEAD').item(0);

	/**
	 * load js script to top or current page
	 * @param  {[type]}   src         [description]
	 * @param  {Function} callback    [description]
	 * @param  {[type]}   windowPlace [description]
	 * @return {[type]}               [description]
	 */
	function loadJS(src, callback, windowPlace) {
		if ((windowPlace===undefined) || (windowPlace ===null)) {
			windowPlace = window.top;
		}
	    var s = windowPlace.document.createElement('script');
	    s.src = src;
	    s.async = true;
	    s.onreadystatechange = s.onload = function () {
	        var state = s.readyState;
	        if (!callback.done && (!state || /loaded|complete/.test(state))) {
	            callback.done = true;
	            callback();
	        }
	    };
	    windowPlace.document.getElementsByTagName('head')[0].appendChild(s);
	}
	/**
	 * [getParameterByName description]
	 * @param  {[type]} name [description]
	 * @return {[type]}      [description]
	 */
	function getParameterByName(name) {
		try {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		} catch(ex) {
		}
	}
	/**
	 * Make jsonp request
	 * @param  {[string]}   url      [request url]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	function jsonp(url, callback) {
	    var callbackMethod = 'callback_' + new Date().getTime();

	    var script = document.createElement('script');
	    script.src = url + '&callback='+callbackMethod;
	    //'https://jsonplaceholder.typicode.com/users/1?callback='+callbackMethod;

	    document.body.appendChild(script);

	    window[callbackMethod] = function(data){
	        delete window[callbackMethod];
	        document.body.removeChild(script);
	        console.log("jsonp data", data);

	        callback(data);
	    }
	}

	/**
	 * Check - should we load probtn script
	 * @param  {[type]}   domain   [domain]
	 * @param  {Function} callback [callback is called if we should load probtn script]
	 * @return {[type]}            [none]
	 */
	function checkApps(domain, callback) {
		jsonp("https://admin.viewst.com/1/functions/checkApps?BundleID=" + domain + 
			"&X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b", function(answer) {
			
			function checkAndRunPassback(result) {
				if (result.PassbackCustomCode) {
					var passbackCustomCode = result.PassbackCustomCode;

					loadJS("https://cdn.viewst.com/libs/postscribe/htmlParser.js", function() {
                      loadJS("https://cdn.viewst.com/libs/postscribe/postscribe.js", function() {

                      	var passbackCodeSelector = "viewst_additionalItemsContainer";
						var passbackCodeBlock = window.document.createElement('div');
							passbackCodeBlock.id = passbackCodeSelector;
							passbackCodeBlock.innerHTML = '';
							passbackCodeBlock.style.cssText = "display: none;";
							window.document.body.appendChild(passbackCodeBlock);

                        postscribe('#'+passbackCodeSelector, '' + passbackCustomCode + '');

						//ProBtnControl.statistics.SendStatisticsData("performedAction", "passback_added");
						//make request about passback added by hand
						jsonp("https://admin.viewst.com/1/functions/updateUserStatistic?BundleID="+ domain
							+"&DeviceType=web&Version=showinparent&AZName="+ 
							"&log={%22type%22:%22probtnCID%22,%22cid%22:%221545081288113-1692533611%22}"+
							"&DeviceUID=showinparent&DeviceCUID=showinparent"+
							"&localDomain=window.domain"+
							"&Statistic={%22performedAction%22:%20%22passback_added%22}"+
							"&X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&Location[Longitude]=0&Location[Latitude]=0"+
							"&ScreenResolutionX=0&ScreenResolutionY=0&retina=0"+
							"&ConnectionSpeed=10240&AdditionalTargetingParam=&ButtonFromInitDuration=0"+
							"&SessionID=0&OriginalReferer=&DAPROPS=CacheBuster=k8r9isvwwg00", function (data) {
							console.log("passback data", data);
						});
                      }, window.self);
                    }, window.self);

                  	//https://admin.viewst.com/1/functions/updateUserStatistic?BundleID=vesti.ru&DeviceType=web&Version=1.40.1814_02112017_dev&AZName=&log={%22type%22:%22probtnCID%22,%22cid%22:%221545081288113-1692533611%22}&DeviceUID=1545221288586-149284247&DeviceCUID=1545081288113-1692533611&localDomain=vesti.ru&Statistic={%22performedAction%22:%20%22passback_added%22}&X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&Location[Longitude]=0&Location[Latitude]=0&ScreenResolutionX=864&ScreenResolutionY=1536&retina=1&ConnectionSpeed=10240&AdditionalTargetingParam=&ButtonFromInitDuration=0.09&SessionID=154522129241814928424789ff7qzkkg00&OriginalReferer=&DAPROPS=CacheBuster=k8r9isvwwg00&callback=jQuery19109359166495192062_1545221285959&_=1545221285961
				}
			}

			var result = answer.result;
			if (result) {
				if (result.Active) {
					callback();
				} else {
					//if we have passback				
					checkAndRunPassback(answer);
				}
			} else {
				//don't active or don't exists
				//if we have passback	
				checkAndRunPassback(answer);
			}
		});
	}

	var params = {};

	var current_params = document.getElementById("probtn_additional_params");
	if ((current_params!==null) && (current_params!==undefined)) {
		var json = JSON.parse(current_params.innerText);
		params = json;
	}

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

	var domain = getParamFromUrl('domain');
	var SelectAdSet = getParamFromUrl('SelectAdSet');
	getParamFromUrl('CreativeId');
	getParamFromUrl('UseGeoLocation');
	getParamFromUrl('WaitForGeoLocation');

	if ((domain===null) || (domain===undefined) || (domain==="")) {
		domain = document.domain.replace("www.", "");
	}


	/**
	 * Check if we should load probtn 
	 */
	checkApps(domain, function(data) {
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

		if ((domain === "babyblog.ru") || (domain === "m.babyblog.ru")) { //eception for babyblog
			if ((SelectAdSet!==null) && (SelectAdSet!==undefined) && (SelectAdSet!=="")) {
				loadJS('//cdn.probtn.com/probtn_concat.js', function () {});
			} else {
				console.log("empty SelectAdSet at babyblog");
			}
		} else {
			loadJS('//cdn.probtn.com/probtn_concat.js', function () {});
		}
	});

})();