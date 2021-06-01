import { TourService } from 'ngx-ui-tour-console';
import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'console-route',
  templateUrl: './console.component.html',
})
export class ConsoleComponent implements OnInit {

  constructor(
    public tourService: TourService
  ) {}

  ngOnInit() {
    this.tourService.initialize([{
      anchorId: 'start.tour',
      content: 'Welcome to the Ngx-UI-Tour tour!',
      placement: 'below',
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
      route: 'console/other',
      title: 'Another Route',
    }, {
      anchorId: 'config.route',
      content: 'And then back again.',
      placement: 'below',
      title: 'Route Return',
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
      route: 'console',
    });
    this.tourService.start();
  }

}
