import type {OutputEmitterRef} from '@angular/core';

export function outputEmitterToPromise<T>(outputEmitter: OutputEmitterRef<T>): Promise<T> {
    return new Promise(resolve => {
        const subscription = outputEmitter.subscribe(value => {
            subscription.unsubscribe();
            resolve(value);
        });
    });
}
