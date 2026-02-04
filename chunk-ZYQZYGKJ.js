import{G as k,H as A,I as P,J as E,K as B,L as M,M as O,N,O as U,P as W,Q as z,R as F,S as H,m as C,n as D,o as s,p as _}from"./chunk-3U4EYI6R.js";import"./chunk-AS5QRHCY.js";import{Da as g,Ia as T,Jc as S,R as m,Rc as b,Ua as v,V as d,Va as n,W as h,Wa as e,Xa as i,cb as w,dd as I,eb as x,ed as y,gb as u,ta as f,vb as o}from"./chunk-LJG3RLDQ.js";import"./chunk-HF7BOOTU.js";import"./chunk-OSJUFJEI.js";import"./chunk-GEZXWR2X.js";import"./chunk-7ZCH6UM2.js";import"./chunk-VLRNFOOT.js";import"./chunk-VSDHJBUA.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-D7G6EMIG.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-HU6DUUP4.js";var L=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <div
            class="main-container"
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
            [class]="step.popoverClass"
        >
            <div class="title-container">
                <h3>{{ step?.title }}</h3>
                <button
                    tuiIconButton
                    iconStart="@tui.x"
                    appearance="flat"
                    size="m"
                    (click)="tourService.end()"
                ></button>
            </div>
            <p
                class="content"
                [innerHTML]="step?.content"
            ></p>
            <div
                class="buttons"
                [class.no-progress]="!step.showProgress"
            >
                <button
                    tuiButton
                    type="button"
                    iconStart="@tui.chevron-left"
                    appearance="flat"
                    size="m"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                    class="prev"
                >
                    {{ step?.prevBtnTitle }}
                </button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <button
                        tuiButton
                        type="button"
                        iconEnd="@tui.chevron-right"
                        appearance="flat"
                        size="m"
                        (click)="tourService.next()"
                        class="next"
                    >
                        {{ step?.nextBtnTitle }}
                    </button>
                }
                @if (!tourService.hasNext(step)) {
                    <button
                        tuiButton
                        type="button"
                        appearance="flat"
                        size="m"
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
`;function Y(t,p){if(t&1){let a=w();n(0,"p")(1,"code"),o(2,"ngx-ui-tour"),e(),o(3," is a UI tour library built for Angular. It's inspired by "),n(4,"a",2),o(5,"angular-ui-tour"),e(),o(6,". "),e(),n(7,"p")(8,"code"),o(9,"TourTuiDropdown"),e(),o(10," is an implementation of the tour UI that uses "),n(11,"a",3),o(12,"Taiga UI"),e(),o(13," Dropdown to display tour steps. "),e(),n(14,"p")(15,"button",4),x("click",function(){d(a);let l=u();return h(l.start())}),o(16," Start Demo Tour "),e()()}}function q(t,p){t&1&&i(0,"app-installation",5)(1,"app-usage",6)}function R(t,p){t&1&&(n(0,"app-step-config"),i(1,"app-placement-config",7),e(),i(2,"app-tour-service-api")(3,"app-events"))}function j(t,p){t&1&&i(0,"app-faq",8)}function Q(t,p){if(t&1&&i(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let a=u();f(2),v("defaultTemplate",a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-dropdown/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-dropdown/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-dropdown/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-dropdown/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"tui-dropdown/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-dropdown/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-dropdown/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"tui-dropdown/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"tui-dropdown/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-dropdown/API",stepDimensions:{maxWidth:"340px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-dropdown/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-dropdown/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-dropdown/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-dropdown/Misc"}],this.defaultTemplate=L,this.tourService=m(C)}ngOnInit(){this.tourService.initialize(this.tourSteps)}start(){this.tourService.start()}static{this.\u0275fac=function(c){return new(c||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-tui-dropdown"]],decls:7,vars:0,consts:[["header","Taiga UI Dropdown","package","ngx-ui-tour-tui-dropdown"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-tui-dropdown"],["componentName","TourTuiDropdown"],["type","TuiDdPlacement"],["backdropOffsetIntroducedIn","5","disablePageScrollingIntroducedIn","4.1"],[3,"defaultTemplate"]],template:function(c,l){c&1&&(n(0,"tui-doc-page",0),T(1,Y,17,0,"ng-template",1)(2,q,2,0,"ng-template",1)(3,R,4,0,"ng-template",1)(4,j,1,0,"ng-template",1)(5,Q,5,1,"ng-template",1),e(),i(6,"tour-step-template"))},dependencies:[y,I,b,D,s,S,k,P,A,E,B,M,O,N,W,U,z,F],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return t})();var It=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[_({route:"tui-dropdown",delayAfterNavigation:150,disablePageScrolling:!1}),H(s)]}];export{It as default};
