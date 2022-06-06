import {Injectable} from '@angular/core';
import {IsActiveMatchOptions, NavigationStart, Router} from '@angular/router';
import type {UrlSegment} from '@angular/router';

import {TourAnchorDirective} from './tour-anchor.directive';
import {Subject, Observable, merge as mergeStatic} from 'rxjs';
import {first, map, filter, delay} from 'rxjs/operators';

export interface IStepOption {
    stepId?: string;
    anchorId?: string;
    title?: string;
    content?: string;
    route?: string | UrlSegment[];
    nextStep?: number | string;
    prevStep?: number | string;
    placement?: any;
    disableScrollToAnchor?: boolean;
    prevBtnTitle?: string;
    nextBtnTitle?: string;
    endBtnTitle?: string;
    enableBackdrop?: boolean;
    isAsync?: boolean;
    isOptional?: boolean;
    delayAfterNavigation?: number;
    goToNextOnAnchorEvent?: string;
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
    public start$: Subject<void> = new Subject();
    public end$: Subject<void> = new Subject();
    public pause$: Subject<void> = new Subject();
    public resume$: Subject<void> = new Subject();
    public anchorRegister$: Subject<string> = new Subject();
    public anchorUnregister$: Subject<string> = new Subject();
    public events$: Observable<{ name: string; value: any }> = mergeStatic(
        this.stepShow$.pipe(map(value => ({name: 'stepShow', value}))),
        this.stepHide$.pipe(map(value => ({name: 'stepHide', value}))),
        this.initialize$.pipe(map(value => ({name: 'initialize', value}))),
        this.start$.pipe(map(value => ({name: 'start', value}))),
        this.end$.pipe(map(value => ({name: 'end', value}))),
        this.pause$.pipe(map(value => ({name: 'pause', value}))),
        this.resume$.pipe(map(value => ({name: 'resume', value}))),
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

    constructor(
        private readonly router: Router
    ) {}

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
            (this.steps.indexOf(step) < this.steps.length - 1 && !this.isNextOptionalAnchorMissing(step))
        );
    }

    private isNextOptionalAnchorMissing(step: T): boolean {
        const stepIndex = this.steps.indexOf(step);

        for (let i = stepIndex + 1; i < this.steps.length; i++) {
            const nextStep = this.steps[i];

            if (!nextStep.isOptional || this.anchors[nextStep.anchorId])
                return false;
        }

        return true;
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
        return step.prevStep !== undefined ||
            (this.steps.indexOf(step) > 0 && !this.isPrevOptionalAnchorMising(step));
    }

    private isPrevOptionalAnchorMising(step: T): boolean {
        const stepIndex = this.steps.indexOf(step);

        for (let i = stepIndex - 1; i > -1; i--) {
            const prevStep = this.steps[i];

            if (!prevStep.isOptional || this.anchors[prevStep.anchorId])
                return false;
        }

        return true;
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

        if (step.route !== undefined && step.route !== null) {
            this.navigateToRouteAndSetStep(step);
        } else {
            this.setCurrentStepAsync(step);
        }
    }

    private async navigateToRouteAndSetStep(step: T) {
        const url = typeof step.route === 'string' ? step.route : this.router.createUrlTree(step.route),
            matchOptions: IsActiveMatchOptions = {
                paths: 'exact',
                matrixParams: 'exact',
                queryParams: 'subset',
                fragment: 'ignored'
            };

        const isActive = this.router.isActive(url, matchOptions);

        if (isActive) {
            this.setCurrentStepAsync(step);
            return;
        }

        const navigated = await this.router.navigateByUrl(url);

        if (!navigated) {
            console.warn('Navigation to route failed: ', step.route);
            this.end();
        } else {
            this.setCurrentStepAsync(step, step.delayAfterNavigation);
        }
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

    private setCurrentStepAsync(step: T, delay = 0): void {
        setTimeout(() => this.setCurrentStep(step), delay);
    }

    private showStep(step: T): void {
        const anchor = this.anchors[step && step.anchorId];

        if (!anchor) {
            if (step.isAsync) {
                this.anchorRegister$
                    .pipe(
                        filter(anchorId => anchorId === step.anchorId),
                        first(),
                        delay(0)
                    )
                    .subscribe(
                        () => this.showStep(step)
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
