import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SafePipe } from '@cwp/core/pipe';
import { TranslateModule } from '@ngx-translate/core';
import { AppLayoutComponent } from './app-layout.component';
@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, SafePipe],
  declarations: [
    AppLayoutComponent,
  ],
  exports: [
    AppLayoutComponent,
  ],
})
export class AppLayoutModule {}
