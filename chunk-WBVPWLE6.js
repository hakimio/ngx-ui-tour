import"./chunk-B4AJQJMI.js";function k(){let o=window,s=document;var h="hljs-ln",M="hljs-ln-line",g="hljs-ln-code",y="hljs-ln-numbers",m="hljs-ln-n",d="data-line-number",b=/\r\n|\r|\n/g;o.hljs?(o.hljs.initLineNumbersOnLoad=S,o.hljs.lineNumbersBlock=L,o.hljs.lineNumbersValue=F,C()):o.console.error("highlight.js not detected!");function O(e){for(var n=e;n;){if(n.className&&n.className.indexOf("hljs-ln-code")!==-1)return!0;n=n.parentNode}return!1}function w(e){for(var n=e;n.nodeName!=="TABLE";)n=n.parentNode;return n}function B(e){for(var n=e.toString(),r=e.anchorNode;r.nodeName!=="TD";)r=r.parentNode;for(var t=e.focusNode;t.nodeName!=="TD";)t=t.parentNode;var a=parseInt(r.dataset.lineNumber),i=parseInt(t.dataset.lineNumber);if(a!=i){var l=r.textContent,u=t.textContent;if(a>i){var f=a;a=i,i=f,f=l,l=u,u=f}for(;n.indexOf(l)!==0;)l=l.slice(1);for(;n.lastIndexOf(u)===-1;)u=u.slice(0,-1);for(var v=l,G=w(r),N=a+1;N<i;++N){var U=c('.{0}[{1}="{2}"]',[g,d,N]),X=G.querySelector(U);v+=`
`+X.textContent}return v+=`
`+u,v}else return n}document.addEventListener("copy",function(e){var n=window.getSelection();if(O(n.anchorNode)){var r;window.navigator.userAgent.indexOf("Edge")!==-1?r=B(n):r=n.toString(),e.clipboardData.setData("text/plain",r),e.preventDefault()}});function C(){var e=s.createElement("style");e.type="text/css",e.innerHTML=c(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[h,m,d]),s.getElementsByTagName("head")[0].appendChild(e)}function S(e){s.readyState==="interactive"||s.readyState==="complete"?p(e):o.addEventListener("DOMContentLoaded",function(){p(e)})}function p(e){try{var n=s.querySelectorAll("code.hljs,code.nohighlight");for(var r in n)n.hasOwnProperty(r)&&(_(n[r])||L(n[r],e))}catch(t){o.console.error("LineNumbers error: ",t)}}function _(e){return e.classList.contains("nohljsln")}function L(e,n){typeof e=="object"&&K(function(){e.innerHTML=E(e,n)})}function F(e,n){if(typeof e=="string"){var r=document.createElement("code");return r.innerHTML=e,E(r,n)}}function E(e,n){var r=H(e,n);return A(e),D(e.innerHTML,r)}function D(e,n){var r=j(e);if(r[r.length-1].trim()===""&&r.pop(),r.length>1||n.singleLine){for(var t="",a=0,i=r.length;a<i;a++)t+=c('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[M,y,m,d,g,a+n.startFrom,r[a].length>0?r[a]:" "]);return c('<table class="{0}">{1}</table>',[h,t])}return e}function H(e,n){return n=n||{},{singleLine:I(n),startFrom:R(e,n)}}function I(e){var n=!1;return e.singleLine?e.singleLine:n}function R(e,n){var r=1,t=r;isFinite(n.startFrom)&&(t=n.startFrom);var a=T(e,"data-ln-start-from");return a!==null&&(t=q(a,r)),t}function A(e){var n=e.childNodes;for(var r in n)if(n.hasOwnProperty(r)){var t=n[r];V(t.textContent)>0&&(t.childNodes.length>0?A(t):P(t.parentNode))}}function P(e){var n=e.className;if(/hljs-/.test(n)){for(var r=j(e.innerHTML),t=0,a="";t<r.length;t++){var i=r[t].length>0?r[t]:" ";a+=c(`<span class="{0}">{1}</span>
`,[n,i])}e.innerHTML=a.trim()}}function j(e){return e.length===0?[]:e.split(b)}function V(e){return(e.trim().match(b)||[]).length}function K(e){o.setTimeout(e,0)}function c(e,n){return e.replace(/\{(\d+)\}/g,function(r,t){return n[t]!==void 0?n[t]:r})}function T(e,n){return e.hasAttribute(n)?e.getAttribute(n):null}function q(e,n){if(!e)return n;var r=Number(e);return isFinite(r)?r:n}}export{k as activateLineNumbers};
