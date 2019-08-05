import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {CepService} from '../../../providers/cep.service';
import {CepServiceResponse} from '../../../providers/cep.service.response';
import {CpfService} from '../../../providers/cpf.service';
import {CpfServiceResponse} from '../../../providers/cpf.service.response';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.page.html',
    styleUrls: ['./create-update.page.scss'],
    providers:[CepService]
})
export class CreateUpdatePage implements OnInit {

    public stepperFormGroup: FormGroup;

    constructor( private fBuilder: FormBuilder,
                 private cepService: CepService,
                 private cpfService: CpfService) {}

    ngOnInit() {
        this.stepperFormGroup = this.fBuilder.group({
            formArray: this.fBuilder.array([
                            this.fBuilder.group({ cpf: ['', Validators.required],
                                                               name: ['', Validators.required],
                                                               dob: ['', Validators.required],
                                                               telephoneNumber: ['', Validators.required],
                                                               email: ['', Validators.required] }),
                            this.fBuilder.group({ cep: ['', Validators.required],
                                                                address: ['', Validators.required],
                                                                addressNumber: ['', Validators.required],
                                                                district: ['', Validators.required],
                                                                city: ['', Validators.required],
                                                                state: ['', Validators.required]
                            }),
                            this.fBuilder.group({})
                        ])
        });

        this.onCepChanges();

        this.onCpfChanges();
    }

    onCpfChanges(): void {

        let cpfFormField = this.stepperFormGroup.get('formArray').get([0]).get('cpf');

        cpfFormField.valueChanges.subscribe(val => {

            console.log('Changes: ' + cpfFormField.value );

            let cpfValue = cpfFormField.value;

            if ( ( cpfValue.length === 11 ) || ( cpfValue.length === 14 ) ){
                console.log( 'CPF value: ' + cpfValue + ' cpfValue.length: ' + cpfValue.length );
                this.buscarCpfPromise( cpfValue );
            }

        });
    }

    onCepChanges(): void {

        this.stepperFormGroup.get('formArray').get([1]).get('cep').valueChanges.subscribe(val => {
            console.log('Changes: ' + this.stepperFormGroup.get('formArray').get([1]).get('cep').value );

            let cep = this.stepperFormGroup.get('formArray').get([1]).get('cep').value;

            if ( cep.length === 9 ){
                this.buscarCepPromise( cep );
            }

        });
    }

    private buscarCepPromise(cep:string ) {
        let cepResponse:CepServiceResponse;

        return this.cepService.getCepPromise( cep ).then((response: {}) => {


            console.log( response );

            cepResponse = ( response as CepServiceResponse );

            let formEndereco: AbstractControl | null = this.stepperFormGroup.get('formArray').get([1]);

            formEndereco.get('cep').setValue( cepResponse.cep );
            formEndereco.get('address').setValue( cepResponse.endereco );
            formEndereco.get('district').setValue( cepResponse.bairro );
            formEndereco.get('city').setValue( cepResponse.cidade );
            formEndereco.get('state').setValue( cepResponse.uf );

        })
    }

    private buscarCpfPromise(cpf:string ) {

        let cpfResponse:CpfServiceResponse;

        return this.cpfService.getCpfPromise( cpf ).then((response: {}) => {


            console.log( response );

            cpfResponse = ( response as CpfServiceResponse );

            let formDadosPessoais: AbstractControl | null = this.stepperFormGroup.get('formArray').get([0]);

            // formDadosPessoais.get('cpf').setValue( cpfResponse.cpf ); Verificar por que causa loop
            formDadosPessoais.get('name').setValue( cpfResponse.nome );
            formDadosPessoais.get('dob').setValue( cpfResponse.dtNascimento );
            formDadosPessoais.get('telephoneNumber').setValue( cpfResponse.telefone );
            formDadosPessoais.get('email').setValue( cpfResponse.email );

        })
    }
}