import {g as Nl,N as NP,o as o0,j as z5,l as it,U as Um,t as tp,a as t6,i as ip,r as rp,b as xp,y as yp,z as zp,S as Sp,k as kp,V as Vp,L as Lp}from'./chunk-BNdGK7f4.js';import {g,S as Sb,O as OO,L as L_,r as rh,V as Vt,j as js,t as tm,F as Fl,a as am,l as lC,z as zC,p as pm,$ as $f,f as fC,G as Gf,Q as QI,s as sm}from'./main-CZX3WPU4.js';var L=`\`\`\`html
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
`;function Y(t,p){if(t&1){let a=lC();js(0,"p")(1,"code"),zC(2,"ngx-ui-tour"),Fl(),zC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),zC(5,"angular-ui-tour"),Fl(),zC(6,". "),Fl(),js(7,"p")(8,"code"),zC(9,"TourTuiDropdown"),Fl(),zC(10," is an implementation of the tour UI that uses "),js(11,"a",3),zC(12,"Taiga UI"),Fl(),zC(13," Dropdown to display tour steps. "),Fl(),js(14,"p")(15,"button",4),pm("click",function(){$f(a);let l=fC();return Gf(l.start())}),zC(16," Start Demo Tour "),Fl()();}}function q(t,p){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function R(t,p){t&1&&(js(0,"app-step-config"),am(1,"app-placement-config",7),Fl(),am(2,"app-tour-service-api")(3,"app-events"));}function j(t,p){t&1&&am(0,"app-faq",8);}function Q(t,p){if(t&1&&am(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let a=fC();QI(2),sm("defaultTemplate",a.defaultTemplate);}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-dropdown/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-dropdown/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-dropdown/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-dropdown/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"tui-dropdown/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-dropdown/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-dropdown/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"tui-dropdown/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"tui-dropdown/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-dropdown/API",stepDimensions:{maxWidth:"340px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-dropdown/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-dropdown/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-dropdown/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-dropdown/Misc"}],this.defaultTemplate=L,this.tourService=g(o0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}start(){this.tourService.start();}static{this.\u0275fac=function(c){return new(c||t)};}static{this.\u0275cmp=Sb({type:t,selectors:[["app-tui-dropdown"]],decls:7,vars:0,consts:[["header","Taiga UI Dropdown","package","ngx-ui-tour-tui-dropdown"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-tui-dropdown"],["componentName","TourTuiDropdown"],["type","TuiDdPlacement"],["backdropOffsetIntroducedIn","5","disablePageScrollingIntroducedIn","4.1"],[3,"defaultTemplate"]],template:function(c,l){c&1&&(js(0,"tui-doc-page",0),tm(1,Y,17,0,"ng-template",1)(2,q,2,0,"ng-template",1)(3,R,4,0,"ng-template",1)(4,j,1,0,"ng-template",1)(5,Q,5,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[OO,L_,rh,z5,it,Vt,Um,tp,t6,ip,rp,xp,yp,zp,Sp,kp,Vp,Lp],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]});}}return t})();var bt=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[Nl({route:"tui-dropdown",delayAfterNavigation:150,disablePageScrolling:false}),NP(it)]}];
export{bt as default};