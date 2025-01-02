import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    Input,
    signal,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {createAnimation, IonPopover} from '@ionic/angular/standalone';
import {NgTemplateOutlet} from '@angular/common';
import type {IonStepOption} from '../step-option.interface';
import {TourStepTemplateService} from '../tour-step-template.service';
import {IonTourService} from '../ion-tour.service';
import {TourDefaultStepTemplateComponent} from './tour-default-step-template/tour-default-step-template.component';

@Component({
    selector: 'tour-step-template',
    templateUrl: './tour-step-template.component.html',
    styleUrls: ['./tour-step-template.component.scss'],
    imports: [
        NgTemplateOutlet,
        IonPopover,
        TourDefaultStepTemplateComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {

    @ViewChild(IonPopover, {static: true})
    public ionPopover: IonPopover;

    @Input()
    public stepTemplate: TemplateRef<{ step: IonStepOption }>;

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IonStepOption }>;

    public step = signal<IonStepOption>({});
    noopLeaveAnimation = () => createAnimation();

    protected override readonly tourService = inject(IonTourService);
    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    public ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }

}
