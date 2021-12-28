import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";
import { MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatDividerModule} from "@angular/material/divider";
import { MatIconModule} from "@angular/material/icon";
import { MatListModule} from "@angular/material/list";
import { MatTabsModule} from "@angular/material/tabs";
import { MatToolbarModule} from "@angular/material/toolbar";

import { MainPageComponent } from './main-page/main-page.component';
import { YoutubePageComponent } from './main-page/youtube-page/youtube-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MainPageComponent,
    YoutubePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
