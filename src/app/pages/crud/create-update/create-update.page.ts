import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {CepService} from '../../../providers/cep.service';

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
    }

    public buscarCep( cep:string ) {

        console.log('buscarCep: ' + cep);

        this.cepService.getCep( cep ).subscribe(
            value => {
                const response = (value as any);
                console.log( response );
            },
            error1 => {
                console.log(error1);
            }
        );
    }
}
