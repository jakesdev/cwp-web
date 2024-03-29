import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageModel, UserProfileModel } from '@cwp/core/model/response';
import { AuthService, NotificationService, PageService } from '@cwp/core/services';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PageCreateDialogComponent } from '../page-create-dialog/page-create-dialog.component';
import { PageEditDialogComponent } from '../page-edit-dialog/page-edit-dialog.component';
interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
}


@Component({
  selector: 'cwp-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent implements OnInit {

  userProfile!: UserProfileModel | null;

  pages: PageModel[] = [];
  urlSafe!: SafeResourceUrl;

  limitsPage = 0;

  loaded = false;
  constructor(
    public dialog: MatDialog,
    private router: Router,

    private pageService: PageService,

    private authService: AuthService,

    private notificationService: NotificationService,

  ) {
    this.userProfile = this.authService.currentUserValue.user || null;
  }
  ngOnInit(): void {
    this.getPage();
  }

  onLoad(e: any) {
    console.log(e);
    this.loaded = true;
  }

  getPage() {
    this.pageService.getAllPages().subscribe((res) => {
      this.pages = res.data.page;
      this.limitsPage = res.data.user.limitsPage;
    }
    );
  }

  openNewPage(): void {
    if (this.limitsPage <= this.pages.length) return this.notificationService.error('You have reached the limit of pages'
    );

    const dialogRef = this.dialog.open(PageCreateDialogComponent, {
      width: '1000px',

    });
    dialogRef.afterClosed().subscribe((result) => {
      this.pageService.createPage({
        title: result.title,
        url: result.url,
        templateId: result.templateId,
      }).subscribe({
        next: () => {
          this.getPage();
        },
        error: (err) => {
          this.notificationService.error(err.message);
        }
      }
      );
    }
    );
  }

  openPage(id: string) {
    this.router.navigate([`/page/${id}`]);
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(PageEditDialogComponent, {
      width: '1000px',
      data: {
        id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getPage();
    }
    );
  }

  deletePage(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        id,
        message: 'Are you sure you want to delete this page?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.pageService.deletePage(id).subscribe((res) => {
          this.getPage();
        });
      }
    }
    );
    // this.pageService.deletePage(id).subscribe((res) => {
    //   this.getPage();
    // });
  }
}
