import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
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
import {NgZorroTourService} from '../ng-zorro-tour.service';
import {TourStepTemplateService} from '../tour-step-template.service';
import type {NgZorroStepOption} from '../step-option.interface';
import {NgTemplateOutlet} from '@angular/common';
import {TourDefaultStepTemplateComponent} from './tour-default-step-template/tour-default-step-template.component';

@Component({
    selector: 'tour-step-template',
    imports: [
        NgTemplateOutlet,
        TourDefaultStepTemplateComponent
    ],
    styles: `
        /*noinspection CssUnusedSymbol*/
        ::ng-deep .tour-step.ant-popover .ant-popover-inner-content {
            width: auto;
            padding: 0;
        }
    `,
    templateUrl: './tour-step-template.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    public readonly stepTemplateContent = contentChild<TemplateRef<{ step: NgZorroStepOption }>>(TemplateRef);
    public readonly stepTemplate = input<TemplateRef<{ step: NgZorroStepOption }>>();
    public readonly template = viewChild.required<TemplateRef<never>>('content');

    public step!: NgZorroStepOption;

    protected override readonly tourService = inject(NgZorroTourService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
