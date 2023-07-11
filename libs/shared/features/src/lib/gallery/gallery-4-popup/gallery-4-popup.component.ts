import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-gallery-4-popup',
  templateUrl: './gallery-4-popup.component.html',
  styleUrls: ['./gallery-4-popup.component.scss'],
})
export class Gallery4PopupComponent implements OnInit {
  fileImage: any[] = [];

  imageUrl: any;

  newData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Gallery4PopupComponent>,

    public uploadService: UploadService,

  ) {
  }
  ngOnInit(): void {
    this.newData = Object.assign({}, this.data);
    this.fileImage = Array(this.newData.item.length).fill('');
  }


  addItem(): void {
    this.newData.item.push({
      title: 'New Item',
      image: 'https://via.placeholder.com/150',
    });
  }
  onSave(): void {
    this.dialogRef.close(this.newData);
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
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[index]);
  }

}
