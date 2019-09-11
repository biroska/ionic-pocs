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
        return this.registrationDataService.add( registrationData );
    }

    // getIdea(id: string): Observable<Idea> {
    //     return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
    //         take(1),
    //         map(idea => {
    //             idea.id = id;
    //             return idea
    //         })
    //     );
    // }
    //
    // updateIdea(idea: Idea): Promise<void> {
    //     return this.ideaCollection.doc(idea.id).update({name: idea.name, notes: idea.notes});
    // }
    //
    // deleteIdea(id: string): Promise<void> {
    //     return this.ideaCollection.doc(id).delete();
    // }
}
