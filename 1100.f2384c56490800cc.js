"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[1100],{1100:(D,i,o)=>{o.r(i),o.d(i,{default:()=>B});var r=o(5663),t=o(5879),p=o(900),l=o(2114),s=o(631),u=o(8689),c=o(8726),g=o(6047),h=o(410),d=o(8894),m=o(5187),v=o(1259),f=o(5011),y=o(1979),A=o(5005),Z=o(5413),T=o(7688),C=o(1698),I=o(8812),U=o(7554);function x(n,e){if(1&n){const a=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourConsoleModule"),t.qZA(),t._uU(10," is a minimal implementation of the tour UI that uses only the browser's JavaScript console to display tour steps. "),t.qZA(),t.TgZ(11,"p",3),t._uU(12,"Use left/right arrow keys to navigate through the tour and escape key to end the tour."),t.qZA(),t.TgZ(13,"p")(14,"button",4),t.NdJ("click",function(){t.CHM(a);const Y=t.oxw();return t.KtG(Y.tourService.start())}),t._uU(15," Start Demo Tour "),t.qZA()()}}function M(n,e){1&n&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-console"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourConsoleModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v9"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourConsoleModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA()(),t._UZ(23,"app-usage"))}const S=function(){return["above","below","after","before"]};function N(n,e){1&n&&(t.TgZ(0,"app-step-config"),t._UZ(1,"app-placement-config",7),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&n&&(t.xp6(1),t.Q6J("values",t.DdM(1,S)))}function P(n,e){1&n&&t._UZ(0,"app-faq")}function b(n,e){1&n&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-styling-active-tour-anchor")}let k=(()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"console/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"console/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"console/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"console/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"console/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"console/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"console/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"console/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"console/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"console/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"console/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"console/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"console/Misc"}],this.tourService=(0,t.f3M)(r.QL),this.delayAfterNavigation=(0,t.f3M)(p.h1)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"console",delayAfterNavigation:this.delayAfterNavigation})}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-console"]],standalone:!0,features:[t._Bn([(0,g.E)(r.pY)]),t.jDz],decls:7,vars:0,consts:[["header","Console","package","ngx-ui-tour-console"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],[1,"strong"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["value","above",3,"values"]],template:function(a,E){1&a&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,x,16,0,"ng-template",1),t.YNc(2,M,24,0,"ng-template",1),t.YNc(3,N,4,2,"ng-template",1),t.YNc(4,P,1,0,"ng-template",1),t.YNc(5,b,3,0,"ng-template",1),t.qZA(),t._UZ(6,"tour-hotkey-listener"))},dependencies:[c.Lq,c.qo,c.nj,l.j,l.V,r.U6,h.p,d.Z,s.fN,s.v0,u.Hi,u.Ls,m.G,v.e,f.t,y.s,A.A,Z.H,T.v,C.Q,I.w,U.J],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}.strong[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]  .touranchor--is-active{outline:2px solid var(--tui-negative)}"]}),n})();const B=(0,o(8836).Ve)(k)}}]);