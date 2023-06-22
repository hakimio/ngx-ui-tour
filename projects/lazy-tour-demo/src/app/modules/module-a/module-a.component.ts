import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-module-a',
    templateUrl: './module-a.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourAnchorMatMenuDirective
    ]
})
export class ModuleAComponent {}
