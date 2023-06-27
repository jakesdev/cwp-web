import { Component, OnInit } from '@angular/core';
import { LoaderService, TransactionService } from '@cwp/core/services';
import { finalize } from 'rxjs';

@Component({
  selector: 'cwp-client-account-integration-components-page',
  templateUrl: './integration-components.component.html',
  styleUrls: ['./integration-components.component.scss'],
})
export class IntegrationComponentsPageComponent implements OnInit {


  products: any[] = [];

  constructor(
    private transactionService: TransactionService,

    private loaderService: LoaderService,
  ) {
  }
  ngOnInit(): void {
    this.getTransactionList();
  }

  getTransactionList() {
    this.loaderService.loading$.next(true);
    this.transactionService.getTransactionList().pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      }
      )
    ).subscribe({
      next: (res) => {
        this.products = res.data;
      }
    });
  }
}
