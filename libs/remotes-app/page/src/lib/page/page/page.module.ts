import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HasLoggedInGuard } from '@cwp/core';
import { SafePipe } from '@cwp/core/pipe';
import { ComponentFeaturesModule } from '@cwp/shared/features';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NoSanitizePipe } from '@cwp/core/pipe';
import { PageContainerComponent } from '../../containers/page-container/page-container.component';
import { PageDetailsComponent } from '../../containers/page-details/page-details.component';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [PageContainerComponent, PageComponent, PageDetailsComponent],
  imports: [
    SafePipe,
    CommonModule,
    DragDropModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [HasLoggedInGuard],
        component: PageComponent,
      },
      {
        path: ':id',
        canActivate: [HasLoggedInGuard],
        component: PageDetailsComponent, // Component to be displayed for the page route
      },
    ]),
    ComponentFeaturesModule,
    NoSanitizePipe
  ]
})
export class PageModule {}
