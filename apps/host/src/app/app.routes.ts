import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  AdminGuard,
  HasLoggedInGuard, HasNotLoggedInGuard, OnBoardingGuard
} from '@cwp/core';
import { ErrorPageComponent } from './applications/pages/error/error.component';
import { MaintenancePageComponent } from './applications/pages/maintenance/maintenance.component';
import { OnboardingPageComponent } from './applications/pages/onboarding/onboarding.component';
import { PermissionPageComponent } from './applications/pages/permission/permission.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('@cwp/remotes-app/client').then((m) => m.RemotesAppClientModule),
  },
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
    canActivate: [],
    component: PermissionPageComponent,
  },
  {
    path: 'maintenance',
    pathMatch: 'full',
    component: MaintenancePageComponent
  },
  {
    path: 'onboarding',
    pathMatch: 'full',
    canActivate: [OnBoardingGuard], // onboarding rồi thì ko cho vào nữa // TODO :linh
    component: OnboardingPageComponent
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
