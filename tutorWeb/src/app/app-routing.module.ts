import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent} from "./about-us/about-us.component";
import {AppComponent} from "./app.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'app', component: AppComponent},
  {path: 'mainPage', component: MainPageComponent },
  {path: '', redirectTo:'mainPage', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
