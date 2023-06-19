import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, LoaderService, PostService } from '@cwp/core/services';
import { ConfirmPopupComponent } from '@cwp/shared/theme';

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
  deletePost(id: string) {
    this.dialog.open(ConfirmPopupComponent, {
      width: '400px',
      data: {
        message: 'Are you sure you want to delete this post?',
        onConfirm: () => {
          this.postService.deletePost(id).subscribe((res) => {
            this.getPosts();
          });
        }
      }
    });
  }
}
