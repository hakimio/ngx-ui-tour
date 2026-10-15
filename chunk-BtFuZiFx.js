import{Fn as ym,Gt as hi,Ji as g,Kn as $m,Na as sp,Ot as cM,Wr as Ql,ai as Uw,cr as Eb,er as BT,gi as Xs,ha as oT,ja as sT,mr as Fm,qa as xm,ta as ip,x as F_,zr as Pm}from"./main-TE5ENKDR.js";import{H as rr,I as ju,K as wu,L as mZ,V as qu,Y as zu,_ as Mu,b as Pd,d as Gu,k as du,l as Fu,m as Jo,r as C0,s as Du,w as Zu,x as Wu,z as pe}from"./chunk-BnpJt4s4.js";var L=`\`\`\`html
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
`;function Y(t,p){if(t&1){let o=oT();Xs(0,`p`)(1,`code`),BT(2,`ngx-ui-tour`),Ql(),BT(3,` is a UI tour library built for Angular. It's inspired by `),Xs(4,`a`,2),BT(5,`angular-ui-tour`),Ql(),BT(6,`. `),Ql(),Xs(7,`p`)(8,`code`),BT(9,`TourTuiHint`),Ql(),BT(10,` is an implementation of the tour UI that uses `),Xs(11,`a`,3),BT(12,`Taiga UI`),Ql(),BT(13,` Hint to display tour steps. `),Ql(),Xs(14,`p`)(15,`button`,4),$m(`click`,function(){ip(o);let h=sT();return sp(h.start())}),BT(16,` Start Demo Tour `),Ql()()}}function q(t,p){t&1&&Pm(0,`app-installation`,5)(1,`app-usage`,6)}function R(t,p){if(t&1&&(Xs(0,`app-step-config`),Pm(1,`app-placement-config`,7),Ql(),Pm(2,`app-tour-service-api`)(3,`app-events`)),t&2){let o=sT();Uw(),Fm(`values`,o.hintPlacements)}}function j(t,p){t&1&&Pm(0,`app-faq`,8)}function Q(t,p){if(t&1&&Pm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,9)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let o=sT();Uw(2),Fm(`defaultTemplate`,o.defaultTemplate)}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`tui-hint/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`tui-hint/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`tui-hint/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`tui-hint/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`tui-hint/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`tui-hint/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`tui-hint/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`tui-hint/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`tui-hint/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`tui-hint/API`,stepDimensions:{maxWidth:`340px`}},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`tui-hint/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`tui-hint/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`tui-hint/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`tui-hint/Misc`}],this.defaultTemplate=L,this.hintPlacements=[`bottom-end`,`bottom-start`,`bottom`,`end-bottom`,`end-top`,`end`,`start-bottom`,`start-top`,`start`,`top-end`,`top-start`,`top`],this.tourService=g(pe)}ngOnInit(){this.tourService.initialize(this.tourSteps)}start(){this.tourService.start()}static{this.ɵfac=function(s){return new(s||t)}}static{this.ɵcmp=Eb({type:t,selectors:[[`app-tui-hint`]],decls:7,vars:0,consts:[[`header`,`Taiga UI Hint`,`package`,`ngx-ui-tour-tui-hint`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://taiga-ui.dev`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-tui-hint`],[`componentName`,`TourTuiHint`],[`value`,`bottom-end`,`extraInfo`,`Accepts <a href='https://taiga-ui.dev/directives/hint-manual/API'>HintManual</a> direction options.`,3,`values`],[`disablePageScrollingIntroducedIn`,`4.1`],[3,`defaultTemplate`]],template:function(s,h){s&1&&(Xs(0,`tui-doc-page`,0),xm(1,Y,17,0,`ng-template`,1)(2,q,2,0,`ng-template`,1)(3,R,4,1,`ng-template`,1)(4,j,1,0,`ng-template`,1)(5,Q,5,1,`ng-template`,1),Ql(),Pm(6,`tour-step-template`))},dependencies:[cM,F_,ym,rr,C0,hi,du,wu,Jo,Mu,zu,Du,Fu,ju,qu,Zu,Wu,Gu],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var It=[{path:``,component:a,children:[{path:`Setup`,component:a},{path:`API`,component:a},{path:`FAQ`,component:a},{path:`Misc`,component:a}],providers:[Pd({route:`tui-hint`,delayAfterNavigation:150}),mZ(C0)]}];export{It as default};