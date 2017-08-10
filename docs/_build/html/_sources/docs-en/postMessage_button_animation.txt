.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _hpmd:
 
Send message about animation steps
==================================

Send message using ``postMessage`` in iframe-creative, could be used to react for different animation steps.

Object's format
----------------------------------

Example:
``{message: "message_value"}``


rolloutAnimation
----------------------------------

probtn_page_scroll
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Message about page was scrolled.

forwardAndStopAnimation
----------------------------------

probtn_forwardAndStop_start
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about begining of moving step of animation.

probtn_forwardAndStop_stop
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about finished animation of moving.

forwardAndBackAnimation
----------------------------------

probtn_forwardAndBack_start
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about begining of moving step of animation.

probtn_forwardAndBack_stop
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about finished animation of moving.

probtn_forwardAndBack_reverse
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about start of back moving step of animation.

probtn_forwardAndBack_start_reverse
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about start of back moving step of animation.

probtn_forwardAndBack_stop_reverse
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about stop of back moving step of animation.

forwardStopAndAwayAnimation
----------------------------------

opacityAnimation
----------------------------------

lookoutAnimation
----------------------------------

cornerToCornerAnimation
----------------------------------


