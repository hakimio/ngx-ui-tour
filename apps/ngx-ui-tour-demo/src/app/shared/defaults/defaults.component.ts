import {TuiDocCode} from '@taiga-ui/addon-doc';
import {Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import setDefaults from './examples/set-defaults.md' with {loader: 'text'};

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
        setDefaults
    };

}
