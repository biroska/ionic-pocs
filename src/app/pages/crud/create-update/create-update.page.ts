import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {CepService} from '../../../providers/cep.service';
import {CepServiceResponse} from '../../../providers/cep.service.response';
import {CpfService} from '../../../providers/cpf.service';
import {CpfServiceResponse} from '../../../providers/cpf.service.response';
import {APP_DATE_FORMATS} from '../../../shared/material/format-datepicker';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateFormat, DateUtils} from '../../../shared/functions/DateUtils';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.page.html',
    styleUrls: ['./create-update.page.scss'],
    providers:[  CepService,
                { provide: MAT_DATE_LOCALE, useValue: 'pt' }, //you can change useValue
                { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS } ]
})
export class CreateUpdatePage implements OnInit {

    public isDadosCadastraisReadonly:boolean;
    public isDadosEnderecoReadonly:boolean;

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

        this.isDadosCadastraisReadonly = true;
        this.isDadosEnderecoReadonly = true;

    }

    onCpfChanges(): void {

        let cpfFormField = this.stepperFormGroup.get('formArray').get([0]).get('cpf');

        cpfFormField.valueChanges.subscribe(val => {

            let cpfValue = cpfFormField.value;

            if (  ( cpfValue.length === 14 ) ){
                console.log( 'CPF value: ' + cpfValue + ' cpfValue.length: ' + cpfValue.length );

                var cpfSemFormatacao:string = cpfValue;

                cpfSemFormatacao = cpfSemFormatacao.replace (/[\.-]/g,'');

                this.buscarCpfPromise( cpfSemFormatacao );
            }

        });
    }

    onCepChanges(): void {

        this.stepperFormGroup.get('formArray').get([1]).get('cep').valueChanges.subscribe(val => {
            console.log('Changes: ' + this.stepperFormGroup.get('formArray').get([1]).get('cep').value );

            let cep = this.stepperFormGroup.get('formArray').get([1]).get('cep').value;

            if ( cep && cep.length === 9 ){
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

        }).catch( e => {
            console.log( e );
            this.clearDadosEndereco( this.stepperFormGroup.get('formArray').get([1]) );
            this.isDadosEnderecoReadonly = false;
        } )
    }

    private buscarCpfPromise(cpf:string ) {

        console.log( 'buscarCpfPromise: '+ cpf );

        let cpfResponse:CpfServiceResponse;

        return this.cpfService.getCpfPromise( cpf ).then((response: {}) => {

            console.log('Retorno da Promise: ' + JSON.stringify( response ) );

            if (response) {

                cpfResponse = (response as CpfServiceResponse);

                let formDadosPessoais: AbstractControl | null = this.stepperFormGroup.get('formArray').get([0]);

                // formDadosPessoais.get('cpf').setValue( cpfResponse.cpf ); Verificar por que causa loop
                formDadosPessoais.get('name').setValue(cpfResponse.nome);
                formDadosPessoais.get('dob').setValue( DateUtils.convert(cpfResponse.dtNascimento, DateFormat.ptBR)  );
                formDadosPessoais.get('telephoneNumber').setValue(cpfResponse.telefone);
                formDadosPessoais.get('email').setValue(cpfResponse.email);
            }
        }).catch( e => {
                console.log( e );
                this.clearDadosCadastrais( this.stepperFormGroup.get('formArray').get([0]) );
                this.isDadosCadastraisReadonly = false;
        } )
    }

    private clearDadosCadastrais(control:AbstractControl):void{
        control.get('name').setValue( '' );
        control.get('dob').setValue( '' );
        control.get('telephoneNumber').setValue( '' );
        control.get('email').setValue( '' );
    }

    private clearDadosEndereco(control:AbstractControl):void{
        control.get('address').setValue( '' );
        control.get('district').setValue( '' );
        control.get('city').setValue( '' );
        control.get('state').setValue( '' );
    }
}