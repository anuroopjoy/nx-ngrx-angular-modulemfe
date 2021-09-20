import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const incrementByAmount = createAction(
  '[Counter Component] IncrementByAmount',
  props<{ amount: number }>()
);
