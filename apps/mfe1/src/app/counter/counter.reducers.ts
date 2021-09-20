import { Action, createReducer, on } from '@ngrx/store';
import { multiplyByAmount } from './counter.actions';

export interface CounterState {
  remoteCount: number;
}

export const initialState: CounterState = {
  remoteCount: 1,
};

export const counterReducer = createReducer(
  initialState,
  on(multiplyByAmount, (state, { amount }) => ({
    ...state,
    remoteCount: state.remoteCount * amount,
  }))
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
