import{En as FC,Gi as qs,It as s3,Kn as Kb,Tr as Ul,V as Zt,Wn as Jf,Zt as xk,ci as gT,ea as vm,jr as Xf,la as ym,mn as Cm,n as AC,oi as fm,si as g,w as Rh,wi as kC,xn as Dw}from"./main-GZXE4HEJ.js";import{D as hv,E as gv,F as qm,I as r9,L as t9,R as uv,V as wv,_ as Xt,c as J3,f as Nm,g as Xm,i as Cv,j as nI,l as Jm,u as M0,z as vv}from"./chunk-byzGFu2q.js";var W=`\`\`\`html
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
`;function q(t,p){if(t&1){let a=kC();qs(0,`p`)(1,`code`),gT(2,`ngx-ui-tour`),Ul(),gT(3,` is a UI tour library built for Angular. It's inspired by `),qs(4,`a`,2),gT(5,`angular-ui-tour`),Ul(),gT(6,`. `),Ul(),qs(7,`p`)(8,`code`),gT(9,`TourIonPopover`),Ul(),gT(10,` is an implementation of the tour UI that uses `),qs(11,`a`,3),gT(12,`Ionic`),Ul(),gT(13,` Popover to display tour steps. `),Ul(),qs(14,`p`)(15,`button`,4),Cm(`click`,function(){Xf(a);return Jf(FC().tourService.start())}),gT(16,` Start Demo Tour `),Ul()()}}function z(t,p){t&1&&vm(0,`app-installation`,5)(1,`app-usage`,6)}function R(t,p){t&1&&(qs(0,`app-step-config`,7),vm(1,`app-placement-config`,8),Ul(),vm(2,`app-tour-service-api`)(3,`app-events`)),t&2&&ym(`isIonicShowArrowVisible`,!0)(`isIonicTrapFocusVisible`,!0)}function j(t,p){t&1&&vm(0,`app-faq`,9)}function Q(t,p){if(t&1&&(vm(0,`app-hotkeys`)(1,`app-defaults`),qs(2,`app-custom-template`,10)(3,`div`,11),gT(4,` It might be necessary to set `),qs(5,`code`),gT(6,`pointer-events: auto`),Ul(),gT(7,` to the `),qs(8,`code`),gT(9,`<ion-card>`),Ul(),gT(10,` element to make tour step interactable. `),Ul()(),vm(11,`app-styling-active-tour-anchor`)),t&2){let a=FC();Dw(2),ym(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`ion-popover/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`ion-popover/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`ion-popover/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`ion-popover/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`ion-popover/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`ion-popover/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`ion-popover/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`ion-popover/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`ion-popover/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`ion-popover/API`,stepDimensions:{maxWidth:`350px`}},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`ion-popover/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`ion-popover/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`ion-popover/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`ion-popover/Misc`}],this.defaultTemplate=W,this.tourService=g(M0)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(c){return new(c||t)}}static{this.ɵcmp=Kb({type:t,selectors:[[`app-ion-popover`]],decls:7,vars:0,consts:[[`header`,`Ionic`,`package`,`ngx-ui-tour-ionic`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://ionicframework.com/`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-ionic`],[`componentName`,`TourIonPopover`],[3,`isIonicShowArrowVisible`,`isIonicTrapFocusVisible`],[`type`,`IonPopoverPlacement`],[`disablePageScrollingIntroducedIn`,`1.1`],[3,`defaultTemplate`],[`tuiNotification`,``,`appearance`,`warning`,`size`,`m`]],template:function(c,u){c&1&&(qs(0,`tui-doc-page`,0),fm(1,q,17,0,`ng-template`,1)(2,z,2,0,`ng-template`,1)(3,R,4,2,`ng-template`,1)(4,j,1,0,`ng-template`,1)(5,Q,12,1,`ng-template`,1),Ul(),vm(6,`tour-step-template`))},dependencies:[s3,AC,Rh,r9,Xt,Zt,Nm,qm,J3,Xm,Jm,hv,vv,uv,wv,gv,Cv,xk],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var Pt=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[t9({route:`ion-popover`,delayAfterNavigation:150}),nI(Xt)]}];export{Pt as default};