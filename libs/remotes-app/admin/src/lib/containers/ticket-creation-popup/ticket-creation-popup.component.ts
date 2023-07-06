import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-ticket-creation-popup',
  templateUrl: './ticket-creation-popup.component.html',
  styleUrls: ['./ticket-creation-popup.component.scss'],
})
export class TicketCreationPopupComponent {

  title = '';

  content = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<TicketCreationPopupComponent>
  ) {}
  onSubmit() {
    this.dialogRef.close();
  }
}
