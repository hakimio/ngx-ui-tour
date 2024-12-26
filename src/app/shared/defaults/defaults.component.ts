import {TuiDocCode} from '@taiga-ui/addon-doc';
import {Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-defaults',
    templateUrl: './defaults.component.html',
    imports: [
        HeaderComponent,
        TuiDocCode
    ]
})
export class DefaultsComponent {

    readonly examples = {
        setDefaults: import('./examples/set-defaults.md?raw')
    };

}
