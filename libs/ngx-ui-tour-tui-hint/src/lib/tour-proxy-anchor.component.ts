import {BaseTourProxyAnchor} from 'ngx-ui-tour-core';
import {Component, inject, input} from '@angular/core';
import {TourAnchorTuiHintDirective} from './tour-anchor.directive';

@Component({
    selector: 'tour-proxy-anchor',
    template: ``,
    imports: [],
    hostDirectives: [{
        directive: TourAnchorTuiHintDirective,
        inputs: ['tourAnchor: anchorId']
    }]
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {

    // noinspection JSUnusedGlobalSymbols
    protected override readonly anchorDirective = inject(TourAnchorTuiHintDirective, {
        host: true
    });

    public override readonly anchorEl = input.required<string | HTMLElement>();

}
