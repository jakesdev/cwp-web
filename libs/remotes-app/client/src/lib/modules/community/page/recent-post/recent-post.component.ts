import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '@cwp/core/endpoint';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, LoaderService, NotificationService, PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss'],
})
export class RecentPostComponent implements OnInit {
  data: any[] = [];

  randomUsers: any[] = [];
  constructor(
    private postService: PostService,
    private authService: AuthService,

    private loaderService: LoaderService,

    private notificationService: NotificationService,

    public dialog: MatDialog,
  ) {}

  user!: UserProfileModel;
  ngOnInit(): void {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.user = res.user;
        console.log(this.user);
      },
    });
    this.getPosts();
    this.getRandomUsers();
  }

  getPosts() {
    this.postService.getPosts(1).subscribe((res) => {
      this.data = res.data.map((item: any) => {
        return {
          ...item,
          isShowComment: false,
        };
      });
    });
  }

  getRandomUsers() {
    this.postService.getRandomUsers().subscribe((res) => {
      this.randomUsers = res.data;
    });
  }

  onShowComment(index: number) {
    this.data[index].isShowComment = true;
  }

  likePost(id: string) {
    this.postService.likePost(id).subscribe((res: any) => {
      this.getPosts();
    });
  }

  addFavorite(id: string) {
    this.postService.addFavorite(id).subscribe((res: any) => {
      this.getPosts();
    });
  }

  onFollow(id: string) {
    this.authService.followUser(id).subscribe({
      next: (res) => {
        const user = this.randomUsers.find((item) => item._id === id);
        if (user) {
          user.isFollow = !user.isFollow;
        }
      },
      error: (err) => {
        this.notificationService.error(err);
      }
    });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  };
}
