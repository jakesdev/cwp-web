/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CdkDragDrop, CdkDragEnter, CdkDragExit, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService, LoaderService, NotificationService, PageService, PostService, TransactionService } from '@cwp/core/services';
import remove from 'lodash-es/remove';
import { finalize } from 'rxjs';

import { environment } from '../../../../../../../../core/src/lib/environments/environment';
import { UserProfileModel } from '../../../../../../../../core/src/lib/model/response-model';
import { Accordion1PopupComponent } from '../../../../../../../../shared/features/src/lib/accordion/accordion-1-popup/accordion-1-popup.component';
import { Blog1PopupComponent } from '../../../../../../../../shared/features/src/lib/blog/blog-1-popup/blog-1-popup.component';
import { Category1PopupComponent } from '../../../../../../../../shared/features/src/lib/category/category-1-popup/category-1-popup.component';
import { Category2PopupComponent } from '../../../../../../../../shared/features/src/lib/category/category-2-popup/category-2-popup.component';
import { Category3PopupComponent } from '../../../../../../../../shared/features/src/lib/category/category-3-popup/category-3-popup.component';
import { Footer1PopupComponent } from '../../../../../../../../shared/features/src/lib/footer/footer-1-popup/footer-1-popup.component';
import { Footer2PopupComponent } from '../../../../../../../../shared/features/src/lib/footer/footer-2-popup/footer-2-popup.component';
import { FrontPage1PopupComponent } from '../../../../../../../../shared/features/src/lib/front-page/front-page-1-popup/front-page-1-popup.component';
import { FrontPage2PopupComponent } from '../../../../../../../../shared/features/src/lib/front-page/front-page-2-popup/front-page-2-popup.component';
import { FrontPage3PopupComponent } from '../../../../../../../../shared/features/src/lib/front-page/front-page-3-popup/front-page-3-popup.component';
import { Gallery1PopupComponent } from '../../../../../../../../shared/features/src/lib/gallery/gallery-1-popup/gallery-1-popup.component';
import { Gallery2PopupComponent } from '../../../../../../../../shared/features/src/lib/gallery/gallery-2-popup/gallery-2-popup.component';
import { Gallery4PopupComponent } from '../../../../../../../../shared/features/src/lib/gallery/gallery-4-popup/gallery-4-popup.component';
import { Header1PopupComponent } from '../../../../../../../../shared/features/src/lib/header/header-1-popup/header-1-popup.component';
import { Header2PopupComponent } from '../../../../../../../../shared/features/src/lib/header/header-2-popup/header-2-popup.component';
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
export class PageDetailsComponent implements OnInit, AfterViewInit {

  components: any[] = [];

  userProfile!: UserProfileModel;

  page: any;

  showButton: string | null = null;

  sidebarVisible4!: boolean;
  items: any[] = DATA_SIDE_BAR;

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

    private authService: AuthService,
    private cdRef: ChangeDetectorRef,

  ) {}
  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {
    this.userProfile = this.authService.currentUserValue.user;
    console.log(this.userProfile);
    this.routeSub = this.route.params.subscribe(params => {
      this.params = params['id'];
    });
    this.getPage(this.params);
    this.getTransactionList();
  }

  getPage(params: string) {
    this.pageService.getPage(params).subscribe((res) => {
      this.page = res.data;
      this.components = res.data.components || [];
    }
    );
  }

  getTransactionList() {
    this.transactionService.getTransactionList().pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      })
    ).subscribe((res) => {
      this.loaderService.loading$.next(true);
      this.integrationComponents = res.data;
      this.integrationComponents = this.integrationComponents.map((item) => {
        return {
          type: item.type,
          previewImage: item.preview
        };
      });

      this.items = this.items.filter((item) => {
        return this.integrationComponents.some((component) => {
          return component.type === item.type;
        });
      }
      ).map((item) => {
        return {
          ...item,
          name: item.type.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
          previewImage: this.integrationComponents.find((component) => {
            return component.type === item.type;
          })?.previewImage
        };
      }
      );
    });
  }

  backToPrevious() {
    window.history.back();
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
      }).pipe(
        finalize(() => {
          this.getPage(this.params);
          this.loaderService.loading$.next(false);
        }
        )
      ).subscribe({
        next: () => {}
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
      const newComponents = event.container.data;
      this.page.components = newComponents;
      this.pageService.updatePage(this.params, {
        components: this.page.components,
        url: this.page.url,
      }).pipe(
        finalize(() => {
          this.getPage(this.params);
          this.loaderService.loading$.next(false);
        }
        )
      ).subscribe({
        next: () => {
          this.notificationService.success('Update successfully');
        }
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
  };

  openPublicPage(): void {
    const dialogRef = this.dialog.open(PublishPageDialogComponent, {
      width: '1000px',
      data: this.page,
    });
    dialogRef.afterClosed().pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      }
      )
    ).subscribe(result => {
      this.loaderService.loading$.next(true);
      this.postService.createPost({
        pageId: this.page._id,
        title: result.title,
        content: result.content,
      }).subscribe({
        next: (res) => {
          this.loaderService.loading$.next(false);
          this.notificationService.success('Published successfully');
        },
        error: (err) => {
          this.loaderService.loading$.next(false);
          this.notificationService.error(err.message);
        }
      }
      );
    });
  };

  onButtonClickDelete(item: any, i: number): void {
    this.components.splice(i, 1);
    this.page.components = this.components;
    this.pageService.updatePage(this.params, {
      components: this.page.components,
      url: this.page.url,
    }).subscribe({
      next: () => {
        this.notificationService.success('Deleted successfully');
      }
    }
    );
  };

  onButtonClickHeader1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Header1PopupComponent, {
      width: '1000px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe(
          {
            next: () => {
              this.notificationService.success('Update successfully');
            }
          }
        );
      }
    });
  };

  onButtonClickHeader2(data: any, i: number): void {
    const dialogRef = this.dialog.open(Header2PopupComponent, {
      width: '1000px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe({
          next: () => {
            this.notificationService.success('Update successfully');
          }
        });
      }
    }
    );
  };

  onButtonClickFooter1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Footer1PopupComponent, {
      width: '1000px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe({
          next: () => {
            this.notificationService.success('Update successfully');
          }
        }
        );
      }
    }
    );
  };
  onButtonClickFooter2(data: any, i: number): void {
    const dialogRef = this.dialog.open(Footer2PopupComponent, {
      width: '1000px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe({
          next: () => {
            this.notificationService.success('Update successfully');
          }
        }
        );
      }
    }
    );
  };

  onButtonClickCategory1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Category1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        console.log(result);

        this.page.components[i].option = result;

        console.log(i);
        console.log(this.page.components);
        console.log(this.page.components[i]);

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe({
          next: () => {
            this.notificationService.success('Update successfully');
          }
        }
        );
      }
    }
    );
  };

  onButtonClickCategory2(data: any, i: number): void {
    const dialogRef = this.dialog.open(Category2PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe({
          next: () => {
            this.notificationService.success('Update successfully');
          }
        }
        );
      }
    }
    );
  };

  onButtonClickCategory3(data: any, i: number): void {
    const dialogRef = this.dialog.open(Category3PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe({
          next: () => {
            this.notificationService.success('Update successfully');
          }
        }
        );
      }
    }
    );
  };

  onButtonClickFrontPage1(data: any, i: number): void {
    const dialogRef = this.dialog.open(FrontPage1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        if (result) {

          this.page.components[i].option = result;
          this.loaderService.loading$.next(true);
          this.pageService.updatePage(this.params, {
            components: this.page.components,
            url: this.page.url,
          }).pipe(
            finalize(() => {
              this.loaderService.loading$.next(false);
            }
            )
          ).subscribe((res) => {
            this.pageService.getPage(this.params).subscribe((res) => {
              this.page = res.data;
              this.components = res.data.components || [];
              this.loaderService.loading$.next(false);
            }
            );
          }
          );
        }
      }
    }
    );
  };

  onButtonClickFrontPage2(data: any, i: number): void {
    const dialogRef = this.dialog.open(FrontPage2PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickFrontPage3(data: any, i: number): void {
    const dialogRef = this.dialog.open(FrontPage3PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickPricingSection1(data: any, i: number): void {
    const dialogRef = this.dialog.open(PricingSection1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
  };

  onButtonClickVideo1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Video1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickAccordion1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Accordion1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickTimeline1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Timeline1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickTimeline2(data: any, i: number): void {
    const dialogRef = this.dialog.open(Timeline2PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickGallery1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Gallery1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickGallery2(data: any, i: number): void {
    const dialogRef = this.dialog.open(Gallery2PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };




  onButtonClickGallery4(data: any, i: number): void {
    const dialogRef = this.dialog.open(Gallery4PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  };

  onButtonClickBlog1(data: any, i: number): void {
    const dialogRef = this.dialog.open(Blog1PopupComponent, {
      width: '1000px',
      maxHeight: '90vh',
      data,
      autoFocus: false,
      delayFocusTrap: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.page.components[i].option = result;

        this.loaderService.loading$.next(true);
        this.pageService.updatePage(this.params, {
          components: this.page.components,
          url: this.page.url,
        }).pipe(
          finalize(() => {
            this.loaderService.loading$.next(false);
          }
          )
        ).subscribe((res) => {
          this.pageService.getPage(this.params).subscribe((res) => {
            this.page = res.data;
            this.components = res.data.components || [];
            this.loaderService.loading$.next(false);
          }
          );
        }
        );
      }
    }
    );
  }
}
