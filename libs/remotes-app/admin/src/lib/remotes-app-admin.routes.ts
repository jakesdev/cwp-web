import { Route } from '@angular/router';
import { AdminCustomerSupportComponent } from './page/admin-customer-support/admin-customer-support.component';
import { AdminDashboardComponent } from './page/admin-dashboard/admin-dashboard.component';
import { AdminMarketplaceComponent } from './page/admin-marketplace/admin-marketplace.component';
import { AdminNotificationComponent } from './page/admin-notification/admin-notification.component';
import { AdminReleaseNotePageComponent } from './page/admin-release-note/admin-release-note.component';
import { AdminUserManagementComponent } from './page/admin-user-management/admin-user-management.component';
import { RemotesAppAdminComponent } from './remotes-app-admin.component';

export const remotesAppAdminRoute: Route[] = [
  {
    path: '',
    component: RemotesAppAdminComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'user-management',
        component: AdminUserManagementComponent
      },
      {
        path: 'marketplace',
        component: AdminMarketplaceComponent
      },
      {
        path: 'customer-support',
        component: AdminCustomerSupportComponent
      },
      {
        path: 'release-note',
        component: AdminReleaseNotePageComponent
      },
      {
        path: 'notification',
        component: AdminNotificationComponent
      }

    ]
  }
];
