import {A as f9,P as PP,E as k0,I as oB,L as L5,q as qm,J as Jm,n as np,c as cp,w as wp,M as Mp,C as Cp,_ as _p,z as zp,B as Bp}from'./chunk-LgbYhl1j.js';import {g,O as Ob,$ as $O,N as N_,a as ah,V as Vt,j as js,t as tm,F as Fl,b as am,m as mC,K as KC,p as pm,c as $f,v as vC,G as Gf,s as sm,d as tw}from'./main-NT3E7YAB.js';var V=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <div
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
            class="main-container"
        >
            <div class="title-container">
                <div class="title">{{ step?.title }}</div>
                <p-button
                    severity="secondary"
                    icon="pi pi-times"
                    ariaLabel="Close"
                    variant="text"
                    [rounded]="true"
                    (click)="tourService.end()"
                />
            </div>

            <p
                class="card-text"
                [innerHTML]="step.content"
            ></p>

            <div
                class="buttons"
                [class.no-progress]="!step.showProgress"
            >
                <p-button
                    [disabled]="!tourService.hasPrev(step)"
                    icon="pi pi-angle-left"
                    iconPos="left"
                    severity="secondary"
                    [label]="step.prevBtnTitle"
                    (click)="tourService.prev()"
                />
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }

                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <p-button
                        icon="pi pi-angle-right"
                        iconPos="right"
                        [label]="step.nextBtnTitle"
                        (click)="tourService.next()"
                    />
                }
                @if (!tourService.hasNext(step)) {
                    <p-button
                        [label]="step.endBtnTitle"
                        (click)="tourService.end()"
                    />
                }
            </div>
        </div>
    </ng-template>
</tour-step-template>
\`\`\`
`;function H(t,p){if(t&1){let a=mC();js(0,"p")(1,"code"),KC(2,"ngx-ui-tour"),Fl(),KC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),KC(5,"angular-ui-tour"),Fl(),KC(6,". "),Fl(),js(7,"p")(8,"code"),KC(9,"TourPrimeNg"),Fl(),KC(10," is an implementation of the tour UI that uses "),js(11,"a",3),KC(12,"PrimeNG"),Fl(),KC(13," Popover to display tour steps. "),Fl(),js(14,"p")(15,"button",4),pm("click",function(){$f(a);let u=vC();return Gf(u.tourService.start())}),KC(16," Start Demo Tour "),Fl()();}}function Y(t,p){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function q(t,p){t&1&&am(0,"app-step-config",7)(1,"app-tour-service-api")(2,"app-events"),t&2&&sm("isCloseOnOutsideClickVisible",true);}function G(t,p){t&1&&am(0,"app-faq",8);}function R(t,p){if(t&1&&am(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",9)(3,"app-styling-active-tour-anchor"),t&2){let a=vC();tw(2),sm("defaultTemplate",a.defaultTemplate);}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"prime-ng/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"prime-ng/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"prime-ng/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"prime-ng/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"prime-ng/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"prime-ng/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"prime-ng/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"prime-ng/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"prime-ng/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"prime-ng/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"prime-ng/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"prime-ng/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"prime-ng/Misc"}],this.defaultTemplate=V,this.tourService=g(k0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(s){return new(s||t)};}static{this.\u0275cmp=Ob({type:t,selectors:[["app-prime-ng-popover"]],decls:7,vars:0,consts:[["header","PrimeNG","package","ngx-ui-tour-primeng"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://primeng.org","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-primeng"],["componentName","TourPrimeNg"],[3,"isCloseOnOutsideClickVisible"],["disablePageScrollingIntroducedIn","1.0","backdropOffsetIntroducedIn","1.0"],[3,"defaultTemplate"]],template:function(s,u){s&1&&(js(0,"tui-doc-page",0),tm(1,H,17,0,"ng-template",1)(2,Y,2,0,"ng-template",1)(3,q,3,1,"ng-template",1)(4,G,1,0,"ng-template",1)(5,R,4,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[$O,N_,ah,oB,L5,Vt,qm,Jm,np,cp,wp,Mp,Cp,_p,zp,Bp],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]});}}return t})();var Pt=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[f9({route:"prime-ng",delayAfterNavigation:150}),PP(L5)]}];
export{Pt as default};