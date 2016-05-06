.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _probtn_events:
 
Button events
==================================

Description
----------------------------------

If you need to getbutton events (for example for collecting your own stats and analytics) you could register listener for event ``probtn_events``.

In this event in ``data`` field you'll find object with nessesary data and descriptions of event.

Object description
----------------------------------
Main data about event located at ``Statistic`` and и представлены в виде массива объектов, где ``name`` - event name ``value`` - event value.

Variants of button events
----------------------------------

Opened
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when button successfully initialized.

Showed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when button showed at page (after initialization).

Moved
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when button start moving by user.

ContentShowed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when content is opened in any ways.

ContentShowedDuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Duration of how long content was opened (for variants, when we could measure it).

Value in seconds (int).

MovedDuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Duration of how long button was in moving state, triggered then moving is over.

Value in seconds (int).

Closed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when button closed by user.

Hidded
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when button is hidden (in both ways - when it hidden automatically or by user).

ScrollZoneShowed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when scrollzone is shown or when scrollzone is changing to an other one.

VideoClicked
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
By default - 1.

This event triggered when user clicked on video (if for video set param with link, which we should open when make click on video).

Examples
----------------------------------

Exmaple of adding listener for event
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``document.addEventListener('probtn_events', function (e) {
                console.log("probtn_events", e.data);
                $("#eventsOutput").append("<p>"+JSON.stringify(e.data)+"</p>");
}, false);``

Object example
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``{"AZName":"","Statistic":[{"name":"Moved","value":1}]}``

demo-pages
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* http://demo.probtn.com/button_example3/probtnEvents/
