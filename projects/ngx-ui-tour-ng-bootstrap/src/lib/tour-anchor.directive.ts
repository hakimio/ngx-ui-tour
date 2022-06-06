import { Directive, ElementRef, Host, HostBinding, Input, Renderer2, RendererFactory2 } from '@angular/core';
import type {OnDestroy, OnInit} from '@angular/core';
import { NgbPopover, Placement } from '@ng-bootstrap/ng-bootstrap';
import {GoToNextOnAnchorUtil, ScrollingUtil, TourAnchorDirective, TourBackdropService, TourState} from 'ngx-ui-tour-core';

import { NgbTourService } from './ng-bootstrap-tour.service';
import { INgbStepOption } from './step-option.interface';
import { TourStepTemplateService } from './tour-step-template.service';


@Directive({ selector: '[tourAnchor]' })
export class TourAnchorNgBootstrapPopoverDirective extends NgbPopover { }

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorNgBootstrapDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;

  @HostBinding('class.touranchor--is-active')
  public isActive: boolean;

  private renderer: Renderer2;

  constructor(
    private tourService: NgbTourService,
    private tourStepTemplate: TourStepTemplateService,
    private element: ElementRef,
    @Host() private popoverDirective: TourAnchorNgBootstrapPopoverDirective,
    private tourBackdrop: TourBackdropService,
    private rendererFactory: RendererFactory2
  ) {
    this.popoverDirective.autoClose = false;
    this.popoverDirective.triggers = '';
    this.popoverDirective.toggle = () => { };
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
  public showTourStep(step: INgbStepOption): void {
    const htmlElement: HTMLElement = this.element.nativeElement;

    this.isActive = true;
    this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
    this.popoverDirective.popoverTitle = step.title;
    this.popoverDirective.container =  'body';
    this.popoverDirective.placement = <Placement>(step.placement || 'top')
      .replace('before', 'left').replace('after', 'right')
      .replace('below', 'bottom').replace('above', 'top');
    step.prevBtnTitle = step.prevBtnTitle || 'Prev';
    step.nextBtnTitle = step.nextBtnTitle || 'Next';
    step.endBtnTitle = step.endBtnTitle || 'End';

    GoToNextOnAnchorUtil.register(htmlElement,step, this.tourService, this.renderer, this.tourAnchor);

    this.popoverDirective.open({ step });
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
    if (this.tourService.getStatus() === TourState.OFF) {
      this.tourBackdrop.close();
    }
    this.popoverDirective.close();
  }
}
