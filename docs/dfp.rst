.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _dfp:
 
Интеграция с DFP
==================================

Для  такого рода интеграции, необходимо произвести следующие действия:
Создайте кампанию на https://admin.probtn.com


Интеграция с DFP - без safeframe
----------------------------------

Step 0
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Добавьте следующий код в ваше DFP объявление

``<script src="//cdn.probtn.com/showinparent_concat.js"></script>``

и не указывайте пункт "Показывать в SafeFrame"

.. image:: images/dfp/safeframe1.png

Для указания дополнительных параметров к коду объявления можно добавить блок c настройками кнопки (домен и кампания указаны для примера):

.. code-block:: html

	<div id="probtn_additional_params" style="display: none;">{ "domain": "example.com", "SelectAdSet": "campaign_id"}</div>

Такой код бдет выглядеть так:

.. code-block:: html

	<div id="probtn_additional_params" style="display: none;">{ "domain": "example.com", "SelectAdSet": "campaign_id"}</div>
	<script src="//cdn.probtn.com/showinparent_concat.js"></script>


Интеграция с DFP - c safeframe
----------------------------------

Step 1
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Создайте страницу, доступную по адресу с тем же доменом, где вы хотите показывать  кнопку.
Добавьте на страницу showinparent_concat.js ( Общее описание работы кнопки )

``<script src="//cdn.probtn.com/showinparent_concat.js"></script>``

Например:
 
.. code-block:: html

	<!DOCTYPE html>
	<html>
	<head lang="en">
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>probtn (hackpad)</title>
	</head>
	<body>
			<script src="//cdn.probtn.com/showinparent_concat.js"></script>
	</body>
	</html>


Step 2
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Создайте объявление с iframe со страницей, созданной на предыдущем шаге:

``<iframe src="//example.com/example_iframe_page.html?click_url_esc=%%CLICK_URL_ESC%%&cacheBuster=%%CACHEBUSTER%%" style="border: 0px; width: 0px; height: 0px; display: none;" />``

Url ``//example.com/example_iframe_page.html`` добавлен для примера, необходимо использовать свой путь.

Также возможно указать домен, в частности:

``<iframe src="//example.com/example_iframe_page.html?domain=nessasary_example_app_domain.test&click_url_esc=%%CLICK_URL_ESC%%&cacheBuster=%%CACHEBUSTER%%" style="border: 0px; width: 0px; height: 0px; display: none;"></iframe>``

Url ``//example.com/example_iframe_page.html`` добавлен для примера, необходимо использовать свой путь (до страницы созданной на шаге 1)

 Также значение GET параметра domain (для примера указано) ``nessasary_example_app_domain.test`` нужно заменить на необходимый домен (идентификатор), используемый в нужном аппе в admin.probtn.com

Указание кампании (опционально)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Также возможно указать идентификатор кампании, по которому кнопка будет показывать креативы только указанной кампании для аппа.
Для этого необходимо
 
Создать объявление с кодом
``<iframe  style="border: 0px; width: 0px; height: 0px; display: none;" src="//example.com/example_iframe_page.html?domain=nessasary_example_app_domain.test&SelectAdSet=565e021f99c27511100000d0"></iframe>``

Url //example.com/example_iframe_page.html добавлен для примера, необходимо использовать свой путь (до страницы созданной на шаге 1)
Значение GET параметра domain (для примера указано) nessasary_example_app_domain.test нужно заменить на необходимый домен (идентификатор), используемый в нужном аппе в admin.probtn.com

Значение GET параметра SelectAdSet (для примера указано) ``565e021f99c27511100000d0`` нужно заменить на идентификатор кампании (не нужно указывать идентификатор placement или creative)
Сам идентификатор можно найти в адресной строке, открыв страницу кампании.

.. image:: images/adriver/adriver2_step3_2.png

