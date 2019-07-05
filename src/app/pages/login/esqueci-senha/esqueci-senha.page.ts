import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../providers/auth.service';
import {ValidatorCommomErrors} from '../../../shared/errors/ValidatorCommomErrors';
import {FunctionUtils} from "../../../shared/functions/FunctionUtils";

function areParametersDifferent( param1:string, param2:string ): ValidatorFn {

    return (control: AbstractControl): { [key: string]: boolean | null } => {

        let param1Value:string;
        let param2Value:string;
        let formularioPai:FormGroup | FormArray;

        formularioPai = control.parent;

        if ( formularioPai ){

            param1Value = FunctionUtils.getValue( control.parent, param1);
            param2Value = FunctionUtils.getValue( control.parent, param2);

        }
        const isEquals = param1Value === param2Value;

        console.log('param1Value: ' + param1Value + ' param2Value: ' + param2Value + ' isEquals: ' + isEquals );

        if ( !isEquals ){
            return { 'differentParameters': true };
        }

        return null;
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
                                                            areParametersDifferent( 'password', 'confirmPassword' )  ] ) ]
            }
        );
    }

    ngOnInit() {}

    submitForm() {
        console.log(this.formulario.value);

        this.auth.includeUser( this.formulario.controls.username.value, this.formulario.controls.password.value);

        this.router.navigate(['/login']);
    }

    protected registerMessages(){
        console.log('===========================================================');
        console.log('=               INVOKADO NA CLASSE FILHA                  =');
        console.log('===========================================================');

        super.addErrorMessage(  'differentParameters', 'Os passwords são diferentes' );
    }

    log() {
        super.viewErrorMessages();
        console.log(this.formulario.value);
        console.log(this.formulario.valid);
        console.log(this.formulario.controls.username.errors);
        console.log(this.formulario.controls.password.errors);
        console.log(this.formulario.controls.confirmPassword.errors);
    }

}
