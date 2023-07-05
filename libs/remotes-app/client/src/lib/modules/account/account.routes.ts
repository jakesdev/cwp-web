import { Route } from '@angular/router';
import { ClientAccountComponent } from './account.component';
import { PlanAndBillingPageComponent } from './page';
import { FavoritesComponent } from './page/favorites/favorites.component';
import { IntegrationComponentsPageComponent } from './page/integration-components/integration-components.component';
import { PasswordComponent } from './page/password/password.component';
import { SettingPageComponent } from './page/setting/setting.component';
import { UserInformationPageComponent } from './page/user-information/user-information.component';

export const remotesAppAccountRoutes: Route[] = [
  {
    path: '',
    component: ClientAccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: UserInformationPageComponent
      },
      {
        path: 'setting',
        component: SettingPageComponent
      },
      {
        path: 'integration-components',
        component: IntegrationComponentsPageComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
      {
        path: 'plan',
        component: PlanAndBillingPageComponent,
      },

    ]
  }
];
