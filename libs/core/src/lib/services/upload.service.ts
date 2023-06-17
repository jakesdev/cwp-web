import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '.';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UploadService {
  constructor(
    private router: Router,
    private apiServices: ApiService,

  ) {}

  uploadFile(data: any) {
    return this.apiServices.post<any>('upload/image', data, true);
  }

  uploadMultipleFiles(data: any) {
    return this.apiServices.post<any>('upload/images', data, true);
  }
}
