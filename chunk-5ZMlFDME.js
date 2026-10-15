import{Fn as ym,Gt as hi,Ji as g,Kn as $m,Na as sp,Ot as cM,Wr as Ql,ai as Uw,cr as Eb,er as BT,gi as Xs,ha as oT,ja as sT,mr as Fm,qa as xm,ta as ip,x as F_,zr as Pm}from"./main-TE5ENKDR.js";import{A as ed,I as ju,K as wu,L as mZ,V as qu,Y as zu,_ as Mu,d as Gu,h as Js,k as du,l as Fu,m as Jo,q as y0,s as Du,t as Ae,w as Zu,x as Wu}from"./chunk-BnpJt4s4.js";var L=`\`\`\`html
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
`;function q(t,c){if(t&1){let a=oT();Xs(0,`p`)(1,`code`),BT(2,`ngx-ui-tour`),Ql(),BT(3,` is a UI tour library built for Angular. It's inspired by `),Xs(4,`a`,2),BT(5,`angular-ui-tour`),Ql(),BT(6,`. `),Ql(),Xs(7,`p`)(8,`code`),BT(9,`TourMatMenu`),Ql(),BT(10,` is an implementation of the tour UI that uses `),Xs(11,`a`,3),BT(12,`Angular Material`),Ql(),BT(13,` MatMenu to display tour steps. `),Ql(),Xs(14,`p`)(15,`button`,4),$m(`click`,function(){ip(a);let l=sT();return sp(l.tourService.start())}),BT(16,` Start Demo Tour `),Ql()()}}function R(t,c){t&1&&Pm(0,`app-installation`,5)(1,`app-usage`,6)}function j(t,c){t&1&&(Xs(0,`app-step-config`,7),Pm(1,`app-placement-config`,8),Ql(),Pm(2,`app-tour-service-api`)(3,`app-events`)),t&2&&Fm(`isCloseOnOutsideClickVisible`,!0)(`isMdMenuShowArrowVisible`,!0)}function z(t,c){t&1&&Pm(0,`app-faq`,9)}function Q(t,c){if(t&1&&Pm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,10)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let a=sT();Uw(2),Fm(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`md-menu/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`md-menu/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`md-menu/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`md-menu/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`md-menu/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`md-menu/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`md-menu/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`md-menu/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`md-menu/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`md-menu/API`},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`md-menu/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`md-menu/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`md-menu/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`md-menu/Misc`}],this.defaultTemplate=L,this.tourService=g(Ae)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(m){return new(m||t)}}static{this.ɵcmp=Eb({type:t,selectors:[[`app-md-menu`]],decls:7,vars:0,consts:[[`header`,`Material Design`,`package`,`ngx-ui-tour-md-menu`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://material.angular.dev`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-md-menu`],[`componentName`,`TourMatMenu`],[3,`isCloseOnOutsideClickVisible`,`isMdMenuShowArrowVisible`],[`type`,`MdMenuPlacement`],[`disablePageScrollingIntroducedIn`,`7`,`backdropOffsetIntroducedIn`,`11`],[3,`defaultTemplate`]],template:function(m,l){m&1&&(Xs(0,`tui-doc-page`,0),xm(1,q,17,0,`ng-template`,1)(2,R,2,0,`ng-template`,1)(3,j,4,2,`ng-template`,1)(4,z,1,0,`ng-template`,1)(5,Q,5,1,`ng-template`,1),Ql(),Pm(6,`tour-step-template`))},dependencies:[cM,F_,ym,y0,Js,hi,du,wu,Jo,Mu,zu,Du,Fu,ju,qu,Zu,Wu,Gu],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var Ct=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[ed({route:`md-menu`,delayAfterNavigation:150}),mZ(y0)]}];export{Ct as default};