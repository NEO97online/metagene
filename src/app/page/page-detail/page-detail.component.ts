import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as firebase from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { PageService }  from '../page.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Page } from '../page';

import { FirestoreService } from '@core/firestore.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})

export class PageDetailComponent implements OnInit {

  page: Page;
  pages;

 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService, private firestoreService: FirestoreService ) { }

  ngOnInit() {

    // this.pageService.getPage(this.page.id);
    // console.log(this.page);

    this.pageService.getPages().subscribe(pages => {
      this.pages = pages;
      console.log(this.page);
    });
  }

}
