import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { PageEditingComponent } from './page-editing.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild([
      { path: '', component: PageEditingComponent }
    ]),
  ],
  declarations: [PageEditingComponent],
  exports: [PageEditingComponent],
})
export class PageEditingModule {}
