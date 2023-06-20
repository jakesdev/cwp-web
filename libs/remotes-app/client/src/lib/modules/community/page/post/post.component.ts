import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, LoaderService, PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  postId!: string;

  user!: UserProfileModel;

  post: any;
  constructor(
    private postService: PostService,
    private authService: AuthService,

    private loaderService: LoaderService,

    private router: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.user = res.user;
        console.log(this.user);
      },
    });
    this.router.params.subscribe((params) => {
      this.postId = params['id'];
      if (this.postId) {
        this.getPostById(this.postId);
      }
    });
  }

  getPostById(id: string) {
    this.postService.getPostDetail(id).subscribe((res) => {
      this.post = res.data;
    });
  }

  openPreview(url: string): void {
    window.open(url, '_blank');
  }
}
