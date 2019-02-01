import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';

import { DragonService, LoginService } from '../services/_index';

import { AuthenticationDefaultGuard } from './authentication-default.guard';

describe('AuthenticationDefaultGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationDefaultGuard,
        HttpClient,
        HttpHandler,
        CookieService,
        DragonService,
        LoginService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  });

  it('should ...', inject([AuthenticationDefaultGuard], (guard: AuthenticationDefaultGuard) => {
    expect(guard).toBeTruthy();
  }));
});
