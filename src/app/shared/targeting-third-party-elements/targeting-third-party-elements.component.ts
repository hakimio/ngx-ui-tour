import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {default as tourProxyAnchor} from '!!raw-loader!./examples/tour-proxy-anchor.txt';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';

@Component({
    selector: 'app-targeting-third-party-elements',
    standalone: true,
    imports: [
        HeaderComponent,
        TuiDocCodeModule
    ],
    templateUrl: './targeting-third-party-elements.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetingThirdPartyElementsComponent {

    readonly examples = {
        tourProxyAnchor: tourProxyAnchor as string
    };

}
