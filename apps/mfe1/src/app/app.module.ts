import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { RemoteCounterComponent } from './counter/counter.component';
import { CounterRoutingModule } from './counter/counter.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: RemoteCounterComponent }], {
      useHash: true,
    }),
    StoreModule.forRoot({}),
    CounterRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
