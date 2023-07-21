import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  AdminGuard,
  HasLoggedInGuard, HasNotLoggedInGuard, OnBoardingGuard, UserGuard
} from '@cwp/core';
import { ErrorPageComponent } from './applications/pages/error/error.component';
import { MaintenancePageComponent } from './applications/pages/maintenance/maintenance.component';
import { PermissionPageComponent } from './applications/pages/permission/permission.component';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    canActivate: [HasNotLoggedInGuard],
    loadChildren: () =>
      import('./applications/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'admin',
    canActivate: [HasLoggedInGuard, AdminGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/admin').then((m) => m.RemotesAppAdminModule),
  },
  {
    path: 'error',
    pathMatch: 'full',
    component: ErrorPageComponent,
  },
  {
    path: 'permission-denied',
    pathMatch: 'full',
    component: PermissionPageComponent,
  },
  {
    path: 'maintenance',
    pathMatch: 'full',
    component: MaintenancePageComponent
  },
  {
    path: 'page',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then(
        (m) => m.ClientPageSettingModule
      ),
  },
  {
    path: 'auth',
    canActivate: [HasNotLoggedInGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.AuthenticationModule),
  },
  {
    path: 'onboarding',
    canActivate: [OnBoardingGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.ClientOnboardingModule),
  },
  {
    path: 'account',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.ClientAccountModule),
  },
  {
    path: 'marketplace',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.ClientMarketplaceModule),
  },
  {
    path: 'community',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.ClientCommunityModule),
  },
  {
    path: 'customer-support',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.ClientCustomerSupportModule),
  },
  {
    path: 'payment',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.ClientPaymentModule),
  },
  {
    path: 'chat',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.ClientChatModule),
  },
  {
    path: ':url',
    loadChildren: () =>
      import('@cwp/remotes-app/webpage').then((m) => m.RemotesAppWebpageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
