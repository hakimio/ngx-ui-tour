import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription} from 'rxjs';
import {TourService} from 'ngx-ui-tour-ng-bootstrap';
import {delay} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent implements OnInit, OnDestroy {

  isLoading = true;
  showIsAsyncConfig = true;
  fakeData: number[];
  startWaitingSubscription: Subscription;

  constructor(
    private readonly tourService: TourService
  ) {}

  ngOnInit() {
    this.subscribeToShowStep();
  }

  subscribeToShowStep() {
    this.startWaitingSubscription = this.tourService
      .startWaiting$
      .subscribe(() => this.loadData());
  }

  loadData() {
    this.showIsAsyncConfig = false;
    of([1, 2, 3])
      .pipe(delay(1000))
      .subscribe(result => {
        this.isLoading = false;
        this.fakeData = result;
        this.showIsAsyncConfig = true;
      });
  }

  ngOnDestroy() {
    this.startWaitingSubscription.unsubscribe();
  }

}
