import{An as Fm,Cn as Db,Jt as vN,Ki as sp,Pn as Hw,Qr as ea,Ut as tm,Vi as rT,Vr as ap,Wn as Kl,ai as g,di as iT,gn as Am,hi as jT,hr as Um,qn as Lm,wt as ni,zt as s_}from"./main-Y2Y6HDBY.js";import{A as kh,B as xI,C as ch,E as ih,G as zt,L as th,S as b9,U as yh,V as xh,W as zh,g as Um$1,r as EV,t as Ah,w as e5,y as _h}from"./chunk-C_lsu-Lx.js";var V=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <div\r
            [style.width]="step.stepDimensions?.width"\r
            [style.min-width]="step.stepDimensions?.minWidth"\r
            [style.max-width]="step.stepDimensions?.maxWidth"\r
            class="main-container"\r
        >\r
            <div class="title-container">\r
                <div class="title">{{ step?.title }}</div>\r
                <p-button\r
                    severity="secondary"\r
                    icon="pi pi-times"\r
                    ariaLabel="Close"\r
                    variant="text"\r
                    [rounded]="true"\r
                    (click)="tourService.end()"\r
                />\r
            </div>\r
\r
            <p\r
                class="card-text"\r
                [innerHTML]="step.content"\r
            ></p>\r
\r
            <div\r
                class="buttons"\r
                [class.no-progress]="!step.showProgress"\r
            >\r
                <p-button\r
                    [disabled]="!tourService.hasPrev(step)"\r
                    icon="pi pi-angle-left"\r
                    iconPos="left"\r
                    severity="secondary"\r
                    [label]="step.prevBtnTitle"\r
                    (click)="tourService.prev()"\r
                />\r
                @if (step.showProgress) {\r
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>\r
                }\r
\r
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r
                    <p-button\r
                        icon="pi pi-angle-right"\r
                        iconPos="right"\r
                        [label]="step.nextBtnTitle"\r
                        (click)="tourService.next()"\r
                    />\r
                }\r
                @if (!tourService.hasNext(step)) {\r
                    <p-button\r
                        [label]="step.endBtnTitle"\r
                        (click)="tourService.end()"\r
                    />\r
                }\r
            </div>\r
        </div>\r
    </ng-template>\r
</tour-step-template>\r
\`\`\`\r
`;function H(t,p){if(t&1){let a=rT();ea(0,`p`)(1,`code`),jT(2,`ngx-ui-tour`),Kl(),jT(3,` is a UI tour library built for Angular. It's inspired by `),ea(4,`a`,2),jT(5,`angular-ui-tour`),Kl(),jT(6,`. `),Kl(),ea(7,`p`)(8,`code`),jT(9,`TourPrimeNg`),Kl(),jT(10,` is an implementation of the tour UI that uses `),ea(11,`a`,3),jT(12,`PrimeNG`),Kl(),jT(13,` Popover to display tour steps. `),Kl(),ea(14,`p`)(15,`button`,4),Um(`click`,function(){sp(a);let u=iT();return ap(u.tourService.start())}),jT(16,` Start Demo Tour `),Kl()()}}function Y(t,p){t&1&&Fm(0,`app-installation`,5)(1,`app-usage`,6)}function q(t,p){t&1&&Fm(0,`app-step-config`,7)(1,`app-tour-service-api`)(2,`app-events`),t&2&&Lm(`isCloseOnOutsideClickVisible`,!0)}function G(t,p){t&1&&Fm(0,`app-faq`,8)}function R(t,p){if(t&1&&Fm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,9)(3,`app-styling-active-tour-anchor`),t&2){let a=iT();Hw(2),Lm(`defaultTemplate`,a.defaultTemplate)}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`prime-ng/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`prime-ng/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`prime-ng/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`prime-ng/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`prime-ng/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`prime-ng/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`prime-ng/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`prime-ng/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`prime-ng/API`,stepDimensions:{maxWidth:`350px`}},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`prime-ng/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`prime-ng/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`prime-ng/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`prime-ng/Misc`}],this.defaultTemplate=V,this.tourService=g(zt)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(s){return new(s||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`app-prime-ng-popover`]],decls:7,vars:0,consts:[[`header`,`PrimeNG`,`package`,`ngx-ui-tour-primeng`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://primeng.org`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-primeng`],[`componentName`,`TourPrimeNg`],[3,`isCloseOnOutsideClickVisible`],[`disablePageScrollingIntroducedIn`,`1.0`,`backdropOffsetIntroducedIn`,`1.0`],[3,`defaultTemplate`]],template:function(s,u){s&1&&(ea(0,`tui-doc-page`,0),Am(1,H,17,0,`ng-template`,1)(2,Y,2,0,`ng-template`,1)(3,q,3,1,`ng-template`,1)(4,G,1,0,`ng-template`,1)(5,R,4,1,`ng-template`,1),Kl(),Fm(6,`tour-step-template`))},dependencies:[vN,s_,tm,EV,e5,ni,Um$1,th,ih,ch,xh,yh,zh,_h,kh,Ah],styles:[`app-header[_ngcontent-%COMP%]{margin-top:0}`]})}}return t})();var Pt=[{path:``,component:r,children:[{path:`Setup`,component:r},{path:`API`,component:r},{path:`FAQ`,component:r},{path:`Misc`,component:r}],providers:[b9({route:`prime-ng`,delayAfterNavigation:150}),xI(e5)]}];export{Pt as default};