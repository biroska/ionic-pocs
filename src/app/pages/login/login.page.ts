import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private router: Router;
    public formulario: FormGroup;

    constructor(private fBuilder: FormBuilder,
                private rota: Router) {

        this.router = rota;

        this.formulario = this.fBuilder.group(
            {
                username:['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10)])],
                password:['', Validators.compose([Validators.required])]
            }
        );
    }

    ngOnInit() {
        // setTimeout(() => {
        //     this.formulario.get('username').setValue('mocked');
        // }, 2000);
    }

    submitForm() {
        console.log(this.formulario.value);
        this.router.navigate(['/menu']);
    }

}
