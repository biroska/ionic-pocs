import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CrudPage} from './crud.page';

const routes: Routes = [
    {path: '', component: CrudPage},
    {path: 'create-update', loadChildren: '../crud/create-update/create-update.module#CreateUpdatePageModule' },
    {path: 'read-delete', loadChildren: '../crud/read-delete/read-delete.module#ReadDeletePageModule'},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CrudPage]
})
export class CrudPageModule {
}
