import {TuiDocMain} from '@taiga-ui/addon-doc';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiLink} from '@taiga-ui/core';
import {VersionManagerComponent} from './shared/version-manager';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        TuiDocMain,
        TuiLink,
        VersionManagerComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
