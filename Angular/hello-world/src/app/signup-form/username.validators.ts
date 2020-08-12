import { AbstractControl, ValidationErrors } from '@angular/forms';

//Custom validation, can have multiple methods
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    //video 97
    //async call could be done by calling server or call setTimeout() method
    //()=> its called arrow function in TS
    //Promise - represents the completion of async operation
    //resolve - parameter for success
    //reject - parameter for failure
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'byamakesh')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);//calling async method by delaying 2 sec
        });
    }
}