import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-timeline-1-popup',
  templateUrl: './timeline-1-popup.component.html',
  styleUrls: ['./timeline-1-popup.component.scss'],
})
export class Timeline1PopupComponent implements OnInit {
  showDatePickerIndex = -1;

  newData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Timeline1PopupComponent>,
  ) {}

  ngOnInit() {
    this.data.item = this.data.item.map((item: any) => {
      item.title = new Date(item.title);
      return item;
    });

    this.newData = Object.assign({}, this.data);
  }

  onAddItem(): void {
    this.newData.item.push({
      title: '',
      description: '',
    });
  }

  onDeleteItem(i: number): void {
    this.newData.item.splice(i, 1);
  }

  onChangeTitle(e: any, i: number): void {
    this.newData.item[i].title = e.target.value;
  }

  onChangeDescription(e: any, i: number): void {
    this.newData.item[i].description = e.target.value;
  }

  onSave(): void {
    this.dialogRef.close(this.newData);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }
}
