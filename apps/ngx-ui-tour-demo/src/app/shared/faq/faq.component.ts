import {TuiDocCode} from '@taiga-ui/addon-doc';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {HeaderComponent} from '../header/header.component';
import centeredStepCss from './examples/centered-step-css.md' with {loader: 'text'};
import centeredStepHtml from './examples/centered-step-html.md' with {loader: 'text'};
import centeredStepTs from './examples/centered-step-ts.md' with {loader: 'text'};
import customTourService from './examples/custom-tour-service.md' with {loader: 'text'};
import noScrollCss from './examples/no-scroll-css.md' with {loader: 'text'};
import customTourServiceUsage from './examples/custom-tour-service-usage.md' with {loader: 'text'};
import backdropPadding from './examples/backdrop-padding-css.md' with {loader: 'text'};
import backdropParagraphPadding from './examples/backdrop-paragraph-padding-css.md' with {loader: 'text'};
import backdropButtonPadding from './examples/backdrop-button-padding-html.md' with {loader: 'text'};

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    imports: [
        HeaderComponent,
        TuiDocCode,
        TuiNotification,
        TuiLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {

    @Input()
    disablePageScrollingIntroducedIn = '10.1';

    @Input()
    backdropOffsetIntroducedIn: string;

    readonly examples = {
        centeredStepCss,
        centeredStepHtml,
        centeredStepTs,
        customTourService,
        noScrollCss,
        customTourServiceUsage,
        backdropPadding,
        backdropParagraphPadding,
        backdropButtonPadding
    };

}
