import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StatCardComponent } from './containers/stat-card/stat-card.component';
import { AdminCustomerSupportComponent } from './page/admin-customer-support/admin-customer-support.component';
import { AdminDashboardComponent } from './page/admin-dashboard/admin-dashboard.component';
import { AdminReleaseNotePageComponent } from './page/admin-release-note/admin-release-note.component';
import { AdminUserManagementComponent } from './page/admin-user-management/admin-user-management.component';
import { RemotesAppAdminComponent } from './remotes-app-admin.component';
import { remotesAppAdminRoute } from './remotes-app-admin.routes';
import { TicketCreationPopupComponent } from './containers/ticket-creation-popup/ticket-creation-popup.component';
import { AdminMarketplaceComponent } from './page/admin-marketplace/admin-marketplace.component';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTreeModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    FormsModule,
    CKEditorModule,
    RouterModule.forChild(remotesAppAdminRoute),
  ],
  declarations: [
    RemotesAppAdminComponent,
    AdminUserManagementComponent,
    AdminCustomerSupportComponent,
    AdminDashboardComponent,
    StatCardComponent,
    AdminReleaseNotePageComponent,
    TicketCreationPopupComponent,
    AdminMarketplaceComponent,
  ],
})
export class RemotesAppAdminModule {}
