import {TuiDocCode, TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {Component, Input} from '@angular/core';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-custom-template',
    templateUrl: './custom-template.component.html',
    imports: [
        HeaderComponent,
        ProxyTourAnchorDirective,
        TuiDocCode
    ]
})
export class CustomTemplateComponent {

    @Input()
    defaultTemplate: TuiRawLoaderContent;

    readonly ngTemplateTag = '<ng-template let-step="step">';
    readonly tourStepTemplateTag = '<tour-step-template>';

}
