import {Component, inject, input} from '@angular/core';
import {TourAnchorOptimusUiDirective} from './tour-anchor.directive';
import {BaseTourProxyAnchor} from 'ngx-ui-tour-core';

@Component({
    selector: 'tour-proxy-anchor',
    template: '',
    hostDirectives: [{
        directive: TourAnchorOptimusUiDirective,
        inputs: ['tourAnchor: anchorId']
    }]
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {

    protected override readonly anchorDirective = inject(TourAnchorOptimusUiDirective, {
        host: true
    });

    public override readonly anchorEl = input.required<string | HTMLElement>();

}
