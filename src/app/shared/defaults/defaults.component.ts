import {Component} from '@angular/core';
import {default as setDefaults} from '!!raw-loader!./examples/set-defaults.txt';

@Component({
    selector: 'app-defaults',
    templateUrl: './defaults.component.html'
})
export class DefaultsComponent {

    readonly examples = {
        setDefaults
    };

}
