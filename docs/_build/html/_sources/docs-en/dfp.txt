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


Intergation with DFP - sync code
----------------------------------

Step 0
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add this code to your advertisement:

``<script src="//cdn.probtn.com/probtn_concat.js"></script>``

