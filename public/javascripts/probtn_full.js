// OLD SHORT VERSION:
//!function(a){try{var b="Unbekannt",c="",d="",e="";screen.width&&(d=screen.width?screen.width:"",e=screen.height?screen.height:"",c+=""+d+" x "+e);var k,l,m,f=navigator.appVersion,g=navigator.userAgent,h=navigator.appName,i=""+parseFloat(navigator.appVersion),j=parseInt(navigator.appVersion,10);-1!=(l=g.indexOf("Opera"))?(h="Opera",i=g.substring(l+6),-1!=(l=g.indexOf("Version"))&&(i=g.substring(l+8))):-1!=(l=g.indexOf("MSIE"))?(h="Microsoft Internet Explorer",i=g.substring(l+5)):-1!=(l=g.indexOf("Chrome"))?(h="Chrome",i=g.substring(l+7)):-1!=(l=g.indexOf("Safari"))?(h="Safari",i=g.substring(l+7),-1!=(l=g.indexOf("Version"))&&(i=g.substring(l+8))):-1!=(l=g.indexOf("Firefox"))?(h="Firefox",i=g.substring(l+8)):(k=g.lastIndexOf(" ")+1)<(l=g.lastIndexOf("/"))&&(h=g.substring(k,l),i=g.substring(l+1),h.toLowerCase()==h.toUpperCase()&&(h=navigator.appName)),-1!=(m=i.indexOf(";"))&&(i=i.substring(0,m)),-1!=(m=i.indexOf(" "))&&(i=i.substring(0,m)),j=parseInt(""+i,10),isNaN(j)&&(i=""+parseFloat(navigator.appVersion),j=parseInt(navigator.appVersion,10));var n=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(f),o=navigator.cookieEnabled?!0:!1;"undefined"!=typeof navigator.cookieEnabled||o||(document.cookie="testcookie",o=-1!=document.cookie.indexOf("testcookie")?!0:!1);var p=b,q=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];try{for(var r in q){var s=q[r];if(s.r.test(g)){p=s.s;break}}var t=b;switch(/Windows/.test(p)&&(t=/Windows (.*)/.exec(p)[1],p="Windows"),p){case"Mac OS X":t=/Mac OS X (10[\.\_\d]+)/.exec(g)[1];break;case"Android":t=/Android ([\.\_\d]+)/.exec(g)[1];break;case"iOS":t=/OS (\d+)_(\d+)_?(\d+)?/.exec(f),t=t[1]+"."+t[2]+"."+(0|t[3])}}catch(u){p=b}a.jscd={screen:c,screenWidth:d,screenHeight:e,browser:h,browserVersion:i,mobile:n,os:p,osVersion:t,cookies:o}}catch(u){}}(this),function(a){a.fn.StartButton=function(b){function e(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"}function f(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null}function k(){var b={width:window.availWidth,height:window.availHeight};"Microsoft Internet Explorer"===window.jscd.browser&&(b.overflow="auto"),a("body").css(b)}function m(){return a(window).width()>a(window).height()}function n(){var b=a("<img/>",{id:"closeButton",src:h.CloseImage,"class":"close_pro_button_normal",css:{position:"absolute",display:"none"}}).prependTo("body");return b.active=!1,b.rect={},b.css({"-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"transition-property":"opacity, width, height, left, top","timing-function":"linear","-webkit-transition-property":"opacity, width, height, left, top","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height, left, top","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height, left, top","-o-timing-function":"linear"}),b.center=function(){var b=a("body");this.css("top",(b.innerHeight()-this.height())/2+a(window).scrollTop()+"px"),this.css("left",(b.innerWidth()-this.width())/2+a(window).scrollLeft()+"px")},b.show=function(){var a=this;a.center(),setTimeout(function(){a.stop(!0,!0).fadeIn(1e3*h.CloseShowDuration)},1e3*h.CloseShowDelay)},b.hide=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeOut(1e3*h.CloseHideDuration)},1e3*h.CloseHideDelay)},b.setTransitionDuration=function(a){var b=a+"s";this.css({"transition-duration":b,"-webkit-transition-duration":b,"-moz-transition-duration":b,"-o-transition-duration":b})},b.overlayActive=function(){var a=this,b=a.position();a.setTransitionDuration(h.CloseActiveDuration),setTimeout(function(){a.css({opacity:h.CloseActiveOpacity,width:h.CloseActiveSize.W,height:h.CloseActiveSize.H,left:b.left-(h.CloseActiveSize.W-h.CloseSize.W)/2,top:b.top-(h.CloseActiveSize.H-h.CloseSize.H)/2})},1e3*h.CloseActiveDelay)},b.overlayUnactive=function(){var b=this,c=a("body"),d=(c.innerHeight()-j.height())/2+a(window).scrollTop(),e=(c.innerWidth()-j.width())/2+a(window).scrollLeft();b.setTransitionDuration(h.CloseUnactiveDuration),setTimeout(function(){var a={opacity:h.CloseOpacity,width:h.CloseSize.W,height:h.CloseSize.H,left:e,top:d};b.css(a)},1e3*h.CloseUnactiveDelay)},b.setTransitionDuration(h.CloseActiveDuration),b.center(),b}function o(b){console.log("MinimizeWrapper");var c=a("#pizzabtn_wrapper"),d={width:"auto",height:"auto",position:"fixed"};c.css(d);try{b()}catch(e){}}function p(b){console.log("MaximizeWrapper1");var c=a("#pizzabtn_wrapper"),d={width:a(window).width(),height:a(window).height(),position:"fixed"};c.css(d);try{if(a("#pizzabtn").offset().left-a(window).scrollLeft()>c.width()){console.log("change button left");var e=c.width()-a("#pizzabtn").width();a("#pizzabtn").css({left:e+"px"})}}catch(f){}try{if(a("#pizzabtn").offset().top-a(window).scrollTop()>c.height()){console.log("change button top");var g=c.height()-a("#pizzabtn").height();a("#pizzabtn").css({top:g+"px"})}}catch(f){}try{b()}catch(f){}}function q(){var b=a("<div/>",{id:"pizzabtn_wrapper"}).prependTo("body"),c={width:a(window).width(),height:a(window).height(),position:"fixed"};console.dir(c),b.css(c);var d=a("#pizzabtn");0===d.length&&(d=a("<div/>",{id:"pizzabtn"}).prependTo(b)),d.addClass("pizzabtn_normal"),d.css({display:"none","-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"-webkit-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-moz-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-ms-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-o-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear",transition:"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear"});var e=a("<img/>",{id:"pizzabtnImg",src:h.ButtonImage,css:{width:h.ButtonSize.W,height:h.ButtonSize.H,opacity:h.ButtonOpacity,"transition-property":"opacity, width, height","timing-function":"linear","-webkit-transition-property":"opacity, width, height","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height","-o-timing-function":"linear"}}).appendTo(pizzabtn),f=a("<span/>",{id:"hintText",css:{opacity:0,"transition-property":"opacity","timing-function":"linear","-webkit-transition-property":"opacity","-webkit-timing-function":"linear","-moz-transition-property":"opacity","-moz-timing-function":"linear","-o-transition-property":"opacity","-o-timing-function":"linear","transition-duration":h.HintShowDuration+"s","-webkit-transition-duration":h.HintShowDuration+"s","-moz-transition-duration":h.HintShowDuration+"s","-o-transition-duration":h.HintShowDuration+"s"},html:h.HintText.replace(/ /g,"&nbsp;")}).appendTo(pizzabtn);pizzabtn.hintTextActive=!1,o(),f.makeInvisible=function(){this.css({"transition-duration":h.HintHideDuration+"s","-webkit-transition-duration":h.HintHideDuration+"s","-moz-transition-duration":h.HintHideDuration+"s","-o-transition-duration":h.HintHideDuration+"s"}),this.css("opacity",0)},d.center=function(){var b=a("#pizzabtn_wrapper");this.css("top",(b.innerHeight()-this.height())/2+a(window).scrollTop()+"px"),this.css("left",(b.innerWidth()-this.width())/2+a(window).scrollLeft()+"px")},d.show=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeIn(1e3*h.ButtonShowDuration)},1e3*h.ButtonShowDelay)},d.hide=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeOut(1e3*h.ButtonHideDuration)},1e3*h.ButtonHideDelay)},d.dragAnimate=function(){e.attr("src",h.ButtonDragImage),setTimeout(function(){e.css({"transition-duration":h.ButtonDragDuration+"s","-webkit-transition-duration":h.ButtonDragDuration+"s","-moz-transition-duration":h.ButtonDragDuration+"s","-o-transition-duration":h.ButtonDragDuration+"s"}),e.css({opacity:h.ButtonDragOpacity,width:h.ButtonDragSize.W,height:h.ButtonDragSize.H})},1e3*h.ButtonDragDelay)},d.undragAnimate=function(){e.attr("src",h.ButtonImage),setTimeout(function(){e.css({"transition-duration":h.ButtonUndragDuration+"s","-webkit-transition-duration":h.ButtonUndragDuration+"s","-moz-transition-duration":h.ButtonUndragDuration+"s","-o-transition-duration":h.ButtonUndragDuration+"s"}),e.css({opacity:h.ButtonOpacity,width:h.ButtonSize.W,height:h.ButtonSize.H})},1e3*h.ButtonUndragDelay)},d.showHint=function(){var a=this;setTimeout(function(){f.css(i),a.hintTextActive=!0},1e3*h.HintLaunchDelay)},d.hideHint=function(){var a=this;f.makeInvisible(),setTimeout(function(){a.animateDuringHintHide()},100),a.hintTextActive=!1},d.hideHintDelay=function(){setTimeout(function(){f.makeInvisible()},1e3*h.HintLaunchDuration)},d.animateDuringHintHide=function(){var a=this,b=f.outerWidth(),c=(b-h.ButtonSize.W)/2;c>0&&a.css({width:h.ButtonSize.W,height:h.ButtonSize.H,left:a.position().left+c})};try{var g=(window.innerHeight-h.ButtonSize.H/2)*h.ButtonPosition.Y,j=(a("body").innerWidth()-h.ButtonSize.W/2)*h.ButtonPosition.X+a(window).scrollLeft()+"px";d.css({left:j,top:g})}catch(l){}return k(),d}var c="1.0",d="b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b";String.prototype.hashCode=function(){var b,c,a=0;if(0==this.length)return a;for(b=0,l=this.length;l>b;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a|=0;return a};var h=a.extend({type:"iframe",domain:"",fancyboxJsPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js",fancyboxCssPath:"https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css",mainStyleCss:"style.css",jqueryPepPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",buttonAnimationTimeAfterFancybox:400,HideAfterFirstShow:!1,ContentURL:"http://app.ecwid.com/jsp/2557212/m",BaseInsets:{T:4,B:4,L:4,R:4},ButtonEnabled:!1,ButtonVisible:!1,ButtonOpenInsets:{T:32,B:32,L:32,R:32},ButtonPosition:{X:.5,Y:.5},ButtonSize:{W:64,H:64},ButtonDragSize:{W:68,H:68},ButtonOpenSize:{W:64,H:64},ButtonInactiveSize:{W:64,H:64},ButtonOpacity:.8,ButtonDragOpacity:1,ButtonOpenOpacity:1,ButtonInactiveOpacity:.5,ButtonImage:"https://pizzabtn.herokuapp.com/images/probtn/gray.png",ButtonDragImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonOpenImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonInactiveImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ClosePosition:{X:123,Y:123},CloseSize:{W:64,H:64},CloseActiveSize:{W:72,H:72},CloseOpacity:.6,CloseActiveOpacity:1,CloseImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",CloseActiveImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",HintInsets:{T:4,B:4,L:4,R:4},HintLabelInsets:{T:4,B:4,L:4,R:4},HintImageInsets:{T:8,B:8,L:8,R:8},HintText:"Press me",HintFont:{Family:"Arial",Size:18},HintFontColor:{R:1,G:1,B:1,A:1},HintOpacity:.8,HintImage:"https://pizzabtn.herokuapp.com/images/probtn/hint.png",HintArrowSize:{W:8,H:8},HintArrowOffset:{T:0,B:0,L:0,R:0},HintArrowImageT:"",HintArrowImageB:"",HintArrowImageL:"",HintArrowImageR:"",ContentInsets:{T:-2,B:-2,L:-2,R:-2},ContentWebViewInsets:{T:12,B:12,L:12,R:12},ContentImageInsets:{T:32,B:32,L:32,R:32},ContentOpacity:1,ContentBackOpacity:1,ContentBackColor:{R:0,G:0,B:0,A:1},ContentActivityColor:{R:0,G:0,B:0,A:1},ContentImage:"",ContentArrowSize:{W:14,H:14},ContentArrowOffset:{T:8,B:8,L:9,R:9},ContentArrowImageT:"",ContentArrowImageB:"",ContentArrowImageL:"",ContentArrowImageR:"",DefaultDuration:.1,DefaultDelay:0,OpenDuration:.2,OpenDelay:.5,CloseDuration:.2,CloseDelay:.5,ButtonShowDuration:.2,ButtonShowDelay:0,ButtonHideDuration:.2,ButtonHideDelay:0,ButtonDragDuration:.1,ButtonDragDelay:0,ButtonUndragDuration:.2,ButtonUndragDelay:0,ButtonInactiveDuration:.1,ButtonInactiveDelay:5,ButtonInertiaSpeed:512,ButtonInertiaSpeedMin:32,ButtonInertiaSpeedMax:1024,ButtonInertiaFactor:6,CloseShowDuration:.1,CloseShowDelay:0,CloseHideDuration:.2,CloseHideDelay:0,CloseActiveDuration:.1,CloseActiveDelay:0,CloseUnactiveDuration:.1,CloseUnactiveDelay:0,HintLaunchDuration:3e4,HintLaunchDelay:0,HintShowDuration:.1,HintShowDelay:0,HintHideDuration:.2,HintHideDelay:0,ContentShowDuration:.1,ContentShowDelay:0,ContentHideDuration:.2,ContentHideDelay:0},b);console.log("Params:"),console.dir(b),console.dir(h);var i={opacity:h.HintOpacity,"font-size":h.HintFont.Size,"font-family":h.HintFont.Family,color:"white",padding:"4px",background:"url('"+h.HintImage+"')"},j=n();a(document).ready(function(){function v(){p(function(){console.log("onOrientationChange event"),o(),a.fancybox.isOpen&&(u=!0,a.fancybox.close())})}function w(){function c(){try{"function"==typeof a.pep.toggleAll?d():a.getScript(h.jqueryPepPath,d)}catch(b){a.getScript(h.jqueryPepPath,d)}}function d(){function d(){var c=m()&&window.jscd.mobile,d=b.position(),e=d.top,f=d.left,g=window.innerWidth,i=window.innerHeight,j="0px",k="0px",l=(g+h.ButtonSize.W)/2,n=(i+h.ButtonSize.H)/2;e>=n&&(j=i-h.ButtonSize.H+"px"),f>=l&&(k=g-h.ButtonSize.W+"px");var p=c?[h.ButtonSize.H/4,h.ButtonSize.H/4+5,h.ButtonSize.H/4,h.ButtonSize.H/4+5]:[h.ButtonSize.H+5,h.ButtonSize.H/2,h.ButtonSize.H+5,h.ButtonSize.H/2];window.jscd.mobile&&h.ButtonSize.H>70&&(p=[h.ButtonSize.H/8,h.ButtonSize.H/8,h.ButtonSize.H/8,h.ButtonSize.H/8]);var q={property:c?"left":"top",currentValue:c?f:e,finishValue:c?k:j},r=a("#pizzabtn").offset().left,s=a("#pizzabtn").offset().top;y("ContentShowed",1),a.pep.toggleAll(!1),a.fancybox.open({href:h.ContentURL,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",type:"iframe",autoCenter:!0,scrolling:"no",margin:p,height:"100%",minWidth:100,minHeight:100,iframe:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",preload:!1,scrolling:"yes"},helpers:{overlay:{locked:!1}},beforeLoad:function(){a("#hintText").hide(),a(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms"),b.css(q.property,q.finishValue),"top"==q.property?b.css("left",r+"px"):b.css("top",s+"px"),"iOS"===window.jscd.os&&a(document.body).bind("touchmove",function(a){a.preventDefault(),a.stopPropagation(),a.returnValue=!1}),a("html").css("overflow","hidden")},afterShow:function(){a(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms"),a(".fancybox-iframe").first().contents().find("html").css("visibility","visible !important"),b.bind("click",a.fancybox.close)},afterClose:function(){o(),"iOS"===window.jscd.os&&a(document.body).unbind("touchmove"),a("html").css("overflow","auto"),b.unbind("click"),a.pep.toggleAll(!0),b.css(q.property,q.currentValue+"px"),1==h.HideAfterFirstShow&&(y("Closed",1),y("Hidded",1),b.hide())}})}y(),y("Showed",1),B(),h.ButtonEnabled&&h.ButtonVisible&&b.show(),b.hideHintDelay(),b.showHint();var c=!1;b.moved=!1,b.pep({useCSSTranslation:!1,constrainTo:"parent",cssEaseString:"cubic-bezier(0, .50, .50, 1)",cssEaseDuration:600,velocityMultiplier:1,startThreshold:[1,1],droppable:"#closeButton",initiate:k,start:function(){p(function(){0==b.moved&&b.dragAnimate(),b.moved=!0,b.hintTextActive&&b.hideHint(),j.show(),y("Moved",1),o()})},drag:function(){p(function(){var d=b[0].getBoundingClientRect(),e=j[0].getBoundingClientRect();d.top+d.height>a(window).height()&&console.log("Moved stop!");var f=!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom);f&&0!==e.width?c||(j.overlayActive(),c=!0):c&&(j.overlayUnactive(),c=!1)})},stop:function(){b.moved?(o(),c?(y("Closed",1),y("Hidded",1),b.hide()):b.undragAnimate()):p(function(){console.log("Left offset before open:"),console.log(a("#pizzabtn").offset().left),d()}),j.hide(),b.moved=!1,c=!1}})}a("head").append('<link rel="stylesheet" href="'+h.mainStyleCss+'" type="text/css" />'),a("head").append('<link rel="stylesheet" href="'+h.fancyboxCssPath+'" type="text/css" />'),a("head").append("<style type='text/css'> .fancybox-inner { -webkit-overflow-scrolling: touch !important; overflow: scroll !important; } </style>"),a("head").append(a("<style/>",{id:"probtn_style",type:"text/css",html:["#pizzabtn.pizzabtn_normal { display: block; clear: both; position: device-fixed !important; }",".close_pro_button_normal{ width:"+h.CloseSize.W+"px; height:"+h.CloseSize.H+"px; opacity:"+h.CloseOpacity+"; display: block; clear: both; }"].join("\n")}));var b=q();"function"==typeof a.fancybox?c():a.getScript(h.fancyboxJsPath,c)}function x(b,c,d,e){a.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateUserStatistic?BundleID="+e+"&Version=1.0&DeviceType=web&DeviceUID="+d+"&localDomain="+l+"&Statistic="+'{"'+b+'": "'+c+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function y(a,b,c){var d="1234";(""==a||null==a)&&(a="Opened"),(""==b||null==b)&&(b=1),d=z(),""==c||null==c?x(a,b,d,g):A(a,b,d,g)}function z(){var a="1234";if(null!=f("probtnId"));else{var b=new Date;b=b.getTime(),a=b.toString()+"-"+navigator.userAgent.toString().hashCode(),e("probtnId",a,365)}return a=f("probtnId")}function A(b,c,d,e){a.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateCustomStatistic?BundleID="+e+"&DeviceType=web&Version=1.0&DeviceUID="+d+"&localDomain="+l+"&Statistic="+'{"'+b+'": "'+c+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function B(){try{y("Resolution",jscd.screen,1),y("Browser",jscd.browser,1),y("BrowserVersion",jscd.browserVersion,1),y("OS",jscd.os+" "+jscd.osVersion,1)}catch(a){}}var g=document.domain.replace("www.","");(""==g||null==g)&&(g="example.com");var l=g;""!=h.domain&&null!=h.domain&&(g=h.domain);var n="onorientationchange"in window,r=n?"orientationchange":"resize";window.innerHeight,window.innerWidth;var u=!1;a(window).bind(r,v),a.getJSON("https://pizzabtn.herokuapp.com/1/functions/getClientSettings?BundleID="+g+"&DeviceType=web&DeviceUID="+z()+"&Location[Longitude]=0&Location[Latitude]=0&Version="+c+"&X-ProBtn-Token="+d+"&random="+Math.random()+"&callback=?",function(c){try{a.extend(h,c.result,b),i={opacity:h.HintOpacity,"font-size":h.HintFont.Size,"font-family":h.HintFont.Family,color:"rgb("+100*h.HintFontColor.R+"%, "+100*h.HintFontColor.G+"%, "+100*h.HintFontColor.B+"%)","padding-left":h.HintLabelInsets.L,"padding-top":h.HintLabelInsets.T,"padding-right":h.HintLabelInsets.R,"padding-bottom":h.HintLabelInsets.B,background:"url('"+h.HintImage+"')"}}catch(d){}}).done(function(){}).fail(function(){}).always(w)})}}(jQuery);

// NEW SHORT VERSION:
//!function(a){try{var b="Unbekannt",c="",d="",e="";screen.width&&(d=screen.width?screen.width:"",e=screen.height?screen.height:"",c+=""+d+" x "+e);var k,l,m,f=navigator.appVersion,g=navigator.userAgent,h=navigator.appName,i=""+parseFloat(navigator.appVersion),j=parseInt(navigator.appVersion,10);-1!=(l=g.indexOf("Opera"))?(h="Opera",i=g.substring(l+6),-1!=(l=g.indexOf("Version"))&&(i=g.substring(l+8))):-1!=(l=g.indexOf("MSIE"))?(h="Microsoft Internet Explorer",i=g.substring(l+5)):-1!=(l=g.indexOf("Chrome"))?(h="Chrome",i=g.substring(l+7)):-1!=(l=g.indexOf("Safari"))?(h="Safari",i=g.substring(l+7),-1!=(l=g.indexOf("Version"))&&(i=g.substring(l+8))):-1!=(l=g.indexOf("Firefox"))?(h="Firefox",i=g.substring(l+8)):(k=g.lastIndexOf(" ")+1)<(l=g.lastIndexOf("/"))&&(h=g.substring(k,l),i=g.substring(l+1),h.toLowerCase()==h.toUpperCase()&&(h=navigator.appName)),-1!=(m=i.indexOf(";"))&&(i=i.substring(0,m)),-1!=(m=i.indexOf(" "))&&(i=i.substring(0,m)),j=parseInt(""+i,10),isNaN(j)&&(i=""+parseFloat(navigator.appVersion),j=parseInt(navigator.appVersion,10));var n=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(f),o=navigator.cookieEnabled?!0:!1;"undefined"!=typeof navigator.cookieEnabled||o||(document.cookie="testcookie",o=-1!=document.cookie.indexOf("testcookie")?!0:!1);var p=b,q=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];try{for(var r in q){var s=q[r];if(s.r.test(g)){p=s.s;break}}var t=b;switch(/Windows/.test(p)&&(t=/Windows (.*)/.exec(p)[1],p="Windows"),p){case"Mac OS X":t=/Mac OS X (10[\.\_\d]+)/.exec(g)[1];break;case"Android":t=/Android ([\.\_\d]+)/.exec(g)[1];break;case"iOS":t=/OS (\d+)_(\d+)_?(\d+)?/.exec(f),t=t[1]+"."+t[2]+"."+(0|t[3])}}catch(u){p=b}a.jscd={screen:c,screenWidth:d,screenHeight:e,browser:h,browserVersion:i,mobile:n,os:p,osVersion:t,cookies:o}}catch(u){}}(this),function(a){a.fn.StartButton=function(b){function e(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"}function f(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null}function k(){var b={width:window.availWidth,height:window.availHeight};"Microsoft Internet Explorer"===window.jscd.browser&&(b.overflow="auto"),a("body").css(b)}function m(){return a(window).width()>a(window).height()}function n(){var b=a("<img/>",{id:"closeButton",src:h.CloseImage,"class":"close_pro_button_normal",css:{position:"absolute",display:"none"}}).prependTo("body");return b.active=!1,b.rect={},b.css({"-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"transition-property":"opacity, width, height, left, top","timing-function":"linear","-webkit-transition-property":"opacity, width, height, left, top","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height, left, top","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height, left, top","-o-timing-function":"linear"}),b.center=function(){var b=a("body");this.css("top",(b.innerHeight()-this.height())/2+a(window).scrollTop()+"px"),this.css("left",(b.innerWidth()-this.width())/2+a(window).scrollLeft()+"px")},b.show=function(){var a=this;a.center(),setTimeout(function(){a.stop(!0,!0).fadeIn(1e3*h.CloseShowDuration)},1e3*h.CloseShowDelay)},b.hide=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeOut(1e3*h.CloseHideDuration)},1e3*h.CloseHideDelay)},b.setTransitionDuration=function(a){var b=a+"s";this.css({"transition-duration":b,"-webkit-transition-duration":b,"-moz-transition-duration":b,"-o-transition-duration":b})},b.overlayActive=function(){var a=this,b=a.position();a.setTransitionDuration(h.CloseActiveDuration),setTimeout(function(){a.css({opacity:h.CloseActiveOpacity,width:h.CloseActiveSize.W,height:h.CloseActiveSize.H,left:b.left-(h.CloseActiveSize.W-h.CloseSize.W)/2,top:b.top-(h.CloseActiveSize.H-h.CloseSize.H)/2})},1e3*h.CloseActiveDelay)},b.overlayUnactive=function(){var b=this,c=a("body"),d=(c.innerHeight()-j.height())/2+a(window).scrollTop(),e=(c.innerWidth()-j.width())/2+a(window).scrollLeft();b.setTransitionDuration(h.CloseUnactiveDuration),setTimeout(function(){var a={opacity:h.CloseOpacity,width:h.CloseSize.W,height:h.CloseSize.H,left:e,top:d};b.css(a)},1e3*h.CloseUnactiveDelay)},b.setTransitionDuration(h.CloseActiveDuration),b.center(),b}function o(b){console.log("MinimizeWrapper");var c=a("#pizzabtn_wrapper"),d={width:"auto",height:"auto",position:"fixed"};c.css(d);try{b()}catch(e){}}function p(b){console.log("MaximizeWrapper1");var c=a("#pizzabtn_wrapper"),d={width:a(window).width(),height:a(window).height(),position:"fixed"};c.css(d);try{if(a("#pizzabtn").offset().left-a(window).scrollLeft()>c.width()){console.log("change button left");var e=c.width()-a("#pizzabtn").width();a("#pizzabtn").css({left:e+"px"})}}catch(f){}try{if(a("#pizzabtn").offset().top-a(window).scrollTop()>c.height()){console.log("change button top");var g=c.height()-a("#pizzabtn").height();a("#pizzabtn").css({top:g+"px"})}}catch(f){}try{b()}catch(f){}}function q(){var b=a("<div/>",{id:"pizzabtn_wrapper"}).prependTo("body"),c={width:a(window).width(),height:a(window).height(),position:"fixed"};console.dir(c),b.css(c);var d=a("#pizzabtn");0===d.length&&(d=a("<div/>",{id:"pizzabtn"}).prependTo(b)),d.addClass("pizzabtn_normal"),d.css({display:"none","-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"-webkit-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-moz-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-ms-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-o-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear",transition:"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear"});var e=a("<img/>",{id:"pizzabtnImg",src:h.ButtonImage,css:{width:h.ButtonSize.W,height:h.ButtonSize.H,opacity:h.ButtonOpacity,"transition-property":"opacity, width, height","timing-function":"linear","-webkit-transition-property":"opacity, width, height","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height","-o-timing-function":"linear"}}).appendTo(pizzabtn),f=a("<span/>",{id:"hintText",css:{opacity:0,"transition-property":"opacity","timing-function":"linear","-webkit-transition-property":"opacity","-webkit-timing-function":"linear","-moz-transition-property":"opacity","-moz-timing-function":"linear","-o-transition-property":"opacity","-o-timing-function":"linear","transition-duration":h.HintShowDuration+"s","-webkit-transition-duration":h.HintShowDuration+"s","-moz-transition-duration":h.HintShowDuration+"s","-o-transition-duration":h.HintShowDuration+"s"},html:h.HintText.replace(/ /g,"&nbsp;")}).appendTo(pizzabtn);pizzabtn.hintTextActive=!1,o(),f.makeInvisible=function(){this.css({"transition-duration":h.HintHideDuration+"s","-webkit-transition-duration":h.HintHideDuration+"s","-moz-transition-duration":h.HintHideDuration+"s","-o-transition-duration":h.HintHideDuration+"s"}),this.css("opacity",0)},d.center=function(){var b=a("#pizzabtn_wrapper");this.css("top",(b.innerHeight()-this.height())/2+a(window).scrollTop()+"px"),this.css("left",(b.innerWidth()-this.width())/2+a(window).scrollLeft()+"px")},d.show=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeIn(1e3*h.ButtonShowDuration)},1e3*h.ButtonShowDelay)},d.hide=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeOut(1e3*h.ButtonHideDuration)},1e3*h.ButtonHideDelay)},d.dragAnimate=function(){e.attr("src",h.ButtonDragImage),setTimeout(function(){e.css({"transition-duration":h.ButtonDragDuration+"s","-webkit-transition-duration":h.ButtonDragDuration+"s","-moz-transition-duration":h.ButtonDragDuration+"s","-o-transition-duration":h.ButtonDragDuration+"s"}),e.css({opacity:h.ButtonDragOpacity,width:h.ButtonDragSize.W,height:h.ButtonDragSize.H})},1e3*h.ButtonDragDelay)},d.undragAnimate=function(){e.attr("src",h.ButtonImage),setTimeout(function(){e.css({"transition-duration":h.ButtonUndragDuration+"s","-webkit-transition-duration":h.ButtonUndragDuration+"s","-moz-transition-duration":h.ButtonUndragDuration+"s","-o-transition-duration":h.ButtonUndragDuration+"s"}),e.css({opacity:h.ButtonOpacity,width:h.ButtonSize.W,height:h.ButtonSize.H})},1e3*h.ButtonUndragDelay)},d.showHint=function(){var a=this;setTimeout(function(){f.css(i),a.hintTextActive=!0},1e3*h.HintLaunchDelay)},d.hideHint=function(){var a=this;f.makeInvisible(),setTimeout(function(){a.animateDuringHintHide()},100),a.hintTextActive=!1},d.hideHintDelay=function(){setTimeout(function(){f.makeInvisible()},1e3*h.HintLaunchDuration)},d.animateDuringHintHide=function(){var a=this,b=f.outerWidth(),c=(b-h.ButtonSize.W)/2;c>0&&a.css({width:h.ButtonSize.W,height:h.ButtonSize.H,left:a.position().left+c})};try{var g=(window.innerHeight-h.ButtonSize.H/2)*h.ButtonPosition.Y,j=(a("body").innerWidth()-h.ButtonSize.W/2)*h.ButtonPosition.X+a(window).scrollLeft()+"px";d.css({left:j,top:g})}catch(l){}return k(),d}var c="1.0",d="b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b";String.prototype.hashCode=function(){var b,c,a=0;if(0==this.length)return a;for(b=0,l=this.length;l>b;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a|=0;return a};var h=a.extend({type:"iframe",domain:"",fancyboxJsPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js",fancyboxCssPath:"https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css",mainStyleCss:"style.css",jqueryPepPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",buttonAnimationTimeAfterFancybox:400,HideAfterFirstShow:!1,ContentURL:"http://app.ecwid.com/jsp/2557212/m",BaseInsets:{T:4,B:4,L:4,R:4},ButtonEnabled:!1,ButtonVisible:!1,ButtonOpenInsets:{T:32,B:32,L:32,R:32},ButtonPosition:{X:.5,Y:.5},ButtonSize:{W:64,H:64},ButtonDragSize:{W:68,H:68},ButtonOpenSize:{W:64,H:64},ButtonInactiveSize:{W:64,H:64},ButtonOpacity:.8,ButtonDragOpacity:1,ButtonOpenOpacity:1,ButtonInactiveOpacity:.5,ButtonImage:"https://pizzabtn.herokuapp.com/images/probtn/gray.png",ButtonDragImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonOpenImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonInactiveImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ClosePosition:{X:123,Y:123},CloseSize:{W:64,H:64},CloseActiveSize:{W:72,H:72},CloseOpacity:.6,CloseActiveOpacity:1,CloseImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",CloseActiveImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",HintInsets:{T:4,B:4,L:4,R:4},HintLabelInsets:{T:4,B:4,L:4,R:4},HintImageInsets:{T:8,B:8,L:8,R:8},HintText:"Press me",HintFont:{Family:"Arial",Size:18},HintFontColor:{R:1,G:1,B:1,A:1},HintOpacity:.8,HintImage:"https://pizzabtn.herokuapp.com/images/probtn/hint.png",HintArrowSize:{W:8,H:8},HintArrowOffset:{T:0,B:0,L:0,R:0},HintArrowImageT:"",HintArrowImageB:"",HintArrowImageL:"",HintArrowImageR:"",ContentInsets:{T:-2,B:-2,L:-2,R:-2},ContentWebViewInsets:{T:12,B:12,L:12,R:12},ContentImageInsets:{T:32,B:32,L:32,R:32},ContentOpacity:1,ContentBackOpacity:1,ContentBackColor:{R:0,G:0,B:0,A:1},ContentActivityColor:{R:0,G:0,B:0,A:1},ContentImage:"",ContentArrowSize:{W:14,H:14},ContentArrowOffset:{T:8,B:8,L:9,R:9},ContentArrowImageT:"",ContentArrowImageB:"",ContentArrowImageL:"",ContentArrowImageR:"",DefaultDuration:.1,DefaultDelay:0,OpenDuration:.2,OpenDelay:.5,CloseDuration:.2,CloseDelay:.5,ButtonShowDuration:.2,ButtonShowDelay:0,ButtonHideDuration:.2,ButtonHideDelay:0,ButtonDragDuration:.1,ButtonDragDelay:0,ButtonUndragDuration:.2,ButtonUndragDelay:0,ButtonInactiveDuration:.1,ButtonInactiveDelay:5,ButtonInertiaSpeed:512,ButtonInertiaSpeedMin:32,ButtonInertiaSpeedMax:1024,ButtonInertiaFactor:6,CloseShowDuration:.1,CloseShowDelay:0,CloseHideDuration:.2,CloseHideDelay:0,CloseActiveDuration:.1,CloseActiveDelay:0,CloseUnactiveDuration:.1,CloseUnactiveDelay:0,HintLaunchDuration:3e4,HintLaunchDelay:0,HintShowDuration:.1,HintShowDelay:0,HintHideDuration:.2,HintHideDelay:0,ContentShowDuration:.1,ContentShowDelay:0,ContentHideDuration:.2,ContentHideDelay:0,HideInFrame:!0},b);console.log("Params:"),console.dir(b),console.dir(h);var i={opacity:h.HintOpacity,"font-size":h.HintFont.Size,"font-family":h.HintFont.Family,color:"white",padding:"4px",background:"url('"+h.HintImage+"')"},j=n();a(document).ready(function(){function v(){p(function(){console.log("onOrientationChange event"),o(),a.fancybox.isOpen&&(u=!0,a.fancybox.close())})}function w(){h.HideInFrame===!0&&window.self!==window.top||x()}function x(){function c(){try{"function"==typeof a.pep.toggleAll?d():a.getScript(h.jqueryPepPath,d)}catch(b){a.getScript(h.jqueryPepPath,d)}}function d(){function d(){var c=m()&&window.jscd.mobile,d=b.position(),e=d.top,f=d.left,g=window.innerWidth,i=window.innerHeight,j="0px",k="0px",l=(g+h.ButtonSize.W)/2,n=(i+h.ButtonSize.H)/2;e>=n&&(j=i-h.ButtonSize.H+"px"),f>=l&&(k=g-h.ButtonSize.W+"px");var p=c?[h.ButtonSize.H/4,h.ButtonSize.H/4+5,h.ButtonSize.H/4,h.ButtonSize.H/4+5]:[h.ButtonSize.H+5,h.ButtonSize.H/2,h.ButtonSize.H+5,h.ButtonSize.H/2];window.jscd.mobile&&h.ButtonSize.H>70&&(p=[h.ButtonSize.H/8,h.ButtonSize.H/8,h.ButtonSize.H/8,h.ButtonSize.H/8]);var q={property:c?"left":"top",currentValue:c?f:e,finishValue:c?k:j},r=a("#pizzabtn").offset().left,s=a("#pizzabtn").offset().top;z("ContentShowed",1),a.pep.toggleAll(!1),a.fancybox.open({href:h.ContentURL,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",type:"iframe",autoCenter:!0,scrolling:"no",margin:p,height:"100%",minWidth:100,minHeight:100,iframe:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",preload:!1,scrolling:"yes"},helpers:{overlay:{locked:!1}},beforeLoad:function(){a("#hintText").hide(),a(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms"),b.css(q.property,q.finishValue),"top"==q.property?b.css("left",r+"px"):b.css("top",s+"px"),"iOS"===window.jscd.os&&a(document.body).bind("touchmove",function(a){a.preventDefault(),a.stopPropagation(),a.returnValue=!1}),a("html").css("overflow","hidden")},afterShow:function(){a(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms"),a(".fancybox-iframe").first().contents().find("html").css("visibility","visible !important"),b.bind("click",a.fancybox.close)},afterClose:function(){o(),"iOS"===window.jscd.os&&a(document.body).unbind("touchmove"),a("html").css("overflow","auto"),b.unbind("click"),a.pep.toggleAll(!0),b.css(q.property,q.currentValue+"px"),1==h.HideAfterFirstShow&&(z("Closed",1),z("Hidded",1),b.hide())}})}z(),z("Showed",1),C(),h.ButtonEnabled&&h.ButtonVisible&&b.show(),b.hideHintDelay(),b.showHint();var c=!1;b.moved=!1,b.pep({useCSSTranslation:!1,constrainTo:"parent",cssEaseString:"cubic-bezier(0, .50, .50, 1)",cssEaseDuration:600,velocityMultiplier:1,startThreshold:[1,1],droppable:"#closeButton",initiate:k,start:function(){p(function(){0==b.moved&&b.dragAnimate(),b.moved=!0,b.hintTextActive&&b.hideHint(),j.show(),z("Moved",1),o()})},drag:function(){p(function(){var d=b[0].getBoundingClientRect(),e=j[0].getBoundingClientRect();d.top+d.height>a(window).height()&&console.log("Moved stop!");var f=!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom);f&&0!==e.width?c||(j.overlayActive(),c=!0):c&&(j.overlayUnactive(),c=!1)})},stop:function(){b.moved?(o(),c?(z("Closed",1),z("Hidded",1),b.hide()):b.undragAnimate()):p(function(){console.log("Left offset before open:"),console.log(a("#pizzabtn").offset().left),d()}),j.hide(),b.moved=!1,c=!1}})}a("head").append('<link rel="stylesheet" href="'+h.mainStyleCss+'" type="text/css" />'),a("head").append('<link rel="stylesheet" href="'+h.fancyboxCssPath+'" type="text/css" />'),a("head").append("<style type='text/css'> .fancybox-inner { -webkit-overflow-scrolling: touch !important; overflow: scroll !important; } </style>"),a("head").append(a("<style/>",{id:"probtn_style",type:"text/css",html:["#pizzabtn.pizzabtn_normal { display: block; clear: both; position: device-fixed !important; }",".close_pro_button_normal{ width:"+h.CloseSize.W+"px; height:"+h.CloseSize.H+"px; opacity:"+h.CloseOpacity+"; display: block; clear: both; }"].join("\n")}));var b=q();"function"==typeof a.fancybox?c():a.getScript(h.fancyboxJsPath,c)}function y(b,c,d,e){a.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateUserStatistic?BundleID="+e+"&Version=1.0&DeviceType=web&DeviceUID="+d+"&localDomain="+l+"&Statistic="+'{"'+b+'": "'+c+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function z(a,b,c){var d="1234";(""==a||null==a)&&(a="Opened"),(""==b||null==b)&&(b=1),d=A(),""==c||null==c?y(a,b,d,g):B(a,b,d,g)}function A(){var a="1234";if(null!=f("probtnId"));else{var b=new Date;b=b.getTime(),a=b.toString()+"-"+navigator.userAgent.toString().hashCode(),e("probtnId",a,365)}return a=f("probtnId")}function B(b,c,d,e){a.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateCustomStatistic?BundleID="+e+"&DeviceType=web&Version=1.0&DeviceUID="+d+"&localDomain="+l+"&Statistic="+'{"'+b+'": "'+c+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function C(){try{z("Resolution",jscd.screen,1),z("Browser",jscd.browser,1),z("BrowserVersion",jscd.browserVersion,1),z("OS",jscd.os+" "+jscd.osVersion,1)}catch(a){}}var g=document.domain.replace("www.","");(""==g||null==g)&&(g="example.com");var l=g;""!=h.domain&&null!=h.domain&&(g=h.domain);var n="onorientationchange"in window,r=n?"orientationchange":"resize";window.innerHeight,window.innerWidth;var u=!1;a(window).bind(r,v),a.getJSON("https://pizzabtn.herokuapp.com/1/functions/getClientSettings?BundleID="+g+"&DeviceType=web&DeviceUID="+A()+"&Location[Longitude]=0&Location[Latitude]=0&Version="+c+"&X-ProBtn-Token="+d+"&random="+Math.random()+"&callback=?",function(c){try{a.extend(h,c.result,b),i={opacity:h.HintOpacity,"font-size":h.HintFont.Size,"font-family":h.HintFont.Family,color:"rgb("+100*h.HintFontColor.R+"%, "+100*h.HintFontColor.G+"%, "+100*h.HintFontColor.B+"%)","padding-left":h.HintLabelInsets.L,"padding-top":h.HintLabelInsets.T,"padding-right":h.HintLabelInsets.R,"padding-bottom":h.HintLabelInsets.B,background:"url('"+h.HintImage+"')"}}catch(d){}}).done(function(){}).fail(function(){}).always(w)})}}(jQuery);

// Browser data - from
// http://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
(function (window) {
    try {
        var unknown = 'Unbekannt';

        // screen
        var screenSize = '';
        var width = '';
        var height = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        //browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 3.11', r:/Win16/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows ME', r:/Windows ME/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];

        try {
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }
            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;

            }
        } catch(ex) {
            os = unknown;
        }

        window.jscd = {
            screen: screenSize,
            screenWidth: width,
            screenHeight: height,
            browser: browser,
            browserVersion: version,
            mobile: mobile,
            os: os,
            osVersion: osVersion,
            cookies: cookieEnabled
        };
    } catch(ex) {};
}(this));


(function ($) {
    //load nessesary libraries and show button
    $.fn.StartButton = function (options) {

        //plugin version
        var mainVersion = "1.0";
        var XProBtnToken = "b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b";

        String.prototype.hashCode = function(){
            var hash = 0, i, char;
            if (this.length == 0) return hash;
            for (i = 0, l = this.length; i < l; i++) {
                char  = this.charCodeAt(i);
                hash  = ((hash<<5)-hash)+char;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        };

        function createCookie(name, value, days) {
            var expires = "";
            if(days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            }
            document.cookie = name+"="+value+expires+"; path=/";
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1,c.length);
                if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }

        function eraseCookie(name) {
            createCookie(name, "", -1);
        }

        var params = $.extend({
            type: "iframe",
            domain: "",
            fancyboxJsPath: "https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js",
            fancyboxCssPath: "https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css",
            //mainStyleCss: "http://vknopke.azurewebsites.net/style.css",
            mainStyleCss: "style.css",
            jqueryPepPath: "https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",
            buttonAnimationTimeAfterFancybox: 400,

            HideAfterFirstShow: false,

            //base params
            ContentURL: "http://app.ecwid.com/jsp/2557212/m", //site url address
            BaseInsets: { // Базовое смещение от краев экрана с учетом статус бара
                T: 4.0,
                B: 4.0,
                L: 4.0,
                R: 4.0,
            },
            ButtonEnabled: false, // Включена / выключена
            ButtonVisible: false, // видна / не видна
            // Кнопка
            ButtonOpenInsets: { // Смещение в открытом состоянии
                T: 32.0,
                B: 32.0,
                L: 32.0,
                R: 32.0,
            },
            ButtonPosition: { // Позиция
                X: 0.5, // По умолчанию центр экрана
                Y: 0.5, // По умолчанию центр экрана
            },
            ButtonSize: { // Размер
                W: 64.0,
                H: 64.0,
            },
            ButtonDragSize: { // Размер при перемещении
                W: 68.0,
                H: 68.0,
            },
            ButtonOpenSize: { // Размер в открытом состоянии
                W: 64.0,
                H: 64.0,
            },
            ButtonInactiveSize: { // Размер в неактивном состоянии
                W: 64.0,
                H: 64.0,
            },
            ButtonOpacity: 0.8, // Прозрачность
            ButtonDragOpacity: 1.0, // Прозрачность при перемещении
            ButtonOpenOpacity: 1.0, // Прозрачность в открытом состоянии
            ButtonInactiveOpacity: 0.5, // Прозрачность в неактивном состоянии
            ButtonImage: "https://pizzabtn.herokuapp.com/images/probtn/gray.png",
            ButtonDragImage: "https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",
            ButtonOpenImage: "https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",
            ButtonInactiveImage: "https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",

            ClosePosition: { // Позиция
                X: 123, // По умолчанию центр экрана
                Y: 123, // По умолчанию центр экрана
            },
            CloseSize: { // Размер
                W: 64,
                H: 64,
            },
            CloseActiveSize: { // Размер в активном состоянии
                W: 72,
                H: 72,
            },
            CloseOpacity: 0.6, // Прозрачность
            CloseActiveOpacity: 1.0, // Прозрачность в активном состоянии
            CloseImage: "https://pizzabtn.herokuapp.com/images/probtn/close.png", // Ссылка на изображение
            CloseActiveImage: "https://pizzabtn.herokuapp.com/images/probtn/close.png", // Ссылка на изображение в активном состоянии

            HintInsets: { // Смещение от краев
                T: 4.0,
                B: 4.0,
                L: 4.0,
                R: 4.0,
            },
            HintLabelInsets: { // Смещение для текста
                T: 4.0,
                B: 4.0,
                L: 4.0,
                R: 4.0,
            },
            HintImageInsets: { // Бордюры для изображения
                T: 8.0,
                B: 8.0,
                L: 8.0,
                R: 8.0,
            },
            HintText: "Press me", // Текст
            HintFont: { // Шрифт
                Family: "Arial",
                Size: 18,
            },
            HintFontColor: { // Цвет
                R: 1.0,
                G: 1.0,
                B: 1.0,
                A: 1.0,
            },
            HintOpacity: 0.8, // Прозрачность подсказки
            HintImage: "https://pizzabtn.herokuapp.com/images/probtn/hint.png", // Ссылка на изображение

            HintArrowSize: { // Размер стрелки
                W: 8.0,
                H: 8.0,
            },
            HintArrowOffset: { // Нахлест стрелки
                T: 0.0,
                B: 0.0,
                L: 0.0,
                R: 0.0,
            },
            HintArrowImageT: "", // Ссылка на изображение
            HintArrowImageB: "", // Ссылка на изображение
            HintArrowImageL: "", // Ссылка на изображение
            HintArrowImageR: "", // Ссылка на изображение

            // Контент
            ContentInsets: { // Смещение от краев
                T: -2.0,
                B: -2.0,
                L: -2.0,
                R: -2.0,
            },
            ContentWebViewInsets: { // Смещение для WebView
                T: 12.0,
                B: 12.0,
                L: 12.0,
                R: 12.0,
            },
            ContentImageInsets: { // Бордюры для изображения
                T: 32.0,
                B: 32.0,
                L: 32.0,
                R: 32.0,
            },
            ContentOpacity: 1.0, // Прозрачность
            ContentBackOpacity: 1.0, // Прозрачность фоновой части контента
            ContentBackColor: { // Цвет фоновой части контента
                R: 0.0,
                G: 0.0,
                B: 0.0,
                A: 1.0,
            },
            ContentActivityColor: { // Цвет индикатора загрузки
                R: 0.0,
                G: 0.0,
                B: 0.0,
                A: 1.0,
            },
            ContentImage: "", // Ссылка на изображение

            ContentArrowSize: { // Размер стрелки
                W: 14.0,
                H: 14.0,
            },
            ContentArrowOffset: { // Нахлест стрелки
                T: 8.0,
                B: 8.0,
                L: 9.0,
                R: 9.0,
            },
            ContentArrowImageT: "", // Ссылка на изображение
            ContentArrowImageB: "", // Ссылка на изображение
            ContentArrowImageL: "", // Ссылка на изображение
            ContentArrowImageR: "", // Ссылка на изображение

            // Настройки анимации

            DefaultDuration: 0.1, // Стандартная длительность анимации
            DefaultDelay: 0.0, // Стандартная задежка анимации

            OpenDuration: 0.2, // Длительность анимации "Открытия"
            OpenDelay: 0.5, // Задержка анимации "Открытия"
            CloseDuration: 0.2, // Длительность анимации "Закрытия"
            CloseDelay: 0.5, // Задержка анимации "Закрытия"

            ButtonShowDuration: 0.2, // Длительность анимации "Показать"
            ButtonShowDelay: 0.0, // Задержка анимации "Показать"
            ButtonHideDuration: 0.2, // Длительность анимации "Скрыть"
            ButtonHideDelay: 0.0, // Задержка анимации "Скрыть"
            ButtonDragDuration: 0.1, // Длительность анимации "Начать перемещать"
            ButtonDragDelay: 0.0, // Задержка анимации "Начать перемещать"
            ButtonUndragDuration: 0.2, // Длительность анимации "Перестать перемещать"
            ButtonUndragDelay: 0.0, // Задержка анимации "Перестать перемещать"
            ButtonInactiveDuration: 0.1, // Длительность анимации "Переход в неактивное состояние"
            ButtonInactiveDelay: 5.0, // Время простоя перед переходом в неактивное состояние
            ButtonInertiaSpeed: 512.0, // Скорость анимации "Инерция"
            ButtonInertiaSpeedMin: 32.0, // Максимальная скорость анимации "Инерция"
            ButtonInertiaSpeedMax: 1024.0, // Минимальная скорость анимации "Инерция"
            ButtonInertiaFactor: 6.0, // Множитель анимации "Инерция"

            CloseShowDuration: 0.1, // Длительность анимации "Показать область закрытия"
            CloseShowDelay: 0.0, // Задержка анимации "Показать область закрытия"
            CloseHideDuration: 0.2, // Длительность анимации "Скрыть область закрытия"
            CloseHideDelay: 0.0, // Задержка анимации "Скрыть область закрытия"
            CloseActiveDuration: 0.1, // Длительность анимации "Активировать область закрытия"
            CloseActiveDelay: 0.0, // Задержка анимации "Активировать область закрытия"
            CloseUnactiveDuration: 0.1, // Длительность анимации "Деактивировать область закрытия"
            CloseUnactiveDelay: 0.0, // Задержка анимации "Деактивировать область закрытия"

            HintLaunchDuration: 30000.0, // Длительность анимации "Показать при запуске подсказку"
            HintLaunchDelay: 0.0, // Задержка анимации "Показать при запуске подсказку"
            HintShowDuration: 0.1, // Длительность анимации "Показать подсказку"
            HintShowDelay: 0.0, // Задержка анимации "Показать подсказку"
            HintHideDuration: 0.2, // Длительность анимации "Скрыть подсказку"
            HintHideDelay: 0.0, // Задержка анимации "Скрыть подсказку"

            ContentShowDuration: 0.1, // Длительность анимации "Показать контент"
            ContentShowDelay: 0.0, // Задержка анимации "Показать контент"
            ContentHideDuration: 0.2, // Длительность анимации "Скрыть контент"
            ContentHideDelay: 0.0, // Задержка анимации "Скрыть контент",

            HideInFrame: true, // Скрывать, если кнопка показывается внутри другой кнопки
        }, options);

        console.log("Params:");
        console.dir(options);
        console.dir(params);

        // hint style
        var hintTextStyle = {
            "opacity": params.HintOpacity,
            "font-size": params.HintFont.Size,
            "font-family": params.HintFont.Family,
            "color": "white",
            "padding": "4px",
            "background": "url('"+params.HintImage+"')",
        };

        var closeButton = initCloseButton();

        function changeBodySize() {
            var opts = {
                width: window.availWidth,
                height: window.availHeight
            }
            if(window.jscd.browser === "Microsoft Internet Explorer") {
                opts.overflow = "auto"
            }
            $('body').css(opts);

        }

        // landscape
        function isLandscape() {
            return ($(window).width() > $(window).height());
        }

        $(document).ready(function () {
            var currentDomain = document.domain.replace("www.","");
            if(currentDomain == "" || currentDomain == null) {
                currentDomain = "example.com";
            };

            var realDomain = currentDomain;
            //rewrite domain if it specified in plugins params
            if ((params.domain!="") && (params.domain!=null)) {
                currentDomain = params.domain;
            } else {
            };

            // orientation
            var supportsOrientationChange = "onorientationchange" in window;
            var orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

            var windowHeight = window.innerHeight;
            var windowWidth = window.innerWidth;


            var closeAfterOrientationChange = false;
            function onOrientationChange(e) {

                MaximizeWrapper(function() {
                    console.log("onOrientationChange event");

                    MinimizeWrapper();

                    if($.fancybox.isOpen) {
                        closeAfterOrientationChange = true;
                        $.fancybox.close();
                    };
                });
            }

            $(window).bind(orientationEvent, onOrientationChange);

            $.getJSON("https://pizzabtn.herokuapp.com/1/functions/getClientSettings?BundleID="+currentDomain+"&DeviceType=web&DeviceUID="+GetDeviceUID()+"&Location[Longitude]=0&Location[Latitude]=0&Version="+mainVersion+"&X-ProBtn-Token="+XProBtnToken+"&random="+Math.random()+"&callback=?",
                function(data) {
                    try {
                        $.extend(params, data.result, options);

                        hintTextStyle = {
                            "opacity": params.HintOpacity,
                            "font-size": params.HintFont.Size,
                            "font-family": params.HintFont.Family,
                            "color": "rgb("+ params.HintFontColor.R*100 +"%, "+params.HintFontColor.G*100+"%, "+params.HintFontColor.B*100+"%)",
                            "padding-left": params.HintLabelInsets.L,
                            "padding-top": params.HintLabelInsets.T,
                            "padding-right": params.HintLabelInsets.R,
                            "padding-bottom": params.HintLabelInsets.B,
                            "background": "url('"+params.HintImage+"')",
                        };
                    } catch(ex) {
                    };
                }).done(function(){}).fail(function(){}).always(CheckInFrame);

            function CheckInFrame() {
                if (params.HideInFrame === true && window.self !== window.top)
                { }
                else
                {
                    BeginButtonProcess();
                }
            };
            // XXX BEGIN BUTTON PROCESS

            function BeginButtonProcess() {
                $('head').append('<link rel="stylesheet" href="'+params.mainStyleCss+'" type="text/css" />');
                $('head').append('<link rel="stylesheet" href="'+params.fancyboxCssPath+'" type="text/css" />');
                $('head').append("<style type='text/css'> .fancybox-inner { -webkit-overflow-scrolling: touch !important; overflow: scroll !important; } </style>");

                // append pizzabtn and close btn styles
                $('head').append(
                    $('<style/>', {
                        id: 'probtn_style',
                        type: "text/css",
                        html: [
                            '#pizzabtn.pizzabtn_normal { display: block; clear: both; position: device-fixed !important; }',
                            '.close_pro_button_normal{ width:'+params.CloseSize.W+'px; height:'+params.CloseSize.H+'px; opacity:'+params.CloseOpacity+'; display: block; clear: both; }',
                        ].join("\n")
                    })
                );

                // get or create pizzabtn
                var pizzabtn = initPizzaButton();

                // load fancybox and jquery.pep
                if(typeof $.fancybox == 'function') {
                     loadPep();
                } else {
                    $.getScript(params.fancyboxJsPath, loadPep); //fancybox end
                }

                function loadPep() {
                    try {
                        if(typeof $.pep.toggleAll == 'function') {
                             AllLoadedButtonProcess();
                        } else {
                            $.getScript(params.jqueryPepPath, AllLoadedButtonProcess);
                        };
                    } catch(ex) {
                        $.getScript(params.jqueryPepPath, AllLoadedButtonProcess);
                    };
                }

                ///
                function AllLoadedButtonProcess() {
                    SendStatisticsData();
                    SendStatisticsData("Showed", 1);
                    SendBrowserStatsInfo();

                    // show button
                    if(params.ButtonEnabled && params.ButtonVisible) {
                        pizzabtn.show();
                    }

                    //hide hint after params.HintLaunchDuration time (in seconds)
                    pizzabtn.hideHintDelay();

                    //show hint with nessesary animation
                    pizzabtn.showHint();

                    // help vars
                    var overlaped = false;

                    pizzabtn.moved = false;
                    pizzabtn.pep({
                        // hardwareAccelerate: false,
                        useCSSTranslation: false,
                        constrainTo: 'parent',
                        // cssEaseString: 'cubic-bezier(0.225, 0.500, 0.580, 1.000)', //default
                        // cssEaseString: 'cubic-bezier(0, 1, 1, 1)', // fast
                        // cssEaseString: 'cubic-bezier(0, 0, 1, 1)', // linear
                        // cssEaseString: 'cubic-bezier(.42, 0, .58, 1)', // ease-in-out
                        // cssEaseString: 'cubic-bezier(0, 0, .58, 1)', // ease-out
                        cssEaseString: 'cubic-bezier(0, .50, .50, 1)',
                        cssEaseDuration: 600,
                        velocityMultiplier: 1.0,
                        startThreshold: [1, 1],
                        droppable: '#closeButton',
                        initiate: changeBodySize,
                        start: function() {
                            MaximizeWrapper(function() {
                                if(pizzabtn.moved == false) {
                                    pizzabtn.dragAnimate();
                                };
                                pizzabtn.moved = true;
                                //hide hint
                                if(pizzabtn.hintTextActive) {
                                    pizzabtn.hideHint();
                                }
                                // show close button
                                closeButton.show();
                                SendStatisticsData("Moved", 1);

                                MinimizeWrapper();
                            });
                        },
                        drag: function() {
                            MaximizeWrapper(function() {

                            var pizzabtnRect = pizzabtn[0].getBoundingClientRect();
                            var closeButtonRect = closeButton[0].getBoundingClientRect();

                            /*console.log("pizzabtnRect:");
                            console.dir(pizzabtnRect);
                            console.dir($(window).height());
                            console.log((pizzabtnRect.top + pizzabtnRect.height));*/

                            if ((pizzabtnRect.top + pizzabtnRect.height) > $(window).height()) {
                                //pizzabtn.moved = false;
                                console.log("Moved stop!");
                            }

                            var overlap = !(pizzabtnRect.right < closeButtonRect.left || pizzabtnRect.left > closeButtonRect.right || pizzabtnRect.bottom < closeButtonRect.top || pizzabtnRect.top > closeButtonRect.bottom);
                            if(overlap && closeButtonRect.width !== 0) {
                                if(!overlaped) {
                                    closeButton.overlayActive();
                                    overlaped = true;
                                }
                            } else {
                                if(overlaped) {
                                    closeButton.overlayUnactive();
                                    overlaped = false;
                                }
                            }
                            });
                        },
                        stop: function() {
                            //MinimizeWrapper();

                            if(!pizzabtn.moved) {
                                MaximizeWrapper(function() {
                                    console.log("Left offset before open:");
                                    console.log($("#pizzabtn").offset().left);
                                    onButtonTap();
                                });

                            } else {
                                MinimizeWrapper();

                                if(overlaped) {
                                    SendStatisticsData("Closed", 1);
                                    SendStatisticsData("Hidded", 1);
                                    pizzabtn.hide();
                                } else {
                                    pizzabtn.undragAnimate();
                                };
                            }
                            closeButton.hide();
                            pizzabtn.moved = false;
                            overlaped = false;

                            /*var pizzabtn_wrapper = $("#pizzabtn_wrapper");
                            var opts = {
                                width: "auto",
                                height: "auto",
                                position: "fixed"
                            };
                            pizzabtn_wrapper.css(opts);*/
                        }
                    });

                    function onButtonTap() {
                        //MaximizeWrapper(function() {

                        var isMobileLandscape = (isLandscape() && window.jscd.mobile),
                            position          = pizzabtn.position(),
                            buttonTop         = position.top,
                            buttonLeft        = position.left,
                            winWidth          = window.innerWidth,
                            winHeight         = window.innerHeight,
                            finishTop         = '0px',
                            finishLeft        = '0px',
                            widthCenter       = (winWidth + params.ButtonSize.W) / 2,
                            heightCenter      = (winHeight + params.ButtonSize.H) / 2;

                        // top or bottom
                        if(heightCenter <= buttonTop) {
                            finishTop = (winHeight - params.ButtonSize.H) + 'px';
                        }
                        // left or right
                        if(widthCenter <= buttonLeft) {
                            finishLeft = (winWidth - params.ButtonSize.W) + 'px';
                        }

                        var margins = (isMobileLandscape)
                            ? [params.ButtonSize.H/4, params.ButtonSize.H/4 +5, params.ButtonSize.H/4, params.ButtonSize.H/4 +5]
                            : [params.ButtonSize.H+5, params.ButtonSize.H/2, params.ButtonSize.H+5, params.ButtonSize.H/2];

                        if ((window.jscd.mobile) && (params.ButtonSize.H > 70))
                        {
                            margins = [params.ButtonSize.H/8, params.ButtonSize.H/8, params.ButtonSize.H/8, params.ButtonSize.H/8];
                        };

                        var positionObj = {
                            property: (isMobileLandscape) ? "left" : "top",
                            currentValue: (isMobileLandscape) ? buttonLeft : buttonTop,
                            finishValue: (isMobileLandscape) ? finishLeft : finishTop
                        }

                        var InitLeft = $("#pizzabtn").offset().left;
                        var InitTop = $("#pizzabtn").offset().top;

                        // send content showed stat
                        SendStatisticsData("ContentShowed", 1);

                        $.pep.toggleAll(false);
                        $.fancybox.open({
                            href: params.ContentURL,
                            sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                            type: 'iframe',
                            autoCenter: true,
                            scrolling: 'no',
                            margin: margins,
                            height: "100%",
                            minWidth: 100,
                            minHeight: 100,
                            iframe: {
                                sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                                preload: false,
                                scrolling: "yes"
                            },
                            helpers: {
                                overlay: {
                                  locked: false
                                }
                            },
                            beforeLoad: function() {

                                $("#hintText").hide();

                                $(".fancybox-iframe").first().attr("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");


                                pizzabtn.css(positionObj.property, positionObj.finishValue);
                                if (positionObj.property=='top') {
                                    pizzabtn.css('left', InitLeft+'px');
                                } else {
                                    pizzabtn.css('top', InitTop+'px');
                                }

                                if(window.jscd.os === "iOS") {
                                    $(document.body).bind("touchmove", function(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        e.returnValue = false; // ie
                                    });
                                }
                                $('html').css("overflow", "hidden");
                            },
                            afterShow: function() {
                                $(".fancybox-iframe").first().attr("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
                                $(".fancybox-iframe").first().contents().find("html").css("visibility", "visible !important");

                                pizzabtn.bind("click", $.fancybox.close);
                            },
                            afterClose: function () {
                                MinimizeWrapper();
                                if(window.jscd.os === "iOS") {
                                    $(document.body).unbind('touchmove');
                                }
                                $('html').css("overflow", "auto");
                                pizzabtn.unbind('click');
                                $.pep.toggleAll(true);
                                // if(closeAfterOrientationChange) {
                                    // pizzabtn.center();
                                    // closeAfterOrientationChange = false;
                                // } else {

                                    pizzabtn.css(positionObj.property, positionObj.currentValue + 'px');

                                // }

                                if(params.HideAfterFirstShow == true) {
                                    SendStatisticsData("Closed", 1);
                                    SendStatisticsData("Hidded", 1);
                                    pizzabtn.hide();
                                };
                            }
                        });
                    //});
                    }
                }
            };

            // XXX STATISTICS

            function SendStat(name, value, probtnId, currentDomain) {
                $.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateUserStatistic?BundleID="+currentDomain+"&Version=1.0&DeviceType=web&DeviceUID="+probtnId+"&localDomain="+realDomain+"&Statistic="+"{\"" + name + "\": \"" + value + "\"}&"+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",
                function(){}).done(function(){}).fail(function(){}).always(function(){});
            }

            ///
            /// Send stats to probtn
            /// <values>
            /// paramName - name for statistics parameter
            /// value - value of this paarameter. Default is 1
            /// custom - if set to 1, this param and it's value will be send as custom stats
            /// </values>
            ///
            function SendStatisticsData(paramName, value, custom) {
                var probtnId = "1234";

                if(paramName == "" || paramName == null) {
                    paramName = "Opened";
                };
                if(value == "" || value == null) {
                    value = 1;
                };
                /*if(probtnId != "" || probtnId != null) {
                    probtnId = "1234";
                };*/
                probtnId = GetDeviceUID();

                if(custom == "" || custom == null) {
                    SendStat(paramName, value, probtnId, currentDomain);
                } else {
                    SendCustomStat(paramName, value, probtnId, currentDomain);
                };
            }

            function GetDeviceUID() {
                var probtnId = "1234";
                if(readCookie("probtnId") != null) {
                } else {
                    //set cookie
                    var currentdate = new Date();
                    currentdate = currentdate.getTime();
                    probtnId = currentdate.toString()+"-"+navigator.userAgent.toString().hashCode();
                    createCookie("probtnId", probtnId, 365);
                };
                probtnId = readCookie("probtnId");
                return probtnId;
            }

            ///
            /// Function used to send "custom" statistics
            /// for example information about resolution, OS, browser, browser version
            /// This information would be rewriten by last resived data for deviceUID each time when it send to server
            ///
            function SendCustomStat(name, value, probtnId, currentDomain) {
                $.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateCustomStatistic?BundleID="+currentDomain+"&DeviceType=web&Version=1.0&DeviceUID="+probtnId+"&localDomain="+realDomain+"&Statistic="+"{\"" + name + "\": \"" + value + "\"}&"+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",
                function(){}).done(function(){}).fail(function(){}).always(function(){});
            }

            ///
            /// send information about browser version, resolution and some other data
            ///
            function SendBrowserStatsInfo() {
                try {
                    SendStatisticsData("Resolution", jscd.screen, 1);
                    SendStatisticsData("Browser", jscd.browser, 1);
                    SendStatisticsData("BrowserVersion", jscd.browserVersion, 1);
                    SendStatisticsData("OS", jscd.os +' '+ jscd.osVersion, 1);
                } catch(ex) {}
            }
        });


        // XXX CONSTRUCTORS

        // close button constructor
        function initCloseButton() {
            var btn = $('<img/>', {
                id: 'closeButton',
                src: params.CloseImage,
                class: 'close_pro_button_normal',
                css: {
                    position: 'absolute',
                    display: 'none'
                }
            }).prependTo('body');

            btn.active = false;
            btn.rect = {};

            btn.css({
                '-webkit-transform': 'translateZ(0)',
                '-moz-transform': 'translateZ(0)',
                '-ms-transform': 'translateZ(0)',
                '-o-transform': 'translateZ(0)',
                'transform': 'translateZ(0)',

                '-webkit-backface-visibility': 'hidden',
                '-moz-backface-visibility': 'hidden',
                '-ms-backface-visibility': 'hidden',
                'backface-visibility': 'hidden',

                '-webkit-perspective': 1000,
                '-moz-perspective': 1000,
                '-ms-perspective': 1000,
                'perspective': 1000,

                'transition-property': 'opacity, width, height, left, top',
                'timing-function': 'linear',

                '-webkit-transition-property': 'opacity, width, height, left, top',
                '-webkit-timing-function': 'linear',

                '-moz-transition-property': 'opacity, width, height, left, top',
                '-moz-timing-function': 'linear',

                '-o-transition-property': 'opacity, width, height, left, top',
                '-o-timing-function': 'linear',
            });

            btn.center = function() {
                var body = $('body');
                this.css('top', (body.innerHeight() - this.height())/2 + $(window).scrollTop() + 'px');
                this.css('left', (body.innerWidth() - this.width())/2 + $(window).scrollLeft() + 'px');
            }

            btn.show = function() {
                var me = this;
                me.center();
                setTimeout(function() {
                    me.stop(true, true).fadeIn(params.CloseShowDuration * 1000);
                }, params.CloseShowDelay * 1000);
            }

            btn.hide = function() {
                var me = this;
                setTimeout(function() {
                    me.stop(true, true).fadeOut(params.CloseHideDuration * 1000);
                }, params.CloseHideDelay * 1000);
            }

            btn.setTransitionDuration = function(duration) {
                var val = duration + 's';
                this.css({
                    'transition-duration': val,
                    '-webkit-transition-duration': val,
                    '-moz-transition-duration': val,
                    '-o-transition-duration': val,
                });
            }

            // Animation when close button become active - change size and opacity
            btn.overlayActive = function() {
                var me = this;
                var position = me.position();
                me.setTransitionDuration(params.CloseActiveDuration);
                setTimeout(function() {
                    me.css({
                        opacity: params.CloseActiveOpacity,
                        width: params.CloseActiveSize.W,
                        height: params.CloseActiveSize.H,
                        left: position.left - ((params.CloseActiveSize.W - params.CloseSize.W)/2),
                        top: position.top - ((params.CloseActiveSize.H - params.CloseSize.H)/2),
                    });
                }, params.CloseActiveDelay * 1000);
            }

            // Animation when button become inactive - restore close button size and opacity
            btn.overlayUnactive = function() {
                var me = this;
                var body = $('body');
                var top = (body.innerHeight() - closeButton.height()) / 2 + $(window).scrollTop(); ///+$(window).scrollTop()
                var left = (body.innerWidth() - closeButton.width()) / 2 + $(window).scrollLeft(); ///+$(window).scrollLeft()

                me.setTransitionDuration(params.CloseUnactiveDuration);
                setTimeout(function() {
                    var options = {
                        opacity: params.CloseOpacity,
                        width: params.CloseSize.W,
                        height: params.CloseSize.H,
                        left: left,
                        top: top,
                    };

                    me.css(options);
                }, params.CloseUnactiveDelay * 1000);
            };

            btn.setTransitionDuration(params.CloseActiveDuration);

            btn.center();

            return btn;
        }

        function MinimizeWrapper(callback) {
                    console.log("MinimizeWrapper");
                    var pizzabtn_wrapper = $("#pizzabtn_wrapper");
                    var opts = {
                                width: "auto",
                                height: "auto",
                                position: "fixed"
                    };
                    pizzabtn_wrapper.css(opts);

            try {
                callback();
            }catch(ex) {};
        }

        ///
        ///
        ///
        function MaximizeWrapper(callback) {
            console.log("MaximizeWrapper1");
            var pizzabtn_wrapper = $("#pizzabtn_wrapper");
            var opts = {
                width: $(window).width(),
                height: $(window).height(),
                position: "fixed"
            };

            //alert("Window width - "+$(window).width());
            pizzabtn_wrapper.css(opts);

            /*console.log("Button positions check:");
            console.log("$('#pizzabtn').offset().left - " + $("#pizzabtn").offset().left);
            console.log("$('#pizzabtn').offset().top - " + $("#pizzabtn").offset().top);
            console.log("pizzabtn_wrapper.width() - " + pizzabtn_wrapper.width());
            console.log("pizzabtn_wrapper.height() - " + pizzabtn_wrapper.height());*/

            try {
                if (($("#pizzabtn").offset().left - $(window).scrollLeft())  > pizzabtn_wrapper.width()) {
                    console.log("change button left");
                    var newleft = pizzabtn_wrapper.width() - $("#pizzabtn").width();
                    $("#pizzabtn").css({ left: newleft+'px' });
                };
            } catch(ex) {};
            try {
                if (($("#pizzabtn").offset().top - $(window).scrollTop()) > pizzabtn_wrapper.height()) {
                    console.log("change button top");
                    var newtop = pizzabtn_wrapper.height() - $("#pizzabtn").height();
                    $("#pizzabtn").css({ top: newtop+'px' });
                };
            } catch(ex) {};

            try {
                callback();
            }catch(ex) {};
        }

        // pizza button constructor
        function initPizzaButton() {

            var pizzabtn_wrapper = $("<div/>", {
                    id: "pizzabtn_wrapper"
                }).prependTo('body');

            var opts = {
                width: $(window).width(),
                height: $(window).height(),
                position: "fixed"
            };
            console.dir(opts);
            pizzabtn_wrapper.css(opts);

            var btn = $("#pizzabtn");
            if(btn.length === 0) {
                btn = $("<div/>", {
                    id: "pizzabtn"
                }).prependTo(pizzabtn_wrapper);
            };
            btn.addClass("pizzabtn_normal");
            btn.css({
                'display': 'none',

                '-webkit-transform': 'translateZ(0)',
                '-moz-transform': 'translateZ(0)',
                '-ms-transform': 'translateZ(0)',
                '-o-transform': 'translateZ(0)',
                'transform': 'translateZ(0)',

                '-webkit-backface-visibility': 'hidden',
                '-moz-backface-visibility': 'hidden',
                '-ms-backface-visibility': 'hidden',
                'backface-visibility': 'hidden',

                '-webkit-perspective': 1000,
                '-moz-perspective': 1000,
                '-ms-perspective': 1000,
                'perspective': 1000,

                '-webkit-transition': 'top, left '+params.buttonAnimationTimeAfterFancybox+'ms linear',
                '-moz-transition': 'top, left '+params.buttonAnimationTimeAfterFancybox+'ms linear',
                '-ms-transition': 'top, left '+params.buttonAnimationTimeAfterFancybox+'ms linear',
                '-o-transition': 'top, left '+params.buttonAnimationTimeAfterFancybox+'ms linear',
                'transition': 'top, left '+params.buttonAnimationTimeAfterFancybox+'ms linear'
            });

            // add image
            var pizzabtnImg = $("<img/>", {
                id: "pizzabtnImg",
                src: params.ButtonImage,
                css: {
                    'width': params.ButtonSize.W,
                    'height': params.ButtonSize.H,
                    'opacity': params.ButtonOpacity,

                    'transition-property': 'opacity, width, height',
                    'timing-function': 'linear',

                    '-webkit-transition-property': 'opacity, width, height',
                    '-webkit-timing-function': 'linear',

                    '-moz-transition-property': 'opacity, width, height',
                    '-moz-timing-function': 'linear',

                    '-o-transition-property': 'opacity, width, height',
                    '-o-timing-function': 'linear',
                }
            }).appendTo(pizzabtn);

            // add hint text
            var hintText = $("<span/>", {
                id: "hintText",
                css: {
                    opacity: 0,

                    'transition-property': 'opacity',
                    'timing-function': 'linear',

                    '-webkit-transition-property': 'opacity',
                    '-webkit-timing-function': 'linear',

                    '-moz-transition-property': 'opacity',
                    '-moz-timing-function': 'linear',

                    '-o-transition-property': 'opacity',
                    '-o-timing-function': 'linear',

                    'transition-duration': params.HintShowDuration + 's',
                    '-webkit-transition-duration': params.HintShowDuration + 's',
                    '-moz-transition-duration': params.HintShowDuration + 's',
                    '-o-transition-duration': params.HintShowDuration + 's',
                },
                html: params.HintText.replace(/ /g,"&nbsp;")
            }).appendTo(pizzabtn);
            pizzabtn.hintTextActive = false;

            MinimizeWrapper();

            hintText.makeInvisible = function() {
                this.css({
                    'transition-duration': params.HintHideDuration + 's',
                    '-webkit-transition-duration': params.HintHideDuration + 's',
                    '-moz-transition-duration': params.HintHideDuration + 's',
                    '-o-transition-duration': params.HintHideDuration + 's',
                });
                this.css('opacity', 0);
            }

            btn.center = function() {
                var body = $('#pizzabtn_wrapper');
                this.css('top', (body.innerHeight() - this.height())/2 + $(window).scrollTop() + 'px');
                this.css('left', (body.innerWidth() - this.width())/2 + $(window).scrollLeft() + 'px');
            }

            btn.show = function() {
                var me = this;
                setTimeout(function() {
                    me.stop(true, true).fadeIn(params.ButtonShowDuration * 1000);
                }, params.ButtonShowDelay * 1000);
            }

            btn.hide = function() {
                var me = this;
                setTimeout(function() {
                    me.stop(true, true).fadeOut(params.ButtonHideDuration * 1000);
                }, params.ButtonHideDelay * 1000);
            }

            btn.dragAnimate = function() {
                pizzabtnImg.attr("src", params.ButtonDragImage);
                setTimeout(function() {
                    pizzabtnImg.css({
                        'transition-duration': params.ButtonDragDuration + 's',
                        '-webkit-transition-duration': params.ButtonDragDuration + 's',
                        '-moz-transition-duration': params.ButtonDragDuration + 's',
                        '-o-transition-duration': params.ButtonDragDuration + 's',
                    });
                    pizzabtnImg.css({
                        opacity: params.ButtonDragOpacity,
                        width: params.ButtonDragSize.W,
                        height: params.ButtonDragSize.H
                    });

                }, params.ButtonDragDelay * 1000);
            }

            btn.undragAnimate = function() {
                pizzabtnImg.attr("src", params.ButtonImage);
                setTimeout(function() {
                    pizzabtnImg.css({
                        'transition-duration': params.ButtonUndragDuration + 's',
                        '-webkit-transition-duration': params.ButtonUndragDuration + 's',
                        '-moz-transition-duration': params.ButtonUndragDuration + 's',
                        '-o-transition-duration': params.ButtonUndragDuration + 's',
                    });
                    pizzabtnImg.css({
                        opacity: params.ButtonOpacity,
                        width: params.ButtonSize.W,
                        height: params.ButtonSize.H
                    });

                    //MinimizeWrapper();

                }, params.ButtonUndragDelay * 1000);
            }

            btn.showHint = function() {
                var me = this;
                setTimeout(function() {
                    hintText.css(hintTextStyle);
                    me.hintTextActive = true;
                }, params.HintLaunchDelay * 1000);
            }

            btn.hideHint = function() {
                var me = this;
                hintText.makeInvisible();
                setTimeout(function() {
                    me.animateDuringHintHide();
                }, 100)
                me.hintTextActive = false;
            }

            btn.hideHintDelay = function() {
                setTimeout(function() {
                    hintText.makeInvisible();
                }, params.HintLaunchDuration * 1000);
            }

            btn.animateDuringHintHide = function() {
                var me = this;
                var hintWidth = hintText.outerWidth();
                var diffWidth = (hintWidth - params.ButtonSize.W) / 2;
                if(diffWidth > 0) {
                    me.css({
                        width: params.ButtonSize.W,
                        height: params.ButtonSize.H,
                        left: me.position().left + diffWidth
                    });
                }
            }

            try {
                var top = (window.innerHeight - (params.ButtonSize.H /2)) * (params.ButtonPosition.Y);
                var left = ($('body').innerWidth() - (params.ButtonSize.W /2)) * (params.ButtonPosition.X) + $(window).scrollLeft() + 'px';
                btn.css({
                    left: left,
                    top: top,
                });
            } catch(ex) {}

            changeBodySize();

            return btn;
        }
    };
})(jQuery);
