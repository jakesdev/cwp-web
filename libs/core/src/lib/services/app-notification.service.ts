import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root'
})
export class AppNotificationService {

  constructor(
    private apiServices: ApiService,
    private router: Router,
  ) {

  }


}
