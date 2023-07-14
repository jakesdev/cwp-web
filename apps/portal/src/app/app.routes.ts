import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReleaseNotePageComponent } from './pages/release-note/release-note.component';
import { AboutUsPageComponent } from './pages/about-us/about-us.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'about-us',
    pathMatch: 'full',
    component: AboutUsPageComponent,
  },
  {
    path: 'release-note',
    pathMatch: 'full',
    component: ReleaseNotePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
