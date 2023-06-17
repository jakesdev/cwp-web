import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cwp-front-page-1-popup',
  templateUrl: './front-page-1-popup.component.html',
  styleUrls: ['./front-page-1-popup.component.scss'],
})
export class FrontPage1PopupComponent implements OnInit {

  frontPageForm!: FormGroup;
  fileImage: any;

  imageUrl: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FrontPage1PopupComponent>,

    public form: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    this.frontPageForm = this.form.group({
      title: this.form.control(this.data.title),
      description: this.form.control(this.data.description),
      image: this.form.control(this.data.image),
    });
  }



  onSave(): void {
    this.dialogRef.close(this.data);
  }


  handleFileInput(e: any): void {
    this.fileImage = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage);
  }

}
