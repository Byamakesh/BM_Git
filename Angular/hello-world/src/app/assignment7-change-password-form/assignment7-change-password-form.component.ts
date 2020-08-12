import { ChangePasswordValidators } from './changepassword.validators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment7-change-password-form',
  templateUrl: './assignment7-change-password-form.component.html',
  styleUrls: ['./assignment7-change-password-form.component.css']
})
export class Assignment7ChangePasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, ChangePasswordValidators.checkOldPassword],
      newPassword: ['', Validators.required,],
      confirmPassword: ['', Validators.required,]
    }, {
      validator: ChangePasswordValidators.checkConfirmPassword
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
