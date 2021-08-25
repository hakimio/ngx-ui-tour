import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-custom-template',
    templateUrl: './custom-template.component.html'
})
export class CustomTemplateComponent {

    @Input()
    defaultTemplate: string;

    readonly ngTemplateTag = '<ng-template let-step="step">';
    readonly tourStepTemplateTag = '<tour-step-template>';

}
