import {Component} from '@angular/core';
import {default as tourSeviceExample} from '!!raw-loader!./examples/tour-service-initialize.txt';
import {Input} from '@angular/core';

@Component({
    selector: 'app-usage',
    templateUrl: './usage.component.html'
})
export class UsageComponent {

    @Input()
    moduleName: string;

    readonly examples = {
        tourSeviceExample
    }

    readonly tourStepTag = '<tour-step-template></tour-step-template>';
    readonly anchorPoints = '<div tourAnchor="some.anchor.id">...</div>';

}
