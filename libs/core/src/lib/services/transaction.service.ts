import { Injectable } from '@angular/core';
import { ApiService } from '.';

@Injectable()
export class TransactionService {
  constructor(
    private apiService: ApiService
  ) {}

  getTransactionList() {
    return this.apiService.get<any>('transaction', true);
  }

  createTransaction(data: any) {
    return this.apiService.post<any>('transaction', data, true);
  }

  createPayment(data: any) {
    return this.apiService.post<any>('transaction/create-payment-url', data, true);
  }
}
