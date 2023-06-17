import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SafePipe, SafeUrlPipe } from '@cwp/core/pipe';
import { AppLayoutModule } from '@cwp/shared/layout';
import { CommunityComponent } from './community.component';
import { remotesAppCommunityRoute } from './community.routes';
import { MessageDialoguesComponent } from './page/message-dialogues/message-dialogues.component';
import { MyMessageComponent } from './page/my-message/my-message.component';
import { MyProfileComponent } from './page/my-profile/my-profile.component';
import { PostComponent } from './page/post/post.component';
import { RecentPostComponent } from './page/recent-post/recent-post.component';
import { TrendingPostComponent } from './page/trending-post/trending-post.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';

@NgModule({
  declarations: [
    PostComponent,
    UserProfileComponent,
    MyProfileComponent,
    RecentPostComponent,
    TrendingPostComponent,
    CommunityComponent,
    MyMessageComponent,
    MessageDialoguesComponent,
  ],
  exports: [CommunityComponent],
  imports: [
    SafeUrlPipe,
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppCommunityRoute),
    SafePipe
  ]
})
export class ClientCommunityModule {}
