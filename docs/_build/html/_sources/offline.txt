.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _offline:
 
Оффлайн режим
==================================

Инструкция описывает использование рекламного формата плавающей кнопки AdButton без обращений из кода кнопки к внешнему серверу, например, к панели администрирования AdButton (оффлайн режим). Этот вариант интеграции разработан для уменьшения рисков загрузки внешнего кода на сайт с установленным форматом. Для реализации этого функционала, код кнопки и данные настройки кнопки, расположены локально на веб-сервере. 

Для реализации кампании необходимо:
загрузить код на сайт (либо файлы из архива). В архив включена демонстрационная страница и все необходимые файлы для работы как примера, так и собственного варианта

* ``http://cdn.probtn.com/offline/probtn_concat_offline.js`` - сама библиотека
* ``http://cdn.probtn.com/offline/example.zip`` - архив с примером
* ``http://cdn.probtn.com/offline/index.html`` - пример работы режима на cdn

добавить теги вызова

``<script src="direct/probtn_concat_offline.js"></script>``

Пример работы интеграции на демо странице AdButton

* http://cdn.probtn.com/offline/index.html
* http://probtn-avito.azurewebsites.net/offline/

Описание архива:

* ``settings.json`` - настройки кнопки, выгружаемые из admin.probtn.com для целевой кампании
* ``style.css`` - стили 
* ``probtn_concat_offline.js`` - код кнопки, объединенный со всеми зависимостями
* ``other/`` - дополнительные файлы (картинки, стили модального окна)

В ``probtn_concat_offline.js`` настраиваются пути к файлам:

* ``var mainStyleCssPath = "style.css";``
* ``var fancyboxCssPath = "libs/jquery.fancybox.min.css";``
* ``var localSettingsPath = "settings.json";``

* ``mainStyleCssPath`` - URL до стилей кнопки
* ``fancyboxCssPath`` - URL до стилей fancybox
* ``localSettingsPath`` - URL до файла с локальными настройками кнопки