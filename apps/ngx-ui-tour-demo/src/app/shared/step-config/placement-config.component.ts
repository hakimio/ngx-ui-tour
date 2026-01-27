import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-placement-config',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacementConfigComponent {

    readonly value = input<string>();
    readonly values = input<string[]>([]);
    readonly type = input('string');
    readonly extraInfo = input<string>();

}
