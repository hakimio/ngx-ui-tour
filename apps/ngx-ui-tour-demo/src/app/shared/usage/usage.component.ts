import {TuiDocCode} from '@taiga-ui/addon-doc';
import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {HeaderComponent} from '../header/header.component';
import tourServiceExample from './examples/tour-service-initialize.md' with {loader: 'text'};
import importComponentTs from './examples/import-component-ts.md' with {loader: 'text'};
import appComponentHtml from './examples/app-component-html.md' with {loader: 'text'};

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

    readonly componentName = input.required<string>();
    readonly importComponentTs = computed(
        () => importComponentTs.replaceAll('TourMatMenu', this.componentName())
    );

    readonly examples = {
        tourServiceExample,
        appComponentHtml
    };

    readonly tourStepTag = '<tour-step-template/>';
    readonly anchorPoints = '<div tourAnchor="some.anchor.id">...</div>';

}
