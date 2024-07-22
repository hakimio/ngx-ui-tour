import {Component} from '@angular/core';
import {default as setDefaults} from '!!raw-loader!./examples/set-defaults.txt';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-defaults',
    templateUrl: './defaults.component.html',
    standalone: true,
    imports: [
        HeaderComponent,
        TuiDocCodeModule
    ]
})
export class DefaultsComponent {

    readonly examples = {
        setDefaults: setDefaults as string
    };

}
