import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@cwp/core/endpoint';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  posts: any[] = [];
  userId!: string;
  userProfile: UserProfileModel = {
    id: '',
    email: '123@gmail.com',
    avatarUrl: 'https://via.placeholder.com/300',
    role: '',
    isFinishedTutorial: false
  };

  constructor(
    private router: ActivatedRoute,
    private postService: PostService,

    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log(params);
      this.userId = params['id'];
      if (this.userId) {
        this.getUserProfile(this.userId);
        this.getPosts(this.userId);
      }
    });
  }

  getUserProfile(userId: string) {
    this.authService.getUserProfile(userId).subscribe({
      next: (res) => {
        this.userProfile = res;
      },
    });
  }

  getPosts(userId: string) {
    this.postService.getUserPosts(userId).subscribe((res) => {
      this.posts = res.data;
    });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  }
}
