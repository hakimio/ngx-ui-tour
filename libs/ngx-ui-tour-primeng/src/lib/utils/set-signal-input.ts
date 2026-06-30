import type {InputSignal, InputSignalWithTransform} from '@angular/core';
import {SIGNAL} from '@angular/core/primitives/signals';

export function setSignalInput<T>(input: InputSignal<T> | InputSignalWithTransform<T, unknown>, value: T): void {
    input[SIGNAL].applyValueToInputSignal(input[SIGNAL], value);
}
