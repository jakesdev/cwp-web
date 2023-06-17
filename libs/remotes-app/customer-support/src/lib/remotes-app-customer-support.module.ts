import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { TicketCreationPopupComponent } from './containers/ticket-creation-popup/ticket-creation-popup.component';
import { CustomerSupportComponent } from './page/customer-support/customer-support.component';
import { RemotesAppCustomerSupportComponent } from './remotes-app-customer-support.component';
import { remotesAppCustomerSupportRoute } from './remotes-app-customer-support.routes';
@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    MatDialogModule,
    RouterModule.forChild(remotesAppCustomerSupportRoute),
  ],
  declarations: [
    RemotesAppCustomerSupportComponent,
    TicketCreationPopupComponent,
    CustomerSupportComponent
  ],
  exports: [RemotesAppCustomerSupportComponent],
})
export class RemotesAppCustomerSupportModule {}
