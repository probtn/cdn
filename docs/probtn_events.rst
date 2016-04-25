.. probtn documentation master file, created by
   sphinx-quickstart on Mon Nov  2 12:32:08 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
 
.. _probtn_events:
 
Получение событий кнопки на странице
==================================

Общее описание
----------------------------------

В случае, если есть необходимость получать события кнопки (к примеру для дальнейшего собственного подсчета статистики) возможно зарегистрировать обработчик события probtn_events.

В данном событии в data будет присутствовать объект с описанием события и необходимыми данными.

Описание объекта
----------------------------------
Основные даныые о событии находятся в ``Statistic`` и представлены в виде массива объектов, где ``name`` - название события и ``value`` - значение.

Пример
----------------------------------

``document.addEventListener('probtn_events', function (e) {
                console.log("probtn_events", e.data);
                $("#eventsOutput").append("<p>"+JSON.stringify(e.data)+"</p>");
}, false);``

Пример объекта
----------------------------------

``{"AZName":"","Statistic":[{"name":"Moved","value":1}]}``

demo-страницы
----------------------------------

* http://demo.probtn.com/button_example3/probtnEvents/
