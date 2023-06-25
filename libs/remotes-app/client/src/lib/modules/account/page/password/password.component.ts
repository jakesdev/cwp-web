import { Component } from '@angular/core';
import { AuthService } from '@cwp/core/services';

@Component({
  selector: 'cwp-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {

  newPassword = '';

  confirmPassword = '';

  constructor(
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.changePassword({
      newPassword: this.newPassword,
      newPasswordConfirmed: this.confirmPassword
    });
  }

}
