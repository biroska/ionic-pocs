import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {ErrorMessage} from '../../model/ErrorMessage';

export abstract class ValidatorCommomErrors {

    private erro: ValidationErrors;
    private errorTypeMessages: ErrorMessage[];

    constructor() {

        this.errorTypeMessages = [ new ErrorMessage( 'required', 'Campo obrigatório' ) ];

        this.errorTypeMessages.push( new ErrorMessage( 'minlength', 'Quantidade mínima de caracteres "3"' ) );

        this.errorTypeMessages.push( new ErrorMessage( 'maxlength', 'Quantidade máxima de caracteres "10"' ) );
    }

    protected getMessage( error:string ) :string {

        console.log('getMessage( ' + error + ' )');

        for (var i = 0; this.errorTypeMessages.length > i; i++) {

            let item: ErrorMessage;
            item = this.errorTypeMessages[ i ];

            if ( item.getError() === error ){
                return item.getMessage();
            }
        }

        return 'Mensagem de erro não definida';
    }

    protected addErrorMessage(){
        // TODO Implementar
    }

}