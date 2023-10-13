import {Component, ContentChild, Input} from '@angular/core';
import {PlacementConfigComponent} from './placement-config.component';
import {IStepOption} from 'ngx-ui-tour-md-menu';
import {NgIf} from '@angular/common';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {TuiDocDocumentationModule} from '@taiga-ui/addon-doc';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-step-config',
  templateUrl: './step-config.component.html',
  styleUrls: ['./step-config.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    TuiDocDocumentationModule,
    ProxyTourAnchorDirective,
    NgIf
  ]
})
export class StepConfigComponent {

  @Input()
  isCloseOnOutsideClickVisible = false;

  @Input()
  isShowArrowVisible = false;

  @Input()
  isUseLegacyTitleVisible = false;

  @ContentChild(PlacementConfigComponent)
  placementConfig: PlacementConfigComponent;

  readonly duplicateAnchorHandlingValues: IStepOption['duplicateAnchorHandling'][] = ['error', 'registerFirst', 'registerLast'];
}
