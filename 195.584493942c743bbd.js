"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[195],{2195:(gt,w,O)=>{O.r(w),O.d(w,{scopeCss:()=>ht});const _="-shadowcsshost",b="-shadowcssslotted",y="-shadowcsscontext",C=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",N=new RegExp("("+_+C,"gim"),M=new RegExp("("+y+C,"gim"),D=new RegExp("("+b+C,"gim"),g=_+"-no-combinator",K=/-shadowcsshost-no-combinator([^\s]*)/,U=[/::shadow/g,/::content/g],m=/-shadowcsshost/gim,$=t=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${t}\\b)`,"gim"),A=$("::slotted"),G=$(":host"),I=$(":host-context"),z=/\/\*\s*[\s\S]*?\*\//g,J=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,V=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,X=/([{}])/g,Z=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",H=(t,e)=>{const o=tt(t);let s=0;return o.escapedString.replace(V,(...r)=>{const n=r[2];let l="",c=r[4],a="";c&&c.startsWith("{"+S)&&(l=o.blocks[s++],c=c.substring(8),a="{");const p=e({selector:n,content:l});return`${r[1]}${p.selector}${r[3]}${a}${p.content}${c}`})},tt=t=>{const e=t.split(X),o=[],s=[];let r=0,n=[];for(let c=0;c<e.length;c++){const a=e[c];"}"===a&&r--,r>0?n.push(a):(n.length>0&&(s.push(n.join("")),o.push(S),n=[]),o.push(a)),"{"===a&&r++}return n.length>0&&(s.push(n.join("")),o.push(S)),{escapedString:o.join(""),blocks:s}},B=(t,e,o)=>t.replace(e,(...s)=>{if(s[2]){const r=s[2].split(","),n=[];for(let l=0;l<r.length;l++){const c=r[l].trim();if(!c)break;n.push(o(g,c,s[3]))}return n.join(",")}return g+s[3]}),W=(t,e,o)=>t+e.replace(_,"")+o,nt=(t,e,o)=>e.indexOf(_)>-1?W(t,e,o):t+e+o+", "+e+" "+t+o,L=(t,e)=>t.replace(Z,(o,s="",r,n="",l="")=>s+e+n+l),P=(t,e,o,s,r)=>H(t,n=>{let l=n.selector,c=n.content;return"@"!==n.selector[0]?l=((t,e,o,s)=>t.split(",").map(r=>s&&r.indexOf("."+s)>-1?r.trim():((t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t))(r,e)?((t,e,o)=>{const r="."+(e=e.replace(/\[is=([^\]]*)\]/g,(f,...d)=>d[0])),n=f=>{let d=f.trim();if(!d)return"";if(f.indexOf(g)>-1)d=((t,e,o)=>{if(m.lastIndex=0,m.test(t)){const s=`.${o}`;return t.replace(K,(r,n)=>L(n,s)).replace(m,s+" ")}return e+" "+t})(f,e,o);else{const R=f.replace(m,"");R.length>0&&(d=L(R,r))}return d},l=(t=>{const e=[];let o=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(n,l)=>{const c=`__ph-${o}__`;return e.push(l),o++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(n,l,c)=>{const a=`__ph-${o}__`;return e.push(c),o++,l+a}),placeholders:e}})(t);let i,c="",a=0;const p=/( |>|\+|~(?!=))\s*/g;let u=!((t=l.content).indexOf(g)>-1);for(;null!==(i=p.exec(t));){const f=i[1],d=t.slice(a,i.index).trim();u=u||d.indexOf(g)>-1,c+=`${u?n(d):d} ${f} `,a=p.lastIndex}const k=t.substring(a);return u=u||k.indexOf(g)>-1,c+=u?n(k):k,((t,e)=>e.replace(/__ph-(\d+)__/g,(o,s)=>t[+s]))(l.placeholders,c)})(r,e,o).trim():r.trim()).join(", "))(n.selector,e,o,s):(n.selector.startsWith("@media")||n.selector.startsWith("@supports")||n.selector.startsWith("@page")||n.selector.startsWith("@document"))&&(c=P(n.content,e,o,s)),{selector:l.replace(/\s{2,}/g," ").trim(),content:c}}),E=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,`.${e}`),ht=(t,e,o)=>{const s=e+"-h",r=e+"-s",n=(t=>t.match(J)||[])(t);t=(t=>t.replace(z,""))(t);const l=[];if(o){const a=i=>{const p=`/*!@___${l.length}___*/`;return l.push({placeholder:p,comment:`/*!@${i.selector}*/`}),i.selector=p+i.selector,i};t=H(t,i=>"@"!==i.selector[0]?a(i):((i.selector.startsWith("@media")||i.selector.startsWith("@supports")||i.selector.startsWith("@page")||i.selector.startsWith("@document"))&&(i.content=H(i.content,a)),i))}const c=((t,e,o,s,r)=>{const n=((t,e)=>{const o="."+e+" > ",s=[];return t=t.replace(D,(...r)=>{if(r[2]){const n=r[2].trim(),c=o+n+r[3];let a="";for(let h=r[4]-1;h>=0;h--){const u=r[5][h];if("}"===u||","===u)break;a=u+a}const i=(a+c).trim(),p=`${a.trimEnd()}${c.trim()}`.trim();return i!==p&&s.push({orgSelector:i,updatedSelector:`${p}, ${i}`}),c}return g+r[3]}),{selectors:s,cssText:t}})(t=(t=>B(t,M,nt))(t=(t=>B(t,N,W))(t=(t=>t.replace(I,`$1${y}`).replace(G,`$1${_}`).replace(A,`$1${b}`))(t))),s);return t=(t=>U.reduce((e,o)=>e.replace(o," "),t))(t=n.cssText),e&&(t=P(t,e,o,s)),{cssText:(t=(t=E(t,o)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:n.selectors.map(l=>({orgSelector:E(l.orgSelector,o),updatedSelector:E(l.updatedSelector,o)}))}})(t,e,s,r);return t=[c.cssText,...n].join("\n"),o&&l.forEach(({placeholder:a,comment:i})=>{t=t.replace(a,i)}),c.slottedSelectors.forEach(a=>{const i=new RegExp((t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"))(a.orgSelector),"g");t=t.replace(i,a.updatedSelector)}),t}}}]);