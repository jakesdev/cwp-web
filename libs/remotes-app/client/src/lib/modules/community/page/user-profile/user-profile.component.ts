import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@cwp/core/endpoint';
import { UserProfileModel } from '@cwp/core/model/response';
import { PostService } from '@cwp/core/services';

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
    userAvatarUrl: 'https://via.placeholder.com/300',
    role: '',
    isFinishedTutorial: false
  }

  constructor(
    private router: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.userId = params['userId'];
      if (this.userId) {
        this.getUserProfile();
        this.getPosts();
      }
    });
    // TODO: remove when integrate api
    this.getPosts();
  }

  getUserProfile() {
    // TODO: get user profile
  }

  getPosts() {
    this.postService.getTrendingPosts(1).subscribe((res) => {
      this.posts = res.data;
    });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  }
}
