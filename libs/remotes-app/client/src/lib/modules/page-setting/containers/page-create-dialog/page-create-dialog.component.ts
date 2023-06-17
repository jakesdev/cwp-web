import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService, PageService } from '@cwp/core/services';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'cwp-page-create-dialog',
  templateUrl: './page-create-dialog.component.html',
  styleUrls: ['./page-create-dialog.component.scss'],
})
export class PageCreateDialogComponent implements OnInit {


  url!: string;

  title!: string;

  userUrl!: string;

  formValid = {
    url: true,
    title: true
  };

  constructor(
    public dialogRef: MatDialogRef<PageCreateDialogComponent>,
    public dialog: MatDialog,
    private authService: AuthService,

    private pageService: PageService,
  ) {}
  ngOnInit(): void {
    this.userUrl = this.authService.currentUserValue.user.url || '';
  }

  onChangedTitle(event: any) {
    this.title = event.target.value;
  }

  onChangeUrl(event: any) {
    this.url = event;
    const checkUrl = this.userUrl + '/' + this.url;
    this.pageService.checkUrl(checkUrl).pipe(
      debounceTime(500)
    ).subscribe((res) => {
      if (res.data) {
        this.formValid.url = false;
      }
      else {
        this.formValid.url = true;
      }
    }
    );
  }

  onClose() {
    this.dialogRef.close();
  }


  onSave() {
    let createUrl = '';
    if (!this.title) {
      this.formValid.title = false;
      return;
    }

    if (!this.url) {
      createUrl = this.userUrl;
    }
    else {
      createUrl = this.userUrl + '/' + this.url;
    }

    this.pageService.checkUrl(createUrl).subscribe((res) => {
      if (res.data) {
        this.formValid.url = false;
        return;
      }
      else {
        this.formValid.url = true;
      }
    }
    );

    if (this.formValid.title && this.formValid.url) {
      this.dialogRef.close({ url: createUrl, title: this.title });
    }
  }

}
