import type {IonStepOption} from './step-option.interface';
import {TourService} from 'ngx-ui-tour-core';
import {DOCUMENT, inject, Injectable} from '@angular/core';


@Injectable()
export class IonTourService<T extends IonStepOption = IonStepOption> extends TourService<T> {

    private readonly document = inject(DOCUMENT);

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
