import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppLayoutModule } from '@cwp/shared/layout';
import { SafePipe } from '@cwp/core/pipe';
import { ContentSectionComponent, FaqSectionComponent, FooterSectionComponent, HeaderSectionComponent, HeroSectionComponent, LogoSectionComponent, PricingSectionComponent } from './components';
import { RouterModule } from '@angular/router';
import { ApiService, PostService } from '@cwp/core/services';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app.routes';


const COMPONENT = [
  PricingSectionComponent,
  ContentSectionComponent,
  FaqSectionComponent,
  FooterSectionComponent,
  HeaderSectionComponent,
  HeroSectionComponent,
  LogoSectionComponent,
  PricingSectionComponent,
  AppComponent
]
@NgModule({
  declarations: [...COMPONENT],
  imports: [
    BrowserModule,
    AppLayoutModule,
    SafePipe,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [ApiService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
