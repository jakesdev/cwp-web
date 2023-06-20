import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-timeline-2-popup',
  templateUrl: './timeline-2-popup.component.html',
  styleUrls: ['./timeline-2-popup.component.scss'],
})
export class Timeline2PopupComponent implements OnInit {
  showDatePickerIndex = -1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Timeline2PopupComponent>,
  ) {}

  ngOnInit() {
    this.data.item = this.data.item.map((item: any) => {
      item.title = new Date(item.title);
      return item;
    });
  }

  onAddItem(): void {
    this.data.item.push({
      title: '',
      description: '',
    });
  }


  onChangeTitle(e: any, i: number): void {
    this.data.item[i].title = e.target.value;
  }

  onChangeDescription(e: any, i: number): void {
    this.data.item[i].description = e.target.value;
  }

  onSave(): void {
    console.log('onSave', this.data);
    this.dialogRef.close(this.data);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }
}
