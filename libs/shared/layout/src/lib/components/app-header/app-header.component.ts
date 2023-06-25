import { Component } from '@angular/core';
import { authAction, AuthState } from '@cwp/core/data-access';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService } from '@cwp/core/services';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cwp-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
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

  logOut(): void {
    this.store.dispatch(authAction.logOutUser());
  }
}
