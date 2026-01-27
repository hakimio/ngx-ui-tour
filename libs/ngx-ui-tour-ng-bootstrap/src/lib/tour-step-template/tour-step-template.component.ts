import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    input,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {TourStepTemplateService} from '../tour-step-template.service';
import {NgbTourService} from '../ng-bootstrap-tour.service';
import type {IStepOption} from '../../public_api';
import {TourDefaultStepTemplateComponent} from './tour-default-step-template/tour-default-step-template.component';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    imports: [
        TourDefaultStepTemplateComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {

    @ViewChild('tourStep', {read: TemplateRef, static: true})
    public defaultTourStepTemplate: TemplateRef<{ step: IStepOption }>;

    public readonly stepTemplate = input<TemplateRef<{ step: IStepOption }>>();

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IStepOption }>;

    private readonly tourStepTemplateService = inject(TourStepTemplateService);
    public override readonly tourService = inject(NgbTourService);

    public ngAfterContentInit(): void {
        this.tourStepTemplateService.template =
            this.stepTemplate() ||
            this.stepTemplateContent ||
            this.defaultTourStepTemplate;
    }

}
