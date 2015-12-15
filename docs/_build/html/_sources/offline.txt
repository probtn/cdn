.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _offline:
 
Оффлайн режим
==================================

Инструкция описывает использование рекламного формата плавающей кнопки AdButton без обращений из кода кнопки к внешнему сервер, например, к панели администрирования AdButton (оффлайн режим). Этот вариант интеграции разработан для уменьшения рисков загрузки внешнего кода на сайт с установленным форматом. Для реализации этого функционала, код кнопки и данные настройки кампаний, расположены локально на веб-сервере. Креатив 

Для реализации кампании необходимо:
загрузить архив с кодом на сайт. В архив включена демонстрационная страница и все необходимые файлы
https://yadi.sk/d/yJyjsW27kF322

добавить теги вызова

``<script src="direct/probtn_concat.js"></script>``

Пример работы интеграции на демо странице AdButton
http://probtn-avito.azurewebsites.net/offline/

Описание архива:

* ``settings.txt`` - настройки кнопки, выгружаемые из admin.probtn.com для целевой кампании
* ``style.css`` - стили 
* ``probtn_concat.js`` - код кнопки, объединенный со всеми зависимостями
* ``libs/`` - дополнительные файлы (картинки, стили модального окна)

В ``probtn_concat.js`` настраиваются пути к файлам:

``var mainStyleCssPath = "style.css";``

``var fancyboxCssPath = "libs/jquery.fancybox.min.css";``

``var localSettingsPath = "settings.txt";``


``mainStyleCssPath`` - URL до стилей кнопки
``fancyboxCssPath`` - URL до стилей fancybox
``localSettingsPath`` - URL до файла с локальными настройками кнопки