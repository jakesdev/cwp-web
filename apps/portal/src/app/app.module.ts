import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppLayoutModule } from '@cwp/shared/layout';
import { NoSanitizePipe, SafePipe } from '@cwp/core/pipe';
import { ContentSectionComponent, FaqSectionComponent, FooterSectionComponent, HeaderSectionComponent, HeroSectionComponent, LogoSectionComponent, PricingSectionComponent } from './components';
import { ApiService, PostService } from '@cwp/core/services';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app.routes';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReleaseNotePageComponent } from './pages/release-note/release-note.component';
import { AboutUsPageComponent } from './pages/about-us/about-us.component';
import { FeaturesPageComponent } from './pages/features/features.component';


const PAGE = [
  AppComponent,
  HomePageComponent,
  AboutUsPageComponent,
  ReleaseNotePageComponent,
  FeaturesPageComponent
]
const COMPONENT = [
  PricingSectionComponent,
  ContentSectionComponent,
  FaqSectionComponent,
  FooterSectionComponent,
  HeaderSectionComponent,
  HeroSectionComponent,
  LogoSectionComponent,
  PricingSectionComponent,
]
@NgModule({
  declarations: [...PAGE, ...COMPONENT],
  imports: [
    BrowserModule,
    AppLayoutModule,
    SafePipe,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    NoSanitizePipe
  ],
  providers: [ApiService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
