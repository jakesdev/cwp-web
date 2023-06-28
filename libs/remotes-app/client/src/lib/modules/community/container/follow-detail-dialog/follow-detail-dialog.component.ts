import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService } from '@cwp/core/services';

@Component({
  selector: 'cwp-follow-detail-dialog',
  templateUrl: './follow-detail-dialog.component.html',
  styleUrls: ['./follow-detail-dialog.component.scss'],
})
export class FollowDetailDialogComponent {


  userProfile!: UserProfileModel;

  constructor(

    public dialogRef: MatDialogRef<FollowDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
  ) {
    this.userProfile = this.authService.currentUserValue.user;
  }


  followUser(userId: string) {
    this.authService.followUser(userId).subscribe({
      next: (res) => {
        this.dialogRef.close(true);
      },
    });
  }
}
