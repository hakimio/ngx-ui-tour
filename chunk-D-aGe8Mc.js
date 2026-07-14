import {J as Jl,e as eP,M as M0,v as c9,w as Xt,D as Dm,$ as $m,K as K3,Y as Ym,a as Km,l as lv,m as mv,p as pv,b as fv,u as uv,y as yv}from'./chunk-kQa9IBqP.js';import {g,O as Ob,h as h3,i as iC,f as fh,G as Gt,e as OS,j as js,t as tm,F as Fl,a as am,m as mC,K as KC,p as pm,$ as $f,v as vC,b as Gf,s as sm,c as tw}from'./main-TZA33IXP.js';var W=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <ion-card>
            <ion-card-header>
                <ion-card-title>{{step.title}}</ion-card-title>
                <ion-button
                    class="close"
                    fill="clear"
                    shape="round"
                    (click)="tourService.end()"
                >
                    <ion-icon slot="icon-only" name="close-outline"></ion-icon>
                </ion-button>
            </ion-card-header>

            <ion-card-content
                [innerHTML]="step.content"
            ></ion-card-content>

            <div
                class="footer"
                [class.no-progress]="!step.showProgress"
            >
                <ion-button
                    fill="clear"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                >
                    <ion-icon slot="start" name="chevron-back-outline"></ion-icon>
                    {{ step.prevBtnTitle }}
                </ion-button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <ion-button
                        fill="clear"
                        (click)="tourService.next()"
                    >
                        {{ step.nextBtnTitle }}
                        <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
                    </ion-button>
                }
                @if (!tourService.hasNext(step)) {
                    <ion-button
                        fill="clear"
                        (click)="tourService.end()"
                    >
                        {{ step.endBtnTitle }}
                    </ion-button>
                }
            </div>
        </ion-card>
    </ng-template>
</tour-step-template>
\`\`\`
`;function q(t,p){if(t&1){let a=mC();js(0,"p")(1,"code"),KC(2,"ngx-ui-tour"),Fl(),KC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),KC(5,"angular-ui-tour"),Fl(),KC(6,". "),Fl(),js(7,"p")(8,"code"),KC(9,"TourIonPopover"),Fl(),KC(10," is an implementation of the tour UI that uses "),js(11,"a",3),KC(12,"Ionic"),Fl(),KC(13," Popover to display tour steps. "),Fl(),js(14,"p")(15,"button",4),pm("click",function(){$f(a);let u=vC();return Gf(u.tourService.start())}),KC(16," Start Demo Tour "),Fl()();}}function z(t,p){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function R(t,p){t&1&&(js(0,"app-step-config",7),am(1,"app-placement-config",8),Fl(),am(2,"app-tour-service-api")(3,"app-events")),t&2&&sm("isIonicShowArrowVisible",true)("isIonicTrapFocusVisible",true);}function j(t,p){t&1&&am(0,"app-faq",9);}function Q(t,p){if(t&1&&(am(0,"app-hotkeys")(1,"app-defaults"),js(2,"app-custom-template",10)(3,"div",11),KC(4," It might be necessary to set "),js(5,"code"),KC(6,"pointer-events: auto"),Fl(),KC(7," to the "),js(8,"code"),KC(9,"<ion-card>"),Fl(),KC(10," element to make tour step interactable. "),Fl()(),am(11,"app-styling-active-tour-anchor")),t&2){let a=vC();tw(2),sm("defaultTemplate",a.defaultTemplate);}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ion-popover/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ion-popover/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ion-popover/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ion-popover/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"ion-popover/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ion-popover/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ion-popover/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ion-popover/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ion-popover/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ion-popover/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ion-popover/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ion-popover/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ion-popover/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ion-popover/Misc"}],this.defaultTemplate=W,this.tourService=g(M0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(c){return new(c||t)};}static{this.\u0275cmp=Ob({type:t,selectors:[["app-ion-popover"]],decls:7,vars:0,consts:[["header","Ionic","package","ngx-ui-tour-ionic"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ionicframework.com/","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-ionic"],["componentName","TourIonPopover"],[3,"isIonicShowArrowVisible","isIonicTrapFocusVisible"],["type","IonPopoverPlacement"],["disablePageScrollingIntroducedIn","1.1"],[3,"defaultTemplate"],["tuiNotification","","appearance","warning","size","m"]],template:function(c,u){c&1&&(js(0,"tui-doc-page",0),tm(1,q,17,0,"ng-template",1)(2,z,2,0,"ng-template",1)(3,R,4,2,"ng-template",1)(4,j,1,0,"ng-template",1)(5,Q,12,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[h3,iC,fh,c9,Xt,Gt,Dm,$m,K3,Ym,Km,lv,mv,pv,fv,uv,yv,OS],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]});}}return t})();var Pt=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[Jl({route:"ion-popover",delayAfterNavigation:150}),eP(Xt)]}];
export{Pt as default};