import {AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {ITuiDdStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {TourTuiDropdownService} from '../tour-tui-dropdown.service';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss']
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    @Input()
    stepTemplate: TemplateRef<{step: ITuiDdStepOption}>;

    @ContentChild(TemplateRef)
    stepTemplateContent: TemplateRef<{step: ITuiDdStepOption}>;

    @ViewChild('tuiDropdownTemplate')
    template: TemplateRef<never>;

    step: ITuiDdStepOption = {};

    constructor(
        private readonly tourStepTemplateService: TourStepTemplateService,
        tourService: TourTuiDropdownService
    ) {
        super(tourService);
    }

    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
