import {ChangeDetectionStrategy, Component, inject, signal, SkipSelf, type TemplateRef, viewChild} from '@angular/core';
import {
    TUI_DROPDOWN_OPTIONS,
    TuiDropdown,
    TuiDropdownDirective,
    type TuiDropdownOptions,
    TuiDropdownPosition
} from '@taiga-ui/core';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourTuiDropdownService} from './tour-tui-dropdown.service';

function tourOptionsFactory(defaults: TuiDropdownOptions, tourService: TourTuiDropdownService): TuiDropdownOptions {
    const step = tourService.currentStep;

    return {
        ...defaults,
        align: step.placement?.horizontalDirection ?? defaults.align,
        direction: step.placement?.verticalDirection ?? defaults.direction,
        limitWidth: 'auto',
        minHeight: 170,
        appearance: 'ngx-ui-tour'
    };
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
            [tuiDropdownManual]="isShown()"
            [tuiDropdownOffset]="offset()"
        ></span>
    `,
    imports: [TuiDropdown],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourAnchorOpenerComponent {

    template: TemplateRef<never>;

    dropdown = viewChild.required(TuiDropdownDirective);
    dropdownPosition = viewChild.required(TuiDropdownDirective, {read: TuiDropdownPosition});

    isShown = signal(false);
    offset = signal(4);

    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    constructor() {
        this.template = this.tourStepTemplateService.templateComponent.template;
    }

}
