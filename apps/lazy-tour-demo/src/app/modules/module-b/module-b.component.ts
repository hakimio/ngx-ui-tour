import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-module-b',
    templateUrl: './module-b.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourAnchorMatMenuDirective
    ]
})
export class ModuleBComponent {}
