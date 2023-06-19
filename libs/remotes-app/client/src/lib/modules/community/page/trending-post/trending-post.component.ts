import { Component, OnInit } from '@angular/core';
import { environment } from '@cwp/core/endpoint';
import { PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-trending-post',
  templateUrl: './trending-post.component.html',
  styleUrls: ['./trending-post.component.scss'],
})
export class TrendingPostComponent implements OnInit {
  posts: any[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getTrendingPosts().subscribe((res) => {
      this.posts = res.data;
    });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  }
}
