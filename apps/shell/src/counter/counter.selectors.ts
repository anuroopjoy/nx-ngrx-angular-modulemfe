import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.interfaces';
import { CounterState } from './counter.reducers';

// export const counterSelector = (state: AppState) => state.counter;
export const counterSelector = createFeatureSelector<AppState, CounterState>('counter')

export const countSelector = createSelector(
  counterSelector,
  (counterState: CounterState) => counterState.count
);
