import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-timeline-1-popup',
  templateUrl: './timeline-1-popup.component.html',
  styleUrls: ['./timeline-1-popup.component.css'],
})
export class Timeline1PopupComponent {
  showDatePickerIndex = -1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Timeline1PopupComponent>,
  ) {}

  ngOnInit() {
  }


  onChangeTitle(e: any, i: number): void {
    this.data.title[i] = e.target.value;
  }

  onChangeDescription(e: any, i: number): void {
    this.data.description[i] = e.target.value;
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }
}
