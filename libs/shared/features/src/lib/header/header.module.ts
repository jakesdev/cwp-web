import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Header1PopupComponent } from './header-1-popup/header-1-popup.component';
import { Header1UiComponent } from './header-1-ui/header-1-ui.component';
import { Header2PopupComponent } from './header-2-popup/header-2-popup.component';
import { Header2UiComponent } from './header-2-ui/header-2-ui.component';

@NgModule({
  declarations: [
    Header2PopupComponent,
    Header1PopupComponent,
    Header1UiComponent,
    Header2UiComponent,
  ],
  exports: [
    Header2PopupComponent,
    Header1PopupComponent,
    Header1UiComponent,
    Header2UiComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class HeaderModule {}
