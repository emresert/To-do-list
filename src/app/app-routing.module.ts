import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
// Routings can set here !
  {
  path:'',component:HomeComponent
},
{
  path:'about', component:AboutComponent
},
{
  path:'**', component:NotFoundComponent // ** is used when there is no url like that
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
