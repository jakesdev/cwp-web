import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '@cwp/core/endpoint';
import { PaginationModel, TableFilterModel } from '@cwp/core/model/request';
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

  user!: UserProfileModel;

  loaded = false;

  searchFilter: TableFilterModel = {
    page: 1,
  };

  pagination: PaginationModel = {
    take: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: true,
    page: 0,
  };


  constructor(
    private postService: PostService,
    private authService: AuthService,

    private loaderService: LoaderService,

    private notificationService: NotificationService,

    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.user = res.user;
      },
    });
    this.getPosts();
    this.getRandomUsers();
  }

  onLoad(e: any) {
    this.loaded = true;
  }
  getPosts() {
    this.postService.getPosts(this.searchFilter).subscribe((res) => {
      this.pagination.hasNextPage = res.meta.hasNextPage;
      this.pagination.hasPreviousPage = res.meta.hasPreviousPage;
      this.pagination.itemCount = res.meta.itemCount;
      this.pagination.page = res.meta.page;
      this.pagination.pageCount = res.meta.pageCount;
      const result = res.data.map((item: any) => {
        return {
          ...item,
          isLike: item.likes.includes(this.user._id),
          isFavorite: item.favorites.includes(this.user._id),
          isShowComment: false,
        };
      });
      if (result.length > 0) {
        this.data = [...this.data, ...result];
      }
      else {
        this.searchFilter.page -= 1;
      }
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

  onLoadMore() {
    this.searchFilter.page += 1;
    this.getPosts();
  }

  likePost(id: string) {
    this.postService.likePost(id).subscribe((res: any) => {
      this.data = this.data.map((item) => {
        if (item._id === id) {
          item.isLike = !item.isLike;
          item.likeCount = item.isLike ? item.likeCount + 1 : item.likeCount - 1;
          item.likes = [...item.likes, this.user._id];
        }
        return item;
      }
      );
    });
  }

  addFavorite(id: string) {
    this.postService.addFavorite(id).subscribe((res: any) => {
      this.data = this.data.map((item) => {
        if (item._id === id) {
          item.isFavorite = !item.isFavorite;
          item.favorites = [...item.favorites, this.user._id];
        }
        return item;
      }
      );
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
