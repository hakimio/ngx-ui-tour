import {ModuleWithProviders, NgModule} from '@angular/core';
import {TourBackdropService, TourModule, TourService, TourResizeObserverService} from 'ngx-ui-tour-core';
import {CommonModule} from '@angular/common';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiHintDirective} from './tour-anchor.directive';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourTuiHintService} from './tour-tui-hint.service';
import {TourAnchorOpenerComponent} from './tour-anchor-opener.component';

@NgModule({
    imports: [
        CommonModule,
        TourModule,
        TuiHintModule,
        TuiButtonModule
    ],
    declarations: [
        TourStepTemplateComponent,
        TourAnchorTuiHintDirective,
        TourAnchorOpenerComponent
    ],
    exports: [
        TourStepTemplateComponent,
        TourAnchorTuiHintDirective
    ]
})
export class TourTuiHintModule {

    public static forRoot(): ModuleWithProviders<TourTuiHintModule> {
        return {
            ngModule: TourTuiHintModule,
            providers: [
                TourStepTemplateService,
                TourBackdropService,
                TourResizeObserverService,
                TourService,
                TourTuiHintService
            ]
        };
    }

}
