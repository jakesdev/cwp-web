import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-category-1-popup',
  templateUrl: './category-1-popup.component.html',
  styleUrls: ['./category-1-popup.component.scss'],
})
export class Category1PopupComponent {

  categoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Category1PopupComponent>,) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      newArrivalsImage: ['https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg'],
      newArrivalsLink: ['#'],
      accessoriesImage: ['https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'],
      accessoriesLink: ['#'],
      workspaceImage: ['https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'],
      workspaceLink: ['#']
    });
  }

  onChangeTitle(e: any, i: number): void {
    this.data.title[i] = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.data.url[i] = e.target.value;
  }

  onChangeDescription(e: any, i: number): void {
    this.data.description[i] = e.target.value;
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
