import {Component} from '@angular/core';
import {default as tourSeviceExample} from '!!raw-loader!./examples/tour-service-initialize.txt';

@Component({
    selector: 'app-usage',
    templateUrl: './usage.component.html'
})
export class UsageComponent {

    readonly examples = {
        tourSeviceExample
    };

    readonly tourStepTag = '<tour-step-template></tour-step-template>';
    readonly anchorPoints = '<div tourAnchor="some.anchor.id">...</div>';

}
