import{An as Fm,Cn as Db,Jt as vN,Ki as sp,Pn as Hw,Qr as ea,Ut as tm,Vi as rT,Vr as ap,Wn as Kl,ai as g,di as iT,gn as Am,hi as jT,hr as Um,qn as Lm,wt as ni,zt as s_}from"./main-Y2Y6HDBY.js";import{A as kh,B as xI,C as ch,E as ih,L as th,R as v6,U as yh,V as xh,W as zh,_ as Vh,g as Um$1,i as Fd,j as kt,m as UL,s as Ms,t as Ah,y as _h}from"./chunk-C_lsu-Lx.js";var U=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <div class="main-container">\r
            @if (step?.title) {\r
                <div class="title-container">\r
                    <h2>{{ step?.title }}</h2>\r
                    <button\r
                        type="button"\r
                        class="close"\r
                        aria-label="Close"\r
                        (click)="tourService.end()"\r
                    >\r
                    <span\r
                        aria-hidden="true"\r
                        class="close-icon"\r
                    >\r
                        <nz-icon\r
                            nzType="close"\r
                            nzTheme="outline"\r
                        />\r
                    </span>\r
                    </button>\r
                </div>\r
            }\r
            <p\r
                class="card-text"\r
                [innerHTML]="step?.content"\r
            ></p>\r
\r
            <div\r
                class="buttons"\r
                [class.no-progress]="!step.showProgress"\r
            >\r
                <button\r
                    nz-button\r
                    type="button"\r
                    class="prev"\r
                    [disabled]="!tourService.hasPrev(step)"\r
                    (click)="tourService.prev()"\r
                >\r
                    <nz-icon nzType="left" />\r
                    {{ step?.prevBtnTitle }}\r
                </button>\r
                @if (step.showProgress) {\r
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>\r
                }\r
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {\r
                    <button\r
                        nz-button\r
                        type="button"\r
                        nzType="primary"\r
                        class="next"\r
                        (click)="tourService.next()"\r
                    >\r
                        {{ step?.nextBtnTitle }}\r
                        <nz-icon nzType="right" />\r
                    </button>\r
                }\r
                @if (!tourService.hasNext(step)) {\r
                    <button\r
                        nz-button\r
                        type="button"\r
                        nzType="primary"\r
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
`;function H(t,p){if(t&1){let r=rT();ea(0,`p`)(1,`code`),jT(2,`ngx-ui-tour`),Kl(),jT(3,` is a UI tour library built for Angular. It's inspired by `),ea(4,`a`,2),jT(5,`angular-ui-tour`),Kl(),jT(6,`. `),Kl(),ea(7,`p`)(8,`code`),jT(9,`TourNgZorro`),Kl(),jT(10,` is an implementation of the tour UI that uses `),ea(11,`a`,3),jT(12,`NG ZORRO`),Kl(),jT(13,` popover to display tour steps. `),Kl(),ea(14,`button`,4),Um(`click`,function(){sp(r);let g=iT();return ap(g.tourService.start())}),jT(15,` Start Demo Tour `),Kl()}}function G(t,p){t&1&&Fm(0,`app-installation`,5)(1,`app-usage`,6)}function W(t,p){if(t&1&&(ea(0,`app-step-config`,7),Fm(1,`app-placement-config`,8),Kl(),Fm(2,`app-tour-service-api`)(3,`app-events`)),t&2){let r=iT();Lm(`isCloseOnOutsideClickVisible`,!0),Hw(),Lm(`values`,r.placementValues)}}function Y(t,p){t&1&&Fm(0,`app-faq`,9)}function q(t,p){if(t&1&&Fm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,10)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let r=iT();Hw(2),Lm(`defaultTemplate`,r.defaultTemplate)}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`ng-zorro/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`ng-zorro/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`ng-zorro/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`ng-zorro/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`ng-zorro/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`ng-zorro/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`ng-zorro/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`ng-zorro/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`ng-zorro/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`ng-zorro/API`},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`ng-zorro/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`ng-zorro/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`ng-zorro/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`ng-zorro/Misc`}],this.placementValues=[`top`,`left`,`right`,`bottom`,`topLeft`,`topRight`,`bottomLeft`,`bottomRight`,`leftTop`,`leftBottom`,`rightTop`,`rightBottom`],this.defaultTemplate=U,this.tourService=g(kt)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(c){return new(c||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`app-ng-zorro`]],decls:7,vars:0,consts:[[`header`,`NG ZORRO`,`package`,`ngx-ui-tour-ng-zorro`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://ng.ant.design`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-ng-zorro`],[`componentName`,`TourNgZorro`],[3,`isCloseOnOutsideClickVisible`],[`value`,`bottomLeft`,`extraInfo`,`Accepts NG ZORRO <a href='https://ng.ant.design/components/popover/en#nz-popover' target='_blank'>popover</a> placement options.`,3,`values`],[`disablePageScrollingIntroducedIn`,`1.0`,`backdropOffsetIntroducedIn`,`1.0`],[3,`defaultTemplate`]],template:function(c,g){c&1&&(ea(0,`tui-doc-page`,0),Am(1,H,16,0,`ng-template`,1)(2,G,2,0,`ng-template`,1)(3,W,4,2,`ng-template`,1)(4,Y,1,0,`ng-template`,1)(5,q,5,1,`ng-template`,1),Kl(),Fm(6,`tour-step-template`))},dependencies:[tm,UL,Ms,ni,Um$1,th,v6,ih,ch,xh,yh,zh,_h,kh,Vh,Ah,vN,s_],encapsulation:2})}}return t})();var Ct=[{path:``,component:a,children:[{path:`Setup`,component:a},{path:`API`,component:a},{path:`FAQ`,component:a},{path:`Misc`,component:a}],providers:[Fd({route:`ng-zorro`,delayAfterNavigation:150}),xI(Ms)]}];export{Ct as default};