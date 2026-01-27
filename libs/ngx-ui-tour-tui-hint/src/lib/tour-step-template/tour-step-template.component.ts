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
import type {ITuiHintStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {TourTuiHintService} from '../tour-tui-hint.service';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {NgTemplateOutlet} from '@angular/common';
import {TourDefaultStepTemplateComponent} from './tour-default-step-template/tour-default-step-template.component';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    imports: [
        NgTemplateOutlet,
        TourDefaultStepTemplateComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    readonly stepTemplate = input<TemplateRef<{ step: ITuiHintStepOption }>>();

    readonly stepTemplateContent = contentChild(TemplateRef);
    readonly template = viewChild<TemplateRef<never>>('tuiDropdownTemplate');

    step: ITuiHintStepOption = {};

    protected override readonly tourService = inject(TourTuiHintService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
