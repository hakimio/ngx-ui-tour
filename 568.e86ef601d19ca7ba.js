"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[568],{4568:(R,l,o)=>{o.r(l),o.d(l,{default:()=>L});var d=o(8836),a=o(4524),t=o(9212),v=o(7546),p=o(2114),s=o(631),c=o(4308),m=o(5629),g=o(9698),f=o(1990),I=o(1074),T=o(2444),A=o(1872),Z=o(7868),y=o(3622),P=o(1769),U=o(6798),S=o(8791),x=o(732),b=o(2545),k=o(7765);function C(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourIonPopoverModule"),t.qZA(),t._uU(10," is an implementation of the tour UI that uses "),t.TgZ(11,"a",3),t._uU(12,"Ionic"),t.qZA(),t._uU(13," Popover to display tour steps. "),t.qZA(),t.TgZ(14,"p")(15,"button",4),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.tourService.start())}),t._uU(16," Start Demo Tour "),t.qZA()()}}function M(n,r){1&n&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-ionic @ionic/angular"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourIonPopoverModule"),t.qZA(),t._uU(10," into your app module "),t.qZA(),t.TgZ(11,"li"),t._uU(12," Make sure "),t.TgZ(13,"code"),t._uU(14,"RouterModule"),t.qZA(),t._uU(15," is imported in your app module "),t.qZA(),t.TgZ(16,"li"),t._uU(17," Make sure Ionic is "),t.TgZ(18,"a",6),t._uU(19,"installed correctly"),t.qZA()()(),t._UZ(20,"app-usage",7))}function B(n,r){1&n&&(t.TgZ(0,"app-step-config",8),t._UZ(1,"app-placement-config",9),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&n&&t.Q6J("isIonicShowArrowVisible",!0)}function N(n,r){1&n&&t._UZ(0,"app-faq",10)}function O(n,r){if(1&n&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",11)(3,"app-styling-active-tour-anchor"),2&n){const e=t.oxw();t.xp6(2),t.Q6J("defaultTemplate",e.defaultTemplate)}}const L=(0,d.Ve)((()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ion-popover/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ion-popover/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ion-popover/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ion-popover/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ion-popover/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ion-popover/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ion-popover/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ion-popover/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ion-popover/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ion-popover/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ion-popover/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ion-popover/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ion-popover/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ion-popover/Misc"}],this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <ion-card>\r\n            <ion-card-header>\r\n                <ion-card-title>{{step.title}}</ion-card-title>\r\n                <ion-button\r\n                    class="close"\r\n                    fill="clear"\r\n                    shape="round"\r\n                    (click)="tourService.end()"\r\n                >\r\n                    <ion-icon slot="icon-only" name="close-outline"></ion-icon>\r\n                </ion-button>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content\r\n                [innerHTML]="step.content"\r\n            ></ion-card-content>\r\n\r\n            <div\r\n                class="footer"\r\n                [class.no-progress]="!step.showProgress"\r\n            >\r\n                <ion-button\r\n                    fill="clear"\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    (click)="tourService.prev()"\r\n                >\r\n                    <ion-icon slot="start" name="chevron-back-outline"></ion-icon>\r\n                    {{ step.prevBtnTitle }}\r\n                </ion-button>\r\n                @if (step.showProgress) {\r\n                    <div class="progress">{{ tourService.steps?.indexOf(step) + 1 }} / {{ tourService.steps?.length }}</div>\r\n                }\r\n                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r\n                    <ion-button\r\n                        fill="clear"\r\n                        (click)="tourService.next()"\r\n                    >\r\n                        {{ step.nextBtnTitle }}\r\n                        <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>\r\n                    </ion-button>\r\n                }\r\n                @if (!tourService.hasNext(step)) {\r\n                    <ion-button\r\n                        fill="clear"\r\n                        (click)="tourService.end()"\r\n                    >\r\n                        {{ step.endBtnTitle }}\r\n                    </ion-button>\r\n                }\r\n            </div>\r\n        </ion-card>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.tourService=(0,t.f3M)(a.QL),this.delayAfterNavigation=(0,t.f3M)(v.h1)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ion-popover",delayAfterNavigation:this.delayAfterNavigation})}static#t=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ion-popover"]],standalone:!0,features:[t._Bn([(0,m.E)(a.kT)]),t.jDz],decls:7,vars:0,consts:[["header","Ionic","package","ngx-ui-tour-ionic"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ionicframework.com/","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["tuiLink","","href","https://ionicframework.com/docs/intro/cli","target","_blank"],["moduleName","TourIonPopoverModule"],[3,"isIonicShowArrowVisible"],["type","IonPopoverPlacement"],["disablePageScrollingIntroducedIn","1.1"],[3,"defaultTemplate"]],template:function(i,u){1&i&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,C,17,0,"ng-template",1)(2,M,21,0,"ng-template",1)(3,B,4,1,"ng-template",1)(4,N,1,0,"ng-template",1)(5,O,4,1,"ng-template",1),t.qZA(),t._UZ(6,"tour-step-template"))},dependencies:[c.Lq,c.qo,c.nj,p.j,p.V,a.jA,g.R,f.k,s.fN,s.v0,I.G,T.e,A.t,Z.s,y.A,P.H,U.v,S.Q,x.w,b.e,k.J],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]})}return n})())}}]);