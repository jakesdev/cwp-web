import { Component, Inject } from '@angular/core';
import { MatDialogActions } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-ticket-creation-popup',
  templateUrl: './ticket-creation-popup.component.html',
  styleUrls: ['./ticket-creation-popup.component.scss'],
})
export class TicketCreationPopupComponent {
  title: string;
  content: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.content = data.content;
  }
}
