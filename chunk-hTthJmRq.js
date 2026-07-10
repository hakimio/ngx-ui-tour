import {Q as Ql,P as PP,j as n0,m as _5,s as st,q as qm,J as Jm,t as t6,n as np,c as cp,w as wp,M as Mp,C as Cp,_ as _p,z as zp,H as Hp,B as Bp}from'./chunk-LgbYhl1j.js';import {g,O as Ob,$ as $O,N as N_,a as ah,V as Vt,j as js,t as tm,F as Fl,b as am,m as mC,K as KC,p as pm,c as $f,v as vC,G as Gf,d as tw,s as sm}from'./main-NT3E7YAB.js';var L=`\`\`\`html
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
`;function Y(t,p){if(t&1){let o=mC();js(0,"p")(1,"code"),KC(2,"ngx-ui-tour"),Fl(),KC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),KC(5,"angular-ui-tour"),Fl(),KC(6,". "),Fl(),js(7,"p")(8,"code"),KC(9,"TourTuiHint"),Fl(),KC(10," is an implementation of the tour UI that uses "),js(11,"a",3),KC(12,"Taiga UI"),Fl(),KC(13," Hint to display tour steps. "),Fl(),js(14,"p")(15,"button",4),pm("click",function(){$f(o);let h=vC();return Gf(h.start())}),KC(16," Start Demo Tour "),Fl()();}}function q(t,p){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function R(t,p){if(t&1&&(js(0,"app-step-config"),am(1,"app-placement-config",7),Fl(),am(2,"app-tour-service-api")(3,"app-events")),t&2){let o=vC();tw(),sm("values",o.hintPlacements);}}function j(t,p){t&1&&am(0,"app-faq",8);}function Q(t,p){if(t&1&&am(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let o=vC();tw(2),sm("defaultTemplate",o.defaultTemplate);}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"tui-hint/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"tui-hint/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"tui-hint/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"tui-hint/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"tui-hint/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"tui-hint/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"tui-hint/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"tui-hint/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"tui-hint/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"tui-hint/API",stepDimensions:{maxWidth:"340px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"tui-hint/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"tui-hint/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"tui-hint/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"tui-hint/Misc"}],this.defaultTemplate=L,this.hintPlacements=["bottom-end","bottom-start","bottom","end-bottom","end-top","end","start-bottom","start-top","start","top-end","top-start","top"],this.tourService=g(n0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}start(){this.tourService.start();}static{this.\u0275fac=function(s){return new(s||t)};}static{this.\u0275cmp=Ob({type:t,selectors:[["app-tui-hint"]],decls:7,vars:0,consts:[["header","Taiga UI Hint","package","ngx-ui-tour-tui-hint"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://taiga-ui.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-tui-hint"],["componentName","TourTuiHint"],["value","bottom-end","extraInfo","Accepts <a href='https://taiga-ui.dev/directives/hint-manual/API'>HintManual</a> direction options.",3,"values"],["disablePageScrollingIntroducedIn","4.1"],[3,"defaultTemplate"]],template:function(s,h){s&1&&(js(0,"tui-doc-page",0),tm(1,Y,17,0,"ng-template",1)(2,q,2,0,"ng-template",1)(3,R,4,1,"ng-template",1)(4,j,1,0,"ng-template",1)(5,Q,5,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[$O,N_,ah,_5,st,Vt,qm,Jm,t6,np,cp,wp,Mp,Cp,_p,zp,Hp,Bp],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]});}}return t})();var It=[{path:"",component:a,children:[{path:"Setup",component:a},{path:"API",component:a},{path:"FAQ",component:a},{path:"Misc",component:a}],providers:[Ql({route:"tui-hint",delayAfterNavigation:150}),PP(st)]}];
export{It as default};