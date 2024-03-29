import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SafePipe, SafeUrlPipe } from '@cwp/core/pipe';
import { AppLayoutModule } from '@cwp/shared/layout';
import { CommunityComponent } from './community.component';
import { remotesAppCommunityRoute } from './community.routes';
import { CommentComponent } from './container/comment/comment.component';
import { MessageDialoguesComponent } from './page/message-dialogues/message-dialogues.component';
import { MyMessageComponent } from './page/my-message/my-message.component';
import { MyProfileComponent } from './page/my-profile/my-profile.component';
import { PostComponent } from './page/post/post.component';
import { RecentPostComponent } from './page/recent-post/recent-post.component';
import { TrendingPostComponent } from './page/trending-post/trending-post.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { FollowDetailDialogComponent } from './container/follow-detail-dialog/follow-detail-dialog.component';
import { ModelLayoutModule } from '@cwp/shared/theme';

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
    CommentComponent,
    FollowDetailDialogComponent,
  ],
  exports: [CommunityComponent],
  imports: [
    SafeUrlPipe,
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppCommunityRoute),
    SafePipe,
    FormsModule,
    ReactiveFormsModule,
    ModelLayoutModule,
  ],
})
export class ClientCommunityModule {}
