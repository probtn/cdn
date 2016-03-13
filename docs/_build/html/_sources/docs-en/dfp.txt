.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _dfp:
 
Probtn - working with DFP Google ads
==================================

To use the button in the Google DFP container you need to make this steps:

Create campaign https://admin.probtn.com

Intergation with DFP - async code
----------------------------------

Step 1
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a page on the domain where the button will be displayed. (This page used in ad to exit dfp iframe and add button code to parent page).

On this page add the script:

``<script src="//cdn.probtn.com/showinparent.js"></script>``

If you'd like to use concatenated script which do not interfere with jQuery and other plugins use

``<script src="//cdn.probtn.com/showinparent_concat.js"></script>``

E.g.:

.. code-block:: html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        <script src="//cdn.probtn.com/showinparent_concat.js"></script>
    </body></html>


Step 2
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create an ad with content like this:

``<iframe src="//example.com/example_iframe_page.html?click_url_esc=%%CLICK_URL_ESC%%&cacheBuster=%%CACHEBUSTER%%" style="border: 0px; width: 0px; height: 0px; display: none;" />``

Url ``//example.com/example_iframe_page.html`` is added by example, you should use your own path

Also you can set domain:

``<iframe src="//example.com/example_iframe_page.html?domain=nessasary_example_app_domain.test&click_url_esc=%%CLICK_URL_ESC%%&cacheBuster=%%CACHEBUSTER%%" style="border: 0px; width: 0px; height: 0px; display: none;"></iframe>``

Where GET param ``domain`` (for example) ``nessasary_example_app_domain.test`` should be replaced to nessesary domain, used in app in admin.probtn.com

Set campaign (optional)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It's possible to use campaign id, so probtn would show creatives only from selected campaign fro app.
To do so, you should:
 
Create ad with code

``<iframe style="border: 0px; width: 0px; height: 0px; display: none;"  src="//example.com/example_iframe_page.html?domain=nessasary_example_app_domain.test&SelectAdSet=565e021f99c27511100000d0"></iframe>``

Url //example.com/example_iframe_page.html добавлен для примера, is an example, use your own path (to the page created on step 1)

Also value of GET param domain (for example) ``nessasary_example_app_domain.test`` should be replaced on nessesary (id), used in nessesary app in admin.probtn.com

Value of GET param SelectAdSet (for example) ``565e021f99c27511100000d0`` should be replaced on nessesary campaign id (don't use placement or creative id).

Campaign ID could be found  at url, if you open campaign page at admin.probtn.com.

.. image:: images/adriver/adriver2_step3_2.png

Intergation with DFP - sync code
----------------------------------

Step 0
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add this code to your advertisement:

``<script src="//cdn.probtn.com/probtn_concat.js"></script>``

