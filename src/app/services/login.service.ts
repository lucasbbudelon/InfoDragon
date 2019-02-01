import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../../environments/environment';

import { BackEndFeedback } from '../models/application/_index';
import { User } from '../models/entities/_index';

@Injectable()
export class LoginService {

  private cookieName = 'InfoDragonLogin';
  public redirectUrl = '/';

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  getUser(): Observable<User> {
    return this.http
      .get<User[]>(environment.apiUser)
      .pipe(
        map(users => {
          const login = this.cookieService.get(this.cookieName);
          let user: User;

          users.forEach(u => {
            if (u.login === login) {
              user = u;
            }
          });

          return user;
        }),
        catchError(this.handleError)
      );
  }

  check(): boolean {
    return this.cookieService.check(this.cookieName);
  }

  run(backEndFeedback: BackEndFeedback, login: string, password: string): Observable<boolean> {
    return this.http
      .get<User[]>(environment.apiUser)
      .pipe(
        map(users => {

          let loginOk = false;

          users.forEach(u => {
            if (u.login === login && u.password === password) {

              if (this.cookieService.check(this.cookieName)) {
                this.cookieService.delete(this.cookieName);
              }

              this.cookieService.set(this.cookieName, u.login);
              loginOk = true;
            }
          });

          if (loginOk) {
            this.router.navigate([this.redirectUrl]);
          } else {
            backEndFeedback.errorMessage = 'Login e/ou senha inválido.';
          }

          return loginOk;
        }),
        catchError(this.handleError)
      );
  }

  out() {
    this.cookieService.delete(this.cookieName);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Ocorreu um erro na integração com a api de autenticação.');
  }
}
