import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-accordion-1-popup',
  templateUrl: './accordion-1-popup.component.html',
  styleUrls: ['./accordion-1-popup.component.css'],
})
export class Accordion1PopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Accordion1PopupComponent>,

  ) {
  }
  ngOnInit(): void {
    console.log(this.data);
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
}
