import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunnerComponent } from './components/runner/runner.component';
import { TypescriptToJavaComponent } from './components/typescript-to-java/typescript-to-java.component';

const routes: Routes = [
  { path: '', component: RunnerComponent },
  { path: 'typescript-to-java', component: TypescriptToJavaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
