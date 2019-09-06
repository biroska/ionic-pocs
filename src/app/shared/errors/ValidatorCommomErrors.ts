import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {ErrorMessage} from '../../model/ErrorMessage';
import {FormGroup} from '@angular/forms';

export abstract class ValidatorCommomErrors {

    private erro: ValidationErrors;
    private errorTypeMessages: ErrorMessage[];

    constructor() {
// TODO: Extrair esse cache para um provider
        this.errorTypeMessages = [ new ErrorMessage( 'required', 'Campo obrigatório' ) ];

        this.errorTypeMessages.push( new ErrorMessage( 'minlength', 'Quantidade mínima de caracteres "3"' ) );

        this.errorTypeMessages.push( new ErrorMessage( 'maxlength', 'Quantidade máxima de caracteres "10"' ) );

        this.registerMessages();
    }

    protected abstract registerMessages();

    protected getErrorMessage( group:FormGroup ) {

        for (let key in group.errors ) {

            // console.log('Keys: ' +  key );

            if ( group.errors[key] ){
                let resul = this.getMessage( key );

                // console.log('Resul: ' + resul );

                return resul;
            }
        }

        return '';
    }

    protected getMessage( error:string ) :string {

        for (var i = 0; this.errorTypeMessages.length > i; i++) {

            let item: ErrorMessage;
            item = this.errorTypeMessages[ i ];

            if ( item.getError() === error ){
                return item.getMessage();
            }
        }

        return 'Mensagem de erro não definida';
    }

    protected addErrorMessage( key:string, errorMessage:string ){

        this.errorTypeMessages.push( new ErrorMessage( key, errorMessage ) );
    }


    protected viewErrorMessages(){

        for (let key in this.errorTypeMessages ) {
            console.log('key: ' + this.errorTypeMessages[key].getError() + ' Message: ' + this.errorTypeMessages[key].getMessage() );
        }
    }
}