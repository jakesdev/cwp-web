import { Component, OnInit } from '@angular/core';
import { PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss'],
})
export class RecentPostComponent implements OnInit {
  data: any[] = [];
  constructor(
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts(1).subscribe((res) => {
      this.data = res.data;
    });
  }
}
