import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent} from "./about-us/about-us.component";
import {AppComponent} from "./app.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {YoutubePageComponent} from "./main-page/youtube-page/youtube-page.component";
import {MathComponent} from "./main-page/youtube-page/math/math.component";

const routes: Routes = [
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'app', component: AppComponent},
  {path: 'mainPage', component: MainPageComponent, children: [
      {path: 'YouTube', component: YoutubePageComponent, children:[
          {path: 'math', component: MathComponent}
        ]},
    ] },
  {path: '', redirectTo:'mainPage', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
