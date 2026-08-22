import {TuiDocCode} from '@taiga-ui/addon-doc';
import {Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import tourProxyAnchor from './examples/tour-proxy-anchor.md' with {loader: 'text'};

@Component({
    selector: 'app-targeting-third-party-elements',
    imports: [
        HeaderComponent,
        TuiDocCode
    ],
    templateUrl: './targeting-third-party-elements.component.html'
})
export class TargetingThirdPartyElementsComponent {

    readonly examples = {
        tourProxyAnchor
    };

}
