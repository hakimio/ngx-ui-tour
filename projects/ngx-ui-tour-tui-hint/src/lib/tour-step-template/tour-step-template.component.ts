import {AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {ITuiHintStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {TourTuiHintService} from '../tour-tui-hint.service';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {NgTemplateOutlet} from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    imports: [
        NgTemplateOutlet,
        TuiButtonModule
    ]
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    @Input()
    stepTemplate: TemplateRef<{ step: ITuiHintStepOption }>;

    @ContentChild(TemplateRef)
    stepTemplateContent: TemplateRef<{ step: ITuiHintStepOption }>;

    @ViewChild('tuiDropdownTemplate')
    template: TemplateRef<never>;

    step: ITuiHintStepOption = {};

    constructor(
        private readonly tourStepTemplateService: TourStepTemplateService,
        tourService: TourTuiHintService
    ) {
        super(tourService);
    }

    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
