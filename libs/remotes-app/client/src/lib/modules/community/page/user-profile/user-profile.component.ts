import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@cwp/core/endpoint';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, LoaderService, PostService } from '@cwp/core/services';
import { finalize } from 'rxjs';

@Component({
  selector: 'cwp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})


export class UserProfileComponent implements OnInit {
  posts: any[] = [];
  userId!: string;

  isFollowing = false;
  userProfile: UserProfileModel = {
    id: '',
    email: '123@gmail.com',
    avatarUrl: 'https://via.placeholder.com/300',
    role: '',
    isFinishedTutorial: false
  };

  selectedFollowTab = null;

  FollowList = {
    Followers: 0,
    Following: 1,
  };

  followers: any[] = [];
  following: any[] = [];

  followList: any[] = [];
  detailFollowVisible = false;

  constructor(
    private router: ActivatedRoute,
    private postService: PostService,

    private loaderService: LoaderService,

    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log(this.authService.currentUserValue.user._id);
    this.router.params.subscribe((params) => {
      this.userId = params['id'];
      if (this.userId) {
        this.getUserProfile(this.userId);
        this.getPosts(this.userId);
      }
    });
  }

  getUserProfile(userId: string) {
    this.authService.getUserProfile(userId).pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      })
    ).subscribe({
      next: (res) => {
        console.log(res);
        this.loaderService.loading$.next(true);
        this.userProfile = res.user;
        this.isFollowing = res.user.followers.includes(this.authService.currentUserValue.user._id);
        this.loaderService.loading$.next(false);
        this.followers = res.user.followers;
        this.following = res.following;
      },
    });
  }

  getPosts(userId: string) {
    this.postService.getUserPosts(userId).subscribe((res) => {
      this.posts = res.data;
    });
  }

  followUser(userId: string) {
    this.authService.followUser(userId).subscribe({
      next: (res) => {
        this.getUserProfile(this.userId);
      },
    });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  }

  viewDetailFollow(followTab: any) {

    this.selectedFollowTab = followTab;
    this.detailFollowVisible = true;
    this.followList = followTab === this.FollowList.Followers ? this.followers : this.following;
  }

}
