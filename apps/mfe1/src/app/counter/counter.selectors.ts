import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.interfaces';
import { CounterState } from './counter.reducers';

export const counterSelector = createFeatureSelector<AppState, CounterState>(
  'remotecounter'
);

export const countSelector = createSelector(
  counterSelector,
  (counterState: CounterState) => counterState.remoteCount
);
