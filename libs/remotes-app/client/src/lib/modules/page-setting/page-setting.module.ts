import { DialogModule } from '@angular/cdk/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoSanitizePipe } from '@cwp/core/pipe';
import { AppLayoutModule, ModelLayoutModule } from '@cwp/shared/layout';
import { ConfirmDialogComponent } from './containers/confirm-dialog/confirm-dialog.component';
import { PageCreateDialogComponent } from './containers/page-create-dialog/page-create-dialog.component';
import { PageEditDialogComponent } from './containers/page-edit-dialog/page-edit-dialog.component';
import { PublishPageDialogComponent } from './containers/publish-page-dialog/publish-page-dialog.component';
import { PageSettingComponent } from './page-setting.component';
import { remotesAppPageRoute } from './page-setting.routes';

@NgModule({
  imports: [
    NoSanitizePipe,
    CommonModule,
    AppLayoutModule,
    ModelLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    DragDropModule,
    RouterModule.forChild(remotesAppPageRoute),
  ],
  declarations: [
    PageSettingComponent,
    PageEditDialogComponent,
    PageCreateDialogComponent,
    ConfirmDialogComponent,
    PublishPageDialogComponent,
  ],
  exports: [PageSettingComponent],
})
export class ClientPageSettingModule {}
