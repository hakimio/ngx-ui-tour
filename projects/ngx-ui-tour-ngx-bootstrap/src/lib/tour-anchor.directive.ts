import { Directive, ElementRef, Host, HostBinding, Input, Renderer2, RendererFactory2 } from '@angular/core';
import type {OnDestroy, OnInit} from '@angular/core';
import { PopoverDirective } from 'ngx-bootstrap/popover';
import {GoToNextOnAnchorUtil, ScrollingUtil, TourAnchorDirective, TourBackdropService, TourState} from 'ngx-ui-tour-core';
import { INgxbStepOption as IStepOption } from './step-option.interface';

import { NgxbTourService } from './ngx-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';

@Directive({ selector: '[tourAnchor]' })
export class TourAnchorNgxBootstrapPopoverDirective extends PopoverDirective { }

@Directive({
  selector: '[tourAnchor]'
})
export class TourAnchorNgxBootstrapDirective
  implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;

  @HostBinding('class.touranchor--is-active')
  public isActive: boolean;

  private renderer: Renderer2;

  constructor(
    private tourService: NgxbTourService,
    private tourStepTemplate: TourStepTemplateService,
    private element: ElementRef,
    @Host() private popoverDirective: TourAnchorNgxBootstrapPopoverDirective,
    private tourBackdrop: TourBackdropService,
    private rendererFactory: RendererFactory2
  ) {
    this.popoverDirective.triggers = '';
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
    GoToNextOnAnchorUtil.unregister(this.tourAnchor);
  }

  // noinspection JSUnusedGlobalSymbols
  public showTourStep(step: IStepOption): void {
    const htmlElement: HTMLElement = this.element.nativeElement;

    this.isActive = true;
    this.popoverDirective.popover = this.tourStepTemplate.template;
    this.popoverDirective.popoverContext = { step };
    this.popoverDirective.popoverTitle = step.title;
    this.popoverDirective.container = 'body';
    this.popoverDirective.containerClass = 'ngx-bootstrap';
    if (step.containerClass) {
      this.popoverDirective.containerClass += ` ${step.containerClass}`;
    }
    this.popoverDirective.placement = step.placement || 'top';
    step.prevBtnTitle = step.prevBtnTitle || 'Prev';
    step.nextBtnTitle = step.nextBtnTitle || 'Next';
    step.endBtnTitle = step.endBtnTitle || 'End';
    GoToNextOnAnchorUtil.register(htmlElement,step, this.tourService, this.renderer, this.tourAnchor);
    this.popoverDirective.show();
    if (!step.disableScrollToAnchor) {
      ScrollingUtil.ensureVisible(htmlElement);
    }
    if (step.enableBackdrop) {
      this.tourBackdrop.show(this.element);
    } else {
      this.tourBackdrop.close();
    }
  }

  public hideTourStep(): void {
    this.isActive = false;
    this.popoverDirective.hide();
    if (this.tourService.getStatus() === TourState.OFF) {
      this.tourBackdrop.close();
    }
  }
}
