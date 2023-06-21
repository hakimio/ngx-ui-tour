import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-list',
    template: '<div><ng-content></ng-content></div>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ListComponent {}
