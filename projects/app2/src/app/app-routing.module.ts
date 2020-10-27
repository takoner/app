import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View21Component } from '../../../../projects/app2/src/app/view21/view21.component';
import { View22Component } from '../../../../projects/app2/src/app/view22/view22.component';

const routes: Routes = [
  { path: 'app2/one', component: View21Component },
  { path: 'app2/two', component: View22Component },
  { path: 'app2', redirectTo: 'app2/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
