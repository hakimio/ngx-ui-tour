"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[243],{4243:(L,s,n)=>{n.r(s),n.d(s,{default:()=>E});var g=n(8836),a=n(7058),t=n(9212),m=n(7546),c=n(2114),p=n(631),l=n(8689),u=n(4308),v=n(5629),f=n(9800),T=n(434),I=n(1074),y=n(2444),A=n(1872),Z=n(7868),U=n(3622),x=n(1769),S=n(6798),w=n(8791),D=n(732),b=n(2545),C=n(7765);function P(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourTuiDropdownModule"),t.qZA(),t._uU(10," is an implementation of the tour UI that uses "),t.TgZ(11,"a",3),t._uU(12,"Taiga UI"),t.qZA(),t._uU(13," Dropdown to display tour steps. "),t.qZA(),t.TgZ(14,"p")(15,"button",4),t.NdJ("click",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.start())}),t._uU(16," Start Demo Tour "),t.qZA()()}}function M(o,r){1&o&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-tui-dropdown @taiga-ui/core @taiga-ui/cdk @taiga-ui/icons"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourTuiDropdownModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v3"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourTuiDropdownModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA(),t.TgZ(23,"li"),t._uU(24," Make sure Taiga UI is "),t.TgZ(25,"a",7),t._uU(26,"installed correctly"),t.qZA()()(),t._UZ(27,"app-usage",8))}function k(o,r){1&o&&(t.TgZ(0,"app-step-config"),t._UZ(1,"app-placement-config",9),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events"))}function B(o,r){1&o&&t._UZ(0,"app-faq",10)}function N(o,r){if(1&o&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",11)(3,"app-styling-active-tour-anchor"),2&o){const e=t.oxw();t.xp6(2),t.Q6J("defaultTemplate",e.defaultTemplate)}}const E=(0,g.Ve)((()=>{class o{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-dropdown/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-dropdown/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-dropdown/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-dropdown/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"tui-dropdown/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-dropdown/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-dropdown/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"tui-dropdown/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"tui-dropdown/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-dropdown/API",stepDimensions:{maxWidth:"340px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-dropdown/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-dropdown/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-dropdown/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-dropdown/Misc"}],this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <div\r\n            class="main-container"\r\n            [style.width]="step.stepDimensions?.width"\r\n            [style.min-width]="step.stepDimensions?.minWidth"\r\n            [style.max-width]="step.stepDimensions?.maxWidth"\r\n            [class]="step.popoverClass"\r\n        >\r\n            <div class="title-container">\r\n                <h3>{{ step?.title }}</h3>\r\n                <button\r\n                    tuiIconButton\r\n                    icon="tuiIconCloseLarge"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    (click)="tourService.end()"\r\n                ></button>\r\n            </div>\r\n            <p\r\n                class="content"\r\n                [innerHTML]="step?.content"\r\n            ></p>\r\n            <div\r\n                class="buttons"\r\n                [class.no-progress]="!step.showProgress"\r\n            >\r\n                <button\r\n                    tuiButton\r\n                    type="button"\r\n                    icon="tuiIconChevronLeft"\r\n                    appearance="flat"\r\n                    size="m"\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    (click)="tourService.prev()"\r\n                    class="prev"\r\n                >\r\n                    {{ step?.prevBtnTitle }}\r\n                </button>\r\n                @if (step.showProgress) {\r\n                    <div class="progress">{{ tourService.steps?.indexOf(step) + 1 }} / {{ tourService.steps?.length }}</div>\r\n                }\r\n                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r\n                    <button\r\n                        tuiButton\r\n                        type="button"\r\n                        iconRight="tuiIconChevronRight"\r\n                        appearance="flat"\r\n                        size="m"\r\n                        (click)="tourService.next()"\r\n                        class="next"\r\n                    >\r\n                        {{ step?.nextBtnTitle }}\r\n                    </button>\r\n                }\r\n                @if (!tourService.hasNext(step)) {\r\n                    <button\r\n                        tuiButton\r\n                        type="button"\r\n                        appearance="flat"\r\n                        size="m"\r\n                        (click)="tourService.end()"\r\n                    >\r\n                        {{ step?.endBtnTitle }}\r\n                    </button>\r\n                }\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.tourService=(0,t.f3M)(a.QL),this.delayAfterNavigation=(0,t.f3M)(m.h1)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"tui-dropdown",delayAfterNavigation:this.delayAfterNavigation,disablePageScrolling:!1})}start(){this.tourService.start()}static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-tui-dropdown"]],standalone:!0,features:[t._Bn([(0,v.E)(a.n3)]),t.jDz],decls:7,vars:0,consts:[["header","Taiga UI Dropdown","package","ngx-ui-tour-tui-dropdown"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["tuiLink","","href","https://taiga-ui.dev/getting-started","target","_blank"],["moduleName","TourTuiDropdownModule"],["type","TuiDdPlacement"],["backdropOffsetIntroducedIn","5","disablePageScrollingIntroducedIn","4.1"],[3,"defaultTemplate"]],template:function(i,d){1&i&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,P,17,0,"ng-template",1)(2,M,28,0,"ng-template",1)(3,k,4,0,"ng-template",1)(4,B,1,0,"ng-template",1)(5,N,4,1,"ng-template",1),t.qZA(),t._UZ(6,"tour-step-template"))},dependencies:[u.Lq,u.qo,u.nj,c.j,c.V,a.DE,f.R,T.n,p.fN,p.v0,l.H,l.L,I.G,y.e,A.t,Z.s,U.A,x.H,S.v,w.Q,D.w,b.e,C.J],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]})}return o})())}}]);