"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[498],{3498:(D,p,o)=>{o.r(p),o.d(p,{default:()=>w});var d=o(8836),i=o(272),t=o(9212),v=o(7546),c=o(2114),l=o(631),u=o(8689),r=o(4308),f=o(5629),g=o(3584),b=o(7170),x=o(1074),T=o(2444),y=o(1872),A=o(7868),Z=o(3622),I=o(1769),U=o(6798),S=o(8791),B=o(732),C=o(2545),N=o(7765);function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"p")(1,"code"),t._uU(2,"ngx-ui-tour"),t.qZA(),t._uU(3," is a UI tour library built for Angular. It's inspired by "),t.TgZ(4,"a",2),t._uU(5,"angular-ui-tour"),t.qZA(),t._uU(6,". "),t.qZA(),t.TgZ(7,"p")(8,"code"),t._uU(9,"TourNgxBootstrapModule"),t.qZA(),t._uU(10," is an implementation of the tour UI that uses "),t.TgZ(11,"a",3),t._uU(12,"NgxBootstrap"),t.qZA(),t._uU(13," popovers to display tour steps. "),t.qZA(),t.TgZ(14,"p")(15,"button",4),t.NdJ("click",function(){t.CHM(e);const m=t.oxw();return t.KtG(m.tourService.start())}),t._uU(16," Start Demo Tour "),t.qZA()()}}function P(n,a){if(1&n&&(t.TgZ(0,"app-header",5),t._uU(1,"Installation"),t.qZA(),t.TgZ(2,"ol")(3,"li")(4,"code"),t._uU(5,"npm install ngx-ui-tour-ngx-bootstrap bootstrap ngx-bootstrap"),t.qZA()(),t.TgZ(6,"li"),t._uU(7," Import "),t.TgZ(8,"code"),t._uU(9,"TourNgxBootstrapModule"),t.qZA(),t._uU(10," into your app module "),t.TgZ(11,"tui-notification",6),t._uU(12," If you are using "),t.TgZ(13,"code"),t._uU(14,"v9"),t.qZA(),t._uU(15," or older, you have to import "),t.TgZ(16,"code"),t._uU(17,"TourNgxBootstrapModule.forRoot()"),t.qZA()()(),t.TgZ(18,"li"),t._uU(19," Make sure "),t.TgZ(20,"code"),t._uU(21,"RouterModule"),t.qZA(),t._uU(22," is imported in your app module "),t.qZA(),t.TgZ(23,"li"),t._uU(24," Add bootstrap SCSS to your "),t.TgZ(25,"code"),t._uU(26,"styles.scss"),t.qZA(),t._uU(27,": "),t._UZ(28,"tui-doc-code",7),t.qZA(),t.TgZ(29,"li"),t._uU(30," Make sure Ngx Bootstrap is "),t.TgZ(31,"a",8),t._uU(32,"installed correctly"),t.qZA()()(),t._UZ(33,"app-usage",9)),2&n){const e=t.oxw();t.xp6(28),t.Q6J("code",e.bootstrapScssImport)}}const k=()=>["top","bottom","left","right","auto","top left","top right","right top","right bottom","bottom right","bottom left","left bottom","left top","start","end","top start","top end","end top","end bottom","bottom end","bottom start","start bottom","start top"];function L(n,a){1&n&&(t.TgZ(0,"app-step-config",10),t._UZ(1,"app-placement-config",11),t.qZA(),t._UZ(2,"app-tour-service-api")(3,"app-events")),2&n&&(t.Q6J("isUseLegacyTitleVisible",!0),t.xp6(1),t.Q6J("values",t.DdM(2,k)))}function _(n,a){1&n&&t._UZ(0,"app-faq")}function O(n,a){if(1&n&&t._UZ(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",12)(3,"app-styling-active-tour-anchor"),2&n){const e=t.oxw();t.xp6(2),t.Q6J("defaultTemplate",e.defaultTemplate)}}const w=(0,d.Ve)((()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ngx-bootstrap/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ngx-bootstrap/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ngx-bootstrap/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ngx-bootstrap/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ngx-bootstrap/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ngx-bootstrap/API"},{anchorId:"config.popoverClass",content:"You can add custom popover class.",title:"Custom CSS Class",popoverClass:"custom-tour-class",route:"ngx-bootstrap/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ngx-bootstrap/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ngx-bootstrap/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ngx-bootstrap/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ngx-bootstrap/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ngx-bootstrap/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ngx-bootstrap/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ngx-bootstrap/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ngx-bootstrap/Misc"}],this.bootstrapScssImport='@import "bootstrap/scss/bootstrap";',this.defaultTemplate='<tour-step-template>\r\n    <ng-template let-step="step">\r\n        <div\r\n            [style.width]="step.stepDimensions?.width"\r\n            [style.min-width]="step.stepDimensions?.minWidth"\r\n            [style.max-width]="step.stepDimensions?.maxWidth"\r\n            class="main-container"\r\n        >\r\n            @if (!step?.useLegacyTitle && step?.title) {\r\n                <div class="title-container">\r\n                    <h5>{{ step?.title }}</h5>\r\n                    <button\r\n                        type="button"\r\n                        class="btn-close"\r\n                        aria-label="Close"\r\n                        (click)="tourService.end()"\r\n                    ></button>\r\n                </div>\r\n            }\r\n            <p\r\n                class="card-text"\r\n                [innerHTML]="step?.content"\r\n            ></p>\r\n            <div class="buttons">\r\n                <button\r\n                    [disabled]="!tourService.hasPrev(step)"\r\n                    class="btn btn-sm btn-outline-secondary prev"\r\n                    (click)="tourService.prev()"\r\n                >\r\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r\n                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\r\n                    </svg>\r\n                    {{ step?.prevBtnTitle }}\r\n                </button>\r\n                @if (step.showProgress) {\r\n                    <div class="progress">{{ tourService.steps?.indexOf(step) + 1 }} / {{ tourService.steps?.length }}</div>\r\n                }\r\n                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r\n                    <button\r\n                        class="btn btn-sm btn-outline-primary next"\r\n                        (click)="tourService.next()"\r\n                    >\r\n                        {{ step?.nextBtnTitle }}\r\n                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r\n                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\r\n                        </svg>\r\n                    </button>\r\n                }\r\n                @if (!tourService.hasNext(step)) {\r\n                    <button\r\n                        class="btn btn-sm btn-outline-primary"\r\n                        (click)="tourService.end()"\r\n                    >\r\n                        {{ step?.endBtnTitle }}\r\n                    </button>\r\n                }\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</tour-step-template>\r\n',this.tourService=(0,t.f3M)(i.QL),this.delayAfterNavigation=(0,t.f3M)(v.h1)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ngx-bootstrap",delayAfterNavigation:this.delayAfterNavigation})}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ngx-bootstrap"]],standalone:!0,features:[t._Bn([(0,f.E)(i.nr)]),t.jDz],decls:7,vars:0,consts:[["header","Ngx Bootstrap","package","ngx-ui-tour-ngx-bootstrap"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://github.com/valor-software/ngx-bootstrap","rel","nofollow","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],[1,"tui-space_top-3"],["filename","styles.scss",3,"code"],["tuiLink","","href","https://valor-software.com/ngx-bootstrap/#/documentation#installation","target","_blank"],["moduleName","TourNgxBootstrapModule"],[3,"isUseLegacyTitleVisible"],["value","auto","extraInfo","Accepts <a target='_blank' href='https://valor-software.com/ngx-bootstrap/#/popover#placement'>Popover placement</a> options.",3,"values"],[3,"defaultTemplate"]],template:function(s,m){1&s&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,M,17,0,"ng-template",1)(2,P,34,1,"ng-template",1)(3,L,4,3,"ng-template",1)(4,_,1,0,"ng-template",1)(5,O,4,1,"ng-template",1),t.qZA(),t._UZ(6,"tour-step-template"))},dependencies:[r.Lq,r.qo,r.nj,c.j,c.V,i.Hn,g.n,g.H,b.R,l.fN,l.v0,u.H,u.L,r.JF,r.c0,x.G,T.e,y.t,A.s,Z.A,I.H,U.v,S.Q,B.w,C.e,N.J],styles:[".popover.custom-tour-class{--bs-popover-arrow-border: #333;--bs-popover-bg: #333;--bs-popover-border-color: #333;--bs-popover-body-color: #eee}  .popover.custom-tour-class .progress{color:#6c757d!important}  .popover.custom-tour-class .btn-close{filter:invert(1) grayscale(100%) brightness(200%)}app-header[_ngcontent-%COMP%]{margin-top:0}"]})}return n})())}}]);