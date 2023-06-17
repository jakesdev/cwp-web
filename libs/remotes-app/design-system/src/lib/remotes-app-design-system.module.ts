import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './page/dialog/dialog.component';
import { ListTaskComponent } from './page/list-task/list-task.component';
import { RemotesAppDesignSystemComponent } from './remotes-app-design-system.component';
import { remotesAppDesignSystem } from './remotes-app-design-system.routes';

@NgModule({
  imports: [CommonModule, DialogModule, RouterModule.forChild(remotesAppDesignSystem)],
  declarations: [
    RemotesAppDesignSystemComponent,
    ListTaskComponent,
    DialogComponent,
  ],
  exports: [RemotesAppDesignSystemComponent],
})
export class RemotesAppDesignSystemModule {}
