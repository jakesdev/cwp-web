import { Route } from '@angular/router';
import { CommunityComponent } from './community.component';
import { MyMessageComponent } from './page/my-message/my-message.component';
import { MyProfileComponent } from './page/my-profile/my-profile.component';
import { PostComponent } from './page/post/post.component';
import { RecentPostComponent } from './page/recent-post/recent-post.component';
import { TrendingPostComponent } from './page/trending-post/trending-post.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';

export const remotesAppCommunityRoute: Route[] = [
  {
    path: '',
    component: CommunityComponent,
    children: [
      {
        path: '',
        component: RecentPostComponent,
      },
      {
        path: 'trending',
        component: TrendingPostComponent,
      },
      {
        path: 'profile',
        component: MyProfileComponent,
      },
      {
        path :'message',
        component: MyMessageComponent,
      },
      {
        path :'profile/:id',
        component: UserProfileComponent
      },
      {
        path: 'post/:id',
        component: PostComponent,
      },
    ],
  },
];
