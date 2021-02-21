import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunnerComponent } from './components/runner/runner.component';

const routes: Routes = [
  { path: '', component: RunnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
