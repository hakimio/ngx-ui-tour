import{H as w,I as P,J as M,K as D,L as O,M as L,N as U,O as F,P as V,Q as H,R,S as W,T as Y,c as N,d as m,e as B,f as E}from"./chunk-TCDXVKFX.js";import{$c as z,Ja as a,Ka as e,La as o,Ma as i,O as u,Q as g,R as h,Ta as v,Va as x,Xa as c,Yb as T,Zb as C,_b as I,ja as l,jb as t,nc as _,qb as S,rb as y,rc as A,sa as b,sc as k,xa as f}from"./chunk-FN3ZRNOM.js";import"./chunk-KUKPXLXG.js";import"./chunk-7TOYBQTK.js";import"./chunk-ET3ZWXOJ.js";import"./chunk-MCMHWS7T.js";import"./chunk-XLASQAO6.js";import"./chunk-XQSDAB24.js";import"./chunk-M2X7KQLB.js";import"./chunk-2YSZFPCQ.js";import"./chunk-57YRIO75.js";import"./chunk-D7G6EMIG.js";import"./chunk-C5RQ2IC2.js";import"./chunk-42C7ZIID.js";import"./chunk-B4AJQJMI.js";var G=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <div\r
            [style.width]="step.stepDimensions?.width"\r
            [style.min-width]="step.stepDimensions?.minWidth"\r
            [style.max-width]="step.stepDimensions?.maxWidth"\r
            class="main-container"\r
        >\r
            @if (!step?.useLegacyTitle && step?.title) {\r
                <div class="title-container">\r
                    <h5>{{ step?.title }}</h5>\r
                    <button\r
                        type="button"\r
                        class="btn-close"\r
                        aria-label="Close"\r
                        (click)="tourService.end()"\r
                    ></button>\r
                </div>\r
            }\r
            <p\r
                class="card-text"\r
                [innerHTML]="step?.content"\r
            ></p>\r
            <div\r
                class="buttons"\r
                [class.no-progress]="!step.showProgress"\r
            >\r
                <button\r
                    [disabled]="!tourService.hasPrev(step)"\r
                    class="btn btn-sm btn-outline-secondary prev"\r
                    (click)="tourService.prev()"\r
                >\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r
                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\r
                    </svg>\r
                    {{ step?.prevBtnTitle }}\r
                </button>\r
                @if (step.showProgress) {\r
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>\r
                }\r
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r
                    <button\r
                        class="btn btn-sm btn-outline-primary next"\r
                        (click)="tourService.next()"\r
                    >\r
                        {{ step?.nextBtnTitle }}\r
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r
                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\r
                        </svg>\r
                    </button>\r
                }\r
                @if (!tourService.hasNext(step)) {\r
                    <button\r
                        class="btn btn-sm btn-outline-primary"\r
                        (click)="tourService.end()"\r
                    >\r
                        {{ step?.endBtnTitle }}\r
                    </button>\r
                }\r
            </div>\r
        </div>\r
    </ng-template>\r
</tour-step-template>\r
\`\`\`\r
`;var q=()=>["auto","top","bottom","start","left","end","right","top-start","top-left","top-end","top-right","bottom-start","bottom-left","bottom-end","bottom-right","start-top","left-top","start-bottom","left-bottom","end-top","right-top","end-bottom","right-bottom"];function J(n,s){if(n&1){let r=v();e(0,"p")(1,"code"),t(2,"ngx-ui-tour"),o(),t(3," is a UI tour library built for Angular. It's inspired by "),e(4,"a",2),t(5,"angular-ui-tour"),o(),t(6,". "),o(),e(7,"p")(8,"code"),t(9,"TourNgBootstrapModule"),o(),t(10," is an implementation of the tour UI that uses "),e(11,"a",3),t(12,"NgBootstrap"),o(),t(13," popovers to display tour steps. "),o(),e(14,"p")(15,"button",4),x("click",function(){g(r);let d=c();return h(d.tourService.start())}),t(16," Start Demo Tour "),o()()}}function K(n,s){if(n&1&&(e(0,"app-header",5),t(1,"Installation"),o(),e(2,"ol")(3,"li")(4,"code"),t(5,"npm install ngx-ui-tour-ng-bootstrap bootstrap @popperjs/core @ng-bootstrap/ng-bootstrap"),o()(),e(6,"li"),t(7," Import "),e(8,"code"),t(9,"TourNgBootstrapModule"),o(),t(10," into your app module "),e(11,"tui-notification",6),t(12," If you are using "),e(13,"code"),t(14,"v11"),o(),t(15," or older, you have to import "),e(16,"code"),t(17,"TourNgBootstrapModule.forRoot()"),o()()(),e(18,"li"),t(19," Make sure "),e(20,"code"),t(21,"RouterModule"),o(),t(22," is imported in your app module "),o(),e(23,"li"),t(24," Add bootstrap SCSS to your "),e(25,"code"),t(26,"styles.scss"),o(),t(27,": "),i(28,"tui-doc-code",7),o(),e(29,"li"),t(30," Make sure NG Bootstrap is "),e(31,"a",8),t(32,"installed correctly"),o()()(),i(33,"app-usage",9)),n&2){let r=c();l(28),a("code",r.bootstrapScssImport)}}function Q(n,s){n&1&&(e(0,"app-step-config",10),i(1,"app-placement-config",11),o(),i(2,"app-tour-service-api")(3,"app-events")),n&2&&(a("isUseLegacyTitleVisible",!0),l(),a("values",y(2,q)))}function X(n,s){n&1&&i(0,"app-faq",12)}function Z(n,s){if(n&1&&i(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",13)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),n&2){let r=c();l(2),a("defaultTemplate",r.defaultTemplate)}}var kt=(()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ng-bootstrap/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ng-bootstrap/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ng-bootstrap/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ng-bootstrap/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ng-bootstrap/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ng-bootstrap/API"},{anchorId:"config.popoverClass",content:"You can add custom popover class.",title:"Custom CSS Class",popoverClass:"custom-tour-class",route:"ng-bootstrap/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ng-bootstrap/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ng-bootstrap/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ng-bootstrap/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ng-bootstrap/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ng-bootstrap/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ng-bootstrap/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ng-bootstrap/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ng-bootstrap/Misc"}],this.bootstrapScssImport='@import "bootstrap/scss/bootstrap";',this.defaultTemplate=G,this.tourService=u(N),this.delayAfterNavigation=u(z)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ng-bootstrap",delayAfterNavigation:this.delayAfterNavigation})}static{this.\u0275fac=function(p){return new(p||n)}}static{this.\u0275cmp=b({type:n,selectors:[["app-ng-bootstrap"]],features:[S([Y(m)])],decls:7,vars:0,consts:[["header","NG Bootstrap","package","ngx-ui-tour-ng-bootstrap"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ng-bootstrap.github.io","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["size","m",1,"tui-space_top-3"],["filename","styles.scss",3,"code"],["tuiLink","","href","https://ng-bootstrap.github.io/#/getting-started#installation","target","_blank"],["moduleName","TourNgBootstrapModule"],[3,"isUseLegacyTitleVisible"],["value","auto","extraInfo","Accepts <a href='https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover'>NgbPopover</a> placement options.",3,"values"],["disablePageScrollingIntroducedIn","12.1","backdropOffsetIntroducedIn","13"],[3,"defaultTemplate"]],template:function(p,d){p&1&&(e(0,"tui-doc-page",0),f(1,J,17,0,"ng-template",1)(2,K,34,1,"ng-template",1)(3,Q,4,3,"ng-template",1)(4,X,1,0,"ng-template",1)(5,Z,5,1,"ng-template",1),o(),i(6,"tour-step-template"))},dependencies:[C,E,m,B,T,I,w,P,D,M,O,L,U,F,V,R,H,W,_,k,A],styles:[".popover.custom-tour-class{--bs-popover-arrow-border: #333;--bs-popover-bg: #333;--bs-popover-border-color: #333;--bs-popover-body-color: #eee}  .popover.custom-tour-class .progress{color:#6c757d!important}  .popover.custom-tour-class .btn-close{filter:invert(1) grayscale(100%) brightness(200%)}app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return n})();export{kt as default};
