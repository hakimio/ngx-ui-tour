"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[2957],{2957:(J,i,o)=>{o.r(i),o.d(i,{ConsoleModule:()=>E});var h=o(6895),g=o(2510),c=o(900),m=o(6976),t=o(4650),d=o(3827),v=o(4713),f=o(6488),y=o(5170),A=o(1830),C=o(3261),Z=o(9411),T=o(6113),I=o(3168),U=o(4150),x=o(16),M=o(3796),r=o(7279),s=o(9791),u=o(9367),p=o(3094);function S(n,e){if(1&n){const a=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourConsoleModule"),t.qZA(),t._uU(10," is a minimal implementation of the tour UI that uses only the browser's JavaScript console to display tour steps. "),t.qZA(),t.TgZ(11,"p",3),t._uU(12,"Use left/right arrow keys to navigate through the tour and escape key to end the tour."),t.qZA(),t.TgZ(13,"p")(14,"button",4),t.NdJ("click",function(){t.CHM(a);const D=t.oxw();return t.KtG(D.tourService.start())}),t._uU(15," Start Demo Tour "),t.qZA()()}}function N(n,e){1&n&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-console"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourConsoleModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v9"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourConsoleModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA()(),t._UZ(23,"app-usage"))}const P=function(){return["above","below","after","before"]};function Y(n,e){1&n&&(t.TgZ(0,"app-step-config"),t._UZ(1,"app-placement-config",7),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&n&&(t.xp6(1),t.Q6J("values",t.DdM(1,P)))}function B(n,e){1&n&&t._UZ(0,"app-faq")}function b(n,e){1&n&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-styling-active-tour-anchor")}let k=(()=>{class n{constructor(a,l){this.tourService=a,this.delayAfterNavigation=l,this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"console/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"console/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"console/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"console/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"console/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"console/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"console/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"console/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"console/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"console/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"console/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"console/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"console/Misc"}]}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"console",delayAfterNavigation:this.delayAfterNavigation,centerAnchorOnScroll:!0,smoothScroll:!0})}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(c.QL),t.Y36(m.h1))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-console"]],decls:7,vars:0,consts:[["header","Console","package","ngx-ui-tour-console"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],[1,"strong"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["value","above",3,"values"]],template:function(a,l){1&a&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,S,16,0,"ng-template",1),t.YNc(2,N,24,0,"ng-template",1),t.YNc(3,Y,4,2,"ng-template",1),t.YNc(4,B,1,0,"ng-template",1),t.YNc(5,b,3,0,"ng-template",1),t.qZA(),t._UZ(6,"tour-hotkey-listener"))},dependencies:[d.p,v.Z,f.G,y.t,A.A,C.e,Z.v,T.Q,I.H,U.J,x.w,M.s,r.qo,r.nj,s.V,u.v0,p.Ls],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}.strong[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]  .touranchor--is-active{outline:2px solid var(--tui-negative)}"]}),n})();var O=o(5349);let E=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.ez,g.Bz.forChild((0,r.Ve)(k)),c.U6,O.m.withAnchorDirectiveType(c.pY),r.Lq,s.j,u.fN,p.Hi]}),n})()}}]);