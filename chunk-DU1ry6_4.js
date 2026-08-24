import{En as FC,Gi as qs,It as s3,Kn as Kb,Tr as Ul,V as Zt,Wn as Jf,ci as gT,ea as vm,jr as Xf,la as ym,mn as Cm,n as AC,oi as fm,si as g,w as Rh,wi as kC,xn as Dw}from"./main-GZXE4HEJ.js";import{D as hv,E as gv,F as qm,H as x0,M as nt,R as uv,V as wv,c as J3,f as Nm,g as Xm,i as Cv,j as nI,l as Jm,p as Qr,w as f5,x as bv,z as vv}from"./chunk-byzGFu2q.js";var L=`\`\`\`html
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
`;function q(t,c){if(t&1){let a=kC();qs(0,`p`)(1,`code`),gT(2,`ngx-ui-tour`),Ul(),gT(3,` is a UI tour library built for Angular. It's inspired by `),qs(4,`a`,2),gT(5,`angular-ui-tour`),Ul(),gT(6,`. `),Ul(),qs(7,`p`)(8,`code`),gT(9,`TourMatMenu`),Ul(),gT(10,` is an implementation of the tour UI that uses `),qs(11,`a`,3),gT(12,`Angular Material`),Ul(),gT(13,` MatMenu to display tour steps. `),Ul(),qs(14,`p`)(15,`button`,4),Cm(`click`,function(){Xf(a);return Jf(FC().tourService.start())}),gT(16,` Start Demo Tour `),Ul()()}}function R(t,c){t&1&&vm(0,`app-installation`,5)(1,`app-usage`,6)}function j(t,c){t&1&&(qs(0,`app-step-config`,7),vm(1,`app-placement-config`,8),Ul(),vm(2,`app-tour-service-api`)(3,`app-events`)),t&2&&ym(`isCloseOnOutsideClickVisible`,!0)(`isMdMenuShowArrowVisible`,!0)}function z(t,c){t&1&&vm(0,`app-faq`,9)}function Q(t,c){if(t&1&&vm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,10)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let a=FC();Dw(2),ym(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`md-menu/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`md-menu/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`md-menu/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`md-menu/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`md-menu/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`md-menu/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`md-menu/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`md-menu/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`md-menu/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`md-menu/API`},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`md-menu/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`md-menu/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`md-menu/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`md-menu/Misc`}],this.defaultTemplate=L,this.tourService=g(x0)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(m){return new(m||t)}}static{this.ɵcmp=Kb({type:t,selectors:[[`app-md-menu`]],decls:7,vars:0,consts:[[`header`,`Material Design`,`package`,`ngx-ui-tour-md-menu`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://material.angular.dev`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-md-menu`],[`componentName`,`TourMatMenu`],[3,`isCloseOnOutsideClickVisible`,`isMdMenuShowArrowVisible`],[`type`,`MdMenuPlacement`],[`disablePageScrollingIntroducedIn`,`7`,`backdropOffsetIntroducedIn`,`11`],[3,`defaultTemplate`]],template:function(m,l){m&1&&(qs(0,`tui-doc-page`,0),fm(1,q,17,0,`ng-template`,1)(2,R,2,0,`ng-template`,1)(3,j,4,2,`ng-template`,1)(4,z,1,0,`ng-template`,1)(5,Q,5,1,`ng-template`,1),Ul(),vm(6,`tour-step-template`))},dependencies:[s3,AC,Rh,nt,f5,Zt,Nm,qm,J3,Xm,Jm,hv,vv,uv,wv,gv,bv,Cv],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var Ct=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[Qr({route:`md-menu`,delayAfterNavigation:150}),nI(nt)]}];export{Ct as default};