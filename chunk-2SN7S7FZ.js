import{H as E,I as P,J as D,K as w,L as O,M as N,N as B,O as V,P as L,Q as F,R as H,S as R,T as U,g as _,h as m,i as k,j as A}from"./chunk-UZVPTC7S.js";import{Ha as u,Ia as e,Ja as n,Ka as i,O as c,Oa as v,Q as d,Qa as x,R as h,Ra as s,Ub as T,Vb as b,Wb as y,Xc as W,eb as t,ja as g,lb as S,nc as C,oc as I,ra as f,wa as M}from"./chunk-SNATMSOS.js";import"./chunk-KUKPXLXG.js";import"./chunk-7TOYBQTK.js";import"./chunk-ET3ZWXOJ.js";import"./chunk-MCMHWS7T.js";import"./chunk-XLASQAO6.js";import"./chunk-XQSDAB24.js";import"./chunk-M2X7KQLB.js";import"./chunk-2YSZFPCQ.js";import"./chunk-57YRIO75.js";import"./chunk-D7G6EMIG.js";import"./chunk-C5RQ2IC2.js";import"./chunk-42C7ZIID.js";import"./chunk-B4AJQJMI.js";var Y=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <mat-card\r
            (click)="$event.stopPropagation()"\r
            [style.width]="step.stepDimensions?.width"\r
            [style.min-width]="step.stepDimensions?.minWidth"\r
            [style.max-width]="step.stepDimensions?.maxWidth"\r
        >\r
            <mat-card-header>\r
                <div class="header-group">\r
                    <mat-card-title>\r
                        {{ step.title }}\r
                    </mat-card-title>\r
                    <button\r
                        mat-icon-button\r
                        (click)="tourService.end()"\r
                        class="close"\r
                    >\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                </div>\r
            </mat-card-header>\r
\r
            <mat-card-content\r
                class="mat-body"\r
                [innerHTML]="step.content"\r
            ></mat-card-content>\r
\r
            <mat-card-actions\r
                [class.no-progress]="!step.showProgress"\r
            >\r
                <button\r
                    mat-button\r
                    class="prev"\r
                    [disabled]="!tourService.hasPrev(step)"\r
                    (click)="tourService.prev()"\r
                >\r
                    <mat-icon>chevron_left</mat-icon>\r
                    {{ step.prevBtnTitle }}\r
                </button>\r
                @if (step.showProgress) {\r
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>\r
                }\r
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r
                    <button\r
                        class="next"\r
                        (click)="tourService.next()"\r
                        mat-button\r
                    >\r
                        {{ step.nextBtnTitle }}\r
                        <mat-icon iconPositionEnd>chevron_right</mat-icon>\r
                    </button>\r
                }\r
                @if (!tourService.hasNext(step)) {\r
                    <button\r
                        mat-button\r
                        (click)="tourService.end()"\r
                    >\r
                        {{ step.endBtnTitle }}\r
                    </button>\r
                }\r
            </mat-card-actions>\r
        </mat-card>\r
    </ng-template>\r
</tour-step-template>\r
\`\`\`\r
`;function z(o,a){if(o&1){let r=v();e(0,"p")(1,"code"),t(2,"ngx-ui-tour"),n(),t(3," is a UI tour library built for Angular. It's inspired by "),e(4,"a",2),t(5,"angular-ui-tour"),n(),t(6,". "),n(),e(7,"p")(8,"code"),t(9,"TourMatMenuModule"),n(),t(10," is an implementation of the tour UI that uses "),e(11,"a",3),t(12,"Angular Material"),n(),t(13," MatMenu to display tour steps. "),n(),e(14,"p")(15,"button",4),x("click",function(){d(r);let p=s();return h(p.tourService.start())}),t(16," Start Demo Tour "),n()()}}function j(o,a){o&1&&(e(0,"app-header",5),t(1,"Installation"),n(),e(2,"ol")(3,"li")(4,"code"),t(5,"npm install ngx-ui-tour-md-menu @angular/material @angular/cdk"),n()(),e(6,"li"),t(7," Import "),e(8,"code"),t(9,"TourMatMenuModule"),n(),t(10," into your app module "),e(11,"tui-notification",6),t(12," If you are using "),e(13,"code"),t(14,"v9"),n(),t(15," or older, you have to import "),e(16,"code"),t(17,"TourMatMenuModule.forRoot()"),n()()(),e(18,"li"),t(19," Make sure "),e(20,"code"),t(21,"RouterModule"),n(),t(22," is imported in your app module "),n(),e(23,"li"),t(24," Make sure Angular Material is "),e(25,"a",7),t(26,"installed correctly"),n()()(),i(27,"app-usage",8))}function G(o,a){o&1&&(e(0,"app-step-config",9),i(1,"app-placement-config",10),n(),i(2,"app-tour-service-api")(3,"app-events")),o&2&&u("isCloseOnOutsideClickVisible",!0)("isMdMenuShowArrowVisible",!0)}function $(o,a){o&1&&i(0,"app-faq",11)}function J(o,a){if(o&1&&i(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",12)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),o&2){let r=s();g(2),u("defaultTemplate",r.defaultTemplate)}}var bt=(()=>{class o{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"md-menu/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"md-menu/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"md-menu/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"md-menu/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"md-menu/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"md-menu/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"md-menu/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"md-menu/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"md-menu/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"md-menu/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"md-menu/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"md-menu/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"md-menu/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"md-menu/Misc"}],this.defaultTemplate=Y,this.tourService=c(_),this.delayAfterNavigation=c(W)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"md-menu",delayAfterNavigation:this.delayAfterNavigation})}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=f({type:o,selectors:[["app-md-menu"]],features:[S([U(m)])],decls:7,vars:0,consts:[["header","Material Design","package","ngx-ui-tour-md-menu"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://material.angular.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["size","m",1,"tui-space_top-3"],["tuiLink","","href","https://material.angular.io/guide/getting-started","target","_blank"],["moduleName","TourMatMenuModule"],[3,"isCloseOnOutsideClickVisible","isMdMenuShowArrowVisible"],["type","MdMenuPlacement"],["disablePageScrollingIntroducedIn","7","backdropOffsetIntroducedIn","11"],[3,"defaultTemplate"]],template:function(l,p){l&1&&(e(0,"tui-doc-page",0),M(1,z,17,0,"ng-template",1)(2,j,28,0,"ng-template",1)(3,G,4,2,"ng-template",1)(4,$,1,0,"ng-template",1)(5,J,5,1,"ng-template",1),n(),i(6,"tour-step-template"))},dependencies:[I,C,b,A,m,k,T,y,E,P,w,D,O,N,B,V,L,H,F,R],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return o})();export{bt as default};
