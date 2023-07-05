import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'success',
        component: PaymentSuccessComponent
      },
      {
        path: 'failed',
        component: PaymentFailedComponent
      }
    ]
  }
];

const COMPONENTS = [
  PaymentSuccessComponent,
  PaymentFailedComponent
];


@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientPaymentModule {}
