import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //need to be pulled from the database
  options = ['YouTube', 'Websites', 'Scholarships', 'Apps']

  constructor() { }

  ngOnInit(): void {
  }

}
