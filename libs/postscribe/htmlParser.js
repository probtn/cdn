/*! cdn 2017-12-07 19:12:36 */
!function(){function a(a,h){a=a||"",h=h||{};for(var i in b)b.hasOwnProperty(i)&&(h.autoFix&&(h["fix_"+i]=!0),h.fix=h.fix||h["fix_"+i]);var j=[],k=document.createElement("div"),l=function(a){return"string"==typeof a&&-1!==a.indexOf("&")?(k.innerHTML=a,k.textContent||k.innerText||a):a},m=function(b){a+=b},n=function(b){a=b+a},o={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("-->");return b>=0?{content:a.substr(4,b-1),length:b+3}:void 0},endTag:function(){var b=a.match(d);return b?{tagName:b[1],length:b[0].length}:void 0},atomicTag:function(){var b=p.startTag();if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,attrs:b.attrs,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.indexOf(">");if(-1===b)return null;var d=a.match(c);if(d){var g={},h={},i=d[2];return d[2].replace(e,function(a,b){if(arguments[2]||arguments[3]||arguments[4]||arguments[5])if(arguments[5])g[arguments[5]]="",h[b]=!0;else{var c=arguments[2]||arguments[3]||arguments[4]||f.test(b)&&b||"";g[b]=l(c)}else g[b]=null;i=i.replace(a,"")}),{tagName:d[1],attrs:g,booleanAttrs:h,rest:i,unary:!!d[3],length:d[0].length}}},chars:function(){var b=a.indexOf("<");return{length:b>=0?b:a.length}}},q=function(){for(var b in o)if(o[b].test(a)){g&&console.log("suspected "+b);var c=p[b]();return c?(g&&console.log("parsed "+b,c),c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}},r=function(a){for(var b;b=q();)if(a[b.type]&&a[b.type](b)===!1)return},s=function(){var b=a;return a="",b},t=function(){return a};return h.fix&&!function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.last=function(){return this[this.length-1]},d.lastTagNameEq=function(a){var b=this.last();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()},d.containsTagName=function(a){for(var b,c=0;b=this[c];c++)if(b.tagName===a)return!0;return!1};var e=function(a){return a&&"startTag"===a.type&&(a.unary=b.test(a.tagName)||a.unary,a.html5Unary=!/\/>$/.test(a.text)),a},f=q,g=function(){var b=a,c=e(f());return a=b,c},i=function(){var a=d.pop();n("</"+a.tagName+">")},j={startTag:function(a){var b=a.tagName;"TR"===b.toUpperCase()&&d.lastTagNameEq("TABLE")?(n("<TBODY>"),l()):h.fix_selfClose&&c.test(b)&&d.containsTagName(b)?d.lastTagNameEq(b)?i():(n("</"+a.tagName+">"),l()):a.unary||d.push(a)},endTag:function(a){var b=d.last();b?h.fix_tagSoup&&!d.lastTagNameEq(a.tagName)?i():d.pop():h.fix_tagSoup&&k()}},k=function(){f(),l()},l=function(){var a=g();a&&j[a.type]&&j[a.type](a)};q=function(){return l(),e(f())}}(),{append:m,readToken:q,readTokens:r,clear:s,rest:t,stack:j}}var b=function(){var a,b={},c=this.document.createElement("div");return a="<P><I></P></I>",c.innerHTML=a,b.tagSoup=c.innerHTML!==a,c.innerHTML="<P><i><P></P></i></P>",b.selfClose=2===c.childNodes.length,b}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,g=!1;a.supports=b,a.tokenToString=function(a){var b={comment:function(a){return"<!--"+a.content},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return g&&console.log(a),b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName;for(var c in a.attrs){b+=" "+c;var d=a.attrs[c];("undefined"==typeof a.booleanAttrs||"undefined"==typeof a.booleanAttrs[c])&&(b+='="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"')}return a.rest&&(b+=a.rest),b+(a.unary&&!a.html5Unary?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)},a.escapeAttributes=function(a){var b={};for(var c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.browserHasFlaw=a.browserHasFlaw||!b[h]&&h;this.htmlParser=a}();