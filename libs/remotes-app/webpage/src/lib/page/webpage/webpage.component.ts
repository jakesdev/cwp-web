import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '@cwp/core/services';

@Component({
  selector: 'cwp-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss'],
})
export class WebpageComponent implements OnInit {
  items: any;
  routeSub1: any;

  routeSub2: any;

  paramsRouter: string[] = [];

  favIcon: HTMLLinkElement = <HTMLLinkElement>document.querySelector('#appIcon');

  constructor(
    private route: ActivatedRoute,

    private router: Router,

    private title: Title,

    private readonly pageService: PageService
  ) {
  }

  ngOnInit(): void {
    this.routeSub1 = this.route.params.subscribe(params => {
      this.paramsRouter.push(params['url']);
    }
    );

    if (!this.route.children[0]) {
      this.pageService.getPageBySlug(this.paramsRouter[0]).subscribe({
        next: (res) => {
          this.items = res.data.page.components;
          this.favIcon.href = res.data.user.avatarUrl;
          this.title.setTitle(res.data.page.title);
        },
        error: (err) => {
          this.router.navigate(['/error']);
        }
      }
      );
    }
    else {
      this.routeSub2 = this.route.children[0].params.subscribe(params => {
        this.paramsRouter.push(params['id']);
      }
      );

      const params = this.paramsRouter.join('/');
      this.pageService.getPageBySlug(params).subscribe({
        next: (res) => {
          this.items = res.data.page.components;
          this.title.setTitle(res.data.page.title);
        },
        error: (err) => {
          this.router.navigate(['/error']);
        }
      }
      );
    }
  }
}
