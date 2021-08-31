import {IStepOption, TourService} from 'ngx-ui-tour-md-menu';
import {Component, OnInit} from '@angular/core';
import {default as defaultTemplate} from '!!raw-loader!./examples/default-template.txt';

@Component({
    selector: 'app-md-menu',
    templateUrl: './md-menu.component.html',
    styleUrls: ['./md-menu.component.scss']
})
export class MdMenuComponent implements OnInit {

    readonly tourSteps: IStepOption[] = [{
        anchorId: 'start.tour',
        content: 'Welcome to the Ngx-UI-Tour tour!',
        title: 'Welcome'
    }, {
        anchorId: 'angular-ui-tour',
        content: 'Thanks to angular-ui-tour for the inspiration for the library',
        title: 'angular-ui-tour',
        isAsync: true
    }, {
        anchorId: 'installation',
        content: 'First, install the library...',
        title: 'Installation',
        route: 'md-menu/Setup',
        isAsync: true
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'md-menu/Setup',
        isAsync: true
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'md-menu/Setup',
        isAsync: true
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'md-menu/API',
        isAsync: true
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'md-menu/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'md-menu/API'
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'md-menu/API',
        isAsync: true
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'md-menu/Misc',
        isAsync: true
    }];
    readonly defaultTemplate = defaultTemplate;

    constructor(
        public tourService: TourService
    ) {}

    ngOnInit() {
        this.tourService.initialize(this.tourSteps, {
            route: 'md-menu',
            disablePageScrolling: true
        });
    }

}
