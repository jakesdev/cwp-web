import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarketPlaceService } from '@cwp/core/services';

@Component({
  selector: 'cwp-marketplace-dialog',
  templateUrl: './marketplace-dialog.component.html',
  styleUrls: ['./marketplace-dialog.component.css'],
})
export class MarketplaceDialogComponent implements OnInit {

  marketPlace: any = {};

  constructor(
    public dialogRef: MatDialogRef<MarketplaceDialogComponent>,

    private marketPlaceService: MarketPlaceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }
  ngOnInit(): void {
    this.marketPlaceService.getMarketPlaceDetail(this.data.id).subscribe((res) => {
      this.marketPlace = res.data;
      console.log(this.marketPlace);
    }
    );
  }
  onClose() {
    this.dialogRef.close(false);
  }

  onClick() {
    this.dialogRef.close({
      productId: this.marketPlace._id,
      quantity: this.marketPlace.price
    });
  }
}
