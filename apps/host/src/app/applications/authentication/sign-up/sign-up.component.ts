import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthState } from '@cwp/core/data-access';
import { AuthService, NotificationService } from '@cwp/core/services';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cwp-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit{
  hide = true;
  isValidEmail = true;
  isValidPassword = true;
  isValidConfirmPassword = true;

  isSamePassword= true;

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(
    private store: Store<AuthState>,
    private router: Router,

    private notificationService: NotificationService,

    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe((value) => {
      this.isValidEmail = true;
      this.isValidPassword = true;
      this.isValidConfirmPassword = true;
    }
    );
  }

  register() {
    this.registerForm.get('email')?.status === 'INVALID'
      ? (this.isValidEmail = false)
      : (this.isValidEmail = true);
    this.registerForm.get('password')?.status === 'INVALID'
      ? (this.isValidPassword = false)
      : (this.isValidPassword = true);
    this.registerForm.get('confirmPassword')?.status === 'INVALID'
      ? (this.isValidConfirmPassword = false)
      : (this.isValidConfirmPassword = true);

    if (
      !this.isValidEmail ||
      !this.isValidPassword ||
      !this.isValidConfirmPassword
    ) {
      return;
    }

    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      this.isSamePassword = false;
      return;
    }

    // this.store.dispatch(authAction.signUpUser({
    //   email: this.registerForm.value.email?.toString() || "",
    //   password: this.registerForm.value.password?.toString() || "",
    // }));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.authService
      .signUp(this.registerForm.value.email!, this.registerForm.value.password!)
      .subscribe({
        next: () => {
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.log(err);
          this.notificationService.error( 'Sign up failed');
        }
      }
      );
  }
}
