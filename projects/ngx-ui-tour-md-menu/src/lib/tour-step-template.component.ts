import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {MatMenu} from '@angular/material/menu';
import {TourHotkeyListenerComponent} from 'ngx-ui-tour-core';

import {TourStepTemplateService} from './tour-step-template.service';
import {NgxmTourService} from './ngx-md-menu-tour.service';
import {IMdStepOption} from './step-option.interface';

@Component({
  selector: 'tour-step-template',
  styles: [
    `
      ::ng-deep .tour-step .mat-menu-content {
        padding: 0 !important;
      }
    `
  ],
  template: `
    <mat-menu [overlapTrigger]="false" class="tour-step">
      <ng-container
        *ngTemplateOutlet="
          stepTemplate || stepTemplateContent || defaultTemplate;
          context: { step: step }
        "
      ></ng-container>
    </mat-menu>
    <ng-template #defaultTemplate let-step="step">
      <mat-card (click)="$event.stopPropagation()">
        <mat-card-title>
          {{ step?.title }}
        </mat-card-title>
        <mat-card-content [innerHTML]="step?.content">
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-icon-button
            [disabled]="!tourService.hasPrev(step)"
            (click)="tourService.prev()"
          >
            <mat-icon>chevron_left</mat-icon>
          </button>
          <button
            mat-icon-button
            [disabled]="!tourService.hasNext(step)"
            (click)="tourService.next()"
          >
            <mat-icon>chevron_right</mat-icon>
          </button>
          <button mat-button (click)="tourService.end()">
            {{ step?.endBtnTitle }}
          </button>
        </mat-card-actions>
      </mat-card>
    </ng-template>
  `
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent
  implements AfterViewInit {
  @ViewChild(MatMenu) public tourStep: MatMenu;

  @Input()
  public stepTemplate: TemplateRef<{ step: IMdStepOption }>;

  @ContentChild(TemplateRef)
  public stepTemplateContent: TemplateRef<{ step: IMdStepOption }>;

  public step: IMdStepOption = {};

  constructor(
    private tourStepTemplateService: TourStepTemplateService,
    public tourService: NgxmTourService
  ) {
    super(tourService);
  }

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.templateComponent = this;
  }
}
