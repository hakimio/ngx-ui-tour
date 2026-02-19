import{G as P,H,I as D,J as E,K as B,L as w,M,N,O,P as U,Q as W,R as z,S as F,q as _,r as A,s as u,t as k}from"./chunk-4OXU545F.js";import"./chunk-AS5QRHCY.js";import{Da as v,Ia as T,Oc as S,R as d,V as f,Va as m,W as g,Wa as i,Xa as e,Xc as C,Ya as r,db as x,fb as b,hb as s,ld as I,md as y,ta as l,wb as n}from"./chunk-I6RDHBA6.js";import"./chunk-HF7BOOTU.js";import"./chunk-OSJUFJEI.js";import"./chunk-GEZXWR2X.js";import"./chunk-7ZCH6UM2.js";import"./chunk-VLRNFOOT.js";import"./chunk-VSDHJBUA.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-D7G6EMIG.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-HU6DUUP4.js";var L=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <div
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
`;function Y(t,p){if(t&1){let o=x();i(0,"p")(1,"code"),n(2,"ngx-ui-tour"),e(),n(3," is a UI tour library built for Angular. It's inspired by "),i(4,"a",2),n(5,"angular-ui-tour"),e(),n(6,". "),e(),i(7,"p")(8,"code"),n(9,"TourTuiHint"),e(),n(10," is an implementation of the tour UI that uses "),i(11,"a",3),n(12,"Taiga UI"),e(),n(13," Hint to display tour steps. "),e(),i(14,"p")(15,"button",4),b("click",function(){f(o);let h=s();return g(h.start())}),n(16," Start Demo Tour "),e()()}}function q(t,p){t&1&&r(0,"app-installation",5)(1,"app-usage",6)}function R(t,p){if(t&1&&(i(0,"app-step-config"),r(1,"app-placement-config",7),e(),r(2,"app-tour-service-api")(3,"app-events")),t&2){let o=s();l(),m("values",o.hintPlacements)}}function j(t,p){t&1&&r(0,"app-faq",8)}function Q(t,p){if(t&1&&r(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let o=s();l(2),m("defaultTemplate",o.defaultTemplate)}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-hint/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-hint/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-hint/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-hint/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"tui-hint/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-hint/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-hint/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"tui-hint/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"tui-hint/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-hint/API",stepDimensions:{maxWidth:"340px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-hint/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-hint/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-hint/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-hint/Misc"}],this.defaultTemplate=L,this.hintPlacements=["bottom-end","bottom-start","bottom","end-bottom","end-top","end","start-bottom","start-top","start","top-end","top-start","top"],this.tourService=d(_)}ngOnInit(){this.tourService.initialize(this.tourSteps)}start(){this.tourService.start()}static{this.\u0275fac=function(c){return new(c||t)}}static{this.\u0275cmp=v({type:t,selectors:[["app-tui-hint"]],decls:7,vars:0,consts:[["header","Taiga UI Hint","package","ngx-ui-tour-tui-hint"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-tui-hint"],["componentName","TourTuiHint"],["value","bottom-end","extraInfo","Accepts <a href='https://taiga-ui.dev/directives/hint-manual/API'>HintManual</a> direction options.",3,"values"],["disablePageScrollingIntroducedIn","4.1"],[3,"defaultTemplate"]],template:function(c,h){c&1&&(i(0,"tui-doc-page",0),T(1,Y,17,0,"ng-template",1)(2,q,2,0,"ng-template",1)(3,R,4,1,"ng-template",1)(4,j,1,0,"ng-template",1)(5,Q,5,1,"ng-template",1),e(),r(6,"tour-step-template"))},dependencies:[y,I,C,A,u,S,P,D,H,E,B,w,M,N,U,O,W,z],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return t})();var It=[{path:"",component:a,children:[{path:"Setup",component:a},{path:"API",component:a},{path:"FAQ",component:a},{path:"Misc",component:a}],providers:[k({route:"tui-hint",delayAfterNavigation:150}),F(u)]}];export{It as default};
