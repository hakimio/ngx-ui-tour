"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[6352],{6352:(V,c,n)=>{n.r(c),n.d(c,{MdMenuModule:()=>E});var p=n(6895),d=n(2510),i=n(7042),h=n(6976),t=n(4650),v=n(7574),f=n(1695),r=n(7279),l=n(9791),s=n(9367),m=n(3094),M=n(6488),A=n(5170),T=n(1830),y=n(3261),Z=n(9411),I=n(6113),U=n(3168),x=n(5210),S=n(4150),C=n(16),b=n(3796);function P(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourMatMenuModule"),t.qZA(),t._uU(10," is an implementation of the tour UI that uses "),t.TgZ(11,"a",3),t._uU(12,"Angular Material"),t.qZA(),t._uU(13," MatMenu to display tour steps. "),t.qZA(),t.TgZ(14,"p")(15,"button",4),t.NdJ("click",function(){t.CHM(o);const J=t.oxw();return t.KtG(J.tourService.start())}),t._uU(16," Start Demo Tour "),t.qZA()()}}function k(e,a){1&e&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-md-menu @angular/material @angular/cdk"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourMatMenuModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v9"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourMatMenuModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA(),t.TgZ(23,"li"),t._uU(24," Make sure Angular Material is "),t.TgZ(25,"a",7),t._uU(26,"installed correctly"),t.qZA()()(),t._UZ(27,"app-usage"))}function N(e,a){1&e&&(t.TgZ(0,"app-step-config",8),t._UZ(1,"app-placement-config",9),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&e&&t.Q6J("isCloseOnOutsideClickVisible",!0)("isPopoverClassVisible",!0)}function B(e,a){1&e&&t._UZ(0,"app-faq",10)}function O(e,a){if(1&e&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",11)(3,"app-styling-active-tour-anchor"),2&e){const o=t.oxw();t.xp6(2),t.Q6J("defaultTemplate",o.defaultTemplate)}}let Y=(()=>{class e{constructor(o,u){this.tourService=o,this.delayAfterNavigation=u,this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"md-menu/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"md-menu/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"md-menu/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"md-menu/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"md-menu/API",disablePageScrolling:!0},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"md-menu/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"md-menu/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"md-menu/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"md-menu/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"md-menu/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"md-menu/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"md-menu/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"md-menu/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"md-menu/Misc"}],this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <mat-card (click)="$event.stopPropagation()">\r\n            <mat-card-header>\r\n                <div class="header-group">\r\n                    <mat-card-title>\r\n                        {{step.title}}\r\n                    </mat-card-title>\r\n                    <button\r\n                        mat-icon-button\r\n                        (click)="tourService.end()"\r\n                        class="close"\r\n                    >\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-header>\r\n\r\n            <mat-card-content\r\n                class="mat-body"\r\n                [innerHTML]="step.content"\r\n            ></mat-card-content>\r\n\r\n            <mat-card-actions align="end">\r\n                <button\r\n                    mat-button\r\n                    class="prev"\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    (click)="tourService.prev()"\r\n                >\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                    {{step.prevBtnTitle}}\r\n                </button>\r\n                <button\r\n                    class="next"\r\n                    *ngIf="tourService.hasNext(step) && !step.nextOnAnchorClick"\r\n                    (click)="tourService.next()"\r\n                    mat-button\r\n                >\r\n                    {{step.nextBtnTitle}}\r\n                    <mat-icon iconPositionEnd>chevron_right</mat-icon>\r\n                </button>\r\n                <button\r\n                    mat-button\r\n                    (click)="tourService.end()"\r\n                    *ngIf="!tourService.hasNext(step)"\r\n                >\r\n                    {{step.endBtnTitle}}\r\n                </button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </ng-template>\r\n</tour-step-template>\r\n'}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"md-menu",delayAfterNavigation:this.delayAfterNavigation,centerAnchorOnScroll:!0,smoothScroll:!0})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.QL),t.Y36(h.h1))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-md-menu"]],decls:7,vars:0,consts:[["header","Material Design","package","ngx-ui-tour-md-menu"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","http://material.angular.io","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["tuiLink","","href","https://material.angular.io/guide/getting-started","target","_blank"],[3,"isCloseOnOutsideClickVisible","isPopoverClassVisible"],["type","MdMenuPlacement"],["disablePageScrollingIntroducedIn","7"],[3,"defaultTemplate"]],template:function(o,u){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,P,17,0,"ng-template",1),t.YNc(2,k,28,0,"ng-template",1),t.YNc(3,N,4,2,"ng-template",1),t.YNc(4,B,1,0,"ng-template",1),t.YNc(5,O,4,1,"ng-template",1),t.qZA(),t._UZ(6,"tour-step-template"))},dependencies:[v.J,f.R,r.qo,r.nj,l.V,s.v0,M.G,A.t,T.A,y.e,Z.v,I.Q,U.H,x.e,S.J,C.w,b.s,m.Ls],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]}),e})();var L=n(5349);let E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,i.jo,d.Bz.forChild((0,r.Ve)(Y)),r.Lq,r.Lx,l.j,s.fN,L.m.withAnchorDirectiveType(i.JA),m.Hi]}),e})()}}]);