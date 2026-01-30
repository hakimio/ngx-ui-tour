import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import type {NgZorroStepOption} from '../../step-option.interface';
import {NgZorroTourService} from '../../ng-zorro-tour.service';
import {NzIconDirective, provideNzIconsPatch} from 'ng-zorro-antd/icon';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {CloseOutline, LeftOutline, RightOutline} from '@ant-design/icons-angular/icons';

@Component({
    selector: 'tour-default-step-template',
    imports: [
        NzIconDirective,
        NzButtonComponent
    ],
    providers: [
        provideNzIconsPatch([CloseOutline, LeftOutline, RightOutline])
    ],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<NgZorroStepOption>();
    protected readonly tourService = inject(NgZorroTourService);

}
