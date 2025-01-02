import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    contentChild, inject,
    input,
    TemplateRef,
    viewChild
} from '@angular/core';
import {Popover} from 'primeng/popover';
import type {PrimeNgStepOption} from '../step-option.interface';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {PrimeNgTourService} from '../prime-ng-tour.service';
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: `
        ::ng-deep .p-popover.tour-step {
            --p-popover-content-padding: 0;
        }
    `
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    public readonly popover = viewChild.required(Popover);
    public readonly stepTemplateContent = contentChild<TemplateRef<{ step: PrimeNgStepOption }>>(TemplateRef);

    public readonly stepTemplate = input<TemplateRef<{ step: PrimeNgStepOption }>>();

    public step!: PrimeNgStepOption;

    protected override tourService = inject(PrimeNgTourService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
