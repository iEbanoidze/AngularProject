import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlusMinusNumbersComponent } from './plus-minus-numbers/plus-minus-numbers.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path:'second-page', component: SecondPageComponent},
  {path:'home', component: HomeComponent},
  {path:'plusminus', component: PlusMinusNumbersComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
