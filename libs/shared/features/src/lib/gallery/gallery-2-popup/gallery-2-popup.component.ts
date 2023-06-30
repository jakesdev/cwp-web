import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-gallery-2-popup',
  templateUrl: './gallery-2-popup.component.html',
  styleUrls: ['./gallery-2-popup.component.scss'],
})
export class Gallery2PopupComponent {
  fileImage: any[] = [];

  imageUrl: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Gallery2PopupComponent>,

    public uploadService: UploadService,
  ) {
  }
  ngOnInit(): void {
    this.fileImage = Array(this.data.images.length).fill('');
  }


  addItem(grid: number): void {
    this.data.images.push('https://via.placeholder.com/150');
  }

  onDelete(index: number, grid: number): void {
    this.data.images.splice(index, 1);
  }

  onSave(): void {
    console.log(this.data);
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  handleFileInput(e: any, index: number, grid: number): void {
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
