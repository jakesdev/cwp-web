import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentFeaturesModule } from '@cwp/shared/features';
import { WebpageComponent } from './page/webpage/webpage.component';
import { remotesAppWebpageRoutes } from './remotes-app-webpage.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remotesAppWebpageRoutes),
    ComponentFeaturesModule,
  ],
  providers: [Title],
  declarations: [WebpageComponent],
  exports: [WebpageComponent],
})
export class RemotesAppWebpageModule {}
