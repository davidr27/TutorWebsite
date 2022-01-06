import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(mail: string){
    //will autocatically send json data for mail
    console.log(mail);
    return this.http
      .post<{mail:string}>('api/mainPage', mail)
      .subscribe( mailData =>{
        console.log(mailData);
        console.log("display");
    });
  }
}
