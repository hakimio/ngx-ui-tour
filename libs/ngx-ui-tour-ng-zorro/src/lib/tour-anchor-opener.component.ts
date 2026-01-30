import {ChangeDetectionStrategy, Component, inject, signal, type TemplateRef, viewChild} from '@angular/core';
import {NzPopoverDirective} from 'ng-zorro-antd/popover';
import {TourStepTemplateService} from './tour-step-template.service';

@Component({
    selector: 'tour-anchor-opener',
    template: `
        <span
            nz-popover
            [nzPopoverContent]="template"
            [(nzPopoverVisible)]="isShown"
        ></span>
    `,
    styles: [`
        :host {
            display: none;
        }
    `],
    imports: [
        NzPopoverDirective
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourAnchorOpenerComponent {

    template: TemplateRef<never>;

    popover = viewChild.required(NzPopoverDirective);

    isShown = signal(false);

    private readonly tourStepTemplateService = inject(TourStepTemplateService);

    constructor() {
        this.template = this.tourStepTemplateService.templateComponent.template();
    }

}
