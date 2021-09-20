import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.interfaces';
import { multiplyByAmount } from './counter.actions';
import { countSelector } from './counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class RemoteCounterComponent {
  constructor(private store: Store<AppState>) {
    // this.count$ = this.store.select('counter', 'count');
    this.count$ = this.store.select(countSelector);
  }

  incrementAmount = 0;
  count$!: Observable<number>;
  multiplyByAmount() {
    this.store.dispatch(multiplyByAmount({ amount: +this.incrementAmount }));
  }
}
