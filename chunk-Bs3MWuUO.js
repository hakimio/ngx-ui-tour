import{En as FC,Gi as qs,It as s3,Kn as Kb,Tr as Ul,V as Zt,Wn as Jf,ci as gT,ea as vm,jr as Xf,la as ym,mn as Cm,n as AC,oi as fm,si as g,w as Rh,wi as kC,xn as Dw}from"./main-GZXE4HEJ.js";import{D as hv,E as gv,F as qm,P as pd,R as uv,V as wv,c as J3,f as Nm,g as Xm,h as Wa,i as Cv,j as nI,l as Jm,n as BO,r as C0,x as bv,z as vv}from"./chunk-byzGFu2q.js";var U=`\`\`\`html
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
`;function H(t,p){if(t&1){let r=kC();qs(0,`p`)(1,`code`),gT(2,`ngx-ui-tour`),Ul(),gT(3,` is a UI tour library built for Angular. It's inspired by `),qs(4,`a`,2),gT(5,`angular-ui-tour`),Ul(),gT(6,`. `),Ul(),qs(7,`p`)(8,`code`),gT(9,`TourNgZorro`),Ul(),gT(10,` is an implementation of the tour UI that uses `),qs(11,`a`,3),gT(12,`NG ZORRO`),Ul(),gT(13,` popover to display tour steps. `),Ul(),qs(14,`button`,4),Cm(`click`,function(){Xf(r);return Jf(FC().tourService.start())}),gT(15,` Start Demo Tour `),Ul()}}function G(t,p){t&1&&vm(0,`app-installation`,5)(1,`app-usage`,6)}function W(t,p){if(t&1&&(qs(0,`app-step-config`,7),vm(1,`app-placement-config`,8),Ul(),vm(2,`app-tour-service-api`)(3,`app-events`)),t&2){let r=FC();ym(`isCloseOnOutsideClickVisible`,!0),Dw(),ym(`values`,r.placementValues)}}function Y(t,p){t&1&&vm(0,`app-faq`,9)}function q(t,p){if(t&1&&vm(0,`app-hotkeys`)(1,`app-defaults`)(2,`app-custom-template`,10)(3,`app-styling-active-tour-anchor`)(4,`app-targeting-third-party-elements`),t&2){let r=FC();Dw(2),ym(`defaultTemplate`,r.defaultTemplate)}}var a=(()=>{class t{constructor(){this.tourSteps=[{anchorId:`start.tour`,content:`Welcome to the Ngx-UI-Tour tour!`,title:`Welcome`},{anchorId:`angular-ui-tour`,content:`Thanks to angular-ui-tour for the inspiration for the library`,title:`angular-ui-tour`},{anchorId:`installation`,content:`First, install the library...`,title:`Installation`,route:`ng-zorro/Setup`},{anchorId:`usage`,content:`...then use it.`,title:`Usage`,route:`ng-zorro/Setup`},{anchorId:`tourService.start`,content:`Don't forget to actually start the tour.`,title:`Start the tour`,route:`ng-zorro/Setup`},{anchorId:`config.anchorId`,content:`Every step needs an anchor.`,title:`Anchor`,route:`ng-zorro/API`},{anchorId:`config.enableBackdrop`,content:`You can enable backdrop to highlight active element.`,title:`Backdrop`,enableBackdrop:!0,route:`ng-zorro/API`},{anchorId:`config.route`,content:`Tours can span multiple routes.`,title:`Route`,route:`ng-zorro/API`},{anchorId:`config.placement`,content:`Steps can be positioned around an anchor.`,title:`Placement`,route:`ng-zorro/API`},{anchorId:`config.centerAnchorOnScroll`,content:`Enable this config to keep active anchor element centered when possible.`,title:`Center active anchor`,route:`ng-zorro/API`},{anchorId:`config.smoothScroll`,content:`Enable "smoothScroll" option to smoothly scroll to an active element.`,title:`Smooth scroll`,route:`ng-zorro/API`},{anchorId:`config.buttons.custom`,content:`You can set custom step button names`,title:`Button Titles`,prevBtnTitle:`My Prev`,nextBtnTitle:`My Next`,endBtnTitle:`My End`,route:`ng-zorro/API`},{anchorId:`config.isAsync`,content:`Mark your step as async if anchor element is added to DOM with a delay`,title:`Wait for async event`,route:`ng-zorro/API`},{anchorId:`config.nextOnAnchorClick`,content:`Click on the config description to go to the next step`,title:`Next on Anchor Click`,route:`ng-zorro/API`,nextOnAnchorClick:!0},{anchorId:`events`,content:`You can subscribe to events`,title:`Events`,route:`ng-zorro/API`},{anchorId:`hotkeys`,content:`Try using the hotkeys to navigate through the tour.`,title:`Hotkeys`,route:`ng-zorro/Misc`}],this.placementValues=[`top`,`left`,`right`,`bottom`,`topLeft`,`topRight`,`bottomLeft`,`bottomRight`,`leftTop`,`leftBottom`,`rightTop`,`rightBottom`],this.defaultTemplate=U,this.tourService=g(C0)}ngOnInit(){this.tourService.initialize(this.tourSteps)}static{this.ɵfac=function(c){return new(c||t)}}static{this.ɵcmp=Kb({type:t,selectors:[[`app-ng-zorro`]],decls:7,vars:0,consts:[[`header`,`NG ZORRO`,`package`,`ngx-ui-tour-ng-zorro`],[`pageTab`,``],[`tuiLink`,``,`target`,`_blank`,`tourAnchor`,`angular-ui-tour`,`href`,`https://benmarch.github.io/angular-ui-tour`],[`tuiLink`,``,`href`,`https://ng.ant.design`,`target`,`_blank`],[`tuiButton`,``,`type`,`button`,`tourAnchor`,`start.tour`,3,`click`],[`packageName`,`ngx-ui-tour-ng-zorro`],[`componentName`,`TourNgZorro`],[3,`isCloseOnOutsideClickVisible`],[`value`,`bottomLeft`,`extraInfo`,`Accepts NG ZORRO <a href='https://ng.ant.design/components/popover/en#nz-popover' target='_blank'>popover</a> placement options.`,3,`values`],[`disablePageScrollingIntroducedIn`,`1.0`,`backdropOffsetIntroducedIn`,`1.0`],[3,`defaultTemplate`]],template:function(c,g){c&1&&(qs(0,`tui-doc-page`,0),fm(1,H,16,0,`ng-template`,1)(2,G,2,0,`ng-template`,1)(3,W,4,2,`ng-template`,1)(4,Y,1,0,`ng-template`,1)(5,q,5,1,`ng-template`,1),Ul(),vm(6,`tour-step-template`))},dependencies:[Rh,BO,Wa,Zt,Nm,qm,J3,Xm,Jm,hv,vv,uv,wv,gv,bv,Cv,s3,AC],encapsulation:2})}}return t})();var Ct=[{path:``,component:a,children:[{path:`Setup`,component:a},{path:`API`,component:a},{path:`FAQ`,component:a},{path:`Misc`,component:a}],providers:[pd({route:`ng-zorro`,delayAfterNavigation:150}),nI(Wa)]}];export{Ct as default};