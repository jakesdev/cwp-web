import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category1PopupComponent } from './category-1-popup/category-1-popup.component';
import { Category1UiComponent } from './category-1-ui/category-1-ui.component';
import { Category2UiComponent } from './category-2-ui/category-2-ui.component';
import { Category3UiComponent } from './category-3-ui/category-3-ui.component';
import { Category3PopupComponent } from './category-3-popup/category-3-popup.component';
import { Category2PopupComponent } from './category-2-popup/category-2-popup.component';

@NgModule({
  declarations: [
    Category1PopupComponent,
    Category1UiComponent,
    Category2UiComponent,
    Category3UiComponent,
    Category3PopupComponent,
    Category2PopupComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    Category1PopupComponent,
    Category1UiComponent,
    Category2UiComponent,
    Category3UiComponent,
  ],
})
export class CategoryModule {}
