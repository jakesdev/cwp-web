import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-publish-page-dialog',
  templateUrl: './publish-page-dialog.component.html',
  styleUrls: ['./publish-page-dialog.component.css'],
})
export class PublishPageDialogComponent implements OnInit {

  title = '';

  content = '';

  constructor(
    public dialogRef: MatDialogRef<PublishPageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClose() {
    this.dialogRef.close(false);
  }

  onSave() {
    this.dialogRef.close({
      title: this.title,
      content: this.content,
    });
  }
}
