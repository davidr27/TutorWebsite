import { Component, OnInit } from '@angular/core';
import {EmailService} from "./email.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmailService]
})
export class AppComponent implements OnInit{
  title = 'tutorWeb';

  constructor() {

  }

  ngOnInit(){
    console.log('OnInit was called');
  }


}
