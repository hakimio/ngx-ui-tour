"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[1757],{1757:(D,i,o)=>{o.r(i),o.d(i,{default:()=>E});var g=o(8836),s=o(1014),t=o(5879),d=o(900),c=o(2114),p=o(631),l=o(8689),a=o(8726),h=o(6047),u=o(6627),v=o(8373),b=o(5187),f=o(1259),x=o(5011),T=o(1979),y=o(5005),A=o(5413),Z=o(7688),I=o(1698),U=o(8812),S=o(5317),N=o(7554);function B(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourNgxBootstrapModule"),t.qZA(),t._uU(10," is an implementation of the tour UI that uses "),t.TgZ(11,"a",3),t._uU(12,"NgxBootstrap"),t.qZA(),t._uU(13," popovers to display tour steps. "),t.qZA(),t.TgZ(14,"p")(15,"button",4),t.NdJ("click",function(){t.CHM(e);const Y=t.oxw();return t.KtG(Y.tourService.start())}),t._uU(16," Start Demo Tour "),t.qZA()()}}function C(n,r){if(1&n&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-ngx-bootstrap bootstrap ngx-bootstrap"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourNgxBootstrapModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v9"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourNgxBootstrapModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA(),t.TgZ(23,"li"),t._uU(24," Add bootstrap SCSS to your "),t.TgZ(25,"code"),t._uU(26,"styles.scss"),t.qZA(),t._uU(27,": "),t._UZ(28,"tui-doc-code",7),t.qZA(),t.TgZ(29,"li"),t._uU(30," Make sure Ngx Bootstrap is "),t.TgZ(31,"a",8),t._uU(32,"installed correctly"),t.qZA()()(),t._UZ(33,"app-usage")),2&n){const e=t.oxw();t.xp6(28),t.Q6J("code",e.bootstrapScssImport)}}const M=function(){return["top","bottom","left","right","auto","top left","top right","right top","right bottom","bottom right","bottom left","left bottom","left top","start","end","top start","top end","end top","end bottom","bottom end","bottom start","start bottom","start top"]};function k(n,r){1&n&&(t.TgZ(0,"app-step-config",9),t._UZ(1,"app-placement-config",10),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&n&&(t.Q6J("isUseLegacyTitleVisible",!0),t.xp6(1),t.Q6J("values",t.DdM(2,M)))}function P(n,r){1&n&&t._UZ(0,"app-faq")}function L(n,r){if(1&n&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",11)(3,"app-styling-active-tour-anchor"),2&n){const e=t.oxw();t.xp6(2),t.Q6J("defaultTemplate",e.defaultTemplate)}}const E=(0,g.Ve)((()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ngx-bootstrap/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ngx-bootstrap/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ngx-bootstrap/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ngx-bootstrap/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ngx-bootstrap/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ngx-bootstrap/API"},{anchorId:"config.popoverClass",content:"You can add custom popover class.",title:"Custom CSS Class",popoverClass:"custom-tour-class",route:"ngx-bootstrap/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ngx-bootstrap/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ngx-bootstrap/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ngx-bootstrap/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ngx-bootstrap/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ngx-bootstrap/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ngx-bootstrap/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ngx-bootstrap/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ngx-bootstrap/Misc"}],this.bootstrapScssImport='@import "bootstrap/scss/bootstrap";',this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <div\r\n            [style.width]="step.stepDimensions?.width"\r\n            [style.min-width]="step.stepDimensions?.minWidth"\r\n            [style.max-width]="step.stepDimensions?.maxWidth"\r\n            class="main-container"\r\n        >\r\n            <div\r\n                *ngIf="!step?.useLegacyTitle && step?.title"\r\n                class="title-container"\r\n            >\r\n                <h5>{{step?.title}}</h5>\r\n                <button\r\n                    type="button"\r\n                    class="btn-close"\r\n                    aria-label="Close"\r\n                    (click)="tourService.end()"\r\n                ></button>\r\n            </div>\r\n\r\n            <p\r\n                class="card-text"\r\n                [innerHTML]="step?.content"\r\n            ></p>\r\n\r\n            <div class="buttons">\r\n                <button\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    class="btn btn-sm btn-outline-secondary prev"\r\n                    (click)="tourService.prev()"\r\n                >\r\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r\n                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\r\n                    </svg>\r\n                    {{ step?.prevBtnTitle }}\r\n                </button>\r\n                <button\r\n                    *ngIf="tourService.hasNext(step) && !step.nextOnAnchorClick"\r\n                    class="btn btn-sm btn-outline-primary next"\r\n                    (click)="tourService.next()"\r\n                >\r\n                    {{ step?.nextBtnTitle }}\r\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r\n                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\r\n                    </svg>\r\n                </button>\r\n                <button\r\n                    class="btn btn-sm btn-outline-primary"\r\n                    *ngIf="!tourService.hasNext(step)"\r\n                    (click)="tourService.end()"\r\n                >\r\n                    {{ step?.endBtnTitle }}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.tourService=(0,t.f3M)(s.QL),this.delayAfterNavigation=(0,t.f3M)(d.h1)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ngx-bootstrap",delayAfterNavigation:this.delayAfterNavigation})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ngx-bootstrap"]],standalone:!0,features:[t._Bn([(0,h.E)(s.nr)]),t.jDz],decls:7,vars:0,consts:[["header","Ngx Bootstrap","package","ngx-ui-tour-ngx-bootstrap"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://github.com/valor-software/ngx-bootstrap","rel","nofollow","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["filename","styles.scss",3,"code"],["tuiLink","","href","https://valor-software.com/ngx-bootstrap/#/documentation#installation","target","_blank"],[3,"isUseLegacyTitleVisible"],["value","auto","extraInfo","Accepts <a target='_blank' href='https://valor-software.com/ngx-bootstrap/#/popover#placement'>Popover placement</a> options.",3,"values"],[3,"defaultTemplate"]],template:function(e,O){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,B,17,0,"ng-template",1),t.YNc(2,C,34,1,"ng-template",1),t.YNc(3,k,4,3,"ng-template",1),t.YNc(4,P,1,0,"ng-template",1),t.YNc(5,L,4,1,"ng-template",1),t.qZA(),t._UZ(6,"tour-step-template"))},dependencies:[a.Lq,a.qo,a.nj,c.j,c.V,s.Hn,u.n,u.H,v.R,p.fN,p.v0,l.Hi,l.Ls,a.JF,a.c0,b.G,f.e,x.t,T.s,y.A,A.H,Z.v,I.Q,U.w,S.e,N.J],styles:[".popover.custom-tour-class{--bs-popover-arrow-border: #333;--bs-popover-bg: #333;--bs-popover-border-color: #333;--bs-popover-body-color: #eee}  .popover.custom-tour-class .btn-close{filter:invert(1) grayscale(100%) brightness(200%)}app-header[_ngcontent-%COMP%]{margin-top:0}"]}),n})())}}]);