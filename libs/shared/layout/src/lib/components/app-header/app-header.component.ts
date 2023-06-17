import { Component } from '@angular/core';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService } from '@cwp/core/services';
import { Store } from '@ngrx/store';
import {
  authAction,
  AuthState,
} from '../../../../../../core/src/lib/data-access';

@Component({
  selector: 'cwp-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  user!: UserProfileModel;

  constructor(
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.user = res.user;
      },
    });
  }

  logOut(): void {
    this.store.dispatch(authAction.logOutUser());
  }
}
