import {Component, input, TemplateRef, viewChild} from '@angular/core';

@Component({
    selector: 'app-tab',
    standalone: true,
    template: `
        <ng-template>
            <ng-content/>
        </ng-template>
    `
})
export class TabComponent {

    title = input.required<string>();
    icon = input<string>();

    readonly template = viewChild.required(TemplateRef);

}
