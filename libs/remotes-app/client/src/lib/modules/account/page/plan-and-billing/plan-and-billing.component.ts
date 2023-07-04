import { Component, OnInit } from '@angular/core';
import { TransactionService } from '@cwp/core/services';

@Component({
  selector: 'cwp-client-account-plan-and-billing-page',
  templateUrl: './plan-and-billing.component.html',
  styleUrls: ['./plan-and-billing.component.scss'],
})
export class PlanAndBillingPageComponent implements OnInit {
  constructor(private transactionService: TransactionService) {}
  transactionList: any[] = [];
  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getTransactionList().subscribe((res) => {
      this.transactionList = res.data;
    });
  }
}
