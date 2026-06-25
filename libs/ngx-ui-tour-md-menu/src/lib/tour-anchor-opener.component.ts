import {Component, viewChild} from '@angular/core';
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
    ]
})
export class TourAnchorOpenerComponent {

    public readonly trigger = viewChild.required(MatMenuTrigger);

}
