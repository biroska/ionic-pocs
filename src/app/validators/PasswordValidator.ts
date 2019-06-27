import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class PasswordValidator {

    static recuperarPassword(form: FormGroup): ValidatorFn {

        console.log('recuperarPassword: ' + form );

        if ( !form ) {
            return;
        }

        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        console.log('Validar passwords iguais: ' + password );
        console.log('Validar passwords iguais: ' + confirmPassword );

        return (control: AbstractControl): { [key: string]: any } | null => {
            const forbidden = password && confirmPassword && confirmPassword !== password;
            console.log('forbidden: ' + forbidden );
            return forbidden ? {'confirmPassword': {value: 'Os passwords são diferentes'}} : null;
        };
    }
}