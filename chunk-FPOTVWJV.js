import{A as _,B as c,C as k,H as A,I as E,J as M,K as D,L as w,M as N,N as B,O,P as V,Q as F,R as L,T as H,z as C}from"./chunk-W3ZF7T3R.js";import{Fa as g,Ia as s,O as p,Qa as n,Ra as e,S as d,Sa as i,T as h,Wa as I,Ya as x,Yb as T,Yc as U,Za as u,Zb as b,ib as t,na as f,pb as S,pc as y,qc as P,za as v}from"./chunk-ZYINDKUK.js";import"./chunk-4IWABTY6.js";import"./chunk-BOPZDEKR.js";import"./chunk-QEBRWGFR.js";import"./chunk-KIOAN7YD.js";import"./chunk-F7XBNY6P.js";import"./chunk-AAYQ22Q2.js";import"./chunk-6UVAVFIN.js";import"./chunk-ILEP3X42.js";import"./chunk-CL2FVWQJ.js";import"./chunk-NMYJD6OP.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import"./chunk-B4AJQJMI.js";var R=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <ion-card>\r
            <ion-card-header>\r
                <ion-card-title>{{step.title}}</ion-card-title>\r
                <ion-button\r
                    class="close"\r
                    fill="clear"\r
                    shape="round"\r
                    (click)="tourService.end()"\r
                >\r
                    <ion-icon slot="icon-only" name="close-outline"></ion-icon>\r
                </ion-button>\r
            </ion-card-header>\r
\r
            <ion-card-content\r
                [innerHTML]="step.content"\r
            ></ion-card-content>\r
\r
            <div\r
                class="footer"\r
                [class.no-progress]="!step.showProgress"\r
            >\r
                <ion-button\r
                    fill="clear"\r
                    [disabled]="!tourService.hasPrev(step)"\r
                    (click)="tourService.prev()"\r
                >\r
                    <ion-icon slot="start" name="chevron-back-outline"></ion-icon>\r
                    {{ step.prevBtnTitle }}\r
                </ion-button>\r
                @if (step.showProgress) {\r
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>\r
                }\r
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r
                    <ion-button\r
                        fill="clear"\r
                        (click)="tourService.next()"\r
                    >\r
                        {{ step.nextBtnTitle }}\r
                        <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>\r
                    </ion-button>\r
                }\r
                @if (!tourService.hasNext(step)) {\r
                    <ion-button\r
                        fill="clear"\r
                        (click)="tourService.end()"\r
                    >\r
                        {{ step.endBtnTitle }}\r
                    </ion-button>\r
                }\r
            </div>\r
        </ion-card>\r
    </ng-template>\r
</tour-step-template>\r
\`\`\`\r
`;function Y(o,a){if(o&1){let r=I();n(0,"p")(1,"code"),t(2,"ngx-ui-tour"),e(),t(3," is a UI tour library built for Angular. It's inspired by "),n(4,"a",2),t(5,"angular-ui-tour"),e(),t(6,". "),e(),n(7,"p")(8,"code"),t(9,"TourIonPopoverModule"),e(),t(10," is an implementation of the tour UI that uses "),n(11,"a",3),t(12,"Ionic"),e(),t(13," Popover to display tour steps. "),e(),n(14,"p")(15,"button",4),x("click",function(){d(r);let m=u();return h(m.tourService.start())}),t(16," Start Demo Tour "),e()()}}function q(o,a){o&1&&(n(0,"app-header",5),t(1,"Installation"),e(),n(2,"ol")(3,"li")(4,"code"),t(5,"npm install ngx-ui-tour-ionic @ionic/angular"),e()(),n(6,"li"),t(7," Import "),n(8,"code"),t(9,"TourIonPopoverModule"),e(),t(10," into your app module "),e(),n(11,"li"),t(12," Make sure "),n(13,"code"),t(14,"RouterModule"),e(),t(15," is imported in your app module "),e(),n(16,"li"),t(17," Make sure Ionic is "),n(18,"a",6),t(19,"installed correctly"),e()()(),i(20,"app-usage",7))}function j(o,a){o&1&&(n(0,"app-step-config",8),i(1,"app-placement-config",9),e(),i(2,"app-tour-service-api")(3,"app-events")),o&2&&s("isIonicShowArrowVisible",!0)("isIonicTrapFocusVisible",!0)}function z(o,a){o&1&&i(0,"app-faq",10)}function G(o,a){if(o&1&&i(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",11)(3,"app-styling-active-tour-anchor"),o&2){let r=u();f(2),s("defaultTemplate",r.defaultTemplate)}}var xt=(()=>{class o{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ion-popover/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ion-popover/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ion-popover/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ion-popover/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ion-popover/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ion-popover/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ion-popover/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ion-popover/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ion-popover/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ion-popover/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ion-popover/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ion-popover/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ion-popover/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ion-popover/Misc"}],this.defaultTemplate=R,this.tourService=p(C),this.delayAfterNavigation=p(U)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ion-popover",delayAfterNavigation:this.delayAfterNavigation})}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=v({type:o,selectors:[["app-ion-popover"]],features:[S([H(c)])],decls:7,vars:0,consts:[["header","Ionic","package","ngx-ui-tour-ionic"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ionicframework.com/","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["tuiLink","","href","https://ionicframework.com/docs/intro/cli","target","_blank"],["moduleName","TourIonPopoverModule"],[3,"isIonicShowArrowVisible","isIonicTrapFocusVisible"],["type","IonPopoverPlacement"],["disablePageScrollingIntroducedIn","1.1"],[3,"defaultTemplate"]],template:function(l,m){l&1&&(n(0,"tui-doc-page",0),g(1,Y,17,0,"ng-template",1)(2,q,21,0,"ng-template",1)(3,j,4,2,"ng-template",1)(4,z,1,0,"ng-template",1)(5,G,4,1,"ng-template",1),e(),i(6,"tour-step-template"))},dependencies:[P,y,b,k,_,c,T,A,E,D,M,w,N,B,O,V,L,F],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return o})();export{xt as default};
