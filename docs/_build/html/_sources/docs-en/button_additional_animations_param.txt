.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _hpmd:
 
Additional animation button params
==================================

Using additional animation params, set in animation name using ``_`` separators give possibility to set animation directions, duration of separate animation steps and so on.

Animations list
----------------------------------

* ``opacity``
* ``rollout``
* ``lookout``
* ``forwardAndBack``
* ``forwardStopAndAway``
* ``cornerToCorner``
* ``forwardAndStop``

opacity
----------------------------------

Format: ``opacity_<end_opacity_value>``

Example: ``opacity_0.3``

rollout
----------------------------------

Format: ``rollout_<start_position>_<percent_of_button_rollout>``

Example: ``rollout_left_70``

<start_position>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Variants:

* ``left``
* ``right``

<percent_of_button_rollout>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Percent from page width on which button would max move out.

lookout
----------------------------------

Format: ``lookout_<start_position>_<percent_of_button_lookout>``

Example: ``lookout_left_70``

<start_position>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Variants:

* ``left``
* ``right``

<percent_of_button_lookout>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Percent from button width at which button would look out.

cornerToCorner
----------------------------------

No additional params.

forwardStopAndAway
----------------------------------

Format: ``forwardStopAndAway_<start_position>``

Example: ``forwardStopAndAway_right``

<start_position>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Variants:

* ``left``
* ``right``

forwardAndStop
----------------------------------

Format: ``forwardAndStop_<start_position>_<first_step_duration>_<additional_mode>``

Exmaple: ``forwardAndStop_right_2000``

<start_position>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Variants:

* ``left``
* ``right``

<first_step_duration>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Duration of button moving from one side of the screen to other side, in ms

<additional_mode>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Variants:

* ``maximizeButton`` - setting button size to the screen size when button move would be finished

 forwardAndBack
----------------------------------

Format: `` forwardAndBack_<start_position>_<pauseDuration>_<stopDuration>``

Example: `` forwardAndBack_right_2000``

<start_position>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Variants:

* ``left``
* ``right``

<pauseDuration>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Duration of the pause (in ms) after first button move to other side of the screen

<stopDuration>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Duration of the pause before minimizing ``#probtn_wrapper``