import { Route } from '@angular/router';
import { WebpageComponent } from './page/webpage/webpage.component';

export const remotesAppWebpageRoutes: Route[] = [
  {
    path: '', component: WebpageComponent,
    children: [
      { path: ':id', component: WebpageComponent },
    ]
  },
];
