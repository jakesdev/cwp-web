import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { AccountComponent } from './page/account/account.component';
import { IntegrationComponentsComponent } from './page/integration-components/integration-components.component';
import { PlanAndBillingComponent } from './page/plan-and-billing/plan-and-billing.component';
import { SettingComponent } from './page/setting/setting.component';
import { RemotesAppAccountComponent } from './remotes-app-account.component';
import { remotesAppAccountRoutes } from './remotes-app-account.routes';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(remotesAppAccountRoutes),
  ],
  declarations: [
    RemotesAppAccountComponent,
    AccountComponent,
    AccountContainerComponent,
    PlanAndBillingComponent,
    IntegrationComponentsComponent,
    SettingComponent,
  ],
  exports: [RemotesAppAccountComponent, AccountComponent, AccountContainerComponent],
})
export class RemotesAppAccountModule {}
