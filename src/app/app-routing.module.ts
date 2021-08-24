import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component'
// this is where we add our imports

const routes: Routes = [
  { path: 'first-component', component: FirstComponent},
  { path: 'second-component', component: SecondComponent}
]; // here we define our routes


//configure ngModule imports and Exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
