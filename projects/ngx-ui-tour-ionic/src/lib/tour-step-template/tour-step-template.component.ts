import {AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {createAnimation, IonicModule, IonPopover} from '@ionic/angular';
import {NgIf, NgTemplateOutlet} from '@angular/common';
import {IonStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {IonTourService} from '../ion-tour.service';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgTemplateOutlet,
        NgIf
    ]
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    @ViewChild(IonPopover, {static: true})
    public ionPopover: IonPopover;

    @Input()
    public stepTemplate: TemplateRef<{ step: IonStepOption }>;

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IonStepOption }>;

    public step: IonStepOption = {};
    noopLeaveAnimation = () => createAnimation();

    constructor(
        private readonly tourStepTemplateService: TourStepTemplateService,
        public override readonly tourService: IonTourService
    ) {
        super(tourService);
    }

    public ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}