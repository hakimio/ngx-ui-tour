import {Component, EventEmitter, Output} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: '[tr-data-loading]',
  templateUrl: './data-loading.component.html'
})
export class DataLoadingComponent {

  @Output()
  dataLoadingChange = new EventEmitter<boolean>();

  isLoading: boolean;
  fakeData: number[];

  loadData() {
    this.isLoading = true;
    this.dataLoadingChange.emit(this.isLoading);

    of([1, 2, 3])
      .pipe(delay(1000))
      .subscribe(result => {
        this.isLoading = false;
        this.fakeData = result;
        this.dataLoadingChange.emit(this.isLoading);
      });
  }

}
