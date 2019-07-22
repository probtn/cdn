var customTrackingEvents = function (tracking) {

    var trackingObject = {};

    if (tracking) {
        trackingObject.trackingData = tracking;
    } else {
        trackingObject.trackingData = {};
    }
    

    /** 
     * Generate random string with given length
     */
    trackingObject.randomString = function (length) {
        return Math.round(
            Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
        )
            .toString(36)
            .slice(1);
    };
    /**
     * Replace one of placeholders with random value to prevent caching
     */
    trackingObject.replaceRandom = function (contentURL) {
        var output = contentURL.replace(/\[RANDOM\]/g, this.randomString(12));
        var currentTimestamp = new Date().getTime();

        output = output.replace(/\[timestamp\]/g, currentTimestamp);
        output = output.replace(/\[TIMESTAMP\]/g, currentTimestamp);

        output = output.replace(/\%random\%/g, this.randomString(12));
        output = output.replace(/\%RANDOM\%/g, this.randomString(12));

        return output;
    };
    /**
     * Add tracking link on page
     */
    trackingObject.addLink = function (link) {
        link = this.replaceRandom(link);
        var trackingImage = document.createElement("img");
        trackingImage.id = "viewst_tracking_image_" + this.randomString(12);
        trackingImage.alt = "viewst_tracking_image";
        trackingImage.style.cssText =
            "position: absolute; top:-11111px; left: -11111px; width: 1px; height: 1px;";
        document.body.appendChild(trackingImage);

        var newImg = new Image();
        newImg.onload = function () {
            trackingImage.src = this.src;
        };
        newImg.src = link;
    };

    /**
     * Track one off named events
     */
    trackingObject.trackEvent = function (name) {
        console.log("trackEvent", name);
        if (this.trackingData[name]) {
            var currentTrackings = this.trackingData[name];
            //if it is array of links
            if (Array.isArray(currentTrackings)) {
                for (var i=0; i<currentTrackings.length; i++) {
                    this.addLink(currentTrackings[i]);
                }
            }
            if (typeof currentTrackings === "string") {
                this.addLink(currentTrackings);
            }
        }
    }

    return trackingObject;
}