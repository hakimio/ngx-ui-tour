import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {StepConfigComponent} from './step-config/step-config.component';
import {TuiDocCodeModule, TuiDocDocumentationModule} from '@taiga-ui/addon-doc';
import {TourServiceApiComponent} from './tour-service-api/tour-service-api.component';
import {UsageComponent} from './usage/usage.component';
import {FaqComponent} from './faq/faq.component';
import {LogoComponent} from './logo/logo.component';
import {
    ProxyTourAnchorDirective,
    TOUR_ANCHOR_DIRECTIVE_TYPE
} from './proxy-tour-anchor.directive';
import {TourAnchorDirective} from 'ngx-ui-tour-core';
import {HotkeysComponent} from './hotkeys/hotkeys.component';
import {ListComponent} from './list/list.component';
import {ListItemComponent} from './list/list-item/list-item.component';
import {EventsComponent} from './events/events.component';
import {CustomTemplateComponent} from './custom-template/custom-template.component';
import {StylingActiveTourAnchorComponent} from './styling-active-tour-anchor/styling-active-tour-anchor.component';
import {DefaultsComponent} from './defaults/defaults.component';
import {PlacementConfigComponent} from './step-config/placement-config.component';


const COMPONENTS = [
    HeaderComponent,
    StepConfigComponent,
    TourServiceApiComponent,
    UsageComponent,
    FaqComponent,
    LogoComponent,
    HotkeysComponent,
    ListComponent,
    ListItemComponent,
    EventsComponent,
    CustomTemplateComponent,
    StylingActiveTourAnchorComponent,
    DefaultsComponent,
    PlacementConfigComponent
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ProxyTourAnchorDirective
    ],
    exports: COMPONENTS,
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiDocDocumentationModule,
        TuiLinkModule,
        TuiDocCodeModule
    ]
})
export class SharedModule {

    // Following workaround is only needed because every parent uses different tour anchor implementation
    static withAnchorDirectiveType<T extends TourAnchorDirective>(anchorDirectiveType: Type<T>): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [{
                provide: TOUR_ANCHOR_DIRECTIVE_TYPE,
                useValue: anchorDirectiveType
            }]
        };
    }

}
