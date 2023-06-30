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


  addItem(grid: number): void {
    this.data.images.splice(
      this.data.images.length,
      0
      , 'https://via.placeholder.com/150');
    this.fileImage.splice(this.data.images.length,
      0
      , '');
  }
  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(index: number, grid: number): void {
    this.data.images.splice(grid * 3 + index, 1);
    this.fileImage.splice(grid * 3 + index, 1);
  }


  handleFileInput(e: any, index: number, grid: number): void {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('oldImage', this.data.images[grid * 3 + index]);

    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.data.images[grid * 3 + index] = res.data;
    });
    this.fileImage[grid * 3 + index] = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[grid * 3 + index]);
  }

}
