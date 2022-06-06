import {Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {IStepOption, TourService} from './tour.service';

export class GoToNextOnAnchorUtil {

  private static anchors: {[anchorId: string]: [() => void, Subscription]} = {};

  static register(htmlElement: HTMLElement, step: IStepOption, tourService: TourService, renderer: Renderer2, anchorId: string) {
    if (step.goToNextOnAnchorEvent) {
      let unregisterListener: () => void;
      const onNext = () => {
        tourService.next();
        this.unregister(anchorId);
      };

      this.anchors[anchorId] = [
        renderer.listen(htmlElement, step.goToNextOnAnchorEvent, onNext),
        tourService.end$.subscribe(()=>  this.unregister(anchorId))
      ];
      return unregisterListener;
    }
  }

  static unregister(anchorId: string) {
    if (this.anchors[anchorId]) {
      this.anchors[anchorId][0]();
      this.anchors[anchorId][1].unsubscribe();
      delete this.anchors[anchorId];
    }
  }
}
