import {AfterContentInit, Component, ContentChild, inject, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgIf} from '@angular/common';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {TourStepTemplateService} from '../tour-step-template.service';
import {NgxbTourService} from '../ngx-bootstrap-tour.service';
import {IStepOption} from '../../public_api';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    standalone: true,
    imports: [
        NgIf
    ]
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {

    @ViewChild('tourStep', {read: TemplateRef, static: true})
    public defaultTourStepTemplate: TemplateRef<{ step: IStepOption }>;

    @Input()
    public stepTemplate: TemplateRef<{ step: IStepOption }>;

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IStepOption }>;

    private readonly tourStepTemplateService = inject(TourStepTemplateService);
    public readonly tourService = inject(NgxbTourService);

    public ngAfterContentInit(): void {
        this.tourStepTemplateService.template =
            this.stepTemplate ||
            this.stepTemplateContent ||
            this.defaultTourStepTemplate;
    }

}
