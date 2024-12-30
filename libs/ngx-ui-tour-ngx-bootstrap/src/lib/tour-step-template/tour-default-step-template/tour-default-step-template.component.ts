import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import type {INgxbStepOption} from '../../step-option.interface';
import {NgxbTourService} from '../../ngx-bootstrap-tour.service';

@Component({
    selector: 'tour-default-step-template',
    imports: [],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<INgxbStepOption>();
    protected readonly tourService = inject(NgxbTourService);

}
