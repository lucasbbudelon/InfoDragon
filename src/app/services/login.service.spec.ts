import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';

import { DragonService, LoginService } from '../services/_index';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        CookieService,
        DragonService,
        LoginService,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.get(LoginService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const loginService: LoginService = TestBed.get(LoginService);
    expect(loginService).toBeTruthy();
  });
});
