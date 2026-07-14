import {G as Gr,e as eP,h as x0,o as ot,i as u5,D as Dm,$ as $m,K as K3,Y as Ym,a as Km,l as lv,m as mv,p as pv,b as fv,u as uv,x as xv,y as yv}from'./chunk-kQa9IBqP.js';import {g,O as Ob,h as h3,i as iC,f as fh,G as Gt,j as js,t as tm,F as Fl,a as am,m as mC,K as KC,p as pm,$ as $f,v as vC,b as Gf,s as sm,c as tw}from'./main-TZA33IXP.js';var L=`\`\`\`html
<tour-step-template>
    <ng-template let-step="step">
        <mat-card
            (click)="$event.stopPropagation()"
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
        >
            <mat-card-header>
                <div class="header-group">
                    <mat-card-title>
                        {{ step.title }}
                    </mat-card-title>
                    <button
                        mat-icon-button
                        (click)="tourService.end()"
                        class="close"
                    >
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </mat-card-header>

            <mat-card-content
                class="mat-body"
                [innerHTML]="step.content"
            ></mat-card-content>

            <mat-card-actions
                [class.no-progress]="!step.showProgress"
            >
                <button
                    mat-button
                    class="prev"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                >
                    <mat-icon>chevron_left</mat-icon>
                    {{ step.prevBtnTitle }}
                </button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <button
                        class="next"
                        (click)="tourService.next()"
                        mat-button
                    >
                        {{ step.nextBtnTitle }}
                        <mat-icon iconPositionEnd>chevron_right</mat-icon>
                    </button>
                }
                @if (!tourService.hasNext(step)) {
                    <button
                        mat-button
                        (click)="tourService.end()"
                    >
                        {{ step.endBtnTitle }}
                    </button>
                }
            </mat-card-actions>
        </mat-card>
    </ng-template>
</tour-step-template>
\`\`\`
`;function q(t,c){if(t&1){let a=mC();js(0,"p")(1,"code"),KC(2,"ngx-ui-tour"),Fl(),KC(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),KC(5,"angular-ui-tour"),Fl(),KC(6,". "),Fl(),js(7,"p")(8,"code"),KC(9,"TourMatMenu"),Fl(),KC(10," is an implementation of the tour UI that uses "),js(11,"a",3),KC(12,"Angular Material"),Fl(),KC(13," MatMenu to display tour steps. "),Fl(),js(14,"p")(15,"button",4),pm("click",function(){$f(a);let l=vC();return Gf(l.tourService.start())}),KC(16," Start Demo Tour "),Fl()();}}function R(t,c){t&1&&am(0,"app-installation",5)(1,"app-usage",6);}function j(t,c){t&1&&(js(0,"app-step-config",7),am(1,"app-placement-config",8),Fl(),am(2,"app-tour-service-api")(3,"app-events")),t&2&&sm("isCloseOnOutsideClickVisible",true)("isMdMenuShowArrowVisible",true);}function z(t,c){t&1&&am(0,"app-faq",9);}function Q(t,c){if(t&1&&am(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",10)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let a=vC();tw(2),sm("defaultTemplate",a.defaultTemplate);}}var r=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"md-menu/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"md-menu/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"md-menu/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"md-menu/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"md-menu/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"md-menu/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"md-menu/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"md-menu/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"md-menu/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"md-menu/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"md-menu/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"md-menu/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"md-menu/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"md-menu/Misc"}],this.defaultTemplate=L,this.tourService=g(x0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(m){return new(m||t)};}static{this.\u0275cmp=Ob({type:t,selectors:[["app-md-menu"]],decls:7,vars:0,consts:[["header","Material Design","package","ngx-ui-tour-md-menu"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://material.angular.dev","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-md-menu"],["componentName","TourMatMenu"],[3,"isCloseOnOutsideClickVisible","isMdMenuShowArrowVisible"],["type","MdMenuPlacement"],["disablePageScrollingIntroducedIn","7","backdropOffsetIntroducedIn","11"],[3,"defaultTemplate"]],template:function(m,l){m&1&&(js(0,"tui-doc-page",0),tm(1,q,17,0,"ng-template",1)(2,R,2,0,"ng-template",1)(3,j,4,2,"ng-template",1)(4,z,1,0,"ng-template",1)(5,Q,5,1,"ng-template",1),Fl(),am(6,"tour-step-template"));},dependencies:[h3,iC,fh,ot,u5,Gt,Dm,$m,K3,Ym,Km,lv,mv,pv,fv,uv,xv,yv],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}"]});}}return t})();var Ct=[{path:"",component:r,children:[{path:"Setup",component:r},{path:"API",component:r},{path:"FAQ",component:r},{path:"Misc",component:r}],providers:[Gr({route:"md-menu",delayAfterNavigation:150}),eP(ot)]}];
export{Ct as default};