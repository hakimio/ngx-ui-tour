import {Component, Input, SkipSelf, TemplateRef, ViewChild} from '@angular/core';
import {TUI_DROPDOWN_OPTIONS, TuiDropdownDirective, TuiDropdownOptions} from '@taiga-ui/core';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourTuiDropdownService} from './tour-tui-dropdown.service';

function tourOptionsFactory(defaults: TuiDropdownOptions, tourService: TourTuiDropdownService): TuiDropdownOptions {
    const step = tourService.currentStep;

    return {
        ...defaults,
        align: step.placement?.horizontalDirection ?? defaults.align,
        direction: step.placement?.verticalDirection ?? defaults.direction,
        limitWidth: 'auto',
        minHeight: 170
    }
}

@Component({
    selector: 'tour-anchor-opener',
    providers: [{
        provide: TUI_DROPDOWN_OPTIONS,
        useFactory: tourOptionsFactory,
        deps: [
            [new SkipSelf(), TUI_DROPDOWN_OPTIONS],
            TourTuiDropdownService
        ]
    }],
    styles: [
        `
            :host {
                display: none;
            }
        `
    ],
    template: `
        <span
            [tuiDropdown]="template"
            [tuiDropdownManual]="isShown"
        ></span>
    `
})
export class TourAnchorOpenerComponent {

    template: TemplateRef<never>;

    @ViewChild(TuiDropdownDirective, {static: true})
    dropdown: TuiDropdownDirective;

    @Input()
    isShown = false;

    constructor(
        private readonly tourStepTemplateService: TourStepTemplateService
    ) {
        this.template = tourStepTemplateService.templateComponent.template;
    }

}