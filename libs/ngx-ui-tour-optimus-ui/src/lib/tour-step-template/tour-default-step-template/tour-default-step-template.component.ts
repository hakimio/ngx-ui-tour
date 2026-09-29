import {Component, inject, input} from '@angular/core';
import type {OptimusUiStepOption} from '../../step-option.interface';
import {OptimusUiTourService} from '../../optimus-ui-tour.service';
import {Button} from '@openng/optimus-ui/button';

@Component({
    selector: 'tour-default-step-template',
    imports: [
        Button
    ],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    host: {
        '[style.width]': 'step().stepDimensions?.width',
        '[style.min-width]': 'step().stepDimensions?.minWidth',
        '[style.max-width]': 'step().stepDimensions?.maxWidth'
    }
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<OptimusUiStepOption>();
    protected readonly tourService = inject(OptimusUiTourService);

}
