import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {BaseTourProxyAnchor} from 'ngx-ui-tour-core';
import {TourAnchorNgZorroDirective} from './tour-anchor.directive';

@Component({
    selector: 'tour-proxy-anchor',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [{
        directive: TourAnchorNgZorroDirective,
        inputs: ['tourAnchor: anchorId']
    }]
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {

    protected override readonly anchorDirective = inject(TourAnchorNgZorroDirective, {
        host: true
    });

    public override readonly anchorEl = input.required<string | HTMLElement>();

}
