import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidator {
    static sameOldPass(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                if (control.value !== 'denis')
                    resolve({ sameOldPass: true});
               else 
                    resolve (null);
            }, 2000);
        })

    }

    static samePass(control: AbstractControl) {
        let newPassword = control.get('newPassword')
        let confirmPassword = control.get('confirmPassword')

        if(newPassword?.value !== confirmPassword?.value) 
            return { samePass: true}
        
        return null
    }

    
}