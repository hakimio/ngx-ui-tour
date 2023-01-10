"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[3093],{3093:(Z,T,m)=>{m.r(T),m.d(T,{startInputShims:()=>E});var A=m(5861),b=m(6642),v=m(5730);const w=new WeakMap,D=(t,n,e,o=0,s=!1)=>{w.has(t)!==e&&(e?N(t,n,o,s):O(t,n))},p=t=>t===t.getRootNode().activeElement,N=(t,n,e,o=!1)=>{const s=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),s.appendChild(r),w.set(t,r);const i="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",n.style.transform=`translate3d(${i}px,${e}px,0) scale(0)`},O=(t,n)=>{const e=w.get(t);e&&(w.delete(t),e.remove()),t.style.pointerEvents="",n.style.transform=""},I="input, textarea, [no-blur], [contenteditable]",H=function(){var t=(0,A.Z)(function*(n,e,o,s,r,c=!1){if(!o&&!s)return;const i=((t,n,e)=>{var o;return((t,n,e,o)=>{const s=t.top,r=t.bottom,c=n.top,u=c+15,S=.75*Math.min(n.bottom,o-e)-r,l=u-s,h=Math.round(S<0?-S:l>0?-l:0),_=Math.min(h,s-c),d=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,d)),scrollPadding:e,inputSafeY:4-(s-u)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),n.getBoundingClientRect(),e,t.ownerDocument.defaultView.innerHeight)})(n,o||s,r);if(o&&Math.abs(i.scrollAmount)<4)e.focus();else if(D(n,e,!0,i.inputSafeY,c),e.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let u;const f=function(){var l=(0,A.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",f),o&&(yield(0,b.c)(o,0,i.scrollAmount,i.scrollDuration)),D(n,e,!1,i.inputSafeY),e.focus()});return function(){return l.apply(this,arguments)}}(),S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",f)};if(o){const l=yield(0,b.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===e.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",f),void(u=setTimeout(f,1e3))}f()}});return function(e,o,s,r,c){return t.apply(this,arguments)}}(),C="$ionPaddingTimer",x=(t,n)=>{var e,o;if("INPUT"!==t.tagName||t.parentElement&&"ION-INPUT"===t.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(e=t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===o?void 0:o.tagName))return;const s=(0,b.f)(t);if(null===s)return;const r=s[C];r&&clearTimeout(r),n>0?s.style.setProperty("--keyboard-offset",`${n}px`):s[C]=setTimeout(()=>{s.style.setProperty("--keyboard-offset","0px")},120)},E=(t,n)=>{const e=document,o="ios"===n,s="android"===n,r=t.getNumber("keyboardHeight",290),c=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",o),u=t.getBoolean("inputBlurring",o),f=t.getBoolean("scrollPadding",!0),S=Array.from(e.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,h=new WeakMap,_=function(){var d=(0,A.Z)(function*(a){yield new Promise(L=>(0,v.c)(a,L));const P=a.shadowRoot||a,g=P.querySelector("input")||P.querySelector("textarea"),y=(0,b.f)(a),M=y?null:a.closest("ion-footer");if(g){if(y&&i&&!l.has(a)){const L=((t,n,e)=>{if(!e||!n)return()=>{};const o=i=>{p(n)&&D(t,n,i)},s=()=>D(t,n,!1),r=()=>o(!0),c=()=>o(!1);return(0,v.a)(e,"ionScrollStart",r),(0,v.a)(e,"ionScrollEnd",c),n.addEventListener("blur",s),()=>{(0,v.b)(e,"ionScrollStart",r),(0,v.b)(e,"ionScrollEnd",c),n.addEventListener("ionBlur",s)}})(a,g,y);l.set(a,L)}if("date"!==g.type&&"datetime-local"!==g.type&&(y||M)&&c&&!h.has(a)){const L=((t,n,e,o,s,r=!1)=>{let c;const i=f=>{c=(0,v.p)(f)},u=f=>{if(!c)return;const S=(0,v.p)(f);!((t,n,e)=>{if(n&&e){const o=n.x-e.x,s=n.y-e.y;return o*o+s*s>t*t}return!1})(6,c,S)&&!p(n)&&H(t,n,e,o,s,r)};return t.addEventListener("touchstart",i,{capture:!0,passive:!0}),t.addEventListener("touchend",u,!0),()=>{t.removeEventListener("touchstart",i,!0),t.removeEventListener("touchend",u,!0)}})(a,g,y,M,r,s);h.set(a,L)}}});return function(P){return d.apply(this,arguments)}}();u&&(()=>{let t=!0,n=!1;const e=document;(0,v.a)(e,"ionScrollStart",()=>{n=!0}),e.addEventListener("focusin",()=>{t=!0},!0),e.addEventListener("touchend",c=>{if(n)return void(n=!1);const i=e.activeElement;if(!i||i.matches(I))return;const u=c.target;u!==i&&(u.matches(I)||u.closest(I)||(t=!1,setTimeout(()=>{t||i.blur()},50)))},!1)})(),f&&(t=>{const n=document;n.addEventListener("focusin",s=>{x(s.target,t)}),n.addEventListener("focusout",s=>{x(s.target,0)})})(r);for(const d of S)_(d);e.addEventListener("ionInputDidLoad",d=>{_(d.detail)}),e.addEventListener("ionInputDidUnload",d=>{(d=>{if(i){const a=l.get(d);a&&a(),l.delete(d)}if(c){const a=h.get(d);a&&a(),h.delete(d)}})(d.detail)})}}}]);