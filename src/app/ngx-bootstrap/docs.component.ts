import {Component, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {DataLoadingComponent} from '../shared/data-loading/data-loading.component';
import {TourService} from 'ngx-ui-tour-ngx-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent implements OnInit {

  isLoading = false;
  startWaitingSubscription: Subscription;

  @ViewChild(DataLoadingComponent)
  dataLoadingCmp: DataLoadingComponent;

  constructor(
    private readonly tourService: TourService
  ) {}

  ngOnInit() {
    this.subscribeToStartWaiting();
  }

  subscribeToStartWaiting() {
    this.startWaitingSubscription = this.tourService
      .startWaiting$
      .subscribe(() => this.dataLoadingCmp.loadData());
  }

  onLoadingChange(isLoading: boolean) {
    this.isLoading = isLoading;
    if (!this.isLoading) {
      this.showAsyncStep();
    }
  }

  showAsyncStep() {
    const steps = this.tourService.steps,
      step = steps.find(step => step.anchorId === 'config.fakeData');

    (<Subject<void>>step.waitFor).next();
  }

  ngOnDestroy() {
    this.startWaitingSubscription.unsubscribe();
  }

}
