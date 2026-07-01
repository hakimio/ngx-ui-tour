import {E as Cd,N as NP,G as k0,H as pE,Q as Qa,U as Um,t as tp,a as t6,i as ip,r as rp,b as xp,y as yp,z as zp,S as Sp,k as kp,V as Vp,L as Lp}from'./chunk-BNdGK7f4.js';import {g,S as Sb,r as rh,V as Vt,O as OO,L as L_,j as js,t as tm,F as Fl,a as am,l as lC,z as zC,p as pm,$ as $f,f as fC,G as Gf,s as sm,Q as QI}from'./main-CZX3WPU4.js';var U=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <div class="main-container">
            @if (step?.title) {
                <div class="title-container">
                    <h2>{{ step?.title }}</h2>
                    <button
                        type="button"
                        class="close"
                        aria-label="Close"
                        (click)="tourService.end()"
                    >
                    <span
                        aria-hidden="true"
                        class="close-icon"
                    >
                        <nz-icon
                            nzType="close"
                            nzTheme="outline"
                        />
                    </span>
                    </button>
                </div>
            }
            <p
                class="card-text"
                [innerHTML]="step?.content"
            ></p>

            <div
                class="buttons"
                [class.no-progress]="!step.showProgress"
            >
                <button
                    nz-button
                    type="button"
                    class="prev"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                >
                    <nz-icon nzType="left" />
                    {{ step?.prevBtnTitle }}
                </button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <button
                        nz-button
                        type="button"
                        nzType="primary"
                        class="next"
                        (click)="tourService.next()"
                    >
                        {{ step?.nextBtnTitle }}
                        <nz-icon nzType="right" />
                    </button>
                }
                @if (!tourService.hasNext(step)) {
                    <button
                        nz-button
                        type="button"
                        nzType="primary"
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
`;function H(t,p){if(t&1){let r=lC();js(0,"p")(1,"code"),zC(2,"ngx-ui-tour"),Fl(),zC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),zC(5,"angular-ui-tour"),Fl(),zC(6,". "),Fl(),js(7,"p")(8,"code"),zC(9,"TourNgZorro"),Fl(),zC(10," is an implementation of the tour UI that uses "),js(11,"a",3),zC(12,"NG ZORRO"),Fl(),zC(13," popover to display tour steps. "),Fl(),js(14,"button",4),pm("click",function(){$f(r);let g=fC();return Gf(g.tourService.start())}),zC(15," Start Demo Tour "),Fl();}}function G(t,p){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function W(t,p){if(t&1&&(js(0,"app-step-config",7),am(1,"app-placement-config",8),Fl(),am(2,"app-tour-service-api")(3,"app-events")),t&2){let r=fC();sm("isCloseOnOutsideClickVisible",true),QI(),sm("values",r.placementValues);}}function Y(t,p){t&1&&am(0,"app-faq",9);}function q(t,p){if(t&1&&am(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",10)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let r=fC();QI(2),sm("defaultTemplate",r.defaultTemplate);}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ng-zorro/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ng-zorro/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ng-zorro/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ng-zorro/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"ng-zorro/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ng-zorro/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ng-zorro/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ng-zorro/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ng-zorro/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ng-zorro/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ng-zorro/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ng-zorro/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ng-zorro/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ng-zorro/Misc"}],this.placementValues=["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],this.defaultTemplate=U,this.tourService=g(k0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(c){return new(c||t)};}static{this.\u0275cmp=Sb({type:t,selectors:[["app-ng-zorro"]],decls:7,vars:0,consts:[["header","NG ZORRO","package","ngx-ui-tour-ng-zorro"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ng.ant.design","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-ng-zorro"],["componentName","TourNgZorro"],[3,"isCloseOnOutsideClickVisible"],["value","bottomLeft","extraInfo","Accepts NG ZORRO <a href='https://ng.ant.design/components/popover/en#nz-popover' target='_blank'>popover</a> placement options.",3,"values"],["disablePageScrollingIntroducedIn","1.0","backdropOffsetIntroducedIn","1.0"],[3,"defaultTemplate"]],template:function(c,g){c&1&&(js(0,"tui-doc-page",0),tm(1,H,16,0,"ng-template",1)(2,G,2,0,"ng-template",1)(3,W,4,2,"ng-template",1)(4,Y,1,0,"ng-template",1)(5,q,5,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[rh,pE,Qa,Vt,Um,tp,t6,ip,rp,xp,yp,zp,Sp,kp,Vp,Lp,OO,L_],encapsulation:2});}}return t})();var Ct=[{path:"",component:a,children:[{path:"Setup",component:a},{path:"API",component:a},{path:"FAQ",component:a},{path:"Misc",component:a}],providers:[Cd({route:"ng-zorro",delayAfterNavigation:150}),NP(Qa)]}];
export{Ct as default};