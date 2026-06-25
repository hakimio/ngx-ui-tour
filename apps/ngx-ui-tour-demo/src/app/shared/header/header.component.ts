import {WA_LOCATION} from '@ng-web-apis/common';
import {Component, DOCUMENT, HostAttributeToken, inject} from '@angular/core';
import {TuiLink, TuiNotificationService} from '@taiga-ui/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        TuiLink,
        RouterLink,
        RouterLinkActive
    ]
})
export class HeaderComponent {

    protected readonly id = inject(new HostAttributeToken('id'), {optional: true});
    private readonly clipboard = inject(Clipboard);
    private readonly notificationService = inject(TuiNotificationService);
    private readonly location = inject(WA_LOCATION);
    private readonly document = inject(DOCUMENT);

    copyExampleLink() {
        const hashPosition = this.location.href.indexOf('#');
        const currentUrl =
            hashPosition > -1
                ? this.location.href.substring(0, hashPosition)
                : this.location.href;
        const url = `${currentUrl}#${this.id}`;

        this.clipboard.copy(url);
        this.notificationService
            .open('Link to a sample was successfully copied', {
                label: 'Copied',
                appearance: 'positive'
            })
            .subscribe();
    }

    get urlPath() {
        const baseUrl = new URL(this.document.baseURI),
            basePath = baseUrl.pathname;

        return this.location.pathname.replace(basePath, '/');
    }

}
