import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-placement-config',
    template: '',
    standalone: true
})
export class PlacementConfigComponent {

    @Input()
    value?: string;

    @Input()
    values?: string[];

    @Input()
    type = 'string';

    @Input()
    extraInfo?: string;

}
