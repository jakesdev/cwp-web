import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService, NavigationService, NotificationService } from '../services';

@Injectable()
export class HasLoggedInGuard {
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,

    private helper: JwtHelperService,
    private notificationService: NotificationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('route', route);
    this.helper.tokenGetter = () => {
      const currentUser = this.authService.currentUserValue;
      return currentUser?.token?.refreshToken;
    };
    const currentUser = this.authService.currentUserValue;
    const expirationDate = this.helper.getTokenExpirationDate(
      currentUser?.token?.refreshToken.trim()
    );
    if (expirationDate && expirationDate > new Date()) {
      return true;
    }

    // if (isExpired) {
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('token');
    // localStorage.removeItem('refreshToken');
    // return true;
    // }
    this.notificationService.error('You need to login to access this page');
    this.navigationService.loginPage();
    // not logged in so redirect to login page with the return url
    return true;
  }
}
