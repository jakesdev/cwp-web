import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerSupportService } from '@cwp/core/services';
@Component({
  selector: 'cwp-ticket-creation-popup',
  templateUrl: './ticket-creation-popup.component.html',
  styleUrls: ['./ticket-creation-popup.component.scss'],
})
export class TicketCreationPopupComponent {
  title: string;
  content: string;
  responseStatus: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<TicketCreationPopupComponent>,
    private customerSupportService: CustomerSupportService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title.text;
    this.content = data.content.text;
  }

  createTicket(title: string, content: string) {
    if (title === '' || content === '') {
      return;
    }

    this.dialogRef.close({ title, content });
  }
}
