import {Component} from '@angular/core';
import setDefaults from './examples/set-defaults.txt?raw';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-defaults',
    templateUrl: './defaults.component.html',
    imports: [
        HeaderComponent,
        TuiDocCodeModule
    ]
})
export class DefaultsComponent {

    readonly examples = {
        setDefaults: setDefaults
    };

}
