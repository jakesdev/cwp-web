import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaginationModel, TableFilterModel } from '@cwp/core/model/request';
import { TransactionService } from '@cwp/core/services';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'cwp-admin-marketplace',
  templateUrl: './admin-marketplace.component.html',
  styleUrls: ['./admin-marketplace.component.scss'],
})
export class AdminMarketplaceComponent implements OnInit {
  transactions!: any[];
  searchFilter: TableFilterModel = {
    page: 1,
  };

  pagination: PaginationModel = {
    take: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: true,
    page: 0,
  };

  private debounceSubject: Subject<any> = new Subject<any>();

  constructor(
    private readonly transactionService: TransactionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getHistory(this.searchFilter);
    this.debounceSubject
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.getHistory(this.searchFilter);
      });
  }

  onSearch(e: any) {
    if (e === '') {
      // remove search key
      delete this.searchFilter.searchKey;
    }
    else {
      this.searchFilter.searchKey = e;
    }

    // Emit a value into debounceSubject to trigger the debounce
    this.debounceSubject.next(this.searchFilter);
  }

  getHistory(searchFilter: TableFilterModel) {
    this.transactionService.getHistory(searchFilter).subscribe((res) => {
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

  formatString(str:string) {
  // Replace underscores with spaces
  let formattedStr = str.replace(/_/g, ' ').toLowerCase();

  // Capitalize the first letter of each word
  formattedStr = formattedStr.replace(/\b\w/g, match => match.toUpperCase());

  return formattedStr;
}
  // openDialog() {
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;

  //   this.dialog.open(TicketCreationPopupComponent, dialogConfig);
  // }
}
