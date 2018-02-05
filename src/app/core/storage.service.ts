import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class StorageService {

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, public afStore: AngularFireStorage) { }

  uploadFile(path: string, fileObj: any) {
    console.log('uploadFile');
    path = path.length > 0 ? path : fileObj.name;
    console.log(fileObj);
    return this.afStore.ref(path).put(fileObj);
  }
}