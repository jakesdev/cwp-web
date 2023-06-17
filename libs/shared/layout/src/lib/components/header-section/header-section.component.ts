import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { authAction, AuthState } from '@cwp/core/data-access';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService } from '@cwp/core/services';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cwp-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {

  userProfile!: UserProfileModel | null;
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.userProfile = res.user;
        this.isAuthenticated = !!this.userProfile;
      }
    });
  }

  @Input() bgGray = false;
  showMenu = false;

  logOut(): void {
    this.store.dispatch(authAction.logOutUser());
  }
}
