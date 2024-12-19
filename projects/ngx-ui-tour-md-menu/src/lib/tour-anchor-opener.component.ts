import {Component, ViewChild,} from '@angular/core';
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
        <!--suppress HtmlUnknownAttribute -->
        <span matMenuTriggerFor [matMenuTriggerRestoreFocus]="false"></span>
    `,
    imports: [
        MatMenuModule
    ]
})
export class TourAnchorOpenerComponent {

    @ViewChild(MatMenuTrigger, {static: true})
    public trigger: MatMenuTrigger;

}
