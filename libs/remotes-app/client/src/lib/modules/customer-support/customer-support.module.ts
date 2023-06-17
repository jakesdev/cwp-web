import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { TicketCreationPopupComponent } from './containers/ticket-creation-popup/ticket-creation-popup.component';
import { ClientCustomerSupportComponent } from './customer-support.component';
import { clientRoute } from './customer-support.routes';
import { CustomerSupportPageComponent } from './page/customer-support/customer-support.component';
@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    MatDialogModule,
    RouterModule.forChild(clientRoute),
  ],
  declarations: [
    ClientCustomerSupportComponent,
    TicketCreationPopupComponent,
    CustomerSupportPageComponent
  ],
  exports: [ClientCustomerSupportComponent],
})
export class ClientCustomerSupportModule {}
