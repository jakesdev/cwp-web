import { Route } from '@angular/router';
import { RemotesAppMarketplaceComponent } from './remotes-app-marketplace.component';
import { MarketplaceComponent } from './page/marketplace/marketplace.component';
import { ComponentDetailComponent } from './container/component-detail/component-detail.component';
import { PaymentComponent } from './page/payment/payment.component';

export const remotesAppMarketplaceRoutes: Route[] = [
  {
    path: '',
    component: RemotesAppMarketplaceComponent,
    children: [
      {
        path:'',
        component: MarketplaceComponent
      },
      {
        path:'checkout/:name',
        component: PaymentComponent
      }
    ]
  }
];
