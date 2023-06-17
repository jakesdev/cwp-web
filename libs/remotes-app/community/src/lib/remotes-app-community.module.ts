import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '@cwp/shared/layout';
import { SafeUrlPipe } from '../../../../core/src/lib/pipe';
import { SafePipe } from "../../../../core/src/lib/pipe/safe.pipe";
import { MessageDialoguesComponent } from './containers/message-dialogues/message-dialogues.component';
import { MyMessageComponent } from './containers/my-message/my-message.component';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { PostComponent } from './containers/post/post.component';
import { RecentPostComponent } from './containers/recent-post/recent-post.component';
import { TrendingPostComponent } from './containers/trending-post/trending-post.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { CommunityComponent } from './page/community/community.component';
import { MessageComponent } from './page/message/message.component';
import { ProfileComponent } from './page/profile/profile.component';
import { remotesAppCommunityRoute } from './remotes-app-community.routes';

@NgModule({
  declarations: [
    PostComponent,
    MessageComponent,
    ProfileComponent,
    UserProfileComponent,
    MyProfileComponent,
    RecentPostComponent,
    TrendingPostComponent,
    CommunityComponent,
    MessageComponent,
    ProfileComponent,
    MyMessageComponent,
    MessageDialoguesComponent,
  ],
  exports: [CommunityComponent, MessageComponent, ProfileComponent],
  imports: [
    SafeUrlPipe,
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppCommunityRoute),
    SafePipe
  ]
})
export class RemotesAppCommunityModule {}
