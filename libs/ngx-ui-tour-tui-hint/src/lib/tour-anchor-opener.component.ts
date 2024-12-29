import {ChangeDetectionStrategy, Component, inject, signal, SkipSelf, type TemplateRef, ViewChild} from '@angular/core';
import type {TuiHintOptions} from '@taiga-ui/core';
import {TUI_HINT_OPTIONS, TuiHint, TuiHintDirective} from '@taiga-ui/core';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourTuiHintService} from './tour-tui-hint.service';

function tourOptionsFactory(defaults: TuiHintOptions, tourService: TourTuiHintService): TuiHintOptions {
    const step = tourService.currentStep;

    return {
        ...defaults,
        direction: step.placement ?? defaults.direction,
        appearance: 'ngx-ui-tour'
    };
}

@Component({
    selector: 'tour-anchor-opener',
    providers: [{
        provide: TUI_HINT_OPTIONS,
        useFactory: tourOptionsFactory,
        deps: [
            [new SkipSelf(), TUI_HINT_OPTIONS],
            TourTuiHintService
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
            [tuiHint]="template"
            [tuiHintManual]="isShown()"
        ></span>
    `,
    imports: [
        TuiHint
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourAnchorOpenerComponent {

    template: TemplateRef<never>;

    @ViewChild(TuiHintDirective, {static: true})
    hint: TuiHintDirective<void>;

    isShown = signal(false);

    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    constructor() {
        this.template = this.tourStepTemplateService.templateComponent.template;
    }

}