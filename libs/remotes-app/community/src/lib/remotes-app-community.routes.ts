import { Route } from '@angular/router';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { CommunityComponent } from './page/community/community.component';
import { MessageComponent } from './page/message/message.component';
import { PostComponent } from './containers/post/post.component';
import { ProfileComponent } from './page/profile/profile.component';
import { TrendingPostComponent } from './containers/trending-post/trending-post.component';
import { RecentPostComponent } from './containers/recent-post/recent-post.component';
import { MyMessageComponent } from './containers/my-message/my-message.component';

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
        path: 'post/:id',
        component: PostComponent,
      },
    ],
  },
  {
    path:'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: MyProfileComponent,
      },
      {
        path: ':id',
        component: UserProfileComponent,
      },
    ]
  },
  {
    path: 'message',
    component: MessageComponent,
    children: [
      {
        path:'',
        component: MyMessageComponent,
      }
    ]
  },
 
];
