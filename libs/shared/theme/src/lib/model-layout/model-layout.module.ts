import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ModelLayoutComponent } from './model-layout.component';

@NgModule({
  declarations: [ModelLayoutComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [ModelLayoutComponent],
})
export class ModelLayoutModule {}
