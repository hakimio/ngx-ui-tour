import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';

@Component({
    selector: 'tour-anchor-opener',
    styles: [
        `
            :host {
                display: none;
            }
        `
    ],
    template: `
        <span [matMenuTriggerFor]="" [matMenuTriggerRestoreFocus]="false"></span>
    `,
    imports: [
        MatMenuModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourAnchorOpenerComponent {

    public readonly trigger = viewChild.required(MatMenuTrigger);

}
