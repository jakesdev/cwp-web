import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root',
})
export class CustomerSupportService {
  constructor(private apiServices: ApiService, private router: Router) {}

  createTicket(data: any) {
    return this.apiServices.post<any>('customer-support', data, true);
  }

  getAllTickets() {
    return this.apiServices.get<any>('customer-support', true);
  }
}
