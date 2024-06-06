"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[562],{562:(U,c,n)=>{n.r(c),n.d(c,{default:()=>R});var d=n(1583),i=n(7655),t=n(4438),g=n(7704),u=n(1974),l=n(2782),m=n(8821),s=n(3884),v=n(1222),f=n(6853),M=n(3841),F=n(5404),y=n(2297),I=n(2028),k=n(1809),E=n(5716),T=n(68),A=n(3352),S=n(8044),b=n(3064),x=n(6216),C=n(4102);function P(e,r){if(1&e){const o=t.RV6();t.j41(0,"p")(1,"code"),t.EFF(2,"ngx-ui-tour"),t.k0s(),t.EFF(3," is a UI tour library built for Angular. It's inspired by "),t.j41(4,"a",2),t.EFF(5,"angular-ui-tour"),t.k0s(),t.EFF(6,". "),t.k0s(),t.j41(7,"p")(8,"code"),t.EFF(9,"TourMatMenuModule"),t.k0s(),t.EFF(10," is an implementation of the tour UI that uses "),t.j41(11,"a",3),t.EFF(12,"Angular Material"),t.k0s(),t.EFF(13," MatMenu to display tour steps. "),t.k0s(),t.j41(14,"p")(15,"button",4),t.bIt("click",function(){t.eBV(o);const p=t.XpG();return t.Njj(p.tourService.start())}),t.EFF(16," Start Demo Tour "),t.k0s()()}}function j(e,r){1&e&&(t.j41(0,"app-header",5),t.EFF(1,"Installation"),t.k0s(),t.j41(2,"ol")(3,"li")(4,"code"),t.EFF(5,"npm install ngx-ui-tour-md-menu @angular/material @angular/cdk"),t.k0s()(),t.j41(6,"li"),t.EFF(7," Import "),t.j41(8,"code"),t.EFF(9,"TourMatMenuModule"),t.k0s(),t.EFF(10," into your app module "),t.j41(11,"tui-notification",6),t.EFF(12," If you are using "),t.j41(13,"code"),t.EFF(14,"v9"),t.k0s(),t.EFF(15," or older, you have to import "),t.j41(16,"code"),t.EFF(17,"TourMatMenuModule.forRoot()"),t.k0s()()(),t.j41(18,"li"),t.EFF(19," Make sure "),t.j41(20,"code"),t.EFF(21,"RouterModule"),t.k0s(),t.EFF(22," is imported in your app module "),t.k0s(),t.j41(23,"li"),t.EFF(24," Make sure Angular Material is "),t.j41(25,"a",7),t.EFF(26,"installed correctly"),t.k0s()()(),t.nrm(27,"app-usage",8))}function O(e,r){1&e&&(t.j41(0,"app-step-config",9),t.nrm(1,"app-placement-config",10),t.k0s(),t.nrm(2,"app-tour-service-api")(3,"app-events")),2&e&&t.Y8G("isCloseOnOutsideClickVisible",!0)("isMdMenuShowArrowVisible",!0)}function N(e,r){1&e&&t.nrm(0,"app-faq",11)}function B(e,r){if(1&e&&t.nrm(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",12)(3,"app-styling-active-tour-anchor"),2&e){const o=t.XpG();t.R7$(2),t.Y8G("defaultTemplate",o.defaultTemplate)}}const R=(0,d.CC)((()=>{class e{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"md-menu/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"md-menu/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"md-menu/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"md-menu/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"md-menu/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"md-menu/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"md-menu/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"md-menu/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"md-menu/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"md-menu/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"md-menu/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"md-menu/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"md-menu/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"md-menu/Misc"}],this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <mat-card\r\n            (click)="$event.stopPropagation()"\r\n            [style.width]="step.stepDimensions?.width"\r\n            [style.min-width]="step.stepDimensions?.minWidth"\r\n            [style.max-width]="step.stepDimensions?.maxWidth"\r\n        >\r\n            <mat-card-header>\r\n                <div class="header-group">\r\n                    <mat-card-title>\r\n                        {{ step.title }}\r\n                    </mat-card-title>\r\n                    <button\r\n                        mat-icon-button\r\n                        (click)="tourService.end()"\r\n                        class="close"\r\n                    >\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-header>\r\n\r\n            <mat-card-content\r\n                class="mat-body"\r\n                [innerHTML]="step.content"\r\n            ></mat-card-content>\r\n\r\n            <mat-card-actions\r\n                [class.no-progress]="!step.showProgress"\r\n            >\r\n                <button\r\n                    mat-button\r\n                    class="prev"\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    (click)="tourService.prev()"\r\n                >\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                    {{ step.prevBtnTitle }}\r\n                </button>\r\n                @if (step.showProgress) {\r\n                    <div class="progress">{{ tourService.steps?.indexOf(step) + 1 }} / {{ tourService.steps?.length }}</div>\r\n                }\r\n                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r\n                    <button\r\n                        class="next"\r\n                        (click)="tourService.next()"\r\n                        mat-button\r\n                    >\r\n                        {{ step.nextBtnTitle }}\r\n                        <mat-icon iconPositionEnd>chevron_right</mat-icon>\r\n                    </button>\r\n                }\r\n                @if (!tourService.hasNext(step)) {\r\n                    <button\r\n                        mat-button\r\n                        (click)="tourService.end()"\r\n                    >\r\n                        {{ step.endBtnTitle }}\r\n                    </button>\r\n                }\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.tourService=(0,t.WQX)(i.gQ),this.delayAfterNavigation=(0,t.WQX)(g.cz)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"md-menu",delayAfterNavigation:this.delayAfterNavigation})}static#t=this.\u0275fac=function(a){return new(a||e)};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-md-menu"]],standalone:!0,features:[t.Jv_([(0,v.N)(i.Ah)]),t.aNF],decls:7,vars:0,consts:[["header","Material Design","package","ngx-ui-tour-md-menu"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","http://material.angular.io","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["tuiLink","","href","https://material.angular.io/guide/getting-started","target","_blank"],["moduleName","TourMatMenuModule"],[3,"isCloseOnOutsideClickVisible","isMdMenuShowArrowVisible"],["type","MdMenuPlacement"],["disablePageScrollingIntroducedIn","7","backdropOffsetIntroducedIn","11"],[3,"defaultTemplate"]],template:function(a,p){1&a&&(t.j41(0,"tui-doc-page",0),t.DNE(1,P,17,0,"ng-template",1)(2,j,28,0,"ng-template",1)(3,O,4,2,"ng-template",1)(4,N,1,0,"ng-template",1)(5,B,4,1,"ng-template",1),t.k0s(),t.nrm(6,"tour-step-template"))},dependencies:[s.AC,s.Pt,s.TD,u.l,u.E,i.Gu,f.A,M.k,l.Pv,l.SM,m.O,m.v,F.l,y.v,I.s,k.r,E.Z,T.b,A.C,S.N,b.K,x.P,C.T],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]})}return e})())}}]);