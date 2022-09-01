import {TourService, IStepOption} from 'ngx-ui-tour-ng-bootstrap';
import {Component, Inject, OnInit} from '@angular/core';
import {default as defaultTemplate} from '!!raw-loader!./examples/default-template.txt';
import {DELAY_AFTER_NAVIGATION} from '../app.providers';

@Component({
    selector: 'app-ng-bootstrap',
    templateUrl: './ng-bootstrap.component.html',
    styleUrls: ['./ng-bootstrap.component.scss']
})
export class NgBootstrapComponent implements OnInit {

    readonly tourSteps: IStepOption[] = [{
        anchorId: 'start.tour',
        content: 'Welcome to the Ngx-UI-Tour tour!',
        placement: 'bottom',
        title: 'Welcome',
    }, {
        anchorId: 'angular-ui-tour',
        content: 'Thanks to angular-ui-tour for the inspiration for the library',
        title: 'angular-ui-tour'
    }, {
        anchorId: 'installation',
        content: 'First, install the library...',
        title: 'Installation',
        route: 'ng-bootstrap/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'ng-bootstrap/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'ng-bootstrap/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'ng-bootstrap/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'ng-bootstrap/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'ng-bootstrap/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'ng-bootstrap/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'ng-bootstrap/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'ng-bootstrap/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'ng-bootstrap/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'ng-bootstrap/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'ng-bootstrap/Misc'
    }];
    readonly bootstrapCssCdn = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">';
    readonly defaultTemplate = defaultTemplate;

    constructor(
        public readonly tourService: TourService,
        @Inject(DELAY_AFTER_NAVIGATION)
        private readonly delayAfterNavigation: number
    ) {}

    ngOnInit() {
        this.tourService.initialize(this.tourSteps, {
            route: 'ng-bootstrap',
            delayAfterNavigation: this.delayAfterNavigation
        });
    }

}
