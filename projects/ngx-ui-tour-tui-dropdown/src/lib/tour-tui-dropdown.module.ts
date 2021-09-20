import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TourStepTemplateComponent} from './tour-step-template/tour-step-template.component';
import {TourAnchorTuiDropdownDirective} from './tour-anchor.directive';
import {TourTuiDropdownService} from './tour-tui-dropdown.service';
import {TourBackdropService, TourModule, TourService} from 'ngx-ui-tour-core';
import {TourStepTemplateService} from './tour-step-template.service';
import {TuiButtonModule, TuiDropdownModule} from '@taiga-ui/core';

const COMPONENTS = [
    TourStepTemplateComponent,
    TourAnchorTuiDropdownDirective
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
    imports: [
        CommonModule,
        TourModule,
        TuiDropdownModule,
        TuiButtonModule
    ]
})
export class TourTuiDropdownModule {

    public static forRoot(): ModuleWithProviders<TourTuiDropdownModule> {
        return {
            ngModule: TourTuiDropdownModule,
            providers: [
                TourStepTemplateService,
                TourBackdropService,
                TourService,
                TourTuiDropdownService
            ]
        };
    }

}
