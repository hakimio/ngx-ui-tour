import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import type {INgbStepOption} from '../../step-option.interface';
import {NgbTourService} from '../../ng-bootstrap-tour.service';

@Component({
    selector: 'tour-default-step-template',
    imports: [],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<INgbStepOption>();
    protected readonly tourService = inject(NgbTourService);

}
