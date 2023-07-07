import { Injectable } from '@angular/core';
import { ApiService } from '.';

@Injectable()
export class TransactionService {
  constructor(private apiService: ApiService) {}

  getTransactionList() {
    return this.apiService.get<any>('transaction', true);
  }
  getHistory(options: any) {
    return this.apiService.getWithOptions<any>('transaction/history', options, true);
  }
  createTransaction(data: any) {
    return this.apiService.post<any>('transaction', data, true);
  }
  createPayment(data: any) {
    return this.apiService.post<any>(
      'transaction/create-payment-url',
      {
        productId: data._id,
        quantity: data.price,
      },
      true
    );
  }

  createPaymentComponent(data: any) {
    return this.apiService.post<any>(
      'transaction/create-payment-url',
      data,
      true
    );
  }

  getPlan() {
    return this.apiService.get<any>('transaction/plan', true);
  }

  buyPlan(data: any) {
    return this.apiService.post<any>('transaction/buy-plan', data, true);
  }

  getCurrentPlan() {
    return this.apiService.get<any>('transaction/plan', true);
  }
}
