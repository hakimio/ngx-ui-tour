import {K as yd,P as PP,N as _0,O as dE,R as Ga,q as qm,J as Jm,t as t6,n as np,c as cp,w as wp,M as Mp,C as Cp,_ as _p,z as zp,H as Hp,B as Bp}from'./chunk-LgbYhl1j.js';import {g,O as Ob,a as ah,V as Vt,$ as $O,N as N_,j as js,t as tm,F as Fl,b as am,m as mC,K as KC,p as pm,c as $f,v as vC,G as Gf,s as sm,d as tw}from'./main-NT3E7YAB.js';var U=`\`\`\`html
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
`;function H(t,p){if(t&1){let r=mC();js(0,"p")(1,"code"),KC(2,"ngx-ui-tour"),Fl(),KC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),KC(5,"angular-ui-tour"),Fl(),KC(6,". "),Fl(),js(7,"p")(8,"code"),KC(9,"TourNgZorro"),Fl(),KC(10," is an implementation of the tour UI that uses "),js(11,"a",3),KC(12,"NG ZORRO"),Fl(),KC(13," popover to display tour steps. "),Fl(),js(14,"button",4),pm("click",function(){$f(r);let g=vC();return Gf(g.tourService.start())}),KC(15," Start Demo Tour "),Fl();}}function G(t,p){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function W(t,p){if(t&1&&(js(0,"app-step-config",7),am(1,"app-placement-config",8),Fl(),am(2,"app-tour-service-api")(3,"app-events")),t&2){let r=vC();sm("isCloseOnOutsideClickVisible",true),tw(),sm("values",r.placementValues);}}function Y(t,p){t&1&&am(0,"app-faq",9);}function q(t,p){if(t&1&&am(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",10)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let r=vC();tw(2),sm("defaultTemplate",r.defaultTemplate);}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ng-zorro/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ng-zorro/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ng-zorro/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ng-zorro/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"ng-zorro/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ng-zorro/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ng-zorro/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ng-zorro/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ng-zorro/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ng-zorro/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ng-zorro/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ng-zorro/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ng-zorro/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ng-zorro/Misc"}],this.placementValues=["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],this.defaultTemplate=U,this.tourService=g(_0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(c){return new(c||t)};}static{this.\u0275cmp=Ob({type:t,selectors:[["app-ng-zorro"]],decls:7,vars:0,consts:[["header","NG ZORRO","package","ngx-ui-tour-ng-zorro"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ng.ant.design","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-ng-zorro"],["componentName","TourNgZorro"],[3,"isCloseOnOutsideClickVisible"],["value","bottomLeft","extraInfo","Accepts NG ZORRO <a href='https://ng.ant.design/components/popover/en#nz-popover' target='_blank'>popover</a> placement options.",3,"values"],["disablePageScrollingIntroducedIn","1.0","backdropOffsetIntroducedIn","1.0"],[3,"defaultTemplate"]],template:function(c,g){c&1&&(js(0,"tui-doc-page",0),tm(1,H,16,0,"ng-template",1)(2,G,2,0,"ng-template",1)(3,W,4,2,"ng-template",1)(4,Y,1,0,"ng-template",1)(5,q,5,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[ah,dE,Ga,Vt,qm,Jm,t6,np,cp,wp,Mp,Cp,_p,zp,Hp,Bp,$O,N_],encapsulation:2});}}return t})();var Ct=[{path:"",component:a,children:[{path:"Setup",component:a},{path:"API",component:a},{path:"FAQ",component:a},{path:"Misc",component:a}],providers:[yd({route:"ng-zorro",delayAfterNavigation:150}),PP(Ga)]}];
export{Ct as default};