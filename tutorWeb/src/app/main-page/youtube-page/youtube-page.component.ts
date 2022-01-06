import { Component, OnInit } from '@angular/core';
import { Classes} from "../../api-objects/classes";
import {MathComponent} from "./math/math.component";
import {MatDialog} from "@angular/material/dialog";
import {EmailService} from "../../email.service";

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.css']
})
export class YoutubePageComponent implements OnInit {

  class: Classes = {classes: ['Math', 'English', 'Spanish', 'Biology', 'History', 'Computer Science']}
  title: string | undefined;
  constructor(public dialog: MatDialog, private email: EmailService) { }

  ngOnInit(): void {
  }

  openDialog(title: string){
    this.title = title;
    console.log(title);
    if (title=='Math'){
      const dialogRed = this.dialog.open(MathComponent, {
        width: '50%',
        height: '50%',
        panelClass: 'custom-background'
      });
    }
  }

  emailSender(emailUser:string){
    this.email.sendEmail(emailUser);
  }


}
