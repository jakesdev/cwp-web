import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService, PageService } from '@cwp/core/services';

@Component({
  selector: 'cwp-page-edit-dialog',
  templateUrl: './page-edit-dialog.component.html',
  styleUrls: ['./page-edit-dialog.component.scss'],
})
export class PageEditDialogComponent implements OnInit {

  title!: string;

  url!: string;
  userUrl!: string;

  defaultUrl!: string;

  formValid = {
    url: true,
    title: true
  };

  constructor(
    public dialogRef: MatDialogRef<PageEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,

    private pageService: PageService,
  ) {
    this.getPage(data.id);
  }
  ngOnInit(): void {
    this.getPage(this.data.id);
    this.userUrl = this.authService.currentUserValue.user.url || '';
  }

  getPage(id: string) {
    this.pageService.getPage(id).subscribe((res) => {
      this.title = res.data.title;
      this.url = res.data.url.replace(`${this.userUrl}/`, '');
      this.defaultUrl = res.data.url;
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  save() {
    let editUrl = '';
    if (!this.title) {
      this.formValid.title = false;
      return;
    }

    if (!this.url) {
      editUrl = this.userUrl;
    }
    else {
      editUrl = this.userUrl + '/' + this.url;
    }

    this.pageService.checkUrl(editUrl).subscribe((res) => {
      if (res.data && this.defaultUrl !== editUrl) {
        this.formValid.url = false;
        return;
      }
      else {
        this.formValid.url = true;
      }
    }
    );
    if (this.formValid.title && this.formValid.url) {
      this.pageService.updatePage(this.data.id, { title: this.title, url: editUrl }).subscribe((res) => {
        this.dialogRef.close(res);
      }
      );
    }
  }
}
