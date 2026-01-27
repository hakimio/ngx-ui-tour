import {TuiDocCode} from '@taiga-ui/addon-doc';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {HeaderComponent} from '../header/header.component';
import tourServiceExample from './examples/tour-service-initialize.md' with {loader: 'text'};

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
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {

    readonly moduleName = input.required<string>();

    readonly examples = {
        tourServiceExample
    };

    readonly tourStepTag = '<tour-step-template></tour-step-template>';
    readonly anchorPoints = '<div tourAnchor="some.anchor.id">...</div>';

}
