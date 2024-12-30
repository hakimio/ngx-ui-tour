import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import type {IMdStepOption} from '../../step-option.interface';
import {NgxmTourService} from '../../ngx-md-menu-tour.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'tour-default-step-template',
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIcon
    ],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<IMdStepOption>();
    protected tourService = inject(NgxmTourService);

}
