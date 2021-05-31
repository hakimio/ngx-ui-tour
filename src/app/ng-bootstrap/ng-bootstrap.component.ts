import {TourService} from 'ngx-ui-tour-ng-bootstrap';
import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-bootstrap-route',
  templateUrl: './ng-bootstrap.component.html',
})
export class NgBootstrapComponent {
  constructor(public tourService: TourService) {
    this.tourService.initialize([{
      anchorId: 'start.tour',
      content: 'Welcome to the Ngx-UI-Tour tour!',
      placement: 'bottom',
      title: 'Welcome',
    }, {
      anchorId: 'angular-ui-tour',
      content: 'Thanks to angular-ui-tour for the inspiration for the library',
      title: 'angular-ui-tour',
    }, {
      anchorId: 'installation',
      content: 'First, install the library...',
      title: 'Installation',
    }, {
      anchorId: 'usage',
      content: '...then use it.',
      title: 'Usage',
    }, {
      anchorId: 'tourService.start',
      content: 'Don\'t forget to actually start the tour.',
      title: 'Start the tour',
    }, {
      anchorId: 'config.anchorId',
      content: 'Every step needs an anchor.',
      title: 'Anchor',
    }, {
      anchorId: 'config.enableBackdrop',
      content: 'You can enable backdrop to highlight active element.',
      title: 'Backdrop',
      enableBackdrop: true
    }, {
      anchorId: 'config.route',
      content: 'Tours can span multiple routes.',
      title: 'Route',
    }, {
      anchorId: 'another.route',
      content: 'Like this!',
      route: 'ng-bootstrap/other',
      title: 'Another Route',
    }, {
      anchorId: 'config.route',
      content: 'And then back again.',
      title: 'Route Return',
    }, {
      anchorId: 'config.placement.default',
      content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
      title: 'Placement',
    }, {
      anchorId: 'config.buttons.custom',
      content: 'You can set custom step button names',
      title: 'Button Titles',
      prevBtnTitle: 'My Prev',
      nextBtnTitle: 'My Next',
      endBtnTitle: 'My End'
    }, {
      anchorId: 'config.isAsync',
      content: 'Mark your step as async if anchor element is added to DOM with a delay',
      title: 'Wait for async event'
    }, {
      anchorId: 'config.fakeData',
      content: 'Your fake data finished loading',
      title: 'Loading finished',
      isAsync: true
    }, {
      anchorId: 'hotkeys',
      content: 'Try using the hotkeys to navigate through the tour.',
      title: 'Hotkeys',
    }, {
      anchorId: 'events',
      content: 'You can subscribe to events',
      title: 'Events',
    }], {
      route: 'ng-bootstrap',
    });
    this.tourService.start();
  }
}
