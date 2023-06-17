import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-gallery-4-popup',
  templateUrl: './gallery-4-popup.component.html',
  styleUrls: ['./gallery-4-popup.component.scss'],
})
export class Gallery4PopupComponent {
  fileImage: any[] = [];

  imageUrl: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Gallery4PopupComponent>,

    public uploadService: UploadService,

  ) {
  }
  ngOnInit(): void {
    this.fileImage = Array(this.data.item.length).fill('');
  }


  addItem(): void {
    this.data.item.push({
      title: 'New Item',
      image: 'https://via.placeholder.com/150',
    });
  }
  onSave(): void {
    console.log(this.data);
    this.dialogRef.close(this.data);
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

}
