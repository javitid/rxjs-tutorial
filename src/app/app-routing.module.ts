import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorsComponent } from './components/operators/operators.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'operators'},
      {
        path: '',
        component: OperatorsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
