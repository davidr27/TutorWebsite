import { Component, OnInit } from '@angular/core';

//importing api-object interface menu images
import { ImagesMenu} from "./api-objects/imagesMenu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tutorWeb';

  images: ImagesMenu = {images: ['assets/images/latinoYouth.png', 'assets/images/newyork.png']};
  constructor() {

  }

  ngOnInit(){
    console.log('OnInit was called');
  }

}
