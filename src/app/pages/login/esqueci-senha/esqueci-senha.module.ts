import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {EsqueciSenhaPage} from './esqueci-senha.page';
import {MaterialModule} from '../../../shared/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: EsqueciSenhaPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EsqueciSenhaPage]
})
export class EsqueciSenhaPageModule {
}
