import { Component, OnInit } from '@angular/core';
import { TransactionService } from '@cwp/core/services';

@Component({
  selector: 'cwp-admin-marketplace',
  templateUrl: './admin-marketplace.component.html',
  styleUrls: ['./admin-marketplace.component.scss'],
})
export class AdminMarketplaceComponent implements OnInit {
  transactions!: any[];

  constructor(private readonly transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactionList().subscribe((res) => {
      this.transactions = [...res.data];
      console.log(this.transactions);
    });
  }
}
