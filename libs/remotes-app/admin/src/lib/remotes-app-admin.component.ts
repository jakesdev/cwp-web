import { Component } from '@angular/core';
import { AuthService } from '@cwp/core/services';
import { SITE_ADMIN_NAVIGATION } from './constants';

@Component({
  selector: 'cwp-remotes-app-admin',
  templateUrl: './remotes-app-admin.component.html'
})
export class RemotesAppAdminComponent {
  SITE_ADMIN_NAVIGATION = SITE_ADMIN_NAVIGATION;

  sideBar = false;

  constructor(
    private authService: AuthService
  ) {}
  toggleSideBar() {
    this.sideBar = !this.sideBar;
  }

  logOut() {
    this.authService.logout();
  }
}
