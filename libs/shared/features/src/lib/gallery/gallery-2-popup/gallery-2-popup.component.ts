import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-gallery-2-popup',
  templateUrl: './gallery-2-popup.component.html',
  styleUrls: ['./gallery-2-popup.component.scss'],
})
export class Gallery2PopupComponent implements OnInit {
  fileImage: any[] = [];

  imageUrl: any;

  newData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Gallery2PopupComponent>,

    public uploadService: UploadService,
  ) {
  }
  ngOnInit(): void {
    this.newData = Object.assign({}, this.data);
    this.fileImage = Array(this.data.images.length).fill('');
  }


  addItem(grid: number): void {
    this.newData.images.push('https://via.placeholder.com/150');
  }

  onDelete(index: number, grid: number): void {
    this.newData.images.splice(index, 1);
  }

  onSave(): void {
    this.dialogRef.close(this.newData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  handleFileInput(e: any, index: number, grid: number): void {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('oldImage', this.newData.images[index]);

    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.newData.images[index] = res.data;
    });
    this.fileImage[index] = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[index]);
  }
}
