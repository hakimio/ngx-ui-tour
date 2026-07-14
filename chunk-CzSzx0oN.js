import {g as gr,e as eP,f as f0,X as X4,c as ci,D as Dm,$ as $m,K as K3,Y as Ym,a as Km,l as lv,m as mv,p as pv,b as fv,u as uv,x as xv,y as yv}from'./chunk-kQa9IBqP.js';import {g,O as Ob,f as fh,G as Gt,h as h3,i as iC,j as js,t as tm,F as Fl,a as am,m as mC,K as KC,p as pm,$ as $f,v as vC,b as Gf,s as sm,c as tw,d as aT}from'./main-TZA33IXP.js';var Y=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <div
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
            class="main-container"
        >
            @if (!step?.useLegacyTitle && step?.title) {
                <div class="title-container">
                    <h5>{{ step?.title }}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        (click)="tourService.end()"
                    ></button>
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
                    [disabled]="!tourService.hasPrev(step)"
                    class="btn btn-sm btn-outline-secondary prev"
                    (click)="tourService.prev()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    {{ step?.prevBtnTitle }}
                </button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <button
                        class="btn btn-sm btn-outline-primary next"
                        (click)="tourService.next()"
                    >
                        {{ step?.nextBtnTitle }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                }
                @if (!tourService.hasNext(step)) {
                    <button
                        class="btn btn-sm btn-outline-primary"
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
`;var q=()=>["auto","top","bottom","start","left","end","right","top-start","top-left","top-end","top-right","bottom-start","bottom-left","bottom-end","bottom-right","start-top","left-top","start-bottom","left-bottom","end-top","right-top","end-bottom","right-bottom"];function R(t,s){if(t&1){let a=mC();js(0,"p")(1,"code"),KC(2,"ngx-ui-tour"),Fl(),KC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),KC(5,"angular-ui-tour"),Fl(),KC(6,". "),Fl(),js(7,"p")(8,"code"),KC(9,"TourNgBootstrap"),Fl(),KC(10," is an implementation of the tour UI that uses "),js(11,"a",3),KC(12,"NgBootstrap"),Fl(),KC(13," popovers to display tour steps. "),Fl(),js(14,"p")(15,"button",4),pm("click",function(){$f(a);let g=vC();return Gf(g.tourService.start())}),KC(16," Start Demo Tour "),Fl()();}}function j(t,s){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function G(t,s){t&1&&(js(0,"app-step-config",7),am(1,"app-placement-config",8),Fl(),am(2,"app-tour-service-api")(3,"app-events")),t&2&&(sm("isUseLegacyTitleVisible",true),tw(),sm("values",aT(2,q)));}function Q(t,s){t&1&&am(0,"app-faq",9);}function J(t,s){if(t&1&&am(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",10)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let a=vC();tw(2),sm("defaultTemplate",a.defaultTemplate);}}var i=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ng-bootstrap/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ng-bootstrap/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ng-bootstrap/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ng-bootstrap/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"ng-bootstrap/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ng-bootstrap/API"},{anchorId:"config.popoverClass",content:"You can add custom popover class.",title:"Custom CSS Class",popoverClass:"custom-tour-class",route:"ng-bootstrap/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ng-bootstrap/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ng-bootstrap/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ng-bootstrap/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ng-bootstrap/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ng-bootstrap/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ng-bootstrap/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ng-bootstrap/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ng-bootstrap/Misc"}],this.defaultTemplate=Y,this.tourService=g(f0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(p){return new(p||t)};}static{this.\u0275cmp=Ob({type:t,selectors:[["app-ng-bootstrap"]],decls:7,vars:0,consts:[["header","NG Bootstrap","package","ngx-ui-tour-ng-bootstrap"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ng-bootstrap.github.io","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-ng-bootstrap"],["componentName","TourNgBootstrap"],[3,"isUseLegacyTitleVisible"],["value","auto","extraInfo","Accepts <a href='https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover'>NgbPopover</a> placement options.",3,"values"],["disablePageScrollingIntroducedIn","12.1","backdropOffsetIntroducedIn","13"],[3,"defaultTemplate"]],template:function(p,g){p&1&&(js(0,"tui-doc-page",0),tm(1,R,17,0,"ng-template",1)(2,j,2,0,"ng-template",1)(3,G,4,3,"ng-template",1)(4,Q,1,0,"ng-template",1)(5,J,5,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[fh,X4,ci,Gt,Dm,$m,K3,Ym,Km,lv,mv,pv,fv,uv,xv,yv,h3,iC],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}  .popover.custom-tour-class{--bs-popover-arrow-border: #333;--bs-popover-bg: #333;--bs-popover-border-color: #333;--bs-popover-body-color: #eee}  .popover.custom-tour-class .progress{color:#6c757d!important}  .popover.custom-tour-class .btn-close{filter:invert(1) grayscale(100%) brightness(200%)}"]});}}return t})();var It=[{path:"",component:i,children:[{path:"Setup",component:i},{path:"API",component:i},{path:"FAQ",component:i},{path:"Misc",component:i}],providers:[gr({route:"ng-bootstrap",delayAfterNavigation:150}),eP(X4)]}];
export{It as default};