"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[3808],{3808:(E,c,n)=>{n.r(c),n.d(c,{TuiHintModule:()=>z});var h=n(6895),a=n(5939),g=n(6976),t=n(4650),d=n(1841),v=n(5038),r=n(7279),l=n(9791),s=n(9367),p=n(3094),f=n(6488),T=n(5170),I=n(1830),A=n(3261),y=n(9411),Z=n(6113),U=n(3168),x=n(5210),S=n(4150),b=n(16),C=n(3796);function H(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourTuiHintModule"),t.qZA(),t._uU(10," is an implementation of the tour UI that uses "),t.TgZ(11,"a",3),t._uU(12,"Taiga UI"),t.qZA(),t._uU(13," Hint to display tour steps. "),t.qZA(),t.TgZ(14,"p")(15,"button",4),t.NdJ("click",function(){t.CHM(o);const O=t.oxw();return t.KtG(O.start())}),t._uU(16," Start Demo Tour "),t.qZA()()}}function M(e,i){1&e&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-tui-hint @taiga-ui/core @taiga-ui/cdk @taiga-ui/icons"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourTuiHintModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v3"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourTuiHintModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA(),t.TgZ(23,"li"),t._uU(24," Make sure Taiga UI is "),t.TgZ(25,"a",7),t._uU(26,"installed correctly"),t.qZA()()(),t._UZ(27,"app-usage"))}function B(e,i){if(1&e&&(t.TgZ(0,"app-step-config"),t._UZ(1,"app-placement-config",8),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&e){const o=t.oxw();t.xp6(1),t.Q6J("values",o.hintPlacements)}}function P(e,i){1&e&&t._UZ(0,"app-faq")}function N(e,i){if(1&e&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor"),2&e){const o=t.oxw();t.xp6(2),t.Q6J("defaultTemplate",o.defaultTemplate)}}let k=(()=>{class e{constructor(o,u){this.tourService=o,this.delayAfterNavigation=u,this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-hint/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-hint/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-hint/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-hint/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"tui-hint/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-hint/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-hint/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"tui-hint/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"tui-hint/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-hint/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-hint/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-hint/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-hint/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-hint/Misc"}],this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <div class="main-container">\r\n            <div class="title-container">\r\n                <h3>{{step?.title}}</h3>\r\n                <button\r\n                    tuiIconButton\r\n                    icon="tuiIconCloseLarge"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    (click)="tourService.end()"\r\n                ></button>\r\n            </div>\r\n            <p\r\n                class="content"\r\n                [innerHTML]="step?.content"\r\n            ></p>\r\n            <div class="buttons">\r\n                <button\r\n                    tuiButton\r\n                    type="button"\r\n                    icon="tuiIconChevronLeft"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    (click)="tourService.prev()"\r\n                    class="prev"\r\n                >\r\n                    {{step?.prevBtnTitle}}\r\n                </button>\r\n                <button\r\n                    tuiButton\r\n                    type="button"\r\n                    iconRight="tuiIconChevronRight"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    *ngIf="tourService.hasNext(step)"\r\n                    (click)="tourService.next()"\r\n                    class="next"\r\n                >\r\n                    {{step?.nextBtnTitle}}\r\n                </button>\r\n                <button\r\n                    tuiButton\r\n                    type="button"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    *ngIf="!tourService.hasNext(step)"\r\n                    (click)="tourService.end()"\r\n                >\r\n                    {{step?.endBtnTitle}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.hintPlacements=["top-left","top","top-right","bottom-left","bottom","bottom-right","left-top","left","left-bottom","right-top","right","right-bottom"]}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"tui-hint",delayAfterNavigation:this.delayAfterNavigation,centerAnchorOnScroll:!0,smoothScroll:!0})}start(){this.tourService.start()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.QL),t.Y36(g.h1))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tui-hint"]],decls:7,vars:0,consts:[["header","Taiga UI Hint","package","ngx-ui-tour-tui-hint"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["tuiLink","","href","https://taiga-ui.dev/getting-started","target","_blank"],["value","bottom-right","extraInfo","Accepts <a href='https://taiga-ui.dev/directives/hint-manual/API'>HintManual</a> direction options.",3,"values"],[3,"defaultTemplate"]],template:function(o,u){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,H,17,0,"ng-template",1),t.YNc(2,M,28,0,"ng-template",1),t.YNc(3,B,4,1,"ng-template",1),t.YNc(4,P,1,0,"ng-template",1),t.YNc(5,N,4,1,"ng-template",1),t.qZA(),t._UZ(6,"tour-step-template"))},dependencies:[d.R,v.C,r.qo,r.nj,l.V,s.v0,f.G,T.t,I.A,A.e,y.v,Z.Q,U.H,x.e,S.J,b.w,C.s,p.Ls],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]}),e})();var L=n(2510),Y=n(5349);let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ez,a.wx,L.Bz.forChild((0,r.Ve)(k)),r.Lq,r.Lx,l.j,s.fN,Y.m.withAnchorDirectiveType(a.C5),p.Hi]}),e})()}}]);