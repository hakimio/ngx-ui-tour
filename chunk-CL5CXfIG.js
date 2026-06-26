import {m as s9,U as UP,r as H0,v as v9,t as te,I as Im,q as qm,i as i6,X as Xm,J as Jm,h as hp,p as pp,u as up,a as wp,g as gp,C as Cp}from'./chunk-Ce9PLKgr.js';import {g,T as Tb,M as MM,o as oC,H as Hf,a as Ht,r as rI,j as js,e as em,L as Ll,s as sm,c as cC,$ as $C,f as fm,b as $f,l as lC,G as Gf,i as im,Z as ZI}from'./main-Z6TMSF2U.js';var W=`\`\`\`html
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
`;function q(t,p){if(t&1){let a=cC();js(0,"p")(1,"code"),$C(2,"ngx-ui-tour"),Ll(),$C(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),$C(5,"angular-ui-tour"),Ll(),$C(6,". "),Ll(),js(7,"p")(8,"code"),$C(9,"TourIonPopover"),Ll(),$C(10," is an implementation of the tour UI that uses "),js(11,"a",3),$C(12,"Ionic"),Ll(),$C(13," Popover to display tour steps. "),Ll(),js(14,"p")(15,"button",4),fm("click",function(){$f(a);let u=lC();return Gf(u.tourService.start())}),$C(16," Start Demo Tour "),Ll()();}}function z(t,p){t&1&&sm(0,"app-installation",5)(1,"app-usage",6);}function R(t,p){t&1&&(js(0,"app-step-config",7),sm(1,"app-placement-config",8),Ll(),sm(2,"app-tour-service-api")(3,"app-events")),t&2&&im("isIonicShowArrowVisible",true)("isIonicTrapFocusVisible",true);}function j(t,p){t&1&&sm(0,"app-faq",9);}function Q(t,p){if(t&1&&(sm(0,"app-hotkeys")(1,"app-defaults"),js(2,"app-custom-template",10)(3,"div",11),$C(4," It might be necessary to set "),js(5,"code"),$C(6,"pointer-events: auto"),Ll(),$C(7," to the "),js(8,"code"),$C(9,"<ion-card>"),Ll(),$C(10," element to make tour step interactable. "),Ll()(),sm(11,"app-styling-active-tour-anchor")),t&2){let a=lC();ZI(2),im("defaultTemplate",a.defaultTemplate);}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ion-popover/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ion-popover/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ion-popover/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ion-popover/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"ion-popover/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ion-popover/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ion-popover/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ion-popover/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ion-popover/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ion-popover/API",stepDimensions:{maxWidth:"350px"}},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ion-popover/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ion-popover/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ion-popover/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ion-popover/Misc"}],this.defaultTemplate=W,this.tourService=g(H0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(c){return new(c||t)};}static{this.\u0275cmp=Tb({type:t,selectors:[["app-ion-popover"]],decls:7,vars:0,consts:[["header","Ionic","package","ngx-ui-tour-ionic"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ionicframework.com/","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-ionic"],["componentName","TourIonPopover"],[3,"isIonicShowArrowVisible","isIonicTrapFocusVisible"],["type","IonPopoverPlacement"],["disablePageScrollingIntroducedIn","1.1"],[3,"defaultTemplate"],["tuiNotification","","appearance","warning","size","m"]],template:function(c,u){c&1&&(js(0,"tui-doc-page",0),em(1,q,17,0,"ng-template",1)(2,z,2,0,"ng-template",1)(3,R,4,2,"ng-template",1)(4,j,1,0,"ng-template",1)(5,Q,12,1,"ng-template",1),Ll(),sm(6,"tour-step-template"));},dependencies:[MM,oC,Hf,v9,te,Ht,Im,qm,i6,Xm,Jm,hp,pp,up,wp,gp,Cp,rI],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]});}}return t})();var Pt=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[s9({route:"ion-popover",delayAfterNavigation:150}),UP(te)]}];
export{Pt as default};