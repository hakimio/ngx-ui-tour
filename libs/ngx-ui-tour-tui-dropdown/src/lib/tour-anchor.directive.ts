import {
    Directive,
    ElementRef,
    inject,
    Input,
    type OnDestroy,
    type OnInit,
    signal,
    ViewContainerRef
} from '@angular/core';
import type {TourAnchorDirective} from 'ngx-ui-tour-core';
import type {ITuiDdStepOption} from './step-option.interface';
import {TourTuiDropdownService} from './tour-tui-dropdown.service';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';

@Directive({
    selector: '[tourAnchor]',
    host: {
        '[class.touranchor--is-active]': 'isActive()'
    }
})
export class TourAnchorTuiDropdownDirective implements OnInit, OnDestroy, TourAnchorDirective {

    @Input()
    tourAnchor: string;

    isActive = signal(false);

    private opener: TourAnchorOpenerComponent;
    public readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly tourService = inject(TourTuiDropdownService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);
    private readonly viewContainer = inject(ViewContainerRef);

    ngOnInit(): void {
        this.tourService.register(this.tourAnchor, this);
    }

    public ngOnDestroy(): void {
        this.tourService.unregister(this.tourAnchor);
    }

    private createOpener() {
        this.opener = this.viewContainer.createComponent(TourAnchorOpenerComponent).instance;
    }

    // noinspection JSUnusedGlobalSymbols
    showTourStep(step: ITuiDdStepOption) {
        const templateComponent = this.tourStepTemplateService.templateComponent;

        templateComponent.step = step;
        this.isActive.set(true);

        if (!this.opener) {
            this.createOpener();
        }

        const tuiDropdown = this.opener.dropdown;

        (tuiDropdown as unknown as {el: HTMLElement}).el = this.element.nativeElement;

        this.opener.isShown.set(true);

        const offset = step.backdropConfig?.offset;

        if (offset) {
            this.opener.offset.set(offset + 4);
        }
    }

    // noinspection JSUnusedGlobalSymbols
    hideTourStep() {
        this.isActive.set(false);
        this.opener.isShown.set(false);
    }

}
