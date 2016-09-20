.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _hpmd:
 
Передача сообщений об этапах анимации
==================================

Передача сообщений посредством postMessage в iframe-креатив кнопки бывает необходима для реагирования на разилчные этапы анимации.

Формат объекта
----------------------------------

Пример:
``{message: "message_value"}``


rolloutAnimation
----------------------------------

probtn_page_scroll
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Сообщение о том что был произведен скролл страницы.

forwardAndStopAnimation
----------------------------------

probtn_forwardAndStop_start
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Передача сообщения о начале анимации перемещения кнопки

probtn_forwardAndStop_stop
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Передача сообщения о завершении анимации перемещения кнопки

forwardAndBackAnimation
----------------------------------

probtn_forwardAndBack_start
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Передача сообщения о начале анимации перемещения кнопки

probtn_forwardAndBack_stop
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Передача сообщения о завершении анимации перемещения кнопки

probtn_forwardAndBack_reverse
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Передача сообщения о начале анимации возвратного перемещения кнопки

probtn_forwardAndBack_start_reverse
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Передача сообщения о начале анимации возвратного перемещения кнопки

probtn_forwardAndBack_stop_reverse
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Передача сообщения о завершении анимации возвратного перемещения кнопки

forwardStopAndAwayAnimation
----------------------------------

opacityAnimation
----------------------------------

lookoutAnimation
----------------------------------

cornerToCornerAnimation
----------------------------------


