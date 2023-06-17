import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-front-page-2-popup',
  templateUrl: './front-page-2-popup.component.html',
  styleUrls: ['./front-page-2-popup.component.css'],
})
export class FrontPage2PopupComponent {
  frontPageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FrontPage2PopupComponent>,) {}
}
