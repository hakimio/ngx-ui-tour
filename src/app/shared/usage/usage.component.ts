import {Component} from '@angular/core';
import {default as tourSeviceExample} from '!!raw-loader!./examples/tour-service-initialize.txt';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-usage',
    templateUrl: './usage.component.html',
    standalone: true,
    imports: [
        HeaderComponent,
        ProxyTourAnchorDirective,
        TuiDocCodeModule,
        TuiLinkModule
    ]
})
export class UsageComponent {

    readonly examples = {
        tourSeviceExample
    };

    readonly tourStepTag = '<tour-step-template></tour-step-template>';
    readonly anchorPoints = '<div tourAnchor="some.anchor.id">...</div>';

}
