import {Component, Input} from '@angular/core';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-custom-template',
    templateUrl: './custom-template.component.html',
    standalone: true,
    imports: [
        HeaderComponent,
        ProxyTourAnchorDirective,
        TuiDocCodeModule
    ]
})
export class CustomTemplateComponent {

    @Input()
    defaultTemplate: string;

    readonly ngTemplateTag = '<ng-template let-step="step">';
    readonly tourStepTemplateTag = '<tour-step-template>';

}
