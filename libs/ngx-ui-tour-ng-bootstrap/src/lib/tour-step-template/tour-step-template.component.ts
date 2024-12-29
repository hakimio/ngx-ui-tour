import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    Input,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {TourStepTemplateService} from '../tour-step-template.service';
import {NgbTourService} from '../ng-bootstrap-tour.service';
import type {IStepOption} from '../../public_api';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {

    @ViewChild('tourStep', {read: TemplateRef, static: true})
    public defaultTourStepTemplate: TemplateRef<{ step: IStepOption }>;

    @Input()
    public stepTemplate: TemplateRef<{ step: IStepOption }>;

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IStepOption }>;

    private readonly tourStepTemplateService = inject(TourStepTemplateService);
    public override readonly tourService = inject(NgbTourService);

    public ngAfterContentInit(): void {
        this.tourStepTemplateService.template =
            this.stepTemplate ||
            this.stepTemplateContent ||
            this.defaultTourStepTemplate;
    }

}
