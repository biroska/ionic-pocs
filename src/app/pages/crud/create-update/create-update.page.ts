import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {CepService} from '../../../providers/cep.service';
import {CepServiceResponse} from '../../../providers/cep.service.response';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.page.html',
    styleUrls: ['./create-update.page.scss'],
    providers:[CepService]
})
export class CreateUpdatePage implements OnInit {

    public stepperFormGroup: FormGroup;

    constructor( private fBuilder: FormBuilder,
                 private cepService: CepService ) {}

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
    }

    onCepChanges(): void {

        this.stepperFormGroup.get('formArray').get([1]).get('cep').valueChanges.subscribe(val => {
            console.log('Changes: ' + this.stepperFormGroup.get('formArray').get([1]).get('cep').value );

        let cep = this.stepperFormGroup.get('formArray').get([1]).get('cep').value;

            if ( cep.length === 9 ){
                this.buscarCep( cep );
            }

        });
    }

    public buscarCep(cep:string ) {

        let cepResponse:CepServiceResponse;

        return this.cepService.getCepAsync( cep ).subscribe((response: {}) => {

            console.log()

            cepResponse = ( response as CepServiceResponse );

            let formEndereco: AbstractControl | null = this.stepperFormGroup.get('formArray').get([1]);

            formEndereco.get('cep').setValue( cepResponse.cep );
            formEndereco.get('address').setValue( cepResponse.endereco );
            formEndereco.get('district').setValue( cepResponse.bairro );
            formEndereco.get('city').setValue( cepResponse.cidade );
            formEndereco.get('state').setValue( cepResponse.uf );

        })

    }
}
