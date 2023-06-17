import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remotesAppHomeRoutes } from './lib.routes';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AppLayoutModule } from '@cwp/shared/layout';

@NgModule({
  imports: [CommonModule, AppLayoutModule, RouterModule.forChild(remotesAppHomeRoutes)],
  declarations: [
    HomePageComponent,
  ],
  exports: [
    HomePageComponent,
  ],
})
export class RemotesAppHomeModule {}
