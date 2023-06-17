import { Route } from '@angular/router';
import { RemotesAppCustomerSupportComponent } from './remotes-app-customer-support.component';
import { TicketDetailComponent } from './page/ticket-detail/ticket-detail.component';
import { CustomerSupportComponent } from './page/customer-support/customer-support.component';

export const remotesAppCustomerSupportRoute: Route[] = [
  {
    path: '',
    component: RemotesAppCustomerSupportComponent,
    children: [
      {
        path:'',
        component: CustomerSupportComponent
      },
      {
        path:':id',
        component: TicketDetailComponent
      }
    ]
  }
];
