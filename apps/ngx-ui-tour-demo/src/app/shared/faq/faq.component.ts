import {TuiDocCode} from '@taiga-ui/addon-doc';
import {Component, Input} from '@angular/core';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    imports: [
        HeaderComponent,
        TuiDocCode,
        TuiNotification,
        TuiLink
    ]
})
export class FaqComponent {

    @Input()
    disablePageScrollingIntroducedIn = '10.1';

    @Input()
    backdropOffsetIntroducedIn: string;

    readonly examples = {
        centeredStepCss: import('./examples/centered-step-css.md?raw'),
        centeredStepHtml: import('./examples/centered-step-html.md?raw'),
        centeredStepTs: import('./examples/centered-step-ts.md?raw'),
        customTourService: import('./examples/custom-tour-service.md?raw'),
        noScrollCss: import('./examples/no-scroll-css.md?raw'),
        customTourServiceUsage: import('./examples/custom-tour-service-usage.md?raw'),
        backdropPadding: import('./examples/backdrop-padding-css.md?raw'),
        backdropParagraphPadding: import('./examples/backdrop-paragraph-padding-css.md?raw'),
        backdropButtonPadding: import('./examples/backdrop-button-padding-html.md?raw')
    };

}
