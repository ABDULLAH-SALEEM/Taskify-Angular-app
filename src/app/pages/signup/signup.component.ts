import { Component } from '@angular/core';
import { TextfieldComponent } from '../../components/textfield/textfield.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { passwordMatchValidator } from '../../helper';
import { LoaderButtonComponent } from '../../components/loader-button/loader-button.component';
import { RouterLink } from '@angular/router';
import { GoogleLoginComponent } from '../../components/google-login/google-login.component';

@Component({
  selector: 'app-signup',
  imports: [
    FormsModule,
    TextfieldComponent,
    LoaderButtonComponent,
    RouterLink,
    GoogleLoginComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cnf_password: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: passwordMatchValidator() }
    );
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
    }
  }

  loginWithGoogle() {
    // Add Google login logic here
    console.log('Login with Google clicked');
  }
}
