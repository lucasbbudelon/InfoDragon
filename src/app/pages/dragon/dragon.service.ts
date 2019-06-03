import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Dragon } from './dragon';

@Injectable()
export class DragonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Dragon[]> {
    return this.http
      .get<Dragon[]>(environment.apiDragon)
      .pipe(catchError(this.handleError));
  }

  getById(id: string): Observable<Dragon> {
    return this.http
      .get<Dragon>(`${environment.apiDragon}/${id}`)
      .pipe(catchError(this.handleError));
  }

  post(dragon: Dragon): Observable<Dragon> {
    return this.http
      .post<Dragon>(environment.apiDragon, dragon)
      .pipe(catchError(this.handleError));
  }

  put(id: string, dragon: Dragon): Observable<Dragon> {
    return this.http
      .put<Dragon>(`${environment.apiDragon}/${id}`, dragon)
      .pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<Dragon> {
    return this.http
      .delete<Dragon>(`${environment.apiDragon}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Ocorreu um erro na integração com a api de Dragões.');
  }
}
