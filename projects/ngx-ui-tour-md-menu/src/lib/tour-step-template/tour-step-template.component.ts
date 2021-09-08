import {AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {MatMenu} from '@angular/material/menu';
import {IMdStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {NgxmTourService} from '../ngx-md-menu-tour.service';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss']
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    @ViewChild(MatMenu)
    public tourStep: MatMenu;

    @Input()
    public stepTemplate: TemplateRef<{ step: IMdStepOption }>;

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IMdStepOption }>;

    public step: IMdStepOption = {};

    constructor(
        private tourStepTemplateService: TourStepTemplateService,
        public tourService: NgxmTourService
    ) {
        super(tourService);
    }

    public ngAfterViewInit(): void {
        this.tourStepTemplateService.templateComponent = this;
    }

}
