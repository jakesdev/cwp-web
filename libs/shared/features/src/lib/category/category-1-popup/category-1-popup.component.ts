import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-category-1-popup',
  templateUrl: './category-1-popup.component.html',
  styleUrls: ['./category-1-popup.component.scss'],
})
export class Category1PopupComponent {

  fileImage: any[] = [];

  imageUrl: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Category1PopupComponent>,

    private uploadService: UploadService
  ) {}

  ngOnInit() {
    this.fileImage = Array(this.data.item.length).fill('');
  }

  handleFileInput(e: any, index: number): void {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('oldImage', this.data.item[index].image);

    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.data.item[index].image = res.data;
    });
    this.fileImage[index] = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[index]);
  }


  onChangeTitle(e: any, i: number): void {
    this.data.item[i].title = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.data.item[i].url = e.target.value;
  }


  onChangeDescription(e: any, i: number): void {
    this.data.item[i].description = e.target.value;
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
