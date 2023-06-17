import { Component } from '@angular/core';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, LoaderService } from '@cwp/core/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cwp-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public isLoading$ = this.loaderService.loading$;

  userProfile!: UserProfileModel | null;
  constructor(
    public loaderService: LoaderService,
    public translateService: TranslateService,
    private authService: AuthService) {
    this.userProfile = this.authService.currentUserValue.user || null;
  }

  // languages = [
  //   { country: 'English', flag: '../assets/shared/images/england.png', language: 'en-US' },
  //   { country: 'Vietnam', flag: '../assets/shared/images/vietnam.png', language: 'vi-VI' },
  // ];

  // public selectedLanguage = this.languages[0];

  // public changeLanguage(language: string): void {
  //   this.selectedLanguage = language;

  //   this.translateService.use(language.language);
  // }
}
