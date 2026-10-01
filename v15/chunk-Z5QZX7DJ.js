import{A as _,B as c,C as A,H as E,I as M,J as w,K as D,L as N,M as B,N as O,O as V,P as F,Q as L,R as H,T as U,z as C}from"./chunk-LCORDV52.js";import{Ja as s,Ka as o,La as e,Ma as i,O as p,Q as d,R as h,Ta as I,Va as x,Xa as m,Yb as T,Zb as b,_b as y,ad as R,ja as f,jb as t,qb as S,rc as P,sa as v,sc as k,xa as g}from"./chunk-F3S53QKJ.js";import"./chunk-KUKPXLXG.js";import"./chunk-7TOYBQTK.js";import"./chunk-ET3ZWXOJ.js";import"./chunk-MCMHWS7T.js";import"./chunk-XLASQAO6.js";import"./chunk-XQSDAB24.js";import"./chunk-M2X7KQLB.js";import"./chunk-2YSZFPCQ.js";import"./chunk-57YRIO75.js";import"./chunk-D7G6EMIG.js";import"./chunk-C5RQ2IC2.js";import"./chunk-42C7ZIID.js";import"./chunk-B4AJQJMI.js";var W=`\`\`\`html
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
`;function q(n,a){if(n&1){let r=I();o(0,"p")(1,"code"),t(2,"ngx-ui-tour"),e(),t(3," is a UI tour library built for Angular. It's inspired by "),o(4,"a",2),t(5,"angular-ui-tour"),e(),t(6,". "),e(),o(7,"p")(8,"code"),t(9,"TourIonPopoverModule"),e(),t(10," is an implementation of the tour UI that uses "),o(11,"a",3),t(12,"Ionic"),e(),t(13," Popover to display tour steps. "),e(),o(14,"p")(15,"button",4),x("click",function(){d(r);let u=m();return h(u.tourService.start())}),t(16," Start Demo Tour "),e()()}}function z(n,a){n&1&&(o(0,"app-header",5),t(1,"Installation"),e(),o(2,"ol")(3,"li")(4,"code"),t(5,"npm install ngx-ui-tour-ionic @ionic/angular"),e()(),o(6,"li"),t(7," Import "),o(8,"code"),t(9,"TourIonPopoverModule"),e(),t(10," into your app module "),e(),o(11,"li"),t(12," Make sure "),o(13,"code"),t(14,"RouterModule"),e(),t(15," is imported in your app module "),e(),o(16,"li"),t(17," Make sure Ionic is "),o(18,"a",6),t(19,"installed correctly"),e()()(),i(20,"app-usage",7))}function j(n,a){n&1&&(o(0,"app-step-config",8),i(1,"app-placement-config",9),e(),i(2,"app-tour-service-api")(3,"app-events")),n&2&&s("isIonicShowArrowVisible",!0)("isIonicTrapFocusVisible",!0)}function G(n,a){n&1&&i(0,"app-faq",10)}function J(n,a){if(n&1&&(i(0,"app-hotkeys")(1,"app-defaults"),o(2,"app-custom-template",11)(3,"tui-notification",12),t(4," It might be necessary to set "),o(5,"code"),t(6,"pointer-events: auto"),e(),t(7," to the "),o(8,"code"),t(9,"<ion-card>"),e(),t(10," element to make tour step interactable. "),e()(),i(11,"app-styling-active-tour-anchor")),n&2){let r=m();f(2),s("defaultTemplate",r.defaultTemplate)}}var St=(()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ion-popover/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ion-popover/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ion-popover/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ion-popover/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"ion-popover/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ion-popover/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ion-popover/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ion-popover/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ion-popover/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ion-popover/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ion-popover/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ion-popover/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ion-popover/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ion-popover/Misc"}],this.defaultTemplate=W,this.tourService=p(C),this.delayAfterNavigation=p(R)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"ion-popover",delayAfterNavigation:this.delayAfterNavigation})}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=v({type:n,selectors:[["app-ion-popover"]],features:[S([U(c)])],decls:7,vars:0,consts:[["header","Ionic","package","ngx-ui-tour-ionic"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ionicframework.com/","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["tuiLink","","href","https://ionicframework.com/docs/intro/cli","target","_blank"],["moduleName","TourIonPopoverModule"],[3,"isIonicShowArrowVisible","isIonicTrapFocusVisible"],["type","IonPopoverPlacement"],["disablePageScrollingIntroducedIn","1.1"],[3,"defaultTemplate"],["appearance","warning","size","m"]],template:function(l,u){l&1&&(o(0,"tui-doc-page",0),g(1,q,17,0,"ng-template",1)(2,z,21,0,"ng-template",1)(3,j,4,2,"ng-template",1)(4,G,1,0,"ng-template",1)(5,J,12,1,"ng-template",1),e(),i(6,"tour-step-template"))},dependencies:[k,P,b,A,_,c,T,E,M,D,w,N,B,O,V,F,H,L,y],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return n})();export{St as default};
