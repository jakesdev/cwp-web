import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppInitService, CoreModule } from '@cwp/core';
import { appReducers, AuthEffect, metaReducers } from '@cwp/core/data-access';
import { ErrorInterceptor, JwtInterceptor } from '@cwp/core/interceptor';
import { AppLayoutModule } from '@cwp/shared/layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsPageComponent } from './applications/pages/about-us/about-us.component';
import { ErrorPageComponent } from './applications/pages/error/error.component';
import { FeaturesPageComponent } from './applications/pages/features/features.component';
import { MaintenancePageComponent } from './applications/pages/maintenance/maintenance.component';
import { OnboardingPageComponent } from './applications/pages/onboarding/onboarding.component';
import { PermissionPageComponent } from './applications/pages/permission/permission.component';
import { ReleaseNotePageComponent } from './applications/pages/release-note/release-note.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

function initializeApp(injector: Injector) {
  return (): Promise<void> => {
    const appInitService = injector.get(AppInitService);
    return appInitService.initApp();
  };
}

const COMPONENT = [
  OnboardingPageComponent,
  AboutUsPageComponent,
  FeaturesPageComponent,
  ReleaseNotePageComponent,
  MaintenancePageComponent,
  ErrorPageComponent,
  PermissionPageComponent,
];

@NgModule({
  declarations: [AppComponent, ...COMPONENT],
  imports: [
    CommonModule,
    BrowserModule,
    AppLayoutModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgxPermissionsModule.forRoot(),
    CoreModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),
    EffectsModule.forRoot([
      AuthEffect,
    ]),
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [Injector],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
