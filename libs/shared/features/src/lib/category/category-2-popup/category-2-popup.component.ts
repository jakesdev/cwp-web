import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';
@Component({
  selector: 'cwp-category-2-popup',
  templateUrl: './category-2-popup.component.html',
  styleUrls: ['./category-2-popup.component.scss'],
})
export class Category2PopupComponent implements OnInit {
  fileImage: any[] = [];

  imageUrl: any[] = [];

  newData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Category2PopupComponent>,

    private uploadService: UploadService
  ) {}

  ngOnInit() {
    this.newData = this.data;
    this.fileImage = Array(this.newData.item.length).fill('');
    this.imageUrl = Array(this.newData.item.length).fill('');
  }

  handleFileInput(e: any, index: number): void {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('oldImage', this.newData.item[index].image);

    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.newData.item[index].image = res.data;
    });
    this.fileImage[index] = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl[index] = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[index]);
  }


  onChangeTitle(e: any, i: number): void {
    this.newData.item[i].title = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.newData.item[i].url = e.target.value;
  }


  onChangeDescription(e: any, i: number): void {
    this.newData.item[i].description = e.target.value;
  }

  onSave(): void {
    this.dialogRef.close(this.newData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onRemoveItem(i: number): void {
    this.newData.item.splice(i, 1);
  }

  onAddItem(): void {
    this.newData.item.push({
      image: 'https://via.placeholder.com/200/300',
      title: 'Title',
      url: '/#',
      description: 'Description',
    });
    this.fileImage.push('');
  }
}
