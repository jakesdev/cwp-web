import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarketPlaceService, NotificationService, TransactionService } from '@cwp/core/services';
import { MarketplaceDialogComponent } from './container/marketplace-dialog/marketplace-dialog.component';

@Component({
  selector: 'cwp-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {

  marketPlace: any[] = [];

  constructor(
    public dialog: MatDialog,

    public marketPlaceService: MarketPlaceService,

    public notificationService: NotificationService,

    private transactionService: TransactionService,

  ) {}
  ngOnInit(): void {
    this.getMarketPlace();
  }

  getMarketPlace() {
    this.marketPlaceService.getMarketPlace().subscribe((res) => {
      this.marketPlace = res.data;
    });
  }

  openDetailMarketPlace(id: string) {
    const dialogRef = this.dialog.open(MarketplaceDialogComponent, {
      width: '1000px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== false) {

        if (result.quantity === 0) {
          this.transactionService.createTransaction(result).subscribe(({
            next: (res) => {
              this.notificationService.success('You have successfully purchased this product');
            },
            error: (err) => {
              this.notificationService.error('You already have this product');
            }
          })
          );
        }
        else {
          this.transactionService.createPayment(result).subscribe(({
            next: (res) => {
              window.location.href = res.data;
            },
            error: (err) => {
              this.notificationService.error('You already have this product');
            }
          })
          );
        }
      }
      else {
        this.getMarketPlace();
      }
    }
    );
  }
}
