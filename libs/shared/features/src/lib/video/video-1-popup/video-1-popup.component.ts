import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-video-1-popup',
  templateUrl: './video-1-popup.component.html',
  styleUrls: ['./video-1-popup.component.scss'],
})
export class Video1PopupComponent implements OnInit {

  video: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Video1PopupComponent>,
  ) {
  }

  ngOnInit(): void {
    console.log(this.data);
    this.video = this.data.src;
  }

  onSave(): void {
    this.data.src = this.video;
    this.dialogRef.close(this.data);
  }
}
