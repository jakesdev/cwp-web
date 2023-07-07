import { Component, OnInit } from '@angular/core';
import { LoaderService, TransactionService } from '@cwp/core/services';
import { finalize } from 'rxjs';

@Component({
  selector: 'cwp-client-account-plan-and-billing-page',
  templateUrl: './plan-and-billing.component.html',
  styleUrls: ['./plan-and-billing.component.scss'],
})
export class PlanAndBillingPageComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private loaderService: LoaderService
  ) {}
  transactionList: any[] = [];
  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.loaderService.loading$.next(true);
    this.transactionService.getTransactionList().pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      }
      )
    ).subscribe((res) => {
      this.transactionList = res.data;
    });
  }
}
