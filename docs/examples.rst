.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _examples:

Примеры режимов работы кнопки
==================================

На данной странице описаны основные режимы работы кнопки и приведены примеры их поведения.

Плавающая кнопка по умолчанию
----------------------------------

Кнопка по умолчанию - с возможностью передвигать ее по экрану, закрытием при наведении и отпускании на облость закрытия (корзина) и открытием рекламной страницы по нажатию на кнопку.

.. raw:: html

    <div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://probtnlandings1.azurewebsites.net/stand/iframe.html?json=%7B%22ContentURL%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FaAitO_JsOEE%3Frel%3D0%26autoplay%3D1%22%2C%22ButtonIframeInitialSize%22%3A%7B%22W%22%3A200%2C%22H%22%3A200%7D%2C%22ButtonImage%22%3A%22https%3A%2F%2Fcdn.probtn.com%2Fiframe_buttons%2Fprobtn%2Fprobtn.html%22%2C%22ButtonImageType%22%3A%22iframe%22%2C%22ButtonPosition%22%3A%7B%22X%22%3A0.85%2C%22Y%22%3A0.85%7D%2C%22ButtonSize%22%3A%7B%22W%22%3A120%2C%22H%22%3A120%7D%2C%22CloseImage%22%3A%22https%3A%2F%2Fcdn.probtn.com%2Fimages%2Ftrash.png%22%2C%22CloseOpacity%22%3A0.6%2C%22ClosePosition%22%3A%7B%22X%22%3A0.5%2C%22Y%22%3A0.95%7D%2C%22ContentInsets%22%3A%7B%22T%22%3A12%2C%22B%22%3A12%2C%22L%22%3A12%2C%22R%22%3A12%7D%2C%22GResize%22%3Afalse%2C%22HintText%22%3A%22%22%2C%22MinimizeWrapperTime%22%3A400%2C%22ZCustomCss%22%3A%22%23probtn_button%20%23probtn_hintText%2C%20%23probtn_wrapper%20%23probtn_hintText%2C%20%23probtn_button%20%23hintText%2C%20%23probtn_wrapper%20%23hintText%20%7Bclear%3A%20both%3B%20display%3A%20block%3B%20width%3A%20auto%3B%20height%3A%20auto%3B%20padding-top%3A%200px%3B%20padding-left%3A%205px%3B%20padding-right%3A%205px%3B%20padding-bottom%3A%205px%3B%20background%3A%20gray%3B%20display%3A%20inline-block%3B%20width%3A%20auto%3B%7D%22%2C%22ButtonDragSize%22%3A%7B%22W%22%3A120%2C%22H%22%3A120%7D%2C%22ButtonOpenSize%22%3A%7B%22W%22%3A120%2C%22H%22%3A120%7D%2C%22ButtonVisible%22%3Atrue%2C%22ExternalMode%22%3Afalse%2C%22NeverClose%22%3Afalse%2C%22OpenExternal%22%3Afalse%2C%22LoadFancyboxCSS%22%3Atrue%2C%22VendorText%22%3A%22Powered%20by%20Profit%20Button%22%2C%22VendorSite%22%3A%22http%3A%2F%2Fbit.ly%2F19QlYqZ%22%2C%22_site%22%3A%22http%3A%2F%2Fprobtn.com%22%2C%22domain%22%3A%22%22%2C%22SelectAdSet%22%3A%22%22%7D" frameborder="0" allowfullscreen></iframe>
    </div>
	<div id="probtn_additional_params" style="display: none;">{"domain":"probtn.com"}</div>
	<script src="//cdn.probtn.com/probtn_concat.js"></script>

Кнопка с видео
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но при нажатии на кнопку происходит воспроизведение видео (с "автозапуском" в тос числе и на мобильных браузерах).

Данный режиме задается при указании параметра
``"ButtonContentType":"video"``

.. raw:: html

    <div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://probtnlandings1.azurewebsites.net/stand/iframe.html?json=%7B%22ContentURL%22%3A%22%2F%2Fprobtnlandings1.azurewebsites.net%2Fbutton_example%2FLenovo.mp4%22%2C%22ButtonType%22%3A%22button%22%2C%22ButtonContentType%22%3A%22video%22%2C%22HideAfterFirstShow%22%3Atrue%2C%22domain%22%3A%22%22%2C%22Debug%22%3Afalse%2C%22OpenExternal%22%3Afalse%2C%22ButtonImage%22%3A%22http%3A%2F%2Fprobtnlandings1.azurewebsites.net%2Fbutton_example%2Fpopmech_lenovo%2Fbutton.png%22%2C%22ButtonDragImage%22%3A%22http%3A%2F%2Fprobtnlandings1.azurewebsites.net%2Fbutton_example%2Fpopmech_lenovo%2Fbutton.png%22%2C%22ButtonOpenImage%22%3A%22http%3A%2F%2Fprobtnlandings1.azurewebsites.net%2Fbutton_example%2Fpopmech_lenovo%2Fbutton.png%22%2C%22_site%22%3A%22http%3A%2F%2Fprobtn.com%22%2C%22SelectAdSet%22%3A%22%22%7D" frameborder="0" allowfullscreen></iframe>
    </div>

Кнопка со скролл-зонами
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но вся высота страницы разбивается на зоны, внутри которых может менятся изображение кнопки, ее размеры и режим.

Данный режиме задается при указании параметра
``"ButtonType":"button_and_scroll_zones"``
и указания настроек скролл-зон (объект ``ScrollZones`` настроек)

.. raw:: html

    <div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://probtnlandings1.azurewebsites.net/stand/iframe.html?json=%7B%22ButtonType%22%3A%22button_and_scroll_zones%22%2C%22Debug%22%3Atrue%2C%22HintText%22%3A%22%22%2C%22ScrollZones%22%3A%5B%7B%22ZoneHeight%22%3A0.34%2C%22ButtonImage%22%3A%22%2F%2Fprobtnlandings1.azurewebsites.net%2Fbutton_example%2Fscroll%2Fbutton_images%2Fbtn_ball_spartak.png%22%2C%22CustomButtonParams%22%3Atrue%2C%22CustomContentURL%22%3A%22http%3A%2F%2Fprobtn.com%22%2C%22ButtonSize%22%3A%7B%22W%22%3A164%2C%22H%22%3A164%7D%2C%22ButtonDragSize%22%3A%7B%22W%22%3A168%2C%22H%22%3A168%7D%7D%2C%7B%22ZoneHeight%22%3A0.33%2C%22ButtonImage%22%3A%22%2F%2Fprobtnlandings1.azurewebsites.net%2Fbutton_example%2Fscroll%2Fbutton_images%2Fbtn_logo_spartak.png%22%7D%2C%7B%22ZoneHeight%22%3A0.33%2C%22ButtonImage%22%3A%22%2F%2Fprobtnlandings1.azurewebsites.net%2Fbutton_example%2Fscroll%2Fbutton_images%2Fbtn_scarf_spartak.png%22%7D%5D%2C%22_site%22%3A%22http%3A%2F%2Fprobtn.com%22%2C%22domain%22%3A%22%22%2C%22SelectAdSet%22%3A%22%22%7D" frameborder="0" allowfullscreen></iframe>
    </div>

Кнопка c активными зонами
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но кроме кнопки на экране присутствует несколько активных зон, при "сбросе" кнопки на которую будет произведено то или иное действие (в заминсимости от настроек активной зоны).

Данный режиме задается при указании параметра
``"ButtonType":"button_and_active_zones"``
и указания настроек активных зон (объект ``ActiveZones`` настроек)

.. raw:: html

    <div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://bit.ly/1MiayAq" frameborder="0" allowfullscreen></iframe>
    </div>

Кнопка-меню
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но после нажатия отображается меню из нескольких пунктов, с различными ссылками\действиями для каждого из пунктов.

Данный режиме задается при указании параметра
``"ButtonType":"menu"``
и указания настроек меню (объект ``MenuItems`` настроек)

.. raw:: html

    <div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example2/menu/" frameborder="0" allowfullscreen></iframe>
    </div>
	
Также для меню возможно включить режим радиального меню используя параметр ``"MenuTemplateVariant":"radialcorner"``

.. raw:: html

    <div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example2/radmenu_param/" frameborder="0" allowfullscreen></iframe>
    </div>

Фуллскрин
----------------------------------

Послк загрузки страницы и скрипта кнопки в модальном окне отображается страница ``ContentURL``

.. raw:: html

    <div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example/fullscreen_test/" frameborder="0" allowfullscreen></iframe>
    </div>

Анимации кнопки
----------------------------------