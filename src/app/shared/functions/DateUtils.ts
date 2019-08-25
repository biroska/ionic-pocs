import {FunctionUtils} from './FunctionUtils';

export class DateUtils {

    static toDate( dia:string, mes:string, ano:string ): Date {

        if ( !FunctionUtils.isNumber( dia ) ||
            !FunctionUtils.isNumber( mes )||
            !FunctionUtils.isNumber( ano ) ){
            return null;
        }

        let date = new Date();

        date.setDate( Number( dia ) );
        date.setMonth( Number( mes ) );
        date.setFullYear( Number( ano ) );

        return date;
    }

    static convert(date:string, inputFormat:DateFormat ): Date {

        if (!date) {
            return null;
        }

        let tokens:string[];
        let dateObj = new Date();

        switch ( inputFormat ) {
            case DateFormat.ptBR: {
                console.log("ptBR");

                tokens = date.split('/');

                dateObj.setDate( Number( tokens[0] ) );
                dateObj.setMonth( Number( tokens[1] ) -1 );
                dateObj.setFullYear( Number( tokens[2] ) );

                break;
            }
            case DateFormat.eng: {
                console.log("eng");

                dateObj = new Date( date );

                dateObj.setDate( dateObj.getDate() +1);

                break;
            }
            default: {
                console.log("Default");
                break;
            }
        }
        return dateObj;
    }
}

export enum DateFormat {
    ptBR = 'DD/MM/YYYY',
    eng = 'YYYY-MM-DD'
}