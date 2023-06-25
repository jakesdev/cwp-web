import { Component } from '@angular/core';
import { environment } from '@cwp/core/endpoint';
import { PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  posts: any[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getFavorites().subscribe((res) => {
      this.posts = res.data;
    });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  }
}
