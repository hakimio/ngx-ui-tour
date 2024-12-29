import {TuiButton} from '@taiga-ui/core';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    Input,
    TemplateRef,
    ViewChild
} from '@angular/core';
import type {ITuiDdStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {TourTuiDropdownService} from '../tour-tui-dropdown.service';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    imports: [
        NgTemplateOutlet,
        TuiButton
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    @Input()
    stepTemplate: TemplateRef<{ step: ITuiDdStepOption }>;

    @ContentChild(TemplateRef)
    stepTemplateContent: TemplateRef<{ step: ITuiDdStepOption }>;

    @ViewChild('tuiDropdownTemplate')
    template: TemplateRef<never>;

    step: ITuiDdStepOption = {};

    protected override readonly tourService = inject(TourTuiDropdownService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
