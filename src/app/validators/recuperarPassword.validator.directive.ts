import {AbstractControl, ValidatorFn} from '@angular/forms';

export function recuperarPassword( password:string, confirmedPassword:string ): ValidatorFn {

    console.log('recuperarPassword: ' );
    console.log('password: ' + password );
    console.log('confirmedPassword: ' + confirmedPassword );

    return (control: AbstractControl): { [key: string]: any } => {

        if ( password && confirmedPassword ){

            const isEquals = password === confirmedPassword;

            return isEquals ? { 'confirmPassword': { value: 'Os passwords são diferentes' } } : null;
        }
    };
}