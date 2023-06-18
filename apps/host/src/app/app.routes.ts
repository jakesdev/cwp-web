import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  AdminGuard,
  HasLoggedInGuard, HasNotLoggedInGuard, OnBoardingGuard
} from '@cwp/core';
import { AboutUsPageComponent } from './applications/pages/about-us/about-us.component';
import { ErrorPageComponent } from './applications/pages/error/error.component';
import { FeaturesPageComponent } from './applications/pages/features/features.component';
import { MaintenancePageComponent } from './applications/pages/maintenance/maintenance.component';
import { OnboardingPageComponent } from './applications/pages/onboarding/onboarding.component';
import { PermissionPageComponent } from './applications/pages/permission/permission.component';
import { ReleaseNotePageComponent } from './applications/pages/release-note/release-note.component';

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
    path: 'features',
    canActivate: [],
    component: FeaturesPageComponent,
  },
  {
    path: 'about-us',
    canActivate: [],
    component: AboutUsPageComponent,
  },
  {
    path: 'release-note',
    canActivate: [],
    component: ReleaseNotePageComponent,
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
