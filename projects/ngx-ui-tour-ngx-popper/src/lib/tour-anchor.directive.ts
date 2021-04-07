import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';
import type {OnDestroy, OnInit} from '@angular/core';
import { NgxPopperjsDirective, NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';
import {ElementSides, isInViewport, TourAnchorDirective} from 'ngx-ui-tour-core';

import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { INgxpStepOption as IStepOption } from './step-option.interface';

@Directive({ selector: '[tourAnchor]'})
export class TourAnchorNgxPopperPopoverDirective extends NgxPopperjsDirective implements OnInit {
  // Overwrite parent ngOnInit to do nothing since the content property isn't set yet.
  ngOnInit() {}

  // Call this to initialize the popover once the content has been set
  initialize() {
    super.ngOnInit();
  }
}

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorNgxPopperDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;

  @HostBinding('class.touranchor--is-active')
  public isActive: boolean;

  constructor(private tourService: NgxpTourService,
              private tourStepTemplate: TourStepTemplateService,
              private element: ElementRef,
              @Host() private popoverDirective: TourAnchorNgxPopperPopoverDirective,
  ) {
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    const htmlElement: HTMLElement = this.element.nativeElement;

    this.isActive = true;
    this.tourStepTemplate.templateComponent.step = step;
    step.prevBtnTitle = step.prevBtnTitle || 'Prev';
    step.nextBtnTitle = step.nextBtnTitle || 'Next';
    step.endBtnTitle = step.endBtnTitle || 'End';

    this.popoverDirective.content = this.tourStepTemplate.template;
    this.popoverDirective.targetElement = htmlElement;
    this.popoverDirective.placement = step.placement || NgxPopperjsPlacements.AUTO;
    this.popoverDirective.showTrigger = NgxPopperjsTriggers.none;

    const popperSettings = step.popperSettings;

    if (popperSettings) {
      this.popoverDirective.boundariesElement = popperSettings.boundariesElement || undefined;
      this.popoverDirective.closeOnClickOutside = popperSettings.closeOnClickOutside || false;
      this.popoverDirective.disableAnimation = popperSettings.disableAnimation || false;
      this.popoverDirective.disabled = popperSettings.disabled || false;
      this.popoverDirective.disableStyle = popperSettings.disableStyle || false;
      this.popoverDirective.hideOnClickOutside = popperSettings.hideOnClickOutside || false;
      this.popoverDirective.hideOnScroll = popperSettings.hideOnScroll || false;
      this.popoverDirective.hideTimeout = popperSettings.hideTimeout || 0;
      this.popoverDirective.positionFixed = popperSettings.positionFixed || false;
      this.popoverDirective.showDelay = popperSettings.showDelay || 0;
      this.popoverDirective.showOnStart = popperSettings.showOnStart || false;
      this.popoverDirective.showTrigger = popperSettings.showTrigger || NgxPopperjsTriggers.none;
      this.popoverDirective.timeoutAfterShow = popperSettings.timeoutAfterShow || 0;
    }

    this.popoverDirective.initialize();
    if (typeof step?.popperSettings?.showDelay === 'number') {
      this.popoverDirective.scheduledShow();
    } else {
      this.popoverDirective.show();
    }

    if (!step.preventScrolling) {
      if (!isInViewport(htmlElement, ElementSides.Bottom)) {
        htmlElement.scrollIntoView(false);
      } else if (!isInViewport(htmlElement, ElementSides.Top)) {
        htmlElement.scrollIntoView(true);
      }
    }
  }

  public hideTourStep(): void {
    this.isActive = false;
    this.popoverDirective.hide();
  }
}
