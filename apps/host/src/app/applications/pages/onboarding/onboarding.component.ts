import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, NotificationService } from '@cwp/core/services';

@Component({
  selector: 'cwp-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingPageComponent {

  onboardingForm = new FormGroup({
    url: new FormControl('', [Validators.required, Validators.min(6)]),
  });
  isValidUrl = true;
  constructor(
    private authService: AuthService,
    public notificationService: NotificationService,

    public router: Router
  ) {}

  onboarding() {
    this.onboardingForm.get('url')?.status === 'INVALID'
      ? (this.isValidUrl = false)
      : (this.isValidUrl = true);



    if (!this.isValidUrl) {
      return;
    }
    const url = this.onboardingForm.value.url;

    const blackListUrl = [
      'marketplace',
      'features',
      'about-us',
      'release-note',
      'customer-support',
      'admin',
      'page',
      'account',
      'error',
      'permission-denied',
      'maintenance',
      'onboarding',
      'design-system',
    ];

    if (url) {
      if (blackListUrl.includes(url)) {
        this.isValidUrl = false;
        return;
      }
      this.authService.onboarding(url).subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.notificationService.error('URL is already exist');
        }
      });
      //isExistUrl => return notification
    }
  }
}
