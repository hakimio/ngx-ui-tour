import {Component, inject, OnInit} from '@angular/core';
import {IStepOption, TourService} from 'ngx-ui-tour-md-menu';
import {NavigationComponent} from './navigation/navigation.component';
import {UiTourDemoComponent} from './ui-tour-demo/ui-tour-demo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NavigationComponent, UiTourDemoComponent],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    private readonly tourService = inject(TourService);
    private readonly steps: IStepOption[] = [{
        anchorId: 'start-button',
        title: 'Welcome',
        content: 'Welcome to the demo tour!',
    }, {
        anchorId: 'cow-menu-item',
        title: 'Cow',
        content: 'Cow menu item.'
    }, {
        anchorId: 'donkey-menu-item',
        title: 'Donkey',
        content: 'Donkey menu item.'
    }, {
        anchorId: 'speed-and-performance',
        title: 'Speed & Performance',
        content: 'Achieve the maximum speed possible on the Web Platform today, and take it further, ' +
            'via Web Workers and server-side rendering.',
    }, {
        anchorId: 'what-is-angular',
        title: 'What is Angular',
        content: 'Angular is a platform that makes it easy to build applications with the web.',
    }, {
        anchorId: 'component-metadata',
        title: 'Component Metadata',
        content: 'The metadata for a component class associates it with a template that defines a view.',
    }];

    ngOnInit() {
        this.tourService.initialize(this.steps, {
            enableBackdrop: true,
            backdropConfig: {
                offset: 10,
            }
        });
    }

}
