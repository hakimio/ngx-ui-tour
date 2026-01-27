import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    contentChild,
    inject,
    input,
    TemplateRef,
    viewChild
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

    public readonly defaultTourStepTemplate = viewChild('tourStep', {read: TemplateRef});
    public readonly stepTemplate = input<TemplateRef<{ step: IStepOption }>>();
    public readonly stepTemplateContent = contentChild(TemplateRef);

    private readonly tourStepTemplateService = inject(TourStepTemplateService);
    public override readonly tourService = inject(NgbTourService);

    public ngAfterContentInit(): void {
        this.tourStepTemplateService.template =
            this.stepTemplate() ||
            this.stepTemplateContent() ||
            this.defaultTourStepTemplate();
    }

}
