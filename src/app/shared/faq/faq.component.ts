import {Component, Input} from '@angular/core';
import centeredStepCss from './examples/centered-step-css.txt?raw';
import centeredStepHtml from './examples/centered-step-html.txt?raw';
import centeredStepTs from './examples/centered-step-ts.txt?raw';
import customTourService from './examples/custom-tour-service.txt?raw';
import noScrollCss from './examples/no-scroll-css.txt?raw';
import customTourServiceUsage from './examples/custom-tour-service-usage.txt?raw';
import backdropPadding from './examples/backdrop-padding-css.txt?raw';
import backdropParagraphPadding from './examples/backdrop-paragraph-padding-css.txt?raw';
import backdropButtonPadding from './examples/backdrop-button-padding-html.txt?raw';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    imports: [
        HeaderComponent,
        TuiDocCodeModule,
        TuiNotificationModule,
        TuiLinkModule
    ]
})
export class FaqComponent {

    @Input()
    disablePageScrollingIntroducedIn = '10.1';

    @Input()
    backdropOffsetIntroducedIn: string;

    readonly examples = {
        centeredStepCss: centeredStepCss,
        centeredStepHtml: centeredStepHtml,
        centeredStepTs: centeredStepTs,
        customTourService: customTourService,
        noScrollCss: noScrollCss,
        customTourServiceUsage: customTourServiceUsage,
        backdropPadding: backdropPadding,
        backdropParagraphPadding: backdropParagraphPadding,
        backdropButtonPadding: backdropButtonPadding
    };

}
