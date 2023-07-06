import { Component, OnInit } from '@angular/core';
import { environment } from '@cwp/core/endpoint';
import { PaginationModel, TableFilterModel } from '@cwp/core/model/request';
import { AdminService, LoaderService } from '@cwp/core/services';
import { debounceTime, finalize, Subject } from 'rxjs';

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

  private debounceSubject: Subject<any> = new Subject<any>();

  constructor(
    private readonly adminService: AdminService,

    private readonly loaderService: LoaderService
  ) {}


  ngOnInit() {
    this.webView = environment.webView;
    this.fetchUsers(this.searchFilter);
    this.debounceSubject
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.fetchUsers(this.searchFilter);
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

  onChangePagination(event: any) {
    this.searchFilter.page = event.page + 1;
    this.fetchUsers(this.searchFilter);
  }

  fetchUsers(searchFilter: TableFilterModel) {
    this.adminService.getUsers(searchFilter).pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      })
    ).subscribe((res: any) => {
      this.loaderService.loading$.next(true);
      this.customers = res.data;
      this.pagination = {
        take: res.meta.limit,
        itemCount: res.meta.itemCount,
        pageCount: res.meta.pageCount,
        hasPreviousPage: res.meta.page > 1,
        hasNextPage: res.meta.page < res.meta.totalPage,
        page: res.meta.page,
      };
    });
  }

  openDialog() {
    // const dialogRef = this.dialog.open(AddUserComponent, {
    //   width: '500px',
    //   data: { name: 'this.name', animal: 'this.animal' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
