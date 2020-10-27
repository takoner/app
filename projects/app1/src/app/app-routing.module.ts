import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View11Component } from '../../../../projects/app1/src/app/view11/view11.component';
import { View12Component } from '../../../../projects/app1/src/app/view12/view12.component';

const routes: Routes = [
  { path: 'app1/one', component: View11Component },
  { path: 'app1/two', component: View12Component },
  { path: 'app1', redirectTo: 'app1/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
