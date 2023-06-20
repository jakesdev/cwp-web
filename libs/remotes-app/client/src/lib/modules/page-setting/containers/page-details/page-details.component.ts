/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CdkDragDrop, CdkDragEnter, CdkDragExit, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoaderService, NotificationService, PageService, PostService, TransactionService } from '@cwp/core/services';
import remove from 'lodash-es/remove';

import { environment } from '../../../../../../../../core/src/lib/environments/environment';
import { Accordion1PopupComponent } from '../../../../../../../../shared/features/src/lib/accordion/accordion-1-popup/accordion-1-popup.component';
import { Category1PopupComponent } from '../../../../../../../../shared/features/src/lib/category/category-1-popup/category-1-popup.component';
import { Category2PopupComponent } from '../../../../../../../../shared/features/src/lib/category/category-2-popup/category-2-popup.component';
import { Category3PopupComponent } from '../../../../../../../../shared/features/src/lib/category/category-3-popup/category-3-popup.component';
import { Footer1PopupComponent } from '../../../../../../../../shared/features/src/lib/footer/footer-1-popup/footer-1-popup.component';
import { FrontPage1PopupComponent } from '../../../../../../../../shared/features/src/lib/front-page/front-page-1-popup/front-page-1-popup.component';
import { FrontPage2PopupComponent } from '../../../../../../../../shared/features/src/lib/front-page/front-page-2-popup/front-page-2-popup.component';
import { Gallery4PopupComponent } from '../../../../../../../../shared/features/src/lib/gallery/gallery-4-popup/gallery-4-popup.component';
import { Header1PopupComponent } from '../../../../../../../../shared/features/src/lib/header/header-1-popup/header-1-popup.component';
import { PricingSection1PopupComponent } from '../../../../../../../../shared/features/src/lib/pricing-section/pricing-section-1-popup/pricing-section-1-popup.component';
import { Timeline1PopupComponent } from '../../../../../../../../shared/features/src/lib/timeline/timeline-1-popup/timeline-1-popup.component';
import { Timeline2PopupComponent } from '../../../../../../../../shared/features/src/lib/timeline/timeline-2-popup/timeline-2-popup.component';
import { Video1PopupComponent } from '../../../../../../../../shared/features/src/lib/video/video-1-popup/video-1-popup.component';
import { PublishPageDialogComponent } from '../publish-page-dialog/publish-page-dialog.component';
import { DATA_SIDE_BAR } from './mockdata';
@Component({
  selector: 'cwp-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent implements OnInit, AfterViewChecked {

  components: any[] = [];

  page: any;

  showButton: string | null = null;

  sidebarVisible4!: boolean;
  images: any[] = DATA_SIDE_BAR;

  integrationComponents: any[] = [];

  routeSub: any;

  params!: string;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public pageService: PageService,

    public loaderService: LoaderService,

    public transactionService: TransactionService,

    public postService: PostService,

    public notificationService: NotificationService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.params = params['id'];
    });
    this.pageService.getPage(this.params).subscribe((res) => {
      this.page = res.data;
      this.components = res.data.components || [];
    }
    );
    this.transactionService.getTransactionList().subscribe((res) => {
      this.integrationComponents = res.data;
      this.integrationComponents = this.integrationComponents.map((item) => {
        return {
          type: item.type,
        };
      });


      // this.images = this.images.filter((item) => {
      //   return this.integrationComponents.find((item2) => {
      //     return item2.type === item.type;
      //   });
      // }
      // );
    }
    );
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  drop(event: CdkDragDrop<any[]>): void {
    // Get the dragged item and its previous index
    const prevIndex = event.previousIndex;

    // If the item was dropped within the same list
    if (event.container === event.previousContainer) {
      // Move the item to the new index within the same list
      moveItemInArray(event.container.data, prevIndex, event.currentIndex);
      this.page.components = this.components;
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
      });
    }
    // If the item was dropped from a different list
    else {
      // Add the dragged item to the new list
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.components = event.container.data;
      this.page.components = this.components;
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
      }
      );
    }
    if (event.previousContainer.data) {
      remove(this.components, { temp: true });
    }
    this.showButton = null;
  }

  noReturnPredicate() {
    return false;
  }

  onSourceListEntered(event: CdkDragEnter<any>) {
    remove(this.components, { temp: true });
  }

  onSourceListExited(event: CdkDragExit<any>) {
    this.components.splice(event.container.data.findIndex((item: any) => item.temp), 0, {
      ...event.item.data,
      temp: true,
    });
  }
  onMouseEnter(item: any, i: number): void {
    // check is dragging or not
    if (this.showButton) {
      return;
    }

    this.showButton = item;
  }

  onMouseLeave(item: any, i: number): void {
    if (this.showButton === item) {
      this.showButton = null;
    };
  }

  openPreview(): void {
    window.open(environment.webView + this.page.url, '_blank');
  }

  openPublicPage(): void {
    const dialogRef = this.dialog.open(PublishPageDialogComponent, {
      width: '1000px',
      data: this.page,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.postService.createPost({
        pageId: this.page._id,
        title: result.title,
        content: result.content,
      }).subscribe({
        next: (res) => {
          this.loaderService.loading$.next(false);
        },
        error: (err) => {
          this.loaderService.loading$.next(false);
          this.notificationService.error('This post is already published');
        }
      }
      );
    });
  }

  onButtonClickDelete(item: any, i: number): void {
    this.components.splice(i, 1);
    this.page.components = this.components;
    this.pageService.updatePage(this.params, {
      components: this.page.components,
      url: this.page.url,
    }).subscribe((res) => {
    }
    );
  }

  onButtonClickHeader1(data: any): void {
    const dialogRef = this.dialog.open(Header1PopupComponent, {
      width: '1000px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
      }
      );
    });
  }

  onButtonClickFooter1(data: any): void {
    const dialogRef = this.dialog.open(Footer1PopupComponent, {
      width: '1000px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    });
  }

  onButtonClickCategory1(data: any): void {
    const dialogRef = this.dialog.open(Category1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    });
  }

  onButtonClickCategory2(data: any): void {
    const dialogRef = this.dialog.open(Category2PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    });
  }

  onButtonClickCategory3(data: any): void {
    const dialogRef = this.dialog.open(Category3PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }

  onButtonClickFrontPage1(data: any): void {
    const dialogRef = this.dialog.open(FrontPage1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }

  onButtonClickFrontPage2(data: any): void {
    const dialogRef = this.dialog.open(FrontPage2PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }

  onButtonClickPricingSection1(data: any): void {
    const dialogRef = this.dialog.open(PricingSection1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
  }

  onButtonClickVideo1(data: any): void {
    const dialogRef = this.dialog.open(Video1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }

  onButtonClickAccordion1(data: any): void {
    const dialogRef = this.dialog.open(Accordion1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }

  onButtonClickTimeline1(data: any): void {
    const dialogRef = this.dialog.open(Timeline1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }

  onButtonClickTimeline2(data: any): void {
    const dialogRef = this.dialog.open(Timeline2PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }

  onButtonClickGallery4(data: any): void {
    const dialogRef = this.dialog.open(Gallery4PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.loading$.next(true);
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).subscribe((res) => {
        this.pageService.getPage(this.params).subscribe((res) => {
          this.page = res.data;
          this.components = res.data.components || [];
          this.loaderService.loading$.next(false);
        }
        );
      }
      );
    }
    );
  }
}
