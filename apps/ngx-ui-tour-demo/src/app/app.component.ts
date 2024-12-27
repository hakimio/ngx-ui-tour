import {TuiDocMain} from '@taiga-ui/addon-doc';
import {Component} from '@angular/core';
import {TuiLink} from '@taiga-ui/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        TuiDocMain,
        TuiLink
    ]
})
export class AppComponent {}