import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavigationService } from '../services';
import { environment } from '@cwp/core/endpoint';

@Injectable()
export class DevelopingGuard {
  constructor(
    private navigationService: NavigationService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (environment.production) {
      this.navigationService.defaultPage();
      return false;
    }
    // not logged in so redirect to login page with the return url
    return true;
  }
}
