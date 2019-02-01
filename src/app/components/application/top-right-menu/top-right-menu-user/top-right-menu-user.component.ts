import { Component, OnInit } from '@angular/core';

import { User } from '../../../../models/entities/_index';
import { BackEndFeedback } from '../../../../models/application/_index';
import { LoginService } from '../../../../services/_index';

@Component({
  selector: 'app-top-right-menu-user',
  templateUrl: './top-right-menu-user.component.html',
  styleUrls: ['./top-right-menu-user.component.scss']
})

export class TopRightMenuUserComponent implements OnInit {

  public hidden = true;
  public user: User;
  public backEndFeedback: BackEndFeedback = {};

  constructor(private loginService: LoginService) { }

  ngOnInit() { }

  changeHidden() {
    this.hidden = !this.hidden;
    this.loadUser();
  }

  loadUser() {
    this.backEndFeedback.loading = true;
    this.loginService.getUser()
      .subscribe(
        (success) => {
          this.user = success;
          this.user.password = null;
          this.backEndFeedback.errorMessage = null;
          this.backEndFeedback.loading = false;
        },
        (error) => {
          this.backEndFeedback.errorMessage = error;
          this.backEndFeedback.loading = false;
        }
      );
  }

  logoff() {
    this.loginService.out();
  }
}
