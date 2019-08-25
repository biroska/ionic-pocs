export class FormatterUtils {

    public static telephoneNumber( input:string ): string {

        if ( !input ){
            return null;
        }

        if ( input.length == 11 ){
            return this.cellphoneNumber( input );
        } else
            if ( input.length == 10 ){
                return this.landlineNumber( input );
            }

        return null;
    }

    private static cellphoneNumber( input:string ): string {

        if ( !input || input.length != 11 ){
            return null;
        }

        let retorno:string = "";

        let ddd: string = input.substring(0,2);
        let prefixNumber: string = input.substring(2,7);
        let sufixNumber: string = input.substring(7,11);

        retorno = "(" + ddd + ") " + prefixNumber + "-" + sufixNumber;

        return retorno;
    }

    private static landlineNumber( input:string ): string {

        if ( !input || input.length != 10 ){
            return null;
        }

        let retorno:string = "";

        let ddd: string = input.substring(0,2);
        let prefixNumber: string = input.substring(2,6);
        let sufixNumber: string = input.substring(6,10);

        retorno = "(" + ddd + ") " + prefixNumber + "-" + sufixNumber;

        return retorno;
    }

}