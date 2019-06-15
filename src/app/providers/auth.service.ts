import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

   private usersAndPasswords =[ {username:'biroska', password: '12345678'},
                                {username:'agaldino', password: '12345678'},
                                {username:'teste', password: '12345678'}];

    constructor() {}

    isUserValid(username: String, password: String): boolean {

        console.log('username: ' + username + ' password: ' + password);

        if (!username && !password) {
            return false;
        }

        let isValid = this.usersAndPasswords.some(
            el => el.username === username &&
                  el.password === password
        );

        console.log('isValid: ' + isValid)
        return isValid;
    }
}
