import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoSanitizePipe, SafePipe } from '@cwp/core/pipe';
import { ModelLayoutModule } from '@cwp/shared/layout';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionComponentModule } from './accordion/accordion.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import { Footer1PopupComponent } from './footer/footer-1-popup/footer-1-popup.component';
import { Footer1UiComponent } from './footer/footer-1-ui/footer-1-ui.component';
import { Footer2PopupComponent } from './footer/footer-2-popup/footer-2-popup.component';
import { Footer2UiComponent } from './footer/footer-2-ui/footer-2-ui.component';
import { FrontPageModule } from './front-page/front-page.module';
import { GalleryModule } from './gallery/gallery.module';
import { HeaderModule } from './header/header.module';
import { PricingSection1PopupComponent } from './pricing-section/pricing-section-1-popup/pricing-section-1-popup.component';
import { PricingSection1UiComponent } from './pricing-section/pricing-section-1-ui/pricing-section-1-ui.component';
import { SelectionComponentComponent } from './selection-component/selection-component.component';
import { EditDialogComponent } from './setup-component/edit-dialog/edit-dialog.component';
import { TimelineModule } from './timeline/timeline.module';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    SelectionComponentComponent,
    EditDialogComponent,
    Footer1UiComponent,
    Footer2UiComponent,
    Footer1PopupComponent,
    Footer2PopupComponent,
    PricingSection1UiComponent,
    PricingSection1PopupComponent,
  ],
  exports: [
    BlogModule,
    HeaderModule,
    AccordionComponentModule,
    GalleryModule,
    CategoryModule,
    VideoModule,
    TimelineModule,
    FrontPageModule,
    SelectionComponentComponent,
    EditDialogComponent,
    Footer1UiComponent,
    Footer2UiComponent,
    Footer1PopupComponent,
    Footer2PopupComponent,
    PricingSection1UiComponent,
    PricingSection1PopupComponent,
  ],
  imports: [
    FrontPageModule,
    BlogModule,
    HeaderModule,
    ModelLayoutModule,
    AccordionComponentModule,
    GalleryModule,
    CategoryModule,
    VideoModule,
    TimelineModule,
    SafePipe,
    CommonModule,
    SidebarModule,
    ButtonModule,
    CarouselModule,
    RouterModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    NoSanitizePipe
  ]
})
export class ComponentFeaturesModule {}

// FIX: this is shit, move to scam pattern
// do not import all component into one module
