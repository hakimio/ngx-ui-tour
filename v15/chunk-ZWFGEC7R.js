import{H as P,I as D,J as M,K as L,L as O,M as U,N as F,O as V,P as H,Q as R,R as W,T as Y,k as B,l as N,m as w,n as m,o as E}from"./chunk-LCORDV52.js";import{Ja as a,Ka as e,La as o,Ma as i,O as u,Q as g,R as h,Ta as b,Va as v,Xa as c,Yb as T,Zb as C,_b as I,ad as z,ja as l,jb as t,nc as _,qb as S,rb as y,rc as A,sa as x,sc as k,xa as f}from"./chunk-F3S53QKJ.js";import"./chunk-KUKPXLXG.js";import"./chunk-7TOYBQTK.js";import"./chunk-ET3ZWXOJ.js";import"./chunk-MCMHWS7T.js";import"./chunk-XLASQAO6.js";import"./chunk-XQSDAB24.js";import"./chunk-M2X7KQLB.js";import"./chunk-2YSZFPCQ.js";import"./chunk-57YRIO75.js";import"./chunk-D7G6EMIG.js";import"./chunk-C5RQ2IC2.js";import"./chunk-42C7ZIID.js";import"./chunk-B4AJQJMI.js";var q=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <div
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
            class="main-container"
        >
            @if (!step?.useLegacyTitle && step?.title) {
                <div class="title-container">
                    <h5>{{ step?.title }}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        (click)="tourService.end()"
                    ></button>
                </div>
            }
            <p
                class="card-text"
                [innerHTML]="step?.content"
            ></p>
            <div
                class="buttons"
                [class.no-progress]="!step.showProgress"
            >
                <button
                    [disabled]="!tourService.hasPrev(step)"
                    class="btn btn-sm btn-outline-secondary prev"
                    (click)="tourService.prev()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    {{ step?.prevBtnTitle }}
                </button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <button
                        class="btn btn-sm btn-outline-primary next"
                        (click)="tourService.next()"
                    >
                        {{ step?.nextBtnTitle }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                }
                @if (!tourService.hasNext(step)) {
                    <button
                        class="btn btn-sm btn-outline-primary"
                        (click)="tourService.end()"
                    >
                        {{ step?.endBtnTitle }}
                    </button>
                }
            </div>
        </div>
    </ng-template>
</tour-step-template>
\`\`\`
`;var G=()=>["top","bottom","left","right","auto","top left","top right","right top","right bottom","bottom right","bottom left","left bottom","left top","start","end","top start","top end","end top","end bottom","bottom end","bottom start","start bottom","start top"];function J(n,s){if(n&1){let r=b();e(0,"p")(1,"code"),t(2,"ngx-ui-tour"),o(),t(3," is a UI tour library built for Angular. It's inspired by "),e(4,"a",2),t(5,"angular-ui-tour"),o(),t(6,". "),o(),e(7,"p")(8,"code"),t(9,"TourNgxBootstrapModule"),o(),t(10," is an implementation of the tour UI that uses "),e(11,"a",3),t(12,"NgxBootstrap"),o(),t(13," popovers to display tour steps. "),o(),e(14,"p")(15,"button",4),v("click",function(){g(r);let d=c();return h(d.tourService.start())}),t(16," Start Demo Tour "),o()()}}function K(n,s){if(n&1&&(e(0,"app-header",5),t(1,"Installation"),o(),e(2,"ol")(3,"li")(4,"code"),t(5,"npm install ngx-ui-tour-ngx-bootstrap bootstrap ngx-bootstrap"),o()(),e(6,"li"),t(7," Import "),e(8,"code"),t(9,"TourNgxBootstrapModule"),o(),t(10," into your app module "),e(11,"tui-notification",6),t(12," If you are using "),e(13,"code"),t(14,"v9"),o(),t(15," or older, you have to import "),e(16,"code"),t(17,"TourNgxBootstrapModule.forRoot()"),o()()(),e(18,"li"),t(19," Make sure "),e(20,"code"),t(21,"RouterModule"),o(),t(22," is imported in your app module "),o(),e(23,"li"),t(24," Add bootstrap SCSS to your "),e(25,"code"),t(26,"styles.scss"),o(),t(27,": "),i(28,"tui-doc-code",7),o(),e(29,"li"),t(30," Make sure Ngx Bootstrap is "),e(31,"a",8),t(32,"installed correctly"),o()()(),i(33,"app-usage",9)),n&2){let r=c();l(28),a("code",r.bootstrapScssImport)}}function Q(n,s){n&1&&(e(0,"app-step-config",10),i(1,"app-placement-config",11),o(),i(2,"app-tour-service-api")(3,"app-events")),n&2&&(a("isUseLegacyTitleVisible",!0),l(),a("values",y(2,G)))}function X(n,s){n&1&&i(0,"app-faq")}function Z(n,s){if(n&1&&i(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",12)(3,"app-styling-active-tour-anchor"),n&2){let r=c();l(2),a("defaultTemplate",r.defaultTemplate)}}var At=(()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ngx-bootstrap/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ngx-bootstrap/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ngx-bootstrap/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ngx-bootstrap/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ngx-bootstrap/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ngx-bootstrap/API"},{anchorId:"config.popoverClass",content:"You can add custom popover class.",title:"Custom CSS Class",popoverClass:"custom-tour-class",route:"ngx-bootstrap/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ngx-bootstrap/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ngx-bootstrap/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ngx-bootstrap/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ngx-bootstrap/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ngx-bootstrap/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ngx-bootstrap/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ngx-bootstrap/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ngx-bootstrap/Misc"}],this.bootstrapScssImport='@import "bootstrap/scss/bootstrap";',this.defaultTemplate=q,this.tourService=u(B),this.delayAfterNavigation=u(z)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ngx-bootstrap",delayAfterNavigation:this.delayAfterNavigation})}static{this.\u0275fac=function(p){return new(p||n)}}static{this.\u0275cmp=x({type:n,selectors:[["app-ngx-bootstrap"]],features:[S([Y(m)])],decls:7,vars:0,consts:[["header","Ngx Bootstrap","package","ngx-ui-tour-ngx-bootstrap"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://github.com/valor-software/ngx-bootstrap","rel","nofollow","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["size","m",1,"tui-space_top-3"],["filename","styles.scss",3,"code"],["tuiLink","","href","https://valor-software.com/ngx-bootstrap/#/documentation#installation","target","_blank"],["moduleName","TourNgxBootstrapModule"],[3,"isUseLegacyTitleVisible"],["value","auto","extraInfo","Accepts <a target='_blank' href='https://valor-software.com/ngx-bootstrap/#/popover#placement'>Popover placement</a> options.",3,"values"],[3,"defaultTemplate"]],template:function(p,d){p&1&&(e(0,"tui-doc-page",0),f(1,J,17,0,"ng-template",1)(2,K,34,1,"ng-template",1)(3,Q,4,3,"ng-template",1)(4,X,1,0,"ng-template",1)(5,Z,4,1,"ng-template",1),o(),i(6,"tour-step-template"))},dependencies:[_,C,E,m,w,N,T,I,P,D,L,M,O,U,F,V,H,W,R,k,A],styles:[".popover.custom-tour-class{--bs-popover-arrow-border: #333;--bs-popover-bg: #333;--bs-popover-border-color: #333;--bs-popover-body-color: #eee}  .popover.custom-tour-class .progress{color:#6c757d!important}  .popover.custom-tour-class .btn-close{filter:invert(1) grayscale(100%) brightness(200%)}app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return n})();export{At as default};
