/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService } from '@cwp/core/services';
import { Store } from '@ngrx/store';
import { authAction, AuthState } from '../../../../core/src/lib/data-access';
import { SITE_ADMIN_NAVIGATION } from './constants';

@Component({
  selector: 'cwp-remotes-app-admin',
  templateUrl: './remotes-app-admin.component.html'
})
export class RemotesAppAdminComponent {
  SITE_ADMIN_NAVIGATION = SITE_ADMIN_NAVIGATION;

  sideBar = false;

  user!: UserProfileModel;

  isAuthenticated = false;


  constructor(
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.user = res.user;
        this.isAuthenticated = !!this.user;
      },
    });
  }
  toggleSideBar() {
    this.sideBar = !this.sideBar;
  }

  logOut(): void {
    this.store.dispatch(authAction.logOutUser());
  }
}
