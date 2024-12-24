import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification"> 
                 <p> This is the website where you can shop.</p>
                 <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>` ,
  styles: ["notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0;}", "p{font-size: 14px; text-align:center;}",".close{float: right; margin-top: -40px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification: boolean = false;

  closeNotification(){

  this.displayNotification = true;
}
}