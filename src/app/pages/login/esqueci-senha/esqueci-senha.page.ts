import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../providers/auth.service';

@Component({
    selector: 'app-esqueci-senha',
    templateUrl: './esqueci-senha.page.html',
    styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {

    private router: Router;
    public formulario: FormGroup;

    constructor(private fBuilder: FormBuilder,
                private rota: Router,
                private auth: AuthService) {

        this.router = rota;

        this.formulario = this.fBuilder.group(
            {
                username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
                password: ['', Validators.compose([Validators.required])],
                confirmPassword: ['', Validators.compose([Validators.required])],
            }
        );

    }

    ngOnInit() {
    }

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
