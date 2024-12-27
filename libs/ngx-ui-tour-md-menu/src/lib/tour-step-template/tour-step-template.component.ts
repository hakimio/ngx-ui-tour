import {AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {MatMenu} from '@angular/material/menu';
import {IMdStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {NgxmTourService} from '../ngx-md-menu-tour.service';
import {MatCardModule} from '@angular/material/card';
import {NgTemplateOutlet} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    imports: [
        MatCardModule,
        MatMenu,
        NgTemplateOutlet,
        MatButton,
        MatIconButton,
        MatIcon
    ]
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
        public override tourService: NgxmTourService
    ) {
        super(tourService);
    }

    public ngAfterViewInit(): void {
        this.tourStepTemplateService.templateComponent = this;
    }

}
