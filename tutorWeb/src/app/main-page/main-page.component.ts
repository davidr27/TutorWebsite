import { Component, OnInit } from '@angular/core';
import {ImagesMenu} from "../api-objects/imagesMenu";
import {Router} from "@angular/router";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //need to be pulled from the database
  options = ['YouTube', 'Websites', 'Scholarships', 'Apps']

  images: ImagesMenu = {images: ['/static/assets/images/latinoYouth.png', '/static/assets/images/newyork.jpg']};
  // backgroundImage: string = this.images.images[1];
  backgroundImage: string | undefined;

  constructor(private router: Router, private email:EmailService) { }

  ngOnInit(): void{
    console.log('OnInit was called');
  }

  onSelect(option:string){
    if(option=='YouTube') {
      this.email.sendEmail("david.9706@hotmail.com");
      this.router.navigate(['mainPage/YouTube']);
    }
    else
      console.log("NOT AVAILABLE YET");
  }

}
