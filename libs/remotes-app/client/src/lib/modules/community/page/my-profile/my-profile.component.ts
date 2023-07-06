import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@cwp/core/endpoint';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, PostService } from '@cwp/core/services';
import { ConfirmPopupComponent } from '@cwp/shared/theme';

@Component({
  selector: 'cwp-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  posts: any[] = [];
  userId!: string;
  userProfile: UserProfileModel = {
    id: '',
    email: '123@gmail.com',
    avatarUrl: 'https://via.placeholder.com/300',
    role: '',
    isFinishedTutorial: false
  };

  loaded = false;

  constructor(
    private router: ActivatedRoute,
    private postService: PostService,

    private authService: AuthService,
    public dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.getPosts(this.userProfile._id || '');
  }

  onLoad(e: any) {
    console.log(e);
    this.loaded = true;
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


  deletePost(id: string) {
    this.dialog.open(ConfirmPopupComponent, {
      width: '400px',
      data: {
        message: 'Are you sure you want to delete this post?',
        onConfirm: () => {
          this.postService.deletePost(id).subscribe((res) => {
            this.getPosts(this.userProfile._id || '');
          });
        }
      }
    });
  }
}
