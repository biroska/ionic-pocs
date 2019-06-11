import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {ReactiveFormsModule} from '@angular/forms';
import {CrudPage} from '../crud/crud.page';

const routes: Routes = [
    { path: '', component: LoginPage },
    { path: 'esqueci-minha-senha', loadChildren: '../login/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' }
];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginPage]
})
export class LoginPageModule {
}
