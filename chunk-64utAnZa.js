import{Fn as ym,Gt as hi,Ji as g,Kn as $m,Na as sp,Ot as cM,Wr as Ql,a as BA,ai as Uw,cr as Eb,er as BT,gi as Xs,ha as oT,ja as sT,mr as Fm,qa as xm,ta as ip,x as F_,zr as Pm}from"./main-TE5ENKDR.js";import{I as ju,K as wu,L as mZ,P as ip$1,V as qu,Y as zu,_ as Mu,d as Gu,i as C4,k as du,l as Fu,m as Jo,s as Du,u as Gd,w as Zu,y as Oe}from"./chunk-BnpJt4s4.js";var W=`\`\`\`html
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
`;function q(t,p){if(t&1){let a=oT();Xs(0,`p`)(1,`code`),BT(2,`ngx-ui-tour`),Ql(),BT(3,` is a UI tour library built for Angular. It's inspired by `),Xs(4,`a`,2),BT(5,`angular-ui-tour`),Ql(),BT(6,`. `),Ql(),Xs(7,`p`)(8,`code`),BT(9,`TourIonPopover`),Ql(),BT(10,` is an implementation of the tour UI that uses `),Xs(11,`a`,3),BT(12,`Ionic`),Ql(),BT(13,` Popover to display tour steps. `),Ql(),Xs(14,`p`)(15,`button`,4),$m(`click`,function(){ip(a);let u=sT();return sp(u.tourService.start())}),BT(16,` Start Demo Tour `),Ql()()}}function z(t,p){t&1&&Pm(0,`app-installation`,5)(1,`app-usage`,6)}function R(t,p){t&1&&(Xs(0,`app-step-config`,7),Pm(1,`app-placement-config`,8),Ql(),Pm(2,`app-tour-service-api`)(3,`app-events`)),t&2&&Fm(`isIonicShowArrowVisible`,!0)(`isIonicTrapFocusVisible`,!0)}function j(t,p){t&1&&Pm(0,`app-faq`,9)}function Q(t,p){if(t&1&&(Pm(0,`app-hotkeys`)(1,`app-defaults`),Xs(2,`app-custom-template`,10)(3,`div`,11),BT(4,` It might be necessary to set `),Xs(5,`code`),BT(6,`pointer-events: auto`),Ql(),BT(7,` to the `),Xs(8,`code`),BT(9,`<ion-card>`),Ql(),BT(10,` element to make tour step interactable. `),Ql()(),Pm(11,`app-styling-active-tour-anchor`)),t&2){let a=sT();Uw(2),Fm(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`ion-popover/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`ion-popover/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`ion-popover/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`ion-popover/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`ion-popover/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`ion-popover/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`ion-popover/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`ion-popover/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`ion-popover/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`ion-popover/API`,stepDimensions:{maxWidth:`350px`}},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`ion-popover/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`ion-popover/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`ion-popover/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`ion-popover/Misc`}],this.defaultTemplate=W,this.tourService=g(Oe)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(c){return new(c||t)}}static{this.ɵcmp=Eb({type:t,selectors:[[`app-ion-popover`]],decls:7,vars:0,consts:[[`header`,`Ionic`,`package`,`ngx-ui-tour-ionic`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://ionicframework.com/`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-ionic`],[`componentName`,`TourIonPopover`],[3,`isIonicShowArrowVisible`,`isIonicTrapFocusVisible`],[`type`,`IonPopoverPlacement`],[`disablePageScrollingIntroducedIn`,`1.1`],[3,`defaultTemplate`],[`tuiNotification`,``,`appearance`,`warning`,`size`,`m`]],template:function(c,u){c&1&&(Xs(0,`tui-doc-page`,0),xm(1,q,17,0,`ng-template`,1)(2,z,2,0,`ng-template`,1)(3,R,4,2,`ng-template`,1)(4,j,1,0,`ng-template`,1)(5,Q,12,1,`ng-template`,1),Ql(),Pm(6,`tour-step-template`))},dependencies:[cM,F_,ym,ip$1,C4,hi,du,wu,Jo,Mu,zu,Du,Fu,ju,qu,Zu,Gu,BA],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var Pt=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[Gd({route:`ion-popover`,delayAfterNavigation:150}),mZ(C4)]}];export{Pt as default};