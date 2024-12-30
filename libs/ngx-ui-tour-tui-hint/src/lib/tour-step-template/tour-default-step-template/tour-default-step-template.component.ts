import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import type {ITuiHintStepOption} from '../../step-option.interface';
import {TourTuiHintService} from '../../tour-tui-hint.service';

@Component({
    selector: 'tour-default-step-template',
    imports: [
        TuiButton
    ],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<ITuiHintStepOption>();
    protected readonly tourService = inject(TourTuiHintService);

}
