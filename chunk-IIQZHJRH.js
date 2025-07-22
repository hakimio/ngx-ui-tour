import{H as P,I as H,J as D,K as M,L as B,M as N,N as w,O,P as U,Q as z,R as L,S as W,T as F,v as A,w as k,x as s,y as E}from"./chunk-FJUOV7OL.js";import{$c as R,Ja as m,Ka as e,La as i,Ma as r,O as c,Q as d,R as g,Ta as T,Va as x,Xa as u,Yb as y,Zb as b,_b as I,ja as p,jb as t,qb as S,rc as C,sa as f,sc as _,xa as v}from"./chunk-F6GYVGO2.js";import"./chunk-KUKPXLXG.js";import"./chunk-7TOYBQTK.js";import"./chunk-ET3ZWXOJ.js";import"./chunk-MCMHWS7T.js";import"./chunk-XLASQAO6.js";import"./chunk-XQSDAB24.js";import"./chunk-M2X7KQLB.js";import"./chunk-2YSZFPCQ.js";import"./chunk-57YRIO75.js";import"./chunk-D7G6EMIG.js";import"./chunk-C5RQ2IC2.js";import"./chunk-42C7ZIID.js";import"./chunk-B4AJQJMI.js";var V=`\`\`\`html\r
<tour-step-template>\r
    <ng-template let-step="step">\r
        <div\r
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
`;function q(n,a){if(n&1){let o=T();e(0,"p")(1,"code"),t(2,"ngx-ui-tour"),i(),t(3," is a UI tour library built for Angular. It's inspired by "),e(4,"a",2),t(5,"angular-ui-tour"),i(),t(6,". "),i(),e(7,"p")(8,"code"),t(9,"TourTuiHintModule"),i(),t(10," is an implementation of the tour UI that uses "),e(11,"a",3),t(12,"Taiga UI"),i(),t(13," Hint to display tour steps. "),i(),e(14,"p")(15,"button",4),x("click",function(){d(o);let h=u();return g(h.start())}),t(16," Start Demo Tour "),i()()}}function j(n,a){n&1&&(e(0,"app-header",5),t(1,"Installation"),i(),e(2,"ol")(3,"li")(4,"code"),t(5,"npm install ngx-ui-tour-tui-hint @taiga-ui/core @taiga-ui/cdk @taiga-ui/icons"),i()(),e(6,"li"),t(7," Import "),e(8,"code"),t(9,"TourTuiHintModule"),i(),t(10," into your app module "),e(11,"tui-notification",6),t(12," If you are using "),e(13,"code"),t(14,"v3"),i(),t(15," or older, you have to import "),e(16,"code"),t(17,"TourTuiHintModule.forRoot()"),i()()(),e(18,"li"),t(19," Make sure "),e(20,"code"),t(21,"RouterModule"),i(),t(22," is imported in your app module "),i(),e(23,"li"),t(24," Make sure Taiga UI is "),e(25,"a",7),t(26,"installed correctly"),i()()(),r(27,"app-usage",8))}function G(n,a){if(n&1&&(e(0,"app-step-config"),r(1,"app-placement-config",9),i(),r(2,"app-tour-service-api")(3,"app-events")),n&2){let o=u();p(),m("values",o.hintPlacements)}}function J(n,a){n&1&&r(0,"app-faq",10)}function K(n,a){if(n&1&&r(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",11)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),n&2){let o=u();p(2),m("defaultTemplate",o.defaultTemplate)}}var bt=(()=>{class n{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-hint/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-hint/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-hint/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-hint/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"tui-hint/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-hint/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-hint/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"tui-hint/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"tui-hint/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-hint/API",stepDimensions:{maxWidth:"340px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-hint/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-hint/API",nextOnAnchorClick:!0},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-hint/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-hint/Misc"}],this.defaultTemplate=V,this.hintPlacements=["top-left","top","top-right","bottom-left","bottom","bottom-right","left-top","left","left-bottom","right-top","right","right-bottom"],this.tourService=c(A),this.delayAfterNavigation=c(R)}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"tui-hint",delayAfterNavigation:this.delayAfterNavigation})}start(){this.tourService.start()}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-tui-hint"]],features:[S([F(s)])],decls:7,vars:0,consts:[["header","Taiga UI Hint","package","ngx-ui-tour-tui-hint"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["size","m",1,"tui-space_top-3"],["tuiLink","","href","https://taiga-ui.dev/getting-started","target","_blank"],["moduleName","TourTuiHintModule"],["value","bottom-right","extraInfo","Accepts <a href='https://taiga-ui.dev/directives/hint-manual/API'>HintManual</a> direction options.",3,"values"],["disablePageScrollingIntroducedIn","4.1"],[3,"defaultTemplate"]],template:function(l,h){l&1&&(e(0,"tui-doc-page",0),v(1,q,17,0,"ng-template",1)(2,j,28,0,"ng-template",1)(3,G,4,1,"ng-template",1)(4,J,1,0,"ng-template",1)(5,K,5,1,"ng-template",1),i(),r(6,"tour-step-template"))},dependencies:[_,C,b,E,k,s,y,I,P,H,M,D,B,N,w,O,U,L,z,W],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0})}}return n})();export{bt as default};
