if (!window.jQuery) {
    document.write('<script src="http://code.jquery.com/jquery-1.9.1.js"></script>');
}
document.write(
    "<script>("
    +"function ($) {"
        +"$.noConflict();"
        +"$.getScript('https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js', function() {"
            +"$.getScript('https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js', function () {"
                +"$.getScript('https://pizzabtn.herokuapp.com/javascripts/probtn.js', function () {"
                    +"jQuery(document).ready(function($){$(document).StartButton({'mainStyleCss':'https://pizzabtn.herokuapp.com/stylesheets/probtn.css'});});"
                +"})"
            +"});"
        +"});"
    +"})(window.jQuery);"
    +"<\/script>"
);
