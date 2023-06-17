import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModelLayoutModule } from "../../../../layout/src/lib/layout/model-layout/model-layout.module";
import { Timeline1PopupComponent } from './timeline-1-popup/timeline-1-popup.component';
import { Timeline1UiComponent } from './timeline-1-ui/timeline-1-ui.component';
import { Timeline2PopupComponent } from './timeline-2-popup/timeline-2-popup.component';
import { Timeline2UiComponent } from './timeline-2-ui/timeline-2-ui.component';
import { Timeline3PopupComponent } from './timeline-3-popup/timeline-3-popup.component';
import { Timeline3UiComponent } from './timeline-3-ui/timeline-3-ui.component';

@NgModule({
  declarations: [
    Timeline1PopupComponent,
    Timeline1UiComponent,
    Timeline2UiComponent,
    Timeline2PopupComponent,
    Timeline3PopupComponent,
    Timeline3UiComponent,
  ],
  exports: [
    Timeline1PopupComponent,
    Timeline1UiComponent,
    Timeline2UiComponent,
    Timeline2PopupComponent,
    Timeline3PopupComponent,
    Timeline3UiComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    ModelLayoutModule
  ]
})
export class TimelineModule {}
