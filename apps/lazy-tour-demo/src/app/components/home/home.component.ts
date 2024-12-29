import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TourAnchorMatMenuDirective, TourService} from 'ngx-ui-tour-md-menu';
import {TourState} from 'ngx-ui-tour-core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourAnchorMatMenuDirective
    ]
})
export class HomeComponent implements OnInit {

    private readonly tourService = inject(TourService);

    ngOnInit() {
        if (this.tourService.getStatus() !== TourState.ON)
        {
            this.tourService.initialize([{
                anchorId: 'app-home',
                content: 'This is a step from the eager loaded home component',
                title: 'Home Component',
                route: ''
            }, {
                anchorId: 'module-a',
                content: 'This is a step from the lazy loaded module-a component',
                title: 'Module-a Component',
                route: 'module-a'
            }, {
                anchorId: 'module-b',
                content: 'This is a step from the lazy loaded module-b component',
                title: 'Module-b Component',
                route: 'module-b'
            }], {
                delayAfterNavigation: 100
            });

            this.tourService.start();
        }
    }

}
