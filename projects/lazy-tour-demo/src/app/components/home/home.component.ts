import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {TourService, TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourAnchorMatMenuDirective
    ]
})
export class HomeComponent implements OnInit {

    private readonly tourService = inject(TourService);

    ngOnInit() {
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
