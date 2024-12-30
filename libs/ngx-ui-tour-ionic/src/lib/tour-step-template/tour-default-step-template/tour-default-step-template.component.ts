import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import type {IonStepOption} from '../../step-option.interface';
import {IonTourService} from '../../ion-tour.service';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {chevronBackOutline, chevronForwardOutline, closeOutline} from 'ionicons/icons';

@Component({
    selector: 'tour-default-step-template',
    imports: [
        IonButton,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle,
        IonIcon
    ],
    templateUrl: './tour-default-step-template.component.html',
    styleUrl: './tour-default-step-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDefaultStepTemplateComponent {

    readonly step = input.required<IonStepOption>();
    protected readonly tourService = inject(IonTourService);

    constructor() {
        this.addIonicIcons();
    }

    private addIonicIcons() {
        addIcons({
            closeOutline,
            chevronBackOutline,
            chevronForwardOutline
        });
    }

}
