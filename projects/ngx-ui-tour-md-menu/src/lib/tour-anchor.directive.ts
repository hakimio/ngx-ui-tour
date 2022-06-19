import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostBinding,
  Injector,
  Input,
  ViewContainerRef
} from '@angular/core';
import type {OnDestroy, OnInit} from '@angular/core';
import {
  ScrollingUtil,
  TourAnchorDirective,
  TourBackdropService,
  TourState
} from 'ngx-ui-tour-core';
import { Subscription } from 'rxjs';

import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { first } from 'rxjs/operators';
import {NgxmTourService} from './ngx-md-menu-tour.service';
import {IMdStepOption} from './step-option.interface';

@Directive({
  selector: '[tourAnchor]'
})
export class TourAnchorMatMenuDirective
  implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  public opener: TourAnchorOpenerComponent;
  public menuCloseSubscription: Subscription;

  @HostBinding('class.touranchor--is-active') public isActive: boolean;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainer: ViewContainerRef,
    public element: ElementRef,
    private tourService: NgxmTourService,
    private tourStepTemplate: TourStepTemplateService,
    private tourBackdrop: TourBackdropService
  ) {
    this.opener = this.viewContainer.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(
        TourAnchorOpenerComponent
      )
    ).instance;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  // noinspection JSUnusedGlobalSymbols
  public showTourStep(step: IMdStepOption): void {
    const htmlElement: HTMLElement = this.element.nativeElement;

    this.isActive = true;
    this.tourStepTemplate.templateComponent.step = step;
    // Ignore step.placement
    if (!step.disableScrollToAnchor) {
      ScrollingUtil.ensureVisible(htmlElement);
    }
    const trigger = this.opener.trigger;
    (<any>trigger)._element = this.element;

    const menu = this.tourStepTemplate.templateComponent.tourStep;
    trigger.menu = menu;
    menu.xPosition = step.placement?.xPosition || 'after';
    menu.yPosition = step.placement?.yPosition || 'below';
    menu.hasBackdrop = !!step.closeOnOutsideClick;
    trigger.ngAfterContentInit();
    trigger.openMenu();

    if (step.enableBackdrop) {
      this.tourBackdrop.show(this.element, !step.disablePageScrolling);
    } else {
      this.tourBackdrop.close();
    }

    step.prevBtnTitle = step.prevBtnTitle || 'Prev';
    step.nextBtnTitle = step.nextBtnTitle || 'Next';
    step.endBtnTitle = step.endBtnTitle || 'End';

    if (this.menuCloseSubscription) {
      this.menuCloseSubscription.unsubscribe();
    }
    this.menuCloseSubscription = trigger.menuClosed
      .pipe(first())
      .subscribe(() => {
        if (this.tourService.getStatus() !== TourState.OFF) {
          this.tourService.end();
        }
        this.tourBackdrop.close();
      });
  }

  public hideTourStep(): void {
    this.isActive = false;
    if (this.menuCloseSubscription) {
      this.menuCloseSubscription.unsubscribe();
    }
    this.opener.trigger.closeMenu();
    if (this.tourService.getStatus() === TourState.OFF) {
      this.tourBackdrop.close();
    }
  }
}
