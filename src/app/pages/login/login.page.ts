import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../providers/auth.service';
import {ToastController} from '@ionic/angular';
import {ValidatorCommomErrors} from '../../shared/errors/ValidatorCommomErrors';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

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
                public toastController: ToastController,
                private faio: FingerprintAIO ) {
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

    public loginWithFingerPrint() {
        this.faio.show({
            clientId: 'Fingerprint-Demo',
            clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Only Android -- 'password'
            localizedFallbackTitle: 'Use Pin', // Only iOS
            localizedReason: 'Please authenticate' // Only iOS
        })
            .then((result: any) => console.log(result))
            .catch((error: any) => {
                console.log('err: ', error);
            });
    }

    protected registerMessages(){
        console.log('===========================================================');
        console.log('=               INVOKADO NA CLASSE FILHA                  =');
        console.log('===========================================================');
    }
}