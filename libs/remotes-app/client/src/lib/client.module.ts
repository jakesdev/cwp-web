import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { remotesAppClientRoutes } from './client.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remotesAppClientRoutes),
  ],
})
export class RemotesAppClientModule {}
