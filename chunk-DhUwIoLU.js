import{Fn as ym,Gt as hi,Ji as g,Kn as $m,Na as sp,Ot as cM,Wr as Ql,ai as Uw,cr as Eb,er as BT,gi as Xs,ha as oT,ja as sT,mr as Fm,qa as xm,ta as ip,x as F_,zr as Pm}from"./main-TE5ENKDR.js";import{E as _d,F as ir,I as ju,K as wu,L as mZ,O as de,V as qu,Y as zu,_ as Mu,d as Gu,g as M0,k as du,l as Fu,m as Jo,s as Du,w as Zu,x as Wu}from"./chunk-BnpJt4s4.js";var L=`\`\`\`html
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
`;function Y(t,p){if(t&1){let a=oT();Xs(0,`p`)(1,`code`),BT(2,`ngx-ui-tour`),Ql(),BT(3,` is a UI tour library built for Angular. It's inspired by `),Xs(4,`a`,2),BT(5,`angular-ui-tour`),Ql(),BT(6,`. `),Ql(),Xs(7,`p`)(8,`code`),BT(9,`TourTuiDropdown`),Ql(),BT(10,` is an implementation of the tour UI that uses `),Xs(11,`a`,3),BT(12,`Taiga UI`),Ql(),BT(13,` Dropdown to display tour steps. `),Ql(),Xs(14,`p`)(15,`button`,4),$m(`click`,function(){ip(a);let l=sT();return sp(l.start())}),BT(16,` Start Demo Tour `),Ql()()}}function q(t,p){t&1&&Pm(0,`app-installation`,5)(1,`app-usage`,6)}function R(t,p){t&1&&(Xs(0,`app-step-config`),Pm(1,`app-placement-config`,7),Ql(),Pm(2,`app-tour-service-api`)(3,`app-events`))}function j(t,p){t&1&&Pm(0,`app-faq`,8)}function Q(t,p){if(t&1&&Pm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,9)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let a=sT();Uw(2),Fm(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`tui-dropdown/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`tui-dropdown/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`tui-dropdown/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`tui-dropdown/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`tui-dropdown/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`tui-dropdown/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`tui-dropdown/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`tui-dropdown/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`tui-dropdown/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`tui-dropdown/API`,stepDimensions:{maxWidth:`340px`}},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`tui-dropdown/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`tui-dropdown/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`tui-dropdown/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`tui-dropdown/Misc`}],this.defaultTemplate=L,this.tourService=g(de)}ngOnInit(){this.tourService.initialize(this.tourSteps)}start(){this.tourService.start()}static{this.ɵfac=function(c){return new(c||t)}}static{this.ɵcmp=Eb({type:t,selectors:[[`app-tui-dropdown`]],decls:7,vars:0,consts:[[`header`,`Taiga UI Dropdown`,`package`,`ngx-ui-tour-tui-dropdown`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://taiga-ui.dev`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-tui-dropdown`],[`componentName`,`TourTuiDropdown`],[`type`,`TuiDdPlacement`],[`backdropOffsetIntroducedIn`,`5`,`disablePageScrollingIntroducedIn`,`4.1`],[3,`defaultTemplate`]],template:function(c,l){c&1&&(Xs(0,`tui-doc-page`,0),xm(1,Y,17,0,`ng-template`,1)(2,q,2,0,`ng-template`,1)(3,R,4,0,`ng-template`,1)(4,j,1,0,`ng-template`,1)(5,Q,5,1,`ng-template`,1),Ql(),Pm(6,`tour-step-template`))},dependencies:[cM,F_,ym,ir,M0,hi,du,wu,Jo,Mu,zu,Du,Fu,ju,qu,Zu,Wu,Gu],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var bt=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[_d({route:`tui-dropdown`,delayAfterNavigation:150,disablePageScrolling:!1}),mZ(M0)]}];export{bt as default};