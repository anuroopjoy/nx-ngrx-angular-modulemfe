import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.interfaces';
import { decrement, increment, incrementByAmount } from './counter.actions';
import { countSelector } from './counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  constructor(private store: Store<AppState>) {
    // this.count$ = this.store.select('counter', 'count');
    this.count$ = this.store.select(countSelector);
  }

  incrementAmount = 0;
  count$!: Observable<number>;
  decrement() {
    this.store.dispatch(decrement());
  }
  increment() {
    this.store.dispatch(increment());
  }
  incrementByAmount() {
    this.store.dispatch(incrementByAmount({ amount: +this.incrementAmount }));
  }
}
