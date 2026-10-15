import{Fn as ym,Gt as hi,Ji as g,Kn as $m,Na as sp,Ot as cM,Wr as Ql,ai as Uw,cr as Eb,er as BT,gi as Xs,ha as oT,ja as sT,mr as Fm,qa as xm,ta as ip,x as F_,zr as Pm}from"./main-TE5ENKDR.js";import{I as ju,K as wu,L as mZ,R as n5,S as Yp,T as _E,V as qu,Y as zu,_ as Mu,d as Gu,f as Ie,k as du,l as Fu,s as Du,w as Zu}from"./chunk-BnpJt4s4.js";var V=`\`\`\`html
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
`;function H(t,a){if(t&1){let p=oT();Xs(0,`p`)(1,`code`),BT(2,`ngx-ui-tour`),Ql(),BT(3,` is a UI tour library built for Angular. It's inspired by `),Xs(4,`a`,2),BT(5,`angular-ui-tour`),Ql(),BT(6,`. `),Ql(),Xs(7,`p`)(8,`code`),BT(9,`TourOptimusUi`),Ql(),BT(10,` is an implementation of the tour UI that uses `),Xs(11,`a`,3),BT(12,`Optimus UI`),Ql(),BT(13,` Popover to display tour steps. `),Ql(),Xs(14,`p`)(15,`button`,4),$m(`click`,function(){ip(p);let m=sT();return sp(m.tourService.start())}),BT(16,` Start Demo Tour `),Ql()()}}function Y(t,a){t&1&&Pm(0,`app-installation`,5)(1,`app-usage`,6)}function q(t,a){t&1&&Pm(0,`app-step-config`,7)(1,`app-tour-service-api`)(2,`app-events`),t&2&&Fm(`isCloseOnOutsideClickVisible`,!0)}function R(t,a){t&1&&Pm(0,`app-faq`,8)}function j(t,a){if(t&1&&Pm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,9)(3,`app-styling-active-tour-anchor`),t&2){let p=sT();Uw(2),Fm(`defaultTemplate`,p.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`optimus-ui/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`optimus-ui/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`optimus-ui/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`optimus-ui/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`optimus-ui/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`optimus-ui/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`optimus-ui/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`optimus-ui/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`optimus-ui/API`,stepDimensions:{maxWidth:`350px`}},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`optimus-ui/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`optimus-ui/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`optimus-ui/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`optimus-ui/Misc`}],this.defaultTemplate=V,this.tourService=g(Ie)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(s){return new(s||t)}}static{this.ɵcmp=Eb({type:t,selectors:[[`app-optimus-ui-popover`]],decls:7,vars:0,consts:[[`header`,`Optimus UI`,`package`,`ngx-ui-tour-optimus-ui`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://optimus.openng.org/`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-optimus-ui`],[`componentName`,`TourOptimusUi`],[3,`isCloseOnOutsideClickVisible`],[`disablePageScrollingIntroducedIn`,`1.0`,`backdropOffsetIntroducedIn`,`1.0`],[3,`defaultTemplate`]],template:function(s,m){s&1&&(Xs(0,`tui-doc-page`,0),xm(1,H,17,0,`ng-template`,1)(2,Y,2,0,`ng-template`,1)(3,q,3,1,`ng-template`,1)(4,R,1,0,`ng-template`,1)(5,j,4,1,`ng-template`,1),Ql(),Pm(6,`tour-step-template`))},dependencies:[cM,F_,ym,_E,n5,hi,du,wu,Mu,zu,Du,Fu,ju,qu,Zu,Gu],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var xt=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[Yp({route:`optimus-ui`,delayAfterNavigation:150}),mZ(n5)]}];export{xt as default};