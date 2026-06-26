import {D as vd,U as UP,T as T0,F as xE,Y as Ya,I as Im,q as qm,i as i6,X as Xm,J as Jm,h as hp,p as pp,u as up,a as wp,g as gp,b as bp,C as Cp}from'./chunk-D-SHKXkL.js';import {g,T as Tb,H as Hf,a as Ht,M as MM,o as oC,j as js,e as em,L as Ll,s as sm,c as cC,$ as $C,f as fm,b as $f,l as lC,G as Gf,i as im,Z as ZI}from'./main-NZXVYX2N.js';var U=`\`\`\`html
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
`;function H(t,p){if(t&1){let r=cC();js(0,"p")(1,"code"),$C(2,"ngx-ui-tour"),Ll(),$C(3," is a UI tour library built for Angular. It's inspired by "),js(4,"a",2),$C(5,"angular-ui-tour"),Ll(),$C(6,". "),Ll(),js(7,"p")(8,"code"),$C(9,"TourNgZorro"),Ll(),$C(10," is an implementation of the tour UI that uses "),js(11,"a",3),$C(12,"NG ZORRO"),Ll(),$C(13," popover to display tour steps. "),Ll(),js(14,"button",4),fm("click",function(){$f(r);let g=lC();return Gf(g.tourService.start())}),$C(15," Start Demo Tour "),Ll();}}function G(t,p){t&1&&sm(0,"app-installation",5)(1,"app-usage",6);}function W(t,p){if(t&1&&(js(0,"app-step-config",7),sm(1,"app-placement-config",8),Ll(),sm(2,"app-tour-service-api")(3,"app-events")),t&2){let r=lC();im("isCloseOnOutsideClickVisible",true),ZI(),im("values",r.placementValues);}}function Y(t,p){t&1&&sm(0,"app-faq",9);}function q(t,p){if(t&1&&sm(0,"app-hotkeys")(1,"app-defaults")(2,"app-custom-template",10)(3,"app-styling-active-tour-anchor")(4,"app-targeting-third-party-elements"),t&2){let r=lC();ZI(2),im("defaultTemplate",r.defaultTemplate);}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"ng-zorro/Setup"},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"ng-zorro/Setup"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"ng-zorro/Setup"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"ng-zorro/API"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:true,route:"ng-zorro/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"ng-zorro/API"},{anchorId:"config.placement",content:"Steps can be positioned around an anchor.",title:"Placement",route:"ng-zorro/API"},{anchorId:"config.centerAnchorOnScroll",content:"Enable this config to keep active anchor element centered when possible.",title:"Center active anchor",route:"ng-zorro/API"},{anchorId:"config.smoothScroll",content:'Enable "smoothScroll" option to smoothly scroll to an active element.',title:"Smooth scroll",route:"ng-zorro/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"ng-zorro/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"ng-zorro/API"},{anchorId:"config.nextOnAnchorClick",content:"Click on the config description to go to the next step",title:"Next on Anchor Click",route:"ng-zorro/API",nextOnAnchorClick:true},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"ng-zorro/API"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"ng-zorro/Misc"}],this.placementValues=["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],this.defaultTemplate=U,this.tourService=g(T0);}ngOnInit(){this.tourService.initialize(this.tourSteps);}static{this.\u0275fac=function(c){return new(c||t)};}static{this.\u0275cmp=Tb({type:t,selectors:[["app-ng-zorro"]],decls:7,vars:0,consts:[["header","NG ZORRO","package","ngx-ui-tour-ng-zorro"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","https://benmarch.github.io/angular-ui-tour"],["tuiLink","","href","https://ng.ant.design","target","_blank"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["packageName","ngx-ui-tour-ng-zorro"],["componentName","TourNgZorro"],[3,"isCloseOnOutsideClickVisible"],["value","bottomLeft","extraInfo","Accepts NG ZORRO <a href='https://ng.ant.design/components/popover/en#nz-popover' target='_blank'>popover</a> placement options.",3,"values"],["disablePageScrollingIntroducedIn","1.0","backdropOffsetIntroducedIn","1.0"],[3,"defaultTemplate"]],template:function(c,g){c&1&&(js(0,"tui-doc-page",0),em(1,H,16,0,"ng-template",1)(2,G,2,0,"ng-template",1)(3,W,4,2,"ng-template",1)(4,Y,1,0,"ng-template",1)(5,q,5,1,"ng-template",1),Ll(),sm(6,"tour-step-template"));},dependencies:[Hf,xE,Ya,Ht,Im,qm,i6,Xm,Jm,hp,pp,up,wp,gp,bp,Cp,MM,oC],encapsulation:2});}}return t})();var Ct=[{path:"",component:a,children:[{path:"Setup",component:a},{path:"API",component:a},{path:"FAQ",component:a},{path:"Misc",component:a}],providers:[vd({route:"ng-zorro",delayAfterNavigation:150}),UP(Ya)]}];
export{Ct as default};