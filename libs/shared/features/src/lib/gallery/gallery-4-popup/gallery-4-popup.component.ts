import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-gallery-4-popup',
  templateUrl: './gallery-4-popup.component.html',
  styleUrls: ['./gallery-4-popup.component.css'],
})
export class Gallery4PopupComponent {
  fileImage: any[] = [];

  imageUrl: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Gallery4PopupComponent>,

  ) {
  }
  ngOnInit(): void {
    console.log(this.data);
    this.fileImage = Array(this.data.item.length).fill('');
    console.log(this.fileImage);
  }


  addItem(): void {
    this.data.item.push({
      title: 'New Item',
      image: 'https://via.placeholder.com/150',
    });
  }
  onSave(): void {
    this.dialogRef.close(this.data);
  }

  handleFileInput(e: any, index: number): void {
    this.fileImage[index] = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[index]);
  }

}
