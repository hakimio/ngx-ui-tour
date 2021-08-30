import { Injectable } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import type {UrlSegment} from '@angular/router';

import { TourAnchorDirective } from './tour-anchor.directive';
import {Subject, Observable, merge as mergeStatic, from} from 'rxjs';
import {first, map, filter} from 'rxjs/operators';

export interface IStepOption {
  stepId?: string;
  anchorId?: string;
  title?: string;
  content?: string;
  route?: string | UrlSegment[];
  nextStep?: number | string;
  prevStep?: number | string;
  placement?: any;
  preventScrolling?: boolean;
  prevBtnTitle?: string;
  nextBtnTitle?: string;
  endBtnTitle?: string;
  /**
   * @deprecated use "isAsync" instead
   */
  waitFor?: Promise<void> | Observable<void>;
  enableBackdrop?: boolean;
  isAsync?: boolean;
  isOptional?: boolean;
}

export enum TourState {
  OFF,
  ON,
  PAUSED
}

enum Direction {
  Forwards,
  Backwards
}

// noinspection JSUnusedGlobalSymbols
@Injectable()
export class TourService<T extends IStepOption = IStepOption> {
  public stepShow$: Subject<T> = new Subject();
  public stepHide$: Subject<T> = new Subject();
  public initialize$: Subject<T[]> = new Subject();
  public start$: Subject<T> = new Subject();
  public end$: Subject<any> = new Subject();
  public pause$: Subject<T> = new Subject();
  public resume$: Subject<T> = new Subject();
  public startWaiting$: Subject<T> = new Subject();
  public stopWaiting$: Subject<T> = new Subject();
  public anchorRegister$: Subject<string> = new Subject();
  public anchorUnregister$: Subject<string> = new Subject();
  public events$: Observable<{ name: string; value: any }> = mergeStatic(
    this.stepShow$.pipe(map(value => ({ name: 'stepShow', value }))),
    this.stepHide$.pipe(map(value => ({ name: 'stepHide', value }))),
    this.initialize$.pipe(map(value => ({ name: 'initialize', value }))),
    this.start$.pipe(map(value => ({ name: 'start', value }))),
    this.end$.pipe(map(value => ({ name: 'end', value }))),
    this.pause$.pipe(map(value => ({ name: 'pause', value }))),
    this.resume$.pipe(map(value => ({ name: 'resume', value }))),
    this.anchorRegister$.pipe(
      map(value => ({
        name: 'anchorRegister',
        value
      }))
    ),
    this.anchorUnregister$.pipe(
      map(value => ({
        name: 'anchorUnregister',
        value
      }))
    )
  );

  public steps: T[] = [];
  public currentStep: T;

  public anchors: { [anchorId: string]: TourAnchorDirective } = {};
  private status: TourState = TourState.OFF;
  private isHotKeysEnabled = true;
  private direction = Direction.Forwards;

  constructor(private router: Router) {}

  public initialize(steps: T[], stepDefaults?: T): void {
    if (steps && steps.length > 0) {
      this.status = TourState.OFF;
      this.steps = steps.map(step => Object.assign({}, stepDefaults, step));
      this.initialize$.next(this.steps);
    }
  }

  public disableHotkeys(): void {
    this.isHotKeysEnabled = false;
  }

  public enableHotkeys(): void {
    this.isHotKeysEnabled = true;
  }

  public start(): void {
    this.startAt(0);
  }

  public startAt(stepId: number | string): void {
    this.status = TourState.ON;
    this.goToStep(this.loadStep(stepId));
    this.start$.next();
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart), first())
      .subscribe(() => {
        if (this.currentStep && this.currentStep.hasOwnProperty('route')) {
          this.hideStep(this.currentStep);
        }
      });
  }

  public end(): void {
    this.status = TourState.OFF;
    this.hideStep(this.currentStep);
    this.currentStep = undefined;
    this.end$.next();
  }

  public pause(): void {
    this.status = TourState.PAUSED;
    this.hideStep(this.currentStep);
    this.pause$.next();
  }

  public resume(): void {
    this.status = TourState.ON;
    this.showStep(this.currentStep);
    this.resume$.next();
  }

  public toggle(pause?: boolean): void {
    if (pause) {
      if (this.currentStep) {
        this.pause();
      } else {
        this.resume();
      }
    } else {
      if (this.currentStep) {
        this.end();
      } else {
        this.start();
      }
    }
  }

  public next(): void {
    this.direction = Direction.Forwards;
    if (this.hasNext(this.currentStep)) {
      this.goToStep(
        this.loadStep(
          this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1
        )
      );
    }
  }

  public hasNext(step: T): boolean {
    if (!step) {
      console.warn('Can\'t get next step. No currentStep.');
      return false;
    }
    return (
      step.nextStep !== undefined ||
      this.steps.indexOf(step) < this.steps.length - 1
    );
  }

  public prev(): void {
    this.direction = Direction.Backwards;
    if (this.hasPrev(this.currentStep)) {
      this.goToStep(
        this.loadStep(
          this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1
        )
      );
    }
  }

  public hasPrev(step: T): boolean {
    if (!step) {
      console.warn('Can\'t get previous step. No currentStep.');
      return false;
    }
    return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
  }

  public goto(stepId: number | string): void {
    this.goToStep(this.loadStep(stepId));
  }

  public register(anchorId: string, anchor: TourAnchorDirective): void {
    if (!anchorId) {
      return;
    }
    if (this.anchors[anchorId]) {
      throw new Error('anchorId ' + anchorId + ' already registered!');
    }
    this.anchors[anchorId] = anchor;
    this.anchorRegister$.next(anchorId);
  }

  public unregister(anchorId: string): void {
    if (!anchorId) {
      return;
    }
    delete this.anchors[anchorId];
    this.anchorUnregister$.next(anchorId);
  }

  public getStatus(): TourState {
    return this.status;
  }

  public isHotkeysEnabled(): boolean {
    return this.isHotKeysEnabled;
  }

  private goToStep(step: T): void {
    if (!step) {
      console.warn('Can\'t go to non-existent step');
      this.end();
      return;
    }
    if (this.currentStep) {
      this.hideStep(this.currentStep);
    }
    let navigatePromise: Promise<boolean> = new Promise(resolve =>
      resolve(true)
    );
    if (typeof step.route === 'string') {
      navigatePromise = this.router.navigateByUrl(step.route);
    } else if (Array.isArray(step.route)) {
      navigatePromise = this.router.navigate(step.route);
    }
    navigatePromise.then(navigated => {
      if (navigated !== false && !step.waitFor) {
        setTimeout(() => this.setCurrentStep(step));
      } else if (navigated !== false) {
        this.wait(step);
      }
    });
  }

  private wait(step: T) {
    const waitFor$ = from(step.waitFor);

    this.startWaiting$.next(step);
    waitFor$
      .pipe(first())
      .subscribe(
        () => {
          setTimeout(() => this.setCurrentStep(step));
          this.stopWaiting$.next(step);
        }
      );
  }

  private loadStep(stepId: number | string): T {
    if (typeof stepId === 'number') {
      return this.steps[stepId];
    } else {
      return this.steps.find(step => step.stepId === stepId);
    }
  }

  private setCurrentStep(step: T): void {
    this.currentStep = step;
    this.showStep(this.currentStep);
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart), first())
      .subscribe(() => {
        if (this.currentStep && this.currentStep.hasOwnProperty('route')) {
          this.hideStep(this.currentStep);
        }
      });
  }

  private showStep(step: T): void {
    const anchor = this.anchors[step && step.anchorId];

    if (!anchor) {
      if (step.isAsync) {
        this.startWaiting$.next(step);
        this.anchorRegister$
          .pipe(
            filter(anchorId => anchorId === step.anchorId),
            first()
          )
          .subscribe(
            () => {
              setTimeout(() => this.showStep(step));
              this.stopWaiting$.next(step);
            }
          );
        return;
      }
      if (step.isOptional) {
        this.direction === Direction.Forwards ? this.next() : this.prev();
        return;
      }

      console.warn(
        'Can\'t attach to unregistered anchor with id ' + step.anchorId
      );
      this.end();
      return;
    }
    anchor.showTourStep(step);
    this.stepShow$.next(step);
  }

  private hideStep(step: T): void {
    const anchor = this.anchors[step && step.anchorId];
    if (!anchor) {
      return;
    }
    anchor.hideTourStep();
    this.stepHide$.next(step);
  }
}
