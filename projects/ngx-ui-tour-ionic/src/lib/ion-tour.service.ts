import {IonStepOption} from './step-option.interface';
import {TourService} from 'ngx-ui-tour-core';
import {inject, Injectable} from '@angular/core';
import {Config} from '@ionic/angular';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class IonTourService<T extends IonStepOption = IonStepOption> extends TourService<T> {

    private readonly config = inject(Config);
    private readonly document = inject(DOCUMENT);

    public initialize(steps: T[], stepDefaults?: T) {
        const isIOS = this.config.get('mode') === 'ios';

        stepDefaults ??= {} as T;
        stepDefaults.backdropConfig ??= {};
        stepDefaults.backdropConfig.parentContainer ??= 'ion-app';
        stepDefaults.delayAfterNavigation ??= isIOS ? 700: 500;

        super.initialize(steps, stepDefaults);
    }

    // noinspection JSUnusedGlobalSymbols
    protected showStep(step: T): Promise<void> {
        // In case "scrollContainer" is already set to HTMLElement, we DO want to set it again since the current
        // html element reference might be already removed from DOM
        if (step.smoothScroll && (!step.scrollContainer || typeof step.scrollContainer !== 'string')) {
            const ionContentSelector = '.ion-page:not(.ion-page-hidden):not(ion-app) ion-content, ion-app > ion-content',
                ionContent = this.document.documentElement.querySelector(ionContentSelector);

            step.scrollContainer = ionContent?.shadowRoot.querySelector('[part=scroll]') as HTMLElement;
        }

        return super.showStep(step);
    }

}
