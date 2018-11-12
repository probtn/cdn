/*! cdn 2018-11-13 02:11:51 */

!function(){var t=function(){var t,e={},n=this.document.createElement("div");return t="<P><I></P></I>",n.innerHTML=t,e.tagSoup=n.innerHTML!==t,n.innerHTML="<P><i><P></P></i></P>",e.selfClose=2===n.childNodes.length,e}(),e=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,n=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,a=/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,r=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,i=!1;function s(s,o){s=s||"",o=o||{};for(var c in t)t.hasOwnProperty(c)&&(o.autoFix&&(o["fix_"+c]=!0),o.fix=o.fix||o["fix_"+c]);var u=document.createElement("div"),f=function(t){s=t+s},g={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},l={comment:function(){var t=s.indexOf("--\x3e");if(t>=0)return{content:s.substr(4,t-1),length:t+3}},endTag:function(){var t=s.match(n);if(t)return{tagName:t[1],length:t[0].length}},atomicTag:function(){var t=l.startTag();if(t){var e=s.slice(t.length);if(e.match(new RegExp("</\\s*"+t.tagName+"\\s*>","i"))){var n=e.match(new RegExp("([\\s\\S]*?)</\\s*"+t.tagName+"\\s*>","i"));if(n)return{tagName:t.tagName,attrs:t.attrs,content:n[1],length:n[0].length+t.length}}}},startTag:function(){if(-1===s.indexOf(">"))return null;var t=s.match(e);if(t){var n={},i={},o=t[2];return t[2].replace(a,function(t,e){if(arguments[2]||arguments[3]||arguments[4]||arguments[5])if(arguments[5])n[arguments[5]]="",i[e]=!0;else{var a=arguments[2]||arguments[3]||arguments[4]||r.test(e)&&e||"";n[e]="string"==typeof(s=a)&&-1!==s.indexOf("&")?(u.innerHTML=s,u.textContent||u.innerText||s):s}else n[e]=null;var s;o=o.replace(t,"")}),{tagName:t[1],attrs:n,booleanAttrs:i,rest:o,unary:!!t[3],length:t[0].length}}},chars:function(){var t=s.indexOf("<");return{length:t>=0?t:s.length}}},m=function(){for(var t in g)if(g[t].test(s)){i&&console.log("suspected "+t);var e=l[t]();return e?(i&&console.log("parsed "+t,e),e.type=e.type||t,e.text=s.substr(0,e.length),s=s.slice(e.length),e):null}};return o.fix&&function(){var t=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,e=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,n=[];n.last=function(){return this[this.length-1]},n.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},n.containsTagName=function(t){for(var e,n=0;e=this[n];n++)if(e.tagName===t)return!0;return!1};var a=function(e){return e&&"startTag"===e.type&&(e.unary=t.test(e.tagName)||e.unary,e.html5Unary=!/\/>$/.test(e.text)),e},r=m,i=function(){var t=n.pop();f("</"+t.tagName+">")},c={startTag:function(t){var a=t.tagName;"TR"===a.toUpperCase()&&n.lastTagNameEq("TABLE")?(f("<TBODY>"),g()):o.fix_selfClose&&e.test(a)&&n.containsTagName(a)?n.lastTagNameEq(a)?i():(f("</"+t.tagName+">"),g()):t.unary||n.push(t)},endTag:function(t){n.last()?o.fix_tagSoup&&!n.lastTagNameEq(t.tagName)?i():n.pop():o.fix_tagSoup&&u()}},u=function(){r(),g()},g=function(){var t,e,n=(t=s,e=a(r()),s=t,e);n&&c[n.type]&&c[n.type](n)};m=function(){return g(),a(r())}}(),{append:function(t){s+=t},readToken:m,readTokens:function(t){for(var e;e=m();)if(t[e.type]&&!1===t[e.type](e))return},clear:function(){var t=s;return s="",t},rest:function(){return s},stack:[]}}s.supports=t,s.tokenToString=function(t){var e={comment:function(t){return"\x3c!--"+t.content},endTag:function(t){return"</"+t.tagName+">"},atomicTag:function(t){return i&&console.log(t),e.startTag(t)+t.content+e.endTag(t)},startTag:function(t){var e="<"+t.tagName;for(var n in t.attrs){e+=" "+n;var a=t.attrs[n];void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[n]||(e+='="'+(a?a.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"')}return t.rest&&(e+=t.rest),e+(t.unary&&!t.html5Unary?"/>":">")},chars:function(t){return t.text}};return e[t.type](t)},s.escapeAttributes=function(t){var e={};for(var n in t){var a=t[n];e[n]=a&&a.replace(/(^|[^\\])"/g,'$1\\"')}return e};for(var o in t)s.browserHasFlaw=s.browserHasFlaw||!t[o]&&o;this.htmlParser=s}();