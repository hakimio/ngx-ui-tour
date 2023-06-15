import {Component, Input} from '@angular/core';
import {default as centeredStepCss} from '!!raw-loader!./examples/centered-step-css.txt';
import {default as centeredStepHtml} from '!!raw-loader!./examples/centered-step-html.txt';
import {default as centeredStepTs} from '!!raw-loader!./examples/centered-step-ts.txt';
import {default as customTourService} from '!!raw-loader!./examples/custom-tour-service.txt';
import {default as noScrollCss} from '!!raw-loader!./examples/no-scroll-css.txt';
import {default as customTourServiceUsage} from '!!raw-loader!./examples/custom-tour-service-usage.txt';
import {default as backdropPadding} from '!!raw-loader!./examples/backdrop-padding-css.txt';
import {default as backdropParagraphPadding} from '!!raw-loader!./examples/backdrop-paragraph-padding-css.txt';
import {default as backdropButtonPadding} from '!!raw-loader!./examples/backdrop-button-padding-html.txt';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

    @Input()
    disablePageScrollingIntroducedIn = '10.1';

    @Input()
    backdropOffsetIntroducedIn: number;

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
