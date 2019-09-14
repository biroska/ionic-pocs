import {AbstractControl, FormArray, Validators} from '@angular/forms';
import {AddressData, PersonalData, RegistrationData} from '../providers/firebase/registraion-data';
import {FunctionUtils} from '../shared/functions/FunctionUtils';

export class RegistrationDataAdapter {

    public static fromCreateUpdatePage(formulario: AbstractControl): RegistrationData {

        if ( !formulario ){
            return null;
        }

        let data = new RegistrationData();

        let personalDataControl: AbstractControl = formulario.get([0]);

        let personal: PersonalData = new PersonalData();
        personal.setCpf( FunctionUtils.getValue( personalDataControl, 'cpf' ) );

        personal.setName( FunctionUtils.getValue( personalDataControl, 'name' ) );
        personal.setDob( FunctionUtils.getValue( personalDataControl, 'dob' ) );
        personal.setTelephoneNumber( FunctionUtils.getValue( personalDataControl, 'telephoneNumber' ) );
        personal.setEmail( FunctionUtils.getValue( personalDataControl, 'email' ) );
        data.setPersonalData( personal );

        let addressControl: AbstractControl = formulario.get([1]);
        let address: AddressData = new AddressData();

        address.setCep( FunctionUtils.getValue( addressControl, 'cep' ) );
        address.setStreet( FunctionUtils.getValue( addressControl, 'address' ) );
        address.setNumber( FunctionUtils.getValue( addressControl, 'addressNumber' ) );
        address.setDistrict( FunctionUtils.getValue( addressControl, 'district' ) );
        address.setCity( FunctionUtils.getValue( addressControl, 'city' ) );
        address.setState( FunctionUtils.getValue( addressControl, 'state' ) );
        data.setAddress( address );

        return data;
    }
}
