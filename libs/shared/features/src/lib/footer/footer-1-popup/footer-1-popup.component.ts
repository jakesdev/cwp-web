import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-footer-1-popup',
  templateUrl: './footer-1-popup.component.html',
  styleUrls: ['./footer-1-popup.component.scss'],
})
export class Footer1PopupComponent implements OnInit {

  listSocial = ['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube', 'Pinterest', 'Github', 'Skype'];
  editHeaderForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Footer1PopupComponent>,

    public form: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    this.editHeaderForm = this.form.group({
      backgroundColor: this.form.control(this.data.backGroundColor),
      textColor: this.form.control(this.data.textColor),
    });
  }

  onChangeTitle(e: any, i: number): void {
    this.data.itemTitle[i].title = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.data.itemTitle[i].url = e.target.value;
  }

  onChangeTitleSocial(e: any, i: number): void {
    this.data.itemSocial[i].title = e.target.value;
  }

  onChangeUrlSocial(e: any, i: number): void {
    this.data.itemSocial[i].url = e.target.value;
  }

  deleteItemTitle(i: number): void {
    this.data.itemTitle.splice(i, 1);
  }
  deleteItemSocial(i: number): void {
    this.data.itemSocial.splice(i, 1);
  }

  addItemTitle(): void {
    this.data.itemTitle.push({
      title: '',
      url: '',
    });
  }

  addItemSocial(): void {
    this.data.itemSocial.push({
      title: '',
      url: '',
    });
  }

  onChangeSocial(e: any, i: number): void {
    this.data.itemSocial[i].title = e;
  }

  onSave(): void {
    console.log(this.data);
    this.dialogRef.close(this.data);

  }
  onCancel(): void {
    this.dialogRef.close();
  }

}
