import { Component, OnInit } from '@angular/core';
import { LoaderService, TransactionService } from '@cwp/core/services';

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
    this.loaderService.loading$.next(true);
    this.transactionService.getTransactionList().subscribe({
      next: (res) => {
        this.products = res.data;
        this.loaderService.loading$.next(false);
      }
    });
  }
}
