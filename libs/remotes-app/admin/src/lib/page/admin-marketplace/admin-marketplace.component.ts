import { Component, OnInit } from '@angular/core';
import { PaginationModel, TableFilterModel } from '@cwp/core/model/request';
import { TransactionService } from '@cwp/core/services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'cwp-admin-marketplace',
  templateUrl: './admin-marketplace.component.html',
  styleUrls: ['./admin-marketplace.component.scss'],
})
export class AdminMarketplaceComponent implements OnInit {
  transactions!: any[];
  pagination: PaginationModel = {
    take: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: true,
    page: 0,
  };
  constructor(
    private readonly transactionService: TransactionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.transactionService.getHistory().subscribe((res) => {
      this.transactions = res.data;
      console.log(this.transactions);

      this.pagination = {
        take: res.meta.page * 10,
        itemCount: res.meta.totalCount,
        pageCount: res.meta.totalPage,
        page: res.meta.page,
      };
    });
  }
  // openDialog() {
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;

  //   this.dialog.open(TicketCreationPopupComponent, dialogConfig);
  // }
}
