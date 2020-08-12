import { AbstractControl } from '@angular/forms';

export class ChangePasswordValidators {
    static checkOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ checkOldPassword: true });
            else
                resolve(null);
        });
    }

    static checkConfirmPassword(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return { checkConfirmPassword: true };

        return null;
    }
}