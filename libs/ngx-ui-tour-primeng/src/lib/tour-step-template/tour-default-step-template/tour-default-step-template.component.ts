import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import type {PrimeNgStepOption} from '../../step-option.interface';
import {PrimeNgTourService} from '../../prime-ng-tour.service';
import {Button} from 'primeng/button';

@Component({
    selector: 'tour-default-step-template',
    imports: [
        Button
    ],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.width]': 'step().stepDimensions?.width',
        '[style.min-width]': 'step().stepDimensions?.minWidth',
        '[style.max-width]': 'step().stepDimensions?.maxWidth'
    }
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<PrimeNgStepOption>();
    protected readonly tourService = inject(PrimeNgTourService);

}
