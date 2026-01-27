import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {type IStepOption, TourAnchorPrimeNgDirective, TourPrimeNg, TourService} from 'ngx-ui-tour-primeng';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {provideTourDirective, SHARED_COMPONENTS} from '../shared';
import defaultTemplate from './examples/default-template.md' with {loader: 'text'};
import {DELAY_AFTER_NAVIGATION} from '../app.providers';

@Component({
    selector: 'app-prime-ng-popover',
    imports: [
        TuiAddonDoc,
        TuiLink,
        TourPrimeNg,
        TuiButton,
        SHARED_COMPONENTS
    ],
    templateUrl: './prime-ng-popover.component.html',
    styleUrl: './prime-ng-popover.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTourDirective(TourAnchorPrimeNgDirective)
    ]
})
export default class PrimeNgPopoverComponent implements OnInit {

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
        route: 'prime-ng/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'prime-ng/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'prime-ng/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'prime-ng/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'prime-ng/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'prime-ng/API'
    }, {
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'prime-ng/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'prime-ng/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'prime-ng/API',
        stepDimensions: {
            maxWidth: '350px'
        }
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'prime-ng/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'prime-ng/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'prime-ng/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'prime-ng/Misc'
    }];
    readonly defaultTemplate = defaultTemplate;

    protected readonly tourService = inject(TourService);
    private readonly delayAfterNavigation = inject(DELAY_AFTER_NAVIGATION);

    ngOnInit() {
        this.tourService.initialize(this.tourSteps, {
            route: 'prime-ng',
            delayAfterNavigation: this.delayAfterNavigation
        });
    }

}
