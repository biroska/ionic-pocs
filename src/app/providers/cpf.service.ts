import { Injectable } from '@angular/core';
import {CpfServiceResponse} from './cpf.service.response';
import {CepServiceResponse} from './cep.service.response';
import {CEP} from '../shared/constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class CpfService {

  private pessoasFisicaMock =[ {cpf:'28019926828', value: new CpfServiceResponse( '28019926828', 'Aimbere Galdino', '20/01/1980', null, 'biroska@gmail.com' ) },
                               {cpf:'12345678900', value: new CpfServiceResponse( '12345678900', 'Mock Um', '29/05/1953', '11985214456', 'mock.um@gmail.com' ) },
                               {cpf:'99999999999', value: new CpfServiceResponse( '99999999999', 'Mock Dois', '23/12/2014', null, null ) } ];

  constructor() { }


  private getPessoaFisica(cpf: string): CpfServiceResponse {

    console.log('getPessoaFisica: ' + cpf);

    if (!cpf) {
      return null;
    }

    let _filter = this.pessoasFisicaMock.filter(item => item.cpf == cpf)[0];

    console.log('Pessoa Encontrada: ' + _filter);

    if (_filter) {
      return _filter.value;
    } else {
      return null;
    }
  }

  getCpfPromise(cpf: string): Promise<CpfServiceResponse> {

    var promise = new Promise<CpfServiceResponse>((resolve, reject) => {

      let cpfResponse:CpfServiceResponse = this.getPessoaFisica( cpf );
      console.log('cpfResponse: ' + cpfResponse );
      if ( cpfResponse ){
        console.log('cpfResponse valido: ' + cpfResponse );
        resolve( cpfResponse );
      } else {
        console.log('cpfResponse null: ' + cpfResponse );
        reject( null );
      }
    });
    return promise;
  }

}
