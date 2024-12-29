import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
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

    @ViewChild(MatMenuTrigger, {static: true})
    public trigger: MatMenuTrigger;

}
