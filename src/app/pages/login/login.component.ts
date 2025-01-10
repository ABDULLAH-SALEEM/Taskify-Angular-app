import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { TextfieldComponent } from '../../components/textfield/textfield.component';
import { LoaderButtonComponent } from '../../components/loader-button/loader-button.component';
import { RouterLink } from '@angular/router';
import { GoogleLoginComponent } from '../../components/google-login/google-login.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    TextfieldComponent,
    LoaderButtonComponent,
    RouterLink,
    GoogleLoginComponent,
    ModalComponent,
    ModalComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  signInForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
    }
  }

  loginWithGoogle() {
    // Add Google login logic here
    console.log('Login with Google clicked');
  }
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  handleCancel() {
    this.isModalOpen = false;
    console.log('Modal cancelled');
  }

  handleConfirm() {
    this.isModalOpen = false;
    console.log('Modal confirmed');
  }
}
