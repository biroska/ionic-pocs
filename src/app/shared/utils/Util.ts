import {FormArray, FormControl, ValidationErrors} from '@angular/forms';


export class Utils {

    public static getFormControlKeys ( formulario: FormArray ) : string[]{

        if ( !formulario ){
            return null;
        }

        let controller = formulario.controls;

        let keys: string[] = Object.keys(controller);

        return keys;
    }

    public static logControllerState ( formulario: FormArray ){

        if ( !formulario ){
            return null;
        }

        let controller = formulario.controls;

        console.log('Loop');

        for(let item in controller ){
            let control = controller[item];

            console.log( control );

            if ( control.valid  ){
                console.log( control.value + ' is valid ' );
            } else {
                console.log( control.value + ' is invalid errors: ' );
                let errors = control.errors;

                for(let e in errors ){
                    console.log( e );
                }

            }
        }
    }


    public static logControllerStateV2 ( formulario: FormArray ){

        if ( !formulario ){
            return null;
        }

        console.log('logControllerStateV2');
        console.log(formulario);
        console.log(formulario.valid);

        let keys: string[] = this.getFormControlKeys( formulario );

        if ( !keys ){
            return null;
        }

        let controller = formulario.controls;

        for ( let k of keys ){
            console.log('Key: ' + k );
            console.log( controller[ k ] );

            if ( !controller[ k ].valid ){
                this.logInvalidState( controller[ k ] );
            }

        }
    }

    private static logInvalidState(form: FormControl){

        let formErrors: ValidationErrors = form.errors;

        if ( !formErrors ){
            return;
        }

        let keys: string[] = Object.keys( formErrors );

        for (let e of keys ){
            console.log('error: ' + e);
        }
    }

}