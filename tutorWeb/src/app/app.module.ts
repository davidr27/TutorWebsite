import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";
import { MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatDividerModule} from "@angular/material/divider";
import { MatDialogModule} from "@angular/material/dialog";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatIconModule} from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import { MatListModule} from "@angular/material/list";
import { MatTabsModule} from "@angular/material/tabs";
import { MatToolbarModule} from "@angular/material/toolbar";

import { MainPageComponent } from './main-page/main-page.component';
import { YoutubePageComponent } from './main-page/youtube-page/youtube-page.component';
import { MathComponent } from './main-page/youtube-page/math/math.component';
import {EmailService} from "./email.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MainPageComponent,
    YoutubePageComponent,
    MathComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
