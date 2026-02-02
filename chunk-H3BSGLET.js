import{A as c,B as k,G as A,I as N,J as D,K as E,L as O,M as w,N as B,O as M,P as U,R as W,S as L,y as I,z as _}from"./chunk-EWBHZBNY.js";import"./chunk-AS5QRHCY.js";import{Da as v,Ia as P,Jc as C,R as g,Rc as y,Ua as l,V as d,Va as n,W as h,Wa as o,Xa as i,cb as x,dd as S,eb as T,ed as b,gb as m,ta as f,vb as e}from"./chunk-LJG3RLDQ.js";import"./chunk-HF7BOOTU.js";import"./chunk-OSJUFJEI.js";import"./chunk-GEZXWR2X.js";import"./chunk-7ZCH6UM2.js";import"./chunk-VLRNFOOT.js";import"./chunk-VSDHJBUA.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-D7G6EMIG.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-HU6DUUP4.js";var V=`\`\`\`html
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
`;function H(t,p){if(t&1){let a=x();n(0,"p")(1,"code"),e(2,"ngx-ui-tour"),o(),e(3," is a UI tour library built for Angular. It's inspired by "),n(4,"a",2),e(5,"angular-ui-tour"),o(),e(6,". "),o(),n(7,"p")(8,"code"),e(9,"TourPrimeNg"),o(),e(10," is an implementation of the tour UI that uses "),n(11,"a",3),e(12,"PrimeNG"),o(),e(13," Popover to display tour steps. "),o(),n(14,"p")(15,"button",4),T("click",function(){d(a);let u=m();return h(u.tourService.start())}),e(16," Start Demo Tour "),o()()}}function Y(t,p){t&1&&i(0,"app-installation",5)(1,"app-usage",6)}function q(t,p){t&1&&i(0,"app-step-config",7)(1,"app-tour-service-api")(2,"app-events"),t&2&&l("isCloseOnOutsideClickVisible",!0)}function G(t,p){t&1&&i(0,"app-faq",8)}function R(t,p){if(t&1&&i(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor"),t&2){let a=m();f(2),l("defaultTemplate",a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"prime-ng/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"prime-ng/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"prime-ng/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"prime-ng/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"prime-ng/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"prime-ng/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"prime-ng/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"prime-ng/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"prime-ng/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"prime-ng/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"prime-ng/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"prime-ng/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"prime-ng/Misc"}],this.defaultTemplate=V,this.tourService=g(I)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=v({type:t,selectors:[["app-prime-ng-popover"]],decls:7,vars:0,consts:[["header","PrimeNG","package","ngx-ui-tour-primeng"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://primeng.org","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-primeng"],["componentName","TourPrimeNg"],[3,"isCloseOnOutsideClickVisible"],["disablePageScrollingIntroducedIn","1.0","backdropOffsetIntroducedIn","1.0"],[3,"defaultTemplate"]],template:function(s,u){s&1&&(n(0,"tui-doc-page",0),P(1,H,17,0,"ng-template",1)(2,Y,2,0,"ng-template",1)(3,q,3,1,"ng-template",1)(4,G,1,0,"ng-template",1)(5,R,4,1,"ng-template",1),o(),i(6,"tour-step-template"))},dependencies:[b,S,y,_,c,C,A,N,D,E,O,w,B,U,M,W],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return t})();var xt=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[k({route:"prime-ng",delayAfterNavigation:150}),L(c)]}];export{xt as default};
