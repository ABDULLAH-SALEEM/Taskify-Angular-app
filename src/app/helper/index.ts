import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('cnf_password');

    if (!password || !confirmPassword) {
      return null;
    }

    const passwordsMatch = password.value === confirmPassword.value;

    if (!passwordsMatch) {
      confirmPassword.setErrors({ passwordMatch: true });
    } else {
      if (confirmPassword.hasError('passwordMatch')) {
        delete confirmPassword.errors?.['passwordMatch'];
        if (Object.keys(confirmPassword.errors || {}).length === 0) {
          confirmPassword.setErrors(null);
        }
      }
    }

    return null;
  };
}
