import {UsageComponent} from './usage/usage.component';
import {StepConfigComponent} from './step-config/step-config.component';
import {PlacementConfigComponent} from './step-config/placement-config.component';
import {TourServiceApiComponent} from './tour-service-api/tour-service-api.component';
import {EventsComponent} from './events/events.component';
import {FaqComponent} from './faq/faq.component';
import {HotkeysComponent} from './hotkeys/hotkeys.component';
import {DefaultsComponent} from './defaults/defaults.component';
import {StylingActiveTourAnchorComponent} from './styling-active-tour-anchor/styling-active-tour-anchor.component';
import {HeaderComponent} from './header/header.component';
import type {TourAnchorDirective} from 'ngx-ui-tour-core';
import type {Provider, Type} from '@angular/core';
import {TOUR_ANCHOR_DIRECTIVE_TYPE} from './proxy-tour-anchor.directive';
import {CustomTemplateComponent} from './custom-template/custom-template.component';
import {
    TargetingThirdPartyElementsComponent
} from './targeting-third-party-elements/targeting-third-party-elements.component';
import {InstallationComponent} from './installation/installation.component';

export const SHARED_COMPONENTS = [
    HeaderComponent,
    UsageComponent,
    StepConfigComponent,
    PlacementConfigComponent,
    TourServiceApiComponent,
    EventsComponent,
    FaqComponent,
    HotkeysComponent,
    DefaultsComponent,
    CustomTemplateComponent,
    StylingActiveTourAnchorComponent,
    TargetingThirdPartyElementsComponent,
    InstallationComponent
];

export function provideTourDirective<T extends TourAnchorDirective>(anchorDirectiveType: Type<T>): Provider {
    return {
        provide: TOUR_ANCHOR_DIRECTIVE_TYPE,
        useValue: anchorDirectiveType
    };
}
