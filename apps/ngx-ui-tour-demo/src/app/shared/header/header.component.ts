import {WA_LOCATION} from '@ng-web-apis/common';
import {ChangeDetectionStrategy, Component, DOCUMENT, HostAttributeToken, inject} from '@angular/core';
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

    protected readonly id = inject(new HostAttributeToken('id'), {optional: true});
    private readonly clipboard = inject(Clipboard);
    private readonly alertService = inject(TuiAlertService);
    private readonly location = inject(WA_LOCATION);
    private readonly texts = inject(TUI_DOC_EXAMPLE_TEXTS);
    private readonly document = inject(DOCUMENT);

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
        const baseUrl = new URL(this.document.baseURI),
            basePath = baseUrl.pathname;

        return this.location.pathname.replace(basePath, '/');
    }

}
