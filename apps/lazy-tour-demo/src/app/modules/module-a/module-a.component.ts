import {Component} from '@angular/core';
import {TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-module-a',
    templateUrl: './module-a.component.html',
    imports: [
        TourAnchorMatMenuDirective
    ]
})
export class ModuleAComponent {}
