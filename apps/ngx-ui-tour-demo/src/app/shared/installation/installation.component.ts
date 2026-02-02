import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import appConfigTs from './examples/app-config-ts.md' with {loader: 'text'};
import {HeaderComponent} from '../header/header.component';
import {TuiDocCode} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotificationDirective} from '@taiga-ui/core';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {APP_VERSION} from '../version-manager';

@Component({
    selector: 'app-installation',
    templateUrl: './installation.component.html',
    styles: `
        app-header {
            margin: 0;
        }
    `,
    imports: [
        HeaderComponent,
        ProxyTourAnchorDirective,
        TuiDocCode,
        TuiLink,
        TuiNotificationDirective
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallationComponent {

    readonly packageName = input.required<string>();

    readonly appConfigTs = computed(() => appConfigTs.replaceAll('ngx-ui-tour-md-menu', this.packageName()));

    readonly version = inject(APP_VERSION);

}
