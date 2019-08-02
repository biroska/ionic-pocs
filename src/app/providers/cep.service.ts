import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CEP} from '../shared/constants/Constants';
import {CepServiceResponse} from './cep.service.response';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ServiceHandleError} from '../shared/errors/ServiceHandleError';

@Injectable()
export class CepService extends ServiceHandleError {

    constructor(private http: HttpClient) {
        super();
    }


    getCep( cep:string ) {
        console.log('service.getCep: ' + cep );
        console.log('service.getCep.url: ' + CEP.BASE_API_PATH + cep +"/" + "?" + CEP.CEP_KEY + "&" + CEP.CEP_SECRET );
        return this.http.get( CEP.BASE_API_PATH + cep +"/" + "?" + CEP.CEP_KEY + "&" + CEP.CEP_SECRET );
    }

    getCepObservable( cep:string ): Observable<CepServiceResponse> {
        return ( this.http.get( CEP.BASE_API_PATH + cep +"/" + "?" + CEP.CEP_KEY + "&" + CEP.CEP_SECRET ) as Observable<CepServiceResponse> )
            .pipe(
                retry(1),
                catchError( super.handleError )
            )
    }

    getCepPromise(cep:string ):Promise<CepServiceResponse>{

        return this.http.get( CEP.BASE_API_PATH + cep +"/" + "?" + CEP.CEP_KEY + "&" + CEP.CEP_SECRET ).toPromise()
            .then(res => (res as Promise<CepServiceResponse> ) )
            .catch();

    }
}
