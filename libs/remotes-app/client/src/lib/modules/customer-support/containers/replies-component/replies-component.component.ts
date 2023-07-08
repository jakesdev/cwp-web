import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerSupportService } from '@cwp/core/services';

@Component({
  selector: 'cwp-replies-component',
  templateUrl: './replies-component.component.html',
  styleUrls: ['./replies-component.component.scss'],
})
export class RepliesComponentComponent {

  title: string;

  constructor(
    public dialogRef: MatDialogRef<RepliesComponentComponent>,
    private customerSupportService: CustomerSupportService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title.text;
  }
}
