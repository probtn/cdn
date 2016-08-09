.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _examples:

Примеры режимов работы кнопки
==================================

На данной странице описаны основные режимы работы кнопки и приведены примеры их поведения.

.. raw:: html

	<div class="css">
		<style>
			/*.videoExample {
				display: block;
				width: 411px;
				height:840px;
			}*/
			.videoExample {
				display: inline-block;
				width: 100%;
				height: auto;
			}
			.videoItem {
				/*position: relative;*/
				width: 100%;
				height: auto;
				/*top: -750px;*/
				z-index: 1;
				/*margin-left: 26px;*/
			}
			#mainImage1, .mainImage1 {
				display: none;
			}
	</style>
	<script>
	function playVideo(thisItem) {
		thisItem.play();
	}
	</script>
	<div>

Плавающая кнопка по умолчанию
----------------------------------

Кнопка по умолчанию - с возможностью передвигать ее по экрану, закрытием при наведении и отпускании на область закрытия (корзина) и открытием рекламной страницы по нажатию на кнопку.

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/1-simple_x264_001.mp4" type="video/mp4" />
		</video>
	</div>
	
	<div id="probtn_additional_params" style="display: none;">{"domain":"probtn.com"}</div>
	<script src="//cdn.probtn.com/probtn_concat.js"></script>

Кнопка с видео
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но при нажатии на кнопку происходит воспроизведение видео (с "автозапуском", в том числе и на мобильных браузерах).

Данный режим задается при указании параметра
``"ButtonContentType":"video"``

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/2-video_x264_001.mp4" type="video/mp4" />
		</video>
	</div>

Кнопка со скролл-зонами
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но вся высота страницы разбивается на зоны, внутри которых может менятся изображение кнопки, ее размеры и режим.

Данный режим задается при указании параметра
``"ButtonType":"button_and_scroll_zones"``
и указания настроек скролл-зон (объект ``ScrollZones`` настроек)

.. raw:: html
	
	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/3-scroll_x264_001.mp4" type="video/mp4" />
		</video>
	</div>

Кнопка c активными зонами
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но кроме кнопки на экране присутствует несколько активных зон, при "сбросе" кнопки на которую будет произведено то или иное действие (в зависимости от настроек активной зоны).

Данный режим задается при указании параметра
``"ButtonType":"button_and_active_zones"``
и указания настроек активных зон (объект ``ActiveZones`` настроек)

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/4-activezones_x264_001.mp4" type="video/mp4" />
		</video>
	</div>

Кнопка-меню
----------------------------------

Поведение кнопки аналогично кнопке по умолчанию, но после нажатия отображается меню из нескольких пунктов, с различными ссылками-действиями для каждого из пунктов.

Данный режим задается при указании параметра
``"ButtonType":"menu"``
и указания настроек меню (объект ``MenuItems`` настроек)

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/5-1-menu_x264.mp4" type="video/mp4" />
		</video>
	</div>
	<!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example2/menu/" frameborder="0" allowfullscreen></iframe>
    </div>-->
	
Также для меню возможно включить режим радиального меню используя параметр ``"MenuTemplateVariant":"radialcorner"``

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/5-2-radmenu_x264.mp4" type="video/mp4" />
		</video>
	</div>
    <!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example2/radmenu_param/" frameborder="0" allowfullscreen></iframe>
    </div>-->

Фуллскрин
----------------------------------

После загрузки страницы и скрипта кнопки в модальном окне отображается страница ``ContentURL``

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/6-fullscreen_x264_001.mp4" type="video/mp4" />
		</video>
	</div>
    <!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/button_example/fullscreen_test/" frameborder="0" allowfullscreen></iframe>
    </div>-->
	
Smartbanner
----------------------------------

Вместо кнопки показывается смартбаннер (на основе https://github.com/jasny/jquery.smartbanner )

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/7-smartbanner_x264_001.mp4" type="video/mp4" />
		</video>
	</div>
	<!--<div style="margin-top:10px;">
      <iframe width="100%" height="400" src="http://demo.probtn.com/smartbanner/android" frameborder="0" allowfullscreen></iframe>
    </div>-->

Анимации кнопки
----------------------------------

Opacity
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Анимация смены прозрачности кнопки.

Используемые параметры:

- ``isAnimation``
- ``animationDuration``

В частности задается как ``isAnimation = opacity_0.5``
в формате ``opacity_<конечное значение>``

Начальное значение прозрачности соответственно устанавливается через ``ButtonOpacity`` параметр

Демо страница - http://demo.probtn.com/button_example/opacity_animation

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/8-1-opacity_x264.mp4" type="video/mp4" />
		</video>
	</div>
	
rollout 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
Анимация, при которой кнопка "выдвигается" по мере скролла страницы

Используемые параметры:

- ``isAnimation``
- ``animationDuration``

В частности задается как ``isAnimation = rollout_left`` в формате ``rollout_<сторона>``, где сторона - опциональна и может принимать значения ``left`` или ``right``

И возможно указать сторону из которой будет "выдвигаться" кнопка и максимальную ширину "выдвижения" (в процентах), в частности
``rollout_<сторона>_<ширина>`` к примеру ``rollout``, ``rollout_left``, ``rollout_left_60``

Демо страницы:

- http://demo.probtn.com/button_example2/rollout
- http://demo.probtn.com/button_example2/rollout/right/

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/8-2-rollout_x264.mp4" type="video/mp4" />
		</video>
	</div>
	
.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/8-3-rollout-right_x264.mp4" type="video/mp4" />
		</video>
	</div>

lookout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
кнопка периодически исчезает и появляется из-за края экрана.

Используемые параметры:

- ``isAnimation``
- ``animationDuration``

В частности задается как ``isAnimation = lookout_left`` в формате ``lookout_<сторона>``, где сторона - опциональна и может принимать значения ``left`` или ``right``

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/8-4-lookout_x264.mp4" type="video/mp4" />
		</video>
	</div>

forwardAndBack
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Кнопка перемещается от левого края до правого, затем обратно до левого.

Используемые параметры:

- ``isAnimation``
- ``animationDuration``

Пример:

- http://demo.probtn.com/button_example2/forwardAndBack/

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/8-5-forwardAndBack_x264.mp4" type="video/mp4" />
		</video>
	</div>

forwardStopAndAway
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Кнопка перемещается из-за левого края до середины экрана, останавливается и затем перемещается за правый край экрана. 
Длительность каждого этапа задается параметром ``animationDuration``

Используемые параметры:

- ``isAnimation``
- ``animationDuration``

Пример:

- http://demo.probtn.com/button_example2/forwardStopAndAway

.. raw:: html

	<div class="videoExample">
		<img id="mainImage1" src="http://probtn.blob.core.windows.net/video/i6-stand.png" srcset="http://probtn.blob.core.windows.net/video/i6-stand@2x.png 2x" style="width: 411px; height:840px;" alt=""/>
		<video onclick="playVideo(this);" controls="controls" preload="metadata" class="videoItem">
			<source src="https://demo.probtn.com/video/8-6-forwardStopAndAway_x264.mp4" type="video/mp4" />
		</video>
	</div>