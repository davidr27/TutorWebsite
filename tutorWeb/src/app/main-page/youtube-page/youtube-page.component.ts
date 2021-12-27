import { Component, OnInit } from '@angular/core';
import { Classes} from "../../api-objects/classes";

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.css']
})
export class YoutubePageComponent implements OnInit {

  class: Classes = {classes: ['Math', 'English', 'Spanish', 'Biology', 'History', 'Computer Science']}
  constructor() { }

  ngOnInit(): void {
  }

}
