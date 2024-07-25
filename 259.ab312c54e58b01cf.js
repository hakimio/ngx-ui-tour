"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[259],{3259:(V,s,o)=>{o.r(s),o.d(s,{default:()=>U});var d=o(1583),a=o(9416),t=o(3953),h=o(7704),l=o(1974),p=o(2782),c=o(9717),v=o(1222),g=o(1841),f=o(9895),I=o(5404),F=o(2297),k=o(2028),y=o(1809),P=o(5716),T=o(68),S=o(3352),E=o(8044),A=o(3064),b=o(6216),x=o(4102);function C(n,r){if(1&n){const e=t.RV6();t.j41(0,"p")(1,"code"),t.EFF(2,"ngx-ui-tour"),t.k0s(),t.EFF(3," is a UI tour library built for Angular. It's inspired by "),t.j41(4,"a",2),t.EFF(5,"angular-ui-tour"),t.k0s(),t.EFF(6,". "),t.k0s(),t.j41(7,"p")(8,"code"),t.EFF(9,"TourIonPopoverModule"),t.k0s(),t.EFF(10," is an implementation of the tour UI that uses "),t.j41(11,"a",3),t.EFF(12,"Ionic"),t.k0s(),t.EFF(13," Popover to display tour steps. "),t.k0s(),t.j41(14,"p")(15,"button",4),t.bIt("click",function(){t.eBV(e);const u=t.XpG();return t.Njj(u.tourService.start())}),t.EFF(16," Start Demo Tour "),t.k0s()()}}function j(n,r){1&n&&(t.j41(0,"app-header",5),t.EFF(1,"Installation"),t.k0s(),t.j41(2,"ol")(3,"li")(4,"code"),t.EFF(5,"npm install ngx-ui-tour-ionic @ionic/angular"),t.k0s()(),t.j41(6,"li"),t.EFF(7," Import "),t.j41(8,"code"),t.EFF(9,"TourIonPopoverModule"),t.k0s(),t.EFF(10," into your app module "),t.k0s(),t.j41(11,"li"),t.EFF(12," Make sure "),t.j41(13,"code"),t.EFF(14,"RouterModule"),t.k0s(),t.EFF(15," is imported in your app module "),t.k0s(),t.j41(16,"li"),t.EFF(17," Make sure Ionic is "),t.j41(18,"a",6),t.EFF(19,"installed correctly"),t.k0s()()(),t.nrm(20,"app-usage",7))}function M(n,r){1&n&&(t.j41(0,"app-step-config",8),t.nrm(1,"app-placement-config",9),t.k0s(),t.nrm(2,"app-tour-service-api")(3,"app-events")),2&n&&t.Y8G("isIonicShowArrowVisible",!0)("isIonicTrapFocusVisible",!0)}function N(n,r){1&n&&t.nrm(0,"app-faq",10)}function B(n,r){if(1&n&&t.nrm(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",11)(3,"app-styling-active-tour-anchor"),2&n){const e=t.XpG();t.R7$(2),t.Y8G("defaultTemplate",e.defaultTemplate)}}const U=(0,d.CC)((()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ion-popover/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ion-popover/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ion-popover/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ion-popover/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ion-popover/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ion-popover/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ion-popover/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ion-popover/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ion-popover/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ion-popover/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ion-popover/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ion-popover/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ion-popover/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ion-popover/Misc"}],this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <ion-card>\r\n            <ion-card-header>\r\n                <ion-card-title>{{step.title}}</ion-card-title>\r\n                <ion-button\r\n                    class="close"\r\n                    fill="clear"\r\n                    shape="round"\r\n                    (click)="tourService.end()"\r\n                >\r\n                    <ion-icon slot="icon-only" name="close-outline"></ion-icon>\r\n                </ion-button>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content\r\n                [innerHTML]="step.content"\r\n            ></ion-card-content>\r\n\r\n            <div\r\n                class="footer"\r\n                [class.no-progress]="!step.showProgress"\r\n            >\r\n                <ion-button\r\n                    fill="clear"\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    (click)="tourService.prev()"\r\n                >\r\n                    <ion-icon slot="start" name="chevron-back-outline"></ion-icon>\r\n                    {{ step.prevBtnTitle }}\r\n                </ion-button>\r\n                @if (step.showProgress) {\r\n                    <div class="progress">{{ tourService.steps?.indexOf(step) + 1 }} / {{ tourService.steps?.length }}</div>\r\n                }\r\n                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r\n                    <ion-button\r\n                        fill="clear"\r\n                        (click)="tourService.next()"\r\n                    >\r\n                        {{ step.nextBtnTitle }}\r\n                        <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>\r\n                    </ion-button>\r\n                }\r\n                @if (!tourService.hasNext(step)) {\r\n                    <ion-button\r\n                        fill="clear"\r\n                        (click)="tourService.end()"\r\n                    >\r\n                        {{ step.endBtnTitle }}\r\n                    </ion-button>\r\n                }\r\n            </div>\r\n        </ion-card>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.tourService=(0,t.WQX)(a.gQ),this.delayAfterNavigation=(0,t.WQX)(h.cz)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ion-popover",delayAfterNavigation:this.delayAfterNavigation})}static#t=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["app-ion-popover"]],standalone:!0,features:[t.Jv_([(0,v.N)(a.G$)]),t.aNF],decls:7,vars:0,consts:[["header","Ionic","package","ngx-ui-tour-ionic"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ionicframework.com/","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["tuiLink","","href","https://ionicframework.com/docs/intro/cli","target","_blank"],["moduleName","TourIonPopoverModule"],[3,"isIonicShowArrowVisible","isIonicTrapFocusVisible"],["type","IonPopoverPlacement"],["disablePageScrollingIntroducedIn","1.1"],[3,"defaultTemplate"]],template:function(i,u){1&i&&(t.j41(0,"tui-doc-page",0),t.DNE(1,C,17,0,"ng-template",1)(2,j,21,0,"ng-template",1)(3,M,4,2,"ng-template",1)(4,N,1,0,"ng-template",1)(5,B,4,1,"ng-template",1),t.k0s(),t.nrm(6,"tour-step-template"))},dependencies:[c.AC,c.Pt,c.TD,l.l,l.E,a.g$,g.k,f.G,p.Pv,p.SM,I.l,F.v,k.s,y.r,P.Z,T.b,S.C,E.N,A.K,b.P,x.T],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]})}return n})())}}]);