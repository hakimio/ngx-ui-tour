import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {APP_VERSION} from './version-manager.provider';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import type {Version} from './version-manager.model';

@Component({
    selector: 'app-version-manager',
    templateUrl: './version-manager.component.html',
    imports: [
        TuiButton,
        TuiChevron,
        TuiDropdown,
        TuiDataList
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersionManagerComponent {

    protected readonly currentVersionId = inject(APP_VERSION);

    protected readonly versions: Version[] = [
        {
            id: this.currentVersionId,
            path: '/ngx-ui-tour/'
        },
        {
            id: 15,
            path: '/ngx-ui-tour/v15/'
        }
    ];

    protected open = false;

}
