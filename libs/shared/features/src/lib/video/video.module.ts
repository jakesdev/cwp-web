import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SafeUrlPipe } from '@cwp/core/pipe';
import { Video1PopupComponent } from './video-1-popup/video-1-popup.component';
import { Video1UiComponent } from './video-1-ui/video-1-ui.component';
@NgModule({
    declarations: [Video1UiComponent, Video1PopupComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SafeUrlPipe, YouTubePlayerModule],
    exports: [Video1UiComponent, Video1PopupComponent],
})
export class VideoModule {}
