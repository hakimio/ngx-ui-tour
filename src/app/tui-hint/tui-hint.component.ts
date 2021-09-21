import {Component, Inject, OnInit} from '@angular/core';
import {IStepOption, TourService} from 'ngx-ui-tour-tui-hint';
import {DELAY_AFTER_NAVIGATION} from '../app.providers';
import {default as defaultTemplate} from '!!raw-loader!./examples/default-template.txt';

@Component({
    selector: 'app-tui-hint',
    templateUrl: './tui-hint.component.html',
    styleUrls: ['./tui-hint.component.scss']
})
export class TuiHintComponent implements OnInit {

    readonly tourSteps: IStepOption[] = [{
        anchorId: 'start.tour',
        content: 'Welcome to the Ngx-UI-Tour tour!',
        title: 'Welcome'
    }, {
        anchorId: 'angular-ui-tour',
        content: 'Thanks to angular-ui-tour for the inspiration for the library',
        title: 'angular-ui-tour'
    }, {
        anchorId: 'installation',
        content: 'First, install the library...',
        title: 'Installation',
        route: 'tui-hint/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'tui-hint/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'tui-hint/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'tui-hint/API'
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'tui-hint/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'tui-hint/Misc'
    }];
    readonly defaultTemplate = defaultTemplate;

    constructor(
        private readonly tourService: TourService,
        @Inject(DELAY_AFTER_NAVIGATION)
        private readonly delayAfterNavigation: number
    ) {
    }

    ngOnInit() {
        this.tourService.initialize(this.tourSteps, {
            route: 'tui-hint',
            delayAfterNavigation: this.delayAfterNavigation
        });
    }

    start() {
        this.tourService.start();
    }

}
