import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SafePipe } from '@cwp/core/pipe';
import { AppLayoutModule } from '@cwp/shared/layout';
import { ClientAccountComponent } from './account.component';
import { remotesAppAccountRoutes } from './account.routes';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import {
  IntegrationComponentsPageComponent,
  PlanAndBillingPageComponent,
  SettingPageComponent,
  UserInformationPageComponent
} from './page';
import { FavoritesComponent } from './page/favorites/favorites.component';
import { PasswordComponent } from './page/password/password.component';

const CONTAINER = [AccountContainerComponent];

const COMPONENT = [
  UserInformationPageComponent,
  PlanAndBillingPageComponent,
  IntegrationComponentsPageComponent,
  SettingPageComponent,
];
@NgModule({
  declarations: [
    ClientAccountComponent,
    ...COMPONENT,
    ...CONTAINER,
    FavoritesComponent,
    PasswordComponent,
  ],
  exports: [ClientAccountComponent],
  imports: [
    MatIconModule,
    CommonModule,
    AppLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(remotesAppAccountRoutes),
    SafePipe
  ]
})
export class ClientAccountModule {}
