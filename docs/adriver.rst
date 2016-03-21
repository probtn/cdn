.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _adriver:
 
Интеграция с AdRiver
==================================

Интеграция с AdRiver с модифицированным кодом
----------------------------------
Для  такого рода интеграции, необходимо произвести следующие действия:

Step0
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Создать кампанию  (или апп с необходимым доменом, будь то реальный домен или домен-идентификатор  аппа)
 
.. image:: images/adriver/adriver1_step0.png

Step1
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Создайте  страницу, доступную по адресу с тем же доменом, где вы хотите показывать  кнопку.
Добавьте  на страницу showinparent_concat.js ( Общее описание работы кнопки )
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
 
Step2
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Создать AjaxJS (Generic AjaxJS) баннер

.. image:: images/adriver/adriver2_step1.png

Step3
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Загрузить код баннера (нажав на ссылку "Загрузить баннер")

.. image:: images/adriver/adriver2_step3.png

Пример кода для generic ajax баннера https://www.dropbox.com/s/vo4deq8g9e9yynp/generic_ajaxjs.zip?dl=0

.. image:: images/adriver/adriver2_step3_1.png

Step 4
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
В нем необходимо изменить в index.html путь до showinparent.html (создан на шаге 1)

``<iframe style="border: 0px; width: 0px; height: 0px; display: none;" src="http://example.com/showinparent.html"></iframe>``

или

``<iframe style="border: 0px; width: 0px; height: 0px; display: none;" src="http://example.com/showinparent.html?domain=nessasary_example_app_domain.test"></iframe>``

Url ``//example.com/showinparent.html?domain=nessasary_example_app_domain.test`` добавлен для примера, необходимо использовать свой путь (до страницы созданной на шаге 1)

GET параметр domain опционален, и необходим в случае, если нужно жестко задать домен, для которого будут браться настройки из admin.probtn.com

 Также значение GET параметра domain (для примера указано) ``nessasary_example_app_domain.test`` нужно заменить на необходимый домен (идентификатор), используемый в нужном аппе в admin.probtn.com
 
Указание кампании (опционально)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Также возможно указать идентификатор кампании, по которому кнопка будет показывать креативы только указанной кампании для аппа.

Для этого необходимо создать объявление с кодом

``<iframe style="border: 0px; width: 0px; height: 0px; display: none;"  src="//example.com/example_iframe_page.html?domain=nessasary_example_app_domain.test&SelectAdSet=565e021f99c27511100000d0"></iframe>``

Url //example.com/example_iframe_page.html добавлен для примера, необходимо использовать свой путь (до страницы созданной на шаге 1)
Значение GET параметра domain (для примера указано) nessasary_example_app_domain.test нужно заменить на необходимый домен (идентификатор), используемый в нужном аппе в admin.probtn.com

Значение GET параметра SelectAdSet (для примера указано) ``565e021f99c27511100000d0`` нужно заменить на идентификатор кампании (не нужно указывать идентификатор placement или creative)
Сам идентификатор можно найти в адресной строке, открыв страницу кампании.

.. image:: images/adriver/adriver2_step3_2.png


Интеграция с AdRiver (баннер javascript/JavaScript)
----------------------------------

Для  такого рода интеграции, необходимо произвести следующие действия:

Step0
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Создать кампанию  (или апп с необходимым доменом, будь то реальный домен или домен-идентификатор  аппа) 

.. image:: images/adriver/adriver1_step0.png

Step1
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Создать ``special -> javascript -> JavaScript`` баннер

.. image:: images/adriver/adriver1_step1.png

Step2
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Загрузить код баннера (нажав на ссылку "Загрузить баннер")

.. image:: images/adriver/adriver1_step2.png

В качестве кода возможно использовать объединенный probtn скрипт, вызываемый ( http://cdn.probtn.com/showinparent_concat.js ):
( :ref:`description` )

.. code-block:: javascript
	
	(function () {
	var oHead = window.top.document.getElementsByTagName('HEAD').item(0);

	function loadJS(src, callback) {
		var s = window.top.document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function () {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		window.top.document.getElementsByTagName('head')[0].appendChild(s);
	}

	function getParameterByName(name) {
			try {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			} catch(ex) {

			}
	}

	var params = {};
	params.dfp = {};
	params.dfp.isDFP = true;
	params.dfp.clickUrlEsc = getParameterByName("click_url_esc");
	params.dfp.cacheBuster = getParameterByName("cacheBuster");
	var domain = getParameterByName("domain");
	if ((domain!==null) && (domain!==undefined) && (domain!=="")) {
			params.domain = domain;
	}
	//selectAdSet param
	var SelectAdSet = getParameterByName("SelectAdSet");
	if ((SelectAdSet!==null) && (SelectAdSet!==undefined) && (SelectAdSet!=="")) {
			params.SelectAdSet = SelectAdSet;
	}

	var paramsDiv = window.top.document.createElement('div');
	paramsDiv.id = "probtn_additional_params";
	paramsDiv.innerHTML = JSON.stringify(params);
	paramsDiv.style.cssText = "display: none;";
	window.top.document.body.appendChild(paramsDiv);

	loadJS('//cdn.probtn.com/probtn_concat.js', function () {
	});
	})();



