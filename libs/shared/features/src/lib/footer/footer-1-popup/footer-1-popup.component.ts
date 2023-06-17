import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cwp-footer-1-popup',
  templateUrl: './footer-1-popup.component.html',
  styleUrls: ['./footer-1-popup.component.scss'],
})
export class Footer1PopupComponent implements OnInit {
  editHeaderForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Footer1PopupComponent>,

    public form: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    this.editHeaderForm = this.form.group({
      backgroundColor: this.form.control(this.data.backGroundColor),
      textColor: this.form.control(this.data.textColor),
    });
  }

  onChangeTitle(e: any, i: number): void {
    this.data.title[i] = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.data.url[i] = e.target.value;
  }

  onSave(): void {
    this.dialogRef.close(this.data);

  }
}
