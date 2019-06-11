import {FormControl} from '@angular/forms';
import {isNumber} from 'util';
import {isNumeric} from 'tslint';

export class AgeValidator {

    static isValid(control: FormControl): any {

        if (!isNumeric(control.value)) {
            return {
                'not a number': true
            };
        }

        if (control.value % 1 !== 0) {
            return {
                'not a whole number': true
            };
        }

        if (control.value < 18) {
            return {
                'too young': true
            };
        }

        if (control.value > 110) {
            return {
                'not realistic': true
            };
        }

        return null;
    }

}