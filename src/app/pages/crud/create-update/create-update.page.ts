import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.page.html',
    styleUrls: ['./create-update.page.scss'],
})
export class CreateUpdatePage implements OnInit {

    public stepperFormGroup: FormGroup;

    constructor(private fBuilder: FormBuilder) {}

    ngOnInit() {
        this.stepperFormGroup = this.fBuilder.group({
            formArray: this.fBuilder.array([
                this.fBuilder.group({ cpf: ['', Validators.required],
                                                   name: ['', Validators.required] }),
                this.fBuilder.group({ cep: ['', Validators.required],
                                                    address: ['', Validators.required] }),
                this.fBuilder.group({})
            ])
        });
    }
}
