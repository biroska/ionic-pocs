import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
// import { map, take } from 'rxjs/operators';
// import { Observable } from 'rxjs';
import {RegistrationData} from './registraion-data';

@Injectable({
    providedIn: 'root'
})
export class RegistrationDataService {

    private registrationDataService: AngularFirestoreCollection<RegistrationData>;

    constructor(private afs: AngularFirestore) {
        this.registrationDataService = this.afs.collection<RegistrationData>('RegistrationData');
    }

    addRegistrationData( registrationData: RegistrationData): Promise<DocumentReference> {
        return this.registrationDataService.add( JSON.parse(JSON.stringify(registrationData) ) );
    }
}
