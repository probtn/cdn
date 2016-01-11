.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _hierarchy:
 
The hierarchy of entities of admin.probtn.com
==================================

Hierarchy
----------------------------------

.. image:: images/hierarchy/1.png

Would or wouldn't creatives be shown depend only from creative state (ON/OFF).

When some element higher in hierarchy turn off, state of child elements saved and all of them turned off too.

Then this element turn on back, child element what was originaly turned on become turn on again, and other elements stay in current state (off).

Examples
----------------------------------

Example 1
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Creatives group - ON

* Creative-1 -  ON
* Creative-2 - OFF

What creatives would be shown? Creative-1

Now turn off the group, and current status become:

* Creatives group - OFF
* Creative-1 - OFF
* Creative-2 - OFF

What creative would be shown? None.

Now turn on the group, get:

* Creatives group - ON
* Creative-1 - ON
* Creative-2 -OFF

What creative would be shown? Creative-1

Example 2
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Creatives group - ON
* Creative-1 - ON
* Creative-2 - OFF

What creative would be shown? Creative-1

Now turn on the group, get:

* Creatives group - OFF
* Creative-1 - OFF
* Creative-2 - OFF

What creative would be shown? None

Now turn on one of the creatives

* Creatives group    OFF
* Creative-1           OFF
* Creative-2           ON

What creative would be shown? Creative-2

Now turn on the group,

* Creatives group - ON
* Creative-1 - ON
* Creative-2 - ON

What creative would be shown? Creative-1, Creative-2