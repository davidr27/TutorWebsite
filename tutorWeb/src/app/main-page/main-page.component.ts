import { Component, OnInit } from '@angular/core';
import {ImagesMenu} from "../api-objects/imagesMenu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //need to be pulled from the database
  options = ['YouTube', 'Websites', 'Scholarships', 'Apps']

  backgroundImage: string | undefined;

  images: ImagesMenu = {images: ['../../assets/images/latinoYouth.png', '../../assets/images/newyork.png']};
  constructor(private router: Router) { }

  ngOnInit(): void{
    console.log('OnInit was called');
  }

  onSelect(option:string){
    this.router.navigate(['mainPage/YouTube']);
  }

}
