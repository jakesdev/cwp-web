import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService, NavigationService } from '../services';

@Injectable()
export class HasNotLoggedInGuard {
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,

    private helper: JwtHelperService
  ) {}
  // TODO: initialize app
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.helper.tokenGetter = () => {
      const currentUser = this.authService.currentUserValue;
      return currentUser?.token?.refreshToken;
    };

    const currentUser = this.authService.currentUserValue;

    if (!currentUser.token) {
      return true;
    }

    const expirationDate = this.helper.getTokenExpirationDate(
      currentUser?.token?.refreshToken.trim()
    );

    if (expirationDate && expirationDate < new Date()) {
      return true;
    }

    // if (isExpired) {
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('token');
    // localStorage.removeItem('refreshToken');
    // return true;
    // }

    this.navigationService.loginPage();
    // not logged in so redirect to login page with the return url
    return true;
  }
}
