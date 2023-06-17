import { Route } from '@angular/router';
import { PageDetailsComponent } from './containers/page-details/page-details.component';
import { PageSettingComponent } from './page-setting.component';

export const remotesAppPageRoute: Route[] = [
  {
    path: '',
    component: PageSettingComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/page/page.module').then(m => m.PageModule)
      },
      {
        path: 'editing',
        loadChildren: () => import('./page/page-editing/page-editing.module').then(m => m.PageEditingModule)
      },
      {
        path: ':id',
        component: PageDetailsComponent,
      }
    ]
  }
];
