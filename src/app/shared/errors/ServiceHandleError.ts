import {throwError} from 'rxjs';

export abstract class ServiceHandleError {

    constructor() {}

    protected handleError(error) {

        let errorMessage = '';

        if ( error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        window.alert(errorMessage);

        return throwError(errorMessage);
    }
}