import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoSanitizePipe } from '@cwp/core/pipe';
import { CKEditorModule } from 'ckeditor4-angular';
import { Blog1PopupComponent } from './blog-1-popup/blog-1-popup.component';
import { Blog1UiComponent } from './blog-1-ui/blog-1-ui.component';

@NgModule({
  declarations: [Blog1UiComponent, Blog1PopupComponent],
  exports: [Blog1UiComponent, Blog1PopupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CKEditorModule, NoSanitizePipe]
})
export class BlogModule {}
