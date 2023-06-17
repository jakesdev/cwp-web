import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetSelectionComponent } from './widget-selection.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WidgetSelectionComponent,
  ],
  exports: [WidgetSelectionComponent],
})
export class WidgetSelectionModule {}
