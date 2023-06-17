import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { ClientAccountComponent } from './account.component';
import { remotesAppAccountRoutes } from './account.routes';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { IntegrationComponentsPageComponent, PlanAndBillingPageComponent, SettingPageComponent, UserInformationPageComponent } from './page';


const CONTAINER = [
  AccountContainerComponent,
]

const COMPONENT = [
  UserInformationPageComponent,
  PlanAndBillingPageComponent,
  IntegrationComponentsPageComponent,
  SettingPageComponent
]
@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(remotesAppAccountRoutes),
  ],
  declarations: [
    ClientAccountComponent,
    ...COMPONENT,
    ...CONTAINER
  ],
  exports: [ClientAccountComponent],
})
export class ClientAccountModule {}
