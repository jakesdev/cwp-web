import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-front-page-1-popup',
  templateUrl: './front-page-1-popup.component.html',
  styleUrls: ['./front-page-1-popup.component.scss'],
})
export class FrontPage1PopupComponent implements OnInit {

  fileImage: any;

  imageUrl: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FrontPage1PopupComponent>,
    public uploadService: UploadService,
  ) {
  }
  ngOnInit(): void {
  }



  onSave(): void {
    this.dialogRef.close(this.data);
  }


  handleFileInput(e: any): void {

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('oldImage', this.data.image);

    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.data.image = res.data;
    });

    this.fileImage = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage);
  }

}
