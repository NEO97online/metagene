import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as firebase from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { PageService }  from '../page.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Page } from '../page';

import { FirestoreService } from '@core/firestore.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})

export class PageDetailComponent implements OnInit {

  page: Observable<Page>;
  pages;

 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService, private firestore: FirestoreService ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.page = this.pageService.getPage(params.id);
    })
  }

}
