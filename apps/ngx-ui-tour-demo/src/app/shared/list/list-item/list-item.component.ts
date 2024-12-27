import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ListItemComponent {

    @Input()
    name: string;

    @Input()
    description: string;

}
