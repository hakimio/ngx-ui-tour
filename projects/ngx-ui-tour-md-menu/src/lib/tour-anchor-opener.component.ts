import {ChangeDetectorRef, Component, ViewChild,} from '@angular/core';
import {MAT_MENU_SCROLL_STRATEGY, MatMenuTrigger} from '@angular/material/menu';
import {Overlay, ScrollStrategy} from '@angular/cdk/overlay';
import {NgxmTourService} from './ngx-md-menu-tour.service';

export function scrollFactory(overlay: Overlay, tourService: NgxmTourService): () => ScrollStrategy {
    return () => {
        const step = tourService.currentStep,
            scrollStrategies = overlay.scrollStrategies,
            disablePageScrolling = !!step.disablePageScrolling;

        return disablePageScrolling ? scrollStrategies.block() : scrollStrategies.reposition();
    };
}

@Component({
    providers: [{
        provide: MAT_MENU_SCROLL_STRATEGY,
        useFactory: scrollFactory,
        deps: [Overlay, NgxmTourService]
    }],
    selector: 'tour-anchor-opener',
    styles: [
        `
            :host {
                display: none;
            }
        `
    ],
    template: `
        <!--suppress HtmlUnknownAttribute -->
        <span matMenuTriggerFor [matMenuTriggerRestoreFocus]="false"></span>
    `
})
export class TourAnchorOpenerComponent {

    @ViewChild(MatMenuTrigger, {static: true})
    public trigger: MatMenuTrigger;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    markForCheck() {
        this.changeDetector.markForCheck();
    }

}
