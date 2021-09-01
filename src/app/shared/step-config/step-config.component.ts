import {ContentChild, Input} from '@angular/core';
import {Component} from '@angular/core';
import {PlacementConfigComponent} from './placement-config.component';

@Component({
    selector: 'app-step-config',
    templateUrl: './step-config.component.html',
    styleUrls: ['./step-config.component.scss']
})
export class StepConfigComponent {

    @Input()
    isContainerClassVisible = false;

    @Input()
    isCloseOnOutsideClickVisible = false;

    @ContentChild(PlacementConfigComponent)
    placementConfig: PlacementConfigComponent;

}
