import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@cwp/core/endpoint';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
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
    this.getUserProfile();
    console.log(this.userProfile);
    this.getPosts(this.userProfile._id || '');
  }

  getUserProfile() {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.userProfile = res.user;
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
