"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[845],{845:(O,l,n)=>{n.r(l),n.d(l,{TuiHintModule:()=>a});var g=n(6895),c=n(3077),m=n(812),t=n(4650),v=n(1649),f=n(2791),r=n(6287),s=n(9791),p=n(9367),h=n(3094),T=n(1843),A=n(8055),I=n(3480),y=n(1996),Z=n(8993),U=n(8240),x=n(561),C=n(1553),H=n(5104),b=n(6428),S=n(6130);function M(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourTuiHintModule"),t.qZA(),t._uU(10," is an implementation of the tour UI that uses "),t.TgZ(11,"a",3),t._uU(12,"Taiga UI"),t.qZA(),t._uU(13," Hint to display tour steps. "),t.qZA(),t.TgZ(14,"p")(15,"button",4),t.NdJ("click",function(){t.CHM(i);const z=t.oxw();return t.KtG(z.start())}),t._uU(16," Start Demo Tour "),t.qZA()()}}function B(e,o){1&e&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-tui-hint @taiga-ui/core @taiga-ui/cdk @taiga-ui/icons"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourTuiHintModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v3"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourTuiHintModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA(),t.TgZ(23,"li"),t._uU(24," Make sure Taiga UI is "),t.TgZ(25,"a",7),t._uU(26,"installed correctly"),t.qZA()()(),t._UZ(27,"app-usage"))}function N(e,o){if(1&e&&(t.TgZ(0,"app-step-config"),t._UZ(1,"app-placement-config",8),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&e){const i=t.oxw();t.xp6(1),t.Q6J("values",i.hintPlacements)}}function P(e,o){1&e&&t._UZ(0,"app-faq")}function k(e,o){if(1&e&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor"),2&e){const i=t.oxw();t.xp6(2),t.Q6J("defaultTemplate",i.defaultTemplate)}}class u{constructor(o,i){this.tourService=o,this.delayAfterNavigation=i,this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-hint/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-hint/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-hint/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-hint/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"tui-hint/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-hint/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-hint/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-hint/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-hint/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-hint/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-hint/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-hint/Misc"}],this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <div class="main-container">\r\n            <div class="title-container">\r\n                <h3>{{step?.title}}</h3>\r\n                <button\r\n                    tuiIconButton\r\n                    icon="tuiIconCloseLarge"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    (click)="tourService.end()"\r\n                ></button>\r\n            </div>\r\n            <p\r\n                class="content"\r\n                [innerHTML]="step?.content"\r\n            ></p>\r\n            <div class="buttons">\r\n                <button\r\n                    tuiButton\r\n                    type="button"\r\n                    icon="tuiIconChevronLeft"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    (click)="tourService.prev()"\r\n                    class="prev"\r\n                >\r\n                    {{step?.prevBtnTitle}}\r\n                </button>\r\n                <button\r\n                    tuiButton\r\n                    type="button"\r\n                    iconRight="tuiIconChevronRight"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    *ngIf="tourService.hasNext(step)"\r\n                    (click)="tourService.next()"\r\n                    class="next"\r\n                >\r\n                    {{step?.nextBtnTitle}}\r\n                </button>\r\n                <button\r\n                    tuiButton\r\n                    type="button"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    *ngIf="!tourService.hasNext(step)"\r\n                    (click)="tourService.end()"\r\n                >\r\n                    {{step?.endBtnTitle}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.hintPlacements=["top-left","top","top-right","bottom-left","bottom","bottom-right","left-top","left","left-bottom","right-top","right","right-bottom"]}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"tui-hint",delayAfterNavigation:this.delayAfterNavigation,centerAnchorOnScroll:!0,smoothScroll:!0})}start(){this.tourService.start()}}u.\u0275fac=function(o){return new(o||u)(t.Y36(c.QL),t.Y36(m.h1))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-tui-hint"]],decls:7,vars:0,consts:[["header","Taiga UI Hint","package","ngx-ui-tour-tui-hint"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["tuiLink","","href","https://taiga-ui.dev/getting-started","target","_blank"],["value","bottom-right","extraInfo","Accepts <a href='https://taiga-ui.dev/directives/hint-manual/API'>HintManual</a> direction options.",3,"values"],[3,"defaultTemplate"]],template:function(o,i){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,M,17,0,"ng-template",1),t.YNc(2,B,28,0,"ng-template",1),t.YNc(3,N,4,1,"ng-template",1),t.YNc(4,P,1,0,"ng-template",1),t.YNc(5,k,4,1,"ng-template",1),t.qZA(),t._UZ(6,"tour-step-template"))},dependencies:[v.R,f.C,r.qo,r.nj,s.V,p.v0,T.G,A.t,I.A,y.e,Z.v,U.Q,x.H,C.e,H.J,b.w,S.s,h.Ls],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]});var L=n(2510),Y=n(4466);class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,c.wx,L.Bz.forChild((0,r.Ve)(u)),r.Lq,r.Lx,s.j,p.fN,Y.m.withAnchorDirectiveType(c.C5),h.Hi]})}}]);