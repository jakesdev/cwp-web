import { ChangeDetectionStrategy, Component } from '@angular/core';
import { authAction, ForgotPasswordState } from '@cwp/core/data-access';
import { Store } from '@ngrx/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

@Component({
  selector: 'cwp-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {

  email!: string;

  constructor(private store: Store<ForgotPasswordState>) {}


  onEmailChange(email: string) {
    // validate email type


    this.email = email;
  }

  onSubmit() {
    this.store.dispatch(authAction.setEmail({ email: this.email }));
  }
}
