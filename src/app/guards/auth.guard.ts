import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log(route);

        let authInfo = {
            authenticated: false
        };

        if (!authInfo.authenticated) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
