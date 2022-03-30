import {Component, ViewChild, Input,} from '@angular/core';
import {MatMenuTrigger, MatMenu, MAT_MENU_SCROLL_STRATEGY} from '@angular/material/menu';
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
        <span [matMenuTriggerFor]="menu" [matMenuTriggerRestoreFocus]="false" #trigger="matMenuTrigger"></span>
    `
})
export class TourAnchorOpenerComponent {
  @Input() menu: MatMenu = new MatMenu(undefined, undefined, {
    xPosition: 'after',
    yPosition: 'below',
    overlapTrigger: true,
    backdropClass: ''
  });

  @ViewChild(MatMenuTrigger) public trigger: MatMenuTrigger;
}
