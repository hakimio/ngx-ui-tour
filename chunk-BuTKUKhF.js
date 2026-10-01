import{An as Fm,Cn as Db,Jt as vN,Ki as sp,Pn as Hw,Qr as ea,Ut as tm,Vi as rT,Vr as ap,Wn as Kl,ai as g,di as iT,gn as Am,hi as jT,hr as Um,qn as Lm,wt as ni,zt as s_}from"./main-Y2Y6HDBY.js";import{A as kh,B as xI,C as ch,E as ih,L as th,R as v6,T as gl,U as yh,V as xh,W as zh,_ as Vh,b as ae,c as Mt,g as Um$1,p as Ra,t as Ah,y as _h}from"./chunk-C_lsu-Lx.js";var L=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <mat-card\r
            (click)="$event.stopPropagation()"\r
            [style.width]="step.stepDimensions?.width"\r
            [style.min-width]="step.stepDimensions?.minWidth"\r
            [style.max-width]="step.stepDimensions?.maxWidth"\r
        >\r
            <mat-card-header>\r
                <div class="header-group">\r
                    <mat-card-title>\r
                        {{ step.title }}\r
                    </mat-card-title>\r
                    <button\r
                        mat-icon-button\r
                        (click)="tourService.end()"\r
                        class="close"\r
                    >\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                </div>\r
            </mat-card-header>\r
\r
            <mat-card-content\r
                class="mat-body"\r
                [innerHTML]="step.content"\r
            ></mat-card-content>\r
\r
            <mat-card-actions\r
                [class.no-progress]="!step.showProgress"\r
            >\r
                <button\r
                    mat-button\r
                    class="prev"\r
                    [disabled]="!tourService.hasPrev(step)"\r
                    (click)="tourService.prev()"\r
                >\r
                    <mat-icon>chevron_left</mat-icon>\r
                    {{ step.prevBtnTitle }}\r
                </button>\r
                @if (step.showProgress) {\r
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>\r
                }\r
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r
                    <button\r
                        class="next"\r
                        (click)="tourService.next()"\r
                        mat-button\r
                    >\r
                        {{ step.nextBtnTitle }}\r
                        <mat-icon iconPositionEnd>chevron_right</mat-icon>\r
                    </button>\r
                }\r
                @if (!tourService.hasNext(step)) {\r
                    <button\r
                        mat-button\r
                        (click)="tourService.end()"\r
                    >\r
                        {{ step.endBtnTitle }}\r
                    </button>\r
                }\r
            </mat-card-actions>\r
        </mat-card>\r
    </ng-template>\r
</tour-step-template>\r
\`\`\`\r
`;function q(t,c){if(t&1){let a=rT();ea(0,`p`)(1,`code`),jT(2,`ngx-ui-tour`),Kl(),jT(3,` is a UI tour library built for Angular. It's inspired by `),ea(4,`a`,2),jT(5,`angular-ui-tour`),Kl(),jT(6,`. `),Kl(),ea(7,`p`)(8,`code`),jT(9,`TourMatMenu`),Kl(),jT(10,` is an implementation of the tour UI that uses `),ea(11,`a`,3),jT(12,`Angular Material`),Kl(),jT(13,` MatMenu to display tour steps. `),Kl(),ea(14,`p`)(15,`button`,4),Um(`click`,function(){sp(a);let l=iT();return ap(l.tourService.start())}),jT(16,` Start Demo Tour `),Kl()()}}function R(t,c){t&1&&Fm(0,`app-installation`,5)(1,`app-usage`,6)}function j(t,c){t&1&&(ea(0,`app-step-config`,7),Fm(1,`app-placement-config`,8),Kl(),Fm(2,`app-tour-service-api`)(3,`app-events`)),t&2&&Lm(`isCloseOnOutsideClickVisible`,!0)(`isMdMenuShowArrowVisible`,!0)}function z(t,c){t&1&&Fm(0,`app-faq`,9)}function Q(t,c){if(t&1&&Fm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,10)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let a=iT();Hw(2),Lm(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`md-menu/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`md-menu/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`md-menu/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`md-menu/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`md-menu/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`md-menu/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`md-menu/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`md-menu/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`md-menu/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`md-menu/API`},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`md-menu/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`md-menu/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`md-menu/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`md-menu/Misc`}],this.defaultTemplate=L,this.tourService=g(Mt)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(m){return new(m||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`app-md-menu`]],decls:7,vars:0,consts:[[`header`,`Material Design`,`package`,`ngx-ui-tour-md-menu`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://material.angular.dev`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-md-menu`],[`componentName`,`TourMatMenu`],[3,`isCloseOnOutsideClickVisible`,`isMdMenuShowArrowVisible`],[`type`,`MdMenuPlacement`],[`disablePageScrollingIntroducedIn`,`7`,`backdropOffsetIntroducedIn`,`11`],[3,`defaultTemplate`]],template:function(m,l){m&1&&(ea(0,`tui-doc-page`,0),Am(1,q,17,0,`ng-template`,1)(2,R,2,0,`ng-template`,1)(3,j,4,2,`ng-template`,1)(4,z,1,0,`ng-template`,1)(5,Q,5,1,`ng-template`,1),Kl(),Fm(6,`tour-step-template`))},dependencies:[vN,s_,tm,ae,Ra,ni,Um$1,th,v6,ih,ch,xh,yh,zh,_h,kh,Vh,Ah],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var Ct=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[gl({route:`md-menu`,delayAfterNavigation:150}),xI(ae)]}];export{Ct as default};