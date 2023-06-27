import { Component, OnInit } from '@angular/core';
import { AuthService, NotificationService } from '@cwp/core/services';
import { UserProfileModel } from '../../../../../../../../core/src/lib/model/response-model';

@Component({
  selector: 'cwp-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  newPassword = '';

  confirmPassword = '';

  hidePassword = true;

  hideConfirmPassword = true;

  userProfile!: UserProfileModel;

  constructor(
    private authService: AuthService,

    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.userProfile = res.user;
      }
    });
  }

  onSubmit() {
    this.authService.changePassword(
      {
        newPassword: this.newPassword,
        newPasswordConfirmed: this.confirmPassword
      }).subscribe({
        next: (res) => {
          this.notificationService.success('Change password successfully');
        },
        error: (err) => {
          this.notificationService.error('Change password failed');
        }
      });
  }

}
