import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, incrementByAmount } from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(incrementByAmount, (state, { amount }) => ({
    ...state,
    count: state.count + amount,
  }))
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
