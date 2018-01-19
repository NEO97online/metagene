import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Page } from './page';

import { FirestoreService } from '@core/firestore.service';

@Injectable()
export class PageService {

  

  pagesCol: AngularFirestoreCollection<Page>;
  pageDoc: AngularFirestoreDocument<Page>; 
  pages: Observable<Page[]>;

  constructor( private firestore: FirestoreService, public afs: AngularFirestore ) { 

    this.pagesCol = this.afs.collection('pages');
    this.pages = this.pagesCol.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Page;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getPage(id: string) {
    return this.firestore.doc$<Page>(`pages/${id}`);
  }

  getPages() {
    return this.pages;
  }

  addPage(page: Page) {
    this.pagesCol.add(page);
  }

  updatePage(page: Page) {
    this.pageDoc = this.afs.doc(`pages/${page.id}`);
    this.pageDoc.update(page);
  }

  deletePage(page: Page) {
    this.pageDoc = this.afs.doc(`pages/${page.id}`);
    this.pageDoc.delete();
  }

}
