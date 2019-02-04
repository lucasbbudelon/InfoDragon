import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';

import { DragonService, LoginService } from '../services/_index';
import { Dragon } from '../models/entities/dragon';

describe('DragonService', () => {
  let service: DragonService;
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
    service = TestBed.get(DragonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const dragonService: DragonService = TestBed.get(DragonService);
    expect(dragonService).toBeTruthy();
  });

  // it('should return an Observable<Dragon[]> on getAll()', () => {

  //   const mock: Dragon[] = [
  //     { id: '1', name: 'name 01', type: 'type 01', createdAt: 'date 01' },
  //     { id: '2', name: 'name 02', type: 'type 02', createdAt: 'date 02' }
  //   ];

  //   service.getAll().subscribe(dragons => {
  //     expect(dragons).toEqual(mock);
  //     const req = httpMock.expectOne(environment.apiDragon);
  //     expect(req.request.method).toBe('GET');
  //     req.flush(mock);
  //   });
  // });

  // it('should return an Observable<Dragon> on getById()', () => {

  //   const mock: Dragon = { id: '1', name: 'name 01', type: 'type 01', createdAt: 'date 01' };

  //   service.getById('1').subscribe(dragon => {
  //     expect(dragon).toBe(mock);
  //     const req = httpMock.expectOne(environment.apiDragon);
  //     expect(req.request.method).toBe('GET');
  //     req.flush(mock);
  //   });
  // });

  // it('should return an Observable<Dragon> on post()', () => {

  //   const mock: Dragon = { id: '1', name: 'name 01', type: 'type 01', createdAt: 'date 01' };

  //   service.post(mock).subscribe(dragon => {
  //     expect(dragon).toBe(mock);
  //     const req = httpMock.expectOne(environment.apiDragon);
  //     expect(req.request.method).toBe('POST');
  //     req.flush(mock);
  //   });
  // });
});
