import {Attribute, Component, Inject} from '@angular/core';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {LOCATION} from '@ng-web-apis/common';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {TUI_DOC_EXAMPLE_TEXTS} from '@taiga-ui/addon-doc';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    readonly copy$ = this.copyTexts$
        .pipe(
            map(([copy]) => copy)
        );

    constructor(
        @Attribute('id')
        readonly id: string | null,
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
        @Inject(LOCATION) private readonly location: Location,
        @Inject(TUI_COPY_TEXTS) private readonly copyTexts$: Observable<[string, string]>,
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
                status: TuiNotification.Success
            })
            .subscribe();
    }

}
