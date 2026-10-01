import{D as _,E as I,F as p,G as k,H as A,I as N,K as E,L as D,M,N as O,O as w,P as B,Q as L,R as V,T as W}from"./chunk-LCORDV52.js";import{Ja as m,Ka as n,La as i,Ma as o,O as s,Q as d,R as g,Ta as x,Va as T,Xa as c,Yb as S,Zb as y,ad as F,ja as h,jb as e,qb as P,rc as C,sa as f,sc as b,xa as v}from"./chunk-F3S53QKJ.js";import"./chunk-KUKPXLXG.js";import"./chunk-7TOYBQTK.js";import"./chunk-ET3ZWXOJ.js";import"./chunk-MCMHWS7T.js";import"./chunk-XLASQAO6.js";import"./chunk-XQSDAB24.js";import"./chunk-M2X7KQLB.js";import"./chunk-2YSZFPCQ.js";import"./chunk-57YRIO75.js";import"./chunk-D7G6EMIG.js";import"./chunk-C5RQ2IC2.js";import"./chunk-42C7ZIID.js";import"./chunk-B4AJQJMI.js";var H=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <div
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
            class="main-container"
        >
            <div class="title-container">
                <div class="title">{{ step?.title }}</div>
                <p-button
                    severity="secondary"
                    icon="pi pi-times"
                    ariaLabel="Close"
                    variant="text"
                    [rounded]="true"
                    (click)="tourService.end()"
                />
            </div>

            <p
                class="card-text"
                [innerHTML]="step.content"
            ></p>

            <div
                class="buttons"
                [class.no-progress]="!step.showProgress"
            >
                <p-button
                    [disabled]="!tourService.hasPrev(step)"
                    icon="pi pi-angle-left"
                    iconPos="left"
                    severity="secondary"
                    [label]="step.prevBtnTitle"
                    (click)="tourService.prev()"
                />
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }

                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <p-button
                        icon="pi pi-angle-right"
                        iconPos="right"
                        [label]="step.nextBtnTitle"
                        (click)="tourService.next()"
                    />
                }
                @if (!tourService.hasNext(step)) {
                    <p-button
                        [label]="step.endBtnTitle"
                        (click)="tourService.end()"
                    />
                }
            </div>
        </div>
    </ng-template>
</tour-step-template>
\`\`\`
`;function G(t,a){if(t&1){let r=x();n(0,"p")(1,"code"),e(2,"ngx-ui-tour"),i(),e(3," is a UI tour library built for Angular. It's inspired by "),n(4,"a",2),e(5,"angular-ui-tour"),i(),e(6,". "),i(),n(7,"p")(8,"code"),e(9,"TourPrimeNgModule"),i(),e(10," is an implementation of the tour UI that uses "),n(11,"a",3),e(12,"PrimeNG"),i(),e(13," Popover to display tour steps. "),i(),n(14,"p")(15,"button",4),T("click",function(){d(r);let u=c();return g(u.tourService.start())}),e(16," Start Demo Tour "),i()()}}function R(t,a){t&1&&(n(0,"app-header",5),e(1,"Installation"),i(),n(2,"ol")(3,"li")(4,"code"),e(5,"npm install ngx-ui-tour-primeng primeng @primeng/themes primeicons"),i()(),n(6,"li"),e(7," Import "),n(8,"code"),e(9,"TourPrimeNgModule"),i(),e(10," into your app module "),i(),n(11,"li"),e(12," Make sure "),n(13,"code"),e(14,"RouterModule"),i(),e(15," is imported in your app module "),i(),n(16,"li"),e(17," Make sure PrimeNG is "),n(18,"a",6),e(19,"installed correctly"),i()()(),o(20,"app-usage",7))}function Y(t,a){t&1&&o(0,"app-step-config",8)(1,"app-tour-service-api")(2,"app-events"),t&2&&m("isCloseOnOutsideClickVisible",!0)}function q(t,a){t&1&&o(0,"app-faq",9)}function j(t,a){if(t&1&&o(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",10)(3,"app-styling-active-tour-anchor"),t&2){let r=c();h(2),m("defaultTemplate",r.defaultTemplate)}}var ve=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"prime-ng/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"prime-ng/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"prime-ng/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"prime-ng/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"prime-ng/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"prime-ng/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"prime-ng/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"prime-ng/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"prime-ng/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"prime-ng/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"prime-ng/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"prime-ng/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"prime-ng/Misc"}],this.defaultTemplate=H,this.tourService=s(_),this.delayAfterNavigation=s(F)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"prime-ng",delayAfterNavigation:this.delayAfterNavigation})}static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275cmp=f({type:t,selectors:[["app-prime-ng-popover"]],features:[P([W(p)])],decls:7,vars:0,consts:[["header","PrimeNG","package","ngx-ui-tour-primeng"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://primeng.org","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["tuiLink","","href","https://primeng.org/installation","target","_blank"],["moduleName","TourPrimeNgModule"],[3,"isCloseOnOutsideClickVisible"],["disablePageScrollingIntroducedIn","1.0"],[3,"defaultTemplate"]],template:function(l,u){l&1&&(n(0,"tui-doc-page",0),v(1,G,17,0,"ng-template",1)(2,R,21,0,"ng-template",1)(3,Y,3,1,"ng-template",1)(4,q,1,0,"ng-template",1)(5,j,4,1,"ng-template",1),i(),o(6,"tour-step-template"))},dependencies:[b,C,y,k,I,p,S,A,N,E,D,M,O,w,B,V,L],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return t})();export{ve as default};
