import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
    {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'},
    {path: 'principal', loadChildren: './pages/principal/principal.module#PrincipalPageModule'},
    {path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule'},
    {path: 'details/:myid', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard]},
    {path: 'menu/crud', loadChildren: './pages/crud/crud.module#CrudPageModule'},
    // { path: 'esqueci-senha', loadChildren: './pages/login/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
    /*Tem que ser o ultimo path configurado*/
    {path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
