import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {
    IStepOption,
    TourAnchorTuiDropdownDirective,
    TourService,
    TourTuiDropdownModule
} from 'ngx-ui-tour-tui-dropdown';
import {Component, inject, OnInit} from '@angular/core';
import {DELAY_AFTER_NAVIGATION} from '../app.providers';
import {TuiButton, TuiLink, TuiNotification} from '@taiga-ui/core';
import {provideTourDirective, SHARED_COMPONENTS} from '../shared';

@Component({
    selector: 'app-tui-dropdown',
    templateUrl: './tui-dropdown.component.html',
    styleUrls: ['./tui-dropdown.component.scss'],
    imports: [
        TuiAddonDoc,
        TuiLink,
        TourTuiDropdownModule,
        TuiButton,
        TuiNotification,
        SHARED_COMPONENTS
    ],
    providers: [
        provideTourDirective(TourAnchorTuiDropdownDirective)
    ]
})
export default class TuiDropdownComponent implements OnInit {

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
        route: 'tui-dropdown/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'tui-dropdown/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'tui-dropdown/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'tui-dropdown/API',
        stepDimensions: {
            maxWidth: '340px'
        }
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'tui-dropdown/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'tui-dropdown/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'tui-dropdown/Misc'
    }];
    readonly defaultTemplate = import('./examples/default-template.md?raw');

    public readonly tourService = inject(TourService);
    private readonly delayAfterNavigation = inject(DELAY_AFTER_NAVIGATION);

    ngOnInit() {
        this.tourService.initialize(this.tourSteps, {
            route: 'tui-dropdown',
            delayAfterNavigation: this.delayAfterNavigation,
            disablePageScrolling: false
        });
    }

    start() {
        this.tourService.start();
    }

}
