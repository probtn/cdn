.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _dsp:
 
Интеграция с DSP (на примере getintent)
==================================

Общее описание
----------------------------------

Для интеграции с DSP сервисами в первую очередь необходимо установить как именно будут показываться объявления\креативы, в частности в safeframe или в friendly frame\без iframe.

Для корректной работы кнопки необходим вариант показа объявлений внутри friendly frame или без iframe.

Если информация о способе показа недоступна, ее можно собрать вручную, используя код креатива и запуская его для различных сайтов\SSP - посредством трекинговых ссылок будет собираться информация о типе объявления, в котором показывается код, посредством чего можно исключить сайты и SSP с показом в safeFrame.

Пример кода для объявления в DSP
----------------------------------

Для реального запуска необходимо заменить в блоке ``#probtn_additional_params`` параметр ``domain`` с ``getintent_dsp`` на реальный идентификатор аппа из admin.probtn.com 

Также заменить в ``addLink("https://pixel.probtn.com/1/from-ref?pbdebug=getintent&DeviceUID=&localDomain="+document.domain.replace("www.", "")+"&daction=" + param + suf);`` ``pbdebug`` параметр с ``getintent`` на реальный идентификатор аппа из admin.probtn.com 

Или возможно воспользоваться сервисом для генерации кодов интеграции для автоматического создания кода с заданными параметрами (ссылка будет добавлена позднее после релиза сервиса).

.. code-block:: html

	<div id="probtn_content1">
	<div id="probtn_additional_params" style="display: none;">{ "domain": "getintent_dsp", "HideInFrame": false, "useGuidIframe": false}</div>

	</div>
	<script>
	var addLink = function(link) {
	            var trackingImage = window.self.document.createElement("img");
	            trackingImage.id = "probtn_getintent_includepb_tracking_image";
	            trackingImage.alt = "probtn_getintent_includepb_tracking_image";
	            trackingImage.src = link;
	            trackingImage.style.cssText = "position: absolute; top:-11111px; left: -11111px; width: 1px; height: 1px;";
	            document.body.appendChild(trackingImage);
	};
	var addSuperPixelLink = function(param) {
		console.log(param);
		var suf = "_ECLICK";
		addLink("https://pixel.probtn.com/1/from-ref?pbdebug=getintent&DeviceUID=&localDomain="+document.domain.replace("www.", "")+"&daction=" + param + suf);
		return true;
	}

	function loadJS(current, src, callback) {
	    var s = current.document.createElement("script");
	    s.src = src;
	    s.async = true;
	    s.onreadystatechange = s.onload = function () {
	        var state = s.readyState;
	        if (!callback.done && (!state || /loaded|complete/.test(state))) {
	            callback.done = true;
	            callback();
	        }
	    };
	    current.document.getElementsByTagName("head")[0].appendChild(s);
	}
	var r = {
	      NO_IFRAME: 0,
	      IFRAME: 1,
	      UNKNOWN: 2,
	      XD_IFRAME: 3
	};
	function checkIframe() {
	    try {
	      if (window.top == window) return "NO_IFRAME";
	      for (var a = window, f = 0; a.parent != a && 1E3 > f;) {
	        f++;
	        if (a.parent.document.domain != a.document.domain) return "XD_IFRAME";
	        a = a.parent
	      }
	      return "IFRAME"
	    } catch (n) {}
	    return "XD_IFRAME";
	}
	addSuperPixelLink(checkIframe() + "_" + "[[SSP]]" + "_" + "[[DOMAIN]]");

	if (window.top !== window.self) { 
		try {
			addSuperPixelLink("inIframe");

			var probtn_content1 = window.top.document.createElement("div");
			probtn_content1.id = "probtn_content1";
			probtn_content1.innerHTML = document.getElementById("probtn_content1").innerHTML;
			probtn_content1.style.cssText = "display: none;";
			window.top.document.body.appendChild(probtn_content1);
			
			loadJS(window.top, "https://cdn.probtn.com/probtn_concat.js", function() {
				addSuperPixelLink("probtn_concat_loaded_to_top");
			});
		} catch(ex) {
			console.log("cant go to top");
			console.log(ex);
			addSuperPixelLink("CantGo_Error_"+ ex.toString());
			addSuperPixelLink("CantGoToTopFromIframe");
		}
	} else {
		loadJS(window.self, "https://cdn.probtn.com/probtn_concat.js", function() {
			addSuperPixelLink("probtn_concat_loaded_to_self");
		});
	}
	</script>



Описание терминов
----------------------------------

safeFrame
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Iframe c url страницы где домен страницы отличается от домена страницы-родителя (на которой показывается данный iframe).

Соответственно в связи с `Same Origin Policy <http://example.com/>`_ из такой iframe страницы невозможно запустить код кнопки на странице-родителе.

Friendly frame
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Iframe с url страницы где домен страницы совпадает с доменом страницы родителя либо url iframe отсутствует.

И из такого iframe мы можем запустить код кнопки на странице родителе.

Без iframe
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Размещение кода непосредственно на странице родителе.