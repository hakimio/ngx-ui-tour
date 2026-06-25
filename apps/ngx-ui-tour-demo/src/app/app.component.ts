import {TuiDocMain} from '@taiga-ui/addon-doc';
import {Component, computed, inject} from '@angular/core';
import {TUI_DARK_MODE, TuiButton, TuiLink} from '@taiga-ui/core';
import {VersionManagerComponent} from './shared/version-manager';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        TuiDocMain,
        TuiLink,
        VersionManagerComponent,
        TuiButton
    ]
})
export class AppComponent {

    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly icon = computed(() => this.darkMode() ? '@tui.sun' : '@tui.moon');

}
