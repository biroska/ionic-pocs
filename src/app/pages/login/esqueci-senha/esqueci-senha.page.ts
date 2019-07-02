import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../providers/auth.service';
import {ValidatorCommomErrors} from '../../../shared/errors/ValidatorCommomErrors';
import {recuperarPassword} from '../../../validators/recuperarPassword.validator.directive';
import {FormArray} from '@angular/forms/src/model';
import {FunctionUtils} from '../../../shared/functions/FunctionUtils';

function emailDomainValidator(control: FormControl) {

    console.log('control.value: ' + control.value );
    console.log('control.parent: ' + control.parent );

    if ( control.parent ){
        console.log('control.parent0: ' + control.parent.toString() );
        console.log('control.parent1: ' + control.parent.value );
        console.log('control.parent3: ' + control.parent.get('username').value );
    }

    let email = control.value;
    if (email && email.indexOf("@") != -1) {
        let [_, domain] = email.split("@");
        if (domain !== "codecraft.tv") {
            return {
                emailDomain: {
                    parsedDomain: domain
                }
            }
        }
    }
    return null;
}

function gambetaDaPorra( param1:string, param2:string ): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } => {

        let param1Value:string;
        let param2Value:string;
        let formularioPai:FormGroup | FormArray;

        formularioPai = control.parent;

        if ( formularioPai ){

            param1Value = FunctionUtils.getValue( control.parent, param1);
            param2Value = FunctionUtils.getValue( control.parent, param2);

            console.log('control.parent1: ' + param1Value );
            console.log('control.parent2: ' + param2Value );
        }
        const isEquals = param1Value === param2Value;

        return isEquals ? { 'confirmPassword': { value: 'Os passwords são diferentes' } } : null;
    };
}

@Component({
    selector: 'app-esqueci-senha',
    templateUrl: './esqueci-senha.page.html',
    styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage extends ValidatorCommomErrors implements OnInit {

    private router: Router;
    public formulario: FormGroup;

    constructor(private fBuilder: FormBuilder,
                private rota: Router,
                private auth: AuthService) {
        super();
        this.router = rota;

        this.formulario = this.fBuilder.group(
            {
                username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
                password: ['',  Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
                confirmPassword: ['',  Validators.compose([ Validators.required,
                                                            Validators.minLength(3),
                                                            Validators.maxLength(10),
                                                            gambetaDaPorra( 'password', 'confirmPassword' )  ] ) ]
            }
        );
    }

    ngOnInit() {}

    submitForm() {
        console.log(this.formulario.value);

        this.auth.includeUser( this.formulario.controls.username.value, this.formulario.controls.password.value);

        this.router.navigate(['/login']);
    }

    log() {
        console.log(this.formulario.value);
        console.log(this.formulario.valid);
        console.log(this.formulario.controls.username.errors);
        console.log(this.formulario.controls.password.errors);
        console.log(this.formulario.controls.confirmPassword.errors);
    }

}
