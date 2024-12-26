import {TuiDocCode} from '@taiga-ui/addon-doc';
import {Component, Input} from '@angular/core';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-usage',
    templateUrl: './usage.component.html',
    imports: [
        HeaderComponent,
        ProxyTourAnchorDirective,
        TuiDocCode,
        TuiLink,
        TuiNotification,
        TuiDocCode
    ]
})
export class UsageComponent {

    @Input({required: true})
    moduleName: string;

    readonly examples = {
        tourServiceExample: import('./examples/tour-service-initialize.md?raw')
    };

    readonly tourStepTag = '<tour-step-template></tour-step-template>';
    readonly anchorPoints = '<div tourAnchor="some.anchor.id">...</div>';

}
