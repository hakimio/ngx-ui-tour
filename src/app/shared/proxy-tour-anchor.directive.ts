import {Directive, HostBinding, inject, Inject, InjectionToken, Input, OnDestroy, OnInit, Type} from '@angular/core';
import {TourAnchorDirective} from 'ngx-ui-tour-core';
import {TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';
import {TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective} from 'ngx-ui-tour-ng-bootstrap';
import {TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective} from 'ngx-ui-tour-ngx-bootstrap';
import {TourAnchorConsoleDirective} from 'ngx-ui-tour-console';

export const TOUR_ANCHOR_DIRECTIVE = new InjectionToken<TourAnchorDirective>('TourAnchorDirective');
export const TOUR_ANCHOR_DIRECTIVE_TYPE = new InjectionToken<Type<TourAnchorDirective>>('TourAnchorDirectiveType');

@Directive({
    selector: '[tourAnchor]',
    // All directive providers should be declared here because their instances should not be shared
    providers: [
        TourAnchorMatMenuDirective,
        TourAnchorNgxBootstrapDirective,
        TourAnchorNgxBootstrapPopoverDirective,
        TourAnchorNgBootstrapDirective,
        TourAnchorNgBootstrapPopoverDirective,
        TourAnchorConsoleDirective,
        {
            provide: TOUR_ANCHOR_DIRECTIVE,
            useFactory: () => {
                const type = inject(TOUR_ANCHOR_DIRECTIVE_TYPE);

                return inject(type);
            }
        }
    ]
})
export class ProxyTourAnchorDirective implements OnInit, OnDestroy {

    @Input()
    public tourAnchor: string;

    @HostBinding('class.touranchor--is-active')
    public isActive = false;

    constructor(
        @Inject(TOUR_ANCHOR_DIRECTIVE)
        private readonly tourAnchorDirective: TourAnchorDirective
    ) {
        this.overrideShowHideMethods();
    }

    ngOnInit() {
        this.tourAnchorDirective['tourAnchor'] = this.tourAnchor;
        this.tourAnchorDirective['ngOnInit']();
    }

    ngOnDestroy() {
        this.tourAnchorDirective['ngOnDestroy']();
    }

    private overrideShowHideMethods() {
        const origShowFn = this.tourAnchorDirective.showTourStep.bind(this.tourAnchorDirective),
            origHideFn = this.tourAnchorDirective.hideTourStep.bind(this.tourAnchorDirective);

        this.tourAnchorDirective.showTourStep = step => {
            this.isActive = true;
            origShowFn(step);
        };
        this.tourAnchorDirective.hideTourStep = () => {
            this.isActive = false;
            origHideFn();
        };
    }

}
