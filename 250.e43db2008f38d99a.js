"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[250],{7250:(_,s,o)=>{o.r(s),o.d(s,{mdTransitionAnimation:()=>T});var t=o(9),c=o(191);const T=(O,e)=>{var a,r,l;const d="40px",m="back"===e.direction,g=e.leavingEl,E=(0,c.g)(e.enteringEl),f=E.querySelector("ion-toolbar"),n=(0,t.c)();if(n.addElement(E).fill("both").beforeRemoveClass("ion-page-invisible"),m?n.duration((null!==(a=e.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration((null!==(r=e.duration)&&void 0!==r?r:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${d})`,"translateY(0px)").fromTo("opacity",.01,1),f){const i=(0,t.c)();i.addElement(f),n.addAnimation(i)}if(g&&m){n.duration((null!==(l=e.duration)&&void 0!==l?l:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const i=(0,t.c)();i.addElement((0,c.g)(g)).onFinish(v=>{1===v&&i.elements.length>0&&i.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)",`translateY(${d})`).fromTo("opacity",1,0),n.addAnimation(i)}return n}}}]);