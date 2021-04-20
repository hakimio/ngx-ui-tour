import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';
import type {OnDestroy, OnInit} from '@angular/core';
import { PopperController, Placements, Triggers } from 'ngx-popper';
import {ScrollingUtil, TourAnchorDirective} from 'ngx-ui-tour-core';

import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { INgxpStepOption as IStepOption } from './step-option.interface';

@Directive({ selector: '[tourAnchor]'})
export class TourAnchorNgxPopperPopoverDirective extends PopperController implements OnInit {
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

  // noinspection JSUnusedGlobalSymbols
  public showTourStep(step: IStepOption): void {
    const htmlElement: HTMLElement = this.element.nativeElement;

    this.isActive = true;
    this.tourStepTemplate.templateComponent.step = step;
    step.prevBtnTitle = step.prevBtnTitle || 'Prev';
    step.nextBtnTitle = step.nextBtnTitle || 'Next';
    step.endBtnTitle = step.endBtnTitle || 'End';

    this.popoverDirective.content = this.tourStepTemplate.template;
    this.popoverDirective.targetElement = htmlElement;
    this.popoverDirective.placement = step.placement || Placements.Auto;
    this.popoverDirective.showTrigger = Triggers.NONE;

    if (step.popperSettings) {
      this.popoverDirective.boundariesElement = step.popperSettings.boundariesElement || undefined;
      this.popoverDirective.closeOnClickOutside = step.popperSettings.closeOnClickOutside || false;
      this.popoverDirective.disableAnimation = step.popperSettings.disableAnimation || false;
      this.popoverDirective.disabled = step.popperSettings.disabled || false;
      this.popoverDirective.disableStyle = step.popperSettings.disableStyle || false;
      this.popoverDirective.hideOnClickOutside = step.popperSettings.hideOnClickOutside || false;
      this.popoverDirective.hideOnScroll = step.popperSettings.hideOnScroll || false;
      this.popoverDirective.hideTimeout = step.popperSettings.hideTimeout || 0;
      this.popoverDirective.positionFixed = step.popperSettings.positionFixed || false;
      this.popoverDirective.showDelay = step.popperSettings.showDelay || 0;
      this.popoverDirective.showOnStart = step.popperSettings.showOnStart || false;
      this.popoverDirective.showTrigger = step.popperSettings.showTrigger || Triggers.NONE;
      this.popoverDirective.timeoutAfterShow = step.popperSettings.timeoutAfterShow || 0;

      // TODO: Can these even get passed in via json?
      // this.popoverDirective.popperModifiers = step.popperSettings.popperModifiers || undefined;
      // this.popoverDirective.popperOnHidden = step.popperSettings.popperOnHidden || undefined;
      // this.popoverDirective.popperOnShown = step.popperSettings.popperOnShown || undefined;
    }

    this.popoverDirective.initialize();
    if (step.hasOwnProperty('popperSettings') && step.popperSettings.hasOwnProperty('showDelay')) {
      this.popoverDirective.scheduledShow();
    } else {
      this.popoverDirective.show();
    }

    if (!step.preventScrolling) {
      ScrollingUtil.ensureVisible(htmlElement);
    }
  }

  public hideTourStep(): void {
    this.isActive = false;
    this.popoverDirective.hide();
  }
}
