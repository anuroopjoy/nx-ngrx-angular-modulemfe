import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes = [
  { path: 'adder', component: CounterComponent },
  {
    path: 'remote',
    loadChildren: () => import('mfe1/RemoteModule').then((m) => m.CounterRoutingModule),
  },
  { path: '', redirectTo: '/adder', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
