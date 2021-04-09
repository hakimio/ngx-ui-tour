import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataLoadingComponent} from './data-loading/data-loading.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataLoadingComponent
  ],
  exports: [
    DataLoadingComponent
  ]
})
export class SharedModule {}
