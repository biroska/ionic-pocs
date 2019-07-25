import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CEP} from '../shared/constants/Constants';

@Injectable()
export class CepService {

    constructor(private http: HttpClient) {
        console.log('Hello MovieProvider Provider');
    }


    getCep( cep:string ) {
        // return this.http.get( Constants.BASE_API_PATH + Constants.DETAIL_OF_MOVIE_BY_ID + id  + "?" + Constants.API_KEY + "&language=en-US" );
        console.log('service.getCep: ' + cep );
        console.log('service.getCep.url: ' + CEP.BASE_API_PATH + cep +"/" + "?" + CEP.CEP_KEY + "&" + CEP.CEP_SECRET );
        return this.http.get( CEP.BASE_API_PATH + cep +"/" + "?" + CEP.CEP_KEY + "&" + CEP.CEP_SECRET );
    }


}
