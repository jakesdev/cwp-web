import { Route } from '@angular/router';
import { DialogComponent } from './page/dialog/dialog.component';
import { ListTaskComponent } from './page/list-task/list-task.component';
import { TypographyComponent } from './page/typography/typography.component';
import { RemotesAppDesignSystemComponent } from './remotes-app-design-system.component';

export const remotesAppDesignSystem: Route[] = [
  {
    path: '',
    component: RemotesAppDesignSystemComponent,
    children: [
      {
        path: '',
        component: TypographyComponent
      },
      {
        path: 'list-task',
        component: ListTaskComponent
      },
      {
        path: 'dialog',
        component: DialogComponent
      },
    ]
  }
];
