import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminLayoutComponent],
  exports: [AdminLayoutComponent],
})
export class SharedLayoutModule {}
