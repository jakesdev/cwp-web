import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'cwp-header-1-popup',
  templateUrl: './header-1-popup.component.html',
  styleUrls: ['./header-1-popup.component.scss'],
})
export class Header1PopupComponent implements OnInit {
  editHeaderForm!: FormGroup;
  textColor = "#4f46e5";

  backGroundColor = "#ffffff";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Header1PopupComponent>,

    public form: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.editHeaderForm = this.form.group({
      backgroundColor: this.form.control(this.data.backGroundColor),
      textColor: this.form.control(this.data.textColor),
    });
    this.textColor = this.data.textColor;
    this.backGroundColor = this.data.backGroundColor;
  }

  deleteItem(i: number): void {
    this.data.title.splice(i, 1);
    this.data.url.splice(i, 1);
  }

  addItem(): void {
    this.data.title.push('');
    this.data.url.push('');
  }

  onChangeTitle(e: any, i: number): void {
    this.data.title[i] = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.data.url[i] = e.target.value;
  }

  onChangeBackgroundColor(e: any): void {
    this.backGroundColor = e;
  }

  onChangeTextColor(e: any): void {
    this.textColor = e;
  }

  onSave(): void {
    this.data.textColor = this.textColor;
    this.data.backGroundColor = this.backGroundColor;
    this.dialogRef.close(this.data);

  }
}
