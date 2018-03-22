function callbackFunction(hypeDocument, element, event) {
    setTimeout(function () {
      window.top.postMessage({ "command": "probtn_creative_loaded_message" }, "*");
    }, 100);
}

if ("HYPE_eventListeners" in window === false) {
         window.HYPE_eventListeners = Array();
}

window.HYPE_eventListeners.push({
    "type": "HypeSceneLoad",
    "callback": callbackFunction
});
