import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from '@cwp/core/endpoint';
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

  templatePages: any[] = [];

  formValid = {
    url: true,
    title: true
  };

  webView = environment.webView;
  selectedTemplate: any;

  loaded = false;

  constructor(
    public dialogRef: MatDialogRef<PageCreateDialogComponent>,
    public dialog: MatDialog,
    private authService: AuthService,

    private pageService: PageService,
  ) {}
  ngOnInit(): void {
    this.getTemplatePages();
    this.userUrl = this.authService.currentUserValue.user.url || '';
  }

  onLoad(e: any) {
    console.log(e);
    this.loaded = true;
  }

  getTemplatePages() {
    this.pageService.getTemplatesPage().subscribe((res) => {
      this.templatePages = res.data;
      if (this.templatePages.length > 0) {
        this.selectedTemplate = this.templatePages[0];
      }
    });
  }

  onSelectTemplate(post: any) {
    if (this.selectedTemplate?._id === post._id) {
      this.selectedTemplate = null;
      return;
    }

    this.selectedTemplate = post;
  }

  onChangedTitle(event: any) {
    this.title = event;
    if (this.title) {
      this.formValid.title = true;
    }
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

        if (this.formValid.title && this.formValid.url) {
          this.dialogRef.close({ url: createUrl, title: this.title, templateId: this.selectedTemplate?._id });
        }
      }
    }
    );
  }

}
