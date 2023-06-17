import { AccountComponent } from './page/account/account.component';
import { Route } from '@angular/router';
import { RemotesAppAccountComponent } from './remotes-app-account.component';
import { SettingComponent } from './page/setting/setting.component';
import { IntegrationComponentsComponent } from './page/integration-components/integration-components.component';

export const remotesAppAccountRoutes: Route[] = [
  {
    path: '',
    component: RemotesAppAccountComponent,
    children: [
      {
        path:'',
        redirectTo:'profile',
        pathMatch:'full',
      },
      {
        path:'profile',
        component: AccountComponent
      },
      {
        path:'setting',
        component: SettingComponent
      },
      {
        path:'integration-components',
        component: IntegrationComponentsComponent,
      }
      ,
      // {
      //   path:'plan-billing',
      //   component: PlanAndBillingComponent,
      // }
    ]
  }
];
