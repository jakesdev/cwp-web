import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from '@cwp/core/endpoint';
import { PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-logo-section',
  templateUrl: './logo-section.component.html',
  styleUrls: ['./logo-section.component.scss'],
})
export class LogoSectionComponent implements OnInit {
  posts: any[] = [];

  loaded = false;

  constructor(private postService: PostService,
    private cdk: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  onLoad(e: any) {
    this.loaded = true;
  }

  getPosts() {
    // this.postService.getTrendingPosts().subscribe((res) => {
    //   this.posts = res.data;
    //   this.cdk.detectChanges();
    // });
  }

  openPreview(url: string): void {
    window.open(environment.webView + url, '_blank');
  }

  goBack() {
    window.history.back();
  }
}
