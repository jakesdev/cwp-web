import { Component } from '@angular/core';
import { SITE_ADMIN_NAVIGATION } from './constants';

@Component({
  selector: 'cwp-remotes-app-admin',
  templateUrl: './remotes-app-admin.component.html'
})
export class RemotesAppAdminComponent {
  SITE_ADMIN_NAVIGATION = SITE_ADMIN_NAVIGATION;
  constructor(
  ) {

  }
  sideBar = false;
  toggleSideBar() {
    this.sideBar = !this.sideBar;
  }

  logOut() {
  }
}
