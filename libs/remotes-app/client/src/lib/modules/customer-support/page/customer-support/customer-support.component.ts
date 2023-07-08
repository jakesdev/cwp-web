import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerSupportService } from '@cwp/core/services';
import { RepliesComponentComponent } from '../../containers/replies-component/replies-component.component';
import { TicketCreationPopupComponent } from '../../containers/ticket-creation-popup/ticket-creation-popup.component';

@Component({
  selector: 'cwp-client-customer-support-page',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
})
export class CustomerSupportPageComponent implements OnInit {
  customerTickets: any[] = [];

  constructor(
    private dialog: MatDialog,
    private customerSupportService: CustomerSupportService
  ) {}

  ngOnInit(): void {
    this.getCustomerTickets();
  }

  getCustomerTickets() {
    this.customerSupportService.getAllTickets().subscribe((res) => {
      this.customerTickets = res.data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(TicketCreationPopupComponent, {
      width: '500px',
      autoFocus: true,
      data: {
        title: {
          text: 'Create a new ticket',
        },
        content: {
          text: 'Please describe your issue below',
        },
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.customerSupportService
          .createTicket({
            title: res.title,
            content: res.content,
          })
          .subscribe((res) => {
            this.getCustomerTickets();
          });
      }
    }
    );
  }

  openReplies(id: string) {
    const dialogRef = this.dialog.open(RepliesComponentComponent, {
      width: '800px',
      autoFocus: true,
      data: {
        title: {
          text: 'Ticket Replies',
        },
        content: {
          text: 'Please describe your issue below',
        },
        id: id,
        replies: this.customerTickets.find((ticket) => ticket._id === id).replies,
      }
    });
  }
}
