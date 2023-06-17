import { Route } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';

export const remotesAppHomeRoutes: Route[] = [
    {
        path:'',
        component:HomePageComponent    
    }
];
