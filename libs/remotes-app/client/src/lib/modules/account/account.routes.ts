import { Route } from '@angular/router';
import { ClientAccountComponent } from './account.component';
import { IntegrationComponentsPageComponent } from './page/integration-components/integration-components.component';
import { SettingPageComponent } from './page/setting/setting.component';
import { UserInformationPageComponent } from './page/user-information/user-information.component';

export const remotesAppAccountRoutes: Route[] = [
  {
    path: '',
    component: ClientAccountComponent,
    children: [
      {
        path:'',
        redirectTo:'profile',
        pathMatch:'full',
      },
      {
        path:'profile',
        component: UserInformationPageComponent
      },
      {
        path:'setting',
        component: SettingPageComponent
      },
      {
        path:'integration-components',
        component: IntegrationComponentsPageComponent,
      }
      ,
      // {
      //   path:'plan-billing',
      //   component: PlanAndBillingComponent,
      // }
    ]
  }
];
