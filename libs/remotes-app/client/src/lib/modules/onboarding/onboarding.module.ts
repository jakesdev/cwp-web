import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { ModelLayoutModule } from '@cwp/shared/theme';
import { OnboardingPageComponent } from './onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';

export const remotesOnboardingRoutes: Route[] = [
    {
      path: '',
      component: OnboardingPageComponent,
    }
  ];


@NgModule({
  declarations: [
    OnboardingPageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesOnboardingRoutes),
    ReactiveFormsModule,
    CurrencyPipe,
    ModelLayoutModule
  ]
})
export class ClientOnboardingModule {}
