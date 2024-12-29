import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {IStepOption} from 'ngx-ui-tour-tui-hint';
import {TourAnchorTuiHintDirective, TourService, TourTuiHintModule} from 'ngx-ui-tour-tui-hint';
import {DELAY_AFTER_NAVIGATION} from '../app.providers';
import type {TuiHintDirection} from '@taiga-ui/core';
import {TuiButton, TuiLink, TuiNotification} from '@taiga-ui/core';
import {provideTourDirective, SHARED_COMPONENTS} from '../shared';
import defaultTemplate from './examples/default-template.md' with {loader: 'text'};

@Component({
    selector: 'app-tui-hint',
    templateUrl: './tui-hint.component.html',
    styleUrls: ['./tui-hint.component.scss'],
    imports: [
        TuiAddonDoc,
        TuiLink,
        TourTuiHintModule,
        TuiButton,
        TuiNotification,
        SHARED_COMPONENTS
    ],
    providers: [
        provideTourDirective(TourAnchorTuiHintDirective)
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TuiHintComponent implements OnInit {

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
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'tui-hint/API',
        stepDimensions: {
            maxWidth: '340px'
        }
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'tui-hint/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'tui-hint/API',
        nextOnAnchorClick: true
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
    readonly hintPlacements: TuiHintDirection[] = [
        'top-left',
        'top',
        'top-right',
        'bottom-left',
        'bottom',
        'bottom-right',
        'left-top',
        'left',
        'left-bottom',
        'right-top',
        'right',
        'right-bottom'
    ];

    public readonly tourService = inject(TourService);
    private readonly delayAfterNavigation = inject(DELAY_AFTER_NAVIGATION);

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
