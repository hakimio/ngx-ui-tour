import{G as A,H as P,I as D,J as E,K as w,L as O,M as B,N,O as V,P as U,Q as W,R as F,S as H,f as I,g as p,h as _,i as k}from"./chunk-3U4EYI6R.js";import"./chunk-AS5QRHCY.js";import{Da as v,Ia as M,Jc as C,R as d,Rc as S,Ua as s,V as h,Va as o,W as g,Wa as e,Xa as i,cb as T,dd as x,eb as b,ed as y,gb as u,ta as f,vb as n}from"./chunk-LJG3RLDQ.js";import"./chunk-HF7BOOTU.js";import"./chunk-OSJUFJEI.js";import"./chunk-GEZXWR2X.js";import"./chunk-7ZCH6UM2.js";import"./chunk-VLRNFOOT.js";import"./chunk-VSDHJBUA.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-D7G6EMIG.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-HU6DUUP4.js";var L=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <mat-card
            (click)="$event.stopPropagation()"
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
        >
            <mat-card-header>
                <div class="header-group">
                    <mat-card-title>
                        {{ step.title }}
                    </mat-card-title>
                    <button
                        mat-icon-button
                        (click)="tourService.end()"
                        class="close"
                    >
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </mat-card-header>

            <mat-card-content
                class="mat-body"
                [innerHTML]="step.content"
            ></mat-card-content>

            <mat-card-actions
                [class.no-progress]="!step.showProgress"
            >
                <button
                    mat-button
                    class="prev"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                >
                    <mat-icon>chevron_left</mat-icon>
                    {{ step.prevBtnTitle }}
                </button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <button
                        class="next"
                        (click)="tourService.next()"
                        mat-button
                    >
                        {{ step.nextBtnTitle }}
                        <mat-icon iconPositionEnd>chevron_right</mat-icon>
                    </button>
                }
                @if (!tourService.hasNext(step)) {
                    <button
                        mat-button
                        (click)="tourService.end()"
                    >
                        {{ step.endBtnTitle }}
                    </button>
                }
            </mat-card-actions>
        </mat-card>
    </ng-template>
</tour-step-template>
\`\`\`
`;function q(t,c){if(t&1){let a=T();o(0,"p")(1,"code"),n(2,"ngx-ui-tour"),e(),n(3," is a UI tour library built for Angular. It's inspired by "),o(4,"a",2),n(5,"angular-ui-tour"),e(),n(6,". "),e(),o(7,"p")(8,"code"),n(9,"TourMatMenu"),e(),n(10," is an implementation of the tour UI that uses "),o(11,"a",3),n(12,"Angular Material"),e(),n(13," MatMenu to display tour steps. "),e(),o(14,"p")(15,"button",4),b("click",function(){h(a);let l=u();return g(l.tourService.start())}),n(16," Start Demo Tour "),e()()}}function R(t,c){t&1&&i(0,"app-installation",5)(1,"app-usage",6)}function j(t,c){t&1&&(o(0,"app-step-config",7),i(1,"app-placement-config",8),e(),i(2,"app-tour-service-api")(3,"app-events")),t&2&&s("isCloseOnOutsideClickVisible",!0)("isMdMenuShowArrowVisible",!0)}function z(t,c){t&1&&i(0,"app-faq",9)}function Q(t,c){if(t&1&&i(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",10)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let a=u();f(2),s("defaultTemplate",a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"md-menu/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"md-menu/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"md-menu/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"md-menu/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"md-menu/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"md-menu/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"md-menu/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"md-menu/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"md-menu/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"md-menu/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"md-menu/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"md-menu/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"md-menu/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"md-menu/Misc"}],this.defaultTemplate=L,this.tourService=d(I)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.\u0275fac=function(m){return new(m||t)}}static{this.\u0275cmp=v({type:t,selectors:[["app-md-menu"]],decls:7,vars:0,consts:[["header","Material Design","package","ngx-ui-tour-md-menu"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://material.angular.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-md-menu"],["componentName","TourMatMenu"],[3,"isCloseOnOutsideClickVisible","isMdMenuShowArrowVisible"],["type","MdMenuPlacement"],["disablePageScrollingIntroducedIn","7","backdropOffsetIntroducedIn","11"],[3,"defaultTemplate"]],template:function(m,l){m&1&&(o(0,"tui-doc-page",0),M(1,q,17,0,"ng-template",1)(2,R,2,0,"ng-template",1)(3,j,4,2,"ng-template",1)(4,z,1,0,"ng-template",1)(5,Q,5,1,"ng-template",1),e(),i(6,"tour-step-template"))},dependencies:[y,x,S,p,_,C,A,D,P,E,w,O,B,N,U,V,W,F],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return t})();var xt=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[k({route:"md-menu",delayAfterNavigation:150}),H(p)]}];export{xt as default};
