import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent} from "./about-us/about-us.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'app', component: AppComponent},
  {path: '', redirectTo: 'app', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
