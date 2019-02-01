import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-right-menu-notification',
  templateUrl: './top-right-menu-notification.component.html',
  styleUrls: ['./top-right-menu-notification.component.scss']
})
export class TopRightMenuNotificationComponent implements OnInit {

  public hidden = true;

  constructor() { }

  ngOnInit() {
  }

  changeHidden() {
    this.hidden = !this.hidden;
  }
}
