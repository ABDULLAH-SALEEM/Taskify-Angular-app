import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.scss',
})
export class TextfieldComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: any = null;
  @Input() required: boolean = false;
  @Input() errorMessages: { [key: string]: string } = {};
  @Input() isPassword: boolean = false;
  isFocused: boolean = false;
  isPasswordVisible: boolean = false;

  getErrorMessage(): string {
    if (!this.control || !this.control.errors) return '';
    const errorKey = Object.keys(this.control.errors)[0];
    console.log('errorKey===', errorKey);
    return this.errorMessages[errorKey] || 'Invalid value.';
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get inputId(): string {
    return this.label.toLowerCase().replace(/\s+/g, '-');
  }
}
