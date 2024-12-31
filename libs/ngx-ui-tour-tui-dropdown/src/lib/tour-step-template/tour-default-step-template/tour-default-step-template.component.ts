import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import type {ITuiDdStepOption} from '../../step-option.interface';
import {TourTuiDropdownService} from '../../tour-tui-dropdown.service';

@Component({
    selector: 'tour-dd-default-step-template',
    imports: [
        TuiButton
    ],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<ITuiDdStepOption>();
    protected readonly tourService = inject(TourTuiDropdownService);

}
