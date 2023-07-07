import { Component, OnInit } from '@angular/core';
import { environment } from '@cwp/core/endpoint';
import { LoaderService, PostService } from '@cwp/core/services';
import { finalize } from 'rxjs';

@Component({
  selector: 'cwp-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  posts: any[] = [];

  loaded = false;
  constructor(
    private postService: PostService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  onLoad(e: any) {
    console.log(e);
    this.loaded = true;
  }

  getPosts() {
    this.loaderService.loading$.next(true);
    this.postService.getFavorites().pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      }
      )
    ).subscribe((res) => {
      this.posts = res.data;
    });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  }
}
