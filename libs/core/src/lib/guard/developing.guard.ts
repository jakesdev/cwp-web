import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../environments/endpoint';
import { NavigationService } from '../services';

@Injectable()
export class DevelopingGuard {
  constructor(
    private navigationService: NavigationService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (environment.production) {
      this.navigationService.loginPage();
      return false;
    }
    // not logged in so redirect to login page with the return url
    return true;
  }
}
