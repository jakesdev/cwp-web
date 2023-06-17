import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-timeline-1-popup',
  templateUrl: './timeline-1-popup.component.html',
  styleUrls: ['./timeline-1-popup.component.scss'],
})
export class Timeline1PopupComponent {
  showDatePickerIndex = -1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Timeline1PopupComponent>,
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
