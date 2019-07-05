import {AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

export class FunctionUtils {

    static getValue( control:AbstractControl, param:string): string {

        console.log('FunctionUtils.getValue( ' + param + ' )');
        let controlInterno:AbstractControl;

        if ( control ){

            controlInterno = control.get( param );

            console.log('controlInterno: ' + controlInterno );

            if ( controlInterno ){
                return controlInterno.value;
            }
        }

        return '';
    }
}