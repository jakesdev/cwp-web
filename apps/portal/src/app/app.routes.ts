import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HeaderSectionComponent } from './components';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HeaderSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
