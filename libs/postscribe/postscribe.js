/*! cdn 2018-05-10 14:05:41 */

!function(){function t(){}var e={afterAsync:t,afterDequeue:t,afterStreamStart:t,afterWrite:t,autoFix:!0,beforeEnqueue:t,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:t,error:function(t){throw t},releaseAsync:!1},r=this,n=void 0;function i(t){return t!==n&&null!==t}if(!r.postscribe){var o=Array.prototype.slice,s=function(t){return t[t.length-1]},a=function(){var t="data-ps-";function e(e,r,n){var o=t+r;if(2===arguments.length){var s=e.getAttribute(o);return i(s)?String(s):s}i(n)&&""!==n?e.setAttribute(o,n):e.removeAttribute(o)}function r(t,r){var n=t.ownerDocument;h(this,{root:t,options:r,win:n.defaultView||n.parentWindow,doc:n,parser:htmlParser("",{autoFix:r.autoFix}),actuals:[t],proxyHistory:"",proxyRoot:n.createElement(t.nodeName),scriptStack:[],writeQueue:[]}),e(this.proxyRoot,"proxyof",0)}return r.prototype.write=function(){var t;for([].push.apply(this.writeQueue,arguments);!this.deferredRemote&&this.writeQueue.length;)c(t=this.writeQueue.shift())?this.callFunction(t):this.writeImpl(t)},r.prototype.callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this.onScriptStart(e),t.call(this.win,this.doc),this.onScriptDone(e)},r.prototype.writeImpl=function(t){this.parser.append(t);for(var e,r,n,i,o,s=[];(e=this.parser.readToken())&&!(r=!!((o=e)&&"tagName"in o)&&!!~o.tagName.toLowerCase().indexOf("script"))&&!(n=!!((i=e)&&"tagName"in i)&&!!~i.tagName.toLowerCase().indexOf("style"));)(e=this.options.beforeWriteToken(e))&&s.push(e);this.writeStaticTokens(s),r&&this.handleScriptToken(e),n&&this.handleStyleToken(e)},r.prototype.writeStaticTokens=function(t){var e=this.buildChunk(t);if(e.actual)return e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this.walkChunk(),e},r.prototype.buildChunk=function(e){var r=this.actuals.length,n=[],i=[],o=[];return u(e,function(e){var s=htmlParser.tokenToString(e);if(n.push(s),e.attrs){if(!/^noscript$/i.test(e.tagName)){var a=r++;i.push(s.replace(/(\/?>)/," "+t+"id="+a+" $1")),"ps-script"!==e.attrs.id&&"ps-style"!==e.attrs.id&&o.push("atomicTag"===e.type?"":"<"+e.tagName+" "+t+"proxyof="+a+(e.unary?" />":">"))}}else i.push(s),o.push("endTag"===e.type?s:"")}),{tokens:e,raw:n.join(""),actual:i.join(""),proxy:o.join("")}},r.prototype.walkChunk=function(){for(var t,r=[this.proxyRoot];i(t=r.shift());){var n=1===t.nodeType;if(!(n&&e(t,"proxyof"))){n&&(this.actuals[e(t,"id")]=t,e(t,"id",null));var o=t.parentNode&&e(t.parentNode,"proxyof");o&&this.actuals[o].appendChild(t)}r.unshift.apply(r,l(t.childNodes))}},r.prototype.handleScriptToken=function(t){var e=this.parser.clear();if(e&&this.writeQueue.unshift(e),t.src=t.attrs.src||t.attrs.SRC,t=this.options.beforeWriteToken(t)){t.src&&this.scriptStack.length?this.deferredRemote=t:this.onScriptStart(t);var r=this;this.writeScriptToken(t,function(){r.onScriptDone(t)})}},r.prototype.handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this.writeStyleToken(t),e&&this.write()},r.prototype.writeStyleToken=function(t){var e=this.buildStyle(t);this.insertStyle(e),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},r.prototype.buildStyle=function(t){var e=this.doc.createElement(t.tagName);return e.setAttribute("type",t.type),p(t.attrs,function(t,r){e.setAttribute(t,r)}),e},r.prototype.insertStyle=function(t){this.writeImpl('<span id="ps-style"/>');var e=this.doc.getElementById("ps-style");e.parentNode.replaceChild(t,e)},r.prototype.onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},r.prototype.onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this.onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({message:"Bad script nesting or script finished twice"})},r.prototype.writeScriptToken=function(t,e){var r=this.buildScript(t),n=this.shouldRelease(r),i=this.options.afterAsync;t.src&&(r.src=t.src,this.scriptLoadHandler(r,n?i:function(){e(),i()}));try{this.insertScript(r),t.src&&!n||e()}catch(t){this.options.error(t),e()}},r.prototype.buildScript=function(t){var e=this.doc.createElement(t.tagName);return p(t.attrs,function(t,r){e.setAttribute(t,r)}),t.content&&(e.text=t.content),e},r.prototype.insertScript=function(t){this.writeImpl('<span id="ps-script"/>');var e=this.doc.getElementById("ps-script");e.parentNode.replaceChild(t,e)},r.prototype.scriptLoadHandler=function(t,e){function r(){t=t.onload=t.onreadystatechange=t.onerror=null}var n=this.options.error;function i(){r(),e()}h(t,{onload:function(){i()},onreadystatechange:function(){/^(loaded|complete)$/.test(t.readyState)&&i()},onerror:function(){var i;i={message:"remote script failed "+t.src},r(),n(i),e()}})},r.prototype.shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},r}();r.postscribe=function(){var n=0,o=[],u=null;function f(){var e,r=o.shift();r&&((e=s(r)).afterDequeue(),r.stream=function(e,r,i){(u=new a(e,i)).id=n++,u.name=i.name||u.id,d.streams[u.name]=u;var o=e.ownerDocument,s={close:o.close,open:o.open,write:o.write,writeln:o.writeln};function c(t){t=i.beforeWrite(t),u.write(t),i.afterWrite(t)}h(o,{close:t,open:t,write:function(){return c(l(arguments).join(""))},writeln:function(){return c(l(arguments).join("")+"\n")}});var p=u.win.onerror||t;return u.win.onerror=function(t,e,r){i.error({msg:t+" - "+e+":"+r}),p.apply(u.win,arguments)},u.write(r,function(){h(o,s),u.win.onerror=p,i.done(),u=null,f()}),u}.apply(null,r),e.afterStreamStart())}function d(n,s,a){var h;c(a)&&(a={done:a}),h=(h=a)||{},p(e,function(t,e){i(h[t])||(h[t]=e)}),a=h;var l=[n=/^#/.test(n)?r.document.getElementById(n.substr(1)):n.jquery?n[0]:n,s,a];return n.postscribe={cancel:function(){l.stream?l.stream.abort():l[1]=t}},a.beforeEnqueue(l),o.push(l),u||f(),n.postscribe}return h(d,{streams:{},queue:o,WriteStream:a})}()}function c(t){return"function"==typeof t}function u(t,e,r){var n,i=t&&t.length||0;for(n=0;n<i;n++)e.call(r,t[n],n)}function p(t,e,r){var n;for(n in t)t.hasOwnProperty(n)&&e.call(r,n,t[n])}function h(t,e){return p(e,function(e,r){t[e]=r}),t}function l(t){try{return o.call(t)}catch(r){var e=[];return u(t,function(t){e.push(t)}),e}}}();