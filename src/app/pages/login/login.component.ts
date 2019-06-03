import { Component, OnInit } from '@angular/core';
import { BackEndFeedback } from '../../components/back-end-feedback/backEndFeedback';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public backEndFeedback: BackEndFeedback = {};
  public login = '';
  public password = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  run() {
    this.backEndFeedback.loading = true;
    this.loginService.run(this.backEndFeedback, this.login, this.password)
      .subscribe(
        (success) => {
          if (!success) {
            this.login = '';
            this.password = '';
            document.getElementById('user').focus();
          }

          this.backEndFeedback.loading = false;
        },
        (error) => {
          this.backEndFeedback.errorMessage = error;
          this.backEndFeedback.loading = false;
        }
      );
  }
}
