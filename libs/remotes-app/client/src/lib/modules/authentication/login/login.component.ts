import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authAction, AuthState } from '@cwp/core/data-access';
import { currentEnvironment } from '@cwp/core/endpoint';
import { AuthService } from '@cwp/core/services';
import { Store } from '@ngrx/store';
@Component({
  selector: 'cwp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  isValidEmail = true;
  isValidPassword = true;

  currentEnvironment = currentEnvironment;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {}

  login() {
    this.loginForm.get('email')?.status === 'INVALID'
      ? (this.isValidEmail = false)
      : (this.isValidEmail = true);
    this.loginForm.get('password')?.status === 'INVALID'
      ? (this.isValidPassword = false)
      : (this.isValidPassword = true);

    if (!this.isValidEmail || !this.isValidPassword) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.store.dispatch(
      authAction.loginUser({
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,
      })
    );

    // this.store.select(selectUserProfile).subscribe((userProfile) => {
    //   console.log('User profile:', userProfile);
    //   // Use the userProfile data as needed in your component
    // });

    /* this.authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe(() => {
        this.router.navigate(['/customer-support']);
      }); */
  }
}
