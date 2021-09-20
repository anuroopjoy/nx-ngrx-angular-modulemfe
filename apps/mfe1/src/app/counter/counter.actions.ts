import { createAction, props } from '@ngrx/store';

export const multiplyByAmount = createAction(
  '[Counter Component] MultiplyByAmount',
  props<{ amount: number }>()
);
