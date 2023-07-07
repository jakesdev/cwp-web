import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../environments/endpoint';
import { HttpErrorResponse } from '../model/response-model';
import { NotificationService } from './notification.service';

@Injectable()
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  get<T>(url: string, hideErrorMessage?: boolean): Observable<T> {
    return this.httpClient
      .get<T>(`${API_URL}/${url}`)
      .pipe(
        catchError((res) => this.handleError(res, url, hideErrorMessage))
      );
  }

  getWithOptions<T>(
    url: string,
    params: {},
    hideErrorMessage?: boolean
  ): Observable<T> {
    return this.httpClient
      .get<T>(`${API_URL}/${url}`, { params })
      .pipe(
        catchError((res) => this.handleError(res, url, hideErrorMessage))
      );
  }

  post<T>(url: string, data: any, hideErrorMessage?: boolean): Observable<T> {
    return this.httpClient.post<T>(`${API_URL}/${url}`, data).pipe(
      catchError((res) =>
        this.handleError(res, url, hideErrorMessage))
    );
  }

  postFile<T>(
    url: string,
    files: File[],
    hideErrorMessage?: boolean
  ): Observable<HttpEvent<T>> {
    const formData: FormData = new FormData();
    for (const file of files) {
      formData.append(file.name, file, file.name);
    }
    const uploadReq = new HttpRequest('POST', `${API_URL}/${url}`, formData, {
      reportProgress: true,
    });

    return this.httpClient.request(uploadReq);
  }

  update<T>(url: string, data: any, hideErrorMessage?: boolean): Observable<T> {
    return this.httpClient
      .patch<T>(`${API_URL}/${url}`, data)
      .pipe(
        catchError((res) => this.handleError(res, url, hideErrorMessage))
      );
  }

  delete<T>(
    url: string,
    data?: any | null,
    hideErrorMessage?: boolean
  ): Observable<T> {
    return this.httpClient
      .delete<T>(`${API_URL}/${url}`, {
        body: data,
      })
      .pipe(
        catchError((res) => this.handleError(res, url, hideErrorMessage))
      );
  }

  private handleError(
    response: HttpErrorResponse,
    requestUrl?: string,
    hideErrorMessage: boolean = true
  ) {

    const errMessage = 'Error';
    if (hideErrorMessage === false) {
      this.notificationService.error(errMessage);
    }

    // if (response.status === 401) {
    //   this.router.navigate(['/auth/login']);
    // }

    // return an observable with a user-facing error message
    return throwError(() => new Error(this.formatString(response.error.message)));

  }

  formatString(str: string): string {
    const words = str.toLowerCase().split('_');
    const formattedWords = words.map((word) => {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalizedWord;
    });
    return formattedWords.join(' ');
  }
}
