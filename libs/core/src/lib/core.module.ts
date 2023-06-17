import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ModuleWithProviders, Optional,
  SkipSelf
} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminGuard, DevelopingGuard, HasLoggedInGuard, HasNotLoggedInGuard, OnBoardingGuard, UserGuard } from './guard';
import { ErrorInterceptor, JwtInterceptor } from './interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiService, AuthService, CustomerSupportService, MarketPlaceService, NavigationService, NotificationService, PostService, TransactionService, UploadService } from './services';


export const GUARD = [
  HasLoggedInGuard,
  HasNotLoggedInGuard,
  AdminGuard,
  UserGuard,
  OnBoardingGuard,
  DevelopingGuard
];
export const SERVICES = [
  ApiService,
  AuthService,
  TransactionService,
  NavigationService,
  NotificationService,
  ErrorInterceptor,
  JwtInterceptor,
  CustomerSupportService,
  MarketPlaceService,
  PostService,
  UploadService,
];

export const MODULES = [
  CommonModule,
  NgxPermissionsModule,
  MatSnackBarModule,
  MatDialogModule,
];
@NgModule({
  imports: [...MODULES],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...SERVICES, ...GUARD],
    };
  }
}
