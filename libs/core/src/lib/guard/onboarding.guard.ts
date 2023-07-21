import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService, NavigationService } from '../services';

@Injectable()
export class OnBoardingGuard {
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,

    private helper: JwtHelperService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;

    if (!currentUser) {
      return false;
    }

    if (currentUser.user.isFinishedTutorial) {
      this.navigationService.loginPage();
      return false;
    }

    return true;
  }
}
