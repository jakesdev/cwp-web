import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FrontPage1PopupComponent } from './front-page-1-popup/front-page-1-popup.component';
import { FrontPage1UiComponent } from './front-page-1-ui/front-page-1-ui.component';
import { FrontPage2PopupComponent } from './front-page-2-popup/front-page-2-popup.component';
import { FrontPage2UiComponent } from './front-page-2-ui/front-page-2-ui.component';

@NgModule({
  declarations: [
    FrontPage1UiComponent,
    FrontPage1PopupComponent,
    FrontPage2UiComponent,
    FrontPage2PopupComponent,
  ],
  exports: [
    FrontPage1UiComponent,
    FrontPage1PopupComponent,
    FrontPage2UiComponent,
    FrontPage2PopupComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CKEditorModule],
})
export class FrontPageModule {}
