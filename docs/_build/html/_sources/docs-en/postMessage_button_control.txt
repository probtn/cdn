.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _postMessage_button_control:
 
Control button using ``postMessage`` message from iframe
==================================

You can need to control probtn from iframe (for example from shown page in modal window or iframe creative inside button) in case you need some reaction to action in iframe (for example close modal window, hiding button, etc).

Below is description of object format and list of available commands.

Object format in message
----------------------------------

Example:

``{command: "command_value", size: {width: 100, height: 100}, value: "buy" }``

Instead of ``command_value`` set one of available commands below. ``Size`` used only with ``button_image_iframe_size``, where we set area sizes.

Message variants
----------------------------------

probtn_start_content_showed_timer
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message to start timer of how long user watch content.

probtn_stop_content_showed_timer
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message to stop timer of how long user watch content and sending stats abut it to admin.probtn.com

probtn_close
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Close probtn (including modal window, close area, active zones, etc.) end sending stats to admin.probtn.com

probtn_hide
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Hide button (only button would be hide)

probtn_hide_content
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Hide modal window

button_image_iframe_disable_overlay
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Скрыть overlay поверх iframe креатива для того чтобы дать пользователю возможность взаимодействовать со страницей внутри кнопки.

button_image_iframe_done
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Show\hide iframe creative

probtn_restore_button_size
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Restore initial button size

button_image_iframe_size
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Set overlay sizes under button iframe-creative. In message also send new overlay size.

probtn_change_content_url
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Replace ContentURL of button to value from ``value``

probtn_performed_action
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Send message about actions inside iframe.
In field ``value`` possible to set action type. If it wouldn't set, then by default would be used variant ``buy``

Example:

``window.top.postMessage({ command: 'probtn_performed_action' }, '*');``

``window.top.postMessage({ command: 'probtn_performed_action', value: 'booked' }, '*');``

Example of sending message
----------------------------------

``window.top.postMessage({ command: "probtn_close" }, '*');``