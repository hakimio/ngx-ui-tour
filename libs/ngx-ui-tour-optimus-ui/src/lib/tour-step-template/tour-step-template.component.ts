import {
    type AfterViewInit,
    Component,
    contentChild, inject,
    input,
    TemplateRef,
    viewChild
} from '@angular/core';
import {Popover} from '@openng/optimus-ui/popover';
import type {OptimusUiStepOption} from '../step-option.interface';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {OptimusUiTourService} from '../optimus-ui-tour.service';
import {TourStepTemplateService} from '../tour-step-template.service';
import {NgTemplateOutlet} from '@angular/common';
import {TourDefaultStepTemplateComponent} from './tour-default-step-template/tour-default-step-template.component';

@Component({
    selector: 'tour-step-template',
    imports: [
        Popover,
        NgTemplateOutlet,
        TourDefaultStepTemplateComponent
    ],
    templateUrl: './tour-step-template.component.html',
    styles: `
        ::ng-deep .p-popover.tour-step {
            --p-popover-content-padding: 0;
        }
    `
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    public readonly popover = viewChild.required(Popover);
    public readonly stepTemplateContent = contentChild<TemplateRef<{ step: OptimusUiStepOption }>>(TemplateRef);

    public readonly stepTemplate = input<TemplateRef<{ step: OptimusUiStepOption }>>();

    public step!: OptimusUiStepOption;

    protected override tourService = inject(OptimusUiTourService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
