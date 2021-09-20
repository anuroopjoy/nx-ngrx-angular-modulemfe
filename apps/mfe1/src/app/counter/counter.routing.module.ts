import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { RemoteCounterComponent } from './counter.component';
import { reducer } from './counter.reducers';

const routes = [{ path: 'multiply', component: RemoteCounterComponent }];

@NgModule({
  declarations: [RemoteCounterComponent],
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature('remotecounter', reducer),
    RouterModule.forChild(routes),
  ],
})
export class CounterRoutingModule {}
