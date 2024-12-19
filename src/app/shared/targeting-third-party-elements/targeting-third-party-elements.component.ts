import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import tourProxyAnchor from './examples/tour-proxy-anchor.txt?raw';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';

@Component({
    selector: 'app-targeting-third-party-elements',
    imports: [
        HeaderComponent,
        TuiDocCodeModule
    ],
    templateUrl: './targeting-third-party-elements.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetingThirdPartyElementsComponent {

    readonly examples = {
        tourProxyAnchor: tourProxyAnchor
    };

}
