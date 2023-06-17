import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { Gallery1PopupComponent } from './gallery-1-popup/gallery-1-popup.component';
import { Gallery1UiComponent } from './gallery-1-ui/gallery-1-ui.component';
import { Gallery2PopupComponent } from './gallery-2-popup/gallery-2-popup.component';
import { Gallery2UiComponent } from './gallery-2-ui/gallery-2-ui.component';
import { Gallery3PopupComponent } from './gallery-3-popup/gallery-3-popup.component';
import { Gallery3UiComponent } from './gallery-3-ui/gallery-3-ui.component';
import { Gallery4PopupComponent } from './gallery-4-popup/gallery-4-popup.component';
import { Gallery4UiComponent } from './gallery-4-ui/gallery-4-ui.component';

@NgModule({
  declarations: [
    Gallery1UiComponent,
    Gallery1PopupComponent,
    Gallery2PopupComponent,
    Gallery2UiComponent,
    Gallery3UiComponent,
    Gallery3PopupComponent,
    Gallery4PopupComponent,
    Gallery4UiComponent,
  ],
  exports: [
    Gallery1UiComponent,
    Gallery1PopupComponent,
    Gallery2PopupComponent,
    Gallery2UiComponent,
    Gallery3UiComponent,
    Gallery3PopupComponent,
    Gallery4PopupComponent,
    Gallery4UiComponent,
  ],
  imports: [CommonModule, CarouselModule, GalleriaModule, FormsModule, ReactiveFormsModule],
})
export class GalleryModule {}
