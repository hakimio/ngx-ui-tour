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

    public override initialize(steps: T[], stepDefaults?: T) {
        const isIOS = this.config.get('mode') === 'ios';

        stepDefaults ??= {} as T;
        stepDefaults.backdropConfig ??= {};
        stepDefaults.backdropConfig.parentContainer ??= 'ion-app';
        stepDefaults.delayAfterNavigation ??= isIOS ? 700: 500;

        super.initialize(steps, stepDefaults);
    }

    // noinspection JSUnusedGlobalSymbols
    protected override showStep(step: T): Promise<void> {
        // In case "scrollContainer" is already set to HTMLElement, we DO want to set it again since the current
        // html element reference might be already removed from DOM
        if (step.smoothScroll && (!step.scrollContainer || typeof step.scrollContainer !== 'string')) {
            const docEl = this.document.documentElement,
                tabsRouter = docEl.querySelector('ion-router-outlet[tabs=true]') as HTMLElement,
                generalRouter = docEl.querySelector('ion-router-outlet') as HTMLElement,
                router = tabsRouter ?? generalRouter,
                ionContent = router ? router.querySelector(':scope > .ion-page:not(.ion-page-hidden) ion-content') :
                    docEl.querySelector('ion-content');

            step.scrollContainer = ionContent?.shadowRoot.querySelector('[part=scroll]') as HTMLElement;
        }

        return super.showStep(step);
    }

}
