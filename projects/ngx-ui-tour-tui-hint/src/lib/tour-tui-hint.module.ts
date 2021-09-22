import {ModuleWithProviders, NgModule} from '@angular/core';
import {TourBackdropService, TourModule, TourService} from 'ngx-ui-tour-core';
import {CommonModule} from '@angular/common';
import {TuiButtonModule, TuiManualHintModule} from '@taiga-ui/core';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiHintDirective} from './tour-anchor.directive';
import {TourStepTemplateService} from './tour-step-template.service';
import {TourTuiHintService} from './tour-tui-hint.service';

const COMPONENTS = [
    TourStepTemplateComponent,
    TourAnchorTuiHintDirective
];

@NgModule({
    imports: [
        CommonModule,
        TourModule,
        TuiManualHintModule,
        TuiButtonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TourTuiHintModule {

    public static forRoot(): ModuleWithProviders<TourTuiHintModule> {
        return {
            ngModule: TourTuiHintModule,
            providers: [
                TourStepTemplateService,
                TourBackdropService,
                TourService,
                TourTuiHintService
            ]
        };
    }

}
