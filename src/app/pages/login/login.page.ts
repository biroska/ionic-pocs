import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../providers/auth.service';
import {ToastController} from '@ionic/angular';
import {ValidatorCommomErrors} from '../../shared/errors/ValidatorCommomErrors';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage extends ValidatorCommomErrors implements OnInit {

    private router: Router;
    public formulario: FormGroup;
    public authService: AuthService;

    constructor(private fBuilder: FormBuilder,
                private rota: Router,
                private auth: AuthService,
                public toastController: ToastController) {
        super();
        this.router = rota;
        this.authService = auth;
        this.formulario = this.fBuilder.group(
            {
                username:['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10)])],
                password:['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10)])]
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

        let isAuthenticated: boolean = this.authService.isUserValid( this.formulario.controls.username.value, this.formulario.controls.password.value );

        if ( isAuthenticated ) {
            this.router.navigate(['/menu']);
        } else {
            this.formulario.setErrors({'incorrect':true})
            this.presentToast( 'Login e senha inválidos', 3000 );
        }
    }

    async presentToast( message:string, duration:number ) {

        const toast = await this.toastController.create({
            message: message,
            duration: duration,
            position: 'middle',
            color: 'danger'
        });
        toast.present();
    }

}