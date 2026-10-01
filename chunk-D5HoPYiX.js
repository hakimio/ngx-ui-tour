import{An as Fm,Cn as Db,Jt as vN,Ki as sp,Pn as Hw,Qr as ea,Ut as tm,Vi as rT,Vr as ap,Wn as Kl,ai as g,di as iT,gn as Am,hi as jT,hr as Um,qn as Lm,wt as ni,zt as s_}from"./main-Y2Y6HDBY.js";import{A as kh,B as xI,C as ch,D as it,E as ih,F as se,L as th,R as v6,U as yh,V as xh,W as zh,_ as Vh,g as Um$1,h as Ua,k as jl,t as Ah,y as _h}from"./chunk-C_lsu-Lx.js";var L=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <div\r
            class="main-container"\r
            [style.width]="step.stepDimensions?.width"\r
            [style.min-width]="step.stepDimensions?.minWidth"\r
            [style.max-width]="step.stepDimensions?.maxWidth"\r
            [class]="step.popoverClass"\r
        >\r
            <div class="title-container">\r
                <h3>{{ step?.title }}</h3>\r
                <button\r
                    tuiIconButton\r
                    iconStart="@tui.x"\r
                    appearance="flat"\r
                    size="m"\r
                    (click)="tourService.end()"\r
                ></button>\r
            </div>\r
            <p\r
                class="content"\r
                [innerHTML]="step?.content"\r
            ></p>\r
            <div\r
                class="buttons"\r
                [class.no-progress]="!step.showProgress"\r
            >\r
                <button\r
                    tuiButton\r
                    type="button"\r
                    iconStart="@tui.chevron-left"\r
                    appearance="flat"\r
                    size="m"\r
                    [disabled]="!tourService.hasPrev(step)"\r
                    (click)="tourService.prev()"\r
                    class="prev"\r
                >\r
                    {{ step?.prevBtnTitle }}\r
                </button>\r
                @if (step.showProgress) {\r
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>\r
                }\r
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r
                    <button\r
                        tuiButton\r
                        type="button"\r
                        iconEnd="@tui.chevron-right"\r
                        appearance="flat"\r
                        size="m"\r
                        (click)="tourService.next()"\r
                        class="next"\r
                    >\r
                        {{ step?.nextBtnTitle }}\r
                    </button>\r
                }\r
                @if (!tourService.hasNext(step)) {\r
                    <button\r
                        tuiButton\r
                        type="button"\r
                        appearance="flat"\r
                        size="m"\r
                        (click)="tourService.end()"\r
                    >\r
                        {{ step?.endBtnTitle }}\r
                    </button>\r
                }\r
            </div>\r
        </div>\r
    </ng-template>\r
</tour-step-template>\r
\`\`\`\r
`;function Y(t,p){if(t&1){let a=rT();ea(0,`p`)(1,`code`),jT(2,`ngx-ui-tour`),Kl(),jT(3,` is a UI tour library built for Angular. It's inspired by `),ea(4,`a`,2),jT(5,`angular-ui-tour`),Kl(),jT(6,`. `),Kl(),ea(7,`p`)(8,`code`),jT(9,`TourTuiDropdown`),Kl(),jT(10,` is an implementation of the tour UI that uses `),ea(11,`a`,3),jT(12,`Taiga UI`),Kl(),jT(13,` Dropdown to display tour steps. `),Kl(),ea(14,`p`)(15,`button`,4),Um(`click`,function(){sp(a);let l=iT();return ap(l.start())}),jT(16,` Start Demo Tour `),Kl()()}}function q(t,p){t&1&&Fm(0,`app-installation`,5)(1,`app-usage`,6)}function R(t,p){t&1&&(ea(0,`app-step-config`),Fm(1,`app-placement-config`,7),Kl(),Fm(2,`app-tour-service-api`)(3,`app-events`))}function j(t,p){t&1&&Fm(0,`app-faq`,8)}function Q(t,p){if(t&1&&Fm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,9)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let a=iT();Hw(2),Lm(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`tui-dropdown/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`tui-dropdown/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`tui-dropdown/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`tui-dropdown/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`tui-dropdown/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`tui-dropdown/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`tui-dropdown/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`tui-dropdown/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`tui-dropdown/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`tui-dropdown/API`,stepDimensions:{maxWidth:`340px`}},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`tui-dropdown/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`tui-dropdown/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`tui-dropdown/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`tui-dropdown/Misc`}],this.defaultTemplate=L,this.tourService=g(it)}ngOnInit(){this.tourService.initialize(this.tourSteps)}start(){this.tourService.start()}static{this.ɵfac=function(c){return new(c||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`app-tui-dropdown`]],decls:7,vars:0,consts:[[`header`,`Taiga UI Dropdown`,`package`,`ngx-ui-tour-tui-dropdown`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://taiga-ui.dev`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-tui-dropdown`],[`componentName`,`TourTuiDropdown`],[`type`,`TuiDdPlacement`],[`backdropOffsetIntroducedIn`,`5`,`disablePageScrollingIntroducedIn`,`4.1`],[3,`defaultTemplate`]],template:function(c,l){c&1&&(ea(0,`tui-doc-page`,0),Am(1,Y,17,0,`ng-template`,1)(2,q,2,0,`ng-template`,1)(3,R,4,0,`ng-template`,1)(4,j,1,0,`ng-template`,1)(5,Q,5,1,`ng-template`,1),Kl(),Fm(6,`tour-step-template`))},dependencies:[vN,s_,tm,Ua,se,ni,Um$1,th,v6,ih,ch,xh,yh,zh,_h,kh,Vh,Ah],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var bt=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[jl({route:`tui-dropdown`,delayAfterNavigation:150,disablePageScrolling:!1}),xI(se)]}];export{bt as default};