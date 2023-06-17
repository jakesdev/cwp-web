import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-front-page-2-popup',
  templateUrl: './front-page-2-popup.component.html',
  styleUrls: ['./front-page-2-popup.component.scss'],
})
export class FrontPage2PopupComponent {
  fileImage: any;

  imageUrl: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FrontPage2PopupComponent>,
    public uploadService: UploadService,
  ) {
  }
  onSave(): void {
    console.log(this.data);
    this.dialogRef.close(this.data);
  }

  onAddItem(): void {
    this.data.item.push({
      title: '',
      description: '',
    });
  }


  onChangeTitle(e: any, i: number): void {
    this.data.items[i].title = e.target.value;
  }

  onChangeDescription(e: any, i: number): void {
    this.data.items[i].description = e.target.value;
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
