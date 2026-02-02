import{G as E,H as D,I as w,J as N,K as B,L as M,M as O,N as V,O as F,P as U,R as H,S as L,u as _,v as k,w as l,x as A}from"./chunk-EWBHZBNY.js";import"./chunk-AS5QRHCY.js";import{Da as g,Ia as I,Jc as S,R as d,Rc as b,Sc as C,Ua as s,V as h,Va as n,W as f,Wa as o,Xa as i,cb as T,dd as P,eb as x,ed as y,gb as m,ta as v,vb as e}from"./chunk-LJG3RLDQ.js";import"./chunk-HF7BOOTU.js";import"./chunk-OSJUFJEI.js";import"./chunk-GEZXWR2X.js";import"./chunk-7ZCH6UM2.js";import"./chunk-VLRNFOOT.js";import"./chunk-VSDHJBUA.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-D7G6EMIG.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-HU6DUUP4.js";var W=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <ion-card>
            <ion-card-header>
                <ion-card-title>{{step.title}}</ion-card-title>
                <ion-button
                    class="close"
                    fill="clear"
                    shape="round"
                    (click)="tourService.end()"
                >
                    <ion-icon slot="icon-only" name="close-outline"></ion-icon>
                </ion-button>
            </ion-card-header>

            <ion-card-content
                [innerHTML]="step.content"
            ></ion-card-content>

            <div
                class="footer"
                [class.no-progress]="!step.showProgress"
            >
                <ion-button
                    fill="clear"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                >
                    <ion-icon slot="start" name="chevron-back-outline"></ion-icon>
                    {{ step.prevBtnTitle }}
                </ion-button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <ion-button
                        fill="clear"
                        (click)="tourService.next()"
                    >
                        {{ step.nextBtnTitle }}
                        <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
                    </ion-button>
                }
                @if (!tourService.hasNext(step)) {
                    <ion-button
                        fill="clear"
                        (click)="tourService.end()"
                    >
                        {{ step.endBtnTitle }}
                    </ion-button>
                }
            </div>
        </ion-card>
    </ng-template>
</tour-step-template>
\`\`\`
`;function q(t,p){if(t&1){let a=T();n(0,"p")(1,"code"),e(2,"ngx-ui-tour"),o(),e(3," is a UI tour library built for Angular. It's inspired by "),n(4,"a",2),e(5,"angular-ui-tour"),o(),e(6,". "),o(),n(7,"p")(8,"code"),e(9,"TourIonPopover"),o(),e(10," is an implementation of the tour UI that uses "),n(11,"a",3),e(12,"Ionic"),o(),e(13," Popover to display tour steps. "),o(),n(14,"p")(15,"button",4),x("click",function(){h(a);let u=m();return f(u.tourService.start())}),e(16," Start Demo Tour "),o()()}}function z(t,p){t&1&&i(0,"app-installation",5)(1,"app-usage",6)}function R(t,p){t&1&&(n(0,"app-step-config",7),i(1,"app-placement-config",8),o(),i(2,"app-tour-service-api")(3,"app-events")),t&2&&s("isIonicShowArrowVisible",!0)("isIonicTrapFocusVisible",!0)}function j(t,p){t&1&&i(0,"app-faq",9)}function Q(t,p){if(t&1&&(i(0,"app-hotkeys")(1,"app-defaults"),n(2,"app-custom-template",10)(3,"div",11),e(4," It might be necessary to set "),n(5,"code"),e(6,"pointer-events: auto"),o(),e(7," to the "),n(8,"code"),e(9,"<ion-card>"),o(),e(10," element to make tour step interactable. "),o()(),i(11,"app-styling-active-tour-anchor")),t&2){let a=m();v(2),s("defaultTemplate",a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ion-popover/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ion-popover/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ion-popover/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ion-popover/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ion-popover/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ion-popover/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ion-popover/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ion-popover/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ion-popover/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ion-popover/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ion-popover/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ion-popover/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ion-popover/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ion-popover/Misc"}],this.defaultTemplate=W,this.tourService=d(_)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.\u0275fac=function(c){return new(c||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-ion-popover"]],decls:7,vars:0,consts:[["header","Ionic","package","ngx-ui-tour-ionic"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ionicframework.com/","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-ionic"],["componentName","TourIonPopover"],[3,"isIonicShowArrowVisible","isIonicTrapFocusVisible"],["type","IonPopoverPlacement"],["disablePageScrollingIntroducedIn","1.1"],[3,"defaultTemplate"],["tuiNotification","","appearance","warning","size","m"]],template:function(c,u){c&1&&(n(0,"tui-doc-page",0),I(1,q,17,0,"ng-template",1)(2,z,2,0,"ng-template",1)(3,R,4,2,"ng-template",1)(4,j,1,0,"ng-template",1)(5,Q,12,1,"ng-template",1),o(),i(6,"tour-step-template"))},dependencies:[y,P,b,k,l,S,E,w,D,N,B,M,O,V,U,F,H,C],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return t})();var Pt=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[A({route:"ion-popover",delayAfterNavigation:150}),L(l)]}];export{Pt as default};
