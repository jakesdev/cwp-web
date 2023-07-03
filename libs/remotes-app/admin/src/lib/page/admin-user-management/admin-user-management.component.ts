import { Component, OnInit } from '@angular/core';
import { environment } from '@cwp/core/endpoint';
import { PaginationModel, TableFilterModel } from '@cwp/core/model/request';
import { AdminService } from '@cwp/core/services';

@Component({
  selector: 'cwp-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.scss'],
})
export class AdminUserManagementComponent implements OnInit {
  customers!: any[];

  webView = '';

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
    private readonly adminService: AdminService
  ) {}

  ngOnInit() {
    this.webView = environment.webView;
    this.adminService.getUsers(this.searchFilter).subscribe((res: any) => {
      this.customers = res.data;
      this.pagination = {
        take: res.meta.page * 10,
        itemCount: res.meta.totalCount,
        pageCount: res.meta.totalPage,
        page: res.meta.page,
      };
    });
  }
}
