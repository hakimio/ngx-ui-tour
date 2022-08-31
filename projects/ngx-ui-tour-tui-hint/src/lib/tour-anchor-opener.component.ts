import {Component, Input, SkipSelf, TemplateRef, ViewChild} from '@angular/core';
import {TUI_HINT_OPTIONS, TuiHintDirective, TuiHintOptions} from '@taiga-ui/core';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourTuiHintService} from './tour-tui-hint.service';

function tourOptionsFactory(defaults: TuiHintOptions, tourService: TourTuiHintService): TuiHintOptions {
    const step = tourService.currentStep;

    return {
        ...defaults,
        direction: step.placement ?? defaults.direction,
        appearance: 'onDark'
    }
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
            [tuiHintManual]="isShown"
        ></span>
    `
})
export class TourAnchorOpenerComponent {

    template: TemplateRef<never>;

    @ViewChild(TuiHintDirective, {static: true})
    hint: TuiHintDirective<any>;

    @Input()
    isShown = false;

    constructor(
        private readonly tourStepTemplateService: TourStepTemplateService
    ) {
        this.template = tourStepTemplateService.templateComponent.template;
    }

}