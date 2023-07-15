import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReleaseNotePageComponent } from './pages/release-note/release-note.component';
import { AboutUsPageComponent } from './pages/about-us/about-us.component';
import { FeaturesPageComponent } from './pages/features/features.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent,
  },
  {
    path: 'feature',
    component: FeaturesPageComponent,
  },
  {
    path: 'release-note',
    component: ReleaseNotePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
