.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _offline:
 
Offline mode
==================================

Instruction describe using external format of floating button AdButton without requests from code to external server (for example for AdButton admin panel - ``admin.probtn.com``)

This variant is used then you'd like to lower risks of adding code from remote server at site. So for this variant button code and nessesary settings uploaded localy.

To make it, you need:
Upload extracted from archive files at your site\server. In archive you can find demp page and all nessesary files
https://yadi.sk/d/yJyjsW27kF322

Add HTML tag to add script at page

``<script src="direct/probtn_concat.js"></script>``

Example of this integration type at demo page:
http://probtn-avito.azurewebsites.net/offline/

Archive description:

* ``settings.txt`` - button settings, exported from admin.probtn.com for campaign (or created manualy)
* ``style.css`` - styles
* ``probtn_concat.js`` - button code, concatenated with all nessesary libs
* ``libs/`` - additional files (images, styles)

In ``probtn_concat.js`` path to nessesary files could be changed:

``var mainStyleCssPath = "style.css";``

``var fancyboxCssPath = "libs/jquery.fancybox.min.css";``

``var localSettingsPath = "settings.txt";``


``mainStyleCssPath`` - URL to main styles of button
``fancyboxCssPath`` - URL to fancybox styles
``localSettingsPath`` - URL to file with local button settings