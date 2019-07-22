import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CreateUpdatePage} from './create-update.page';
import {MaterialModule} from '../../../shared/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: CreateUpdatePage
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
    declarations: [CreateUpdatePage]
})
export class CreateUpdatePageModule {
}
