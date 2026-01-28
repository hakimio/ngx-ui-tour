import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import appConfigTs from './examples/app-config-ts.md' with {loader: 'text'};
import {HeaderComponent} from '../header/header.component';
import {TuiDocCode} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';

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
        TuiLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallationComponent {

    readonly packageName = input.required<string>();

    readonly appConfigTs = computed(() => appConfigTs.replaceAll('ngx-ui-tour-md-menu', this.packageName()));

}
