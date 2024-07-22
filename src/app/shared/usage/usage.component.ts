import {Component, Input} from '@angular/core';
import {default as tourServiceExample} from '!!raw-loader!./examples/tour-service-initialize.txt';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
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
        TuiLinkModule,
        TuiNotificationModule
    ]
})
export class UsageComponent {

    @Input({required: true})
    moduleName: string;

    readonly examples = {
        tourServiceExample: tourServiceExample as string
    };

    readonly tourStepTag = '<tour-step-template></tour-step-template>';
    readonly anchorPoints = '<div tourAnchor="some.anchor.id">...</div>';

}
