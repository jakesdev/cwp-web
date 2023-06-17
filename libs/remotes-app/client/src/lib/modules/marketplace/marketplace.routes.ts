import { Route } from '@angular/router';
import { ClientMarketplaceComponent } from './marketplace.component';
import { MarketplacePageComponent } from './page/marketplace/marketplace.component';
import { PaymentPageComponent } from './page/payment/payment.component';

export const remotesAppMarketplaceRoutes: Route[] = [
  {
    path: '',
    component: ClientMarketplaceComponent,
    children: [
      {
        path:'',
        component: MarketplacePageComponent
      },
      {
        path:'checkout/:name',
        component: PaymentPageComponent
      }
    ]
  }
];
