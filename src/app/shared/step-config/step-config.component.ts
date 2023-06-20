import {ContentChild, Input} from '@angular/core';
import {Component} from '@angular/core';
import {PlacementConfigComponent} from './placement-config.component';
import {IStepOption} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-step-config',
    templateUrl: './step-config.component.html',
    styleUrls: ['./step-config.component.scss']
})
export class StepConfigComponent {

    @Input()
    isCloseOnOutsideClickVisible = false;

    @Input()
    isShowArrowVisible = false;

    @Input()
    isUseLegacyTitleVisible = false;

    @ContentChild(PlacementConfigComponent)
    placementConfig: PlacementConfigComponent;

    readonly duplicateAnchorHandlingValues: IStepOption['duplicateAnchorHandling'][] = ['error', 'registerFirst', 'registerLast'];

}
