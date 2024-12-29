import {WA_LOCATION} from '@ng-web-apis/common';
import {Attribute, ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiAlertService, TuiLink} from '@taiga-ui/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {TUI_DOC_EXAMPLE_TEXTS} from '@taiga-ui/addon-doc';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        TuiLink,
        RouterLink,
        RouterLinkActive
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

    constructor(
        @Attribute('id')
        readonly id: string | null,
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
        @Inject(WA_LOCATION) private readonly location: Location,
        @Inject(TUI_DOC_EXAMPLE_TEXTS) readonly texts: [string, string, string]
    ) {}

    copyExampleLink() {
        const hashPosition = this.location.href.indexOf('#');
        const currentUrl =
            hashPosition > -1
                ? this.location.href.substring(0, hashPosition)
                : this.location.href;
        const url = `${currentUrl}#${this.id}`;

        this.clipboard.copy(url);
        this.alertService
            .open(this.texts[1], {
                label: this.texts[2],
                appearance: 'success'
            })
            .subscribe();
    }

    get urlPath() {
        return this.location.pathname;
    }

}
