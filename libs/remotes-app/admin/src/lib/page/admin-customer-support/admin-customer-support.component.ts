import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaginationModel, TableFilterModel } from '@cwp/core/model/request';
import { AdminService } from '@cwp/core/services';
import { TicketCreationPopupComponent } from '../../containers/ticket-creation-popup/ticket-creation-popup.component';
@Component({
  selector: 'cwp-admin-customer-support',
  templateUrl: './admin-customer-support.component.html',
  styleUrls: ['./admin-customer-support.component.scss'],
})
export class AdminCustomerSupportComponent implements OnInit {
  tickets!: any[];

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

  constructor(
    private readonly adminService: AdminService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.adminService
      .getCustomerSupport(this.searchFilter)
      .subscribe((res: any) => {
        this.tickets = res.data;
        this.pagination = {
          take: res.meta.page * 10,
          itemCount: res.meta.totalCount,
          pageCount: res.meta.totalPage,
          page: res.meta.page,
        };
      });
  }
  openDialog(id: string) {
    const dialogRef = this.dialog.open(TicketCreationPopupComponent, {
      width: '700px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.adminService.replyCustomerSupport(id, {
          message: result
        }).subscribe((res) => {
          this.ngOnInit();
        }
        );
      }
    }
    );
  }
}
