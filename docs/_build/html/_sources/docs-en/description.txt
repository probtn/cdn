.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _description:
 
General description of the button
==================================

Recieving button settings
----------------------------------
There are a few ways the button script gets the settings (in the settings priority):
 
* Settings are specified locally when the button is launched
* Settings are obtained (text conversion from a string in json) from div where ``id="probtn_additional_params"``
* Settings are obtained from the json file containing button settings (no settings request is sent to the server)
* Settings are obtained from the server (``admin.probtn.com``), the most popular and easy way


The list of used parameters and their description is available in the document Probtn web params

•	Brief description of communication with the settings server (``admin.probtn.com``)
--------------------------------------------------------------------------
When the button script is launched, the following events take place:

Zero initialization is activated when the button sends a settings request to admin.probtn.com. The settings are identified based on the site domain (in particular, among others the request transfers the parameter BundleID which contains the site domain automatically extracted from the ``document.domain``).

If settings are specified using methods 1 and 2 and the domain parameter with the domain identifier corresponding to an app from admin.probtn.com is set among others, the button script when requesting the server, transfers the indicated parameter and obtains its setings. This could be helpful when one button with the required settings is to be displayed on a numbrer of sites, or, on the contrary, when a number of adds is to be displayed on one site (here you can use a campaign in an app but it doesn't always work).

If an app (and its campaigns) are off, the server responds that the button is disabled and, consequently, it is not displayed and no further initialization is launched.

If an app with a specified bandle id domain does not exist, an error is returned and no further button initialization is activated either.

Integration with third-party services
----------------------------------
Documentation

* AdRiver - Integration with Adriver
* AdRiver  - Integration with AdRiver when the custom domain is specified
* AdRiver javascriptJavaScript - Integration with  AdRiver for the banner javascript/JavaScript
* AdFox - Integration with AdFox
* AdFox  - Integration with  AdFox when the custom domain is specified
* Probtn working with DFP Google ads - integration with DFP


Description of the used options
-------------------------------
The above cited integration types show that these combinations are often used

* http://cdn.probtn.com/includepb.min.js
* http://cdn.probtn.com/showinparent.js
* http://cdn.probtn.com/probtn_concat.js
* http://cdn.probtn.com/showinparent_concat.js

includepb.min.js
^^^^^^^^^^^^^^^^
The script adds necessary libraries on the page and initializes the launch of the button, if necessary.

showinparent.js 
^^^^^^^^^^^^^^^
The script adds necessary libraries on the page and initializes the launch of the button, if necessary.

For the script to be able to add includepb.min.js to the parent, the iframe and the parent must be on the same domain (otherwise, a cross domain policy file is needed). For this purpose, the instructions contain an article on creating an HTML page using the showinparent.js script.

probtn_concat.js
^^^^^^^^^^^^^^^^
The script adds necessary libraries on the page and initializes the launch of the button, if necessary.

All necessary buttons are added in this file and to its own jQuery version run with ``jQuery.noConflict (true)``

showinparent_concat.js 
^^^^^^^^^^^^^^^^^^^^^^
The script adds ``probtn_concat.js`` to the parent page (if the page with the ``probtn_concat.js`` code is already set as ``window.top``, the ``probtn_concat.js`` code is automatically added) 

For the script to be able to add  probtn_concat.js to the parent, the iframe and the parent must be on the same domain (otherwise, a cross domain policy file is needed). For this purpose, the instructions contain an article on creating an HTML page using the showinparent_concat.js script.




