import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from './constants';

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}

  loginPage(): void {
    this.router.navigate([`${Pages.AUTH}/${Pages.LOGIN}`]);
  }

  defaultPage(): void {
    this.router.navigate([`/`]);
  }
  maintenancePage(): void {
    this.router.navigate([`${Pages.MAINTENANCE}`]);
  }

}
