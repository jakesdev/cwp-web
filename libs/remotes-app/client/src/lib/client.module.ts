import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { remotesAppClientRoutes } from './client.routes';
import { ClientPageSettingModule } from './modules/page-setting/page-setting.module';

@NgModule({
  imports: [CommonModule, ClientPageSettingModule, RouterModule.forChild(remotesAppClientRoutes)],
  declarations: [],
})
export class RemotesAppClientModule {}
