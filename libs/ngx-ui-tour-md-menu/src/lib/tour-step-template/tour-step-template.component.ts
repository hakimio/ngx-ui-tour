import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    contentChild,
    inject,
    input,
    TemplateRef,
    viewChild
} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {MatMenu} from '@angular/material/menu';
import type {IMdStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {NgxmTourService} from '../ngx-md-menu-tour.service';
import {NgTemplateOutlet} from '@angular/common';
import {TourDefaultStepTemplateComponent} from './tour-default-step-template/tour-default-step-template.component';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    imports: [
        MatMenu,
        NgTemplateOutlet,
        TourDefaultStepTemplateComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    public readonly tourStep = viewChild(MatMenu);
    public readonly stepTemplate = input<TemplateRef<{ step: IMdStepOption }>>();
    public readonly stepTemplateContent = contentChild(TemplateRef);

    public step: IMdStepOption = {};

    protected override tourService = inject(NgxmTourService);
    private tourStepTemplateService = inject(TourStepTemplateService);

    public ngAfterViewInit(): void {
        this.tourStepTemplateService.templateComponent = this;
    }

}
