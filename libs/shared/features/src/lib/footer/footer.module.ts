import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Footer1PopupComponent } from './footer-1-popup/footer-1-popup.component';
import { Footer1UiComponent } from './footer-1-ui/footer-1-ui.component';
import { Footer2PopupComponent } from './footer-2-popup/footer-2-popup.component';
import { Footer2UiComponent } from './footer-2-ui/footer-2-ui.component';


@NgModule({
  declarations: [
    Footer2PopupComponent,
    Footer1PopupComponent,
    Footer1UiComponent,
    Footer2UiComponent,
  ],
  exports: [
    Footer2PopupComponent,
    Footer1PopupComponent,
    Footer1UiComponent,
    Footer2UiComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class FooterModule {}
