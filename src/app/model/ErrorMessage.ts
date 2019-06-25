import {ValidationErrors} from '@angular/forms/src/directives/validators';

export class ErrorMessage {

    private _error: string;
    private _message: string;

    constructor( error: string, message: string) {
        this._error = error;
        this._message = message;
    }

    public getError(): string {
        return this._error;
    }

    public getMessage(): string {
        return this._message;
    }
}