import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-gallery-1-popup',
  templateUrl: './gallery-1-popup.component.html',
  styleUrls: ['./gallery-1-popup.component.scss'],
})
export class Gallery1PopupComponent implements OnInit {
  fileImage: any[] = [];

  imageUrl: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Gallery1PopupComponent>,

    public uploadService: UploadService,

  ) {
  }
  ngOnInit(): void {
    this.fileImage = Array(this.data.images.length).fill('');
  }


  addItem(): void {
    this.data.images.push('');
    this.fileImage.push('');
  }
  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(index: number): void {
    this.data.images.splice(index, 1);
    this.fileImage.splice(index, 1);
  }


  handleFileInput(e: any, index: number): void {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('oldImage', this.data.images[index]);

    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.data.images[index] = res.data;
    });
    this.fileImage[index] = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[index]);
  }

}
