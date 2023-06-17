import { Route } from '@angular/router';
import { ClientCustomerSupportComponent } from './customer-support.component';
import { CustomerSupportPageComponent } from './page/customer-support/customer-support.component';
import { TicketDetailPageComponent } from './page/ticket-detail/ticket-detail.component';

export const clientRoute: Route[] = [
  {
    path: '',
    component: ClientCustomerSupportComponent,
    children: [
      {
        path:'',
        component: CustomerSupportPageComponent
      },
      {
        path:':id',
        component: TicketDetailPageComponent
      }
    ]
  }
];
