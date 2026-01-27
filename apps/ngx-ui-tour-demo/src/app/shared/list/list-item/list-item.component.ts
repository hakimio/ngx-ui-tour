import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

    readonly name = input<string>();
    readonly description = input<string>();

}
