import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TourMatMenu, TourService} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-ui-tour-demo',
    imports: [
        MatButton,
        TourMatMenu
    ],
    templateUrl: './ui-tour-demo.component.html',
    styleUrl: './ui-tour-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTourDemoComponent {

    private readonly tourService = inject(TourService);

    startTour() {
        this.tourService.start();
    }

}
