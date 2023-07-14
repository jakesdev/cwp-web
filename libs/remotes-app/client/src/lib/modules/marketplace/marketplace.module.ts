import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { ComponentDetailComponent } from './container/component-detail/component-detail.component';
import { ClientMarketplaceComponent } from './marketplace.component';
import { remotesAppMarketplaceRoutes } from './marketplace.routes';
import { MarketplaceDialogComponent } from './page/marketplace/container/marketplace-dialog/marketplace-dialog.component';
import { MarketplacePageComponent } from './page/marketplace/marketplace.component';
import { PaymentPageComponent } from './page/payment/payment.component';
import { ModelLayoutModule } from '@cwp/shared/theme';

@NgModule({
  declarations: [
    ClientMarketplaceComponent,
    MarketplacePageComponent,
    ComponentDetailComponent,
    PaymentPageComponent,
    MarketplaceDialogComponent,
  ],
  exports: [ClientMarketplaceComponent, MarketplacePageComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppMarketplaceRoutes),
    CurrencyPipe,
    ModelLayoutModule
  ]
})
export class ClientMarketplaceModule {}
