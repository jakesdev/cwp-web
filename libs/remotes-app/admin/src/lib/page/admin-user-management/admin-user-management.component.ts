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
    searchKey: 'test',
  };

  pagination: PaginationModel = {
    take: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: true,
    page: 0,
  };

  constructor(private readonly adminService: AdminService) {}

  ngOnInit() {
    this.webView = environment.webView;
    this.fetchUsers();
  }
  onSearch() {
    this.searchFilter.page = 1;
    this.fetchUsers();
  }

  onChangePagination(event: any) {
    this.searchFilter.page = event.page + 1;
    this.fetchUsers();
  }

  fetchUsers() {
    this.adminService.getUsers(this.searchFilter).subscribe((res: any) => {
      this.customers = res.data;
      this.pagination = {
        take: res.meta.page * res.meta.perPage,
        itemCount: res.meta.totalCount,
        pageCount: res.meta.totalPage,
        hasPreviousPage: res.meta.page > 1,
        hasNextPage: res.meta.page < res.meta.totalPage,
        page: res.meta.page,
      };
    });
  }
}
